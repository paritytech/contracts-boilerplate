# Revive Contract Comparison

Generated on: 2026-06-16

### Benchmark Environment

- **Chain:** Development | **Runtime:** revive-dev-runtime@0 | **Node:** Substrate Node 0.0.0-20311a9465b | **resolc:** 1.2.0+commit.9b22bcd | **solc:** 0.8.30+commit.73712a01

Comparison of gas usage across different contract implementations.

## Chain: eth-rpc

### BenchERC1155 - create

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC1155_evm         | 1,436,643,351 | -       | 528,333,191      | -                 | 36.8%     | 50,438      | 59,113            |
| BenchERC1155_pvm         | 1,584,034,195 | +10.3%  | 675,724,035      | +27.9%            | 42.7%     | 60,171      | 68,846            |
| bench_erc1155_dsl_rust   | 1,661,790,069 | +15.7%  | 753,479,909      | +42.6%            | 45.3%     | 44,836      | 53,511            |
| bench_erc1155_macro_rust | 1,699,332,636 | +18.3%  | 791,022,476      | +49.7%            | 46.5%     | 58,506      | 67,181            |


### BenchERC1155 - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC1155_evm         | 1,530,467,862 | -       | 1,425,734        | +2022.3%          | 0.1%      | 6,934       | 15,609            |
| bench_erc1155_dsl_rust   | 1,604,699,459 | +4.9%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| BenchERC1155_pvm         | 1,698,634,479 | +11.0%  | 12,726,278       | +18843.6%         | 0.7%      | 6,934       | 15,609            |
| bench_erc1155_macro_rust | 1,707,889,631 | +11.6%  | 48,284,161       | +71772.8%         | 2.8%      | 6,934       | 15,609            |


### BenchERC20 - deploy

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC20_evm         | 1,897,343,440 | -       | 369,074,448      | -                 | 19.5%     | 27,448      | 36,123            |
| bench_erc20_dsl_rust   | 2,068,659,885 | +9.0%   | 479,545,421      | +29.9%            | 23.2%     | 27,448      | 36,123            |
| BenchERC20_pvm         | 2,124,194,319 | +12.0%  | 457,959,539      | +24.1%            | 21.6%     | 27,448      | 36,123            |
| bench_erc20_macro_rust | 2,182,013,272 | +15.0%  | 556,851,342      | +50.9%            | 25.5%     | 27,448      | 36,123            |


### BenchERC20 - transfer

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC20_evm         | 1,440,616,064 | -       | 531,873,736      | -                 | 36.9%     | 50,353      | 59,028            |
| BenchERC20_pvm         | 1,573,050,676 | +9.2%   | 664,308,348      | +24.9%            | 42.2%     | 59,079      | 67,754            |
| bench_erc20_macro_rust | 1,702,639,976 | +18.2%  | 793,897,648      | +49.3%            | 46.6%     | 56,529      | 65,204            |
| bench_erc20_dsl_rust   | 1,761,283,602 | +22.3%  | 852,541,274      | +60.3%            | 48.4%     | 54,291      | 62,966            |


### BenchERC721 - deploy

| Implementation          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC721_evm         | 1,529,619,794 | -       | 1,415,230        | +2006.6%          | 0.1%      | 6,934       | 15,609            |
| bench_erc721_dsl_rust   | 1,579,685,288 | +3.3%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| bench_erc721_macro_rust | 1,645,166,616 | +7.6%   | 35,251,241       | +52372.8%         | 2.1%      | 6,934       | 15,609            |
| BenchERC721_pvm         | 1,658,705,226 | +8.4%   | 12,726,278       | +18843.6%         | 0.8%      | 6,934       | 15,609            |


### BenchERC721 - mint

| Implementation          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC721_evm         | 1,568,591,021 | -       | 660,280,861      | -                 | 42.1%     | 70,964      | 79,639            |
| BenchERC721_pvm         | 1,681,840,910 | +7.2%   | 773,530,750      | +17.2%            | 46.0%     | 78,174      | 86,849            |
| bench_erc721_dsl_rust   | 1,690,319,954 | +7.8%   | 782,009,794      | +18.4%            | 46.3%     | 53,540      | 62,215            |
| bench_erc721_macro_rust | 1,745,877,583 | +11.3%  | 837,567,423      | +26.9%            | 48.0%     | 75,935      | 84,610            |


### BenchStorage - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchStorage_evm         | 1,519,834,394 | -       | 1,294,030        | +1826.2%          | 0.1%      | 6,934       | 15,609            |
| bench_storage_dsl_rust   | 1,539,530,537 | +1.3%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| bench_storage_macro_rust | 1,562,048,650 | +2.8%   | 10,730,541       | +15872.8%         | 0.7%      | 6,934       | 15,609            |
| BenchStorage_pvm         | 1,571,772,590 | +3.4%   | 12,256,018       | +18143.6%         | 0.8%      | 6,934       | 15,609            |


### BenchStorage - read_100

| Implementation           | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | -------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchStorage_evm         | 1,008,847,950  | -       | 100,105,622      | -                 | 9.9%      | 8,793       | 17,468            |
| BenchStorage_pvm         | 2,569,087,316  | +154.7% | 1,660,344,988    | +1558.6%          | 64.6%     | 11,363      | 20,038            |
| bench_storage_dsl_rust   | 8,077,470,094  | +700.7% | 7,168,727,766    | +7061.2%          | 88.7%     | 1,035,818   | 1,044,493         |
| bench_storage_macro_rust | 10,918,102,825 | +982.2% | 10,009,360,497   | +9898.8%          | 91.7%     | 1,036,554   | 1,045,229         |


### Computation - deploy

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Computation_evm        | 1,516,735,684 | -       | 1,255,650        | +1769.1%          | 0.1%      | 6,934       | 15,609            |
| computation_macro_rust | 1,527,850,488 | +0.7%   | 2,400,221        | +3472.8%          | 0.2%      | 6,934       | 15,609            |
| computation_dsl_rust   | 1,535,552,108 | +1.2%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| Computation_pvm        | 1,565,904,543 | +3.2%   | 12,524,738       | +18543.6%         | 0.8%      | 6,934       | 15,609            |


### Computation - odd_product_10

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Computation_evm        | 924,255,771   | -       | 15,945,611       | -                 | 1.7%      | 8,504       | 17,179            |
| computation_macro_rust | 932,900,827   | +0.9%   | 24,590,667       | +54.2%            | 2.6%      | 9,149       | 17,824            |
| Computation_pvm        | 1,004,231,910 | +8.7%   | 95,921,750       | +501.6%           | 9.6%      | 10,883      | 19,558            |
| computation_dsl_rust   | 1,009,172,246 | +9.2%   | 100,862,086      | +532.5%           | 10.0%     | 9,772       | 18,447            |


### Computation - triangle_10

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Computation_evm        | 921,088,565   | -       | 12,778,405       | -                 | 1.4%      | 8,504       | 17,179            |
| computation_macro_rust | 931,422,867   | +1.1%   | 23,112,707       | +80.9%            | 2.5%      | 9,149       | 17,824            |
| Computation_pvm        | 994,087,730   | +7.9%   | 85,777,570       | +571.3%           | 8.6%      | 10,883      | 19,558            |
| computation_dsl_rust   | 1,008,298,906 | +9.5%   | 99,988,746       | +682.5%           | 9.9%      | 9,772       | 18,447            |


### Fibonacci - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_evm            | 1,515,072,570 | -       | 1,235,450        | +1739.0%          | 0.1%      | 6,934       | 15,609            |
| fibonacci_u32_dsl_rust   | 1,520,637,026 | +0.4%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| fibonacci_u32_macro_rust | 1,522,293,573 | +0.5%   | 2,400,221        | +3472.8%          | 0.2%      | 6,934       | 15,609            |
| Fibonacci_pvm            | 1,540,299,107 | +1.7%   | 11,852,938       | +17543.6%         | 0.8%      | 6,934       | 15,609            |


### Fibonacci - fib_10

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| fibonacci_u32_macro_rust | 1,034,590,425 | -       | 126,280,265      | -                 | 12.2%     | 8,804       | 17,479            |
| Fibonacci_evm            | 1,040,555,142 | +0.6%   | 132,244,982      | +4.7%             | 12.7%     | 8,404       | 17,079            |
| fibonacci_u32_dsl_rust   | 1,053,048,912 | +1.8%   | 144,738,752      | +14.6%            | 13.7%     | 8,846       | 17,521            |
| Fibonacci_pvm            | 1,330,329,549 | +28.6%  | 422,019,389      | +234.2%           | 31.7%     | 9,335       | 18,010            |


### Fibonacci_u256 - deploy

| Implementation          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm | 1,514,289,738 | -       | 1,225,754        | -                 | 0.1%      | 6,934       | 15,609            |
| Fibonacci_u256_evm      | 1,514,354,974 | +0.0%   | 1,226,562        | +0.1%             | 0.1%      | 6,934       | 15,609            |
| Fibonacci_u256_iter_pvm | 1,542,167,519 | +1.8%   | 11,852,938       | +867.0%           | 0.8%      | 6,934       | 15,609            |
| Fibonacci_u256_pvm      | 1,543,246,688 | +1.9%   | 11,852,938       | +867.0%           | 0.8%      | 6,934       | 15,609            |


### Fibonacci_u256 - fib_10

| Implementation          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm | 914,440,753   | -       | 6,130,593        | -                 | 0.7%      | 8,356       | 17,031            |
| Fibonacci_u256_iter_pvm | 960,829,757   | +5.1%   | 52,519,597       | +756.7%           | 5.5%      | 9,451       | 18,126            |
| Fibonacci_u256_evm      | 1,018,231,393 | +11.4%  | 109,921,233      | +1693.0%          | 10.8%     | 8,360       | 17,035            |
| Fibonacci_u256_pvm      | 1,636,032,328 | +78.9%  | 727,722,168      | +11770.3%         | 44.5%     | 9,518       | 18,193            |


### Fibonacci_u256 - fib_15

| Implementation          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm | 916,859,063   | -       | 8,548,903        | -                 | 0.9%      | 8,356       | 17,031            |
| Fibonacci_u256_iter_pvm | 983,670,957   | +7.3%   | 75,360,797       | +781.5%           | 7.7%      | 9,451       | 18,126            |
| Fibonacci_u256_evm      | 2,123,898,327 | +131.6% | 1,215,588,167    | +14119.2%         | 57.2%     | 8,360       | 17,035            |
| Fibonacci_u256_pvm      | 8,935,676,768 | +874.6% | 8,027,366,608    | +93799.4%         | 89.8%     | 9,518       | 18,193            |


### Fibonacci_u256 - fib_5

| Implementation          | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm | 912,022,443 | -       | 3,712,283        | -                 | 0.4%      | 8,356       | 17,031            |
| Fibonacci_u256_evm      | 918,511,210 | +0.7%   | 10,201,050       | +174.8%           | 1.1%      | 8,360       | 17,035            |
| Fibonacci_u256_iter_pvm | 937,988,557 | +2.8%   | 29,678,397       | +699.5%           | 3.2%      | 9,451       | 18,126            |
| Fibonacci_u256_pvm      | 977,601,148 | +7.2%   | 69,290,988       | +1766.5%          | 7.1%      | 9,518       | 18,193            |


### SimpleToken - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| SimpleToken_evm              | 1,520,388,900 | -       | 1,300,898        | +1836.4%          | 0.1%      | 6,934       | 15,609            |
| simple_token_u256_dsl_rust   | 1,565,060,132 | +2.9%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| SimpleToken_pvm              | 1,610,327,649 | +5.9%   | 12,524,738       | +18543.6%         | 0.8%      | 6,934       | 15,609            |
| simple_token_u256_macro_rust | 1,611,090,030 | +6.0%   | 33,034,301       | +49072.8%         | 2.1%      | 6,934       | 15,609            |


### SimpleToken - mint

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| SimpleToken_evm              | 1,413,560,806 | -       | 504,818,478      | -                 | 35.7%     | 49,919      | 58,594            |
| SimpleToken_pvm              | 1,501,001,506 | +6.2%   | 592,259,178      | +17.3%            | 39.5%     | 54,768      | 63,443            |
| simple_token_u256_macro_rust | 1,631,648,715 | +15.4%  | 722,906,387      | +43.2%            | 44.3%     | 53,542      | 62,217            |
| simple_token_u256_dsl_rust   | 1,664,032,492 | +17.7%  | 755,290,164      | +49.6%            | 45.4%     | 52,731      | 61,406            |


### SimpleToken - transfer

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| SimpleToken_evm              | 1,439,582,017 | -       | 530,839,689      | -                 | 36.9%     | 49,951      | 58,626            |
| SimpleToken_pvm              | 1,562,525,735 | +8.5%   | 653,783,407      | +23.2%            | 41.8%     | 54,929      | 63,604            |
| simple_token_u256_macro_rust | 1,670,224,865 | +16.0%  | 761,482,537      | +43.4%            | 45.6%     | 53,703      | 62,378            |
| simple_token_u256_dsl_rust   | 1,704,865,174 | +18.4%  | 796,122,846      | +50.0%            | 46.7%     | 52,795      | 61,470            |


### flipper - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| flipper_dsl_rust   | 1,708,267,175 | -       | 172,354,132      | -                 | 10.1%     | 17,191      | 25,866            |
| flipper_evm        | 1,755,797,102 | +2.8%   | 240,558,673      | +39.6%            | 13.7%     | 27,480      | 36,155            |
| flipper_macro_rust | 1,803,614,269 | +5.6%   | 265,881,135      | +54.3%            | 14.7%     | 27,577      | 36,252            |
| flipper_pvm        | 1,835,043,658 | +7.4%   | 286,051,731      | +66.0%            | 15.6%     | 27,577      | 36,252            |


### flipper - flip

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| flipper_evm        | 1,146,707,700 | -       | 238,816,612      | -                 | 20.8%     | 28,813      | 37,488            |
| flipper_pvm        | 1,169,629,642 | +2.0%   | 261,738,554      | +9.6%             | 22.4%     | 31,027      | 39,702            |
| flipper_dsl_rust   | 1,234,811,543 | +7.7%   | 326,920,455      | +36.9%            | 26.5%     | 30,279      | 38,954            |
| flipper_macro_rust | 1,256,894,106 | +9.6%   | 349,003,018      | +46.1%            | 27.8%     | 40,585      | 49,260            |


### incrementer - deploy

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| incrementer_dsl_rust   | 1,709,829,554 | -       | 172,354,132      | -                 | 10.1%     | 17,191      | 25,866            |
| incrementer_evm        | 1,756,864,281 | +2.8%   | 240,562,790      | +39.6%            | 13.7%     | 27,480      | 36,155            |
| incrementer_macro_rust | 1,806,724,135 | +5.7%   | 267,090,375      | +55.0%            | 14.8%     | 27,577      | 36,252            |
| incrementer_pvm        | 1,842,672,872 | +7.8%   | 285,917,371      | +65.9%            | 15.5%     | 27,577      | 36,252            |


### incrementer - inc

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| incrementer_evm        | 1,147,856,960 | -       | 239,546,800      | -                 | 20.9%     | 28,968      | 37,643            |
| incrementer_pvm        | 1,177,076,941 | +2.5%   | 268,766,781      | +12.2%            | 22.8%     | 31,605      | 40,280            |
| incrementer_dsl_rust   | 1,232,573,044 | +7.4%   | 324,262,884      | +35.4%            | 26.3%     | 30,472      | 39,147            |
| incrementer_macro_rust | 1,251,196,960 | +9.0%   | 342,886,800      | +43.1%            | 27.4%     | 40,799      | 49,474            |


