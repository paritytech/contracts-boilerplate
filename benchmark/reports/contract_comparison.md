# Revive Contract Comparison

Generated on: 2026-01-13

Comparison of gas usage across different contract implementations.

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
| TetherToken_evm | 2,159,300,519 | -       | 57.7%     | 121,794 |
| TetherToken_pvm | 2,422,120,558 | +12.2%  | 62.3%     | 175,402 |


