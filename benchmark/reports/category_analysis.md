# Opcode Category Analysis

Generated on: 2026-01-29

Opcodes grouped by functional category.

## Chain: Geth

### CoinTool_App_evm - deploy

- **Total Gas Used:** 756,027

| Category           | Opcodes Used                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | -------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                | 22,100    | 2          | 97.1%        | 2.9%        |
| Code               | CODECOPY                                     | 618       | 1          | 2.7%         | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 20        | 7          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL                            | 12        | 4          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                     | 6         | 2          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | ADDRESS, ORIGIN                              | 4         | 2          | 0.0%         | 0.0%        |
| Return             | RETURN                                       | 0         | 1          | 0.0%         | 0.0%        |


### CoinTool_App_evm - t

- **Total Gas Used:** 11,604,727

| Category           | Opcodes Used                                                                                                                                                                               | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Calls              | CALL, DELEGATECALL                                                                                                                                                                         | 472,176   | 2          | 89.7%        | 4.1%        |
| Creation           | CREATE2                                                                                                                                                                                    | 32,120    | 1          | 6.1%         | 0.3%        |
| Storage            | SLOAD, SSTORE                                                                                                                                                                              | 20,100    | 2          | 3.8%         | 0.2%        |
| Events/Logs        | LOG2                                                                                                                                                                                       | 1,637     | 1          | 0.3%         | 0.0%        |
| Stack              | DUP1, DUP10, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH12, PUSH2, PUSH20, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 82        | 28         | 0.0%         | 0.0%        |
| Code               | CODECOPY, CODESIZE                                                                                                                                                                         | 65        | 2          | 0.0%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                                                  | 42        | 1          | 0.0%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                      | 19        | 3          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, DIV, MUL, SUB                                                                                                                                                                         | 16        | 4          | 0.0%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                     | 15        | 5          | 0.0%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                    | 15        | 5          | 0.0%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                   | 11        | 3          | 0.0%         | 0.0%        |
| Context/Blockchain | ADDRESS, CALLER, ORIGIN, TIMESTAMP                                                                                                                                                         | 8         | 4          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                              | 6         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE, GAS                                                                                                                                                                             | 4         | 2          | 0.0%         | 0.0%        |
| Return Data        | RETURNDATASIZE                                                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN, STOP                                                                                                                                                                               | 0         | 2          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - configurePublicAccess

- **Total Gas Used:** 53,551

| Category           | Opcodes Used                                                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                        | 22,100    | 2          | 93.5%        | 41.3%       |
| Events/Logs        | LOG2                                                                                                                 | 1,381     | 1          | 5.8%         | 2.6%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 52        | 18         | 0.2%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                            | 42        | 1          | 0.2%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                               | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                              | 15        | 5          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                        | 9         | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                             | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                           | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                               | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                            | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                 | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - createDocument

- **Total Gas Used:** 253,901

| Category           | Opcodes Used                                                                                                                                                                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                                                                | 22,100    | 2          | 88.4%        | 8.7%        |
| Events/Logs        | LOG2                                                                                                                                                                                                                                                         | 2,661     | 1          | 10.6%        | 1.0%        |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP14, SWAP15, SWAP16, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 109       | 37         | 0.4%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                                                                                                                    | 36        | 1          | 0.1%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                                        | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                                                       | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                                                      | 15        | 5          | 0.1%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                                                     | 14        | 3          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                                                                                | 10        | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                                                                     | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                                                                            | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                                                                                                                                         | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - createDocument2

- **Total Gas Used:** 236,801

| Category           | Opcodes Used                                                                                                                                                                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                                                                | 22,100    | 2          | 88.4%        | 9.3%        |
| Events/Logs        | LOG2                                                                                                                                                                                                                                                         | 2,661     | 1          | 10.6%        | 1.1%        |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP14, SWAP15, SWAP16, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 109       | 37         | 0.4%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                                                                                                                    | 36        | 1          | 0.1%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                                        | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                                                       | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                                                      | 15        | 5          | 0.1%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                                                     | 14        | 3          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                                                                                | 10        | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                                                                     | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                                                                            | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                                                                                                                                         | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - deploy

- **Total Gas Used:** 2,093,513

| Category     | Opcodes Used                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Code         | CODECOPY                              | 1,950     | 1          | 97.9%        | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 18        | 6          | 0.9%         | 0.0%        |
| Memory       | MSTORE                                | 12        | 1          | 0.6%         | 0.0%        |
| Control Flow | JUMPI                                 | 10        | 1          | 0.5%         | 0.0%        |
| Ether/Gas    | CALLVALUE                             | 2         | 1          | 0.1%         | 0.0%        |
| Return       | RETURN                                | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - grantAccessWithShare

- **Total Gas Used:** 200,142

| Category           | Opcodes Used                                                                                                                                                                                            | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                           | 22,100    | 2          | 90.0%        | 11.0%       |
| Events/Logs        | LOG3                                                                                                                                                                                                    | 2,268     | 1          | 9.2%         | 1.1%        |
| Stack              | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 88        | 30         | 0.4%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                                                               | 36        | 1          | 0.1%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                   | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                  | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                 | 15        | 5          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                           | 9         | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                              | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                       | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                               | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                                                                                    | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - registerKeys

- **Total Gas Used:** 92,093

| Category           | Opcodes Used                                                                                                                                           | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                          | 22,100    | 2          | 90.5%        | 24.0%       |
| Events/Logs        | LOG2                                                                                                                                                   | 2,149     | 1          | 8.8%         | 2.3%        |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP8 | 67        | 23         | 0.3%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                              | 42        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                  | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                 | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                | 15        | 5          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                          | 9         | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                               | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                             | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                      | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                              | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                                   | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - revokeAccess

- **Total Gas Used:** 60,496

| Category           | Opcodes Used                                                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                        | 3,000     | 2          | 61.0%        | 5.0%        |
| Events/Logs        | LOG3                                                                                                                 | 1,756     | 1          | 35.7%        | 2.9%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 52        | 18         | 1.1%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                            | 36        | 1          | 0.7%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                | 19        | 3          | 0.4%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                               | 15        | 5          | 0.3%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                              | 15        | 5          | 0.3%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                        | 9         | 2          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                             | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                           | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                               | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                            | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                 | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - transferOwnership

- **Total Gas Used:** 129,468

| Category           | Opcodes Used                                                                                                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                   | 22,100    | 2          | 91.5%        | 17.1%       |
| Events/Logs        | LOG4                                                                                                                                            | 1,875     | 1          | 7.8%         | 1.4%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP7 | 64        | 22         | 0.3%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                       | 36        | 1          | 0.1%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                           | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                          | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                         | 15        | 5          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                        | 6         | 2          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                   | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                      | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                               | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                            | 0         | 1          | 0.0%         | 0.0%        |


### DocumentAccessManagement_evm - updateDocument

- **Total Gas Used:** 44,119

| Category           | Opcodes Used                                                                                                                                                        | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                       | 5,000     | 2          | 96.4%        | 11.3%       |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 73        | 25         | 1.4%         | 0.2%        |
| Crypto             | KECCAK256                                                                                                                                                           | 42        | 1          | 0.8%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                               | 19        | 3          | 0.4%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                              | 15        | 5          | 0.3%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                             | 15        | 5          | 0.3%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                            | 6         | 2          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                       | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                          | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                   | 4         | 2          | 0.1%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                           | 2         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - createSubdomain

- **Total Gas Used:** 314,157

| Category           | Opcodes Used                                                                                                                                                                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                                         | 20,100    | 2          | 87.5%        | 6.4%        |
| Events/Logs        | LOG4                                                                                                                                                                                                                                  | 2,643     | 1          | 11.5%        | 0.8%        |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 100       | 34         | 0.4%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                                                                                             | 42        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                 | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                                                                          | 18        | 6          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                               | 15        | 5          | 0.1%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                              | 14        | 3          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                                                                                                                | 9         | 3          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                                              | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                                                     | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                                                                | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - deploy

- **Total Gas Used:** 1,813,886

| Category     | Opcodes Used                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Code         | CODECOPY                              | 1,667     | 1          | 97.5%        | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 18        | 6          | 1.1%         | 0.0%        |
| Memory       | MSTORE                                | 12        | 1          | 0.7%         | 0.0%        |
| Control Flow | JUMPI                                 | 10        | 1          | 0.6%         | 0.0%        |
| Ether/Gas    | CALLVALUE                             | 2         | 1          | 0.1%         | 0.0%        |
| Return       | RETURN                                | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - register

- **Total Gas Used:** 273,107

| Category           | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                             | 20,100    | 2          | 89.0%        | 7.4%        |
| Events/Logs        | LOG3                                                                                                                                                                                      | 2,268     | 1          | 10.0%        | 0.8%        |
| Stack              | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 82        | 28         | 0.4%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                                                 | 42        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 18        | 6          | 0.1%         | 0.0%        |
| Memory             | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 18        | 4          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 15        | 5          | 0.1%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 14        | 3          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                  | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                         | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                 | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                    | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - register_with_duration

- **Total Gas Used:** 275,104

| Category           | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                             | 20,100    | 2          | 89.0%        | 7.3%        |
| Events/Logs        | LOG3                                                                                                                                                                                      | 2,268     | 1          | 10.0%        | 0.8%        |
| Stack              | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 82        | 28         | 0.4%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                                                 | 42        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 18        | 6          | 0.1%         | 0.0%        |
| Memory             | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 18        | 4          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 15        | 5          | 0.1%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 14        | 3          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                  | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                         | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                 | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                    | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - release

- **Total Gas Used:** 78,940

| Category           | Opcodes Used                                                                                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                         | 5,000     | 2          | 70.5%        | 6.3%        |
| Events/Logs        | LOG2                                                                                                                                                  | 1,893     | 1          | 26.7%        | 2.4%        |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 67        | 23         | 0.9%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                             | 42        | 1          | 0.6%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 19        | 3          | 0.3%         | 0.0%        |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 18        | 6          | 0.3%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 15        | 5          | 0.2%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 14        | 3          | 0.2%         | 0.0%        |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                                | 12        | 3          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                              | 6         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                                                | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                                  | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - renew

- **Total Gas Used:** 45,725

| Category           | Opcodes Used                                                                                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                         | 3,000     | 2          | 56.1%        | 6.6%        |
| Events/Logs        | LOG2                                                                                                                                                  | 2,149     | 1          | 40.2%        | 4.7%        |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 67        | 23         | 1.3%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                             | 42        | 1          | 0.8%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 19        | 3          | 0.4%         | 0.0%        |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 18        | 6          | 0.3%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 15        | 5          | 0.3%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 14        | 3          | 0.3%         | 0.0%        |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                                | 9         | 3          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                              | 6         | 2          | 0.1%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Context/Blockchain | TIMESTAMP                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                                  | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - setAddress

- **Total Gas Used:** 49,710

| Category           | Opcodes Used                                                                                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                         | 5,000     | 2          | 65.8%        | 10.1%       |
| Events/Logs        | LOG2                                                                                                                                                  | 2,405     | 1          | 31.6%        | 4.8%        |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 67        | 23         | 0.9%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                             | 42        | 1          | 0.6%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 19        | 3          | 0.3%         | 0.0%        |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 18        | 6          | 0.2%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 15        | 5          | 0.2%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 14        | 3          | 0.2%         | 0.0%        |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                                | 9         | 3          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                              | 6         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                                                | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                                  | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - setMetadata

- **Total Gas Used:** 66,607

| Category           | Opcodes Used                                                                                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                         | 24,200    | 2          | 91.2%        | 36.3%       |
| Events/Logs        | LOG2                                                                                                                                                  | 2,149     | 1          | 8.1%         | 3.2%        |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 67        | 23         | 0.3%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                             | 42        | 1          | 0.2%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 18        | 6          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 15        | 5          | 0.1%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 14        | 3          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                                | 9         | 3          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                              | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                                                | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                                  | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - setSubdomainOwner

- **Total Gas Used:** 153,052

| Category           | Opcodes Used                                                                                                                                                               | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                              | 20,100    | 2          | 87.5%        | 13.1%       |
| Events/Logs        | LOG4                                                                                                                                                                       | 2,643     | 1          | 11.5%        | 1.7%        |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 76        | 26         | 0.3%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                                  | 42        | 1          | 0.2%         | 0.0%        |
| Memory             | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                              | 22        | 4          | 0.1%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                      | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                               | 18        | 6          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                    | 15        | 5          | 0.1%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                   | 14        | 3          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                   | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                                                                     | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                  | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                                                       | 0         | 1          | 0.0%         | 0.0%        |


### DotNS_evm - transfer

- **Total Gas Used:** 124,441

| Category           | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                | 20,100    | 2          | 87.6%        | 16.2%       |
| Events/Logs        | LOG4                                                                                                                                                         | 2,643     | 1          | 11.5%        | 2.1%        |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 70        | 24         | 0.3%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                                    | 42        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                 | 18        | 6          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 15        | 5          | 0.1%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 14        | 3          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                                       | 12        | 3          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                     | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                                         | 0         | 1          | 0.0%         | 0.0%        |


### Escrow_evm - create_simple

- **Total Gas Used:** 213,536

| Category           | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                        | 22,100    | 2          | 89.5%        | 10.3%       |
| Events/Logs        | LOG4                                                                                                                                                                                                 | 2,387     | 1          | 9.7%         | 1.1%        |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 86        | 29         | 0.3%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                                                            | 36        | 1          | 0.1%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 15        | 5          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                             | 6         | 2          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                        | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                    | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                            | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                               | 0         | 1          | 0.0%         | 0.0%        |


### Escrow_evm - create_with_arbiter

- **Total Gas Used:** 165,048

| Category           | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                        | 5,000     | 2          | 66.0%        | 3.0%        |
| Events/Logs        | LOG4                                                                                                                                                                                                 | 2,387     | 1          | 31.5%        | 1.4%        |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 86        | 29         | 1.1%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                                                                            | 36        | 1          | 0.5%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 19        | 3          | 0.3%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 15        | 5          | 0.2%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 15        | 5          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                             | 6         | 2          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                        | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                    | 4         | 2          | 0.1%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                            | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                               | 0         | 1          | 0.0%         | 0.0%        |


### Escrow_evm - create_with_expiry

- **Total Gas Used:** 145,184

| Category           | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                        | 5,000     | 2          | 66.0%        | 3.4%        |
| Events/Logs        | LOG4                                                                                                                                                                                                 | 2,387     | 1          | 31.5%        | 1.6%        |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 86        | 29         | 1.1%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                                                                            | 36        | 1          | 0.5%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 19        | 3          | 0.3%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 15        | 5          | 0.2%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 15        | 5          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                             | 6         | 2          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                        | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                    | 4         | 2          | 0.1%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                            | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                               | 0         | 1          | 0.0%         | 0.0%        |


### Escrow_evm - create_with_releaseTime

- **Total Gas Used:** 145,184

| Category           | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                        | 5,000     | 2          | 66.0%        | 3.4%        |
| Events/Logs        | LOG4                                                                                                                                                                                                 | 2,387     | 1          | 31.5%        | 1.6%        |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 86        | 29         | 1.1%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                                                                            | 36        | 1          | 0.5%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 19        | 3          | 0.3%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 15        | 5          | 0.2%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 15        | 5          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                             | 6         | 2          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                        | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                    | 4         | 2          | 0.1%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                            | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                               | 0         | 1          | 0.0%         | 0.0%        |


### Escrow_evm - deploy

- **Total Gas Used:** 1,001,052

| Category     | Opcodes Used                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                | 22,100    | 2          | 96.1%        | 2.2%        |
| Code         | CODECOPY                                     | 827       | 1          | 3.6%         | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 20        | 7          | 0.1%         | 0.0%        |
| Bitwise      | AND, NOT, OR, SHL                            | 12        | 4          | 0.1%         | 0.0%        |
| Memory       | MSTORE                                       | 12        | 1          | 0.1%         | 0.0%        |
| Control Flow | JUMPI                                        | 10        | 1          | 0.0%         | 0.0%        |
| Arithmetic   | SUB                                          | 3         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                       | 0         | 1          | 0.0%         | 0.0%        |


### Escrow_evm - refund

- **Total Gas Used:** 66,729

| Category           | Opcodes Used                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Calls              | CALL                                                                                  | 11,113    | 1          | 74.3%        | 16.7%       |
| Storage            | SLOAD, SSTORE                                                                         | 2,200     | 2          | 14.7%        | 3.3%        |
| Events/Logs        | LOG3                                                                                  | 1,500     | 1          | 10.0%        | 2.2%        |
| Crypto             | KECCAK256                                                                             | 42        | 1          | 0.3%         | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP4 | 37        | 13         | 0.2%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                 | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, ISZERO, LT, SLT                                                                   | 12        | 4          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                              | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                            | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                     | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE, GAS                                                                        | 4         | 2          | 0.0%         | 0.0%        |
| Memory             | MSTORE                                                                                | 3         | 1          | 0.0%         | 0.0%        |
| Return Data        | RETURNDATASIZE                                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                  | 0         | 1          | 0.0%         | 0.0%        |


### Escrow_evm - release

- **Total Gas Used:** 70,987

| Category           | Opcodes Used                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Calls              | CALL                                                                                  | 13,671    | 1          | 78.0%        | 19.3%       |
| Storage            | SLOAD, SSTORE                                                                         | 2,200     | 2          | 12.6%        | 3.1%        |
| Events/Logs        | LOG3                                                                                  | 1,500     | 1          | 8.6%         | 2.1%        |
| Crypto             | KECCAK256                                                                             | 42        | 1          | 0.2%         | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP4 | 37        | 13         | 0.2%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                 | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, ISZERO, LT, SLT                                                                   | 12        | 4          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                              | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                            | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                     | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE, GAS                                                                        | 4         | 2          | 0.0%         | 0.0%        |
| Memory             | MSTORE                                                                                | 3         | 1          | 0.0%         | 0.0%        |
| Return Data        | RETURNDATASIZE                                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                  | 0         | 1          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - approve

- **Total Gas Used:** 55,331

| Category           | Opcodes Used                                                                                  | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | --------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Calls              | DELEGATECALL                                                                                  | 29,648    | 1          | 53.2%        | 53.6%       |
| Storage            | SLOAD, SSTORE                                                                                 | 24,200    | 2          | 43.4%        | 43.7%       |
| Events/Logs        | LOG3                                                                                          | 1,756     | 1          | 3.1%         | 3.2%        |
| Crypto             | KECCAK256                                                                                     | 42        | 1          | 0.1%         | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4, SWAP5, SWAP6 | 41        | 14         | 0.1%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                         | 19        | 3          | 0.0%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                      | 17        | 3          | 0.0%         | 0.0%        |
| Bitwise            | AND, NOT, SHL, SHR                                                                            | 12        | 4          | 0.0%         | 0.0%        |
| Comparison         | EQ, ISZERO, LT, SLT                                                                           | 12        | 4          | 0.0%         | 0.0%        |
| Return Data        | RETURNDATACOPY, RETURNDATASIZE                                                                | 8         | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                      | 6         | 2          | 0.0%         | 0.0%        |
| Code               | CODECOPY                                                                                      | 6         | 1          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                 | 6         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE, GAS                                                                                | 4         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                        | 0         | 1          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - changeAdmin

- **Total Gas Used:** 28,326

| Category           | Opcodes Used                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                             | 3,000     | 2          | 68.7%        | 10.6%       |
| Events/Logs        | LOG1                                                                      | 1,262     | 1          | 28.9%        | 4.5%        |
| Stack              | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 32        | 11         | 0.7%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                     | 19        | 3          | 0.4%         | 0.1%        |
| Bitwise            | AND, NOT, SHL, SHR                                                        | 12        | 4          | 0.3%         | 0.0%        |
| Comparison         | EQ, ISZERO, LT, SLT                                                       | 12        | 4          | 0.3%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                  | 6         | 2          | 0.1%         | 0.0%        |
| Code               | CODECOPY                                                                  | 6         | 1          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                             | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                 | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                      | 0         | 1          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - configureMinter

- **Total Gas Used:** 79,482

| Category           | Opcodes Used                                                                                       | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | -------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Calls              | DELEGATECALL                                                                                       | 53,493    | 1          | 67.5%        | 67.3%       |
| Storage            | SLOAD, SSTORE                                                                                      | 24,200    | 2          | 30.5%        | 30.4%       |
| Events/Logs        | LOG2                                                                                               | 1,381     | 1          | 1.7%         | 1.7%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 44        | 15         | 0.1%         | 0.1%        |
| Crypto             | KECCAK256                                                                                          | 42        | 1          | 0.1%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                              | 19        | 3          | 0.0%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                           | 17        | 3          | 0.0%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                             | 15        | 5          | 0.0%         | 0.0%        |
| Comparison         | EQ, ISZERO, LT, SLT                                                                                | 12        | 4          | 0.0%         | 0.0%        |
| Return Data        | RETURNDATACOPY, RETURNDATASIZE                                                                     | 8         | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                           | 6         | 2          | 0.0%         | 0.0%        |
| Code               | CODECOPY                                                                                           | 6         | 1          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                      | 6         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE, GAS                                                                                     | 4         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                             | 0         | 1          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - deploy

- **Total Gas Used:** 394,714

| Category           | Opcodes Used                                                                   | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage            | SSTORE                                                                         | 22,100    | 1          | 88.2%        | 5.6%        |
| Code               | CODECOPY, CODESIZE, EXTCODESIZE                                                | 2,861     | 3          | 11.4%        | 0.7%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP5 | 36        | 12         | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                  | 15        | 2          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL                                                              | 12        | 4          | 0.0%         | 0.0%        |
| Comparison         | GT, ISZERO, LT, SLT                                                            | 12        | 4          | 0.0%         | 0.0%        |
| Control Flow       | JUMPI                                                                          | 10        | 1          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                       | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                         | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                      | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                         | 0         | 1          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - initialize

- **Total Gas Used:** 212,439

| Category           | Opcodes Used                                                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Calls              | DELEGATECALL                                                                                                                                 | 186,567   | 1          | 99.8%        | 87.8%       |
| Storage            | SLOAD, SSTORE                                                                                                                                | 200       | 2          | 0.1%         | 0.1%        |
| Stack              | DUP1, DUP16, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP15, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 61        | 21         | 0.0%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                        | 19        | 3          | 0.0%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                       | 15        | 5          | 0.0%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                      | 15        | 5          | 0.0%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                     | 14        | 3          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                | 9         | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                     | 6         | 2          | 0.0%         | 0.0%        |
| Code               | CODECOPY                                                                                                                                     | 6         | 1          | 0.0%         | 0.0%        |
| Return Data        | RETURNDATACOPY, RETURNDATASIZE                                                                                                               | 5         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE, GAS                                                                                                                               | 4         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN, STOP                                                                                                                                 | 0         | 2          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - mint

- **Total Gas Used:** 83,152

| Category           | Opcodes Used                                                                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Calls              | DELEGATECALL                                                                                                     | 62,519    | 1          | 92.7%        | 75.2%       |
| Storage            | SLOAD, SSTORE                                                                                                    | 3,000     | 2          | 4.4%         | 3.6%        |
| Events/Logs        | LOG3                                                                                                             | 1,756     | 1          | 2.6%         | 2.1%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP6, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7 | 50        | 17         | 0.1%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                        | 42        | 1          | 0.1%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                            | 19        | 3          | 0.0%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                         | 17        | 3          | 0.0%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                          | 15        | 5          | 0.0%         | 0.0%        |
| Bitwise            | AND, NOT, SHL, SHR                                                                                               | 12        | 4          | 0.0%         | 0.0%        |
| Return Data        | RETURNDATACOPY, RETURNDATASIZE                                                                                   | 8         | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                         | 6         | 2          | 0.0%         | 0.0%        |
| Code               | CODECOPY                                                                                                         | 6         | 1          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                    | 6         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE, GAS                                                                                                   | 4         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                           | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - transfer

- **Total Gas Used:** 62,765

| Category           | Opcodes Used                                                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | --------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Calls              | DELEGATECALL                                                                                              | 36,996    | 1          | 62.7%        | 58.9%       |
| Storage            | SLOAD, SSTORE                                                                                             | 20,100    | 2          | 34.0%        | 32.0%       |
| Events/Logs        | LOG3                                                                                                      | 1,756     | 1          | 3.0%         | 2.8%        |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP8 | 47        | 16         | 0.1%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                 | 42        | 1          | 0.1%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                     | 19        | 3          | 0.0%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                  | 17        | 3          | 0.0%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                   | 15        | 5          | 0.0%         | 0.0%        |
| Bitwise            | AND, NOT, SHL, SHR                                                                                        | 12        | 4          | 0.0%         | 0.0%        |
| Return Data        | RETURNDATACOPY, RETURNDATASIZE                                                                            | 8         | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                  | 6         | 2          | 0.0%         | 0.0%        |
| Code               | CODECOPY                                                                                                  | 6         | 1          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                             | 6         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE, GAS                                                                                            | 4         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                    | 0         | 1          | 0.0%         | 0.0%        |


### FiatTokenProxy_evm - transferFrom

- **Total Gas Used:** 51,389

| Category           | Opcodes Used                                                                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Calls              | DELEGATECALL                                                                                                     | 24,997    | 1          | 83.5%        | 48.6%       |
| Storage            | SLOAD, SSTORE                                                                                                    | 3,000     | 2          | 10.0%        | 5.8%        |
| Events/Logs        | LOG3                                                                                                             | 1,756     | 1          | 5.9%         | 3.4%        |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP8 | 50        | 17         | 0.2%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                        | 42        | 1          | 0.1%         | 0.1%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                         | 23        | 3          | 0.1%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                            | 19        | 3          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                          | 15        | 5          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, SHL, SHR                                                                                               | 12        | 4          | 0.0%         | 0.0%        |
| Return Data        | RETURNDATACOPY, RETURNDATASIZE                                                                                   | 8         | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                         | 6         | 2          | 0.0%         | 0.0%        |
| Code               | CODECOPY                                                                                                         | 6         | 1          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                    | 6         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE, GAS                                                                                                   | 4         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                           | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### FiatTokenV2_2_evm - deploy

- **Total Gas Used:** 3,412,411

| Category           | Opcodes Used                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | -------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                | 4,300     | 2          | 55.7%        | 0.1%        |
| Code               | CODECOPY                                     | 3,359     | 1          | 43.5%        | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 20        | 7          | 0.3%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL                            | 12        | 4          | 0.2%         | 0.0%        |
| Memory             | MSTORE                                       | 12        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMPI                                        | 10        | 1          | 0.1%         | 0.0%        |
| Arithmetic         | SUB                                          | 3         | 1          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                       | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                       | 0         | 1          | 0.0%         | 0.0%        |


### Fibonacci_evm - deploy

- **Total Gas Used:** 112,683

| Category     | Opcodes Used                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Code         | CODECOPY                              | 60        | 1          | 58.8%        | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 18        | 6          | 17.6%        | 0.0%        |
| Memory       | MSTORE                                | 12        | 1          | 11.8%        | 0.0%        |
| Control Flow | JUMPI                                 | 10        | 1          | 9.8%         | 0.0%        |
| Ether/Gas    | CALLVALUE                             | 2         | 1          | 2.0%         | 0.0%        |
| Return       | RETURN                                | 0         | 1          | 0.0%         | 0.0%        |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 47,664

| Category     | Opcodes Used                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 28        | 10         | 29.2%        | 0.1%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 19        | 3          | 19.8%        | 0.0%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                         | 15        | 5          | 15.6%        | 0.0%        |
| Memory       | MSTORE                                                          | 12        | 1          | 12.5%        | 0.0%        |
| Bitwise      | AND, NOT, SHR                                                   | 9         | 3          | 9.4%         | 0.0%        |
| Arithmetic   | ADD, SUB                                                        | 6         | 2          | 6.3%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 5         | 2          | 5.2%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                       | 2         | 1          | 2.1%         | 0.0%        |
| Return       | STOP                                                            | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - burn

- **Total Gas Used:** 36,706

| Category           | Opcodes Used                                                                                                  | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                 | 3,000     | 2          | 60.9%        | 8.2%        |
| Events/Logs        | LOG3                                                                                                          | 1,756     | 1          | 35.7%        | 4.8%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 49        | 17         | 1.0%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                     | 42        | 1          | 0.9%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                         | 19        | 3          | 0.4%         | 0.1%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                        | 15        | 5          | 0.3%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                       | 15        | 5          | 0.3%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                 | 12        | 2          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                      | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                    | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                     | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                          | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - createClass_nontransferable

- **Total Gas Used:** 142,667

| Category           | Opcodes Used                                                                                                                                                                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                   | 22,100    | 2          | 89.9%        | 15.5%       |
| Events/Logs        | LOG3                                                                                                                                                                                                            | 2,268     | 1          | 9.2%         | 1.6%        |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 91        | 31         | 0.4%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                                                                                       | 42        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 15        | 5          | 0.1%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 14        | 3          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                        | 6         | 2          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                                   | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                               | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                                          | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - createClass_transferable

- **Total Gas Used:** 122,767

| Category           | Opcodes Used                                                                                                                                                                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                   | 22,100    | 2          | 89.9%        | 18.0%       |
| Events/Logs        | LOG3                                                                                                                                                                                                            | 2,268     | 1          | 9.2%         | 1.8%        |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 91        | 31         | 0.4%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                                                                                       | 42        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 15        | 5          | 0.1%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 14        | 3          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                        | 6         | 2          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                                   | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                               | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                                          | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - deploy

- **Total Gas Used:** 1,630,242

| Category     | Opcodes Used                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                | 22,100    | 2          | 93.6%        | 1.4%        |
| Code         | CODECOPY                                     | 1,458     | 1          | 6.2%         | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 20        | 7          | 0.1%         | 0.0%        |
| Bitwise      | AND, NOT, OR, SHL                            | 12        | 4          | 0.1%         | 0.0%        |
| Memory       | MSTORE                                       | 12        | 1          | 0.1%         | 0.0%        |
| Control Flow | JUMPI                                        | 10        | 1          | 0.0%         | 0.0%        |
| Arithmetic   | SUB                                          | 3         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                       | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - issue

- **Total Gas Used:** 205,604

| Category           | Opcodes Used                                                                                                                               | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                              | 20,100    | 2          | 91.2%        | 9.8%        |
| Events/Logs        | LOG3                                                                                                                                       | 1,756     | 1          | 8.0%         | 0.9%        |
| Stack              | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 61        | 21         | 0.3%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                  | 42        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                      | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                     | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                    | 15        | 5          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                              | 12        | 2          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                   | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                 | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                                     | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                  | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                       | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - issue_more

- **Total Gas Used:** 41,644

| Category           | Opcodes Used                                                                                                                        | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                       | 5,000     | 2          | 72.1%        | 12.0%       |
| Events/Logs        | LOG3                                                                                                                                | 1,756     | 1          | 25.3%        | 4.2%        |
| Stack              | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP6 | 58        | 20         | 0.8%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                           | 42        | 1          | 0.6%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                               | 19        | 3          | 0.3%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                              | 15        | 5          | 0.2%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                             | 15        | 5          | 0.2%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                       | 12        | 2          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                            | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                          | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                              | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                           | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - revoke

- **Total Gas Used:** 37,346

| Category           | Opcodes Used                                                                                                                      | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                     | 3,000     | 2          | 60.8%        | 8.0%        |
| Events/Logs        | LOG3                                                                                                                              | 1,756     | 1          | 35.6%        | 4.7%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 58        | 20         | 1.2%         | 0.2%        |
| Crypto             | KECCAK256                                                                                                                         | 42        | 1          | 0.9%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                             | 19        | 3          | 0.4%         | 0.1%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                            | 15        | 5          | 0.3%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                           | 15        | 5          | 0.3%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                     | 12        | 2          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                          | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                        | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                            | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                         | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                              | 0         | 1          | 0.0%         | 0.0%        |


### FungibleCredential_evm - transfer

- **Total Gas Used:** 174,324

| Category           | Opcodes Used                                                                                                           | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                          | 20,100    | 2          | 89.7%        | 11.5%       |
| Events/Logs        | LOG4                                                                                                                   | 2,131     | 1          | 9.5%         | 1.2%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 53        | 18         | 0.2%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                              | 42        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                  | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                 | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                | 15        | 5          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                          | 12        | 2          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                               | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                             | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                 | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                              | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                   | 0         | 1          | 0.0%         | 0.0%        |


### KeyRegistry_evm - deploy

- **Total Gas Used:** 976,448

| Category     | Opcodes Used                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Code         | CODECOPY                              | 847       | 1          | 95.3%        | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 18        | 6          | 2.0%         | 0.0%        |
| Memory       | MSTORE                                | 12        | 1          | 1.3%         | 0.0%        |
| Control Flow | JUMPI                                 | 10        | 1          | 1.1%         | 0.0%        |
| Ether/Gas    | CALLVALUE                             | 2         | 1          | 0.2%         | 0.0%        |
| Return       | RETURN                                | 0         | 1          | 0.0%         | 0.0%        |


### KeyRegistry_evm - fetchPrekeyBundle

- **Total Gas Used:** 70,228

| Category           | Opcodes Used                                                                                                                                                                       | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                      | 2,200     | 2          | 56.4%        | 3.1%        |
| Events/Logs        | LOG3                                                                                                                                                                               | 1,500     | 1          | 38.5%        | 2.1%        |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 79        | 27         | 2.0%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                                                          | 36        | 1          | 0.9%         | 0.1%        |
| Memory             | MCOPY, MLOAD, MSTORE                                                                                                                                                               | 21        | 3          | 0.5%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                              | 19        | 3          | 0.5%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                             | 15        | 5          | 0.4%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                            | 15        | 5          | 0.4%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                           | 6         | 2          | 0.2%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                         | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                                                                             | 2         | 1          | 0.1%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                          | 2         | 1          | 0.1%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                             | 0         | 1          | 0.0%         | 0.0%        |


### KeyRegistry_evm - registerIdentity

- **Total Gas Used:** 226,938

| Category           | Opcodes Used                                                                                                                                                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Events/Logs        | LOG2                                                                                                                                                                                                      | 1,381     | 1          | 77.1%        | 0.6%        |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                             | 200       | 2          | 11.2%        | 0.1%        |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP8, SWAP9 | 88        | 30         | 4.9%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                                                                 | 36        | 1          | 2.0%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                  | 20        | 3          | 1.1%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                     | 19        | 3          | 1.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                    | 15        | 5          | 0.8%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                   | 15        | 5          | 0.8%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                  | 6         | 2          | 0.3%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                             | 6         | 2          | 0.3%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                         | 4         | 2          | 0.2%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                 | 2         | 1          | 0.1%         | 0.0%        |
| Return             | STOP                                                                                                                                                                                                      | 0         | 1          | 0.0%         | 0.0%        |


### KeyRegistry_evm - updateSignedPrekey

- **Total Gas Used:** 50,528

| Category           | Opcodes Used                                                                                                                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                   | 3,000     | 2          | 62.3%        | 5.9%        |
| Events/Logs        | LOG2                                                                                                                                                            | 1,637     | 1          | 34.0%        | 3.2%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7, SWAP9 | 70        | 24         | 1.5%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                                       | 36        | 1          | 0.7%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                           | 19        | 3          | 0.4%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                          | 15        | 5          | 0.3%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                         | 15        | 5          | 0.3%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                   | 9         | 2          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                        | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                      | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                               | 4         | 2          | 0.1%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                                            | 0         | 1          | 0.0%         | 0.0%        |


### KeyRegistry_evm - uploadOneTimePrekeys

- **Total Gas Used:** 119,885

| Category           | Opcodes Used                                                                                                                | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                               | 22,100    | 2          | 93.5%        | 18.4%       |
| Events/Logs        | LOG2                                                                                                                        | 1,381     | 1          | 5.8%         | 1.2%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 55        | 19         | 0.2%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                   | 36        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                       | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                      | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                     | 15        | 5          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                               | 12        | 2          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                    | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                  | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                      | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                   | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                        | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - addWriter

- **Total Gas Used:** 93,068

| Category           | Opcodes Used                                                                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                   | 22,100    | 2          | 93.1%        | 23.7%       |
| Events/Logs        | LOG3                                                                                                            | 1,500     | 1          | 6.3%         | 1.6%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 50        | 17         | 0.2%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                       | 36        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                           | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                          | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, ISZERO, LT, SLT                                                                                             | 12        | 4          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                        | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                      | 5         | 2          | 0.0%         | 0.0%        |
| Memory             | MSTORE                                                                                                          | 3         | 1          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                          | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                            | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - append

- **Total Gas Used:** 121,167

| Category           | Opcodes Used                                                                                                                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                         | 22,100    | 2          | 90.5%        | 18.2%       |
| Events/Logs        | LOG4                                                                                                                                                                                  | 2,131     | 1          | 8.7%         | 1.8%        |
| Stack              | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 80        | 27         | 0.3%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                                                             | 42        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 15        | 5          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                              | 6         | 2          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                         | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                     | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - append_2

- **Total Gas Used:** 121,167

| Category           | Opcodes Used                                                                                                                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                         | 22,100    | 2          | 90.5%        | 18.2%       |
| Events/Logs        | LOG4                                                                                                                                                                                  | 2,131     | 1          | 8.7%         | 1.8%        |
| Stack              | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 80        | 27         | 0.3%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                                                             | 42        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 15        | 5          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                              | 6         | 2          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                         | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                     | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - create_nonpermissioned

- **Total Gas Used:** 118,096

| Category           | Opcodes Used                                                                                                                                                                                  | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                 | 22,100    | 2          | 91.9%        | 18.7%       |
| Events/Logs        | LOG3                                                                                                                                                                                          | 1,756     | 1          | 7.3%         | 1.5%        |
| Stack              | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 83        | 28         | 0.3%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                                                                     | 36        | 1          | 0.1%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 15        | 5          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                      | 6         | 2          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                 | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                             | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                     | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                        | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - create_permissioned

- **Total Gas Used:** 83,908

| Category           | Opcodes Used                                                                                                                                                                                  | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                 | 5,000     | 2          | 72.0%        | 6.0%        |
| Events/Logs        | LOG3                                                                                                                                                                                          | 1,756     | 1          | 25.3%        | 2.1%        |
| Stack              | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 83        | 28         | 1.2%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                                                                     | 36        | 1          | 0.5%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 19        | 3          | 0.3%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 15        | 5          | 0.2%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 15        | 5          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                      | 6         | 2          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                 | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                             | 4         | 2          | 0.1%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                     | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                        | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - deploy

- **Total Gas Used:** 1,427,724

| Category     | Opcodes Used                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                | 22,100    | 2          | 94.4%        | 1.5%        |
| Code         | CODECOPY                                     | 1,260     | 1          | 5.4%         | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 20        | 7          | 0.1%         | 0.0%        |
| Bitwise      | AND, NOT, OR, SHL                            | 12        | 4          | 0.1%         | 0.0%        |
| Memory       | MSTORE                                       | 12        | 1          | 0.1%         | 0.0%        |
| Control Flow | JUMPI                                        | 10        | 1          | 0.0%         | 0.0%        |
| Arithmetic   | SUB                                          | 3         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                       | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - removeWriter

- **Total Gas Used:** 34,350

| Category           | Opcodes Used                                                                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                   | 3,000     | 2          | 64.5%        | 8.7%        |
| Events/Logs        | LOG3                                                                                                            | 1,500     | 1          | 32.2%        | 4.4%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 50        | 17         | 1.1%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                       | 36        | 1          | 0.8%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                           | 19        | 3          | 0.4%         | 0.1%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                          | 15        | 5          | 0.3%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                         | 15        | 5          | 0.3%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                        | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                      | 5         | 2          | 0.1%         | 0.0%        |
| Memory             | MSTORE                                                                                                          | 3         | 1          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                          | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                            | 0         | 1          | 0.0%         | 0.0%        |


### Log_evm - transfer

- **Total Gas Used:** 85,898

| Category           | Opcodes Used                                                                                                                        | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                       | 22,100    | 2          | 91.6%        | 25.7%       |
| Events/Logs        | LOG4                                                                                                                                | 1,875     | 1          | 7.8%         | 2.2%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 59        | 20         | 0.2%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                           | 36        | 1          | 0.1%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                               | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                              | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                             | 15        | 5          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                            | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                          | 5         | 2          | 0.0%         | 0.0%        |
| Memory             | MSTORE                                                                                                                              | 3         | 1          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                              | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                           | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                | 0         | 1          | 0.0%         | 0.0%        |


### NonFungibleCredential_evm - deploy

- **Total Gas Used:** 1,511,673

| Category     | Opcodes Used                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | -------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                | 22,100    | 2          | 94.0%        | 1.5%        |
| Code         | CODECOPY                                     | 1,341     | 1          | 5.7%         | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 20        | 7          | 0.1%         | 0.0%        |
| Bitwise      | AND, NOT, OR, SHL                            | 12        | 4          | 0.1%         | 0.0%        |
| Memory       | MSTORE                                       | 12        | 1          | 0.1%         | 0.0%        |
| Control Flow | JUMPI                                        | 10        | 1          | 0.0%         | 0.0%        |
| Arithmetic   | SUB                                          | 3         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                       | 0         | 1          | 0.0%         | 0.0%        |


### NonFungibleCredential_evm - issue_nontransferable

- **Total Gas Used:** 234,542

| Category           | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                                    | 22,100    | 2          | 88.6%        | 9.4%        |
| Events/Logs        | LOG4                                                                                                                                                                                                                             | 2,643     | 1          | 10.6%        | 1.1%        |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 97        | 33         | 0.4%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                                                                                        | 36        | 1          | 0.1%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 15        | 5          | 0.1%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 14        | 3          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                                         | 6         | 2          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                                                    | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                                                | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### NonFungibleCredential_evm - issue_transferable

- **Total Gas Used:** 283,066

| Category           | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                                    | 22,100    | 2          | 88.6%        | 7.8%        |
| Events/Logs        | LOG4                                                                                                                                                                                                                             | 2,643     | 1          | 10.6%        | 0.9%        |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 97        | 33         | 0.4%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                                                                                        | 36        | 1          | 0.1%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 15        | 5          | 0.1%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 14        | 3          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                                         | 6         | 2          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                                                    | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                                                | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### NonFungibleCredential_evm - issue_with_expiry

- **Total Gas Used:** 220,314

| Category           | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                                    | 5,000     | 2          | 63.6%        | 2.3%        |
| Events/Logs        | LOG4                                                                                                                                                                                                                             | 2,643     | 1          | 33.6%        | 1.2%        |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 97        | 33         | 1.2%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                                                                                        | 36        | 1          | 0.5%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 19        | 3          | 0.2%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 15        | 5          | 0.2%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 15        | 5          | 0.2%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 14        | 3          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                                         | 6         | 2          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                                                    | 6         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                                                | 4         | 2          | 0.1%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### NonFungibleCredential_evm - revoke

- **Total Gas Used:** 30,343

| Category           | Opcodes Used                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ---------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                    | 5,000     | 2          | 75.4%        | 16.5%       |
| Events/Logs        | LOG3                                                             | 1,500     | 1          | 22.6%        | 4.9%        |
| Crypto             | KECCAK256                                                        | 42        | 1          | 0.6%         | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1 | 28        | 10         | 0.4%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                            | 19        | 3          | 0.3%         | 0.1%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                           | 15        | 5          | 0.2%         | 0.0%        |
| Comparison         | EQ, ISZERO, LT, SLT                                              | 12        | 4          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                         | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                       | 5         | 2          | 0.1%         | 0.0%        |
| Memory             | MSTORE                                                           | 3         | 1          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                           | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                             | 0         | 1          | 0.0%         | 0.0%        |


### NonFungibleCredential_evm - transfer

- **Total Gas Used:** 159,598

| Category           | Opcodes Used                                                                                                                                                        | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                       | 22,100    | 2          | 91.5%        | 13.8%       |
| Events/Logs        | LOG4                                                                                                                                                                | 1,875     | 1          | 7.8%         | 1.2%        |
| Stack              | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 73        | 25         | 0.3%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                           | 36        | 1          | 0.1%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                               | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                              | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                             | 15        | 5          | 0.1%         | 0.0%        |
| Memory             | MCOPY, MLOAD, MSTORE                                                                                                                                                | 12        | 3          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                            | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                          | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                                                              | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                           | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                                                | 0         | 1          | 0.0%         | 0.0%        |


### NonFungibleCredential_evm - updateMetadata

- **Total Gas Used:** 30,684

| Category           | Opcodes Used                                                                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                         | 7,100     | 2          | 82.3%        | 23.1%       |
| Events/Logs        | LOG2                                                                                  | 1,381     | 1          | 16.0%        | 4.5%        |
| Crypto             | KECCAK256                                                                             | 42        | 1          | 0.5%         | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 37        | 13         | 0.4%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                 | 19        | 3          | 0.2%         | 0.1%        |
| Bitwise            | AND, NOT, SHL, SHR                                                                    | 12        | 4          | 0.1%         | 0.0%        |
| Comparison         | EQ, ISZERO, LT, SLT                                                                   | 12        | 4          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                         | 12        | 2          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                              | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                            | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                             | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                  | 0         | 1          | 0.0%         | 0.0%        |


### SimpleToken_evm - deploy

- **Total Gas Used:** 152,967

| Category     | Opcodes Used                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Code         | CODECOPY                              | 96        | 1          | 69.6%        | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 18        | 6          | 13.0%        | 0.0%        |
| Memory       | MSTORE                                | 12        | 1          | 8.7%         | 0.0%        |
| Control Flow | JUMPI                                 | 10        | 1          | 7.2%         | 0.0%        |
| Ether/Gas    | CALLVALUE                             | 2         | 1          | 1.4%         | 0.0%        |
| Return       | RETURN                                | 0         | 1          | 0.0%         | 0.0%        |


### SimpleToken_evm - mint

- **Total Gas Used:** 68,105

| Category     | Opcodes Used                                                                                      | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                                     | 22,100    | 2          | 92.0%        | 32.4%       |
| Events/Logs  | LOG3                                                                                              | 1,756     | 1          | 7.3%         | 2.6%        |
| Stack        | DUP1, DUP2, DUP3, DUP5, DUP6, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 43        | 15         | 0.2%         | 0.1%        |
| Crypto       | KECCAK256                                                                                         | 42        | 1          | 0.2%         | 0.1%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                             | 19        | 3          | 0.1%         | 0.0%        |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                           | 15        | 5          | 0.1%         | 0.0%        |
| Bitwise      | AND, NOT, SHL, SHR                                                                                | 12        | 4          | 0.0%         | 0.0%        |
| Memory       | MLOAD, MSTORE                                                                                     | 12        | 2          | 0.0%         | 0.0%        |
| Arithmetic   | ADD, SUB                                                                                          | 6         | 2          | 0.0%         | 0.0%        |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                        | 5         | 2          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                                         | 2         | 1          | 0.0%         | 0.0%        |
| Return       | STOP                                                                                              | 0         | 1          | 0.0%         | 0.0%        |


### SimpleToken_evm - transfer

- **Total Gas Used:** 46,257

| Category           | Opcodes Used                                                            | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ----------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                           | 22,100    | 2          | 92.1%        | 47.8%       |
| Events/Logs        | LOG3                                                                    | 1,756     | 1          | 7.3%         | 3.8%        |
| Crypto             | KECCAK256                                                               | 42        | 1          | 0.2%         | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 31        | 11         | 0.1%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                   | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, SHL, SHR                                                      | 12        | 4          | 0.1%         | 0.0%        |
| Comparison         | EQ, ISZERO, LT, SLT                                                     | 12        | 4          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                           | 12        | 2          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                              | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                  | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                               | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                    | 0         | 1          | 0.0%         | 0.0%        |


### Store_evm - delegate

- **Total Gas Used:** 137,452

| Category           | Opcodes Used                                                                                                                                   | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                  | 20,100    | 2          | 89.1%        | 14.6%       |
| Events/Logs        | LOG3                                                                                                                                           | 2,268     | 1          | 10.1%        | 1.7%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 64        | 22         | 0.3%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                      | 42        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                          | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                         | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 15        | 5          | 0.1%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 14        | 3          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, MUL, SUB                                                                                                                                  | 11        | 3          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                  | 9         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                              | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                      | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### Store_evm - delete_

- **Total Gas Used:** 38,316

| Category           | Opcodes Used                                                                                                                                   | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                  | 5,000     | 2          | 70.6%        | 13.0%       |
| Events/Logs        | LOG2                                                                                                                                           | 1,893     | 1          | 26.7%        | 4.9%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 64        | 22         | 0.9%         | 0.2%        |
| Crypto             | KECCAK256                                                                                                                                      | 42        | 1          | 0.6%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                          | 19        | 3          | 0.3%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 15        | 5          | 0.2%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 14        | 3          | 0.2%         | 0.0%        |
| Bitwise            | AND, NOT, SHL, SHR                                                                                                                             | 12        | 4          | 0.2%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                  | 9         | 2          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                       | 6         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                                         | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                      | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### Store_evm - deleteFor

- **Total Gas Used:** 47,889

| Category           | Opcodes Used                                                                                                                                   | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                  | 5,000     | 2          | 70.5%        | 10.4%       |
| Events/Logs        | LOG2                                                                                                                                           | 1,893     | 1          | 26.7%        | 4.0%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 64        | 22         | 0.9%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                      | 42        | 1          | 0.6%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                          | 19        | 3          | 0.3%         | 0.0%        |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                   | 18        | 6          | 0.3%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 15        | 5          | 0.2%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 14        | 3          | 0.2%         | 0.0%        |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                         | 12        | 3          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, MUL, SUB                                                                                                                                  | 11        | 3          | 0.2%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                                         | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                      | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### Store_evm - deploy

- **Total Gas Used:** 1,742,046

| Category     | Opcodes Used                          | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Code         | CODECOPY                              | 1,597     | 1          | 97.4%        | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 18        | 6          | 1.1%         | 0.0%        |
| Memory       | MSTORE                                | 12        | 1          | 0.7%         | 0.0%        |
| Control Flow | JUMPI                                 | 10        | 1          | 0.6%         | 0.0%        |
| Ether/Gas    | CALLVALUE                             | 2         | 1          | 0.1%         | 0.0%        |
| Return       | RETURN                                | 0         | 1          | 0.0%         | 0.0%        |


### Store_evm - revokeDelegation

- **Total Gas Used:** 42,645

| Category           | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                | 3,000     | 2          | 54.9%        | 7.0%        |
| Events/Logs        | LOG3                                                                                                                                                         | 2,268     | 1          | 41.5%        | 5.3%        |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 70        | 24         | 1.3%         | 0.2%        |
| Crypto             | KECCAK256                                                                                                                                                    | 42        | 1          | 0.8%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 19        | 3          | 0.3%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                       | 15        | 5          | 0.3%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 15        | 5          | 0.3%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 14        | 3          | 0.3%         | 0.0%        |
| Arithmetic         | ADD, MUL, SUB                                                                                                                                                | 11        | 3          | 0.2%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                | 9         | 2          | 0.2%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                                         | 0         | 1          | 0.0%         | 0.0%        |


### Store_evm - set

- **Total Gas Used:** 117,087

| Category           | Opcodes Used                                                                                                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Events/Logs        | LOG2                                                                                                                                                                                         | 2,149     | 1          | 84.3%        | 1.8%        |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                | 200       | 2          | 7.8%         | 0.2%        |
| Stack              | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP11, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 82        | 28         | 3.2%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                                                                    | 36        | 1          | 1.4%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                        | 19        | 3          | 0.7%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                       | 15        | 5          | 0.6%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                      | 15        | 5          | 0.6%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                     | 14        | 3          | 0.5%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                                                     | 6         | 2          | 0.2%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                | 6         | 2          | 0.2%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                            | 4         | 2          | 0.2%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                    | 2         | 1          | 0.1%         | 0.0%        |
| Return             | STOP                                                                                                                                                                                         | 0         | 1          | 0.0%         | 0.0%        |


### Store_evm - set_update

- **Total Gas Used:** 32,968

| Category           | Opcodes Used                                                                                                                               | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                              | 3,000     | 2          | 94.0%        | 9.1%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 61        | 21         | 1.9%         | 0.2%        |
| Crypto             | KECCAK256                                                                                                                                  | 42        | 1          | 1.3%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                      | 19        | 3          | 0.6%         | 0.1%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                   | 17        | 3          | 0.5%         | 0.1%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                     | 15        | 5          | 0.5%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                    | 15        | 5          | 0.5%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                              | 9         | 2          | 0.3%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                   | 6         | 2          | 0.2%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                          | 4         | 2          | 0.1%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                  | 2         | 1          | 0.1%         | 0.0%        |


### Store_evm - setFor

- **Total Gas Used:** 129,666

| Category           | Opcodes Used                                                                                                                                                                                       | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Events/Logs        | LOG2                                                                                                                                                                                               | 2,149     | 1          | 83.9%        | 1.7%        |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                      | 200       | 2          | 7.8%         | 0.2%        |
| Stack              | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP11, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 85        | 29         | 3.3%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                                                                          | 36        | 1          | 1.4%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                              | 19        | 3          | 0.7%         | 0.0%        |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                                       | 18        | 6          | 0.7%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                            | 15        | 5          | 0.6%         | 0.0%        |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                           | 14        | 3          | 0.5%         | 0.0%        |
| Arithmetic         | ADD, MUL, SUB                                                                                                                                                                                      | 11        | 3          | 0.4%         | 0.0%        |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                                                                             | 9         | 3          | 0.4%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                  | 4         | 2          | 0.2%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                          | 2         | 1          | 0.1%         | 0.0%        |
| Return             | STOP                                                                                                                                                                                               | 0         | 1          | 0.0%         | 0.0%        |


### TetherToken_evm - approve

- **Total Gas Used:** 48,276

| Category           | Opcodes Used                                                                   | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                  | 22,100    | 2          | 92.1%        | 45.8%       |
| Events/Logs        | LOG3                                                                           | 1,756     | 1          | 7.3%         | 3.6%        |
| Crypto             | KECCAK256                                                                      | 42        | 1          | 0.2%         | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 34        | 12         | 0.1%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                          | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, SHL, SHR                                                             | 12        | 4          | 0.0%         | 0.0%        |
| Comparison         | EQ, ISZERO, LT, SLT                                                            | 12        | 4          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                  | 12        | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                       | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                     | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                         | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                      | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### TetherToken_evm - deploy

- **Total Gas Used:** 1,208,745

| Category           | Opcodes Used                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                | 2,200     | 2          | 66.9%        | 0.2%        |
| Code               | CODECOPY, CODESIZE                                                                                           | 922       | 2          | 28.0%        | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 49        | 17         | 1.5%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                    | 42        | 1          | 1.3%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                        | 19        | 3          | 0.6%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                       | 15        | 5          | 0.5%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                      | 15        | 5          | 0.5%         | 0.0%        |
| Memory             | MCOPY, MLOAD, MSTORE                                                                                         | 15        | 3          | 0.5%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                     | 6         | 2          | 0.2%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                       | 2         | 1          | 0.1%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                    | 2         | 1          | 0.1%         | 0.0%        |
| Return             | RETURN                                                                                                       | 0         | 1          | 0.0%         | 0.0%        |


### TetherToken_evm - transfer

- **Total Gas Used:** 62,454

| Category           | Opcodes Used                                                                               | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                              | 22,100    | 2          | 92.0%        | 35.4%       |
| Events/Logs        | LOG3                                                                                       | 1,756     | 1          | 7.3%         | 2.8%        |
| Crypto             | KECCAK256                                                                                  | 42        | 1          | 0.2%         | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 40        | 14         | 0.2%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                      | 19        | 3          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, DIV, MUL, SUB                                                                         | 16        | 4          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                    | 15        | 5          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, SHL, SHR                                                                         | 12        | 4          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                              | 12        | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                 | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                     | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                  | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                       | 0         | 1          | 0.0%         | 0.0%        |


### TetherToken_evm - transferFrom

- **Total Gas Used:** 50,890

| Category           | Opcodes Used                                                                                                               | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                              | 5,000     | 2          | 72.1%        | 9.8%        |
| Events/Logs        | LOG3                                                                                                                       | 1,756     | 1          | 25.3%        | 3.5%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 55        | 19         | 0.8%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                  | 42        | 1          | 0.6%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                      | 19        | 3          | 0.3%         | 0.0%        |
| Arithmetic         | ADD, DIV, MUL, SUB                                                                                                         | 16        | 4          | 0.2%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                    | 15        | 5          | 0.2%         | 0.0%        |
| Bitwise            | AND, NOT, SHL, SHR                                                                                                         | 12        | 4          | 0.2%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                              | 12        | 2          | 0.2%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                 | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                     | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                  | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                       | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - buyTicket

- **Total Gas Used:** 220,332

| Category           | Opcodes Used                                                                                                                                                    | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Calls              | CALL                                                                                                                                                            | 189,682   | 1          | 97.5%        | 86.1%       |
| Events/Logs        | LOG3, LOG4                                                                                                                                                      | 4,399     | 2          | 2.3%         | 2.0%        |
| Storage            | SLOAD, SSTORE                                                                                                                                                   | 200       | 2          | 0.1%         | 0.1%        |
| Code               | EXTCODESIZE                                                                                                                                                     | 100       | 1          | 0.1%         | 0.0%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH11, PUSH12, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 70        | 24         | 0.0%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                       | 42        | 1          | 0.0%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                           | 19        | 3          | 0.0%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                          | 15        | 5          | 0.0%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                         | 15        | 5          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                   | 9         | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                        | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | ADDRESS, CALLER, TIMESTAMP                                                                                                                                      | 6         | 3          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                      | 5         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE, GAS                                                                                                                                                  | 4         | 2          | 0.0%         | 0.0%        |
| Return Data        | RETURNDATASIZE                                                                                                                                                  | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN, STOP                                                                                                                                                    | 0         | 2          | 0.0%         | 0.0%        |


### W3S_evm - checkIn

- **Total Gas Used:** 71,612

| Category           | Opcodes Used                                                                                                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Calls              | CALL                                                                                                                                             | 22,679    | 1          | 77.0%        | 31.7%       |
| Events/Logs        | LOG3, LOG4                                                                                                                                       | 4,399     | 2          | 14.9%        | 6.1%        |
| Storage            | SLOAD, SSTORE                                                                                                                                    | 2,200     | 2          | 7.5%         | 3.1%        |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 64        | 22         | 0.2%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                        | 42        | 1          | 0.1%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                            | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                           | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                          | 15        | 5          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                         | 6         | 2          | 0.0%         | 0.0%        |
| Code               | CODECOPY                                                                                                                                         | 6         | 1          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                    | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                       | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE, GAS                                                                                                                                   | 4         | 2          | 0.0%         | 0.0%        |
| Return Data        | RETURNDATASIZE                                                                                                                                   | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                           | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - configurePaymentToken

- **Total Gas Used:** 98,869

| Category           | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                | 22,100    | 2          | 92.4%        | 22.4%       |
| Events/Logs        | LOG2                                                                                                                                                         | 1,637     | 1          | 6.8%         | 1.7%        |
| Stack              | DUP1, DUP11, DUP12, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 70        | 24         | 0.3%         | 0.1%        |
| Crypto             | KECCAK256                                                                                                                                                    | 36        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                       | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 15        | 5          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                | 9         | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                     | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                   | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                                                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                                                                                       | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - deploy

- **Total Gas Used:** 2,636,207

| Category           | Opcodes Used                                                                                        | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | --------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                                       | 20,100    | 2          | 82.0%        | 0.8%        |
| Code               | CODECOPY                                                                                            | 2,382     | 1          | 9.7%         | 0.1%        |
| Events/Logs        | LOG4                                                                                                | 1,875     | 1          | 7.7%         | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, SWAP1, SWAP2, SWAP3, SWAP4 | 43        | 15         | 0.2%         | 0.0%        |
| Crypto             | KECCAK256                                                                                           | 42        | 1          | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                               | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                              | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT                                                                                  | 12        | 4          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                            | 6         | 2          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                       | 6         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                              | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                           | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                              | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - grantVolunteerRole

- **Total Gas Used:** 48,223

| Category           | Opcodes Used                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                             | 20,100    | 2          | 90.9%        | 41.7%       |
| Events/Logs        | LOG4                                                                      | 1,875     | 1          | 8.5%         | 3.9%        |
| Crypto             | KECCAK256                                                                 | 42        | 1          | 0.2%         | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 32        | 11         | 0.1%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                     | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                    | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, ISZERO, LT, SLT                                                       | 12        | 4          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                  | 6         | 2          | 0.0%         | 0.0%        |
| Code               | CODECOPY                                                                  | 6         | 1          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                             | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                 | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                      | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - pauseSales

- **Total Gas Used:** 47,282

| Category           | Opcodes Used                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                | 22,100    | 2          | 95.1%        | 46.7%       |
| Events/Logs        | LOG1                                                         | 1,006     | 1          | 4.3%         | 2.1%        |
| Crypto             | KECCAK256                                                    | 42        | 1          | 0.2%         | 0.1%        |
| Stack              | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1 | 26        | 9          | 0.1%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                        | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHR                                            | 12        | 4          | 0.1%         | 0.0%        |
| Comparison         | EQ, ISZERO, LT, SLT                                          | 12        | 4          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                | 12        | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                   | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                            | 4         | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD                                                          | 3         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                         | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - redeemTicketStaff

- **Total Gas Used:** 203,140

| Category           | Opcodes Used                                                                                                                                                     | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Events/Logs        | LOG3, LOG4                                                                                                                                                       | 3,887     | 2          | 88.9%        | 1.9%        |
| Storage            | SLOAD, SSTORE                                                                                                                                                    | 200       | 2          | 4.6%         | 0.1%        |
| Code               | EXTCODESIZE                                                                                                                                                      | 100       | 1          | 2.3%         | 0.0%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH11, PUSH12, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 70        | 24         | 1.6%         | 0.0%        |
| Crypto             | KECCAK256                                                                                                                                                        | 42        | 1          | 1.0%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                            | 19        | 3          | 0.4%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                           | 15        | 5          | 0.3%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                          | 15        | 5          | 0.3%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                                                                                                    | 9         | 2          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                                                                                         | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                       | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                | 4         | 2          | 0.1%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                                                                                        | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                                                                                             | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - revokeVolunteerRole

- **Total Gas Used:** 26,848

| Category           | Opcodes Used                                                              | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                             | 3,000     | 2          | 59.8%        | 11.2%       |
| Events/Logs        | LOG4                                                                      | 1,875     | 1          | 37.4%        | 7.0%        |
| Crypto             | KECCAK256                                                                 | 42        | 1          | 0.8%         | 0.2%        |
| Stack              | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 32        | 11         | 0.6%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                     | 19        | 3          | 0.4%         | 0.1%        |
| Bitwise            | AND, NOT, SHL, SHR                                                        | 12        | 4          | 0.2%         | 0.0%        |
| Comparison         | EQ, ISZERO, LT, SLT                                                       | 12        | 4          | 0.2%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                  | 6         | 2          | 0.1%         | 0.0%        |
| Code               | CODECOPY                                                                  | 6         | 1          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                             | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER                                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                 | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                      | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - setMerkleRoot

- **Total Gas Used:** 31,384

| Category           | Opcodes Used                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                        | 7,100     | 2          | 79.9%        | 22.6%       |
| Events/Logs        | LOG2                                                                                 | 1,637     | 1          | 18.4%        | 5.2%        |
| Crypto             | KECCAK256                                                                            | 42        | 1          | 0.5%         | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 37        | 13         | 0.4%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                | 19        | 3          | 0.2%         | 0.1%        |
| Comparison         | EQ, ISZERO, LT, SLT                                                                  | 12        | 4          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, SHR                                                                        | 9         | 3          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                        | 9         | 2          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                             | 6         | 2          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                           | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                                    | 4         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                            | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                                 | 0         | 1          | 0.0%         | 0.0%        |


### W3S_evm - unpauseSales

- **Total Gas Used:** 25,580

| Category           | Opcodes Used                                                      | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ----------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                     | 5,000     | 2          | 81.4%        | 19.5%       |
| Events/Logs        | LOG1                                                              | 1,006     | 1          | 16.4%        | 3.9%        |
| Crypto             | KECCAK256                                                         | 42        | 1          | 0.7%         | 0.2%        |
| Stack              | DUP1, DUP2, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1 | 28        | 10         | 0.5%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                             | 19        | 3          | 0.3%         | 0.1%        |
| Comparison         | EQ, ISZERO, LT, SLT                                               | 12        | 4          | 0.2%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                     | 12        | 2          | 0.2%         | 0.0%        |
| Bitwise            | AND, NOT, SHR                                                     | 9         | 3          | 0.1%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                        | 5         | 2          | 0.1%         | 0.0%        |
| Context/Blockchain | CALLER, TIMESTAMP                                                 | 4         | 2          | 0.1%         | 0.0%        |
| Arithmetic         | ADD                                                               | 3         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                         | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                            | 0         | 1          | 0.0%         | 0.0%        |


### WETH9_evm - deploy

- **Total Gas Used:** 487,741

| Category     | Opcodes Used                                                                         | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage      | SLOAD, SSTORE                                                                        | 22,100    | 2          | 98.1%        | 4.5%        |
| Code         | CODECOPY                                                                             | 330       | 1          | 1.5%         | 0.1%        |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 37        | 13         | 0.2%         | 0.0%        |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                               | 15        | 5          | 0.1%         | 0.0%        |
| Memory       | MLOAD, MSTORE                                                                        | 15        | 2          | 0.1%         | 0.0%        |
| Comparison   | EQ, GT, ISZERO, LT                                                                   | 12        | 4          | 0.1%         | 0.0%        |
| Arithmetic   | ADD                                                                                  | 3         | 1          | 0.0%         | 0.0%        |
| Ether/Gas    | CALLVALUE                                                                            | 2         | 1          | 0.0%         | 0.0%        |
| Return       | RETURN                                                                               | 0         | 1          | 0.0%         | 0.0%        |


### WETH9_evm - deposit

- **Total Gas Used:** 44,978

| Category           | Opcodes Used                                                 | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------ | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                | 22,100    | 2          | 93.6%        | 49.1%       |
| Events/Logs        | LOG2                                                         | 1,381     | 1          | 5.8%         | 3.1%        |
| Crypto             | KECCAK256                                                    | 42        | 1          | 0.2%         | 0.1%        |
| Stack              | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 26        | 9          | 0.1%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                        | 19        | 3          | 0.1%         | 0.0%        |
| Comparison         | EQ, ISZERO, LT, SLT                                          | 12        | 4          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                | 12        | 2          | 0.1%         | 0.0%        |
| Bitwise            | NOT, SHR                                                     | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                   | 5         | 2          | 0.0%         | 0.0%        |
| Arithmetic         | ADD                                                          | 3         | 1          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                       | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                    | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                         | 0         | 1          | 0.0%         | 0.0%        |


### WETH9_evm - transfer

- **Total Gas Used:** 51,313

| Category           | Opcodes Used                                                                                | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                               | 22,100    | 2          | 92.1%        | 43.1%       |
| Events/Logs        | LOG3                                                                                        | 1,756     | 1          | 7.3%         | 3.4%        |
| Crypto             | KECCAK256                                                                                   | 42        | 1          | 0.2%         | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 41        | 14         | 0.2%         | 0.1%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                       | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, SHL, SHR                                                                          | 12        | 4          | 0.0%         | 0.0%        |
| Comparison         | EQ, ISZERO, LT, SLT                                                                         | 12        | 4          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                    | 6         | 2          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                               | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                  | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                                                      | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                   | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                      | 0         | 1          | 0.0%         | 0.0%        |


### WETH9_evm - withdraw

- **Total Gas Used:** 34,953

| Category           | Opcodes Used                                                        | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Calls              | CALL                                                                | 9,100     | 1          | 66.9%        | 26.0%       |
| Storage            | SLOAD, SSTORE                                                       | 3,000     | 2          | 22.0%        | 8.6%        |
| Events/Logs        | LOG2                                                                | 1,381     | 1          | 10.1%        | 4.0%        |
| Crypto             | KECCAK256                                                           | 42        | 1          | 0.3%         | 0.1%        |
| Stack              | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3, SWAP4 | 29        | 10         | 0.2%         | 0.1%        |
| Comparison         | EQ, ISZERO, LT, SLT                                                 | 12        | 4          | 0.1%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                       | 12        | 2          | 0.1%         | 0.0%        |
| Control Flow       | JUMPDEST, JUMPI                                                     | 11        | 2          | 0.1%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                            | 6         | 2          | 0.0%         | 0.0%        |
| Bitwise            | NOT, SHR                                                            | 6         | 2          | 0.0%         | 0.0%        |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                          | 5         | 2          | 0.0%         | 0.0%        |
| Context/Blockchain | CALLER                                                              | 2         | 1          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                           | 2         | 1          | 0.0%         | 0.0%        |
| Return             | STOP                                                                | 0         | 1          | 0.0%         | 0.0%        |


### XENCrypto_evm - deploy

- **Total Gas Used:** 2,221,205

| Category           | Opcodes Used                                                                                | Total Gas | Call Count | % of opcodes | % of tx Gas |
| ------------------ | ------------------------------------------------------------------------------------------- | --------- | ---------- | ------------ | ----------- |
| Storage            | SLOAD, SSTORE                                                                               | 24,200    | 2          | 92.0%        | 1.1%        |
| Code               | CODECOPY                                                                                    | 2,011     | 1          | 7.6%         | 0.1%        |
| Stack              | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH10, PUSH2, PUSH3, SWAP1, SWAP2, SWAP3, SWAP4 | 40        | 14         | 0.2%         | 0.0%        |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                       | 19        | 3          | 0.1%         | 0.0%        |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                      | 15        | 5          | 0.1%         | 0.0%        |
| Comparison         | EQ, GT, ISZERO, LT                                                                          | 12        | 4          | 0.0%         | 0.0%        |
| Arithmetic         | ADD, SUB                                                                                    | 6         | 2          | 0.0%         | 0.0%        |
| Memory             | MLOAD, MSTORE                                                                               | 6         | 2          | 0.0%         | 0.0%        |
| Ether/Gas          | CALLVALUE                                                                                   | 2         | 1          | 0.0%         | 0.0%        |
| Context/Blockchain | TIMESTAMP                                                                                   | 2         | 1          | 0.0%         | 0.0%        |
| Return             | RETURN                                                                                      | 0         | 1          | 0.0%         | 0.0%        |


## Chain: eth-rpc

### CoinTool_App_evm - deploy

- **Total Gas Used:** 22,235,426
- **Base Call Weight:** ref_time=1,568,628,607, proof_size=6,934
- **Total Weight:** ref_time=1,812,498,168, proof_size=27,480
- **Weight Consumed:** ref_time=243,869,561 (13.5% of total), proof_size=20,546

| Category           | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                | 57,596    | 2          | 239,765,013 | 20,546     | 98.3%         | 100.0%          |
| Code               | CODECOPY                                     | 23        | 1          | 1,129,668   | 0          | 0.5%          | 0.0%            |
| Context/Blockchain | ADDRESS, ORIGIN                              | 15        | 2          | 744,000     | 0          | 0.3%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 6         | 7          | 305,600     | 0          | 0.1%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL                            | 4         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Arithmetic         | ADD, SUB                                     | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### CoinTool_App_pvm - deploy

- **Total Gas Used:** 71,174,858
- **Base Call Weight:** ref_time=1,980,057,129, proof_size=6,934
- **Total Weight:** ref_time=2,352,084,109, proof_size=27,448
- **Weight Consumed:** ref_time=372,026,980 (15.8% of total), proof_size=20,514

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,595    | 2          | 239,714,805 | 20,514     | 64.4%         | 100.0%          |
| Immutables         | set_immutable_data                        | 2,049     | 1          | 102,480,992 | 0          | 27.5%         | 0.0%            |
| Calldata           | call_data_copy, call_data_size            | 17        | 2          | 826,576     | 0          | 0.2%          | 0.0%            |
| Context/Blockchain | address, origin                           | 15        | 2          | 744,000     | 0          | 0.2%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |


### CoinTool_App_evm - t

- **Total Gas Used:** 361,206,150
- **Base Call Weight:** ref_time=917,513,597, proof_size=9,506
- **Total Weight:** ref_time=191,611,673,313, proof_size=9,138,209
- **Weight Consumed:** ref_time=190,694,159,716 (99.5% of total), proof_size=9,128,703

| Category           | Opcodes Used                                                                                                                                                                               | Total Gas | Call Count | ref time        | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | --------------- | ---------- | ------------- | --------------- |
| Creation           | CREATE2                                                                                                                                                                                    | 0         | 1          | 186,637,653,556 | 8,926,199  | 97.9%         | 97.8%           |
| Return             | RETURN, STOP                                                                                                                                                                               | 9         | 2          | 2,379,516,089   | 164,636    | 1.2%          | 1.8%            |
| Calls              | CALL, DELEGATECALL                                                                                                                                                                         | 0         | 2          | 262,365,662     | 30,867     | 0.1%          | 0.3%            |
| Storage            | SLOAD, SSTORE                                                                                                                                                                              | 57,595    | 2          | 239,765,013     | 20,546     | 0.1%          | 0.2%            |
| Events/Logs        | LOG2                                                                                                                                                                                       | 444       | 1          | 22,179,532      | 0          | 0.0%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                  | 302       | 1          | 15,109,884      | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE, GAS                                                                                                                                                                             | 44        | 2          | 2,248,000       | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | ADDRESS, CALLER, ORIGIN, TIMESTAMP                                                                                                                                                         | 29        | 4          | 1,494,000       | 0          | 0.0%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH12, PUSH2, PUSH20, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 21        | 28         | 1,252,960       | 0          | 0.0%          | 0.0%            |
| Code               | CODECOPY, CODESIZE                                                                                                                                                                         | 12        | 2          | 578,836         | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                   | 11        | 3          | 565,603         | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                      | 6         | 3          | 290,320         | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, DIV, MUL, SUB                                                                                                                                                                         | 5         | 4          | 244,480         | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                     | 5         | 5          | 229,200         | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                    | 5         | 5          | 229,200         | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                              | 2         | 2          | 91,680          | 0          | 0.0%          | 0.0%            |
| Return Data        | RETURNDATASIZE                                                                                                                                                                             | 1         | 1          | 30,560          | 0          | 0.0%          | 0.0%            |


### CoinTool_App_pvm - t

- **Total Gas Used:** 542,999,370
- **Base Call Weight:** ref_time=917,513,597, proof_size=9,506
- **Total Weight:** ref_time=119,832,692,510, proof_size=10,828,957
- **Weight Consumed:** ref_time=118,915,178,913 (99.2% of total), proof_size=10,819,451

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time        | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | --------------- | ---------- | ------------- | --------------- |
| Creation           | instantiate                                    | 0         | 1          | 116,289,884,100 | 10,554,518 | 97.8%         | 97.6%           |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 57,594    | 2          | 239,714,805     | 20,514     | 0.2%          | 0.2%            |
| Calls              | call_evm, delegate_call_evm                    | 2,241     | 2          | 225,777,084     | 8,700      | 0.2%          | 0.1%            |
| Immutables         | get_immutable_data, set_immutable_data         | 2,686     | 2          | 134,250,877     | 3,801      | 0.1%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 302       | 1          | 15,109,884      | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | ref_time_left, value_transferred               | 44        | 2          | 2,248,000       | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | address, caller, now, origin                   | 30        | 4          | 1,494,000       | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,169,689       | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 529,465         | 0          | 0.0%          | 0.0%            |
| Return Data        | return_data_size                               | 7         | 1          | 319,000         | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - configurePublicAccess

- **Total Gas Used:** 535,917
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=1,460,060,086, proof_size=60,046
- **Weight Consumed:** ref_time=546,133,646 (37.4% of total), proof_size=51,413

| Category           | Opcodes Used                                                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                        | 57,595    | 2          | 239,765,013 | 20,546     | 43.9%         | 40.0%           |
| Crypto             | KECCAK256                                                                                                            | 305       | 1          | 15,219,717  | 0          | 2.8%          | 0.0%            |
| Events/Logs        | LOG2                                                                                                                 | 275       | 1          | 13,751,564  | 0          | 2.5%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 15        | 18         | 794,560     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                               | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                            | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                | 6         | 3          | 290,320     | 0          | 0.1%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                               | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                              | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                             | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                        | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                           | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                 | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - configurePublicAccess

- **Total Gas Used:** 540,989
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=1,713,641,223, proof_size=149,890
- **Weight Consumed:** ref_time=799,714,783 (46.7% of total), proof_size=141,257

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 30.0%         | 14.5%           |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 1.9%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 1.7%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - createDocument

- **Total Gas Used:** 1,518,968
- **Base Call Weight:** ref_time=916,712,342, proof_size=9,311
- **Total Weight:** ref_time=4,252,606,438, proof_size=286,762
- **Weight Consumed:** ref_time=3,335,894,096 (78.4% of total), proof_size=277,451

| Category           | Opcodes Used                                                                                                                                                                                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                                                                | 57,595    | 2          | 239,765,013 | 20,546     | 7.2%          | 7.4%            |
| Events/Logs        | LOG2                                                                                                                                                                                                                                                         | 1,118     | 1          | 55,891,404  | 0          | 1.7%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                                                                                    | 302       | 1          | 15,106,341  | 0          | 0.5%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP14, SWAP15, SWAP16, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 32        | 37         | 1,665,520   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                                                                            | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                                                     | 12        | 3          | 571,693     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                                                                    | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                                        | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                                                       | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                                                      | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                                                                     | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                                                                                | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                                                                                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - createDocument

- **Total Gas Used:** 1,535,936
- **Base Call Weight:** ref_time=916,712,342, proof_size=9,311
- **Total Weight:** ref_time=5,100,985,236, proof_size=396,961
- **Weight Consumed:** ref_time=4,184,272,894 (82.0% of total), proof_size=387,650

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 57,594    | 2          | 239,714,805 | 20,514     | 5.7%          | 5.3%            |
| Events/Logs        | deposit_event                                  | 1,117     | 1          | 55,891,404  | 0          | 1.3%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 23        | 3          | 1,173,079   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 16        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - createDocument2

- **Total Gas Used:** 1,466,169
- **Base Call Weight:** ref_time=916,712,342, proof_size=9,311
- **Total Weight:** ref_time=4,252,630,950, proof_size=286,794
- **Weight Consumed:** ref_time=3,335,918,608 (78.4% of total), proof_size=277,483

| Category           | Opcodes Used                                                                                                                                                                                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                                                                | 57,595    | 2          | 239,765,013 | 20,546     | 7.2%          | 7.4%            |
| Events/Logs        | LOG2                                                                                                                                                                                                                                                         | 1,118     | 1          | 55,891,404  | 0          | 1.7%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                                                                                    | 302       | 1          | 15,106,341  | 0          | 0.5%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP14, SWAP15, SWAP16, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 33        | 37         | 1,665,520   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                                                                            | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                                                     | 12        | 3          | 571,693     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                                                                    | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                                        | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                                                       | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                                                      | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                                                                     | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                                                                                | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                                                                                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - createDocument2

- **Total Gas Used:** 1,483,137
- **Base Call Weight:** ref_time=916,712,342, proof_size=9,311
- **Total Weight:** ref_time=5,101,059,956, proof_size=397,025
- **Weight Consumed:** ref_time=4,184,347,614 (82.0% of total), proof_size=387,714

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 57,594    | 2          | 239,714,805 | 20,514     | 5.7%          | 5.3%            |
| Events/Logs        | deposit_event                                  | 1,118     | 1          | 55,891,404  | 0          | 1.3%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 23        | 3          | 1,173,079   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 16        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - deploy

- **Total Gas Used:** 26,368,266
- **Base Call Weight:** ref_time=1,667,177,109, proof_size=6,934
- **Total Weight:** ref_time=1,670,511,411, proof_size=6,934
- **Weight Consumed:** ref_time=3,334,302 (0.2% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 48        | 1          | 2,404,102 | 0          | 72.1%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 319,000   | 0          | 9.6%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 6         | 6          | 275,040   | 0          | 8.2%          | 0.0%            |
| Control Flow | JUMPI                                 | 3         | 1          | 152,800   | 0          | 4.6%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 45,840    | 0          | 1.4%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - deploy

- **Total Gas Used:** 192,064,383
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

| Category           | Opcodes Used                                                                                                                                                                                            | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                           | 57,596    | 2          | 239,765,013 | 20,546     | 7.7%          | 7.7%            |
| Events/Logs        | LOG3                                                                                                                                                                                                    | 612       | 1          | 30,607,500  | 0          | 1.0%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                               | 302       | 1          | 15,106,341  | 0          | 0.5%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 28        | 30         | 1,344,640   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                       | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                               | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                   | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                  | 3         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                 | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                           | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                              | 1         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                                                                    | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - grantAccessWithShare

- **Total Gas Used:** 1,302,942
- **Base Call Weight:** ref_time=916,317,878, proof_size=9,215
- **Total Weight:** ref_time=4,571,281,723, proof_size=366,286
- **Weight Consumed:** ref_time=3,654,963,845 (80.0% of total), proof_size=357,071

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 6.6%          | 5.7%            |
| Events/Logs        | deposit_event                             | 612       | 1          | 30,607,500  | 0          | 0.8%          | 0.0%            |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - registerKeys

- **Total Gas Used:** 643,747
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=1,571,558,950, proof_size=49,693
- **Weight Consumed:** ref_time=657,632,510 (41.8% of total), proof_size=41,060

| Category           | Opcodes Used                                                                                                                                           | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                          | 57,595    | 2          | 239,765,013 | 20,546     | 36.5%         | 50.0%           |
| Events/Logs        | LOG2                                                                                                                                                   | 781       | 1          | 39,035,468  | 0          | 5.9%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                              | 304       | 1          | 15,219,717  | 0          | 2.3%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP8 | 23        | 23         | 1,023,760   | 0          | 0.2%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                      | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                              | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                  | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                 | 3         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                               | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                          | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                             | 1         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - registerKeys

- **Total Gas Used:** 653,952
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=2,081,776,278, proof_size=160,180
- **Weight Consumed:** ref_time=1,167,849,838 (56.1% of total), proof_size=151,547

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 20.5%         | 13.5%           |
| Events/Logs        | deposit_event                             | 781       | 1          | 39,035,468  | 0          | 3.3%          | 0.0%            |
| Crypto             | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 1.3%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - revokeAccess

- **Total Gas Used:** 290,097
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=5,009,034,144, proof_size=409,872
- **Weight Consumed:** ref_time=4,095,107,704 (81.8% of total), proof_size=401,239

| Category           | Opcodes Used                                                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                        | 4,796     | 2          | 239,789,525 | 20,578     | 5.9%          | 5.1%            |
| Crypto             | KECCAK256                                                                                                            | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Events/Logs        | LOG3                                                                                                                 | 275       | 1          | 13,751,564  | 0          | 0.3%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 17        | 18         | 794,560     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                               | 9         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                            | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                               | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                              | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                             | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                        | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                           | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                 | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - revokeAccess

- **Total Gas Used:** 302,198
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=5,614,067,767, proof_size=500,362
- **Weight Consumed:** ref_time=4,700,141,327 (83.7% of total), proof_size=491,729

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,797     | 2          | 239,789,525 | 20,578     | 5.1%          | 4.2%            |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 0.3%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 0.3%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - transferOwnership

- **Total Gas Used:** 698,288
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=4,298,612,901, proof_size=337,753
- **Weight Consumed:** ref_time=3,384,686,461 (78.7% of total), proof_size=329,120

| Category           | Opcodes Used                                                                                                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                   | 57,596    | 2          | 239,765,013 | 20,546     | 7.1%          | 6.2%            |
| Crypto             | KECCAK256                                                                                                                                       | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Events/Logs        | LOG4                                                                                                                                            | 106       | 1          | 5,323,596   | 0          | 0.2%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP7 | 19        | 22         | 977,920     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                               | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                       | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                           | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                          | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                         | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                        | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                   | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                      | 1         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - transferOwnership

- **Total Gas Used:** 710,280
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=4,898,180,804, proof_size=437,855
- **Weight Consumed:** ref_time=3,984,254,364 (81.3% of total), proof_size=429,222

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 6.0%          | 4.8%            |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Events/Logs        | deposit_event                             | 106       | 1          | 5,323,596   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_evm - updateDocument

- **Total Gas Used:** 944,455
- **Base Call Weight:** ref_time=916,712,342, proof_size=9,311
- **Total Weight:** ref_time=1,926,931,145, proof_size=91,623
- **Weight Consumed:** ref_time=1,010,218,803 (52.4% of total), proof_size=82,312

| Category           | Opcodes Used                                                                                                                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                       | 4,796     | 2          | 239,789,525 | 20,578     | 23.7%         | 25.0%           |
| Events/Logs        | LOG2                                                                                                                                                                | 781       | 1          | 39,035,468  | 0          | 3.9%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                           | 304       | 1          | 15,219,717  | 0          | 1.5%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 22        | 25         | 1,115,440   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                   | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                            | 12        | 3          | 571,693     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                           | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                               | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                              | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                             | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                            | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                       | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DocumentAccessManagement_pvm - updateDocument

- **Total Gas Used:** 951,464
- **Base Call Weight:** ref_time=916,712,342, proof_size=9,311
- **Total Weight:** ref_time=2,277,407,189, proof_size=181,499
- **Weight Consumed:** ref_time=1,360,694,847 (59.7% of total), proof_size=172,188

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,796     | 2          | 239,789,525 | 20,578     | 17.6%         | 12.0%           |
| Events/Logs        | deposit_event                                  | 781       | 1          | 39,035,468  | 0          | 2.9%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 304       | 1          | 15,219,717  | 0          | 1.1%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 23        | 3          | 1,173,079   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - createSubdomain

- **Total Gas Used:** 1,409,456
- **Base Call Weight:** ref_time=915,923,414, proof_size=9,119
- **Total Weight:** ref_time=5,176,967,700, proof_size=286,570
- **Weight Consumed:** ref_time=4,261,044,286 (82.3% of total), proof_size=277,451

| Category           | Opcodes Used                                                                                                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                                         | 57,595    | 2          | 239,765,013 | 20,546     | 5.6%          | 7.4%            |
| Events/Logs        | LOG4                                                                                                                                                                                                                                  | 612       | 1          | 30,607,500  | 0          | 0.7%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                                                             | 304       | 1          | 15,219,717  | 0          | 0.4%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP13, DUP14, DUP16, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 30        | 34         | 1,528,000   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                                                     | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                              | 12        | 3          | 567,024     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                                             | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                                 | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                                                                          | 6         | 6          | 275,040     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                               | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                                                                                                                | 3         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                                              | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - createSubdomain

- **Total Gas Used:** 1,538,127
- **Base Call Weight:** ref_time=915,923,414, proof_size=9,119
- **Total Weight:** ref_time=11,610,540,507, proof_size=382,497
- **Weight Consumed:** ref_time=10,694,617,093 (92.1% of total), proof_size=373,378

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 57,594    | 2          | 239,714,805 | 20,514     | 2.2%          | 5.5%            |
| Events/Logs        | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 0.3%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 304       | 1          | 15,219,717  | 0          | 0.1%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,170,480   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - deploy

- **Total Gas Used:** 23,706,332
- **Base Call Weight:** ref_time=1,646,729,917, proof_size=6,934
- **Total Weight:** ref_time=1,649,801,943, proof_size=6,934
- **Weight Consumed:** ref_time=3,072,026 (0.2% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 43        | 1          | 2,141,826 | 0          | 69.7%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 319,000   | 0          | 10.4%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 6         | 6          | 275,040   | 0          | 9.0%          | 0.0%            |
| Control Flow | JUMPI                                 | 3         | 1          | 152,800   | 0          | 5.0%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 45,840    | 0          | 1.5%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - deploy

- **Total Gas Used:** 162,327,835
- **Base Call Weight:** ref_time=2,711,424,067, proof_size=6,934
- **Total Weight:** ref_time=2,721,918,604, proof_size=6,934
- **Weight Consumed:** ref_time=10,494,537 (0.4% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 16        | 2          | 826,576  | 0          | 7.9%          | 0.0%            |
| Return    | seal_return                    | 10        | 1          | 529,465  | 0          | 5.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 319,000  | 0          | 3.0%          | 0.0%            |


### DotNS_evm - register

- **Total Gas Used:** 1,134,511
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=4,429,752,779, proof_size=255,281
- **Weight Consumed:** ref_time=3,515,431,875 (79.4% of total), proof_size=246,552

| Category           | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                             | 57,596    | 2          | 239,765,013 | 20,546     | 6.8%          | 8.3%            |
| Events/Logs        | LOG3                                                                                                                                                                                      | 612       | 1          | 30,607,500  | 0          | 0.9%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                 | 305       | 1          | 15,219,717  | 0          | 0.4%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 26        | 28         | 1,252,960   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                         | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 11        | 3          | 568,242     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                 | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 6         | 6          | 275,040     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Memory             | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 5         | 4          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                  | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                    | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - register

- **Total Gas Used:** 1,193,459
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=7,377,157,268, proof_size=351,273
- **Weight Consumed:** ref_time=6,462,836,364 (87.6% of total), proof_size=342,544

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 57,594    | 2          | 239,714,805 | 20,514     | 3.7%          | 6.0%            |
| Events/Logs        | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 0.5%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 305       | 1          | 15,219,717  | 0          | 0.2%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,171,158   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - register_with_duration

- **Total Gas Used:** 1,134,226
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=4,415,499,883, proof_size=255,313
- **Weight Consumed:** ref_time=3,501,178,979 (79.3% of total), proof_size=246,584

| Category           | Opcodes Used                                                                                                                                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                             | 57,595    | 2          | 239,765,013 | 20,546     | 6.8%          | 8.3%            |
| Events/Logs        | LOG3                                                                                                                                                                                      | 612       | 1          | 30,607,500  | 0          | 0.9%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                 | 305       | 1          | 15,219,717  | 0          | 0.4%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 25        | 28         | 1,252,960   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                         | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                  | 11        | 3          | 568,039     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                 | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                     | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                              | 6         | 6          | 275,040     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                   | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Memory             | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                                             | 5         | 4          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                  | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                    | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - register_with_duration

- **Total Gas Used:** 1,191,168
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=7,262,563,546, proof_size=351,175
- **Weight Consumed:** ref_time=6,348,242,642 (87.4% of total), proof_size=342,446

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 57,594    | 2          | 239,714,805 | 20,514     | 3.8%          | 6.0%            |
| Events/Logs        | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 0.5%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 305       | 1          | 15,219,717  | 0          | 0.2%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,171,045   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - release

- **Total Gas Used:** 15,704
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=4,489,375,529, proof_size=276,115
- **Weight Consumed:** ref_time=3,575,449,089 (79.6% of total), proof_size=267,482

| Category           | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                         | 4,795     | 2          | 239,771,541 | 20,578     | 6.7%          | 7.7%            |
| Events/Logs        | LOG2                                                                                                                                                  | 612       | 1          | 30,607,500  | 0          | 0.9%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                             | 305       | 1          | 15,219,717  | 0          | 0.4%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 21        | 23         | 1,023,760   | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 11        | 3          | 569,460     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                                                | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                             | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 5         | 6          | 275,040     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 3         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                                | 3         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                              | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - release

- **Total Gas Used:** 57,283
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=6,568,326,769, proof_size=352,657
- **Weight Consumed:** ref_time=5,654,400,329 (86.1% of total), proof_size=344,024

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,839     | 2          | 241,944,269 | 20,675     | 4.3%          | 6.0%            |
| Events/Logs        | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 0.5%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 304       | 1          | 15,219,717  | 0          | 0.3%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,171,836   | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - renew

- **Total Gas Used:** 550,466
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=1,627,479,079, proof_size=49,885
- **Weight Consumed:** ref_time=713,158,175 (43.8% of total), proof_size=41,156

| Category           | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                         | 4,797     | 2          | 239,789,525 | 20,578     | 33.6%         | 50.0%           |
| Events/Logs        | LOG2                                                                                                                                                  | 780       | 1          | 39,035,468  | 0          | 5.5%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                             | 304       | 1          | 15,219,717  | 0          | 2.1%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 23        | 23         | 1,023,760   | 0          | 0.1%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 11        | 3          | 569,054     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | TIMESTAMP                                                                                                                                             | 7         | 1          | 347,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                             | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 6         | 6          | 275,040     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                                | 3         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                              | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - renew

- **Total Gas Used:** 584,235
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=3,315,953,543, proof_size=125,328
- **Weight Consumed:** ref_time=2,401,632,639 (72.4% of total), proof_size=116,599

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,797     | 2          | 239,789,525 | 20,578     | 10.0%         | 17.6%           |
| Events/Logs        | deposit_event                                  | 781       | 1          | 39,035,468  | 0          | 1.6%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 304       | 1          | 15,219,717  | 0          | 0.6%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,171,610   | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | now                                            | 7         | 1          | 347,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setAddress

- **Total Gas Used:** 551,849
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=1,696,643,417, proof_size=60,174
- **Weight Consumed:** ref_time=782,322,513 (46.1% of total), proof_size=51,445

| Category           | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                         | 4,796     | 2          | 239,789,525 | 20,578     | 30.7%         | 40.0%           |
| Events/Logs        | LOG2                                                                                                                                                  | 950       | 1          | 47,463,436  | 0          | 6.1%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                             | 304       | 1          | 15,219,717  | 0          | 1.9%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 21        | 23         | 1,023,760   | 0          | 0.1%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 11        | 3          | 568,851     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                                                | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                             | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 5         | 6          | 275,040     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                                | 2         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                              | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setAddress

- **Total Gas Used:** 585,708
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=3,389,586,448, proof_size=145,906
- **Weight Consumed:** ref_time=2,475,265,544 (73.0% of total), proof_size=137,177

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,796     | 2          | 239,789,525 | 20,578     | 9.7%          | 15.0%           |
| Events/Logs        | deposit_event                                  | 949       | 1          | 47,463,436  | 0          | 1.9%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 304       | 1          | 15,219,717  | 0          | 0.6%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,171,497   | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setMetadata

- **Total Gas Used:** 603,070
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=1,617,696,858, proof_size=49,853
- **Weight Consumed:** ref_time=703,375,954 (43.5% of total), proof_size=41,124

| Category           | Opcodes Used                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                         | 57,596    | 2          | 239,765,013 | 20,546     | 34.1%         | 50.0%           |
| Events/Logs        | LOG2                                                                                                                                                  | 781       | 1          | 39,035,468  | 0          | 5.5%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                             | 304       | 1          | 15,219,717  | 0          | 2.2%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 23        | 23         | 1,023,760   | 0          | 0.1%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                              | 12        | 3          | 568,851     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                                                | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                             | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                 | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                          | 6         | 6          | 275,040     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                               | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                                | 2         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                              | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setMetadata

- **Total Gas Used:** 635,261
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=3,227,219,572, proof_size=125,296
- **Weight Consumed:** ref_time=2,312,898,668 (71.7% of total), proof_size=116,567

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 57,595    | 2          | 239,765,013 | 20,546     | 10.4%         | 17.6%           |
| Events/Logs        | deposit_event                                  | 781       | 1          | 39,035,468  | 0          | 1.7%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 305       | 1          | 15,219,717  | 0          | 0.7%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,171,497   | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                                    | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - setSubdomainOwner

- **Total Gas Used:** 807,134
- **Base Call Weight:** ref_time=915,516,623, proof_size=9,020
- **Total Weight:** ref_time=4,760,894,341, proof_size=286,727
- **Weight Consumed:** ref_time=3,845,377,718 (80.8% of total), proof_size=277,707

| Category           | Opcodes Used                                                                                                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                              | 4,795     | 2          | 239,765,013 | 20,546     | 6.2%          | 7.4%            |
| Events/Logs        | LOG4                                                                                                                                                                       | 613       | 1          | 30,607,500  | 0          | 0.8%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                  | 304       | 1          | 15,219,717  | 0          | 0.4%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 23        | 26         | 1,161,280   | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                   | 11        | 3          | 571,896     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                                                                     | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                  | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                      | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                               | 6         | 6          | 275,040     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                    | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Memory             | MCOPY, MLOAD, MSTORE, MSTORE8                                                                                                                                              | 4         | 4          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                   | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - setSubdomainOwner

- **Total Gas Used:** 895,077
- **Base Call Weight:** ref_time=915,516,623, proof_size=9,020
- **Total Weight:** ref_time=9,158,035,636, proof_size=372,654
- **Weight Consumed:** ref_time=8,242,519,013 (90.0% of total), proof_size=363,634

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,794     | 2          | 239,714,805 | 20,514     | 2.9%          | 5.6%            |
| Events/Logs        | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 0.4%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 305       | 1          | 15,219,717  | 0          | 0.2%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 23        | 3          | 1,173,192   | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### DotNS_evm - transfer

- **Total Gas Used:** 603,172
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=4,262,777,040, proof_size=276,115
- **Weight Consumed:** ref_time=3,348,456,136 (78.6% of total), proof_size=267,386

| Category           | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                | 4,795     | 2          | 239,765,013 | 20,546     | 7.2%          | 7.7%            |
| Events/Logs        | LOG4                                                                                                                                                         | 612       | 1          | 30,607,500  | 0          | 0.9%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                    | 305       | 1          | 15,219,717  | 0          | 0.5%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 21        | 24         | 1,069,600   | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 11        | 3          | 568,851     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                                                       | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                    | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                 | 6         | 6          | 275,040     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                                       | 2         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                     | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### DotNS_pvm - transfer

- **Total Gas Used:** 643,167
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=6,262,547,109, proof_size=362,107
- **Weight Consumed:** ref_time=5,348,226,205 (85.4% of total), proof_size=353,378

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,794     | 2          | 239,714,805 | 20,514     | 4.5%          | 5.8%            |
| Events/Logs        | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 0.6%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 304       | 1          | 15,219,717  | 0          | 0.3%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,171,497   | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_simple

- **Total Gas Used:** 1,043,770
- **Base Call Weight:** ref_time=914,407,193, proof_size=8,750
- **Total Weight:** ref_time=4,472,691,175, proof_size=306,747
- **Weight Consumed:** ref_time=3,558,283,982 (79.6% of total), proof_size=297,997

| Category           | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                        | 57,595    | 2          | 239,765,013 | 20,546     | 6.7%          | 6.9%            |
| Events/Logs        | LOG4                                                                                                                                                                                                 | 444       | 1          | 22,179,532  | 0          | 0.6%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                            | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 27        | 29         | 1,314,080   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                    | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                            | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                             | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                        | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_simple

- **Total Gas Used:** 1,056,364
- **Base Call Weight:** ref_time=914,407,193, proof_size=8,750
- **Total Weight:** ref_time=5,102,381,392, proof_size=361,381
- **Weight Consumed:** ref_time=4,187,974,199 (82.1% of total), proof_size=352,631

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 5.7%          | 5.8%            |
| Events/Logs        | deposit_event                             | 443       | 1          | 22,179,532  | 0          | 0.5%          | 0.0%            |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_arbiter

- **Total Gas Used:** 885,372
- **Base Call Weight:** ref_time=914,407,193, proof_size=8,750
- **Total Weight:** ref_time=4,472,807,207, proof_size=306,875
- **Weight Consumed:** ref_time=3,558,400,014 (79.6% of total), proof_size=298,125

| Category           | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                        | 4,796     | 2          | 239,789,525 | 20,578     | 6.7%          | 6.9%            |
| Events/Logs        | LOG4                                                                                                                                                                                                 | 443       | 1          | 22,179,532  | 0          | 0.6%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                            | 303       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 26        | 29         | 1,314,080   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                    | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                            | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                             | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                        | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_with_arbiter

- **Total Gas Used:** 897,911
- **Base Call Weight:** ref_time=914,407,193, proof_size=8,750
- **Total Weight:** ref_time=5,099,713,336, proof_size=361,508
- **Weight Consumed:** ref_time=4,185,306,143 (82.1% of total), proof_size=352,758

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,795     | 2          | 239,789,525 | 20,578     | 5.7%          | 5.8%            |
| Events/Logs        | deposit_event                             | 444       | 1          | 22,179,532  | 0          | 0.5%          | 0.0%            |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_expiry

- **Total Gas Used:** 832,573
- **Base Call Weight:** ref_time=914,407,193, proof_size=8,750
- **Total Weight:** ref_time=4,472,831,719, proof_size=306,907
- **Weight Consumed:** ref_time=3,558,424,526 (79.6% of total), proof_size=298,157

| Category           | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                        | 4,796     | 2          | 239,789,525 | 20,578     | 6.7%          | 6.9%            |
| Events/Logs        | LOG4                                                                                                                                                                                                 | 444       | 1          | 22,179,532  | 0          | 0.6%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                            | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 26        | 29         | 1,314,080   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                    | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                            | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                             | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                        | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_with_expiry

- **Total Gas Used:** 845,070
- **Base Call Weight:** ref_time=914,407,193, proof_size=8,750
- **Total Weight:** ref_time=5,097,683,520, proof_size=361,507
- **Weight Consumed:** ref_time=4,183,276,327 (82.1% of total), proof_size=352,757

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,796     | 2          | 239,789,525 | 20,578     | 5.7%          | 5.8%            |
| Events/Logs        | deposit_event                             | 443       | 1          | 22,179,532  | 0          | 0.5%          | 0.0%            |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - create_with_releaseTime

- **Total Gas Used:** 832,574
- **Base Call Weight:** ref_time=914,407,193, proof_size=8,750
- **Total Weight:** ref_time=4,472,874,215, proof_size=306,939
- **Weight Consumed:** ref_time=3,558,467,022 (79.6% of total), proof_size=298,189

| Category           | Opcodes Used                                                                                                                                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                        | 4,797     | 2          | 239,789,525 | 20,578     | 6.7%          | 6.9%            |
| Events/Logs        | LOG4                                                                                                                                                                                                 | 444       | 1          | 22,179,532  | 0          | 0.6%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                            | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 27        | 29         | 1,314,080   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                    | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                            | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                               | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                              | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                             | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                        | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                           | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - create_with_releaseTime

- **Total Gas Used:** 845,024
- **Base Call Weight:** ref_time=914,407,193, proof_size=8,750
- **Total Weight:** ref_time=5,095,382,064, proof_size=361,442
- **Weight Consumed:** ref_time=4,180,974,871 (82.1% of total), proof_size=352,692

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,797     | 2          | 239,789,525 | 20,578     | 5.7%          | 5.8%            |
| Events/Logs        | deposit_event                             | 443       | 1          | 22,179,532  | 0          | 0.5%          | 0.0%            |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - deploy

- **Total Gas Used:** 15,695,049
- **Base Call Weight:** ref_time=1,584,343,825, proof_size=6,934
- **Total Weight:** ref_time=1,997,648,786, proof_size=37,737
- **Weight Consumed:** ref_time=413,304,961 (20.7% of total), proof_size=30,803

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 57,595    | 2          | 239,765,013 | 20,546     | 58.0%         | 66.7%           |
| Code         | CODECOPY                                     | 27        | 1          | 1,337,134   | 0          | 0.3%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 6         | 7          | 305,600     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 3         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMPI                                        | 3         | 1          | 152,800     | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                       | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - deploy

- **Total Gas Used:** 76,695,685
- **Base Call Weight:** ref_time=2,052,809,251, proof_size=6,934
- **Total Weight:** ref_time=2,482,448,859, proof_size=37,705
- **Weight Consumed:** ref_time=429,639,608 (17.3% of total), proof_size=30,771

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 55.8%         | 66.7%           |
| Calldata  | call_data_copy, call_data_size            | 17        | 2          | 826,576     | 0          | 0.2%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### Escrow_evm - refund

- **Total Gas Used:** 431,786
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=2,753,496,003, proof_size=158,046
- **Weight Consumed:** ref_time=1,840,370,818 (66.8% of total), proof_size=149,608

| Category           | Opcodes Used                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls              | CALL                                                                                  | 8,517     | 1          | 425,854,495 | 5,594      | 23.1%         | 3.7%            |
| Storage            | SLOAD, SSTORE                                                                         | 4,796     | 2          | 239,789,525 | 20,578     | 13.0%         | 13.8%           |
| Crypto             | KECCAK256                                                                             | 305       | 1          | 15,219,717  | 0          | 0.8%          | 0.0%            |
| Events/Logs        | LOG3                                                                                  | 107       | 1          | 5,323,596   | 0          | 0.3%          | 0.0%            |
| Ether/Gas          | CALLVALUE, GAS                                                                        | 44        | 2          | 2,248,000   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                     | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP4 | 12        | 13         | 565,360     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                 | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                                                   | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                              | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                            | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Memory             | MSTORE                                                                                | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return Data        | RETURNDATASIZE                                                                        | 0         | 1          | 30,560      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - refund

- **Total Gas Used:** 434,179
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=2,873,149,320, proof_size=191,809
- **Weight Consumed:** ref_time=1,960,024,135 (68.2% of total), proof_size=183,371

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls              | call_evm                                  | 8,528     | 1          | 426,390,360 | 5,594      | 21.8%         | 3.1%            |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,795     | 2          | 239,789,525 | 20,578     | 12.2%         | 11.2%           |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 0.8%          | 0.0%            |
| Events/Logs        | deposit_event                             | 106       | 1          | 5,323,596   | 0          | 0.3%          | 0.0%            |
| Ether/Gas          | ref_time_left, value_transferred          | 45        | 2          | 2,248,000   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Return Data        | return_data_size                          | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Escrow_evm - release

- **Total Gas Used:** 431,712
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=2,749,798,243, proof_size=158,046
- **Weight Consumed:** ref_time=1,836,673,058 (66.8% of total), proof_size=149,608

| Category           | Opcodes Used                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls              | CALL                                                                                  | 8,517     | 1          | 425,854,495 | 5,594      | 23.2%         | 3.7%            |
| Storage            | SLOAD, SSTORE                                                                         | 4,796     | 2          | 239,789,525 | 20,578     | 13.1%         | 13.8%           |
| Crypto             | KECCAK256                                                                             | 305       | 1          | 15,219,717  | 0          | 0.8%          | 0.0%            |
| Events/Logs        | LOG3                                                                                  | 107       | 1          | 5,323,596   | 0          | 0.3%          | 0.0%            |
| Ether/Gas          | CALLVALUE, GAS                                                                        | 44        | 2          | 2,248,000   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                     | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP4 | 12        | 13         | 565,360     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                 | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                                                   | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                              | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                            | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Memory             | MSTORE                                                                                | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return Data        | RETURNDATASIZE                                                                        | 0         | 1          | 30,560      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Escrow_pvm - release

- **Total Gas Used:** 434,215
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=2,874,921,600, proof_size=191,809
- **Weight Consumed:** ref_time=1,961,796,415 (68.2% of total), proof_size=183,371

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls              | call_evm                                  | 8,528     | 1          | 426,390,360 | 5,594      | 21.7%         | 3.1%            |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,797     | 2          | 239,789,525 | 20,578     | 12.2%         | 11.2%           |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 0.8%          | 0.0%            |
| Events/Logs        | deposit_event                             | 107       | 1          | 5,323,596   | 0          | 0.3%          | 0.0%            |
| Ether/Gas          | ref_time_left, value_transferred          | 44        | 2          | 2,248,000   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Return Data        | return_data_size                          | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - approve

- **Total Gas Used:** 472,043
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,466,362,380, proof_size=54,560
- **Weight Consumed:** ref_time=552,830,404 (37.7% of total), proof_size=46,023

| Category           | Opcodes Used                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | --------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                 | 57,595    | 2          | 239,765,013 | 20,546     | 43.4%         | 44.6%           |
| Calls              | DELEGATECALL                                                                                  | 0         | 1          | 145,525,578 | 20,578     | 26.3%         | 44.7%           |
| Crypto             | KECCAK256                                                                                     | 304       | 1          | 15,219,717  | 0          | 2.8%          | 0.0%            |
| Events/Logs        | LOG3                                                                                          | 275       | 1          | 13,751,564  | 0          | 2.5%          | 0.0%            |
| Ether/Gas          | CALLVALUE, GAS                                                                                | 45        | 2          | 2,248,000   | 0          | 0.4%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP5, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4, SWAP5, SWAP6 | 14        | 14         | 626,480     | 0          | 0.1%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                      | 11        | 3          | 579,204     | 0          | 0.1%          | 0.0%            |
| Return Data        | RETURNDATACOPY, RETURNDATASIZE                                                                | 10        | 2          | 526,056     | 0          | 0.1%          | 0.0%            |
| Code               | CODECOPY                                                                                      | 10        | 1          | 495,496     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                        | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                         | 6         | 3          | 290,320     | 0          | 0.1%          | 0.0%            |
| Bitwise            | AND, NOT, SHL, SHR                                                                            | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                                                           | 3         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                      | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                 | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                        | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - approve

- **Total Gas Used:** 477,461
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,737,217,507, proof_size=167,793
- **Weight Consumed:** ref_time=823,685,531 (47.4% of total), proof_size=159,256

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 57,596    | 2          | 239,765,013 | 20,546     | 29.1%         | 12.9%           |
| Calls              | delegate_call_evm                              | 0         | 1          | 162,677,640 | 20,578     | 19.7%         | 12.9%           |
| Crypto             | hash_keccak_256                                | 305       | 1          | 15,219,717  | 0          | 1.8%          | 0.0%            |
| Events/Logs        | deposit_event                                  | 275       | 1          | 13,751,564  | 0          | 1.7%          | 0.0%            |
| Ether/Gas          | ref_time_left, value_transferred               | 45        | 2          | 2,248,000   | 0          | 0.3%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 23        | 3          | 1,177,260   | 0          | 0.1%          | 0.0%            |
| Return Data        | return_data_copy, return_data_size             | 16        | 2          | 814,496     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 535,865     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - changeAdmin

- **Total Gas Used:** 348,997
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,254,046,895, proof_size=39,305
- **Weight Consumed:** ref_time=340,921,710 (27.2% of total), proof_size=30,867

| Category           | Opcodes Used                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                             | 4,796     | 2          | 239,789,525 | 20,578     | 70.3%         | 66.7%           |
| Events/Logs        | LOG1                                                                      | 444       | 1          | 22,179,532  | 0          | 6.5%          | 0.0%            |
| Code               | CODECOPY                                                                  | 9         | 1          | 495,496     | 0          | 0.1%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 10        | 11         | 488,960     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                 | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                     | 6         | 3          | 290,320     | 0          | 0.1%          | 0.0%            |
| Bitwise            | AND, NOT, SHL, SHR                                                        | 3         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                                       | 4         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                  | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                             | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - changeAdmin

- **Total Gas Used:** 350,076
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,307,964,320, proof_size=48,993
- **Weight Consumed:** ref_time=394,839,135 (30.2% of total), proof_size=40,555

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,796     | 2          | 239,789,525 | 20,578     | 60.7%         | 50.7%           |
| Events/Logs        | deposit_event                             | 443       | 1          | 22,179,532  | 0          | 5.6%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.2%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - configureMinter

- **Total Gas Used:** 531,114
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,779,906,672, proof_size=85,395
- **Weight Consumed:** ref_time=866,374,696 (48.7% of total), proof_size=76,858

| Category           | Opcodes Used                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | -------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                      | 57,595    | 2          | 239,765,013 | 20,546     | 27.7%         | 26.7%           |
| Calls              | DELEGATECALL                                                                                       | 0         | 1          | 145,525,578 | 20,578     | 16.8%         | 26.8%           |
| Crypto             | KECCAK256                                                                                          | 304       | 1          | 15,219,717  | 0          | 1.8%          | 0.0%            |
| Events/Logs        | LOG2                                                                                               | 275       | 1          | 13,751,564  | 0          | 1.6%          | 0.0%            |
| Ether/Gas          | CALLVALUE, GAS                                                                                     | 45        | 2          | 2,248,000   | 0          | 0.3%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 14        | 15         | 672,320     | 0          | 0.1%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                           | 11        | 3          | 579,204     | 0          | 0.1%          | 0.0%            |
| Return Data        | RETURNDATACOPY, RETURNDATASIZE                                                                     | 10        | 2          | 526,056     | 0          | 0.1%          | 0.0%            |
| Code               | CODECOPY                                                                                           | 10        | 1          | 495,496     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                             | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                              | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                             | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                                                                | 3         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                           | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                      | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - configureMinter

- **Total Gas Used:** 536,542
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=2,051,283,983, proof_size=198,596
- **Weight Consumed:** ref_time=1,137,752,007 (55.5% of total), proof_size=190,059

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 57,594    | 2          | 239,714,805 | 20,514     | 21.1%         | 10.8%           |
| Calls              | delegate_call_evm                              | 0         | 1          | 162,677,640 | 20,578     | 14.3%         | 10.8%           |
| Crypto             | hash_keccak_256                                | 304       | 1          | 15,219,717  | 0          | 1.3%          | 0.0%            |
| Events/Logs        | deposit_event                                  | 276       | 1          | 13,751,564  | 0          | 1.2%          | 0.0%            |
| Ether/Gas          | ref_time_left, value_transferred               | 46        | 2          | 2,248,000   | 0          | 0.2%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 23        | 3          | 1,177,260   | 0          | 0.1%          | 0.0%            |
| Return Data        | return_data_copy, return_data_size             | 16        | 2          | 814,496     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                                    | 10        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - deploy

- **Total Gas Used:** 10,419,977
- **Base Call Weight:** ref_time=1,543,971,699, proof_size=6,934
- **Total Weight:** ref_time=1,955,027,326, proof_size=31,458
- **Weight Consumed:** ref_time=411,055,627 (21.0% of total), proof_size=24,524

| Category           | Opcodes Used                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SSTORE                                                                         | 56,212    | 1          | 170,600,294 | 10,257     | 41.5%         | 41.8%           |
| Code               | CODECOPY, CODESIZE, EXTCODESIZE                                                | 1,299     | 3          | 64,939,783  | 4,010      | 15.8%         | 16.4%           |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, PUSH1, PUSH2, PUSH32, SWAP1, SWAP2, SWAP3, SWAP5 | 12        | 12         | 550,080     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                         | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                      | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL                                                              | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Comparison         | GT, ISZERO, LT, SLT                                                            | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMPI                                                                          | 3         | 1          | 152,800     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                       | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                  | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - deploy

- **Total Gas Used:** 27,015,933
- **Base Call Weight:** ref_time=1,670,806,557, proof_size=6,934
- **Total Weight:** ref_time=2,111,820,114, proof_size=31,458
- **Weight Consumed:** ref_time=441,013,557 (20.9% of total), proof_size=24,524

| Category           | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | set_storage_or_clear           | 56,212    | 1          | 170,600,294 | 10,257     | 38.7%         | 41.8%           |
| Code               | code_size                      | 1,283     | 1          | 64,148,000  | 4,010      | 14.5%         | 16.4%           |
| Calldata           | call_data_copy, call_data_size | 17        | 2          | 826,576     | 0          | 0.2%          | 0.0%            |
| Return             | seal_return                    | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller                         | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred              | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### FiatTokenProxy_evm - initialize

- **Total Gas Used:** 1,653,659
- **Base Call Weight:** ref_time=918,290,198, proof_size=9,695
- **Total Weight:** ref_time=3,467,115,880, proof_size=230,407
- **Weight Consumed:** ref_time=2,548,825,682 (73.5% of total), proof_size=220,712

| Category           | Opcodes Used                                                                                                                                 | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Return             | RETURN, STOP                                                                                                                                 | 10        | 2          | 2,548,351,436 | 220,712    | 100.0%        | 100.0%          |
| Storage            | SLOAD, SSTORE                                                                                                                                | 4,796     | 2          | 239,789,525   | 20,578     | 9.4%          | 9.3%            |
| Calls              | DELEGATECALL                                                                                                                                 | 0         | 1          | 145,603,530   | 20,578     | 5.7%          | 9.3%            |
| Ether/Gas          | CALLVALUE, GAS                                                                                                                               | 46        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Stack              | DUP1, DUP16, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP15, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 18        | 21         | 932,080       | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                     | 11        | 3          | 566,009       | 0          | 0.0%          | 0.0%            |
| Code               | CODECOPY                                                                                                                                     | 10        | 1          | 495,496       | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                                       | 8         | 1          | 403,000       | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                        | 6         | 3          | 290,320       | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                       | 5         | 5          | 229,200       | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                      | 5         | 5          | 229,200       | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                     | 2         | 2          | 91,680        | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                | 2         | 2          | 91,680        | 0          | 0.0%          | 0.0%            |
| Return Data        | RETURNDATACOPY, RETURNDATASIZE                                                                                                               | 0         | 2          | 30,560        | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - initialize

- **Total Gas Used:** 1,662,412
- **Base Call Weight:** ref_time=918,290,198, proof_size=9,695
- **Total Weight:** ref_time=3,904,776,313, proof_size=343,352
- **Weight Consumed:** ref_time=2,986,486,115 (76.5% of total), proof_size=333,657

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,796     | 2          | 239,789,525 | 20,578     | 8.0%          | 6.2%            |
| Calls              | delegate_call_evm                              | 0         | 1          | 162,819,492 | 20,578     | 5.5%          | 6.2%            |
| Ether/Gas          | ref_time_left, value_transferred               | 45        | 2          | 2,248,000   | 0          | 0.1%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,169,915   | 0          | 0.0%          | 0.0%            |
| Return Data        | return_data_copy, return_data_size             | 16        | 2          | 808,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - mint

- **Total Gas Used:** 491,007
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=2,414,549,635, proof_size=147,129
- **Weight Consumed:** ref_time=1,501,017,659 (62.2% of total), proof_size=138,592

| Category           | Opcodes Used                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                    | 1,383     | 2          | 239,771,541 | 20,578     | 16.0%         | 14.8%           |
| Calls              | DELEGATECALL                                                                                                     | 0         | 1          | 145,525,578 | 20,578     | 9.7%          | 14.8%           |
| Crypto             | KECCAK256                                                                                                        | 304       | 1          | 15,219,717  | 0          | 1.0%          | 0.0%            |
| Events/Logs        | LOG3                                                                                                             | 275       | 1          | 13,751,564  | 0          | 0.9%          | 0.0%            |
| Ether/Gas          | CALLVALUE, GAS                                                                                                   | 45        | 2          | 2,248,000   | 0          | 0.1%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP6, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7 | 14        | 17         | 764,000     | 0          | 0.1%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                         | 11        | 3          | 579,204     | 0          | 0.0%          | 0.0%            |
| Return Data        | RETURNDATACOPY, RETURNDATASIZE                                                                                   | 11        | 2          | 526,056     | 0          | 0.0%          | 0.0%            |
| Code               | CODECOPY                                                                                                         | 10        | 1          | 495,496     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                           | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                            | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                          | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, SHL, SHR                                                                                               | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                         | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                    | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - mint

- **Total Gas Used:** 499,236
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=2,825,996,960, proof_size=260,299
- **Weight Consumed:** ref_time=1,912,464,984 (67.7% of total), proof_size=251,762

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 1,382     | 2          | 241,894,061 | 20,643     | 12.6%         | 8.2%            |
| Calls              | delegate_call_evm                              | 0         | 1          | 162,677,640 | 20,578     | 8.5%          | 8.2%            |
| Crypto             | hash_keccak_256                                | 304       | 1          | 15,219,717  | 0          | 0.8%          | 0.0%            |
| Events/Logs        | deposit_event                                  | 275       | 1          | 13,751,564  | 0          | 0.7%          | 0.0%            |
| Ether/Gas          | ref_time_left, value_transferred               | 46        | 2          | 2,248,000   | 0          | 0.1%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 23        | 3          | 1,177,260   | 0          | 0.1%          | 0.0%            |
| Return Data        | return_data_copy, return_data_size             | 17        | 2          | 814,496     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - transfer

- **Total Gas Used:** 487,778
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=2,253,109,878, proof_size=136,872
- **Weight Consumed:** ref_time=1,339,577,902 (59.5% of total), proof_size=128,335

| Category           | Opcodes Used                                                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | --------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                             | 57,595    | 2          | 239,765,013 | 20,546     | 17.9%         | 16.0%           |
| Calls              | DELEGATECALL                                                                                              | 0         | 1          | 145,525,578 | 20,578     | 10.9%         | 16.0%           |
| Crypto             | KECCAK256                                                                                                 | 304       | 1          | 15,219,717  | 0          | 1.1%          | 0.0%            |
| Events/Logs        | LOG3                                                                                                      | 275       | 1          | 13,751,564  | 0          | 1.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE, GAS                                                                                            | 44        | 2          | 2,248,000   | 0          | 0.2%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP8 | 16        | 16         | 718,160     | 0          | 0.1%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                  | 11        | 3          | 579,204     | 0          | 0.0%          | 0.0%            |
| Return Data        | RETURNDATACOPY, RETURNDATASIZE                                                                            | 10        | 2          | 526,056     | 0          | 0.0%          | 0.0%            |
| Code               | CODECOPY                                                                                                  | 10        | 1          | 495,496     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                     | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                   | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, SHL, SHR                                                                                        | 3         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                  | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                             | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                    | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - transfer

- **Total Gas Used:** 495,316
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=2,629,963,765, proof_size=250,009
- **Weight Consumed:** ref_time=1,716,431,789 (65.3% of total), proof_size=241,472

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 57,594    | 2          | 239,714,805 | 20,514     | 14.0%         | 8.5%            |
| Calls              | delegate_call_evm                              | 0         | 1          | 162,677,640 | 20,578     | 9.5%          | 8.5%            |
| Crypto             | hash_keccak_256                                | 305       | 1          | 15,219,717  | 0          | 0.9%          | 0.0%            |
| Events/Logs        | deposit_event                                  | 275       | 1          | 13,751,564  | 0          | 0.8%          | 0.0%            |
| Ether/Gas          | ref_time_left, value_transferred               | 46        | 2          | 2,248,000   | 0          | 0.1%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 23        | 3          | 1,177,260   | 0          | 0.1%          | 0.0%            |
| Return Data        | return_data_copy, return_data_size             | 16        | 2          | 814,496     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_evm - transferFrom

- **Total Gas Used:** 504,651
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=2,736,718,638, proof_size=178,150
- **Weight Consumed:** ref_time=1,822,816,852 (66.6% of total), proof_size=169,523

| Category           | Opcodes Used                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                    | 4,797     | 2          | 239,789,525 | 20,578     | 13.2%         | 12.1%           |
| Calls              | DELEGATECALL                                                                                                     | 0         | 1          | 145,532,074 | 20,578     | 8.0%          | 12.1%           |
| Crypto             | KECCAK256                                                                                                        | 305       | 1          | 15,219,717  | 0          | 0.8%          | 0.0%            |
| Events/Logs        | LOG3                                                                                                             | 275       | 1          | 13,751,564  | 0          | 0.8%          | 0.0%            |
| Ether/Gas          | CALLVALUE, GAS                                                                                                   | 46        | 2          | 2,248,000   | 0          | 0.1%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP8 | 16        | 17         | 764,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                         | 11        | 3          | 585,700     | 0          | 0.0%          | 0.0%            |
| Return Data        | RETURNDATACOPY, RETURNDATASIZE                                                                                   | 10        | 2          | 526,056     | 0          | 0.0%          | 0.0%            |
| Code               | CODECOPY                                                                                                         | 10        | 1          | 495,496     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                           | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                            | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                          | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, SHL, SHR                                                                                               | 3         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                         | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                    | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenProxy_pvm - transferFrom

- **Total Gas Used:** 514,706
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=3,239,499,195, proof_size=291,383
- **Weight Consumed:** ref_time=2,325,597,409 (71.8% of total), proof_size=282,756

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,797     | 2          | 239,789,525 | 20,578     | 10.3%         | 7.3%            |
| Calls              | delegate_call_evm                              | 0         | 1          | 162,779,716 | 20,578     | 7.0%          | 7.3%            |
| Crypto             | hash_keccak_256                                | 304       | 1          | 15,219,717  | 0          | 0.7%          | 0.0%            |
| Events/Logs        | deposit_event                                  | 275       | 1          | 13,751,564  | 0          | 0.6%          | 0.0%            |
| Ether/Gas          | ref_time_left, value_transferred               | 45        | 2          | 2,248,000   | 0          | 0.1%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,180,876   | 0          | 0.1%          | 0.0%            |
| Return Data        | return_data_copy, return_data_size             | 17        | 2          | 814,496     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |


### FiatTokenV2_2_evm - deploy

- **Total Gas Used:** 49,901,060
- **Base Call Weight:** ref_time=1,762,243,891, proof_size=6,934
- **Total Weight:** ref_time=2,418,189,787, proof_size=58,283
- **Weight Consumed:** ref_time=655,945,896 (27.1% of total), proof_size=51,349

| Category           | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                | 4,795     | 2          | 239,747,029 | 20,546     | 36.5%         | 40.0%           |
| Code               | CODECOPY                                     | 73        | 1          | 3,616,824   | 0          | 0.6%          | 0.0%            |
| Context/Blockchain | CALLER                                       | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                    | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 5         | 7          | 305,600     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL                            | 3         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMPI                                        | 3         | 1          | 152,800     | 0          | 0.0%          | 0.0%            |
| Memory             | MSTORE                                       | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Arithmetic         | SUB                                          | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FiatTokenV2_2_pvm - deploy

- **Total Gas Used:** 249,013,072
- **Base Call Weight:** ref_time=3,156,166,319, proof_size=6,934
- **Total Weight:** ref_time=3,837,783,006, proof_size=58,477
- **Weight Consumed:** ref_time=681,616,687 (17.8% of total), proof_size=51,543

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,838     | 2          | 241,894,061 | 20,643     | 35.5%         | 40.1%           |
| Calldata           | call_data_copy, call_data_size            | 16        | 2          | 826,576     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Fibonacci_evm - deploy

- **Total Gas Used:** 7,489,730
- **Base Call Weight:** ref_time=1,522,210,949, proof_size=6,934
- **Total Weight:** ref_time=1,523,685,771, proof_size=6,934
- **Weight Consumed:** ref_time=1,474,822 (0.1% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 10        | 1          | 544,622  | 0          | 36.9%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 319,000  | 0          | 21.6%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 6         | 6          | 275,040  | 0          | 18.6%         | 0.0%            |
| Control Flow | JUMPI                                 | 3         | 1          | 152,800  | 0          | 10.4%         | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 45,840   | 0          | 3.1%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - deploy

- **Total Gas Used:** 10,060,627
- **Base Call Weight:** ref_time=1,541,930,145, proof_size=6,934
- **Total Weight:** ref_time=1,552,523,142, proof_size=6,934
- **Weight Consumed:** ref_time=10,592,997 (0.7% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 16        | 2          | 826,576  | 0          | 7.8%          | 0.0%            |
| Return    | seal_return                    | 10        | 1          | 529,465  | 0          | 5.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 319,000  | 0          | 3.0%          | 0.0%            |


### fibonacci_ink - deploy

- **Total Gas Used:** 9,191,346
- **Base Call Weight:** ref_time=1,534,903,401, proof_size=6,934
- **Total Weight:** ref_time=1,720,504,670, proof_size=17,191
- **Weight Consumed:** ref_time=185,601,269 (10.8% of total), proof_size=10,257

| Category  | Opcodes Used      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Other     | set_storage       | 47,411    | 1          | 170,582,310 | 10,257     | 91.9%         | 100.0%          |
| Calldata  | call_data_copy    | 47        | 1          | 2,347,968   | 0          | 1.3%          | 0.0%            |
| Return    | seal_return       | 11        | 1          | 529,465     | 0          | 0.3%          | 0.0%            |
| Ether/Gas | value_transferred | 7         | 1          | 319,000     | 0          | 0.2%          | 0.0%            |


### Fibonacci_evm - fib_10

- **Total Gas Used:** 350,268
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,317,597,509, proof_size=8,438
- **Weight Consumed:** ref_time=404,472,324 (30.7% of total), proof_size=0

| Category     | Opcodes Used                                                    | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | --------------------------------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Stack        | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH4, SWAP1, SWAP2, SWAP3 | 8         | 10         | 427,840  | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                       | 7         | 1          | 319,000  | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                           | 6         | 3          | 290,320  | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                         | 5         | 5          | 229,200  | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, SHR                                                   | 3         | 3          | 137,520  | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                        | 1         | 2          | 91,680   | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                      | 1         | 2          | 76,400   | 0          | 0.0%          | 0.0%            |
| Memory       | MSTORE                                                          | 1         | 1          | 45,840   | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                            | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### Fibonacci_pvm - fib_10

- **Total Gas Used:** 351,223
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,365,331,812, proof_size=9,984
- **Weight Consumed:** ref_time=452,206,627 (33.1% of total), proof_size=1,546

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_load, call_data_size | 14        | 2          | 673,000  | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                    | 10        | 1          | 529,465  | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 319,000  | 0          | 0.1%          | 0.0%            |


### fibonacci_ink - fib_10

- **Total Gas Used:** 346,941
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,151,239,553, proof_size=19,797
- **Weight Consumed:** ref_time=238,114,368 (20.7% of total), proof_size=11,359

| Category  | Opcodes Used      | Total Gas | Call Count | ref time   | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ---------- | ---------- | ------------- | --------------- |
| Other     | get_storage       | 1,382     | 1          | 69,114,511 | 10,257     | 29.0%         | 90.3%           |
| Calldata  | call_data_copy    | 47        | 1          | 2,347,968  | 0          | 1.0%          | 0.0%            |
| Return    | seal_return       | 11        | 1          | 529,465    | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred | 7         | 1          | 319,000    | 0          | 0.1%          | 0.0%            |


### fibonacci_rust - fib_10

- **Total Gas Used:** 343,996
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,003,980,642, proof_size=8,647
- **Weight Consumed:** ref_time=90,855,457 (9.0% of total), proof_size=209

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 10        | 1          | 497,028  | 0          | 0.5%          | 0.0%            |


### fibonacci_u128_rust - fib_10

- **Total Gas Used:** 345,847
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,096,545,454, proof_size=8,723
- **Weight Consumed:** ref_time=183,420,269 (16.7% of total), proof_size=285

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 10        | 1          | 498,384  | 0          | 0.3%          | 0.0%            |


### fibonacci_u256_rust - fib_10

- **Total Gas Used:** 374,173
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=2,512,832,213, proof_size=9,124
- **Weight Consumed:** ref_time=1,599,707,028 (63.7% of total), proof_size=686

| Category | Opcodes Used   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| -------- | -------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata | call_data_copy | 10        | 1          | 500,192  | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - burn

- **Total Gas Used:** 422,033
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=1,805,849,977, proof_size=90,843
- **Weight Consumed:** ref_time=892,342,655 (49.4% of total), proof_size=82,312

| Category           | Opcodes Used                                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                 | 4,796     | 2          | 239,789,525 | 20,578     | 26.9%         | 25.0%           |
| Crypto             | KECCAK256                                                                                                     | 305       | 1          | 15,219,717  | 0          | 1.7%          | 0.0%            |
| Events/Logs        | LOG3                                                                                                          | 275       | 1          | 13,751,564  | 0          | 1.5%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 15        | 17         | 748,720     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                        | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                     | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                         | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                        | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                       | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                      | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                 | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                    | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - burn

- **Total Gas Used:** 426,845
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=2,046,426,943, proof_size=156,590
- **Weight Consumed:** ref_time=1,132,919,621 (55.4% of total), proof_size=148,059

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,796     | 2          | 239,789,525 | 20,578     | 21.2%         | 13.9%           |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 1.3%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 1.2%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - createClass_nontransferable

- **Total Gas Used:** 962,653
- **Base Call Weight:** ref_time=915,122,159, proof_size=8,924
- **Total Weight:** ref_time=2,536,860,757, proof_size=132,232
- **Weight Consumed:** ref_time=1,621,738,598 (63.9% of total), proof_size=123,308

| Category           | Opcodes Used                                                                                                                                                                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                   | 57,596    | 2          | 239,765,013 | 20,546     | 14.8%         | 16.7%           |
| Events/Logs        | LOG3                                                                                                                                                                                                            | 612       | 1          | 30,607,500  | 0          | 1.9%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                                       | 305       | 1          | 15,219,717  | 0          | 0.9%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 26        | 31         | 1,390,480   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                               | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 11        | 3          | 568,039     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                       | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                        | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                                   | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - createClass_nontransferable

- **Total Gas Used:** 981,371
- **Base Call Weight:** ref_time=915,122,159, proof_size=8,924
- **Total Weight:** ref_time=3,472,737,578, proof_size=249,426
- **Weight Consumed:** ref_time=2,557,615,419 (73.6% of total), proof_size=240,502

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 57,594    | 2          | 239,714,805 | 20,514     | 9.4%          | 8.5%            |
| Events/Logs        | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 1.2%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 304       | 1          | 15,219,717  | 0          | 0.6%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 23        | 3          | 1,171,045   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 10        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - createClass_transferable

- **Total Gas Used:** 909,853
- **Base Call Weight:** ref_time=915,122,159, proof_size=8,924
- **Total Weight:** ref_time=2,536,843,179, proof_size=132,232
- **Weight Consumed:** ref_time=1,621,721,020 (63.9% of total), proof_size=123,308

| Category           | Opcodes Used                                                                                                                                                                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                   | 57,595    | 2          | 239,765,013 | 20,546     | 14.8%         | 16.7%           |
| Events/Logs        | LOG3                                                                                                                                                                                                            | 612       | 1          | 30,607,500  | 0          | 1.9%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                                       | 305       | 1          | 15,219,717  | 0          | 0.9%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, PUSH9, SWAP1, SWAP10, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 28        | 31         | 1,390,480   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                               | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                        | 11        | 3          | 568,242     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                       | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                           | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                          | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                         | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                        | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                                   | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                                          | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - createClass_transferable

- **Total Gas Used:** 928,572
- **Base Call Weight:** ref_time=915,122,159, proof_size=8,924
- **Total Weight:** ref_time=3,472,812,524, proof_size=249,490
- **Weight Consumed:** ref_time=2,557,690,365 (73.6% of total), proof_size=240,566

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,795     | 2          | 239,789,525 | 20,578     | 9.4%          | 8.6%            |
| Events/Logs        | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 1.2%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 304       | 1          | 15,219,717  | 0          | 0.6%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 22        | 3          | 1,171,158   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - deploy

- **Total Gas Used:** 21,840,579
- **Base Call Weight:** ref_time=1,631,964,259, proof_size=6,934
- **Total Weight:** ref_time=1,875,143,045, proof_size=27,480
- **Weight Consumed:** ref_time=243,178,786 (13.0% of total), proof_size=20,546

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 57,595    | 2          | 239,765,013 | 20,546     | 98.6%         | 100.0%          |
| Code         | CODECOPY                                     | 39        | 1          | 1,948,773   | 0          | 0.8%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 7         | 7          | 305,600     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 4         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                        | 3         | 1          | 152,800     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                       | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 0         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - deploy

- **Total Gas Used:** 142,408,716
- **Base Call Weight:** ref_time=2,557,975,171, proof_size=6,934
- **Total Weight:** ref_time=2,813,972,701, proof_size=27,448
- **Weight Consumed:** ref_time=255,997,530 (9.1% of total), proof_size=20,514

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,595    | 2          | 239,714,805 | 20,514     | 93.6%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size            | 16        | 2          | 826,576     | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### FungibleCredential_evm - issue

- **Total Gas Used:** 946,108
- **Base Call Weight:** ref_time=913,914,113, proof_size=8,630
- **Total Weight:** ref_time=3,589,605,323, proof_size=245,021
- **Weight Consumed:** ref_time=2,675,691,210 (74.5% of total), proof_size=236,391

| Category           | Opcodes Used                                                                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                              | 57,595    | 2          | 239,765,013 | 20,546     | 9.0%          | 8.7%            |
| Crypto             | KECCAK256                                                                                                                                  | 304       | 1          | 15,219,717  | 0          | 0.6%          | 0.0%            |
| Events/Logs        | LOG3                                                                                                                                       | 275       | 1          | 13,751,564  | 0          | 0.5%          | 0.0%            |
| Stack              | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 19        | 21         | 932,080     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                                     | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                  | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                      | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                     | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                    | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                   | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                              | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                 | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - issue

- **Total Gas Used:** 955,771
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=3,972,721,264, proof_size=310,387
- **Weight Consumed:** ref_time=3,058,794,824 (77.0% of total), proof_size=301,754

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 7.8%          | 6.8%            |
| Crypto             | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 0.5%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 0.4%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - issue_more

- **Total Gas Used:** 491,546
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=1,881,498,094, proof_size=101,234
- **Weight Consumed:** ref_time=967,571,654 (51.4% of total), proof_size=92,601

| Category           | Opcodes Used                                                                                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                       | 4,796     | 2          | 239,789,525 | 20,578     | 24.8%         | 22.2%           |
| Crypto             | KECCAK256                                                                                                                           | 304       | 1          | 15,219,717  | 0          | 1.6%          | 0.0%            |
| Events/Logs        | LOG3                                                                                                                                | 275       | 1          | 13,751,564  | 0          | 1.4%          | 0.0%            |
| Stack              | DUP1, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP6 | 17        | 20         | 886,240     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                              | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                           | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                               | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                              | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                             | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                            | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                       | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                          | 1         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - issue_more

- **Total Gas Used:** 496,267
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=2,117,518,296, proof_size=166,981
- **Weight Consumed:** ref_time=1,203,591,856 (56.8% of total), proof_size=158,348

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,796     | 2          | 239,789,525 | 20,578     | 19.9%         | 13.0%           |
| Crypto             | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 1.3%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 1.1%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - revoke

- **Total Gas Used:** 490,102
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=1,809,307,935, proof_size=90,945
- **Weight Consumed:** ref_time=895,381,495 (49.5% of total), proof_size=82,312

| Category           | Opcodes Used                                                                                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                     | 4,796     | 2          | 239,789,525 | 20,578     | 26.8%         | 25.0%           |
| Crypto             | KECCAK256                                                                                                                         | 304       | 1          | 15,219,717  | 0          | 1.7%          | 0.0%            |
| Events/Logs        | LOG3                                                                                                                              | 275       | 1          | 13,751,564  | 0          | 1.5%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 17        | 20         | 886,240     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                            | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                             | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                            | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                           | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                          | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                     | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                        | 1         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - revoke

- **Total Gas Used:** 494,840
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=2,046,197,933, proof_size=156,692
- **Weight Consumed:** ref_time=1,132,271,493 (55.3% of total), proof_size=148,059

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,797     | 2          | 239,789,525 | 20,578     | 21.2%         | 13.9%           |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 1.3%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 1.2%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### FungibleCredential_evm - transfer

- **Total Gas Used:** 842,861
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=3,807,250,163, proof_size=265,660
- **Weight Consumed:** ref_time=2,893,348,377 (76.0% of total), proof_size=257,033

| Category           | Opcodes Used                                                                                                           | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                          | 57,596    | 2          | 239,765,013 | 20,546     | 8.3%          | 8.0%            |
| Crypto             | KECCAK256                                                                                                              | 305       | 1          | 15,219,717  | 0          | 0.5%          | 0.0%            |
| Events/Logs        | LOG4                                                                                                                   | 275       | 1          | 13,751,564  | 0          | 0.5%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 15        | 18         | 809,840     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                 | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                  | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                 | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                               | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                          | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                             | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                   | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### FungibleCredential_pvm - transfer

- **Total Gas Used:** 852,513
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=4,289,839,492, proof_size=331,119
- **Weight Consumed:** ref_time=3,375,937,706 (78.7% of total), proof_size=322,492

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,595    | 2          | 239,714,805 | 20,514     | 7.1%          | 6.4%            |
| Crypto             | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 0.5%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 0.4%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - deploy

- **Total Gas Used:** 15,730,892
- **Base Call Weight:** ref_time=1,585,483,297, proof_size=6,934
- **Total Weight:** ref_time=1,587,769,713, proof_size=6,934
- **Weight Consumed:** ref_time=2,286,416 (0.1% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 27        | 1          | 1,356,216 | 0          | 59.3%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 319,000   | 0          | 14.0%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 6         | 6          | 275,040   | 0          | 12.0%         | 0.0%            |
| Control Flow | JUMPI                                 | 3         | 1          | 152,800   | 0          | 6.7%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 45,840    | 0          | 2.0%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - deploy

- **Total Gas Used:** 86,916,250
- **Base Call Weight:** ref_time=2,132,192,467, proof_size=6,934
- **Total Weight:** ref_time=2,142,687,004, proof_size=6,934
- **Weight Consumed:** ref_time=10,494,537 (0.5% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 17        | 2          | 826,576  | 0          | 7.9%          | 0.0%            |
| Return    | seal_return                    | 10        | 1          | 529,465  | 0          | 5.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 319,000  | 0          | 3.0%          | 0.0%            |


### KeyRegistry_evm - fetchPrekeyBundle

- **Total Gas Used:** 424,602
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=2,594,286,933, proof_size=183,281
- **Weight Consumed:** ref_time=1,681,186,402 (64.8% of total), proof_size=174,849

| Category           | Opcodes Used                                                                                                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                      | 1,383     | 2          | 239,771,541 | 20,578     | 14.3%         | 11.8%           |
| Crypto             | KECCAK256                                                                                                                                                                          | 302       | 1          | 15,106,341  | 0          | 0.9%          | 0.0%            |
| Events/Logs        | LOG3                                                                                                                                                                               | 107       | 1          | 5,323,596   | 0          | 0.3%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP13, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP11, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 23        | 27         | 1,207,120   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                                                                             | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                          | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                              | 7         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                             | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                            | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Memory             | MCOPY, MLOAD, MSTORE                                                                                                                                                               | 4         | 3          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                           | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                         | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - fetchPrekeyBundle

- **Total Gas Used:** 436,939
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=3,211,123,035, proof_size=222,125
- **Weight Consumed:** ref_time=2,298,022,504 (71.6% of total), proof_size=213,693

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 1,383     | 2          | 241,944,269 | 20,675     | 10.5%         | 9.7%            |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 0.7%          | 0.0%            |
| Events/Logs        | deposit_event                             | 106       | 1          | 5,323,596   | 0          | 0.2%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 12        | 1          | 606,265     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - registerIdentity

- **Total Gas Used:** 1,252,054
- **Base Call Weight:** ref_time=915,516,623, proof_size=9,020
- **Total Weight:** ref_time=3,246,900,382, proof_size=183,645
- **Weight Consumed:** ref_time=2,331,383,759 (71.8% of total), proof_size=174,625

| Category           | Opcodes Used                                                                                                                                                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                             | 4,796     | 2          | 239,789,525 | 20,578     | 10.3%         | 11.8%           |
| Crypto             | KECCAK256                                                                                                                                                                                                 | 302       | 1          | 15,106,341  | 0          | 0.6%          | 0.0%            |
| Events/Logs        | LOG2                                                                                                                                                                                                      | 275       | 1          | 13,751,564  | 0          | 0.6%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP8, SWAP9 | 30        | 30         | 1,344,640   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                         | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                  | 12        | 3          | 578,392     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                 | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                     | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                    | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                   | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                  | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                             | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - registerIdentity

- **Total Gas Used:** 1,259,681
- **Base Call Weight:** ref_time=915,516,623, proof_size=9,020
- **Total Weight:** ref_time=3,628,213,462, proof_size=222,296
- **Weight Consumed:** ref_time=2,712,696,839 (74.8% of total), proof_size=213,276

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,796     | 2          | 239,789,525 | 20,578     | 8.8%          | 9.6%            |
| Crypto             | hash_keccak_256                                | 302       | 1          | 15,106,341  | 0          | 0.6%          | 0.0%            |
| Events/Logs        | deposit_event                                  | 275       | 1          | 13,751,564  | 0          | 0.5%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,176,808   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - updateSignedPrekey

- **Total Gas Used:** 626,944
- **Base Call Weight:** ref_time=914,727,695, proof_size=8,828
- **Total Weight:** ref_time=2,151,401,681, proof_size=101,429
- **Weight Consumed:** ref_time=1,236,673,986 (57.5% of total), proof_size=92,601

| Category           | Opcodes Used                                                                                                                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                   | 4,795     | 2          | 239,789,525 | 20,578     | 19.4%         | 22.2%           |
| Events/Logs        | LOG2                                                                                                                                                            | 444       | 1          | 22,179,532  | 0          | 1.8%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                       | 302       | 1          | 15,106,341  | 0          | 1.2%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP6, SWAP7, SWAP9 | 23        | 24         | 1,069,600   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                               | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                       | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                           | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                          | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                         | 3         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                        | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                   | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                      | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - updateSignedPrekey

- **Total Gas Used:** 635,359
- **Base Call Weight:** ref_time=914,727,695, proof_size=8,828
- **Total Weight:** ref_time=2,572,158,544, proof_size=160,850
- **Weight Consumed:** ref_time=1,657,430,849 (64.4% of total), proof_size=152,022

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,795     | 2          | 239,789,525 | 20,578     | 14.5%         | 13.5%           |
| Events/Logs        | deposit_event                             | 444       | 1          | 22,179,532  | 0          | 1.3%          | 0.0%            |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 0.9%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### KeyRegistry_evm - uploadOneTimePrekeys

- **Total Gas Used:** 853,225
- **Base Call Weight:** ref_time=914,727,695, proof_size=8,828
- **Total Weight:** ref_time=2,905,420,921, proof_size=193,902
- **Weight Consumed:** ref_time=1,990,693,226 (68.5% of total), proof_size=185,074

| Category           | Opcodes Used                                                                                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                               | 57,595    | 2          | 239,765,013 | 20,546     | 12.0%         | 11.1%           |
| Crypto             | KECCAK256                                                                                                                   | 302       | 1          | 15,106,341  | 0          | 0.8%          | 0.0%            |
| Events/Logs        | LOG2                                                                                                                        | 275       | 1          | 13,751,564  | 0          | 0.7%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 18        | 19         | 840,400     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                      | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                   | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                       | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                      | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                     | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                    | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                               | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                  | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                        | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### KeyRegistry_pvm - uploadOneTimePrekeys

- **Total Gas Used:** 858,682
- **Base Call Weight:** ref_time=914,727,695, proof_size=8,828
- **Total Weight:** ref_time=3,178,312,719, proof_size=232,553
- **Weight Consumed:** ref_time=2,263,585,024 (71.2% of total), proof_size=223,725

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,595    | 2          | 239,714,805 | 20,514     | 10.6%         | 9.2%            |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 0.7%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 0.6%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - addWriter

- **Total Gas Used:** 587,712
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,969,810,649, proof_size=101,042
- **Weight Consumed:** ref_time=1,056,278,673 (53.6% of total), proof_size=92,505

| Category           | Opcodes Used                                                                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                   | 57,595    | 2          | 239,765,013 | 20,546     | 22.7%         | 22.2%           |
| Crypto             | KECCAK256                                                                                                       | 302       | 1          | 15,106,341  | 0          | 1.4%          | 0.0%            |
| Events/Logs        | LOG3                                                                                                            | 107       | 1          | 5,323,596   | 0          | 0.5%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 16        | 17         | 764,000     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                          | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                       | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                           | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                          | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                                                                             | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                        | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                      | 1         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Memory             | MSTORE                                                                                                          | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - addWriter

- **Total Gas Used:** 591,957
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=2,182,057,583, proof_size=155,041
- **Weight Consumed:** ref_time=1,268,525,607 (58.1% of total), proof_size=146,504

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 18.9%         | 14.0%           |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 1.2%          | 0.0%            |
| Events/Logs        | deposit_event                             | 107       | 1          | 5,323,596   | 0          | 0.4%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 12        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - append

- **Total Gas Used:** 651,181
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=2,503,225,830, proof_size=142,166
- **Weight Consumed:** ref_time=1,589,693,854 (63.5% of total), proof_size=133,629

| Category           | Opcodes Used                                                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                         | 57,595    | 2          | 239,765,013 | 20,546     | 15.1%         | 15.4%           |
| Crypto             | KECCAK256                                                                                                                                                                             | 304       | 1          | 15,219,717  | 0          | 1.0%          | 0.0%            |
| Events/Logs        | LOG4                                                                                                                                                                                  | 275       | 1          | 13,751,564  | 0          | 0.9%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 26        | 27         | 1,222,400   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                     | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                             | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                              | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                         | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - append

- **Total Gas Used:** 656,518
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=2,770,104,040, proof_size=196,197
- **Weight Consumed:** ref_time=1,856,572,064 (67.0% of total), proof_size=187,660

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 12.9%         | 10.9%           |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 0.8%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 0.7%          | 0.0%            |
| Context/Blockchain | caller, now                               | 16        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 12        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - append_2

- **Total Gas Used:** 651,181
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=2,503,225,830, proof_size=142,166
- **Weight Consumed:** ref_time=1,589,693,854 (63.5% of total), proof_size=133,629

| Category           | Opcodes Used                                                                                                                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                         | 57,595    | 2          | 239,765,013 | 20,546     | 15.1%         | 15.4%           |
| Crypto             | KECCAK256                                                                                                                                                                             | 304       | 1          | 15,219,717  | 0          | 1.0%          | 0.0%            |
| Events/Logs        | LOG4                                                                                                                                                                                  | 275       | 1          | 13,751,564  | 0          | 0.9%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, PUSH0, PUSH1, PUSH12, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP10, SWAP2, SWAP3, SWAP5, SWAP6, SWAP7, SWAP8 | 26        | 27         | 1,222,400   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                     | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                             | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                 | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                               | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                              | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                         | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                            | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - append_2

- **Total Gas Used:** 656,518
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=2,770,104,040, proof_size=196,197
- **Weight Consumed:** ref_time=1,856,572,064 (67.0% of total), proof_size=187,660

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 12.9%         | 10.9%           |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 0.8%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 0.7%          | 0.0%            |
| Context/Blockchain | caller, now                               | 16        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 12        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - create_nonpermissioned

- **Total Gas Used:** 580,416
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=2,264,963,658, proof_size=121,489
- **Weight Consumed:** ref_time=1,351,838,473 (59.7% of total), proof_size=113,051

| Category           | Opcodes Used                                                                                                                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                 | 57,596    | 2          | 239,765,013 | 20,546     | 17.7%         | 18.2%           |
| Crypto             | KECCAK256                                                                                                                                                                                     | 302       | 1          | 15,106,341  | 0          | 1.1%          | 0.0%            |
| Events/Logs        | LOG3                                                                                                                                                                                          | 275       | 1          | 13,751,564  | 0          | 1.0%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 24        | 28         | 1,268,240   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                             | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                     | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                      | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                 | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                        | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - create_nonpermissioned

- **Total Gas Used:** 595,602
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=3,024,266,574, proof_size=216,709
- **Weight Consumed:** ref_time=2,111,141,389 (69.8% of total), proof_size=208,271

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 11.4%         | 9.8%            |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 0.7%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 0.7%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - create_permissioned

- **Total Gas Used:** 474,816
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=2,265,012,682, proof_size=121,553
- **Weight Consumed:** ref_time=1,351,887,497 (59.7% of total), proof_size=113,115

| Category           | Opcodes Used                                                                                                                                                                                  | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                 | 4,796     | 2          | 239,789,525 | 20,578     | 17.7%         | 18.2%           |
| Crypto             | KECCAK256                                                                                                                                                                                     | 302       | 1          | 15,106,341  | 0          | 1.1%          | 0.0%            |
| Events/Logs        | LOG3                                                                                                                                                                                          | 275       | 1          | 13,751,564  | 0          | 1.0%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH17, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP10, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8, SWAP9 | 24        | 28         | 1,268,240   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                             | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                     | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                         | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                        | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                       | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                      | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                 | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                                                    | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                        | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - create_permissioned

- **Total Gas Used:** 489,997
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=3,024,022,174, proof_size=216,837
- **Weight Consumed:** ref_time=2,110,896,989 (69.8% of total), proof_size=208,399

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,796     | 2          | 239,789,525 | 20,578     | 11.4%         | 9.9%            |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 0.7%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 0.7%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - deploy

- **Total Gas Used:** 19,905,998
- **Base Call Weight:** ref_time=1,617,119,471, proof_size=6,934
- **Total Weight:** ref_time=1,860,107,843, proof_size=27,480
- **Weight Consumed:** ref_time=242,988,372 (13.1% of total), proof_size=20,546

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 57,595    | 2          | 239,765,013 | 20,546     | 98.7%         | 100.0%          |
| Code         | CODECOPY                                     | 35        | 1          | 1,758,359   | 0          | 0.7%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 7         | 7          | 305,600     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 3         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                        | 3         | 1          | 152,800     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                       | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - deploy

- **Total Gas Used:** 118,461,841
- **Base Call Weight:** ref_time=2,374,077,051, proof_size=6,934
- **Total Weight:** ref_time=2,630,222,271, proof_size=27,448
- **Weight Consumed:** ref_time=256,145,220 (9.7% of total), proof_size=20,514

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,595    | 2          | 239,714,805 | 20,514     | 93.6%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size            | 16        | 2          | 826,576     | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 10        | 1          | 529,465     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### Log_evm - removeWriter

- **Total Gas Used:** 284,995
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=2,673,915,175, proof_size=183,450
- **Weight Consumed:** ref_time=1,760,383,199 (65.8% of total), proof_size=174,913

| Category           | Opcodes Used                                                                                                    | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | --------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                   | 4,796     | 2          | 239,771,541 | 20,578     | 13.6%         | 11.8%           |
| Crypto             | KECCAK256                                                                                                       | 302       | 1          | 15,106,341  | 0          | 0.9%          | 0.0%            |
| Events/Logs        | LOG3                                                                                                            | 106       | 1          | 5,323,596   | 0          | 0.3%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 17        | 17         | 764,000     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                          | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                       | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                           | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                          | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                         | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                        | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                      | 1         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Memory             | MSTORE                                                                                                          | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - removeWriter

- **Total Gas Used:** 290,835
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=2,965,921,219, proof_size=237,868
- **Weight Consumed:** ref_time=2,052,389,243 (69.2% of total), proof_size=229,331

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,838     | 2          | 241,944,269 | 20,675     | 11.8%         | 9.0%            |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 0.7%          | 0.0%            |
| Events/Logs        | deposit_event                             | 107       | 1          | 5,323,596   | 0          | 0.3%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Log_evm - transfer

- **Total Gas Used:** 558,121
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=3,130,219,623, proof_size=224,542
- **Weight Consumed:** ref_time=2,216,687,647 (70.8% of total), proof_size=216,005

| Category           | Opcodes Used                                                                                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                       | 57,596    | 2          | 239,765,013 | 20,546     | 10.8%         | 9.5%            |
| Crypto             | KECCAK256                                                                                                                           | 302       | 1          | 15,106,341  | 0          | 0.7%          | 0.0%            |
| Events/Logs        | LOG4                                                                                                                                | 106       | 1          | 5,323,596   | 0          | 0.2%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 17        | 20         | 901,520     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                              | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                           | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                               | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                              | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                             | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                            | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                          | 1         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Memory             | MSTORE                                                                                                                              | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Log_pvm - transfer

- **Total Gas Used:** 563,572
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=3,402,799,075, proof_size=278,605
- **Weight Consumed:** ref_time=2,489,267,099 (73.2% of total), proof_size=270,068

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 9.6%          | 7.6%            |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 0.6%          | 0.0%            |
| Events/Logs        | deposit_event                             | 106       | 1          | 5,323,596   | 0          | 0.2%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - deploy

- **Total Gas Used:** 20,705,342
- **Base Call Weight:** ref_time=1,623,244,133, proof_size=6,934
- **Total Weight:** ref_time=1,866,311,066, proof_size=27,480
- **Weight Consumed:** ref_time=243,066,933 (13.0% of total), proof_size=20,546

| Category     | Opcodes Used                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | -------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                | 57,595    | 2          | 239,765,013 | 20,546     | 98.6%         | 100.0%          |
| Code         | CODECOPY                                     | 37        | 1          | 1,836,920   | 0          | 0.8%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                    | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, SWAP1 | 5         | 7          | 305,600     | 0          | 0.1%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL                            | 4         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMPI                                        | 3         | 1          | 152,800     | 0          | 0.1%          | 0.0%            |
| Memory       | MSTORE                                       | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | SUB                                          | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - deploy

- **Total Gas Used:** 141,607,432
- **Base Call Weight:** ref_time=2,551,866,335, proof_size=6,934
- **Total Weight:** ref_time=2,807,765,405, proof_size=27,448
- **Weight Consumed:** ref_time=255,899,070 (9.1% of total), proof_size=20,514

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,595    | 2          | 239,714,805 | 20,514     | 93.7%         | 100.0%          |
| Calldata  | call_data_copy, call_data_size            | 16        | 2          | 826,576     | 0          | 0.3%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### NonFungibleCredential_evm - issue_nontransferable

- **Total Gas Used:** 1,233,710
- **Base Call Weight:** ref_time=915,516,623, proof_size=9,020
- **Total Weight:** ref_time=4,969,696,571, proof_size=337,980
- **Weight Consumed:** ref_time=4,054,179,948 (81.6% of total), proof_size=328,960

| Category           | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                                    | 57,595    | 2          | 239,765,013 | 20,546     | 5.9%          | 6.2%            |
| Events/Logs        | LOG4                                                                                                                                                                                                                             | 612       | 1          | 30,607,500  | 0          | 0.8%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                                                        | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 29        | 33         | 1,482,160   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                                                | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 12        | 3          | 568,851     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                                        | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                                         | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                                                    | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_nontransferable

- **Total Gas Used:** 1,257,015
- **Base Call Weight:** ref_time=915,516,623, proof_size=9,020
- **Total Weight:** ref_time=6,134,936,944, proof_size=444,532
- **Weight Consumed:** ref_time=5,219,420,321 (85.1% of total), proof_size=435,512

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 57,594    | 2          | 239,714,805 | 20,514     | 4.6%          | 4.7%            |
| Events/Logs        | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 0.6%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 303       | 1          | 15,106,341  | 0          | 0.3%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,171,497   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 10        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - issue_transferable

- **Total Gas Used:** 1,392,108
- **Base Call Weight:** ref_time=915,516,623, proof_size=9,020
- **Total Weight:** ref_time=4,969,592,183, proof_size=337,852
- **Weight Consumed:** ref_time=4,054,075,560 (81.6% of total), proof_size=328,832

| Category           | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                                    | 57,596    | 2          | 239,765,013 | 20,546     | 5.9%          | 6.2%            |
| Events/Logs        | LOG4                                                                                                                                                                                                                             | 612       | 1          | 30,607,500  | 0          | 0.8%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                                                        | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 30        | 33         | 1,482,160   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                                                | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 12        | 3          | 569,054     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                                        | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                                         | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                                                    | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_transferable

- **Total Gas Used:** 1,415,383
- **Base Call Weight:** ref_time=915,516,623, proof_size=9,020
- **Total Weight:** ref_time=6,133,356,914, proof_size=444,243
- **Weight Consumed:** ref_time=5,217,840,291 (85.1% of total), proof_size=435,223

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 57,595    | 2          | 239,714,805 | 20,514     | 4.6%          | 4.7%            |
| Events/Logs        | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 0.6%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 302       | 1          | 15,106,341  | 0          | 0.3%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,171,610   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - issue_with_expiry

- **Total Gas Used:** 1,180,912
- **Base Call Weight:** ref_time=915,516,623, proof_size=9,020
- **Total Weight:** ref_time=4,969,775,223, proof_size=338,044
- **Weight Consumed:** ref_time=4,054,258,600 (81.6% of total), proof_size=329,024

| Category           | Opcodes Used                                                                                                                                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                                                    | 4,795     | 2          | 239,789,525 | 20,578     | 5.9%          | 6.3%            |
| Events/Logs        | LOG4                                                                                                                                                                                                                             | 613       | 1          | 30,607,500  | 0          | 0.8%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                                                        | 302       | 1          | 15,106,341  | 0          | 0.4%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP12, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH10, PUSH12, PUSH18, PUSH2, PUSH32, PUSH4, PUSH8, SWAP1, SWAP11, SWAP12, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP9 | 30        | 33         | 1,482,160   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                                                | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                                                         | 11        | 3          | 569,054     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                                                        | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                                                            | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                                                           | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                                                          | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                                                         | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                                                    | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - issue_with_expiry

- **Total Gas Used:** 1,204,080
- **Base Call Weight:** ref_time=915,516,623, proof_size=9,020
- **Total Weight:** ref_time=6,128,168,698, proof_size=444,433
- **Weight Consumed:** ref_time=5,212,652,075 (85.1% of total), proof_size=435,413

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,795     | 2          | 239,789,525 | 20,578     | 4.6%          | 4.7%            |
| Events/Logs        | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 0.6%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 302       | 1          | 15,106,341  | 0          | 0.3%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,171,610   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 535,865     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - revoke

- **Total Gas Used:** 348,945
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,251,418,142, proof_size=39,305
- **Weight Consumed:** ref_time=338,292,957 (27.0% of total), proof_size=30,867

| Category           | Opcodes Used                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                    | 4,795     | 2          | 239,789,525 | 20,578     | 70.9%         | 66.7%           |
| Crypto             | KECCAK256                                                        | 304       | 1          | 15,219,717  | 0          | 4.5%          | 0.0%            |
| Events/Logs        | LOG3                                                             | 106       | 1          | 5,323,596   | 0          | 1.6%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1 | 9         | 10         | 427,840     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                           | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                        | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                            | 5         | 3          | 290,320     | 0          | 0.1%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                           | 5         | 5          | 229,200     | 0          | 0.1%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                              | 2         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                         | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                       | 1         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Memory             | MSTORE                                                           | 0         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - revoke

- **Total Gas Used:** 351,596
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,383,981,142, proof_size=104,666
- **Weight Consumed:** ref_time=470,855,957 (34.0% of total), proof_size=96,228

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,796     | 2          | 239,789,525 | 20,578     | 50.9%         | 21.4%           |
| Crypto             | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 3.2%          | 0.0%            |
| Events/Logs        | deposit_event                             | 106       | 1          | 5,323,596   | 0          | 1.1%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### NonFungibleCredential_evm - transfer

- **Total Gas Used:** 623,497
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=6,599,059,373, proof_size=502,147
- **Weight Consumed:** ref_time=5,685,552,051 (86.2% of total), proof_size=493,616

| Category           | Opcodes Used                                                                                                                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                       | 57,596    | 2          | 239,765,013 | 20,546     | 4.2%          | 4.2%            |
| Crypto             | KECCAK256                                                                                                                                                           | 302       | 1          | 15,106,341  | 0          | 0.3%          | 0.0%            |
| Events/Logs        | LOG4                                                                                                                                                                | 107       | 1          | 5,323,596   | 0          | 0.1%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP14, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 21        | 25         | 1,115,440   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                                                              | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                           | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                               | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                              | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                             | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Memory             | MCOPY, MLOAD, MSTORE                                                                                                                                                | 3         | 3          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                            | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                          | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - transfer

- **Total Gas Used:** 642,143
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=7,531,318,193, proof_size=567,962
- **Weight Consumed:** ref_time=6,617,810,871 (87.9% of total), proof_size=559,431

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 3.6%          | 3.7%            |
| Crypto             | hash_keccak_256                           | 302       | 1          | 15,106,341  | 0          | 0.2%          | 0.0%            |
| Events/Logs        | deposit_event                             | 107       | 1          | 5,323,596   | 0          | 0.1%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_evm - updateMetadata

- **Total Gas Used:** 413,713
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,189,829,502, proof_size=29,115
- **Weight Consumed:** ref_time=276,297,526 (23.2% of total), proof_size=20,578

| Category           | Opcodes Used                                                                          | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                         | 4,796     | 2          | 239,789,525 | 20,578     | 86.8%         | 100.0%          |
| Crypto             | KECCAK256                                                                             | 304       | 1          | 15,219,717  | 0          | 5.5%          | 0.0%            |
| Events/Logs        | LOG2                                                                                  | 275       | 1          | 13,751,564  | 0          | 5.0%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 11        | 13         | 565,360     | 0          | 0.2%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                             | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                 | 6         | 3          | 290,320     | 0          | 0.1%          | 0.0%            |
| Bitwise            | AND, NOT, SHL, SHR                                                                    | 4         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                                                   | 4         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                              | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                         | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                            | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                  | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### NonFungibleCredential_pvm - updateMetadata

- **Total Gas Used:** 416,571
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,332,758,438, proof_size=94,476
- **Weight Consumed:** ref_time=419,226,462 (31.5% of total), proof_size=85,939

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,795     | 2          | 239,789,525 | 20,578     | 57.2%         | 23.9%           |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 3.6%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 3.3%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.2%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### SimpleToken_evm - deploy

- **Total Gas Used:** 7,877,010
- **Base Call Weight:** ref_time=1,525,170,411, proof_size=6,934
- **Total Weight:** ref_time=1,526,683,194, proof_size=6,934
- **Weight Consumed:** ref_time=1,512,783 (0.1% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 11        | 1          | 582,583  | 0          | 38.5%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 319,000  | 0          | 21.1%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 6         | 6          | 275,040  | 0          | 18.2%         | 0.0%            |
| Control Flow | JUMPI                                 | 3         | 1          | 152,800  | 0          | 10.1%         | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 45,840   | 0          | 3.0%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0        | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - deploy

- **Total Gas Used:** 17,329,361
- **Base Call Weight:** ref_time=1,597,748,447, proof_size=6,934
- **Total Weight:** ref_time=1,608,242,984, proof_size=6,934
- **Weight Consumed:** ref_time=10,494,537 (0.7% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 17        | 2          | 826,576  | 0          | 7.9%          | 0.0%            |
| Return    | seal_return                    | 11        | 1          | 529,465  | 0          | 5.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 6         | 1          | 319,000  | 0          | 3.0%          | 0.0%            |


### simple_token_ink - deploy

- **Total Gas Used:** 21,871,224
- **Base Call Weight:** ref_time=1,632,217,475, proof_size=6,934
- **Total Weight:** ref_time=1,847,374,728, proof_size=17,191
- **Weight Consumed:** ref_time=215,157,253 (11.6% of total), proof_size=10,257

| Category  | Opcodes Used      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Other     | set_storage       | 53,812    | 1          | 170,600,294 | 10,257     | 79.3%         | 100.0%          |
| Calldata  | call_data_copy    | 47        | 1          | 2,347,968   | 0          | 1.1%          | 0.0%            |
| Return    | seal_return       | 10        | 1          | 529,465     | 0          | 0.2%          | 0.0%            |
| Ether/Gas | value_transferred | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### SimpleToken_evm - mint

- **Total Gas Used:** 524,096
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,429,005,009, proof_size=49,629
- **Weight Consumed:** ref_time=515,473,033 (36.1% of total), proof_size=41,092

| Category     | Opcodes Used                                                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                                     | 57,595    | 2          | 239,765,013 | 20,546     | 46.5%         | 50.0%           |
| Crypto       | KECCAK256                                                                                         | 305       | 1          | 15,219,717  | 0          | 3.0%          | 0.0%            |
| Events/Logs  | LOG3                                                                                              | 275       | 1          | 13,751,564  | 0          | 2.7%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP5, DUP6, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4 | 14        | 15         | 657,040     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                             | 6         | 3          | 290,320     | 0          | 0.1%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT, SLT                                                                           | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, SHL, SHR                                                                                | 3         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD, SUB                                                                                          | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                                     | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata     | CALLDATALOAD, CALLDATASIZE                                                                        | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return       | STOP                                                                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - mint

- **Total Gas Used:** 525,421
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,495,251,419, proof_size=54,638
- **Weight Consumed:** ref_time=581,719,443 (38.9% of total), proof_size=46,101

| Category    | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage     | get_storage_or_zero, set_storage_or_clear | 57,595    | 2          | 239,714,805 | 20,514     | 41.2%         | 44.5%           |
| Crypto      | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 2.6%          | 0.0%            |
| Events/Logs | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 2.4%          | 0.0%            |
| Calldata    | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return      | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### simple_token_ink - mint

- **Total Gas Used:** 478,082
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,688,284,912, proof_size=56,880
- **Weight Consumed:** ref_time=774,752,936 (45.9% of total), proof_size=48,343

| Category    | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Other       | get_storage, set_storage | 4,794     | 2          | 239,739,317 | 20,546     | 30.9%         | 42.5%           |
| Events/Logs | deposit_event            | 275       | 1          | 13,751,564  | 0          | 1.8%          | 0.0%            |
| Calldata    | call_data_copy           | 46        | 1          | 2,347,968   | 0          | 0.3%          | 0.0%            |
| Return      | seal_return              | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas   | value_transferred        | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### simple_token_no_alloc_rust - mint

- **Total Gas Used:** 525,628
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,505,573,212, proof_size=53,925
- **Weight Consumed:** ref_time=592,041,236 (39.3% of total), proof_size=45,388

| Category    | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ----------- | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Other       | get_storage, set_storage       | 57,595    | 2          | 239,705,813 | 20,514     | 40.5%         | 45.2%           |
| Crypto      | hash_keccak_256                | 304       | 1          | 15,219,717  | 0          | 2.6%          | 0.0%            |
| Events/Logs | deposit_event                  | 275       | 1          | 13,751,564  | 0          | 2.3%          | 0.0%            |
| Calldata    | call_data_copy, call_data_size | 17        | 2          | 834,260     | 0          | 0.1%          | 0.0%            |


### SimpleToken_evm - transfer

- **Total Gas Used:** 419,118
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,460,079,331, proof_size=49,661
- **Weight Consumed:** ref_time=546,547,355 (37.4% of total), proof_size=41,124

| Category           | Opcodes Used                                                            | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                           | 4,795     | 2          | 239,765,013 | 20,546     | 43.9%         | 50.0%           |
| Crypto             | KECCAK256                                                               | 304       | 1          | 15,219,717  | 0          | 2.8%          | 0.0%            |
| Events/Logs        | LOG3                                                                    | 275       | 1          | 13,751,564  | 0          | 2.5%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 11        | 11         | 473,680     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                  | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                               | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                   | 6         | 3          | 290,320     | 0          | 0.1%          | 0.0%            |
| Bitwise            | AND, NOT, SHL, SHR                                                      | 3         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                                     | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                           | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                              | 1         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                    | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### SimpleToken_pvm - transfer

- **Total Gas Used:** 420,988
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,553,593,477, proof_size=54,799
- **Weight Consumed:** ref_time=640,061,501 (41.2% of total), proof_size=46,262

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,794     | 2          | 239,714,805 | 20,514     | 37.5%         | 44.3%           |
| Crypto             | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 2.4%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 2.1%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### simple_token_ink - transfer

- **Total Gas Used:** 484,597
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=2,014,056,979, proof_size=77,458
- **Weight Consumed:** ref_time=1,100,525,003 (54.6% of total), proof_size=68,921

| Category           | Opcodes Used             | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Other              | get_storage, set_storage | 4,794     | 2          | 239,739,317 | 20,546     | 21.8%         | 29.8%           |
| Events/Logs        | deposit_event            | 275       | 1          | 13,751,564  | 0          | 1.2%          | 0.0%            |
| Calldata           | call_data_copy           | 46        | 1          | 2,347,968   | 0          | 0.2%          | 0.0%            |
| Return             | seal_return              | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                   | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred        | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### simple_token_no_alloc_rust - transfer

- **Total Gas Used:** 473,959
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,562,119,638, proof_size=53,957
- **Weight Consumed:** ref_time=648,587,662 (41.5% of total), proof_size=45,420

| Category           | Opcodes Used                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Other              | get_storage, set_storage       | 57,594    | 2          | 239,705,813 | 20,514     | 37.0%         | 45.2%           |
| Crypto             | hash_keccak_256                | 305       | 1          | 15,219,717  | 0          | 2.3%          | 0.0%            |
| Events/Logs        | deposit_event                  | 275       | 1          | 13,751,564  | 0          | 2.1%          | 0.0%            |
| Calldata           | call_data_copy, call_data_size | 17        | 2          | 834,260     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller                         | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |


### Store_evm - delegate

- **Total Gas Used:** 830,738
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=2,441,077,415, proof_size=132,037
- **Weight Consumed:** ref_time=1,526,756,511 (62.5% of total), proof_size=123,308

| Category           | Opcodes Used                                                                                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                  | 57,595    | 2          | 239,765,013 | 20,546     | 15.7%         | 16.7%           |
| Events/Logs        | LOG3                                                                                                                                           | 613       | 1          | 30,607,500  | 0          | 2.0%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                      | 303       | 1          | 15,131,142  | 0          | 1.0%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 19        | 22         | 977,920     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                              | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 11        | 3          | 566,821     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                      | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                          | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                         | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, MUL, SUB                                                                                                                                  | 2         | 3          | 168,080     | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                  | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - delegate

- **Total Gas Used:** 838,938
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=2,851,088,282, proof_size=205,851
- **Weight Consumed:** ref_time=1,936,767,378 (67.9% of total), proof_size=197,122

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 57,594    | 2          | 239,714,805 | 20,514     | 12.4%         | 10.4%           |
| Events/Logs        | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 1.6%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 303       | 1          | 15,131,142  | 0          | 0.8%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 23        | 3          | 1,170,367   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Store_evm - delete_

- **Total Gas Used:** 290,851
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=2,406,744,408, proof_size=121,780
- **Weight Consumed:** ref_time=1,492,817,968 (62.0% of total), proof_size=113,147

| Category           | Opcodes Used                                                                                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                  | 4,795     | 2          | 239,771,541 | 20,578     | 16.1%         | 18.2%           |
| Events/Logs        | LOG2                                                                                                                                           | 612       | 1          | 30,607,500  | 0          | 2.1%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                      | 302       | 1          | 15,124,056  | 0          | 1.0%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 19        | 22         | 977,920     | 0          | 0.1%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 11        | 3          | 566,415     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                      | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                          | 7         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, SHL, SHR                                                                                                                             | 2         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                       | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                  | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - delete_

- **Total Gas Used:** 297,974
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=2,762,903,265, proof_size=196,271
- **Weight Consumed:** ref_time=1,848,976,825 (66.9% of total), proof_size=187,638

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,838     | 2          | 241,944,269 | 20,675     | 13.1%         | 11.0%           |
| Events/Logs        | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 1.7%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 303       | 1          | 15,124,056  | 0          | 0.8%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 23        | 3          | 1,170,141   | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Store_evm - deleteFor

- **Total Gas Used:** 360,191
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=2,873,724,363, proof_size=173,315
- **Weight Consumed:** ref_time=1,959,428,113 (68.2% of total), proof_size=164,592

| Category           | Opcodes Used                                                                                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                  | 4,796     | 2          | 239,771,541 | 20,578     | 12.2%         | 12.5%           |
| Events/Logs        | LOG2                                                                                                                                           | 612       | 1          | 30,607,500  | 0          | 1.6%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                      | 303       | 1          | 15,152,400  | 0          | 0.8%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 20        | 22         | 977,920     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                       | 12        | 3          | 568,039     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                      | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                          | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                   | 6         | 6          | 275,040     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                        | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, MUL, SUB                                                                                                                                  | 3         | 3          | 168,080     | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                         | 3         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - deleteFor

- **Total Gas Used:** 380,539
- **Base Call Weight:** ref_time=914,296,250, proof_size=8,723
- **Total Weight:** ref_time=3,891,123,016, proof_size=247,806
- **Weight Consumed:** ref_time=2,976,826,766 (76.5% of total), proof_size=239,083

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,840     | 2          | 241,944,269 | 20,675     | 8.1%          | 8.6%            |
| Events/Logs        | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 1.0%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 303       | 1          | 15,152,400  | 0          | 0.5%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,171,045   | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Store_evm - deploy

- **Total Gas Used:** 23,018,246
- **Base Call Weight:** ref_time=1,641,459,859, proof_size=6,934
- **Total Weight:** ref_time=1,644,464,286, proof_size=6,934
- **Weight Consumed:** ref_time=3,004,427 (0.2% of total), proof_size=0

| Category     | Opcodes Used                          | Total Gas | Call Count | ref time  | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------- | --------- | ---------- | --------- | ---------- | ------------- | --------------- |
| Code         | CODECOPY                              | 41        | 1          | 2,074,227 | 0          | 69.0%         | 0.0%            |
| Ether/Gas    | CALLVALUE                             | 6         | 1          | 319,000   | 0          | 10.6%         | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, PUSH1, PUSH2, SWAP1 | 6         | 6          | 275,040   | 0          | 9.2%          | 0.0%            |
| Control Flow | JUMPI                                 | 3         | 1          | 152,800   | 0          | 5.1%          | 0.0%            |
| Memory       | MSTORE                                | 1         | 1          | 45,840    | 0          | 1.5%          | 0.0%            |
| Return       | RETURN                                | 0         | 1          | 0         | 0          | 0.0%          | 0.0%            |


### Store_pvm - deploy

- **Total Gas Used:** 159,365,160
- **Base Call Weight:** ref_time=2,688,682,105, proof_size=6,934
- **Total Weight:** ref_time=2,699,176,642, proof_size=6,934
- **Weight Consumed:** ref_time=10,494,537 (0.4% of total), proof_size=0

| Category  | Opcodes Used                   | Total Gas | Call Count | ref time | proof size | % of ref time | % of proof size |
| --------- | ------------------------------ | --------- | ---------- | -------- | ---------- | ------------- | --------------- |
| Calldata  | call_data_copy, call_data_size | 17        | 2          | 826,576  | 0          | 7.9%          | 0.0%            |
| Return    | seal_return                    | 10        | 1          | 529,465  | 0          | 5.0%          | 0.0%            |
| Ether/Gas | value_transferred              | 7         | 1          | 319,000  | 0          | 3.0%          | 0.0%            |


### Store_evm - revokeDelegation

- **Total Gas Used:** 311,623
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=2,885,344,586, proof_size=183,642
- **Weight Consumed:** ref_time=1,971,023,682 (68.3% of total), proof_size=174,913

| Category           | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                | 4,796     | 2          | 239,771,541 | 20,578     | 12.2%         | 11.8%           |
| Events/Logs        | LOG3                                                                                                                                                         | 612       | 1          | 30,607,500  | 0          | 1.6%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                    | 303       | 1          | 15,131,142  | 0          | 0.8%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 20        | 24         | 1,069,600   | 0          | 0.1%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                     | 11        | 3          | 566,821     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                                                       | 9         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                    | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                       | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, MUL, SUB                                                                                                                                                | 3         | 3          | 168,080     | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - revokeDelegation

- **Total Gas Used:** 320,850
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=3,346,708,551, proof_size=258,133
- **Weight Consumed:** ref_time=2,432,387,647 (72.7% of total), proof_size=249,404

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,838     | 2          | 241,944,269 | 20,675     | 9.9%          | 8.3%            |
| Events/Logs        | deposit_event                                  | 612       | 1          | 30,607,500  | 0          | 1.3%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 303       | 1          | 15,131,142  | 0          | 0.6%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 23        | 3          | 1,170,367   | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                         | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Store_evm - set

- **Total Gas Used:** 780,966
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=2,592,481,677, proof_size=142,326
- **Weight Consumed:** ref_time=1,678,160,773 (64.7% of total), proof_size=133,597

| Category           | Opcodes Used                                                                                                                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                | 4,797     | 2          | 239,789,525 | 20,578     | 14.3%         | 15.4%           |
| Events/Logs        | LOG2                                                                                                                                                                                         | 781       | 1          | 39,035,468  | 0          | 2.3%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                    | 302       | 1          | 15,106,341  | 0          | 0.9%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP11, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 26        | 28         | 1,252,960   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                            | 14        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                     | 11        | 3          | 566,415     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                    | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                        | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                                                       | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                      | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                                                     | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                                                | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - set

- **Total Gas Used:** 787,078
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=2,898,095,084, proof_size=216,301
- **Weight Consumed:** ref_time=1,983,774,180 (68.5% of total), proof_size=207,572

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,796     | 2          | 239,789,525 | 20,578     | 12.1%         | 9.9%            |
| Events/Logs        | deposit_event                                  | 781       | 1          | 39,035,468  | 0          | 2.0%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 302       | 1          | 15,106,341  | 0          | 0.8%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 22        | 3          | 1,170,141   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Store_evm - set_update

- **Total Gas Used:** 552,268
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=1,717,563,444, proof_size=70,463
- **Weight Consumed:** ref_time=803,242,540 (46.8% of total), proof_size=61,734

| Category           | Opcodes Used                                                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                    | 4,795     | 2          | 239,789,525 | 20,578     | 29.9%         | 33.3%           |
| Events/Logs        | LOG2                                                                                                                                             | 780       | 1          | 39,035,468  | 0          | 4.9%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                        | 302       | 1          | 15,124,056  | 0          | 1.9%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 21        | 22         | 977,920     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                         | 11        | 3          | 566,415     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                        | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                            | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                           | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                          | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                         | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                    | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - set_update

- **Total Gas Used:** 556,619
- **Base Call Weight:** ref_time=914,320,904, proof_size=8,729
- **Total Weight:** ref_time=1,935,125,379, proof_size=144,469
- **Weight Consumed:** ref_time=1,020,804,475 (52.8% of total), proof_size=135,740

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,795     | 2          | 239,789,525 | 20,578     | 23.5%         | 15.2%           |
| Events/Logs        | deposit_event                                  | 781       | 1          | 39,035,468  | 0          | 3.8%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 303       | 1          | 15,124,056  | 0          | 1.5%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 23        | 3          | 1,170,141   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                                    | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### Store_evm - setFor

- **Total Gas Used:** 852,492
- **Base Call Weight:** ref_time=914,703,041, proof_size=8,822
- **Total Weight:** ref_time=3,068,765,383, proof_size=193,864
- **Weight Consumed:** ref_time=2,154,062,342 (70.2% of total), proof_size=185,042

| Category           | Opcodes Used                                                                                                                                                                                       | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                                                      | 4,795     | 2          | 239,789,525 | 20,578     | 11.1%         | 11.1%           |
| Events/Logs        | LOG2                                                                                                                                                                                               | 780       | 1          | 39,035,468  | 0          | 1.8%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                                                          | 302       | 1          | 15,106,341  | 0          | 0.7%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP11, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, PUSH9, SWAP1, SWAP11, SWAP12, SWAP13, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7, SWAP8 | 28        | 29         | 1,298,800   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                                                  | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATACOPY, CALLDATALOAD, CALLDATASIZE                                                                                                                                                           | 11        | 3          | 568,039     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                                                          | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                                                              | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, BYTE, NOT, OR, SHL, SHR                                                                                                                                                                       | 6         | 6          | 275,040     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                                                            | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, MUL, SUB                                                                                                                                                                                      | 4         | 3          | 168,080     | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE, MSTORE8                                                                                                                                                                             | 3         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### Store_pvm - setFor

- **Total Gas Used:** 871,590
- **Base Call Weight:** ref_time=914,703,041, proof_size=8,822
- **Total Weight:** ref_time=4,023,708,706, proof_size=267,839
- **Weight Consumed:** ref_time=3,109,005,665 (77.3% of total), proof_size=259,017

| Category           | Opcodes Used                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear      | 4,796     | 2          | 239,789,525 | 20,578     | 7.7%          | 7.9%            |
| Events/Logs        | deposit_event                                  | 781       | 1          | 39,035,468  | 0          | 1.3%          | 0.0%            |
| Crypto             | hash_keccak_256                                | 302       | 1          | 15,106,341  | 0          | 0.5%          | 0.0%            |
| Calldata           | call_data_copy, call_data_load, call_data_size | 24        | 3          | 1,171,045   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller, now                                    | 16        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                                    | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                              | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - approve

- **Total Gas Used:** 468,863
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,307,343,252, proof_size=39,372
- **Weight Consumed:** ref_time=393,811,276 (30.1% of total), proof_size=30,835

| Category           | Opcodes Used                                                                   | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                  | 57,596    | 2          | 239,765,013 | 20,546     | 60.9%         | 66.6%           |
| Crypto             | KECCAK256                                                                      | 304       | 1          | 15,219,717  | 0          | 3.9%          | 0.0%            |
| Events/Logs        | LOG3                                                                           | 275       | 1          | 13,751,564  | 0          | 3.5%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 11        | 12         | 519,520     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                         | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                      | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                          | 6         | 3          | 290,320     | 0          | 0.1%          | 0.0%            |
| Bitwise            | AND, NOT, SHL, SHR                                                             | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                                            | 3         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                       | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                  | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                     | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                           | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - approve

- **Total Gas Used:** 472,260
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,477,175,992, proof_size=93,927
- **Weight Consumed:** ref_time=563,644,016 (38.2% of total), proof_size=85,390

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 42.5%         | 24.0%           |
| Crypto             | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 2.7%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 2.4%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### TetherToken_evm - deploy

- **Total Gas Used:** 19,259,060
- **Base Call Weight:** ref_time=1,610,425,073, proof_size=6,934
- **Total Weight:** ref_time=3,536,168,883, proof_size=150,692
- **Weight Consumed:** ref_time=1,925,743,810 (54.5% of total), proof_size=143,758

| Category           | Opcodes Used                                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                | 4,795     | 2          | 239,747,029 | 20,546     | 12.4%         | 14.3%           |
| Crypto             | KECCAK256                                                                                                    | 304       | 1          | 15,219,717  | 0          | 0.8%          | 0.0%            |
| Code               | CODECOPY, CODESIZE                                                                                           | 29        | 2          | 1,455,796   | 0          | 0.1%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 16        | 17         | 748,720     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                       | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                    | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                        | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                       | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                      | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Memory             | MCOPY, MLOAD, MSTORE                                                                                         | 3         | 3          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                     | 0         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - deploy

- **Total Gas Used:** 120,289,708
- **Base Call Weight:** ref_time=2,382,032,403, proof_size=6,934
- **Total Weight:** ref_time=4,547,576,316, proof_size=150,951
- **Weight Consumed:** ref_time=2,165,543,913 (47.6% of total), proof_size=144,017

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,838     | 2          | 241,894,061 | 20,643     | 11.2%         | 14.3%           |
| Crypto             | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 0.7%          | 0.0%            |
| Calldata           | call_data_copy, call_data_size            | 17        | 2          | 826,576     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - transfer

- **Total Gas Used:** 479,729
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,850,629,890, proof_size=101,106
- **Weight Consumed:** ref_time=937,097,914 (50.6% of total), proof_size=92,569

| Category           | Opcodes Used                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                              | 57,596    | 2          | 239,765,013 | 20,546     | 25.6%         | 22.2%           |
| Crypto             | KECCAK256                                                                                  | 304       | 1          | 15,219,717  | 0          | 1.6%          | 0.0%            |
| Events/Logs        | LOG3                                                                                       | 275       | 1          | 13,751,564  | 0          | 1.5%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 13        | 14         | 611,200     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                     | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                  | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                      | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, DIV, MUL, SUB                                                                         | 5         | 4          | 244,480     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                    | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, SHL, SHR                                                                         | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                              | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                 | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - transfer

- **Total Gas Used:** 483,823
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=2,055,338,108, proof_size=155,565
- **Weight Consumed:** ref_time=1,141,806,132 (55.6% of total), proof_size=147,028

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 21.0%         | 14.0%           |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 1.3%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 1.2%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### TetherToken_evm - transferFrom

- **Total Gas Used:** 492,935
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=2,150,947,725, proof_size=121,806
- **Weight Consumed:** ref_time=1,237,045,939 (57.5% of total), proof_size=113,179

| Category           | Opcodes Used                                                                                                               | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                              | 4,796     | 2          | 239,789,525 | 20,578     | 19.4%         | 18.2%           |
| Crypto             | KECCAK256                                                                                                                  | 304       | 1          | 15,219,717  | 0          | 1.2%          | 0.0%            |
| Events/Logs        | LOG3                                                                                                                       | 275       | 1          | 13,751,564  | 0          | 1.1%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 17        | 19         | 840,400     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                     | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                  | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                      | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, DIV, MUL, SUB                                                                                                         | 6         | 4          | 244,480     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                    | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, SHL, SHR                                                                                                         | 3         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                              | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                 | 1         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### TetherToken_pvm - transferFrom

- **Total Gas Used:** 498,231
- **Base Call Weight:** ref_time=913,901,786, proof_size=8,627
- **Total Weight:** ref_time=2,415,750,101, proof_size=176,297
- **Weight Consumed:** ref_time=1,501,848,315 (62.2% of total), proof_size=167,670

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,797     | 2          | 239,789,525 | 20,578     | 16.0%         | 12.3%           |
| Crypto             | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 1.0%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 0.9%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - buyTicket

- **Total Gas Used:** 813,540
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=6,001,201,862, proof_size=398,319
- **Weight Consumed:** ref_time=5,088,076,677 (84.8% of total), proof_size=389,881

| Category           | Opcodes Used                                                                                                                                                    | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Return             | RETURN, STOP                                                                                                                                                    | 10        | 2          | 1,731,754,592 | 129,030    | 34.0%         | 33.1%           |
| Calls              | CALL                                                                                                                                                            | 0         | 1          | 568,758,635   | 61,734     | 11.2%         | 15.8%           |
| Storage            | SLOAD, SSTORE                                                                                                                                                   | 4,796     | 2          | 239,789,525   | 20,578     | 4.7%          | 5.3%            |
| Code               | EXTCODESIZE                                                                                                                                                     | 1,283     | 1          | 64,148,000    | 4,010      | 1.3%          | 1.0%            |
| Events/Logs        | LOG3, LOG4                                                                                                                                                      | 887       | 2          | 44,359,064    | 0          | 0.9%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                       | 304       | 1          | 15,219,717    | 0          | 0.3%          | 0.0%            |
| Ether/Gas          | CALLVALUE, GAS                                                                                                                                                  | 46        | 2          | 2,248,000     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | ADDRESS, CALLER, TIMESTAMP                                                                                                                                      | 22        | 3          | 1,099,000     | 0          | 0.0%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, POP, PUSH0, PUSH1, PUSH11, PUSH12, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 23        | 24         | 1,069,600     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                           | 6         | 3          | 290,320       | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                          | 3         | 5          | 229,200       | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                         | 4         | 5          | 229,200       | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                        | 2         | 2          | 91,680        | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                   | 2         | 2          | 91,680        | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                      | 2         | 2          | 76,400        | 0          | 0.0%          | 0.0%            |
| Return Data        | RETURNDATASIZE                                                                                                                                                  | 0         | 1          | 30,560        | 0          | 0.0%          | 0.0%            |


### W3S_pvm - buyTicket

- **Total Gas Used:** 830,145
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=6,831,420,669, proof_size=526,823
- **Weight Consumed:** ref_time=5,918,295,484 (86.6% of total), proof_size=518,385

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls              | call_evm                                  | 0         | 1          | 669,822,611 | 61,702     | 11.3%         | 11.9%           |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,795     | 2          | 239,739,317 | 20,546     | 4.1%          | 4.0%            |
| Code               | code_size                                 | 1,283     | 1          | 64,148,000  | 4,010      | 1.1%          | 0.8%            |
| Events/Logs        | deposit_event                             | 781       | 1          | 39,035,468  | 0          | 0.7%          | 0.0%            |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 0.3%          | 0.0%            |
| Ether/Gas          | ref_time_left, value_transferred          | 44        | 2          | 2,248,000   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | address, caller, now                      | 22        | 3          | 1,099,000   | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Return Data        | return_data_size                          | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - checkIn

- **Total Gas Used:** 384,337
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=3,221,058,446, proof_size=188,907
- **Weight Consumed:** ref_time=2,307,957,915 (71.7% of total), proof_size=180,475

| Category           | Opcodes Used                                                                                                                                     | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Calls              | CALL                                                                                                                                             | 0         | 1          | 1,226,090,941 | 123,436    | 53.1%         | 68.4%           |
| Storage            | SLOAD, SSTORE                                                                                                                                    | 4,797     | 2          | 239,789,525   | 20,578     | 10.4%         | 11.4%           |
| Events/Logs        | LOG3, LOG4                                                                                                                                       | 887       | 2          | 44,359,064    | 0          | 1.9%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                        | 305       | 1          | 15,219,717    | 0          | 0.7%          | 0.0%            |
| Ether/Gas          | CALLVALUE, GAS                                                                                                                                   | 45        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Stack              | DUP1, DUP10, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6 | 20        | 22         | 977,920       | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Code               | CODECOPY                                                                                                                                         | 10        | 1          | 495,496       | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                            | 5         | 3          | 290,320       | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                           | 5         | 5          | 229,200       | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                          | 5         | 5          | 229,200       | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                         | 2         | 2          | 91,680        | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                    | 2         | 2          | 91,680        | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                       | 1         | 2          | 76,400        | 0          | 0.0%          | 0.0%            |
| Return Data        | RETURNDATASIZE                                                                                                                                   | 0         | 1          | 30,560        | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                           | 0         | 1          | 0             | 0          | 0.0%          | 0.0%            |


### W3S_pvm - checkIn

- **Total Gas Used:** 394,304
- **Base Call Weight:** ref_time=913,100,531, proof_size=8,432
- **Total Weight:** ref_time=3,719,370,922, proof_size=317,086
- **Weight Consumed:** ref_time=2,806,270,391 (75.5% of total), proof_size=308,654

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time      | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ------------- | ---------- | ------------- | --------------- |
| Calls              | call_evm                                  | 0         | 1          | 1,368,526,220 | 123,404    | 48.8%         | 40.0%           |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,795     | 2          | 239,789,525   | 20,578     | 8.5%          | 6.7%            |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717    | 0          | 0.5%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564    | 0          | 0.5%          | 0.0%            |
| Ether/Gas          | ref_time_left, value_transferred          | 45        | 2          | 2,248,000     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000       | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000       | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465       | 0          | 0.0%          | 0.0%            |
| Return Data        | return_data_size                          | 6         | 1          | 319,000       | 0          | 0.0%          | 0.0%            |


### W3S_evm - configurePaymentToken

- **Total Gas Used:** 654,814
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=2,124,896,438, proof_size=111,427
- **Weight Consumed:** ref_time=1,210,969,998 (57.0% of total), proof_size=102,794

| Category           | Opcodes Used                                                                                                                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                | 57,595    | 2          | 239,765,013 | 20,546     | 19.8%         | 20.0%           |
| Events/Logs        | LOG2                                                                                                                                                         | 444       | 1          | 22,179,532  | 0          | 1.8%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                    | 303       | 1          | 15,106,341  | 0          | 1.2%          | 0.0%            |
| Stack              | DUP1, DUP11, DUP12, DUP2, DUP3, DUP4, DUP5, DUP6, DUP7, DUP8, DUP9, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5 | 22        | 24         | 1,069,600   | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                                                                                       | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                    | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                        | 5         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                       | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                      | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                     | 0         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                   | 1         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                                                                                       | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - configurePaymentToken

- **Total Gas Used:** 661,451
- **Base Call Weight:** ref_time=913,926,440, proof_size=8,633
- **Total Weight:** ref_time=2,456,721,528, proof_size=216,063
- **Weight Consumed:** ref_time=1,542,795,088 (62.8% of total), proof_size=207,430

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 15.5%         | 9.9%            |
| Events/Logs        | deposit_event                             | 444       | 1          | 22,179,532  | 0          | 1.4%          | 0.0%            |
| Crypto             | hash_keccak_256                           | 303       | 1          | 15,106,341  | 0          | 1.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - deploy

- **Total Gas Used:** 32,855,794
- **Base Call Weight:** ref_time=1,715,303,975, proof_size=6,934
- **Total Weight:** ref_time=3,082,909,961, proof_size=119,953
- **Weight Consumed:** ref_time=1,367,605,986 (44.4% of total), proof_size=113,019

| Category           | Opcodes Used                                                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | --------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                       | 57,595    | 2          | 239,765,013 | 20,546     | 17.5%         | 18.2%           |
| Crypto             | KECCAK256                                                                                           | 304       | 1          | 15,219,717  | 0          | 1.1%          | 0.0%            |
| Events/Logs        | LOG4                                                                                                | 107       | 1          | 5,323,596   | 0          | 0.4%          | 0.0%            |
| Code               | CODECOPY                                                                                            | 56        | 1          | 2,787,366   | 0          | 0.2%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH16, PUSH2, PUSH3, PUSH32, SWAP1, SWAP2, SWAP3, SWAP4 | 10        | 15         | 657,040     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                              | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                           | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                               | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                              | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT                                                                                  | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                            | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                       | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                              | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - deploy

- **Total Gas Used:** 222,969,481
- **Base Call Weight:** ref_time=3,174,951,781, proof_size=6,934
- **Total Weight:** ref_time=4,837,224,432, proof_size=119,761
- **Weight Consumed:** ref_time=1,662,272,651 (34.4% of total), proof_size=112,827

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,595    | 2          | 239,714,805 | 20,514     | 14.4%         | 18.2%           |
| Crypto             | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 0.9%          | 0.0%            |
| Events/Logs        | deposit_event                             | 107       | 1          | 5,323,596   | 0          | 0.3%          | 0.0%            |
| Calldata           | call_data_copy, call_data_size            | 17        | 2          | 826,576     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - grantVolunteerRole

- **Total Gas Used:** 403,832
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,355,801,483, proof_size=49,562
- **Weight Consumed:** ref_time=442,676,298 (32.7% of total), proof_size=41,124

| Category           | Opcodes Used                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                             | 57,596    | 2          | 239,765,013 | 20,546     | 54.2%         | 50.0%           |
| Crypto             | KECCAK256                                                                 | 305       | 1          | 15,219,717  | 0          | 3.4%          | 0.0%            |
| Events/Logs        | LOG4                                                                      | 106       | 1          | 5,323,596   | 0          | 1.2%          | 0.0%            |
| Code               | CODECOPY                                                                  | 10        | 1          | 495,496     | 0          | 0.1%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 11        | 11         | 488,960     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                 | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                     | 6         | 3          | 290,320     | 0          | 0.1%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                    | 4         | 5          | 229,200     | 0          | 0.1%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                                       | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                  | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                             | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - grantVolunteerRole

- **Total Gas Used:** 409,816
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,655,007,653, proof_size=154,230
- **Weight Consumed:** ref_time=741,882,468 (44.8% of total), proof_size=145,792

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 32.3%         | 14.1%           |
| Crypto             | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 2.1%          | 0.0%            |
| Events/Logs        | deposit_event                             | 107       | 1          | 5,323,596   | 0          | 0.7%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - pauseSales

- **Total Gas Used:** 338,051
- **Base Call Weight:** ref_time=912,730,721, proof_size=8,342
- **Total Weight:** ref_time=1,266,722,266, proof_size=39,177
- **Weight Consumed:** ref_time=353,991,545 (27.9% of total), proof_size=30,835

| Category           | Opcodes Used                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                | 57,595    | 2          | 239,765,013 | 20,546     | 67.7%         | 66.6%           |
| Crypto             | KECCAK256                                                    | 304       | 1          | 15,219,717  | 0          | 4.3%          | 0.0%            |
| Events/Logs        | LOG1                                                         | 275       | 1          | 13,751,564  | 0          | 3.9%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                            | 15        | 2          | 750,000     | 0          | 0.2%          | 0.0%            |
| Stack              | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1 | 7         | 9          | 397,280     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                    | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                        | 6         | 3          | 290,320     | 0          | 0.1%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHR                                            | 4         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                          | 4         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                   | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD                                                          | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - pauseSales

- **Total Gas Used:** 342,407
- **Base Call Weight:** ref_time=912,730,721, proof_size=8,342
- **Total Weight:** ref_time=1,484,515,464, proof_size=143,877
- **Weight Consumed:** ref_time=571,784,743 (38.5% of total), proof_size=135,535

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 41.9%         | 15.1%           |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 2.7%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 2.4%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### W3S_evm - redeemTicketStaff

- **Total Gas Used:** 846,571
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=4,552,728,721, proof_size=300,281
- **Weight Consumed:** ref_time=3,639,221,399 (79.9% of total), proof_size=291,750

| Category           | Opcodes Used                                                                                                                                                     | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                                                                                                    | 4,795     | 2          | 239,747,029 | 20,546     | 6.6%          | 7.0%            |
| Code               | EXTCODESIZE                                                                                                                                                      | 1,283     | 1          | 64,148,000  | 4,010      | 1.8%          | 1.4%            |
| Events/Logs        | LOG3, LOG4                                                                                                                                                       | 550       | 2          | 27,503,128  | 0          | 0.8%          | 0.0%            |
| Crypto             | KECCAK256                                                                                                                                                        | 304       | 1          | 15,219,717  | 0          | 0.4%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, DUP8, POP, PUSH0, PUSH1, PUSH11, PUSH12, PUSH2, PUSH3, PUSH32, PUSH4, PUSH8, SWAP1, SWAP2, SWAP3, SWAP4, SWAP5, SWAP6, SWAP7 | 22        | 24         | 1,069,600   | 0          | 0.0%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                                                                                                | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                                                                                        | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                                                                                            | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                                                                                           | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT, SLT                                                                                                                                          | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                                                                                         | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                                                                                                    | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                                                                                       | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                                                                                             | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - redeemTicketStaff

- **Total Gas Used:** 859,683
- **Base Call Weight:** ref_time=913,507,322, proof_size=8,531
- **Total Weight:** ref_time=5,208,320,258, proof_size=405,209
- **Weight Consumed:** ref_time=4,294,812,936 (82.5% of total), proof_size=396,678

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,837     | 2          | 241,894,061 | 20,643     | 5.6%          | 5.2%            |
| Code               | code_size                                 | 1,283     | 1          | 64,148,000  | 4,010      | 1.5%          | 1.0%            |
| Events/Logs        | deposit_event                             | 444       | 1          | 22,179,532  | 0          | 0.5%          | 0.0%            |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 0.4%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.0%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - revokeVolunteerRole

- **Total Gas Used:** 298,393
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,363,830,011, proof_size=49,594
- **Weight Consumed:** ref_time=450,704,826 (33.0% of total), proof_size=41,156

| Category           | Opcodes Used                                                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                             | 4,795     | 2          | 239,771,541 | 20,578     | 53.2%         | 50.0%           |
| Crypto             | KECCAK256                                                                 | 305       | 1          | 15,219,717  | 0          | 3.4%          | 0.0%            |
| Events/Logs        | LOG4                                                                      | 107       | 1          | 5,323,596   | 0          | 1.2%          | 0.0%            |
| Code               | CODECOPY                                                                  | 10        | 1          | 495,496     | 0          | 0.1%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 9         | 11         | 488,960     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                 | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                     | 5         | 3          | 290,320     | 0          | 0.1%          | 0.0%            |
| Bitwise            | AND, NOT, SHL, SHR                                                        | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                                       | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                  | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                             | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - revokeVolunteerRole

- **Total Gas Used:** 304,240
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,656,204,265, proof_size=154,423
- **Weight Consumed:** ref_time=743,079,080 (44.9% of total), proof_size=145,985

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,839     | 2          | 241,944,269 | 20,675     | 32.6%         | 14.2%           |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 2.0%          | 0.0%            |
| Events/Logs        | deposit_event                             | 107       | 1          | 5,323,596   | 0          | 0.7%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### W3S_evm - setMerkleRoot

- **Total Gas Used:** 414,027
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,205,527,762, proof_size=29,115
- **Weight Consumed:** ref_time=291,995,786 (24.2% of total), proof_size=20,578

| Category           | Opcodes Used                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                        | 4,795     | 2          | 239,789,525 | 20,578     | 82.1%         | 100.0%          |
| Events/Logs        | LOG2                                                                                 | 443       | 1          | 22,179,532  | 0          | 7.6%          | 0.0%            |
| Crypto             | KECCAK256                                                                            | 305       | 1          | 15,219,717  | 0          | 5.2%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                                    | 15        | 2          | 750,000     | 0          | 0.3%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1, SWAP2 | 11        | 13         | 565,360     | 0          | 0.2%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                            | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                | 6         | 3          | 290,320     | 0          | 0.1%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                                                  | 4         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Bitwise            | AND, NOT, SHR                                                                        | 3         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                             | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                        | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                           | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                                 | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - setMerkleRoot

- **Total Gas Used:** 418,592
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,433,797,772, proof_size=133,847
- **Weight Consumed:** ref_time=520,265,796 (36.3% of total), proof_size=125,310

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,795     | 2          | 239,789,525 | 20,578     | 46.1%         | 16.4%           |
| Events/Logs        | deposit_event                             | 443       | 1          | 22,179,532  | 0          | 4.3%          | 0.0%            |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 2.9%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### W3S_evm - unpauseSales

- **Total Gas Used:** 232,511
- **Base Call Weight:** ref_time=912,730,721, proof_size=8,342
- **Total Weight:** ref_time=1,269,754,234, proof_size=39,209
- **Weight Consumed:** ref_time=357,023,513 (28.1% of total), proof_size=30,867

| Category           | Opcodes Used                                                      | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                     | 4,795     | 2          | 239,771,541 | 20,578     | 67.2%         | 66.7%           |
| Crypto             | KECCAK256                                                         | 305       | 1          | 15,219,717  | 0          | 4.3%          | 0.0%            |
| Events/Logs        | LOG1                                                              | 275       | 1          | 13,751,564  | 0          | 3.9%          | 0.0%            |
| Context/Blockchain | CALLER, TIMESTAMP                                                 | 15        | 2          | 750,000     | 0          | 0.2%          | 0.0%            |
| Stack              | DUP1, DUP2, POP, PUSH0, PUSH1, PUSH2, PUSH3, PUSH32, PUSH4, SWAP1 | 9         | 10         | 427,840     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                         | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                             | 5         | 3          | 290,320     | 0          | 0.1%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                               | 4         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Bitwise            | AND, NOT, SHR                                                     | 3         | 3          | 137,520     | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                     | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                        | 2         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD                                                               | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                            | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### W3S_pvm - unpauseSales

- **Total Gas Used:** 236,866
- **Base Call Weight:** ref_time=912,730,721, proof_size=8,342
- **Total Weight:** ref_time=1,487,483,378, proof_size=144,038
- **Weight Consumed:** ref_time=574,752,657 (38.6% of total), proof_size=135,696

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,838     | 2          | 241,944,269 | 20,675     | 42.1%         | 15.2%           |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 2.6%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 2.4%          | 0.0%            |
| Context/Blockchain | caller, now                               | 15        | 2          | 750,000     | 0          | 0.1%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### WETH9_evm - deploy

- **Total Gas Used:** 11,173,586
- **Base Call Weight:** ref_time=1,549,305,061, proof_size=6,934
- **Total Weight:** ref_time=2,275,464,063, proof_size=68,572
- **Weight Consumed:** ref_time=726,159,002 (31.9% of total), proof_size=61,638

| Category     | Opcodes Used                                                                         | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------ | ------------------------------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage      | SLOAD, SSTORE                                                                        | 57,595    | 2          | 239,765,013 | 20,546     | 33.0%         | 33.3%           |
| Code         | CODECOPY                                                                             | 17        | 1          | 830,243     | 0          | 0.1%          | 0.0%            |
| Stack        | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP3 | 11        | 13         | 565,360     | 0          | 0.1%          | 0.0%            |
| Ether/Gas    | CALLVALUE                                                                            | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow | JUMP, JUMPDEST, JUMPI                                                                | 7         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise      | AND, NOT, OR, SHL, SHR                                                               | 5         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison   | EQ, GT, ISZERO, LT                                                                   | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Memory       | MLOAD, MSTORE                                                                        | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Arithmetic   | ADD                                                                                  | 0         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return       | RETURN                                                                               | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - deploy

- **Total Gas Used:** 42,487,966
- **Base Call Weight:** ref_time=1,789,607,045, proof_size=6,934
- **Total Weight:** ref_time=2,549,508,821, proof_size=68,476
- **Weight Consumed:** ref_time=759,901,776 (29.8% of total), proof_size=61,542

| Category  | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| --------- | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage   | get_storage_or_zero, set_storage_or_clear | 57,595    | 2          | 239,714,805 | 20,514     | 31.5%         | 33.3%           |
| Calldata  | call_data_copy, call_data_size            | 17        | 2          | 826,576     | 0          | 0.1%          | 0.0%            |
| Return    | seal_return                               | 11        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Ether/Gas | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### WETH9_evm - deposit

- **Total Gas Used:** 352,490
- **Base Call Weight:** ref_time=912,829,337, proof_size=8,366
- **Total Weight:** ref_time=1,188,709,997, proof_size=28,912
- **Weight Consumed:** ref_time=275,880,660 (23.2% of total), proof_size=20,546

| Category           | Opcodes Used                                                 | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------ | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                | 57,595    | 2          | 239,765,013 | 20,546     | 86.9%         | 100.0%          |
| Crypto             | KECCAK256                                                    | 305       | 1          | 15,219,717  | 0          | 5.5%          | 0.0%            |
| Events/Logs        | LOG2                                                         | 275       | 1          | 13,751,564  | 0          | 5.0%          | 0.0%            |
| Context/Blockchain | CALLER                                                       | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Stack              | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3 | 8         | 9          | 397,280     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                    | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                        | 6         | 3          | 290,320     | 0          | 0.1%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                          | 4         | 4          | 183,360     | 0          | 0.1%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Bitwise            | NOT, SHR                                                     | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                   | 1         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD                                                          | 1         | 1          | 45,840      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                         | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - deposit

- **Total Gas Used:** 353,907
- **Base Call Weight:** ref_time=912,829,337, proof_size=8,366
- **Total Weight:** ref_time=1,259,559,054, proof_size=46,076
- **Weight Consumed:** ref_time=346,729,717 (27.5% of total), proof_size=37,710

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 69.1%         | 54.4%           |
| Crypto             | hash_keccak_256                           | 305       | 1          | 15,219,717  | 0          | 4.4%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 4.0%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.2%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 529,465     | 0          | 0.2%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |


### WETH9_evm - transfer

- **Total Gas Used:** 473,368
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,532,612,914, proof_size=59,950
- **Weight Consumed:** ref_time=619,080,938 (40.4% of total), proof_size=51,413

| Category           | Opcodes Used                                                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                               | 57,596    | 2          | 239,765,013 | 20,546     | 38.7%         | 40.0%           |
| Crypto             | KECCAK256                                                                                   | 304       | 1          | 15,219,717  | 0          | 2.5%          | 0.0%            |
| Events/Logs        | LOG3                                                                                        | 275       | 1          | 13,751,564  | 0          | 2.2%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, DUP5, DUP6, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP2, SWAP4 | 13        | 14         | 626,480     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                                                      | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                   | 7         | 1          | 319,000     | 0          | 0.1%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                       | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, SHL, SHR                                                                          | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                                                         | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                    | 0         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                               | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                                                  | 1         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - transfer

- **Total Gas Used:** 475,823
- **Base Call Weight:** ref_time=913,531,976, proof_size=8,537
- **Total Weight:** ref_time=1,655,349,665, proof_size=77,114
- **Weight Consumed:** ref_time=741,817,689 (44.8% of total), proof_size=68,577

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 32.3%         | 29.9%           |
| Crypto             | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 2.1%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 1.9%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 13        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 11        | 1          | 535,865     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### WETH9_evm - withdraw

- **Total Gas Used:** 358,380
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,723,172,873, proof_size=44,899
- **Weight Consumed:** ref_time=810,047,688 (47.0% of total), proof_size=36,461

| Category           | Opcodes Used                                                        | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls              | CALL                                                                | 8,988     | 1          | 449,408,600 | 5,594      | 55.5%         | 15.3%           |
| Storage            | SLOAD, SSTORE                                                       | 4,797     | 2          | 239,789,525 | 20,578     | 29.6%         | 56.4%           |
| Crypto             | KECCAK256                                                           | 304       | 1          | 15,219,717  | 0          | 1.9%          | 0.0%            |
| Events/Logs        | LOG2                                                                | 275       | 1          | 13,751,564  | 0          | 1.7%          | 0.0%            |
| Stack              | DUP1, DUP2, PUSH0, PUSH1, PUSH2, PUSH32, PUSH4, SWAP1, SWAP3, SWAP4 | 8         | 10         | 443,120     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | CALLER                                                              | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                           | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, ISZERO, LT, SLT                                                 | 4         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMPDEST, JUMPI                                                     | 4         | 2          | 168,080     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                            | 1         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                       | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Bitwise            | NOT, SHR                                                            | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Calldata           | CALLDATALOAD, CALLDATASIZE                                          | 1         | 2          | 76,400      | 0          | 0.0%          | 0.0%            |
| Return             | STOP                                                                | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### WETH9_pvm - withdraw

- **Total Gas Used:** 360,207
- **Base Call Weight:** ref_time=913,125,185, proof_size=8,438
- **Total Weight:** ref_time=1,814,531,223, proof_size=62,095
- **Weight Consumed:** ref_time=901,406,038 (49.7% of total), proof_size=53,657

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Calls              | call_evm                                  | 8,999     | 1          | 449,944,465 | 5,594      | 49.9%         | 10.4%           |
| Storage            | get_storage_or_zero, set_storage_or_clear | 4,796     | 2          | 239,789,525 | 20,578     | 26.6%         | 38.4%           |
| Crypto             | hash_keccak_256                           | 304       | 1          | 15,219,717  | 0          | 1.7%          | 0.0%            |
| Events/Logs        | deposit_event                             | 275       | 1          | 13,751,564  | 0          | 1.5%          | 0.0%            |
| Calldata           | call_data_load, call_data_size            | 14        | 2          | 673,000     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | caller                                    | 8         | 1          | 403,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


### XENCrypto_evm - deploy

- **Total Gas Used:** 38,556,123
- **Base Call Weight:** ref_time=1,683,462,063, proof_size=6,934
- **Total Weight:** ref_time=2,350,323,858, proof_size=58,283
- **Weight Consumed:** ref_time=666,861,795 (28.4% of total), proof_size=51,349

| Category           | Opcodes Used                                                                                | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ------------------------------------------------------------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | SLOAD, SSTORE                                                                               | 57,596    | 2          | 239,765,013 | 20,546     | 36.0%         | 40.0%           |
| Code               | CODECOPY                                                                                    | 49        | 1          | 2,450,995   | 0          | 0.4%          | 0.0%            |
| Stack              | DUP1, DUP2, DUP3, DUP4, POP, PUSH0, PUSH1, PUSH10, PUSH2, PUSH3, SWAP1, SWAP2, SWAP3, SWAP4 | 13        | 14         | 611,200     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | TIMESTAMP                                                                                   | 7         | 1          | 347,000     | 0          | 0.1%          | 0.0%            |
| Ether/Gas          | CALLVALUE                                                                                   | 6         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |
| Control Flow       | JUMP, JUMPDEST, JUMPI                                                                       | 6         | 3          | 290,320     | 0          | 0.0%          | 0.0%            |
| Bitwise            | AND, NOT, OR, SHL, SHR                                                                      | 4         | 5          | 229,200     | 0          | 0.0%          | 0.0%            |
| Comparison         | EQ, GT, ISZERO, LT                                                                          | 3         | 4          | 183,360     | 0          | 0.0%          | 0.0%            |
| Arithmetic         | ADD, SUB                                                                                    | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Memory             | MLOAD, MSTORE                                                                               | 2         | 2          | 91,680      | 0          | 0.0%          | 0.0%            |
| Return             | RETURN                                                                                      | 0         | 1          | 0           | 0          | 0.0%          | 0.0%            |


### XENCrypto_pvm - deploy

- **Total Gas Used:** 273,704,905
- **Base Call Weight:** ref_time=3,300,230,397, proof_size=6,934
- **Total Weight:** ref_time=4,190,424,438, proof_size=58,219
- **Weight Consumed:** ref_time=890,194,041 (21.2% of total), proof_size=51,285

| Category           | Opcodes Used                              | Total Gas | Call Count | ref time    | proof size | % of ref time | % of proof size |
| ------------------ | ----------------------------------------- | --------- | ---------- | ----------- | ---------- | ------------- | --------------- |
| Storage            | get_storage_or_zero, set_storage_or_clear | 57,594    | 2          | 239,714,805 | 20,514     | 26.9%         | 40.0%           |
| Immutables         | set_immutable_data                        | 2,049     | 1          | 102,480,992 | 0          | 11.5%         | 0.0%            |
| Calldata           | call_data_copy, call_data_size            | 17        | 2          | 826,576     | 0          | 0.1%          | 0.0%            |
| Return             | seal_return                               | 10        | 1          | 529,465     | 0          | 0.1%          | 0.0%            |
| Context/Blockchain | now                                       | 7         | 1          | 347,000     | 0          | 0.0%          | 0.0%            |
| Ether/Gas          | value_transferred                         | 7         | 1          | 319,000     | 0          | 0.0%          | 0.0%            |


