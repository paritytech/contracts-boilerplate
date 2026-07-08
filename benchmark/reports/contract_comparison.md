# Revive Contract Comparison

Generated on: 2026-05-25

### Benchmark Environment

- **Chain:** Geth --dev | **Node:** Geth v1.16.4-stable | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01
- **Chain:** Westend Asset Hub Development | **Runtime:** westmint@1022006 | **Node:** polkadot-omni-node 1.22.1-5f453ce6599 | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01

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
| BenchERC1155_evm     | 811,856,681   | -       | 348,235,450      | -                 | 42.9%     | 50,399      | 14,373            |
| BenchERC1155_pvm     | 897,296,350   | +10.5%  | 433,675,119      | +24.5%            | 48.3%     | 60,288      | 24,337            |
| bench_erc1155_stylus | 1,046,086,082 | +28.9%  | 582,464,851      | +67.3%            | 55.7%     | 70,420      | 33,094            |
| bench_erc1155_ink    | 1,109,356,357 | +36.6%  | 645,735,126      | +85.4%            | 58.2%     | 57,479      | 31,941            |


### BenchERC1155 - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC1155_evm     | 786,657,275   | -       | 1,456,520        | -                 | 0.2%      | 10,826      | 11,707            |
| BenchERC1155_pvm     | 1,066,193,934 | +35.5%  | 8,000,024        | +449.3%           | 0.8%      | 40,511      | 12,334            |
| bench_erc1155_stylus | 1,348,697,757 | +71.4%  | 10,089,251       | +592.7%           | 0.7%      | 71,003      | 10,664            |
| bench_erc1155_ink    | 1,365,310,715 | +73.6%  | 101,633,933      | +6877.9%          | 7.4%      | 73,112      | 12,346            |


### BenchERC20 - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC20_evm     | 993,637,426   | -       | 209,760,943      | -                 | 21.1%     | 31,196      | 11,659            |
| BenchERC20_pvm     | 1,280,855,782 | +28.9%  | 256,546,418      | +22.3%            | 20.0%     | 57,395      | 11,826            |
| bench_erc20_ink    | 1,591,620,270 | +60.2%  | 444,539,856      | +111.9%           | 27.9%     | 70,745      | 11,354            |
| bench_erc20_stylus | 1,880,765,378 | +89.3%  | 560,177,743      | +167.1%           | 29.8%     | 120,383     | 12,177            |


### BenchERC20 - transfer

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC20_evm     | 823,119,179   | -       | 359,128,876      | -                 | 43.6%     | 50,314      | 14,133            |
| BenchERC20_pvm     | 901,081,589   | +9.5%   | 437,091,286      | +21.7%            | 48.5%     | 59,177      | 22,820            |
| bench_erc20_stylus | 1,137,107,475 | +38.1%  | 673,117,172      | +87.4%            | 59.2%     | 69,916      | 33,926            |
| bench_erc20_ink    | 1,337,456,196 | +62.5%  | 873,454,709      | +143.2%           | 65.3%     | 84,208      | 26,277            |


### BenchERC721 - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC721_evm     | 785,210,167   | -       | 1,444,040        | -                 | 0.2%      | 10,670      | 10,932            |
| BenchERC721_pvm     | 990,324,184   | +26.1%  | 8,000,024        | +454.0%           | 0.8%      | 32,261      | 10,366            |
| bench_erc721_stylus | 1,113,651,975 | +41.8%  | 10,432,817       | +622.5%           | 0.9%      | 45,407      | 11,488            |
| bench_erc721_ink    | 1,206,745,539 | +53.7%  | 93,649,519       | +6385.2%          | 7.8%      | 56,738      | 11,820            |


### BenchERC721 - mint

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC721_evm     | 922,755,794   | -       | 459,134,563      | -                 | 49.8%     | 70,925      | 13,671            |
| BenchERC721_pvm     | 988,841,891   | +7.2%   | 525,220,660      | +14.4%            | 53.1%     | 78,020      | 20,605            |
| bench_erc721_stylus | 1,202,365,144 | +30.3%  | 738,743,913      | +60.9%            | 61.4%     | 82,402      | 25,776            |
| bench_erc721_ink    | 1,227,241,277 | +33.0%  | 763,620,046      | +66.3%            | 62.2%     | 84,579      | 26,148            |


### BenchStorage - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchStorage_evm     | 768,512,767   | -       | 1,300,040        | -                 | 0.2%      | 8,870       | 11,353            |
| BenchStorage_pvm     | 845,032,178   | +10.0%  | 7,770,980        | +497.7%           | 0.9%      | 16,487      | 10,422            |
| bench_storage_ink    | 946,956,930   | +23.2%  | 93,611,345       | +7100.7%          | 9.9%      | 28,493      | 11,318            |
| bench_storage_stylus | 1,045,319,335 | +36.0%  | 5,775,589        | +344.3%           | 0.6%      | 38,483      | 10,736            |


### BenchStorage - read_100

| Implementation       | ref_time       | vs Best  | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | -------------- | -------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchStorage_evm     | 562,691,920    | -        | 98,701,617       | -                 | 17.5%     | 8,754       | 8,091             |
| BenchStorage_pvm     | 1,394,895,164  | +147.9%  | 930,904,861      | +843.2%           | 66.7%     | 11,319      | 10,537            |
| bench_storage_ink    | 7,656,951,707  | +1260.8% | 7,192,950,220    | +7187.6%          | 93.9%     | 1,047,862   | 11,801            |
| bench_storage_stylus | 11,880,507,347 | +2011.4% | 11,416,505,860   | +11466.7%         | 96.1%     | 1,044,354   | 18,498            |


### CoinTool_App - deploy

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| CoinTool_App_evm | 984,817,975   | -       | 142,783,880      | -                 | 14.5%     | 37,552      | 12,182            |
| CoinTool_App_pvm | 1,759,364,137 | +78.6%  | 196,622,595      | +37.7%            | 11.2%     | 115,889     | 12,446            |


### CoinTool_App - t

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| CoinTool_App_evm | 5,132,559,489 | -       | 4,664,945,570    | -                 | 90.9%     | 426,630     | 44,094            |
| CoinTool_App_pvm | 6,142,444,328 | +19.7%  | 5,674,830,409    | +21.6%            | 92.4%     | 744,974     | 179,449           |


### Computation - deploy

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Computation_evm    | 763,225,257 | -       | 1,254,440        | -                 | 0.2%      | 8,300       | 10,805            |
| computation_stylus | 827,533,682 | +8.4%   | 6,080,981        | +384.8%           | 0.7%      | 14,768      | 10,831            |
| Computation_pvm    | 832,366,574 | +9.1%   | 7,961,850        | +534.7%           | 1.0%      | 15,089      | 11,421            |
| computation_ink    | 886,629,819 | +16.2%  | 91,359,079       | +7182.9%          | 10.3%     | 22,178      | 11,694            |


### Computation - odd_product_10

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Computation_evm    | 479,397,287 | -       | 15,776,056       | -                 | 3.3%      | 8,465       | 7,711             |
| computation_stylus | 501,100,618 | +4.5%   | 37,479,387       | +137.6%           | 7.5%      | 10,647      | 9,487             |
| Computation_pvm    | 518,005,145 | +8.1%   | 54,383,914       | +244.7%           | 10.5%     | 10,754      | 10,076            |
| computation_ink    | 541,074,336 | +12.9%  | 77,453,105       | +391.0%           | 14.3%     | 19,955      | 9,736             |


### Computation - triangle_10

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Computation_evm    | 476,278,801 | -       | 12,657,570       | -                 | 2.7%      | 8,465       | 7,536             |
| computation_stylus | 499,955,398 | +5.0%   | 36,334,167       | +187.1%           | 7.3%      | 10,647      | 9,662             |
| Computation_pvm    | 513,042,525 | +7.7%   | 49,421,294       | +290.4%           | 9.6%      | 10,754      | 10,076            |
| computation_ink    | 539,661,898 | +13.3%  | 76,040,667       | +500.8%           | 14.1%     | 19,955      | 9,561             |


### DocumentAccessManagement - configurePublicAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 888,195,688   | -       | 423,836,313      | -                 | 47.7%     | 69,205      | 23,956            |
| DocumentAccessManagement_pvm | 1,104,804,557 | +24.4%  | 640,433,998      | +51.1%            | 58.0%     | 149,769     | 103,893           |


### DocumentAccessManagement - createDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 2,586,148,494 | -       | 2,119,250,351    | -                 | 81.9%     | 295,924     | 22,628            |
| DocumentAccessManagement_pvm | 3,225,845,391 | +24.7%  | 2,758,947,248    | +30.2%            | 85.5%     | 396,711     | 102,740           |


### DocumentAccessManagement - createDocument2

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 2,586,163,662 | -       | 2,119,265,519    | -                 | 81.9%     | 295,956     | 23,660            |
| DocumentAccessManagement_pvm | 3,225,897,039 | +24.7%  | 2,758,998,896    | +30.2%            | 85.5%     | 396,775     | 103,422           |


### DocumentAccessManagement - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 1,017,276,198 | -       | 3,445,400        | -                 | 0.3%      | 35,687      | 12,827            |
| DocumentAccessManagement_pvm | 3,244,616,153 | +219.0% | 8,000,024        | +132.2%           | 0.2%      | 277,394     | 11,827            |


### DocumentAccessManagement - grantAccessWithShare

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 2,537,451,866 | -       | 2,070,911,611    | -                 | 81.6%     | 285,635     | 23,551            |
| DocumentAccessManagement_pvm | 2,991,085,119 | +17.9%  | 2,524,544,864    | +21.9%            | 84.4%     | 366,036     | 103,663           |


### DocumentAccessManagement - registerKeys

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 863,802,720   | -       | 399,443,345      | -                 | 46.2%     | 58,852      | 23,281            |
| DocumentAccessManagement_pvm | 1,232,562,521 | +42.7%  | 768,191,962      | +92.3%            | 62.3%     | 159,930     | 103,043           |


### DocumentAccessManagement - revokeAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 3,355,191,106 | -       | 2,890,820,547    | -                 | 86.2%     | 419,034     | 23,330            |
| DocumentAccessManagement_pvm | 3,851,987,998 | +14.8%  | 3,387,617,439    | +17.2%            | 87.9%     | 499,627     | 103,267           |


### DocumentAccessManagement - transferOwnership

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 2,794,915,972 | -       | 2,330,545,413    | -                 | 83.4%     | 346,915     | 24,064            |
| DocumentAccessManagement_pvm | 3,292,093,042 | +17.8%  | 2,827,722,483    | +21.3%            | 85.9%     | 437,637     | 104,176           |


### DocumentAccessManagement - updateDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 1,168,495,058 | -       | 701,596,915      | -                 | 60.0%     | 100,785     | 18,806            |
| DocumentAccessManagement_pvm | 1,470,909,447 | +25.9%  | 1,004,011,304    | +43.1%            | 68.3%     | 181,378     | 99,144            |


### DotNS - createSubdomain

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 2,158,487,963 | -       | 1,692,305,596    | -                 | 78.4%     | 83,574      | 37,157            |
| DotNS_evm      | 3,196,661,137 | +48.1%  | 2,730,478,770    | +61.3%            | 85.4%     | 294,440     | 23,552            |
| DotNS_pvm      | 8,362,813,104 | +287.4% | 7,896,630,737    | +366.6%           | 94.4%     | 381,757     | 90,809            |


### DotNS - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 981,321,130   | -       | 3,135,320        | +168.6%           | 0.3%      | 31,811      | 11,889            |
| dotns_rust     | 1,389,904,872 | +41.6%  | 1,167,153        | -                 | 0.1%      | 76,454      | 11,972            |
| DotNS_pvm      | 2,836,464,487 | +189.0% | 8,000,024        | +585.4%           | 0.3%      | 233,012     | 12,399            |


### DotNS - register

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 1,696,909,390 | -       | 1,232,192,127    | -                 | 72.6%     | 72,531      | 36,243            |
| DotNS_evm      | 2,700,022,671 | +59.1%  | 2,235,294,224    | +81.4%            | 82.8%     | 263,151     | 20,759            |
| DotNS_pvm      | 5,041,449,868 | +197.1% | 4,576,721,421    | +271.4%           | 90.8%     | 350,404     | 88,229            |


### DotNS - register_with_duration

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 1,695,855,875 | -       | 1,231,138,612    | -                 | 72.6%     | 72,571      | 36,417            |
| DotNS_evm      | 2,693,288,773 | +58.8%  | 2,228,560,326    | +81.0%            | 82.7%     | 263,183     | 21,477            |
| DotNS_pvm      | 4,952,410,338 | +192.0% | 4,487,681,891    | +264.5%           | 90.6%     | 350,564     | 88,909            |


### DotNS - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 1,238,297,428 | -       | 773,938,053      | -                 | 62.5%     | 52,627      | 35,973            |
| DotNS_evm      | 2,779,849,642 | +124.5% | 2,315,479,083    | +199.2%           | 83.3%     | 283,985     | 22,644            |
| DotNS_pvm      | 4,471,135,549 | +261.1% | 4,006,764,990    | +417.7%           | 89.6%     | 351,076     | 89,990            |


### DotNS - renew

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 976,958,581   | -       | 512,241,318      | -                 | 52.4%     | 57,752      | 17,411            |
| dotns_rust     | 1,290,850,778 | +32.1%  | 826,133,515      | +61.3%            | 64.0%     | 52,723      | 32,298            |
| DotNS_pvm      | 2,354,657,121 | +141.0% | 1,889,928,674    | +269.0%           | 80.3%     | 124,846     | 84,546            |


### DotNS - setAddress

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 1,034,982,647 | -       | 570,265,384      | -                 | 55.1%     | 68,041      | 17,524            |
| dotns_rust     | 1,340,114,629 | +29.5%  | 875,397,366      | +53.5%            | 65.3%     | 52,723      | 32,166            |
| DotNS_pvm      | 2,413,990,120 | +133.2% | 1,949,261,673    | +241.8%           | 80.7%     | 145,424     | 84,682            |


### DotNS - setMetadata

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 972,066,128   | -       | 507,348,865      | -                 | 52.2%     | 57,720      | 22,186            |
| dotns_rust     | 1,302,031,824 | +33.9%  | 837,314,561      | +65.0%            | 64.3%     | 52,723      | 32,129            |
| DotNS_pvm      | 2,285,868,328 | +135.2% | 1,821,139,881    | +259.0%           | 79.7%     | 124,814     | 89,470            |


### DotNS - setSubdomainOwner

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 2,268,064,583 | -       | 1,802,251,288    | -                 | 79.5%     | 84,181      | 32,802            |
| DotNS_evm      | 3,164,152,446 | +39.5%  | 2,698,339,151    | +49.7%            | 85.3%     | 294,597     | 19,246            |
| DotNS_pvm      | 6,728,274,516 | +196.7% | 6,262,461,221    | +247.5%           | 93.1%     | 371,881     | 86,811            |


### DotNS - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 1,750,476,397 | -       | 1,285,759,134    | -                 | 73.5%     | 73,237      | 36,810            |
| DotNS_evm      | 2,807,862,951 | +60.4%  | 2,343,134,504    | +82.2%            | 83.4%     | 283,985     | 18,543            |
| DotNS_pvm      | 4,429,087,207 | +153.0% | 3,964,358,760    | +208.3%           | 89.5%     | 361,205     | 85,328            |


### Escrow - create_simple

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| escrow_rust    | 1,982,953,211 | -       | 1,518,146,476    | -                 | 76.6%     | 93,248      | 25,625            |
| Escrow_evm     | 2,621,155,361 | +32.2%  | 2,156,348,626    | +42.0%            | 82.3%     | 310,653     | 16,606            |
| Escrow_pvm     | 3,075,567,059 | +55.1%  | 2,610,760,324    | +72.0%            | 84.9%     | 360,457     | 47,115            |


### Escrow - create_with_arbiter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| escrow_rust    | 1,982,968,379 | -       | 1,518,161,644    | -                 | 76.6%     | 93,280      | 26,104            |
| Escrow_evm     | 2,621,228,129 | +32.2%  | 2,156,421,394    | +42.0%            | 82.3%     | 310,781     | 17,255            |
| Escrow_pvm     | 3,073,376,536 | +55.0%  | 2,608,569,801    | +71.8%            | 84.9%     | 360,713     | 47,764            |


### Escrow - create_with_expiry

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| escrow_rust    | 1,982,968,379 | -       | 1,518,161,644    | -                 | 76.6%     | 93,280      | 26,207            |
| Escrow_evm     | 2,621,243,297 | +32.2%  | 2,156,436,562    | +42.0%            | 82.3%     | 310,813     | 17,697            |
| Escrow_pvm     | 3,071,693,501 | +54.9%  | 2,606,886,766    | +71.7%            | 84.9%     | 360,841     | 48,206            |


### Escrow - create_with_releaseTime

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| escrow_rust    | 1,982,968,379 | -       | 1,518,161,644    | -                 | 76.6%     | 93,280      | 25,999            |
| Escrow_evm     | 2,621,270,561 | +32.2%  | 2,156,463,826    | +42.0%            | 82.3%     | 310,845     | 17,145            |
| Escrow_pvm     | 3,069,806,122 | +54.8%  | 2,604,999,387    | +71.6%            | 84.9%     | 360,905     | 47,654            |


### Escrow - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Escrow_evm     | 1,097,501,380 | -       | 228,071,408      | +58.5%            | 20.8%     | 50,788      | 12,250            |
| escrow_rust    | 1,254,162,700 | +14.3%  | 143,908,347      | -                 | 11.5%     | 56,429      | 12,651            |
| Escrow_pvm     | 1,926,205,739 | +75.5%  | 240,306,901      | +67.0%            | 12.5%     | 139,538     | 13,217            |


### Escrow - refund

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Escrow_evm     | 1,607,718,059 | -       | 1,144,074,460    | -                 | 71.2%     | 161,020     | 18,476            |
| escrow_rust    | 1,640,192,544 | +2.0%   | 1,176,560,129    | +2.8%             | 71.7%     | 77,302      | 23,964            |
| Escrow_pvm     | 1,708,357,095 | +6.3%   | 1,244,713,496    | +8.8%             | 72.9%     | 190,598     | 48,985            |


### Escrow - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Escrow_evm     | 1,605,859,257 | -       | 1,142,215,658    | -                 | 71.1%     | 161,020     | 20,582            |
| escrow_rust    | 1,636,297,182 | +1.9%   | 1,172,664,767    | +2.7%             | 71.7%     | 77,300      | 28,999            |
| Escrow_pvm     | 1,709,731,359 | +6.5%   | 1,246,087,760    | +9.1%             | 72.9%     | 190,598     | 51,091            |


### FiatTokenProxy - approve

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 877,546,977   | -       | 413,545,490      | -                 | 47.1%     | 70,349      | 30,229            |
| FiatTokenProxy_pvm | 1,098,481,927 | +25.2%  | 634,469,256      | +53.4%            | 57.8%     | 167,003     | 128,475           |


### FiatTokenProxy - changeAdmin

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 688,202,402 | -       | 224,569,987      | -                 | 32.6%     | 40,371      | 9,484             |
| FiatTokenProxy_pvm | 731,829,959 | +6.3%   | 268,208,728      | +19.4%            | 36.6%     | 48,892      | 18,277            |


### FiatTokenProxy - configureMinter

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,073,350,381 | -       | 609,337,710      | -                 | 56.8%     | 101,187     | 30,365            |
| FiatTokenProxy_pvm | 1,295,913,992 | +20.7%  | 831,912,505      | +36.5%            | 64.2%     | 197,803     | 128,611           |


### FiatTokenProxy - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,009,478,057 | -       | 210,427,624      | -                 | 20.8%     | 36,507      | 12,237            |
| FiatTokenProxy_pvm | 1,259,758,688 | +24.8%  | 234,373,353      | +11.4%            | 18.6%     | 61,173      | 13,642            |


### FiatTokenProxy - initialize

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 2,026,599,170 | -       | 1,558,269,475    | -                 | 76.9%     | 246,199     | 30,068            |
| FiatTokenProxy_pvm | 2,389,949,032 | +17.9%  | 1,921,630,521    | +23.3%            | 80.4%     | 342,559     | 128,139           |


### FiatTokenProxy - mint

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,568,165,840 | -       | 1,104,153,169    | -                 | 70.4%     | 162,921     | 30,784            |
| FiatTokenProxy_pvm | 1,902,688,288 | +21.3%  | 1,438,686,801    | +30.3%            | 75.6%     | 259,409     | 128,680           |


### FiatTokenProxy - transfer

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,491,617,108 | -       | 1,027,604,437    | -                 | 68.9%     | 152,664     | 30,542            |
| FiatTokenProxy_pvm | 1,801,477,548 | +20.8%  | 1,337,476,061    | +30.2%            | 74.2%     | 249,216     | 128,613           |


### FiatTokenProxy - transferFrom

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,877,489,565 | -       | 1,413,141,374    | -                 | 75.3%     | 193,942     | 26,486            |
| FiatTokenProxy_pvm | 2,284,348,133 | +21.7%  | 1,819,999,942    | +28.8%            | 79.7%     | 290,593     | 123,669           |


### FiatTokenV2_2 - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenV2_2_evm | 1,550,449,566 | -       | 370,891,645      | -                 | 23.9%     | 105,057     | 11,641            |
| FiatTokenV2_2_pvm | 3,998,966,787 | +157.9% | 389,678,446      | +5.1%             | 9.7%      | 369,203     | 11,973            |


### Fibonacci - deploy

| Implementation                      | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| fibonacci_u32_rust                  | 759,321,674 | -       | 38,174           | -                 | 0.0%      | 8,006       | 7,770             |
| Fibonacci_evm                       | 760,375,995 | +0.1%   | 1,230,440        | +3123.2%          | 0.2%      | 7,991       | 8,679             |
| fibonacci_u128_rust                 | 761,567,567 | +0.3%   | 38,174           | -                 | 0.0%      | 8,252       | 8,049             |
| fibonacci_u32_macro_bump_alloc_rust | 764,767,891 | +0.7%   | 38,174           | -                 | 0.0%      | 8,600       | 8,340             |
| fibonacci_u32_macro_no_alloc_rust   | 766,036,985 | +0.9%   | 38,174           | -                 | 0.0%      | 8,738       | 8,471             |
| fibonacci_u256_rust                 | 779,914,252 | +2.7%   | 38,174           | -                 | 0.0%      | 10,247      | 7,978             |
| Fibonacci_pvm                       | 792,163,322 | +4.3%   | 7,541,936        | +19656.7%         | 1.0%      | 10,763      | 8,679             |
| fibonacci_u32_stylus                | 800,397,031 | +5.4%   | 5,622,893        | +14629.6%         | 0.7%      | 11,867      | 8,023             |
| fibonacci_u32_ink                   | 867,083,969 | +14.2%  | 91,511,775       | +239622.8%        | 10.6%     | 20,036      | 6,730             |


### Fibonacci - fib_10

| Implementation                      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| fibonacci_u32_rust                  | 533,367,431   | -       | 69,746,200       | -                 | 13.1%     | 8,394       | 7,739             |
| fibonacci_u32_macro_bump_alloc_rust | 536,242,308   | +0.5%   | 72,621,077       | +4.1%             | 13.5%     | 8,591       | 7,385             |
| fibonacci_u32_macro_no_alloc_rust   | 540,203,354   | +1.3%   | 76,582,123       | +9.8%             | 14.2%     | 8,637       | 8,015             |
| fibonacci_u32_stylus                | 541,410,978   | +1.5%   | 77,789,747       | +11.5%            | 14.4%     | 9,680       | 8,959             |
| Fibonacci_evm                       | 593,896,838   | +11.3%  | 130,275,607      | +86.8%            | 21.9%     | 8,365       | 7,923             |
| fibonacci_u128_rust                 | 624,647,246   | +17.1%  | 161,026,015      | +130.9%           | 25.8%     | 8,475       | 7,447             |
| Fibonacci_pvm                       | 703,941,522   | +32.0%  | 240,320,291      | +244.6%           | 34.1%     | 9,312       | 8,804             |
| fibonacci_u32_ink                   | 728,607,170   | +36.6%  | 264,985,939      | +279.9%           | 36.4%     | 29,498      | 9,195             |
| fibonacci_u256_rust                 | 2,501,836,467 | +369.1% | 2,038,215,236    | +2822.3%          | 81.5%     | 9,140       | 8,424             |


### Fibonacci_u256 - deploy

| Implementation                           | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 759,040,203 | -       | 1,218,920        | +3093.1%          | 0.2%      | 7,847       | 10,095            |
| Fibonacci_u256_evm                       | 759,151,519 | +0.0%   | 1,219,880        | +3095.6%          | 0.2%      | 7,859       | 9,867             |
| fibonacci_u256_iter_primitive_types_rust | 776,355,271 | +2.3%   | 38,174           | -                 | 0.0%      | 9,860       | 9,714             |
| fibonacci_u256_iter_rust                 | 777,431,242 | +2.4%   | 38,174           | -                 | 0.0%      | 9,977       | 8,456             |
| fibonacci_u256_primitive_types_rust      | 777,707,132 | +2.5%   | 38,174           | -                 | 0.0%      | 10,007      | 8,912             |
| fibonacci_u256_rust                      | 779,914,252 | +2.8%   | 38,174           | -                 | 0.0%      | 10,247      | 7,242             |
| Fibonacci_u256_iter_pvm                  | 794,149,730 | +4.6%   | 7,541,936        | +19656.7%         | 0.9%      | 10,979      | 10,046            |
| Fibonacci_u256_pvm                       | 796,853,452 | +5.0%   | 7,541,936        | +19656.7%         | 0.9%      | 11,273      | 8,608             |
| fibonacci_u256_ink                       | 895,059,215 | +17.9%  | 91,511,775       | +239622.8%        | 10.2%     | 23,078      | 8,400             |
| fibonacci_u256_iter_ink                  | 895,252,338 | +17.9%  | 91,511,775       | +239622.8%        | 10.2%     | 23,099      | 9,615             |


### Fibonacci_u256 - fib_10

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 469,707,225   | -       | 6,085,994        | -                 | 1.3%      | 8,317       | 7,631             |
| Fibonacci_u256_iter_pvm                  | 492,944,638   | +4.9%   | 29,323,407       | +381.8%           | 5.9%      | 9,384       | 8,673             |
| fibonacci_u256_iter_primitive_types_rust | 502,017,272   | +6.9%   | 38,396,041       | +530.9%           | 7.6%      | 9,011       | 8,348             |
| fibonacci_u256_iter_rust                 | 554,143,665   | +18.0%  | 90,522,434       | +1387.4%          | 16.3%     | 9,050       | 8,131             |
| Fibonacci_u256_evm                       | 571,902,557   | +21.8%  | 108,281,326      | +1679.2%          | 18.9%     | 8,321       | 7,539             |
| fibonacci_u256_iter_ink                  | 672,229,109   | +43.1%  | 208,607,878      | +3327.7%          | 31.0%     | 30,519      | 10,122            |
| Fibonacci_u256_pvm                       | 875,324,274   | +86.4%  | 411,703,043      | +6664.8%          | 47.0%     | 9,482       | 8,634             |
| fibonacci_u256_primitive_types_rust      | 1,615,510,017 | +243.9% | 1,151,888,786    | +18826.9%         | 71.3%     | 9,060       | 8,283             |
| fibonacci_u256_ink                       | 1,761,819,350 | +275.1% | 1,298,198,119    | +21230.9%         | 73.7%     | 30,512      | 9,864             |
| fibonacci_u256_rust                      | 2,501,836,467 | +432.6% | 2,038,215,236    | +33390.3%         | 81.5%     | 9,140       | 8,424             |


### Fibonacci_u256 - fib_15

| Implementation                           | ref_time       | vs Best  | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | -------------- | -------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 472,088,335    | -        | 8,467,104        | -                 | 1.8%      | 8,317       | 7,631             |
| Fibonacci_u256_iter_pvm                  | 504,778,578    | +6.9%    | 41,157,347       | +386.1%           | 8.2%      | 9,384       | 8,673             |
| fibonacci_u256_iter_primitive_types_rust | 516,905,132    | +9.5%    | 53,283,901       | +529.3%           | 10.3%     | 9,011       | 8,348             |
| fibonacci_u256_iter_rust                 | 598,043,765    | +26.7%   | 134,422,534      | +1487.6%          | 22.5%     | 9,050       | 8,131             |
| fibonacci_u256_iter_ink                  | 698,760,039    | +48.0%   | 235,138,808      | +2677.1%          | 33.7%     | 30,519      | 10,122            |
| Fibonacci_u256_evm                       | 1,660,561,411  | +251.7%  | 1,196,940,180    | +14036.4%         | 72.1%     | 8,321       | 7,539             |
| Fibonacci_u256_pvm                       | 4,988,954,514  | +956.8%  | 4,525,333,283    | +53346.1%         | 90.7%     | 9,482       | 8,634             |
| fibonacci_u256_primitive_types_rust      | 13,209,259,209 | +2698.0% | 12,745,637,978   | +150431.3%        | 96.5%     | 9,060       | 8,283             |
| fibonacci_u256_ink                       | 13,321,288,290 | +2721.8% | 12,857,667,059   | +151754.4%        | 96.5%     | 30,512      | 9,864             |
| fibonacci_u256_rust                      | 23,101,645,097 | +4793.5% | 22,638,012,682   | +267264.3%        | 98.0%     | 9,143       | 8,424             |


### Fibonacci_u256 - fib_5

| Implementation                           | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 467,326,115 | -       | 3,704,884        | -                 | 0.8%      | 8,317       | 7,456             |
| Fibonacci_u256_evm                       | 473,716,334 | +1.4%   | 10,095,103       | +172.5%           | 2.1%      | 8,321       | 7,364             |
| Fibonacci_u256_iter_pvm                  | 481,110,698 | +2.9%   | 17,489,467       | +372.1%           | 3.6%      | 9,384       | 8,498             |
| fibonacci_u256_iter_primitive_types_rust | 487,129,412 | +4.2%   | 23,508,181       | +534.5%           | 4.8%      | 9,011       | 8,173             |
| Fibonacci_u256_pvm                       | 504,272,994 | +7.9%   | 40,651,763       | +997.2%           | 8.1%      | 9,482       | 8,459             |
| fibonacci_u256_iter_rust                 | 510,243,565 | +9.2%   | 46,622,334       | +1158.4%          | 9.1%      | 9,050       | 7,956             |
| fibonacci_u256_primitive_types_rust      | 570,267,723 | +22.0%  | 106,646,492      | +2778.5%          | 18.7%     | 9,060       | 8,108             |
| fibonacci_u256_rust                      | 643,793,365 | +37.8%  | 180,172,134      | +4763.1%          | 28.0%     | 9,140       | 8,249             |
| fibonacci_u256_iter_ink                  | 645,698,179 | +38.2%  | 182,076,948      | +4814.5%          | 28.2%     | 30,519      | 9,947             |
| fibonacci_u256_ink                       | 719,669,150 | +54.0%  | 256,047,919      | +6811.1%          | 35.6%     | 30,512      | 9,689             |


### FungibleCredential - burn

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,132,934,472 | -       | 668,944,169      | -                 | 59.0%     | 97,762      | 16,439            |
| fungible_credential_rust | 1,326,968,637 | +17.1%  | 862,989,518      | +29.0%            | 65.0%     | 67,305      | 27,071            |
| FungibleCredential_pvm   | 1,332,256,303 | +17.6%  | 868,266,000      | +29.8%            | 65.2%     | 156,311     | 74,342            |


### FungibleCredential - createClass_nontransferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| fungible_credential_rust | 1,246,126,385 | -       | 780,682,162      | -                 | 62.6%     | 57,189      | 31,412            |
| FungibleCredential_evm   | 1,418,532,964 | +13.8%  | 953,077,557      | +22.1%            | 67.2%     | 139,151     | 20,422            |
| FungibleCredential_pvm   | 2,069,502,085 | +66.1%  | 1,604,046,678    | +105.5%           | 77.5%     | 248,889     | 78,746            |


### FungibleCredential - createClass_transferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| fungible_credential_rust | 1,238,641,836 | -       | 773,197,613      | -                 | 62.4%     | 57,189      | 31,166            |
| FungibleCredential_evm   | 1,418,521,348 | +14.5%  | 953,065,941      | +23.3%            | 67.2%     | 139,151     | 20,355            |
| FungibleCredential_pvm   | 2,069,554,033 | +67.1%  | 1,604,098,626    | +107.5%           | 77.5%     | 248,953     | 78,504            |


### FungibleCredential - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,095,295,202 | -       | 142,849,929      | -                 | 13.0%     | 49,558      | 12,790            |
| fungible_credential_rust | 1,386,225,727 | +26.6%  | 143,599,352      | +0.5%             | 10.4%     | 70,823      | 13,144            |
| FungibleCredential_pvm   | 2,718,639,820 | +148.2% | 152,077,734      | +6.5%             | 5.6%      | 225,047     | 13,003            |


### FungibleCredential - issue

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 2,298,397,100 | -       | 1,834,026,541    | -                 | 79.8%     | 251,943     | 20,867            |
| fungible_credential_rust | 2,427,029,647 | +5.6%   | 1,962,659,088    | +7.0%             | 80.9%     | 149,434     | 31,589            |
| FungibleCredential_pvm   | 2,612,678,792 | +13.7%  | 2,148,308,233    | +17.1%            | 82.2%     | 310,108     | 78,841            |


### FungibleCredential - issue_more

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,189,689,428 | -       | 725,318,869      | -                 | 61.0%     | 108,153     | 16,650            |
| FungibleCredential_pvm   | 1,387,348,850 | +16.6%  | 922,978,291      | +27.3%            | 66.5%     | 166,702     | 74,728            |
| fungible_credential_rust | 1,474,502,170 | +23.9%  | 1,010,142,795    | +39.3%            | 68.5%     | 77,665      | 26,920            |


### FungibleCredential - revoke

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,134,370,046 | -       | 669,999,487      | -                 | 59.1%     | 97,864      | 16,443            |
| FungibleCredential_pvm   | 1,332,036,437 | +17.4%  | 867,665,878      | +29.5%            | 65.1%     | 156,413     | 74,521            |
| fungible_credential_rust | 1,352,356,466 | +19.2%  | 887,997,091      | +32.5%            | 65.7%     | 67,407      | 26,900            |


### FungibleCredential - transfer

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 2,507,099,450 | -       | 2,042,751,259    | -                 | 81.5%     | 272,579     | 21,431            |
| fungible_credential_rust | 2,556,946,297 | +2.0%   | 2,092,598,106    | +2.4%             | 81.8%     | 159,615     | 32,219            |
| FungibleCredential_pvm   | 2,907,003,695 | +16.0%  | 2,442,655,504    | +19.6%            | 84.0%     | 330,840     | 79,755            |


### KeyRegistry - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 873,622,900   | -       | 2,206,520        | +102.3%           | 0.3%      | 20,201      | 12,916            |
| key_registry_rust | 1,271,664,837 | +45.6%  | 1,090,805        | -                 | 0.1%      | 63,605      | 12,702            |
| KeyRegistry_pvm   | 1,833,306,079 | +109.9% | 8,000,024        | +633.4%           | 0.4%      | 123,926     | 11,978            |


### KeyRegistry - fetchPrekeyBundle

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 1,707,871,818 | -       | 1,244,250,587    | -                 | 72.9%     | 187,281     | 18,254            |
| KeyRegistry_pvm   | 2,202,478,256 | +29.0%  | 1,738,857,025    | +39.8%            | 79.0%     | 221,786     | 53,235            |
| key_registry_rust | 2,261,530,083 | +32.4%  | 1,797,908,852    | +44.5%            | 79.5%     | 150,307     | 32,946            |


### KeyRegistry - registerIdentity

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| key_registry_rust | 1,577,844,844 | -       | 1,112,031,549    | -                 | 70.5%     | 89,056      | 31,755            |
| KeyRegistry_evm   | 1,861,241,146 | +18.0%  | 1,395,427,851    | +25.5%            | 75.0%     | 187,645     | 17,420            |
| KeyRegistry_pvm   | 2,170,297,959 | +37.5%  | 1,704,484,664    | +53.3%            | 78.5%     | 222,054     | 51,839            |


### KeyRegistry - updateSignedPrekey

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 1,231,753,514 | -       | 766,655,995      | -                 | 62.2%     | 105,429     | 13,202            |
| key_registry_rust | 1,331,629,922 | +8.1%   | 866,543,587      | +13.0%            | 65.1%     | 68,703      | 27,693            |
| KeyRegistry_pvm   | 1,522,917,084 | +23.6%  | 1,057,819,565    | +38.0%            | 69.5%     | 160,608     | 48,071            |


### KeyRegistry - uploadOneTimePrekeys

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 1,783,222,932 | -       | 1,318,125,413    | -                 | 73.9%     | 197,902     | 18,036            |
| KeyRegistry_pvm   | 2,007,707,188 | +12.6%  | 1,542,609,669    | +17.0%            | 76.8%     | 232,311     | 52,309            |
| key_registry_rust | 2,224,129,780 | +24.7%  | 1,759,032,261    | +33.4%            | 79.1%     | 150,498     | 32,449            |


### Log - addWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,209,056,040 | -       | 745,043,369      | -                 | 61.6%     | 107,023     | 19,175            |
| Log_pvm        | 1,384,799,965 | +14.5%  | 920,798,478      | +23.6%            | 66.5%     | 154,761     | 67,880            |
| log_rust       | 1,469,160,731 | +21.5%  | 1,005,148,060    | +34.9%            | 68.4%     | 86,476      | 29,584            |


### Log - append

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| log_rust       | 1,242,578,313 | -       | 778,576,826      | -                 | 62.7%     | 55,747      | 29,434            |
| Log_evm        | 1,452,506,771 | +16.9%  | 988,494,100      | +27.0%            | 68.1%     | 148,147     | 19,152            |
| Log_pvm        | 1,671,702,081 | +34.5%  | 1,207,689,410    | +55.1%            | 72.2%     | 195,920     | 67,507            |


### Log - append_2

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| log_rust       | 1,242,578,313 | -       | 778,576,826      | -                 | 62.7%     | 55,747      | 29,292            |
| Log_evm        | 1,452,506,771 | +16.9%  | 988,494,100      | +27.0%            | 68.1%     | 148,147     | 19,284            |
| Log_pvm        | 1,671,702,081 | +34.5%  | 1,207,689,410    | +55.1%            | 72.2%     | 195,920     | 67,814            |


### Log - create_nonpermissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,313,362,475 | -       | 849,718,876      | -                 | 64.7%     | 127,470     | 18,808            |
| log_rust       | 1,473,706,714 | +12.2%  | 1,010,074,299    | +18.9%            | 68.5%     | 76,088      | 29,019            |
| Log_pvm        | 1,822,563,156 | +38.8%  | 1,358,919,557    | +59.9%            | 74.6%     | 216,303     | 67,338            |


### Log - create_permissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,313,392,811 | -       | 849,749,212      | -                 | 64.7%     | 127,534     | 19,013            |
| log_rust       | 1,473,714,298 | +12.2%  | 1,010,081,883    | +18.9%            | 68.5%     | 76,104      | 29,451            |
| Log_pvm        | 1,822,361,060 | +38.8%  | 1,358,717,461    | +59.9%            | 74.6%     | 216,431     | 67,718            |


### Log - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,069,191,600 | -       | 142,624,809      | -                 | 13.3%     | 46,744      | 12,089            |
| log_rust       | 1,354,345,234 | +26.7%  | 142,866,840      | +0.2%             | 10.5%     | 67,436      | 12,339            |
| Log_pvm        | 2,398,202,972 | +124.3% | 152,192,256      | +6.7%             | 6.3%      | 190,187     | 13,034            |


### Log - removeWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| log_rust       | 1,078,455,976 | -       | 614,454,489      | -                 | 57.0%     | 55,704      | 25,390            |
| Log_evm        | 1,732,620,422 | +60.7%  | 1,268,607,751    | +106.5%           | 73.2%     | 189,431     | 18,479            |
| Log_pvm        | 1,971,599,416 | +82.8%  | 1,507,586,745    | +145.4%           | 76.5%     | 237,300     | 66,834            |


### Log - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| log_rust       | 1,011,704,348 | -       | 547,702,861      | -                 | 54.1%     | 45,490      | 25,162            |
| Log_evm        | 1,975,935,020 | +95.3%  | 1,511,922,349    | +176.0%           | 76.5%     | 230,523     | 19,623            |
| Log_pvm        | 2,201,666,049 | +117.6% | 1,737,653,378    | +217.3%           | 78.9%     | 278,328     | 68,153            |


### MixedERC20 - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20_evm | 1,129,793,228 | -       | 293,249,344      | -                 | 26.0%     | 57,501      | 12,027            |
| MixedERC20_pvm | 1,879,369,743 | +66.3%  | 439,541,131      | +49.9%            | 23.4%     | 123,365     | 12,758            |


### MixedERC20 - mint

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20_evm | 785,182,845 | -       | 321,181,358      | -                 | 40.9%     | 51,294      | 14,225            |
| MixedERC20_pvm | 875,789,157 | +11.5%  | 411,787,670      | +28.2%            | 47.0%     | 74,108      | 37,920            |


### MixedERC20 - transfer

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20_evm | 826,395,537 | -       | 362,394,050      | -                 | 43.9%     | 51,326      | 14,328            |
| MixedERC20_pvm | 937,232,584 | +13.4%  | 473,231,097      | +30.6%            | 50.5%     | 74,172      | 38,023            |


### MixedERC20Factory - deploy

| Implementation        | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20Factory_evm | 844,541,595   | -       | 1,955,720        | -                 | 0.2%      | 17,066      | 12,346            |
| MixedERC20Factory_pvm | 859,579,913   | +1.8%   | 8,000,024        | +309.1%           | 0.9%      | 18,044      | 12,735            |
| MixedERC20Factory_pvm | 1,425,947,345 | +68.8%  | 962,672,818      | +49123.4%         | 67.5%     | 102,124     | 48,100            |
| MixedERC20Factory_evm | 1,443,449,641 | +70.9%  | 980,163,930      | +50017.8%         | 67.9%     | 79,145      | 22,766            |


### MixedFactory - deploy

| Implementation   | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedFactory_evm | 776,555,348 | -       | 1,369,400        | -                 | 0.2%      | 9,737       | 11,936            |
| MixedFactory_pvm | 907,490,822 | +16.9%  | 8,000,024        | +484.2%           | 0.9%      | 23,252      | 12,483            |


### MixedFactory - deployCreate

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedFactory_pvm | 1,011,065,001 | -       | 547,779,290      | -                 | 54.2%     | 39,885      | 25,526            |
| MixedFactory_evm | 1,125,438,111 | +11.3%  | 662,152,400      | +20.9%            | 58.8%     | 35,610      | 21,869            |


### MixedFactory - deployCreate2

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedFactory_pvm | 1,011,651,085 | -       | 548,365,374      | -                 | 54.2%     | 39,949      | 23,833            |
| MixedFactory_evm | 1,125,560,813 | +11.3%  | 662,275,102      | +20.8%            | 58.8%     | 35,642      | 18,082            |


### MixedPool - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedPool_evm  | 1,093,324,339 | -       | 284,479,811      | -                 | 26.0%     | 54,489      | 13,111            |
| MixedPool_pvm  | 1,634,116,807 | +49.5%  | 317,479,653      | +11.6%            | 19.4%     | 109,751     | 12,607            |


### MixedSwapRouter - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapRouter_evm | 1,298,897,415 | -       | 515,202,871      | -                 | 39.7%     | 68,496      | 18,838            |
| MixedSwapRouter_pvm | 1,590,136,431 | +22.4%  | 618,897,119      | +20.1%            | 38.9%     | 107,499     | 37,920            |


### MixedSwapRouter - swap

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapRouter_evm | 3,982,498,333 | -       | 3,518,485,662    | -                 | 88.3%     | 390,442     | 24,704            |
| MixedSwapRouter_pvm | 4,994,431,824 | +25.4%  | 4,530,419,153    | +28.8%            | 90.7%     | 514,727     | 75,166            |


### MixedSwapToken0 - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapToken0_evm | 1,129,793,228 | -       | 293,249,344      | -                 | 26.0%     | 57,501      | 11,306            |
| MixedSwapToken0_pvm | 1,877,422,869 | +66.2%  | 437,594,257      | +49.2%            | 23.3%     | 123,365     | 11,667            |


### MixedSwapToken1 - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapToken1_evm | 1,129,782,044 | -       | 293,249,344      | -                 | 26.0%     | 57,498      | 11,482            |
| MixedSwapToken1_pvm | 1,877,422,869 | +66.2%  | 437,594,257      | +49.2%            | 23.3%     | 123,365     | 12,087            |


### NonFungibleCredential - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 1,079,961,423 | -       | 142,717,689      | -                 | 13.2%     | 47,905      | 12,891            |
| non_fungible_credential_rust | 1,423,601,956 | +31.8%  | 143,095,884      | +0.3%             | 10.1%     | 74,942      | 12,845            |
| NonFungibleCredential_pvm    | 2,714,783,779 | +151.4% | 152,001,386      | +6.5%             | 5.6%      | 224,636     | 12,731            |


### NonFungibleCredential - issue_nontransferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| non_fungible_credential_rust | 2,530,015,618 | -       | 2,064,202,323    | -                 | 81.6%     | 151,006     | 32,871            |
| NonFungibleCredential_evm    | 3,040,987,937 | +20.2%  | 2,575,174,642    | +24.8%            | 84.7%     | 344,348     | 20,662            |
| NonFungibleCredential_pvm    | 3,885,014,827 | +53.6%  | 3,419,201,532    | +65.6%            | 88.0%     | 444,115     | 79,507            |


### NonFungibleCredential - issue_transferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| non_fungible_credential_rust | 2,522,434,945 | -       | 2,056,621,650    | -                 | 81.5%     | 150,974     | 32,407            |
| NonFungibleCredential_evm    | 3,040,927,178 | +20.6%  | 2,575,113,883    | +25.2%            | 84.7%     | 344,220     | 19,705            |
| NonFungibleCredential_pvm    | 3,883,711,063 | +54.0%  | 3,417,897,768    | +66.2%            | 88.0%     | 443,955     | 78,550            |


### NonFungibleCredential - issue_with_expiry

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| non_fungible_credential_rust | 2,537,899,001 | -       | 2,072,085,706    | -                 | 81.6%     | 151,022     | 32,972            |
| NonFungibleCredential_evm    | 3,041,042,378 | +19.8%  | 2,575,229,083    | +24.3%            | 84.7%     | 344,412     | 20,860            |
| NonFungibleCredential_pvm    | 3,879,452,377 | +52.9%  | 3,413,639,082    | +64.7%            | 88.0%     | 444,403     | 79,705            |


### NonFungibleCredential - revoke

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 699,387,994   | -       | 235,755,579      | -                 | 33.7%     | 45,670      | 15,683            |
| NonFungibleCredential_pvm    | 814,376,568   | +16.4%  | 350,732,969      | +48.8%            | 43.1%     | 104,636     | 74,579            |
| non_fungible_credential_rust | 1,012,129,585 | +44.7%  | 548,497,170      | +132.7%           | 54.2%     | 48,049      | 27,803            |


### NonFungibleCredential - transfer

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| non_fungible_credential_rust | 1,908,514,225 | -       | 1,444,523,922    | -                 | 75.7%     | 109,687     | 33,177            |
| NonFungibleCredential_evm    | 4,390,413,710 | +130.0% | 3,926,423,407    | +171.8%           | 89.4%     | 508,515     | 21,540            |
| NonFungibleCredential_pvm    | 5,139,477,471 | +169.3% | 4,675,487,168    | +223.7%           | 91.0%     | 567,222     | 80,385            |


### NonFungibleCredential - updateMetadata

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 653,602,946   | -       | 189,601,459      | -                 | 29.0%     | 35,480      | 15,929            |
| NonFungibleCredential_pvm    | 776,436,111   | +18.8%  | 312,423,440      | +64.8%            | 40.2%     | 94,446      | 74,825            |
| non_fungible_credential_rust | 1,041,539,971 | +59.4%  | 577,538,484      | +204.6%           | 55.5%     | 48,148      | 27,978            |


### SimpleToken - deploy

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| SimpleToken_evm                         | 769,458,953   | -       | 1,308,200        | +3326.9%          | 0.2%      | 8,972       | 11,090            |
| simple_token_u32_no_alloc_rust          | 813,865,127   | +5.8%   | 38,174           | -                 | 0.0%      | 13,937      | 10,037            |
| simple_token_u128_no_alloc_rust         | 833,988,692   | +8.4%   | 38,174           | -                 | 0.0%      | 16,127      | 10,839            |
| simple_token_u256_no_alloc_rust         | 835,561,265   | +8.6%   | 38,174           | -                 | 0.0%      | 16,298      | 10,077            |
| simple_token_u256_macro_no_alloc_rust   | 856,749,617   | +11.3%  | 38,174           | -                 | 0.0%      | 18,602      | 10,477            |
| simple_token_u256_macro_bump_alloc_rust | 875,096,302   | +13.7%  | 38,174           | -                 | 0.0%      | 20,597      | 9,995             |
| SimpleToken_pvm                         | 908,594,981   | +18.1%  | 7,961,850        | +20756.7%         | 0.9%      | 23,378      | 9,245             |
| simple_token_u256_stylus                | 1,094,806,775 | +42.3%  | 10,127,425       | +26429.6%         | 0.9%      | 43,391      | 10,190            |
| simple_token_u256_ink                   | 1,096,880,598 | +42.6%  | 110,114,609      | +288354.5%        | 10.0%     | 43,001      | 9,061             |


### SimpleToken - mint

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| SimpleToken_evm                         | 781,308,277   | -       | 317,317,974      | -                 | 40.6%     | 49,880      | 13,611            |
| SimpleToken_pvm                         | 832,457,743   | +6.5%   | 368,467,440      | +16.1%            | 44.3%     | 54,644      | 17,437            |
| simple_token_u32_no_alloc_rust          | 854,131,814   | +9.3%   | 390,141,511      | +22.9%            | 45.7%     | 51,498      | 14,658            |
| simple_token_u128_no_alloc_rust         | 855,131,065   | +9.4%   | 391,140,762      | +23.3%            | 45.7%     | 52,227      | 15,813            |
| simple_token_u256_no_alloc_rust         | 886,567,406   | +13.5%  | 422,577,103      | +33.2%            | 47.7%     | 52,284      | 15,663            |
| simple_token_u256_macro_no_alloc_rust   | 887,881,860   | +13.6%  | 423,891,557      | +33.6%            | 47.7%     | 53,052      | 16,476            |
| simple_token_u256_macro_bump_alloc_rust | 888,740,233   | +13.8%  | 424,749,930      | +33.9%            | 47.8%     | 53,717      | 16,869            |
| simple_token_u256_stylus                | 992,177,463   | +27.0%  | 528,187,160      | +66.5%            | 53.2%     | 61,315      | 24,782            |
| simple_token_u256_ink                   | 1,002,170,752 | +28.3%  | 538,180,449      | +69.6%            | 53.7%     | 57,830      | 20,530            |


### SimpleToken - transfer

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| SimpleToken_evm                         | 821,902,074   | -       | 357,911,771      | -                 | 43.5%     | 49,912      | 8,804             |
| SimpleToken_pvm                         | 893,630,361   | +8.7%   | 429,640,058      | +20.0%            | 48.1%     | 54,708      | 13,703            |
| simple_token_u128_no_alloc_rust         | 916,656,504   | +11.5%  | 452,666,201      | +26.5%            | 49.4%     | 52,259      | 16,228            |
| simple_token_u32_no_alloc_rust          | 919,035,371   | +11.8%  | 455,045,068      | +27.1%            | 49.5%     | 51,506      | 15,060            |
| simple_token_u256_no_alloc_rust         | 953,692,073   | +16.0%  | 489,701,770      | +36.8%            | 51.3%     | 52,348      | 16,065            |
| simple_token_u256_macro_no_alloc_rust   | 954,662,961   | +16.2%  | 490,672,658      | +37.1%            | 51.4%     | 53,116      | 16,907            |
| simple_token_u256_macro_bump_alloc_rust | 955,521,334   | +16.3%  | 491,531,031      | +37.3%            | 51.4%     | 53,781      | 17,300            |
| simple_token_u256_stylus                | 1,101,824,375 | +34.1%  | 637,834,072      | +78.2%            | 57.9%     | 61,379      | 20,369            |
| simple_token_u256_ink                   | 1,208,897,629 | +47.1%  | 744,918,510      | +108.1%           | 61.6%     | 78,405      | 20,853            |


### Store - delegate

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,494,879,511 | -       | 1,030,151,064    | -                 | 68.9%     | 139,574     | 19,833            |
| store_rust     | 1,566,794,927 | +4.8%   | 1,102,066,480    | +7.0%             | 70.3%     | 91,367      | 44,285            |
| Store_pvm      | 1,833,765,580 | +22.7%  | 1,369,037,133    | +32.9%            | 74.7%     | 206,438     | 88,224            |


### Store - deleteFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,861,602,034 | -       | 1,396,895,955    | -                 | 75.0%     | 180,852     | 19,676            |
| store_rust     | 2,130,038,968 | +14.4%  | 1,665,332,889    | +19.2%            | 78.2%     | 143,278     | 44,747            |
| Store_pvm      | 2,689,127,296 | +44.5%  | 2,224,421,217    | +59.2%            | 82.7%     | 247,876     | 87,921            |


### Store - delete_

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,494,502,844 | -       | 1,030,132,285    | -                 | 68.9%     | 129,317     | 19,240            |
| Store_pvm      | 1,789,574,220 | +19.7%  | 1,325,203,661    | +28.6%            | 74.1%     | 196,341     | 87,485            |
| store_rust     | 1,804,936,028 | +20.8%  | 1,340,565,469    | +30.1%            | 74.3%     | 122,548     | 44,145            |


### Store - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 972,054,073   | -       | 3,055,400        | +180.1%           | 0.3%      | 30,812      | 10,888            |
| store_rust     | 1,626,431,788 | +67.3%  | 1,090,805        | -                 | 0.1%      | 102,182     | 11,469            |
| Store_pvm      | 2,826,311,735 | +190.8% | 8,000,024        | +633.4%           | 0.3%      | 231,908     | 11,988            |


### Store - revokeDelegation

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| store_rust     | 1,576,219,506 | -       | 1,111,491,059    | -                 | 70.5%     | 91,837      | 43,980            |
| Store_evm      | 1,885,716,182 | +19.6%  | 1,420,987,735    | +27.8%            | 75.4%     | 191,179     | 19,412            |
| Store_pvm      | 2,267,706,853 | +43.9%  | 1,802,978,406    | +62.2%            | 79.5%     | 258,235     | 87,832            |


### Store - set

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,562,349,092 | -       | 1,097,620,645    | -                 | 70.3%     | 149,863     | 19,833            |
| store_rust     | 1,794,366,246 | +14.9%  | 1,329,637,799    | +21.1%            | 74.1%     | 111,881     | 44,048            |
| Store_pvm      | 1,817,249,915 | +16.3%  | 1,352,521,468    | +23.2%            | 74.4%     | 216,759     | 88,224            |


### Store - setFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,934,098,750 | -       | 1,469,023,599    | -                 | 76.0%     | 201,401     | 20,204            |
| store_rust     | 2,127,051,734 | +10.0%  | 1,661,976,583    | +13.1%            | 78.1%     | 132,630     | 45,067            |
| Store_pvm      | 2,714,730,905 | +40.4%  | 2,249,655,754    | +53.1%            | 82.9%     | 268,297     | 88,799            |


### Store - set_update

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 985,080,502   | -       | 520,363,239      | -                 | 52.8%     | 77,997      | 15,984            |
| store_rust     | 1,051,522,373 | +6.7%   | 586,805,110      | +12.8%            | 55.8%     | 60,777      | 40,314            |
| Store_pvm      | 1,168,770,350 | +18.6%  | 704,041,903      | +35.3%            | 60.2%     | 145,056     | 83,673            |


### TetherToken - approve

| Implementation  | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 764,812,060 | -       | 300,821,757      | -                 | 39.3%     | 43,706      | 18,017            |
| TetherToken_pvm | 908,705,382 | +18.8%  | 444,703,895      | +47.8%            | 48.9%     | 93,728      | 67,233            |


### TetherToken - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 1,992,907,260 | -       | 1,078,010,616    | -                 | 54.1%     | 168,687     | 12,127            |
| TetherToken_pvm | 3,536,250,654 | +77.4%  | 1,271,383,505    | +17.9%            | 36.0%     | 315,790     | 11,524            |


### TetherToken - transfer

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 1,145,509,745 | -       | 681,508,258      | -                 | 59.5%     | 105,443     | 18,085            |
| TetherToken_pvm | 1,319,461,595 | +15.2%  | 855,460,108      | +25.5%            | 64.8%     | 155,366     | 67,301            |


### TetherToken - transferFrom

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 1,364,092,679 | -       | 899,744,488      | -                 | 66.0%     | 126,146     | 13,566            |
| TetherToken_pvm | 1,584,667,240 | +16.2%  | 1,120,319,049    | +24.5%            | 70.7%     | 176,101     | 63,194            |


### W3S - buyTicket

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 3,717,683,239 | -       | 3,254,039,640    | -                 | 87.5%     | 409,790     | 31,860            |
| W3S_pvm        | 4,398,945,063 | +18.3%  | 3,935,301,464    | +20.9%            | 89.5%     | 524,727     | 148,325           |


### W3S - checkIn

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,987,030,035 | -       | 1,523,408,804    | -                 | 76.7%     | 200,727     | 29,661            |
| W3S_pvm        | 2,413,090,227 | +21.4%  | 1,949,468,996    | +28.0%            | 80.8%     | 316,016     | 145,946           |


### W3S - configurePaymentToken

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,268,371,069 | -       | 804,000,510      | -                 | 63.4%     | 122,477     | 24,126            |
| W3S_pvm        | 1,557,005,496 | +22.8%  | 1,092,634,937    | +35.9%            | 70.2%     | 215,940     | 118,015           |


### W3S - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,959,032,296 | -       | 861,303,349      | -                 | 44.0%     | 157,829     | 12,164            |
| W3S_pvm        | 4,771,469,848 | +143.6% | 1,125,046,713    | +30.6%            | 23.6%     | 434,783     | 12,543            |


### W3S - grantVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 804,610,245   | -       | 340,977,830      | -                 | 42.4%     | 60,609      | 24,156            |
| W3S_pvm        | 1,078,171,241 | +34.0%  | 614,527,642      | +80.2%            | 57.0%     | 154,107     | 118,045           |


### W3S - pauseSales

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 719,532,539 | -       | 256,258,012      | -                 | 35.6%     | 50,224      | 24,388            |
| W3S_pvm        | 915,611,893 | +27.3%  | 452,326,182      | +76.5%            | 49.4%     | 143,754     | 118,277           |


### W3S - redeemTicketStaff

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 2,812,840,181 | -       | 2,348,849,878    | -                 | 83.5%     | 310,982     | 24,394            |
| W3S_pvm        | 3,349,443,182 | +19.1%  | 2,885,452,879    | +22.8%            | 86.1%     | 404,221     | 118,513           |


### W3S - revokeVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 808,645,842   | -       | 345,013,427      | -                 | 42.7%     | 60,641      | 23,415            |
| W3S_pvm        | 1,079,210,128 | +33.5%  | 615,566,529      | +78.4%            | 57.0%     | 154,203     | 117,304           |


### W3S - setMerkleRoot

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 674,265,479 | -       | 210,263,992      | -                 | 31.2%     | 40,162      | 19,920            |
| W3S_pvm        | 878,181,354 | +30.2%  | 414,168,683      | +97.0%            | 47.2%     | 133,724     | 113,555           |


### W3S - unpauseSales

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 721,056,449 | -       | 257,781,922      | -                 | 35.8%     | 50,256      | 23,204            |
| W3S_pvm        | 917,988,564 | +27.3%  | 454,702,853      | +76.4%            | 49.5%     | 143,818     | 117,093           |


### WETH9 - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 1,231,520,102 | -       | 423,172,176      | -                 | 34.4%     | 74,981      | 11,108            |
| WETH9_pvm      | 1,679,104,451 | +36.3%  | 450,769,178      | +6.5%             | 26.8%     | 120,554     | 11,980            |


### WETH9 - deposit

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 644,103,515 | -       | 180,750,700      | -                 | 28.1%     | 30,315      | 14,312            |
| WETH9_pvm      | 702,663,435 | +9.1%   | 239,310,620      | +32.4%            | 34.1%     | 45,837      | 30,441            |


### WETH9 - transfer

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 879,603,177 | -       | 415,612,874      | -                 | 47.3%     | 61,353      | 14,626            |
| WETH9_pvm      | 979,566,015 | +11.4%  | 515,575,712      | +24.1%            | 52.6%     | 76,875      | 30,755            |


### WETH9 - withdraw

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 961,470,571   | -       | 497,860,524      | -                 | 51.8%     | 45,367      | 12,540            |
| WETH9_pvm      | 1,036,038,603 | +7.8%   | 572,417,372      | +15.0%            | 55.3%     | 60,924      | 28,565            |


### XENCrypto - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| XENCrypto_evm  | 1,417,782,748 | -       | 375,562,869      | -                 | 26.5%     | 90,123      | 12,144            |
| XENCrypto_pvm  | 4,371,635,447 | +208.3% | 506,100,474      | +34.8%            | 11.6%     | 397,067     | 11,559            |


### flipper - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| flipper_evm    | 904,508,975   | -       | 142,951,993      | +37.1%            | 15.8%     | 28,801      | 11,079            |
| flipper_ink    | 912,632,530   | +0.9%   | 104,262,269      | -                 | 11.4%     | 23,657      | 11,011            |
| flipper_pvm    | 984,881,194   | +8.9%   | 167,434,152      | +60.6%            | 17.0%     | 34,901      | 11,509            |
| flipper_stylus | 1,254,435,869 | +38.7%  | 401,592,140      | +285.2%           | 32.0%     | 69,521      | 10,727            |


### flipper - flip

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| flipper_evm    | 604,512,031 | -       | 141,248,688      | -                 | 23.4%     | 28,774      | 12,984            |
| flipper_pvm    | 618,675,659 | +2.3%   | 155,412,316      | +10.0%            | 25.1%     | 30,906      | 15,021            |
| flipper_ink    | 619,571,091 | +2.5%   | 156,307,748      | +10.7%            | 25.2%     | 30,579      | 9,818             |
| flipper_stylus | 691,735,296 | +14.4%  | 228,471,953      | +61.8%            | 33.0%     | 42,446      | 16,666            |


### incrementer - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| incrementer_ink    | 891,296,823   | -       | 94,872,599       | -                 | 10.6%     | 22,358      | 10,039            |
| incrementer_evm    | 906,336,328   | +1.7%   | 142,958,472      | +50.7%            | 15.8%     | 28,999      | 10,106            |
| incrementer_pvm    | 997,578,553   | +11.9%  | 167,357,804      | +76.4%            | 16.8%     | 36,290      | 10,772            |
| incrementer_stylus | 1,291,551,660 | +44.9%  | 395,255,256      | +316.6%           | 30.6%     | 74,246      | 11,832            |


### incrementer - inc

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| incrementer_evm    | 605,607,554 | -       | 141,986,323      | -                 | 23.4%     | 28,929      | 12,365            |
| incrementer_ink    | 618,232,604 | +2.1%   | 154,611,373      | +8.9%             | 25.0%     | 30,248      | 10,106            |
| incrementer_pvm    | 623,396,311 | +2.9%   | 159,775,080      | +12.5%            | 25.6%     | 31,465      | 15,155            |
| incrementer_stylus | 696,616,301 | +15.0%  | 232,995,070      | +64.1%            | 33.4%     | 44,117      | 18,931            |


