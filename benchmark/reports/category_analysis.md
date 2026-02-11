# Opcode Category Analysis

Generated on: 2026-02-11

Opcodes grouped by functional category.

## Chain: Geth

### CoinTool_App_evm - deploy

- **Total Gas Used:** 756,027

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

- **Total Gas Used:** 273,068

| Category     | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                             | 225,700   | 24         | 89.8%        | 82.7%       |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 9,323     | 3,147      | 3.7%         | 3.4%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 7,403     | 1,326      | 2.9%         | 2.7%        |
| Events       | LOG3                                                                                                                                                                                      | 2,268     | 1          | 0.9%         | 0.8%        |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 1,656     | 552        | 0.7%         | 0.6%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 1,581     | 527        | 0.6%         | 0.6%        |
| Arithmetic   | ADD, SUB                                                                                                                                                                                  | 1,470     | 490        | 0.6%         | 0.5%        |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 1,125     | 336        | 0.4%         | 0.4%        |
| Crypto       | KECCAK256                                                                                                                                                                                 | 690       | 17         | 0.3%         | 0.3%        |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 72        | 15         | 0.0%         | 0.0%        |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                         | 10        | 5          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                 | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                                                                                                                                    | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - register_with_duration

- **Total Gas Used:** 275,065

| Category     | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                             | 228,500   | 24         | 90.2%        | 83.1%       |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 9,017     | 3,044      | 3.6%         | 3.3%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 7,084     | 1,268      | 2.8%         | 2.6%        |
| Events       | LOG3                                                                                                                                                                                      | 2,268     | 1          | 0.9%         | 0.8%        |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 1,602     | 534        | 0.6%         | 0.6%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 1,509     | 503        | 0.6%         | 0.5%        |
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

- **Total Gas Used:** 112,683

| Category     | Opcodes Used                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Code         | CODECOPY                              | 60        | 1          | 54.1%        | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 27        | 9          | 24.3%        | 0.0%        |
| Memory       | MSTORE                                | 12        | 1          | 10.8%        | 0.0%        |
| Control Flow | JUMPI                                 | 10        | 1          | 9.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                             | 2         | 1          | 1.8%         | 0.0%        |
| Return       | RETURN                                | 0         | 1          | 0.0%         | 0.0%        |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 47,664

| Category     | Opcodes Used                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 11,636    | 3,979      | 44.0%        | 24.4%       |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 10,903    | 1,883      | 41.2%        | 22.9%       |
| Bitwise      | AND, NOT, SHR                                                   | 1,863     | 621        | 7.0%         | 3.9%        |
| Arithmetic   | ADD, SUB                                                        | 1,227     | 409        | 4.6%         | 2.6%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                         | 807       | 269        | 3.0%         | 1.7%        |
| Memory       | MSTORE                                                          | 12        | 1          | 0.0%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 10        | 4          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                            | 0         | 1          | 0.0%         | 0.0%        |


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

- **Total Gas Used:** 152,967

| Category     | Opcodes Used                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Code         | CODECOPY                              | 96        | 1          | 65.3%        | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 27        | 9          | 18.4%        | 0.0%        |
| Memory       | MSTORE                                | 12        | 1          | 8.2%         | 0.0%        |
| Control Flow | JUMPI                                 | 10        | 1          | 6.8%         | 0.0%        |
| Ether/Gas    | CALLVALUE                             | 2         | 1          | 1.4%         | 0.0%        |
| Return       | RETURN                                | 0         | 1          | 0.0%         | 0.0%        |


### SimpleToken_evm - mint

- **Total Gas Used:** 68,105

| Category     | Opcodes Used                                                                                      | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                     | 44,200    | 4          | 95.2%        | 64.9%       |
| Events       | LOG3                                                                                              | 1,756     | 1          | 3.8%         | 2.6%        |
| Stack        | DUP1, DUP2, DUP3, DUP5, DUP6, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 213       | 72         | 0.5%         | 0.3%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                             | 136       | 22         | 0.3%         | 0.2%        |
| Crypto       | KECCAK256                                                                                         | 42        | 1          | 0.1%         | 0.1%        |
| Memory       | MLOAD, MSTORE                                                                                     | 30        | 5          | 0.1%         | 0.0%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                           | 21        | 7          | 0.0%         | 0.0%        |
| Arithmetic   | ADD, SUB                                                                                          | 18        | 6          | 0.0%         | 0.0%        |
| Bitwise      | AND, NOT, SHL, SHR                                                                                | 18        | 6          | 0.0%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                        | 13        | 5          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                         | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                              | 0         | 1          | 0.0%         | 0.0%        |


### SimpleToken_evm - transfer

- **Total Gas Used:** 46,257

| Category     | Opcodes Used                                                            | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ----------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                           | 27,100    | 4          | 92.2%        | 58.6%       |
| Events       | LOG3                                                                    | 1,756     | 1          | 6.0%         | 3.8%        |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 199       | 69         | 0.7%         | 0.4%        |
| Crypto       | KECCAK256                                                               | 126       | 3          | 0.4%         | 0.3%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                   | 100       | 14         | 0.3%         | 0.2%        |
| Memory       | MLOAD, MSTORE                                                           | 42        | 9          | 0.1%         | 0.1%        |
| Comparison   | EQ, ISZERO, LT, SLT                                                     | 21        | 7          | 0.1%         | 0.0%        |
| Arithmetic   | ADD, SUB                                                                | 18        | 6          | 0.1%         | 0.0%        |
| Bitwise      | AND, NOT, SHL, SHR                                                      | 18        | 6          | 0.1%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                              | 13        | 5          | 0.0%         | 0.0%        |
| Context      | CALLER                                                                  | 6         | 3          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                               | 2         | 1          | 0.0%         | 0.0%        |
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

- **Total Gas Used:** 22,233,426
- **Base Call Weight:** ref_time=1,568,628,607, proof_size=6,934
- **Total Weight:** ref_time=1,812,498,168, proof_size=27,480
- **Weight Consumed:** ref_time=243,869,561 (13.5% of total), proof_size=20,546

| Category   | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | SLOAD, SSTORE                                | 57,596    | 2          | 239,765,013 | 20,546     | 98.3%         | 100.0%          |
| Stack      | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 27        | 31         | 1,405,760   | 0          | 0.6%          | 0.0%            |
| Code       | CODECOPY                                     | 23        | 1          | 1,129,668   | 0          | 0.5%          | 0.0%            |
| Context    | ADDRESS, ORIGIN                              | 15        | 2          | 744,000     | 0          | 0.3%          | 0.0%            |
| Memory     | MLOAD, MSTORE                                | 8         | 8          | 366,720     | 0          | 0.2%          | 0.0%            |
| Arithmetic | ADD, SUB                                     | 5         | 6          | 275,040     | 0          | 0.1%          | 0.0%            |
| Bitwise    | AND, NOT, OR, SHL                            | 4         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Return     | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### CoinTool_App_pvm - deploy

- **Total Gas Used:** 85,031,858
- **Base Call Weight:** ref_time=1,980,057,129, proof_size=6,934
- **Total Weight:** ref_time=2,352,084,109, proof_size=27,448
- **Weight Consumed:** ref_time=372,026,980 (15.8% of total), proof_size=20,514

| Category   | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | get_storage_or_zero, set_storage_or_clear | 57,595    | 2          | 239,714,805 | 20,514     | 64.4%         | 100.0%          |
| Immutables | set_immutable_data                        | 2,049     | 1          | 102,480,992 | 0          | 27.5%         | 0.0%            |
| Calldata   | call_data_copy, call_data_size            | 17        | 2          | 826,576     | 0          | 0.2%          | 0.0%            |
| Context    | address, origin                           | 15        | 2          | 744,000     | 0          | 0.2%          | 0.0%            |
| Return     | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |


### CoinTool_App_evm - t

- **Total Gas Used:** 361,202,149
- **Base Call Weight:** ref_time=917,488,943, proof_size=9,500
- **Total Weight:** ref_time=191,611,648,659, proof_size=9,138,203
- **Weight Consumed:** ref_time=190,694,159,716 (99.5% of total), proof_size=9,128,703

| Category     | Opcodes Used                                                                                                                                                                               | Total Gas  | Call Count | ref time       | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ---------- | -------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                              | 17,800,776 | 753        | 92,759,125,670 | 7,737,953  | 48.6%         | 84.8%           |
| Creation     | CREATE2                                                                                                                                                                                    | 967,802    | 50         | 48,390,686,900 | 341,450    | 25.4%         | 3.7%            |
| Calls        | CALL, DELEGATECALL                                                                                                                                                                         | 842,101    | 200        | 42,112,758,100 | 1,049,300  | 22.1%         | 11.5%           |
| Crypto       | KECCAK256                                                                                                                                                                                  | 46,831     | 154        | 2,341,668,102  | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH12, PUSH2, PUSH20, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 30,418     | 33,594     | 1,520,757,280  | 0          | 0.8%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                       | 22,181     | 50         | 1,108,976,600  | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                      | 20,128     | 9,751      | 1,005,867,120  | 0          | 0.5%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                                                             | 8,033      | 250        | 401,750,000    | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                    | 4,498      | 4,923      | 225,670,320    | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                                                                                                                         | 4,010      | 4,233      | 200,152,720    | 0          | 0.1%          | 0.0%            |
| Context      | ADDRESS, CALLER, ORIGIN, TIMESTAMP                                                                                                                                                         | 3,488      | 454        | 174,654,000    | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                              | 2,585      | 2,813      | 128,947,920    | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                     | 2,356      | 2,562      | 117,442,080    | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                   | 2,335      | 1,213      | 117,016,128    | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                                                                                                         | 1,651      | 200        | 82,429,600     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                                                             | 123        | 200        | 6,112,000      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                                                               | 0          | 251        | 0              | 0          | 0.0%          | 0.0%            |


### CoinTool_App_pvm - t

- **Total Gas Used:** 542,995,370
- **Base Call Weight:** ref_time=917,488,943, proof_size=9,500
- **Total Weight:** ref_time=119,832,667,856, proof_size=10,828,951
- **Weight Consumed:** ref_time=118,915,178,913 (99.2% of total), proof_size=10,819,451

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time       | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | -------------- | ---------- | ------------- | --------------- |
| Calls       | call_evm, delegate_call_evm                    | 1,056,014 | 200        | 52,805,487,750 | 8,272,350  | 44.4%         | 76.5%           |
| Creation    | instantiate                                    | 525,208   | 50         | 26,261,623,050 | 375,200    | 22.1%         | 3.5%            |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 266,420   | 153        | 10,681,026,766 | 1,572,521  | 9.0%          | 14.5%           |
| Immutables  | get_immutable_data, set_immutable_data         | 197,792   | 200        | 9,889,532,350  | 570,150    | 8.3%          | 5.3%            |
| Crypto      | hash_keccak_256                                | 31,614    | 104        | 1,580,682,252  | 0          | 1.3%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 8,032     | 250        | 401,750,000    | 0          | 0.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 6,306     | 810        | 315,406,936    | 0          | 0.3%          | 0.0%            |
| Context     | address, caller, now, origin                   | 2,285     | 304        | 114,204,000    | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 2,127     | 201        | 106,422,465    | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_size                               | 1,594     | 250        | 79,750,000     | 0          | 0.1%          | 0.0%            |


### DocumentAccessManagement_evm - configurePublicAccess

- **Total Gas Used:** 535,917
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=1,460,060,086, proof_size=60,046
- **Weight Consumed:** ref_time=546,133,646 (37.4% of total), proof_size=51,413

| Category     | Opcodes Used                                                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                        | 61,747    | 5          | 447,259,170 | 51,413     | 81.9%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                            | 1,218     | 4          | 60,878,868  | 0          | 11.1%         | 0.0%            |
| Events       | LOG2                                                                                                                 | 275       | 1          | 13,751,564  | 0          | 2.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 215       | 238        | 10,741,840  | 0          | 2.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                | 146       | 61         | 7,288,560   | 0          | 1.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                              | 36        | 40         | 1,833,600   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                               | 25        | 29         | 1,329,360   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                             | 18        | 19         | 870,960     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                        | 15        | 17         | 779,280     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                               | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                            | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                           | 5         | 6          | 244,480     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                 | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - configurePublicAccess

- **Total Gas Used:** 540,989
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=1,713,641,223, proof_size=149,890
- **Weight Consumed:** ref_time=799,714,783 (46.7% of total), proof_size=141,257

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 61,744    | 5          | 447,208,962 | 51,381     | 55.9%         | 36.4%           |
| Crypto    | hash_keccak_256                           | 1,218     | 4          | 60,878,868  | 0          | 7.6%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 1.7%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 35        | 5          | 1,702,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - createDocument

- **Total Gas Used:** 1,518,968
- **Base Call Weight:** ref_time=916,712,342, proof_size=9,311
- **Total Weight:** ref_time=4,252,606,438, proof_size=286,762
- **Weight Consumed:** ref_time=3,335,894,096 (78.4% of total), proof_size=277,451

| Category     | Opcodes Used                                                                                                                                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                                                | 589,691   | 27         | 3,084,680,841 | 277,451    | 92.5%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                                                                                    | 2,733     | 9          | 136,750,701   | 0          | 4.1%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                                                                                         | 1,118     | 1          | 55,891,404    | 0          | 1.7%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP14, SWAP15, SWAP16, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 583       | 647        | 29,077,840    | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                                        | 255       | 126        | 12,942,160    | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                                                       | 99        | 106        | 4,859,040     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                                                     | 69        | 72         | 3,300,480     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                                                      | 59        | 62         | 2,842,080     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                                                | 48        | 54         | 2,475,360     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                                                     | 33        | 16         | 1,571,226     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                                            | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                                                    | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                                                                         | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - createDocument

- **Total Gas Used:** 1,535,936
- **Base Call Weight:** ref_time=916,712,342, proof_size=9,311
- **Total Weight:** ref_time=5,100,985,236, proof_size=396,961
- **Weight Consumed:** ref_time=4,184,272,894 (82.0% of total), proof_size=387,650

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 594,522   | 29         | 3,326,065,110 | 297,774    | 79.5%         | 76.8%           |
| Crypto    | hash_keccak_256                                | 2,734     | 9          | 136,750,701   | 0          | 3.3%          | 0.0%            |
| Events    | deposit_event                                  | 1,117     | 1          | 55,891,404    | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 95        | 13         | 4,760,158     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 16        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 10        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - createDocument2

- **Total Gas Used:** 1,466,169
- **Base Call Weight:** ref_time=916,712,342, proof_size=9,311
- **Total Weight:** ref_time=4,252,630,950, proof_size=286,794
- **Weight Consumed:** ref_time=3,335,918,608 (78.4% of total), proof_size=277,483

| Category     | Opcodes Used                                                                                                                                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                                                | 536,891   | 27         | 3,084,705,353 | 277,483    | 92.5%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                                                                                    | 2,734     | 9          | 136,750,701   | 0          | 4.1%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                                                                                         | 1,118     | 1          | 55,891,404    | 0          | 1.7%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP14, SWAP15, SWAP16, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 584       | 647        | 29,077,840    | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                                        | 256       | 126        | 12,942,160    | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                                                       | 98        | 106        | 4,859,040     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                                                     | 69        | 72         | 3,300,480     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                                                      | 58        | 62         | 2,842,080     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                                                | 47        | 54         | 2,475,360     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                                                     | 33        | 16         | 1,571,226     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                                            | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                                                    | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                                                                         | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - createDocument2

- **Total Gas Used:** 1,483,137
- **Base Call Weight:** ref_time=916,712,342, proof_size=9,311
- **Total Weight:** ref_time=5,101,059,956, proof_size=397,025
- **Weight Consumed:** ref_time=4,184,347,614 (82.0% of total), proof_size=387,714

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 541,721   | 29         | 3,326,139,830 | 297,838    | 79.5%         | 76.8%           |
| Crypto    | hash_keccak_256                                | 2,733     | 9          | 136,750,701   | 0          | 3.3%          | 0.0%            |
| Events    | deposit_event                                  | 1,118     | 1          | 55,891,404    | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 95        | 13         | 4,760,158     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 16        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - deploy

- **Total Gas Used:** 36,264,066
- **Base Call Weight:** ref_time=1,667,177,109, proof_size=6,934
- **Total Weight:** ref_time=1,670,511,411, proof_size=6,934
- **Weight Consumed:** ref_time=3,334,302 (0.2% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 48        | 1          | 2,404,102 | 0          | 72.1%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 9         | 9          | 412,560   | 0          | 12.4%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 319,000   | 0          | 9.6%          | 0.0%            |
| Control Flow | JUMPI                                 | 3         | 1          | 152,800   | 0          | 4.6%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 45,840    | 0          | 1.4%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - deploy

- **Total Gas Used:** 218,048,583
- **Base Call Weight:** ref_time=2,939,840,725, proof_size=6,934
- **Total Weight:** ref_time=2,950,335,262, proof_size=6,934
- **Weight Consumed:** ref_time=10,494,537 (0.4% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 17        | 2          | 826,576  | 0          | 7.9%          | 0.0%            |
| Return    | seal_return                    | 10        | 1          | 529,465  | 0          | 5.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 319,000  | 0          | 3.0%          | 0.0%            |


### DocumentAccessManagement_evm - grantAccessWithShare

- **Total Gas Used:** 1,291,996
- **Base Call Weight:** ref_time=916,317,878, proof_size=9,215
- **Total Weight:** ref_time=4,024,012,560, proof_size=276,473
- **Weight Consumed:** ref_time=3,107,694,682 (77.2% of total), proof_size=267,258

| Category     | Opcodes Used                                                                                                                                                                                            | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                           | 425,856   | 26         | 2,812,669,484 | 267,258    | 90.5%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                               | 4,252     | 14         | 212,622,534   | 0          | 6.8%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                                    | 612       | 1          | 30,607,500    | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 504       | 564        | 25,074,480    | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                   | 253       | 137        | 12,483,760    | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                  | 88        | 99         | 4,538,160     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                | 55        | 59         | 2,704,560     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                 | 46        | 54         | 2,475,360     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                           | 39        | 45         | 2,062,800     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                       | 23        | 3          | 1,153,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                              | 11        | 13         | 550,080       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                               | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                    | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - grantAccessWithShare

- **Total Gas Used:** 1,302,942
- **Base Call Weight:** ref_time=916,317,878, proof_size=9,215
- **Total Weight:** ref_time=4,571,281,723, proof_size=366,286
- **Weight Consumed:** ref_time=3,654,963,845 (80.0% of total), proof_size=357,071

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 425,893   | 26         | 2,814,565,476 | 267,195    | 77.0%         | 74.8%           |
| Crypto    | hash_keccak_256                           | 4,253     | 14         | 212,622,534   | 0          | 5.8%          | 0.0%            |
| Events    | deposit_event                             | 612       | 1          | 30,607,500    | 0          | 0.8%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 74        | 11         | 3,760,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 23        | 3          | 1,153,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - registerKeys

- **Total Gas Used:** 643,747
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=1,571,558,950, proof_size=49,693
- **Weight Consumed:** ref_time=657,632,510 (41.8% of total), proof_size=41,060

| Category     | Opcodes Used                                                                                                                                           | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                          | 170,019   | 4          | 580,965,601 | 41,060     | 88.3%         | 100.0%          |
| Events       | LOG2                                                                                                                                                   | 781       | 1          | 39,035,468  | 0          | 5.9%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                              | 304       | 1          | 15,219,717  | 0          | 2.3%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP8 | 201       | 220        | 10,038,960  | 0          | 1.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                  | 113       | 44         | 5,775,840   | 0          | 0.9%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                | 32        | 34         | 1,558,560   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                      | 23        | 3          | 1,153,000   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                 | 21        | 24         | 1,100,160   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                               | 21        | 21         | 962,640     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                          | 18        | 18         | 825,120     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                              | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                             | 4         | 6          | 244,480     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - registerKeys

- **Total Gas Used:** 653,952
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=2,081,776,278, proof_size=160,180
- **Weight Consumed:** ref_time=1,167,849,838 (56.1% of total), proof_size=151,547

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 174,856   | 6          | 822,809,454 | 61,671     | 70.5%         | 40.7%           |
| Events    | deposit_event                             | 781       | 1          | 39,035,468  | 0          | 3.3%          | 0.0%            |
| Crypto    | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,702,000   | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 23        | 3          | 1,153,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - revokeAccess

- **Total Gas Used:** 290,097
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=5,009,034,144, proof_size=409,872
- **Weight Consumed:** ref_time=4,095,107,704 (81.8% of total), proof_size=401,239

| Category     | Opcodes Used                                                                                                         | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                        | 74,242    | 39         | 3,711,892,495 | 401,239    | 90.6%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                            | 6,363     | 21         | 318,366,921   | 0          | 7.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 490       | 556        | 24,509,120    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                | 278       | 147        | 14,149,280    | 0          | 0.3%          | 0.0%            |
| Events       | LOG3                                                                                                                 | 275       | 1          | 13,751,564    | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                               | 73        | 80         | 3,667,200     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                              | 65        | 70         | 3,208,800     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                             | 39        | 42         | 1,925,280     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                        | 38        | 40         | 1,833,600     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                               | 18        | 2          | 806,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                            | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                           | 5         | 6          | 244,480       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                 | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - revokeAccess

- **Total Gas Used:** 302,198
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=5,614,067,767, proof_size=500,362
- **Weight Consumed:** ref_time=4,700,141,327 (83.7% of total), proof_size=491,729

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 74,499    | 39         | 3,724,953,375 | 401,853    | 79.3%         | 81.7%           |
| Crypto    | hash_keccak_256                           | 6,366     | 21         | 318,366,921   | 0          | 6.8%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564    | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 35        | 5          | 1,702,000     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 16        | 2          | 806,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - transferOwnership

- **Total Gas Used:** 698,288
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=4,298,612,901, proof_size=337,753
- **Weight Consumed:** ref_time=3,384,686,461 (78.7% of total), proof_size=329,120

| Category     | Opcodes Used                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                   | 270,315   | 32         | 3,126,295,759 | 329,120    | 92.4%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                       | 4,247     | 14         | 212,395,782   | 0          | 6.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP7 | 391       | 439        | 19,359,760    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                           | 200       | 101        | 10,130,640    | 0          | 0.3%          | 0.0%            |
| Events       | LOG4                                                                                                                                            | 106       | 1          | 5,323,596     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                          | 70        | 79         | 3,621,360     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                         | 47        | 50         | 2,292,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                        | 35        | 35         | 1,604,400     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                   | 28        | 33         | 1,512,720     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                               | 23        | 3          | 1,153,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                       | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                      | 4         | 6          | 244,480       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                            | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - transferOwnership

- **Total Gas Used:** 710,280
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=4,898,180,804, proof_size=437,855
- **Weight Consumed:** ref_time=3,984,254,364 (81.3% of total), proof_size=429,222

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 271,694   | 33         | 3,197,382,166 | 339,346    | 80.3%         | 79.1%           |
| Crypto    | hash_keccak_256                           | 4,553     | 15         | 227,615,499   | 0          | 5.7%          | 0.0%            |
| Events    | deposit_event                             | 106       | 1          | 5,323,596     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,702,000     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now                               | 23        | 3          | 1,153,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - updateDocument

- **Total Gas Used:** 944,455
- **Base Call Weight:** ref_time=916,712,342, proof_size=9,311
- **Total Weight:** ref_time=1,926,931,145, proof_size=91,623
- **Weight Consumed:** ref_time=1,010,218,803 (52.4% of total), proof_size=82,312

| Category     | Opcodes Used                                                                                                                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                       | 17,154    | 8          | 857,698,013 | 82,312     | 84.9%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                           | 1,522     | 5          | 76,098,585  | 0          | 7.5%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                | 781       | 1          | 39,035,468  | 0          | 3.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 335       | 383        | 17,128,880  | 0          | 1.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                               | 208       | 97         | 10,420,960  | 0          | 1.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                             | 50        | 54         | 2,475,360   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                              | 42        | 44         | 2,016,960   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                            | 37        | 38         | 1,741,920   | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                            | 23        | 15         | 1,091,213   | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                       | 22        | 22         | 1,008,480   | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                   | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                           | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - updateDocument

- **Total Gas Used:** 951,464
- **Base Call Weight:** ref_time=916,712,342, proof_size=9,311
- **Total Weight:** ref_time=2,277,407,189, proof_size=181,499
- **Weight Consumed:** ref_time=1,360,694,847 (59.7% of total), proof_size=172,188

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 17,156    | 8          | 857,698,013 | 82,312     | 63.0%         | 47.8%           |
| Crypto    | hash_keccak_256                                | 1,826     | 6          | 91,318,302  | 0          | 6.7%          | 0.0%            |
| Events    | deposit_event                                  | 781       | 1          | 39,035,468  | 0          | 2.9%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 92        | 13         | 4,603,079   | 0          | 0.3%          | 0.0%            |
| Context   | caller, now                                    | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - createSubdomain

- **Total Gas Used:** 1,407,455
- **Base Call Weight:** ref_time=915,911,087, proof_size=9,116
- **Total Weight:** ref_time=5,176,955,373, proof_size=286,567
- **Weight Consumed:** ref_time=4,261,044,286 (82.3% of total), proof_size=277,451

| Category     | Opcodes Used                                                                                                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                         | 589,692   | 27         | 3,084,680,841 | 277,451    | 72.4%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                                                             | 6,676     | 22         | 333,742,530   | 0          | 7.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 6,570     | 7,234      | 328,581,120   | 0          | 7.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                 | 5,385     | 3,200      | 269,554,480   | 0          | 6.3%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                                                                          | 1,174     | 1,275      | 58,446,000    | 0          | 1.4%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                              | 1,150     | 1,249      | 57,254,160    | 0          | 1.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                               | 1,068     | 1,166      | 53,449,440    | 0          | 1.3%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                                                                                                | 721       | 788        | 36,121,920    | 0          | 0.8%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                                  | 612       | 1          | 30,607,500    | 0          | 0.7%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                              | 144       | 34         | 7,162,763     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                     | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                             | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - createSubdomain

- **Total Gas Used:** 1,536,127
- **Base Call Weight:** ref_time=915,911,087, proof_size=9,116
- **Total Weight:** ref_time=11,610,528,180, proof_size=382,494
- **Weight Consumed:** ref_time=10,694,617,093 (92.1% of total), proof_size=373,378

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 594,562   | 29         | 3,328,320,270 | 297,935    | 31.1%         | 79.8%           |
| Crypto    | hash_keccak_256                                | 6,675     | 22         | 333,742,530   | 0          | 3.1%          | 0.0%            |
| Events    | deposit_event                                  | 612       | 1          | 30,607,500    | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 184       | 21         | 9,218,241     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 10        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - createSubdomain

- **Total Gas Used:** 955,007
- **Base Call Weight:** ref_time=915,911,087, proof_size=9,116
- **Total Weight:** ref_time=2,944,556,095, proof_size=83,914
- **Weight Consumed:** ref_time=2,028,645,008 (68.9% of total), proof_size=74,798

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 133,217   | 5          | 650,781,315 | 51,678     | 32.1%         | 69.1%           |
| Crypto   | hash_keccak_256          | 5,142     | 17         | 257,208,156 | 0          | 12.7%         | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,323,596   | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - deploy

- **Total Gas Used:** 33,343,732
- **Base Call Weight:** ref_time=1,646,729,917, proof_size=6,934
- **Total Weight:** ref_time=1,649,801,943, proof_size=6,934
- **Weight Consumed:** ref_time=3,072,026 (0.2% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 43        | 1          | 2,141,826 | 0          | 69.7%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 9         | 9          | 412,560   | 0          | 13.4%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 319,000   | 0          | 10.4%         | 0.0%            |
| Control Flow | JUMPI                                 | 3         | 1          | 152,800   | 0          | 5.0%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 45,840    | 0          | 1.5%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - deploy

- **Total Gas Used:** 185,425,435
- **Base Call Weight:** ref_time=2,711,424,067, proof_size=6,934
- **Total Weight:** ref_time=2,721,918,604, proof_size=6,934
- **Weight Consumed:** ref_time=10,494,537 (0.4% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 16        | 2          | 826,576  | 0          | 7.9%          | 0.0%            |
| Return    | seal_return                    | 10        | 1          | 529,465  | 0          | 5.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 319,000  | 0          | 3.0%          | 0.0%            |


### dotns_rust - deploy

- **Total Gas Used:** 67,154,711
- **Base Call Weight:** ref_time=1,883,360,269, proof_size=6,934
- **Total Weight:** ref_time=1,884,716,168, proof_size=6,934
- **Weight Consumed:** ref_time=1,355,899 (0.1% of total), proof_size=0

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return  | 11        | 1          | 529,465  | 0          | 39.0%         | 0.0%            |


### DotNS_evm - register

- **Total Gas Used:** 1,132,499
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=4,429,144,532, proof_size=255,278
- **Weight Consumed:** ref_time=3,514,835,955 (79.4% of total), proof_size=246,552

| Category     | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                             | 585,541   | 24         | 2,877,144,188 | 246,552    | 81.9%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                 | 5,162     | 17         | 258,012,417   | 0          | 7.3%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 2,861     | 3,154      | 142,761,040   | 0          | 4.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 2,253     | 1,327      | 113,270,640   | 0          | 3.2%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                      | 612       | 1          | 30,607,500    | 0          | 0.9%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 510       | 553        | 25,349,520    | 0          | 0.7%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 481       | 529        | 24,249,360    | 0          | 0.7%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                  | 453       | 490        | 22,461,600    | 0          | 0.6%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 313       | 336        | 15,493,920    | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 57        | 15         | 2,833,238     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                         | 40        | 5          | 1,959,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                 | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                    | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - register

- **Total Gas Used:** 1,191,459
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=7,377,144,941, proof_size=351,270
- **Weight Consumed:** ref_time=6,462,836,364 (87.6% of total), proof_size=342,544

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 590,459   | 26         | 3,122,880,441 | 267,101    | 48.3%         | 78.0%           |
| Crypto    | hash_keccak_256                                | 5,158     | 17         | 258,012,417   | 0          | 4.0%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,607,500    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 83        | 10         | 4,196,858     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 40        | 5          | 1,959,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - register

- **Total Gas Used:** 791,332
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=2,400,804,491, proof_size=72,874
- **Weight Consumed:** ref_time=1,486,495,914 (61.9% of total), proof_size=64,148

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 239,021   | 4          | 581,082,307 | 41,028     | 39.1%         | 64.0%           |
| Crypto   | hash_keccak_256          | 3,933     | 13         | 196,662,330 | 0          | 13.2%         | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,323,596   | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - register_with_duration

- **Total Gas Used:** 1,132,226
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=4,415,487,556, proof_size=255,310
- **Weight Consumed:** ref_time=3,501,178,979 (79.3% of total), proof_size=246,584

| Category     | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                             | 585,544   | 24         | 2,877,186,684 | 246,584    | 82.2%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                 | 5,160     | 17         | 258,008,874   | 0          | 7.4%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 2,758     | 3,037      | 137,474,160   | 0          | 3.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 2,167     | 1,267      | 108,090,720   | 0          | 3.1%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                      | 612       | 1          | 30,607,500    | 0          | 0.9%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 485       | 533        | 24,432,720    | 0          | 0.7%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 450       | 501        | 22,965,840    | 0          | 0.7%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                  | 429       | 473        | 21,682,320    | 0          | 0.6%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 298       | 323        | 14,898,000    | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 59        | 15         | 2,832,629     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                         | 47        | 6          | 2,306,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                 | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                    | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - register_with_duration

- **Total Gas Used:** 1,189,167
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=7,262,551,219, proof_size=351,172
- **Weight Consumed:** ref_time=6,348,242,642 (87.4% of total), proof_size=342,446

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 590,376   | 26         | 3,118,721,577 | 267,003    | 49.1%         | 78.0%           |
| Crypto    | hash_keccak_256                                | 5,158     | 17         | 258,008,874   | 0          | 4.1%          | 0.0%            |
| Events    | deposit_event                                  | 612       | 1          | 30,607,500    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 83        | 10         | 4,196,519     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 47        | 6          | 2,306,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - register_with_duration

- **Total Gas Used:** 684,110
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=2,399,699,298, proof_size=72,914
- **Weight Consumed:** ref_time=1,485,390,721 (61.9% of total), proof_size=64,188

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 131,822   | 4          | 581,112,947 | 41,068     | 39.1%         | 64.0%           |
| Crypto   | hash_keccak_256          | 3,933     | 13         | 196,658,787 | 0          | 13.2%         | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,323,596   | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 14        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - release

- **Total Gas Used:** 13,704
- **Base Call Weight:** ref_time=913,914,113, proof_size=8,630
- **Total Weight:** ref_time=4,489,363,202, proof_size=276,112
- **Weight Consumed:** ref_time=3,575,449,089 (79.6% of total), proof_size=267,482

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 60,310    | 26         | 3,015,581,402 | 267,482    | 84.3%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                             | 5,472     | 18         | 273,455,343   | 0          | 7.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 2,085     | 2,306      | 104,392,960   | 0          | 2.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 1,688     | 998        | 84,299,760    | 0          | 2.4%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 612       | 1          | 30,607,500    | 0          | 0.9%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 370       | 406        | 18,611,040    | 0          | 0.5%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 353       | 386        | 17,694,240    | 0          | 0.5%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 319       | 349        | 15,998,160    | 0          | 0.4%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 231       | 249        | 11,414,160    | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 46        | 13         | 2,297,992     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                | 9         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - release

- **Total Gas Used:** 55,283
- **Base Call Weight:** ref_time=913,914,113, proof_size=8,630
- **Total Weight:** ref_time=6,568,314,442, proof_size=352,654
- **Weight Consumed:** ref_time=5,654,400,329 (86.1% of total), proof_size=344,024

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 60,791    | 26         | 3,039,505,922 | 268,581    | 53.8%         | 78.1%           |
| Crypto    | hash_keccak_256                                | 5,469     | 18         | 273,455,343   | 0          | 4.8%          | 0.0%            |
| Events    | deposit_event                                  | 612       | 1          | 30,607,500    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 67        | 8          | 3,357,056     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - release

- **Total Gas Used:** 416,485
- **Base Call Weight:** ref_time=913,914,113, proof_size=8,630
- **Total Weight:** ref_time=1,758,439,495, proof_size=52,970
- **Weight Consumed:** ref_time=844,525,382 (48.0% of total), proof_size=44,340

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,810     | 2          | 240,521,076 | 21,220     | 28.5%         | 47.9%           |
| Crypto   | hash_keccak_256          | 2,119     | 7          | 105,871,935 | 0          | 12.5%         | 0.0%            |
| Events   | deposit_event            | 106       | 1          | 5,323,596   | 0          | 0.6%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - renew

- **Total Gas Used:** 548,466
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=1,627,466,752, proof_size=49,882
- **Weight Consumed:** ref_time=713,158,175 (43.8% of total), proof_size=41,156

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 7,562     | 4          | 378,118,963 | 41,156     | 53.0%         | 100.0%          |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 1,779     | 1,955      | 88,899,040  | 0          | 12.5%         | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                             | 1,514     | 5          | 75,705,312  | 0          | 10.6%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 1,451     | 862        | 72,396,640  | 0          | 10.2%         | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 781       | 1          | 39,035,468  | 0          | 5.5%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 331       | 362        | 16,594,080  | 0          | 2.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 312       | 346        | 15,860,640  | 0          | 2.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 277       | 301        | 13,797,840  | 0          | 1.9%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 189       | 205        | 9,397,200   | 0          | 1.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 48        | 13         | 2,312,460   | 0          | 0.3%          | 0.0%            |
| Context      | TIMESTAMP                                                                                                                                             | 6         | 1          | 347,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - renew

- **Total Gas Used:** 582,235
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=3,315,941,216, proof_size=125,325
- **Weight Consumed:** ref_time=2,401,632,639 (72.4% of total), proof_size=116,599

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 7,562     | 4          | 378,118,963 | 41,156     | 15.7%         | 35.3%           |
| Crypto    | hash_keccak_256                                | 1,513     | 5          | 75,705,312  | 0          | 3.2%          | 0.0%            |
| Events    | deposit_event                                  | 780       | 1          | 39,035,468  | 0          | 1.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 74        | 9          | 3,699,604   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context   | now                                            | 7         | 1          | 347,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### dotns_rust - renew

- **Total Gas Used:** 553,515
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=1,879,958,265, proof_size=53,066
- **Weight Consumed:** ref_time=965,649,688 (51.4% of total), proof_size=44,340

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,815     | 2          | 240,719,462 | 21,220     | 24.9%         | 47.9%           |
| Crypto   | hash_keccak_256          | 2,118     | 7          | 105,886,107 | 0          | 11.0%         | 0.0%            |
| Events   | deposit_event            | 275       | 1          | 13,751,564  | 0          | 1.4%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context  | now                      | 7         | 1          | 347,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setAddress

- **Total Gas Used:** 549,849
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=1,696,631,090, proof_size=60,171
- **Weight Consumed:** ref_time=782,322,513 (46.1% of total), proof_size=51,445

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 8,946     | 5          | 447,283,682 | 51,445     | 57.2%         | 100.0%          |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 1,708     | 1,887      | 85,812,480  | 0          | 11.0%         | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                             | 1,514     | 5          | 75,701,769  | 0          | 9.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 1,399     | 822        | 69,524,000  | 0          | 8.9%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 949       | 1          | 47,463,436  | 0          | 6.1%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 314       | 343        | 15,723,120  | 0          | 2.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 303       | 332        | 15,218,880  | 0          | 1.9%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 266       | 288        | 13,201,920  | 0          | 1.7%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 181       | 196        | 8,984,640   | 0          | 1.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 45        | 13         | 2,312,054   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                                                                                | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setAddress

- **Total Gas Used:** 583,708
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=3,389,574,121, proof_size=145,903
- **Weight Consumed:** ref_time=2,475,265,544 (73.0% of total), proof_size=137,177

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 10,328    | 6          | 516,448,401 | 61,734     | 20.9%         | 45.0%           |
| Crypto    | hash_keccak_256                                | 1,514     | 5          | 75,701,769  | 0          | 3.1%          | 0.0%            |
| Events    | deposit_event                                  | 949       | 1          | 47,463,436  | 0          | 1.9%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 74        | 9          | 3,699,378   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 9         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### dotns_rust - setAddress

- **Total Gas Used:** 553,771
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=1,892,744,940, proof_size=53,066
- **Weight Consumed:** ref_time=978,436,363 (51.7% of total), proof_size=44,340

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,815     | 2          | 240,719,462 | 21,220     | 24.6%         | 47.9%           |
| Crypto   | hash_keccak_256          | 2,118     | 7          | 105,925,080 | 0          | 10.8%         | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,323,596   | 0          | 0.5%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setMetadata

- **Total Gas Used:** 601,070
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=1,617,684,531, proof_size=49,850
- **Weight Consumed:** ref_time=703,375,954 (43.5% of total), proof_size=41,124

| Category     | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                         | 60,361    | 4          | 378,094,451 | 41,124     | 53.8%         | 100.0%          |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 1,690     | 1,863      | 84,712,320  | 0          | 12.0%         | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                             | 1,514     | 5          | 75,701,769  | 0          | 10.8%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 1,403     | 822        | 69,860,160  | 0          | 9.9%          | 0.0%            |
| Events       | LOG2                                                                                                                                                  | 780       | 1          | 39,035,468  | 0          | 5.5%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 306       | 332        | 15,218,880  | 0          | 2.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                              | 301       | 326        | 14,943,840  | 0          | 2.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 268       | 293        | 13,431,120  | 0          | 1.9%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                | 177       | 195        | 8,938,800   | 0          | 1.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 45        | 14         | 2,342,614   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                                                                                | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                             | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setMetadata

- **Total Gas Used:** 633,260
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=3,227,207,245, proof_size=125,293
- **Weight Consumed:** ref_time=2,312,898,668 (71.7% of total), proof_size=116,567

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 60,361    | 4          | 378,094,451 | 41,124     | 16.3%         | 35.3%           |
| Crypto    | hash_keccak_256                                | 1,514     | 5          | 75,701,769  | 0          | 3.3%          | 0.0%            |
| Events    | deposit_event                                  | 781       | 1          | 39,035,468  | 0          | 1.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 74        | 9          | 3,699,378   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### dotns_rust - setMetadata

- **Total Gas Used:** 553,869
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=1,897,652,777, proof_size=53,066
- **Weight Consumed:** ref_time=983,344,200 (51.8% of total), proof_size=44,340

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,814     | 2          | 240,719,462 | 21,220     | 24.5%         | 47.9%           |
| Crypto   | hash_keccak_256          | 2,118     | 7          | 105,900,279 | 0          | 10.8%         | 0.0%            |
| Events   | deposit_event            | 275       | 1          | 13,751,564  | 0          | 1.4%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setSubdomainOwner

- **Total Gas Used:** 805,134
- **Base Call Weight:** ref_time=915,504,296, proof_size=9,017
- **Total Weight:** ref_time=4,760,882,014, proof_size=286,724
- **Weight Consumed:** ref_time=3,845,377,718 (80.8% of total), proof_size=277,707

| Category     | Opcodes Used                                                                                                                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                              | 55,613    | 27         | 2,780,460,708 | 277,707    | 72.3%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                  | 9,712     | 32         | 485,790,894   | 0          | 12.6%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 4,525     | 4,963      | 224,921,600   | 0          | 5.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                      | 3,581     | 2,153      | 179,876,160   | 0          | 4.7%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                               | 784       | 865        | 39,651,600    | 0          | 1.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                   | 791       | 857        | 39,284,880    | 0          | 1.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                    | 671       | 731        | 33,509,040    | 0          | 0.9%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                       | 612       | 1          | 30,607,500    | 0          | 0.8%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                              | 495       | 547        | 25,120,320    | 0          | 0.7%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                   | 101       | 26         | 5,058,484     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                                     | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                  | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                       | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setSubdomainOwner

- **Total Gas Used:** 893,077
- **Base Call Weight:** ref_time=915,504,296, proof_size=9,017
- **Total Weight:** ref_time=9,158,023,309, proof_size=372,651
- **Weight Consumed:** ref_time=8,242,519,013 (90.0% of total), proof_size=363,634

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 57,119    | 28         | 2,855,992,987 | 288,191    | 34.6%         | 79.3%           |
| Crypto    | hash_keccak_256                                | 9,718     | 32         | 485,790,894   | 0          | 5.9%          | 0.0%            |
| Events    | deposit_event                                  | 612       | 1          | 30,607,500    | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 137       | 16         | 6,882,948     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 10        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - setSubdomainOwner

- **Total Gas Used:** 771,653
- **Base Call Weight:** ref_time=915,504,296, proof_size=9,017
- **Total Weight:** ref_time=3,086,817,132, proof_size=84,521
- **Weight Consumed:** ref_time=2,171,312,836 (70.3% of total), proof_size=75,504

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 13,031    | 5          | 651,605,570 | 52,384     | 30.0%         | 69.4%           |
| Crypto   | hash_keccak_256          | 5,145     | 17         | 257,169,183 | 0          | 11.8%         | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,323,596   | 0          | 0.2%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - transfer

- **Total Gas Used:** 601,172
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=4,262,764,713, proof_size=276,112
- **Weight Consumed:** ref_time=3,348,456,136 (78.6% of total), proof_size=267,386

| Category     | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 54,223    | 26         | 2,711,253,493 | 267,386    | 81.0%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                    | 7,599     | 25         | 379,869,357   | 0          | 11.3%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 1,874     | 2,079      | 93,880,320    | 0          | 2.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 1,452     | 855        | 72,641,120    | 0          | 2.2%          | 0.0%            |
| Events       | LOG4                                                                                                                                                         | 612       | 1          | 30,607,500    | 0          | 0.9%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                 | 339       | 368        | 16,869,120    | 0          | 0.5%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                     | 313       | 338        | 15,493,920    | 0          | 0.5%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 277       | 301        | 13,797,840    | 0          | 0.4%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                       | 212       | 232        | 10,634,880    | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 46        | 13         | 2,312,054     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                       | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                         | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - transfer

- **Total Gas Used:** 641,167
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=6,262,534,782, proof_size=362,104
- **Weight Consumed:** ref_time=5,348,226,205 (85.4% of total), proof_size=353,378

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 55,774    | 27         | 2,788,882,596 | 277,935    | 52.1%         | 78.7%           |
| Crypto    | hash_keccak_256                                | 7,600     | 25         | 379,869,357   | 0          | 7.1%          | 0.0%            |
| Events    | deposit_event                                  | 612       | 1          | 30,607,500    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 74        | 9          | 3,699,378     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 10        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 9         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### dotns_rust - transfer

- **Total Gas Used:** 672,821
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=2,485,254,949, proof_size=73,580
- **Weight Consumed:** ref_time=1,570,946,372 (63.2% of total), proof_size=64,854

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 118,838   | 4          | 581,906,562 | 41,734     | 37.0%         | 64.4%           |
| Crypto   | hash_keccak_256          | 3,026     | 10         | 151,322,049 | 0          | 9.6%          | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,323,596   | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_simple

- **Total Gas Used:** 1,041,770
- **Base Call Weight:** ref_time=914,394,866, proof_size=8,747
- **Total Weight:** ref_time=4,472,678,848, proof_size=306,744
- **Weight Consumed:** ref_time=3,558,283,982 (79.6% of total), proof_size=297,997

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 490,918   | 29         | 3,425,851,989 | 297,997    | 96.3%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                            | 1,517     | 5          | 75,871,833    | 0          | 2.1%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 444       | 1          | 22,179,532    | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 351       | 381        | 17,281,680    | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 95        | 110        | 5,042,400     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 85        | 45         | 4,247,840     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 49        | 52         | 2,383,680     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 30        | 35         | 1,604,400     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 31        | 4          | 1,556,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 20        | 3          | 957,000       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 15        | 18         | 825,120       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 7         | 7          | 290,320       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_simple

- **Total Gas Used:** 1,054,364
- **Base Call Weight:** ref_time=914,394,866, proof_size=8,747
- **Total Weight:** ref_time=5,102,369,065, proof_size=361,378
- **Weight Consumed:** ref_time=4,187,974,199 (82.1% of total), proof_size=352,631

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 495,918   | 31         | 3,675,982,722 | 318,804    | 87.8%         | 90.4%           |
| Crypto    | hash_keccak_256                           | 1,518     | 5          | 75,871,833    | 0          | 1.8%          | 0.0%            |
| Events    | deposit_event                             | 444       | 1          | 22,179,532    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 41        | 6          | 2,045,000     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now                               | 31        | 4          | 1,556,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 18        | 3          | 957,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_simple

- **Total Gas Used:** 866,535
- **Base Call Weight:** ref_time=914,394,866, proof_size=8,747
- **Total Weight:** ref_time=2,940,917,079, proof_size=92,996
- **Weight Consumed:** ref_time=2,026,522,213 (68.9% of total), proof_size=84,249

| Category  | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 299,653   | 7          | 1,092,715,285 | 71,815     | 53.9%         | 85.2%           |
| Crypto    | hash_keccak_256          | 3,022     | 10         | 151,137,813   | 0          | 7.5%          | 0.0%            |
| Events    | deposit_event            | 107       | 1          | 5,323,596     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_copy           | 28        | 1          | 1,422,272     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now              | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_arbiter

- **Total Gas Used:** 883,372
- **Base Call Weight:** ref_time=914,394,866, proof_size=8,747
- **Total Weight:** ref_time=4,472,794,880, proof_size=306,872
- **Weight Consumed:** ref_time=3,558,400,014 (79.6% of total), proof_size=298,125

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 332,519   | 29         | 3,425,968,021 | 298,125    | 96.3%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                            | 1,518     | 5          | 75,871,833    | 0          | 2.1%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 444       | 1          | 22,179,532    | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 345       | 381        | 17,281,680    | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 99        | 110        | 5,042,400     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 87        | 45         | 4,247,840     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 48        | 52         | 2,383,680     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 32        | 35         | 1,604,400     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 32        | 4          | 1,556,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 19        | 3          | 957,000       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 15        | 18         | 825,120       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 7         | 7          | 290,320       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_with_arbiter

- **Total Gas Used:** 895,910
- **Base Call Weight:** ref_time=914,394,866, proof_size=8,747
- **Total Weight:** ref_time=5,099,701,009, proof_size=361,505
- **Weight Consumed:** ref_time=4,185,306,143 (82.1% of total), proof_size=352,758

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 337,478   | 31         | 3,674,102,346 | 318,931    | 87.8%         | 90.4%           |
| Crypto    | hash_keccak_256                           | 1,516     | 5          | 75,871,833    | 0          | 1.8%          | 0.0%            |
| Events    | deposit_event                             | 444       | 1          | 22,179,532    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 41        | 6          | 2,045,000     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now                               | 31        | 4          | 1,556,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 18        | 3          | 957,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_with_arbiter

- **Total Gas Used:** 661,735
- **Base Call Weight:** ref_time=914,394,866, proof_size=8,747
- **Total Weight:** ref_time=2,940,941,591, proof_size=93,028
- **Weight Consumed:** ref_time=2,026,546,725 (68.9% of total), proof_size=84,281

| Category  | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 94,854    | 7          | 1,092,739,797 | 71,847     | 53.9%         | 85.2%           |
| Crypto    | hash_keccak_256          | 3,022     | 10         | 151,137,813   | 0          | 7.5%          | 0.0%            |
| Events    | deposit_event            | 106       | 1          | 5,323,596     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_copy           | 28        | 1          | 1,422,272     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now              | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_expiry

- **Total Gas Used:** 830,573
- **Base Call Weight:** ref_time=914,394,866, proof_size=8,747
- **Total Weight:** ref_time=4,472,819,392, proof_size=306,904
- **Weight Consumed:** ref_time=3,558,424,526 (79.6% of total), proof_size=298,157

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 279,719   | 29         | 3,425,992,533 | 298,157    | 96.3%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                            | 1,516     | 5          | 75,871,833    | 0          | 2.1%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 444       | 1          | 22,179,532    | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 348       | 381        | 17,281,680    | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 99        | 110        | 5,042,400     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 86        | 45         | 4,247,840     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 49        | 52         | 2,383,680     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 31        | 35         | 1,604,400     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 31        | 4          | 1,556,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 20        | 3          | 957,000       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 15        | 18         | 825,120       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 7         | 7          | 290,320       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_with_expiry

- **Total Gas Used:** 843,070
- **Base Call Weight:** ref_time=914,394,866, proof_size=8,747
- **Total Weight:** ref_time=5,097,671,193, proof_size=361,504
- **Weight Consumed:** ref_time=4,183,276,327 (82.1% of total), proof_size=352,757

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 284,642   | 31         | 3,672,072,530 | 318,930    | 87.8%         | 90.4%           |
| Crypto    | hash_keccak_256                           | 1,518     | 5          | 75,871,833    | 0          | 1.8%          | 0.0%            |
| Events    | deposit_event                             | 444       | 1          | 22,179,532    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 41        | 6          | 2,045,000     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now                               | 31        | 4          | 1,556,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 18        | 3          | 957,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_with_expiry

- **Total Gas Used:** 661,735
- **Base Call Weight:** ref_time=914,394,866, proof_size=8,747
- **Total Weight:** ref_time=2,940,941,591, proof_size=93,028
- **Weight Consumed:** ref_time=2,026,546,725 (68.9% of total), proof_size=84,281

| Category  | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 94,854    | 7          | 1,092,739,797 | 71,847     | 53.9%         | 85.2%           |
| Crypto    | hash_keccak_256          | 3,022     | 10         | 151,137,813   | 0          | 7.5%          | 0.0%            |
| Events    | deposit_event            | 106       | 1          | 5,323,596     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_copy           | 28        | 1          | 1,422,272     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now              | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_releaseTime

- **Total Gas Used:** 830,573
- **Base Call Weight:** ref_time=914,394,866, proof_size=8,747
- **Total Weight:** ref_time=4,472,861,888, proof_size=306,936
- **Weight Consumed:** ref_time=3,558,467,022 (79.6% of total), proof_size=298,189

| Category     | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                        | 279,720   | 29         | 3,426,035,029 | 298,189    | 96.3%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                            | 1,516     | 5          | 75,871,833    | 0          | 2.1%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                 | 443       | 1          | 22,179,532    | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 350       | 381        | 17,281,680    | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 97        | 110        | 5,042,400     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 85        | 45         | 4,247,840     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                             | 50        | 52         | 2,383,680     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                        | 32        | 35         | 1,604,400     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                    | 31        | 4          | 1,556,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                            | 19        | 3          | 957,000       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 16        | 18         | 825,120       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 7         | 7          | 290,320       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                               | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_with_releaseTime

- **Total Gas Used:** 843,024
- **Base Call Weight:** ref_time=914,394,866, proof_size=8,747
- **Total Weight:** ref_time=5,095,369,737, proof_size=361,439
- **Weight Consumed:** ref_time=4,180,974,871 (82.1% of total), proof_size=352,692

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 284,596   | 31         | 3,669,967,994 | 318,865    | 87.8%         | 90.4%           |
| Crypto    | hash_keccak_256                           | 1,518     | 5          | 75,871,833    | 0          | 1.8%          | 0.0%            |
| Events    | deposit_event                             | 444       | 1          | 22,179,532    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 41        | 6          | 2,045,000     | 0          | 0.0%          | 0.0%            |
| Context   | caller, now                               | 31        | 4          | 1,556,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 18        | 3          | 957,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |


### escrow_rust - create_with_releaseTime

- **Total Gas Used:** 661,735
- **Base Call Weight:** ref_time=914,394,866, proof_size=8,747
- **Total Weight:** ref_time=2,940,941,591, proof_size=93,028
- **Weight Consumed:** ref_time=2,026,546,725 (68.9% of total), proof_size=84,281

| Category  | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 94,854    | 7          | 1,092,739,797 | 71,847     | 53.9%         | 85.2%           |
| Crypto    | hash_keccak_256          | 3,022     | 10         | 151,137,813   | 0          | 7.5%          | 0.0%            |
| Events    | deposit_event            | 106       | 1          | 5,323,596     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_copy           | 28        | 1          | 1,422,272     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now              | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return              | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### Escrow_evm - deploy

- **Total Gas Used:** 24,541,649
- **Base Call Weight:** ref_time=1,584,343,825, proof_size=6,934
- **Total Weight:** ref_time=1,997,648,786, proof_size=37,737
- **Weight Consumed:** ref_time=413,304,961 (20.7% of total), proof_size=30,803

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 113,807   | 3          | 410,365,307 | 30,803     | 99.3%         | 100.0%          |
| Code         | CODECOPY                                     | 27        | 1          | 1,337,134   | 0          | 0.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 17        | 19         | 855,680     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 3         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPI                                        | 3         | 1          | 152,800     | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                       | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - deploy

- **Total Gas Used:** 91,470,085
- **Base Call Weight:** ref_time=2,052,809,251, proof_size=6,934
- **Total Weight:** ref_time=2,482,448,859, proof_size=37,705
- **Weight Consumed:** ref_time=429,639,608 (17.3% of total), proof_size=30,771

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 113,806   | 3          | 410,315,099 | 30,771     | 95.5%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size            | 17        | 2          | 826,576     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### escrow_rust - deploy

- **Total Gas Used:** 43,048,828
- **Base Call Weight:** ref_time=1,714,243,633, proof_size=6,934
- **Total Weight:** ref_time=1,948,584,928, proof_size=17,191
- **Weight Consumed:** ref_time=234,341,295 (12.0% of total), proof_size=10,257

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 54,611    | 1          | 170,586,806 | 10,257     | 72.8%         | 100.0%          |
| Crypto   | hash_keccak_256 | 301       | 1          | 15,060,282  | 0          | 6.4%          | 0.0%            |
| Return   | seal_return     | 10        | 1          | 529,465     | 0          | 0.2%          | 0.0%            |


### Escrow_evm - refund

- **Total Gas Used:** 429,786
- **Base Call Weight:** ref_time=913,112,858, proof_size=8,435
- **Total Weight:** ref_time=2,753,483,676, proof_size=158,043
- **Weight Consumed:** ref_time=1,840,370,818 (66.8% of total), proof_size=149,608

| Category     | Opcodes Used                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                         | 80,284    | 14         | 1,374,121,902 | 144,014    | 74.7%         | 96.3%           |
| Calls        | CALL                                                                                  | 8,517     | 1          | 425,854,495   | 5,594      | 23.1%         | 3.7%            |
| Crypto       | KECCAK256                                                                             | 304       | 1          | 15,219,717    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP4 | 150       | 171        | 7,578,880     | 0          | 0.4%          | 0.0%            |
| Events       | LOG3                                                                                  | 106       | 1          | 5,323,596     | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 105       | 51         | 5,149,360     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                        | 45        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                | 28        | 31         | 1,421,040     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                     | 24        | 3          | 1,153,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 22        | 24         | 1,100,160     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                              | 13        | 15         | 687,600       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 4         | 4          | 152,800       | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                | 1         | 3          | 137,520       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                        | 0         | 1          | 30,560        | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                  | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - refund

- **Total Gas Used:** 432,179
- **Base Call Weight:** ref_time=913,112,858, proof_size=8,435
- **Total Weight:** ref_time=2,873,136,993, proof_size=191,806
- **Weight Consumed:** ref_time=1,960,024,135 (68.2% of total), proof_size=183,371

| Category    | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 80,281    | 14         | 1,374,021,486 | 143,950    | 70.1%         | 78.5%           |
| Calls       | call_evm                                  | 8,528     | 1          | 426,390,360   | 5,594      | 21.8%         | 3.1%            |
| Crypto      | hash_keccak_256                           | 305       | 1          | 15,219,717    | 0          | 0.8%          | 0.0%            |
| Events      | deposit_event                             | 107       | 1          | 5,323,596     | 0          | 0.3%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 45        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                               | 23        | 3          | 1,153,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 21        | 3          | 1,016,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 10        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                          | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### escrow_rust - refund

- **Total Gas Used:** 376,751
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=2,641,761,441, proof_size=77,988
- **Weight Consumed:** ref_time=1,728,636,256 (65.4% of total), proof_size=69,550

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 13,005    | 5          | 650,319,126 | 51,522     | 37.6%         | 74.1%           |
| Calls    | call                     | 8,528     | 1          | 426,390,360 | 5,594      | 24.7%         | 8.0%            |
| Crypto   | hash_keccak_256          | 1,811     | 6          | 90,464,439  | 0          | 5.2%          | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,323,596   | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - release

- **Total Gas Used:** 429,712
- **Base Call Weight:** ref_time=913,112,858, proof_size=8,435
- **Total Weight:** ref_time=2,749,785,916, proof_size=158,043
- **Weight Consumed:** ref_time=1,836,673,058 (66.8% of total), proof_size=149,608

| Category     | Opcodes Used                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                         | 80,284    | 14         | 1,374,121,902 | 144,014    | 74.8%         | 96.3%           |
| Calls        | CALL                                                                                  | 8,517     | 1          | 425,854,495   | 5,594      | 23.2%         | 3.7%            |
| Crypto       | KECCAK256                                                                             | 304       | 1          | 15,219,717    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP4 | 117       | 129        | 5,730,000     | 0          | 0.3%          | 0.0%            |
| Events       | LOG3                                                                                  | 106       | 1          | 5,323,596     | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 75        | 39         | 3,758,880     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                        | 45        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                | 25        | 29         | 1,329,360     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                     | 23        | 3          | 1,153,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                              | 15        | 17         | 779,280       | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 12        | 14         | 641,760       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 4         | 4          | 152,800       | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                                | 2         | 3          | 137,520       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                        | 0         | 1          | 30,560        | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                  | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - release

- **Total Gas Used:** 432,214
- **Base Call Weight:** ref_time=913,112,858, proof_size=8,435
- **Total Weight:** ref_time=2,874,909,273, proof_size=191,806
- **Weight Consumed:** ref_time=1,961,796,415 (68.2% of total), proof_size=183,371

| Category    | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 80,282    | 14         | 1,374,021,486 | 143,950    | 70.0%         | 78.5%           |
| Calls       | call_evm                                  | 8,527     | 1          | 426,390,360   | 5,594      | 21.7%         | 3.1%            |
| Crypto      | hash_keccak_256                           | 304       | 1          | 15,219,717    | 0          | 0.8%          | 0.0%            |
| Events      | deposit_event                             | 106       | 1          | 5,323,596     | 0          | 0.3%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 45        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                               | 23        | 3          | 1,153,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 21        | 3          | 1,016,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                          | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### escrow_rust - release

- **Total Gas Used:** 426,449
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=2,636,639,186, proof_size=77,986
- **Weight Consumed:** ref_time=1,723,514,001 (65.4% of total), proof_size=69,548

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 62,808    | 5          | 650,316,791 | 51,520     | 37.7%         | 74.1%           |
| Calls    | call                     | 8,528     | 1          | 426,390,360 | 5,594      | 24.7%         | 8.0%            |
| Crypto   | hash_keccak_256          | 1,808     | 6          | 90,464,439  | 0          | 5.2%          | 0.0%            |
| Events   | deposit_event            | 106       | 1          | 5,323,596   | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - approve

- **Total Gas Used:** 468,043
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,466,337,726, proof_size=54,554
- **Weight Consumed:** ref_time=552,830,404 (37.7% of total), proof_size=46,023

| Category     | Opcodes Used                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                 | 60,362    | 4          | 378,094,451 | 41,124     | 68.4%         | 89.4%           |
| Calls        | DELEGATECALL                                                                                  | 2,254     | 1          | 112,748,833 | 4,899      | 20.4%         | 10.6%           |
| Crypto       | KECCAK256                                                                                     | 609       | 2          | 30,439,434  | 0          | 5.5%          | 0.0%            |
| Events       | LOG3                                                                                          | 275       | 1          | 13,751,564  | 0          | 2.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4, SWAP5, SWAP6 | 117       | 133        | 5,898,080   | 0          | 1.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                         | 85        | 43         | 4,202,000   | 0          | 0.8%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                | 45        | 2          | 2,248,000   | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                      | 17        | 11         | 869,524     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                        | 16        | 2          | 806,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                            | 14        | 17         | 779,280     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                           | 17        | 17         | 779,280     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                 | 12        | 13         | 595,920     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                | 12        | 3          | 556,616     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                      | 10        | 11         | 504,240     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                      | 10        | 1          | 495,496     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                        | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - approve

- **Total Gas Used:** 473,460
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,737,192,853, proof_size=167,787
- **Weight Consumed:** ref_time=823,685,531 (47.4% of total), proof_size=159,256

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 60,361    | 4          | 378,094,451 | 41,124     | 45.9%         | 25.8%           |
| Calls       | delegate_call_evm                              | 5,259     | 1          | 262,997,526 | 108,444    | 31.9%         | 68.1%           |
| Crypto      | hash_keccak_256                                | 609       | 2          | 30,439,434  | 0          | 3.7%          | 0.0%            |
| Events      | deposit_event                                  | 275       | 1          | 13,751,564  | 0          | 1.7%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 51        | 7          | 2,536,260   | 0          | 0.3%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 45        | 2          | 2,248,000   | 0          | 0.3%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 23        | 3          | 1,133,496   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,071,730   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 16        | 2          | 806,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - changeAdmin

- **Total Gas Used:** 344,997
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,254,022,241, proof_size=39,299
- **Weight Consumed:** ref_time=340,921,710 (27.2% of total), proof_size=30,867

| Category     | Opcodes Used                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                             | 6,179     | 3          | 308,954,244 | 30,867     | 90.6%         | 100.0%          |
| Events       | LOG1                                                                      | 444       | 1          | 22,179,532  | 0          | 6.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 72        | 80         | 3,468,560   | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 41        | 20         | 2,108,640   | 0          | 0.6%          | 0.0%            |
| Code         | CODECOPY                                                                  | 30        | 3          | 1,486,488   | 0          | 0.4%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                             | 11        | 13         | 595,920     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                        | 10        | 10         | 458,400     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                  | 7         | 8          | 366,720     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 7         | 8          | 366,720     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                 | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 2         | 4          | 152,800     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - changeAdmin

- **Total Gas Used:** 346,075
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,307,939,666, proof_size=48,987
- **Weight Consumed:** ref_time=394,839,135 (30.2% of total), proof_size=40,555

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,179     | 3          | 308,954,244 | 30,867     | 78.2%         | 76.1%           |
| Events    | deposit_event                             | 444       | 1          | 22,179,532  | 0          | 5.6%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 21        | 3          | 1,016,000   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - configureMinter

- **Total Gas Used:** 527,114
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,779,882,018, proof_size=85,389
- **Weight Consumed:** ref_time=866,374,696 (48.7% of total), proof_size=76,858

| Category     | Opcodes Used                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                      | 119,340   | 7          | 687,024,183 | 71,959     | 79.3%         | 93.6%           |
| Calls        | DELEGATECALL                                                                                       | 2,254     | 1          | 112,748,833 | 4,899      | 13.0%         | 6.4%            |
| Crypto       | KECCAK256                                                                                          | 609       | 2          | 30,439,434  | 0          | 3.5%          | 0.0%            |
| Events       | LOG2                                                                                               | 275       | 1          | 13,751,564  | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 151       | 172        | 7,731,680   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                              | 129       | 54         | 6,387,040   | 0          | 0.7%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                     | 45        | 2          | 2,248,000   | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                                | 33        | 35         | 1,604,400   | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                           | 17        | 11         | 869,524     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                             | 16        | 2          | 806,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                             | 16        | 16         | 733,440     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                      | 13        | 13         | 595,920     | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                     | 12        | 3          | 556,616     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                           | 10        | 1          | 495,496     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                           | 5         | 7          | 320,880     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                             | 0         | 2          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - configureMinter

- **Total Gas Used:** 532,541
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=2,051,259,329, proof_size=198,590
- **Weight Consumed:** ref_time=1,137,752,007 (55.5% of total), proof_size=190,059

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 119,338   | 7          | 686,973,975 | 71,927     | 60.4%         | 37.8%           |
| Calls       | delegate_call_evm                              | 5,259     | 1          | 262,997,526 | 108,444    | 23.1%         | 57.1%           |
| Crypto      | hash_keccak_256                                | 609       | 2          | 30,439,434  | 0          | 2.7%          | 0.0%            |
| Events      | deposit_event                                  | 275       | 1          | 13,751,564  | 0          | 1.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 51        | 7          | 2,536,260   | 0          | 0.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 44        | 2          | 2,248,000   | 0          | 0.2%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 23        | 3          | 1,133,496   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,071,730   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 17        | 2          | 806,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - deploy

- **Total Gas Used:** 18,701,177
- **Base Call Weight:** ref_time=1,543,971,699, proof_size=6,934
- **Total Weight:** ref_time=1,955,027,326, proof_size=31,458
- **Weight Consumed:** ref_time=411,055,627 (21.0% of total), proof_size=24,524

| Category     | Opcodes Used                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SSTORE                                                                         | 112,424   | 2          | 341,200,588 | 20,514     | 83.0%         | 83.6%           |
| Code         | CODECOPY, CODESIZE, EXTCODESIZE                                                | 1,309     | 4          | 65,435,279  | 4,010      | 15.9%         | 16.4%           |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP5 | 40        | 43         | 1,971,120   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMPI                                                                          | 15        | 5          | 764,000     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                         | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                       | 7         | 8          | 366,720     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                      | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                              | 6         | 6          | 275,040     | 0          | 0.1%          | 0.0%            |
| Comparison   | GT, ISZERO, LT, SLT                                                            | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                  | 2         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - deploy

- **Total Gas Used:** 36,964,533
- **Base Call Weight:** ref_time=1,670,806,557, proof_size=6,934
- **Total Weight:** ref_time=2,111,820,114, proof_size=31,458
- **Weight Consumed:** ref_time=441,013,557 (20.9% of total), proof_size=24,524

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage_or_clear           | 112,424   | 2          | 341,200,588 | 20,514     | 77.4%         | 83.6%           |
| Code      | code_size                      | 1,283     | 1          | 64,148,000  | 4,010      | 14.5%         | 16.4%           |
| Calldata  | call_data_copy, call_data_size | 27        | 3          | 1,326,768   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                    | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context   | caller                         | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - initialize

- **Total Gas Used:** 1,649,658
- **Base Call Weight:** ref_time=918,265,544, proof_size=9,689
- **Total Weight:** ref_time=3,467,091,226, proof_size=230,401
- **Weight Consumed:** ref_time=2,548,825,682 (73.5% of total), proof_size=220,712

| Category     | Opcodes Used                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                | 469,708   | 21         | 2,365,403,786 | 215,813    | 92.8%         | 97.8%           |
| Calls        | DELEGATECALL                                                                                                                                 | 2,256     | 1          | 112,825,633   | 4,899      | 4.4%          | 2.2%            |
| Stack        | DUP1, DUP16, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP15, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 593       | 655        | 29,398,720    | 0          | 1.2%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                        | 442       | 247        | 21,942,080    | 0          | 0.9%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                       | 99        | 114        | 5,225,760     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                      | 66        | 76         | 3,483,840     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                     | 67        | 72         | 3,300,480     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                     | 61        | 26         | 2,921,761     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                               | 44        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                | 20        | 23         | 1,054,320     | 0          | 0.0%          | 0.0%            |
| Code         | CODECOPY                                                                                                                                     | 10        | 1          | 495,496       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                       | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                                               | 2         | 3          | 61,120        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                 | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - initialize

- **Total Gas Used:** 1,658,411
- **Base Call Weight:** ref_time=918,265,544, proof_size=9,689
- **Total Weight:** ref_time=3,904,751,659, proof_size=343,346
- **Weight Consumed:** ref_time=2,986,486,115 (76.5% of total), proof_size=333,657

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 469,698   | 21         | 2,364,951,914 | 215,525    | 79.2%         | 64.6%           |
| Calls       | delegate_call_evm                              | 5,260     | 1          | 263,074,326   | 108,444    | 8.8%          | 32.5%           |
| Calldata    | call_data_copy, call_data_load, call_data_size | 142       | 19         | 7,158,075     | 0          | 0.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 45        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 24        | 3          | 1,127,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,058,930     | 0          | 0.0%          | 0.0%            |
| Context     | caller                                         | 9         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - mint

- **Total Gas Used:** 487,007
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=2,414,524,981, proof_size=147,123
- **Weight Consumed:** ref_time=1,501,017,659 (62.2% of total), proof_size=138,592

| Category     | Opcodes Used                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                    | 126,257   | 13         | 1,203,454,600 | 133,693    | 80.2%         | 96.5%           |
| Crypto       | KECCAK256                                                                                                        | 2,434     | 8          | 121,757,736   | 0          | 8.1%          | 0.0%            |
| Calls        | DELEGATECALL                                                                                                     | 2,254     | 1          | 112,748,833   | 4,899      | 7.5%          | 3.5%            |
| Events       | LOG3                                                                                                             | 550       | 2          | 27,503,128    | 0          | 1.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP6, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7 | 271       | 304        | 13,645,040    | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                            | 207       | 101        | 10,207,040    | 0          | 0.7%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                   | 45        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                          | 45        | 49         | 2,246,160     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                           | 40        | 5          | 2,015,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                    | 24        | 27         | 1,237,680     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                               | 25        | 26         | 1,191,840     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                         | 17        | 11         | 869,524       | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                         | 15        | 17         | 779,280       | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                   | 12        | 3          | 556,616       | 0          | 0.0%          | 0.0%            |
| Code         | CODECOPY                                                                                                         | 10        | 1          | 495,496       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                           | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - mint

- **Total Gas Used:** 495,236
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=2,825,972,306, proof_size=260,293
- **Weight Consumed:** ref_time=1,912,464,984 (67.7% of total), proof_size=251,762

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 126,251   | 13         | 1,205,376,288 | 133,630    | 63.0%         | 53.1%           |
| Calls       | delegate_call_evm                              | 5,259     | 1          | 262,997,526   | 108,444    | 13.8%         | 43.1%           |
| Crypto      | hash_keccak_256                                | 2,435     | 8          | 121,757,736   | 0          | 6.4%          | 0.0%            |
| Events      | deposit_event                                  | 550       | 2          | 27,503,128    | 0          | 1.4%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 50        | 7          | 2,536,260     | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 48        | 6          | 2,418,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 44        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 22        | 3          | 1,133,496     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,071,730     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - transfer

- **Total Gas Used:** 483,778
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=2,253,085,224, proof_size=136,866
- **Weight Consumed:** ref_time=1,339,577,902 (59.5% of total), proof_size=128,335

| Category     | Opcodes Used                                                                                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                             | 73,458    | 12         | 1,032,872,290 | 123,436    | 77.1%         | 96.2%           |
| Crypto       | KECCAK256                                                                                                 | 2,738     | 9          | 136,977,453   | 0          | 10.2%         | 0.0%            |
| Calls        | DELEGATECALL                                                                                              | 2,254     | 1          | 112,748,833   | 4,899      | 8.4%          | 3.8%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP8 | 347       | 383        | 17,281,680    | 0          | 1.3%          | 0.0%            |
| Events       | LOG3                                                                                                      | 275       | 1          | 13,751,564    | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                     | 258       | 119        | 13,125,520    | 0          | 1.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                   | 64        | 69         | 3,162,960     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                            | 46        | 2          | 2,248,000     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                        | 38        | 41         | 1,879,440     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                             | 27        | 27         | 1,237,680     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                    | 24        | 3          | 1,209,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                  | 22        | 24         | 1,100,160     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                  | 16        | 11         | 869,524       | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                            | 12        | 3          | 556,616       | 0          | 0.0%          | 0.0%            |
| Code         | CODECOPY                                                                                                  | 10        | 1          | 495,496       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                    | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - transfer

- **Total Gas Used:** 491,315
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=2,629,939,111, proof_size=250,003
- **Weight Consumed:** ref_time=1,716,431,789 (65.3% of total), proof_size=241,472

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 73,454    | 12         | 1,032,721,666 | 123,340    | 60.2%         | 51.1%           |
| Calls       | delegate_call_evm                              | 5,259     | 1          | 262,997,526   | 108,444    | 15.3%         | 44.9%           |
| Crypto      | hash_keccak_256                                | 2,740     | 9          | 136,977,453   | 0          | 8.0%          | 0.0%            |
| Events      | deposit_event                                  | 275       | 1          | 13,751,564    | 0          | 0.8%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 50        | 7          | 2,536,260     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 44        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 24        | 3          | 1,209,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 23        | 3          | 1,133,496     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,071,730     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - transferFrom

- **Total Gas Used:** 504,651
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=2,736,718,638, proof_size=178,150
- **Weight Consumed:** ref_time=1,822,816,852 (66.6% of total), proof_size=169,523

| Category     | Opcodes Used                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                    | 28,222    | 16         | 1,411,015,765 | 164,624    | 77.4%         | 97.1%           |
| Crypto       | KECCAK256                                                                                                        | 4,874     | 16         | 243,515,472   | 0          | 13.4%         | 0.0%            |
| Calls        | DELEGATECALL                                                                                                     | 2,254     | 1          | 112,755,233   | 4,899      | 6.2%          | 2.9%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP8 | 347       | 390        | 17,480,320    | 0          | 1.0%          | 0.0%            |
| Events       | LOG3                                                                                                             | 275       | 1          | 13,751,564    | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                            | 203       | 111        | 10,115,360    | 0          | 0.6%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                               | 51        | 56         | 2,567,040     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                   | 46        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                           | 41        | 5          | 2,015,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                          | 40        | 42         | 1,925,280     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                    | 36        | 41         | 1,879,440     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                         | 28        | 33         | 1,512,720     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                         | 16        | 12         | 921,860       | 0          | 0.1%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                                                                   | 11        | 3          | 556,616       | 0          | 0.0%          | 0.0%            |
| Code         | CODECOPY                                                                                                         | 10        | 1          | 495,496       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                           | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - transferFrom

- **Total Gas Used:** 514,706
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=3,239,499,195, proof_size=291,383
- **Weight Consumed:** ref_time=2,325,597,409 (71.8% of total), proof_size=282,756

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 28,222    | 16         | 1,411,015,765 | 164,624    | 60.7%         | 58.2%           |
| Calls       | delegate_call_evm                              | 5,259     | 1          | 263,003,926   | 108,444    | 11.3%         | 38.4%           |
| Crypto      | hash_keccak_256                                | 4,871     | 16         | 243,515,472   | 0          | 10.5%         | 0.0%            |
| Events      | deposit_event                                  | 275       | 1          | 13,751,564    | 0          | 0.6%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 58        | 8          | 2,882,876     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 45        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 40        | 5          | 2,015,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 24        | 3          | 1,133,496     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,071,730     | 0          | 0.0%          | 0.0%            |


### FiatTokenV2_2_evm - deploy

- **Total Gas Used:** 49,899,060
- **Base Call Weight:** ref_time=1,762,243,891, proof_size=6,934
- **Total Weight:** ref_time=2,418,189,787, proof_size=58,283
- **Weight Consumed:** ref_time=655,945,896 (27.1% of total), proof_size=51,349

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 65,802    | 5          | 650,094,352 | 51,349     | 99.1%         | 100.0%          |
| Code         | CODECOPY                                     | 73        | 1          | 3,616,824   | 0          | 0.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 18        | 21         | 947,360     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                       | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 6         | 7          | 320,880     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPI                                        | 3         | 1          | 152,800     | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                       | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenV2_2_pvm - deploy

- **Total Gas Used:** 249,011,072
- **Base Call Weight:** ref_time=3,156,166,319, proof_size=6,934
- **Total Weight:** ref_time=3,837,783,006, proof_size=58,477
- **Weight Consumed:** ref_time=681,616,687 (17.8% of total), proof_size=51,543

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 65,887    | 5          | 654,388,416 | 51,543     | 96.0%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size            | 16        | 2          | 826,576     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Fibonacci_evm - deploy

- **Total Gas Used:** 15,557,530
- **Base Call Weight:** ref_time=1,522,210,949, proof_size=6,934
- **Total Weight:** ref_time=1,523,685,771, proof_size=6,934
- **Weight Consumed:** ref_time=1,474,822 (0.1% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 10        | 1          | 544,622  | 0          | 36.9%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 9         | 9          | 412,560  | 0          | 28.0%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 319,000  | 0          | 21.6%         | 0.0%            |
| Control Flow | JUMPI                                 | 3         | 1          | 152,800  | 0          | 10.4%         | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 45,840   | 0          | 3.1%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - deploy

- **Total Gas Used:** 18,382,827
- **Base Call Weight:** ref_time=1,541,930,145, proof_size=6,934
- **Total Weight:** ref_time=1,552,523,142, proof_size=6,934
- **Weight Consumed:** ref_time=10,592,997 (0.7% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 16        | 2          | 826,576  | 0          | 7.8%          | 0.0%            |
| Return    | seal_return                    | 10        | 1          | 529,465  | 0          | 5.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 319,000  | 0          | 3.0%          | 0.0%            |


### fibonacci_ink - deploy

- **Total Gas Used:** 17,426,746
- **Base Call Weight:** ref_time=1,534,903,401, proof_size=6,934
- **Total Weight:** ref_time=1,720,504,670, proof_size=17,191
- **Weight Consumed:** ref_time=185,601,269 (10.8% of total), proof_size=10,257

| Category  | Opcodes Used      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage       | 47,411    | 1          | 170,582,310 | 10,257     | 91.9%         | 100.0%          |
| Calldata  | call_data_copy    | 47        | 1          | 2,347,968   | 0          | 1.3%          | 0.0%            |
| Return    | seal_return       | 11        | 1          | 529,465     | 0          | 0.3%          | 0.0%            |
| Ether/Gas | value_transferred | 7         | 1          | 319,000     | 0          | 0.2%          | 0.0%            |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 346,268
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,317,572,855, proof_size=8,432
- **Weight Consumed:** ref_time=404,472,324 (30.7% of total), proof_size=0

| Category     | Opcodes Used                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 3,549     | 3,979      | 177,798,080 | 0          | 44.0%         | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 3,334     | 1,883      | 166,597,840 | 0          | 41.2%         | 0.0%            |
| Bitwise      | AND, NOT, SHR                                                   | 567       | 621        | 28,466,640  | 0          | 7.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                        | 377       | 409        | 18,748,560  | 0          | 4.6%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                         | 252       | 269        | 12,330,960  | 0          | 3.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                       | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 3         | 4          | 152,800     | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                          | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - fib_10

- **Total Gas Used:** 347,222
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,365,307,158, proof_size=9,978
- **Weight Consumed:** ref_time=452,206,627 (33.1% of total), proof_size=1,546

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_load, call_data_size | 20        | 3          | 1,016,000 | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 529,465   | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 319,000   | 0          | 0.1%          | 0.0%            |


### fibonacci_ink - fib_10

- **Total Gas Used:** 342,941
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,151,214,899, proof_size=19,791
- **Weight Consumed:** ref_time=238,114,368 (20.7% of total), proof_size=11,359

| Category  | Opcodes Used      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Storage   | get_storage       | 1,382     | 1          | 69,114,511 | 10,257     | 29.0%         | 90.3%           |
| Calldata  | call_data_copy    | 47        | 1          | 2,347,968  | 0          | 1.0%          | 0.0%            |
| Return    | seal_return       | 11        | 1          | 529,465    | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred | 6         | 1          | 319,000    | 0          | 0.1%          | 0.0%            |


### fibonacci_rust - fib_10

- **Total Gas Used:** 339,995
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,003,955,988, proof_size=8,641
- **Weight Consumed:** ref_time=90,855,457 (9.0% of total), proof_size=209

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 10        | 1          | 497,028  | 0          | 0.5%          | 0.0%            |


### fibonacci_u128_rust - fib_10

- **Total Gas Used:** 341,847
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,096,520,800, proof_size=8,717
- **Weight Consumed:** ref_time=183,420,269 (16.7% of total), proof_size=285

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 10        | 1          | 498,384  | 0          | 0.3%          | 0.0%            |


### fibonacci_u256_rust - fib_10

- **Total Gas Used:** 370,172
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=2,512,807,559, proof_size=9,118
- **Weight Consumed:** ref_time=1,599,707,028 (63.7% of total), proof_size=686

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 10        | 1          | 500,192  | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - burn

- **Total Gas Used:** 422,033
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,805,849,977, proof_size=90,843
- **Weight Consumed:** ref_time=892,342,655 (49.4% of total), proof_size=82,312

| Category     | Opcodes Used                                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                 | 15,124    | 8          | 756,237,926 | 82,312     | 84.7%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                     | 2,134     | 7          | 106,538,019 | 0          | 11.9%         | 0.0%            |
| Events       | LOG3                                                                                                          | 275       | 1          | 13,751,564  | 0          | 1.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 138       | 157        | 7,044,080   | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                         | 55        | 26         | 2,689,280   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                                                        | 32        | 4          | 1,612,000   | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                        | 32        | 34         | 1,558,560   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                      | 14        | 18         | 825,120     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                 | 17        | 17         | 779,280     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                       | 9         | 10         | 458,400     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                     | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                    | 5         | 5          | 198,640     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - burn

- **Total Gas Used:** 426,845
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=2,046,426,943, proof_size=156,590
- **Weight Consumed:** ref_time=1,132,919,621 (55.4% of total), proof_size=148,059

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 15,124    | 8          | 756,237,926 | 82,312     | 66.8%         | 55.6%           |
| Crypto    | hash_keccak_256                           | 2,132     | 7          | 106,538,019 | 0          | 9.4%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 1.2%          | 0.0%            |
| Context   | caller                                    | 32        | 4          | 1,612,000   | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 28        | 4          | 1,359,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - burn

- **Total Gas Used:** 425,514
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,979,891,008, proof_size=67,157
- **Weight Consumed:** ref_time=1,066,383,686 (53.9% of total), proof_size=58,626

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 9,596     | 4          | 479,781,840 | 41,296     | 45.0%         | 70.4%           |
| Crypto   | hash_keccak_256          | 1,510     | 5          | 75,496,275  | 0          | 7.1%          | 0.0%            |
| Events   | deposit_event            | 106       | 1          | 5,323,596   | 0          | 0.5%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - createClass_nontransferable

- **Total Gas Used:** 960,653
- **Base Call Weight:** ref_time=915,109,832, proof_size=8,921
- **Total Weight:** ref_time=2,536,848,430, proof_size=132,229
- **Weight Consumed:** ref_time=1,621,738,598 (63.9% of total), proof_size=123,308

| Category     | Opcodes Used                                                                                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                   | 294,800   | 12         | 1,540,074,677 | 123,308    | 95.0%         | 100.0%          |
| Events       | LOG3                                                                                                                                                                                                            | 613       | 1          | 30,607,500    | 0          | 1.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 330       | 367        | 16,609,360    | 0          | 1.0%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                                                                                       | 304       | 1          | 15,219,717    | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 118       | 56         | 6,050,880     | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 70        | 75         | 3,438,000     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                        | 63        | 67         | 3,071,280     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 34        | 19         | 1,701,438     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 33        | 36         | 1,650,240     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                   | 32        | 33         | 1,512,720     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                               | 24        | 3          | 1,153,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                       | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                          | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - createClass_nontransferable

- **Total Gas Used:** 979,371
- **Base Call Weight:** ref_time=915,109,832, proof_size=8,921
- **Total Weight:** ref_time=3,472,725,251, proof_size=249,423
- **Weight Consumed:** ref_time=2,557,615,419 (73.6% of total), proof_size=240,502

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 305,856   | 17         | 2,092,826,686 | 174,755    | 81.8%         | 72.7%           |
| Events    | deposit_event                                  | 612       | 1          | 30,607,500    | 0          | 1.2%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 304       | 1          | 15,219,717    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 129       | 18         | 6,471,090     | 0          | 0.3%          | 0.0%            |
| Context   | caller, now                                    | 23        | 3          | 1,153,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 10        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - createClass_nontransferable

- **Total Gas Used:** 760,222
- **Base Call Weight:** ref_time=915,109,832, proof_size=8,921
- **Total Weight:** ref_time=1,895,301,460, proof_size=57,038
- **Weight Consumed:** ref_time=980,191,628 (51.7% of total), proof_size=48,117

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 84,608    | 3          | 410,377,615 | 30,787     | 41.9%         | 64.0%           |
| Crypto   | hash_keccak_256          | 1,507     | 5          | 75,329,754  | 0          | 7.7%          | 0.0%            |
| Events   | deposit_event            | 275       | 1          | 13,751,564  | 0          | 1.4%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 535,865     | 0          | 0.1%          | 0.0%            |


### FungibleCredential_evm - createClass_transferable

- **Total Gas Used:** 905,853
- **Base Call Weight:** ref_time=915,097,505, proof_size=8,918
- **Total Weight:** ref_time=2,536,818,525, proof_size=132,226
- **Weight Consumed:** ref_time=1,621,721,020 (63.9% of total), proof_size=123,308

| Category     | Opcodes Used                                                                                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                   | 242,002   | 12         | 1,540,056,693 | 123,308    | 95.0%         | 100.0%          |
| Events       | LOG3                                                                                                                                                                                                            | 612       | 1          | 30,607,500    | 0          | 1.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 329       | 367        | 16,609,360    | 0          | 1.0%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                                                                                       | 304       | 1          | 15,219,717    | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 123       | 56         | 6,050,880     | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 68        | 75         | 3,438,000     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                        | 64        | 67         | 3,071,280     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 35        | 19         | 1,701,844     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 33        | 36         | 1,650,240     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                   | 29        | 33         | 1,512,720     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                               | 23        | 3          | 1,153,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                       | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                          | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - createClass_transferable

- **Total Gas Used:** 926,572
- **Base Call Weight:** ref_time=915,109,832, proof_size=8,921
- **Total Weight:** ref_time=3,472,800,197, proof_size=249,487
- **Weight Consumed:** ref_time=2,557,690,365 (73.6% of total), proof_size=240,566

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 253,058   | 17         | 2,092,901,406 | 174,819    | 81.8%         | 72.7%           |
| Events    | deposit_event                                  | 613       | 1          | 30,607,500    | 0          | 1.2%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 304       | 1          | 15,219,717    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 128       | 18         | 6,471,316     | 0          | 0.3%          | 0.0%            |
| Context   | caller, now                                    | 23        | 3          | 1,153,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - createClass_transferable

- **Total Gas Used:** 756,814
- **Base Call Weight:** ref_time=915,109,832, proof_size=8,921
- **Total Weight:** ref_time=1,884,908,481, proof_size=57,038
- **Weight Consumed:** ref_time=969,798,649 (51.5% of total), proof_size=48,117

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 81,408    | 3          | 410,368,623 | 30,787     | 42.3%         | 64.0%           |
| Crypto   | hash_keccak_256          | 1,507     | 5          | 75,333,297  | 0          | 7.8%          | 0.0%            |
| Events   | deposit_event            | 275       | 1          | 13,751,564  | 0          | 1.4%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 535,865     | 0          | 0.1%          | 0.0%            |


### FungibleCredential_evm - deploy

- **Total Gas Used:** 31,287,779
- **Base Call Weight:** ref_time=1,631,964,259, proof_size=6,934
- **Total Weight:** ref_time=1,875,143,045, proof_size=27,480
- **Weight Consumed:** ref_time=243,178,786 (13.0% of total), proof_size=20,546

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 57,595    | 2          | 239,765,013 | 20,546     | 98.6%         | 100.0%          |
| Code         | CODECOPY                                     | 39        | 1          | 1,948,773   | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 16        | 16         | 718,160     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 4         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                        | 3         | 1          | 152,800     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                       | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - deploy

- **Total Gas Used:** 163,567,116
- **Base Call Weight:** ref_time=2,557,975,171, proof_size=6,934
- **Total Weight:** ref_time=2,813,972,701, proof_size=27,448
- **Weight Consumed:** ref_time=255,997,530 (9.1% of total), proof_size=20,514

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,595    | 2          | 239,714,805 | 20,514     | 93.6%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size            | 16        | 2          | 826,576     | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### fungible_credential_rust - deploy

- **Total Gas Used:** 54,123,337
- **Base Call Weight:** ref_time=1,791,727,729, proof_size=6,934
- **Total Weight:** ref_time=2,026,016,251, proof_size=17,191
- **Weight Consumed:** ref_time=234,288,522 (11.6% of total), proof_size=10,257

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 54,612    | 1          | 170,586,806 | 10,257     | 72.8%         | 100.0%          |
| Crypto   | hash_keccak_256 | 301       | 1          | 15,056,739  | 0          | 6.4%          | 0.0%            |
| Return   | seal_return     | 11        | 1          | 529,465     | 0          | 0.2%          | 0.0%            |


### FungibleCredential_evm - issue

- **Total Gas Used:** 946,108
- **Base Call Weight:** ref_time=913,914,113, proof_size=8,630
- **Total Weight:** ref_time=3,589,605,323, proof_size=245,021
- **Weight Consumed:** ref_time=2,675,691,210 (74.5% of total), proof_size=236,391

| Category     | Opcodes Used                                                                                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                              | 470,443   | 23         | 2,402,273,137 | 236,391    | 89.8%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                  | 4,561     | 15         | 228,069,003   | 0          | 8.5%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 312       | 352        | 15,692,560    | 0          | 0.6%          | 0.0%            |
| Events       | LOG3                                                                                                                                       | 275       | 1          | 13,751,564    | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                      | 133       | 66         | 6,539,840     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                     | 75        | 82         | 3,758,880     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                   | 36        | 36         | 1,650,240     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                              | 29        | 31         | 1,421,040     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                    | 23        | 27         | 1,237,680     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                     | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                  | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                 | 5         | 6          | 244,480       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                       | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - issue

- **Total Gas Used:** 953,770
- **Base Call Weight:** ref_time=913,914,113, proof_size=8,630
- **Total Weight:** ref_time=3,972,708,937, proof_size=310,384
- **Weight Consumed:** ref_time=3,058,794,824 (77.0% of total), proof_size=301,754

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 470,432   | 23         | 2,401,670,641 | 236,007    | 78.5%         | 78.2%           |
| Crypto    | hash_keccak_256                           | 4,563     | 15         | 228,069,003   | 0          | 7.5%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564    | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,702,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - issue

- **Total Gas Used:** 834,774
- **Base Call Weight:** ref_time=913,914,113, proof_size=8,630
- **Total Weight:** ref_time=3,652,907,398, proof_size=149,280
- **Weight Consumed:** ref_time=2,738,993,285 (75.0% of total), proof_size=140,650

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 340,599   | 12         | 1,540,024,853 | 123,320    | 56.2%         | 87.7%           |
| Crypto   | hash_keccak_256          | 3,930     | 13         | 196,488,723   | 0          | 7.2%          | 0.0%            |
| Events   | deposit_event            | 191       | 1          | 9,537,580     | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - issue_more

- **Total Gas Used:** 489,546
- **Base Call Weight:** ref_time=913,914,113, proof_size=8,630
- **Total Weight:** ref_time=1,881,485,767, proof_size=101,231
- **Weight Consumed:** ref_time=967,571,654 (51.4% of total), proof_size=92,601

| Category     | Opcodes Used                                                                                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                       | 16,508    | 9          | 825,402,645 | 92,601     | 85.3%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                           | 2,130     | 7          | 106,538,019 | 0          | 11.0%         | 0.0%            |
| Events       | LOG3                                                                                                                                | 275       | 1          | 13,751,564  | 0          | 1.4%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP6 | 200       | 225        | 10,038,960  | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                               | 105       | 51         | 5,225,760   | 0          | 0.5%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                              | 48        | 52         | 2,383,680   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                            | 26        | 28         | 1,283,520   | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                             | 16        | 19         | 870,960     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                       | 16        | 17         | 779,280     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                              | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                           | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                          | 5         | 6          | 244,480     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - issue_more

- **Total Gas Used:** 494,266
- **Base Call Weight:** ref_time=913,914,113, proof_size=8,630
- **Total Weight:** ref_time=2,117,505,969, proof_size=166,978
- **Weight Consumed:** ref_time=1,203,591,856 (56.8% of total), proof_size=158,348

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 16,508    | 9          | 825,402,645 | 92,601     | 68.6%         | 58.5%           |
| Crypto    | hash_keccak_256                           | 2,132     | 7          | 106,538,019 | 0          | 8.9%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,702,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - issue_more

- **Total Gas Used:** 495,864
- **Base Call Weight:** ref_time=913,914,113, proof_size=8,630
- **Total Weight:** ref_time=2,197,400,844, proof_size=77,514
- **Weight Consumed:** ref_time=1,283,486,731 (58.4% of total), proof_size=68,884

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 10,978    | 5          | 548,897,920 | 51,554     | 42.8%         | 74.8%           |
| Crypto   | hash_keccak_256          | 1,812     | 6          | 90,652,218  | 0          | 7.1%          | 0.0%            |
| Events   | deposit_event            | 191       | 1          | 9,537,580   | 0          | 0.7%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - revoke

- **Total Gas Used:** 488,102
- **Base Call Weight:** ref_time=913,914,113, proof_size=8,630
- **Total Weight:** ref_time=1,809,295,608, proof_size=90,942
- **Weight Consumed:** ref_time=895,381,495 (49.5% of total), proof_size=82,312

| Category     | Opcodes Used                                                                                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                     | 15,125    | 8          | 756,237,926 | 82,312     | 84.5%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                         | 2,132     | 7          | 106,538,019 | 0          | 11.9%         | 0.0%            |
| Events       | LOG3                                                                                                                              | 275       | 1          | 13,751,564  | 0          | 1.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 175       | 197        | 8,831,840   | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                             | 81        | 39         | 4,003,360   | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                            | 43        | 47         | 2,154,480   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                          | 23        | 26         | 1,191,840   | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                     | 14        | 17         | 779,280     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                           | 13        | 13         | 595,920     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                            | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                        | 6         | 6          | 244,480     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - revoke

- **Total Gas Used:** 492,840
- **Base Call Weight:** ref_time=913,914,113, proof_size=8,630
- **Total Weight:** ref_time=2,046,185,606, proof_size=156,689
- **Weight Consumed:** ref_time=1,132,271,493 (55.3% of total), proof_size=148,059

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 15,126    | 8          | 756,237,926 | 82,312     | 66.8%         | 55.6%           |
| Crypto    | hash_keccak_256                           | 2,131     | 7          | 106,538,019 | 0          | 9.4%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 1.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,702,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - revoke

- **Total Gas Used:** 492,169
- **Base Call Weight:** ref_time=913,914,113, proof_size=8,630
- **Total Weight:** ref_time=2,012,645,452, proof_size=67,256
- **Weight Consumed:** ref_time=1,098,731,339 (54.6% of total), proof_size=58,626

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 9,596     | 4          | 479,781,840 | 41,296     | 43.7%         | 70.4%           |
| Crypto   | hash_keccak_256          | 1,510     | 5          | 75,499,818  | 0          | 6.9%          | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,323,596   | 0          | 0.5%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - transfer

- **Total Gas Used:** 842,861
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=3,807,250,163, proof_size=265,660
- **Weight Consumed:** ref_time=2,893,348,377 (76.0% of total), proof_size=257,033

| Category     | Opcodes Used                                                                                                           | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                          | 367,614   | 25         | 2,540,651,599 | 257,033    | 87.8%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                              | 6,081     | 20         | 304,167,588   | 0          | 10.5%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 344       | 385        | 17,128,880    | 0          | 0.6%          | 0.0%            |
| Events       | LOG4                                                                                                                   | 275       | 1          | 13,751,564    | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                  | 132       | 65         | 6,524,560     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                 | 73        | 82         | 3,758,880     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                          | 41        | 43         | 1,971,120     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                 | 32        | 4          | 1,612,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                               | 31        | 35         | 1,604,400     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                | 26        | 28         | 1,283,520     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                              | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                             | 6         | 6          | 244,480       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                   | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - transfer

- **Total Gas Used:** 852,513
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=4,289,839,492, proof_size=331,119
- **Weight Consumed:** ref_time=3,375,937,706 (78.7% of total), proof_size=322,492

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 367,603   | 25         | 2,540,199,727 | 256,745    | 75.2%         | 79.6%           |
| Crypto    | hash_keccak_256                           | 6,387     | 21         | 319,387,305   | 0          | 9.5%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564    | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 34        | 5          | 1,702,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 32        | 4          | 1,612,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### fungible_credential_rust - transfer

- **Total Gas Used:** 783,593
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=3,753,857,328, proof_size=159,464
- **Weight Consumed:** ref_time=2,839,955,542 (75.7% of total), proof_size=150,837

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 290,781   | 13         | 1,609,047,692 | 133,507    | 56.7%         | 88.5%           |
| Crypto   | hash_keccak_256          | 4,233     | 14         | 211,740,327   | 0          | 7.5%          | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,323,596     | 0          | 0.2%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - deploy

- **Total Gas Used:** 24,596,292
- **Base Call Weight:** ref_time=1,585,483,297, proof_size=6,934
- **Total Weight:** ref_time=1,587,769,713, proof_size=6,934
- **Weight Consumed:** ref_time=2,286,416 (0.1% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 27        | 1          | 1,356,216 | 0          | 59.3%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 9         | 9          | 412,560   | 0          | 18.0%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 319,000   | 0          | 14.0%         | 0.0%            |
| Control Flow | JUMPI                                 | 3         | 1          | 152,800   | 0          | 6.7%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 45,840    | 0          | 2.0%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - deploy

- **Total Gas Used:** 102,693,850
- **Base Call Weight:** ref_time=2,132,192,467, proof_size=6,934
- **Total Weight:** ref_time=2,142,687,004, proof_size=6,934
- **Weight Consumed:** ref_time=10,494,537 (0.5% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 17        | 2          | 826,576  | 0          | 7.9%          | 0.0%            |
| Return    | seal_return                    | 10        | 1          | 529,465  | 0          | 5.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 319,000  | 0          | 3.0%          | 0.0%            |


### key_registry_rust - deploy

- **Total Gas Used:** 56,131,145
- **Base Call Weight:** ref_time=1,806,176,867, proof_size=6,934
- **Total Weight:** ref_time=1,807,434,306, proof_size=6,934
- **Weight Consumed:** ref_time=1,257,439 (0.1% of total), proof_size=0

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return  | 10        | 1          | 529,465  | 0          | 42.1%         | 0.0%            |


### KeyRegistry_evm - fetchPrekeyBundle

- **Total Gas Used:** 424,602
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=2,594,286,933, proof_size=183,281
- **Weight Consumed:** ref_time=1,681,186,402 (64.8% of total), proof_size=174,849

| Category     | Opcodes Used                                                                                                                                                                       | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                      | 131,789   | 17         | 1,480,113,476 | 174,849    | 88.0%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                          | 3,040     | 10         | 151,970,418   | 0          | 9.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 443       | 514        | 22,736,640    | 0          | 1.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                              | 183       | 102        | 9,061,040     | 0          | 0.5%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                               | 107       | 1          | 5,323,596     | 0          | 0.3%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                           | 74        | 80         | 3,667,200     | 0          | 0.2%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                                                                               | 76        | 76         | 3,575,520     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                             | 42        | 44         | 2,016,960     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                            | 35        | 36         | 1,650,240     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                                             | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                          | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                         | 3         | 4          | 152,800       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                             | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - fetchPrekeyBundle

- **Total Gas Used:** 436,939
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=3,211,123,035, proof_size=222,125
- **Weight Consumed:** ref_time=2,298,022,504 (71.6% of total), proof_size=213,693

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 131,785   | 17         | 1,482,135,580 | 174,850    | 64.5%         | 81.8%           |
| Crypto    | hash_keccak_256                           | 3,038     | 10         | 151,970,418   | 0          | 6.6%          | 0.0%            |
| Events    | deposit_event                             | 106       | 1          | 5,323,596     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 20        | 3          | 1,016,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 12        | 1          | 606,265       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - fetchPrekeyBundle

- **Total Gas Used:** 430,216
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=3,354,986,475, proof_size=150,056
- **Weight Consumed:** ref_time=2,441,885,944 (72.8% of total), proof_size=141,624

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 70,903    | 12         | 1,235,683,456 | 123,381    | 50.6%         | 87.1%           |
| Crypto   | hash_keccak_256          | 3,929     | 13         | 196,520,610   | 0          | 8.0%          | 0.0%            |
| Events   | deposit_event            | 106       | 1          | 5,323,596     | 0          | 0.2%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 587,065       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - registerIdentity

- **Total Gas Used:** 1,250,054
- **Base Call Weight:** ref_time=915,504,296, proof_size=9,017
- **Total Weight:** ref_time=3,246,888,055, proof_size=183,642
- **Weight Consumed:** ref_time=2,331,383,759 (71.8% of total), proof_size=174,625

| Category     | Opcodes Used                                                                                                                                                                                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                             | 519,002   | 17         | 2,190,180,485 | 174,625    | 93.9%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                                 | 1,823     | 6          | 91,204,926    | 0          | 3.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP8, SWAP9 | 339       | 369        | 16,532,960    | 0          | 0.7%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                                      | 275       | 1          | 13,751,564    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                     | 153       | 73         | 7,869,200     | 0          | 0.3%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                         | 47        | 6          | 2,362,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                    | 45        | 49         | 2,246,160     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                  | 43        | 46         | 2,108,640     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                   | 37        | 42         | 1,925,280     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                             | 36        | 39         | 1,787,760     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                  | 16        | 11         | 899,272       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                 | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                                      | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - registerIdentity

- **Total Gas Used:** 1,257,680
- **Base Call Weight:** ref_time=915,504,296, proof_size=9,017
- **Total Weight:** ref_time=3,628,201,135, proof_size=222,293
- **Weight Consumed:** ref_time=2,712,696,839 (74.8% of total), proof_size=213,276

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 518,997   | 17         | 2,189,879,237 | 174,433    | 80.7%         | 81.8%           |
| Crypto    | hash_keccak_256                                | 1,823     | 6          | 91,204,926    | 0          | 3.4%          | 0.0%            |
| Events    | deposit_event                                  | 276       | 1          | 13,751,564    | 0          | 0.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 57        | 8          | 2,891,808     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 48        | 6          | 2,362,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - registerIdentity

- **Total Gas Used:** 1,002,413
- **Base Call Weight:** ref_time=915,504,296, proof_size=9,017
- **Total Weight:** ref_time=2,454,839,108, proof_size=88,802
- **Weight Consumed:** ref_time=1,539,334,812 (62.7% of total), proof_size=79,785

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 259,813   | 6          | 820,684,712 | 61,542     | 53.3%         | 77.1%           |
| Crypto   | hash_keccak_256          | 2,116     | 7          | 105,840,048 | 0          | 6.9%          | 0.0%            |
| Events   | deposit_event            | 275       | 1          | 13,751,564  | 0          | 0.9%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - updateSignedPrekey

- **Total Gas Used:** 624,944
- **Base Call Weight:** ref_time=914,715,368, proof_size=8,825
- **Total Weight:** ref_time=2,151,389,354, proof_size=101,426
- **Weight Consumed:** ref_time=1,236,673,986 (57.5% of total), proof_size=92,601

| Category     | Opcodes Used                                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                   | 22,596    | 9          | 1,129,782,906 | 92,601     | 91.4%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                       | 1,213     | 4          | 60,652,116    | 0          | 4.9%          | 0.0%            |
| Events       | LOG2                                                                                                                                                            | 444       | 1          | 22,179,532    | 0          | 1.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7, SWAP9 | 219       | 240        | 10,711,280    | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                           | 123       | 62         | 6,280,080     | 0          | 0.5%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                               | 31        | 4          | 1,556,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                         | 31        | 33         | 1,512,720     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                        | 28        | 30         | 1,375,200     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                          | 24        | 28         | 1,283,520     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                   | 9         | 10         | 458,400       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                      | 5         | 9          | 366,720       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                       | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                            | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - updateSignedPrekey

- **Total Gas Used:** 633,359
- **Base Call Weight:** ref_time=914,715,368, proof_size=8,825
- **Total Weight:** ref_time=2,572,146,217, proof_size=160,847
- **Weight Consumed:** ref_time=1,657,430,849 (64.4% of total), proof_size=152,022

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 27,391    | 11         | 1,369,572,431 | 113,179    | 82.6%         | 74.4%           |
| Crypto    | hash_keccak_256                           | 1,212     | 4          | 60,652,116    | 0          | 3.7%          | 0.0%            |
| Events    | deposit_event                             | 443       | 1          | 22,179,532    | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 49        | 7          | 2,388,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 31        | 4          | 1,556,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - updateSignedPrekey

- **Total Gas Used:** 621,383
- **Base Call Weight:** ref_time=914,715,368, proof_size=8,825
- **Total Weight:** ref_time=1,973,323,859, proof_size=68,452
- **Weight Consumed:** ref_time=1,058,608,491 (53.6% of total), proof_size=59,627

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 7,570     | 4          | 378,452,595 | 41,384     | 35.8%         | 69.4%           |
| Crypto   | hash_keccak_256          | 1,511     | 5          | 75,535,248  | 0          | 7.1%          | 0.0%            |
| Events   | deposit_event            | 317       | 1          | 15,858,556  | 0          | 1.5%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |


### KeyRegistry_evm - uploadOneTimePrekeys

- **Total Gas Used:** 851,224
- **Base Call Weight:** ref_time=914,715,368, proof_size=8,825
- **Total Weight:** ref_time=2,905,408,594, proof_size=193,899
- **Weight Consumed:** ref_time=1,990,693,226 (68.5% of total), proof_size=185,074

| Category     | Opcodes Used                                                                                                                | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                               | 248,273   | 18         | 1,853,627,416 | 185,074    | 93.1%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                   | 1,819     | 6          | 90,978,174    | 0          | 4.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 275       | 312        | 13,828,400    | 0          | 0.7%          | 0.0%            |
| Events       | LOG2                                                                                                                        | 275       | 1          | 13,751,564    | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                       | 198       | 106        | 10,008,400    | 0          | 0.5%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                     | 48        | 51         | 2,337,840     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                      | 35        | 37         | 1,696,080     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                      | 32        | 4          | 1,612,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                    | 27        | 28         | 1,283,520     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                               | 12        | 12         | 550,080       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                  | 9         | 12         | 504,240       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                   | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                        | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - uploadOneTimePrekeys

- **Total Gas Used:** 856,682
- **Base Call Weight:** ref_time=914,715,368, proof_size=8,825
- **Total Weight:** ref_time=3,178,300,392, proof_size=232,550
- **Weight Consumed:** ref_time=2,263,585,024 (71.2% of total), proof_size=223,725

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 248,270   | 18         | 1,853,326,168 | 184,882    | 81.9%         | 82.6%           |
| Crypto    | hash_keccak_256                           | 1,819     | 6          | 90,978,174    | 0          | 4.0%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 69        | 10         | 3,417,000     | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 32        | 4          | 1,612,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### key_registry_rust - uploadOneTimePrekeys

- **Total Gas Used:** 919,132
- **Base Call Weight:** ref_time=914,715,368, proof_size=8,825
- **Total Weight:** ref_time=3,340,792,881, proof_size=150,244
- **Weight Consumed:** ref_time=2,426,077,513 (72.6% of total), proof_size=141,419

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 299,167   | 12         | 1,438,386,290 | 123,176    | 59.3%         | 87.1%           |
| Crypto   | hash_keccak_256          | 3,934     | 13         | 196,559,583   | 0          | 8.1%          | 0.0%            |
| Events   | deposit_event            | 148       | 1          | 7,430,588     | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |


### Log_evm - addWriter

- **Total Gas Used:** 585,712
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=1,969,798,322, proof_size=101,039
- **Weight Consumed:** ref_time=1,056,278,673 (53.6% of total), proof_size=92,505

| Category     | Opcodes Used                                                                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                   | 176,936   | 9          | 926,789,196 | 92,505     | 87.7%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                       | 2,129     | 7          | 106,424,643 | 0          | 10.1%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 167       | 183        | 8,205,360   | 0          | 0.8%          | 0.0%            |
| Events       | LOG3                                                                                                            | 107       | 1          | 5,323,596   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                           | 88        | 40         | 4,522,880   | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                          | 30        | 32         | 1,466,880   | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                                             | 20        | 22         | 1,008,480   | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                        | 12        | 15         | 687,600     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                                                                                          | 13        | 14         | 641,760     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                          | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                       | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                      | 3         | 5          | 198,640     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - addWriter

- **Total Gas Used:** 589,957
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=2,182,045,256, proof_size=155,038
- **Weight Consumed:** ref_time=1,268,525,607 (58.1% of total), proof_size=146,504

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 176,932   | 9          | 926,588,364 | 92,377     | 73.0%         | 63.1%           |
| Crypto    | hash_keccak_256                           | 2,128     | 7          | 106,424,643 | 0          | 8.4%          | 0.0%            |
| Events    | deposit_event                             | 106       | 1          | 5,323,596   | 0          | 0.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,359,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### log_rust - addWriter

- **Total Gas Used:** 587,829
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=2,265,620,313, proof_size=86,914
- **Weight Consumed:** ref_time=1,352,100,664 (59.7% of total), proof_size=78,380

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 168,983   | 6          | 719,177,366 | 61,587     | 53.2%         | 78.6%           |
| Crypto   | hash_keccak_256          | 2,115     | 7          | 105,698,328 | 0          | 7.8%          | 0.0%            |
| Events   | deposit_event            | 106       | 1          | 5,323,596   | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - append

- **Total Gas Used:** 649,181
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=2,503,213,503, proof_size=142,163
- **Weight Consumed:** ref_time=1,589,693,854 (63.5% of total), proof_size=133,629

| Category     | Opcodes Used                                                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                         | 241,357   | 13         | 1,507,803,821 | 133,629    | 94.8%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                             | 915       | 3          | 45,659,151    | 0          | 2.9%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                  | 275       | 1          | 13,751,564    | 0          | 0.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 200       | 225        | 10,207,040    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 101       | 42         | 4,996,560     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 41        | 46         | 2,108,640     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 23        | 26         | 1,191,840     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                     | 23        | 3          | 1,153,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                         | 22        | 23         | 1,054,320     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                              | 21        | 21         | 962,640       | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                             | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 4         | 5          | 198,640       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - append

- **Total Gas Used:** 654,518
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=2,770,091,713, proof_size=196,194
- **Weight Consumed:** ref_time=1,856,572,064 (67.0% of total), proof_size=187,660

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 241,354   | 13         | 1,507,653,197 | 133,533    | 81.2%         | 71.2%           |
| Crypto    | hash_keccak_256                           | 914       | 3          | 45,659,151    | 0          | 2.5%          | 0.0%            |
| Events    | deposit_event                             | 276       | 1          | 13,751,564    | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 26        | 4          | 1,359,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 24        | 3          | 1,153,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### log_rust - append

- **Total Gas Used:** 491,282
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=1,928,283,496, proof_size=56,188
- **Weight Consumed:** ref_time=1,014,763,847 (52.6% of total), proof_size=47,654

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 73,010    | 3          | 410,452,208 | 30,861     | 40.4%         | 64.8%           |
| Crypto   | hash_keccak_256          | 1,207     | 4          | 60,336,789  | 0          | 5.9%          | 0.0%            |
| Events   | deposit_event            | 317       | 1          | 15,858,556  | 0          | 1.6%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 10        | 1          | 535,865     | 0          | 0.1%          | 0.0%            |


### Log_evm - append_2

- **Total Gas Used:** 649,181
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=2,503,213,503, proof_size=142,163
- **Weight Consumed:** ref_time=1,589,693,854 (63.5% of total), proof_size=133,629

| Category     | Opcodes Used                                                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                         | 241,357   | 13         | 1,507,803,821 | 133,629    | 94.8%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                             | 915       | 3          | 45,659,151    | 0          | 2.9%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                  | 275       | 1          | 13,751,564    | 0          | 0.9%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 200       | 225        | 10,207,040    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 101       | 42         | 4,996,560     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 41        | 46         | 2,108,640     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 23        | 26         | 1,191,840     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                     | 23        | 3          | 1,153,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                         | 22        | 23         | 1,054,320     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                              | 21        | 21         | 962,640       | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                             | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 4         | 5          | 198,640       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - append_2

- **Total Gas Used:** 652,518
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=2,770,079,386, proof_size=196,191
- **Weight Consumed:** ref_time=1,856,572,064 (67.0% of total), proof_size=187,660

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 241,354   | 13         | 1,507,653,197 | 133,533    | 81.2%         | 71.2%           |
| Crypto    | hash_keccak_256                           | 912       | 3          | 45,659,151    | 0          | 2.5%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564    | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,359,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                               | 23        | 3          | 1,153,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### log_rust - append_2

- **Total Gas Used:** 491,282
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=1,928,283,496, proof_size=56,188
- **Weight Consumed:** ref_time=1,014,763,847 (52.6% of total), proof_size=47,654

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 73,010    | 3          | 410,452,208 | 30,861     | 40.4%         | 64.8%           |
| Crypto   | hash_keccak_256          | 1,207     | 4          | 60,336,789  | 0          | 5.9%          | 0.0%            |
| Events   | deposit_event            | 317       | 1          | 15,858,556  | 0          | 1.6%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 10        | 1          | 535,865     | 0          | 0.1%          | 0.0%            |


### Log_evm - create_nonpermissioned

- **Total Gas Used:** 578,415
- **Base Call Weight:** ref_time=913,112,858, proof_size=8,435
- **Total Weight:** ref_time=2,264,951,331, proof_size=121,486
- **Weight Consumed:** ref_time=1,351,838,473 (59.7% of total), proof_size=113,051

| Category     | Opcodes Used                                                                                                                                                                                  | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                 | 236,560   | 11         | 1,268,014,296 | 113,051    | 93.8%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                     | 910       | 3          | 45,545,775    | 0          | 3.4%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                          | 275       | 1          | 13,751,564    | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 235       | 257        | 11,689,200    | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 108       | 46         | 5,241,040     | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 43        | 49         | 2,246,160     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 31        | 32         | 1,466,880     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                             | 23        | 3          | 1,153,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                 | 19        | 22         | 1,008,480     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                      | 17        | 21         | 962,640       | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                     | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 4         | 4          | 152,800       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                        | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - create_nonpermissioned

- **Total Gas Used:** 593,601
- **Base Call Weight:** ref_time=913,112,858, proof_size=8,435
- **Total Weight:** ref_time=3,024,254,247, proof_size=216,706
- **Weight Consumed:** ref_time=2,111,141,389 (69.8% of total), proof_size=208,271

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 246,190   | 15         | 1,749,497,050 | 154,144    | 82.9%         | 74.0%           |
| Crypto    | hash_keccak_256                           | 911       | 3          | 45,545,775    | 0          | 2.2%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564    | 0          | 0.7%          | 0.0%            |
| Context   | caller, now                               | 31        | 4          | 1,556,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 20        | 3          | 1,016,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### log_rust - create_nonpermissioned

- **Total Gas Used:** 528,999
- **Base Call Weight:** ref_time=913,112,858, proof_size=8,435
- **Total Weight:** ref_time=2,304,135,026, proof_size=76,529
- **Weight Consumed:** ref_time=1,391,022,168 (60.4% of total), proof_size=68,094

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 176,029   | 5          | 751,501,209 | 51,301     | 54.0%         | 75.3%           |
| Crypto   | hash_keccak_256          | 2,112     | 7          | 105,623,925 | 0          | 7.6%          | 0.0%            |
| Events   | deposit_event            | 112       | 1          | 5,586,970   | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 10        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |


### Log_evm - create_permissioned

- **Total Gas Used:** 472,816
- **Base Call Weight:** ref_time=913,112,858, proof_size=8,435
- **Total Weight:** ref_time=2,265,000,355, proof_size=121,550
- **Weight Consumed:** ref_time=1,351,887,497 (59.7% of total), proof_size=113,115

| Category     | Opcodes Used                                                                                                                                                                                  | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                 | 130,962   | 11         | 1,268,063,320 | 113,115    | 93.8%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                     | 910       | 3          | 45,545,775    | 0          | 3.4%          | 0.0%            |
| Events       | LOG3                                                                                                                                                                                          | 275       | 1          | 13,751,564    | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 236       | 257        | 11,689,200    | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 107       | 46         | 5,241,040     | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 43        | 49         | 2,246,160     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 30        | 32         | 1,466,880     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                             | 23        | 3          | 1,153,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                 | 19        | 22         | 1,008,480     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                      | 17        | 21         | 962,640       | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                     | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 4         | 4          | 152,800       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                        | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - create_permissioned

- **Total Gas Used:** 487,996
- **Base Call Weight:** ref_time=913,112,858, proof_size=8,435
- **Total Weight:** ref_time=3,024,009,847, proof_size=216,834
- **Weight Consumed:** ref_time=2,110,896,989 (69.8% of total), proof_size=208,399

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 140,593   | 15         | 1,749,646,490 | 154,272    | 82.9%         | 74.0%           |
| Crypto    | hash_keccak_256                           | 911       | 3          | 45,545,775    | 0          | 2.2%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564    | 0          | 0.7%          | 0.0%            |
| Context   | caller, now                               | 31        | 4          | 1,556,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 20        | 3          | 1,016,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### log_rust - create_permissioned

- **Total Gas Used:** 426,599
- **Base Call Weight:** ref_time=913,112,858, proof_size=8,435
- **Total Weight:** ref_time=2,304,147,282, proof_size=76,545
- **Weight Consumed:** ref_time=1,391,034,424 (60.4% of total), proof_size=68,110

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 73,629    | 5          | 751,513,465 | 51,317     | 54.0%         | 75.3%           |
| Crypto   | hash_keccak_256          | 2,112     | 7          | 105,623,925 | 0          | 7.6%          | 0.0%            |
| Events   | deposit_event            | 112       | 1          | 5,586,970   | 0          | 0.4%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |


### Log_evm - deploy

- **Total Gas Used:** 29,167,598
- **Base Call Weight:** ref_time=1,617,119,471, proof_size=6,934
- **Total Weight:** ref_time=1,860,107,843, proof_size=27,480
- **Weight Consumed:** ref_time=242,988,372 (13.1% of total), proof_size=20,546

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 57,595    | 2          | 239,765,013 | 20,546     | 98.7%         | 100.0%          |
| Code         | CODECOPY                                     | 35        | 1          | 1,758,359   | 0          | 0.7%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 16        | 16         | 718,160     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 3         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                        | 3         | 1          | 152,800     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                       | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - deploy

- **Total Gas Used:** 137,298,241
- **Base Call Weight:** ref_time=2,374,077,051, proof_size=6,934
- **Total Weight:** ref_time=2,630,222,271, proof_size=27,448
- **Weight Consumed:** ref_time=256,145,220 (9.7% of total), proof_size=20,514

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,595    | 2          | 239,714,805 | 20,514     | 93.6%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size            | 16        | 2          | 826,576     | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### log_rust - deploy

- **Total Gas Used:** 52,909,521
- **Base Call Weight:** ref_time=1,783,229,167, proof_size=6,934
- **Total Weight:** ref_time=2,016,230,623, proof_size=17,191
- **Weight Consumed:** ref_time=233,001,456 (11.6% of total), proof_size=10,257

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 54,611    | 1          | 170,586,806 | 10,257     | 73.2%         | 100.0%          |
| Crypto   | hash_keccak_256 | 301       | 1          | 15,049,653  | 0          | 6.5%          | 0.0%            |
| Return   | seal_return     | 10        | 1          | 529,465     | 0          | 0.2%          | 0.0%            |


### Log_evm - removeWriter

- **Total Gas Used:** 282,994
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=2,673,902,848, proof_size=183,447
- **Weight Consumed:** ref_time=1,760,383,199 (65.8% of total), proof_size=174,913

| Category     | Opcodes Used                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                   | 31,630    | 17         | 1,581,586,619 | 174,913    | 89.8%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                       | 3,035     | 10         | 151,743,666   | 0          | 8.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 211       | 237        | 10,512,640    | 0          | 0.6%          | 0.0%            |
| Events       | LOG3                                                                                                            | 107       | 1          | 5,323,596     | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                           | 104       | 54         | 5,241,040     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                          | 39        | 43         | 1,971,120     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                         | 21        | 23         | 1,054,320     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                        | 20        | 21         | 962,640       | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                                                                                          | 17        | 17         | 779,280       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                          | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                       | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                      | 3         | 5          | 198,640       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                            | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - removeWriter

- **Total Gas Used:** 288,834
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=2,965,908,892, proof_size=237,865
- **Weight Consumed:** ref_time=2,052,389,243 (69.2% of total), proof_size=229,331

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 31,761    | 17         | 1,588,104,803 | 175,204    | 77.4%         | 76.4%           |
| Crypto    | hash_keccak_256                           | 3,034     | 10         | 151,743,666   | 0          | 7.4%          | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,323,596     | 0          | 0.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 26        | 4          | 1,359,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### log_rust - removeWriter

- **Total Gas Used:** 421,391
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=1,673,726,144, proof_size=56,145
- **Weight Consumed:** ref_time=760,206,495 (45.4% of total), proof_size=47,611

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 6,177     | 3          | 308,884,834 | 30,818     | 40.6%         | 64.7%           |
| Crypto   | hash_keccak_256          | 1,209     | 4          | 60,450,165  | 0          | 8.0%          | 0.0%            |
| Events   | deposit_event            | 106       | 1          | 5,323,596   | 0          | 0.7%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |


### Log_evm - transfer

- **Total Gas Used:** 554,120
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=3,130,194,969, proof_size=224,536
- **Weight Consumed:** ref_time=2,216,687,647 (70.8% of total), proof_size=216,005

| Category     | Opcodes Used                                                                                                                        | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                       | 146,826   | 21         | 2,061,170,597 | 216,005    | 93.0%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                           | 2,422     | 8          | 121,190,856   | 0          | 5.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 278       | 312        | 13,996,480    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                               | 147       | 72         | 7,288,560     | 0          | 0.3%          | 0.0%            |
| Events       | LOG4                                                                                                                                | 107       | 1          | 5,323,596     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                              | 63        | 70         | 3,208,800     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                             | 33        | 35         | 1,604,400     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                            | 21        | 25         | 1,146,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                                                                                                              | 12        | 12         | 550,080       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                              | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                           | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                          | 5         | 5          | 198,640       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Log_pvm - transfer

- **Total Gas Used:** 561,572
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=3,402,786,748, proof_size=278,602
- **Weight Consumed:** ref_time=2,489,267,099 (73.2% of total), proof_size=270,068

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 146,819   | 21         | 2,061,070,181 | 215,941    | 82.8%         | 80.0%           |
| Crypto    | hash_keccak_256                           | 2,422     | 8          | 121,190,856   | 0          | 4.9%          | 0.0%            |
| Events    | deposit_event                             | 106       | 1          | 5,323,596     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 26        | 4          | 1,359,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### log_rust - transfer

- **Total Gas Used:** 419,531
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=1,580,752,478, proof_size=45,931
- **Weight Consumed:** ref_time=667,232,829 (42.2% of total), proof_size=37,397

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,797     | 2          | 239,827,186 | 20,604     | 35.9%         | 55.1%           |
| Crypto   | hash_keccak_256          | 905       | 3          | 45,226,905  | 0          | 6.8%          | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,323,596   | 0          | 0.8%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |


### Marketplace_pvm - deploy

- **Total Gas Used:** 630,662,128
- **Base Call Weight:** ref_time=5,828,418,071, proof_size=6,934
- **Total Weight:** ref_time=6,114,599,509, proof_size=27,448
- **Weight Consumed:** ref_time=286,181,438 (4.7% of total), proof_size=20,514

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 83.8%         | 100.0%          |
| Events    | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 4.8%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 16        | 2          | 826,576     | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### MarketplaceProxy_evm - createItem_digital

- **Total Gas Used:** 1,839,143
- **Base Call Weight:** ref_time=917,501,270, proof_size=9,503
- **Total Weight:** ref_time=8,581,317,474, proof_size=1,021,670
- **Weight Consumed:** ref_time=7,663,816,204 (89.3% of total), proof_size=1,012,167

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 724,924   | 44         | 4,566,306,629 | 451,981    | 59.6%         | 44.7%           |
| Calls        | DELEGATECALL, call_evm                                                     | 26,439    | 3          | 1,322,011,678 | 560,186    | 17.3%         | 55.3%           |
| Crypto       | hash_keccak_256                                                            | 2,427     | 8          | 121,307,775   | 0          | 1.6%          | 0.0%            |
| Events       | deposit_event                                                              | 1,624     | 1          | 81,175,308    | 0          | 1.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 189       | 28         | 9,329,204     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 129       | 5          | 6,425,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, address, caller, now                                               | 54        | 7          | 2,711,000     | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 40        | 46         | 2,016,960     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 29        | 7          | 1,432,232     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 22        | 4          | 1,071,730     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 13        | 6          | 641,760       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 7         | 8          | 366,720       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 6         | 6          | 275,040       | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 2         | 2          | 91,680        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 2         | 2          | 91,680        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - createItem_digital

- **Total Gas Used:** 1,842,020
- **Base Call Weight:** ref_time=917,501,270, proof_size=9,503
- **Total Weight:** ref_time=8,725,188,862, proof_size=1,052,844
- **Weight Consumed:** ref_time=7,807,687,592 (89.5% of total), proof_size=1,043,341

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 724,925   | 44         | 4,566,306,629 | 451,981    | 58.5%         | 43.3%           |
| Calls       | call_evm, delegate_call_evm                    | 26,811    | 3          | 1,340,707,942 | 571,972    | 17.2%         | 54.8%           |
| Crypto      | hash_keccak_256                                | 2,426     | 8          | 121,307,775   | 0          | 1.6%          | 0.0%            |
| Events      | deposit_event                                  | 1,623     | 1          | 81,175,308    | 0          | 1.0%          | 0.0%            |
| Immutables  | get_immutable_data                             | 1,272     | 2          | 63,539,770    | 7,602      | 0.8%          | 0.7%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 197       | 26         | 9,843,956     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 127       | 5          | 6,425,000     | 0          | 0.1%          | 0.0%            |
| Context     | address, caller, now                           | 54        | 7          | 2,711,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 52        | 7          | 2,585,992     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 43        | 4          | 2,143,460     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - createItem_physical

- **Total Gas Used:** 1,783,951
- **Base Call Weight:** ref_time=917,501,270, proof_size=9,503
- **Total Weight:** ref_time=8,461,731,068, proof_size=1,021,734
- **Weight Consumed:** ref_time=7,544,229,798 (89.2% of total), proof_size=1,012,231

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 672,127   | 44         | 4,566,381,349 | 452,045    | 60.5%         | 44.7%           |
| Calls        | DELEGATECALL, call_evm                                                     | 26,439    | 3          | 1,322,011,678 | 560,186    | 17.5%         | 55.3%           |
| Crypto       | hash_keccak_256                                                            | 2,426     | 8          | 121,275,888   | 0          | 1.6%          | 0.0%            |
| Events       | deposit_event                                                              | 1,623     | 1          | 81,175,308    | 0          | 1.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 189       | 28         | 9,328,865     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 129       | 5          | 6,425,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, address, caller, now                                               | 54        | 7          | 2,711,000     | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 39        | 46         | 2,016,960     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 30        | 7          | 1,432,232     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 21        | 4          | 1,071,730     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 13        | 6          | 641,760       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 7         | 8          | 366,720       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 6         | 6          | 275,040       | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 2         | 2          | 91,680        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 2         | 2          | 91,680        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - createItem_physical

- **Total Gas Used:** 1,786,828
- **Base Call Weight:** ref_time=917,501,270, proof_size=9,503
- **Total Weight:** ref_time=8,605,602,456, proof_size=1,052,908
- **Weight Consumed:** ref_time=7,688,101,186 (89.3% of total), proof_size=1,043,405

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 672,127   | 44         | 4,566,381,349 | 452,045    | 59.4%         | 43.3%           |
| Calls       | call_evm, delegate_call_evm                    | 26,812    | 3          | 1,340,707,942 | 571,972    | 17.4%         | 54.8%           |
| Crypto      | hash_keccak_256                                | 2,424     | 8          | 121,275,888   | 0          | 1.6%          | 0.0%            |
| Events      | deposit_event                                  | 1,624     | 1          | 81,175,308    | 0          | 1.1%          | 0.0%            |
| Immutables  | get_immutable_data                             | 1,272     | 2          | 63,539,770    | 7,602      | 0.8%          | 0.7%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 196       | 26         | 9,843,617     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 127       | 5          | 6,425,000     | 0          | 0.1%          | 0.0%            |
| Context     | address, caller, now                           | 53        | 7          | 2,711,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 54        | 7          | 2,585,992     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 44        | 4          | 2,143,460     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - deactivateItem

- **Total Gas Used:** 308,538
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,871,092,628, proof_size=326,987
- **Weight Consumed:** ref_time=957,967,443 (51.2% of total), proof_size=318,549

| Category     | Opcodes Used                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls        | DELEGATECALL                                                | 0         | 1          | 506,306,858 | 277,296    | 52.9%         | 87.0%           |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear            | 7,608     | 4          | 380,273,707 | 41,253     | 39.7%         | 13.0%           |
| Crypto       | hash_keccak_256                                             | 304       | 1          | 15,219,717  | 0          | 1.6%          | 0.0%            |
| Events       | deposit_event                                               | 107       | 1          | 5,323,596   | 0          | 0.6%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                      | 46        | 2          | 2,248,000   | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_load, call_data_size  | 31        | 6          | 1,573,428   | 0          | 0.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2 | 20        | 23         | 1,008,480   | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller                                              | 16        | 2          | 806,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN, seal_return                                         | 11        | 2          | 529,465     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                             | 6         | 3          | 320,880     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                    | 3         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                         | 3         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                              | 2         | 3          | 61,120      | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                      | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                      | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - deactivateItem

- **Total Gas Used:** 309,966
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,942,492,932, proof_size=342,574
- **Weight Consumed:** ref_time=1,029,367,747 (53.0% of total), proof_size=334,136

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls       | delegate_call_evm                              | 0         | 1          | 506,306,858 | 277,296    | 49.2%         | 83.0%           |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 7,608     | 4          | 380,273,707 | 41,253     | 36.9%         | 12.3%           |
| Immutables  | get_immutable_data                             | 635       | 1          | 31,769,885  | 3,801      | 3.1%          | 1.1%            |
| Crypto      | hash_keccak_256                                | 304       | 1          | 15,219,717  | 0          | 1.5%          | 0.0%            |
| Events      | deposit_event                                  | 107       | 1          | 5,323,596   | 0          | 0.5%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 46        | 2          | 2,248,000   | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 37        | 5          | 1,846,644   | 0          | 0.2%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 23        | 3          | 1,127,000   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,058,930   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 16        | 2          | 806,000     | 0          | 0.1%          | 0.0%            |


### MarketplaceProxy_evm - deploy

- **Total Gas Used:** 36,444,052
- **Base Call Weight:** ref_time=1,563,738,373, proof_size=6,934
- **Total Weight:** ref_time=6,680,792,148, proof_size=576,628
- **Weight Consumed:** ref_time=5,117,053,775 (76.6% of total), proof_size=569,694

| Category     | Opcodes Used                                                                                                  | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE, get_storage_or_zero, set_storage_or_clear                                                      | 593,838   | 27         | 3,291,752,167 | 277,549    | 64.3%         | 48.7%           |
| Creation     | CREATE                                                                                                        | 19,469    | 1          | 973,473,034   | 6,829      | 19.0%         | 1.2%            |
| Calls        | DELEGATECALL                                                                                                  | 10,126    | 1          | 506,306,858   | 277,296    | 9.9%          | 48.7%           |
| Code         | CODECOPY, CODESIZE, EXTCODESIZE                                                                               | 2,646     | 11         | 132,398,864   | 8,020      | 2.6%          | 1.4%            |
| Events       | LOG1, LOG2, LOG3, deposit_event                                                                               | 1,039     | 5          | 51,901,884    | 0          | 1.0%          | 0.0%            |
| Crypto       | hash_keccak_256                                                                                               | 305       | 1          | 15,219,717    | 0          | 0.3%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 265       | 295        | 13,278,320    | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                         | 110       | 54         | 5,516,080     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS, value_transferred                                                                             | 58        | 4          | 2,886,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                      | 47        | 49         | 2,246,160     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                                             | 40        | 46         | 2,108,640     | 0          | 0.0%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                          | 33        | 33         | 1,604,400     | 0          | 0.0%          | 0.0%            |
| Comparison   | GT, ISZERO, LT, SLT                                                                                           | 22        | 23         | 1,054,320     | 0          | 0.0%          | 0.0%            |
| Calldata     | call_data_load, call_data_size                                                                                | 21        | 3          | 1,016,000     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                                                           | 11        | 3          | 529,465       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                | 1         | 1          | 30,560        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - deploy

- **Total Gas Used:** 53,692,986
- **Base Call Weight:** ref_time=1,704,115,105, proof_size=6,934
- **Total Weight:** ref_time=6,715,512,868, proof_size=583,244
- **Weight Consumed:** ref_time=5,011,397,763 (74.6% of total), proof_size=576,310

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 593,833   | 27         | 3,291,601,543 | 277,453    | 65.7%         | 48.1%           |
| Creation    | instantiate                                    | 10,678    | 1          | 533,931,778   | 13,541     | 10.7%         | 2.3%            |
| Calls       | delegate_call_evm                              | 10,126    | 1          | 506,306,858   | 277,296    | 10.1%         | 48.1%           |
| Code        | code_size                                      | 2,566     | 2          | 128,296,000   | 8,020      | 2.6%          | 1.4%            |
| Immutables  | set_immutable_data                             | 2,050     | 1          | 102,480,992   | 0          | 2.0%          | 0.0%            |
| Events      | deposit_event                                  | 1,040     | 5          | 51,901,884    | 0          | 1.0%          | 0.0%            |
| Crypto      | hash_keccak_256                                | 304       | 1          | 15,219,717    | 0          | 0.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 74        | 9          | 3,687,616     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 58        | 4          | 2,886,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 32        | 3          | 1,588,395     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                               | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - markAsShipped

- **Total Gas Used:** 803,363
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=3,712,344,722, proof_size=501,806
- **Weight Consumed:** ref_time=2,798,023,818 (75.4% of total), proof_size=493,077

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 248,361   | 21         | 1,857,950,359 | 215,781    | 66.4%         | 43.8%           |
| Calls        | DELEGATECALL                                                               | 10,126    | 1          | 506,326,058   | 277,296    | 18.1%         | 56.2%           |
| Crypto       | hash_keccak_256                                                            | 609       | 2          | 30,439,434    | 0          | 1.1%          | 0.0%            |
| Events       | deposit_event                                                              | 213       | 2          | 10,647,192    | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 55        | 9          | 2,776,848     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 44        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 37        | 5          | 1,847,000     | 0          | 0.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 21        | 23         | 1,008,480     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 11        | 2          | 529,465       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 6         | 3          | 320,880       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 4         | 4          | 183,360       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 2         | 3          | 137,520       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 2         | 3          | 61,120        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 0         | 1          | 45,840        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 1         | 1          | 45,840        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - markAsShipped

- **Total Gas Used:** 804,793
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=3,783,834,846, proof_size=517,393
- **Weight Consumed:** ref_time=2,869,513,942 (75.8% of total), proof_size=508,664

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 248,359   | 21         | 1,857,950,359 | 215,781    | 64.7%         | 42.4%           |
| Calls       | delegate_call_evm                              | 10,126    | 1          | 506,326,058   | 277,296    | 17.6%         | 54.5%           |
| Immutables  | get_immutable_data                             | 635       | 1          | 31,769,885    | 3,801      | 1.1%          | 0.7%            |
| Crypto      | hash_keccak_256                                | 609       | 2          | 30,439,434    | 0          | 1.1%          | 0.0%            |
| Events      | deposit_event                                  | 213       | 2          | 10,647,192    | 0          | 0.4%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 62        | 8          | 3,041,424     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 45        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 37        | 5          | 1,847,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 21        | 3          | 1,127,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 20        | 2          | 1,058,930     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - purchaseItem_digital

- **Total Gas Used:** 1,355,827
- **Base Call Weight:** ref_time=915,196,121, proof_size=8,942
- **Total Weight:** ref_time=11,035,522,764, proof_size=930,987
- **Weight Consumed:** ref_time=10,120,326,643 (91.7% of total), proof_size=922,045

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 630,840   | 62         | 7,782,081,224 | 639,155    | 76.9%         | 69.3%           |
| Calls        | DELEGATECALL, call_evm                                                     | 18,654    | 2          | 932,729,218   | 282,890    | 9.2%          | 30.7%           |
| Crypto       | hash_keccak_256                                                            | 1,218     | 4          | 60,878,868    | 0          | 0.6%          | 0.0%            |
| Events       | deposit_event                                                              | 719       | 2          | 35,931,096    | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 122       | 18         | 6,029,060     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 83        | 3          | 4,177,000     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 47        | 6          | 2,362,000     | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 19        | 23         | 1,008,480     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 18        | 4          | 875,616       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 10        | 2          | 535,865       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 7         | 3          | 320,880       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 4         | 4          | 183,360       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 3         | 3          | 137,520       | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 1         | 1          | 45,840        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 1         | 1          | 45,840        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - purchaseItem_digital

- **Total Gas Used:** 1,357,266
- **Base Call Weight:** ref_time=915,196,121, proof_size=8,942
- **Total Weight:** ref_time=11,107,509,128, proof_size=946,574
- **Weight Consumed:** ref_time=10,192,313,007 (91.8% of total), proof_size=937,632

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 630,843   | 62         | 7,782,081,224 | 639,155    | 76.4%         | 68.2%           |
| Calls       | call_evm, delegate_call_evm                    | 18,654    | 2          | 932,729,218   | 282,890    | 9.2%          | 30.2%           |
| Crypto      | hash_keccak_256                                | 1,216     | 4          | 60,878,868    | 0          | 0.6%          | 0.0%            |
| Events      | deposit_event                                  | 719       | 2          | 35,931,096    | 0          | 0.4%          | 0.0%            |
| Immutables  | get_immutable_data                             | 636       | 1          | 31,769,885    | 3,801      | 0.3%          | 0.4%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 125       | 17         | 6,287,876     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 83        | 3          | 4,177,000     | 0          | 0.0%          | 0.0%            |
| Context     | caller, now                                    | 46        | 6          | 2,362,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 30        | 4          | 1,452,496     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,071,730     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - purchaseItem_physical

- **Total Gas Used:** 1,826,560
- **Base Call Weight:** ref_time=916,786,304, proof_size=9,329
- **Total Weight:** ref_time=11,112,201,274, proof_size=956,487
- **Weight Consumed:** ref_time=10,195,414,970 (91.7% of total), proof_size=947,158

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 852,281   | 65         | 8,293,807,386 | 669,862    | 81.3%         | 70.7%           |
| Calls        | DELEGATECALL                                                               | 10,127    | 1          | 506,364,458   | 277,296    | 5.0%          | 29.3%           |
| Crypto       | hash_keccak_256                                                            | 1,520     | 5          | 75,985,209    | 0          | 0.7%          | 0.0%            |
| Events       | deposit_event                                                              | 443       | 1          | 22,179,532    | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 114       | 17         | 5,721,310     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 69        | 9          | 3,403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 44        | 2          | 2,248,000     | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 21        | 23         | 1,008,480     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 10        | 3          | 556,616       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 11        | 2          | 535,865       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 8         | 3          | 320,880       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 4         | 4          | 183,360       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 2         | 3          | 137,520       | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 1         | 1          | 45,840        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 1         | 1          | 45,840        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - purchaseItem_physical

- **Total Gas Used:** 1,828,000
- **Base Call Weight:** ref_time=916,786,304, proof_size=9,329
- **Total Weight:** ref_time=11,184,176,118, proof_size=972,074
- **Weight Consumed:** ref_time=10,267,389,814 (91.8% of total), proof_size=962,745

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 852,277   | 65         | 8,293,807,386 | 669,862    | 80.8%         | 69.6%           |
| Calls       | delegate_call_evm                              | 10,126    | 1          | 506,364,458   | 277,296    | 4.9%          | 28.8%           |
| Crypto      | hash_keccak_256                                | 1,520     | 5          | 75,985,209    | 0          | 0.7%          | 0.0%            |
| Immutables  | get_immutable_data                             | 635       | 1          | 31,769,885    | 3,801      | 0.3%          | 0.4%            |
| Events      | deposit_event                                  | 444       | 1          | 22,179,532    | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 118       | 16         | 5,968,606     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 67        | 9          | 3,403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 45        | 2          | 2,248,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 22        | 3          | 1,133,496     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 20        | 2          | 1,071,730     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - purchaseItem_with_matchmaker

- **Total Gas Used:** 1,591,877
- **Base Call Weight:** ref_time=915,196,121, proof_size=8,942
- **Total Weight:** ref_time=12,278,036,655, proof_size=1,023,105
- **Weight Consumed:** ref_time=11,362,840,534 (92.5% of total), proof_size=1,014,163

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 856,381   | 71         | 8,499,361,086 | 731,273    | 74.8%         | 72.1%           |
| Calls        | DELEGATECALL, call_evm                                                     | 18,653    | 2          | 932,729,218   | 282,890    | 8.2%          | 27.9%           |
| Crypto       | hash_keccak_256                                                            | 2,131     | 7          | 106,538,019   | 0          | 0.9%          | 0.0%            |
| Events       | deposit_event                                                              | 1,161     | 3          | 58,110,628    | 0          | 0.5%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 129       | 19         | 6,372,060     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, ref_time_left, value_transferred                                      | 84        | 3          | 4,177,000     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 48        | 6          | 2,362,000     | 0          | 0.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 19        | 23         | 1,008,480     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE, return_data_size                           | 19        | 4          | 875,616       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 11        | 2          | 535,865       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 7         | 3          | 320,880       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 4         | 4          | 183,360       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 3         | 3          | 137,520       | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 1         | 1          | 45,840        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 1         | 1          | 45,840        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - purchaseItem_with_matchmaker

- **Total Gas Used:** 1,593,317
- **Base Call Weight:** ref_time=915,196,121, proof_size=8,942
- **Total Weight:** ref_time=12,350,023,019, proof_size=1,038,692
- **Weight Consumed:** ref_time=11,434,826,898 (92.6% of total), proof_size=1,029,750

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 856,386   | 71         | 8,499,361,086 | 731,273    | 74.3%         | 71.0%           |
| Calls       | call_evm, delegate_call_evm                    | 18,654    | 2          | 932,729,218   | 282,890    | 8.2%          | 27.5%           |
| Crypto      | hash_keccak_256                                | 2,131     | 7          | 106,538,019   | 0          | 0.9%          | 0.0%            |
| Events      | deposit_event                                  | 1,163     | 3          | 58,110,628    | 0          | 0.5%          | 0.0%            |
| Immutables  | get_immutable_data                             | 636       | 1          | 31,769,885    | 3,801      | 0.3%          | 0.4%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 132       | 18         | 6,630,876     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 83        | 3          | 4,177,000     | 0          | 0.0%          | 0.0%            |
| Context     | caller, now                                    | 47        | 6          | 2,362,000     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 28        | 4          | 1,452,496     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 21        | 2          | 1,071,730     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - registerMatchMaker

- **Total Gas Used:** 965,154
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=3,881,871,521, proof_size=450,362
- **Weight Consumed:** ref_time=2,967,550,617 (76.4% of total), proof_size=441,633

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 410,031   | 16         | 2,021,508,407 | 164,337    | 68.1%         | 37.2%           |
| Calls        | DELEGATECALL                                                               | 10,126    | 1          | 506,326,058   | 277,296    | 17.1%         | 62.8%           |
| Crypto       | hash_keccak_256                                                            | 913       | 3          | 45,659,151    | 0          | 1.5%          | 0.0%            |
| Events       | deposit_event                                                              | 781       | 1          | 39,035,468    | 0          | 1.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 66        | 10         | 3,276,362     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 47        | 6          | 2,362,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 44        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 19        | 23         | 1,008,480     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 12        | 3          | 556,616       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 11        | 2          | 535,865       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 6         | 3          | 320,880       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 4         | 4          | 183,360       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 2         | 3          | 137,520       | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 1         | 1          | 45,840        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 1         | 1          | 45,840        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - registerMatchMaker

- **Total Gas Used:** 966,594
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=3,953,863,645, proof_size=465,949
- **Weight Consumed:** ref_time=3,039,542,741 (76.9% of total), proof_size=457,220

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 410,028   | 16         | 2,021,508,407 | 164,337    | 66.5%         | 35.9%           |
| Calls       | delegate_call_evm                              | 10,126    | 1          | 506,326,058   | 277,296    | 16.7%         | 60.6%           |
| Crypto      | hash_keccak_256                                | 914       | 3          | 45,659,151    | 0          | 1.5%          | 0.0%            |
| Events      | deposit_event                                  | 781       | 1          | 39,035,468    | 0          | 1.3%          | 0.0%            |
| Immutables  | get_immutable_data                             | 635       | 1          | 31,769,885    | 3,801      | 1.0%          | 0.8%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 73        | 9          | 3,540,938     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 48        | 6          | 2,362,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 45        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 22        | 3          | 1,133,496     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,071,730     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - registerShop

- **Total Gas Used:** 1,522,348
- **Base Call Weight:** ref_time=917,106,806, proof_size=9,407
- **Total Weight:** ref_time=3,861,570,964, proof_size=450,847
- **Weight Consumed:** ref_time=2,944,464,158 (76.3% of total), proof_size=441,440

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 515,586   | 16         | 2,019,254,431 | 164,144    | 68.6%         | 37.2%           |
| Calls        | DELEGATECALL                                                               | 10,127    | 1          | 506,370,858   | 277,296    | 17.2%         | 62.8%           |
| Events       | deposit_event                                                              | 1,960     | 1          | 98,031,244    | 0          | 3.3%          | 0.0%            |
| Crypto       | hash_keccak_256                                                            | 606       | 2          | 30,326,058    | 0          | 1.0%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 131       | 19         | 6,568,964     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 46        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller, now                                                        | 39        | 5          | 1,959,000     | 0          | 0.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 20        | 23         | 1,008,480     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 10        | 2          | 529,465       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 6         | 3          | 320,880       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 4         | 4          | 183,360       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 3         | 3          | 137,520       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 1         | 3          | 61,120        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 1         | 1          | 45,840        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 1         | 1          | 45,840        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - registerShop

- **Total Gas Used:** 1,523,777
- **Base Call Weight:** ref_time=917,106,806, proof_size=9,407
- **Total Weight:** ref_time=3,933,040,928, proof_size=466,434
- **Weight Consumed:** ref_time=3,015,934,122 (76.7% of total), proof_size=457,027

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 515,585   | 16         | 2,019,254,431 | 164,144    | 67.0%         | 35.9%           |
| Calls       | delegate_call_evm                              | 10,127    | 1          | 506,370,858   | 277,296    | 16.8%         | 60.7%           |
| Events      | deposit_event                                  | 1,961     | 1          | 98,031,244    | 0          | 3.3%          | 0.0%            |
| Immutables  | get_immutable_data                             | 636       | 1          | 31,769,885    | 3,801      | 1.1%          | 0.8%            |
| Crypto      | hash_keccak_256                                | 607       | 2          | 30,326,058    | 0          | 1.0%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 133       | 18         | 6,813,380     | 0          | 0.2%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 45        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                                    | 39        | 5          | 1,959,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 23        | 3          | 1,127,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,058,930     | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - updateItem

- **Total Gas Used:** 1,180,405
- **Base Call Weight:** ref_time=917,106,806, proof_size=9,407
- **Total Weight:** ref_time=5,244,458,725, proof_size=554,090
- **Weight Consumed:** ref_time=4,327,351,919 (82.5% of total), proof_size=544,683

| Category     | Opcodes Used                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear                           | 159,867   | 26         | 2,713,303,853 | 267,387    | 62.7%         | 49.1%           |
| Calls        | DELEGATECALL                                                               | 10,127    | 1          | 506,370,858   | 277,296    | 11.7%         | 50.9%           |
| Crypto       | hash_keccak_256                                                            | 2,719     | 9          | 135,939,354   | 0          | 3.1%          | 0.0%            |
| Events       | deposit_event                                                              | 1,792     | 1          | 89,603,276    | 0          | 2.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_copy, call_data_load, call_data_size | 120       | 17         | 6,033,037     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                                     | 46        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2                | 21        | 23         | 1,008,480     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER, caller                                                             | 16        | 2          | 806,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, seal_return                                                        | 11        | 2          | 529,465       | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                            | 6         | 3          | 320,880       | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                                   | 4         | 4          | 183,360       | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                                        | 3         | 3          | 137,520       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                                             | 0         | 3          | 61,120        | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                                     | 1         | 1          | 45,840        | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                     | 1         | 1          | 45,840        | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - updateItem

- **Total Gas Used:** 1,181,835
- **Base Call Weight:** ref_time=917,106,806, proof_size=9,407
- **Total Weight:** ref_time=5,315,928,689, proof_size=569,677
- **Weight Consumed:** ref_time=4,398,821,883 (82.7% of total), proof_size=560,270

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 159,864   | 26         | 2,713,303,853 | 267,387    | 61.7%         | 47.7%           |
| Calls       | delegate_call_evm                              | 10,127    | 1          | 506,370,858   | 277,296    | 11.5%         | 49.5%           |
| Crypto      | hash_keccak_256                                | 2,719     | 9          | 135,939,354   | 0          | 3.1%          | 0.0%            |
| Events      | deposit_event                                  | 1,792     | 1          | 89,603,276    | 0          | 2.0%          | 0.0%            |
| Immutables  | get_immutable_data                             | 636       | 1          | 31,769,885    | 3,801      | 0.7%          | 0.7%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 126       | 16         | 6,277,453     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 45        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 22        | 3          | 1,127,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                                    | 20        | 2          | 1,058,930     | 0          | 0.0%          | 0.0%            |
| Context     | caller                                         | 16        | 2          | 806,000       | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_evm - updateMatchMakerFee

- **Total Gas Used:** 361,510
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=2,079,704,723, proof_size=347,462
- **Weight Consumed:** ref_time=1,166,604,192 (56.1% of total), proof_size=339,030

| Category     | Opcodes Used                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, get_storage_or_zero, set_storage_or_clear            | 10,331    | 6          | 516,448,401 | 61,734     | 44.3%         | 18.2%           |
| Calls        | DELEGATECALL                                                | 10,126    | 1          | 506,306,858 | 277,296    | 43.4%         | 81.8%           |
| Crypto       | hash_keccak_256                                             | 608       | 2          | 30,439,434  | 0          | 2.6%          | 0.0%            |
| Events       | deposit_event                                               | 444       | 1          | 22,179,532  | 0          | 1.9%          | 0.0%            |
| Ether/Gas    | GAS, value_transferred                                      | 44        | 2          | 2,248,000   | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATASIZE, call_data_load, call_data_size  | 32        | 6          | 1,573,428   | 0          | 0.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2 | 21        | 23         | 1,008,480   | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, caller                                              | 16        | 2          | 806,000     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN, seal_return                                         | 11        | 2          | 529,465     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                             | 6         | 3          | 320,880     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, SHL                                                    | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                                         | 3         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATACOPY, RETURNDATASIZE                              | 0         | 3          | 61,120      | 0          | 0.0%          | 0.0%            |
| Comparison   | ISZERO                                                      | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                      | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |


### MarketplaceProxy_pvm - updateMatchMakerFee

- **Total Gas Used:** 362,938
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=2,151,105,027, proof_size=363,049
- **Weight Consumed:** ref_time=1,238,004,496 (57.6% of total), proof_size=354,617

| Category    | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear      | 10,331    | 6          | 516,448,401 | 61,734     | 41.7%         | 17.4%           |
| Calls       | delegate_call_evm                              | 10,126    | 1          | 506,306,858 | 277,296    | 40.9%         | 78.2%           |
| Immutables  | get_immutable_data                             | 636       | 1          | 31,769,885  | 3,801      | 2.6%          | 1.1%            |
| Crypto      | hash_keccak_256                                | 608       | 2          | 30,439,434  | 0          | 2.5%          | 0.0%            |
| Events      | deposit_event                                  | 444       | 1          | 22,179,532  | 0          | 1.8%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred               | 44        | 2          | 2,248,000   | 0          | 0.2%          | 0.0%            |
| Calldata    | call_data_copy, call_data_load, call_data_size | 37        | 5          | 1,846,644   | 0          | 0.1%          | 0.0%            |
| Return Data | return_data_copy, return_data_size             | 24        | 3          | 1,127,000   | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                                    | 22        | 2          | 1,058,930   | 0          | 0.1%          | 0.0%            |
| Context     | caller                                         | 16        | 2          | 806,000     | 0          | 0.1%          | 0.0%            |


### MockMobRule_evm - addCounterEvidence

- **Total Gas Used:** 597,976
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=1,362,999,192, proof_size=49,853
- **Weight Consumed:** ref_time=448,678,288 (32.9% of total), proof_size=41,124

| Category     | Opcodes Used                                                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                      | 60,362    | 4          | 378,094,451 | 41,124     | 84.3%         | 100.0%          |
| Events       | LOG3                                                                                                                               | 612       | 1          | 30,607,500  | 0          | 6.8%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                          | 304       | 1          | 15,219,717  | 0          | 3.4%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 208       | 232        | 10,466,800  | 0          | 2.3%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                              | 155       | 80         | 7,731,680   | 0          | 1.7%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                            | 38        | 40         | 1,833,600   | 0          | 0.4%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                           | 23        | 25         | 1,146,000   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                             | 23        | 23         | 1,054,320   | 0          | 0.2%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                               | 15        | 16         | 779,280     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                           | 15        | 8          | 768,100     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                                             | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                          | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - addCounterEvidence

- **Total Gas Used:** 602,395
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=1,583,949,442, proof_size=96,818
- **Weight Consumed:** ref_time=669,628,538 (42.3% of total), proof_size=88,089

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 60,360    | 4          | 377,994,035 | 41,060     | 56.4%         | 46.6%           |
| Events    | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 4.6%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 304       | 1          | 15,219,717  | 0          | 2.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 44        | 6          | 2,200,836   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### MockMobRule_evm - createDispute

- **Total Gas Used:** 1,204,010
- **Base Call Weight:** ref_time=915,516,623, proof_size=9,020
- **Total Weight:** ref_time=3,484,671,920, proof_size=204,191
- **Weight Consumed:** ref_time=2,569,155,297 (73.7% of total), proof_size=195,171

| Category     | Opcodes Used                                                                                                                                                                                                          | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                         | 470,998   | 19         | 2,429,909,530 | 195,171    | 94.6%         | 100.0%          |
| Events       | LOG4                                                                                                                                                                                                                  | 950       | 1          | 47,463,436    | 0          | 1.8%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                                                                                             | 915       | 3          | 45,659,151    | 0          | 1.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 443       | 489        | 22,094,880    | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                 | 215       | 108        | 10,787,680    | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                | 72        | 77         | 3,529,680     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                              | 56        | 66         | 3,025,440     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                               | 49        | 54         | 2,475,360     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                                                                                                                  | 47        | 48         | 2,246,160     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                              | 19        | 14         | 1,043,140     | 0          | 0.0%          | 0.0%            |
| Context      | TIMESTAMP                                                                                                                                                                                                             | 7         | 1          | 347,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                             | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - createDispute

- **Total Gas Used:** 1,213,595
- **Base Call Weight:** ref_time=915,516,623, proof_size=9,020
- **Total Weight:** ref_time=3,963,934,532, proof_size=251,254
- **Weight Consumed:** ref_time=3,048,417,909 (76.9% of total), proof_size=242,234

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 471,081   | 19         | 2,433,952,554 | 195,205    | 79.8%         | 80.6%           |
| Events    | deposit_event                                  | 949       | 1          | 47,463,436    | 0          | 1.6%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 913       | 3          | 45,659,151    | 0          | 1.5%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 85        | 12         | 4,258,836     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 10        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Context   | now                                            | 7         | 1          | 347,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### MockMobRule_evm - deploy

- **Total Gas Used:** 28,356,578
- **Base Call Weight:** ref_time=1,611,722,805, proof_size=6,934
- **Total Weight:** ref_time=2,038,066,960, proof_size=37,737
- **Weight Consumed:** ref_time=426,344,155 (20.9% of total), proof_size=30,803

| Category     | Opcodes Used                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                    | 113,807   | 3          | 410,365,307 | 30,803     | 96.3%         | 100.0%          |
| Events       | LOG3                                                                                             | 107       | 1          | 5,323,596   | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, POP, PUSH0, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP5 | 86        | 95         | 4,324,240   | 0          | 1.0%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                               | 43        | 3          | 2,146,172   | 0          | 0.5%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                            | 31        | 15         | 1,619,680   | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                                                                                | 18        | 18         | 825,120     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                         | 16        | 17         | 779,280     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                    | 8         | 9          | 412,560     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                        | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | GT, ISZERO, LT, SLT                                                                              | 5         | 5          | 229,200     | 0          | 0.1%          | 0.0%            |
| Return       | RETURN                                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - deploy

- **Total Gas Used:** 125,448,402
- **Base Call Weight:** ref_time=2,261,786,343, proof_size=6,934
- **Total Weight:** ref_time=2,852,280,559, proof_size=37,705
- **Weight Consumed:** ref_time=590,494,216 (20.7% of total), proof_size=30,771

| Category   | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | get_storage_or_zero, set_storage_or_clear | 113,807   | 3          | 410,315,099 | 30,771     | 69.5%         | 100.0%          |
| Immutables | set_immutable_data                        | 2,049     | 1          | 102,480,992 | 0          | 17.4%         | 0.0%            |
| Events     | deposit_event                             | 107       | 1          | 5,323,596   | 0          | 0.9%          | 0.0%            |
| Calldata   | call_data_copy, call_data_size            | 27        | 3          | 1,330,384   | 0          | 0.2%          | 0.0%            |
| Return     | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas  | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### MockMobRule_evm - resolveCase

- **Total Gas Used:** 470,591
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,393,756,019, proof_size=59,950
- **Weight Consumed:** ref_time=480,224,043 (34.5% of total), proof_size=51,413

| Category     | Opcodes Used                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                 | 61,746    | 5          | 447,259,170 | 51,413     | 93.1%         | 100.0%          |
| Crypto       | KECCAK256                                                                     | 304       | 1          | 15,219,717  | 0          | 3.2%          | 0.0%            |
| Events       | LOG3                                                                          | 107       | 1          | 5,323,596   | 0          | 1.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                         | 95        | 41         | 4,645,120   | 0          | 1.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2 | 88        | 102        | 4,584,000   | 0          | 1.0%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                           | 25        | 28         | 1,283,520   | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                        | 9         | 9          | 412,560     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                        | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                     | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                    | 4         | 5          | 198,640     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                      | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                                        | 3         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### MockMobRule_pvm - resolveCase

- **Total Gas Used:** 472,845
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,506,433,379, proof_size=106,915
- **Weight Consumed:** ref_time=592,901,403 (39.4% of total), proof_size=98,378

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 61,743    | 5          | 447,158,754 | 51,349     | 75.4%         | 52.2%           |
| Crypto    | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 2.6%          | 0.0%            |
| Events    | deposit_event                             | 106       | 1          | 5,323,596   | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,359,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### NonFungibleCredential_evm - deploy

- **Total Gas Used:** 30,042,342
- **Base Call Weight:** ref_time=1,623,244,133, proof_size=6,934
- **Total Weight:** ref_time=1,866,311,066, proof_size=27,480
- **Weight Consumed:** ref_time=243,066,933 (13.0% of total), proof_size=20,546

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 57,595    | 2          | 239,765,013 | 20,546     | 98.6%         | 100.0%          |
| Code         | CODECOPY                                     | 37        | 1          | 1,836,920   | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 13        | 16         | 718,160     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 4         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                        | 3         | 1          | 152,800     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                       | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - deploy

- **Total Gas Used:** 162,690,632
- **Base Call Weight:** ref_time=2,551,866,335, proof_size=6,934
- **Total Weight:** ref_time=2,807,765,405, proof_size=27,448
- **Weight Consumed:** ref_time=255,899,070 (9.1% of total), proof_size=20,514

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,595    | 2          | 239,714,805 | 20,514     | 93.7%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size            | 16        | 2          | 826,576     | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### non_fungible_credential_rust - deploy

- **Total Gas Used:** 55,328,067
- **Base Call Weight:** ref_time=1,800,162,987, proof_size=6,934
- **Total Weight:** ref_time=2,033,558,283, proof_size=17,191
- **Weight Consumed:** ref_time=233,395,296 (11.5% of total), proof_size=10,257

| Category | Opcodes Used    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | --------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | set_storage     | 54,612    | 1          | 170,586,806 | 10,257     | 73.1%         | 100.0%          |
| Crypto   | hash_keccak_256 | 301       | 1          | 15,049,653  | 0          | 6.4%          | 0.0%            |
| Return   | seal_return     | 11        | 1          | 529,465     | 0          | 0.2%          | 0.0%            |


### NonFungibleCredential_evm - issue_nontransferable

- **Total Gas Used:** 1,231,710
- **Base Call Weight:** ref_time=915,504,296, proof_size=9,017
- **Total Weight:** ref_time=4,969,684,244, proof_size=337,977
- **Weight Consumed:** ref_time=4,054,179,948 (81.6% of total), proof_size=328,960

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 497,101   | 32         | 3,734,933,721 | 328,960    | 92.1%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 4,556     | 15         | 227,796,192   | 0          | 5.6%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                             | 612       | 1          | 30,607,500    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 598       | 671        | 30,254,400    | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 191       | 101        | 9,733,360     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 132       | 138        | 6,325,920     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 86        | 93         | 4,263,120     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 59        | 16         | 2,905,375     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 54        | 61         | 2,796,240     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 51        | 52         | 2,383,680     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 31        | 4          | 1,556,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_nontransferable

- **Total Gas Used:** 1,255,015
- **Base Call Weight:** ref_time=915,504,296, proof_size=9,017
- **Total Weight:** ref_time=6,134,924,617, proof_size=444,529
- **Weight Consumed:** ref_time=5,219,420,321 (85.1% of total), proof_size=435,512

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 506,809   | 36         | 4,220,567,627 | 370,151    | 80.9%         | 85.0%           |
| Crypto    | hash_keccak_256                                | 4,862     | 16         | 243,015,909   | 0          | 4.7%          | 0.0%            |
| Events    | deposit_event                                  | 613       | 1          | 30,607,500    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 105       | 13         | 5,223,485     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 31        | 4          | 1,556,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - issue_nontransferable

- **Total Gas Used:** 1,064,816
- **Base Call Weight:** ref_time=915,504,296, proof_size=9,017
- **Total Weight:** ref_time=3,794,967,350, proof_size=150,012
- **Weight Consumed:** ref_time=2,879,463,054 (75.9% of total), proof_size=140,995

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 311,824   | 12         | 1,641,273,162 | 123,132    | 57.0%         | 87.3%           |
| Crypto   | hash_keccak_256          | 4,237     | 14         | 211,835,988   | 0          | 7.4%          | 0.0%            |
| Events   | deposit_event            | 276       | 1          | 13,751,564    | 0          | 0.5%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272     | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - issue_transferable

- **Total Gas Used:** 1,390,108
- **Base Call Weight:** ref_time=915,504,296, proof_size=9,017
- **Total Weight:** ref_time=4,969,579,856, proof_size=337,849
- **Weight Consumed:** ref_time=4,054,075,560 (81.6% of total), proof_size=328,832

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 655,494   | 32         | 3,734,817,689 | 328,832    | 92.1%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 4,555     | 15         | 227,806,821   | 0          | 5.6%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                             | 613       | 1          | 30,607,500    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 605       | 671        | 30,254,400    | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 192       | 101        | 9,733,360     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 129       | 138        | 6,325,920     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 87        | 93         | 4,263,120     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 58        | 16         | 2,906,390     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 55        | 61         | 2,796,240     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 50        | 52         | 2,383,680     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 31        | 4          | 1,556,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_transferable

- **Total Gas Used:** 1,413,383
- **Base Call Weight:** ref_time=915,504,296, proof_size=9,017
- **Total Weight:** ref_time=6,133,344,587, proof_size=444,240
- **Weight Consumed:** ref_time=5,217,840,291 (85.1% of total), proof_size=435,223

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 665,164   | 36         | 4,218,188,723 | 369,862    | 80.8%         | 85.0%           |
| Crypto    | hash_keccak_256                                | 4,858     | 16         | 243,026,538   | 0          | 4.7%          | 0.0%            |
| Events    | deposit_event                                  | 612       | 1          | 30,607,500    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 105       | 13         | 5,224,050     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 31        | 4          | 1,556,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - issue_transferable

- **Total Gas Used:** 1,167,006
- **Base Call Weight:** ref_time=915,504,296, proof_size=9,017
- **Total Weight:** ref_time=3,784,496,773, proof_size=149,980
- **Weight Consumed:** ref_time=2,868,992,477 (75.8% of total), proof_size=140,963

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 414,225   | 12         | 1,641,235,802 | 123,100    | 57.2%         | 87.3%           |
| Crypto   | hash_keccak_256          | 4,237     | 14         | 211,839,531   | 0          | 7.4%          | 0.0%            |
| Events   | deposit_event            | 275       | 1          | 13,751,564    | 0          | 0.5%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272     | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - issue_with_expiry

- **Total Gas Used:** 1,178,911
- **Base Call Weight:** ref_time=915,504,296, proof_size=9,017
- **Total Weight:** ref_time=4,969,762,896, proof_size=338,041
- **Weight Consumed:** ref_time=4,054,258,600 (81.6% of total), proof_size=329,024

| Category     | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                                                    | 444,301   | 32         | 3,735,000,729 | 329,024    | 92.1%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                                                        | 4,557     | 15         | 227,806,821   | 0          | 5.6%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                                                                             | 612       | 1          | 30,607,500    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 598       | 671        | 30,254,400    | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 191       | 101        | 9,733,360     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 133       | 138        | 6,325,920     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                                                         | 83        | 93         | 4,263,120     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 59        | 16         | 2,906,390     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                                                    | 57        | 61         | 2,796,240     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 51        | 52         | 2,383,680     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                                                | 31        | 4          | 1,556,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                                                        | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_with_expiry

- **Total Gas Used:** 1,202,079
- **Base Call Weight:** ref_time=915,504,296, proof_size=9,017
- **Total Weight:** ref_time=6,128,156,371, proof_size=444,430
- **Weight Consumed:** ref_time=5,212,652,075 (85.1% of total), proof_size=435,413

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 453,888   | 36         | 4,214,378,947 | 370,052    | 80.8%         | 85.0%           |
| Crypto    | hash_keccak_256                                | 4,863     | 16         | 243,026,538   | 0          | 4.7%          | 0.0%            |
| Events    | deposit_event                                  | 612       | 1          | 30,607,500    | 0          | 0.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 105       | 13         | 5,224,050     | 0          | 0.1%          | 0.0%            |
| Context   | caller, now                                    | 32        | 4          | 1,556,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - issue_with_expiry

- **Total Gas Used:** 1,015,416
- **Base Call Weight:** ref_time=915,504,296, proof_size=9,017
- **Total Weight:** ref_time=3,804,987,759, proof_size=150,028
- **Weight Consumed:** ref_time=2,889,483,463 (75.9% of total), proof_size=141,011

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 262,227   | 12         | 1,641,296,338 | 123,148    | 56.8%         | 87.3%           |
| Crypto   | hash_keccak_256          | 4,237     | 14         | 211,839,531   | 0          | 7.3%          | 0.0%            |
| Events   | deposit_event            | 275       | 1          | 13,751,564    | 0          | 0.5%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272     | 0          | 0.0%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 10        | 1          | 535,865       | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - revoke

- **Total Gas Used:** 346,944
- **Base Call Weight:** ref_time=913,112,858, proof_size=8,435
- **Total Weight:** ref_time=1,251,405,815, proof_size=39,302
- **Weight Consumed:** ref_time=338,292,957 (27.0% of total), proof_size=30,867

| Category     | Opcodes Used                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                    | 6,179     | 3          | 308,954,244 | 30,867     | 91.3%         | 100.0%          |
| Crypto       | KECCAK256                                                        | 304       | 1          | 15,219,717  | 0          | 4.5%          | 0.0%            |
| Events       | LOG3                                                             | 107       | 1          | 5,323,596   | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1 | 68        | 73         | 3,269,920   | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                            | 45        | 19         | 2,292,000   | 0          | 0.7%          | 0.0%            |
| Context      | CALLER                                                           | 16        | 2          | 806,000     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                           | 13        | 14         | 641,760     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                              | 9         | 11         | 504,240     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                         | 8         | 8          | 366,720     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                        | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                       | 3         | 4          | 152,800     | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                           | 2         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - revoke

- **Total Gas Used:** 349,596
- **Base Call Weight:** ref_time=913,112,858, proof_size=8,435
- **Total Weight:** ref_time=1,383,968,815, proof_size=104,663
- **Weight Consumed:** ref_time=470,855,957 (34.0% of total), proof_size=96,228

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,179     | 3          | 308,954,244 | 30,867     | 65.6%         | 32.1%           |
| Crypto    | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 3.2%          | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,323,596   | 0          | 1.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 20        | 3          | 1,016,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 16        | 2          | 806,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### non_fungible_credential_rust - revoke

- **Total Gas Used:** 353,831
- **Base Call Weight:** ref_time=913,112,858, proof_size=8,435
- **Total Weight:** ref_time=1,595,732,890, proof_size=47,058
- **Weight Consumed:** ref_time=682,620,032 (42.8% of total), proof_size=38,623

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,801     | 2          | 240,053,152 | 20,760     | 35.2%         | 53.8%           |
| Crypto   | hash_keccak_256          | 904       | 3          | 45,258,792  | 0          | 6.6%          | 0.0%            |
| Events   | deposit_event            | 106       | 1          | 5,323,596   | 0          | 0.8%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |


### NonFungibleCredential_evm - transfer

- **Total Gas Used:** 623,497
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=6,599,059,373, proof_size=502,147
- **Weight Consumed:** ref_time=5,685,552,051 (86.2% of total), proof_size=493,616

| Category     | Opcodes Used                                                                                                                                                        | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                       | 206,489   | 48         | 5,044,423,991 | 493,616    | 88.7%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                           | 11,540    | 38         | 577,095,024   | 0          | 10.2%         | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 633       | 714        | 31,568,480    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                               | 220       | 123        | 11,108,560    | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                              | 108       | 117        | 5,363,280     | 0          | 0.1%          | 0.0%            |
| Events       | LOG4                                                                                                                                                                | 107       | 1          | 5,323,596     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                                                                                | 88        | 86         | 4,263,120     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                            | 63        | 69         | 3,162,960     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                             | 39        | 44         | 2,016,960     | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                                              | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                           | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                          | 4         | 5          | 198,640       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - transfer

- **Total Gas Used:** 642,143
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=7,531,318,193, proof_size=567,962
- **Weight Consumed:** ref_time=6,617,810,871 (87.9% of total), proof_size=559,431

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 206,738   | 48         | 5,057,156,743 | 494,070    | 76.4%         | 88.3%           |
| Crypto    | hash_keccak_256                           | 11,539    | 38         | 577,095,024   | 0          | 8.7%          | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,323,596     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 28        | 4          | 1,359,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### non_fungible_credential_rust - transfer

- **Total Gas Used:** 648,911
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=2,909,745,020, proof_size=108,696
- **Weight Consumed:** ref_time=1,996,237,698 (68.6% of total), proof_size=100,165

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 226,013   | 8          | 1,060,629,398 | 82,302     | 53.1%         | 82.2%           |
| Crypto   | hash_keccak_256          | 2,728     | 9          | 136,364,514   | 0          | 6.8%          | 0.0%            |
| Events   | deposit_event            | 107       | 1          | 5,323,596     | 0          | 0.3%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - updateMetadata

- **Total Gas Used:** 411,713
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=1,189,817,175, proof_size=29,112
- **Weight Consumed:** ref_time=276,297,526 (23.2% of total), proof_size=20,578

| Category     | Opcodes Used                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                         | 4,795     | 2          | 239,789,525 | 20,578     | 86.8%         | 100.0%          |
| Crypto       | KECCAK256                                                                             | 305       | 1          | 15,219,717  | 0          | 5.5%          | 0.0%            |
| Events       | LOG2                                                                                  | 275       | 1          | 13,751,564  | 0          | 5.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 57        | 67         | 3,010,160   | 0          | 1.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                 | 39        | 16         | 1,833,600   | 0          | 0.7%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                    | 11        | 11         | 504,240     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                              | 8         | 8          | 366,720     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                   | 8         | 8          | 366,720     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                             | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                         | 5         | 5          | 229,200     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                            | 3         | 5          | 198,640     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - updateMetadata

- **Total Gas Used:** 414,571
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=1,332,746,111, proof_size=94,473
- **Weight Consumed:** ref_time=419,226,462 (31.5% of total), proof_size=85,939

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,796     | 2          | 239,789,525 | 20,578     | 57.2%         | 23.9%           |
| Crypto    | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 3.6%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 3.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,359,000   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### non_fungible_credential_rust - updateMetadata

- **Total Gas Used:** 420,517
- **Base Call Weight:** ref_time=913,519,649, proof_size=8,534
- **Total Weight:** ref_time=1,630,061,703, proof_size=47,157
- **Weight Consumed:** ref_time=716,542,054 (44.0% of total), proof_size=38,623

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,801     | 2          | 240,053,152 | 20,760     | 33.5%         | 53.8%           |
| Crypto   | hash_keccak_256          | 906       | 3          | 45,251,706  | 0          | 6.3%          | 0.0%            |
| Events   | deposit_event            | 275       | 1          | 13,751,564  | 0          | 1.9%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272   | 0          | 0.2%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |


### SimpleToken_evm - deploy

- **Total Gas Used:** 15,980,210
- **Base Call Weight:** ref_time=1,525,170,411, proof_size=6,934
- **Total Weight:** ref_time=1,526,683,194, proof_size=6,934
- **Weight Consumed:** ref_time=1,512,783 (0.1% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 11        | 1          | 582,583  | 0          | 38.5%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 9         | 9          | 412,560  | 0          | 27.3%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 319,000  | 0          | 21.1%         | 0.0%            |
| Control Flow | JUMPI                                 | 3         | 1          | 152,800  | 0          | 10.1%         | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 45,840   | 0          | 3.0%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - deploy

- **Total Gas Used:** 26,354,961
- **Base Call Weight:** ref_time=1,597,748,447, proof_size=6,934
- **Total Weight:** ref_time=1,608,242,984, proof_size=6,934
- **Weight Consumed:** ref_time=10,494,537 (0.7% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 17        | 2          | 826,576  | 0          | 7.9%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 529,465  | 0          | 5.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 319,000  | 0          | 3.0%          | 0.0%            |


### simple_token_ink - deploy

- **Total Gas Used:** 31,332,424
- **Base Call Weight:** ref_time=1,632,217,475, proof_size=6,934
- **Total Weight:** ref_time=1,847,374,728, proof_size=17,191
- **Weight Consumed:** ref_time=215,157,253 (11.6% of total), proof_size=10,257

| Category  | Opcodes Used      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | set_storage       | 53,812    | 1          | 170,600,294 | 10,257     | 79.3%         | 100.0%          |
| Calldata  | call_data_copy    | 47        | 1          | 2,347,968   | 0          | 1.1%          | 0.0%            |
| Return    | seal_return       | 10        | 1          | 529,465     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### SimpleToken_evm - mint

- **Total Gas Used:** 520,096
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,428,980,355, proof_size=49,623
- **Weight Consumed:** ref_time=515,473,033 (36.1% of total), proof_size=41,092

| Category     | Opcodes Used                                                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                     | 115,190   | 4          | 479,530,026 | 41,092     | 93.0%         | 100.0%          |
| Crypto       | KECCAK256                                                                                         | 304       | 1          | 15,219,717  | 0          | 3.0%          | 0.0%            |
| Events       | LOG3                                                                                              | 275       | 1          | 13,751,564  | 0          | 2.7%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP5, DUP6, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 62        | 72         | 3,254,640   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                             | 43        | 22         | 2,078,080   | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                           | 7         | 7          | 320,880     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                         | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                          | 6         | 6          | 275,040     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                | 6         | 6          | 275,040     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                     | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                        | 4         | 5          | 198,640     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - mint

- **Total Gas Used:** 521,421
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,495,226,765, proof_size=54,632
- **Weight Consumed:** ref_time=581,719,443 (38.9% of total), proof_size=46,101

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 115,188   | 4          | 479,429,610 | 41,028     | 82.4%         | 89.0%           |
| Crypto    | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 2.6%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 2.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 26        | 4          | 1,359,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### simple_token_ink - mint

- **Total Gas Used:** 474,081
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,688,260,258, proof_size=56,874
- **Weight Consumed:** ref_time=774,752,936 (45.9% of total), proof_size=48,343

| Category  | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 63,991    | 4          | 479,504,330 | 41,092     | 61.9%         | 85.0%           |
| Events    | deposit_event            | 275       | 1          | 13,751,564  | 0          | 1.8%          | 0.0%            |
| Calldata  | call_data_copy           | 47        | 1          | 2,347,968   | 0          | 0.3%          | 0.0%            |
| Return    | seal_return              | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred        | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### simple_token_no_alloc_rust - mint

- **Total Gas Used:** 521,627
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,505,548,558, proof_size=53,919
- **Weight Consumed:** ref_time=592,041,236 (39.3% of total), proof_size=45,388

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 115,189   | 4          | 479,411,626 | 41,028     | 81.0%         | 90.4%           |
| Crypto   | hash_keccak_256                | 610       | 2          | 30,439,434  | 0          | 5.1%          | 0.0%            |
| Events   | deposit_event                  | 275       | 1          | 13,751,564  | 0          | 2.3%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 18        | 2          | 834,260     | 0          | 0.1%          | 0.0%            |


### SimpleToken_evm - transfer

- **Total Gas Used:** 415,117
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,460,054,677, proof_size=49,655
- **Weight Consumed:** ref_time=546,547,355 (37.4% of total), proof_size=41,124

| Category     | Opcodes Used                                                            | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                           | 9,591     | 4          | 479,536,554 | 41,124     | 87.7%         | 100.0%          |
| Crypto       | KECCAK256                                                               | 914       | 3          | 45,659,151  | 0          | 8.4%          | 0.0%            |
| Events       | LOG3                                                                    | 275       | 1          | 13,751,564  | 0          | 2.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 61        | 69         | 3,040,720   | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                   | 31        | 14         | 1,528,000   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                  | 25        | 3          | 1,209,000   | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                           | 8         | 9          | 412,560     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                     | 7         | 7          | 320,880     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                               | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                | 3         | 6          | 275,040     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                      | 6         | 6          | 275,040     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                              | 4         | 5          | 198,640     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                    | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - transfer

- **Total Gas Used:** 416,988
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,553,568,823, proof_size=54,793
- **Weight Consumed:** ref_time=640,061,501 (41.2% of total), proof_size=46,262

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 9,634     | 4          | 481,659,074 | 41,189     | 75.3%         | 89.0%           |
| Crypto    | hash_keccak_256                           | 912       | 3          | 45,659,151  | 0          | 7.1%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 2.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 26        | 4          | 1,359,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 24        | 3          | 1,209,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### simple_token_ink - transfer

- **Total Gas Used:** 480,597
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=2,014,032,325, proof_size=77,452
- **Weight Consumed:** ref_time=1,100,525,003 (54.6% of total), proof_size=68,921

| Category  | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage, set_storage | 68,786    | 6          | 719,293,855 | 61,670     | 65.4%         | 89.5%           |
| Events    | deposit_event            | 275       | 1          | 13,751,564  | 0          | 1.2%          | 0.0%            |
| Calldata  | call_data_copy           | 47        | 1          | 2,347,968   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return              | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context   | caller                   | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred        | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### simple_token_no_alloc_rust - transfer

- **Total Gas Used:** 469,958
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,562,094,984, proof_size=53,951
- **Weight Consumed:** ref_time=648,587,662 (41.5% of total), proof_size=45,420

| Category | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage       | 62,389    | 4          | 479,448,986 | 41,060     | 73.9%         | 90.4%           |
| Crypto   | hash_keccak_256                | 1,216     | 4          | 60,878,868  | 0          | 9.4%          | 0.0%            |
| Events   | deposit_event                  | 275       | 1          | 13,751,564  | 0          | 2.1%          | 0.0%            |
| Calldata | call_data_copy, call_data_size | 18        | 2          | 834,260     | 0          | 0.1%          | 0.0%            |
| Context  | caller                         | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |


### Store_evm - delegate

- **Total Gas Used:** 826,737
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=2,441,052,761, proof_size=132,031
- **Weight Consumed:** ref_time=1,526,756,511 (62.5% of total), proof_size=123,308

| Category     | Opcodes Used                                                                                                                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 290,745   | 12         | 1,337,154,503 | 123,308    | 87.6%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                      | 2,430     | 8          | 121,467,210   | 0          | 8.0%          | 0.0%            |
| Events       | LOG3                                                                                                                                           | 612       | 1          | 30,607,500    | 0          | 2.0%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 342       | 380        | 17,021,920    | 0          | 1.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 155       | 85         | 7,899,760     | 0          | 0.5%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                  | 50        | 52         | 2,414,240     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                         | 45        | 52         | 2,383,680     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 45        | 11         | 2,236,724     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                              | 39        | 5          | 1,959,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                  | 31        | 34         | 1,558,560     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 28        | 30         | 1,375,200     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - delegate

- **Total Gas Used:** 834,938
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=2,851,063,628, proof_size=205,845
- **Weight Consumed:** ref_time=1,936,767,378 (67.9% of total), proof_size=197,122

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 290,737   | 12         | 1,336,853,255 | 123,116    | 69.0%         | 62.5%           |
| Crypto    | hash_keccak_256                                | 2,430     | 8          | 121,467,210   | 0          | 6.3%          | 0.0%            |
| Events    | deposit_event                                  | 612       | 1          | 30,607,500    | 0          | 1.6%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 75        | 9          | 3,691,468     | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                                    | 39        | 5          | 1,959,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### store_rust - delegate

- **Total Gas Used:** 757,481
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=2,348,226,144, proof_size=90,866
- **Weight Consumed:** ref_time=1,433,929,894 (61.1% of total), proof_size=82,143

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 209,602   | 5          | 650,110,270 | 51,285     | 45.3%         | 62.4%           |
| Crypto   | hash_keccak_256          | 2,122     | 7          | 106,141,203 | 0          | 7.4%          | 0.0%            |
| Events   | deposit_event            | 443       | 1          | 22,179,532  | 0          | 1.5%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 14        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |


### Store_evm - delete_

- **Total Gas Used:** 286,851
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=2,406,719,754, proof_size=121,774
- **Weight Consumed:** ref_time=1,492,817,968 (62.0% of total), proof_size=113,147

| Category     | Opcodes Used                                                                                                                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 25,359    | 11         | 1,267,997,912 | 113,147    | 84.9%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                      | 3,338     | 11         | 166,920,867   | 0          | 11.2%         | 0.0%            |
| Events       | LOG2                                                                                                                                           | 612       | 1          | 30,607,500    | 0          | 2.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 249       | 278        | 12,300,400    | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 123       | 60         | 6,325,920     | 0          | 0.4%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 53        | 11         | 2,679,275     | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                       | 33        | 35         | 1,604,400     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 31        | 31         | 1,421,040     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                  | 22        | 26         | 1,191,840     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                                                             | 15        | 15         | 687,600       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                         | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - delete_

- **Total Gas Used:** 293,974
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=2,762,878,611, proof_size=196,265
- **Weight Consumed:** ref_time=1,848,976,825 (66.9% of total), proof_size=187,638

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 25,575    | 11         | 1,278,835,856 | 113,632    | 69.2%         | 60.6%           |
| Crypto    | hash_keccak_256                                | 3,338     | 11         | 166,920,867   | 0          | 9.0%          | 0.0%            |
| Events    | deposit_event                                  | 612       | 1          | 30,607,500    | 0          | 1.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 78        | 9          | 3,844,705     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                                    | 10        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### store_rust - delete_

- **Total Gas Used:** 427,153
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=2,761,857,091, proof_size=122,047
- **Weight Consumed:** ref_time=1,847,955,305 (66.9% of total), proof_size=113,420

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 21,215    | 8          | 1,060,733,899 | 82,562     | 57.4%         | 72.8%           |
| Crypto   | hash_keccak_256          | 3,032     | 10         | 151,541,715   | 0          | 8.2%          | 0.0%            |
| Events   | deposit_event            | 444       | 1          | 22,179,532    | 0          | 1.2%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |


### Store_evm - deleteFor

- **Total Gas Used:** 360,191
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=2,873,724,363, proof_size=173,315
- **Weight Consumed:** ref_time=1,959,428,113 (68.2% of total), proof_size=164,592

| Category     | Opcodes Used                                                                                                                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                  | 32,279    | 16         | 1,613,821,507 | 164,592    | 82.4%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                      | 4,248     | 14         | 212,466,642   | 0          | 10.8%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 877       | 977        | 43,624,400    | 0          | 2.2%          | 0.0%            |
| Events       | LOG2                                                                                                                                           | 612       | 1          | 30,607,500    | 0          | 1.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                          | 581       | 324        | 29,352,880    | 0          | 1.5%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                  | 154       | 168        | 7,762,240     | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 126       | 137        | 6,280,080     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                   | 113       | 124        | 5,684,160     | 0          | 0.3%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                         | 103       | 109        | 4,996,560     | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 74        | 15         | 3,750,930     | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                                                                         | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                      | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - deleteFor

- **Total Gas Used:** 380,539
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=3,891,123,016, proof_size=247,806
- **Weight Consumed:** ref_time=2,976,826,766 (76.5% of total), proof_size=239,083

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 32,494    | 16         | 1,624,659,451 | 165,077    | 54.6%         | 69.0%           |
| Crypto    | hash_keccak_256                                | 4,250     | 14         | 212,466,642   | 0          | 7.1%          | 0.0%            |
| Events    | deposit_event                                  | 612       | 1          | 30,607,500    | 0          | 1.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 105       | 12         | 5,190,462     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                                    | 10        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                         | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### store_rust - deleteFor

- **Total Gas Used:** 499,173
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=3,162,842,439, proof_size=142,783
- **Weight Consumed:** ref_time=2,248,546,189 (71.1% of total), proof_size=134,060

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 23,984    | 10         | 1,199,160,615 | 103,202    | 53.3%         | 77.0%           |
| Crypto   | hash_keccak_256          | 3,635     | 12         | 181,825,257   | 0          | 8.1%          | 0.0%            |
| Events   | deposit_event            | 443       | 1          | 22,179,532    | 0          | 1.0%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |


### Store_evm - deploy

- **Total Gas Used:** 32,591,046
- **Base Call Weight:** ref_time=1,641,459,859, proof_size=6,934
- **Total Weight:** ref_time=1,644,464,286, proof_size=6,934
- **Weight Consumed:** ref_time=3,004,427 (0.2% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 41        | 1          | 2,074,227 | 0          | 69.0%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 9         | 9          | 412,560   | 0          | 13.7%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 319,000   | 0          | 10.6%         | 0.0%            |
| Control Flow | JUMPI                                 | 3         | 1          | 152,800   | 0          | 5.1%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 45,840    | 0          | 1.5%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Store_pvm - deploy

- **Total Gas Used:** 182,177,360
- **Base Call Weight:** ref_time=2,688,682,105, proof_size=6,934
- **Total Weight:** ref_time=2,699,176,642, proof_size=6,934
- **Weight Consumed:** ref_time=10,494,537 (0.4% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 17        | 2          | 826,576  | 0          | 7.9%          | 0.0%            |
| Return    | seal_return                    | 10        | 1          | 529,465  | 0          | 5.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 319,000  | 0          | 3.0%          | 0.0%            |


### store_rust - deploy

- **Total Gas Used:** 84,645,038
- **Base Call Weight:** ref_time=2,005,821,857, proof_size=6,934
- **Total Weight:** ref_time=2,007,079,296, proof_size=6,934
- **Weight Consumed:** ref_time=1,257,439 (0.1% of total), proof_size=0

| Category | Opcodes Used | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | ------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Return   | seal_return  | 10        | 1          | 529,465  | 0          | 42.1%         | 0.0%            |


### Store_evm - revokeDelegation

- **Total Gas Used:** 307,623
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=2,885,319,932, proof_size=183,636
- **Weight Consumed:** ref_time=1,971,023,682 (68.3% of total), proof_size=174,913

| Category     | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 33,659    | 17         | 1,683,010,738 | 174,913    | 85.4%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                    | 4,238     | 14         | 211,928,106   | 0          | 10.8%         | 0.0%            |
| Events       | LOG3                                                                                                                                                         | 612       | 1          | 30,607,500    | 0          | 1.6%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 419       | 467        | 20,689,120    | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 219       | 125        | 11,398,880    | 0          | 0.6%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                                | 66        | 63         | 3,040,720     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 44        | 50         | 2,292,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 46        | 11         | 2,236,724     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                       | 40        | 43         | 1,971,120     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                                                       | 32        | 4          | 1,612,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                | 32        | 34         | 1,558,560     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                         | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - revokeDelegation

- **Total Gas Used:** 316,850
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=3,346,683,897, proof_size=258,127
- **Weight Consumed:** ref_time=2,432,387,647 (72.7% of total), proof_size=249,404

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 33,877    | 17         | 1,693,874,378 | 175,398    | 69.6%         | 70.3%           |
| Crypto    | hash_keccak_256                                | 4,239     | 14         | 211,928,106   | 0          | 8.7%          | 0.0%            |
| Events    | deposit_event                                  | 612       | 1          | 30,607,500    | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 75        | 9          | 3,691,468     | 0          | 0.2%          | 0.0%            |
| Context   | caller                                         | 32        | 4          | 1,612,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 10        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### store_rust - revokeDelegation

- **Total Gas Used:** 539,344
- **Base Call Weight:** ref_time=914,308,577, proof_size=8,726
- **Total Weight:** ref_time=2,301,387,721, proof_size=91,339
- **Weight Consumed:** ref_time=1,387,079,144 (60.3% of total), proof_size=82,613

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 10,982    | 5          | 549,126,406 | 51,755     | 39.6%         | 62.6%           |
| Crypto   | hash_keccak_256          | 2,121     | 7          | 106,162,461 | 0          | 7.7%          | 0.0%            |
| Events   | deposit_event            | 443       | 1          | 22,179,532  | 0          | 1.6%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context  | caller                   | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### Store_evm - set

- **Total Gas Used:** 776,965
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=2,592,457,023, proof_size=142,320
- **Weight Consumed:** ref_time=1,678,160,773 (64.7% of total), proof_size=133,597

| Category     | Opcodes Used                                                                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                | 241,355   | 13         | 1,507,761,325 | 133,597    | 89.8%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                    | 2,125     | 7          | 106,233,321   | 0          | 6.3%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                         | 781       | 1          | 39,035,468    | 0          | 2.3%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP11, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 236       | 264        | 11,704,480    | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                        | 109       | 58         | 5,348,000     | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                     | 38        | 11         | 1,790,925     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                                                       | 25        | 33         | 1,512,720     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                                                     | 28        | 31         | 1,421,040     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                      | 21        | 23         | 1,054,320     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                                                | 17        | 19         | 870,960       | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                            | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                    | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                         | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - set

- **Total Gas Used:** 783,078
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=2,898,070,430, proof_size=216,295
- **Weight Consumed:** ref_time=1,983,774,180 (68.5% of total), proof_size=207,572

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 241,395   | 13         | 1,509,707,525 | 133,566    | 76.1%         | 64.3%           |
| Crypto    | hash_keccak_256                                | 2,125     | 7          | 106,233,321   | 0          | 5.4%          | 0.0%            |
| Events    | deposit_event                                  | 781       | 1          | 39,035,468    | 0          | 2.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 72        | 9          | 3,536,423     | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                                    | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 10        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### store_rust - set

- **Total Gas Used:** 897,507
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=2,799,528,941, proof_size=111,380
- **Weight Consumed:** ref_time=1,885,232,691 (67.3% of total), proof_size=102,657

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 347,428   | 7          | 991,364,248 | 71,799     | 52.6%         | 69.9%           |
| Crypto   | hash_keccak_256          | 2,728     | 9          | 136,321,998 | 0          | 7.2%          | 0.0%            |
| Events   | deposit_event            | 612       | 1          | 30,607,500  | 0          | 1.6%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272   | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 14        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |


### Store_evm - set_update

- **Total Gas Used:** 548,267
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=1,717,538,790, proof_size=70,457
- **Weight Consumed:** ref_time=803,242,540 (46.8% of total), proof_size=61,734

| Category     | Opcodes Used                                                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                    | 14,391    | 6          | 719,368,575 | 61,734     | 89.6%         | 100.0%          |
| Events       | LOG2                                                                                                                                             | 781       | 1          | 39,035,468  | 0          | 4.9%          | 0.0%            |
| Crypto       | KECCAK256                                                                                                                                        | 607       | 2          | 30,343,773  | 0          | 3.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 124       | 137        | 6,188,400   | 0          | 0.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                            | 51        | 26         | 2,551,760   | 0          | 0.3%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                         | 26        | 9          | 1,255,070   | 0          | 0.2%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                         | 22        | 24         | 1,100,160   | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                           | 14        | 21         | 962,640     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                          | 11        | 12         | 550,080     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                    | 9         | 10         | 458,400     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                        | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - set_update

- **Total Gas Used:** 552,618
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=1,935,100,725, proof_size=144,463
- **Weight Consumed:** ref_time=1,020,804,475 (52.8% of total), proof_size=135,740

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 14,388    | 6          | 719,368,575 | 61,734     | 70.5%         | 45.5%           |
| Events    | deposit_event                                  | 781       | 1          | 39,035,468  | 0          | 3.8%          | 0.0%            |
| Crypto    | hash_keccak_256                                | 606       | 2          | 30,343,773  | 0          | 3.0%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 55        | 7          | 2,696,282   | 0          | 0.3%          | 0.0%            |
| Context   | caller, now                                    | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                              | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### store_rust - set_update

- **Total Gas Used:** 546,965
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=1,652,430,111, proof_size=60,279
- **Weight Consumed:** ref_time=738,133,861 (44.7% of total), proof_size=51,556

| Category | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 4,801     | 2          | 239,963,345 | 20,698     | 32.5%         | 40.1%           |
| Crypto   | hash_keccak_256          | 1,212     | 4          | 60,563,541  | 0          | 8.2%          | 0.0%            |
| Events   | deposit_event            | 612       | 1          | 30,607,500  | 0          | 4.1%          | 0.0%            |
| Calldata | call_data_copy           | 28        | 1          | 1,422,272   | 0          | 0.2%          | 0.0%            |
| Context  | caller, now              | 14        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return   | seal_return              | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |


### Store_evm - setFor

- **Total Gas Used:** 852,492
- **Base Call Weight:** ref_time=914,703,041, proof_size=8,822
- **Total Weight:** ref_time=3,068,765,383, proof_size=193,864
- **Weight Consumed:** ref_time=2,154,062,342 (70.2% of total), proof_size=185,042

| Category     | Opcodes Used                                                                                                                                                                                       | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                                                      | 248,270   | 18         | 1,853,584,920 | 185,042    | 86.1%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                                                          | 3,035     | 10         | 151,722,408   | 0          | 7.0%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP11, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 934       | 1,045      | 46,787,360    | 0          | 2.2%          | 0.0%            |
| Events       | LOG2                                                                                                                                                                                               | 780       | 1          | 39,035,468    | 0          | 1.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                                                              | 658       | 350        | 32,653,360    | 0          | 1.5%          | 0.0%            |
| Arithmetic   | ADD, MUL, SUB                                                                                                                                                                                      | 153       | 164        | 7,578,880     | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                            | 143       | 157        | 7,196,880     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                                       | 132       | 142        | 6,509,280     | 0          | 0.3%          | 0.0%            |
| Memory       | MLOAD, MSTORE, MSTORE8                                                                                                                                                                             | 90        | 102        | 4,675,680     | 0          | 0.2%          | 0.0%            |
| Calldata     | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                           | 58        | 16         | 2,889,892     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                                                  | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                                                          | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                                                               | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### Store_pvm - setFor

- **Total Gas Used:** 871,590
- **Base Call Weight:** ref_time=914,703,041, proof_size=8,822
- **Total Weight:** ref_time=4,023,708,706, proof_size=267,839
- **Weight Consumed:** ref_time=3,109,005,665 (77.3% of total), proof_size=259,017

| Category  | Opcodes Used                                   | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ---------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear      | 248,310   | 18         | 1,855,531,120 | 185,011    | 59.7%         | 71.4%           |
| Crypto    | hash_keccak_256                                | 3,035     | 10         | 151,722,408   | 0          | 4.9%          | 0.0%            |
| Events    | deposit_event                                  | 781       | 1          | 39,035,468    | 0          | 1.3%          | 0.0%            |
| Calldata  | call_data_copy, call_data_load, call_data_size | 99        | 12         | 4,880,372     | 0          | 0.2%          | 0.0%            |
| Context   | caller, now                                    | 16        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                                    | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                              | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### store_rust - setFor

- **Total Gas Used:** 870,918
- **Base Call Weight:** ref_time=914,703,041, proof_size=8,822
- **Total Weight:** ref_time=3,210,095,916, proof_size=132,135
- **Weight Consumed:** ref_time=2,295,392,875 (71.5% of total), proof_size=123,313

| Category | Opcodes Used             | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| -------- | ------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage  | get_storage, set_storage | 249,398   | 9          | 1,129,809,644 | 92,455     | 49.2%         | 75.0%           |
| Crypto   | hash_keccak_256          | 3,333     | 11         | 166,605,540   | 0          | 7.3%          | 0.0%            |
| Events   | deposit_event            | 612       | 1          | 30,607,500    | 0          | 1.3%          | 0.0%            |
| Calldata | call_data_copy           | 29        | 1          | 1,422,272     | 0          | 0.1%          | 0.0%            |
| Context  | caller, now              | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Return   | seal_return              | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - approve

- **Total Gas Used:** 464,863
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,307,318,598, proof_size=39,366
- **Weight Consumed:** ref_time=393,811,276 (30.1% of total), proof_size=30,835

| Category     | Opcodes Used                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                  | 58,978    | 3          | 308,929,732 | 30,835     | 78.4%         | 100.0%          |
| Crypto       | KECCAK256                                                                      | 1,218     | 4          | 60,878,868  | 0          | 15.5%         | 0.0%            |
| Events       | LOG3                                                                           | 275       | 1          | 13,751,564  | 0          | 3.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 77        | 85         | 3,743,600   | 0          | 1.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                          | 50        | 26         | 2,582,320   | 0          | 0.7%          | 0.0%            |
| Context      | CALLER                                                                         | 24        | 3          | 1,209,000   | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                            | 13        | 13         | 595,920     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                             | 12        | 12         | 550,080     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                  | 10        | 11         | 504,240     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                      | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                       | 4         | 6          | 275,040     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                     | 4         | 7          | 259,760     | 0          | 0.1%          | 0.0%            |
| Return       | STOP                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - approve

- **Total Gas Used:** 468,259
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,477,151,338, proof_size=93,921
- **Weight Consumed:** ref_time=563,644,016 (38.2% of total), proof_size=85,390

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 58,976    | 3          | 308,829,316 | 30,771     | 54.8%         | 36.0%           |
| Crypto    | hash_keccak_256                           | 1,219     | 4          | 60,878,868  | 0          | 10.8%         | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 2.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,359,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 25        | 3          | 1,209,000   | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### TetherToken_evm - deploy

- **Total Gas Used:** 28,192,460
- **Base Call Weight:** ref_time=1,610,425,073, proof_size=6,934
- **Total Weight:** ref_time=3,536,168,883, proof_size=150,692
- **Weight Consumed:** ref_time=1,925,743,810 (54.5% of total), proof_size=143,758

| Category     | Opcodes Used                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                | 354,422   | 14         | 1,881,172,289 | 143,758    | 97.7%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                    | 304       | 1          | 15,219,717    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 277       | 301        | 13,522,800    | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                        | 114       | 61         | 5,867,520     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                       | 48        | 54         | 2,475,360     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                     | 41        | 45         | 2,062,800     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY, CODESIZE                                                                                           | 39        | 3          | 1,996,764     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                      | 30        | 31         | 1,421,040     | 0          | 0.1%          | 0.0%            |
| Memory       | MCOPY, MLOAD, MSTORE                                                                                         | 26        | 26         | 1,283,520     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                       | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                    | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                       | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - deploy

- **Total Gas Used:** 139,224,508
- **Base Call Weight:** ref_time=2,382,032,403, proof_size=6,934
- **Total Weight:** ref_time=4,547,576,316, proof_size=150,951
- **Weight Consumed:** ref_time=2,165,543,913 (47.6% of total), proof_size=144,017

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 354,552   | 14         | 1,887,563,177 | 144,017    | 87.2%         | 100.0%          |
| Crypto    | hash_keccak_256                           | 304       | 1          | 15,219,717    | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 27        | 3          | 1,352,080     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - transfer

- **Total Gas Used:** 475,728
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,850,605,236, proof_size=101,100
- **Weight Consumed:** ref_time=937,097,914 (50.6% of total), proof_size=92,569

| Category     | Opcodes Used                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                              | 69,308    | 9          | 825,378,133 | 92,569     | 88.1%         | 100.0%          |
| Crypto       | KECCAK256                                                                                  | 1,524     | 5          | 76,098,585  | 0          | 8.1%          | 0.0%            |
| Events       | LOG3                                                                                       | 275       | 1          | 13,751,564  | 0          | 1.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 165       | 187        | 8,358,160   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                      | 152       | 70         | 7,655,280   | 0          | 0.8%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                    | 38        | 40         | 1,833,600   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                                                     | 32        | 4          | 1,612,000   | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                              | 11        | 13         | 595,920     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                         | 12        | 10         | 550,080     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                         | 10        | 11         | 504,240     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                  | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                 | 5         | 6          | 229,200     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - transfer

- **Total Gas Used:** 477,822
- **Base Call Weight:** ref_time=913,494,995, proof_size=8,528
- **Total Weight:** ref_time=2,055,301,127, proof_size=155,556
- **Weight Consumed:** ref_time=1,141,806,132 (55.6% of total), proof_size=147,028

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 69,304    | 9          | 825,127,093 | 92,409     | 72.3%         | 62.9%           |
| Crypto    | hash_keccak_256                           | 1,521     | 5          | 76,098,585  | 0          | 6.7%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 1.2%          | 0.0%            |
| Context   | caller                                    | 32        | 4          | 1,612,000   | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,359,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - transferFrom

- **Total Gas Used:** 492,935
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=2,150,947,725, proof_size=121,806
- **Weight Consumed:** ref_time=1,237,045,939 (57.5% of total), proof_size=113,179

| Category     | Opcodes Used                                                                                                               | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                              | 21,303    | 11         | 1,065,192,170 | 113,179    | 86.1%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                  | 2,740     | 9          | 136,977,453   | 0          | 11.1%         | 0.0%            |
| Events       | LOG3                                                                                                                       | 275       | 1          | 13,751,564    | 0          | 1.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 181       | 205        | 9,091,600     | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                      | 132       | 69         | 6,524,560     | 0          | 0.5%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                    | 27        | 29         | 1,329,360     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                              | 20        | 21         | 962,640       | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                                         | 16        | 18         | 825,120       | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                                                     | 16        | 2          | 806,000       | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, DIV, MUL, SUB                                                                                                         | 16        | 15         | 779,280       | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                  | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                 | 5         | 7          | 275,040       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                       | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - transferFrom

- **Total Gas Used:** 498,231
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=2,415,750,101, proof_size=176,297
- **Weight Consumed:** ref_time=1,501,848,315 (62.2% of total), proof_size=167,670

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 21,302    | 11         | 1,064,991,338 | 113,051    | 70.9%         | 67.4%           |
| Crypto    | hash_keccak_256                           | 2,738     | 9          | 136,977,453   | 0          | 9.1%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564    | 0          | 0.9%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 35        | 5          | 1,702,000     | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 16        | 2          | 806,000       | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - buyTicket

- **Total Gas Used:** 813,540
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=6,001,201,862, proof_size=398,319
- **Weight Consumed:** ref_time=5,088,076,677 (84.8% of total), proof_size=389,881

| Category     | Opcodes Used                                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                   | 455,269   | 37         | 4,283,489,522 | 380,277    | 84.2%         | 97.5%           |
| Calls        | CALL                                                                                                                                                            | 6,177     | 1          | 308,846,311   | 5,594      | 6.1%          | 1.4%            |
| Crypto       | KECCAK256                                                                                                                                                       | 6,088     | 20         | 304,280,964   | 0          | 6.0%          | 0.0%            |
| Code         | EXTCODESIZE                                                                                                                                                     | 1,283     | 1          | 64,148,000    | 4,010      | 1.3%          | 1.0%            |
| Events       | LOG3, LOG4                                                                                                                                                      | 1,162     | 3          | 58,110,628    | 0          | 1.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH11, PUSH12, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 625       | 697        | 30,896,160    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                           | 357       | 177        | 18,152,640    | 0          | 0.4%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                         | 83        | 91         | 4,171,440     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                          | 65        | 76         | 3,483,840     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                   | 70        | 76         | 3,483,840     | 0          | 0.1%          | 0.0%            |
| Context      | ADDRESS, CALLER, TIMESTAMP                                                                                                                                      | 62        | 8          | 3,114,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                                  | 53        | 3          | 2,567,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                        | 49        | 52         | 2,383,680     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                      | 8         | 10         | 397,280       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                                  | 0         | 1          | 30,560        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN, STOP                                                                                                                                                    | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - buyTicket

- **Total Gas Used:** 830,145
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=6,831,420,669, proof_size=526,823
- **Weight Consumed:** ref_time=5,918,295,484 (86.6% of total), proof_size=518,385

| Category    | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 455,524   | 37         | 4,296,070,466 | 380,667    | 72.6%         | 73.4%           |
| Calls       | call_evm                                  | 6,894     | 1          | 344,746,462   | 28,976     | 5.8%          | 5.6%            |
| Crypto      | hash_keccak_256                           | 6,088     | 20         | 304,280,964   | 0          | 5.1%          | 0.0%            |
| Code        | code_size                                 | 1,283     | 1          | 64,148,000    | 4,010      | 1.1%          | 0.8%            |
| Events      | deposit_event                             | 1,162     | 3          | 58,110,628    | 0          | 1.0%          | 0.0%            |
| Context     | address, caller, now                      | 62        | 8          | 3,114,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 53        | 8          | 2,718,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 50        | 3          | 2,567,000     | 0          | 0.0%          | 0.0%            |
| Return      | seal_return                               | 20        | 2          | 1,065,330     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                          | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - checkIn

- **Total Gas Used:** 384,337
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=3,221,058,446, proof_size=188,907
- **Weight Consumed:** ref_time=2,307,957,915 (71.7% of total), proof_size=180,475

| Category     | Opcodes Used                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                    | 88,491    | 17         | 1,784,518,249 | 174,881    | 77.3%         | 96.9%           |
| Calls        | CALL                                                                                                                                             | 0         | 1          | 308,839,911   | 5,594      | 13.4%         | 3.1%            |
| Crypto       | KECCAK256                                                                                                                                        | 2,132     | 7          | 106,538,019   | 0          | 4.6%          | 0.0%            |
| Events       | LOG3, LOG4                                                                                                                                       | 1,162     | 3          | 58,110,628    | 0          | 2.5%          | 0.0%            |
| Stack        | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 414       | 462        | 20,704,400    | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                            | 302       | 126        | 15,127,200    | 0          | 0.7%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                          | 74        | 81         | 3,713,040     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE, GAS                                                                                                                                   | 51        | 3          | 2,567,000     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                | 38        | 5          | 1,903,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                           | 34        | 38         | 1,741,920     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                    | 33        | 35         | 1,604,400     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                         | 24        | 26         | 1,191,840     | 0          | 0.1%          | 0.0%            |
| Code         | CODECOPY                                                                                                                                         | 10        | 1          | 495,496       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                       | 7         | 9          | 351,440       | 0          | 0.0%          | 0.0%            |
| Return Data  | RETURNDATASIZE                                                                                                                                   | 0         | 1          | 30,560        | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                           | 0         | 2          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - checkIn

- **Total Gas Used:** 392,303
- **Base Call Weight:** ref_time=913,088,204, proof_size=8,429
- **Total Weight:** ref_time=3,719,358,595, proof_size=317,083
- **Weight Consumed:** ref_time=2,806,270,391 (75.5% of total), proof_size=308,654

| Category    | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 88,535    | 17         | 1,786,640,769 | 174,946    | 63.7%         | 56.7%           |
| Calls       | call_evm                                  | 0         | 1          | 344,740,062   | 28,976     | 12.3%         | 9.4%            |
| Crypto      | hash_keccak_256                           | 2,437     | 8          | 121,757,736   | 0          | 4.3%          | 0.0%            |
| Events      | deposit_event                             | 1,162     | 3          | 58,110,628    | 0          | 2.1%          | 0.0%            |
| Ether/Gas   | ref_time_left, value_transferred          | 51        | 3          | 2,567,000     | 0          | 0.1%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 47        | 7          | 2,375,000     | 0          | 0.1%          | 0.0%            |
| Context     | caller, now                               | 37        | 5          | 1,903,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 22        | 2          | 1,065,330     | 0          | 0.0%          | 0.0%            |
| Return Data | return_data_size                          | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - configurePaymentToken

- **Total Gas Used:** 654,814
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=2,124,896,438, proof_size=111,427
- **Weight Consumed:** ref_time=1,210,969,998 (57.0% of total), proof_size=102,794

| Category     | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                | 180,348   | 10         | 1,097,414,002 | 102,794    | 90.6%         | 100.0%          |
| Crypto       | KECCAK256                                                                                                                                                    | 1,218     | 4          | 60,765,492    | 0          | 5.0%          | 0.0%            |
| Events       | LOG2                                                                                                                                                         | 444       | 1          | 22,179,532    | 0          | 1.8%          | 0.0%            |
| Stack        | DUP1, DUP11, DUP12, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 270       | 294        | 13,324,160    | 0          | 1.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 203       | 85         | 10,390,400    | 0          | 0.9%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 62        | 67         | 3,071,280     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                       | 22        | 22         | 1,008,480     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                | 16        | 17         | 779,280       | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                     | 7         | 12         | 550,080       | 0          | 0.0%          | 0.0%            |
| Context      | CALLER                                                                                                                                                       | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                    | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                   | 4         | 6          | 244,480       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                                                                                       | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - configurePaymentToken

- **Total Gas Used:** 661,451
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=2,456,721,528, proof_size=216,063
- **Weight Consumed:** ref_time=1,542,795,088 (62.8% of total), proof_size=207,430

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 180,343   | 10         | 1,097,263,378 | 102,698    | 71.1%         | 49.5%           |
| Crypto    | hash_keccak_256                           | 1,519     | 5          | 75,985,209    | 0          | 4.9%          | 0.0%            |
| Events    | deposit_event                             | 444       | 1          | 22,179,532    | 0          | 1.4%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 35        | 5          | 1,702,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Context   | caller                                    | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - deploy

- **Total Gas Used:** 43,129,194
- **Base Call Weight:** ref_time=1,715,303,975, proof_size=6,934
- **Total Weight:** ref_time=3,082,909,961, proof_size=119,953
- **Weight Consumed:** ref_time=1,367,605,986 (44.4% of total), proof_size=113,019

| Category     | Opcodes Used                                                                                        | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                       | 289,358   | 11         | 1,267,989,784 | 113,019    | 92.7%         | 100.0%          |
| Crypto       | KECCAK256                                                                                           | 1,218     | 4          | 60,878,868    | 0          | 4.5%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, SWAP1, SWAP2, SWAP3, SWAP4 | 218       | 261        | 11,261,360    | 0          | 0.8%          | 0.0%            |
| Events       | LOG4                                                                                                | 214       | 2          | 10,647,192    | 0          | 0.8%          | 0.0%            |
| Code         | CODECOPY                                                                                            | 116       | 7          | 5,760,342     | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                               | 80        | 41         | 3,820,000     | 0          | 0.3%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                              | 39        | 44         | 2,016,960     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                       | 38        | 40         | 1,833,600     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER                                                                                              | 34        | 4          | 1,612,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT                                                                                  | 18        | 18         | 825,120       | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                            | 13        | 14         | 641,760       | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                           | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                              | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - deploy

- **Total Gas Used:** 251,924,881
- **Base Call Weight:** ref_time=3,174,951,781, proof_size=6,934
- **Total Weight:** ref_time=4,837,224,432, proof_size=119,761
- **Weight Consumed:** ref_time=1,662,272,651 (34.4% of total), proof_size=112,827

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 289,355   | 11         | 1,267,688,536 | 112,827    | 76.3%         | 100.0%          |
| Crypto    | hash_keccak_256                           | 2,434     | 8          | 121,757,736   | 0          | 7.3%          | 0.0%            |
| Events    | deposit_event                             | 214       | 2          | 10,647,192    | 0          | 0.6%          | 0.0%            |
| Context   | caller                                    | 32        | 4          | 1,612,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_copy, call_data_size            | 17        | 2          | 826,576       | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - grantVolunteerRole

- **Total Gas Used:** 403,832
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,355,801,483, proof_size=49,562
- **Weight Consumed:** ref_time=442,676,298 (32.7% of total), proof_size=41,124

| Category     | Opcodes Used                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                             | 60,362    | 4          | 378,094,451 | 41,124     | 85.4%         | 100.0%          |
| Crypto       | KECCAK256                                                                 | 915       | 3          | 45,659,151  | 0          | 10.3%         | 0.0%            |
| Events       | LOG4                                                                      | 106       | 1          | 5,323,596   | 0          | 1.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 99        | 115        | 5,011,840   | 0          | 1.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 63        | 29         | 3,147,680   | 0          | 0.7%          | 0.0%            |
| Code         | CODECOPY                                                                  | 30        | 3          | 1,486,488   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                    | 16        | 2          | 806,000     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                             | 14        | 16         | 733,440     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                    | 12        | 13         | 595,920     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 12        | 13         | 595,920     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                 | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                  | 4         | 5          | 229,200     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 4         | 4          | 152,800     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - grantVolunteerRole

- **Total Gas Used:** 409,816
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,655,007,653, proof_size=154,230
- **Weight Consumed:** ref_time=741,882,468 (44.8% of total), proof_size=145,792

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 60,360    | 4          | 377,994,035 | 41,060     | 51.0%         | 28.2%           |
| Crypto    | hash_keccak_256                           | 1,824     | 6          | 91,318,302  | 0          | 12.3%         | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,323,596   | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 21        | 3          | 1,016,000   | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 16        | 2          | 806,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - pauseSales

- **Total Gas Used:** 338,051
- **Base Call Weight:** ref_time=912,730,721, proof_size=8,342
- **Total Weight:** ref_time=1,266,722,266, proof_size=39,177
- **Weight Consumed:** ref_time=353,991,545 (27.9% of total), proof_size=30,835

| Category     | Opcodes Used                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                | 58,979    | 3          | 308,929,732 | 30,835     | 87.3%         | 100.0%          |
| Crypto       | KECCAK256                                                    | 304       | 1          | 15,219,717  | 0          | 4.3%          | 0.0%            |
| Events       | LOG1                                                         | 275       | 1          | 13,751,564  | 0          | 3.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                        | 122       | 44         | 6,112,000   | 0          | 1.7%          | 0.0%            |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1 | 119       | 132        | 5,989,760   | 0          | 1.7%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                          | 35        | 38         | 1,741,920   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                            | 15        | 2          | 750,000     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                    | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHR                                            | 5         | 6          | 275,040     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                | 5         | 5          | 229,200     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                   | 3         | 3          | 106,960     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                          | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - pauseSales

- **Total Gas Used:** 342,407
- **Base Call Weight:** ref_time=912,730,721, proof_size=8,342
- **Total Weight:** ref_time=1,484,515,464, proof_size=143,877
- **Weight Consumed:** ref_time=571,784,743 (38.5% of total), proof_size=135,535

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 58,977    | 3          | 308,879,524 | 30,803     | 54.0%         | 22.7%           |
| Crypto    | hash_keccak_256                           | 609       | 2          | 30,439,434  | 0          | 5.3%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 2.4%          | 0.0%            |
| Context   | caller, now                               | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### W3S_evm - redeemTicketStaff

- **Total Gas Used:** 846,571
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=4,552,728,721, proof_size=300,281
- **Weight Consumed:** ref_time=3,639,221,399 (79.9% of total), proof_size=291,750

| Category     | Opcodes Used                                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                                                                                    | 434,703   | 28         | 3,255,251,695 | 287,740    | 89.4%         | 98.6%           |
| Crypto       | KECCAK256                                                                                                                                                        | 4,867     | 16         | 243,246,204   | 0          | 6.7%          | 0.0%            |
| Code         | EXTCODESIZE                                                                                                                                                      | 1,283     | 1          | 64,148,000    | 4,010      | 1.8%          | 1.4%            |
| Events       | LOG3, LOG4                                                                                                                                                       | 550       | 2          | 27,503,128    | 0          | 0.8%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH11, PUSH12, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 461       | 521        | 23,011,680    | 0          | 0.6%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                                                                                            | 245       | 127        | 12,407,360    | 0          | 0.3%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                                                                                          | 62        | 67         | 3,071,280     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                                                                                           | 57        | 62         | 2,842,080     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                                                                                    | 53        | 57         | 2,612,880     | 0          | 0.1%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                                                                                                | 47        | 6          | 2,362,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                                                                                         | 34        | 37         | 1,696,080     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                                                                                        | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                                                                                       | 5         | 6          | 229,200       | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                                                                                             | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - redeemTicketStaff

- **Total Gas Used:** 857,682
- **Base Call Weight:** ref_time=913,494,995, proof_size=8,528
- **Total Weight:** ref_time=5,208,307,931, proof_size=405,206
- **Weight Consumed:** ref_time=4,294,812,936 (82.5% of total), proof_size=396,678

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 434,873   | 28         | 3,263,538,575 | 287,936    | 76.0%         | 72.6%           |
| Crypto    | hash_keccak_256                           | 4,866     | 16         | 243,246,204   | 0          | 5.7%          | 0.0%            |
| Code      | code_size                                 | 1,283     | 1          | 64,148,000    | 4,010      | 1.5%          | 1.0%            |
| Events    | deposit_event                             | 550       | 2          | 27,503,128    | 0          | 0.6%          | 0.0%            |
| Context   | caller, now                               | 47        | 6          | 2,362,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 26        | 4          | 1,359,000     | 0          | 0.0%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - revokeVolunteerRole

- **Total Gas Used:** 298,393
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,363,830,011, proof_size=49,594
- **Weight Consumed:** ref_time=450,704,826 (33.0% of total), proof_size=41,156

| Category     | Opcodes Used                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                             | 7,561     | 4          | 378,100,979 | 41,156     | 83.9%         | 100.0%          |
| Crypto       | KECCAK256                                                                 | 913       | 3          | 45,659,151  | 0          | 10.1%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 163       | 186        | 8,266,480   | 0          | 1.8%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                     | 136       | 53         | 6,814,880   | 0          | 1.5%          | 0.0%            |
| Events       | LOG4                                                                      | 107       | 1          | 5,323,596   | 0          | 1.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                       | 34        | 38         | 1,741,920   | 0          | 0.4%          | 0.0%            |
| Code         | CODECOPY                                                                  | 30        | 3          | 1,486,488   | 0          | 0.3%          | 0.0%            |
| Context      | CALLER                                                                    | 16        | 2          | 806,000     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                             | 15        | 16         | 733,440     | 0          | 0.2%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                        | 12        | 12         | 550,080     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                 | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                  | 5         | 5          | 229,200     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                | 4         | 4          | 152,800     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - revokeVolunteerRole

- **Total Gas Used:** 304,240
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,656,204,265, proof_size=154,423
- **Weight Consumed:** ref_time=743,079,080 (44.9% of total), proof_size=145,985

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 7,606     | 4          | 380,273,707 | 41,253     | 51.2%         | 28.3%           |
| Crypto    | hash_keccak_256                           | 1,828     | 6          | 91,318,302  | 0          | 12.3%         | 0.0%            |
| Events    | deposit_event                             | 107       | 1          | 5,323,596   | 0          | 0.7%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 21        | 3          | 1,016,000   | 0          | 0.1%          | 0.0%            |
| Context   | caller                                    | 16        | 2          | 806,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - setMerkleRoot

- **Total Gas Used:** 414,027
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,205,527,762, proof_size=29,115
- **Weight Consumed:** ref_time=291,995,786 (24.2% of total), proof_size=20,578

| Category     | Opcodes Used                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                        | 4,795     | 2          | 239,789,525 | 20,578     | 82.1%         | 100.0%          |
| Events       | LOG2                                                                                 | 443       | 1          | 22,179,532  | 0          | 7.6%          | 0.0%            |
| Crypto       | KECCAK256                                                                            | 305       | 1          | 15,219,717  | 0          | 5.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 108       | 122        | 5,500,800   | 0          | 1.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                | 110       | 42         | 5,500,800   | 0          | 1.9%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                  | 30        | 31         | 1,421,040   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                                    | 15        | 2          | 750,000     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                            | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                        | 6         | 6          | 275,040     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                           | 5         | 5          | 198,640     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                             | 3         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHR                                                                        | 3         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                 | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - setMerkleRoot

- **Total Gas Used:** 418,592
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,433,797,772, proof_size=133,847
- **Weight Consumed:** ref_time=520,265,796 (36.3% of total), proof_size=125,310

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 4,795     | 2          | 239,789,525 | 20,578     | 46.1%         | 16.4%           |
| Crypto    | hash_keccak_256                           | 609       | 2          | 30,439,434  | 0          | 5.9%          | 0.0%            |
| Events    | deposit_event                             | 443       | 1          | 22,179,532  | 0          | 4.3%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 27        | 4          | 1,359,000   | 0          | 0.3%          | 0.0%            |
| Context   | caller, now                               | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### W3S_evm - unpauseSales

- **Total Gas Used:** 232,511
- **Base Call Weight:** ref_time=912,730,721, proof_size=8,342
- **Total Weight:** ref_time=1,269,754,234, proof_size=39,209
- **Weight Consumed:** ref_time=357,023,513 (28.1% of total), proof_size=30,867

| Category     | Opcodes Used                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ----------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                     | 6,178     | 3          | 308,936,260 | 30,867     | 86.5%         | 100.0%          |
| Crypto       | KECCAK256                                                         | 305       | 1          | 15,219,717  | 0          | 4.3%          | 0.0%            |
| Events       | LOG1                                                              | 275       | 1          | 13,751,564  | 0          | 3.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                             | 149       | 53         | 7,487,200   | 0          | 2.1%          | 0.0%            |
| Stack        | DUP1, DUP2, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1 | 144       | 160        | 7,273,280   | 0          | 2.0%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                               | 43        | 47         | 2,154,480   | 0          | 0.6%          | 0.0%            |
| Context      | CALLER, TIMESTAMP                                                 | 15        | 2          | 750,000     | 0          | 0.2%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                         | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHR                                                     | 5         | 5          | 229,200     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                     | 5         | 5          | 229,200     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                        | 3         | 3          | 106,960     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                               | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - unpauseSales

- **Total Gas Used:** 236,866
- **Base Call Weight:** ref_time=912,730,721, proof_size=8,342
- **Total Weight:** ref_time=1,487,483,378, proof_size=144,038
- **Weight Consumed:** ref_time=574,752,657 (38.6% of total), proof_size=135,696

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,222     | 3          | 311,108,988 | 30,964     | 54.1%         | 22.8%           |
| Crypto    | hash_keccak_256                           | 609       | 2          | 30,439,434  | 0          | 5.3%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 2.4%          | 0.0%            |
| Context   | caller, now                               | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### WETH9_evm - deploy

- **Total Gas Used:** 19,522,786
- **Base Call Weight:** ref_time=1,549,305,061, proof_size=6,934
- **Total Weight:** ref_time=2,275,464,063, proof_size=68,572
- **Weight Consumed:** ref_time=726,159,002 (31.9% of total), proof_size=61,638

| Category     | Opcodes Used                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                        | 172,786   | 6          | 719,295,039 | 61,638     | 99.1%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 57        | 62         | 2,796,240   | 0          | 0.4%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                | 38        | 23         | 1,955,840   | 0          | 0.3%          | 0.0%            |
| Code         | CODECOPY                                                                             | 17        | 1          | 830,243     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                               | 10        | 10         | 458,400     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT                                                                   | 7         | 8          | 366,720     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                            | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                        | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                                                  | 0         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - deploy

- **Total Gas Used:** 53,938,166
- **Base Call Weight:** ref_time=1,789,607,045, proof_size=6,934
- **Total Weight:** ref_time=2,549,508,821, proof_size=68,476
- **Weight Consumed:** ref_time=759,901,776 (29.8% of total), proof_size=61,542

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 172,783   | 6          | 719,144,415 | 61,542     | 94.6%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size            | 17        | 2          | 826,576     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### WETH9_evm - deposit

- **Total Gas Used:** 348,490
- **Base Call Weight:** ref_time=912,804,683, proof_size=8,360
- **Total Weight:** ref_time=1,188,685,343, proof_size=28,906
- **Weight Consumed:** ref_time=275,880,660 (23.2% of total), proof_size=20,546

| Category     | Opcodes Used                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                | 57,595    | 2          | 239,765,013 | 20,546     | 86.9%         | 100.0%          |
| Crypto       | KECCAK256                                                    | 304       | 1          | 15,219,717  | 0          | 5.5%          | 0.0%            |
| Events       | LOG2                                                         | 275       | 1          | 13,751,564  | 0          | 5.0%          | 0.0%            |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 47        | 53         | 2,368,400   | 0          | 0.9%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                        | 44        | 18         | 2,139,200   | 0          | 0.8%          | 0.0%            |
| Context      | CALLER                                                       | 16        | 2          | 806,000     | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                    | 13        | 2          | 638,000     | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                          | 11        | 13         | 595,920     | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                | 4         | 5          | 229,200     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                   | 3         | 3          | 106,960     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                          | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Bitwise      | NOT, SHR                                                     | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - deposit

- **Total Gas Used:** 349,907
- **Base Call Weight:** ref_time=912,804,683, proof_size=8,360
- **Total Weight:** ref_time=1,259,534,400, proof_size=46,070
- **Weight Consumed:** ref_time=346,729,717 (27.5% of total), proof_size=37,710

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 69.1%         | 54.4%           |
| Crypto    | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 4.4%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 4.0%          | 0.0%            |
| Context   | caller                                    | 16        | 2          | 806,000     | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 12        | 2          | 638,000     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465     | 0          | 0.2%          | 0.0%            |


### WETH9_evm - transfer

- **Total Gas Used:** 469,368
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,532,588,260, proof_size=59,944
- **Weight Consumed:** ref_time=619,080,938 (40.4% of total), proof_size=51,413

| Category     | Opcodes Used                                                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                               | 63,773    | 5          | 548,719,257 | 51,413     | 88.6%         | 100.0%          |
| Crypto       | KECCAK256                                                                                   | 913       | 3          | 45,659,151  | 0          | 7.4%          | 0.0%            |
| Events       | LOG3                                                                                        | 275       | 1          | 13,751,564  | 0          | 2.2%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 88        | 101        | 4,522,880   | 0          | 0.7%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                       | 64        | 28         | 3,056,000   | 0          | 0.5%          | 0.0%            |
| Context      | CALLER                                                                                      | 16        | 2          | 806,000     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                                         | 17        | 17         | 779,280     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                               | 9         | 11         | 504,240     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                          | 8         | 8          | 366,720     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                    | 7         | 7          | 320,880     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                   | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                  | 4         | 5          | 198,640     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - transfer

- **Total Gas Used:** 471,823
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,655,325,011, proof_size=77,108
- **Weight Consumed:** ref_time=741,817,689 (44.8% of total), proof_size=68,577

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 63,773    | 5          | 548,669,049 | 51,381     | 74.0%         | 74.9%           |
| Crypto    | hash_keccak_256                           | 913       | 3          | 45,659,151  | 0          | 6.2%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 1.9%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 28        | 4          | 1,359,000   | 0          | 0.2%          | 0.0%            |
| Context   | caller                                    | 16        | 2          | 806,000     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 535,865     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### WETH9_evm - withdraw

- **Total Gas Used:** 354,379
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,723,148,219, proof_size=44,893
- **Weight Consumed:** ref_time=810,047,688 (47.0% of total), proof_size=36,461

| Category     | Opcodes Used                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls        | CALL                                                                | 8,988     | 1          | 449,408,600 | 5,594      | 55.5%         | 15.3%           |
| Storage      | SLOAD, SSTORE                                                       | 6,179     | 3          | 308,954,244 | 30,867     | 38.1%         | 84.7%           |
| Crypto       | KECCAK256                                                           | 608       | 2          | 30,439,434  | 0          | 3.8%          | 0.0%            |
| Events       | LOG2                                                                | 275       | 1          | 13,751,564  | 0          | 1.7%          | 0.0%            |
| Stack        | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3, SWAP4 | 54        | 59         | 2,597,600   | 0          | 0.3%          | 0.0%            |
| Control Flow | JUMPDEST, JUMPI                                                     | 34        | 14         | 1,726,640   | 0          | 0.2%          | 0.0%            |
| Context      | CALLER                                                              | 32        | 4          | 1,612,000   | 0          | 0.2%          | 0.0%            |
| Comparison   | EQ, ISZERO, LT, SLT                                                 | 9         | 11         | 504,240     | 0          | 0.1%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                       | 7         | 7          | 320,880     | 0          | 0.0%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                           | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                          | 4         | 4          | 152,800     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                            | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Bitwise      | NOT, SHR                                                            | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - withdraw

- **Total Gas Used:** 356,206
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=1,814,506,569, proof_size=62,089
- **Weight Consumed:** ref_time=901,406,038 (49.7% of total), proof_size=53,657

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls     | call_evm                                  | 8,999     | 1          | 449,944,465 | 5,594      | 49.9%         | 10.4%           |
| Storage   | get_storage_or_zero, set_storage_or_clear | 6,178     | 3          | 308,954,244 | 30,867     | 34.3%         | 57.5%           |
| Crypto    | hash_keccak_256                           | 609       | 2          | 30,439,434  | 0          | 3.4%          | 0.0%            |
| Events    | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 1.5%          | 0.0%            |
| Context   | caller                                    | 32        | 4          | 1,612,000   | 0          | 0.2%          | 0.0%            |
| Calldata  | call_data_load, call_data_size            | 20        | 3          | 1,016,000   | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### XENCrypto_evm - deploy

- **Total Gas Used:** 38,554,123
- **Base Call Weight:** ref_time=1,683,462,063, proof_size=6,934
- **Total Weight:** ref_time=2,350,323,858, proof_size=58,283
- **Weight Consumed:** ref_time=666,861,795 (28.4% of total), proof_size=51,349

| Category     | Opcodes Used                                                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                               | 171,404   | 5          | 650,130,320 | 51,349     | 97.5%         | 100.0%          |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH10, PUSH2, PUSH3, SWAP1, SWAP2, SWAP3, SWAP4 | 144       | 159        | 7,074,640   | 0          | 1.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                       | 57        | 31         | 2,964,320   | 0          | 0.4%          | 0.0%            |
| Code         | CODECOPY                                                                                    | 49        | 1          | 2,450,995   | 0          | 0.4%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                                      | 26        | 28         | 1,283,520   | 0          | 0.2%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                               | 16        | 19         | 870,960     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT                                                                          | 15        | 18         | 825,120     | 0          | 0.1%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                    | 13        | 13         | 595,920     | 0          | 0.1%          | 0.0%            |
| Context      | TIMESTAMP                                                                                   | 7         | 1          | 347,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                   | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### XENCrypto_pvm - deploy

- **Total Gas Used:** 273,702,905
- **Base Call Weight:** ref_time=3,300,230,397, proof_size=6,934
- **Total Weight:** ref_time=4,190,424,438, proof_size=58,219
- **Weight Consumed:** ref_time=890,194,041 (21.2% of total), proof_size=51,285

| Category   | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ---------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage    | get_storage_or_zero, set_storage_or_clear | 171,400   | 5          | 650,029,904 | 51,285     | 73.0%         | 100.0%          |
| Immutables | set_immutable_data                        | 2,049     | 1          | 102,480,992 | 0          | 11.5%         | 0.0%            |
| Calldata   | call_data_copy, call_data_size            | 17        | 2          | 826,576     | 0          | 0.1%          | 0.0%            |
| Return     | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context    | now                                       | 7         | 1          | 347,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas  | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


