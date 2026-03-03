# Bytecode Size Comparison

Generated on: 2026-03-03
resolc: Solidity frontend for the revive compiler version 0.6.0+commit.81ce306.llvm-18.1.8

## Fibonacci Implementations

| Contract                            | VM Type | Size (bytes) | vs Smallest |
| ----------------------------------- | ------- | ------------ | ----------- |
| Fibonacci_evm                       | EVM     | 229          | -           |
| fibonacci_u32_rust                  | PVM     | 234          | +2.2%       |
| fibonacci_u128_rust                 | PVM     | 315          | +37.6%      |
| fibonacci_u32_macro_bump_alloc_rust | PVM     | 431          | +88.2%      |
| fibonacci_u32_macro_no_alloc_rust   | PVM     | 477          | +108.3%     |
| fibonacci_u32_ink                   | PVM     | 824          | +259.8%     |
| fibonacci_u256_rust                 | PVM     | 980          | +327.9%     |
| Fibonacci_pvm                       | PVM     | 1,200        | +424.0%     |


## SimpleToken Implementations

| Contract                                | VM Type | Size (bytes) | vs Smallest |
| --------------------------------------- | ------- | ------------ | ----------- |
| SimpleToken_evm                         | EVM     | 555          | -           |
| simple_token_u32_no_alloc_rust          | PVM     | 2,211        | +298.4%     |
| simple_token_u128_no_alloc_rust         | PVM     | 2,940        | +429.7%     |
| simple_token_u256_no_alloc_rust         | PVM     | 2,997        | +440.0%     |
| simple_token_u256_macro_no_alloc_rust   | PVM     | 3,765        | +578.4%     |
| simple_token_u256_macro_bump_alloc_rust | PVM     | 4,430        | +698.2%     |
| SimpleToken_pvm                         | PVM     | 5,374        | +868.3%     |
| simple_token_u256_ink                   | PVM     | 8,483        | +1428.5%    |


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
| FiatTokenV2_2_pvm | PVM     | 412,272      | +2565.5%    |


## FiatTokenProxy Implementations

| Contract           | VM Type | Size (bytes) | vs Smallest |
| ------------------ | ------- | ------------ | ----------- |
| FiatTokenProxy_evm | EVM     | 1,643        | -           |
| FiatTokenProxy_pvm | PVM     | 9,688        | +489.7%     |


## XENCrypto Implementations

| Contract      | VM Type | Size (bytes) | vs Smallest |
| ------------- | ------- | ------------ | ----------- |
| XENCrypto_evm | EVM     | 10,489       | -           |
| XENCrypto_pvm | PVM     | 305,912      | +2816.5%    |


## CoinTool_App Implementations

| Contract         | VM Type | Size (bytes) | vs Smallest |
| ---------------- | ------- | ------------ | ----------- |
| CoinTool_App_evm | EVM     | 3,233        | -           |
| CoinTool_App_pvm | PVM     | 29,230       | +804.1%     |


## Store Implementations

| Contract   | VM Type | Size (bytes) | vs Smallest |
| ---------- | ------- | ------------ | ----------- |
| Store_evm  | EVM     | 7,835        | -           |
| store_rust | PVM     | 31,499       | +302.0%     |
| Store_pvm  | PVM     | 74,006       | +844.6%     |


## Log Implementations

| Contract | VM Type | Size (bytes) | vs Smallest |
| -------- | ------- | ------------ | ----------- |
| Log_evm  | EVM     | 6,297        | -           |
| log_rust | PVM     | 16,520       | +162.3%     |
| Log_pvm  | PVM     | 54,127       | +759.6%     |


## NonFungibleCredential Implementations

| Contract                     | VM Type | Size (bytes) | vs Smallest |
| ---------------------------- | ------- | ------------ | ----------- |
| NonFungibleCredential_evm    | EVM     | 6,684        | -           |
| non_fungible_credential_rust | PVM     | 19,049       | +185.0%     |
| NonFungibleCredential_pvm    | PVM     | 65,361       | +877.9%     |


## FungibleCredential Implementations

| Contract                 | VM Type | Size (bytes) | vs Smallest |
| ------------------------ | ------- | ------------ | ----------- |
| FungibleCredential_evm   | EVM     | 7,235        | -           |
| fungible_credential_rust | PVM     | 17,636       | +143.8%     |
| FungibleCredential_pvm   | PVM     | 65,747       | +808.7%     |


## DotNS Implementations

| Contract   | VM Type | Size (bytes) | vs Smallest |
| ---------- | ------- | ------------ | ----------- |
| DotNS_evm  | EVM     | 8,168        | -           |
| dotns_rust | PVM     | 22,951       | +181.0%     |
| DotNS_pvm  | PVM     | 75,443       | +823.6%     |


## KeyRegistry Implementations

| Contract          | VM Type | Size (bytes) | vs Smallest |
| ----------------- | ------- | ------------ | ----------- |
| KeyRegistry_evm   | EVM     | 4,298        | -           |
| key_registry_rust | PVM     | 18,644       | +333.8%     |
| KeyRegistry_pvm   | PVM     | 38,843       | +803.7%     |


## Escrow Implementations

| Contract    | VM Type | Size (bytes) | vs Smallest |
| ----------- | ------- | ------------ | ----------- |
| Escrow_evm  | EVM     | 4,226        | -           |
| escrow_rust | PVM     | 12,871       | +204.6%     |
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


