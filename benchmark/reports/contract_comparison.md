# Revive Contract Comparison

Generated on: 2026-05-07

### Benchmark Environment

- **Chain:** Development | **Runtime:** revive-dev-runtime@0 | **Node:** Substrate Node 0.0.0-20311a9465b | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01

Comparison of gas usage across different contract implementations.

## Chain: eth-rpc

### BenchERC1155 - create

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC1155_evm         | 1,436,669,543 | -       | 528,333,191      | -                 | 36.8%     | 50,444      | 59,119            |
| bench_erc1155_macro_rust | 1,539,860,213 | +7.2%   | 631,523,861      | +19.5%            | 41.0%     | 47,400      | 56,075            |
| BenchERC1155_pvm         | 1,579,145,395 | +9.9%   | 670,809,043      | +27.0%            | 42.5%     | 60,333      | 69,008            |
| bench_erc1155_dsl_rust   | 1,618,166,809 | +12.6%  | 709,830,457      | +34.4%            | 43.9%     | 45,312      | 53,987            |
| bench_erc1155_stylus     | 1,831,894,357 | +27.5%  | 923,558,005      | +74.8%            | 50.4%     | 70,465      | 79,140            |
| bench_erc1155_ink        | 2,092,587,444 | +45.7%  | 1,184,251,092    | +124.1%           | 56.6%     | 61,866      | 70,541            |


### BenchERC1155 - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC1155_evm         | 1,530,467,862 | -       | 1,425,734        | +2022.3%          | 0.1%      | 6,934       | 15,609            |
| bench_erc1155_dsl_rust   | 1,612,269,749 | +5.3%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| bench_erc1155_macro_rust | 1,672,956,446 | +9.3%   | 27,122,461       | +40272.8%         | 1.6%      | 6,934       | 15,609            |
| BenchERC1155_pvm         | 1,700,945,631 | +11.1%  | 12,524,738       | +18543.6%         | 0.7%      | 6,934       | 15,609            |
| bench_erc1155_stylus     | 1,868,983,682 | +22.1%  | 16,851,241       | +24983.7%         | 0.9%      | 6,934       | 15,609            |
| bench_erc1155_ink        | 2,072,719,229 | +35.4%  | 194,396,806      | +289267.1%        | 9.4%      | 17,191      | 25,866            |


### BenchERC20 - deploy

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC20_evm         | 1,897,343,440 | -       | 369,074,448      | -                 | 19.5%     | 27,448      | 36,123            |
| bench_erc20_dsl_rust   | 2,012,992,921 | +6.1%   | 427,615,281      | +15.9%            | 21.2%     | 27,448      | 36,123            |
| bench_erc20_macro_rust | 2,099,357,914 | +10.6%  | 474,421,482      | +28.5%            | 22.6%     | 27,448      | 36,123            |
| BenchERC20_pvm         | 2,119,951,698 | +11.7%  | 451,510,259      | +22.3%            | 21.3%     | 27,448      | 36,123            |
| bench_erc20_ink        | 2,705,290,120 | +42.6%  | 853,695,984      | +131.3%           | 31.6%     | 27,448      | 36,123            |
| bench_erc20_stylus     | 2,792,818,995 | +47.2%  | 951,404,483      | +157.8%           | 34.1%     | 58,219      | 66,894            |


### BenchERC20 - transfer

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC20_evm         | 1,440,642,256 | -       | 531,873,736      | -                 | 36.9%     | 50,359      | 59,034            |
| BenchERC20_pvm         | 1,571,019,209 | +9.0%   | 662,250,689      | +24.5%            | 42.2%     | 59,222      | 67,897            |
| bench_erc20_macro_rust | 1,606,508,446 | +11.5%  | 697,739,926      | +31.2%            | 43.4%     | 56,521      | 65,196            |
| bench_erc20_dsl_rust   | 1,716,721,858 | +19.2%  | 807,953,338      | +51.9%            | 47.1%     | 54,065      | 62,740            |
| bench_erc20_stylus     | 1,953,947,940 | +35.6%  | 1,045,179,420    | +96.5%            | 53.5%     | 69,961      | 78,636            |
| bench_erc20_ink        | 2,525,950,492 | +75.3%  | 1,617,181,972    | +204.1%           | 64.0%     | 91,171      | 99,846            |


### BenchERC721 - deploy

| Implementation          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC721_evm         | 1,529,619,794 | -       | 1,415,230        | +2006.6%          | 0.1%      | 6,934       | 15,609            |
| bench_erc721_dsl_rust   | 1,578,992,687 | +3.2%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| bench_erc721_macro_rust | 1,646,245,785 | +7.6%   | 35,251,241       | +52372.8%         | 2.1%      | 6,934       | 15,609            |
| BenchERC721_pvm         | 1,656,651,381 | +8.3%   | 12,524,738       | +18543.6%         | 0.8%      | 6,934       | 15,609            |
| bench_erc721_stylus     | 1,732,163,378 | +13.2%  | 17,455,861       | +25883.7%         | 1.0%      | 6,934       | 15,609            |
| bench_erc721_ink        | 1,933,389,094 | +26.4%  | 179,879,814      | +267658.0%        | 9.3%      | 17,191      | 25,866            |


### BenchERC721 - mint

| Implementation          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC721_evm         | 1,568,617,213 | -       | 660,280,861      | -                 | 42.1%     | 70,970      | 79,645            |
| bench_erc721_macro_rust | 1,586,581,215 | +1.1%   | 678,244,863      | +2.7%             | 42.7%     | 55,494      | 64,169            |
| bench_erc721_dsl_rust   | 1,663,906,092 | +6.1%   | 755,569,740      | +14.4%            | 45.4%     | 53,503      | 62,178            |
| BenchERC721_pvm         | 1,679,392,887 | +7.1%   | 771,056,535      | +16.8%            | 45.9%     | 78,065      | 86,740            |
| bench_erc721_stylus     | 2,029,212,247 | +29.4%  | 1,120,875,895    | +69.8%            | 55.2%     | 82,447      | 91,122            |
| bench_erc721_ink        | 2,169,230,400 | +38.3%  | 1,260,894,048    | +91.0%            | 58.1%     | 86,666      | 95,341            |


### BenchStorage - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchStorage_evm         | 1,519,834,394 | -       | 1,294,030        | +1826.2%          | 0.1%      | 6,934       | 15,609            |
| bench_storage_dsl_rust   | 1,539,852,677 | +1.3%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| bench_storage_macro_rust | 1,562,048,650 | +2.8%   | 10,730,541       | +15872.8%         | 0.7%      | 6,934       | 15,609            |
| BenchStorage_pvm         | 1,571,557,695 | +3.4%   | 12,121,658       | +17943.6%         | 0.8%      | 6,934       | 15,609            |
| bench_storage_stylus     | 1,686,792,462 | +11.0%  | 9,259,901        | +13683.7%         | 0.5%      | 6,934       | 15,609            |
| bench_storage_ink        | 1,758,483,181 | +15.7%  | 179,879,814      | +267658.0%        | 10.2%     | 17,191      | 25,866            |


### BenchStorage - read_100

| Implementation           | ref_time       | vs Best  | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | -------------- | -------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchStorage_evm         | 1,008,874,142  | -        | 100,105,622      | -                 | 9.9%      | 8,799       | 17,474            |
| BenchStorage_pvm         | 2,541,964,523  | +152.0%  | 1,633,196,003    | +1531.5%          | 64.2%     | 11,364      | 20,039            |
| bench_storage_dsl_rust   | 8,064,227,706  | +699.3%  | 7,155,459,186    | +7047.9%          | 88.7%     | 1,035,844   | 1,044,519         |
| bench_storage_macro_rust | 10,918,129,017 | +982.2%  | 10,009,360,497   | +9898.8%          | 91.7%     | 1,036,560   | 1,045,235         |
| bench_storage_ink        | 10,989,460,780 | +989.3%  | 10,080,692,260   | +9970.1%          | 91.7%     | 1,048,511   | 1,057,186         |
| bench_storage_stylus     | 16,067,494,106 | +1492.6% | 15,158,725,586   | +15042.7%         | 94.3%     | 1,044,396   | 1,053,071         |


### CoinTool_App - deploy

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| CoinTool_App_evm | 1,802,555,076 | -       | 240,332,528      | -                 | 13.3%     | 27,480      | 36,155            |
| CoinTool_App_pvm | 2,361,524,524 | +31.0%  | 378,538,815      | +57.5%            | 16.0%     | 27,448      | 36,123            |


### CoinTool_App - t

| Implementation   | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| CoinTool_App_evm | 8,807,972,197  | -       | 7,894,973,669    | -                 | 89.6%     | 432,340     | 441,015           |
| CoinTool_App_pvm | 10,396,107,198 | +18.0%  | 9,483,108,670    | +20.1%            | 91.2%     | 752,470     | 761,145           |


### Computation - deploy

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Computation_evm        | 1,516,735,684 | -       | 1,255,650        | +1769.1%          | 0.1%      | 6,934       | 15,609            |
| computation_macro_rust | 1,527,850,488 | +0.7%   | 2,400,221        | +3472.8%          | 0.2%      | 6,934       | 15,609            |
| computation_dsl_rust   | 1,535,552,108 | +1.2%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| computation_stylus     | 1,560,004,067 | +2.9%   | 9,797,341        | +14483.7%         | 0.6%      | 6,934       | 15,609            |
| Computation_pvm        | 1,564,387,733 | +3.1%   | 12,457,558       | +18443.6%         | 0.8%      | 6,934       | 15,609            |
| computation_ink        | 1,728,319,059 | +13.9%  | 178,804,934      | +266058.0%        | 10.3%     | 17,191      | 25,866            |


### Computation - odd_product_10

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Computation_evm        | 924,281,963   | -       | 15,945,611       | -                 | 1.7%      | 8,510       | 17,185            |
| computation_macro_rust | 932,927,019   | +0.9%   | 24,590,667       | +54.2%            | 2.6%      | 9,155       | 17,830            |
| computation_stylus     | 969,693,221   | +4.9%   | 61,356,869       | +284.8%           | 6.3%      | 10,692      | 19,367            |
| Computation_pvm        | 999,675,452   | +8.2%   | 91,339,100       | +472.8%           | 9.1%      | 10,799      | 19,474            |
| computation_dsl_rust   | 1,009,198,438 | +9.2%   | 100,862,086      | +532.5%           | 10.0%     | 9,778       | 18,453            |
| computation_ink        | 1,037,385,110 | +12.2%  | 129,048,758      | +709.3%           | 12.4%     | 20,906      | 29,581            |


### Computation - triangle_10

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Computation_evm        | 921,114,757   | -       | 12,778,405       | -                 | 1.4%      | 8,510       | 17,185            |
| computation_macro_rust | 931,449,059   | +1.1%   | 23,112,707       | +80.9%            | 2.5%      | 9,155       | 17,830            |
| computation_stylus     | 967,677,821   | +5.1%   | 59,341,469       | +364.4%           | 6.1%      | 10,692      | 19,367            |
| Computation_pvm        | 990,942,052   | +7.6%   | 82,605,700       | +546.4%           | 8.3%      | 10,799      | 19,474            |
| computation_dsl_rust   | 1,008,325,098 | +9.5%   | 99,988,746       | +682.5%           | 9.9%      | 9,778       | 18,453            |
| computation_ink        | 1,035,168,170 | +12.4%  | 126,831,818      | +892.5%           | 12.3%     | 20,906      | 29,581            |


### DocumentAccessManagement - configurePublicAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 1,441,014,072 | -       | 531,826,480      | -                 | 36.9%     | 69,247      | 77,922            |
| DocumentAccessManagement_pvm | 1,760,774,143 | +22.2%  | 851,586,551      | +60.1%            | 48.4%     | 149,808     | 158,483           |


### DocumentAccessManagement - createDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 4,176,446,149 | -       | 3,264,298,861    | -                 | 78.2%     | 295,963     | 304,638           |
| DocumentAccessManagement_pvm | 5,239,462,521 | +25.5%  | 4,327,315,233    | +32.6%            | 82.6%     | 396,879     | 405,554           |


### DocumentAccessManagement - createDocument2

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 4,176,458,885 | -       | 3,264,311,597    | -                 | 78.2%     | 295,995     | 304,670           |
| DocumentAccessManagement_pvm | 5,239,524,985 | +25.5%  | 4,327,377,697    | +32.6%            | 82.6%     | 396,943     | 405,618           |


### DocumentAccessManagement - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 1,665,620,545 | -       | 3,099,708        | -                 | 0.2%      | 6,934       | 15,609            |
| DocumentAccessManagement_pvm | 2,972,738,244 | +78.5%  | 12,524,738       | +304.1%           | 0.4%      | 6,934       | 15,609            |


### DocumentAccessManagement - grantAccessWithShare

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 3,938,354,023 | -       | 3,026,625,807    | -                 | 76.9%     | 285,674     | 294,349           |
| DocumentAccessManagement_pvm | 4,680,201,647 | +18.8%  | 3,768,473,431    | +24.5%            | 80.5%     | 366,204     | 374,879           |


### DocumentAccessManagement - registerKeys

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 1,563,012,802 | -       | 653,825,210      | -                 | 41.8%     | 58,894      | 67,569            |
| DocumentAccessManagement_pvm | 2,139,490,508 | +36.9%  | 1,230,302,916    | +88.2%            | 57.5%     | 160,098     | 168,773           |


### DocumentAccessManagement - revokeAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 4,888,574,673 | -       | 3,979,387,081    | -                 | 81.4%     | 419,073     | 427,748           |
| DocumentAccessManagement_pvm | 5,698,565,321 | +16.6%  | 4,789,377,729    | +20.4%            | 84.0%     | 500,280     | 508,955           |


### DocumentAccessManagement - transferOwnership

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 4,211,215,633 | -       | 3,302,028,041    | -                 | 78.4%     | 346,954     | 355,629           |
| DocumentAccessManagement_pvm | 4,977,427,140 | +18.2%  | 4,068,239,548    | +23.2%            | 81.7%     | 437,773     | 446,448           |


### DocumentAccessManagement - updateDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 1,895,501,146 | -       | 983,353,858      | -                 | 51.9%     | 100,824     | 109,499           |
| DocumentAccessManagement_pvm | 2,346,163,758 | +23.8%  | 1,434,016,470    | +45.8%            | 61.1%     | 181,417     | 190,092           |


### DotNS - createSubdomain

| Implementation | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 3,461,082,464  | -       | 2,549,773,320    | -                 | 73.7%     | 83,613      | 92,288            |
| DotNS_evm      | 4,697,410,485  | +35.7%  | 3,786,101,341    | +48.5%            | 80.6%     | 294,479     | 303,154           |
| DotNS_pvm      | 14,014,198,390 | +304.9% | 13,102,889,246   | +413.9%           | 93.5%     | 382,054     | 390,729           |


### DotNS - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 1,644,549,317 | -       | 2,838,724        | +76.7%            | 0.2%      | 6,934       | 15,609            |
| dotns_rust     | 1,883,005,579 | +14.5%  | 1,606,719        | -                 | 0.1%      | 6,934       | 15,609            |
| DotNS_pvm      | 2,734,451,286 | +66.3%  | 12,524,738       | +679.5%           | 0.5%      | 6,934       | 15,609            |


### DotNS - register

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 2,766,418,470 | -       | 1,856,811,806    | -                 | 67.1%     | 72,573      | 81,248            |
| DotNS_evm      | 4,191,375,547 | +51.5%  | 3,281,768,883    | +76.7%            | 78.3%     | 263,190     | 271,865           |
| DotNS_pvm      | 8,365,524,817 | +202.4% | 7,455,918,153    | +301.5%           | 89.1%     | 350,830     | 359,505           |


### DotNS - register_with_duration

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 2,764,549,819 | -       | 1,854,943,155    | -                 | 67.1%     | 72,613      | 81,288            |
| DotNS_evm      | 4,184,583,251 | +51.4%  | 3,274,976,587    | +76.6%            | 78.3%     | 263,222     | 271,897           |
| DotNS_pvm      | 8,210,498,073 | +197.0% | 7,300,891,409    | +293.6%           | 88.9%     | 350,732     | 359,407           |


### DotNS - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 2,057,428,764 | -       | 1,148,241,172    | -                 | 55.8%     | 52,669      | 61,344            |
| DotNS_evm      | 4,291,245,819 | +108.6% | 3,382,058,227    | +194.5%           | 78.8%     | 284,024     | 292,699           |
| DotNS_pvm      | 7,283,567,933 | +254.0% | 6,374,380,341    | +455.1%           | 87.5%     | 352,214     | 360,889           |


### DotNS - renew

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 1,510,134,083 | -       | 600,527,419      | -                 | 39.8%     | 57,794      | 66,469            |
| dotns_rust     | 2,143,231,510 | +41.9%  | 1,233,624,846    | +105.4%           | 57.6%     | 52,765      | 61,440            |
| DotNS_pvm      | 3,956,687,227 | +162.0% | 3,047,080,563    | +407.4%           | 77.0%     | 124,885     | 133,560           |


### DotNS - setAddress

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 1,582,250,822 | -       | 672,644,158      | -                 | 42.5%     | 68,083      | 76,758            |
| dotns_rust     | 2,223,411,099 | +40.5%  | 1,313,817,531    | +95.3%            | 59.1%     | 52,762      | 61,437            |
| DotNS_pvm      | 4,001,110,584 | +152.9% | 3,091,503,920    | +359.6%           | 77.3%     | 145,463     | 154,138           |


### DotNS - setMetadata

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 1,505,155,170 | -       | 595,548,506      | -                 | 39.6%     | 57,762      | 66,437            |
| dotns_rust     | 2,162,827,918 | +43.7%  | 1,253,234,350    | +110.4%           | 57.9%     | 52,762      | 61,437            |
| DotNS_pvm      | 3,835,591,192 | +154.8% | 2,925,984,528    | +391.3%           | 76.3%     | 124,853     | 133,528           |


### DotNS - setSubdomainOwner

| Implementation | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 3,654,099,034  | -       | 2,743,222,058    | -                 | 75.1%     | 84,220      | 92,895            |
| DotNS_evm      | 4,381,611,068  | +19.9%  | 3,470,734,092    | +26.5%            | 79.2%     | 294,636     | 303,311           |
| DotNS_pvm      | 10,761,871,448 | +194.5% | 9,850,994,472    | +259.1%           | 91.5%     | 372,211     | 380,886           |


### DotNS - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 2,927,459,892 | -       | 2,017,866,324    | -                 | 68.9%     | 73,276      | 81,951            |
| DotNS_evm      | 4,059,964,795 | +38.7%  | 3,150,358,131    | +56.1%            | 77.6%     | 284,024     | 292,699           |
| DotNS_pvm      | 6,901,842,570 | +135.8% | 5,992,235,906    | +197.0%           | 86.8%     | 361,664     | 370,339           |


### Escrow - create_simple

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| escrow_rust    | 3,406,590,503 | -       | 2,496,892,167    | -                 | 73.3%     | 93,287      | 101,962           |
| Escrow_evm     | 4,408,869,726 | +29.4%  | 3,499,171,390    | +40.1%            | 79.4%     | 310,692     | 319,367           |
| Escrow_pvm     | 5,174,859,695 | +51.9%  | 4,265,161,359    | +70.8%            | 82.4%     | 361,141     | 369,816           |


### Escrow - create_with_arbiter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| escrow_rust    | 3,406,603,239 | -       | 2,496,904,903    | -                 | 73.3%     | 93,319      | 101,994           |
| Escrow_evm     | 4,408,932,894 | +29.4%  | 3,499,234,558    | +40.1%            | 79.4%     | 310,820     | 319,495           |
| Escrow_pvm     | 5,172,449,207 | +51.8%  | 4,262,750,871    | +70.7%            | 82.4%     | 361,268     | 369,943           |


### Escrow - create_with_expiry

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| escrow_rust    | 3,406,603,239 | -       | 2,496,904,903    | -                 | 73.3%     | 93,319      | 101,994           |
| Escrow_evm     | 4,408,945,630 | +29.4%  | 3,499,247,294    | +40.1%            | 79.4%     | 310,852     | 319,527           |
| Escrow_pvm     | 5,170,988,671 | +51.8%  | 4,261,290,335    | +70.7%            | 82.4%     | 361,267     | 369,942           |


### Escrow - create_with_releaseTime

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| escrow_rust    | 3,406,603,239 | -       | 2,496,904,903    | -                 | 73.3%     | 93,319      | 101,994           |
| Escrow_evm     | 4,408,970,590 | +29.4%  | 3,499,272,254    | +40.1%            | 79.4%     | 310,884     | 319,559           |
| Escrow_pvm     | 5,169,196,951 | +51.7%  | 4,259,498,615    | +70.6%            | 82.4%     | 361,202     | 369,877           |


### Escrow - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| escrow_rust    | 1,967,400,741 | -       | 248,585,939      | -                 | 12.6%     | 17,191      | 25,866            |
| Escrow_evm     | 1,987,160,734 | +1.0%   | 408,943,935      | +64.5%            | 20.6%     | 37,737      | 46,412            |
| Escrow_pvm     | 2,485,693,665 | +26.3%  | 430,806,308      | +73.3%            | 17.3%     | 37,705      | 46,380            |


### Escrow - refund

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Escrow_evm     | 2,723,771,047 | -       | 1,815,434,695    | -                 | 66.7%     | 161,696     | 170,371           |
| escrow_rust    | 2,864,154,358 | +5.2%   | 1,955,818,006    | +7.7%             | 68.3%     | 77,981      | 86,656            |
| Escrow_pvm     | 2,879,143,793 | +5.7%   | 1,970,807,441    | +8.6%             | 68.5%     | 191,274     | 199,949           |


### Escrow - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Escrow_evm     | 2,721,883,205 | -       | 1,813,546,853    | -                 | 66.6%     | 161,696     | 170,371           |
| escrow_rust    | 2,857,300,046 | +5.0%   | 1,948,963,694    | +7.5%             | 68.2%     | 77,979      | 86,654            |
| Escrow_pvm     | 2,881,562,273 | +5.9%   | 1,973,225,921    | +8.8%             | 68.5%     | 191,274     | 199,949           |


### FiatTokenProxy - approve

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,472,036,931 | -       | 563,268,411      | -                 | 38.3%     | 70,864      | 79,539            |
| FiatTokenProxy_pvm | 1,785,008,640 | +21.3%  | 876,240,120      | +55.6%            | 49.1%     | 167,515     | 176,190           |


### FiatTokenProxy - changeAdmin

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,244,108,749 | -       | 335,772,397      | -                 | 27.0%     | 40,413      | 49,088            |
| FiatTokenProxy_pvm | 1,316,168,643 | +5.8%   | 407,832,291      | +21.5%            | 31.0%     | 48,937      | 57,612            |


### FiatTokenProxy - configureMinter

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,779,640,348 | -       | 870,871,828      | -                 | 48.9%     | 101,699     | 110,374           |
| FiatTokenProxy_pvm | 2,097,070,890 | +17.8%  | 1,188,302,370    | +36.4%            | 56.7%     | 198,318     | 206,993           |


### FiatTokenProxy - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,943,797,882 | -       | 406,670,040      | -                 | 20.9%     | 31,458      | 40,133            |
| FiatTokenProxy_pvm | 2,118,265,189 | +9.0%   | 449,195,577      | +10.5%            | 21.2%     | 31,458      | 40,133            |


### FiatTokenProxy - initialize

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 3,431,996,811 | -       | 2,518,173,235    | -                 | 73.4%     | 246,711     | 255,386           |
| FiatTokenProxy_pvm | 4,011,290,984 | +16.9%  | 3,097,467,408    | +23.0%            | 77.2%     | 343,074     | 351,749           |


### FiatTokenProxy - mint

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 2,384,662,411 | -       | 1,475,893,891    | -                 | 61.9%     | 163,433     | 172,108           |
| FiatTokenProxy_pvm | 2,900,762,989 | +21.6%  | 1,991,994,469    | +35.0%            | 68.7%     | 260,021     | 268,696           |


### FiatTokenProxy - transfer

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 2,217,570,837 | -       | 1,308,802,317    | -                 | 59.0%     | 153,176     | 161,851           |
| FiatTokenProxy_pvm | 2,695,482,940 | +21.6%  | 1,786,714,420    | +36.5%            | 66.3%     | 249,731     | 258,406           |


### FiatTokenProxy - transferFrom

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 2,678,082,793 | -       | 1,768,921,393    | -                 | 66.1%     | 194,454     | 203,129           |
| FiatTokenProxy_pvm | 3,324,722,166 | +24.1%  | 2,415,560,766    | +36.6%            | 72.7%     | 291,105     | 299,780           |


### FiatTokenV2_2 - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenV2_2_evm | 2,408,252,618 | -       | 648,977,032      | -                 | 26.9%     | 58,283      | 66,958            |
| FiatTokenV2_2_pvm | 3,859,408,363 | +60.3%  | 681,621,501      | +5.0%             | 17.7%     | 58,477      | 67,152            |


### Fibonacci - deploy

| Implementation                      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| fibonacci_u32_rust                  | 1,513,984,835 | -       | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| Fibonacci_evm                       | 1,515,072,570 | +0.1%   | 1,235,450        | +1739.0%          | 0.1%      | 6,934       | 15,609            |
| fibonacci_u128_rust                 | 1,515,289,502 | +0.1%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| fibonacci_u32_macro_bump_alloc_rust | 1,517,157,914 | +0.2%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| fibonacci_u32_macro_no_alloc_rust   | 1,517,898,836 | +0.3%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| fibonacci_u32_dsl_rust              | 1,520,926,952 | +0.5%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| fibonacci_u32_macro_rust            | 1,522,293,573 | +0.5%   | 2,400,221        | +3472.8%          | 0.2%      | 6,934       | 15,609            |
| fibonacci_u256_rust                 | 1,526,000,657 | +0.8%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| Fibonacci_pvm                       | 1,540,422,459 | +1.7%   | 11,718,578       | +17343.6%         | 0.8%      | 6,934       | 15,609            |
| fibonacci_u32_stylus                | 1,543,622,438 | +2.0%   | 8,991,181        | +13283.7%         | 0.6%      | 6,934       | 15,609            |
| fibonacci_u32_ink                   | 1,711,041,752 | +13.0%  | 178,939,294      | +266258.0%        | 10.5%     | 17,191      | 25,866            |


### Fibonacci - fib_10

| Implementation                      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| fibonacci_u32_rust                  | 1,029,742,046 | -       | 121,405,694      | -                 | 11.8%     | 8,439       | 17,114            |
| fibonacci_u32_macro_bump_alloc_rust | 1,033,932,251 | +0.4%   | 125,595,899      | +3.5%             | 12.1%     | 8,636       | 17,311            |
| fibonacci_u32_macro_rust            | 1,034,616,617 | +0.5%   | 126,280,265      | +4.0%             | 12.2%     | 8,810       | 17,485            |
| Fibonacci_evm                       | 1,040,581,334 | +1.1%   | 132,244,982      | +8.9%             | 12.7%     | 8,410       | 17,085            |
| fibonacci_u32_macro_no_alloc_rust   | 1,040,860,649 | +1.1%   | 132,524,297      | +9.2%             | 12.7%     | 8,682       | 17,357            |
| fibonacci_u32_stylus                | 1,041,803,153 | +1.2%   | 133,466,801      | +9.9%             | 12.8%     | 9,725       | 18,400            |
| fibonacci_u32_dsl_rust              | 1,053,373,578 | +2.3%   | 145,037,226      | +19.5%            | 13.8%     | 8,870       | 17,545            |
| fibonacci_u128_rust                 | 1,190,303,147 | +15.6%  | 281,966,795      | +132.3%           | 23.7%     | 8,520       | 17,195            |
| Fibonacci_pvm                       | 1,328,501,149 | +29.0%  | 420,164,797      | +246.1%           | 31.6%     | 9,357       | 18,032            |
| fibonacci_u32_ink                   | 1,372,687,822 | +33.3%  | 464,351,470      | +282.5%           | 33.8%     | 30,082      | 38,757            |
| fibonacci_u256_rust                 | 4,493,234,036 | +336.3% | 3,584,897,684    | +2852.8%          | 79.8%     | 9,185       | 17,860            |


### Fibonacci_u256 - deploy

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 1,514,289,738 | -       | 1,225,754        | +1724.6%          | 0.1%      | 6,934       | 15,609            |
| Fibonacci_u256_evm                       | 1,514,354,974 | +0.0%   | 1,226,562        | +1725.8%          | 0.1%      | 6,934       | 15,609            |
| fibonacci_u256_iter_primitive_types_rust | 1,523,922,854 | +0.6%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| fibonacci_u256_iter_rust                 | 1,524,551,027 | +0.7%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| fibonacci_u256_primitive_types_rust      | 1,524,712,097 | +0.7%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| fibonacci_u256_rust                      | 1,526,000,657 | +0.8%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| Fibonacci_u256_iter_pvm                  | 1,541,582,163 | +1.8%   | 11,718,578       | +17343.6%         | 0.8%      | 6,934       | 15,609            |
| Fibonacci_u256_pvm                       | 1,543,160,649 | +1.9%   | 11,718,578       | +17343.6%         | 0.8%      | 6,934       | 15,609            |
| fibonacci_u256_iter_ink                  | 1,721,970,554 | +13.7%  | 179,140,834      | +266558.0%        | 10.4%     | 17,191      | 25,866            |
| fibonacci_u256_ink                       | 1,723,146,365 | +13.8%  | 179,140,834      | +266558.0%        | 10.4%     | 17,191      | 25,866            |


### Fibonacci_u256 - fib_10

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 914,466,945   | -       | 6,130,593        | -                 | 0.7%      | 8,362       | 17,037            |
| Fibonacci_u256_iter_pvm                  | 957,114,765   | +4.7%   | 48,778,413       | +695.7%           | 5.1%      | 9,429       | 18,104            |
| fibonacci_u256_iter_primitive_types_rust | 973,998,039   | +6.5%   | 65,661,687       | +971.0%           | 6.7%      | 9,056       | 17,731            |
| Fibonacci_u256_evm                       | 1,018,257,585 | +11.3%  | 109,921,233      | +1693.0%          | 10.8%     | 8,366       | 17,041            |
| fibonacci_u256_iter_rust                 | 1,065,696,026 | +16.5%  | 157,359,674      | +2466.8%          | 14.8%     | 9,095       | 17,770            |
| fibonacci_u256_iter_ink                  | 1,271,876,660 | +39.1%  | 363,540,308      | +5829.9%          | 28.6%     | 30,748      | 39,423            |
| Fibonacci_u256_pvm                       | 1,629,950,099 | +78.2%  | 721,613,747      | +11670.7%         | 44.3%     | 9,527       | 18,202            |
| fibonacci_u256_primitive_types_rust      | 2,933,518,096 | +220.8% | 2,025,181,744    | +32934.0%         | 69.0%     | 9,105       | 17,780            |
| fibonacci_u256_ink                       | 3,200,802,309 | +250.0% | 2,292,465,957    | +37293.9%         | 71.6%     | 30,821      | 39,496            |
| fibonacci_u256_rust                      | 4,493,234,036 | +391.4% | 3,584,897,684    | +58375.5%         | 79.8%     | 9,185       | 17,860            |


### Fibonacci_u256 - fib_15

| Implementation                           | ref_time       | vs Best  | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | -------------- | -------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 916,885,255    | -        | 8,548,903        | -                 | 0.9%      | 8,362       | 17,037            |
| Fibonacci_u256_iter_pvm                  | 977,940,565    | +6.7%    | 69,604,213       | +714.2%           | 7.1%      | 9,429       | 18,104            |
| fibonacci_u256_iter_primitive_types_rust | 1,000,198,239  | +9.1%    | 91,861,887       | +974.5%           | 9.2%      | 9,056       | 17,731            |
| fibonacci_u256_iter_rust                 | 1,142,953,026  | +24.7%   | 234,616,674      | +2644.4%          | 20.5%     | 9,095       | 17,770            |
| fibonacci_u256_iter_ink                  | 1,312,520,560  | +43.1%   | 404,184,208      | +4627.9%          | 30.8%     | 30,748      | 39,423            |
| Fibonacci_u256_evm                       | 2,123,924,519  | +131.6%  | 1,215,588,167    | +14119.2%         | 57.2%     | 8,366       | 17,041            |
| Fibonacci_u256_pvm                       | 8,869,266,899  | +867.3%  | 7,960,930,547    | +93022.2%         | 89.8%     | 9,527       | 18,202            |
| fibonacci_u256_primitive_types_rust      | 23,336,621,536 | +2445.2% | 22,428,285,184   | +262252.8%        | 96.1%     | 9,105       | 17,780            |
| fibonacci_u256_ink                       | 23,543,578,109 | +2467.8% | 22,635,241,757   | +264673.6%        | 96.1%     | 30,821      | 39,496            |
| fibonacci_u256_rust                      | 40,745,510,256 | +4343.9% | 39,837,173,904   | +465891.6%        | 97.8%     | 9,185       | 17,860            |


### Fibonacci_u256 - fib_5

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 912,048,635   | -       | 3,712,283        | -                 | 0.4%      | 8,362       | 17,037            |
| Fibonacci_u256_evm                       | 918,537,402   | +0.7%   | 10,201,050       | +174.8%           | 1.1%      | 8,366       | 17,041            |
| Fibonacci_u256_iter_pvm                  | 936,288,965   | +2.7%   | 27,952,613       | +653.0%           | 3.0%      | 9,429       | 18,104            |
| fibonacci_u256_iter_primitive_types_rust | 947,797,839   | +3.9%   | 39,461,487       | +963.0%           | 4.2%      | 9,056       | 17,731            |
| Fibonacci_u256_pvm                       | 976,960,499   | +7.1%   | 68,624,147       | +1748.6%          | 7.0%      | 9,527       | 18,202            |
| fibonacci_u256_iter_rust                 | 988,439,026   | +8.4%   | 80,102,674       | +2057.8%          | 8.1%      | 9,095       | 17,770            |
| fibonacci_u256_primitive_types_rust      | 1,094,062,516 | +20.0%  | 185,726,164      | +4903.0%          | 17.0%     | 9,105       | 17,780            |
| fibonacci_u256_rust                      | 1,223,368,800 | +34.1%  | 315,045,544      | +8386.6%          | 25.8%     | 9,182       | 17,857            |
| fibonacci_u256_iter_ink                  | 1,231,232,760 | +35.0%  | 322,896,408      | +8598.1%          | 26.2%     | 30,748      | 39,423            |
| fibonacci_u256_ink                       | 1,366,788,309 | +49.9%  | 458,451,957      | +12249.6%         | 33.5%     | 30,821      | 39,496            |


### FungibleCredential - burn

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,776,126,473 | -       | 867,371,049      | -                 | 48.8%     | 97,804      | 106,479           |
| FungibleCredential_pvm   | 2,080,207,035 | +17.1%  | 1,171,451,611    | +35.1%            | 56.3%     | 156,353     | 165,028           |
| fungible_credential_rust | 2,267,817,993 | +27.7%  | 1,359,062,569    | +56.7%            | 59.9%     | 67,350      | 76,025            |


### FungibleCredential - createClass_nontransferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| fungible_credential_rust | 2,138,586,436 | -       | 1,228,128,532    | -                 | 57.4%     | 57,231      | 65,906            |
| FungibleCredential_evm   | 2,509,023,193 | +17.3%  | 1,598,565,289    | +30.2%            | 63.7%     | 139,190     | 147,865           |
| FungibleCredential_pvm   | 3,564,927,640 | +66.7%  | 2,654,469,736    | +116.1%           | 74.5%     | 249,186     | 257,861           |


### FungibleCredential - createClass_transferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| fungible_credential_rust | 2,125,416,575 | -       | 1,214,958,671    | -                 | 57.2%     | 57,231      | 65,906            |
| FungibleCredential_evm   | 2,509,011,373 | +18.0%  | 1,598,553,469    | +31.6%            | 63.7%     | 139,190     | 147,865           |
| FungibleCredential_pvm   | 3,564,990,332 | +67.7%  | 2,654,532,428    | +118.5%           | 74.5%     | 249,250     | 257,925           |


### FungibleCredential - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,866,872,489 | -       | 240,189,727      | -                 | 12.9%     | 27,480      | 36,155            |
| fungible_credential_rust | 2,044,141,156 | +9.5%   | 248,044,968      | +3.3%             | 12.1%     | 17,191      | 25,866            |
| FungibleCredential_pvm   | 2,826,456,859 | +51.4%  | 257,434,062      | +7.2%             | 9.1%      | 27,448      | 36,123            |


### FungibleCredential - issue

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 3,510,993,100 | -       | 2,601,805,508    | -                 | 74.1%     | 251,982     | 260,657           |
| FungibleCredential_pvm   | 4,022,410,175 | +14.6%  | 3,113,222,583    | +19.7%            | 77.4%     | 310,147     | 318,822           |
| fungible_credential_rust | 4,034,749,383 | +14.9%  | 3,125,561,791    | +20.1%            | 77.5%     | 149,473     | 158,148           |


### FungibleCredential - issue_more

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,847,043,362 | -       | 937,855,770      | -                 | 50.8%     | 108,192     | 116,867           |
| FungibleCredential_pvm   | 2,150,790,107 | +16.4%  | 1,241,602,515    | +32.4%            | 57.7%     | 166,741     | 175,416           |
| fungible_credential_rust | 2,478,060,252 | +34.2%  | 1,568,872,660    | +67.3%            | 63.3%     | 77,707      | 86,382            |


### FungibleCredential - revoke

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,777,521,319 | -       | 868,333,727      | -                 | 48.9%     | 97,903      | 106,578           |
| FungibleCredential_pvm   | 2,080,211,001 | +17.0%  | 1,171,023,409    | +34.9%            | 56.3%     | 156,452     | 165,127           |
| fungible_credential_rust | 2,312,256,592 | +30.1%  | 1,403,069,000    | +61.6%            | 60.7%     | 67,449      | 76,124            |


### FungibleCredential - transfer

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 3,711,462,975 | -       | 2,802,288,479    | -                 | 75.5%     | 272,621     | 281,296           |
| fungible_credential_rust | 4,214,235,721 | +13.5%  | 3,305,061,225    | +17.9%            | 78.4%     | 159,657     | 168,332           |
| FungibleCredential_pvm   | 4,351,159,116 | +17.2%  | 3,441,997,716    | +22.8%            | 79.1%     | 330,879     | 339,554           |


### KeyRegistry - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 1,581,433,487 | -       | 2,056,984        | +39.7%            | 0.1%      | 6,934       | 15,609            |
| key_registry_rust | 1,813,884,938 | +14.7%  | 1,472,359        | -                 | 0.1%      | 6,934       | 15,609            |
| KeyRegistry_pvm   | 2,148,800,766 | +35.9%  | 12,524,738       | +750.7%           | 0.6%      | 6,934       | 15,609            |


### KeyRegistry - fetchPrekeyBundle

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 2,526,781,502 | -       | 1,618,458,246    | -                 | 64.1%     | 187,323     | 195,998           |
| KeyRegistry_pvm   | 3,379,396,329 | +33.7%  | 2,471,073,073    | +52.7%            | 73.1%     | 221,925     | 230,600           |
| key_registry_rust | 3,614,786,669 | +43.1%  | 2,706,463,413    | +67.2%            | 74.9%     | 150,349     | 159,024           |


### KeyRegistry - registerIdentity

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| key_registry_rust | 2,698,518,110 | -       | 1,787,641,134    | -                 | 66.2%     | 89,095      | 97,770            |
| KeyRegistry_evm   | 3,194,682,332 | +18.4%  | 2,283,805,356    | +27.8%            | 71.5%     | 187,684     | 196,359           |
| KeyRegistry_pvm   | 3,717,502,195 | +37.8%  | 2,806,625,219    | +57.0%            | 75.5%     | 222,093     | 230,768           |


### KeyRegistry - updateSignedPrekey

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 2,119,980,112 | -       | 1,209,941,280    | -                 | 57.1%     | 105,468     | 114,143           |
| key_registry_rust | 2,222,837,932 | +4.9%   | 1,312,799,100    | +8.5%             | 59.1%     | 68,745      | 77,420            |
| KeyRegistry_pvm   | 2,599,386,806 | +22.6%  | 1,689,347,974    | +39.6%            | 65.0%     | 160,647     | 169,322           |


### KeyRegistry - uploadOneTimePrekeys

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 2,853,673,363 | -       | 1,943,634,531    | -                 | 68.1%     | 197,941     | 206,616           |
| KeyRegistry_pvm   | 3,226,119,737 | +13.1%  | 2,316,080,905    | +19.2%            | 71.8%     | 232,350     | 241,025           |
| key_registry_rust | 3,631,481,314 | +27.3%  | 2,721,442,482    | +40.0%            | 74.9%     | 150,537     | 159,212           |


### Log - addWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,935,844,662 | -       | 1,027,076,142    | -                 | 53.1%     | 107,062     | 115,737           |
| Log_pvm        | 2,208,954,160 | +14.1%  | 1,300,185,640    | +26.6%            | 58.9%     | 154,803     | 163,478           |
| log_rust       | 2,472,228,897 | +27.7%  | 1,563,460,377    | +52.2%            | 63.2%     | 86,515      | 95,190            |


### Log - append

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| log_rust       | 2,169,314,827 | -       | 1,260,546,307    | -                 | 58.1%     | 55,789      | 64,464            |
| Log_evm        | 2,473,227,067 | +14.0%  | 1,564,458,547    | +24.1%            | 63.3%     | 148,186     | 156,861           |
| Log_pvm        | 2,824,129,690 | +30.2%  | 1,915,361,170    | +51.9%            | 67.8%     | 195,959     | 204,634           |


### Log - append_2

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| log_rust       | 2,169,314,827 | -       | 1,260,546,307    | -                 | 58.1%     | 55,789      | 64,464            |
| Log_evm        | 2,473,227,067 | +14.0%  | 1,564,458,547    | +24.1%            | 63.3%     | 148,186     | 156,861           |
| Log_pvm        | 2,824,129,690 | +30.2%  | 1,915,361,170    | +51.9%            | 67.8%     | 195,959     | 204,634           |


### Log - create_nonpermissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 2,236,444,435 | -       | 1,328,108,083    | -                 | 59.4%     | 127,509     | 136,184           |
| log_rust       | 2,545,472,231 | +13.8%  | 1,637,135,879    | +23.3%            | 64.3%     | 76,130      | 84,805            |
| Log_pvm        | 3,079,700,330 | +37.7%  | 2,171,363,978    | +63.5%            | 70.5%     | 216,471     | 225,146           |


### Log - create_permissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 2,236,469,907 | -       | 1,328,133,555    | -                 | 59.4%     | 127,573     | 136,248           |
| log_rust       | 2,545,478,599 | +13.8%  | 1,637,142,247    | +23.3%            | 64.3%     | 76,146      | 84,821            |
| Log_pvm        | 3,079,287,818 | +37.7%  | 2,170,951,466    | +63.5%            | 70.5%     | 216,599     | 225,274           |


### Log - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,851,574,647 | -       | 240,000,251      | -                 | 13.0%     | 27,480      | 36,155            |
| log_rust       | 2,024,672,871 | +9.3%   | 246,761,486      | +2.8%             | 12.2%     | 17,191      | 25,866            |
| Log_pvm        | 2,639,527,273 | +42.6%  | 257,635,602      | +7.3%             | 9.8%      | 27,448      | 36,123            |


### Log - removeWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| log_rust       | 1,842,251,176 | -       | 933,482,656      | -                 | 50.7%     | 55,746      | 64,421            |
| Log_evm        | 2,620,064,927 | +42.2%  | 1,711,296,407    | +83.3%            | 65.3%     | 189,470     | 198,145           |
| Log_pvm        | 3,000,422,263 | +62.9%  | 2,091,653,743    | +124.1%           | 69.7%     | 237,630     | 246,305           |


### Log - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| log_rust       | 1,773,956,576 | -       | 865,188,056      | -                 | 48.8%     | 45,532      | 54,207            |
| Log_evm        | 3,073,325,911 | +73.2%  | 2,164,557,391    | +150.2%           | 70.4%     | 230,562     | 239,237           |
| Log_pvm        | 3,437,756,321 | +93.8%  | 2,528,987,801    | +192.3%           | 73.6%     | 278,367     | 287,042           |


### Marketplace - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Marketplace_pvm | 6,187,798,542 | -       | 294,387,587      | -                 | 4.8%      | 27,448      | 36,123            |


### MarketplaceProxy - createItem_digital

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 9,165,615,277 | -       | 8,252,629,845    | -                 | 90.0%     | 1,021,778   | 1,030,453         |
| MarketplaceProxy_pvm | 9,324,520,521 | +1.7%   | 8,411,535,089    | +1.9%             | 90.2%     | 1,051,626   | 1,060,301         |


### MarketplaceProxy - createItem_physical

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 9,002,398,220 | -       | 8,089,412,788    | -                 | 89.9%     | 1,021,842   | 1,030,517         |
| MarketplaceProxy_pvm | 9,161,303,464 | +1.8%   | 8,248,318,032    | +2.0%             | 90.0%     | 1,051,690   | 1,060,365         |


### MarketplaceProxy - deactivateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 1,931,368,184 | -       | 1,023,031,832    | -                 | 53.0%     | 327,072     | 335,747           |
| MarketplaceProxy_pvm | 2,009,965,178 | +4.1%   | 1,101,628,826    | +7.7%             | 54.8%     | 341,996     | 350,671           |


### MarketplaceProxy - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 6,721,148,144 | -       | 5,163,902,659    | +0.2%             | 76.8%     | 576,148     | 584,823           |
| MarketplaceProxy_pvm | 6,856,095,329 | +2.0%   | 5,153,863,060    | -                 | 75.2%     | 582,642     | 591,317           |


### MarketplaceProxy - markAsShipped

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 3,871,689,122 | -       | 2,962,082,458    | -                 | 76.5%     | 501,891     | 510,566           |
| MarketplaceProxy_pvm | 3,950,412,028 | +2.0%   | 3,040,805,364    | +2.7%             | 77.0%     | 516,815     | 525,490           |


### MarketplaceProxy - purchaseItem_digital

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 11,447,792,786 | -       | 10,537,243,210   | -                 | 92.0%     | 930,780     | 939,455           |
| MarketplaceProxy_pvm | 11,527,313,996 | +0.7%   | 10,616,764,420   | +0.8%             | 92.1%     | 945,704     | 954,379           |


### MarketplaceProxy - purchaseItem_physical

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 11,517,376,732 | -       | 10,605,137,772   | -                 | 92.1%     | 956,575     | 965,250           |
| MarketplaceProxy_pvm | 11,596,886,678 | +0.7%   | 10,684,647,718   | +0.7%             | 92.1%     | 971,499     | 980,174           |


### MarketplaceProxy - purchaseItem_with_matchmaker

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 12,838,685,973 | -       | 11,928,136,397   | -                 | 92.9%     | 1,022,898   | 1,031,573         |
| MarketplaceProxy_pvm | 12,918,207,183 | +0.6%   | 12,007,657,607   | +0.7%             | 93.0%     | 1,037,822   | 1,046,497         |


### MarketplaceProxy - registerMatchMaker

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 4,028,583,666 | -       | 3,118,977,002    | -                 | 77.4%     | 450,447     | 459,122           |
| MarketplaceProxy_pvm | 4,108,110,508 | +2.0%   | 3,198,503,844    | +2.5%             | 77.9%     | 465,371     | 474,046           |


### MarketplaceProxy - registerShop

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 3,992,543,189 | -       | 3,079,976,829    | -                 | 77.1%     | 450,932     | 459,607           |
| MarketplaceProxy_pvm | 4,071,246,383 | +2.0%   | 3,158,680,023    | +2.6%             | 77.6%     | 465,856     | 474,531           |


### MarketplaceProxy - updateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 5,550,419,750 | -       | 4,637,853,390    | -                 | 83.6%     | 554,175     | 562,850           |
| MarketplaceProxy_pvm | 5,629,122,944 | +1.4%   | 4,716,556,584    | +1.7%             | 83.8%     | 569,099     | 577,774           |


### MarketplaceProxy - updateMatchMakerFee

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 2,149,947,037 | -       | 1,241,623,781    | -                 | 57.8%     | 347,550     | 356,225           |
| MarketplaceProxy_pvm | 2,228,544,031 | +3.7%   | 1,320,220,775    | +6.3%             | 59.2%     | 362,474     | 371,149           |


### MixedERC20 - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20_evm | 2,047,554,415 | -       | 488,537,160      | -                 | 23.9%     | 48,026      | 56,701            |
| MixedERC20_pvm | 2,664,088,534 | +30.1%  | 754,043,751      | +54.3%            | 28.3%     | 47,962      | 56,637            |


### MixedERC20 - mint

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20_evm | 1,417,078,199 | -       | 508,309,679      | -                 | 35.9%     | 51,336      | 60,011            |
| MixedERC20_pvm | 1,557,632,183 | +9.9%   | 648,863,663      | +27.7%            | 41.7%     | 74,150      | 82,825            |


### MixedERC20 - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20_evm | 1,443,727,913 | -       | 534,959,393      | -                 | 37.1%     | 51,368      | 60,043            |
| MixedERC20_pvm | 1,619,934,984 | +12.2%  | 711,166,464      | +32.9%            | 43.9%     | 74,214      | 82,889            |


### MixedERC20Factory - deploy

| Implementation        | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20Factory_evm | 1,564,390,582 | -       | 1,845,894        | -                 | 0.1%      | 6,934       | 15,609            |
| MixedERC20Factory_pvm | 1,580,320,308 | +1.0%   | 12,524,738       | +578.5%           | 0.8%      | 6,934       | 15,609            |
| MixedERC20Factory_pvm | 2,603,865,923 | +66.4%  | 1,695,948,643    | +91776.8%         | 65.1%     | 102,800     | 111,475           |
| MixedERC20Factory_evm | 2,652,821,235 | +69.6%  | 1,744,903,955    | +94428.9%         | 65.8%     | 79,798      | 88,473            |


### MixedFactory - deploy

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedFactory_evm | 1,524,547,695 | -       | 1,352,408        | -                 | 0.1%      | 6,934       | 15,609            |
| MixedFactory_pvm | 1,608,298,167 | +5.5%   | 12,524,738       | +826.1%           | 0.8%      | 6,934       | 15,609            |


### MixedFactory - deployCreate

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedFactory_pvm | 1,954,110,485 | -       | 1,046,193,205    | -                 | 53.5%     | 40,558      | 49,233            |
| MixedFactory_evm | 2,141,859,301 | +9.6%   | 1,233,942,021    | +17.9%            | 57.6%     | 36,263      | 44,938            |


### MixedFactory - deployCreate2

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedFactory_pvm | 1,955,113,469 | -       | 1,047,196,189    | -                 | 53.6%     | 40,622      | 49,297            |
| MixedFactory_evm | 2,141,981,251 | +9.6%   | 1,234,063,971    | +17.8%            | 57.6%     | 36,295      | 44,970            |


### MixedPool - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedPool_evm  | 2,022,488,096 | -       | 479,642,269      | -                 | 23.7%     | 48,026      | 56,701            |
| MixedPool_pvm  | 2,378,165,852 | +17.6%  | 539,254,699      | +12.4%            | 22.7%     | 47,962      | 56,637            |


### MixedSwapRouter - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapRouter_evm | 2,388,123,636 | -       | 859,967,393      | -                 | 36.0%     | 65,403      | 74,078            |
| MixedSwapRouter_pvm | 2,666,013,715 | +11.6%  | 1,028,562,144    | +19.6%            | 38.6%     | 83,958      | 92,633            |


### MixedSwapRouter - swap

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapRouter_evm | 6,410,540,338 | -       | 5,501,771,818    | -                 | 85.8%     | 394,652     | 403,327           |
| MixedSwapRouter_pvm | 8,092,235,268 | +26.2%  | 7,183,466,748    | +30.6%            | 88.8%     | 519,131     | 527,806           |


### MixedSwapToken0 - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapToken0_evm | 2,047,554,415 | -       | 488,537,160      | -                 | 23.9%     | 48,026      | 56,701            |
| MixedSwapToken0_pvm | 2,660,662,354 | +29.9%  | 750,617,571      | +53.6%            | 28.2%     | 47,962      | 56,637            |


### MixedSwapToken1 - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapToken1_evm | 2,047,554,415 | -       | 488,537,160      | -                 | 23.9%     | 48,026      | 56,701            |
| MixedSwapToken1_pvm | 2,660,662,354 | +29.9%  | 750,617,571      | +53.6%            | 28.2%     | 47,962      | 56,637            |


### MockMobRule - addCounterEvidence

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MockMobRule_evm | 1,347,613,156 | -       | 438,006,492      | -                 | 32.5%     | 55,160      | 63,835            |
| MockMobRule_pvm | 1,641,775,307 | +21.8%  | 732,168,643      | +67.2%            | 44.6%     | 96,667      | 105,342           |


### MockMobRule - createDispute

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MockMobRule_evm | 3,434,345,913 | -       | 2,523,468,937    | -                 | 73.5%     | 209,498     | 218,173           |
| MockMobRule_pvm | 4,094,038,357 | +19.2%  | 3,183,161,381    | +26.1%            | 77.8%     | 251,103     | 259,778           |


### MockMobRule - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MockMobRule_evm | 2,024,769,550 | -       | 418,687,641      | -                 | 20.7%     | 37,737      | 46,412            |
| MockMobRule_pvm | 2,880,269,548 | +42.3%  | 611,253,174      | +46.0%            | 21.2%     | 37,705      | 46,380            |


### MockMobRule - resolveCase

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MockMobRule_evm | 1,382,876,290 | -       | 474,107,770      | -                 | 34.3%     | 65,257      | 73,932            |
| MockMobRule_pvm | 1,519,688,479 | +9.9%   | 610,919,959      | +28.9%            | 40.2%     | 106,764     | 115,439           |


### NonFungibleCredential - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 1,857,886,230 | -       | 240,078,425      | -                 | 12.9%     | 27,480      | 36,155            |
| non_fungible_credential_rust | 2,065,375,665 | +11.2%  | 247,164,566      | +3.0%             | 12.0%     | 17,191      | 25,866            |
| NonFungibleCredential_pvm    | 2,824,115,840 | +52.0%  | 257,299,702      | +7.2%             | 9.1%      | 27,448      | 36,123            |


### NonFungibleCredential - issue_nontransferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| non_fungible_credential_rust | 4,223,180,819 | -       | 3,312,303,843    | -                 | 78.4%     | 151,045     | 159,720           |
| NonFungibleCredential_evm    | 4,866,491,437 | +15.2%  | 3,955,614,461    | +19.4%            | 81.3%     | 344,387     | 353,062           |
| NonFungibleCredential_pvm    | 6,272,156,783 | +48.5%  | 5,361,279,807    | +61.9%            | 85.5%     | 444,541     | 453,216           |


### NonFungibleCredential - issue_transferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| non_fungible_credential_rust | 4,209,851,478 | -       | 3,298,974,502    | -                 | 78.4%     | 151,013     | 159,688           |
| NonFungibleCredential_evm    | 4,866,439,872 | +15.6%  | 3,955,562,896    | +19.9%            | 81.3%     | 344,259     | 352,934           |
| NonFungibleCredential_pvm    | 6,271,482,706 | +49.0%  | 5,360,605,730    | +62.5%            | 85.5%     | 444,252     | 452,927           |


### NonFungibleCredential - issue_with_expiry

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| non_fungible_credential_rust | 4,237,042,102 | -       | 3,326,165,126    | -                 | 78.5%     | 151,061     | 159,736           |
| NonFungibleCredential_evm    | 4,866,540,736 | +14.9%  | 3,955,663,760    | +18.9%            | 81.3%     | 344,451     | 353,126           |
| NonFungibleCredential_pvm    | 6,266,904,978 | +47.9%  | 5,356,028,002    | +61.0%            | 85.5%     | 444,442     | 453,117           |


### NonFungibleCredential - revoke

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 1,246,495,405 | -       | 338,172,149      | -                 | 27.1%     | 45,709      | 54,384            |
| NonFungibleCredential_pvm    | 1,400,108,167 | +12.3%  | 491,771,815      | +45.4%            | 35.1%     | 104,675     | 113,350           |
| non_fungible_credential_rust | 1,772,499,645 | +42.2%  | 864,163,293      | +155.5%           | 48.8%     | 48,091      | 56,766            |


### NonFungibleCredential - transfer

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| non_fungible_credential_rust | 3,234,129,791 | -       | 2,325,387,463    | -                 | 71.9%     | 109,726     | 118,401           |
| NonFungibleCredential_evm    | 6,411,955,717 | +98.3%  | 5,503,213,389    | +136.7%           | 85.8%     | 508,554     | 517,229           |
| NonFungibleCredential_pvm    | 7,685,622,564 | +137.6% | 6,776,880,236    | +191.4%           | 88.2%     | 567,971     | 576,646           |


### NonFungibleCredential - updateMetadata

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 1,186,551,152 | -       | 277,782,632      | -                 | 23.4%     | 35,522      | 44,197            |
| NonFungibleCredential_pvm    | 1,353,506,693 | +14.1%  | 444,738,173      | +60.1%            | 32.9%     | 94,485      | 103,160           |
| non_fungible_credential_rust | 1,817,628,735 | +53.2%  | 908,860,215      | +227.2%           | 50.0%     | 48,190      | 56,865            |


### SimpleToken - deploy

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| SimpleToken_evm                         | 1,520,388,900 | -       | 1,300,898        | +1836.4%          | 0.1%      | 6,934       | 15,609            |
| simple_token_u32_no_alloc_rust          | 1,545,828,374 | +1.7%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| simple_token_u128_no_alloc_rust         | 1,557,570,377 | +2.4%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| simple_token_u256_no_alloc_rust         | 1,558,488,476 | +2.5%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| simple_token_u256_dsl_rust              | 1,564,399,745 | +2.9%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| simple_token_u256_macro_no_alloc_rust   | 1,570,858,652 | +3.3%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| simple_token_u256_macro_bump_alloc_rust | 1,581,569,807 | +4.0%   | 67,180           | -                 | 0.0%      | 6,934       | 15,609            |
| simple_token_u256_macro_rust            | 1,602,590,218 | +5.4%   | 18,993,681       | +28172.8%         | 1.2%      | 6,934       | 15,609            |
| SimpleToken_pvm                         | 1,608,891,374 | +5.8%   | 12,457,558       | +18443.6%         | 0.8%      | 6,934       | 15,609            |
| simple_token_u256_stylus                | 1,720,802,034 | +13.2%  | 16,918,421       | +25083.7%         | 1.0%      | 6,934       | 15,609            |
| simple_token_u256_ink                   | 1,917,054,851 | +26.1%  | 224,768,278      | +334476.2%        | 11.7%     | 17,191      | 25,866            |


### SimpleToken - mint

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| SimpleToken_evm                         | 1,413,586,998 | -       | 504,818,478      | -                 | 35.7%     | 49,925      | 58,600            |
| SimpleToken_pvm                         | 1,499,610,773 | +6.1%   | 590,842,253      | +17.0%            | 39.4%     | 54,689      | 63,364            |
| simple_token_u32_no_alloc_rust          | 1,518,803,927 | +7.4%   | 610,035,407      | +20.8%            | 40.2%     | 51,543      | 60,218            |
| simple_token_u128_no_alloc_rust         | 1,519,883,772 | +7.5%   | 611,115,252      | +21.1%            | 40.2%     | 52,272      | 60,947            |
| simple_token_u256_macro_rust            | 1,553,844,479 | +9.9%   | 645,075,959      | +27.8%            | 41.5%     | 53,892      | 62,567            |
| simple_token_u256_no_alloc_rust         | 1,575,144,997 | +11.4%  | 666,376,477      | +32.0%            | 42.3%     | 52,329      | 61,004            |
| simple_token_u256_macro_no_alloc_rust   | 1,576,750,401 | +11.5%  | 667,981,881      | +32.3%            | 42.4%     | 53,097      | 61,772            |
| simple_token_u256_macro_bump_alloc_rust | 1,577,648,106 | +11.6%  | 668,879,586      | +32.5%            | 42.4%     | 53,762      | 62,437            |
| simple_token_u256_dsl_rust              | 1,620,458,271 | +14.6%  | 711,689,751      | +41.0%            | 43.9%     | 52,696      | 61,371            |
| simple_token_u256_stylus                | 1,752,002,360 | +23.9%  | 843,233,840      | +67.0%            | 48.1%     | 61,360      | 70,035            |
| simple_token_u256_ink                   | 1,945,591,012 | +37.6%  | 1,036,822,492    | +105.4%           | 53.3%     | 60,704      | 69,379            |


### SimpleToken - transfer

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| SimpleToken_evm                         | 1,439,608,209 | -       | 530,839,689      | -                 | 36.9%     | 49,957      | 58,632            |
| SimpleToken_pvm                         | 1,559,858,582 | +8.4%   | 651,090,062      | +22.7%            | 41.7%     | 54,850      | 63,525            |
| simple_token_u128_no_alloc_rust         | 1,582,933,199 | +10.0%  | 674,164,679      | +27.0%            | 42.6%     | 52,304      | 60,979            |
| simple_token_u32_no_alloc_rust          | 1,587,808,950 | +10.3%  | 679,040,430      | +27.9%            | 42.8%     | 51,551      | 60,226            |
| simple_token_u256_macro_rust            | 1,591,144,209 | +10.5%  | 682,375,689      | +28.5%            | 42.9%     | 54,053      | 62,728            |
| simple_token_u256_no_alloc_rust         | 1,648,033,936 | +14.5%  | 739,265,416      | +39.3%            | 44.9%     | 52,393      | 61,068            |
| simple_token_u256_macro_no_alloc_rust   | 1,649,034,720 | +14.5%  | 740,266,200      | +39.5%            | 44.9%     | 53,161      | 61,836            |
| simple_token_u256_macro_bump_alloc_rust | 1,649,932,425 | +14.6%  | 741,163,905      | +39.6%            | 44.9%     | 53,826      | 62,501            |
| simple_token_u256_dsl_rust              | 1,661,358,133 | +15.4%  | 752,589,613      | +41.8%            | 45.3%     | 52,760      | 61,435            |
| simple_token_u256_stylus                | 1,898,145,087 | +31.9%  | 989,376,567      | +86.4%            | 52.1%     | 61,521      | 70,196            |
| simple_token_u256_ink                   | 2,328,060,821 | +61.7%  | 1,419,292,301    | +167.4%           | 61.0%     | 81,282      | 89,957            |


### Store - delegate

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 2,395,214,979 | -       | 1,485,608,315    | -                 | 62.0%     | 139,613     | 148,288           |
| store_rust     | 2,636,671,014 | +10.1%  | 1,727,064,350    | +16.3%            | 65.5%     | 91,406      | 100,081           |
| Store_pvm      | 2,943,604,009 | +22.9%  | 2,033,997,345    | +36.9%            | 69.1%     | 206,477     | 215,152           |


### Store - deleteFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 2,774,835,960 | -       | 1,865,255,488    | -                 | 67.2%     | 180,891     | 189,566           |
| store_rust     | 3,471,944,875 | +25.1%  | 2,562,364,403    | +37.4%            | 73.8%     | 143,317     | 151,992           |
| Store_pvm      | 4,198,658,108 | +51.3%  | 3,289,077,636    | +76.3%            | 78.3%     | 248,432     | 257,107           |


### Store - delete_

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 2,358,280,450 | -       | 1,449,092,858    | -                 | 61.4%     | 129,356     | 138,031           |
| Store_pvm      | 2,818,362,834 | +19.5%  | 1,909,175,242    | +31.7%            | 67.7%     | 196,897     | 205,572           |
| store_rust     | 2,998,359,265 | +27.1%  | 2,089,171,673    | +44.2%            | 69.7%     | 122,587     | 131,262           |


### Store - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,639,118,420 | -       | 2,771,458        | +88.2%            | 0.2%      | 6,934       | 15,609            |
| store_rust     | 2,021,004,851 | +23.3%  | 1,472,359        | -                 | 0.1%      | 6,934       | 15,609            |
| Store_pvm      | 2,728,523,910 | +66.5%  | 12,524,738       | +750.7%           | 0.5%      | 6,934       | 15,609            |


### Store - revokeDelegation

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| store_rust     | 2,608,443,657 | -       | 1,698,836,993    | -                 | 65.1%     | 91,876      | 100,551           |
| Store_evm      | 2,812,878,541 | +7.8%   | 1,903,271,877    | +12.0%            | 67.7%     | 191,218     | 199,893           |
| Store_pvm      | 3,431,579,366 | +31.6%  | 2,521,972,702    | +48.5%            | 73.5%     | 258,759     | 267,434           |


### Store - set

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 2,553,247,394 | -       | 1,643,640,730    | -                 | 64.4%     | 149,902     | 158,577           |
| Store_pvm      | 2,948,345,025 | +15.5%  | 2,038,738,361    | +24.0%            | 69.1%     | 216,927     | 225,602           |
| store_rust     | 3,022,210,511 | +18.4%  | 2,112,603,847    | +28.5%            | 69.9%     | 111,920     | 120,595           |


### Store - setFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 2,974,530,484 | -       | 2,064,517,844    | -                 | 69.4%     | 201,440     | 210,115           |
| store_rust     | 3,509,126,473 | +18.0%  | 2,599,113,833    | +25.9%            | 74.1%     | 132,669     | 141,344           |
| Store_pvm      | 4,325,034,535 | +45.4%  | 3,415,021,895    | +65.4%            | 79.0%     | 268,465     | 277,140           |


### Store - set_update

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,705,688,610 | -       | 796,081,946      | -                 | 46.7%     | 78,039      | 86,714            |
| store_rust     | 1,781,271,828 | +4.4%   | 871,665,164      | +9.5%             | 48.9%     | 60,819      | 69,494            |
| Store_pvm      | 1,974,309,687 | +15.7%  | 1,064,703,023    | +33.7%            | 53.9%     | 145,095     | 153,770           |


### TetherToken - approve

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 1,290,605,008 | -       | 381,836,488      | -                 | 29.6%     | 43,751      | 52,426            |
| TetherToken_pvm | 1,501,669,496 | +16.4%  | 592,900,976      | +55.3%            | 39.5%     | 93,770      | 102,445           |


### TetherToken - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 3,497,129,450 | -       | 1,892,368,315    | -                 | 54.1%     | 150,692     | 159,367           |
| TetherToken_pvm | 4,628,305,323 | +32.3%  | 2,236,980,821    | +18.2%            | 48.3%     | 150,951     | 159,626           |


### TetherToken - transfer

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 1,818,383,584 | -       | 909,615,064      | -                 | 50.0%     | 105,485     | 114,160           |
| TetherToken_pvm | 2,086,105,022 | +14.7%  | 1,177,336,502    | +29.4%            | 56.4%     | 155,408     | 164,083           |


### TetherToken - transferFrom

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 2,105,131,434 | -       | 1,195,970,034    | -                 | 56.8%     | 126,185     | 134,860           |
| TetherToken_pvm | 2,454,405,401 | +16.6%  | 1,545,244,001    | +29.2%            | 63.0%     | 176,140     | 184,815           |


### W3S - buyTicket

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 5,878,648,001 | -       | 4,970,311,649    | -                 | 84.5%     | 410,815     | 419,490           |
| W3S_pvm        | 6,986,402,427 | +18.8%  | 6,078,066,075    | +22.3%            | 87.0%     | 526,526     | 535,201           |


### W3S - checkIn

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 3,168,645,660 | -       | 2,260,322,404    | -                 | 71.3%     | 201,406     | 210,081           |
| W3S_pvm        | 3,808,571,726 | +20.2%  | 2,900,248,470    | +28.3%            | 76.2%     | 316,792     | 325,467           |


### W3S - configurePaymentToken

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 2,099,275,768 | -       | 1,190,088,176    | -                 | 56.7%     | 122,516     | 131,191           |
| W3S_pvm        | 2,514,900,144 | +19.8%  | 1,605,712,552    | +34.9%            | 63.8%     | 215,979     | 224,654           |


### W3S - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 3,044,904,406 | -       | 1,333,402,182    | -                 | 43.8%     | 119,953     | 128,628           |
| W3S_pvm        | 4,917,904,402 | +61.5%  | 1,718,437,518    | +28.9%            | 34.9%     | 119,761     | 128,436           |


### W3S - grantVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,349,812,505 | -       | 441,476,153      | -                 | 32.7%     | 60,651      | 69,326            |
| W3S_pvm        | 1,689,132,080 | +25.1%  | 780,795,728      | +76.9%            | 46.2%     | 154,146     | 162,821           |


### W3S - pauseSales

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,265,282,732 | -       | 357,365,452      | -                 | 28.2%     | 50,266      | 58,941            |
| W3S_pvm        | 1,513,739,865 | +19.6%  | 605,822,585      | +69.5%            | 40.0%     | 143,793     | 152,468           |


### W3S - redeemTicketStaff

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 4,463,410,458 | -       | 3,554,655,034    | -                 | 79.6%     | 311,373     | 320,048           |
| W3S_pvm        | 5,335,825,089 | +19.5%  | 4,427,069,665    | +24.5%            | 83.0%     | 405,128     | 413,803           |


### W3S - revokeVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,353,908,542 | -       | 445,572,190      | -                 | 32.9%     | 60,683      | 69,358            |
| W3S_pvm        | 1,689,339,040 | +24.8%  | 781,002,688      | +75.3%            | 46.2%     | 154,339     | 163,014           |


### W3S - setMerkleRoot

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,205,940,763 | -       | 297,172,243      | -                 | 24.6%     | 40,204      | 48,879            |
| W3S_pvm        | 1,467,248,329 | +21.7%  | 558,479,809      | +87.9%            | 38.1%     | 133,763     | 142,438           |


### W3S - unpauseSales

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,266,827,842 | -       | 358,910,562      | -                 | 28.3%     | 50,298      | 58,973            |
| W3S_pvm        | 1,516,315,577 | +19.7%  | 608,398,297      | +69.5%            | 40.1%     | 143,954     | 152,629           |


### WETH9 - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 2,258,505,247 | -       | 715,949,346      | -                 | 31.7%     | 68,572      | 77,247            |
| WETH9_pvm      | 2,553,547,152 | +13.1%  | 765,794,390      | +7.0%             | 30.0%     | 68,476      | 77,151            |


### WETH9 - deposit

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 1,178,470,380 | -       | 270,448,332      | -                 | 22.9%     | 30,360      | 39,035            |
| WETH9_pvm      | 1,268,642,293 | +7.7%   | 360,620,245      | +33.3%            | 28.4%     | 45,882      | 54,557            |


### WETH9 - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 1,511,163,485 | -       | 602,394,965      | -                 | 39.9%     | 61,398      | 70,073            |
| WETH9_pvm      | 1,674,975,730 | +10.8%  | 766,207,210      | +27.2%            | 45.7%     | 76,920      | 85,595            |


### WETH9 - withdraw

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 1,706,253,387 | -       | 797,917,035      | -                 | 46.8%     | 46,052      | 54,727            |
| WETH9_pvm      | 1,823,615,356 | +6.9%   | 915,279,004      | +14.7%            | 50.2%     | 61,606      | 70,281            |


### XENCrypto - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| XENCrypto_evm  | 2,333,068,726 | -       | 653,973,786      | -                 | 28.0%     | 58,283      | 66,958            |
| XENCrypto_pvm  | 4,260,066,203 | +82.6%  | 932,677,525      | +42.6%            | 21.9%     | 58,219      | 66,894            |


### flipper - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| flipper_dsl_rust   | 1,708,267,175 | -       | 172,354,132      | -                 | 10.1%     | 17,191      | 25,866            |
| flipper_macro_rust | 1,725,988,257 | +1.0%   | 191,186,597      | +10.9%            | 11.1%     | 17,320      | 25,995            |
| flipper_ink        | 1,749,173,921 | +2.4%   | 202,855,756      | +17.7%            | 11.6%     | 17,191      | 25,866            |
| flipper_evm        | 1,755,797,102 | +2.8%   | 240,558,673      | +39.6%            | 13.7%     | 27,480      | 36,155            |
| flipper_pvm        | 1,829,960,804 | +7.1%   | 282,289,651      | +63.8%            | 15.4%     | 27,577      | 36,252            |
| flipper_stylus     | 2,227,964,550 | +30.4%  | 659,628,116      | +282.7%           | 29.6%     | 58,348      | 67,023            |


### flipper - flip

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| flipper_evm        | 1,146,733,892 | -       | 238,816,612      | -                 | 20.8%     | 28,819      | 37,494            |
| flipper_pvm        | 1,169,184,388 | +2.0%   | 261,267,108      | +9.4%             | 22.3%     | 30,951      | 39,626            |
| flipper_macro_rust | 1,171,444,834 | +2.2%   | 263,527,554      | +10.3%            | 22.5%     | 30,152      | 38,827            |
| flipper_ink        | 1,183,137,717 | +3.2%   | 275,220,437      | +15.2%            | 23.3%     | 30,869      | 39,544            |
| flipper_dsl_rust   | 1,234,824,639 | +7.7%   | 326,920,455      | +36.9%            | 26.5%     | 30,282      | 38,957            |
| flipper_stylus     | 1,269,246,658 | +10.7%  | 361,329,378      | +51.3%            | 28.5%     | 42,491      | 51,166            |


### incrementer - deploy

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| incrementer_dsl_rust   | 1,709,829,554 | -       | 172,354,132      | -                 | 10.1%     | 17,191      | 25,866            |
| incrementer_macro_rust | 1,723,904,462 | +0.8%   | 187,894,777      | +9.0%             | 10.9%     | 17,320      | 25,995            |
| incrementer_ink        | 1,742,767,628 | +1.9%   | 189,958,342      | +10.2%            | 10.9%     | 17,191      | 25,866            |
| incrementer_evm        | 1,756,864,281 | +2.8%   | 240,562,790      | +39.6%            | 13.7%     | 27,480      | 36,155            |
| incrementer_pvm        | 1,837,283,985 | +7.5%   | 282,155,291      | +63.7%            | 15.4%     | 27,577      | 36,252            |
| incrementer_stylus     | 2,242,181,195 | +31.1%  | 648,476,236      | +276.2%           | 28.9%     | 58,348      | 67,023            |


### incrementer - inc

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| incrementer_evm        | 1,147,883,152 | -       | 239,546,800      | -                 | 20.9%     | 28,974      | 37,649            |
| incrementer_macro_rust | 1,169,573,049 | +1.9%   | 261,236,697      | +9.1%             | 22.3%     | 30,323      | 38,998            |
| incrementer_pvm        | 1,176,600,280 | +2.5%   | 268,263,928      | +12.0%            | 22.8%     | 31,510      | 40,185            |
| incrementer_ink        | 1,189,738,710 | +3.6%   | 281,402,358      | +17.5%            | 23.7%     | 31,374      | 40,049            |
| incrementer_dsl_rust   | 1,232,599,236 | +7.4%   | 324,262,884      | +35.4%            | 26.3%     | 30,478      | 39,153            |
| incrementer_stylus     | 1,276,169,293 | +11.2%  | 367,832,941      | +53.6%            | 28.8%     | 44,162      | 52,837            |


