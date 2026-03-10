# Bytecode Size Comparison

Generated on: 2026-03-10
resolc: Solidity frontend for the revive compiler version 1.0.0+commit.b080c1d.llvm-18.1.8

## Fibonacci Implementations

| Contract                            | VM Type | Size (bytes) | vs Smallest |
| ----------------------------------- | ------- | ------------ | ----------- |
| Fibonacci_evm                       | EVM     | 229          | -           |
| fibonacci_u32_rust                  | PVM     | 234          | +2.2%       |
| fibonacci_u128_rust                 | PVM     | 315          | +37.6%      |
| fibonacci_u32_macro_bump_alloc_rust | PVM     | 431          | +88.2%      |
| fibonacci_u32_macro_no_alloc_rust   | PVM     | 477          | +108.3%     |
| fibonacci_u256_rust                 | PVM     | 980          | +327.9%     |
| Fibonacci_pvm                       | PVM     | 1,152        | +403.1%     |
| fibonacci_u32_ink                   | PVM     | 1,363        | +495.2%     |
| fibonacci_u32_stylus                | PVM     | 1,520        | +563.8%     |


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
| fibonacci_u256_iter_ink                  | PVM     | 2,029        | +1021.0%    |
| fibonacci_u256_ink                       | PVM     | 2,102        | +1061.3%    |


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
| simple_token_u256_ink                   | PVM     | 11,308       | +1937.5%    |
| simple_token_u256_stylus                | PVM     | 12,028       | +2067.2%    |


## flipper Implementations

| Contract       | VM Type | Size (bytes) | vs Smallest |
| -------------- | ------- | ------------ | ----------- |
| flipper_evm    | EVM     | 284          | -           |
| flipper_ink    | PVM     | 2,244        | +690.1%     |
| flipper_pvm    | PVM     | 2,328        | +719.7%     |
| flipper_stylus | PVM     | 3,611        | +1171.5%    |


## incrementer Implementations

| Contract           | VM Type | Size (bytes) | vs Smallest |
| ------------------ | ------- | ------------ | ----------- |
| incrementer_evm    | EVM     | 350          | -           |
| incrementer_ink    | PVM     | 2,647        | +656.3%     |
| incrementer_pvm    | PVM     | 2,791        | +697.4%     |
| incrementer_stylus | PVM     | 5,186        | +1381.7%    |


## BenchStorage Implementations

| Contract             | VM Type | Size (bytes) | vs Smallest |
| -------------------- | ------- | ------------ | ----------- |
| BenchStorage_evm     | EVM     | 521          | -           |
| BenchStorage_pvm     | PVM     | 3,060        | +487.3%     |
| bench_storage_ink    | PVM     | 4,250        | +715.7%     |
| bench_storage_stylus | PVM     | 10,392       | +1894.6%    |


## Computation Implementations

| Contract           | VM Type | Size (bytes) | vs Smallest |
| ------------------ | ------- | ------------ | ----------- |
| Computation_evm    | EVM     | 331          | -           |
| computation_ink    | PVM     | 2,444        | +638.4%     |
| computation_stylus | PVM     | 2,487        | +651.4%     |
| Computation_pvm    | PVM     | 2,594        | +683.7%     |


## BenchERC20 Implementations

| Contract           | VM Type | Size (bytes) | vs Smallest |
| ------------------ | ------- | ------------ | ----------- |
| BenchERC20_evm     | EVM     | 1,093        | -           |
| BenchERC20_pvm     | PVM     | 9,826        | +799.0%     |
| bench_erc20_stylus | PVM     | 20,565       | +1781.5%    |
| bench_erc20_ink    | PVM     | 21,197       | +1839.3%    |


## BenchERC721 Implementations

| Contract            | VM Type | Size (bytes) | vs Smallest |
| ------------------- | ------- | ------------ | ----------- |
| BenchERC721_evm     | EVM     | 1,121        | -           |
| BenchERC721_pvm     | PVM     | 8,318        | +642.0%     |
| bench_erc721_stylus | PVM     | 12,700       | +1032.9%    |
| bench_erc721_ink    | PVM     | 15,109       | +1247.8%    |


## BenchERC1155 Implementations

| Contract             | VM Type | Size (bytes) | vs Smallest |
| -------------------- | ------- | ------------ | ----------- |
| BenchERC1155_evm     | EVM     | 1,173        | -           |
| BenchERC1155_pvm     | PVM     | 11,068       | +843.6%     |
| bench_erc1155_stylus | PVM     | 21,232       | +1710.1%    |
| bench_erc1155_ink    | PVM     | 22,858       | +1848.7%    |


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
| store_rust | PVM     | 31,625       | +303.6%     |
| Store_pvm  | PVM     | 74,865       | +855.5%     |


## Log Implementations

| Contract | VM Type | Size (bytes) | vs Smallest |
| -------- | ------- | ------------ | ----------- |
| Log_evm  | EVM     | 6,297        | -           |
| log_rust | PVM     | 16,624       | +164.0%     |
| Log_pvm  | PVM     | 54,122       | +759.5%     |


## NonFungibleCredential Implementations

| Contract                     | VM Type | Size (bytes) | vs Smallest |
| ---------------------------- | ------- | ------------ | ----------- |
| NonFungibleCredential_evm    | EVM     | 6,684        | -           |
| non_fungible_credential_rust | PVM     | 19,126       | +186.1%     |
| NonFungibleCredential_pvm    | PVM     | 65,603       | +881.5%     |


## FungibleCredential Implementations

| Contract                 | VM Type | Size (bytes) | vs Smallest |
| ------------------------ | ------- | ------------ | ----------- |
| FungibleCredential_evm   | EVM     | 7,235        | -           |
| fungible_credential_rust | PVM     | 17,730       | +145.1%     |
| FungibleCredential_pvm   | PVM     | 65,740       | +808.6%     |


## DotNS Implementations

| Contract   | VM Type | Size (bytes) | vs Smallest |
| ---------- | ------- | ------------ | ----------- |
| DotNS_evm  | EVM     | 8,168        | -           |
| dotns_rust | PVM     | 23,049       | +182.2%     |
| DotNS_pvm  | PVM     | 75,233       | +821.1%     |


## KeyRegistry Implementations

| Contract          | VM Type | Size (bytes) | vs Smallest |
| ----------------- | ------- | ------------ | ----------- |
| KeyRegistry_evm   | EVM     | 4,298        | -           |
| key_registry_rust | PVM     | 18,766       | +336.6%     |
| KeyRegistry_pvm   | PVM     | 38,873       | +804.4%     |


## Escrow Implementations

| Contract    | VM Type | Size (bytes) | vs Smallest |
| ----------- | ------- | ------------ | ----------- |
| Escrow_evm  | EVM     | 4,226        | -           |
| escrow_rust | PVM     | 12,944       | +206.3%     |
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


