# Revive Contract Comparison

Generated on: 2026-03-12
resolc: Solidity frontend for the revive compiler version 1.0.0+commit.b080c1d.llvm-18.1.8

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


### BenchStorage - readWrite_100

| Implementation   | gas_used | vs Best | % metered |
| ---------------- | -------- | ------- | --------- |
| BenchStorage_evm | 85,276   | -       | 74.7%     |


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

| Implementation   | gas_used   | vs Best | % metered |
| ---------------- | ---------- | ------- | --------- |
| CoinTool_App_evm | 11,604,727 | -       | -2453.2%  |


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
| DotNS_evm      | 273,107  | -       | 92.0%     |


### DotNS - register_with_duration

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| DotNS_evm      | 275,104  | -       | 92.1%     |


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

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| BenchERC1155_evm     | 1,436,656,447 | -       | 528,333,191      | -                 | 36.8%     | 50,441 |
| BenchERC1155_pvm     | 1,579,132,299 | +9.9%   | 670,809,043      | +27.0%            | 42.5%     | 60,330 |
| bench_erc1155_stylus | 1,831,881,261 | +27.5%  | 923,558,005      | +74.8%            | 50.4%     | 70,462 |
| bench_erc1155_ink    | 1,948,013,922 | +35.6%  | 1,039,690,666    | +96.8%            | 53.4%     | 57,521 |


### BenchERC1155 - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| BenchERC1155_evm     | 1,530,467,862 | -       | 1,425,734        | -                 | 0.1%      | 6,934  |
| BenchERC1155_pvm     | 1,700,945,631 | +11.1%  | 12,524,738       | +778.5%           | 0.7%      | 6,934  |
| bench_erc1155_stylus | 1,868,983,682 | +22.1%  | 16,851,241       | +1081.9%          | 0.9%      | 6,934  |
| bench_erc1155_ink    | 2,001,842,115 | +30.8%  | 193,456,286      | +13468.9%         | 9.7%      | 17,191 |


### BenchERC20 - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| BenchERC20_evm     | 1,897,343,440 | -       | 369,074,448      | -                 | 19.5%     | 27,448 |
| BenchERC20_pvm     | 2,119,951,698 | +11.7%  | 451,510,259      | +22.3%            | 21.3%     | 27,448 |
| bench_erc20_ink    | 2,498,955,413 | +31.7%  | 758,837,824      | +105.6%           | 30.4%     | 27,448 |
| bench_erc20_stylus | 2,792,818,995 | +47.2%  | 951,404,483      | +157.8%           | 34.1%     | 58,219 |


### BenchERC20 - transfer

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| BenchERC20_evm     | 1,440,629,160 | -       | 531,873,736      | -                 | 36.9%     | 50,356 |
| BenchERC20_pvm     | 1,571,006,113 | +9.1%   | 662,250,689      | +24.5%            | 42.2%     | 59,219 |
| bench_erc20_stylus | 1,953,934,844 | +35.6%  | 1,045,179,420    | +96.5%            | 53.5%     | 69,958 |
| bench_erc20_ink    | 2,346,546,983 | +62.9%  | 1,437,791,559    | +170.3%           | 61.3%     | 84,247 |


### BenchERC721 - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| BenchERC721_evm     | 1,529,619,794 | -       | 1,415,230        | -                 | 0.1%      | 6,934  |
| BenchERC721_pvm     | 1,656,651,381 | +8.3%   | 12,524,738       | +785.0%           | 0.8%      | 6,934  |
| bench_erc721_stylus | 1,732,163,378 | +13.2%  | 17,455,861       | +1133.4%          | 1.0%      | 6,934  |
| bench_erc721_ink    | 1,899,883,377 | +24.2%  | 179,409,554      | +12577.1%         | 9.4%      | 17,191 |


### BenchERC721 - mint

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| BenchERC721_evm     | 1,568,604,117 | -       | 660,280,861      | -                 | 42.1%     | 70,967 |
| BenchERC721_pvm     | 1,679,379,791 | +7.1%   | 771,056,535      | +16.8%            | 45.9%     | 78,062 |
| bench_erc721_stylus | 2,029,199,151 | +29.4%  | 1,120,875,895    | +69.8%            | 55.2%     | 82,444 |
| bench_erc721_ink    | 2,123,302,061 | +35.4%  | 1,214,978,805    | +84.0%            | 57.2%     | 84,612 |


### BenchStorage - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| BenchStorage_evm     | 1,519,834,394 | -       | 1,294,030        | -                 | 0.1%      | 6,934  |
| BenchStorage_pvm     | 1,571,557,695 | +3.4%   | 12,121,658       | +836.7%           | 0.8%      | 6,934  |
| bench_storage_stylus | 1,686,792,462 | +11.0%  | 9,259,901        | +615.6%           | 0.5%      | 6,934  |
| bench_storage_ink    | 1,748,168,792 | +15.0%  | 179,342,374      | +13759.2%         | 10.3%     | 17,191 |


### BenchStorage - readWrite_100

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov       |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | --------- |
| bench_storage_ink    | 31,280,527,074 | -       | 30,371,771,650   | -                 | 97.1%     | 2,087,058 |
| BenchStorage_evm     | 32,873,991,149 | +5.1%   | 31,965,235,725   | +5.2%             | 97.2%     | 3,095,496 |
| BenchStorage_pvm     | 35,647,974,206 | +14.0%  | 34,739,218,782   | +14.4%            | 97.5%     | 3,098,061 |
| bench_storage_stylus | 51,893,106,229 | +65.9%  | 50,984,350,805   | +67.9%            | 98.2%     | 3,105,393 |


### BenchStorage - read_100

| Implementation       | ref_time       | vs Best  | metered_ref_time | vs Best (metered) | % metered | pov       |
| -------------------- | -------------- | -------- | ---------------- | ----------------- | --------- | --------- |
| BenchStorage_evm     | 1,008,861,046  | -        | 100,105,622      | -                 | 9.9%      | 8,796     |
| BenchStorage_pvm     | 2,541,951,427  | +152.0%  | 1,633,196,003    | +1531.5%          | 64.2%     | 11,361    |
| bench_storage_ink    | 11,182,998,333 | +1008.5% | 10,274,242,909   | +10163.4%         | 91.9%     | 1,049,501 |
| bench_storage_stylus | 16,072,453,810 | +1493.1% | 15,163,698,386   | +15047.7%         | 94.3%     | 1,047,593 |


### BenchStorage - write_100

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov       |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | --------- |
| bench_storage_ink    | 21,090,947,966 | -       | 20,182,192,542   | -                 | 95.7%     | 1,059,742 |
| BenchStorage_evm     | 26,012,460,738 | +23.3%  | 25,103,705,314   | +24.4%            | 96.5%     | 2,066,564 |
| BenchStorage_pvm     | 28,435,890,222 | +34.8%  | 27,527,134,798   | +36.4%            | 96.8%     | 2,069,097 |
| bench_storage_stylus | 36,356,011,825 | +72.4%  | 35,447,256,401   | +75.6%            | 97.5%     | 2,076,429 |


### CoinTool_App - deploy

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| CoinTool_App_evm | 1,802,555,076 | -       | 240,332,528      | -                 | 13.3%     | 27,480 |
| CoinTool_App_pvm | 2,361,524,524 | +31.0%  | 378,538,815      | +57.5%            | 16.0%     | 27,448 |


### CoinTool_App - t

| Implementation   | ref_time        | vs Best | metered_ref_time | vs Best (metered) | % metered | pov        |
| ---------------- | --------------- | ------- | ---------------- | ----------------- | --------- | ---------- |
| CoinTool_App_evm | 189,356,920,173 | -       | 188,443,934,741  | -                 | 99.5%     | 9,770,929  |
| CoinTool_App_pvm | 223,394,450,438 | +18.0%  | 222,481,465,006  | +18.1%            | 99.6%     | 17,147,683 |


### Computation - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Computation_evm    | 1,516,735,684 | -       | 1,255,650        | -                 | 0.1%      | 6,934  |
| computation_stylus | 1,560,004,067 | +2.9%   | 9,797,341        | +680.3%           | 0.6%      | 6,934  |
| Computation_pvm    | 1,564,387,733 | +3.1%   | 12,457,558       | +892.1%           | 0.8%      | 6,934  |
| computation_ink    | 1,710,299,937 | +12.8%  | 175,378,754      | +13867.2%         | 10.3%     | 17,191 |


### Computation - odd_product_10

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Computation_evm    | 924,268,867   | -       | 15,945,611       | -                 | 1.7%      | 8,507  |
| computation_stylus | 969,680,125   | +4.9%   | 61,356,869       | +284.8%           | 6.3%      | 10,689 |
| Computation_pvm    | 999,662,356   | +8.2%   | 91,339,100       | +472.8%           | 9.1%      | 10,796 |
| computation_ink    | 1,012,159,856 | +9.5%   | 103,836,600      | +551.2%           | 10.3%     | 19,997 |


### Computation - triangle_10

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Computation_evm    | 921,101,661   | -       | 12,778,405       | -                 | 1.4%      | 8,507  |
| computation_stylus | 967,664,725   | +5.1%   | 59,341,469       | +364.4%           | 6.1%      | 10,689 |
| Computation_pvm    | 990,928,956   | +7.6%   | 82,605,700       | +546.4%           | 8.3%      | 10,796 |
| computation_ink    | 1,009,674,196 | +9.6%   | 101,350,940      | +693.1%           | 10.0%     | 19,997 |


### DocumentAccessManagement - configurePublicAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 1,441,014,072 | -       | 531,826,480      | -                 | 36.9%     | 69,247  |
| DocumentAccessManagement_pvm | 1,760,774,143 | +22.2%  | 851,586,551      | +60.1%            | 48.4%     | 149,808 |


### DocumentAccessManagement - createDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 4,176,446,149 | -       | 3,264,298,861    | -                 | 78.2%     | 295,963 |
| DocumentAccessManagement_pvm | 5,239,462,521 | +25.5%  | 4,327,315,233    | +32.6%            | 82.6%     | 396,879 |


### DocumentAccessManagement - createDocument2

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 4,176,458,885 | -       | 3,264,311,597    | -                 | 78.2%     | 295,995 |
| DocumentAccessManagement_pvm | 5,239,524,985 | +25.5%  | 4,327,377,697    | +32.6%            | 82.6%     | 396,943 |


### DocumentAccessManagement - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov   |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----- |
| DocumentAccessManagement_evm | 1,665,620,545 | -       | 3,099,708        | -                 | 0.2%      | 6,934 |
| DocumentAccessManagement_pvm | 2,972,738,244 | +78.5%  | 12,524,738       | +304.1%           | 0.4%      | 6,934 |


### DocumentAccessManagement - grantAccessWithShare

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 3,938,354,023 | -       | 3,026,625,807    | -                 | 76.9%     | 285,674 |
| DocumentAccessManagement_pvm | 4,680,201,647 | +18.8%  | 3,768,473,431    | +24.5%            | 80.5%     | 366,204 |


### DocumentAccessManagement - registerKeys

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 1,563,012,802 | -       | 653,825,210      | -                 | 41.8%     | 58,894  |
| DocumentAccessManagement_pvm | 2,139,490,508 | +36.9%  | 1,230,302,916    | +88.2%            | 57.5%     | 160,098 |


### DocumentAccessManagement - revokeAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 4,888,574,673 | -       | 3,979,387,081    | -                 | 81.4%     | 419,073 |
| DocumentAccessManagement_pvm | 5,698,565,321 | +16.6%  | 4,789,377,729    | +20.4%            | 84.0%     | 500,280 |


### DocumentAccessManagement - transferOwnership

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 4,211,215,633 | -       | 3,302,028,041    | -                 | 78.4%     | 346,954 |
| DocumentAccessManagement_pvm | 4,977,427,140 | +18.2%  | 4,068,239,548    | +23.2%            | 81.7%     | 437,773 |


### DocumentAccessManagement - updateDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 1,895,501,146 | -       | 983,353,858      | -                 | 51.9%     | 100,824 |
| DocumentAccessManagement_pvm | 2,346,163,758 | +23.8%  | 1,434,016,470    | +45.8%            | 61.1%     | 181,417 |


### DotNS - createSubdomain

| Implementation | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 3,461,082,464  | -       | 2,549,773,320    | -                 | 73.7%     | 83,613  |
| DotNS_evm      | 4,697,410,485  | +35.7%  | 3,786,101,341    | +48.5%            | 80.6%     | 294,479 |
| DotNS_pvm      | 14,014,198,390 | +304.9% | 13,102,889,246   | +413.9%           | 93.5%     | 382,054 |


### DotNS - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov   |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----- |
| DotNS_evm      | 1,644,549,317 | -       | 2,838,724        | +76.7%            | 0.2%      | 6,934 |
| dotns_rust     | 1,883,005,579 | +14.5%  | 1,606,719        | -                 | 0.1%      | 6,934 |
| DotNS_pvm      | 2,734,451,286 | +66.3%  | 12,524,738       | +679.5%           | 0.5%      | 6,934 |


### DotNS - register

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 2,766,149,750 | -       | 1,856,543,086    | -                 | 67.1%     | 72,573  |
| DotNS_evm      | 4,191,375,547 | +51.5%  | 3,281,768,883    | +76.8%            | 78.3%     | 263,190 |
| DotNS_pvm      | 8,363,240,697 | +202.3% | 7,453,634,033    | +301.5%           | 89.1%     | 350,830 |


### DotNS - register_with_duration

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 2,764,281,099 | -       | 1,854,674,435    | -                 | 67.1%     | 72,613  |
| DotNS_evm      | 4,184,279,012 | +51.4%  | 3,274,672,348    | +76.6%            | 78.3%     | 263,222 |
| DotNS_pvm      | 8,209,356,013 | +197.0% | 7,299,749,349    | +293.6%           | 88.9%     | 350,732 |


### DotNS - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 2,057,428,764 | -       | 1,148,241,172    | -                 | 55.8%     | 52,669  |
| DotNS_evm      | 4,291,245,819 | +108.6% | 3,382,058,227    | +194.5%           | 78.8%     | 284,024 |
| DotNS_pvm      | 7,283,567,933 | +254.0% | 6,374,380,341    | +455.1%           | 87.5%     | 352,214 |


### DotNS - renew

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DotNS_evm      | 1,510,134,083 | -       | 600,527,419      | -                 | 39.8%     | 57,794  |
| dotns_rust     | 2,143,231,510 | +41.9%  | 1,233,624,846    | +105.4%           | 57.6%     | 52,765  |
| DotNS_pvm      | 3,956,687,227 | +162.0% | 3,047,080,563    | +407.4%           | 77.0%     | 124,885 |


### DotNS - setAddress

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DotNS_evm      | 1,582,250,822 | -       | 672,644,158      | -                 | 42.5%     | 68,083  |
| dotns_rust     | 2,223,424,195 | +40.5%  | 1,313,817,531    | +95.3%            | 59.1%     | 52,765  |
| DotNS_pvm      | 4,001,110,584 | +152.9% | 3,091,503,920    | +359.6%           | 77.3%     | 145,463 |


### DotNS - setMetadata

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DotNS_evm      | 1,505,155,170 | -       | 595,548,506      | -                 | 39.6%     | 57,762  |
| dotns_rust     | 2,162,841,014 | +43.7%  | 1,253,234,350    | +110.4%           | 57.9%     | 52,765  |
| DotNS_pvm      | 3,835,591,192 | +154.8% | 2,925,984,528    | +391.3%           | 76.3%     | 124,853 |


### DotNS - setSubdomainOwner

| Implementation | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 3,654,099,034  | -       | 2,743,222,058    | -                 | 75.1%     | 84,220  |
| DotNS_evm      | 4,381,611,068  | +19.9%  | 3,470,734,092    | +26.5%            | 79.2%     | 294,636 |
| DotNS_pvm      | 10,761,871,448 | +194.5% | 9,850,994,472    | +259.1%           | 91.5%     | 372,211 |


### DotNS - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 2,927,472,988 | -       | 2,017,866,324    | -                 | 68.9%     | 73,279  |
| DotNS_evm      | 4,059,964,795 | +38.7%  | 3,150,358,131    | +56.1%            | 77.6%     | 284,024 |
| DotNS_pvm      | 6,901,842,570 | +135.8% | 5,992,235,906    | +197.0%           | 86.8%     | 361,664 |


### Escrow - create_simple

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| escrow_rust    | 3,406,590,503 | -       | 2,496,892,167    | -                 | 73.3%     | 93,287  |
| Escrow_evm     | 4,408,869,726 | +29.4%  | 3,499,171,390    | +40.1%            | 79.4%     | 310,692 |
| Escrow_pvm     | 5,174,859,695 | +51.9%  | 4,265,161,359    | +70.8%            | 82.4%     | 361,141 |


### Escrow - create_with_arbiter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| escrow_rust    | 3,406,603,239 | -       | 2,496,904,903    | -                 | 73.3%     | 93,319  |
| Escrow_evm     | 4,408,932,894 | +29.4%  | 3,499,234,558    | +40.1%            | 79.4%     | 310,820 |
| Escrow_pvm     | 5,172,449,207 | +51.8%  | 4,262,750,871    | +70.7%            | 82.4%     | 361,268 |


### Escrow - create_with_expiry

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| escrow_rust    | 3,406,603,239 | -       | 2,496,904,903    | -                 | 73.3%     | 93,319  |
| Escrow_evm     | 4,408,945,630 | +29.4%  | 3,499,247,294    | +40.1%            | 79.4%     | 310,852 |
| Escrow_pvm     | 5,170,988,671 | +51.8%  | 4,261,290,335    | +70.7%            | 82.4%     | 361,267 |


### Escrow - create_with_releaseTime

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| escrow_rust    | 3,406,603,239 | -       | 2,496,904,903    | -                 | 73.3%     | 93,319  |
| Escrow_evm     | 4,408,970,590 | +29.4%  | 3,499,272,254    | +40.1%            | 79.4%     | 310,884 |
| Escrow_pvm     | 5,169,196,951 | +51.7%  | 4,259,498,615    | +70.6%            | 82.4%     | 361,202 |


### Escrow - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| escrow_rust    | 1,967,400,741 | -       | 248,585,939      | -                 | 12.6%     | 17,191 |
| Escrow_evm     | 1,987,160,734 | +1.0%   | 408,943,935      | +64.5%            | 20.6%     | 37,737 |
| Escrow_pvm     | 2,485,693,665 | +26.3%  | 430,806,308      | +73.3%            | 17.3%     | 37,705 |


### Escrow - refund

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Escrow_evm     | 2,723,771,047 | -       | 1,815,434,695    | -                 | 66.7%     | 161,696 |
| escrow_rust    | 2,864,154,358 | +5.2%   | 1,955,818,006    | +7.7%             | 68.3%     | 77,981  |
| Escrow_pvm     | 2,879,143,793 | +5.7%   | 1,970,807,441    | +8.6%             | 68.5%     | 191,274 |


### Escrow - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Escrow_evm     | 2,721,883,205 | -       | 1,813,546,853    | -                 | 66.6%     | 161,696 |
| escrow_rust    | 2,857,300,046 | +5.0%   | 1,948,963,694    | +7.5%             | 68.2%     | 77,979  |
| Escrow_pvm     | 2,881,562,273 | +5.9%   | 1,973,225,921    | +8.8%             | 68.5%     | 191,274 |


### FiatTokenProxy - approve

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 1,472,023,835 | -       | 563,268,411      | -                 | 38.3%     | 70,861  |
| FiatTokenProxy_pvm | 1,784,995,544 | +21.3%  | 876,240,120      | +55.6%            | 49.1%     | 167,512 |


### FiatTokenProxy - changeAdmin

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| FiatTokenProxy_evm | 1,244,095,653 | -       | 335,772,397      | -                 | 27.0%     | 40,410 |
| FiatTokenProxy_pvm | 1,316,155,547 | +5.8%   | 407,832,291      | +21.5%            | 31.0%     | 48,934 |


### FiatTokenProxy - configureMinter

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 1,779,627,252 | -       | 870,871,828      | -                 | 48.9%     | 101,696 |
| FiatTokenProxy_pvm | 2,097,057,794 | +17.8%  | 1,188,302,370    | +36.4%            | 56.7%     | 198,315 |


### FiatTokenProxy - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| FiatTokenProxy_evm | 1,943,797,882 | -       | 406,670,040      | -                 | 20.9%     | 31,458 |
| FiatTokenProxy_pvm | 2,118,265,189 | +9.0%   | 449,195,577      | +10.5%            | 21.2%     | 31,458 |


### FiatTokenProxy - initialize

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 3,431,983,715 | -       | 2,518,173,235    | -                 | 73.4%     | 246,708 |
| FiatTokenProxy_pvm | 4,011,277,888 | +16.9%  | 3,097,467,408    | +23.0%            | 77.2%     | 343,071 |


### FiatTokenProxy - mint

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 2,384,649,315 | -       | 1,475,893,891    | -                 | 61.9%     | 163,430 |
| FiatTokenProxy_pvm | 2,900,749,893 | +21.6%  | 1,991,994,469    | +35.0%            | 68.7%     | 260,018 |


### FiatTokenProxy - transfer

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 2,217,557,741 | -       | 1,308,802,317    | -                 | 59.0%     | 153,173 |
| FiatTokenProxy_pvm | 2,695,469,844 | +21.6%  | 1,786,714,420    | +36.5%            | 66.3%     | 249,728 |


### FiatTokenProxy - transferFrom

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 2,678,082,793 | -       | 1,768,921,393    | -                 | 66.1%     | 194,454 |
| FiatTokenProxy_pvm | 3,324,722,166 | +24.1%  | 2,415,560,766    | +36.6%            | 72.7%     | 291,105 |


### FiatTokenV2_2 - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| FiatTokenV2_2_evm | 2,408,252,618 | -       | 648,977,032      | -                 | 26.9%     | 58,283 |
| FiatTokenV2_2_pvm | 3,859,408,363 | +60.3%  | 681,621,501      | +5.0%             | 17.7%     | 58,477 |


### Fibonacci - deploy

| Implementation                      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ----------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| fibonacci_u32_rust                  | 1,513,984,835 | -       | 67,180           | -                 | 0.0%      | 6,934  |
| Fibonacci_evm                       | 1,515,072,570 | +0.1%   | 1,235,450        | +1739.0%          | 0.1%      | 6,934  |
| fibonacci_u128_rust                 | 1,515,289,502 | +0.1%   | 67,180           | -                 | 0.0%      | 6,934  |
| fibonacci_u32_macro_bump_alloc_rust | 1,517,157,914 | +0.2%   | 67,180           | -                 | 0.0%      | 6,934  |
| fibonacci_u32_macro_no_alloc_rust   | 1,517,898,836 | +0.3%   | 67,180           | -                 | 0.0%      | 6,934  |
| fibonacci_u256_rust                 | 1,526,000,657 | +0.8%   | 67,180           | -                 | 0.0%      | 6,934  |
| Fibonacci_pvm                       | 1,540,422,459 | +1.7%   | 11,718,578       | +17343.6%         | 0.8%      | 6,934  |
| fibonacci_u32_stylus                | 1,543,622,438 | +2.0%   | 8,991,181        | +13283.7%         | 0.6%      | 6,934  |
| fibonacci_u32_ink                   | 1,699,068,259 | +12.2%  | 175,647,474      | +261358.0%        | 10.3%     | 17,191 |


### Fibonacci - fib_10

| Implementation                      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ----------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| fibonacci_u32_rust                  | 1,029,715,854 | -       | 121,405,694      | -                 | 11.8%     | 8,433  |
| fibonacci_u32_macro_bump_alloc_rust | 1,033,906,059 | +0.4%   | 125,595,899      | +3.5%             | 12.1%     | 8,630  |
| Fibonacci_evm                       | 1,040,555,142 | +1.1%   | 132,244,982      | +8.9%             | 12.7%     | 8,404  |
| fibonacci_u32_macro_no_alloc_rust   | 1,040,834,457 | +1.1%   | 132,524,297      | +9.2%             | 12.7%     | 8,676  |
| fibonacci_u32_stylus                | 1,041,776,961 | +1.2%   | 133,466,801      | +9.9%             | 12.8%     | 9,719  |
| fibonacci_u128_rust                 | 1,190,276,955 | +15.6%  | 281,966,795      | +132.3%           | 23.7%     | 8,514  |
| Fibonacci_pvm                       | 1,328,474,957 | +29.0%  | 420,164,797      | +246.1%           | 31.6%     | 9,351  |
| fibonacci_u32_ink                   | 1,361,223,403 | +32.2%  | 452,913,243      | +273.1%           | 33.3%     | 29,537 |
| fibonacci_u256_rust                 | 4,493,207,844 | +336.4% | 3,584,897,684    | +2852.8%          | 79.8%     | 9,179  |


### Fibonacci_u256 - deploy

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Fibonacci_u256_iter_evm                  | 1,514,289,738 | -       | 1,225,754        | +1724.6%          | 0.1%      | 6,934  |
| Fibonacci_u256_evm                       | 1,514,354,974 | +0.0%   | 1,226,562        | +1725.8%          | 0.1%      | 6,934  |
| fibonacci_u256_iter_primitive_types_rust | 1,523,922,854 | +0.6%   | 67,180           | -                 | 0.0%      | 6,934  |
| fibonacci_u256_iter_rust                 | 1,524,551,027 | +0.7%   | 67,180           | -                 | 0.0%      | 6,934  |
| fibonacci_u256_primitive_types_rust      | 1,524,712,097 | +0.7%   | 67,180           | -                 | 0.0%      | 6,934  |
| fibonacci_u256_rust                      | 1,526,000,657 | +0.8%   | 67,180           | -                 | 0.0%      | 6,934  |
| Fibonacci_u256_iter_pvm                  | 1,541,582,163 | +1.8%   | 11,718,578       | +17343.6%         | 0.8%      | 6,934  |
| Fibonacci_u256_pvm                       | 1,543,160,649 | +1.9%   | 11,718,578       | +17343.6%         | 0.8%      | 6,934  |
| fibonacci_u256_ink                       | 1,715,400,757 | +13.3%  | 175,647,474      | +261358.0%        | 10.2%     | 17,191 |
| fibonacci_u256_iter_ink                  | 1,715,513,506 | +13.3%  | 175,647,474      | +261358.0%        | 10.2%     | 17,191 |


### Fibonacci_u256 - fib_10

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Fibonacci_u256_iter_evm                  | 914,453,849   | -       | 6,130,593        | -                 | 0.7%      | 8,359  |
| Fibonacci_u256_iter_pvm                  | 957,101,669   | +4.7%   | 48,778,413       | +695.7%           | 5.1%      | 9,426  |
| fibonacci_u256_iter_primitive_types_rust | 973,984,943   | +6.5%   | 65,661,687       | +971.0%           | 6.7%      | 9,053  |
| Fibonacci_u256_evm                       | 1,018,244,489 | +11.4%  | 109,921,233      | +1693.0%          | 10.8%     | 8,363  |
| fibonacci_u256_iter_rust                 | 1,065,682,930 | +16.5%  | 157,359,674      | +2466.8%          | 14.8%     | 9,092  |
| fibonacci_u256_iter_ink                  | 1,261,079,332 | +37.9%  | 352,756,076      | +5654.0%          | 28.0%     | 30,561 |
| Fibonacci_u256_pvm                       | 1,629,937,003 | +78.2%  | 721,613,747      | +11670.7%         | 44.3%     | 9,524  |
| fibonacci_u256_primitive_types_rust      | 2,933,505,000 | +220.8% | 2,025,181,744    | +32934.0%         | 69.0%     | 9,102  |
| fibonacci_u256_ink                       | 3,178,586,501 | +247.6% | 2,270,263,245    | +36931.7%         | 71.4%     | 30,554 |
| fibonacci_u256_rust                      | 4,493,220,940 | +391.4% | 3,584,897,684    | +58375.5%         | 79.8%     | 9,182  |


### Fibonacci_u256 - fib_15

| Implementation                           | ref_time       | vs Best  | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------------------------- | -------------- | -------- | ---------------- | ----------------- | --------- | ------ |
| Fibonacci_u256_iter_evm                  | 916,859,063    | -        | 8,548,903        | -                 | 0.9%      | 8,356  |
| Fibonacci_u256_iter_pvm                  | 977,927,469    | +6.7%    | 69,604,213       | +714.2%           | 7.1%      | 9,426  |
| fibonacci_u256_iter_primitive_types_rust | 1,000,185,143  | +9.1%    | 91,861,887       | +974.5%           | 9.2%      | 9,053  |
| fibonacci_u256_iter_rust                 | 1,142,939,930  | +24.7%   | 234,616,674      | +2644.4%          | 20.5%     | 9,092  |
| fibonacci_u256_iter_ink                  | 1,307,769,432  | +42.6%   | 399,446,176      | +4572.5%          | 30.5%     | 30,561 |
| Fibonacci_u256_evm                       | 2,123,911,423  | +131.7%  | 1,215,588,167    | +14119.2%         | 57.2%     | 8,363  |
| Fibonacci_u256_pvm                       | 8,869,253,803  | +867.4%  | 7,960,930,547    | +93022.2%         | 89.8%     | 9,524  |
| fibonacci_u256_primitive_types_rust      | 23,336,608,440 | +2445.3% | 22,428,285,184   | +262252.8%        | 96.1%     | 9,102  |
| fibonacci_u256_ink                       | 23,521,362,301 | +2465.4% | 22,613,039,045   | +264413.9%        | 96.1%     | 30,554 |
| fibonacci_u256_rust                      | 40,745,497,160 | +4344.0% | 39,837,173,904   | +465891.6%        | 97.8%     | 9,182  |


### Fibonacci_u256 - fib_5

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Fibonacci_u256_iter_evm                  | 912,035,539   | -       | 3,712,283        | -                 | 0.4%      | 8,359  |
| Fibonacci_u256_evm                       | 918,524,306   | +0.7%   | 10,201,050       | +174.8%           | 1.1%      | 8,363  |
| Fibonacci_u256_iter_pvm                  | 936,275,869   | +2.7%   | 27,952,613       | +653.0%           | 3.0%      | 9,426  |
| fibonacci_u256_iter_primitive_types_rust | 947,784,743   | +3.9%   | 39,461,487       | +963.0%           | 4.2%      | 9,053  |
| Fibonacci_u256_pvm                       | 976,947,403   | +7.1%   | 68,624,147       | +1748.6%          | 7.0%      | 9,524  |
| fibonacci_u256_iter_rust                 | 988,425,930   | +8.4%   | 80,102,674       | +2057.8%          | 8.1%      | 9,092  |
| fibonacci_u256_primitive_types_rust      | 1,094,049,420 | +20.0%  | 185,726,164      | +4903.0%          | 17.0%     | 9,102  |
| fibonacci_u256_iter_ink                  | 1,214,389,232 | +33.2%  | 306,065,976      | +8144.7%          | 25.2%     | 30,561 |
| fibonacci_u256_rust                      | 1,223,368,800 | +34.1%  | 315,045,544      | +8386.6%          | 25.8%     | 9,182  |
| fibonacci_u256_ink                       | 1,344,559,405 | +47.4%  | 436,249,245      | +11651.5%         | 32.4%     | 30,551 |


### FungibleCredential - burn

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FungibleCredential_evm   | 1,776,113,377 | -       | 867,371,049      | -                 | 48.8%     | 97,801  |
| FungibleCredential_pvm   | 2,080,193,939 | +17.1%  | 1,171,451,611    | +35.1%            | 56.3%     | 156,350 |
| fungible_credential_rust | 2,267,804,897 | +27.7%  | 1,359,062,569    | +56.7%            | 59.9%     | 67,347  |


### FungibleCredential - createClass_nontransferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| fungible_credential_rust | 2,138,586,436 | -       | 1,228,128,532    | -                 | 57.4%     | 57,231  |
| FungibleCredential_evm   | 2,509,023,193 | +17.3%  | 1,598,565,289    | +30.2%            | 63.7%     | 139,190 |
| FungibleCredential_pvm   | 3,564,927,640 | +66.7%  | 2,654,469,736    | +116.1%           | 74.5%     | 249,186 |


### FungibleCredential - createClass_transferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| fungible_credential_rust | 2,125,416,575 | -       | 1,214,958,671    | -                 | 57.2%     | 57,231  |
| FungibleCredential_evm   | 2,509,011,373 | +18.0%  | 1,598,553,469    | +31.6%            | 63.7%     | 139,190 |
| FungibleCredential_pvm   | 3,564,990,332 | +67.7%  | 2,654,532,428    | +118.5%           | 74.5%     | 249,250 |


### FungibleCredential - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| FungibleCredential_evm   | 1,866,872,489 | -       | 240,189,727      | -                 | 12.9%     | 27,480 |
| fungible_credential_rust | 2,044,141,156 | +9.5%   | 248,044,968      | +3.3%             | 12.1%     | 17,191 |
| FungibleCredential_pvm   | 2,826,456,859 | +51.4%  | 257,434,062      | +7.2%             | 9.1%      | 27,448 |


### FungibleCredential - issue

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FungibleCredential_evm   | 3,510,993,100 | -       | 2,601,805,508    | -                 | 74.1%     | 251,982 |
| FungibleCredential_pvm   | 4,022,410,175 | +14.6%  | 3,113,222,583    | +19.7%            | 77.4%     | 310,147 |
| fungible_credential_rust | 4,034,749,383 | +14.9%  | 3,125,561,791    | +20.1%            | 77.5%     | 149,473 |


### FungibleCredential - issue_more

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FungibleCredential_evm   | 1,847,043,362 | -       | 937,855,770      | -                 | 50.8%     | 108,192 |
| FungibleCredential_pvm   | 2,150,790,107 | +16.4%  | 1,241,602,515    | +32.4%            | 57.7%     | 166,741 |
| fungible_credential_rust | 2,478,060,252 | +34.2%  | 1,568,872,660    | +67.3%            | 63.3%     | 77,707  |


### FungibleCredential - revoke

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FungibleCredential_evm   | 1,777,521,319 | -       | 868,333,727      | -                 | 48.9%     | 97,903  |
| FungibleCredential_pvm   | 2,080,211,001 | +17.0%  | 1,171,023,409    | +34.9%            | 56.3%     | 156,452 |
| fungible_credential_rust | 2,312,256,592 | +30.1%  | 1,403,069,000    | +61.6%            | 60.7%     | 67,449  |


### FungibleCredential - transfer

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FungibleCredential_evm   | 3,711,449,879 | -       | 2,802,288,479    | -                 | 75.5%     | 272,618 |
| fungible_credential_rust | 4,214,222,625 | +13.5%  | 3,305,061,225    | +17.9%            | 78.4%     | 159,654 |
| FungibleCredential_pvm   | 4,351,159,116 | +17.2%  | 3,441,997,716    | +22.8%            | 79.1%     | 330,879 |


### KeyRegistry - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov   |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----- |
| KeyRegistry_evm   | 1,581,433,487 | -       | 2,056,984        | +39.7%            | 0.1%      | 6,934 |
| key_registry_rust | 1,813,884,938 | +14.7%  | 1,472,359        | -                 | 0.1%      | 6,934 |
| KeyRegistry_pvm   | 2,148,800,766 | +35.9%  | 12,524,738       | +750.7%           | 0.6%      | 6,934 |


### KeyRegistry - fetchPrekeyBundle

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| KeyRegistry_evm   | 2,526,768,406 | -       | 1,618,458,246    | -                 | 64.1%     | 187,320 |
| KeyRegistry_pvm   | 3,379,383,233 | +33.7%  | 2,471,073,073    | +52.7%            | 73.1%     | 221,922 |
| key_registry_rust | 3,614,773,573 | +43.1%  | 2,706,463,413    | +67.2%            | 74.9%     | 150,346 |


### KeyRegistry - registerIdentity

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| key_registry_rust | 2,698,518,110 | -       | 1,787,641,134    | -                 | 66.2%     | 89,095  |
| KeyRegistry_evm   | 3,194,682,332 | +18.4%  | 2,283,805,356    | +27.8%            | 71.5%     | 187,684 |
| KeyRegistry_pvm   | 3,717,502,195 | +37.8%  | 2,806,625,219    | +57.0%            | 75.5%     | 222,093 |


### KeyRegistry - updateSignedPrekey

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| KeyRegistry_evm   | 2,119,980,112 | -       | 1,209,941,280    | -                 | 57.1%     | 105,468 |
| key_registry_rust | 2,222,837,932 | +4.9%   | 1,312,799,100    | +8.5%             | 59.1%     | 68,745  |
| KeyRegistry_pvm   | 2,599,386,806 | +22.6%  | 1,689,347,974    | +39.6%            | 65.0%     | 160,647 |


### KeyRegistry - uploadOneTimePrekeys

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| KeyRegistry_evm   | 2,853,673,363 | -       | 1,943,634,531    | -                 | 68.1%     | 197,941 |
| KeyRegistry_pvm   | 3,226,119,737 | +13.1%  | 2,316,080,905    | +19.2%            | 71.8%     | 232,350 |
| key_registry_rust | 3,631,481,314 | +27.3%  | 2,721,442,482    | +40.0%            | 74.9%     | 150,537 |


### Log - addWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Log_evm        | 1,935,844,662 | -       | 1,027,076,142    | -                 | 53.1%     | 107,062 |
| Log_pvm        | 2,208,954,160 | +14.1%  | 1,300,185,640    | +26.6%            | 58.9%     | 154,803 |
| log_rust       | 2,472,228,897 | +27.7%  | 1,563,460,377    | +52.2%            | 63.2%     | 86,515  |


### Log - append

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| log_rust       | 2,169,314,827 | -       | 1,260,546,307    | -                 | 58.1%     | 55,789  |
| Log_evm        | 2,473,227,067 | +14.0%  | 1,564,458,547    | +24.1%            | 63.3%     | 148,186 |
| Log_pvm        | 2,824,129,690 | +30.2%  | 1,915,361,170    | +51.9%            | 67.8%     | 195,959 |


### Log - append_2

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| log_rust       | 2,169,314,827 | -       | 1,260,546,307    | -                 | 58.1%     | 55,789  |
| Log_evm        | 2,473,227,067 | +14.0%  | 1,564,458,547    | +24.1%            | 63.3%     | 148,186 |
| Log_pvm        | 2,824,129,690 | +30.2%  | 1,915,361,170    | +51.9%            | 67.8%     | 195,959 |


### Log - create_nonpermissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Log_evm        | 2,236,444,435 | -       | 1,328,108,083    | -                 | 59.4%     | 127,509 |
| log_rust       | 2,545,472,231 | +13.8%  | 1,637,135,879    | +23.3%            | 64.3%     | 76,130  |
| Log_pvm        | 3,079,700,330 | +37.7%  | 2,171,363,978    | +63.5%            | 70.5%     | 216,471 |


### Log - create_permissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Log_evm        | 2,236,456,811 | -       | 1,328,133,555    | -                 | 59.4%     | 127,570 |
| log_rust       | 2,545,478,599 | +13.8%  | 1,637,142,247    | +23.3%            | 64.3%     | 76,146  |
| Log_pvm        | 3,079,287,818 | +37.7%  | 2,170,951,466    | +63.5%            | 70.5%     | 216,599 |


### Log - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Log_evm        | 1,851,574,647 | -       | 240,000,251      | -                 | 13.0%     | 27,480 |
| log_rust       | 2,024,672,871 | +9.3%   | 246,761,486      | +2.8%             | 12.2%     | 17,191 |
| Log_pvm        | 2,639,527,273 | +42.6%  | 257,635,602      | +7.3%             | 9.8%      | 27,448 |


### Log - removeWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| log_rust       | 1,842,251,176 | -       | 933,482,656      | -                 | 50.7%     | 55,746  |
| Log_evm        | 2,620,064,927 | +42.2%  | 1,711,296,407    | +83.3%            | 65.3%     | 189,470 |
| Log_pvm        | 3,000,422,263 | +62.9%  | 2,091,653,743    | +124.1%           | 69.7%     | 237,630 |


### Log - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| log_rust       | 1,773,956,576 | -       | 865,188,056      | -                 | 48.8%     | 45,532  |
| Log_evm        | 3,073,325,911 | +73.2%  | 2,164,557,391    | +150.2%           | 70.4%     | 230,562 |
| Log_pvm        | 3,437,743,225 | +93.8%  | 2,528,987,801    | +192.3%           | 73.6%     | 278,364 |


### Marketplace - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Marketplace_pvm | 6,187,798,542 | -       | 294,387,587      | -                 | 4.8%      | 27,448 |


### MarketplaceProxy - createItem_digital

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov       |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | --------- |
| MarketplaceProxy_evm | 9,165,615,277 | -       | 8,252,629,845    | -                 | 90.0%     | 1,021,778 |
| MarketplaceProxy_pvm | 9,324,520,521 | +1.7%   | 8,411,535,089    | +1.9%             | 90.2%     | 1,051,626 |


### MarketplaceProxy - createItem_physical

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov       |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | --------- |
| MarketplaceProxy_evm | 9,002,398,220 | -       | 8,089,412,788    | -                 | 89.9%     | 1,021,842 |
| MarketplaceProxy_pvm | 9,161,303,464 | +1.8%   | 8,248,318,032    | +2.0%             | 90.0%     | 1,051,690 |


### MarketplaceProxy - deactivateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 1,931,368,184 | -       | 1,023,031,832    | -                 | 53.0%     | 327,072 |
| MarketplaceProxy_pvm | 2,009,965,178 | +4.1%   | 1,101,628,826    | +7.7%             | 54.8%     | 341,996 |


### MarketplaceProxy - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 6,721,148,144 | -       | 5,163,902,659    | +0.2%             | 76.8%     | 576,148 |
| MarketplaceProxy_pvm | 6,856,095,329 | +2.0%   | 5,153,863,060    | -                 | 75.2%     | 582,642 |


### MarketplaceProxy - markAsShipped

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 3,871,689,122 | -       | 2,962,082,458    | -                 | 76.5%     | 501,891 |
| MarketplaceProxy_pvm | 3,950,412,028 | +2.0%   | 3,040,805,364    | +2.7%             | 77.0%     | 516,815 |


### MarketplaceProxy - purchaseItem_digital

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 11,447,779,690 | -       | 10,537,243,210   | -                 | 92.0%     | 930,777 |
| MarketplaceProxy_pvm | 11,527,300,900 | +0.7%   | 10,616,764,420   | +0.8%             | 92.1%     | 945,701 |


### MarketplaceProxy - purchaseItem_physical

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 11,517,363,636 | -       | 10,605,137,772   | -                 | 92.1%     | 956,572 |
| MarketplaceProxy_pvm | 11,596,873,582 | +0.7%   | 10,684,647,718   | +0.7%             | 92.1%     | 971,496 |


### MarketplaceProxy - purchaseItem_with_matchmaker

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov       |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | --------- |
| MarketplaceProxy_evm | 12,838,672,877 | -       | 11,928,136,397   | -                 | 92.9%     | 1,022,895 |
| MarketplaceProxy_pvm | 12,918,194,087 | +0.6%   | 12,007,657,607   | +0.7%             | 93.0%     | 1,037,819 |


### MarketplaceProxy - registerMatchMaker

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 4,028,583,666 | -       | 3,118,977,002    | -                 | 77.4%     | 450,447 |
| MarketplaceProxy_pvm | 4,108,110,508 | +2.0%   | 3,198,503,844    | +2.5%             | 77.9%     | 465,371 |


### MarketplaceProxy - registerShop

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 3,992,543,189 | -       | 3,079,976,829    | -                 | 77.1%     | 450,932 |
| MarketplaceProxy_pvm | 4,071,246,383 | +2.0%   | 3,158,680,023    | +2.6%             | 77.6%     | 465,856 |


### MarketplaceProxy - updateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 5,550,419,750 | -       | 4,637,853,390    | -                 | 83.6%     | 554,175 |
| MarketplaceProxy_pvm | 5,629,122,944 | +1.4%   | 4,716,556,584    | +1.7%             | 83.8%     | 569,099 |


### MarketplaceProxy - updateMatchMakerFee

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 2,149,933,941 | -       | 1,241,623,781    | -                 | 57.8%     | 347,547 |
| MarketplaceProxy_pvm | 2,228,530,935 | +3.7%   | 1,320,220,775    | +6.3%             | 59.2%     | 362,471 |


### MockMobRule - addCounterEvidence

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| MockMobRule_evm | 1,347,613,156 | -       | 438,006,492      | -                 | 32.5%     | 55,160 |
| MockMobRule_pvm | 1,641,775,307 | +21.8%  | 732,168,643      | +67.2%            | 44.6%     | 96,667 |


### MockMobRule - createDispute

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MockMobRule_evm | 3,434,345,913 | -       | 2,523,468,937    | -                 | 73.5%     | 209,498 |
| MockMobRule_pvm | 4,094,038,357 | +19.2%  | 3,183,161,381    | +26.1%            | 77.8%     | 251,103 |


### MockMobRule - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| MockMobRule_evm | 2,024,769,550 | -       | 418,687,641      | -                 | 20.7%     | 37,737 |
| MockMobRule_pvm | 2,880,269,548 | +42.3%  | 611,253,174      | +46.0%            | 21.2%     | 37,705 |


### MockMobRule - resolveCase

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MockMobRule_evm | 1,382,876,290 | -       | 474,107,770      | -                 | 34.3%     | 65,257  |
| MockMobRule_pvm | 1,519,688,479 | +9.9%   | 610,919,959      | +28.9%            | 40.2%     | 106,764 |


### NonFungibleCredential - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| NonFungibleCredential_evm    | 1,857,886,230 | -       | 240,078,425      | -                 | 12.9%     | 27,480 |
| non_fungible_credential_rust | 2,065,375,665 | +11.2%  | 247,164,566      | +3.0%             | 12.0%     | 17,191 |
| NonFungibleCredential_pvm    | 2,824,115,840 | +52.0%  | 257,299,702      | +7.2%             | 9.1%      | 27,448 |


### NonFungibleCredential - issue_nontransferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| non_fungible_credential_rust | 4,223,180,819 | -       | 3,312,303,843    | -                 | 78.4%     | 151,045 |
| NonFungibleCredential_evm    | 4,866,491,437 | +15.2%  | 3,955,614,461    | +19.4%            | 81.3%     | 344,387 |
| NonFungibleCredential_pvm    | 6,272,156,783 | +48.5%  | 5,361,279,807    | +61.9%            | 85.5%     | 444,541 |


### NonFungibleCredential - issue_transferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| non_fungible_credential_rust | 4,209,851,478 | -       | 3,298,974,502    | -                 | 78.4%     | 151,013 |
| NonFungibleCredential_evm    | 4,866,439,872 | +15.6%  | 3,955,562,896    | +19.9%            | 81.3%     | 344,259 |
| NonFungibleCredential_pvm    | 6,271,482,706 | +49.0%  | 5,360,605,730    | +62.5%            | 85.5%     | 444,252 |


### NonFungibleCredential - issue_with_expiry

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| non_fungible_credential_rust | 4,237,042,102 | -       | 3,326,165,126    | -                 | 78.5%     | 151,061 |
| NonFungibleCredential_evm    | 4,866,540,736 | +14.9%  | 3,955,663,760    | +18.9%            | 81.3%     | 344,451 |
| NonFungibleCredential_pvm    | 6,266,904,978 | +47.9%  | 5,356,028,002    | +61.0%            | 85.5%     | 444,442 |


### NonFungibleCredential - revoke

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| NonFungibleCredential_evm    | 1,246,508,501 | -       | 338,172,149      | -                 | 27.1%     | 45,712  |
| NonFungibleCredential_pvm    | 1,400,108,167 | +12.3%  | 491,771,815      | +45.4%            | 35.1%     | 104,675 |
| non_fungible_credential_rust | 1,772,499,645 | +42.2%  | 864,163,293      | +155.5%           | 48.8%     | 48,091  |


### NonFungibleCredential - transfer

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| non_fungible_credential_rust | 3,234,129,791 | -       | 2,325,387,463    | -                 | 71.9%     | 109,726 |
| NonFungibleCredential_evm    | 6,411,955,717 | +98.3%  | 5,503,213,389    | +136.7%           | 85.8%     | 508,554 |
| NonFungibleCredential_pvm    | 7,685,622,564 | +137.6% | 6,776,880,236    | +191.4%           | 88.2%     | 567,971 |


### NonFungibleCredential - updateMetadata

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| NonFungibleCredential_evm    | 1,186,551,152 | -       | 277,782,632      | -                 | 23.4%     | 35,522 |
| NonFungibleCredential_pvm    | 1,353,506,693 | +14.1%  | 444,738,173      | +60.1%            | 32.9%     | 94,485 |
| non_fungible_credential_rust | 1,817,628,735 | +53.2%  | 908,860,215      | +227.2%           | 50.0%     | 48,190 |


### SimpleToken - deploy

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| SimpleToken_evm                         | 1,520,388,900 | -       | 1,300,898        | +1836.4%          | 0.1%      | 6,934  |
| simple_token_u32_no_alloc_rust          | 1,545,828,374 | +1.7%   | 67,180           | -                 | 0.0%      | 6,934  |
| simple_token_u128_no_alloc_rust         | 1,557,570,377 | +2.4%   | 67,180           | -                 | 0.0%      | 6,934  |
| simple_token_u256_no_alloc_rust         | 1,558,488,476 | +2.5%   | 67,180           | -                 | 0.0%      | 6,934  |
| simple_token_u256_macro_no_alloc_rust   | 1,570,858,652 | +3.3%   | 67,180           | -                 | 0.0%      | 6,934  |
| simple_token_u256_macro_bump_alloc_rust | 1,581,569,807 | +4.0%   | 67,180           | -                 | 0.0%      | 6,934  |
| SimpleToken_pvm                         | 1,608,891,374 | +5.8%   | 12,457,558       | +18443.6%         | 0.8%      | 6,934  |
| simple_token_u256_stylus                | 1,720,802,034 | +13.2%  | 16,918,421       | +25083.7%         | 1.0%      | 6,934  |
| simple_token_u256_ink                   | 1,855,096,228 | +22.0%  | 208,376,358      | +310076.2%        | 11.2%     | 17,191 |


### SimpleToken - mint

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| SimpleToken_evm                         | 1,413,573,902 | -       | 504,818,478      | -                 | 35.7%     | 49,922 |
| SimpleToken_pvm                         | 1,499,597,677 | +6.1%   | 590,842,253      | +17.0%            | 39.4%     | 54,686 |
| simple_token_u32_no_alloc_rust          | 1,518,790,831 | +7.4%   | 610,035,407      | +20.8%            | 40.2%     | 51,540 |
| simple_token_u128_no_alloc_rust         | 1,519,870,676 | +7.5%   | 611,115,252      | +21.1%            | 40.2%     | 52,269 |
| simple_token_u256_no_alloc_rust         | 1,575,131,901 | +11.4%  | 666,376,477      | +32.0%            | 42.3%     | 52,326 |
| simple_token_u256_macro_no_alloc_rust   | 1,576,737,305 | +11.5%  | 667,981,881      | +32.3%            | 42.4%     | 53,094 |
| simple_token_u256_macro_bump_alloc_rust | 1,577,635,010 | +11.6%  | 668,879,586      | +32.5%            | 42.4%     | 53,759 |
| simple_token_u256_stylus                | 1,751,989,264 | +23.9%  | 843,233,840      | +67.0%            | 48.1%     | 61,357 |
| simple_token_u256_ink                   | 1,815,745,239 | +28.5%  | 906,989,815      | +79.7%            | 50.0%     | 57,872 |


### SimpleToken - transfer

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| SimpleToken_evm                         | 1,439,595,113 | -       | 530,839,689      | -                 | 36.9%     | 49,954 |
| SimpleToken_pvm                         | 1,559,845,486 | +8.4%   | 651,090,062      | +22.7%            | 41.7%     | 54,847 |
| simple_token_u128_no_alloc_rust         | 1,582,920,103 | +10.0%  | 674,164,679      | +27.0%            | 42.6%     | 52,301 |
| simple_token_u32_no_alloc_rust          | 1,587,795,854 | +10.3%  | 679,040,430      | +27.9%            | 42.8%     | 51,548 |
| simple_token_u256_no_alloc_rust         | 1,648,020,840 | +14.5%  | 739,265,416      | +39.3%            | 44.9%     | 52,390 |
| simple_token_u256_macro_no_alloc_rust   | 1,649,021,624 | +14.5%  | 740,266,200      | +39.5%            | 44.9%     | 53,158 |
| simple_token_u256_macro_bump_alloc_rust | 1,649,919,329 | +14.6%  | 741,163,905      | +39.6%            | 44.9%     | 53,823 |
| simple_token_u256_stylus                | 1,898,131,991 | +31.9%  | 989,376,567      | +86.4%            | 52.1%     | 61,518 |
| simple_token_u256_ink                   | 2,170,604,068 | +50.8%  | 1,261,848,644    | +137.7%           | 58.1%     | 78,450 |


### Store - delegate

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 2,395,214,979 | -       | 1,485,608,315    | -                 | 62.0%     | 139,613 |
| store_rust     | 2,636,671,014 | +10.1%  | 1,727,064,350    | +16.3%            | 65.5%     | 91,406  |
| Store_pvm      | 2,943,590,913 | +22.9%  | 2,033,997,345    | +36.9%            | 69.1%     | 206,474 |


### Store - deleteFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 2,774,835,960 | -       | 1,865,255,488    | -                 | 67.2%     | 180,891 |
| store_rust     | 3,471,944,875 | +25.1%  | 2,562,364,403    | +37.4%            | 73.8%     | 143,317 |
| Store_pvm      | 4,198,658,108 | +51.3%  | 3,289,077,636    | +76.3%            | 78.3%     | 248,432 |


### Store - delete_

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 2,358,280,450 | -       | 1,449,092,858    | -                 | 61.4%     | 129,356 |
| Store_pvm      | 2,818,349,738 | +19.5%  | 1,909,175,242    | +31.7%            | 67.7%     | 196,894 |
| store_rust     | 2,998,359,265 | +27.1%  | 2,089,171,673    | +44.2%            | 69.7%     | 122,587 |


### Store - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov   |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----- |
| Store_evm      | 1,639,118,420 | -       | 2,771,458        | +88.2%            | 0.2%      | 6,934 |
| store_rust     | 2,021,004,851 | +23.3%  | 1,472,359        | -                 | 0.1%      | 6,934 |
| Store_pvm      | 2,728,523,910 | +66.5%  | 12,524,738       | +750.7%           | 0.5%      | 6,934 |


### Store - revokeDelegation

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| store_rust     | 2,608,443,657 | -       | 1,698,836,993    | -                 | 65.1%     | 91,876  |
| Store_evm      | 2,812,878,541 | +7.8%   | 1,903,271,877    | +12.0%            | 67.7%     | 191,218 |
| Store_pvm      | 3,431,579,366 | +31.6%  | 2,521,972,702    | +48.5%            | 73.5%     | 258,759 |


### Store - set

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 2,553,247,394 | -       | 1,643,640,730    | -                 | 64.4%     | 149,902 |
| Store_pvm      | 2,948,331,929 | +15.5%  | 2,038,738,361    | +24.0%            | 69.1%     | 216,924 |
| store_rust     | 3,022,210,511 | +18.4%  | 2,112,603,847    | +28.5%            | 69.9%     | 111,920 |


### Store - setFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 2,974,530,484 | -       | 2,064,517,844    | -                 | 69.4%     | 201,440 |
| store_rust     | 3,509,126,473 | +18.0%  | 2,599,113,833    | +25.9%            | 74.1%     | 132,669 |
| Store_pvm      | 4,325,034,535 | +45.4%  | 3,415,021,895    | +65.4%            | 79.0%     | 268,465 |


### Store - set_update

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 1,705,675,514 | -       | 796,081,946      | -                 | 46.7%     | 78,036  |
| store_rust     | 1,781,271,828 | +4.4%   | 871,665,164      | +9.5%             | 48.9%     | 60,819  |
| Store_pvm      | 1,974,296,591 | +15.7%  | 1,064,703,023    | +33.7%            | 53.9%     | 145,092 |


### TetherToken - approve

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| TetherToken_evm | 1,290,591,912 | -       | 381,836,488      | -                 | 29.6%     | 43,748 |
| TetherToken_pvm | 1,501,656,400 | +16.4%  | 592,900,976      | +55.3%            | 39.5%     | 93,767 |


### TetherToken - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| TetherToken_evm | 3,497,129,450 | -       | 1,892,368,315    | -                 | 54.1%     | 150,692 |
| TetherToken_pvm | 4,628,305,323 | +32.3%  | 2,236,980,821    | +18.2%            | 48.3%     | 150,951 |


### TetherToken - transfer

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| TetherToken_evm | 1,818,370,488 | -       | 909,615,064      | -                 | 50.0%     | 105,482 |
| TetherToken_pvm | 2,086,091,926 | +14.7%  | 1,177,336,502    | +29.4%            | 56.4%     | 155,405 |


### TetherToken - transferFrom

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| TetherToken_evm | 2,105,131,434 | -       | 1,195,970,034    | -                 | 56.8%     | 126,185 |
| TetherToken_pvm | 2,454,405,401 | +16.6%  | 1,545,244,001    | +29.2%            | 63.0%     | 176,140 |


### W3S - buyTicket

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 5,878,648,001 | -       | 4,970,311,649    | -                 | 84.5%     | 410,815 |
| W3S_pvm        | 6,986,402,427 | +18.8%  | 6,078,066,075    | +22.3%            | 87.0%     | 526,526 |


### W3S - checkIn

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 3,168,632,564 | -       | 2,260,322,404    | -                 | 71.3%     | 201,403 |
| W3S_pvm        | 3,808,558,630 | +20.2%  | 2,900,248,470    | +28.3%            | 76.2%     | 316,789 |


### W3S - configurePaymentToken

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 2,099,275,768 | -       | 1,190,088,176    | -                 | 56.7%     | 122,516 |
| W3S_pvm        | 2,514,900,144 | +19.8%  | 1,605,712,552    | +34.9%            | 63.8%     | 215,979 |


### W3S - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 3,044,904,406 | -       | 1,333,402,182    | -                 | 43.8%     | 119,953 |
| W3S_pvm        | 4,917,904,402 | +61.5%  | 1,718,437,518    | +28.9%            | 34.9%     | 119,761 |


### W3S - grantVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 1,349,812,505 | -       | 441,476,153      | -                 | 32.7%     | 60,651  |
| W3S_pvm        | 1,689,132,080 | +25.1%  | 780,795,728      | +76.9%            | 46.2%     | 154,146 |


### W3S - pauseSales

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 1,265,282,732 | -       | 357,365,452      | -                 | 28.2%     | 50,266  |
| W3S_pvm        | 1,513,739,865 | +19.6%  | 605,822,585      | +69.5%            | 40.0%     | 143,793 |


### W3S - redeemTicketStaff

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 4,463,397,362 | -       | 3,554,655,034    | -                 | 79.6%     | 311,370 |
| W3S_pvm        | 5,335,811,993 | +19.5%  | 4,427,069,665    | +24.5%            | 83.0%     | 405,125 |


### W3S - revokeVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 1,353,908,542 | -       | 445,572,190      | -                 | 32.9%     | 60,683  |
| W3S_pvm        | 1,689,339,040 | +24.8%  | 781,002,688      | +75.3%            | 46.2%     | 154,339 |


### W3S - setMerkleRoot

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 1,205,940,763 | -       | 297,172,243      | -                 | 24.6%     | 40,204  |
| W3S_pvm        | 1,467,248,329 | +21.7%  | 558,479,809      | +87.9%            | 38.1%     | 133,763 |


### W3S - unpauseSales

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 1,266,827,842 | -       | 358,910,562      | -                 | 28.3%     | 50,298  |
| W3S_pvm        | 1,516,315,577 | +19.7%  | 608,398,297      | +69.5%            | 40.1%     | 143,954 |


### WETH9 - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| WETH9_evm      | 2,258,505,247 | -       | 715,949,346      | -                 | 31.7%     | 68,572 |
| WETH9_pvm      | 2,553,547,152 | +13.1%  | 765,794,390      | +7.0%             | 30.0%     | 68,476 |


### WETH9 - deposit

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| WETH9_evm      | 1,178,457,284 | -       | 270,448,332      | -                 | 22.9%     | 30,357 |
| WETH9_pvm      | 1,268,629,197 | +7.7%   | 360,620,245      | +33.3%            | 28.4%     | 45,879 |


### WETH9 - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| WETH9_evm      | 1,511,150,389 | -       | 602,394,965      | -                 | 39.9%     | 61,395 |
| WETH9_pvm      | 1,674,962,634 | +10.8%  | 766,207,210      | +27.2%            | 45.7%     | 76,917 |


### WETH9 - withdraw

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| WETH9_evm      | 1,706,240,291 | -       | 797,917,035      | -                 | 46.8%     | 46,049 |
| WETH9_pvm      | 1,823,602,260 | +6.9%   | 915,279,004      | +14.7%            | 50.2%     | 61,603 |


### XENCrypto - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| XENCrypto_evm  | 2,333,068,726 | -       | 653,973,786      | -                 | 28.0%     | 58,283 |
| XENCrypto_pvm  | 4,260,066,203 | +82.6%  | 932,677,525      | +42.6%            | 21.9%     | 58,219 |


### flipper - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| flipper_ink    | 1,740,457,926 | -       | 198,085,976      | -                 | 11.4%     | 17,191 |
| flipper_evm    | 1,755,797,102 | +0.9%   | 240,558,673      | +21.4%            | 13.7%     | 27,480 |
| flipper_pvm    | 1,829,960,804 | +5.1%   | 282,289,651      | +42.5%            | 15.4%     | 27,577 |
| flipper_stylus | 2,227,964,550 | +28.0%  | 659,628,116      | +233.0%           | 29.6%     | 58,348 |


### flipper - flip

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| flipper_evm    | 1,146,720,796 | -       | 238,816,612      | -                 | 20.8%     | 28,816 |
| flipper_ink    | 1,168,477,476 | +1.9%   | 260,573,292      | +9.1%             | 22.3%     | 30,621 |
| flipper_pvm    | 1,169,171,292 | +2.0%   | 261,267,108      | +9.4%             | 22.3%     | 30,948 |
| flipper_stylus | 1,269,233,562 | +10.7%  | 361,329,378      | +51.3%            | 28.5%     | 42,488 |


### incrementer - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| incrementer_ink    | 1,716,958,461 | -       | 181,560,842      | -                 | 10.6%     | 17,191 |
| incrementer_evm    | 1,756,864,281 | +2.3%   | 240,562,790      | +32.5%            | 13.7%     | 27,480 |
| incrementer_pvm    | 1,837,283,985 | +7.0%   | 282,155,291      | +55.4%            | 15.4%     | 27,577 |
| incrementer_stylus | 2,242,181,195 | +30.6%  | 648,476,236      | +257.2%           | 28.9%     | 58,348 |


### incrementer - inc

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| incrementer_evm    | 1,147,870,056 | -       | 239,546,800      | -                 | 20.9%     | 28,971 |
| incrementer_ink    | 1,166,306,761 | +1.6%   | 257,983,505      | +7.7%             | 22.1%     | 30,290 |
| incrementer_pvm    | 1,176,587,184 | +2.5%   | 268,263,928      | +12.0%            | 22.8%     | 31,507 |
| incrementer_stylus | 1,276,156,197 | +11.2%  | 367,832,941      | +53.6%            | 28.8%     | 44,159 |


