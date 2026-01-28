# Bytecode Size Comparison

Generated on: 2026-01-27

## Fibonacci Implementations

| Contract            | VM Type | Size (bytes) | vs Smallest |
| ------------------- | ------- | ------------ | ----------- |
| fibonacci_rust      | PVM     | 209          | -           |
| fibonacci_u128_rust | PVM     | 285          | +36.4%      |
| Fibonacci_evm       | EVM     | 300          | +43.5%      |
| fibonacci_u256_rust | PVM     | 686          | +228.2%     |
| fibonacci_ink       | PVM     | 1,102        | +427.3%     |
| Fibonacci_pvm       | PVM     | 1,546        | +639.7%     |

## SimpleToken Implementations

| Contract                   | VM Type | Size (bytes) | vs Smallest |
| -------------------------- | ------- | ------------ | ----------- |
| SimpleToken_evm            | EVM     | 487          | -           |
| simple_token_no_alloc_rust | PVM     | 4,360        | +795.3%     |
| SimpleToken_pvm            | PVM     | 5,073        | +941.7%     |
| simple_token_ink           | PVM     | 7,251        | +1388.9%    |

## TetherToken Implementations

| Contract        | VM Type | Size (bytes) | vs Smallest |
| --------------- | ------- | ------------ | ----------- |
| TetherToken_evm | EVM     | 5,618        | -           |
| TetherToken_pvm | PVM     | 54,619       | +872.2%     |

## WETH9 Implementations

| Contract  | VM Type | Size (bytes) | vs Smallest |
| --------- | ------- | ------------ | ----------- |
| WETH9_evm | EVM     | 2,012        | -           |
| WETH9_pvm | PVM     | 17,196       | +754.7%     |

## FiatTokenV2_2 Implementations

| Contract          | VM Type | Size (bytes) | vs Smallest |
| ----------------- | ------- | ------------ | ----------- |
| FiatTokenV2_2_evm | EVM     | 15,467       | -           |
| FiatTokenV2_2_pvm | PVM     | 103,545      | +569.5%     |

## FiatTokenProxy Implementations

| Contract           | VM Type | Size (bytes) | vs Smallest |
| ------------------ | ------- | ------------ | ----------- |
| FiatTokenProxy_evm | EVM     | 1,643        | -           |
| FiatTokenProxy_pvm | PVM     | 9,688        | +489.7%     |

## XENCrypto Implementations

| Contract      | VM Type | Size (bytes) | vs Smallest |
| ------------- | ------- | ------------ | ----------- |
| XENCrypto_evm | EVM     | 10,489       | -           |
| XENCrypto_pvm | PVM     | 112,648      | +974.0%     |

## CoinTool_App Implementations

| Contract         | VM Type | Size (bytes) | vs Smallest |
| ---------------- | ------- | ------------ | ----------- |
| CoinTool_App_evm | EVM     | 3,233        | -           |
| CoinTool_App_pvm | PVM     | 29,230       | +804.1%     |
