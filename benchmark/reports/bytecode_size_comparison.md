# Bytecode Size Comparison

Generated on: 2026-01-19

## Fibonacci Implementations

| Contract            | VM Type | Size (bytes) | vs Smallest |
| ------------------- | ------- | ------------ | ----------- |
| fibonacci_rust      | PVM     | 209          | -           |
| fibonacci_u128_rust | PVM     | 285          | +36.4%      |
| Fibonacci_evm       | EVM     | 391          | +87.1%      |
| fibonacci_u256_rust | PVM     | 686          | +228.2%     |
| fibonacci_ink       | PVM     | 1,102        | +427.3%     |
| Fibonacci_pvm       | PVM     | 1,908        | +812.9%     |


## SimpleToken Implementations

| Contract                   | VM Type | Size (bytes) | vs Smallest |
| -------------------------- | ------- | ------------ | ----------- |
| SimpleToken_evm            | EVM     | 588          | -           |
| simple_token_no_alloc_rust | PVM     | 4,360        | +641.5%     |
| SimpleToken_pvm            | PVM     | 5,275        | +797.1%     |
| simple_token_ink           | PVM     | 7,251        | +1133.2%    |


## TetherToken Implementations

| Contract        | VM Type | Size (bytes) | vs Smallest |
| --------------- | ------- | ------------ | ----------- |
| TetherToken_evm | EVM     | 5,860        | -           |
| TetherToken_pvm | PVM     | 53,640       | +815.4%     |


## WETH9 Implementations

| Contract  | VM Type | Size (bytes) | vs Smallest |
| --------- | ------- | ------------ | ----------- |
| WETH9_evm | EVM     | 2,204        | -           |
| WETH9_pvm | PVM     | 17,712       | +703.6%     |


## FiatTokenV2_2 Implementations

| Contract          | VM Type | Size (bytes) | vs Smallest |
| ----------------- | ------- | ------------ | ----------- |
| FiatTokenV2_2_evm | EVM     | 15,400       | -           |
| FiatTokenV2_2_pvm | PVM     | 113,736      | +638.5%     |


## FiatTokenProxy Implementations

| Contract           | VM Type | Size (bytes) | vs Smallest |
| ------------------ | ------- | ------------ | ----------- |
| FiatTokenProxy_evm | EVM     | 1,836        | -           |
| FiatTokenProxy_pvm | PVM     | 9,882        | +438.2%     |


