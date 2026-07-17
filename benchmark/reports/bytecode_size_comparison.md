# Bytecode Size Comparison

Generated on: 2026-07-09

### Benchmark Environment

- **Chain:** Development | **Runtime:** revive-dev-runtime@0 | **Node:** Substrate Node 0.0.0-bbbb695f456 | **resolc:** 1.3.0+commit.fb0e9e6 | **solc:** 0.8.30+commit.73712a01

## Fibonacci Implementations

| Contract                            | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ----------------------------------- | ------- | --------- | ------------ | ----------- |
| Fibonacci_evm                       | EVM     | solidity  | 229          | -           |
| fibonacci_u32_rust                  | PVM     | rust      | 234          | +2.2%       |
| fibonacci_u128_rust                 | PVM     | rust      | 315          | +37.6%      |
| fibonacci_u32_macro_bump_alloc_rust | PVM     | rust      | 431          | +88.2%      |
| fibonacci_u32_macro_no_alloc_rust   | PVM     | rust      | 477          | +108.3%     |
| fibonacci_u32_macro_rust            | PVM     | rust      | 605          | +164.2%     |
| fibonacci_u32_dsl_rust              | PVM     | rust      | 647          | +182.5%     |
| fibonacci_u256_rust                 | PVM     | rust      | 980          | +327.9%     |
| Fibonacci_pvm                       | PVM     | solidity  | 1,090        | +376.0%     |
| fibonacci_u32_ink                   | PVM     | ink       | 1,363        | +495.2%     |
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
| Fibonacci_u256_iter_pvm                  | PVM     | solidity  | 1,207        | +566.9%     |
| Fibonacci_u256_pvm                       | PVM     | solidity  | 1,273        | +603.3%     |
| fibonacci_u256_iter_ink                  | PVM     | ink       | 2,029        | +1021.0%    |
| fibonacci_u256_ink                       | PVM     | ink       | 2,102        | +1061.3%    |


## SimpleToken Implementations

| Contract                                | VM Type | Impl Type | Size (bytes) | vs Smallest |
| --------------------------------------- | ------- | --------- | ------------ | ----------- |
| SimpleToken_evm                         | EVM     | solidity  | 555          | -           |
| simple_token_u32_no_alloc_rust          | PVM     | rust      | 2,211        | +298.4%     |
| simple_token_u128_no_alloc_rust         | PVM     | rust      | 2,940        | +429.7%     |
| simple_token_u256_no_alloc_rust         | PVM     | rust      | 2,997        | +440.0%     |
| simple_token_u256_dsl_rust              | PVM     | rust      | 3,405        | +513.5%     |
| simple_token_u256_macro_no_alloc_rust   | PVM     | rust      | 3,765        | +578.4%     |
| simple_token_u256_macro_rust            | PVM     | rust      | 4,217        | +659.8%     |
| simple_token_u256_macro_bump_alloc_rust | PVM     | rust      | 4,430        | +698.2%     |
| SimpleToken_pvm                         | PVM     | solidity  | 5,357        | +865.2%     |
| simple_token_u256_ink                   | PVM     | ink       | 11,308       | +1937.5%    |
| simple_token_u256_stylus                | PVM     | stylus    | 12,028       | +2067.2%    |


## flipper Implementations

| Contract           | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------ | ------- | --------- | ------------ | ----------- |
| flipper_evm        | EVM     | solidity  | 284          | -           |
| flipper_dsl_rust   | PVM     | rust      | 1,598        | +462.7%     |
| flipper_macro_rust | PVM     | rust      | 1,711        | +502.5%     |
| flipper_ink        | PVM     | ink       | 2,244        | +690.1%     |
| flipper_pvm        | PVM     | solidity  | 2,387        | +740.5%     |
| flipper_stylus     | PVM     | stylus    | 3,611        | +1171.5%    |


## incrementer Implementations

| Contract               | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------------------- | ------- | --------- | ------------ | ----------- |
| incrementer_evm        | EVM     | solidity  | 350          | -           |
| incrementer_dsl_rust   | PVM     | rust      | 1,695        | +384.3%     |
| incrementer_macro_rust | PVM     | rust      | 1,829        | +422.6%     |
| incrementer_ink        | PVM     | ink       | 2,647        | +656.3%     |
| incrementer_pvm        | PVM     | solidity  | 2,849        | +714.0%     |
| incrementer_stylus     | PVM     | stylus    | 5,186        | +1381.7%    |


## BenchStorage Implementations

| Contract                 | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------------ | ------- | --------- | ------------ | ----------- |
| BenchStorage_evm         | EVM     | solidity  | 521          | -           |
| bench_storage_dsl_rust   | PVM     | rust      | 1,820        | +249.3%     |
| bench_storage_macro_rust | PVM     | rust      | 2,556        | +390.6%     |
| BenchStorage_pvm         | PVM     | solidity  | 2,981        | +472.2%     |
| bench_storage_ink        | PVM     | ink       | 4,250        | +715.7%     |
| bench_storage_stylus     | PVM     | stylus    | 10,392       | +1894.6%    |


## Computation Implementations

| Contract               | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------------------- | ------- | --------- | ------------ | ----------- |
| Computation_evm        | EVM     | solidity  | 331          | -           |
| computation_macro_rust | PVM     | rust      | 950          | +187.0%     |
| computation_dsl_rust   | PVM     | rust      | 1,573        | +375.2%     |
| computation_ink        | PVM     | ink       | 2,444        | +638.4%     |
| computation_stylus     | PVM     | stylus    | 2,487        | +651.4%     |
| Computation_pvm        | PVM     | solidity  | 2,615        | +690.0%     |


## BenchERC20 Implementations

| Contract               | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------------------- | ------- | --------- | ------------ | ----------- |
| BenchERC20_evm         | EVM     | solidity  | 1,093        | -           |
| bench_erc20_dsl_rust   | PVM     | rust      | 4,901        | +348.4%     |
| bench_erc20_macro_rust | PVM     | rust      | 7,139        | +553.2%     |
| BenchERC20_pvm         | PVM     | solidity  | 9,758        | +792.8%     |
| bench_erc20_stylus     | PVM     | stylus    | 20,565       | +1781.5%    |
| bench_erc20_ink        | PVM     | ink       | 21,197       | +1839.3%    |


## BenchERC721 Implementations

| Contract                | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ----------------------- | ------- | --------- | ------------ | ----------- |
| BenchERC721_evm         | EVM     | solidity  | 1,121        | -           |
| bench_erc721_dsl_rust   | PVM     | rust      | 4,313        | +284.7%     |
| bench_erc721_macro_rust | PVM     | rust      | 6,194        | +452.5%     |
| BenchERC721_pvm         | PVM     | solidity  | 8,329        | +643.0%     |
| bench_erc721_stylus     | PVM     | stylus    | 12,700       | +1032.9%    |
| bench_erc721_ink        | PVM     | ink       | 15,109       | +1247.8%    |


## BenchERC1155 Implementations

| Contract                 | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------------ | ------- | --------- | ------------ | ----------- |
| BenchERC1155_evm         | EVM     | solidity  | 1,173        | -           |
| bench_erc1155_dsl_rust   | PVM     | rust      | 5,866        | +400.1%     |
| bench_erc1155_macro_rust | PVM     | rust      | 9,279        | +691.0%     |
| BenchERC1155_pvm         | PVM     | solidity  | 11,204       | +855.2%     |
| bench_erc1155_stylus     | PVM     | stylus    | 21,232       | +1710.1%    |
| bench_erc1155_ink        | PVM     | ink       | 22,858       | +1848.7%    |


## TetherToken Implementations

| Contract        | VM Type | Impl Type | Size (bytes) | vs Smallest |
| --------------- | ------- | --------- | ------------ | ----------- |
| TetherToken_evm | EVM     | solidity  | 5,618        | -           |
| TetherToken_pvm | PVM     | solidity  | 54,549       | +871.0%     |


## WETH9 Implementations

| Contract  | VM Type | Impl Type | Size (bytes) | vs Smallest |
| --------- | ------- | --------- | ------------ | ----------- |
| WETH9_evm | EVM     | solidity  | 2,012        | -           |
| WETH9_pvm | PVM     | solidity  | 18,178       | +803.5%     |


## FiatTokenV2_2 Implementations

| Contract          | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ----------------- | ------- | --------- | ------------ | ----------- |
| FiatTokenV2_2_evm | EVM     | solidity  | 15,467       | -           |
| FiatTokenV2_2_pvm | PVM     | solidity  | 98,908       | +539.5%     |


## FiatTokenProxy Implementations

| Contract           | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------ | ------- | --------- | ------------ | ----------- |
| FiatTokenProxy_evm | EVM     | solidity  | 1,643        | -           |
| FiatTokenProxy_pvm | PVM     | solidity  | 9,458        | +475.7%     |


## XENCrypto Implementations

| Contract      | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------- | ------- | --------- | ------------ | ----------- |
| XENCrypto_evm | EVM     | solidity  | 10,489       | -           |
| XENCrypto_pvm | PVM     | solidity  | 99,912       | +852.5%     |


## CoinTool_App Implementations

| Contract         | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------------- | ------- | --------- | ------------ | ----------- |
| CoinTool_App_evm | EVM     | solidity  | 3,233        | -           |
| CoinTool_App_pvm | PVM     | solidity  | 28,541       | +782.8%     |


## Store Implementations

| Contract   | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------- | ------- | --------- | ------------ | ----------- |
| Store_evm  | EVM     | solidity  | 7,835        | -           |
| store_rust | PVM     | rust      | 31,625       | +303.6%     |
| Store_pvm  | PVM     | solidity  | 74,630       | +852.5%     |


## Log Implementations

| Contract | VM Type | Impl Type | Size (bytes) | vs Smallest |
| -------- | ------- | --------- | ------------ | ----------- |
| Log_evm  | EVM     | solidity  | 6,297        | -           |
| log_rust | PVM     | rust      | 16,624       | +164.0%     |
| Log_pvm  | PVM     | solidity  | 54,812       | +770.4%     |


## NonFungibleCredential Implementations

| Contract                     | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------------------------- | ------- | --------- | ------------ | ----------- |
| NonFungibleCredential_evm    | EVM     | solidity  | 6,684        | -           |
| non_fungible_credential_rust | PVM     | rust      | 19,126       | +186.1%     |
| NonFungibleCredential_pvm    | PVM     | solidity  | 66,280       | +891.6%     |


## FungibleCredential Implementations

| Contract                 | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------------ | ------- | --------- | ------------ | ----------- |
| FungibleCredential_evm   | EVM     | solidity  | 7,235        | -           |
| fungible_credential_rust | PVM     | rust      | 17,753       | +145.4%     |
| FungibleCredential_pvm   | PVM     | solidity  | 65,975       | +811.9%     |


## DotNS Implementations

| Contract   | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------- | ------- | --------- | ------------ | ----------- |
| DotNS_evm  | EVM     | solidity  | 8,168        | -           |
| dotns_rust | PVM     | rust      | 23,049       | +182.2%     |
| DotNS_pvm  | PVM     | solidity  | 76,083       | +831.5%     |


## KeyRegistry Implementations

| Contract          | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ----------------- | ------- | --------- | ------------ | ----------- |
| KeyRegistry_evm   | EVM     | solidity  | 4,298        | -           |
| key_registry_rust | PVM     | rust      | 18,766       | +336.6%     |
| KeyRegistry_pvm   | PVM     | solidity  | 39,681       | +823.2%     |


## Escrow Implementations

| Contract    | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ----------- | ------- | --------- | ------------ | ----------- |
| Escrow_evm  | EVM     | solidity  | 4,226        | -           |
| escrow_rust | PVM     | rust      | 12,955       | +206.6%     |
| Escrow_pvm  | PVM     | solidity  | 34,147       | +708.0%     |


## DocumentAccessManagement Implementations

| Contract                     | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------------------------- | ------- | --------- | ------------ | ----------- |
| DocumentAccessManagement_evm | EVM     | solidity  | 9,460        | -           |
| DocumentAccessManagement_pvm | PVM     | solidity  | 90,943       | +861.3%     |


## W3S Implementations

| Contract | VM Type | Impl Type | Size (bytes) | vs Smallest |
| -------- | ------- | --------- | ------------ | ----------- |
| W3S_evm  | EVM     | solidity  | 12,501       | -           |
| W3S_pvm  | PVM     | solidity  | 107,740      | +761.9%     |


## Marketplace Implementations

| Contract        | VM Type | Impl Type | Size (bytes) | vs Smallest |
| --------------- | ------- | --------- | ------------ | ----------- |
| Marketplace_evm | EVM     | solidity  | 28,848       | -           |
| Marketplace_pvm | PVM     | solidity  | 255,628      | +786.1%     |


## MarketplaceProxy Implementations

| Contract             | VM Type | Impl Type | Size (bytes) | vs Smallest |
| -------------------- | ------- | --------- | ------------ | ----------- |
| MarketplaceProxy_evm | EVM     | solidity  | 2,732        | -           |
| MarketplaceProxy_pvm | PVM     | solidity  | 11,400       | +317.3%     |


## MockMobRule Implementations

| Contract        | VM Type | Impl Type | Size (bytes) | vs Smallest |
| --------------- | ------- | --------- | ------------ | ----------- |
| MockMobRule_evm | EVM     | solidity  | 5,892        | -           |
| MockMobRule_pvm | PVM     | solidity  | 48,140       | +717.0%     |


## MixedERC20 Implementations

| Contract       | VM Type | Impl Type | Size (bytes) | vs Smallest |
| -------------- | ------- | --------- | ------------ | ----------- |
| MixedERC20_evm | EVM     | solidity  | 2,842        | -           |
| MixedERC20_pvm | PVM     | solidity  | 25,059       | +781.7%     |


## MixedFactory Implementations

| Contract         | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ---------------- | ------- | --------- | ------------ | ----------- |
| MixedFactory_evm | EVM     | solidity  | 810          | -           |
| MixedFactory_pvm | PVM     | solidity  | 5,532        | +583.0%     |


## MixedERC20Factory Implementations

| Contract              | VM Type | Impl Type | Size (bytes) | vs Smallest |
| --------------------- | ------- | --------- | ------------ | ----------- |
| MixedERC20Factory_evm | EVM     | solidity  | 3,253        | -           |
| MixedERC20Factory_pvm | PVM     | solidity  | 3,599        | +10.6%      |


## MixedSwapToken0 Implementations

| Contract            | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------- | ------- | --------- | ------------ | ----------- |
| MixedSwapToken0_evm | EVM     | solidity  | 2,842        | -           |
| MixedSwapToken0_pvm | PVM     | solidity  | 25,059       | +781.7%     |


## MixedSwapToken1 Implementations

| Contract            | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------- | ------- | --------- | ------------ | ----------- |
| MixedSwapToken1_evm | EVM     | solidity  | 2,842        | -           |
| MixedSwapToken1_pvm | PVM     | solidity  | 25,059       | +781.7%     |


## MixedPool Implementations

| Contract      | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------- | ------- | --------- | ------------ | ----------- |
| MixedPool_evm | EVM     | solidity  | 1,966        | -           |
| MixedPool_pvm | PVM     | solidity  | 18,548       | +843.4%     |


## MixedSwapRouter Implementations

| Contract            | VM Type | Impl Type | Size (bytes) | vs Smallest |
| ------------------- | ------- | --------- | ------------ | ----------- |
| MixedSwapRouter_evm | EVM     | solidity  | 1,086        | -           |
| MixedSwapRouter_pvm | PVM     | solidity  | 8,169        | +652.2%     |


