# Bytecode Size Comparison

Generated on: 2026-02-11

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

| Contract   | VM Type | Size (bytes) | vs Smallest |
| ---------- | ------- | ------------ | ----------- |
| Store_evm  | EVM     | 7,835        | -           |
| store_rust | PVM     | 30,858       | +293.8%     |
| Store_pvm  | PVM     | 74,006       | +844.6%     |


## Log Implementations

| Contract | VM Type | Size (bytes) | vs Smallest |
| -------- | ------- | ------------ | ----------- |
| Log_evm  | EVM     | 6,297        | -           |
| log_rust | PVM     | 16,793       | +166.7%     |
| Log_pvm  | PVM     | 54,127       | +759.6%     |


## NonFungibleCredential Implementations

| Contract                     | VM Type | Size (bytes) | vs Smallest |
| ---------------------------- | ------- | ------------ | ----------- |
| NonFungibleCredential_evm    | EVM     | 6,684        | -           |
| non_fungible_credential_rust | PVM     | 17,863       | +167.3%     |
| NonFungibleCredential_pvm    | PVM     | 65,361       | +877.9%     |


## FungibleCredential Implementations

| Contract                 | VM Type | Size (bytes) | vs Smallest |
| ------------------------ | ------- | ------------ | ----------- |
| FungibleCredential_evm   | EVM     | 7,235        | -           |
| fungible_credential_rust | PVM     | 17,330       | +139.5%     |
| FungibleCredential_pvm   | PVM     | 65,747       | +808.7%     |


## DotNS Implementations

| Contract   | VM Type | Size (bytes) | vs Smallest |
| ---------- | ------- | ------------ | ----------- |
| DotNS_evm  | EVM     | 8,168        | -           |
| dotns_rust | PVM     | 23,120       | +183.1%     |
| DotNS_pvm  | PVM     | 75,443       | +823.6%     |


## KeyRegistry Implementations

| Contract          | VM Type | Size (bytes) | vs Smallest |
| ----------------- | ------- | ------------ | ----------- |
| KeyRegistry_evm   | EVM     | 4,298        | -           |
| key_registry_rust | PVM     | 18,243       | +324.5%     |
| KeyRegistry_pvm   | PVM     | 38,843       | +803.7%     |


## Escrow Implementations

| Contract    | VM Type | Size (bytes) | vs Smallest |
| ----------- | ------- | ------------ | ----------- |
| Escrow_evm  | EVM     | 4,226        | -           |
| escrow_rust | PVM     | 12,434       | +194.2%     |
| Escrow_pvm  | PVM     | 33,827       | +700.4%     |


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


## Marketplace Implementations

| Contract        | VM Type | Size (bytes) | vs Smallest |
| --------------- | ------- | ------------ | ----------- |
| Marketplace_evm | EVM     | 28,848       | -           |
| Marketplace_pvm | PVM     | 272,397      | +844.2%     |


## MarketplaceProxy Implementations

| Contract             | VM Type | Size (bytes) | vs Smallest |
| -------------------- | ------- | ------------ | ----------- |
| MarketplaceProxy_evm | EVM     | 2,732        | -           |
| MarketplaceProxy_pvm | PVM     | 11,786       | +331.4%     |


## MockMobRule Implementations

| Contract        | VM Type | Size (bytes) | vs Smallest |
| --------------- | ------- | ------------ | ----------- |
| MockMobRule_evm | EVM     | 5,892        | -           |
| MockMobRule_pvm | PVM     | 47,029       | +698.2%     |


