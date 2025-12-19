# Bytecode Size Comparison

Generated on: 2025-12-19

## Fibonacci Implementations

| Contract       | VM Type | Size (bytes) | vs Smallest |
| -------------- | ------- | ------------ | ----------- |
| Fibonacci_evm  | EVM     | 437          | -           |
| fibonacci_rust | PVM     | 547          | +25.2%      |
| fibonacci_ink  | PVM     | 1,879        | +330.0%     |
| Fibonacci_pvm  | PVM     | 2,714        | +521.1%     |

## SimpleToken Implementations

| Contract                   | VM Type | Size (bytes) | vs Smallest |
| -------------------------- | ------- | ------------ | ----------- |
| SimpleToken_evm            | EVM     | 588          | -           |
| simple_token_no_alloc_rust | PVM     | 4,370        | +643.2%     |
| SimpleToken_pvm            | PVM     | 5,241        | +791.3%     |
| simple_token_ink           | PVM     | 8,345        | +1319.2%    |
