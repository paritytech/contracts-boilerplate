# Bytecode Size Comparison

Generated on: 2026-01-29

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


## Store Implementations

| Contract  | VM Type | Size (bytes) | vs Smallest |
| --------- | ------- | ------------ | ----------- |
| Store_evm | EVM     | 7,835        | -           |
| Store_pvm | PVM     | 74,006       | +844.6%     |


## Log Implementations

| Contract | VM Type | Size (bytes) | vs Smallest |
| -------- | ------- | ------------ | ----------- |
| Log_evm  | EVM     | 6,297        | -           |
| Log_pvm  | PVM     | 54,127       | +759.6%     |


## NonFungibleCredential Implementations

| Contract                  | VM Type | Size (bytes) | vs Smallest |
| ------------------------- | ------- | ------------ | ----------- |
| NonFungibleCredential_evm | EVM     | 6,684        | -           |
| NonFungibleCredential_pvm | PVM     | 65,361       | +877.9%     |


## FungibleCredential Implementations

| Contract               | VM Type | Size (bytes) | vs Smallest |
| ---------------------- | ------- | ------------ | ----------- |
| FungibleCredential_evm | EVM     | 7,235        | -           |
| FungibleCredential_pvm | PVM     | 65,747       | +808.7%     |


## DotNS Implementations

| Contract  | VM Type | Size (bytes) | vs Smallest |
| --------- | ------- | ------------ | ----------- |
| DotNS_evm | EVM     | 8,168        | -           |
| DotNS_pvm | PVM     | 75,443       | +823.6%     |


## KeyRegistry Implementations

| Contract        | VM Type | Size (bytes) | vs Smallest |
| --------------- | ------- | ------------ | ----------- |
| KeyRegistry_evm | EVM     | 4,298        | -           |
| KeyRegistry_pvm | PVM     | 38,843       | +803.7%     |


## Escrow Implementations

| Contract   | VM Type | Size (bytes) | vs Smallest |
| ---------- | ------- | ------------ | ----------- |
| Escrow_evm | EVM     | 4,226        | -           |
| Escrow_pvm | PVM     | 33,827       | +700.4%     |


## DocumentAccessManagement Implementations

| Contract                     | VM Type | Size (bytes) | vs Smallest |
| ---------------------------- | ------- | ------------ | ----------- |
| DocumentAccessManagement_evm | EVM     | 9,460        | -           |
| DocumentAccessManagement_pvm | PVM     | 89,876       | +850.1%     |


## W3S Implementations

| Contract | VM Type | Size (bytes) | vs Smallest |
| -------- | ------- | ------------ | ----------- |
| W3S_evm  | EVM     | 12,501       | -           |
| W3S_pvm  | PVM     | 104,732      | +737.8%     |


