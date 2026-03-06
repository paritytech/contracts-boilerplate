# Bytecode Size Comparison

Generated on: 2026-03-06
resolc: Solidity frontend for the revive compiler version 1.0.0+commit.b080c1d.llvm-18.1.8

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
| Fibonacci_pvm                       | PVM     | 1,152        | +403.1%     |


## Fibonacci_u256 Implementations

| Contract                                 | VM Type | Size (bytes) | vs Smallest |
| ---------------------------------------- | ------- | ------------ | ----------- |
| Fibonacci_u256_iter_evm                  | EVM     | 181          | -           |
| Fibonacci_u256_evm                       | EVM     | 185          | +2.2%       |
| fibonacci_u256_iter_primitive_types_rust | PVM     | 851          | +370.2%     |
| fibonacci_u256_iter_rust                 | PVM     | 890          | +391.7%     |
| fibonacci_u256_primitive_types_rust      | PVM     | 900          | +397.2%     |
| fibonacci_u256_rust                      | PVM     | 980          | +441.4%     |
| Fibonacci_u256_iter_pvm                  | PVM     | 1,224        | +576.2%     |
| Fibonacci_u256_pvm                       | PVM     | 1,322        | +630.4%     |
| fibonacci_u256_ink                       | PVM     | 1,838        | +915.5%     |
| fibonacci_u256_iter_ink                  | PVM     | 1,845        | +919.3%     |


## SimpleToken Implementations

| Contract                                | VM Type | Size (bytes) | vs Smallest |
| --------------------------------------- | ------- | ------------ | ----------- |
| SimpleToken_evm                         | EVM     | 555          | -           |
| simple_token_u32_no_alloc_rust          | PVM     | 2,211        | +298.4%     |
| simple_token_u128_no_alloc_rust         | PVM     | 2,940        | +429.7%     |
| simple_token_u256_no_alloc_rust         | PVM     | 2,997        | +440.0%     |
| simple_token_u256_macro_no_alloc_rust   | PVM     | 3,765        | +578.4%     |
| simple_token_u256_macro_bump_alloc_rust | PVM     | 4,430        | +698.2%     |
| SimpleToken_pvm                         | PVM     | 5,357        | +865.2%     |
| simple_token_u256_ink                   | PVM     | 8,483        | +1428.5%    |


## TetherToken Implementations

| Contract        | VM Type | Size (bytes) | vs Smallest |
| --------------- | ------- | ------------ | ----------- |
| TetherToken_evm | EVM     | 5,618        | -           |
| TetherToken_pvm | PVM     | 54,695       | +873.6%     |


## WETH9 Implementations

| Contract  | VM Type | Size (bytes) | vs Smallest |
| --------- | ------- | ------------ | ----------- |
| WETH9_evm | EVM     | 2,012        | -           |
| WETH9_pvm | PVM     | 17,235       | +756.6%     |


## FiatTokenV2_2 Implementations

| Contract          | VM Type | Size (bytes) | vs Smallest |
| ----------------- | ------- | ------------ | ----------- |
| FiatTokenV2_2_evm | EVM     | 15,467       | -           |
| FiatTokenV2_2_pvm | PVM     | 103,535      | +569.4%     |


## FiatTokenProxy Implementations

| Contract           | VM Type | Size (bytes) | vs Smallest |
| ------------------ | ------- | ------------ | ----------- |
| FiatTokenProxy_evm | EVM     | 1,643        | -           |
| FiatTokenProxy_pvm | PVM     | 9,865        | +500.4%     |


## XENCrypto Implementations

| Contract      | VM Type | Size (bytes) | vs Smallest |
| ------------- | ------- | ------------ | ----------- |
| XENCrypto_evm | EVM     | 10,489       | -           |
| XENCrypto_pvm | PVM     | 112,823      | +975.6%     |


## CoinTool_App Implementations

| Contract         | VM Type | Size (bytes) | vs Smallest |
| ---------------- | ------- | ------------ | ----------- |
| CoinTool_App_evm | EVM     | 3,233        | -           |
| CoinTool_App_pvm | PVM     | 29,356       | +808.0%     |


## Store Implementations

| Contract   | VM Type | Size (bytes) | vs Smallest |
| ---------- | ------- | ------------ | ----------- |
| Store_evm  | EVM     | 7,835        | -           |
| store_rust | PVM     | 31,499       | +302.0%     |
| Store_pvm  | PVM     | 74,865       | +855.5%     |


## Log Implementations

| Contract | VM Type | Size (bytes) | vs Smallest |
| -------- | ------- | ------------ | ----------- |
| Log_evm  | EVM     | 6,297        | -           |
| log_rust | PVM     | 16,520       | +162.3%     |
| Log_pvm  | PVM     | 54,122       | +759.5%     |


## NonFungibleCredential Implementations

| Contract                     | VM Type | Size (bytes) | vs Smallest |
| ---------------------------- | ------- | ------------ | ----------- |
| NonFungibleCredential_evm    | EVM     | 6,684        | -           |
| non_fungible_credential_rust | PVM     | 19,049       | +185.0%     |
| NonFungibleCredential_pvm    | PVM     | 65,603       | +881.5%     |


## FungibleCredential Implementations

| Contract                 | VM Type | Size (bytes) | vs Smallest |
| ------------------------ | ------- | ------------ | ----------- |
| FungibleCredential_evm   | EVM     | 7,235        | -           |
| fungible_credential_rust | PVM     | 17,636       | +143.8%     |
| FungibleCredential_pvm   | PVM     | 65,740       | +808.6%     |


## DotNS Implementations

| Contract   | VM Type | Size (bytes) | vs Smallest |
| ---------- | ------- | ------------ | ----------- |
| DotNS_evm  | EVM     | 8,168        | -           |
| dotns_rust | PVM     | 22,951       | +181.0%     |
| DotNS_pvm  | PVM     | 75,233       | +821.1%     |


## KeyRegistry Implementations

| Contract          | VM Type | Size (bytes) | vs Smallest |
| ----------------- | ------- | ------------ | ----------- |
| KeyRegistry_evm   | EVM     | 4,298        | -           |
| key_registry_rust | PVM     | 18,644       | +333.8%     |
| KeyRegistry_pvm   | PVM     | 38,873       | +804.4%     |


## Escrow Implementations

| Contract    | VM Type | Size (bytes) | vs Smallest |
| ----------- | ------- | ------------ | ----------- |
| Escrow_evm  | EVM     | 4,226        | -           |
| escrow_rust | PVM     | 12,871       | +204.6%     |
| Escrow_pvm  | PVM     | 33,820       | +700.3%     |


## DocumentAccessManagement Implementations

| Contract                     | VM Type | Size (bytes) | vs Smallest |
| ---------------------------- | ------- | ------------ | ----------- |
| DocumentAccessManagement_evm | EVM     | 9,460        | -           |
| DocumentAccessManagement_pvm | PVM     | 90,027       | +851.7%     |


## W3S Implementations

| Contract | VM Type | Size (bytes) | vs Smallest |
| -------- | ------- | ------------ | ----------- |
| W3S_evm  | EVM     | 12,501       | -           |
| W3S_pvm  | PVM     | 104,881      | +739.0%     |


## Marketplace Implementations

| Contract        | VM Type | Size (bytes) | vs Smallest |
| --------------- | ------- | ------------ | ----------- |
| Marketplace_evm | EVM     | 28,848       | -           |
| Marketplace_pvm | PVM     | 272,134      | +843.3%     |


## MarketplaceProxy Implementations

| Contract             | VM Type | Size (bytes) | vs Smallest |
| -------------------- | ------- | ------------ | ----------- |
| MarketplaceProxy_evm | EVM     | 2,732        | -           |
| MarketplaceProxy_pvm | PVM     | 11,916       | +336.2%     |


## MockMobRule Implementations

| Contract        | VM Type | Size (bytes) | vs Smallest |
| --------------- | ------- | ------------ | ----------- |
| MockMobRule_evm | EVM     | 5,892        | -           |
| MockMobRule_pvm | PVM     | 47,111       | +699.6%     |


