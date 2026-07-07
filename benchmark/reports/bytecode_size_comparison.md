# Bytecode Size Comparison

Generated on: 2026-06-16

### Benchmark Environment

- **Chain:** Development | **Runtime:** revive-dev-runtime@0 | **Node:** Substrate Node 0.0.0-20311a9465b | **resolc:** 1.2.0+commit.9b22bcd | **solc:** 0.8.30+commit.73712a01

## Fibonacci Implementations

| Contract                 | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------------ | ------- | --------- | ------------ | ----------- |
| Fibonacci_evm            | EVM     | solidity  | 229          | -           |
| fibonacci_u32_macro_rust | PVM     |           | 605          | +164.2%     |
| fibonacci_u32_dsl_rust   | PVM     |           | 647          | +182.5%     |
| Fibonacci_pvm            | PVM     | solidity  | 1,136        | +396.1%     |


## Fibonacci_u256 Implementations

| Contract                | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ----------------------- | ------- | --------- | ------------ | ----------- |
| Fibonacci_u256_iter_evm | EVM     | solidity  | 181          | -           |
| Fibonacci_u256_evm      | EVM     | solidity  | 185          | +2.2%       |
| Fibonacci_u256_iter_pvm | PVM     | solidity  | 1,252        | +591.7%     |
| Fibonacci_u256_pvm      | PVM     | solidity  | 1,319        | +628.7%     |


## SimpleToken Implementations

| Contract                     | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------------------------- | ------- | --------- | ------------ | ----------- |
| SimpleToken_evm              | EVM     | solidity  | 555          | -           |
| simple_token_u256_dsl_rust   | PVM     |           | 3,405        | +513.5%     |
| simple_token_u256_macro_rust | PVM     |           | 4,216        | +659.6%     |
| SimpleToken_pvm              | PVM     | solidity  | 5,442        | +880.5%     |


## flipper Implementations

| Contract           | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------ | ------- | --------- | ------------ | ----------- |
| flipper_evm        | EVM     | solidity  | 284          | -           |
| flipper_dsl_rust   | PVM     |           | 1,598        | +462.7%     |
| flipper_macro_rust | PVM     |           | 1,711        | +502.5%     |
| flipper_pvm        | PVM     | solidity  | 2,410        | +748.6%     |


## incrementer Implementations

| Contract               | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------------------- | ------- | --------- | ------------ | ----------- |
| incrementer_evm        | EVM     | solidity  | 350          | -           |
| incrementer_dsl_rust   | PVM     |           | 1,695        | +384.3%     |
| incrementer_macro_rust | PVM     |           | 1,829        | +422.6%     |
| incrementer_pvm        | PVM     | solidity  | 2,892        | +726.3%     |


## BenchStorage Implementations

| Contract                 | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------------ | ------- | --------- | ------------ | ----------- |
| BenchStorage_evm         | EVM     | solidity  | 521          | -           |
| bench_storage_dsl_rust   | PVM     |           | 1,820        | +249.3%     |
| bench_storage_macro_rust | PVM     |           | 2,556        | +390.6%     |
| BenchStorage_pvm         | PVM     | solidity  | 3,065        | +488.3%     |


## Computation Implementations

| Contract               | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------------------- | ------- | --------- | ------------ | ----------- |
| Computation_evm        | EVM     | solidity  | 331          | -           |
| computation_macro_rust | PVM     |           | 950          | +187.0%     |
| computation_dsl_rust   | PVM     |           | 1,573        | +375.2%     |
| Computation_pvm        | PVM     | solidity  | 2,684        | +710.9%     |


## BenchERC20 Implementations

| Contract               | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------------------- | ------- | --------- | ------------ | ----------- |
| BenchERC20_evm         | EVM     | solidity  | 1,093        | -           |
| bench_erc20_dsl_rust   | PVM     |           | 4,901        | +348.4%     |
| bench_erc20_macro_rust | PVM     |           | 7,139        | +553.2%     |
| BenchERC20_pvm         | PVM     | solidity  | 9,689        | +786.5%     |


## BenchERC721 Implementations

| Contract                | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ----------------------- | ------- | --------- | ------------ | ----------- |
| BenchERC721_evm         | EVM     | solidity  | 1,121        | -           |
| bench_erc721_dsl_rust   | PVM     |           | 4,313        | +284.7%     |
| bench_erc721_macro_rust | PVM     |           | 6,194        | +452.5%     |
| BenchERC721_pvm         | PVM     | solidity  | 8,433        | +652.3%     |


## BenchERC1155 Implementations

| Contract                 | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------------ | ------- | --------- | ------------ | ----------- |
| BenchERC1155_evm         | EVM     | solidity  | 1,173        | -           |
| bench_erc1155_dsl_rust   | PVM     |           | 5,866        | +400.1%     |
| bench_erc1155_macro_rust | PVM     |           | 9,279        | +691.0%     |
| BenchERC1155_pvm         | PVM     | solidity  | 10,912       | +830.3%     |


