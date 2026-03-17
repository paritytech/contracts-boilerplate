# Revive Contract Comparison

Generated on: 2026-03-17

### Benchmark Environment

- **Chain:** Geth --dev | **Node:** Geth v1.16.4-stable | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01
- **Chain:** Westend Asset Hub Development | **Runtime:** westmint@1021004 | **Node:** polkadot-omni-node 1.21.2-5a82c9637e4 | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01

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
| CoinTool_App_evm | 308,943  | -       | -7.2%     |


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
| DotNS_evm      | 273,068  | -       | 92.0%     |


### DotNS - register_with_duration

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| DotNS_evm      | 275,026  | -       | 92.1%     |


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

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchERC1155_evm     | 799,616,351   | -       | 342,907,191      | -                 | 42.9%     | 50,438      | 60,227          | 8,157        | 7.4x           |
| BenchERC1155_pvm     | 942,092,203   | +17.8%  | 485,383,043      | +41.5%            | 51.5%     | 60,327      | 70,116          | 18,545       | 3.8x           |
| bench_erc1155_stylus | 1,194,841,165 | +49.4%  | 738,132,005      | +115.3%           | 61.8%     | 70,459      | 80,248          | 28,954       | 2.8x           |
| bench_erc1155_ink    | 1,322,937,826 | +65.4%  | 866,228,666      | +152.6%           | 65.5%     | 57,518      | 67,307          | 26,447       | 2.5x           |


### BenchERC1155 - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchERC1155_evm     | 722,977,862   | -       | 1,425,734        | -                 | 0.2%      | 6,934       | 16,723          | 6,046        | 2.8x           |
| BenchERC1155_pvm     | 893,455,631   | +23.6%  | 12,524,738       | +778.5%           | 1.4%      | 6,934       | 16,723          | 6,315        | 2.6x           |
| bench_erc1155_stylus | 1,061,493,682 | +46.8%  | 16,851,241       | +1081.9%          | 1.6%      | 6,934       | 16,723          | 6,688        | 2.5x           |
| bench_erc1155_ink    | 1,113,603,115 | +54.0%  | 112,707,286      | +7805.2%          | 10.1%     | 17,191      | 26,980          | 7,223        | 3.7x           |


### BenchERC20 - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchERC20_evm     | 928,355,440   | -       | 207,576,448      | -                 | 22.4%     | 27,448      | 37,237          | 6,588        | 5.7x           |
| BenchERC20_pvm     | 1,150,963,698 | +24.0%  | 290,012,259      | +39.7%            | 25.2%     | 27,448      | 37,237          | 6,611        | 5.6x           |
| bench_erc20_ink    | 1,529,967,413 | +64.8%  | 597,339,824      | +187.8%           | 39.0%     | 27,448      | 37,237          | 6,852        | 5.4x           |
| bench_erc20_stylus | 1,719,153,995 | +85.2%  | 685,229,483      | +230.1%           | 39.9%     | 58,219      | 68,008          | 6,357        | 10.7x          |


### BenchERC20 - transfer

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchERC20_evm     | 803,589,064   | -       | 346,447,736      | -                 | 43.1%     | 50,353      | 60,142          | 8,488        | 7.1x           |
| BenchERC20_pvm     | 933,966,017   | +16.2%  | 476,824,689      | +37.6%            | 51.1%     | 59,216      | 69,005          | 17,596       | 3.9x           |
| bench_erc20_stylus | 1,316,894,748 | +63.9%  | 859,753,420      | +148.2%           | 65.3%     | 69,955      | 79,744          | 27,951       | 2.9x           |
| bench_erc20_ink    | 1,616,780,791 | +101.2% | 1,159,652,559    | +234.7%           | 71.7%     | 84,241      | 94,030          | 22,183       | 4.2x           |


### BenchERC721 - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchERC721_evm     | 722,129,794   | -       | 1,415,230        | -                 | 0.2%      | 6,934       | 16,723          | 6,223        | 2.7x           |
| BenchERC721_pvm     | 849,161,381   | +17.6%  | 12,524,738       | +785.0%           | 1.5%      | 6,934       | 16,723          | 6,030        | 2.8x           |
| bench_erc721_stylus | 924,673,378   | +28.0%  | 17,455,861       | +1133.4%          | 1.9%      | 6,934       | 16,723          | 5,149        | 3.2x           |
| bench_erc721_ink    | 1,011,644,377 | +40.1%  | 98,660,554       | +6871.3%          | 9.8%      | 17,191      | 26,980          | 6,588        | 4.1x           |


### BenchERC721 - mint

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchERC721_evm     | 907,636,021   | -       | 450,926,861      | -                 | 49.7%     | 70,964      | 80,753          | 8,336        | 9.7x           |
| BenchERC721_pvm     | 1,018,411,695 | +12.2%  | 561,702,535      | +24.6%            | 55.2%     | 78,059      | 87,848          | 15,494       | 5.7x           |
| bench_erc721_stylus | 1,368,231,055 | +50.7%  | 911,521,895      | +102.1%           | 66.6%     | 82,441      | 92,230          | 19,517       | 4.7x           |
| bench_erc721_ink    | 1,405,512,965 | +54.9%  | 948,803,805      | +110.4%           | 67.5%     | 84,609      | 94,398          | 20,555       | 4.6x           |


### BenchStorage - deploy

| Implementation       | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchStorage_evm     | 712,344,394 | -       | 1,294,030        | -                 | 0.2%      | 6,934       | 16,723          | 6,205        | 2.7x           |
| BenchStorage_pvm     | 764,067,695 | +7.3%   | 12,121,658       | +836.7%           | 1.6%      | 6,934       | 16,723          | 6,237        | 2.7x           |
| bench_storage_ink    | 859,929,792 | +20.7%  | 98,593,374       | +7519.1%          | 11.5%     | 17,191      | 26,980          | 5,938        | 4.5x           |
| bench_storage_stylus | 879,302,462 | +23.4%  | 9,259,901        | +615.6%           | 1.1%      | 6,934       | 16,723          | 5,911        | 2.8x           |


### BenchStorage - read_100

| Implementation       | ref_time       | vs Best  | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | -------------- | -------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchStorage_evm     | 557,246,950    | -        | 100,105,622      | -                 | 18.0%     | 8,793       | 18,582          | 3,659        | 5.1x           |
| BenchStorage_pvm     | 2,090,337,331  | +275.1%  | 1,633,196,003    | +1531.5%          | 78.1%     | 11,358      | 21,147          | 6,450        | 3.3x           |
| bench_storage_ink    | 9,523,033,333  | +1608.9% | 9,065,878,909    | +8956.3%          | 95.2%     | 1,049,501   | 1,059,290       | 7,986        | 132.6x         |
| bench_storage_stylus | 14,424,452,810 | +2488.5% | 13,967,298,386   | +13852.6%         | 96.8%     | 1,047,593   | 1,057,382       | 14,595       | 72.4x          |


### BenchStorage - write_100

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| bench_storage_ink    | 12,471,733,966 | -       | 12,014,579,542   | -                 | 96.3%     | 1,059,742   | 1,069,531       | 10,819       | 98.9x          |
| BenchStorage_evm     | 16,289,559,738 | +30.6%  | 15,832,405,314   | +31.8%            | 97.2%     | 2,066,564   | 2,076,353       | 8,115        | 255.9x         |
| BenchStorage_pvm     | 18,712,989,222 | +50.0%  | 18,255,834,798   | +51.9%            | 97.6%     | 2,069,097   | 2,078,886       | 10,715       | 194.0x         |
| bench_storage_stylus | 26,633,110,825 | +113.5% | 26,175,956,401   | +117.9%           | 98.3%     | 2,076,429   | 2,086,218       | 17,712       | 117.8x         |


### CoinTool_App - deploy

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| CoinTool_App_evm | 902,352,076   | -       | 147,619,528      | -                 | 16.4%     | 27,480      | 37,269          | 7,197        | 5.2x           |
| CoinTool_App_pvm | 1,392,536,524 | +54.3%  | 217,040,815      | +47.0%            | 15.6%     | 27,448      | 37,237          | 6,758        | 5.5x           |


### CoinTool_App - t

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| CoinTool_App_evm | 5,189,140,005 | -       | 4,727,768,669    | -                 | 91.1%     | 432,334     | 442,123         | 32,523       | 13.6x          |
| CoinTool_App_pvm | 7,004,559,006 | +35.0%  | 6,543,187,670    | +38.4%            | 93.4%     | 752,464     | 762,253         | 168,763      | 4.5x           |


### Computation - deploy

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Computation_evm    | 709,245,684 | -       | 1,255,650        | -                 | 0.2%      | 6,934       | 16,723          | 5,388        | 3.1x           |
| computation_stylus | 752,514,067 | +6.1%   | 9,797,341        | +680.3%           | 1.3%      | 6,934       | 16,723          | 5,756        | 2.9x           |
| Computation_pvm    | 756,897,733 | +6.7%   | 12,457,558       | +892.1%           | 1.6%      | 6,934       | 16,723          | 5,662        | 3.0x           |
| computation_ink    | 822,060,937 | +15.9%  | 94,629,754       | +7436.3%          | 11.5%     | 17,191      | 26,980          | 6,452        | 4.2x           |


### Computation - odd_product_10

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Computation_evm    | 472,654,771 | -       | 15,945,611       | -                 | 3.4%      | 8,504       | 18,293          | 3,294        | 5.6x           |
| computation_stylus | 518,066,029 | +9.6%   | 61,356,869       | +284.8%           | 11.8%     | 10,686      | 20,475          | 5,613        | 3.6x           |
| Computation_pvm    | 548,048,260 | +16.0%  | 91,339,100       | +472.8%           | 16.7%     | 10,793      | 20,582          | 5,994        | 3.4x           |
| computation_ink    | 548,581,760 | +16.1%  | 91,872,600       | +476.2%           | 16.7%     | 19,994      | 29,783          | 5,690        | 5.2x           |


### Computation - triangle_10

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Computation_evm    | 469,487,565 | -       | 12,778,405       | -                 | 2.7%      | 8,504       | 18,293          | 3,294        | 5.6x           |
| computation_stylus | 516,050,629 | +9.9%   | 59,341,469       | +364.4%           | 11.5%     | 10,686      | 20,475          | 5,613        | 3.6x           |
| Computation_pvm    | 539,314,860 | +14.9%  | 82,605,700       | +546.4%           | 15.3%     | 10,793      | 20,582          | 5,994        | 3.4x           |
| computation_ink    | 546,096,100 | +16.3%  | 89,386,940       | +599.5%           | 16.4%     | 19,994      | 29,783          | 5,690        | 5.2x           |


### DocumentAccessManagement - configurePublicAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 860,794,976   | -       | 403,221,480      | -                 | 46.8%     | 69,244      | 79,033          | 18,286       | 4.3x           |
| DocumentAccessManagement_pvm | 1,180,568,143 | +37.1%  | 722,981,551      | +79.3%            | 61.2%     | 149,808     | 159,597         | 98,837       | 1.6x           |


### DocumentAccessManagement - createDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 2,576,397,149 | -       | 2,115,850,861    | -                 | 82.1%     | 295,963     | 305,752         | 17,104       | 17.9x          |
| DocumentAccessManagement_pvm | 3,546,700,521 | +37.7%  | 3,086,154,233    | +45.9%            | 87.0%     | 396,879     | 406,668         | 97,684       | 4.2x           |


### DocumentAccessManagement - createDocument2

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 2,576,409,885 | -       | 2,115,863,597    | -                 | 82.1%     | 295,995     | 305,784         | 17,990       | 17.0x          |
| DocumentAccessManagement_pvm | 3,546,762,985 | +37.7%  | 3,086,216,697    | +45.9%            | 87.0%     | 396,943     | 406,732         | 98,541       | 4.1x           |


### DocumentAccessManagement - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 858,130,545   | -       | 3,099,708        | -                 | 0.4%      | 6,934       | 16,723          | 6,690        | 2.5x           |
| DocumentAccessManagement_pvm | 2,165,248,244 | +152.3% | 12,524,738       | +304.1%           | 0.6%      | 6,934       | 16,723          | 6,563        | 2.5x           |


### DocumentAccessManagement - grantAccessWithShare

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 2,487,839,023 | -       | 2,027,711,807    | -                 | 81.5%     | 285,674     | 295,463         | 18,056       | 16.4x          |
| DocumentAccessManagement_pvm | 3,229,686,647 | +29.8%  | 2,769,559,431    | +36.6%            | 85.8%     | 366,204     | 375,993         | 98,607       | 3.8x           |


### DocumentAccessManagement - registerKeys

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 857,187,706   | -       | 399,614,210      | -                 | 46.6%     | 58,891      | 68,680          | 17,611       | 3.9x           |
| DocumentAccessManagement_pvm | 1,340,965,508 | +56.4%  | 883,378,916      | +121.1%           | 65.9%     | 160,098     | 169,887         | 98,162       | 1.7x           |


### DocumentAccessManagement - revokeAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 3,282,527,673 | -       | 2,824,941,081    | -                 | 86.1%     | 419,073     | 428,862         | 18,771       | 22.8x          |
| DocumentAccessManagement_pvm | 4,092,518,321 | +24.7%  | 3,634,931,729    | +28.7%            | 88.8%     | 500,280     | 510,069         | 99,322       | 5.1x           |


### DocumentAccessManagement - transferOwnership

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 2,757,701,633 | -       | 2,300,115,041    | -                 | 83.4%     | 346,954     | 356,743         | 18,569       | 19.2x          |
| DocumentAccessManagement_pvm | 3,511,949,140 | +27.4%  | 3,054,362,548    | +32.8%            | 87.0%     | 437,773     | 447,562         | 99,120       | 4.5x           |


### DocumentAccessManagement - updateDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 1,141,833,146 | -       | 681,286,858      | -                 | 59.7%     | 100,824     | 110,613         | 14,506       | 7.6x           |
| DocumentAccessManagement_pvm | 1,592,495,758 | +39.5%  | 1,131,949,470    | +66.1%            | 71.1%     | 181,417     | 191,206         | 95,123       | 2.0x           |


### DotNS - createSubdomain

| Implementation | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| dotns_rust     | 2,743,306,464  | -       | 2,283,598,320    | -                 | 83.2%     | 83,613      | 93,402          | 31,661       | 3.0x           |
| DotNS_evm      | 3,097,361,485  | +12.9%  | 2,637,653,341    | +15.5%            | 85.2%     | 294,479     | 304,268         | 18,121       | 16.8x          |
| DotNS_pvm      | 12,321,436,390 | +349.1% | 11,861,728,246   | +419.4%           | 96.3%     | 382,054     | 391,843         | 84,296       | 4.6x           |


### DotNS - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DotNS_evm      | 837,059,317   | -       | 2,838,724        | +76.7%            | 0.3%      | 6,934       | 16,723          | 6,377        | 2.6x           |
| dotns_rust     | 1,075,515,579 | +28.5%  | 1,606,719        | -                 | 0.1%      | 6,934       | 16,723          | 6,365        | 2.6x           |
| DotNS_pvm      | 1,926,961,286 | +130.2% | 12,524,738       | +679.5%           | 0.6%      | 6,934       | 16,723          | 5,526        | 3.0x           |


### DotNS - register

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| dotns_rust     | 2,060,324,654 | -       | 1,602,332,086    | -                 | 77.8%     | 72,570      | 82,359          | 30,535       | 2.7x           |
| DotNS_evm      | 2,627,522,786 | +27.5%  | 2,169,517,122    | +35.4%            | 82.6%     | 263,190     | 272,979         | 15,487       | 17.6x          |
| DotNS_pvm      | 6,707,512,757 | +225.6% | 6,249,507,093    | +290.0%           | 93.2%     | 350,830     | 360,619         | 81,724       | 4.4x           |


### DotNS - register_with_duration

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| dotns_rust     | 2,058,724,723 | -       | 1,600,732,155    | -                 | 77.8%     | 72,610      | 82,399          | 30,884       | 2.7x           |
| DotNS_evm      | 2,620,122,012 | +27.3%  | 2,162,116,348    | +35.1%            | 82.5%     | 263,222     | 273,011         | 16,034       | 17.0x          |
| DotNS_pvm      | 6,553,628,073 | +218.3% | 6,095,622,409    | +280.8%           | 93.0%     | 350,732     | 360,521         | 82,440       | 4.4x           |


### DotNS - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| dotns_rust     | 1,513,101,668 | -       | 1,055,528,172    | -                 | 69.8%     | 52,666      | 62,455          | 31,376       | 2.0x           |
| DotNS_evm      | 2,703,160,819 | +78.7%  | 2,245,574,227    | +112.7%           | 83.1%     | 284,024     | 293,813         | 18,242       | 16.1x          |
| DotNS_pvm      | 5,695,482,933 | +276.4% | 5,237,896,341    | +396.2%           | 92.0%     | 352,214     | 362,003         | 84,498       | 4.3x           |


### DotNS - renew

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DotNS_evm      | 941,878,987   | -       | 483,886,419      | -                 | 51.4%     | 57,791      | 67,580          | 13,108       | 5.2x           |
| dotns_rust     | 1,598,904,414 | +69.8%  | 1,140,911,846    | +135.8%           | 71.4%     | 52,762      | 62,551          | 28,220       | 2.2x           |
| DotNS_pvm      | 3,388,445,227 | +259.8% | 2,930,439,563    | +505.6%           | 86.5%     | 124,885     | 134,674         | 80,477       | 1.7x           |


### DotNS - setAddress

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DotNS_evm      | 1,002,031,726 | -       | 544,039,158      | -                 | 54.3%     | 68,080      | 77,869          | 13,214       | 5.9x           |
| dotns_rust     | 1,679,097,099 | +67.6%  | 1,221,104,531    | +124.5%           | 72.7%     | 52,762      | 62,551          | 28,121       | 2.2x           |
| DotNS_pvm      | 3,408,940,584 | +240.2% | 2,950,934,920    | +442.4%           | 86.6%     | 145,463     | 155,252         | 80,519       | 1.9x           |


### DotNS - setMetadata

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DotNS_evm      | 936,900,074   | -       | 478,907,506      | -                 | 51.1%     | 57,759      | 67,548          | 16,565       | 4.1x           |
| dotns_rust     | 1,618,513,918 | +72.8%  | 1,160,521,350    | +142.3%           | 71.7%     | 52,762      | 62,551          | 28,191       | 2.2x           |
| DotNS_pvm      | 3,267,349,192 | +248.7% | 2,809,343,528    | +486.6%           | 86.0%     | 124,853     | 134,642         | 82,843       | 1.6x           |


### DotNS - setSubdomainOwner

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| dotns_rust     | 2,936,323,034 | -       | 2,477,047,058    | -                 | 84.4%     | 84,220      | 94,009          | 28,972       | 3.2x           |
| DotNS_evm      | 2,987,917,068 | +1.8%   | 2,528,641,092    | +2.1%             | 84.6%     | 294,636     | 304,425         | 15,652       | 19.4x          |
| DotNS_pvm      | 9,356,213,448 | +218.6% | 8,896,937,472    | +259.2%           | 95.1%     | 372,211     | 382,000         | 82,510       | 4.6x           |


### DotNS - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| dotns_rust     | 2,221,647,892 | -       | 1,763,655,324    | -                 | 79.4%     | 73,276      | 83,065          | 31,361       | 2.6x           |
| DotNS_evm      | 2,678,234,795 | +20.6%  | 2,220,229,131    | +25.9%            | 82.9%     | 284,024     | 293,813         | 14,102       | 20.8x          |
| DotNS_pvm      | 5,508,148,570 | +147.9% | 5,050,142,906    | +186.3%           | 91.7%     | 361,664     | 371,453         | 81,610       | 4.6x           |


### Escrow - create_simple

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| escrow_rust    | 2,458,531,503 | -       | 2,000,434,167    | -                 | 81.4%     | 93,287      | 103,076         | 19,927       | 5.2x           |
| Escrow_evm     | 2,647,322,726 | +7.7%   | 2,189,225,390    | +9.4%             | 82.7%     | 310,692     | 320,481         | 11,464       | 28.0x          |
| Escrow_pvm     | 3,320,599,695 | +35.1%  | 2,862,502,359    | +43.1%            | 86.2%     | 361,141     | 370,930         | 41,572       | 8.9x           |


### Escrow - create_with_arbiter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| escrow_rust    | 2,458,544,239 | -       | 2,000,446,903    | -                 | 81.4%     | 93,319      | 103,108         | 20,406       | 5.1x           |
| Escrow_evm     | 2,647,385,894 | +7.7%   | 2,189,288,558    | +9.4%             | 82.7%     | 310,820     | 320,609         | 12,113       | 26.5x          |
| Escrow_pvm     | 3,318,189,207 | +35.0%  | 2,860,091,871    | +43.0%            | 86.2%     | 361,268     | 371,057         | 42,221       | 8.8x           |


### Escrow - create_with_expiry

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| escrow_rust    | 2,458,544,239 | -       | 2,000,446,903    | -                 | 81.4%     | 93,319      | 103,108         | 20,509       | 5.0x           |
| Escrow_evm     | 2,647,398,630 | +7.7%   | 2,189,301,294    | +9.4%             | 82.7%     | 310,852     | 320,641         | 12,555       | 25.5x          |
| Escrow_pvm     | 3,316,728,671 | +34.9%  | 2,858,631,335    | +42.9%            | 86.2%     | 361,267     | 371,056         | 42,663       | 8.7x           |


### Escrow - create_with_releaseTime

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| escrow_rust    | 2,458,544,239 | -       | 2,000,446,903    | -                 | 81.4%     | 93,319      | 103,108         | 20,476       | 5.0x           |
| Escrow_evm     | 2,647,423,590 | +7.7%   | 2,189,326,254    | +9.4%             | 82.7%     | 310,884     | 320,673         | 12,178       | 26.3x          |
| Escrow_pvm     | 3,314,936,951 | +34.8%  | 2,856,839,615    | +42.8%            | 86.2%     | 361,202     | 370,991         | 42,286       | 8.8x           |


### Escrow - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Escrow_evm     | 1,006,208,734 | -       | 235,481,935      | +40.3%            | 23.4%     | 37,737      | 47,526          | 6,921        | 6.9x           |
| escrow_rust    | 1,079,161,741 | +7.3%   | 167,836,939      | -                 | 15.6%     | 17,191      | 26,980          | 6,758        | 4.0x           |
| Escrow_pvm     | 1,504,741,665 | +49.5%  | 257,344,308      | +53.3%            | 17.1%     | 37,705      | 47,494          | 7,055        | 6.7x           |


### Escrow - refund

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Escrow_evm     | 1,632,144,047 | -       | 1,175,408,695    | -                 | 72.0%     | 161,696     | 171,485         | 12,240       | 14.0x          |
| Escrow_pvm     | 1,787,516,793 | +9.5%   | 1,330,781,441    | +13.2%            | 74.4%     | 191,274     | 201,063         | 42,348       | 4.7x           |
| escrow_rust    | 1,948,975,262 | +19.4%  | 1,492,253,006    | +27.0%            | 76.6%     | 77,978      | 87,767          | 18,537       | 4.7x           |


### Escrow - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Escrow_evm     | 1,630,256,205 | -       | 1,173,520,853    | -                 | 72.0%     | 161,696     | 171,485         | 14,113       | 12.2x          |
| Escrow_pvm     | 1,789,935,273 | +9.8%   | 1,333,199,921    | +13.6%            | 74.5%     | 191,274     | 201,063         | 44,221       | 4.5x           |
| escrow_rust    | 1,942,120,950 | +19.1%  | 1,485,398,694    | +26.6%            | 76.5%     | 77,976      | 87,765          | 21,974       | 4.0x           |


### FiatTokenProxy - approve

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 867,876,739   | -       | 410,735,411      | -                 | 47.3%     | 70,858      | 80,647          | 25,056       | 3.2x           |
| FiatTokenProxy_pvm | 1,180,861,544 | +36.1%  | 723,707,120      | +76.2%            | 61.3%     | 167,512     | 177,301         | 122,160      | 1.5x           |


### FiatTokenProxy - changeAdmin

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 687,804,557 | -       | 231,095,397      | -                 | 33.6%     | 40,407      | 50,196          | 5,369        | 9.3x           |
| FiatTokenProxy_pvm | 759,864,451 | +10.5%  | 303,155,291      | +31.2%            | 39.9%     | 48,931      | 58,720          | 14,002       | 4.2x           |


### FiatTokenProxy - configureMinter

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 1,070,816,252 | -       | 613,661,828      | -                 | 57.3%     | 101,696     | 111,485         | 25,192       | 4.4x           |
| FiatTokenProxy_pvm | 1,388,246,794 | +29.6%  | 931,092,370      | +51.7%            | 67.1%     | 198,315     | 208,104         | 122,296      | 1.7x           |


### FiatTokenProxy - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 950,881,882   | -       | 221,244,040      | -                 | 23.3%     | 31,458      | 41,247          | 6,900        | 6.0x           |
| FiatTokenProxy_pvm | 1,125,349,189 | +18.3%  | 263,769,577      | +19.2%            | 23.4%     | 31,458      | 41,247          | 6,668        | 6.2x           |


### FiatTokenProxy - initialize

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 2,074,181,715 | -       | 1,611,972,235    | -                 | 77.7%     | 246,708     | 256,497         | 24,720       | 10.4x          |
| FiatTokenProxy_pvm | 2,653,475,888 | +27.9%  | 2,191,266,408    | +35.9%            | 82.6%     | 343,071     | 352,860         | 121,824      | 2.9x           |


### FiatTokenProxy - mint

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 1,535,269,315 | -       | 1,078,114,891    | -                 | 70.2%     | 163,430     | 173,219         | 25,436       | 6.8x           |
| FiatTokenProxy_pvm | 2,051,369,893 | +33.6%  | 1,594,215,469    | +47.9%            | 77.7%     | 260,018     | 269,807         | 122,540      | 2.2x           |


### FiatTokenProxy - transfer

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 1,448,926,741 | -       | 991,772,317      | -                 | 68.4%     | 153,173     | 162,962         | 25,194       | 6.5x           |
| FiatTokenProxy_pvm | 1,926,838,844 | +33.0%  | 1,469,684,420    | +48.2%            | 76.3%     | 249,728     | 259,517         | 122,298      | 2.1x           |


### FiatTokenProxy - transferFrom

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 1,792,810,793 | -       | 1,335,250,393    | -                 | 74.5%     | 194,454     | 204,243         | 22,602       | 9.0x           |
| FiatTokenProxy_pvm | 2,439,450,166 | +36.1%  | 1,981,889,766    | +48.4%            | 81.2%     | 291,105     | 300,894         | 119,574      | 2.5x           |


### FiatTokenV2_2 - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenV2_2_evm | 1,334,587,618 | -       | 382,802,032      | -                 | 28.7%     | 58,283      | 68,072          | 7,127        | 9.6x           |
| FiatTokenV2_2_pvm | 2,785,743,363 | +108.7% | 415,446,501      | +8.5%             | 14.9%     | 58,477      | 68,266          | 7,087        | 9.6x           |


### Fibonacci - deploy

| Implementation                      | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| fibonacci_u32_rust                  | 706,494,835 | -       | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 4,813        | 3.5x           |
| Fibonacci_evm                       | 707,582,570 | +0.2%   | 1,235,450        | +1739.0%          | 0.2%      | 6,934       | 16,723          | 5,220        | 3.2x           |
| fibonacci_u128_rust                 | 707,799,502 | +0.2%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,209        | 3.2x           |
| fibonacci_u32_macro_bump_alloc_rust | 709,667,914 | +0.4%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,328        | 3.1x           |
| fibonacci_u32_macro_no_alloc_rust   | 710,408,836 | +0.6%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,222        | 3.2x           |
| fibonacci_u256_rust                 | 718,510,657 | +1.7%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,154        | 3.2x           |
| Fibonacci_pvm                       | 732,932,459 | +3.7%   | 11,718,578       | +17343.6%         | 1.6%      | 6,934       | 16,723          | 5,022        | 3.3x           |
| fibonacci_u32_stylus                | 736,132,438 | +4.2%   | 8,991,181        | +13283.7%         | 1.2%      | 6,934       | 16,723          | 5,138        | 3.3x           |
| fibonacci_u32_ink                   | 810,829,259 | +14.8%  | 94,898,474       | +141160.0%        | 11.7%     | 17,191      | 26,980          | 4,805        | 5.6x           |


### Fibonacci - fib_10

| Implementation                      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| fibonacci_u32_rust                  | 578,101,758   | -       | 121,405,694      | -                 | 21.0%     | 8,430       | 18,219          | 3,591        | 5.1x           |
| fibonacci_u32_macro_bump_alloc_rust | 582,291,963   | +0.7%   | 125,595,899      | +3.5%             | 21.6%     | 8,627       | 18,416          | 3,694        | 5.0x           |
| Fibonacci_evm                       | 588,941,046   | +1.9%   | 132,244,982      | +8.9%             | 22.5%     | 8,401       | 18,190          | 3,473        | 5.2x           |
| fibonacci_u32_macro_no_alloc_rust   | 589,220,361   | +1.9%   | 132,524,297      | +9.2%             | 22.5%     | 8,673       | 18,462          | 3,603        | 5.1x           |
| fibonacci_u32_stylus                | 590,149,769   | +2.1%   | 133,466,801      | +9.9%             | 22.6%     | 9,713       | 19,502          | 4,844        | 4.0x           |
| fibonacci_u128_rust                 | 738,662,859   | +27.8%  | 281,966,795      | +132.3%           | 38.2%     | 8,511       | 18,300          | 3,672        | 5.0x           |
| fibonacci_u32_ink                   | 816,896,307   | +41.3%  | 360,200,243      | +196.7%           | 44.1%     | 29,534      | 39,323          | 4,966        | 7.9x           |
| Fibonacci_pvm                       | 876,860,861   | +51.7%  | 420,164,797      | +246.1%           | 47.9%     | 9,348       | 19,137          | 4,689        | 4.1x           |
| fibonacci_u256_rust                 | 4,041,593,748 | +599.1% | 3,584,897,684    | +2852.8%          | 88.7%     | 9,176       | 18,965          | 4,139        | 4.6x           |


### Fibonacci_u256 - deploy

| Implementation                           | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Fibonacci_u256_iter_evm                  | 706,799,738 | -       | 1,225,754        | +1724.6%          | 0.2%      | 6,934       | 16,723          | 3,782        | 4.4x           |
| Fibonacci_u256_evm                       | 706,864,974 | +0.0%   | 1,226,562        | +1725.8%          | 0.2%      | 6,934       | 16,723          | 5,605        | 3.0x           |
| fibonacci_u256_iter_primitive_types_rust | 716,432,854 | +1.4%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 4,590        | 3.6x           |
| fibonacci_u256_iter_rust                 | 717,061,027 | +1.5%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 4,857        | 3.4x           |
| fibonacci_u256_primitive_types_rust      | 717,222,097 | +1.5%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,694        | 2.9x           |
| fibonacci_u256_rust                      | 718,510,657 | +1.7%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 2,871        | 5.8x           |
| Fibonacci_u256_iter_pvm                  | 734,092,163 | +3.9%   | 11,718,578       | +17343.6%         | 1.6%      | 6,934       | 16,723          | 5,980        | 2.8x           |
| Fibonacci_u256_pvm                       | 735,670,649 | +4.1%   | 11,718,578       | +17343.6%         | 1.6%      | 6,934       | 16,723          | 5,506        | 3.0x           |
| fibonacci_u256_ink                       | 827,161,757 | +17.0%  | 94,898,474       | +141160.0%        | 11.5%     | 17,191      | 26,980          | 5,715        | 4.7x           |
| fibonacci_u256_iter_ink                  | 827,274,506 | +17.0%  | 94,898,474       | +141160.0%        | 11.5%     | 17,191      | 26,980          | 5,284        | 5.1x           |


### Fibonacci_u256 - fib_10

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Fibonacci_u256_iter_evm                  | 462,839,753   | -       | 6,130,593        | -                 | 1.3%      | 8,356       | 18,145          | 3,661        | 5.0x           |
| Fibonacci_u256_iter_pvm                  | 505,487,573   | +9.2%   | 48,778,413       | +695.7%           | 9.6%      | 9,423       | 19,212          | 4,492        | 4.3x           |
| fibonacci_u256_iter_primitive_types_rust | 522,370,847   | +12.9%  | 65,661,687       | +971.0%           | 12.6%     | 9,050       | 18,839          | 4,147        | 4.5x           |
| Fibonacci_u256_evm                       | 566,630,393   | +22.4%  | 109,921,233      | +1693.0%          | 19.4%     | 8,360       | 18,149          | 3,287        | 5.5x           |
| fibonacci_u256_iter_rust                 | 614,068,834   | +32.7%  | 157,359,674      | +2466.8%          | 25.6%     | 9,089       | 18,878          | 4,214        | 4.5x           |
| fibonacci_u256_iter_ink                  | 716,752,236   | +54.9%  | 260,043,076      | +4141.7%          | 36.3%     | 30,558      | 40,347          | 5,893        | 6.8x           |
| Fibonacci_u256_pvm                       | 1,178,322,907 | +154.6% | 721,613,747      | +11670.7%         | 61.2%     | 9,521       | 19,310          | 4,651        | 4.2x           |
| fibonacci_u256_primitive_types_rust      | 2,481,890,904 | +436.2% | 2,025,181,744    | +32934.0%         | 81.6%     | 9,099       | 18,888          | 4,201        | 4.5x           |
| fibonacci_u256_ink                       | 2,634,259,405 | +469.2% | 2,177,550,245    | +35419.4%         | 82.7%     | 30,551      | 40,340          | 5,782        | 7.0x           |
| fibonacci_u256_rust                      | 4,041,606,844 | +773.2% | 3,584,897,684    | +58375.5%         | 88.7%     | 9,179       | 18,968          | 4,139        | 4.6x           |


### Fibonacci_u256 - fib_15

| Implementation                           | ref_time       | vs Best  | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------------------- | -------------- | -------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Fibonacci_u256_iter_evm                  | 465,258,063    | -        | 8,548,903        | -                 | 1.8%      | 8,356       | 18,145          | 3,661        | 5.0x           |
| Fibonacci_u256_iter_pvm                  | 526,313,373    | +13.1%   | 69,604,213       | +714.2%           | 13.2%     | 9,423       | 19,212          | 4,492        | 4.3x           |
| fibonacci_u256_iter_primitive_types_rust | 548,571,047    | +17.9%   | 91,861,887       | +974.5%           | 16.7%     | 9,050       | 18,839          | 4,147        | 4.5x           |
| fibonacci_u256_iter_rust                 | 691,325,834    | +48.6%   | 234,616,674      | +2644.4%          | 33.9%     | 9,089       | 18,878          | 4,214        | 4.5x           |
| fibonacci_u256_iter_ink                  | 763,442,336    | +64.1%   | 306,733,176      | +3488.0%          | 40.2%     | 30,558      | 40,347          | 5,893        | 6.8x           |
| Fibonacci_u256_evm                       | 1,672,297,327  | +259.4%  | 1,215,588,167    | +14119.2%         | 72.7%     | 8,360       | 18,149          | 3,287        | 5.5x           |
| Fibonacci_u256_pvm                       | 8,417,639,707  | +1709.2% | 7,960,930,547    | +93022.2%         | 94.6%     | 9,521       | 19,310          | 4,651        | 4.2x           |
| fibonacci_u256_primitive_types_rust      | 22,885,007,440 | +4818.8% | 22,428,285,184   | +262252.8%        | 98.0%     | 9,102       | 18,891          | 4,201        | 4.5x           |
| fibonacci_u256_ink                       | 22,977,048,301 | +4838.6% | 22,520,326,045   | +263329.4%        | 98.0%     | 30,554      | 40,343          | 5,782        | 7.0x           |
| fibonacci_u256_rust                      | 40,293,896,160 | +8560.5% | 39,837,173,904   | +465891.6%        | 98.9%     | 9,182       | 18,971          | 4,139        | 4.6x           |


### Fibonacci_u256 - fib_5

| Implementation                           | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Fibonacci_u256_iter_evm                  | 460,421,443 | -       | 3,712,283        | -                 | 0.8%      | 8,356       | 18,145          | 3,661        | 5.0x           |
| Fibonacci_u256_evm                       | 466,910,210 | +1.4%   | 10,201,050       | +174.8%           | 2.2%      | 8,360       | 18,149          | 3,287        | 5.5x           |
| Fibonacci_u256_iter_pvm                  | 484,661,773 | +5.3%   | 27,952,613       | +653.0%           | 5.8%      | 9,423       | 19,212          | 4,492        | 4.3x           |
| fibonacci_u256_iter_primitive_types_rust | 496,170,647 | +7.8%   | 39,461,487       | +963.0%           | 8.0%      | 9,050       | 18,839          | 4,147        | 4.5x           |
| Fibonacci_u256_pvm                       | 525,333,307 | +14.1%  | 68,624,147       | +1748.6%          | 13.1%     | 9,521       | 19,310          | 4,651        | 4.2x           |
| fibonacci_u256_iter_rust                 | 536,811,834 | +16.6%  | 80,102,674       | +2057.8%          | 14.9%     | 9,089       | 18,878          | 4,214        | 4.5x           |
| fibonacci_u256_primitive_types_rust      | 642,435,324 | +39.5%  | 185,726,164      | +4903.0%          | 28.9%     | 9,099       | 18,888          | 4,201        | 4.5x           |
| fibonacci_u256_iter_ink                  | 670,062,136 | +45.5%  | 213,352,976      | +5647.2%          | 31.8%     | 30,558      | 40,347          | 5,893        | 6.8x           |
| fibonacci_u256_rust                      | 771,754,704 | +67.6%  | 315,045,544      | +8386.6%          | 40.8%     | 9,179       | 18,968          | 4,139        | 4.6x           |
| fibonacci_u256_ink                       | 800,232,309 | +73.8%  | 343,536,245      | +9154.0%          | 42.9%     | 30,548      | 40,337          | 5,782        | 7.0x           |


### FungibleCredential - burn

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 1,091,230,377 | -       | 634,089,049      | -                 | 58.1%     | 97,801      | 107,590         | 12,385       | 8.7x           |
| FungibleCredential_pvm   | 1,395,310,939 | +27.9%  | 938,169,611      | +48.0%            | 67.2%     | 156,350     | 166,139         | 70,316       | 2.4x           |
| fungible_credential_rust | 1,630,764,801 | +49.4%  | 1,173,636,569    | +85.1%            | 72.0%     | 67,344      | 77,133          | 22,517       | 3.4x           |


### FungibleCredential - createClass_nontransferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 1,432,359,193 | -       | 973,502,289      | -                 | 68.0%     | 139,190     | 148,979         | 15,173       | 9.8x           |
| fungible_credential_rust | 1,513,510,340 | +5.7%   | 1,054,666,532    | +8.3%             | 69.7%     | 57,228      | 67,017          | 25,404       | 2.6x           |
| FungibleCredential_pvm   | 2,290,873,640 | +59.9%  | 1,832,016,736    | +88.2%            | 80.0%     | 249,186     | 258,975         | 73,038       | 3.5x           |


### FungibleCredential - createClass_transferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 1,432,347,373 | -       | 973,490,469      | -                 | 68.0%     | 139,190     | 148,979         | 14,931       | 10.0x          |
| fungible_credential_rust | 1,500,340,479 | +4.7%   | 1,041,496,671    | +7.0%             | 69.4%     | 57,228      | 67,017          | 25,333       | 2.6x           |
| FungibleCredential_pvm   | 2,290,936,332 | +59.9%  | 1,832,079,428    | +88.2%            | 80.0%     | 249,250     | 259,039         | 72,796       | 3.6x           |


### FungibleCredential - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 966,669,489   | -       | 147,476,727      | -                 | 15.3%     | 27,480      | 37,269          | 7,022        | 5.3x           |
| fungible_credential_rust | 1,155,902,156 | +19.6%  | 167,295,968      | +13.4%            | 14.5%     | 17,191      | 26,980          | 7,139        | 3.8x           |
| FungibleCredential_pvm   | 1,926,253,859 | +99.3%  | 164,721,062      | +11.7%            | 8.6%      | 27,448      | 37,237          | 6,804        | 5.5x           |


### FungibleCredential - issue

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 2,233,940,100 | -       | 1,776,353,508    | -                 | 79.5%     | 251,982     | 261,771         | 15,443       | 17.0x          |
| FungibleCredential_pvm   | 2,745,357,175 | +22.9%  | 2,287,770,583    | +28.8%            | 83.3%     | 310,147     | 319,936         | 73,308       | 4.4x           |
| fungible_credential_rust | 2,958,085,383 | +32.4%  | 2,500,498,791    | +40.8%            | 84.5%     | 149,473     | 159,262         | 25,581       | 6.2x           |


### FungibleCredential - issue_more

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 1,150,196,362 | -       | 692,609,770      | -                 | 60.2%     | 108,192     | 117,981         | 12,596       | 9.4x           |
| FungibleCredential_pvm   | 1,453,943,107 | +26.4%  | 996,356,515      | +43.9%            | 68.5%     | 166,741     | 176,530         | 70,527       | 2.5x           |
| fungible_credential_rust | 1,829,056,156 | +59.0%  | 1,371,482,660    | +98.0%            | 75.0%     | 77,704      | 87,493          | 22,541       | 3.9x           |


### FungibleCredential - revoke

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 1,092,638,319 | -       | 635,051,727      | -                 | 58.1%     | 97,903      | 107,692         | 12,389       | 8.7x           |
| FungibleCredential_pvm   | 1,395,328,001 | +27.7%  | 937,741,409      | +47.7%            | 67.2%     | 156,452     | 166,241         | 70,320       | 2.4x           |
| fungible_credential_rust | 1,675,216,496 | +53.3%  | 1,217,643,000    | +91.7%            | 72.7%     | 67,446      | 77,235          | 22,521       | 3.4x           |


### FungibleCredential - transfer

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 2,410,468,879 | -       | 1,952,908,479    | -                 | 81.0%     | 272,618     | 282,407         | 16,116       | 17.5x          |
| FungibleCredential_pvm   | 3,050,178,116 | +26.5%  | 2,592,617,716    | +32.8%            | 85.0%     | 330,879     | 340,668         | 73,981       | 4.6x           |
| fungible_credential_rust | 3,125,594,625 | +29.7%  | 2,668,034,225    | +36.6%            | 85.4%     | 159,654     | 169,443         | 25,612       | 6.6x           |


### KeyRegistry - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| KeyRegistry_evm   | 773,943,487   | -       | 2,056,984        | +39.7%            | 0.3%      | 6,934       | 16,723          | 6,559        | 2.5x           |
| key_registry_rust | 1,006,394,938 | +30.0%  | 1,472,359        | -                 | 0.1%      | 6,934       | 16,723          | 6,315        | 2.6x           |
| KeyRegistry_pvm   | 1,341,310,766 | +73.3%  | 12,524,738       | +750.7%           | 0.9%      | 6,934       | 16,723          | 6,699        | 2.5x           |


### KeyRegistry - fetchPrekeyBundle

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| KeyRegistry_evm   | 1,665,424,406 | -       | 1,208,715,246    | -                 | 72.6%     | 187,320     | 197,109         | 13,117       | 15.0x          |
| KeyRegistry_pvm   | 2,518,039,233 | +51.2%  | 2,061,330,073    | +70.5%            | 81.9%     | 221,922     | 231,711         | 47,308       | 4.9x           |
| key_registry_rust | 2,744,464,573 | +64.8%  | 2,287,755,413    | +89.3%            | 83.4%     | 150,346     | 160,135         | 27,250       | 5.9x           |


### KeyRegistry - registerIdentity

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| KeyRegistry_evm   | 1,851,843,332 | -       | 1,392,567,356    | -                 | 75.2%     | 187,684     | 197,473         | 11,787       | 16.8x          |
| key_registry_rust | 1,899,993,110 | +2.6%   | 1,440,717,134    | +3.5%             | 75.8%     | 89,095      | 98,884          | 26,125       | 3.8x           |
| KeyRegistry_pvm   | 2,374,663,195 | +28.2%  | 1,915,387,219    | +37.5%            | 80.7%     | 222,093     | 231,882         | 46,511       | 5.0x           |


### KeyRegistry - updateSignedPrekey

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| KeyRegistry_evm   | 1,216,778,112 | -       | 758,340,280      | -                 | 62.3%     | 105,468     | 115,257         | 9,318        | 12.4x          |
| KeyRegistry_pvm   | 1,603,471,806 | +31.8%  | 1,145,033,974    | +51.0%            | 71.4%     | 160,647     | 170,436         | 43,966       | 3.9x           |
| key_registry_rust | 1,654,582,836 | +36.0%  | 1,196,158,100    | +57.7%            | 72.3%     | 68,742      | 78,531          | 23,555       | 3.3x           |


### KeyRegistry - uploadOneTimePrekeys

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| KeyRegistry_evm   | 1,774,010,363 | -       | 1,315,572,531    | -                 | 74.2%     | 197,941     | 207,730         | 12,432       | 16.7x          |
| KeyRegistry_pvm   | 2,146,456,737 | +21.0%  | 1,688,018,905    | +28.3%            | 78.6%     | 232,350     | 242,139         | 47,156       | 5.1x           |
| key_registry_rust | 2,623,602,314 | +47.9%  | 2,165,164,482    | +64.6%            | 82.5%     | 150,537     | 160,326         | 26,644       | 6.0x           |


### Log - addWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Log_evm        | 1,170,212,662 | -       | 713,045,142      | -                 | 60.9%     | 107,062     | 116,851         | 13,748       | 8.5x           |
| Log_pvm        | 1,443,322,160 | +23.3%  | 986,154,640      | +38.3%            | 68.3%     | 154,803     | 164,592         | 61,860       | 2.7x           |
| log_rust       | 1,742,488,897 | +48.9%  | 1,285,321,377    | +80.3%            | 73.8%     | 86,515      | 96,304          | 24,477       | 3.9x           |


### Log - append

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Log_evm        | 1,453,384,067 | -       | 996,216,547      | -                 | 68.5%     | 148,186     | 157,975         | 13,550       | 11.7x          |
| log_rust       | 1,544,238,731 | +6.3%   | 1,087,084,307    | +9.1%             | 70.4%     | 55,786      | 65,575          | 24,327       | 2.7x           |
| Log_pvm        | 1,804,286,690 | +24.1%  | 1,347,119,170    | +35.2%            | 74.7%     | 195,959     | 205,748         | 61,662       | 3.3x           |


### Log - append_2

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Log_evm        | 1,453,384,067 | -       | 996,216,547      | -                 | 68.5%     | 148,186     | 157,975         | 13,682       | 11.5x          |
| log_rust       | 1,544,238,731 | +6.3%   | 1,087,084,307    | +9.1%             | 70.4%     | 55,786      | 65,575          | 24,360       | 2.7x           |
| Log_pvm        | 1,804,286,690 | +24.1%  | 1,347,119,170    | +35.2%            | 74.7%     | 195,959     | 205,748         | 61,794       | 3.3x           |


### Log - create_nonpermissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Log_evm        | 1,309,314,435 | -       | 852,579,083      | -                 | 65.1%     | 127,509     | 137,298         | 13,206       | 10.4x          |
| log_rust       | 1,758,898,135 | +34.3%  | 1,302,175,879    | +52.7%            | 74.0%     | 76,127      | 85,916          | 24,087       | 3.6x           |
| Log_pvm        | 1,967,144,330 | +50.2%  | 1,510,408,978    | +77.2%            | 76.8%     | 216,471     | 226,260         | 61,318       | 3.7x           |


### Log - create_permissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Log_evm        | 1,309,339,907 | -       | 852,604,555      | -                 | 65.1%     | 127,573     | 137,362         | 13,586       | 10.1x          |
| log_rust       | 1,758,904,503 | +34.3%  | 1,302,182,247    | +52.7%            | 74.0%     | 76,143      | 85,932          | 24,344       | 3.5x           |
| Log_pvm        | 1,966,731,818 | +50.2%  | 1,509,996,466    | +77.1%            | 76.8%     | 216,599     | 226,388         | 61,698       | 3.7x           |


### Log - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Log_evm        | 951,371,647   | -       | 147,287,251      | -                 | 15.5%     | 27,480      | 37,269          | 6,606        | 5.6x           |
| log_rust       | 1,136,433,871 | +19.5%  | 166,012,486      | +12.7%            | 14.6%     | 17,191      | 26,980          | 7,029        | 3.8x           |
| Log_pvm        | 1,739,324,273 | +82.8%  | 164,922,602      | +12.0%            | 9.5%      | 27,448      | 37,237          | 5,929        | 6.3x           |


### Log - removeWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| log_rust       | 1,285,960,080 | -       | 828,805,656      | -                 | 64.5%     | 55,743      | 65,532          | 21,313       | 3.1x           |
| Log_evm        | 1,689,935,927 | +31.4%  | 1,232,768,407    | +48.7%            | 72.9%     | 189,470     | 199,259         | 13,988       | 14.2x          |
| Log_pvm        | 2,070,293,263 | +61.0%  | 1,613,125,743    | +94.6%            | 77.9%     | 237,630     | 247,419         | 62,100       | 4.0x           |


### Log - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| log_rust       | 1,229,629,480 | -       | 772,475,056      | -                 | 62.8%     | 45,529      | 55,318          | 21,260       | 2.6x           |
| Log_evm        | 1,957,770,911 | +59.2%  | 1,500,603,391    | +94.3%            | 76.6%     | 230,562     | 240,351         | 14,021       | 17.1x          |
| Log_pvm        | 2,322,201,321 | +88.9%  | 1,865,033,801    | +141.4%           | 80.3%     | 278,367     | 288,156         | 62,133       | 4.6x           |


### Marketplace - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Marketplace_pvm | 5,287,595,542 | -       | 201,674,587      | -                 | 3.8%      | 27,448      | 37,237          | 6,159        | 6.0x           |


### MarketplaceProxy - createItem_digital

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 6,955,434,277 | -       | 6,494,049,845    | -                 | 93.4%     | 1,021,778   | 1,031,567       | 283,180      | 3.6x           |
| MarketplaceProxy_pvm | 7,090,411,521 | +1.9%   | 6,629,027,089    | +2.1%             | 93.5%     | 1,051,626   | 1,061,415       | 294,565      | 3.6x           |


### MarketplaceProxy - createItem_physical

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 6,792,217,220 | -       | 6,330,832,788    | -                 | 93.2%     | 1,021,842   | 1,031,631       | 283,554      | 3.6x           |
| MarketplaceProxy_pvm | 6,927,194,464 | +2.0%   | 6,465,810,032    | +2.1%             | 93.3%     | 1,051,690   | 1,061,479       | 294,939      | 3.6x           |


### MarketplaceProxy - deactivateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 1,327,234,184 | -       | 870,498,832      | -                 | 65.6%     | 327,072     | 336,861         | 282,386      | 1.2x           |
| MarketplaceProxy_pvm | 1,393,867,178 | +5.0%   | 937,131,826      | +7.7%             | 67.2%     | 341,996     | 351,785         | 293,840      | 1.2x           |


### MarketplaceProxy - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 4,071,362,144 | -       | 3,321,606,659    | -                 | 81.6%     | 576,148     | 585,937         | 284,389      | 2.1x           |
| MarketplaceProxy_pvm | 4,355,843,329 | +7.0%   | 3,461,101,060    | +4.2%             | 79.5%     | 582,642     | 592,431         | 292,702      | 2.0x           |


### MarketplaceProxy - markAsShipped

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 2,857,812,122 | -       | 2,399,806,458    | -                 | 84.0%     | 501,891     | 511,680         | 285,322      | 1.8x           |
| MarketplaceProxy_pvm | 2,924,571,028 | +2.3%   | 2,466,565,364    | +2.8%             | 84.3%     | 516,815     | 526,604         | 296,743      | 1.8x           |


### MarketplaceProxy - purchaseItem_digital

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 7,682,438,690 | -       | 7,223,503,210    | -                 | 94.0%     | 930,777     | 940,566         | 286,606      | 3.3x           |
| MarketplaceProxy_pvm | 7,749,995,900 | +0.9%   | 7,291,060,420    | +0.9%             | 94.1%     | 945,701     | 955,490         | 298,027      | 3.2x           |


### MarketplaceProxy - purchaseItem_physical

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 7,707,165,636 | -       | 7,246,540,772    | -                 | 94.0%     | 956,572     | 966,361         | 286,350      | 3.4x           |
| MarketplaceProxy_pvm | 7,774,711,582 | +0.9%   | 7,314,086,718    | +0.9%             | 94.1%     | 971,496     | 981,285         | 297,771      | 3.3x           |


### MarketplaceProxy - purchaseItem_with_matchmaker

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 8,896,870,877 | -       | 8,437,935,397    | -                 | 94.8%     | 1,022,895   | 1,032,684       | 288,945      | 3.6x           |
| MarketplaceProxy_pvm | 8,964,428,087 | +0.8%   | 8,505,492,607    | +0.8%             | 94.9%     | 1,037,819   | 1,047,608       | 300,366      | 3.5x           |


### MarketplaceProxy - registerMatchMaker

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 2,730,601,666 | -       | 2,272,596,002    | -                 | 83.2%     | 450,447     | 460,236         | 283,525      | 1.6x           |
| MarketplaceProxy_pvm | 2,798,164,508 | +2.5%   | 2,340,158,844    | +3.0%             | 83.6%     | 465,371     | 475,160         | 294,979      | 1.6x           |


### MarketplaceProxy - registerShop

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 2,694,561,189 | -       | 2,233,595,829    | -                 | 82.9%     | 450,932     | 460,721         | 282,018      | 1.6x           |
| MarketplaceProxy_pvm | 2,761,300,383 | +2.5%   | 2,300,335,023    | +3.0%             | 83.3%     | 465,856     | 475,645         | 293,370      | 1.6x           |


### MarketplaceProxy - updateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 4,132,797,750 | -       | 3,671,832,390    | -                 | 88.8%     | 554,175     | 563,964         | 283,475      | 2.0x           |
| MarketplaceProxy_pvm | 4,199,536,944 | +1.6%   | 3,738,571,584    | +1.8%             | 89.0%     | 569,099     | 578,888         | 294,896      | 2.0x           |


### MarketplaceProxy - updateMatchMakerFee

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 1,521,871,941 | -       | 1,065,162,781    | -                 | 70.0%     | 347,547     | 357,336         | 279,958      | 1.3x           |
| MarketplaceProxy_pvm | 1,588,504,935 | +4.4%   | 1,131,795,775    | +6.3%             | 71.2%     | 362,471     | 372,260         | 291,625      | 1.3x           |


### MockMobRule - addCounterEvidence

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MockMobRule_evm | 779,358,060   | -       | 321,365,492      | -                 | 41.2%     | 55,157      | 64,946          | 13,740       | 4.7x           |
| MockMobRule_pvm | 1,073,533,307 | +37.7%  | 615,527,643      | +91.5%            | 57.3%     | 96,667      | 106,456         | 55,317       | 1.9x           |


### MockMobRule - createDispute

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MockMobRule_evm | 1,998,793,913 | -       | 1,539,517,937    | -                 | 77.0%     | 209,498     | 219,287         | 13,303       | 16.5x          |
| MockMobRule_pvm | 2,658,486,357 | +33.0%  | 2,199,210,381    | +42.9%            | 82.7%     | 251,103     | 260,892         | 54,944       | 4.7x           |


### MockMobRule - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MockMobRule_evm | 1,043,817,550 | -       | 245,225,641      | -                 | 23.5%     | 37,737      | 47,526          | 7,275        | 6.5x           |
| MockMobRule_pvm | 1,830,532,548 | +75.4%  | 369,006,174      | +50.5%            | 20.2%     | 37,705      | 47,494          | 7,237        | 6.6x           |


### MockMobRule - resolveCase

| Implementation  | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MockMobRule_evm | 802,657,194 | -       | 345,502,770      | -                 | 43.0%     | 65,254      | 75,043          | 13,942       | 5.4x           |
| MockMobRule_pvm | 939,482,479 | +17.0%  | 482,314,959      | +39.6%            | 51.3%     | 106,764     | 116,553         | 55,613       | 2.1x           |


### NonFungibleCredential - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| NonFungibleCredential_evm    | 957,683,230   | -       | 147,365,425      | -                 | 15.4%     | 27,480      | 37,269          | 7,319        | 5.1x           |
| non_fungible_credential_rust | 1,177,136,665 | +22.9%  | 166,415,566      | +12.9%            | 14.1%     | 17,191      | 26,980          | 7,241        | 3.7x           |
| NonFungibleCredential_pvm    | 1,923,912,840 | +100.9% | 164,586,702      | +11.7%            | 8.6%      | 27,448      | 37,237          | 6,923        | 5.4x           |


### NonFungibleCredential - issue_nontransferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| NonFungibleCredential_evm    | 3,000,267,437 | -       | 2,540,991,461    | -                 | 84.7%     | 344,387     | 354,176         | 15,578       | 22.7x          |
| non_fungible_credential_rust | 3,077,731,819 | +2.6%   | 2,618,455,843    | +3.0%             | 85.1%     | 151,045     | 160,834         | 27,175       | 5.9x           |
| NonFungibleCredential_pvm    | 4,220,506,783 | +40.7%  | 3,761,230,807    | +48.0%            | 89.1%     | 444,541     | 454,330         | 73,908       | 6.1x           |


### NonFungibleCredential - issue_transferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| NonFungibleCredential_evm    | 3,000,215,872 | -       | 2,540,939,896    | -                 | 84.7%     | 344,259     | 354,048         | 14,621       | 24.2x          |
| non_fungible_credential_rust | 3,064,402,478 | +2.1%   | 2,605,126,502    | +2.5%             | 85.0%     | 151,013     | 160,802         | 26,711       | 6.0x           |
| NonFungibleCredential_pvm    | 4,219,832,706 | +40.7%  | 3,760,556,730    | +48.0%            | 89.1%     | 444,252     | 454,041         | 72,951       | 6.2x           |


### NonFungibleCredential - issue_with_expiry

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| NonFungibleCredential_evm    | 3,000,316,736 | -       | 2,541,040,760    | -                 | 84.7%     | 344,451     | 354,240         | 15,951       | 22.2x          |
| non_fungible_credential_rust | 3,091,593,102 | +3.0%   | 2,632,317,126    | +3.6%             | 85.1%     | 151,061     | 160,850         | 27,451       | 5.9x           |
| NonFungibleCredential_pvm    | 4,215,254,978 | +40.5%  | 3,755,979,002    | +47.8%            | 89.1%     | 444,442     | 454,231         | 74,281       | 6.1x           |


### NonFungibleCredential - revoke

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| NonFungibleCredential_evm    | 690,217,405   | -       | 233,495,149      | -                 | 33.8%     | 45,709      | 55,498          | 11,842       | 4.7x           |
| NonFungibleCredential_pvm    | 843,830,167   | +22.3%  | 387,094,815      | +65.8%            | 45.9%     | 104,675     | 114,464         | 70,502       | 1.6x           |
| non_fungible_credential_rust | 1,228,172,549 | +77.9%  | 771,450,293      | +230.4%           | 62.8%     | 48,088      | 57,877          | 23,901       | 2.4x           |


### NonFungibleCredential - transfer

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| non_fungible_credential_rust | 2,342,891,791 | -       | 1,885,750,463    | -                 | 80.5%     | 109,726     | 119,515         | 27,415       | 4.4x           |
| NonFungibleCredential_evm    | 4,216,737,717 | +80.0%  | 3,759,596,389    | +99.4%            | 89.2%     | 508,554     | 518,343         | 16,390       | 31.6x          |
| NonFungibleCredential_pvm    | 5,490,404,564 | +134.3% | 5,033,263,236    | +166.9%           | 91.7%     | 567,971     | 577,760         | 74,720       | 7.7x           |


### NonFungibleCredential - updateMetadata

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| NonFungibleCredential_evm    | 642,224,056   | -       | 185,069,632      | -                 | 28.8%     | 35,519      | 45,308          | 11,913       | 3.8x           |
| NonFungibleCredential_pvm    | 809,192,693   | +26.0%  | 352,025,173      | +90.2%            | 43.5%     | 94,485      | 104,274         | 70,573       | 1.5x           |
| non_fungible_credential_rust | 1,273,301,639 | +98.3%  | 816,147,215      | +341.0%           | 64.1%     | 48,187      | 57,976          | 23,901       | 2.4x           |


### SimpleToken - deploy

| Implementation                          | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------------------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| SimpleToken_evm                         | 712,898,900 | -       | 1,300,898        | +1836.4%          | 0.2%      | 6,934       | 16,723          | 5,824        | 2.9x           |
| simple_token_u32_no_alloc_rust          | 738,338,374 | +3.6%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,765        | 2.9x           |
| simple_token_u128_no_alloc_rust         | 750,080,377 | +5.2%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,839        | 2.9x           |
| simple_token_u256_no_alloc_rust         | 750,998,476 | +5.3%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,783        | 2.9x           |
| simple_token_u256_macro_no_alloc_rust   | 763,368,652 | +7.1%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,275        | 3.2x           |
| simple_token_u256_macro_bump_alloc_rust | 774,079,807 | +8.6%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 4,623        | 3.6x           |
| SimpleToken_pvm                         | 801,401,374 | +12.4%  | 12,457,558       | +18443.6%         | 1.6%      | 6,934       | 16,723          | 6,263        | 2.7x           |
| simple_token_u256_stylus                | 913,312,034 | +28.1%  | 16,918,421       | +25083.7%         | 1.9%      | 6,934       | 16,723          | 5,755        | 2.9x           |
| simple_token_u256_ink                   | 966,857,228 | +35.6%  | 127,627,358      | +189878.2%        | 13.2%     | 17,191      | 26,980          | 5,931        | 4.5x           |


### SimpleToken - mint

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| SimpleToken_evm                         | 776,533,806   | -       | 319,392,478      | -                 | 41.1%     | 49,919      | 59,708          | 7,737        | 7.7x           |
| SimpleToken_pvm                         | 862,557,581   | +11.1%  | 405,416,253      | +26.9%            | 47.0%     | 54,683      | 64,472          | 12,969       | 5.0x           |
| simple_token_u32_no_alloc_rust          | 881,750,735   | +13.5%  | 424,609,407      | +32.9%            | 48.2%     | 51,537      | 61,326          | 9,495        | 6.5x           |
| simple_token_u128_no_alloc_rust         | 882,830,580   | +13.7%  | 425,689,252      | +33.3%            | 48.2%     | 52,266      | 62,055          | 10,390       | 6.0x           |
| simple_token_u256_no_alloc_rust         | 938,091,805   | +20.8%  | 480,950,477      | +50.6%            | 51.3%     | 52,323      | 62,112          | 10,172       | 6.1x           |
| simple_token_u256_macro_no_alloc_rust   | 939,697,209   | +21.0%  | 482,555,881      | +51.1%            | 51.4%     | 53,091      | 62,880          | 10,473       | 6.0x           |
| simple_token_u256_macro_bump_alloc_rust | 940,594,914   | +21.1%  | 483,453,586      | +51.4%            | 51.4%     | 53,756      | 63,545          | 11,446       | 5.6x           |
| simple_token_u256_stylus                | 1,114,949,168 | +43.6%  | 657,807,840      | +106.0%           | 59.0%     | 61,354      | 71,143          | 19,203       | 3.7x           |
| simple_token_u256_ink                   | 1,178,705,143 | +51.8%  | 721,563,815      | +125.9%           | 61.2%     | 57,869      | 67,658          | 15,687       | 4.3x           |


### SimpleToken - transfer

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| SimpleToken_evm                         | 802,555,017   | -       | 345,413,689      | -                 | 43.0%     | 49,951      | 59,740          | 4,656        | 12.8x          |
| SimpleToken_pvm                         | 922,805,390   | +15.0%  | 465,664,062      | +34.8%            | 50.5%     | 54,844      | 64,633          | 9,451        | 6.8x           |
| simple_token_u128_no_alloc_rust         | 945,880,007   | +17.9%  | 488,738,679      | +41.5%            | 51.7%     | 52,298      | 62,087          | 10,630       | 5.8x           |
| simple_token_u32_no_alloc_rust          | 950,755,758   | +18.5%  | 493,614,430      | +42.9%            | 51.9%     | 51,545      | 61,334          | 9,722        | 6.3x           |
| simple_token_u256_no_alloc_rust         | 1,010,980,744 | +26.0%  | 553,839,416      | +60.3%            | 54.8%     | 52,387      | 62,176          | 10,428       | 6.0x           |
| simple_token_u256_macro_no_alloc_rust   | 1,011,981,528 | +26.1%  | 554,840,200      | +60.6%            | 54.8%     | 53,155      | 62,944          | 10,729       | 5.9x           |
| simple_token_u256_macro_bump_alloc_rust | 1,012,879,233 | +26.2%  | 555,737,905      | +60.9%            | 54.9%     | 53,820      | 63,609          | 11,673       | 5.4x           |
| simple_token_u256_stylus                | 1,261,091,895 | +57.1%  | 803,950,567      | +132.8%           | 63.8%     | 61,515      | 71,304          | 16,122       | 4.4x           |
| simple_token_u256_ink                   | 1,440,850,972 | +79.5%  | 983,709,644      | +184.8%           | 68.3%     | 78,447      | 88,236          | 15,835       | 5.6x           |


### Store - delegate

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 1,456,120,979 | -       | 998,115,315      | -                 | 68.5%     | 139,613     | 149,402         | 14,626       | 10.2x          |
| store_rust     | 1,918,895,014 | +31.8%  | 1,460,889,350    | +46.4%            | 76.1%     | 91,406      | 101,195         | 38,937       | 2.6x           |
| Store_pvm      | 2,004,496,913 | +37.7%  | 1,546,504,345    | +54.9%            | 77.2%     | 206,474     | 216,263         | 81,786       | 2.6x           |


### Store - deleteFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 1,787,885,960 | -       | 1,329,906,488    | -                 | 74.4%     | 180,891     | 190,680         | 15,539       | 12.3x          |
| store_rust     | 2,556,778,875 | +43.0%  | 2,098,799,403    | +57.8%            | 82.1%     | 143,317     | 153,106         | 40,369       | 3.8x           |
| Store_pvm      | 3,211,708,108 | +79.6%  | 2,753,728,636    | +107.1%           | 85.7%     | 248,432     | 258,221         | 82,670       | 3.1x           |


### Store - delete_

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 1,431,137,354 | -       | 973,563,858      | -                 | 68.0%     | 129,353     | 139,142         | 15,173       | 9.2x           |
| Store_pvm      | 1,891,219,738 | +32.1%  | 1,433,646,242    | +47.3%            | 75.8%     | 196,894     | 206,683         | 82,304       | 2.5x           |
| store_rust     | 2,107,121,265 | +47.2%  | 1,649,534,673    | +69.4%            | 78.3%     | 122,587     | 132,376         | 39,733       | 3.3x           |


### Store - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 831,628,420   | -       | 2,771,458        | +88.2%            | 0.3%      | 6,934       | 16,723          | 5,512        | 3.0x           |
| store_rust     | 1,213,514,851 | +45.9%  | 1,472,359        | -                 | 0.1%      | 6,934       | 16,723          | 6,190        | 2.7x           |
| Store_pvm      | 1,921,033,910 | +131.0% | 12,524,738       | +750.7%           | 0.7%      | 6,934       | 16,723          | 5,150        | 3.2x           |


### Store - revokeDelegation

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 1,813,964,541 | -       | 1,355,958,877    | -                 | 74.8%     | 191,218     | 201,007         | 15,275       | 13.2x          |
| store_rust     | 1,959,452,657 | +8.0%   | 1,501,446,993    | +10.7%            | 76.6%     | 91,876      | 101,665         | 39,673       | 2.6x           |
| Store_pvm      | 2,432,652,270 | +34.1%  | 1,974,659,702    | +45.6%            | 81.2%     | 258,756     | 268,545         | 82,406       | 3.3x           |


### Store - set

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 1,533,391,298 | -       | 1,075,398,730    | -                 | 70.1%     | 149,899     | 159,688         | 14,626       | 10.9x          |
| Store_pvm      | 1,928,488,929 | +25.8%  | 1,470,496,361    | +36.7%            | 76.3%     | 216,924     | 226,713         | 81,786       | 2.8x           |
| store_rust     | 2,142,936,511 | +39.8%  | 1,684,930,847    | +56.7%            | 78.6%     | 111,920     | 121,709         | 38,700       | 3.1x           |


### Store - setFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 1,894,867,484 | -       | 1,436,455,844    | -                 | 75.8%     | 201,440     | 211,229         | 15,135       | 14.0x          |
| store_rust     | 2,605,924,473 | +37.5%  | 2,147,512,833    | +49.5%            | 82.4%     | 132,669     | 142,458         | 39,582       | 3.6x           |
| Store_pvm      | 3,245,371,535 | +71.3%  | 2,786,959,895    | +94.0%            | 85.9%     | 268,465     | 278,254         | 82,266       | 3.4x           |


### Store - set_update

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 975,922,418   | -       | 517,942,946      | -                 | 53.1%     | 78,033      | 87,822          | 12,039       | 7.3x           |
| store_rust     | 1,236,944,732 | +26.7%  | 778,952,164      | +50.4%            | 63.0%     | 60,816      | 70,605          | 35,798       | 2.0x           |
| Store_pvm      | 1,244,556,591 | +27.5%  | 786,564,023      | +51.9%            | 63.2%     | 145,092     | 154,881         | 79,510       | 1.9x           |


### TetherToken - approve

| Implementation  | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| TetherToken_evm | 734,300,816 | -       | 277,159,488      | -                 | 37.7%     | 43,745      | 53,534          | 12,164       | 4.4x           |
| TetherToken_pvm | 945,378,400 | +28.7%  | 488,223,976      | +76.2%            | 51.6%     | 93,767      | 103,556         | 62,568       | 1.7x           |


### TetherToken - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| TetherToken_evm | 1,903,078,450 | -       | 1,105,807,315    | -                 | 58.1%     | 150,692     | 160,481         | 6,555        | 24.5x          |
| TetherToken_pvm | 3,034,254,323 | +59.4%  | 1,450,419,821    | +31.2%            | 47.8%     | 150,951     | 160,740         | 6,941        | 23.2x          |


### TetherToken - transfer

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| TetherToken_evm | 1,121,510,392 | -       | 664,369,064      | -                 | 59.2%     | 105,479     | 115,268         | 12,407       | 9.3x           |
| TetherToken_pvm | 1,389,244,926 | +23.9%  | 932,090,502      | +40.3%            | 67.1%     | 155,405     | 165,194         | 62,811       | 2.6x           |


### TetherToken - transferFrom

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| TetherToken_evm | 1,315,571,434 | -       | 858,011,034      | -                 | 65.2%     | 126,185     | 135,974         | 9,418        | 14.4x          |
| TetherToken_pvm | 1,664,845,401 | +26.5%  | 1,207,285,001    | +40.7%            | 72.5%     | 176,140     | 185,929         | 59,521       | 3.1x           |


### W3S - buyTicket

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 3,662,501,001 | -       | 3,205,765,649    | -                 | 87.5%     | 410,815     | 420,604         | 25,867       | 16.3x          |
| W3S_pvm        | 4,770,255,427 | +30.2%  | 4,313,520,075    | +34.6%            | 90.4%     | 526,526     | 536,315         | 140,770      | 3.8x           |


### W3S - checkIn

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 1,972,328,564 | -       | 1,515,619,404    | -                 | 76.8%     | 201,403     | 211,192         | 26,301       | 8.0x           |
| W3S_pvm        | 2,612,254,630 | +32.4%  | 2,155,545,470    | +42.2%            | 82.5%     | 316,789     | 326,578         | 140,731      | 2.3x           |


### W3S - configurePaymentToken

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 1,252,894,768 | -       | 795,308,176      | -                 | 63.5%     | 122,516     | 132,305         | 19,383       | 6.8x           |
| W3S_pvm        | 1,668,519,144 | +33.2%  | 1,210,932,552    | +52.3%            | 72.6%     | 215,979     | 225,768         | 112,245      | 2.0x           |


### W3S - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 1,761,885,406 | -       | 857,873,182      | -                 | 48.7%     | 119,953     | 129,742         | 7,238        | 17.9x          |
| W3S_pvm        | 3,634,885,402 | +106.3% | 1,242,908,518    | +44.9%            | 34.2%     | 119,761     | 129,550         | 6,509        | 19.9x          |


### W3S - grantVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 781,557,409   | -       | 324,835,153      | -                 | 41.6%     | 60,648      | 70,437          | 19,413       | 3.6x           |
| W3S_pvm        | 1,120,890,080 | +43.4%  | 664,154,728      | +104.5%           | 59.3%     | 154,146     | 163,935         | 112,175      | 1.5x           |


### W3S - pauseSales

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 708,991,636 | -       | 252,688,452      | -                 | 35.6%     | 50,263      | 60,052          | 19,644       | 3.1x           |
| W3S_pvm        | 957,461,865 | +35.0%  | 501,145,585      | +98.3%            | 52.3%     | 143,793     | 153,582         | 112,368      | 1.4x           |


### W3S - redeemTicketStaff

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 2,758,671,362 | -       | 2,301,530,034    | -                 | 83.4%     | 311,370     | 321,159         | 19,957       | 16.1x          |
| W3S_pvm        | 3,631,085,993 | +31.6%  | 3,173,944,665    | +37.9%            | 87.4%     | 405,125     | 414,914         | 112,619      | 3.7x           |


### W3S - revokeVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 785,653,446   | -       | 328,931,190      | -                 | 41.9%     | 60,680      | 70,469          | 19,713       | 3.6x           |
| W3S_pvm        | 1,121,097,040 | +42.7%  | 664,361,688      | +102.0%           | 59.3%     | 154,339     | 164,128         | 112,539      | 1.5x           |


### W3S - setMerkleRoot

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 661,613,667 | -       | 204,459,243      | -                 | 30.9%     | 40,201      | 49,990          | 16,151       | 3.1x           |
| W3S_pvm        | 922,934,329 | +39.5%  | 465,766,809      | +127.8%           | 50.5%     | 133,763     | 143,552         | 109,477      | 1.3x           |


### W3S - unpauseSales

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 710,536,746 | -       | 254,233,562      | -                 | 35.8%     | 50,295      | 60,084          | 19,713       | 3.0x           |
| W3S_pvm        | 960,037,577 | +35.1%  | 503,721,297      | +98.1%            | 52.5%     | 143,954     | 153,743         | 112,470      | 1.4x           |


### WETH9 - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| WETH9_evm      | 1,172,876,247 | -       | 437,810,346      | -                 | 37.3%     | 68,572      | 78,361          | 6,874        | 11.4x          |
| WETH9_pvm      | 1,467,918,152 | +25.2%  | 487,655,390      | +11.4%            | 33.2%     | 68,476      | 78,265          | 5,624        | 13.9x          |


### WETH9 - deposit

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| WETH9_evm      | 634,130,188 | -       | 177,735,332      | -                 | 28.0%     | 30,354      | 40,143          | 9,446        | 4.2x           |
| WETH9_pvm      | 724,302,101 | +14.2%  | 267,907,245      | +50.7%            | 37.0%     | 45,876      | 55,665          | 24,334       | 2.3x           |


### WETH9 - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| WETH9_evm      | 862,146,293   | -       | 405,004,965      | -                 | 47.0%     | 61,392      | 71,181          | 9,585        | 7.4x           |
| WETH9_pvm      | 1,025,958,538 | +19.0%  | 568,817,210      | +40.4%            | 55.4%     | 76,914      | 86,703          | 24,473       | 3.5x           |


### WETH9 - withdraw

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| WETH9_evm      | 952,559,195   | -       | 495,850,035      | -                 | 52.1%     | 46,046      | 55,835          | 7,661        | 7.3x           |
| WETH9_pvm      | 1,069,921,164 | +12.3%  | 613,212,004      | +23.7%            | 57.3%     | 61,600      | 71,389          | 22,516       | 3.2x           |


### XENCrypto - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| XENCrypto_evm  | 1,259,403,726 | -       | 387,798,786      | -                 | 30.8%     | 58,283      | 68,072          | 6,791        | 10.0x          |
| XENCrypto_pvm  | 3,117,616,203 | +147.5% | 597,717,525      | +54.1%            | 19.2%     | 58,219      | 68,008          | 7,109        | 9.6x           |


### flipper - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| flipper_ink    | 852,218,926   | -       | 117,336,976      | -                 | 13.8%     | 17,191      | 26,980          | 6,118        | 4.4x           |
| flipper_evm    | 855,594,102   | +0.4%   | 147,845,673      | +26.0%            | 17.3%     | 27,480      | 37,269          | 5,190        | 7.2x           |
| flipper_pvm    | 929,757,804   | +9.1%   | 189,576,651      | +61.6%            | 20.4%     | 27,577      | 37,366          | 6,085        | 6.1x           |
| flipper_stylus | 1,223,084,550 | +43.5%  | 462,238,116      | +293.9%           | 37.8%     | 58,348      | 68,137          | 6,017        | 11.3x          |


### flipper - flip

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| flipper_evm    | 602,393,700 | -       | 146,103,612      | -                 | 24.3%     | 28,813      | 38,602          | 7,250        | 5.3x           |
| flipper_ink    | 624,150,380 | +3.6%   | 167,860,292      | +14.9%            | 26.9%     | 30,618      | 40,407          | 6,076        | 6.7x           |
| flipper_pvm    | 624,844,196 | +3.7%   | 168,554,108      | +15.4%            | 27.0%     | 30,945      | 40,734          | 9,768        | 4.2x           |
| flipper_stylus | 712,942,466 | +18.4%  | 256,652,378      | +75.7%            | 36.0%     | 42,485      | 52,274          | 11,021       | 4.7x           |


### incrementer - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| incrementer_ink    | 828,719,461   | -       | 100,811,842      | -                 | 12.2%     | 17,191      | 26,980          | 6,621        | 4.1x           |
| incrementer_evm    | 856,661,281   | +3.4%   | 147,849,790      | +46.7%            | 17.3%     | 27,480      | 37,269          | 6,424        | 5.8x           |
| incrementer_pvm    | 937,080,985   | +13.1%  | 189,442,291      | +87.9%            | 20.2%     | 27,577      | 37,366          | 4,918        | 7.6x           |
| incrementer_stylus | 1,237,301,195 | +49.3%  | 451,086,236      | +347.5%           | 36.5%     | 58,348      | 68,137          | 6,022        | 11.3x          |


### incrementer - inc

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| incrementer_evm    | 603,542,960 | -       | 146,833,800      | -                 | 24.3%     | 28,968      | 38,757          | 7,606        | 5.1x           |
| incrementer_ink    | 621,979,665 | +3.1%   | 165,270,505      | +12.6%            | 26.6%     | 30,287      | 40,076          | 5,793        | 6.9x           |
| incrementer_pvm    | 632,260,088 | +4.8%   | 175,550,928      | +19.6%            | 27.8%     | 31,504      | 41,293          | 9,675        | 4.3x           |
| incrementer_stylus | 719,865,101 | +19.3%  | 263,155,941      | +79.2%            | 36.6%     | 44,156      | 53,945          | 12,446       | 4.3x           |


