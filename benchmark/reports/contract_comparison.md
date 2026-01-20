# Revive Contract Comparison

Generated on: 2026-01-20

Comparison of gas usage across different contract implementations.

## CoinTool_App - deploy

| Implementation   | ref_time      | vs Best | % metered | pov    |
| ---------------- | ------------- | ------- | --------- | ------ |
| CoinTool_App_evm | 1,835,250,060 | -       | 13.3%     | 27,480 |
| CoinTool_App_pvm | 2,352,084,109 | +28.2%  | 15.8%     | 27,448 |


## CoinTool_App - t

| Implementation   | ref_time        | vs Best | % metered | pov        |
| ---------------- | --------------- | ------- | --------- | ---------- |
| CoinTool_App_pvm | 119,832,667,856 | -       | 99.2%     | 10,828,951 |
| CoinTool_App_evm | 192,217,000,967 | +60.4%  | 99.5%     | 9,138,203  |


## FiatTokenProxy - approve

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 1,469,933,402 | -       | 37.9%     | 54,554  |
| FiatTokenProxy_pvm | 1,737,192,853 | +18.2%  | 47.4%     | 167,787 |


## FiatTokenProxy - changeAdmin

| Implementation     | ref_time      | vs Best | % metered | pov    |
| ------------------ | ------------- | ------- | --------- | ------ |
| FiatTokenProxy_evm | 1,255,619,457 | -       | 27.3%     | 39,299 |
| FiatTokenProxy_pvm | 1,307,939,666 | +4.2%   | 30.2%     | 48,987 |


## FiatTokenProxy - configureMinter

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 1,778,633,934 | -       | 48.6%     | 85,389  |
| FiatTokenProxy_pvm | 2,051,259,329 | +15.3%  | 55.5%     | 198,590 |


## FiatTokenProxy - deploy

| Implementation     | ref_time      | vs Best | % metered | pov    |
| ------------------ | ------------- | ------- | --------- | ------ |
| FiatTokenProxy_evm | 1,958,835,632 | -       | 21.0%     | 31,458 |
| FiatTokenProxy_pvm | 2,111,820,114 | +7.8%   | 20.9%     | 31,458 |


## FiatTokenProxy - initialize

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 3,464,360,982 | -       | 73.5%     | 230,401 |
| FiatTokenProxy_pvm | 3,904,751,659 | +12.7%  | 76.5%     | 343,346 |


## FiatTokenProxy - mint

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 2,414,331,217 | -       | 62.2%     | 147,123 |
| FiatTokenProxy_pvm | 2,825,972,306 | +17.0%  | 67.7%     | 260,293 |


## FiatTokenProxy - transfer

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 2,248,246,340 | -       | 59.4%     | 136,866 |
| FiatTokenProxy_pvm | 2,629,939,111 | +17.0%  | 65.3%     | 250,003 |


## FiatTokenProxy - transferFrom

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 2,742,560,474 | -       | 66.7%     | 178,150 |
| FiatTokenProxy_pvm | 3,239,499,195 | +18.1%  | 71.8%     | 291,383 |


## FiatTokenV2_2 - deploy

| Implementation    | ref_time      | vs Best | % metered | pov    |
| ----------------- | ------------- | ------- | --------- | ------ |
| FiatTokenV2_2_evm | 2,417,206,915 | -       | 27.1%     | 58,283 |
| FiatTokenV2_2_pvm | 3,837,783,006 | +58.8%  | 17.8%     | 58,477 |


## Fibonacci - deploy

| Implementation      | ref_time      | vs Best | % metered | pov    |
| ------------------- | ------------- | ------- | --------- | ------ |
| fibonacci_rust      | 1,520,820,013 | -       | 0.0%      | 6,934  |
| fibonacci_u128_rust | 1,522,022,789 | +0.1%   | 0.0%      | 6,934  |
| Fibonacci_evm       | 1,525,205,124 | +0.3%   | 0.1%      | 6,934  |
| fibonacci_u256_rust | 1,528,369,015 | +0.5%   | 0.0%      | 6,934  |
| Fibonacci_pvm       | 1,552,523,142 | +2.1%   | 0.7%      | 6,934  |
| fibonacci_ink       | 1,720,504,670 | +13.1%  | 10.8%     | 17,191 |


## Fibonacci - fib_10

| Implementation      | ref_time      | vs Best | % metered | pov    |
| ------------------- | ------------- | ------- | --------- | ------ |
| fibonacci_rust      | 1,003,955,988 | -       | 9.0%      | 8,641  |
| fibonacci_u128_rust | 1,096,520,800 | +9.2%   | 16.7%     | 8,717  |
| fibonacci_ink       | 1,151,214,899 | +14.7%  | 20.7%     | 19,791 |
| Fibonacci_pvm       | 1,365,307,158 | +36.0%  | 33.1%     | 9,978  |
| Fibonacci_evm       | 1,519,150,709 | +51.3%  | 39.9%     | 8,432  |
| fibonacci_u256_rust | 2,512,807,559 | +150.3% | 63.7%     | 9,118  |


## SimpleToken - deploy

| Implementation             | ref_time      | vs Best | % metered | pov    |
| -------------------------- | ------------- | ------- | --------- | ------ |
| SimpleToken_evm            | 1,528,362,837 | -       | 0.1%      | 6,934  |
| simple_token_no_alloc_rust | 1,586,513,739 | +3.8%   | 0.0%      | 6,934  |
| SimpleToken_pvm            | 1,608,242,984 | +5.2%   | 0.7%      | 6,934  |
| simple_token_ink           | 1,847,374,728 | +20.9%  | 11.6%     | 17,191 |


## SimpleToken - mint

| Implementation             | ref_time      | vs Best | % metered | pov    |
| -------------------------- | ------------- | ------- | --------- | ------ |
| SimpleToken_evm            | 1,431,551,949 | -       | 36.2%     | 49,623 |
| SimpleToken_pvm            | 1,495,226,765 | +4.4%   | 38.9%     | 54,632 |
| simple_token_no_alloc_rust | 1,505,548,558 | +5.2%   | 39.3%     | 53,919 |
| simple_token_ink           | 1,688,260,258 | +17.9%  | 45.9%     | 56,874 |


## SimpleToken - transfer

| Implementation             | ref_time      | vs Best | % metered | pov    |
| -------------------------- | ------------- | ------- | --------- | ------ |
| SimpleToken_evm            | 1,461,245,351 | -       | 37.5%     | 49,655 |
| SimpleToken_pvm            | 1,553,568,823 | +6.3%   | 41.2%     | 54,793 |
| simple_token_no_alloc_rust | 1,562,094,984 | +6.9%   | 41.5%     | 53,951 |
| simple_token_ink           | 2,014,032,325 | +37.8%  | 54.6%     | 77,452 |


## TetherToken - approve

| Implementation  | ref_time      | vs Best | % metered | pov    |
| --------------- | ------------- | ------- | --------- | ------ |
| TetherToken_evm | 1,310,742,444 | -       | 30.3%     | 39,366 |
| TetherToken_pvm | 1,477,151,338 | +12.7%  | 38.2%     | 93,921 |


## TetherToken - deploy

| Implementation  | ref_time      | vs Best | % metered | pov     |
| --------------- | ------------- | ------- | --------- | ------- |
| TetherToken_evm | 3,782,609,127 | -       | 57.3%     | 171,238 |
| TetherToken_pvm | 4,547,576,316 | +20.2%  | 47.6%     | 150,951 |


## TetherToken - transfer

| Implementation  | ref_time      | vs Best | % metered | pov     |
| --------------- | ------------- | ------- | --------- | ------- |
| TetherToken_evm | 1,851,902,138 | -       | 50.7%     | 101,100 |
| TetherToken_pvm | 2,055,313,454 | +11.0%  | 55.6%     | 155,559 |


## TetherToken - transferFrom

| Implementation  | ref_time      | vs Best | % metered | pov     |
| --------------- | ------------- | ------- | --------- | ------- |
| TetherToken_evm | 2,159,349,827 | -       | 57.7%     | 121,806 |
| TetherToken_pvm | 2,415,750,101 | +11.9%  | 62.2%     | 176,297 |


## WETH9 - deploy

| Implementation | ref_time      | vs Best | % metered | pov    |
| -------------- | ------------- | ------- | --------- | ------ |
| WETH9_evm      | 2,287,529,426 | -       | 32.1%     | 68,572 |
| WETH9_pvm      | 2,549,508,821 | +11.5%  | 29.8%     | 68,476 |


## WETH9 - deposit

| Implementation | ref_time      | vs Best | % metered | pov    |
| -------------- | ------------- | ------- | --------- | ------ |
| WETH9_evm      | 1,186,865,805 | -       | 23.1%     | 28,906 |
| WETH9_pvm      | 1,259,534,400 | +6.1%   | 27.5%     | 46,070 |


## WETH9 - transfer

| Implementation | ref_time      | vs Best | % metered | pov    |
| -------------- | ------------- | ------- | --------- | ------ |
| WETH9_evm      | 1,535,020,402 | -       | 40.5%     | 59,944 |
| WETH9_pvm      | 1,655,325,011 | +7.8%   | 44.8%     | 77,108 |


## WETH9 - withdraw

| Implementation | ref_time      | vs Best | % metered | pov    |
| -------------- | ------------- | ------- | --------- | ------ |
| WETH9_evm      | 1,725,253,761 | -       | 47.1%     | 44,893 |
| WETH9_pvm      | 1,814,506,569 | +5.2%   | 49.7%     | 62,089 |


## XENCrypto - deploy

| Implementation | ref_time      | vs Best | % metered | pov    |
| -------------- | ------------- | ------- | --------- | ------ |
| XENCrypto_evm  | 2,360,462,436 | -       | 28.3%     | 58,283 |
| XENCrypto_pvm  | 4,190,424,438 | +77.5%  | 21.2%     | 58,219 |


