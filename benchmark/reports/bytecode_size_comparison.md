# Bytecode Size Comparison

Generated on: 2025-12-19

## Fibonacci Implementations

| Contract            | VM Type | Size (bytes) | vs Smallest |
| ------------------- | ------- | ------------ | ----------- |
| fibonacci_rust      | PVM     | 220          | -           |
| fibonacci_u128_rust | PVM     | 296          | +34.5%      |
| Fibonacci_evm       | EVM     | 391          | +77.7%      |
| fibonacci_u256_rust | PVM     | 698          | +217.3%     |
| fibonacci_ink       | PVM     | 954          | +333.6%     |
| Fibonacci_pvm       | PVM     | 1,890        | +759.1%     |


## SimpleToken Implementations

| Contract                   | VM Type | Size (bytes) | vs Smallest |
| -------------------------- | ------- | ------------ | ----------- |
| SimpleToken_evm            | EVM     | 588          | -           |
| simple_token_no_alloc_rust | PVM     | 4,370        | +643.2%     |
| SimpleToken_pvm            | PVM     | 5,241        | +791.3%     |
| simple_token_ink           | PVM     | 7,008        | +1091.8%    |


