# Revive Contract Comparison

Generated on: 2026-03-03
resolc: Solidity frontend for the revive compiler version 1.0.0+commit.b080c1d.llvm-18.1.8

Comparison of gas usage across different contract implementations.

## Chain: eth-rpc

### Fibonacci - deploy

| Implementation                      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ----------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| fibonacci_u32_rust                  | 1,521,215,663 | -       | 49,230           | -                 | 0.0%      | 6,934  |
| fibonacci_u128_rust                 | 1,522,497,569 | +0.1%   | 49,230           | -                 | 0.0%      | 6,934  |
| Fibonacci_evm                       | 1,522,548,118 | +0.1%   | 1,460,815        | +2867.3%          | 0.1%      | 6,934  |
| fibonacci_u32_macro_bump_alloc_rust | 1,524,333,385 | +0.2%   | 49,230           | -                 | 0.0%      | 6,934  |
| fibonacci_u32_macro_no_alloc_rust   | 1,525,061,381 | +0.3%   | 49,230           | -                 | 0.0%      | 6,934  |
| fibonacci_u256_rust                 | 1,533,021,859 | +0.8%   | 49,230           | -                 | 0.0%      | 6,934  |
| Fibonacci_pvm                       | 1,545,253,868 | +1.6%   | 9,559,167        | +19317.4%         | 0.6%      | 6,934  |
| fibonacci_u32_ink                   | 1,704,689,578 | +12.1%  | 176,480,575      | +358381.8%        | 10.4%     | 17,191 |


### SimpleToken - deploy

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| SimpleToken_evm                         | 1,527,773,166 | -       | 1,526,587        | +3000.9%          | 0.1%      | 6,934  |
| simple_token_u32_no_alloc_rust          | 1,552,503,665 | +1.6%   | 49,230           | -                 | 0.0%      | 6,934  |
| simple_token_u128_no_alloc_rust         | 1,564,040,819 | +2.4%   | 49,230           | -                 | 0.0%      | 6,934  |
| simple_token_u256_no_alloc_rust         | 1,564,942,901 | +2.4%   | 49,230           | -                 | 0.0%      | 6,934  |
| simple_token_u256_macro_no_alloc_rust   | 1,577,097,269 | +3.2%   | 49,230           | -                 | 0.0%      | 6,934  |
| simple_token_u256_macro_bump_alloc_rust | 1,587,621,559 | +3.9%   | 49,230           | -                 | 0.0%      | 6,934  |
| SimpleToken_pvm                         | 1,612,343,728 | +5.5%   | 10,100,697       | +20417.4%         | 0.6%      | 6,934  |
| simple_token_u256_ink                   | 1,849,642,500 | +21.1%  | 200,079,729      | +406318.3%        | 10.8%     | 17,191 |


