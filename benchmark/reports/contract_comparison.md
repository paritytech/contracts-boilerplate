# Revive Contract Comparison

Generated on: 2025-12-19

Comparison of gas usage across different contract implementations.

## Fibonacci - deploy

| Implementation      | ref_time      | vs Best | % metered | pov    |
| ------------------- | ------------- | ------- | --------- | ------ |
| Fibonacci_evm       | 1,525,942,458 | -       | 0.1%      | 6,934  |
| fibonacci_rust      | 1,526,169,201 | +0.0%   | 0.0%      | 6,934  |
| fibonacci_u128_rust | 1,529,112,837 | +0.2%   | 0.0%      | 6,934  |
| fibonacci_u256_rust | 1,546,331,525 | +1.3%   | 0.0%      | 6,934  |
| Fibonacci_pvm       | 1,570,958,680 | +3.0%   | 0.7%      | 6,934  |
| fibonacci_ink       | 1,732,998,392 | +13.6%  | 10.7%     | 17,191 |


## Fibonacci - fib_10

| Implementation      | ref_time      | vs Best | % metered | pov    |
| ------------------- | ------------- | ------- | --------- | ------ |
| fibonacci_rust      | 1,023,353,284 | -       | 10.8%     | 8,979  |
| fibonacci_u128_rust | 1,116,568,906 | +9.1%   | 18.2%     | 9,165  |
| fibonacci_ink       | 1,362,985,528 | +33.2%  | 33.0%     | 30,825 |
| Fibonacci_evm       | 1,533,530,869 | +49.9%  | 40.5%     | 8,432  |
| Fibonacci_pvm       | 1,619,349,144 | +58.2%  | 43.6%     | 11,146 |
| fibonacci_u256_rust | 2,540,983,982 | +148.3% | 64.1%     | 10,253 |


## SimpleToken - deploy

| Implementation             | ref_time      | vs Best | % metered | pov    |
| -------------------------- | ------------- | ------- | --------- | ------ |
| SimpleToken_evm            | 1,528,362,837 | -       | 0.1%      | 6,934  |
| simple_token_no_alloc_rust | 1,586,671,999 | +3.8%   | 0.0%      | 6,934  |
| SimpleToken_pvm            | 1,610,852,522 | +5.4%   | 0.6%      | 6,934  |
| simple_token_ink           | 1,864,343,762 | +22.0%  | 11.5%     | 17,191 |


## SimpleToken - mint

| Implementation             | ref_time      | vs Best | % metered | pov    |
| -------------------------- | ------------- | ------- | --------- | ------ |
| SimpleToken_evm            | 1,431,551,949 | -       | 36.2%     | 49,623 |
| SimpleToken_pvm            | 1,497,388,823 | +4.6%   | 39.0%     | 54,800 |
| simple_token_no_alloc_rust | 1,505,513,738 | +5.2%   | 39.3%     | 53,929 |
| simple_token_ink           | 1,731,583,752 | +21.0%  | 47.2%     | 57,968 |


## SimpleToken - transfer

| Implementation             | ref_time      | vs Best | % metered | pov    |
| -------------------------- | ------------- | ------- | --------- | ------ |
| SimpleToken_evm            | 1,461,245,351 | -       | 37.5%     | 49,655 |
| SimpleToken_pvm            | 1,554,253,981 | +6.4%   | 41.2%     | 54,961 |
| simple_token_no_alloc_rust | 1,562,060,164 | +6.9%   | 41.5%     | 53,961 |
| simple_token_ink           | 2,056,715,829 | +40.8%  | 55.6%     | 78,546 |


