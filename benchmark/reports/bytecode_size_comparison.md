# Bytecode Size Comparison

Generated on: 2026-01-27

## Fibonacci Implementations

| Contract            | VM Type | Size (bytes) | vs Smallest |
| ------------------- | ------- | ------------ | ----------- |
| fibonacci_u32_rust  | PVM     | 220          | -           |
| fibonacci_u128_rust | PVM     | 296          | +34.5%      |
| Fibonacci_evm       | EVM     | 391          | +77.7%      |
| fibonacci_u256_rust | PVM     | 698          | +217.3%     |
| fibonacci_ink       | PVM     | 954          | +333.6%     |
| Fibonacci_pvm       | PVM     | 1,890        | +759.1%     |

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

## XENCrypto Implementations

| Contract      | VM Type | Size (bytes) | vs Smallest |
| ------------- | ------- | ------------ | ----------- |
| XENCrypto_evm | EVM     | 10,983       | -           |
| XENCrypto_pvm | PVM     | 101,780      | +826.7%     |

## CoinTool_App Implementations

| Contract         | VM Type | Size (bytes) | vs Smallest |
| ---------------- | ------- | ------------ | ----------- |
| CoinTool_App_evm | EVM     | 4,661        | -           |
| CoinTool_App_pvm | PVM     | 32,680       | +601.1%     |
