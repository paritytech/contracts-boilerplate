# Revive Contract Comparison

Generated on: 2026-01-27

Comparison of gas usage across different contract implementations.

## Chain: Geth

### CoinTool_App - deploy

| Implementation   | gas_used | vs Best | % metered |
| ---------------- | -------- | ------- | --------- |
| CoinTool_App_evm | 756,027  | -       | 3.0%      |

### CoinTool_App - t

| Implementation   | gas_used   | vs Best | % metered |
| ---------------- | ---------- | ------- | --------- |
| CoinTool_App_evm | 11,604,727 | -       | 4.5%      |

### FiatTokenProxy - approve

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 55,331   | -       | 100.8%    |

### FiatTokenProxy - changeAdmin

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 28,326   | -       | 15.4%     |

### FiatTokenProxy - configureMinter

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 79,482   | -       | 99.7%     |

### FiatTokenProxy - deploy

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 394,714  | -       | 6.3%      |

### FiatTokenProxy - initialize

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 212,439  | -       | 88.0%     |

### FiatTokenProxy - mint

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 83,152   | -       | 81.1%     |

### FiatTokenProxy - transfer

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 38,065   | -       | 46.1%     |

### FiatTokenProxy - transferFrom

| Implementation     | gas_used | vs Best | % metered |
| ------------------ | -------- | ------- | --------- |
| FiatTokenProxy_evm | 43,789   | -       | 57.8%     |

### FiatTokenV2_2 - deploy

| Implementation    | gas_used  | vs Best | % metered |
| ----------------- | --------- | ------- | --------- |
| FiatTokenV2_2_evm | 3,412,411 | -       | 0.2%      |

### Fibonacci - deploy

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Fibonacci_evm  | 112,683  | -       | 0.1%      |

### Fibonacci - fib_10

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| Fibonacci_evm  | 47,664   | -       | 0.2%      |

### SimpleToken - deploy

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| SimpleToken_evm | 152,967  | -       | 0.1%      |

### SimpleToken - mint

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| SimpleToken_evm | 68,105   | -       | 35.3%     |

### SimpleToken - transfer

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| SimpleToken_evm | 46,257   | -       | 51.9%     |

### TetherToken - approve

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| TetherToken_evm | 48,276   | -       | 49.7%     |

### TetherToken - deploy

| Implementation  | gas_used  | vs Best | % metered |
| --------------- | --------- | ------- | --------- |
| TetherToken_evm | 1,208,745 | -       | 0.3%      |

### TetherToken - transfer

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| TetherToken_evm | 37,754   | -       | 5.6%      |

### TetherToken - transferFrom

| Implementation  | gas_used | vs Best | % metered |
| --------------- | -------- | ------- | --------- |
| TetherToken_evm | 43,290   | -       | 4.9%      |

### WETH9 - deploy

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| WETH9_evm      | 487,741  | -       | 4.6%      |

### WETH9 - deposit

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| WETH9_evm      | 44,978   | -       | 52.5%     |

### WETH9 - transfer

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| WETH9_evm      | 26,613   | -       | 7.9%      |

### WETH9 - withdraw

| Implementation | gas_used | vs Best | % metered |
| -------------- | -------- | ------- | --------- |
| WETH9_evm      | 34,953   | -       | 38.9%     |

### XENCrypto - deploy

| Implementation | gas_used  | vs Best | % metered |
| -------------- | --------- | ------- | --------- |
| XENCrypto_evm  | 2,221,205 | -       | 1.2%      |

## Chain: eth-rpc

### CoinTool_App - deploy

| Implementation   | ref_time      | vs Best | % metered | pov    |
| ---------------- | ------------- | ------- | --------- | ------ |
| CoinTool_App_evm | 1,812,498,168 | -       | 13.5%     | 27,480 |
| CoinTool_App_pvm | 2,352,084,109 | +29.8%  | 15.8%     | 27,448 |

### CoinTool_App - t

| Implementation   | ref_time        | vs Best | % metered | pov        |
| ---------------- | --------------- | ------- | --------- | ---------- |
| CoinTool_App_pvm | 119,832,667,856 | -       | 99.2%     | 10,828,951 |
| CoinTool_App_evm | 191,611,648,659 | +59.9%  | 99.5%     | 9,138,203  |

### FiatTokenProxy - approve

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 1,466,337,726 | -       | 37.7%     | 54,554  |
| FiatTokenProxy_pvm | 1,737,192,853 | +18.5%  | 47.4%     | 167,787 |

### FiatTokenProxy - changeAdmin

| Implementation     | ref_time      | vs Best | % metered | pov    |
| ------------------ | ------------- | ------- | --------- | ------ |
| FiatTokenProxy_evm | 1,254,022,241 | -       | 27.2%     | 39,299 |
| FiatTokenProxy_pvm | 1,307,939,666 | +4.3%   | 30.2%     | 48,987 |

### FiatTokenProxy - configureMinter

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 1,779,882,018 | -       | 48.7%     | 85,389  |
| FiatTokenProxy_pvm | 2,051,259,329 | +15.2%  | 55.5%     | 198,590 |

### FiatTokenProxy - deploy

| Implementation     | ref_time      | vs Best | % metered | pov    |
| ------------------ | ------------- | ------- | --------- | ------ |
| FiatTokenProxy_evm | 1,955,027,326 | -       | 21.0%     | 31,458 |
| FiatTokenProxy_pvm | 2,111,820,114 | +8.0%   | 20.9%     | 31,458 |

### FiatTokenProxy - initialize

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 3,467,091,226 | -       | 73.5%     | 230,401 |
| FiatTokenProxy_pvm | 3,904,751,659 | +12.6%  | 76.5%     | 343,346 |

### FiatTokenProxy - mint

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 2,414,524,981 | -       | 62.2%     | 147,123 |
| FiatTokenProxy_pvm | 2,825,972,306 | +17.0%  | 67.7%     | 260,293 |

### FiatTokenProxy - transfer

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 2,253,109,736 | -       | 59.5%     | 136,898 |
| FiatTokenProxy_pvm | 2,630,114,247 | +16.7%  | 65.3%     | 250,131 |

### FiatTokenProxy - transferFrom

| Implementation     | ref_time      | vs Best | % metered | pov     |
| ------------------ | ------------- | ------- | --------- | ------- |
| FiatTokenProxy_evm | 2,736,718,638 | -       | 66.6%     | 178,150 |
| FiatTokenProxy_pvm | 3,239,499,195 | +18.4%  | 71.8%     | 291,383 |

### FiatTokenV2_2 - deploy

| Implementation    | ref_time      | vs Best | % metered | pov    |
| ----------------- | ------------- | ------- | --------- | ------ |
| FiatTokenV2_2_evm | 2,418,189,787 | -       | 27.1%     | 58,283 |
| FiatTokenV2_2_pvm | 3,837,783,006 | +58.7%  | 17.8%     | 58,477 |

### Fibonacci - deploy

| Implementation      | ref_time      | vs Best | % metered | pov    |
| ------------------- | ------------- | ------- | --------- | ------ |
| fibonacci_rust      | 1,520,820,013 | -       | 0.0%      | 6,934  |
| fibonacci_u128_rust | 1,522,022,789 | +0.1%   | 0.0%      | 6,934  |
| Fibonacci_evm       | 1,523,685,771 | +0.2%   | 0.1%      | 6,934  |
| fibonacci_u256_rust | 1,528,369,015 | +0.5%   | 0.0%      | 6,934  |
| Fibonacci_pvm       | 1,552,523,142 | +2.1%   | 0.7%      | 6,934  |
| fibonacci_ink       | 1,720,504,670 | +13.1%  | 10.8%     | 17,191 |

### Fibonacci - fib_10

| Implementation      | ref_time      | vs Best | % metered | pov    |
| ------------------- | ------------- | ------- | --------- | ------ |
| fibonacci_rust      | 1,003,955,988 | -       | 9.0%      | 8,641  |
| fibonacci_u128_rust | 1,096,520,800 | +9.2%   | 16.7%     | 8,717  |
| fibonacci_ink       | 1,151,214,899 | +14.7%  | 20.7%     | 19,791 |
| Fibonacci_evm       | 1,317,572,855 | +31.2%  | 30.7%     | 8,432  |
| Fibonacci_pvm       | 1,365,307,158 | +36.0%  | 33.1%     | 9,978  |
| fibonacci_u256_rust | 2,512,807,559 | +150.3% | 63.7%     | 9,118  |

### SimpleToken - deploy

| Implementation             | ref_time      | vs Best | % metered | pov    |
| -------------------------- | ------------- | ------- | --------- | ------ |
| SimpleToken_evm            | 1,526,683,194 | -       | 0.1%      | 6,934  |
| simple_token_no_alloc_rust | 1,586,513,739 | +3.9%   | 0.0%      | 6,934  |
| SimpleToken_pvm            | 1,608,242,984 | +5.3%   | 0.7%      | 6,934  |
| simple_token_ink           | 1,847,374,728 | +21.0%  | 11.6%     | 17,191 |

### SimpleToken - mint

| Implementation             | ref_time      | vs Best | % metered | pov    |
| -------------------------- | ------------- | ------- | --------- | ------ |
| SimpleToken_evm            | 1,428,980,355 | -       | 36.1%     | 49,623 |
| SimpleToken_pvm            | 1,495,226,765 | +4.6%   | 38.9%     | 54,632 |
| simple_token_no_alloc_rust | 1,505,548,558 | +5.4%   | 39.3%     | 53,919 |
| simple_token_ink           | 1,688,260,258 | +18.1%  | 45.9%     | 56,874 |

### SimpleToken - transfer

| Implementation             | ref_time      | vs Best | % metered | pov    |
| -------------------------- | ------------- | ------- | --------- | ------ |
| SimpleToken_evm            | 1,460,054,677 | -       | 37.4%     | 49,655 |
| SimpleToken_pvm            | 1,553,568,823 | +6.4%   | 41.2%     | 54,793 |
| simple_token_no_alloc_rust | 1,562,094,984 | +7.0%   | 41.5%     | 53,951 |
| simple_token_ink           | 2,014,032,325 | +37.9%  | 54.6%     | 77,452 |

### TetherToken - approve

| Implementation  | ref_time      | vs Best | % metered | pov    |
| --------------- | ------------- | ------- | --------- | ------ |
| TetherToken_evm | 1,307,318,598 | -       | 30.1%     | 39,366 |
| TetherToken_pvm | 1,477,151,338 | +13.0%  | 38.2%     | 93,921 |

### TetherToken - deploy

| Implementation  | ref_time      | vs Best | % metered | pov     |
| --------------- | ------------- | ------- | --------- | ------- |
| TetherToken_evm | 3,536,168,883 | -       | 54.5%     | 150,692 |
| TetherToken_pvm | 4,547,576,316 | +28.6%  | 47.6%     | 150,951 |

### TetherToken - transfer

| Implementation  | ref_time      | vs Best | % metered | pov     |
| --------------- | ------------- | ------- | --------- | ------- |
| TetherToken_evm | 1,850,629,748 | -       | 50.6%     | 101,132 |
| TetherToken_pvm | 2,055,388,174 | +11.1%  | 55.6%     | 155,623 |

### TetherToken - transferFrom

| Implementation  | ref_time      | vs Best | % metered | pov     |
| --------------- | ------------- | ------- | --------- | ------- |
| TetherToken_evm | 2,150,947,725 | -       | 57.5%     | 121,806 |
| TetherToken_pvm | 2,415,750,101 | +12.3%  | 62.2%     | 176,297 |

### WETH9 - deploy

| Implementation | ref_time      | vs Best | % metered | pov    |
| -------------- | ------------- | ------- | --------- | ------ |
| WETH9_evm      | 2,275,464,063 | -       | 31.9%     | 68,572 |
| WETH9_pvm      | 2,549,508,821 | +12.0%  | 29.8%     | 68,476 |

### WETH9 - deposit

| Implementation | ref_time      | vs Best | % metered | pov    |
| -------------- | ------------- | ------- | --------- | ------ |
| WETH9_evm      | 1,188,685,343 | -       | 23.2%     | 28,906 |
| WETH9_pvm      | 1,259,534,400 | +6.0%   | 27.5%     | 46,070 |

### WETH9 - transfer

| Implementation | ref_time      | vs Best | % metered | pov    |
| -------------- | ------------- | ------- | --------- | ------ |
| WETH9_evm      | 1,532,612,772 | -       | 40.4%     | 59,976 |
| WETH9_pvm      | 1,655,399,731 | +8.0%   | 44.8%     | 77,172 |

### WETH9 - withdraw

| Implementation | ref_time      | vs Best | % metered | pov    |
| -------------- | ------------- | ------- | --------- | ------ |
| WETH9_evm      | 1,723,148,219 | -       | 47.0%     | 44,893 |
| WETH9_pvm      | 1,814,506,569 | +5.3%   | 49.7%     | 62,089 |

### XENCrypto - deploy

| Implementation | ref_time      | vs Best | % metered | pov    |
| -------------- | ------------- | ------- | --------- | ------ |
| XENCrypto_evm  | 2,350,323,858 | -       | 28.4%     | 58,283 |
| XENCrypto_pvm  | 4,190,424,438 | +78.3%  | 21.2%     | 58,219 |
