# Bytecode Size Comparison

Generated on: 2026-02-25

## Fibonacci Implementations

| Contract                            | VM Type | Size (bytes) | vs Smallest |
| ----------------------------------- | ------- | ------------ | ----------- |
| fibonacci_u32_rust                  | PVM     | 234          | -           |
| Fibonacci_u32_evm                   | EVM     | 296          | +26.5%      |
| fibonacci_u128_rust                 | PVM     | 315          | +34.6%      |
| fibonacci_u32_macro_bump_alloc_rust | PVM     | 431          | +84.2%      |
| fibonacci_u32_macro_no_alloc_rust   | PVM     | 477          | +103.8%     |
| fibonacci_u32_ink                   | PVM     | 824          | +252.1%     |
| fibonacci_u256_rust                 | PVM     | 980          | +318.8%     |
| Fibonacci_u32_pvm                   | PVM     | 1,478        | +531.6%     |


## SimpleToken Implementations

| Contract                                | VM Type | Size (bytes) | vs Smallest |
| --------------------------------------- | ------- | ------------ | ----------- |
| SimpleToken_u256_evm                    | EVM     | 555          | -           |
| simple_token_u32_no_alloc_rust          | PVM     | 2,211        | +298.4%     |
| simple_token_u32_macro_no_alloc_rust    | PVM     | 2,311        | +316.4%     |
| simple_token_u128_no_alloc_rust         | PVM     | 2,940        | +429.7%     |
| simple_token_u256_no_alloc_rust         | PVM     | 2,997        | +440.0%     |
| simple_token_u256_macro_no_alloc_rust   | PVM     | 3,765        | +578.4%     |
| simple_token_u256_macro_bump_alloc_rust | PVM     | 4,279        | +671.0%     |
| SimpleToken_u256_pvm                    | PVM     | 5,374        | +868.3%     |
| simple_token_u256_ink                   | PVM     | 7,182        | +1194.1%    |


