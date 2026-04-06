# Revive Contract Comparison

Generated on: 2026-04-06

### Benchmark Environment

- **Chain:** Geth --dev | **Node:** Geth v1.16.4-stable | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01
- **Chain:** Westend Asset Hub Development | **Runtime:** westmint@1022002 | **Node:** polkadot-omni-node 1.22.0-32458d8f84d | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01

Comparison of gas usage across different contract implementations.

## Chain: Geth

### BenchERC1155 - create

| Implementation   | gas_used | vs Best | % metered |
| ---------------- | -------- | ------- | --------- |
| BenchERC1155_evm | 68,472   | -       | 69.0%     |


### BenchERC1155 - deploy

| Implementation   | gas_used | vs Best | % metered |
| ---------------- | -------- | ------- | --------- |
| BenchERC1155_evm | 301,170  | -       | 0.1%      |


### BenchERC20 - deploy

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| BenchERC20_evm | 303,090  | -       | 15.3%     |


### BenchERC20 - transfer

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| BenchERC20_evm | 51,185   | -       | 57.7%     |


### BenchERC721 - deploy

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| BenchERC721_evm | 290,145  | -       | 0.1%      |


### BenchERC721 - mint

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| BenchERC721_evm | 68,153   | -       | 68.9%     |


### BenchStorage - deploy

| Implementation   | gas_used | vs Best | % metered |
| ---------------- | -------- | ------- | --------- |
| BenchStorage_evm | 160,319  | -       | 0.1%      |


### BenchStorage - read_100

| Implementation   | gas_used | vs Best | % metered |
| ---------------- | -------- | ------- | --------- |
| BenchStorage_evm | 34,275   | -       | 37.1%     |


### BenchStorage - write_100

| Implementation   | gas_used | vs Best | % metered |
| ---------------- | -------- | ------- | --------- |
| BenchStorage_evm | 84,201   | -       | 74.4%     |


### CoinTool_App - deploy

| Implementation   | gas_used | vs Best | % metered |
| ---------------- | -------- | ------- | --------- |
| CoinTool_App_evm | 756,015  | -       | 3.0%      |


### CoinTool_App - t

| Implementation   | gas_used | vs Best | % metered |
| ---------------- | -------- | ------- | --------- |
| CoinTool_App_evm | 539,469  | -       | -55.4%    |


### Computation - deploy

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| Computation_evm | 119,399  | -       | 0.1%      |


### Computation - odd_product_10

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| Computation_evm | 23,162   | -       | 8.5%      |


### Computation - triangle_10

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| Computation_evm | 22,756   | -       | 6.8%      |


### DocumentAccessManagement - configurePublicAccess

| Implementation               | gas_used | vs Best | % metered |
| ---------------------------- | -------- | ------- | --------- |
| DocumentAccessManagement_evm | 53,551   | -       | 58.8%     |


### DocumentAccessManagement - createDocument

| Implementation               | gas_used | vs Best | % metered |
| ---------------------------- | -------- | ------- | --------- |
| DocumentAccessManagement_evm | 253,901  | -       | 90.8%     |


### DocumentAccessManagement - createDocument2

| Implementation               | gas_used | vs Best | % metered |
| ---------------------------- | -------- | ------- | --------- |
| DocumentAccessManagement_evm | 236,801  | -       | 90.2%     |


### DocumentAccessManagement - deploy

| Implementation               | gas_used  | vs Best | % metered |
| ---------------------------- | --------- | ------- | --------- |
| DocumentAccessManagement_evm | 2,093,513 | -       | 0.1%      |


### DocumentAccessManagement - grantAccessWithShare

| Implementation               | gas_used | vs Best | % metered |
| ---------------------------- | -------- | ------- | --------- |
| DocumentAccessManagement_evm | 200,142  | -       | 88.5%     |


### DocumentAccessManagement - registerKeys

| Implementation               | gas_used | vs Best | % metered |
| ---------------------------- | -------- | ------- | --------- |
| DocumentAccessManagement_evm | 92,093   | -       | 75.9%     |


### DocumentAccessManagement - revokeAccess

| Implementation               | gas_used | vs Best | % metered |
| ---------------------------- | -------- | ------- | --------- |
| DocumentAccessManagement_evm | 60,496   | -       | 88.5%     |


### DocumentAccessManagement - transferOwnership

| Implementation               | gas_used | vs Best | % metered |
| ---------------------------- | -------- | ------- | --------- |
| DocumentAccessManagement_evm | 129,468  | -       | 86.7%     |


### DocumentAccessManagement - updateDocument

| Implementation               | gas_used | vs Best | % metered |
| ---------------------------- | -------- | ------- | --------- |
| DocumentAccessManagement_evm | 44,119   | -       | 47.4%     |


### DotNS - createSubdomain

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| DotNS_evm      | 314,157  | -       | 92.7%     |


### DotNS - deploy

| Implementation | gas_used  | vs Best | % metered |
| -------------- | --------- | ------- | --------- |
| DotNS_evm      | 1,813,886 | -       | 0.1%      |


### DotNS - register

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| DotNS_evm      | 273,146  | -       | 92.0%     |


### DotNS - register_with_duration

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| DotNS_evm      | 275,143  | -       | 92.1%     |


### DotNS - release

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| DotNS_evm      | 78,940   | -       | 97.5%     |


### DotNS - renew

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| DotNS_evm      | 45,725   | -       | 52.2%     |


### DotNS - setAddress

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| DotNS_evm      | 49,710   | -       | 55.7%     |


### DotNS - setMetadata

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| DotNS_evm      | 66,607   | -       | 66.7%     |


### DotNS - setSubdomainOwner

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| DotNS_evm      | 153,052  | -       | 94.7%     |


### DotNS - transfer

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| DotNS_evm      | 124,441  | -       | 93.9%     |


### Escrow - create_simple

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Escrow_evm     | 213,536  | -       | 89.8%     |


### Escrow - create_with_arbiter

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Escrow_evm     | 165,048  | -       | 86.8%     |


### Escrow - create_with_expiry

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Escrow_evm     | 145,184  | -       | 84.9%     |


### Escrow - create_with_releaseTime

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Escrow_evm     | 145,184  | -       | 84.9%     |


### Escrow - deploy

| Implementation | gas_used  | vs Best | % metered |
| -------------- | --------- | ------- | --------- |
| Escrow_evm     | 1,001,052 | -       | 4.5%      |


### Escrow - refund

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Escrow_evm     | 66,729   | -       | 78.9%     |


### Escrow - release

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Escrow_evm     | 70,987   | -       | 80.2%     |


### FiatTokenProxy - approve

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 55,331   | -       | 61.0%     |


### FiatTokenProxy - changeAdmin

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 28,326   | -       | 24.3%     |


### FiatTokenProxy - configureMinter

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 79,482   | -       | 72.8%     |


### FiatTokenProxy - deploy

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 394,702  | -       | 12.0%     |


### FiatTokenProxy - initialize

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 212,439  | -       | 88.7%     |


### FiatTokenProxy - mint

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 83,152   | -       | 79.8%     |


### FiatTokenProxy - transfer

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 62,765   | -       | 65.6%     |


### FiatTokenProxy - transferFrom

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 51,389   | -       | 57.3%     |


### FiatTokenV2_2 - deploy

| Implementation    | gas_used  | vs Best | % metered |
| ----------------- | --------- | ------- | --------- |
| FiatTokenV2_2_evm | 3,412,399 | -       | 0.9%      |


### Fibonacci - deploy

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Fibonacci_evm  | 97,731   | -       | 0.1%      |


### Fibonacci - fib_10

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Fibonacci_evm  | 38,116   | -       | 44.4%     |


### Fibonacci_u256 - deploy

| Implementation          | gas_used | vs Best | % metered |
| ----------------------- | -------- | ------- | --------- |
| Fibonacci_u256_iter_evm | 87,359   | -       | 0.1%      |
| Fibonacci_u256_evm      | 88,229   | +1.0%   | 0.1%      |


### Fibonacci_u256 - fib_10

| Implementation          | gas_used | vs Best | % metered |
| ----------------------- | -------- | ------- | --------- |
| Fibonacci_u256_iter_evm | 21,959   | -       | 3.4%      |
| Fibonacci_u256_evm      | 35,263   | +60.6%  | 39.9%     |


### Fibonacci_u256 - fib_15

| Implementation          | gas_used | vs Best | % metered |
| ----------------------- | -------- | ------- | --------- |
| Fibonacci_u256_iter_evm | 22,269   | -       | 4.8%      |
| Fibonacci_u256_evm      | 176,997  | +694.8% | 88.0%     |


### Fibonacci_u256 - fib_5

| Implementation          | gas_used | vs Best | % metered |
| ----------------------- | -------- | ------- | --------- |
| Fibonacci_u256_iter_evm | 21,649   | -       | 2.1%      |
| Fibonacci_u256_evm      | 22,480   | +3.8%   | 5.7%      |


### FungibleCredential - burn

| Implementation         | gas_used | vs Best | % metered |
| ---------------------- | -------- | ------- | --------- |
| FungibleCredential_evm | 36,706   | -       | 41.9%     |


### FungibleCredential - createClass_nontransferable

| Implementation         | gas_used | vs Best | % metered |
| ---------------------- | -------- | ------- | --------- |
| FungibleCredential_evm | 142,667  | -       | 84.3%     |


### FungibleCredential - createClass_transferable

| Implementation         | gas_used | vs Best | % metered |
| ---------------------- | -------- | ------- | --------- |
| FungibleCredential_evm | 122,767  | -       | 81.7%     |


### FungibleCredential - deploy

| Implementation         | gas_used  | vs Best | % metered |
| ---------------------- | --------- | ------- | --------- |
| FungibleCredential_evm | 1,630,242 | -       | 1.5%      |


### FungibleCredential - issue

| Implementation         | gas_used | vs Best | % metered |
| ---------------------- | -------- | ------- | --------- |
| FungibleCredential_evm | 205,604  | -       | 89.4%     |


### FungibleCredential - issue_more

| Implementation         | gas_used | vs Best | % metered |
| ---------------------- | -------- | ------- | --------- |
| FungibleCredential_evm | 41,644   | -       | 47.9%     |


### FungibleCredential - revoke

| Implementation         | gas_used | vs Best | % metered |
| ---------------------- | -------- | ------- | --------- |
| FungibleCredential_evm | 37,346   | -       | 41.9%     |


### FungibleCredential - transfer

| Implementation         | gas_used | vs Best | % metered |
| ---------------------- | -------- | ------- | --------- |
| FungibleCredential_evm | 174,324  | -       | 87.5%     |


### KeyRegistry - deploy

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| KeyRegistry_evm | 976,448  | -       | 0.1%      |


### KeyRegistry - fetchPrekeyBundle

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| KeyRegistry_evm | 70,228   | -       | 94.5%     |


### KeyRegistry - registerIdentity

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| KeyRegistry_evm | 226,938  | -       | 89.5%     |


### KeyRegistry - updateSignedPrekey

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| KeyRegistry_evm | 50,528   | -       | 54.7%     |


### KeyRegistry - uploadOneTimePrekeys

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| KeyRegistry_evm | 119,885  | -       | 80.9%     |


### Log - addWriter

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Log_evm        | 93,068   | -       | 76.8%     |


### Log - append

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Log_evm        | 121,167  | -       | 82.1%     |


### Log - append_2

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Log_evm        | 121,167  | -       | 82.1%     |


### Log - create_nonpermissioned

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Log_evm        | 118,096  | -       | 82.1%     |


### Log - create_permissioned

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Log_evm        | 83,908   | -       | 74.7%     |


### Log - deploy

| Implementation | gas_used  | vs Best | % metered |
| -------------- | --------- | ------- | --------- |
| Log_evm        | 1,427,724 | -       | 1.6%      |


### Log - removeWriter

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Log_evm        | 34,350   | -       | 62.2%     |


### Log - transfer

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Log_evm        | 85,898   | -       | 74.9%     |


### MixedERC20 - deploy

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| MixedERC20_evm | 533,270  | -       | 8.7%      |


### MixedERC20 - mint

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| MixedERC20_evm | 68,210   | -       | 68.3%     |


### MixedERC20 - transfer

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| MixedERC20_evm | 51,242   | -       | 57.8%     |


### MixedERC20Factory - deploy

| Implementation        | gas_used | vs Best | % metered |
| --------------------- | -------- | ------- | --------- |
| MixedERC20Factory_evm | 511,834  | -       | -65.7%    |
| MixedERC20Factory_evm | 750,628  | +46.7%  | 0.1%      |


### MixedFactory - deploy

| Implementation   | gas_used | vs Best | % metered |
| ---------------- | -------- | ------- | --------- |
| MixedFactory_evm | 222,396  | -       | 0.1%      |


### MixedFactory - deployCreate

| Implementation   | gas_used | vs Best | % metered |
| ---------------- | -------- | ------- | --------- |
| MixedFactory_evm | 106,594  | -       | 23.0%     |


### MixedFactory - deployCreate2

| Implementation   | gas_used | vs Best | % metered |
| ---------------- | -------- | ------- | --------- |
| MixedFactory_evm | 89,568   | -       | 8.5%      |


### MixedPool - deploy

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| MixedPool_evm  | 487,758  | -       | 9.2%      |


### MixedSwapRouter - deploy

| Implementation      | gas_used | vs Best | % metered |
| ------------------- | -------- | ------- | --------- |
| MixedSwapRouter_evm | 275,876  | -       | 18.1%     |


### MixedSwapRouter - swap

| Implementation      | gas_used | vs Best | % metered |
| ------------------- | -------- | ------- | --------- |
| MixedSwapRouter_evm | 116,562  | -       | 106.4%    |


### MixedSwapToken0 - deploy

| Implementation      | gas_used | vs Best | % metered |
| ------------------- | -------- | ------- | --------- |
| MixedSwapToken0_evm | 533,162  | -       | 8.7%      |


### MixedSwapToken1 - deploy

| Implementation      | gas_used | vs Best | % metered |
| ------------------- | -------- | ------- | --------- |
| MixedSwapToken1_evm | 533,162  | -       | 8.7%      |


### NonFungibleCredential - deploy

| Implementation            | gas_used  | vs Best | % metered |
| ------------------------- | --------- | ------- | --------- |
| NonFungibleCredential_evm | 1,511,673 | -       | 1.6%      |


### NonFungibleCredential - issue_nontransferable

| Implementation            | gas_used | vs Best | % metered |
| ------------------------- | -------- | ------- | --------- |
| NonFungibleCredential_evm | 234,542  | -       | 90.3%     |


### NonFungibleCredential - issue_transferable

| Implementation            | gas_used | vs Best | % metered |
| ------------------------- | -------- | ------- | --------- |
| NonFungibleCredential_evm | 283,066  | -       | 91.9%     |


### NonFungibleCredential - issue_with_expiry

| Implementation            | gas_used | vs Best | % metered |
| ------------------------- | -------- | ------- | --------- |
| NonFungibleCredential_evm | 220,314  | -       | 89.6%     |


### NonFungibleCredential - revoke

| Implementation            | gas_used | vs Best | % metered |
| ------------------------- | -------- | ------- | --------- |
| NonFungibleCredential_evm | 30,343   | -       | 30.1%     |


### NonFungibleCredential - transfer

| Implementation            | gas_used | vs Best | % metered |
| ------------------------- | -------- | ------- | --------- |
| NonFungibleCredential_evm | 159,598  | -       | 92.5%     |


### NonFungibleCredential - updateMetadata

| Implementation            | gas_used | vs Best | % metered |
| ------------------------- | -------- | ------- | --------- |
| NonFungibleCredential_evm | 30,684   | -       | 29.2%     |


### SimpleToken - deploy

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| SimpleToken_evm | 167,671  | -       | 0.1%      |


### SimpleToken - mint

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| SimpleToken_evm | 68,081   | -       | 68.2%     |


### SimpleToken - transfer

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| SimpleToken_evm | 46,258   | -       | 63.6%     |


### Store - delegate

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Store_evm      | 137,452  | -       | 84.0%     |


### Store - deleteFor

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Store_evm      | 47,889   | -       | 79.1%     |


### Store - delete_

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Store_evm      | 38,316   | -       | 68.8%     |


### Store - deploy

| Implementation | gas_used  | vs Best | % metered |
| -------------- | --------- | ------- | --------- |
| Store_evm      | 1,742,046 | -       | 0.1%      |


### Store - revokeDelegation

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Store_evm      | 42,645   | -       | 73.6%     |


### Store - set

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Store_evm      | 117,087  | -       | 81.2%     |


### Store - setFor

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Store_evm      | 129,666  | -       | 82.6%     |


### Store - set_update

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Store_evm      | 32,968   | -       | 33.2%     |


### TetherToken - approve

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| TetherToken_evm | 48,276   | -       | 55.3%     |


### TetherToken - deploy

| Implementation  | gas_used  | vs Best | % metered |
| --------------- | --------- | ------- | --------- |
| TetherToken_evm | 1,208,745 | -       | 11.8%     |


### TetherToken - transfer

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| TetherToken_evm | 62,454   | -       | 65.5%     |


### TetherToken - transferFrom

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| TetherToken_evm | 50,890   | -       | 56.9%     |


### W3S - buyTicket

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| W3S_evm        | 220,332  | -       | 91.5%     |


### W3S - checkIn

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| W3S_evm        | 71,612   | -       | 81.0%     |


### W3S - configurePaymentToken

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| W3S_evm        | 98,869   | -       | 78.2%     |


### W3S - deploy

| Implementation | gas_used  | vs Best | % metered |
| -------------- | --------- | ------- | --------- |
| W3S_evm        | 2,636,207 | -       | 4.5%      |


### W3S - grantVolunteerRole

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| W3S_evm        | 48,223   | -       | 56.0%     |


### W3S - pauseSales

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| W3S_evm        | 47,282   | -       | 55.5%     |


### W3S - redeemTicketStaff

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| W3S_evm        | 203,140  | -       | 89.5%     |


### W3S - revokeVolunteerRole

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| W3S_evm        | 26,848   | -       | 38.9%     |


### W3S - setMerkleRoot

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| W3S_evm        | 31,384   | -       | 30.8%     |


### W3S - unpauseSales

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| W3S_evm        | 25,580   | -       | 36.4%     |


### WETH9 - deploy

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| WETH9_evm      | 487,741  | -       | 13.7%     |


### WETH9 - deposit

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| WETH9_evm      | 44,978   | -       | 53.2%     |


### WETH9 - transfer

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| WETH9_evm      | 51,313   | -       | 58.0%     |


### WETH9 - withdraw

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| WETH9_evm      | 34,953   | -       | 45.9%     |


### XENCrypto - deploy

| Implementation | gas_used  | vs Best | % metered |
| -------------- | --------- | ------- | --------- |
| XENCrypto_evm  | 2,221,205 | -       | 3.1%      |


### flipper - deploy

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| flipper_evm    | 92,953   | -       | 2.7%      |


### flipper - flip

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| flipper_evm    | 43,339   | -       | 51.4%     |


### incrementer - deploy

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| incrementer_evm | 105,806  | -       | 2.4%      |


### incrementer - inc

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| incrementer_evm | 43,561   | -       | 51.3%     |


## Chain: eth-rpc

### BenchERC1155 - create

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC1155_evm     | 799,616,351   | -       | 342,907,191      | -                 | 42.9%     | 50,438      | 10,432            |
| BenchERC1155_pvm     | 942,092,203   | +17.8%  | 485,383,043      | +41.5%            | 51.5%     | 60,327      | 19,754            |
| bench_erc1155_stylus | 1,194,841,165 | +49.4%  | 738,132,005      | +115.3%           | 61.8%     | 70,459      | 30,862            |
| bench_erc1155_ink    | 1,322,937,826 | +65.4%  | 866,228,666      | +152.6%           | 65.5%     | 57,518      | 28,038            |


### BenchERC1155 - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC1155_evm     | 722,977,862   | -       | 1,425,734        | -                 | 0.2%      | 6,934       | 8,024             |
| BenchERC1155_pvm     | 893,455,631   | +23.6%  | 12,524,738       | +778.5%           | 1.4%      | 6,934       | 7,765             |
| bench_erc1155_stylus | 1,061,493,682 | +46.8%  | 16,851,241       | +1081.9%          | 1.6%      | 6,934       | 8,374             |
| bench_erc1155_ink    | 1,113,603,115 | +54.0%  | 112,707,286      | +7805.2%          | 10.1%     | 17,191      | 8,498             |


### BenchERC20 - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC20_evm     | 928,355,440   | -       | 207,576,448      | -                 | 22.4%     | 27,448      | 8,251             |
| BenchERC20_pvm     | 1,150,963,698 | +24.0%  | 290,012,259      | +39.7%            | 25.2%     | 27,448      | 7,401             |
| bench_erc20_ink    | 1,529,967,413 | +64.8%  | 597,339,824      | +187.8%           | 39.0%     | 27,448      | 7,226             |
| bench_erc20_stylus | 1,719,153,995 | +85.2%  | 685,229,483      | +230.1%           | 39.9%     | 58,219      | 8,495             |


### BenchERC20 - transfer

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC20_evm     | 803,589,064   | -       | 346,447,736      | -                 | 43.1%     | 50,353      | 10,334            |
| BenchERC20_pvm     | 933,966,017   | +16.2%  | 476,824,689      | +37.6%            | 51.1%     | 59,216      | 18,384            |
| bench_erc20_stylus | 1,316,894,748 | +63.9%  | 859,753,420      | +148.2%           | 65.3%     | 69,955      | 30,023            |
| bench_erc20_ink    | 1,616,806,983 | +101.2% | 1,159,652,559    | +234.7%           | 71.7%     | 84,247      | 22,760            |


### BenchERC721 - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC721_evm     | 722,129,794   | -       | 1,415,230        | -                 | 0.2%      | 6,934       | 7,536             |
| BenchERC721_pvm     | 849,161,381   | +17.6%  | 12,524,738       | +785.0%           | 1.5%      | 6,934       | 6,759             |
| bench_erc721_stylus | 924,673,378   | +28.0%  | 17,455,861       | +1133.4%          | 1.9%      | 6,934       | 7,597             |
| bench_erc721_ink    | 1,011,644,377 | +40.1%  | 98,660,554       | +6871.3%          | 9.8%      | 17,191      | 8,269             |


### BenchERC721 - mint

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC721_evm     | 907,636,021   | -       | 450,926,861      | -                 | 49.7%     | 70,964      | 9,649             |
| BenchERC721_pvm     | 1,018,411,695 | +12.2%  | 561,702,535      | +24.6%            | 55.2%     | 78,059      | 16,877            |
| bench_erc721_stylus | 1,368,231,055 | +50.7%  | 911,521,895      | +102.1%           | 66.6%     | 82,441      | 21,891            |
| bench_erc721_ink    | 1,405,512,965 | +54.9%  | 948,803,805      | +110.4%           | 67.5%     | 84,609      | 22,273            |


### BenchStorage - deploy

| Implementation       | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchStorage_evm     | 712,344,394 | -       | 1,294,030        | -                 | 0.2%      | 6,934       | 7,672             |
| BenchStorage_pvm     | 764,067,695 | +7.3%   | 12,121,658       | +836.7%           | 1.6%      | 6,934       | 7,590             |
| bench_storage_ink    | 859,929,792 | +20.7%  | 98,593,374       | +7519.1%          | 11.5%     | 17,191      | 8,035             |
| bench_storage_stylus | 879,302,462 | +23.4%  | 9,259,901        | +615.6%           | 1.1%      | 6,934       | 7,317             |


### BenchStorage - read_100

| Implementation       | ref_time       | vs Best  | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | -------------- | -------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchStorage_evm     | 557,246,950    | -        | 100,105,622      | -                 | 18.0%     | 8,793       | 5,462             |
| BenchStorage_pvm     | 2,090,337,331  | +275.1%  | 1,633,196,003    | +1531.5%          | 78.1%     | 11,358      | 8,131             |
| bench_storage_ink    | 9,198,082,933  | +1550.6% | 8,740,928,509    | +8631.7%          | 95.0%     | 1,047,901   | 9,461             |
| bench_storage_stylus | 14,419,480,010 | +2487.6% | 13,962,325,586   | +13847.6%         | 96.8%     | 1,044,393   | 16,267            |


### CoinTool_App - deploy

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| CoinTool_App_evm | 902,352,076   | -       | 147,619,528      | -                 | 16.4%     | 27,480      | 8,500             |
| CoinTool_App_pvm | 1,392,536,524 | +54.3%  | 217,040,815      | +47.0%            | 15.6%     | 27,448      | 8,432             |


### CoinTool_App - t

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| CoinTool_App_evm | 5,189,153,101 | -       | 4,727,768,669    | -                 | 91.1%     | 432,337     | 33,239            |
| CoinTool_App_pvm | 7,004,572,102 | +35.0%  | 6,543,187,670    | +38.4%            | 93.4%     | 752,467     | 169,406           |


### Computation - deploy

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Computation_evm    | 709,245,684 | -       | 1,255,650        | -                 | 0.2%      | 6,934       | 7,287             |
| computation_stylus | 752,514,067 | +6.1%   | 9,797,341        | +680.3%           | 1.3%      | 6,934       | 7,701             |
| Computation_pvm    | 756,897,733 | +6.7%   | 12,457,558       | +892.1%           | 1.6%      | 6,934       | 7,521             |
| computation_ink    | 822,060,937 | +15.9%  | 94,629,754       | +7436.3%          | 11.5%     | 17,191      | 8,209             |


### Computation - odd_product_10

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Computation_evm    | 472,654,771 | -       | 15,945,611       | -                 | 3.4%      | 8,504       | 5,338             |
| computation_stylus | 518,066,029 | +9.6%   | 61,356,869       | +284.8%           | 11.8%     | 10,686      | 7,256             |
| Computation_pvm    | 548,048,260 | +16.0%  | 91,339,100       | +472.8%           | 16.7%     | 10,793      | 7,703             |
| computation_ink    | 548,581,760 | +16.1%  | 91,872,600       | +476.2%           | 16.7%     | 19,994      | 7,343             |


### Computation - triangle_10

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Computation_evm    | 469,487,565 | -       | 12,778,405       | -                 | 2.7%      | 8,504       | 5,338             |
| computation_stylus | 516,050,629 | +9.9%   | 59,341,469       | +364.4%           | 11.5%     | 10,686      | 7,081             |
| Computation_pvm    | 539,314,860 | +14.9%  | 82,605,700       | +546.4%           | 15.3%     | 10,793      | 7,703             |
| computation_ink    | 546,096,100 | +16.3%  | 89,386,940       | +599.5%           | 16.4%     | 19,994      | 7,343             |


### DocumentAccessManagement - configurePublicAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 860,794,976   | -       | 403,221,480      | -                 | 46.8%     | 69,244      | 19,581            |
| DocumentAccessManagement_pvm | 1,180,568,143 | +37.1%  | 722,981,551      | +79.3%            | 61.2%     | 149,808     | 100,031           |


### DocumentAccessManagement - createDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 2,576,397,149 | -       | 2,115,850,861    | -                 | 82.1%     | 295,963     | 18,253            |
| DocumentAccessManagement_pvm | 3,546,700,521 | +37.7%  | 3,086,154,233    | +45.9%            | 87.0%     | 396,879     | 98,849            |


### DocumentAccessManagement - createDocument2

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 2,576,409,885 | -       | 2,115,863,597    | -                 | 82.1%     | 295,995     | 19,285            |
| DocumentAccessManagement_pvm | 3,546,762,985 | +37.7%  | 3,086,216,697    | +45.9%            | 87.0%     | 396,943     | 99,735            |


### DocumentAccessManagement - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 858,130,545   | -       | 3,099,708        | -                 | 0.4%      | 6,934       | 7,706             |
| DocumentAccessManagement_pvm | 2,165,248,244 | +152.3% | 12,524,738       | +304.1%           | 0.6%      | 6,934       | 7,772             |


### DocumentAccessManagement - grantAccessWithShare

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 2,487,839,023 | -       | 2,027,711,807    | -                 | 81.5%     | 285,674     | 19,351            |
| DocumentAccessManagement_pvm | 3,229,686,647 | +29.8%  | 2,769,559,431    | +36.6%            | 85.8%     | 366,204     | 99,801            |


### DocumentAccessManagement - registerKeys

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 857,187,706   | -       | 399,614,210      | -                 | 46.6%     | 58,891      | 18,906            |
| DocumentAccessManagement_pvm | 1,340,965,508 | +56.4%  | 883,378,916      | +121.1%           | 65.9%     | 160,098     | 99,356            |


### DocumentAccessManagement - revokeAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 3,282,527,673 | -       | 2,824,941,081    | -                 | 86.1%     | 419,073     | 20,066            |
| DocumentAccessManagement_pvm | 4,092,518,321 | +24.7%  | 3,634,931,729    | +28.7%            | 88.8%     | 500,280     | 100,516           |


### DocumentAccessManagement - transferOwnership

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 2,757,701,633 | -       | 2,300,115,041    | -                 | 83.4%     | 346,954     | 19,864            |
| DocumentAccessManagement_pvm | 3,511,949,140 | +27.4%  | 3,054,362,548    | +32.8%            | 87.0%     | 437,773     | 100,314           |


### DocumentAccessManagement - updateDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 1,141,833,146 | -       | 681,286,858      | -                 | 59.7%     | 100,824     | 16,400            |
| DocumentAccessManagement_pvm | 1,592,495,758 | +39.5%  | 1,131,949,470    | +66.1%            | 71.1%     | 181,417     | 96,581            |


### DotNS - createSubdomain

| Implementation | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 2,743,306,464  | -       | 2,283,598,320    | -                 | 83.2%     | 83,613      | 33,578            |
| DotNS_evm      | 3,097,361,485  | +12.9%  | 2,637,653,341    | +15.5%            | 85.2%     | 294,479     | 19,636            |
| DotNS_pvm      | 12,321,436,390 | +349.1% | 11,861,728,246   | +419.4%           | 96.3%     | 382,054     | 87,152            |


### DotNS - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 837,059,317   | -       | 2,838,724        | +76.7%            | 0.3%      | 6,934       | 7,569             |
| dotns_rust     | 1,075,515,579 | +28.5%  | 1,606,719        | -                 | 0.1%      | 6,934       | 8,124             |
| DotNS_pvm      | 1,926,961,286 | +130.2% | 12,524,738       | +679.5%           | 0.6%      | 6,934       | 8,222             |


### DotNS - register

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 2,060,324,654 | -       | 1,602,332,086    | -                 | 77.8%     | 72,570      | 32,414            |
| DotNS_evm      | 2,627,218,547 | +27.5%  | 2,169,212,883    | +35.4%            | 82.6%     | 263,190     | 16,823            |
| DotNS_pvm      | 6,707,512,757 | +225.6% | 6,249,507,093    | +290.0%           | 93.2%     | 350,830     | 84,438            |


### DotNS - register_with_duration

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 2,058,993,443 | -       | 1,601,000,875    | -                 | 77.8%     | 72,610      | 32,763            |
| DotNS_evm      | 2,620,122,012 | +27.3%  | 2,162,116,348    | +35.0%            | 82.5%     | 263,222     | 17,435            |
| DotNS_pvm      | 6,553,628,073 | +218.3% | 6,095,622,409    | +280.7%           | 93.0%     | 350,732     | 85,083            |


### DotNS - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 1,513,101,668 | -       | 1,055,528,172    | -                 | 69.8%     | 52,666      | 33,189            |
| DotNS_evm      | 2,703,160,819 | +78.7%  | 2,245,574,227    | +112.7%           | 83.1%     | 284,024     | 19,842            |
| DotNS_pvm      | 5,695,482,933 | +276.4% | 5,237,896,341    | +396.2%           | 92.0%     | 352,214     | 87,117            |


### DotNS - renew

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 941,878,987   | -       | 483,886,419      | -                 | 51.4%     | 57,791      | 15,114            |
| dotns_rust     | 1,598,904,414 | +69.8%  | 1,140,911,846    | +135.8%           | 71.4%     | 52,762      | 29,844            |
| DotNS_pvm      | 3,388,445,227 | +259.8% | 2,930,439,563    | +505.6%           | 86.5%     | 124,885     | 81,907            |


### DotNS - setAddress

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 1,002,031,726 | -       | 544,039,158      | -                 | 54.3%     | 68,080      | 15,151            |
| dotns_rust     | 1,679,097,099 | +67.6%  | 1,221,104,531    | +124.5%           | 72.7%     | 52,762      | 29,707            |
| DotNS_pvm      | 3,408,940,584 | +240.2% | 2,950,934,920    | +442.4%           | 86.6%     | 145,463     | 82,259            |


### DotNS - setMetadata

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 936,900,074   | -       | 478,907,506      | -                 | 51.1%     | 57,759      | 17,969            |
| dotns_rust     | 1,618,513,918 | +72.8%  | 1,160,521,350    | +142.3%           | 71.7%     | 52,762      | 29,532            |
| DotNS_pvm      | 3,267,349,192 | +248.7% | 2,809,343,528    | +486.6%           | 86.0%     | 124,853     | 85,485            |


### DotNS - setSubdomainOwner

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 2,936,323,034 | -       | 2,477,047,058    | -                 | 84.4%     | 84,220      | 30,492            |
| DotNS_evm      | 2,987,917,068 | +1.8%   | 2,528,641,092    | +2.1%             | 84.6%     | 294,636     | 17,544            |
| DotNS_pvm      | 9,356,213,448 | +218.6% | 8,896,937,472    | +259.2%           | 95.1%     | 372,211     | 84,158            |


### DotNS - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 2,221,647,892 | -       | 1,763,655,324    | -                 | 79.4%     | 73,276      | 33,123            |
| DotNS_evm      | 2,678,234,795 | +20.6%  | 2,220,229,131    | +25.9%            | 82.9%     | 284,024     | 15,898            |
| DotNS_pvm      | 5,508,148,570 | +147.9% | 5,050,142,906    | +186.3%           | 91.7%     | 361,664     | 82,979            |


### Escrow - create_simple

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| escrow_rust    | 2,458,531,503 | -       | 2,000,434,167    | -                 | 81.4%     | 93,287      | 21,301            |
| Escrow_evm     | 2,647,322,726 | +7.7%   | 2,189,225,390    | +9.4%             | 82.7%     | 310,692     | 13,338            |
| Escrow_pvm     | 3,320,599,695 | +35.1%  | 2,862,502,359    | +43.1%            | 86.2%     | 361,141     | 43,220            |


### Escrow - create_with_arbiter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| escrow_rust    | 2,458,544,239 | -       | 2,000,446,903    | -                 | 81.4%     | 93,319      | 21,780            |
| Escrow_evm     | 2,647,385,894 | +7.7%   | 2,189,288,558    | +9.4%             | 82.7%     | 310,820     | 14,162            |
| Escrow_pvm     | 3,318,189,207 | +35.0%  | 2,860,091,871    | +43.0%            | 86.2%     | 361,268     | 43,869            |


### Escrow - create_with_expiry

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| escrow_rust    | 2,458,544,239 | -       | 2,000,446,903    | -                 | 81.4%     | 93,319      | 21,883            |
| Escrow_evm     | 2,647,398,630 | +7.7%   | 2,189,301,294    | +9.4%             | 82.7%     | 310,852     | 14,604            |
| Escrow_pvm     | 3,316,728,671 | +34.9%  | 2,858,631,335    | +42.9%            | 86.2%     | 361,267     | 44,311            |


### Escrow - create_with_releaseTime

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| escrow_rust    | 2,458,544,239 | -       | 2,000,446,903    | -                 | 81.4%     | 93,319      | 21,850            |
| Escrow_evm     | 2,647,423,590 | +7.7%   | 2,189,326,254    | +9.4%             | 82.7%     | 310,884     | 14,227            |
| Escrow_pvm     | 3,314,936,951 | +34.8%  | 2,856,839,615    | +42.8%            | 86.2%     | 361,202     | 43,934            |


### Escrow - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Escrow_evm     | 1,006,208,734 | -       | 235,481,935      | +40.3%            | 23.4%     | 37,737      | 8,533             |
| escrow_rust    | 1,079,161,741 | +7.3%   | 167,836,939      | -                 | 15.6%     | 17,191      | 7,935             |
| Escrow_pvm     | 1,504,741,665 | +49.5%  | 257,344,308      | +53.3%            | 17.1%     | 37,705      | 8,620             |


### Escrow - refund

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Escrow_evm     | 1,632,144,047 | -       | 1,175,408,695    | -                 | 72.0%     | 161,696     | 14,289            |
| Escrow_pvm     | 1,787,516,793 | +9.5%   | 1,330,781,441    | +13.2%            | 74.4%     | 191,274     | 43,996            |
| escrow_rust    | 1,948,975,262 | +19.4%  | 1,492,253,006    | +27.0%            | 76.6%     | 77,978      | 19,845            |


### Escrow - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Escrow_evm     | 1,630,256,205 | -       | 1,173,520,853    | -                 | 72.0%     | 161,696     | 16,195            |
| Escrow_pvm     | 1,789,935,273 | +9.8%   | 1,333,199,921    | +13.6%            | 74.5%     | 191,274     | 45,902            |
| escrow_rust    | 1,942,120,950 | +19.1%  | 1,485,398,694    | +26.6%            | 76.5%     | 77,976      | 23,206            |


### FiatTokenProxy - approve

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 867,889,835   | -       | 410,735,411      | -                 | 47.3%     | 70,861      | 26,765            |
| FiatTokenProxy_pvm | 1,180,874,640 | +36.1%  | 723,707,120      | +76.2%            | 61.3%     | 167,515     | 124,472           |


### FiatTokenProxy - changeAdmin

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 687,817,653 | -       | 231,095,397      | -                 | 33.6%     | 40,410      | 7,177             |
| FiatTokenProxy_pvm | 759,877,547 | +10.5%  | 303,155,291      | +31.2%            | 39.9%     | 48,934      | 15,951            |


### FiatTokenProxy - configureMinter

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,070,829,348 | -       | 613,661,828      | -                 | 57.3%     | 101,699     | 26,901            |
| FiatTokenProxy_pvm | 1,388,259,890 | +29.6%  | 931,092,370      | +51.7%            | 67.1%     | 198,318     | 124,608           |


### FiatTokenProxy - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 950,881,882   | -       | 221,244,040      | -                 | 23.3%     | 31,458      | 8,081             |
| FiatTokenProxy_pvm | 1,125,349,189 | +18.3%  | 263,769,577      | +19.2%            | 23.4%     | 31,458      | 9,578             |


### FiatTokenProxy - initialize

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 2,074,194,811 | -       | 1,611,972,235    | -                 | 77.7%     | 246,711     | 26,429            |
| FiatTokenProxy_pvm | 2,653,488,984 | +27.9%  | 2,191,266,408    | +35.9%            | 82.6%     | 343,074     | 124,136           |


### FiatTokenProxy - mint

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,535,282,411 | -       | 1,078,114,891    | -                 | 70.2%     | 163,433     | 27,145            |
| FiatTokenProxy_pvm | 2,051,382,989 | +33.6%  | 1,594,215,469    | +47.9%            | 77.7%     | 260,021     | 124,852           |


### FiatTokenProxy - transfer

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,448,939,837 | -       | 991,772,317      | -                 | 68.4%     | 153,176     | 26,903            |
| FiatTokenProxy_pvm | 1,926,851,940 | +33.0%  | 1,469,684,420    | +48.2%            | 76.3%     | 249,731     | 124,610           |


### FiatTokenProxy - transferFrom

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,792,810,793 | -       | 1,335,250,393    | -                 | 74.5%     | 194,454     | 24,179            |
| FiatTokenProxy_pvm | 2,439,450,166 | +36.1%  | 1,981,889,766    | +48.4%            | 81.2%     | 291,105     | 121,234           |


### FiatTokenV2_2 - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenV2_2_evm | 1,334,587,618 | -       | 382,802,032      | -                 | 28.7%     | 58,283      | 8,414             |
| FiatTokenV2_2_pvm | 2,785,743,363 | +108.7% | 415,446,501      | +8.5%             | 14.9%     | 58,477      | 8,366             |


### Fibonacci - deploy

| Implementation                      | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| fibonacci_u32_rust                  | 706,494,835 | -       | 67,180           | -                 | 0.0%      | 6,934       | 6,784             |
| Fibonacci_evm                       | 707,582,570 | +0.2%   | 1,235,450        | +1739.0%          | 0.2%      | 6,934       | 6,698             |
| fibonacci_u128_rust                 | 707,799,502 | +0.2%   | 67,180           | -                 | 0.0%      | 6,934       | 6,557             |
| fibonacci_u32_macro_bump_alloc_rust | 709,667,914 | +0.4%   | 67,180           | -                 | 0.0%      | 6,934       | 6,797             |
| fibonacci_u32_macro_no_alloc_rust   | 710,408,836 | +0.6%   | 67,180           | -                 | 0.0%      | 6,934       | 6,898             |
| fibonacci_u256_rust                 | 718,510,657 | +1.7%   | 67,180           | -                 | 0.0%      | 6,934       | 6,251             |
| Fibonacci_pvm                       | 732,932,459 | +3.7%   | 11,718,578       | +17343.6%         | 1.6%      | 6,934       | 7,004             |
| fibonacci_u32_stylus                | 736,132,438 | +4.2%   | 8,991,181        | +13283.7%         | 1.2%      | 6,934       | 6,814             |
| fibonacci_u32_ink                   | 810,829,259 | +14.8%  | 94,898,474       | +141160.0%        | 11.7%     | 17,191      | 6,085             |


### Fibonacci - fib_10

| Implementation                      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| fibonacci_u32_rust                  | 578,114,854   | -       | 121,405,694      | -                 | 21.0%     | 8,433       | 5,333             |
| fibonacci_u32_macro_bump_alloc_rust | 582,305,059   | +0.7%   | 125,595,899      | +3.5%             | 21.6%     | 8,630       | 5,167             |
| Fibonacci_evm                       | 588,954,142   | +1.9%   | 132,244,982      | +8.9%             | 22.5%     | 8,404       | 5,451             |
| fibonacci_u32_macro_no_alloc_rust   | 589,233,457   | +1.9%   | 132,524,297      | +9.2%             | 22.5%     | 8,676       | 5,614             |
| fibonacci_u32_stylus                | 590,175,961   | +2.1%   | 133,466,801      | +9.9%             | 22.6%     | 9,719       | 6,421             |
| fibonacci_u128_rust                 | 738,675,955   | +27.8%  | 281,966,795      | +132.3%           | 38.2%     | 8,514       | 5,348             |
| fibonacci_u32_ink                   | 816,909,403   | +41.3%  | 360,200,243      | +196.7%           | 44.1%     | 29,537      | 6,670             |
| Fibonacci_pvm                       | 876,873,957   | +51.7%  | 420,164,797      | +246.1%           | 47.9%     | 9,351       | 6,398             |
| fibonacci_u256_rust                 | 4,041,606,844 | +599.1% | 3,584,897,684    | +2852.8%          | 88.7%     | 9,179       | 5,985             |


### Fibonacci_u256 - deploy

| Implementation                           | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 706,799,738 | -       | 1,225,754        | +1724.6%          | 0.2%      | 6,934       | 7,623             |
| Fibonacci_u256_evm                       | 706,864,974 | +0.0%   | 1,226,562        | +1725.8%          | 0.2%      | 6,934       | 7,182             |
| fibonacci_u256_iter_primitive_types_rust | 716,432,854 | +1.4%   | 67,180           | -                 | 0.0%      | 6,934       | 7,337             |
| fibonacci_u256_iter_rust                 | 717,061,027 | +1.5%   | 67,180           | -                 | 0.0%      | 6,934       | 6,385             |
| fibonacci_u256_primitive_types_rust      | 717,222,097 | +1.5%   | 67,180           | -                 | 0.0%      | 6,934       | 6,601             |
| fibonacci_u256_rust                      | 718,510,657 | +1.7%   | 67,180           | -                 | 0.0%      | 6,934       | 5,563             |
| Fibonacci_u256_iter_pvm                  | 734,092,163 | +3.9%   | 11,718,578       | +17343.6%         | 1.6%      | 6,934       | 6,816             |
| Fibonacci_u256_pvm                       | 735,670,649 | +4.1%   | 11,718,578       | +17343.6%         | 1.6%      | 6,934       | 6,165             |
| fibonacci_u256_ink                       | 827,161,757 | +17.0%  | 94,898,474       | +141160.0%        | 11.5%     | 17,191      | 6,881             |
| fibonacci_u256_iter_ink                  | 827,274,506 | +17.0%  | 94,898,474       | +141160.0%        | 11.5%     | 17,191      | 7,393             |


### Fibonacci_u256 - fib_10

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 462,839,753   | -       | 6,130,593        | -                 | 1.3%      | 8,356       | 5,167             |
| Fibonacci_u256_iter_pvm                  | 505,487,573   | +9.2%   | 48,778,413       | +695.7%           | 9.6%      | 9,423       | 6,300             |
| fibonacci_u256_iter_primitive_types_rust | 522,370,847   | +12.9%  | 65,661,687       | +971.0%           | 12.6%     | 9,050       | 5,889             |
| Fibonacci_u256_evm                       | 566,630,393   | +22.4%  | 109,921,233      | +1693.0%          | 19.4%     | 8,360       | 5,199             |
| fibonacci_u256_iter_rust                 | 614,068,834   | +32.7%  | 157,359,674      | +2466.8%          | 25.6%     | 9,089       | 5,791             |
| fibonacci_u256_iter_ink                  | 716,752,236   | +54.9%  | 260,043,076      | +4141.7%          | 36.3%     | 30,558      | 7,663             |
| Fibonacci_u256_pvm                       | 1,178,322,907 | +154.6% | 721,613,747      | +11670.7%         | 61.2%     | 9,521       | 6,228             |
| fibonacci_u256_primitive_types_rust      | 2,481,890,904 | +436.2% | 2,025,181,744    | +32934.0%         | 81.6%     | 9,099       | 5,877             |
| fibonacci_u256_ink                       | 2,634,259,405 | +469.2% | 2,177,550,245    | +35419.4%         | 82.7%     | 30,551      | 7,217             |
| fibonacci_u256_rust                      | 4,041,606,844 | +773.2% | 3,584,897,684    | +58375.5%         | 88.7%     | 9,179       | 5,985             |


### Fibonacci_u256 - fib_15

| Implementation                           | ref_time       | vs Best  | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | -------------- | -------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 465,258,063    | -        | 8,548,903        | -                 | 1.8%      | 8,356       | 5,167             |
| Fibonacci_u256_iter_pvm                  | 526,313,373    | +13.1%   | 69,604,213       | +714.2%           | 13.2%     | 9,423       | 6,300             |
| fibonacci_u256_iter_primitive_types_rust | 548,571,047    | +17.9%   | 91,861,887       | +974.5%           | 16.7%     | 9,050       | 5,889             |
| fibonacci_u256_iter_rust                 | 691,325,834    | +48.6%   | 234,616,674      | +2644.4%          | 33.9%     | 9,089       | 5,616             |
| fibonacci_u256_iter_ink                  | 763,442,336    | +64.1%   | 306,733,176      | +3488.0%          | 40.2%     | 30,558      | 7,663             |
| Fibonacci_u256_evm                       | 1,672,297,327  | +259.4%  | 1,215,588,167    | +14119.2%         | 72.7%     | 8,360       | 5,199             |
| Fibonacci_u256_pvm                       | 8,417,639,707  | +1709.2% | 7,960,930,547    | +93022.2%         | 94.6%     | 9,521       | 6,228             |
| fibonacci_u256_primitive_types_rust      | 22,885,007,440 | +4818.8% | 22,428,285,184   | +262252.8%        | 98.0%     | 9,102       | 5,877             |
| fibonacci_u256_ink                       | 22,977,048,301 | +4838.6% | 22,520,326,045   | +263329.4%        | 98.0%     | 30,554      | 7,392             |
| fibonacci_u256_rust                      | 40,293,896,160 | +8560.5% | 39,837,173,904   | +465891.6%        | 98.9%     | 9,182       | 5,985             |


### Fibonacci_u256 - fib_5

| Implementation                           | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 460,421,443 | -       | 3,712,283        | -                 | 0.8%      | 8,356       | 5,167             |
| Fibonacci_u256_evm                       | 466,910,210 | +1.4%   | 10,201,050       | +174.8%           | 2.2%      | 8,360       | 5,024             |
| Fibonacci_u256_iter_pvm                  | 484,661,773 | +5.3%   | 27,952,613       | +653.0%           | 5.8%      | 9,423       | 6,300             |
| fibonacci_u256_iter_primitive_types_rust | 496,170,647 | +7.8%   | 39,461,487       | +963.0%           | 8.0%      | 9,050       | 5,889             |
| Fibonacci_u256_pvm                       | 525,333,307 | +14.1%  | 68,624,147       | +1748.6%          | 13.1%     | 9,521       | 6,228             |
| fibonacci_u256_iter_rust                 | 536,811,834 | +16.6%  | 80,102,674       | +2057.8%          | 14.9%     | 9,089       | 5,791             |
| fibonacci_u256_primitive_types_rust      | 642,435,324 | +39.5%  | 185,726,164      | +4903.0%          | 28.9%     | 9,099       | 5,877             |
| fibonacci_u256_iter_ink                  | 670,062,136 | +45.5%  | 213,352,976      | +5647.2%          | 31.8%     | 30,558      | 7,663             |
| fibonacci_u256_rust                      | 771,754,704 | +67.6%  | 315,045,544      | +8386.6%          | 40.8%     | 9,179       | 5,985             |
| fibonacci_u256_ink                       | 800,245,405 | +73.8%  | 343,536,245      | +9154.0%          | 42.9%     | 30,551      | 7,392             |


### FungibleCredential - burn

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,091,230,377 | -       | 634,089,049      | -                 | 58.1%     | 97,801      | 13,934            |
| FungibleCredential_pvm   | 1,395,310,939 | +27.9%  | 938,169,611      | +48.0%            | 67.2%     | 156,350     | 71,992            |
| fungible_credential_rust | 1,630,764,801 | +49.4%  | 1,173,636,569    | +85.1%            | 72.0%     | 67,344      | 24,490            |


### FungibleCredential - createClass_nontransferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,432,359,193 | -       | 973,502,289      | -                 | 68.0%     | 139,190     | 16,656            |
| fungible_credential_rust | 1,513,510,340 | +5.7%   | 1,054,666,532    | +8.3%             | 69.7%     | 57,228      | 27,301            |
| FungibleCredential_pvm   | 2,290,873,640 | +59.9%  | 1,832,016,736    | +88.2%            | 80.0%     | 249,186     | 74,856            |


### FungibleCredential - createClass_transferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,432,347,373 | -       | 973,490,469      | -                 | 68.0%     | 139,190     | 16,414            |
| fungible_credential_rust | 1,500,340,479 | +4.7%   | 1,041,496,671    | +7.0%             | 69.4%     | 57,228      | 27,230            |
| FungibleCredential_pvm   | 2,290,936,332 | +59.9%  | 1,832,079,428    | +88.2%            | 80.0%     | 249,250     | 74,439            |


### FungibleCredential - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 966,669,489   | -       | 147,476,727      | -                 | 15.3%     | 27,480      | 8,552             |
| fungible_credential_rust | 1,155,902,156 | +19.6%  | 167,295,968      | +13.4%            | 14.5%     | 17,191      | 8,698             |
| FungibleCredential_pvm   | 1,926,253,859 | +99.3%  | 164,721,062      | +11.7%            | 8.6%      | 27,448      | 8,749             |


### FungibleCredential - issue

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 2,233,940,100 | -       | 1,776,353,508    | -                 | 79.5%     | 251,982     | 16,926            |
| FungibleCredential_pvm   | 2,745,357,175 | +22.9%  | 2,287,770,583    | +28.8%            | 83.3%     | 310,147     | 75,126            |
| fungible_credential_rust | 2,958,085,383 | +32.4%  | 2,500,498,791    | +40.8%            | 84.5%     | 149,473     | 27,478            |


### FungibleCredential - issue_more

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,150,196,362 | -       | 692,609,770      | -                 | 60.2%     | 108,192     | 13,970            |
| FungibleCredential_pvm   | 1,453,943,107 | +26.4%  | 996,356,515      | +43.9%            | 68.5%     | 166,741     | 72,203            |
| fungible_credential_rust | 1,829,056,156 | +59.0%  | 1,371,482,660    | +98.0%            | 75.0%     | 77,704      | 24,514            |


### FungibleCredential - revoke

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,092,638,319 | -       | 635,051,727      | -                 | 58.1%     | 97,903      | 13,938            |
| FungibleCredential_pvm   | 1,395,328,001 | +27.7%  | 937,741,409      | +47.7%            | 67.2%     | 156,452     | 71,996            |
| fungible_credential_rust | 1,675,216,496 | +53.3%  | 1,217,643,000    | +91.7%            | 72.7%     | 67,446      | 24,319            |


### FungibleCredential - transfer

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 2,410,468,879 | -       | 1,952,908,479    | -                 | 81.0%     | 272,618     | 17,599            |
| FungibleCredential_pvm   | 3,050,178,116 | +26.5%  | 2,592,617,716    | +32.8%            | 85.0%     | 330,879     | 75,799            |
| fungible_credential_rust | 3,125,594,625 | +29.7%  | 2,668,034,225    | +36.6%            | 85.4%     | 159,654     | 28,042            |


### KeyRegistry - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 773,943,487   | -       | 2,056,984        | +39.7%            | 0.3%      | 6,934       | 8,134             |
| key_registry_rust | 1,006,394,938 | +30.0%  | 1,472,359        | -                 | 0.1%      | 6,934       | 8,123             |
| KeyRegistry_pvm   | 1,341,310,766 | +73.3%  | 12,524,738       | +750.7%           | 0.9%      | 6,934       | 7,971             |


### KeyRegistry - fetchPrekeyBundle

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 1,665,424,406 | -       | 1,208,715,246    | -                 | 72.6%     | 187,320     | 14,412            |
| KeyRegistry_pvm   | 2,518,039,233 | +51.2%  | 2,061,330,073    | +70.5%            | 81.9%     | 221,922     | 49,299            |
| key_registry_rust | 2,744,464,573 | +64.8%  | 2,287,755,413    | +89.3%            | 83.4%     | 150,346     | 29,157            |


### KeyRegistry - registerIdentity

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 1,851,843,332 | -       | 1,392,567,356    | -                 | 75.2%     | 187,684     | 13,644            |
| key_registry_rust | 1,899,993,110 | +2.6%   | 1,440,717,134    | +3.5%             | 75.8%     | 89,095      | 27,857            |
| KeyRegistry_pvm   | 2,374,663,195 | +28.2%  | 1,915,387,219    | +37.5%            | 80.7%     | 222,093     | 47,969            |


### KeyRegistry - updateSignedPrekey

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 1,216,778,112 | -       | 758,340,280      | -                 | 62.3%     | 105,468     | 11,070            |
| KeyRegistry_pvm   | 1,603,471,806 | +31.8%  | 1,145,033,974    | +51.0%            | 71.4%     | 160,647     | 45,698            |
| key_registry_rust | 1,654,582,836 | +36.0%  | 1,196,158,100    | +57.7%            | 72.3%     | 68,742      | 25,396            |


### KeyRegistry - uploadOneTimePrekeys

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 1,774,010,363 | -       | 1,315,572,531    | -                 | 74.2%     | 197,941     | 14,260            |
| KeyRegistry_pvm   | 2,146,456,737 | +21.0%  | 1,688,018,905    | +28.3%            | 78.6%     | 232,350     | 48,614            |
| key_registry_rust | 2,623,602,314 | +47.9%  | 2,165,164,482    | +64.6%            | 82.5%     | 150,537     | 28,551            |


### Log - addWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,170,212,662 | -       | 713,045,142      | -                 | 60.9%     | 107,062     | 15,518            |
| Log_pvm        | 1,443,322,160 | +23.3%  | 986,154,640      | +38.3%            | 68.3%     | 154,803     | 63,957            |
| log_rust       | 1,742,488,897 | +48.9%  | 1,285,321,377    | +80.3%            | 73.8%     | 86,515      | 25,813            |


### Log - append

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,453,384,067 | -       | 996,216,547      | -                 | 68.5%     | 148,186     | 15,145            |
| log_rust       | 1,544,238,731 | +6.3%   | 1,087,084,307    | +9.1%             | 70.4%     | 55,786      | 25,663            |
| Log_pvm        | 1,804,286,690 | +24.1%  | 1,347,119,170    | +35.2%            | 74.7%     | 195,959     | 63,759            |


### Log - append_2

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,453,384,067 | -       | 996,216,547      | -                 | 68.5%     | 148,186     | 15,452            |
| log_rust       | 1,544,238,731 | +6.3%   | 1,087,084,307    | +9.1%             | 70.4%     | 55,786      | 25,696            |
| Log_pvm        | 1,804,286,690 | +24.1%  | 1,347,119,170    | +35.2%            | 74.7%     | 195,959     | 63,891            |


### Log - create_nonpermissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,309,314,435 | -       | 852,579,083      | -                 | 65.1%     | 127,509     | 14,976            |
| log_rust       | 1,758,898,135 | +34.3%  | 1,302,175,879    | +52.7%            | 74.0%     | 76,127      | 25,423            |
| Log_pvm        | 1,967,144,330 | +50.2%  | 1,510,408,978    | +77.2%            | 76.8%     | 216,471     | 63,415            |


### Log - create_permissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,309,339,907 | -       | 852,604,555      | -                 | 65.1%     | 127,573     | 15,356            |
| log_rust       | 1,758,904,503 | +34.3%  | 1,302,182,247    | +52.7%            | 74.0%     | 76,143      | 25,680            |
| Log_pvm        | 1,966,731,818 | +50.2%  | 1,509,996,466    | +77.1%            | 76.8%     | 216,599     | 63,795            |


### Log - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 951,371,647   | -       | 147,287,251      | -                 | 15.5%     | 27,480      | 7,401             |
| log_rust       | 1,136,433,871 | +19.5%  | 166,012,486      | +12.7%            | 14.6%     | 17,191      | 8,217             |
| Log_pvm        | 1,739,324,273 | +82.8%  | 164,922,602      | +12.0%            | 9.5%      | 27,448      | 8,595             |


### Log - removeWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| log_rust       | 1,285,960,080 | -       | 828,805,656      | -                 | 64.5%     | 55,743      | 22,875            |
| Log_evm        | 1,689,935,927 | +31.4%  | 1,232,768,407    | +48.7%            | 72.9%     | 189,470     | 15,758            |
| Log_pvm        | 2,070,280,167 | +61.0%  | 1,613,125,743    | +94.6%            | 77.9%     | 237,627     | 64,197            |


### Log - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| log_rust       | 1,229,629,480 | -       | 772,475,056      | -                 | 62.8%     | 45,529      | 22,997            |
| Log_evm        | 1,957,770,911 | +59.2%  | 1,500,603,391    | +94.3%            | 76.6%     | 230,562     | 15,791            |
| Log_pvm        | 2,322,201,321 | +88.9%  | 1,865,033,801    | +141.4%           | 80.3%     | 278,367     | 64,230            |


### Marketplace - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Marketplace_pvm | 5,287,595,542 | -       | 201,674,587      | -                 | 3.8%      | 27,448      | 8,536             |


### MarketplaceProxy - createItem_digital

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 6,955,434,277 | -       | 6,494,049,845    | -                 | 93.4%     | 1,021,778   | 284,747           |
| MarketplaceProxy_pvm | 7,090,411,521 | +1.9%   | 6,629,027,089    | +2.1%             | 93.5%     | 1,051,626   | 295,656           |


### MarketplaceProxy - createItem_physical

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 6,792,217,220 | -       | 6,330,832,788    | -                 | 93.2%     | 1,021,842   | 285,121           |
| MarketplaceProxy_pvm | 6,927,194,464 | +2.0%   | 6,465,810,032    | +2.1%             | 93.3%     | 1,051,690   | 296,030           |


### MarketplaceProxy - deactivateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 1,327,234,184 | -       | 870,498,832      | -                 | 65.6%     | 327,072     | 283,953           |
| MarketplaceProxy_pvm | 1,393,867,178 | +5.0%   | 937,131,826      | +7.7%             | 67.2%     | 341,996     | 294,931           |


### MarketplaceProxy - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 4,071,362,144 | -       | 3,321,606,659    | -                 | 81.6%     | 576,148     | 285,034           |
| MarketplaceProxy_pvm | 4,355,843,329 | +7.0%   | 3,461,101,060    | +4.2%             | 79.5%     | 582,642     | 293,585           |


### MarketplaceProxy - markAsShipped

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 2,857,812,122 | -       | 2,399,806,458    | -                 | 84.0%     | 501,891     | 286,889           |
| MarketplaceProxy_pvm | 2,924,571,028 | +2.3%   | 2,466,565,364    | +2.8%             | 84.3%     | 516,815     | 297,834           |


### MarketplaceProxy - purchaseItem_digital

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 7,682,438,690 | -       | 7,223,503,210    | -                 | 94.0%     | 930,777     | 288,739           |
| MarketplaceProxy_pvm | 7,749,995,900 | +0.9%   | 7,291,060,420    | +0.9%             | 94.1%     | 945,701     | 299,684           |


### MarketplaceProxy - purchaseItem_physical

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 7,707,165,636 | -       | 7,246,540,772    | -                 | 94.0%     | 956,572     | 287,917           |
| MarketplaceProxy_pvm | 7,774,711,582 | +0.9%   | 7,314,086,718    | +0.9%             | 94.1%     | 971,496     | 298,862           |


### MarketplaceProxy - purchaseItem_with_matchmaker

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 8,896,870,877 | -       | 8,437,935,397    | -                 | 94.8%     | 1,022,895   | 291,078           |
| MarketplaceProxy_pvm | 8,964,428,087 | +0.8%   | 8,505,492,607    | +0.8%             | 94.9%     | 1,037,819   | 302,023           |


### MarketplaceProxy - registerMatchMaker

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 2,730,601,666 | -       | 2,272,596,002    | -                 | 83.2%     | 450,447     | 285,092           |
| MarketplaceProxy_pvm | 2,798,164,508 | +2.5%   | 2,340,158,844    | +3.0%             | 83.6%     | 465,371     | 295,895           |


### MarketplaceProxy - registerShop

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 2,694,561,189 | -       | 2,233,595,829    | -                 | 82.9%     | 450,932     | 283,585           |
| MarketplaceProxy_pvm | 2,761,300,383 | +2.5%   | 2,300,335,023    | +3.0%             | 83.3%     | 465,856     | 294,461           |


### MarketplaceProxy - updateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 4,132,797,750 | -       | 3,671,832,390    | -                 | 88.8%     | 554,175     | 285,042           |
| MarketplaceProxy_pvm | 4,199,536,944 | +1.6%   | 3,738,571,584    | +1.8%             | 89.0%     | 569,099     | 295,812           |


### MarketplaceProxy - updateMatchMakerFee

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 1,521,858,845 | -       | 1,065,162,781    | -                 | 70.0%     | 347,544     | 281,738           |
| MarketplaceProxy_pvm | 1,588,504,935 | +4.4%   | 1,131,795,775    | +6.3%             | 71.2%     | 362,471     | 293,437           |


### MixedERC20 - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20_evm | 1,054,638,415 | -       | 303,111,160      | -                 | 28.7%     | 48,026      | 8,917             |
| MixedERC20_pvm | 1,671,172,534 | +58.5%  | 568,617,751      | +87.6%            | 34.0%     | 47,962      | 8,906             |


### MixedERC20 - mint

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20_evm | 780,038,103 | -       | 322,883,679      | -                 | 41.4%     | 51,333      | 11,399            |
| MixedERC20_pvm | 920,592,087 | +18.0%  | 463,437,663      | +43.5%            | 50.3%     | 74,147      | 34,352            |


### MixedERC20 - transfer

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20_evm | 806,687,817 | -       | 349,533,393      | -                 | 43.3%     | 51,365      | 11,502            |
| MixedERC20_pvm | 982,894,888 | +21.8%  | 525,740,464      | +50.4%            | 53.5%     | 74,211      | 34,455            |


### MixedERC20Factory - deploy

| Implementation        | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20Factory_evm | 756,900,582   | -       | 1,845,894        | -                 | 0.2%      | 6,934       | 8,234             |
| MixedERC20Factory_pvm | 772,830,308   | +2.1%   | 12,524,738       | +578.5%           | 1.6%      | 6,934       | 8,156             |
| MixedERC20Factory_evm | 1,450,551,235 | +91.6%  | 994,234,955      | +53762.0%         | 68.5%     | 79,798      | 15,605            |
| MixedERC20Factory_pvm | 1,619,914,923 | +114.0% | 1,163,598,643    | +62937.1%         | 71.8%     | 102,800     | 40,266            |


### MixedFactory - deploy

| Implementation   | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedFactory_evm | 717,057,695 | -       | 1,352,408        | -                 | 0.2%      | 6,934       | 7,904             |
| MixedFactory_pvm | 800,808,167 | +11.7%  | 12,524,738       | +826.1%           | 1.6%      | 6,934       | 8,102             |


### MixedFactory - deployCreate

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedFactory_pvm | 1,086,800,485 | -       | 630,484,205      | -                 | 58.0%     | 40,558      | 19,623            |
| MixedFactory_evm | 1,125,015,301 | +3.5%   | 668,699,021      | +6.1%             | 59.4%     | 36,263      | 13,846            |


### MixedFactory - deployCreate2

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedFactory_pvm | 1,087,803,469 | -       | 631,487,189      | -                 | 58.1%     | 40,622      | 18,251            |
| MixedFactory_evm | 1,125,137,251 | +3.4%   | 668,820,971      | +5.9%             | 59.4%     | 36,295      | 12,956            |


### MixedPool - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedPool_evm  | 1,029,572,096 | -       | 294,216,269      | -                 | 28.6%     | 48,026      | 9,300             |
| MixedPool_pvm  | 1,385,249,852 | +34.5%  | 353,828,699      | +20.3%            | 25.5%     | 47,962      | 8,930             |


### MixedSwapRouter - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapRouter_evm | 1,254,638,636 | -       | 533,972,393      | -                 | 42.6%     | 65,403      | 12,641            |
| MixedSwapRouter_pvm | 1,532,528,715 | +22.1%  | 702,567,144      | +31.6%            | 45.8%     | 83,958      | 31,390            |


### MixedSwapRouter - swap

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapRouter_evm | 4,011,934,338 | -       | 3,554,766,818    | -                 | 88.6%     | 394,652     | 18,321            |
| MixedSwapRouter_pvm | 5,693,629,268 | +41.9%  | 5,236,461,748    | +47.3%            | 92.0%     | 519,131     | 67,205            |


### MixedSwapToken0 - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapToken0_evm | 1,054,638,415 | -       | 303,111,160      | -                 | 28.7%     | 48,026      | 7,777             |
| MixedSwapToken0_pvm | 1,667,746,354 | +58.1%  | 565,191,571      | +86.5%            | 33.9%     | 47,962      | 7,815             |


### MixedSwapToken1 - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapToken1_evm | 1,054,638,415 | -       | 303,111,160      | -                 | 28.7%     | 48,026      | 7,830             |
| MixedSwapToken1_pvm | 1,667,746,354 | +58.1%  | 565,191,571      | +86.5%            | 33.9%     | 47,962      | 7,975             |


### MockMobRule - addCounterEvidence

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MockMobRule_evm | 779,358,060   | -       | 321,365,492      | -                 | 41.2%     | 55,157      | 15,274            |
| MockMobRule_pvm | 1,073,533,307 | +37.7%  | 615,527,643      | +91.5%            | 57.3%     | 96,667      | 56,930            |


### MockMobRule - createDispute

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MockMobRule_evm | 1,998,793,913 | -       | 1,539,517,937    | -                 | 77.0%     | 209,498     | 14,870            |
| MockMobRule_pvm | 2,658,486,357 | +33.0%  | 2,199,210,381    | +42.9%            | 82.7%     | 251,103     | 56,526            |


### MockMobRule - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MockMobRule_evm | 1,043,817,550 | -       | 245,225,641      | -                 | 23.5%     | 37,737      | 8,882             |
| MockMobRule_pvm | 1,830,532,548 | +75.4%  | 369,006,174      | +50.5%            | 20.2%     | 37,705      | 8,917             |


### MockMobRule - resolveCase

| Implementation  | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MockMobRule_evm | 802,657,194 | -       | 345,502,770      | -                 | 43.0%     | 65,254      | 15,539            |
| MockMobRule_pvm | 939,482,479 | +17.0%  | 482,314,959      | +39.6%            | 51.3%     | 106,764     | 57,197            |


### NonFungibleCredential - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 957,683,230   | -       | 147,365,425      | -                 | 15.4%     | 27,480      | 8,599             |
| non_fungible_credential_rust | 1,177,136,665 | +22.9%  | 166,415,566      | +12.9%            | 14.1%     | 17,191      | 8,927             |
| NonFungibleCredential_pvm    | 1,923,912,840 | +100.9% | 164,586,702      | +11.7%            | 8.6%      | 27,448      | 7,932             |


### NonFungibleCredential - issue_nontransferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 3,000,267,437 | -       | 2,540,991,461    | -                 | 84.7%     | 344,387     | 16,858            |
| non_fungible_credential_rust | 3,077,731,819 | +2.6%   | 2,618,455,843    | +3.0%             | 85.1%     | 151,045     | 29,034            |
| NonFungibleCredential_pvm    | 4,220,506,783 | +40.7%  | 3,761,230,807    | +48.0%            | 89.1%     | 444,541     | 75,099            |


### NonFungibleCredential - issue_transferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 3,000,215,872 | -       | 2,540,939,896    | -                 | 84.7%     | 344,259     | 15,901            |
| non_fungible_credential_rust | 3,064,402,478 | +2.1%   | 2,605,126,502    | +2.5%             | 85.0%     | 151,013     | 28,570            |
| NonFungibleCredential_pvm    | 4,219,832,706 | +40.7%  | 3,760,556,730    | +48.0%            | 89.1%     | 444,252     | 74,142            |


### NonFungibleCredential - issue_with_expiry

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 3,000,316,736 | -       | 2,541,040,760    | -                 | 84.7%     | 344,451     | 17,056            |
| non_fungible_credential_rust | 3,091,593,102 | +3.0%   | 2,632,317,126    | +3.6%             | 85.1%     | 151,061     | 29,310            |
| NonFungibleCredential_pvm    | 4,215,254,978 | +40.5%  | 3,755,979,002    | +47.8%            | 89.1%     | 444,442     | 75,472            |


### NonFungibleCredential - revoke

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 690,217,405   | -       | 233,495,149      | -                 | 33.8%     | 45,709      | 13,452            |
| NonFungibleCredential_pvm    | 843,830,167   | +22.3%  | 387,094,815      | +65.8%            | 45.9%     | 104,675     | 72,282            |
| non_fungible_credential_rust | 1,228,172,549 | +77.9%  | 771,450,293      | +230.4%           | 62.8%     | 48,088      | 25,572            |


### NonFungibleCredential - transfer

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| non_fungible_credential_rust | 2,342,891,791 | -       | 1,885,750,463    | -                 | 80.5%     | 109,726     | 29,274            |
| NonFungibleCredential_evm    | 4,216,737,717 | +80.0%  | 3,759,596,389    | +99.4%            | 89.2%     | 508,554     | 17,670            |
| NonFungibleCredential_pvm    | 5,490,404,564 | +134.3% | 5,033,263,236    | +166.9%           | 91.7%     | 567,971     | 75,911            |


### NonFungibleCredential - updateMetadata

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 642,224,056   | -       | 185,069,632      | -                 | 28.8%     | 35,519      | 13,523            |
| NonFungibleCredential_pvm    | 809,192,693   | +26.0%  | 352,025,173      | +90.2%            | 43.5%     | 94,485      | 72,353            |
| non_fungible_credential_rust | 1,273,301,639 | +98.3%  | 816,147,215      | +341.0%           | 64.1%     | 48,187      | 25,572            |


### SimpleToken - deploy

| Implementation                          | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| SimpleToken_evm                         | 712,898,900 | -       | 1,300,898        | +1836.4%          | 0.2%      | 6,934       | 7,373             |
| simple_token_u32_no_alloc_rust          | 738,338,374 | +3.6%   | 67,180           | -                 | 0.0%      | 6,934       | 7,330             |
| simple_token_u128_no_alloc_rust         | 750,080,377 | +5.2%   | 67,180           | -                 | 0.0%      | 6,934       | 7,512             |
| simple_token_u256_no_alloc_rust         | 750,998,476 | +5.3%   | 67,180           | -                 | 0.0%      | 6,934       | 7,479             |
| simple_token_u256_macro_no_alloc_rust   | 763,368,652 | +7.1%   | 67,180           | -                 | 0.0%      | 6,934       | 7,429             |
| simple_token_u256_macro_bump_alloc_rust | 774,079,807 | +8.6%   | 67,180           | -                 | 0.0%      | 6,934       | 6,915             |
| SimpleToken_pvm                         | 801,401,374 | +12.4%  | 12,457,558       | +18443.6%         | 1.6%      | 6,934       | 6,269             |
| simple_token_u256_stylus                | 913,312,034 | +28.1%  | 16,918,421       | +25083.7%         | 1.9%      | 6,934       | 7,479             |
| simple_token_u256_ink                   | 966,857,228 | +35.6%  | 127,627,358      | +189878.2%        | 13.2%     | 17,191      | 5,446             |


### SimpleToken - mint

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| SimpleToken_evm                         | 776,533,806   | -       | 319,392,478      | -                 | 41.1%     | 49,919      | 9,383             |
| SimpleToken_pvm                         | 862,557,581   | +11.1%  | 405,416,253      | +26.9%            | 47.0%     | 54,683      | 13,501            |
| simple_token_u32_no_alloc_rust          | 881,750,735   | +13.5%  | 424,609,407      | +32.9%            | 48.2%     | 51,537      | 11,095            |
| simple_token_u128_no_alloc_rust         | 882,830,580   | +13.7%  | 425,689,252      | +33.3%            | 48.2%     | 52,266      | 12,098            |
| simple_token_u256_no_alloc_rust         | 938,091,805   | +20.8%  | 480,950,477      | +50.6%            | 51.3%     | 52,323      | 11,892            |
| simple_token_u256_macro_no_alloc_rust   | 939,697,209   | +21.0%  | 482,555,881      | +51.1%            | 51.4%     | 53,091      | 12,847            |
| simple_token_u256_macro_bump_alloc_rust | 940,594,914   | +21.1%  | 483,453,586      | +51.4%            | 51.4%     | 53,756      | 13,154            |
| simple_token_u256_stylus                | 1,114,949,168 | +43.6%  | 657,807,840      | +106.0%           | 59.0%     | 61,354      | 21,021            |
| simple_token_u256_ink                   | 1,178,705,143 | +51.8%  | 721,563,815      | +125.9%           | 61.2%     | 57,869      | 16,863            |


### SimpleToken - transfer

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| SimpleToken_evm                         | 802,555,017   | -       | 345,413,689      | -                 | 43.0%     | 49,951      | 6,398             |
| SimpleToken_pvm                         | 922,805,390   | +15.0%  | 465,664,062      | +34.8%            | 50.5%     | 54,844      | 11,231            |
| simple_token_u128_no_alloc_rust         | 945,880,007   | +17.9%  | 488,738,679      | +41.5%            | 51.7%     | 52,298      | 12,163            |
| simple_token_u32_no_alloc_rust          | 950,755,758   | +18.5%  | 493,614,430      | +42.9%            | 51.9%     | 51,545      | 11,322            |
| simple_token_u256_no_alloc_rust         | 1,010,980,744 | +26.0%  | 553,839,416      | +60.3%            | 54.8%     | 52,387      | 12,119            |
| simple_token_u256_macro_no_alloc_rust   | 1,011,981,528 | +26.1%  | 554,840,200      | +60.6%            | 54.8%     | 53,155      | 13,103            |
| simple_token_u256_macro_bump_alloc_rust | 1,012,879,233 | +26.2%  | 555,737,905      | +60.9%            | 54.9%     | 53,820      | 13,410            |
| simple_token_u256_stylus                | 1,261,091,895 | +57.1%  | 803,950,567      | +132.8%           | 63.8%     | 61,515      | 17,798            |
| simple_token_u256_ink                   | 1,440,850,972 | +79.5%  | 983,709,644      | +184.8%           | 68.3%     | 78,447      | 17,011            |


### Store - delegate

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,456,120,979 | -       | 998,115,315      | -                 | 68.5%     | 139,613     | 15,887            |
| store_rust     | 1,918,895,014 | +31.8%  | 1,460,889,350    | +46.4%            | 76.1%     | 91,406      | 40,590            |
| Store_pvm      | 2,004,510,009 | +37.7%  | 1,546,504,345    | +54.9%            | 77.2%     | 206,477     | 84,334            |


### Store - deleteFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,787,885,960 | -       | 1,329,906,488    | -                 | 74.4%     | 180,891     | 16,946            |
| store_rust     | 2,556,778,875 | +43.0%  | 2,098,799,403    | +57.8%            | 82.1%     | 143,317     | 41,918            |
| Store_pvm      | 3,211,708,108 | +79.6%  | 2,753,728,636    | +107.1%           | 85.7%     | 248,432     | 85,247            |


### Store - delete_

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,431,150,450 | -       | 973,563,858      | -                 | 68.0%     | 129,356     | 16,580            |
| Store_pvm      | 1,891,232,834 | +32.1%  | 1,433,646,242    | +47.3%            | 75.8%     | 196,897     | 84,881            |
| store_rust     | 2,107,121,265 | +47.2%  | 1,649,534,673    | +69.4%            | 78.3%     | 122,587     | 41,386            |


### Store - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 831,628,420   | -       | 2,771,458        | +88.2%            | 0.3%      | 6,934       | 6,673             |
| store_rust     | 1,213,514,851 | +45.9%  | 1,472,359        | -                 | 0.1%      | 6,934       | 7,089             |
| Store_pvm      | 1,921,033,910 | +131.0% | 12,524,738       | +750.7%           | 0.7%      | 6,934       | 8,199             |


### Store - revokeDelegation

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,813,964,541 | -       | 1,355,958,877    | -                 | 74.8%     | 191,218     | 16,682            |
| store_rust     | 1,959,452,657 | +8.0%   | 1,501,446,993    | +10.7%            | 76.6%     | 91,876      | 41,151            |
| Store_pvm      | 2,432,665,366 | +34.1%  | 1,974,659,702    | +45.6%            | 81.2%     | 258,759     | 84,983            |


### Store - set

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,533,404,394 | -       | 1,075,398,730    | -                 | 70.1%     | 149,902     | 16,062            |
| Store_pvm      | 1,928,488,929 | +25.8%  | 1,470,496,361    | +36.7%            | 76.3%     | 216,924     | 84,159            |
| store_rust     | 2,142,936,511 | +39.8%  | 1,684,930,847    | +56.7%            | 78.6%     | 111,920     | 40,353            |


### Store - setFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,894,867,484 | -       | 1,436,455,844    | -                 | 75.8%     | 201,440     | 16,542            |
| store_rust     | 2,605,924,473 | +37.5%  | 2,147,512,833    | +49.5%            | 82.4%     | 132,669     | 41,131            |
| Store_pvm      | 3,245,371,535 | +71.3%  | 2,786,959,895    | +94.0%            | 85.9%     | 268,465     | 84,843            |


### Store - set_update

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 975,935,514   | -       | 517,942,946      | -                 | 53.1%     | 78,036      | 13,786            |
| store_rust     | 1,236,944,732 | +26.7%  | 778,952,164      | +50.4%            | 63.0%     | 60,816      | 37,842            |
| Store_pvm      | 1,244,569,687 | +27.5%  | 786,564,023      | +51.9%            | 63.2%     | 145,095     | 81,214            |


### TetherToken - approve

| Implementation  | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 734,300,816 | -       | 277,159,488      | -                 | 37.7%     | 43,745      | 13,114            |
| TetherToken_pvm | 945,378,400 | +28.7%  | 488,223,976      | +76.2%            | 51.6%     | 93,767      | 63,559            |


### TetherToken - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 1,903,078,450 | -       | 1,105,807,315    | -                 | 58.1%     | 150,692     | 7,350             |
| TetherToken_pvm | 3,034,254,323 | +59.4%  | 1,450,419,821    | +31.2%            | 47.8%     | 150,951     | 8,016             |


### TetherToken - transfer

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 1,121,523,488 | -       | 664,369,064      | -                 | 59.2%     | 105,482     | 13,357            |
| TetherToken_pvm | 1,389,244,926 | +23.9%  | 932,090,502      | +40.3%            | 67.1%     | 155,405     | 63,802            |


### TetherToken - transferFrom

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 1,315,571,434 | -       | 858,011,034      | -                 | 65.2%     | 126,185     | 11,160            |
| TetherToken_pvm | 1,664,845,401 | +26.5%  | 1,207,285,001    | +40.7%            | 72.5%     | 176,140     | 60,923            |


### W3S - buyTicket

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 3,662,501,001 | -       | 3,205,765,649    | -                 | 87.5%     | 410,815     | 26,627            |
| W3S_pvm        | 4,770,255,427 | +30.2%  | 4,313,520,075    | +34.6%            | 90.4%     | 526,526     | 143,399           |


### W3S - checkIn

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,972,328,564 | -       | 1,515,619,404    | -                 | 76.8%     | 201,403     | 26,972            |
| W3S_pvm        | 2,612,254,630 | +32.4%  | 2,155,545,470    | +42.2%            | 82.5%     | 316,789     | 143,630           |


### W3S - configurePaymentToken

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,252,894,768 | -       | 795,308,176      | -                 | 63.5%     | 122,516     | 20,558            |
| W3S_pvm        | 1,668,519,144 | +33.2%  | 1,210,932,552    | +52.3%            | 72.6%     | 215,979     | 114,744           |


### W3S - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,761,885,406 | -       | 857,873,182      | -                 | 48.7%     | 119,953     | 8,119             |
| W3S_pvm        | 3,634,885,402 | +106.3% | 1,242,908,518    | +44.9%            | 34.2%     | 119,761     | 8,828             |


### W3S - grantVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 781,544,313   | -       | 324,835,153      | -                 | 41.6%     | 60,645      | 20,588            |
| W3S_pvm        | 1,120,890,080 | +43.4%  | 664,154,728      | +104.5%           | 59.3%     | 154,146     | 114,599           |


### W3S - pauseSales

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 708,991,636 | -       | 252,688,452      | -                 | 35.6%     | 50,263      | 20,750            |
| W3S_pvm        | 957,461,865 | +35.0%  | 501,145,585      | +98.3%            | 52.3%     | 143,793     | 114,936           |


### W3S - redeemTicketStaff

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 2,758,671,362 | -       | 2,301,530,034    | -                 | 83.4%     | 311,370     | 20,902            |
| W3S_pvm        | 3,631,085,993 | +31.6%  | 3,173,944,665    | +37.9%            | 87.4%     | 405,125     | 115,351           |


### W3S - revokeVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 785,653,446   | -       | 328,931,190      | -                 | 41.9%     | 60,680      | 20,888            |
| W3S_pvm        | 1,121,097,040 | +42.7%  | 664,361,688      | +102.0%           | 59.3%     | 154,339     | 115,074           |


### W3S - setMerkleRoot

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 661,613,667 | -       | 204,459,243      | -                 | 30.9%     | 40,201      | 17,859            |
| W3S_pvm        | 922,934,329 | +39.5%  | 465,766,809      | +127.8%           | 50.5%     | 133,763     | 111,357           |


### W3S - unpauseSales

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 710,536,746 | -       | 254,233,562      | -                 | 35.8%     | 50,295      | 20,852            |
| W3S_pvm        | 960,037,577 | +35.1%  | 503,721,297      | +98.1%            | 52.5%     | 143,954     | 115,038           |


### WETH9 - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 1,172,876,247 | -       | 437,810,346      | -                 | 37.3%     | 68,572      | 7,123             |
| WETH9_pvm      | 1,467,918,152 | +25.2%  | 487,655,390      | +11.4%            | 33.2%     | 68,476      | 8,165             |


### WETH9 - deposit

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 634,130,188 | -       | 177,735,332      | -                 | 28.0%     | 30,354      | 10,650            |
| WETH9_pvm      | 724,302,101 | +14.2%  | 267,907,245      | +50.7%            | 37.0%     | 45,876      | 26,547            |


### WETH9 - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 862,146,293   | -       | 405,004,965      | -                 | 47.0%     | 61,392      | 10,789            |
| WETH9_pvm      | 1,025,958,538 | +19.0%  | 568,817,210      | +40.4%            | 55.4%     | 76,914      | 26,686            |


### WETH9 - withdraw

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 952,572,291   | -       | 495,850,035      | -                 | 52.1%     | 46,049      | 8,832             |
| WETH9_pvm      | 1,069,921,164 | +12.3%  | 613,212,004      | +23.7%            | 57.3%     | 61,600      | 24,620            |


### XENCrypto - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| XENCrypto_evm  | 1,259,403,726 | -       | 387,798,786      | -                 | 30.8%     | 58,283      | 8,254             |
| XENCrypto_pvm  | 3,117,616,203 | +147.5% | 597,717,525      | +54.1%            | 19.2%     | 58,219      | 7,918             |


### flipper - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| flipper_ink    | 852,218,926   | -       | 117,336,976      | -                 | 13.8%     | 17,191      | 7,662             |
| flipper_evm    | 855,594,102   | +0.4%   | 147,845,673      | +26.0%            | 17.3%     | 27,480      | 7,797             |
| flipper_pvm    | 929,757,804   | +9.1%   | 189,576,651      | +61.6%            | 20.4%     | 27,577      | 7,725             |
| flipper_stylus | 1,223,084,550 | +43.5%  | 462,238,116      | +293.9%           | 37.8%     | 58,348      | 7,723             |


### flipper - flip

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| flipper_evm    | 602,393,700 | -       | 146,103,612      | -                 | 24.3%     | 28,813      | 9,322             |
| flipper_ink    | 624,150,380 | +3.6%   | 167,860,292      | +14.9%            | 26.9%     | 30,618      | 7,752             |
| flipper_pvm    | 624,844,196 | +3.7%   | 168,554,108      | +15.4%            | 27.0%     | 30,945      | 11,311            |
| flipper_stylus | 712,942,466 | +18.4%  | 256,652,378      | +75.7%            | 36.0%     | 42,485      | 12,862            |


### incrementer - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| incrementer_ink    | 828,719,461   | -       | 100,811,842      | -                 | 12.2%     | 17,191      | 6,831             |
| incrementer_evm    | 856,661,281   | +3.4%   | 147,849,790      | +46.7%            | 17.3%     | 27,480      | 6,525             |
| incrementer_pvm    | 937,080,985   | +13.1%  | 189,442,291      | +87.9%            | 20.2%     | 27,577      | 7,631             |
| incrementer_stylus | 1,237,301,195 | +49.3%  | 451,086,236      | +347.5%           | 36.5%     | 58,348      | 8,432             |


### incrementer - inc

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| incrementer_evm    | 603,542,960 | -       | 146,833,800      | -                 | 24.3%     | 28,968      | 8,542             |
| incrementer_ink    | 621,979,665 | +3.1%   | 165,270,505      | +12.6%            | 26.6%     | 30,287      | 7,426             |
| incrementer_pvm    | 632,260,088 | +4.8%   | 175,550,928      | +19.6%            | 27.8%     | 31,504      | 11,691            |
| incrementer_stylus | 719,865,101 | +19.3%  | 263,155,941      | +79.2%            | 36.6%     | 44,156      | 14,957            |


