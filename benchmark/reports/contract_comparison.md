# Revive Contract Comparison

Generated on: 2026-03-03
resolc: Solidity frontend for the revive compiler version 0.6.0+commit.81ce306.llvm-18.1.8

Comparison of gas usage across different contract implementations.

## Chain: Geth

### CoinTool_App - deploy

| Implementation   | gas_used | vs Best | % metered |
| ---------------- | -------- | ------- | --------- |
| CoinTool_App_evm | 756,015  | -       | 3.0%      |


### CoinTool_App - t

| Implementation   | gas_used   | vs Best | % metered |
| ---------------- | ---------- | ------- | --------- |
| CoinTool_App_evm | 11,604,727 | -       | -2453.2%  |


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
| DotNS_evm      | 273,029  | -       | 92.0%     |


### DotNS - register_with_duration

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| DotNS_evm      | 274,987  | -       | 92.1%     |


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
| FiatTokenProxy_evm | 394,714  | -       | 12.0%     |


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
| FiatTokenV2_2_evm | 3,412,411 | -       | 0.9%      |


### Fibonacci - deploy

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Fibonacci_evm  | 97,743   | -       | 0.1%      |


### Fibonacci - fib_10

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Fibonacci_evm  | 38,116   | -       | 44.4%     |


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


## Chain: eth-rpc

### CoinTool_App - deploy

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| CoinTool_App_evm | 1,802,555,076 | -       | 240,332,528      | -                 | 13.3%     | 27,480 |
| CoinTool_App_pvm | 2,359,495,042 | +30.9%  | 378,538,815      | +57.5%            | 16.0%     | 27,448 |


### CoinTool_App - t

| Implementation   | ref_time        | vs Best | metered_ref_time | vs Best (metered) | % metered | pov        |
| ---------------- | --------------- | ------- | ---------------- | ----------------- | --------- | ---------- |
| CoinTool_App_pvm | 125,573,336,474 | -       | 124,660,351,042  | -                 | 99.3%     | 10,769,571 |
| CoinTool_App_evm | 189,356,920,173 | +50.8%  | 188,443,934,741  | +51.2%            | 99.5%     | 9,770,929  |


### DocumentAccessManagement - configurePublicAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 1,441,014,072 | -       | 531,826,480      | -                 | 36.9%     | 69,247  |
| DocumentAccessManagement_pvm | 1,760,323,000 | +22.2%  | 851,135,408      | +60.0%            | 48.4%     | 149,657 |


### DocumentAccessManagement - createDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 4,176,446,149 | -       | 3,264,298,861    | -                 | 78.2%     | 295,963 |
| DocumentAccessManagement_pvm | 5,239,951,898 | +25.5%  | 4,327,804,610    | +32.6%            | 82.6%     | 396,728 |


### DocumentAccessManagement - createDocument2

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 4,176,458,885 | -       | 3,264,311,597    | -                 | 78.2%     | 295,995 |
| DocumentAccessManagement_pvm | 5,240,014,362 | +25.5%  | 4,327,867,074    | +32.6%            | 82.6%     | 396,792 |


### DocumentAccessManagement - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov   |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----- |
| DocumentAccessManagement_evm | 1,665,620,545 | -       | 3,099,708        | -                 | 0.2%      | 6,934 |
| DocumentAccessManagement_pvm | 2,970,776,347 | +78.4%  | 12,994,998       | +319.2%           | 0.4%      | 6,934 |


### DocumentAccessManagement - grantAccessWithShare

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 3,938,354,023 | -       | 3,026,625,807    | -                 | 76.9%     | 285,674 |
| DocumentAccessManagement_pvm | 4,676,458,684 | +18.7%  | 3,764,730,468    | +24.4%            | 80.5%     | 366,053 |


### DocumentAccessManagement - registerKeys

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 1,563,012,802 | -       | 653,825,210      | -                 | 41.8%     | 58,894  |
| DocumentAccessManagement_pvm | 2,139,039,365 | +36.9%  | 1,229,851,773    | +88.1%            | 57.5%     | 159,947 |


### DocumentAccessManagement - revokeAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 4,888,574,673 | -       | 3,979,387,081    | -                 | 81.4%     | 419,073 |
| DocumentAccessManagement_pvm | 5,698,046,998 | +16.6%  | 4,788,859,406    | +20.3%            | 84.0%     | 500,129 |


### DocumentAccessManagement - transferOwnership

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 4,211,215,633 | -       | 3,302,028,041    | -                 | 78.4%     | 346,954 |
| DocumentAccessManagement_pvm | 4,977,110,357 | +18.2%  | 4,067,922,765    | +23.2%            | 81.7%     | 437,622 |


### DocumentAccessManagement - updateDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 1,895,501,146 | -       | 983,353,858      | -                 | 51.9%     | 100,824 |
| DocumentAccessManagement_pvm | 2,346,787,495 | +23.8%  | 1,434,640,207    | +45.9%            | 61.1%     | 181,266 |


### DotNS - createSubdomain

| Implementation | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 3,459,093,514  | -       | 2,547,797,466    | -                 | 73.7%     | 83,512  |
| DotNS_evm      | 4,697,397,389  | +35.8%  | 3,786,101,341    | +48.6%            | 80.6%     | 294,476 |
| DotNS_pvm      | 14,019,705,284 | +305.3% | 13,108,409,236   | +414.5%           | 93.5%     | 382,261 |


### DotNS - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov   |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----- |
| DotNS_evm      | 1,644,549,317 | -       | 2,838,724        | +76.7%            | 0.2%      | 6,934 |
| dotns_rust     | 1,881,427,093 | +14.4%  | 1,606,719        | -                 | 0.1%      | 6,934 |
| DotNS_pvm      | 2,738,304,016 | +66.5%  | 12,994,998       | +708.8%           | 0.5%      | 6,934 |


### DotNS - register

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 2,764,496,700 | -       | 1,854,903,132    | -                 | 67.1%     | 72,472  |
| DotNS_evm      | 4,191,362,451 | +51.6%  | 3,281,768,883    | +76.9%            | 78.3%     | 263,187 |
| DotNS_pvm      | 8,367,605,531 | +202.7% | 7,458,011,963    | +302.1%           | 89.1%     | 351,037 |


### DotNS - register_with_duration

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 2,762,628,049 | -       | 1,853,034,481    | -                 | 67.1%     | 72,512  |
| DotNS_evm      | 4,184,570,155 | +51.5%  | 3,274,976,587    | +76.7%            | 78.3%     | 263,219 |
| DotNS_pvm      | 8,212,578,787 | +197.3% | 7,302,985,219    | +294.1%           | 88.9%     | 350,939 |


### DotNS - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 2,057,253,674 | -       | 1,148,079,178    | -                 | 55.8%     | 52,568  |
| DotNS_evm      | 4,291,232,723 | +108.6% | 3,382,058,227    | +194.6%           | 78.8%     | 284,021 |
| DotNS_pvm      | 7,284,170,687 | +254.1% | 6,374,996,191    | +455.3%           | 87.5%     | 352,421 |


### DotNS - renew

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DotNS_evm      | 1,510,120,987 | -       | 600,527,419      | -                 | 39.8%     | 57,791  |
| dotns_rust     | 2,142,317,440 | +41.9%  | 1,232,723,872    | +105.3%           | 57.5%     | 52,664  |
| DotNS_pvm      | 3,957,424,341 | +162.1% | 3,047,830,773    | +407.5%           | 77.0%     | 125,092 |


### DotNS - setAddress

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DotNS_evm      | 1,582,237,726 | -       | 672,644,158      | -                 | 42.5%     | 68,080  |
| dotns_rust     | 2,222,510,125 | +40.5%  | 1,312,916,557    | +95.2%            | 59.1%     | 52,664  |
| DotNS_pvm      | 4,001,847,698 | +152.9% | 3,092,254,130    | +359.7%           | 77.3%     | 145,670 |


### DotNS - setMetadata

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DotNS_evm      | 1,505,142,074 | -       | 595,548,506      | -                 | 39.6%     | 57,759  |
| dotns_rust     | 2,161,926,944 | +43.6%  | 1,252,333,376    | +110.3%           | 57.9%     | 52,664  |
| DotNS_pvm      | 3,836,328,306 | +154.9% | 2,926,734,738    | +391.4%           | 76.3%     | 125,060 |


### DotNS - setSubdomainOwner

| Implementation | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 3,652,110,084  | -       | 2,741,246,204    | -                 | 75.1%     | 84,119  |
| DotNS_evm      | 4,381,597,972  | +20.0%  | 3,470,734,092    | +26.6%            | 79.2%     | 294,633 |
| DotNS_pvm      | 10,765,900,382 | +194.8% | 9,855,036,502    | +259.5%           | 91.5%     | 372,418 |


### DotNS - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 2,925,618,398 | -       | 2,016,024,830    | -                 | 68.9%     | 73,178  |
| DotNS_evm      | 4,059,951,699 | +38.8%  | 3,150,358,131    | +56.3%            | 77.6%     | 284,021 |
| DotNS_pvm      | 6,902,579,684 | +135.9% | 5,992,986,116    | +197.3%           | 86.8%     | 361,871 |


### Escrow - create_simple

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| escrow_rust    | 3,402,353,671 | -       | 2,492,655,335    | -                 | 73.3%     | 93,203  |
| Escrow_evm     | 4,408,869,726 | +29.6%  | 3,499,171,390    | +40.4%            | 79.4%     | 310,692 |
| Escrow_pvm     | 5,174,871,266 | +52.1%  | 4,265,172,930    | +71.1%            | 82.4%     | 361,148 |


### Escrow - create_with_arbiter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| escrow_rust    | 3,402,366,407 | -       | 2,492,668,071    | -                 | 73.3%     | 93,235  |
| Escrow_evm     | 4,408,932,894 | +29.6%  | 3,499,234,558    | +40.4%            | 79.4%     | 310,820 |
| Escrow_pvm     | 5,172,460,778 | +52.0%  | 4,262,762,442    | +71.0%            | 82.4%     | 361,275 |


### Escrow - create_with_expiry

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| escrow_rust    | 3,402,366,407 | -       | 2,492,668,071    | -                 | 73.3%     | 93,235  |
| Escrow_evm     | 4,408,945,630 | +29.6%  | 3,499,247,294    | +40.4%            | 79.4%     | 310,852 |
| Escrow_pvm     | 5,171,000,242 | +52.0%  | 4,261,301,906    | +71.0%            | 82.4%     | 361,274 |


### Escrow - create_with_releaseTime

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| escrow_rust    | 3,402,366,407 | -       | 2,492,668,071    | -                 | 73.3%     | 93,235  |
| Escrow_evm     | 4,408,970,590 | +29.6%  | 3,499,272,254    | +40.4%            | 79.4%     | 310,884 |
| Escrow_pvm     | 5,169,208,522 | +51.9%  | 4,259,510,186    | +70.9%            | 82.4%     | 361,209 |


### Escrow - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| escrow_rust    | 1,965,375,953 | -       | 247,914,139      | -                 | 12.6%     | 17,191 |
| Escrow_evm     | 1,987,160,734 | +1.1%   | 408,943,935      | +65.0%            | 20.6%     | 37,737 |
| Escrow_pvm     | 2,486,343,854 | +26.5%  | 431,343,748      | +74.0%            | 17.3%     | 37,705 |


### Escrow - refund

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Escrow_evm     | 2,723,771,047 | -       | 1,815,434,695    | -                 | 66.7%     | 161,696 |
| escrow_rust    | 2,861,529,846 | +5.1%   | 1,953,193,494    | +7.6%             | 68.3%     | 77,897  |
| Escrow_pvm     | 2,879,155,364 | +5.7%   | 1,970,819,012    | +8.6%             | 68.5%     | 191,281 |


### Escrow - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Escrow_evm     | 2,721,883,205 | -       | 1,813,546,853    | -                 | 66.6%     | 161,696 |
| escrow_rust    | 2,854,675,534 | +4.9%   | 1,946,339,182    | +7.3%             | 68.2%     | 77,895  |
| Escrow_pvm     | 2,881,573,844 | +5.9%   | 1,973,237,492    | +8.8%             | 68.5%     | 191,281 |


### FiatTokenProxy - approve

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 1,472,023,835 | -       | 563,268,411      | -                 | 38.3%     | 70,861  |
| FiatTokenProxy_pvm | 1,784,706,397 | +21.2%  | 875,964,069      | +55.5%            | 49.1%     | 167,342 |


### FiatTokenProxy - changeAdmin

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| FiatTokenProxy_evm | 1,244,082,557 | -       | 335,772,397      | -                 | 27.0%     | 40,407 |
| FiatTokenProxy_pvm | 1,315,849,870 | +5.8%   | 407,539,710      | +21.4%            | 31.0%     | 48,754 |


### FiatTokenProxy - configureMinter

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 1,779,627,252 | -       | 870,871,828      | -                 | 48.9%     | 101,696 |
| FiatTokenProxy_pvm | 2,096,768,647 | +17.8%  | 1,188,026,319    | +36.4%            | 56.7%     | 198,145 |


### FiatTokenProxy - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| FiatTokenProxy_evm | 1,943,797,882 | -       | 406,670,040      | -                 | 20.9%     | 31,458 |
| FiatTokenProxy_pvm | 2,115,078,350 | +8.8%   | 448,859,677      | +10.4%            | 21.2%     | 31,458 |


### FiatTokenProxy - initialize

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 3,431,970,619 | -       | 2,518,173,235    | -                 | 73.4%     | 246,705 |
| FiatTokenProxy_pvm | 4,012,399,521 | +16.9%  | 3,098,602,137    | +23.0%            | 77.2%     | 342,901 |


### FiatTokenProxy - mint

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 2,384,649,315 | -       | 1,475,893,891    | -                 | 61.9%     | 163,430 |
| FiatTokenProxy_pvm | 2,900,460,746 | +21.6%  | 1,991,718,418    | +34.9%            | 68.7%     | 259,848 |


### FiatTokenProxy - transfer

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 2,217,557,741 | -       | 1,308,802,317    | -                 | 59.0%     | 153,173 |
| FiatTokenProxy_pvm | 2,695,180,697 | +21.5%  | 1,786,438,369    | +36.5%            | 66.3%     | 249,558 |


### FiatTokenProxy - transferFrom

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 2,678,082,793 | -       | 1,768,921,393    | -                 | 66.1%     | 194,454 |
| FiatTokenProxy_pvm | 3,324,446,115 | +24.1%  | 2,415,284,715    | +36.5%            | 72.7%     | 290,938 |


### FiatTokenV2_2 - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| FiatTokenV2_2_evm | 2,408,252,618 | -       | 648,977,032      | -                 | 26.9%     | 58,283 |
| FiatTokenV2_2_pvm | 3,860,106,873 | +60.3%  | 682,158,941      | +5.1%             | 17.7%     | 58,477 |


### Fibonacci - deploy

| Implementation                      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ----------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| fibonacci_u32_rust                  | 1,513,984,835 | -       | 67,180           | -                 | 0.0%      | 6,934  |
| Fibonacci_evm                       | 1,515,072,570 | +0.1%   | 1,235,450        | +1739.0%          | 0.1%      | 6,934  |
| fibonacci_u128_rust                 | 1,515,289,502 | +0.1%   | 67,180           | -                 | 0.0%      | 6,934  |
| fibonacci_u32_macro_bump_alloc_rust | 1,517,157,914 | +0.2%   | 67,180           | -                 | 0.0%      | 6,934  |
| fibonacci_u32_macro_no_alloc_rust   | 1,517,898,836 | +0.3%   | 67,180           | -                 | 0.0%      | 6,934  |
| fibonacci_u256_rust                 | 1,526,000,657 | +0.8%   | 67,180           | -                 | 0.0%      | 6,934  |
| Fibonacci_pvm                       | 1,542,673,555 | +1.9%   | 13,196,538       | +19543.6%         | 0.9%      | 6,934  |
| fibonacci_u32_ink                   | 1,699,068,259 | +12.2%  | 175,647,474      | +261358.0%        | 10.3%     | 17,191 |


### Fibonacci - fib_10

| Implementation                      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ----------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| fibonacci_u32_rust                  | 1,029,715,854 | -       | 121,405,694      | -                 | 11.8%     | 8,433  |
| fibonacci_u32_macro_bump_alloc_rust | 1,033,906,059 | +0.4%   | 125,595,899      | +3.5%             | 12.1%     | 8,630  |
| Fibonacci_evm                       | 1,040,555,142 | +1.1%   | 132,244,982      | +8.9%             | 12.7%     | 8,404  |
| fibonacci_u32_macro_no_alloc_rust   | 1,040,834,457 | +1.1%   | 132,524,297      | +9.2%             | 12.7%     | 8,676  |
| fibonacci_u128_rust                 | 1,190,276,955 | +15.6%  | 281,966,795      | +132.3%           | 23.7%     | 8,514  |
| Fibonacci_pvm                       | 1,328,554,301 | +29.0%  | 420,244,141      | +246.1%           | 31.6%     | 9,399  |
| fibonacci_u32_ink                   | 1,361,223,403 | +32.2%  | 452,913,243      | +273.1%           | 33.3%     | 29,537 |
| fibonacci_u256_rust                 | 4,493,207,844 | +336.4% | 3,584,897,684    | +2852.8%          | 79.8%     | 9,179  |


### FungibleCredential - burn

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FungibleCredential_evm   | 1,776,113,377 | -       | 867,371,049      | -                 | 48.8%     | 97,801  |
| FungibleCredential_pvm   | 2,079,936,790 | +17.1%  | 1,171,194,462    | +35.0%            | 56.3%     | 156,357 |
| fungible_credential_rust | 2,266,133,536 | +27.6%  | 1,357,391,208    | +56.5%            | 59.9%     | 67,230  |


### FungibleCredential - createClass_nontransferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| fungible_credential_rust | 2,136,969,159 | -       | 1,226,524,351    | -                 | 57.4%     | 57,111  |
| FungibleCredential_evm   | 2,509,010,097 | +17.4%  | 1,598,565,289    | +30.3%            | 63.7%     | 139,187 |
| FungibleCredential_pvm   | 3,565,665,095 | +66.9%  | 2,655,220,287    | +116.5%           | 74.5%     | 249,190 |


### FungibleCredential - createClass_transferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| fungible_credential_rust | 2,123,799,298 | -       | 1,213,354,490    | -                 | 57.1%     | 57,111  |
| FungibleCredential_evm   | 2,508,998,277 | +18.1%  | 1,598,553,469    | +31.7%            | 63.7%     | 139,187 |
| FungibleCredential_pvm   | 3,565,727,787 | +67.9%  | 2,655,282,979    | +118.8%           | 74.5%     | 249,254 |


### FungibleCredential - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| FungibleCredential_evm   | 1,866,872,489 | -       | 240,189,727      | -                 | 12.9%     | 27,480 |
| fungible_credential_rust | 2,041,584,837 | +9.4%   | 247,373,168      | +3.0%             | 12.1%     | 17,191 |
| FungibleCredential_pvm   | 2,827,107,048 | +51.4%  | 257,971,502      | +7.4%             | 9.1%      | 27,448 |


### FungibleCredential - issue

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FungibleCredential_evm   | 3,510,980,004 | -       | 2,601,805,508    | -                 | 74.1%     | 251,979 |
| FungibleCredential_pvm   | 4,022,408,650 | +14.6%  | 3,113,234,154    | +19.7%            | 77.4%     | 310,151 |
| fungible_credential_rust | 4,029,571,566 | +14.8%  | 3,120,397,070    | +19.9%            | 77.4%     | 149,353 |


### FungibleCredential - issue_more

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FungibleCredential_evm   | 1,847,030,266 | -       | 937,855,770      | -                 | 50.8%     | 108,189 |
| FungibleCredential_pvm   | 2,150,788,582 | +16.4%  | 1,241,614,086    | +32.4%            | 57.7%     | 166,745 |
| fungible_credential_rust | 2,476,375,795 | +34.1%  | 1,567,201,299    | +67.1%            | 63.3%     | 77,587  |


### FungibleCredential - revoke

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FungibleCredential_evm   | 1,777,508,223 | -       | 868,333,727      | -                 | 48.9%     | 97,900  |
| FungibleCredential_pvm   | 2,079,940,756 | +17.0%  | 1,170,766,260    | +34.8%            | 56.3%     | 156,456 |
| fungible_credential_rust | 2,310,572,135 | +30.0%  | 1,401,397,639    | +61.4%            | 60.7%     | 67,329  |


### FungibleCredential - transfer

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FungibleCredential_evm   | 3,711,449,879 | -       | 2,802,288,479    | -                 | 75.5%     | 272,618 |
| fungible_credential_rust | 4,209,057,904 | +13.4%  | 3,299,896,504    | +17.8%            | 78.4%     | 159,537 |
| FungibleCredential_pvm   | 4,351,170,687 | +17.2%  | 3,442,009,287    | +22.8%            | 79.1%     | 330,886 |


### KeyRegistry - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov   |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----- |
| KeyRegistry_evm   | 1,581,433,487 | -       | 2,056,984        | +39.7%            | 0.1%      | 6,934 |
| key_registry_rust | 1,811,919,884 | +14.6%  | 1,472,359        | -                 | 0.1%      | 6,934 |
| KeyRegistry_pvm   | 2,148,787,816 | +35.9%  | 12,994,998       | +782.6%           | 0.6%      | 6,934 |


### KeyRegistry - fetchPrekeyBundle

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| KeyRegistry_evm   | 2,526,768,406 | -       | 1,618,458,246    | -                 | 64.1%     | 187,320 |
| KeyRegistry_pvm   | 3,380,005,443 | +33.8%  | 2,471,695,283    | +52.7%            | 73.1%     | 221,892 |
| key_registry_rust | 3,612,825,227 | +43.0%  | 2,704,515,067    | +67.1%            | 74.9%     | 150,224 |


### KeyRegistry - registerIdentity

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| key_registry_rust | 2,694,420,004 | -       | 1,783,543,028    | -                 | 66.2%     | 88,973  |
| KeyRegistry_evm   | 3,194,669,236 | +18.6%  | 2,283,805,356    | +28.0%            | 71.5%     | 187,681 |
| KeyRegistry_pvm   | 3,717,976,949 | +38.0%  | 2,807,113,069    | +57.4%            | 75.5%     | 222,060 |


### KeyRegistry - updateSignedPrekey

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| KeyRegistry_evm   | 2,119,967,016 | -       | 1,209,941,280    | -                 | 57.1%     | 105,465 |
| key_registry_rust | 2,221,762,926 | +4.8%   | 1,311,724,094    | +8.4%             | 59.0%     | 68,623  |
| KeyRegistry_pvm   | 2,599,055,400 | +22.6%  | 1,689,029,664    | +39.6%            | 65.0%     | 160,614 |


### KeyRegistry - uploadOneTimePrekeys

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| KeyRegistry_evm   | 2,853,673,363 | -       | 1,943,634,531    | -                 | 68.1%     | 197,941 |
| KeyRegistry_pvm   | 3,226,796,031 | +13.1%  | 2,316,770,295    | +19.2%            | 71.8%     | 232,317 |
| key_registry_rust | 3,626,442,688 | +27.1%  | 2,716,403,856    | +39.8%            | 74.9%     | 150,415 |


### Log - addWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Log_evm        | 1,935,831,566 | -       | 1,027,076,142    | -                 | 53.1%     | 107,059 |
| Log_pvm        | 2,208,949,329 | +14.1%  | 1,300,193,905    | +26.6%            | 58.9%     | 154,805 |
| log_rust       | 2,469,491,049 | +27.6%  | 1,560,735,625    | +52.0%            | 63.2%     | 86,408  |


### Log - append

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| log_rust       | 2,167,651,859 | -       | 1,258,896,435    | -                 | 58.1%     | 55,682  |
| Log_evm        | 2,473,213,971 | +14.1%  | 1,564,458,547    | +24.3%            | 63.3%     | 148,183 |
| Log_pvm        | 2,824,124,859 | +30.3%  | 1,915,369,435    | +52.1%            | 67.8%     | 195,961 |


### Log - append_2

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| log_rust       | 2,167,651,859 | -       | 1,258,896,435    | -                 | 58.1%     | 55,682  |
| Log_evm        | 2,473,213,971 | +14.1%  | 1,564,458,547    | +24.3%            | 63.3%     | 148,183 |
| Log_pvm        | 2,824,124,859 | +30.3%  | 1,915,369,435    | +52.1%            | 67.8%     | 195,961 |


### Log - create_nonpermissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Log_evm        | 2,236,431,339 | -       | 1,328,108,083    | -                 | 59.4%     | 127,506 |
| log_rust       | 2,542,532,843 | +13.7%  | 1,634,209,587    | +23.0%            | 64.3%     | 76,023  |
| Log_pvm        | 3,079,695,499 | +37.7%  | 2,171,372,243    | +63.5%            | 70.5%     | 216,473 |


### Log - create_permissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Log_evm        | 2,236,456,811 | -       | 1,328,133,555    | -                 | 59.4%     | 127,570 |
| log_rust       | 2,542,539,211 | +13.7%  | 1,634,215,955    | +23.0%            | 64.3%     | 76,039  |
| Log_pvm        | 3,079,282,987 | +37.7%  | 2,170,959,731    | +63.5%            | 70.5%     | 216,601 |


### Log - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Log_evm        | 1,851,574,647 | -       | 240,000,251      | -                 | 13.0%     | 27,480 |
| log_rust       | 2,022,325,943 | +9.2%   | 246,089,686      | +2.5%             | 12.2%     | 17,191 |
| Log_pvm        | 2,640,145,248 | +42.6%  | 258,173,042      | +7.6%             | 9.8%      | 27,448 |


### Log - removeWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| log_rust       | 1,841,125,648 | -       | 932,370,224      | -                 | 50.6%     | 55,639  |
| Log_evm        | 2,620,051,831 | +42.3%  | 1,711,296,407    | +83.5%            | 65.3%     | 189,467 |
| Log_pvm        | 3,000,417,432 | +63.0%  | 2,091,662,008    | +124.3%           | 69.7%     | 237,632 |


### Log - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| log_rust       | 1,773,032,588 | -       | 864,277,164      | -                 | 48.7%     | 45,425  |
| Log_evm        | 3,073,312,815 | +73.3%  | 2,164,557,391    | +150.4%           | 70.4%     | 230,559 |
| Log_pvm        | 3,437,415,590 | +93.9%  | 2,528,660,166    | +192.6%           | 73.6%     | 278,369 |


### Marketplace - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Marketplace_pvm | 6,191,765,963 | -       | 294,118,867      | -                 | 4.8%      | 27,448 |


### MarketplaceProxy - createItem_digital

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov       |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | --------- |
| MarketplaceProxy_evm | 9,168,836,055 | -       | 8,255,850,623    | -                 | 90.0%     | 1,022,304 |
| MarketplaceProxy_pvm | 9,327,311,519 | +1.7%   | 8,414,326,087    | +1.9%             | 90.2%     | 1,051,892 |


### MarketplaceProxy - createItem_physical

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov       |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | --------- |
| MarketplaceProxy_evm | 9,005,618,998 | -       | 8,092,633,566    | -                 | 89.9%     | 1,022,368 |
| MarketplaceProxy_pvm | 9,164,094,462 | +1.8%   | 8,251,109,030    | +2.0%             | 90.0%     | 1,051,956 |


### MarketplaceProxy - deactivateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 1,931,870,103 | -       | 1,023,533,751    | -                 | 53.0%     | 327,335 |
| MarketplaceProxy_pvm | 2,010,252,207 | +4.1%   | 1,101,915,855    | +7.7%             | 54.8%     | 342,129 |


### MarketplaceProxy - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 6,721,717,243 | -       | 5,164,471,758    | +0.2%             | 76.8%     | 576,411 |
| MarketplaceProxy_pvm | 6,852,821,592 | +2.0%   | 5,152,683,233    | -                 | 75.2%     | 582,863 |


### MarketplaceProxy - markAsShipped

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 3,872,123,861 | -       | 2,962,517,197    | -                 | 76.5%     | 502,154 |
| MarketplaceProxy_pvm | 3,950,631,877 | +2.0%   | 3,041,025,213    | +2.7%             | 77.0%     | 516,948 |


### MarketplaceProxy - purchaseItem_digital

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 11,448,886,229 | -       | 10,538,349,749   | -                 | 92.0%     | 931,040 |
| MarketplaceProxy_pvm | 11,528,192,549 | +0.7%   | 10,617,656,069   | +0.8%             | 92.1%     | 945,834 |


### MarketplaceProxy - purchaseItem_physical

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 11,518,470,175 | -       | 10,606,244,311   | -                 | 92.1%     | 956,835 |
| MarketplaceProxy_pvm | 11,597,765,231 | +0.7%   | 10,685,539,367   | +0.7%             | 92.1%     | 971,629 |


### MarketplaceProxy - purchaseItem_with_matchmaker

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov       |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | --------- |
| MarketplaceProxy_evm | 12,839,779,416 | -       | 11,929,242,936   | -                 | 92.9%     | 1,023,158 |
| MarketplaceProxy_pvm | 12,919,085,736 | +0.6%   | 12,008,549,256   | +0.7%             | 93.0%     | 1,037,952 |


### MarketplaceProxy - registerMatchMaker

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 4,029,085,585 | -       | 3,119,478,921    | -                 | 77.4%     | 450,710 |
| MarketplaceProxy_pvm | 4,108,397,537 | +2.0%   | 3,198,790,873    | +2.5%             | 77.9%     | 465,504 |


### MarketplaceProxy - registerShop

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 3,986,864,548 | -       | 3,074,298,188    | -                 | 77.1%     | 451,195 |
| MarketplaceProxy_pvm | 4,065,352,852 | +2.0%   | 3,152,786,492    | +2.6%             | 77.6%     | 465,989 |


### MarketplaceProxy - updateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 5,552,937,069 | -       | 4,640,370,709    | -                 | 83.6%     | 554,438 |
| MarketplaceProxy_pvm | 5,631,425,373 | +1.4%   | 4,718,859,013    | +1.7%             | 83.8%     | 569,232 |


### MarketplaceProxy - updateMatchMakerFee

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 2,150,435,860 | -       | 1,242,125,700    | -                 | 57.8%     | 347,810 |
| MarketplaceProxy_pvm | 2,228,817,964 | +3.6%   | 1,320,507,804    | +6.3%             | 59.2%     | 362,604 |


### MockMobRule - addCounterEvidence

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| MockMobRule_evm | 1,347,613,156 | -       | 438,006,492      | -                 | 32.5%     | 55,160 |
| MockMobRule_pvm | 1,641,438,221 | +21.8%  | 731,831,557      | +67.1%            | 44.6%     | 96,585 |


### MockMobRule - createDispute

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MockMobRule_evm | 3,434,345,913 | -       | 2,523,468,937    | -                 | 73.5%     | 209,498 |
| MockMobRule_pvm | 4,093,835,631 | +19.2%  | 3,182,958,655    | +26.1%            | 77.8%     | 251,021 |


### MockMobRule - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| MockMobRule_evm | 2,024,769,550 | -       | 418,687,641      | -                 | 20.7%     | 37,737 |
| MockMobRule_pvm | 2,878,344,154 | +42.2%  | 610,648,554      | +45.8%            | 21.2%     | 37,705 |


### MockMobRule - resolveCase

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MockMobRule_evm | 1,382,876,290 | -       | 474,107,770      | -                 | 34.3%     | 65,257  |
| MockMobRule_pvm | 1,519,552,933 | +9.9%   | 610,784,413      | +28.8%            | 40.2%     | 106,682 |


### NonFungibleCredential - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| NonFungibleCredential_evm    | 1,857,886,230 | -       | 240,078,425      | -                 | 12.9%     | 27,480 |
| non_fungible_credential_rust | 2,063,463,626 | +11.1%  | 246,492,766      | +2.7%             | 11.9%     | 17,191 |
| NonFungibleCredential_pvm    | 2,820,755,386 | +51.8%  | 257,837,142      | +7.4%             | 9.1%      | 27,448 |


### NonFungibleCredential - issue_nontransferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| non_fungible_credential_rust | 4,217,598,862 | -       | 3,306,734,982    | -                 | 78.4%     | 150,965 |
| NonFungibleCredential_evm    | 4,866,478,341 | +15.4%  | 3,955,614,461    | +19.6%            | 81.3%     | 344,384 |
| NonFungibleCredential_pvm    | 6,270,937,501 | +48.7%  | 5,360,073,621    | +62.1%            | 85.5%     | 444,296 |


### NonFungibleCredential - issue_transferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| non_fungible_credential_rust | 4,204,269,521 | -       | 3,293,405,641    | -                 | 78.3%     | 150,933 |
| NonFungibleCredential_evm    | 4,866,426,776 | +15.7%  | 3,955,562,896    | +20.1%            | 81.3%     | 344,256 |
| NonFungibleCredential_pvm    | 6,270,263,424 | +49.1%  | 5,359,399,544    | +62.7%            | 85.5%     | 444,007 |


### NonFungibleCredential - issue_with_expiry

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| non_fungible_credential_rust | 4,231,460,145 | -       | 3,320,596,265    | -                 | 78.5%     | 150,981 |
| NonFungibleCredential_evm    | 4,866,527,640 | +15.0%  | 3,955,663,760    | +19.1%            | 81.3%     | 344,448 |
| NonFungibleCredential_pvm    | 6,265,685,696 | +48.1%  | 5,354,821,816    | +61.3%            | 85.5%     | 444,197 |


### NonFungibleCredential - revoke

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| NonFungibleCredential_evm    | 1,246,495,405 | -       | 338,172,149      | -                 | 27.1%     | 45,709  |
| NonFungibleCredential_pvm    | 1,399,695,045 | +12.3%  | 491,371,789      | +45.3%            | 35.1%     | 104,430 |
| non_fungible_credential_rust | 1,771,620,288 | +42.1%  | 863,297,032      | +155.3%           | 48.7%     | 48,011  |


### NonFungibleCredential - transfer

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| non_fungible_credential_rust | 3,230,576,330 | -       | 2,321,834,002    | -                 | 71.9%     | 109,649 |
| NonFungibleCredential_evm    | 6,411,955,717 | +98.5%  | 5,503,213,389    | +137.0%           | 85.8%     | 508,554 |
| NonFungibleCredential_pvm    | 7,685,222,538 | +137.9% | 6,776,480,210    | +191.9%           | 88.2%     | 567,729 |


### NonFungibleCredential - updateMetadata

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| NonFungibleCredential_evm    | 1,186,538,056 | -       | 277,782,632      | -                 | 23.4%     | 35,519 |
| NonFungibleCredential_pvm    | 1,353,093,571 | +14.0%  | 444,338,147      | +60.0%            | 32.8%     | 94,240 |
| non_fungible_credential_rust | 1,816,010,398 | +53.1%  | 907,254,974      | +226.6%           | 50.0%     | 48,110 |


### SimpleToken - deploy

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| SimpleToken_evm                         | 1,520,388,900 | -       | 1,300,898        | +1836.4%          | 0.1%      | 6,934  |
| simple_token_u32_no_alloc_rust          | 1,545,828,374 | +1.7%   | 67,180           | -                 | 0.0%      | 6,934  |
| simple_token_u128_no_alloc_rust         | 1,557,570,377 | +2.4%   | 67,180           | -                 | 0.0%      | 6,934  |
| simple_token_u256_no_alloc_rust         | 1,558,488,476 | +2.5%   | 67,180           | -                 | 0.0%      | 6,934  |
| simple_token_u256_macro_no_alloc_rust   | 1,570,858,652 | +3.3%   | 67,180           | -                 | 0.0%      | 6,934  |
| simple_token_u256_macro_bump_alloc_rust | 1,581,569,807 | +4.0%   | 67,180           | -                 | 0.0%      | 6,934  |
| SimpleToken_pvm                         | 1,609,702,633 | +5.9%   | 12,994,998       | +19243.6%         | 0.8%      | 6,934  |
| simple_token_u256_ink                   | 1,855,160,656 | +22.0%  | 208,376,358      | +310076.2%        | 11.2%     | 17,191 |


### SimpleToken - mint

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| SimpleToken_evm                         | 1,413,560,806 | -       | 504,818,478      | -                 | 35.7%     | 49,919 |
| SimpleToken_pvm                         | 1,500,015,762 | +6.1%   | 591,273,434      | +17.1%            | 39.4%     | 54,700 |
| simple_token_u32_no_alloc_rust          | 1,518,777,735 | +7.4%   | 610,035,407      | +20.8%            | 40.2%     | 51,537 |
| simple_token_u128_no_alloc_rust         | 1,519,857,580 | +7.5%   | 611,115,252      | +21.1%            | 40.2%     | 52,266 |
| simple_token_u256_no_alloc_rust         | 1,575,118,805 | +11.4%  | 666,376,477      | +32.0%            | 42.3%     | 52,323 |
| simple_token_u256_macro_no_alloc_rust   | 1,576,724,209 | +11.5%  | 667,981,881      | +32.3%            | 42.4%     | 53,091 |
| simple_token_u256_macro_bump_alloc_rust | 1,577,621,914 | +11.6%  | 668,879,586      | +32.5%            | 42.4%     | 53,756 |
| simple_token_u256_ink                   | 1,815,738,755 | +28.5%  | 906,996,427      | +79.7%            | 50.0%     | 57,873 |


### SimpleToken - transfer

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| SimpleToken_evm                         | 1,439,582,017 | -       | 530,839,689      | -                 | 36.9%     | 49,951 |
| SimpleToken_pvm                         | 1,560,532,291 | +8.4%   | 651,789,963      | +22.8%            | 41.8%     | 54,861 |
| simple_token_u128_no_alloc_rust         | 1,582,907,007 | +10.0%  | 674,164,679      | +27.0%            | 42.6%     | 52,298 |
| simple_token_u32_no_alloc_rust          | 1,587,782,758 | +10.3%  | 679,040,430      | +27.9%            | 42.8%     | 51,545 |
| simple_token_u256_no_alloc_rust         | 1,648,007,744 | +14.5%  | 739,265,416      | +39.3%            | 44.9%     | 52,387 |
| simple_token_u256_macro_no_alloc_rust   | 1,649,008,528 | +14.5%  | 740,266,200      | +39.5%            | 44.9%     | 53,155 |
| simple_token_u256_macro_bump_alloc_rust | 1,649,906,233 | +14.6%  | 741,163,905      | +39.6%            | 44.9%     | 53,820 |
| simple_token_u256_ink                   | 2,170,866,304 | +50.8%  | 1,262,123,976    | +137.8%           | 58.1%     | 78,451 |


### Store - delegate

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 2,395,201,883 | -       | 1,485,608,315    | -                 | 62.0%     | 139,610 |
| store_rust     | 2,633,963,980 | +10.0%  | 1,724,370,412    | +16.1%            | 65.5%     | 91,277  |
| Store_pvm      | 2,940,424,306 | +22.8%  | 2,030,830,738    | +36.7%            | 69.1%     | 205,615 |


### Store - deleteFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 2,774,835,960 | -       | 1,865,255,488    | -                 | 67.2%     | 180,891 |
| store_rust     | 3,471,064,797 | +25.1%  | 2,561,484,325    | +37.3%            | 73.8%     | 143,191 |
| Store_pvm      | 4,195,289,961 | +51.2%  | 3,285,709,489    | +76.2%            | 78.3%     | 247,573 |


### Store - delete_

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 2,358,267,354 | -       | 1,449,092,858    | -                 | 61.4%     | 129,353 |
| Store_pvm      | 2,814,914,411 | +19.4%  | 1,905,739,915    | +31.5%            | 67.7%     | 196,035 |
| store_rust     | 2,997,466,091 | +27.1%  | 2,088,291,595    | +44.1%            | 69.7%     | 122,458 |


### Store - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov   |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----- |
| Store_evm      | 1,639,118,420 | -       | 2,771,458        | +88.2%            | 0.2%      | 6,934 |
| store_rust     | 2,018,975,369 | +23.2%  | 1,472,359        | -                 | 0.1%      | 6,934 |
| Store_pvm      | 2,715,158,257 | +65.6%  | 12,994,998       | +782.6%           | 0.5%      | 6,934 |


### Store - revokeDelegation

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| store_rust     | 2,607,348,943 | -       | 1,697,755,375    | -                 | 65.1%     | 91,747  |
| Store_evm      | 2,812,865,445 | +7.9%   | 1,903,271,877    | +12.1%            | 67.7%     | 191,215 |
| Store_pvm      | 3,427,526,323 | +31.5%  | 2,517,932,755    | +48.3%            | 73.5%     | 257,897 |


### Store - set

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 2,553,234,298 | -       | 1,643,640,730    | -                 | 64.4%     | 149,899 |
| Store_pvm      | 2,946,038,662 | +15.4%  | 2,036,445,094    | +23.9%            | 69.1%     | 216,065 |
| store_rust     | 3,018,159,877 | +18.2%  | 2,108,566,309    | +28.3%            | 69.9%     | 111,791 |


### Store - setFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 2,974,530,484 | -       | 2,064,517,844    | -                 | 69.4%     | 201,440 |
| store_rust     | 3,505,088,935 | +17.8%  | 2,595,076,295    | +25.7%            | 74.0%     | 132,543 |
| Store_pvm      | 4,322,875,628 | +45.3%  | 3,412,862,988    | +65.3%            | 78.9%     | 267,606 |


### Store - set_update

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 1,705,675,514 | -       | 796,081,946      | -                 | 46.7%     | 78,036  |
| store_rust     | 1,780,378,654 | +4.4%   | 870,785,086      | +9.4%             | 48.9%     | 60,690  |
| Store_pvm      | 1,972,607,944 | +15.6%  | 1,063,014,376    | +33.5%            | 53.9%     | 144,233 |


### TetherToken - approve

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| TetherToken_evm | 1,290,578,816 | -       | 381,836,488      | -                 | 29.6%     | 43,745 |
| TetherToken_pvm | 1,501,517,676 | +16.3%  | 592,775,348      | +55.2%            | 39.5%     | 93,688 |


### TetherToken - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| TetherToken_evm | 3,497,129,450 | -       | 1,892,368,315    | -                 | 54.1%     | 150,692 |
| TetherToken_pvm | 4,625,871,951 | +32.3%  | 2,235,771,581    | +18.1%            | 48.3%     | 150,951 |


### TetherToken - transfer

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| TetherToken_evm | 1,818,357,392 | -       | 909,615,064      | -                 | 50.0%     | 105,479 |
| TetherToken_pvm | 2,085,953,202 | +14.7%  | 1,177,210,874    | +29.4%            | 56.4%     | 155,326 |


### TetherToken - transferFrom

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| TetherToken_evm | 2,105,131,434 | -       | 1,195,970,034    | -                 | 56.8%     | 126,185 |
| TetherToken_pvm | 2,454,279,773 | +16.6%  | 1,545,118,373    | +29.2%            | 63.0%     | 176,064 |


### W3S - buyTicket

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 5,878,648,001 | -       | 4,970,311,649    | -                 | 84.5%     | 410,815 |
| W3S_pvm        | 6,985,617,504 | +18.8%  | 6,077,281,152    | +22.3%            | 87.0%     | 526,295 |


### W3S - checkIn

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 3,168,632,564 | -       | 2,260,322,404    | -                 | 71.3%     | 201,403 |
| W3S_pvm        | 3,808,243,967 | +20.2%  | 2,899,933,807    | +28.3%            | 76.1%     | 316,558 |


### W3S - configurePaymentToken

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 2,099,275,768 | -       | 1,190,088,176    | -                 | 56.7%     | 122,516 |
| W3S_pvm        | 2,514,586,667 | +19.8%  | 1,605,399,075    | +34.9%            | 63.8%     | 215,830 |


### W3S - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 3,044,904,406 | -       | 1,333,402,182    | -                 | 43.8%     | 119,953 |
| W3S_pvm        | 4,915,571,639 | +61.4%  | 1,718,504,698    | +28.9%            | 35.0%     | 119,761 |


### W3S - grantVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 1,349,812,505 | -       | 441,476,153      | -                 | 32.7%     | 60,651  |
| W3S_pvm        | 1,688,885,783 | +25.1%  | 780,549,431      | +76.8%            | 46.2%     | 153,997 |


### W3S - pauseSales

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 1,265,282,732 | -       | 357,365,452      | -                 | 28.2%     | 50,266  |
| W3S_pvm        | 1,513,493,568 | +19.6%  | 605,576,288      | +69.5%            | 40.0%     | 143,644 |


### W3S - redeemTicketStaff

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 4,463,397,362 | -       | 3,554,655,034    | -                 | 79.6%     | 311,370 |
| W3S_pvm        | 5,335,095,436 | +19.5%  | 4,426,353,108    | +24.5%            | 83.0%     | 404,976 |


### W3S - revokeVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 1,353,908,542 | -       | 445,572,190      | -                 | 32.9%     | 60,683  |
| W3S_pvm        | 1,689,092,743 | +24.8%  | 780,756,391      | +75.2%            | 46.2%     | 154,190 |


### W3S - setMerkleRoot

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 1,205,940,763 | -       | 297,172,243      | -                 | 24.6%     | 40,204  |
| W3S_pvm        | 1,467,002,032 | +21.6%  | 558,233,512      | +87.8%            | 38.1%     | 133,614 |


### W3S - unpauseSales

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 1,266,827,842 | -       | 358,910,562      | -                 | 28.3%     | 50,298  |
| W3S_pvm        | 1,516,136,460 | +19.7%  | 608,219,180      | +69.5%            | 40.1%     | 143,805 |


### WETH9 - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| WETH9_evm      | 2,258,505,247 | -       | 715,949,346      | -                 | 31.7%     | 68,572 |
| WETH9_pvm      | 2,552,650,259 | +13.0%  | 765,525,670      | +6.9%             | 30.0%     | 68,476 |


### WETH9 - deposit

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| WETH9_evm      | 1,178,444,188 | -       | 270,448,332      | -                 | 22.9%     | 30,354 |
| WETH9_pvm      | 1,268,551,634 | +7.6%   | 360,555,778      | +33.3%            | 28.4%     | 45,837 |


### WETH9 - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| WETH9_evm      | 1,511,137,293 | -       | 602,394,965      | -                 | 39.9%     | 61,392 |
| WETH9_pvm      | 1,674,885,071 | +10.8%  | 766,142,743      | +27.2%            | 45.7%     | 76,875 |


### WETH9 - withdraw

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| WETH9_evm      | 1,706,227,195 | -       | 797,917,035      | -                 | 46.8%     | 46,046 |
| WETH9_pvm      | 1,823,511,601 | +6.9%   | 915,214,537      | +14.7%            | 50.2%     | 61,558 |


### XENCrypto - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| XENCrypto_evm  | 2,333,068,726 | -       | 653,973,786      | -                 | 28.0%     | 58,283 |
| XENCrypto_pvm  | 4,256,642,858 | +82.4%  | 932,072,905      | +42.5%            | 21.9%     | 58,219 |


