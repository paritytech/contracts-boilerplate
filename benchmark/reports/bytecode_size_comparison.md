# Bytecode Size Comparison

Generated on: 2026-03-12
resolc: Solidity frontend for the revive compiler version 1.0.0+commit.b080c1d.llvm-18.1.8

## Fibonacci Implementations

| Contract                            | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ----------------------------------- | ------- | --------- | ------------ | ----------- |
| Fibonacci_evm                       | EVM     | solidity  | 229          | -           |
| fibonacci_u32_rust                  | PVM     | rust      | 234          | +2.2%       |
| fibonacci_u128_rust                 | PVM     | rust      | 315          | +37.6%      |
| fibonacci_u32_macro_bump_alloc_rust | PVM     | rust      | 431          | +88.2%      |
| fibonacci_u32_macro_no_alloc_rust   | PVM     | rust      | 477          | +108.3%     |
| fibonacci_u32_ink                   | PVM     | ink       | 824          | +259.8%     |
| fibonacci_u256_rust                 | PVM     | rust      | 980          | +327.9%     |
| Fibonacci_pvm                       | PVM     | solidity  | 1,152        | +403.1%     |
| fibonacci_u32_stylus                | PVM     | stylus    | 1,520        | +563.8%     |


## Fibonacci_u256 Implementations

| Contract                                 | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------------------------------------- | ------- | --------- | ------------ | ----------- |
| Fibonacci_u256_iter_evm                  | EVM     | solidity  | 181          | -           |
| Fibonacci_u256_evm                       | EVM     | solidity  | 185          | +2.2%       |
| fibonacci_u256_iter_primitive_types_rust | PVM     | rust      | 851          | +370.2%     |
| fibonacci_u256_iter_rust                 | PVM     | rust      | 890          | +391.7%     |
| fibonacci_u256_primitive_types_rust      | PVM     | rust      | 900          | +397.2%     |
| fibonacci_u256_rust                      | PVM     | rust      | 980          | +441.4%     |
| Fibonacci_u256_iter_pvm                  | PVM     | solidity  | 1,224        | +576.2%     |
| Fibonacci_u256_pvm                       | PVM     | solidity  | 1,322        | +630.4%     |
| fibonacci_u256_ink                       | PVM     | ink       | 1,838        | +915.5%     |
| fibonacci_u256_iter_ink                  | PVM     | ink       | 1,845        | +919.3%     |


## SimpleToken Implementations

| Contract                                | VM Type | Impl Type | Size (bytes) | vs Smallest |
| --------------------------------------- | ------- | --------- | ------------ | ----------- |
| SimpleToken_evm                         | EVM     | solidity  | 555          | -           |
| simple_token_u32_no_alloc_rust          | PVM     | rust      | 2,211        | +298.4%     |
| simple_token_u128_no_alloc_rust         | PVM     | rust      | 2,940        | +429.7%     |
| simple_token_u256_no_alloc_rust         | PVM     | rust      | 2,997        | +440.0%     |
| simple_token_u256_macro_no_alloc_rust   | PVM     | rust      | 3,765        | +578.4%     |
| simple_token_u256_macro_bump_alloc_rust | PVM     | rust      | 4,430        | +698.2%     |
| SimpleToken_pvm                         | PVM     | solidity  | 5,357        | +865.2%     |
| simple_token_u256_ink                   | PVM     | ink       | 8,479        | +1427.7%    |
| simple_token_u256_stylus                | PVM     | stylus    | 12,028       | +2067.2%    |


## flipper Implementations

| Contract       | VM Type | Impl Type | Size (bytes) | vs Smallest |
| -------------- | ------- | --------- | ------------ | ----------- |
| flipper_evm    | EVM     | solidity  | 284          | -           |
| flipper_ink    | PVM     | ink       | 1,999        | +603.9%     |
| flipper_pvm    | PVM     | solidity  | 2,328        | +719.7%     |
| flipper_stylus | PVM     | stylus    | 3,611        | +1171.5%    |


## incrementer Implementations

| Contract           | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------ | ------- | --------- | ------------ | ----------- |
| incrementer_evm    | EVM     | solidity  | 350          | -           |
| incrementer_ink    | PVM     | ink       | 1,566        | +347.4%     |
| incrementer_pvm    | PVM     | solidity  | 2,791        | +697.4%     |
| incrementer_stylus | PVM     | stylus    | 5,186        | +1381.7%    |


## BenchStorage Implementations

| Contract             | VM Type | Impl Type | Size (bytes) | vs Smallest |
| -------------------- | ------- | --------- | ------------ | ----------- |
| BenchStorage_evm     | EVM     | solidity  | 521          | -           |
| BenchStorage_pvm     | PVM     | solidity  | 3,060        | +487.3%     |
| bench_storage_ink    | PVM     | ink       | 3,643        | +599.2%     |
| bench_storage_stylus | PVM     | stylus    | 10,392       | +1894.6%    |


## Computation Implementations

| Contract           | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------ | ------- | --------- | ------------ | ----------- |
| Computation_evm    | EVM     | solidity  | 331          | -           |
| computation_ink    | PVM     | ink       | 1,538        | +364.7%     |
| computation_stylus | PVM     | stylus    | 2,487        | +651.4%     |
| Computation_pvm    | PVM     | solidity  | 2,594        | +683.7%     |


## BenchERC20 Implementations

| Contract           | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------ | ------- | --------- | ------------ | ----------- |
| BenchERC20_evm     | EVM     | solidity  | 1,093        | -           |
| BenchERC20_pvm     | PVM     | solidity  | 9,826        | +799.0%     |
| bench_erc20_ink    | PVM     | ink       | 14,276       | +1206.1%    |
| bench_erc20_stylus | PVM     | stylus    | 20,565       | +1781.5%    |


## BenchERC721 Implementations

| Contract            | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------- | ------- | --------- | ------------ | ----------- |
| BenchERC721_evm     | EVM     | solidity  | 1,121        | -           |
| BenchERC721_pvm     | PVM     | solidity  | 8,318        | +642.0%     |
| bench_erc721_stylus | PVM     | stylus    | 12,700       | +1032.9%    |
| bench_erc721_ink    | PVM     | ink       | 13,058       | +1064.9%    |


## BenchERC1155 Implementations

| Contract             | VM Type | Impl Type | Size (bytes) | vs Smallest |
| -------------------- | ------- | --------- | ------------ | ----------- |
| BenchERC1155_evm     | EVM     | solidity  | 1,173        | -           |
| BenchERC1155_pvm     | PVM     | solidity  | 11,068       | +843.6%     |
| bench_erc1155_ink    | PVM     | ink       | 18,516       | +1478.5%    |
| bench_erc1155_stylus | PVM     | stylus    | 21,232       | +1710.1%    |


## TetherToken Implementations

| Contract        | VM Type | Impl Type | Size (bytes) | vs Smallest |
| --------------- | ------- | --------- | ------------ | ----------- |
| TetherToken_evm | EVM     | solidity  | 5,618        | -           |
| TetherToken_pvm | PVM     | solidity  | 54,695       | +873.6%     |


## WETH9 Implementations

| Contract  | VM Type | Impl Type | Size (bytes) | vs Smallest |
| --------- | ------- | --------- | ------------ | ----------- |
| WETH9_evm | EVM     | solidity  | 2,012        | -           |
| WETH9_pvm | PVM     | solidity  | 17,235       | +756.6%     |


## FiatTokenV2_2 Implementations

| Contract          | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ----------------- | ------- | --------- | ------------ | ----------- |
| FiatTokenV2_2_evm | EVM     | solidity  | 15,467       | -           |
| FiatTokenV2_2_pvm | PVM     | solidity  | 411,352      | +2559.5%    |


## FiatTokenProxy Implementations

| Contract           | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------ | ------- | --------- | ------------ | ----------- |
| FiatTokenProxy_evm | EVM     | solidity  | 1,643        | -           |
| FiatTokenProxy_pvm | PVM     | solidity  | 9,865        | +500.4%     |


## XENCrypto Implementations

| Contract      | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------- | ------- | --------- | ------------ | ----------- |
| XENCrypto_evm | EVM     | solidity  | 10,489       | -           |
| XENCrypto_pvm | PVM     | solidity  | 306,120      | +2818.5%    |


## CoinTool_App Implementations

| Contract         | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------------- | ------- | --------- | ------------ | ----------- |
| CoinTool_App_evm | EVM     | solidity  | 3,233        | -           |
| CoinTool_App_pvm | PVM     | solidity  | 29,356       | +808.0%     |


## Store Implementations

| Contract   | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------- | ------- | --------- | ------------ | ----------- |
| Store_evm  | EVM     | solidity  | 7,835        | -           |
| store_rust | PVM     | rust      | 31,625       | +303.6%     |
| Store_pvm  | PVM     | solidity  | 74,865       | +855.5%     |


## Log Implementations

| Contract | VM Type | Impl Type | Size (bytes) | vs Smallest |
| -------- | ------- | --------- | ------------ | ----------- |
| Log_evm  | EVM     | solidity  | 6,297        | -           |
| log_rust | PVM     | rust      | 16,624       | +164.0%     |
| Log_pvm  | PVM     | solidity  | 54,122       | +759.5%     |


## NonFungibleCredential Implementations

| Contract                     | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------------------------- | ------- | --------- | ------------ | ----------- |
| NonFungibleCredential_evm    | EVM     | solidity  | 6,684        | -           |
| non_fungible_credential_rust | PVM     | rust      | 19,126       | +186.1%     |
| NonFungibleCredential_pvm    | PVM     | solidity  | 65,603       | +881.5%     |


## FungibleCredential Implementations

| Contract                 | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------------ | ------- | --------- | ------------ | ----------- |
| FungibleCredential_evm   | EVM     | solidity  | 7,235        | -           |
| fungible_credential_rust | PVM     | rust      | 17,753       | +145.4%     |
| FungibleCredential_pvm   | PVM     | solidity  | 65,740       | +808.6%     |


## DotNS Implementations

| Contract   | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------- | ------- | --------- | ------------ | ----------- |
| DotNS_evm  | EVM     | solidity  | 8,168        | -           |
| dotns_rust | PVM     | rust      | 23,049       | +182.2%     |
| DotNS_pvm  | PVM     | solidity  | 75,233       | +821.1%     |


## KeyRegistry Implementations

| Contract          | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ----------------- | ------- | --------- | ------------ | ----------- |
| KeyRegistry_evm   | EVM     | solidity  | 4,298        | -           |
| key_registry_rust | PVM     | rust      | 18,766       | +336.6%     |
| KeyRegistry_pvm   | PVM     | solidity  | 38,873       | +804.4%     |


## Escrow Implementations

| Contract    | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ----------- | ------- | --------- | ------------ | ----------- |
| Escrow_evm  | EVM     | solidity  | 4,226        | -           |
| escrow_rust | PVM     | rust      | 12,955       | +206.6%     |
| Escrow_pvm  | PVM     | solidity  | 33,820       | +700.3%     |


## DocumentAccessManagement Implementations

| Contract                     | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------------------------- | ------- | --------- | ------------ | ----------- |
| DocumentAccessManagement_evm | EVM     | solidity  | 9,460        | -           |
| DocumentAccessManagement_pvm | PVM     | solidity  | 90,027       | +851.7%     |


## W3S Implementations

| Contract | VM Type | Impl Type | Size (bytes) | vs Smallest |
| -------- | ------- | --------- | ------------ | ----------- |
| W3S_evm  | EVM     | solidity  | 12,501       | -           |
| W3S_pvm  | PVM     | solidity  | 104,881      | +739.0%     |


## Marketplace Implementations

| Contract        | VM Type | Impl Type | Size (bytes) | vs Smallest |
| --------------- | ------- | --------- | ------------ | ----------- |
| Marketplace_evm | EVM     | solidity  | 28,848       | -           |
| Marketplace_pvm | PVM     | solidity  | 272,134      | +843.3%     |


## MarketplaceProxy Implementations

| Contract             | VM Type | Impl Type | Size (bytes) | vs Smallest |
| -------------------- | ------- | --------- | ------------ | ----------- |
| MarketplaceProxy_evm | EVM     | solidity  | 2,732        | -           |
| MarketplaceProxy_pvm | PVM     | solidity  | 11,916       | +336.2%     |


## MockMobRule Implementations

| Contract        | VM Type | Impl Type | Size (bytes) | vs Smallest |
| --------------- | ------- | --------- | ------------ | ----------- |
| MockMobRule_evm | EVM     | solidity  | 5,892        | -           |
| MockMobRule_pvm | PVM     | solidity  | 47,111       | +699.6%     |


