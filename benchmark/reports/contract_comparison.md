# Revive Contract Comparison

Generated on: 2026-01-19

Comparison of gas usage across different contract implementations.

## FiatTokenProxy - approve

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 1,469,933,402 | -       | 37.9%     | 54,554  |
| FiatTokenProxy_pvm | 1,755,105,773 | +19.4%  | 48.0%     | 178,172 |


## FiatTokenProxy - changeAdmin

| Implementation     | ref_time      | vs Best | % metered | pov    |
| ------------------ | ------------- | ------- | --------- | ------ |
| FiatTokenProxy_evm | 1,255,619,457 | -       | 27.3%     | 39,299 |
| FiatTokenProxy_pvm | 1,309,253,050 | +4.3%   | 30.3%     | 49,181 |


## FiatTokenProxy - configureMinter

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 1,778,633,934 | -       | 48.6%     | 85,389  |
| FiatTokenProxy_pvm | 2,068,187,649 | +16.3%  | 55.8%     | 208,975 |


## FiatTokenProxy - deploy

| Implementation     | ref_time      | vs Best | % metered | pov    |
| ------------------ | ------------- | ------- | --------- | ------ |
| FiatTokenProxy_evm | 1,958,835,632 | -       | 21.0%     | 31,458 |
| FiatTokenProxy_pvm | 2,115,727,268 | +8.0%   | 20.9%     | 31,458 |


## FiatTokenProxy - initialize

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 3,464,360,982 | -       | 73.5%     | 230,401 |
| FiatTokenProxy_pvm | 3,945,064,229 | +13.9%  | 76.7%     | 353,731 |


## FiatTokenProxy - mint

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 2,414,331,217 | -       | 62.2%     | 147,123 |
| FiatTokenProxy_pvm | 2,850,296,502 | +18.1%  | 68.0%     | 270,581 |


## FiatTokenProxy - transfer

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 2,248,246,340 | -       | 59.4%     | 136,866 |
| FiatTokenProxy_pvm | 2,656,122,671 | +18.1%  | 65.6%     | 260,388 |


## FiatTokenProxy - transferFrom

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 2,742,560,474 | -       | 66.7%     | 178,150 |
| FiatTokenProxy_pvm | 3,269,424,235 | +19.2%  | 72.0%     | 301,768 |


## FiatTokenV2_2 - deploy

| Implementation    | ref_time      | vs Best | % metered | pov    |
| ----------------- | ------------- | ------- | --------- | ------ |
| FiatTokenV2_2_evm | 2,417,206,915 | -       | 27.1%     | 58,283 |
| FiatTokenV2_2_pvm | 3,996,184,160 | +65.3%  | 17.0%     | 58,219 |


## Fibonacci - deploy

| Implementation      | ref_time      | vs Best | % metered | pov    |
| ------------------- | ------------- | ------- | --------- | ------ |
| fibonacci_rust      | 1,520,820,013 | -       | 0.0%      | 6,934  |
| fibonacci_u128_rust | 1,522,022,789 | +0.1%   | 0.0%      | 6,934  |
| Fibonacci_evm       | 1,525,205,124 | +0.3%   | 0.1%      | 6,934  |
| fibonacci_u256_rust | 1,528,369,015 | +0.5%   | 0.0%      | 6,934  |
| Fibonacci_pvm       | 1,558,645,994 | +2.5%   | 0.7%      | 6,934  |
| fibonacci_ink       | 1,720,504,670 | +13.1%  | 10.8%     | 17,191 |


## Fibonacci - fib_10

| Implementation      | ref_time      | vs Best | % metered | pov    |
| ------------------- | ------------- | ------- | --------- | ------ |
| fibonacci_rust      | 1,003,955,988 | -       | 9.0%      | 8,641  |
| fibonacci_u128_rust | 1,096,520,800 | +9.2%   | 16.7%     | 8,717  |
| fibonacci_ink       | 1,151,214,899 | +14.7%  | 20.7%     | 19,791 |
| Fibonacci_evm       | 1,519,150,709 | +51.3%  | 39.9%     | 8,432  |
| Fibonacci_pvm       | 1,587,019,190 | +58.1%  | 42.5%     | 10,340 |
| fibonacci_u256_rust | 2,512,807,559 | +150.3% | 63.7%     | 9,118  |


## SimpleToken - deploy

| Implementation             | ref_time      | vs Best | % metered | pov    |
| -------------------------- | ------------- | ------- | --------- | ------ |
| SimpleToken_evm            | 1,528,362,837 | -       | 0.1%      | 6,934  |
| simple_token_no_alloc_rust | 1,586,513,739 | +3.8%   | 0.0%      | 6,934  |
| SimpleToken_pvm            | 1,611,833,676 | +5.5%   | 0.7%      | 6,934  |
| simple_token_ink           | 1,847,374,728 | +20.9%  | 11.6%     | 17,191 |


## SimpleToken - mint

| Implementation             | ref_time      | vs Best | % metered | pov    |
| -------------------------- | ------------- | ------- | --------- | ------ |
| SimpleToken_evm            | 1,431,551,949 | -       | 36.2%     | 49,623 |
| SimpleToken_pvm            | 1,497,733,197 | +4.6%   | 39.0%     | 54,834 |
| simple_token_no_alloc_rust | 1,505,548,558 | +5.2%   | 39.3%     | 53,919 |
| simple_token_ink           | 1,688,260,258 | +17.9%  | 45.9%     | 56,874 |


## SimpleToken - transfer

| Implementation             | ref_time      | vs Best | % metered | pov    |
| -------------------------- | ------------- | ------- | --------- | ------ |
| SimpleToken_evm            | 1,461,245,351 | -       | 37.5%     | 49,655 |
| SimpleToken_pvm            | 1,552,049,771 | +6.2%   | 41.1%     | 54,898 |
| simple_token_no_alloc_rust | 1,562,094,984 | +6.9%   | 41.5%     | 53,951 |
| simple_token_ink           | 2,014,032,325 | +37.8%  | 54.6%     | 77,452 |


## TetherToken - approve

| Implementation  | ref_time      | vs Best | % metered | pov    |
| --------------- | ------------- | ------- | --------- | ------ |
| TetherToken_evm | 1,310,742,444 | -       | 30.3%     | 39,366 |
| TetherToken_pvm | 1,476,627,717 | +12.7%  | 38.1%     | 92,974 |


## TetherToken - deploy

| Implementation  | ref_time      | vs Best | % metered | pov     |
| --------------- | ------------- | ------- | --------- | ------- |
| TetherToken_evm | 3,782,609,127 | -       | 57.3%     | 171,238 |
| TetherToken_pvm | 4,526,578,724 | +19.7%  | 47.7%     | 150,564 |


## TetherToken - transfer

| Implementation  | ref_time      | vs Best | % metered | pov     |
| --------------- | ------------- | ------- | --------- | ------- |
| TetherToken_evm | 1,851,902,138 | -       | 50.7%     | 101,100 |
| TetherToken_pvm | 2,061,683,989 | +11.3%  | 55.7%     | 154,676 |


## TetherToken - transferFrom

| Implementation  | ref_time      | vs Best | % metered | pov     |
| --------------- | ------------- | ------- | --------- | ------- |
| TetherToken_evm | 2,159,349,827 | -       | 57.7%     | 121,806 |
| TetherToken_pvm | 2,422,169,866 | +12.2%  | 62.3%     | 175,414 |


## WETH9 - deploy

| Implementation | ref_time      | vs Best | % metered | pov    |
| -------------- | ------------- | ------- | --------- | ------ |
| WETH9_evm      | 2,287,529,426 | -       | 32.1%     | 68,572 |
| WETH9_pvm      | 2,560,284,227 | +11.9%  | 29.8%     | 68,476 |


## WETH9 - deposit

| Implementation | ref_time      | vs Best | % metered | pov    |
| -------------- | ------------- | ------- | --------- | ------ |
| WETH9_evm      | 1,186,865,805 | -       | 23.1%     | 28,906 |
| WETH9_pvm      | 1,260,474,876 | +6.2%   | 27.6%     | 46,586 |


## WETH9 - transfer

| Implementation | ref_time      | vs Best | % metered | pov    |
| -------------- | ------------- | ------- | --------- | ------ |
| WETH9_evm      | 1,535,020,402 | -       | 40.5%     | 59,944 |
| WETH9_pvm      | 1,656,462,407 | +7.9%   | 44.9%     | 77,624 |


## WETH9 - withdraw

| Implementation | ref_time      | vs Best | % metered | pov    |
| -------------- | ------------- | ------- | --------- | ------ |
| WETH9_evm      | 1,725,253,761 | -       | 47.1%     | 44,893 |
| WETH9_pvm      | 1,815,003,975 | +5.2%   | 49.7%     | 62,605 |


