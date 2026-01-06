# Revive Contract Comparison

Generated on: 2025-12-19

Comparison of gas usage across different contract implementations.

## Fibonacci - deploy

| Implementation      | ref_time      | vs Best | % metered | pov    |
| ------------------- | ------------- | ------- | --------- | ------ |
| fibonacci_rust      | 1,520,994,099 | -       | 0.0%      | 6,934  |
| fibonacci_u128_rust | 1,522,196,875 | +0.1%   | 0.0%      | 6,934  |
| Fibonacci_evm       | 1,525,205,124 | +0.3%   | 0.1%      | 6,934  |
| fibonacci_u256_rust | 1,528,558,927 | +0.5%   | 0.0%      | 6,934  |
| Fibonacci_pvm       | 1,557,918,056 | +2.4%   | 0.7%      | 6,934  |
| fibonacci_ink       | 1,718,162,422 | +13.0%  | 10.8%     | 17,191 |

## Fibonacci - fib_10

| Implementation      | ref_time      | vs Best | % metered | pov    |
| ------------------- | ------------- | ------- | --------- | ------ |
| fibonacci_rust      | 1,003,971,839 | -       | 9.1%      | 8,652  |
| fibonacci_u128_rust | 1,096,536,651 | +9.2%   | 16.7%     | 8,728  |
| fibonacci_ink       | 1,149,918,571 | +14.5%  | 20.6%     | 19,643 |
| Fibonacci_evm       | 1,519,150,709 | +51.3%  | 39.9%     | 8,432  |
| Fibonacci_pvm       | 1,587,091,712 | +58.1%  | 42.5%     | 10,322 |
| fibonacci_u256_rust | 2,512,824,851 | +150.3% | 63.7%     | 9,130  |

## SimpleToken - deploy

| Implementation             | ref_time      | vs Best | % metered | pov    |
| -------------------------- | ------------- | ------- | --------- | ------ |
| SimpleToken_evm            | 1,528,362,837 | -       | 0.1%      | 6,934  |
| simple_token_no_alloc_rust | 1,586,671,999 | +3.8%   | 0.0%      | 6,934  |
| SimpleToken_pvm            | 1,610,852,522 | +5.4%   | 0.6%      | 6,934  |
| simple_token_ink           | 1,843,184,400 | +20.6%  | 11.7%     | 17,191 |

## SimpleToken - mint

| Implementation             | ref_time      | vs Best | % metered | pov    |
| -------------------------- | ------------- | ------- | --------- | ------ |
| SimpleToken_evm            | 1,431,551,949 | -       | 36.2%     | 49,623 |
| SimpleToken_pvm            | 1,497,388,823 | +4.6%   | 39.0%     | 54,800 |
| simple_token_no_alloc_rust | 1,505,513,738 | +5.2%   | 39.3%     | 53,929 |
| simple_token_ink           | 1,687,565,485 | +17.9%  | 45.9%     | 56,631 |

## SimpleToken - transfer

| Implementation             | ref_time      | vs Best | % metered | pov    |
| -------------------------- | ------------- | ------- | --------- | ------ |
| SimpleToken_evm            | 1,461,245,351 | -       | 37.5%     | 49,655 |
| SimpleToken_pvm            | 1,554,253,981 | +6.4%   | 41.2%     | 54,961 |
| simple_token_no_alloc_rust | 1,562,060,164 | +6.9%   | 41.5%     | 53,961 |
| simple_token_ink           | 2,012,500,642 | +37.7%  | 54.6%     | 77,209 |
