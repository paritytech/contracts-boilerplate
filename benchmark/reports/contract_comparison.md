# Revive Contract Comparison

Generated on: 2026-03-12
resolc: Solidity frontend for the revive compiler version 1.0.0+commit.b080c1d.llvm-18.1.8

Comparison of gas usage across different contract implementations.

## Chain: eth-rpc

### BenchERC1155 - create

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| BenchERC1155_evm     | 1,436,669,543 | -       | 528,333,191      | -                 | 36.8%     | 50,444 |
| BenchERC1155_pvm     | 1,579,145,395 | +9.9%   | 670,809,043      | +27.0%            | 42.5%     | 60,333 |
| bench_erc1155_stylus | 1,831,894,357 | +27.5%  | 923,558,005      | +74.8%            | 50.4%     | 70,465 |
| bench_erc1155_ink    | 2,092,587,444 | +45.7%  | 1,184,251,092    | +124.1%           | 56.6%     | 61,866 |


### BenchERC1155 - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| BenchERC1155_evm     | 1,530,467,862 | -       | 1,425,734        | -                 | 0.1%      | 6,934  |
| BenchERC1155_pvm     | 1,700,945,631 | +11.1%  | 12,524,738       | +778.5%           | 0.7%      | 6,934  |
| bench_erc1155_stylus | 1,868,983,682 | +22.1%  | 16,851,241       | +1081.9%          | 0.9%      | 6,934  |
| bench_erc1155_ink    | 2,072,719,229 | +35.4%  | 194,396,806      | +13534.9%         | 9.4%      | 17,191 |


### BenchERC20 - deploy

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| BenchERC20_evm         | 1,897,343,440 | -       | 369,074,448      | -                 | 19.5%     | 27,448 |
| BenchERC20_pvm         | 2,119,951,698 | +11.7%  | 451,510,259      | +22.3%            | 21.3%     | 27,448 |
| bench_erc20_macro_rust | 2,189,357,069 | +15.4%  | 547,331,110      | +48.3%            | 25.0%     | 27,448 |
| bench_erc20_ink        | 2,705,290,120 | +42.6%  | 853,695,984      | +131.3%           | 31.6%     | 27,448 |
| bench_erc20_stylus     | 2,792,818,995 | +47.2%  | 951,404,483      | +157.8%           | 34.1%     | 58,219 |


### BenchERC20 - transfer

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| BenchERC20_evm         | 1,440,642,256 | -       | 531,873,736      | -                 | 36.9%     | 50,359 |
| BenchERC20_pvm         | 1,571,019,209 | +9.0%   | 662,250,689      | +24.5%            | 42.2%     | 59,222 |
| bench_erc20_stylus     | 1,953,947,940 | +35.6%  | 1,045,179,420    | +96.5%            | 53.5%     | 69,961 |
| bench_erc20_macro_rust | 2,050,381,364 | +42.3%  | 1,141,612,844    | +114.6%           | 55.7%     | 57,582 |
| bench_erc20_ink        | 2,525,950,492 | +75.3%  | 1,617,181,972    | +204.1%           | 64.0%     | 91,171 |


### BenchERC721 - deploy

| Implementation          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ----------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| BenchERC721_evm         | 1,529,619,794 | -       | 1,415,230        | +2006.6%          | 0.1%      | 6,934  |
| bench_erc721_macro_rust | 1,597,177,490 | +4.4%   | 67,180           | -                 | 0.0%      | 6,934  |
| BenchERC721_pvm         | 1,656,651,381 | +8.3%   | 12,524,738       | +18543.6%         | 0.8%      | 6,934  |
| bench_erc721_stylus     | 1,732,163,378 | +13.2%  | 17,455,861       | +25883.7%         | 1.0%      | 6,934  |
| bench_erc721_ink        | 1,933,389,094 | +26.4%  | 179,879,814      | +267658.0%        | 9.3%      | 17,191 |


### BenchERC721 - mint

| Implementation          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ----------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| BenchERC721_evm         | 1,568,617,213 | -       | 660,280,861      | -                 | 42.1%     | 70,970 |
| BenchERC721_pvm         | 1,679,392,887 | +7.1%   | 771,056,535      | +16.8%            | 45.9%     | 78,065 |
| bench_erc721_macro_rust | 1,727,447,116 | +10.1%  | 819,110,764      | +24.1%            | 47.4%     | 44,375 |
| bench_erc721_stylus     | 2,029,212,247 | +29.4%  | 1,120,875,895    | +69.8%            | 55.2%     | 82,447 |
| bench_erc721_ink        | 2,169,230,400 | +38.3%  | 1,260,894,048    | +91.0%            | 58.1%     | 86,666 |


### BenchStorage - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| BenchStorage_evm         | 1,519,834,394 | -       | 1,294,030        | +1826.2%          | 0.1%      | 6,934  |
| bench_storage_macro_rust | 1,568,362,067 | +3.2%   | 67,180           | -                 | 0.0%      | 6,934  |
| BenchStorage_pvm         | 1,571,557,695 | +3.4%   | 12,121,658       | +17943.6%         | 0.8%      | 6,934  |
| bench_storage_stylus     | 1,686,792,462 | +11.0%  | 9,259,901        | +13683.7%         | 0.5%      | 6,934  |
| bench_storage_ink        | 1,758,483,181 | +15.7%  | 179,879,814      | +267658.0%        | 10.2%     | 17,191 |


### BenchStorage - readWrite_100

| Implementation           | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov       |
| ------------------------ | -------------- | ------- | ---------------- | ----------------- | --------- | --------- |
| bench_storage_ink        | 32,369,389,281 | -       | 31,460,620,761   | -                 | 97.2%     | 2,087,668 |
| BenchStorage_evm         | 32,874,004,245 | +1.6%   | 31,965,235,725   | +1.6%             | 97.2%     | 3,095,499 |
| BenchStorage_pvm         | 35,647,987,302 | +10.1%  | 34,739,218,782   | +10.4%            | 97.5%     | 3,098,064 |
| bench_storage_stylus     | 51,893,119,325 | +60.3%  | 50,984,350,805   | +62.1%            | 98.2%     | 3,105,396 |
| bench_storage_macro_rust | 52,770,200,679 | +63.0%  | 51,861,432,159   | +64.8%            | 98.3%     | 2,066,514 |


### BenchStorage - read_100

| Implementation           | ref_time       | vs Best  | metered_ref_time | vs Best (metered) | % metered | pov       |
| ------------------------ | -------------- | -------- | ---------------- | ----------------- | --------- | --------- |
| BenchStorage_evm         | 1,008,874,142  | -        | 100,105,622      | -                 | 9.9%      | 8,799     |
| BenchStorage_pvm         | 2,541,964,523  | +152.0%  | 1,633,196,003    | +1531.5%          | 64.2%     | 11,364    |
| bench_storage_ink        | 11,596,567,180 | +1049.5% | 10,687,798,660   | +10576.5%         | 92.2%     | 1,050,111 |
| bench_storage_stylus     | 16,072,466,906 | +1493.1% | 15,163,698,386   | +15047.7%         | 94.3%     | 1,047,596 |
| bench_storage_macro_rust | 22,201,508,199 | +2100.6% | 21,292,739,679   | +21170.3%         | 95.9%     | 1,039,214 |


### BenchStorage - write_100

| Implementation           | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov       |
| ------------------------ | -------------- | ------- | ---------------- | ----------------- | --------- | --------- |
| bench_storage_ink        | 21,810,252,993 | -       | 20,901,484,473   | -                 | 95.8%     | 1,060,352 |
| BenchStorage_evm         | 26,012,473,834 | +19.3%  | 25,103,705,314   | +20.1%            | 96.5%     | 2,066,567 |
| BenchStorage_pvm         | 28,435,903,318 | +30.4%  | 27,527,134,798   | +31.7%            | 96.8%     | 2,069,100 |
| bench_storage_macro_rust | 31,533,738,531 | +44.6%  | 30,624,970,011   | +46.5%            | 97.1%     | 1,039,198 |
| bench_storage_stylus     | 36,356,024,921 | +66.7%  | 35,447,256,401   | +69.6%            | 97.5%     | 2,076,432 |


### CoinTool_App - deploy

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| CoinTool_App_evm | 1,802,555,076 | -       | 240,332,528      | -                 | 13.3%     | 27,480 |
| CoinTool_App_pvm | 2,361,524,524 | +31.0%  | 378,538,815      | +57.5%            | 16.0%     | 27,448 |


### CoinTool_App - t

| Implementation   | ref_time        | vs Best | metered_ref_time | vs Best (metered) | % metered | pov        |
| ---------------- | --------------- | ------- | ---------------- | ----------------- | --------- | ---------- |
| CoinTool_App_evm | 189,356,933,269 | -       | 188,443,934,741  | -                 | 99.5%     | 9,770,932  |
| CoinTool_App_pvm | 223,394,463,534 | +18.0%  | 222,481,465,006  | +18.1%            | 99.6%     | 17,147,686 |


### Computation - deploy

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Computation_evm        | 1,516,735,684 | -       | 1,255,650        | +1769.1%          | 0.1%      | 6,934  |
| computation_macro_rust | 1,534,327,976 | +1.2%   | 67,180           | -                 | 0.0%      | 6,934  |
| computation_stylus     | 1,560,004,067 | +2.9%   | 9,797,341        | +14483.7%         | 0.6%      | 6,934  |
| Computation_pvm        | 1,564,387,733 | +3.1%   | 12,457,558       | +18443.6%         | 0.8%      | 6,934  |
| computation_ink        | 1,728,319,059 | +13.9%  | 178,804,934      | +266058.0%        | 10.3%     | 17,191 |


### Computation - odd_product_10

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Computation_evm        | 924,281,963   | -       | 15,945,611       | -                 | 1.7%      | 8,510  |
| computation_macro_rust | 948,964,969   | +2.7%   | 40,628,617       | +154.8%           | 4.3%      | 9,702  |
| computation_stylus     | 969,693,221   | +4.9%   | 61,356,869       | +284.8%           | 6.3%      | 10,692 |
| Computation_pvm        | 999,675,452   | +8.2%   | 91,339,100       | +472.8%           | 9.1%      | 10,799 |
| computation_ink        | 1,037,385,110 | +12.2%  | 129,048,758      | +709.3%           | 12.4%     | 20,906 |


### Computation - triangle_10

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Computation_evm        | 921,114,757   | -       | 12,778,405       | -                 | 1.4%      | 8,510  |
| computation_macro_rust | 947,487,009   | +2.9%   | 39,150,657       | +206.4%           | 4.1%      | 9,702  |
| computation_stylus     | 967,677,821   | +5.1%   | 59,341,469       | +364.4%           | 6.1%      | 10,692 |
| Computation_pvm        | 990,928,956   | +7.6%   | 82,605,700       | +546.4%           | 8.3%      | 10,796 |
| computation_ink        | 1,035,168,170 | +12.4%  | 126,831,818      | +892.5%           | 12.3%     | 20,906 |


### DocumentAccessManagement - configurePublicAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 1,441,014,072 | -       | 531,826,480      | -                 | 36.9%     | 69,247  |
| DocumentAccessManagement_pvm | 1,760,774,143 | +22.2%  | 851,586,551      | +60.1%            | 48.4%     | 149,808 |


### DocumentAccessManagement - createDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 4,176,446,149 | -       | 3,264,298,861    | -                 | 78.2%     | 295,963 |
| DocumentAccessManagement_pvm | 5,239,462,521 | +25.5%  | 4,327,315,233    | +32.6%            | 82.6%     | 396,879 |


### DocumentAccessManagement - createDocument2

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 4,176,458,885 | -       | 3,264,311,597    | -                 | 78.2%     | 295,995 |
| DocumentAccessManagement_pvm | 5,239,511,889 | +25.5%  | 4,327,377,697    | +32.6%            | 82.6%     | 396,940 |


### DocumentAccessManagement - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov   |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----- |
| DocumentAccessManagement_evm | 1,665,620,545 | -       | 3,099,708        | -                 | 0.2%      | 6,934 |
| DocumentAccessManagement_pvm | 2,972,738,244 | +78.5%  | 12,524,738       | +304.1%           | 0.4%      | 6,934 |


### DocumentAccessManagement - grantAccessWithShare

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 3,938,354,023 | -       | 3,026,625,807    | -                 | 76.9%     | 285,674 |
| DocumentAccessManagement_pvm | 4,680,201,647 | +18.8%  | 3,768,473,431    | +24.5%            | 80.5%     | 366,204 |


### DocumentAccessManagement - registerKeys

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 1,563,012,802 | -       | 653,825,210      | -                 | 41.8%     | 58,894  |
| DocumentAccessManagement_pvm | 2,139,490,508 | +36.9%  | 1,230,302,916    | +88.2%            | 57.5%     | 160,098 |


### DocumentAccessManagement - revokeAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 4,888,574,673 | -       | 3,979,387,081    | -                 | 81.4%     | 419,073 |
| DocumentAccessManagement_pvm | 5,698,565,321 | +16.6%  | 4,789,377,729    | +20.4%            | 84.0%     | 500,280 |


### DocumentAccessManagement - transferOwnership

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 4,211,215,633 | -       | 3,302,028,041    | -                 | 78.4%     | 346,954 |
| DocumentAccessManagement_pvm | 4,977,427,140 | +18.2%  | 4,068,239,548    | +23.2%            | 81.7%     | 437,773 |


### DocumentAccessManagement - updateDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DocumentAccessManagement_evm | 1,895,501,146 | -       | 983,353,858      | -                 | 51.9%     | 100,824 |
| DocumentAccessManagement_pvm | 2,346,163,758 | +23.8%  | 1,434,016,470    | +45.8%            | 61.1%     | 181,417 |


### DotNS - createSubdomain

| Implementation | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 3,461,082,464  | -       | 2,549,773,320    | -                 | 73.7%     | 83,613  |
| DotNS_evm      | 4,697,410,485  | +35.7%  | 3,786,101,341    | +48.5%            | 80.6%     | 294,479 |
| DotNS_pvm      | 14,014,198,390 | +304.9% | 13,102,889,246   | +413.9%           | 93.5%     | 382,054 |


### DotNS - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov   |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----- |
| DotNS_evm      | 1,644,549,317 | -       | 2,838,724        | +76.7%            | 0.2%      | 6,934 |
| dotns_rust     | 1,883,005,579 | +14.5%  | 1,606,719        | -                 | 0.1%      | 6,934 |
| DotNS_pvm      | 2,734,451,286 | +66.3%  | 12,524,738       | +679.5%           | 0.5%      | 6,934 |


### DotNS - register

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 2,766,418,470 | -       | 1,856,811,806    | -                 | 67.1%     | 72,573  |
| DotNS_evm      | 4,191,679,786 | +51.5%  | 3,282,073,122    | +76.8%            | 78.3%     | 263,190 |
| DotNS_pvm      | 8,366,666,877 | +202.4% | 7,457,060,213    | +301.6%           | 89.1%     | 350,830 |


### DotNS - register_with_duration

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 2,764,818,539 | -       | 1,855,211,875    | -                 | 67.1%     | 72,613  |
| DotNS_evm      | 4,184,583,251 | +51.4%  | 3,274,976,587    | +76.5%            | 78.3%     | 263,222 |
| DotNS_pvm      | 8,211,640,133 | +197.0% | 7,302,033,469    | +293.6%           | 88.9%     | 350,732 |


### DotNS - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 2,057,428,764 | -       | 1,148,241,172    | -                 | 55.8%     | 52,669  |
| DotNS_evm      | 4,291,245,819 | +108.6% | 3,382,058,227    | +194.5%           | 78.8%     | 284,024 |
| DotNS_pvm      | 7,283,567,933 | +254.0% | 6,374,380,341    | +455.1%           | 87.5%     | 352,214 |


### DotNS - renew

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DotNS_evm      | 1,510,134,083 | -       | 600,527,419      | -                 | 39.8%     | 57,794  |
| dotns_rust     | 2,143,231,510 | +41.9%  | 1,233,624,846    | +105.4%           | 57.6%     | 52,765  |
| DotNS_pvm      | 3,956,687,227 | +162.0% | 3,047,080,563    | +407.4%           | 77.0%     | 124,885 |


### DotNS - setAddress

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DotNS_evm      | 1,582,250,822 | -       | 672,644,158      | -                 | 42.5%     | 68,083  |
| dotns_rust     | 2,223,424,195 | +40.5%  | 1,313,817,531    | +95.3%            | 59.1%     | 52,765  |
| DotNS_pvm      | 4,001,110,584 | +152.9% | 3,091,503,920    | +359.6%           | 77.3%     | 145,463 |


### DotNS - setMetadata

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| DotNS_evm      | 1,505,155,170 | -       | 595,548,506      | -                 | 39.6%     | 57,762  |
| dotns_rust     | 2,162,841,014 | +43.7%  | 1,253,234,350    | +110.4%           | 57.9%     | 52,765  |
| DotNS_pvm      | 3,835,591,192 | +154.8% | 2,925,984,528    | +391.3%           | 76.3%     | 124,853 |


### DotNS - setSubdomainOwner

| Implementation | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 3,654,099,034  | -       | 2,743,222,058    | -                 | 75.1%     | 84,220  |
| DotNS_evm      | 4,381,611,068  | +19.9%  | 3,470,734,092    | +26.5%            | 79.2%     | 294,636 |
| DotNS_pvm      | 10,761,871,448 | +194.5% | 9,850,994,472    | +259.1%           | 91.5%     | 372,211 |


### DotNS - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| dotns_rust     | 2,927,472,988 | -       | 2,017,866,324    | -                 | 68.9%     | 73,279  |
| DotNS_evm      | 4,059,964,795 | +38.7%  | 3,150,358,131    | +56.1%            | 77.6%     | 284,024 |
| DotNS_pvm      | 6,901,842,570 | +135.8% | 5,992,235,906    | +197.0%           | 86.8%     | 361,664 |


### Escrow - create_simple

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| escrow_rust    | 3,406,590,503 | -       | 2,496,892,167    | -                 | 73.3%     | 93,287  |
| Escrow_evm     | 4,408,869,726 | +29.4%  | 3,499,171,390    | +40.1%            | 79.4%     | 310,692 |
| Escrow_pvm     | 5,174,859,695 | +51.9%  | 4,265,161,359    | +70.8%            | 82.4%     | 361,141 |


### Escrow - create_with_arbiter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| escrow_rust    | 3,406,603,239 | -       | 2,496,904,903    | -                 | 73.3%     | 93,319  |
| Escrow_evm     | 4,408,932,894 | +29.4%  | 3,499,234,558    | +40.1%            | 79.4%     | 310,820 |
| Escrow_pvm     | 5,172,449,207 | +51.8%  | 4,262,750,871    | +70.7%            | 82.4%     | 361,268 |


### Escrow - create_with_expiry

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| escrow_rust    | 3,406,603,239 | -       | 2,496,904,903    | -                 | 73.3%     | 93,319  |
| Escrow_evm     | 4,408,945,630 | +29.4%  | 3,499,247,294    | +40.1%            | 79.4%     | 310,852 |
| Escrow_pvm     | 5,170,988,671 | +51.8%  | 4,261,290,335    | +70.7%            | 82.4%     | 361,267 |


### Escrow - create_with_releaseTime

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| escrow_rust    | 3,406,603,239 | -       | 2,496,904,903    | -                 | 73.3%     | 93,319  |
| Escrow_evm     | 4,408,970,590 | +29.4%  | 3,499,272,254    | +40.1%            | 79.4%     | 310,884 |
| Escrow_pvm     | 5,169,196,951 | +51.7%  | 4,259,498,615    | +70.6%            | 82.4%     | 361,202 |


### Escrow - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| escrow_rust    | 1,967,400,741 | -       | 248,585,939      | -                 | 12.6%     | 17,191 |
| Escrow_evm     | 1,987,160,734 | +1.0%   | 408,943,935      | +64.5%            | 20.6%     | 37,737 |
| Escrow_pvm     | 2,485,693,665 | +26.3%  | 430,806,308      | +73.3%            | 17.3%     | 37,705 |


### Escrow - refund

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Escrow_evm     | 2,723,771,047 | -       | 1,815,434,695    | -                 | 66.7%     | 161,696 |
| escrow_rust    | 2,864,154,358 | +5.2%   | 1,955,818,006    | +7.7%             | 68.3%     | 77,981  |
| Escrow_pvm     | 2,879,143,793 | +5.7%   | 1,970,807,441    | +8.6%             | 68.5%     | 191,274 |


### Escrow - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Escrow_evm     | 2,721,883,205 | -       | 1,813,546,853    | -                 | 66.6%     | 161,696 |
| escrow_rust    | 2,857,300,046 | +5.0%   | 1,948,963,694    | +7.5%             | 68.2%     | 77,979  |
| Escrow_pvm     | 2,881,562,273 | +5.9%   | 1,973,225,921    | +8.8%             | 68.5%     | 191,274 |


### FiatTokenProxy - approve

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 1,472,036,931 | -       | 563,268,411      | -                 | 38.3%     | 70,864  |
| FiatTokenProxy_pvm | 1,785,008,640 | +21.3%  | 876,240,120      | +55.6%            | 49.1%     | 167,515 |


### FiatTokenProxy - changeAdmin

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| FiatTokenProxy_evm | 1,244,108,749 | -       | 335,772,397      | -                 | 27.0%     | 40,413 |
| FiatTokenProxy_pvm | 1,316,168,643 | +5.8%   | 407,832,291      | +21.5%            | 31.0%     | 48,937 |


### FiatTokenProxy - configureMinter

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 1,779,640,348 | -       | 870,871,828      | -                 | 48.9%     | 101,699 |
| FiatTokenProxy_pvm | 2,097,070,890 | +17.8%  | 1,188,302,370    | +36.4%            | 56.7%     | 198,318 |


### FiatTokenProxy - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| FiatTokenProxy_evm | 1,943,797,882 | -       | 406,670,040      | -                 | 20.9%     | 31,458 |
| FiatTokenProxy_pvm | 2,118,265,189 | +9.0%   | 449,195,577      | +10.5%            | 21.2%     | 31,458 |


### FiatTokenProxy - initialize

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 3,431,996,811 | -       | 2,518,173,235    | -                 | 73.4%     | 246,711 |
| FiatTokenProxy_pvm | 4,011,290,984 | +16.9%  | 3,097,467,408    | +23.0%            | 77.2%     | 343,074 |


### FiatTokenProxy - mint

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 2,384,662,411 | -       | 1,475,893,891    | -                 | 61.9%     | 163,433 |
| FiatTokenProxy_pvm | 2,900,762,989 | +21.6%  | 1,991,994,469    | +35.0%            | 68.7%     | 260,021 |


### FiatTokenProxy - transfer

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 2,217,570,837 | -       | 1,308,802,317    | -                 | 59.0%     | 153,176 |
| FiatTokenProxy_pvm | 2,695,482,940 | +21.6%  | 1,786,714,420    | +36.5%            | 66.3%     | 249,731 |


### FiatTokenProxy - transferFrom

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FiatTokenProxy_evm | 2,678,095,889 | -       | 1,768,921,393    | -                 | 66.1%     | 194,457 |
| FiatTokenProxy_pvm | 3,324,735,262 | +24.1%  | 2,415,560,766    | +36.6%            | 72.7%     | 291,108 |


### FiatTokenV2_2 - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| FiatTokenV2_2_evm | 2,408,252,618 | -       | 648,977,032      | -                 | 26.9%     | 58,283 |
| FiatTokenV2_2_pvm | 3,859,408,363 | +60.3%  | 681,621,501      | +5.0%             | 17.7%     | 58,477 |


### Fibonacci - deploy

| Implementation                      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ----------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| fibonacci_u32_rust                  | 1,513,984,835 | -       | 67,180           | -                 | 0.0%      | 6,934  |
| Fibonacci_evm                       | 1,515,072,570 | +0.1%   | 1,235,450        | +1739.0%          | 0.1%      | 6,934  |
| fibonacci_u128_rust                 | 1,515,289,502 | +0.1%   | 67,180           | -                 | 0.0%      | 6,934  |
| fibonacci_u32_macro_bump_alloc_rust | 1,517,157,914 | +0.2%   | 67,180           | -                 | 0.0%      | 6,934  |
| fibonacci_u32_macro_no_alloc_rust   | 1,517,898,836 | +0.3%   | 67,180           | -                 | 0.0%      | 6,934  |
| fibonacci_u256_rust                 | 1,526,000,657 | +0.8%   | 67,180           | -                 | 0.0%      | 6,934  |
| Fibonacci_pvm                       | 1,540,422,459 | +1.7%   | 11,718,578       | +17343.6%         | 0.8%      | 6,934  |
| fibonacci_u32_stylus                | 1,543,622,438 | +2.0%   | 8,991,181        | +13283.7%         | 0.6%      | 6,934  |
| fibonacci_u32_ink                   | 1,711,041,752 | +13.0%  | 178,939,294      | +266258.0%        | 10.5%     | 17,191 |


### Fibonacci - fib_10

| Implementation                      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ----------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| fibonacci_u32_rust                  | 1,029,742,046 | -       | 121,405,694      | -                 | 11.8%     | 8,439  |
| fibonacci_u32_macro_bump_alloc_rust | 1,033,932,251 | +0.4%   | 125,595,899      | +3.5%             | 12.1%     | 8,636  |
| Fibonacci_evm                       | 1,040,581,334 | +1.1%   | 132,244,982      | +8.9%             | 12.7%     | 8,410  |
| fibonacci_u32_macro_no_alloc_rust   | 1,040,860,649 | +1.1%   | 132,524,297      | +9.2%             | 12.7%     | 8,682  |
| fibonacci_u32_stylus                | 1,041,803,153 | +1.2%   | 133,466,801      | +9.9%             | 12.8%     | 9,725  |
| fibonacci_u128_rust                 | 1,190,303,147 | +15.6%  | 281,966,795      | +132.3%           | 23.7%     | 8,520  |
| Fibonacci_pvm                       | 1,328,501,149 | +29.0%  | 420,164,797      | +246.1%           | 31.6%     | 9,357  |
| fibonacci_u32_ink                   | 1,372,687,822 | +33.3%  | 464,351,470      | +282.5%           | 33.8%     | 30,082 |
| fibonacci_u256_rust                 | 4,493,234,036 | +336.3% | 3,584,897,684    | +2852.8%          | 79.8%     | 9,185  |


### Fibonacci_u256 - deploy

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Fibonacci_u256_iter_evm                  | 1,514,289,738 | -       | 1,225,754        | +1724.6%          | 0.1%      | 6,934  |
| Fibonacci_u256_evm                       | 1,514,354,974 | +0.0%   | 1,226,562        | +1725.8%          | 0.1%      | 6,934  |
| fibonacci_u256_iter_primitive_types_rust | 1,523,922,854 | +0.6%   | 67,180           | -                 | 0.0%      | 6,934  |
| fibonacci_u256_iter_rust                 | 1,524,551,027 | +0.7%   | 67,180           | -                 | 0.0%      | 6,934  |
| fibonacci_u256_primitive_types_rust      | 1,524,712,097 | +0.7%   | 67,180           | -                 | 0.0%      | 6,934  |
| fibonacci_u256_rust                      | 1,526,000,657 | +0.8%   | 67,180           | -                 | 0.0%      | 6,934  |
| Fibonacci_u256_iter_pvm                  | 1,541,582,163 | +1.8%   | 11,718,578       | +17343.6%         | 0.8%      | 6,934  |
| Fibonacci_u256_pvm                       | 1,543,160,649 | +1.9%   | 11,718,578       | +17343.6%         | 0.8%      | 6,934  |
| fibonacci_u256_iter_ink                  | 1,721,970,554 | +13.7%  | 179,140,834      | +266558.0%        | 10.4%     | 17,191 |
| fibonacci_u256_ink                       | 1,723,146,365 | +13.8%  | 179,140,834      | +266558.0%        | 10.4%     | 17,191 |


### Fibonacci_u256 - fib_10

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Fibonacci_u256_iter_evm                  | 914,466,945   | -       | 6,130,593        | -                 | 0.7%      | 8,362  |
| Fibonacci_u256_iter_pvm                  | 957,114,765   | +4.7%   | 48,778,413       | +695.7%           | 5.1%      | 9,429  |
| fibonacci_u256_iter_primitive_types_rust | 973,998,039   | +6.5%   | 65,661,687       | +971.0%           | 6.7%      | 9,056  |
| Fibonacci_u256_evm                       | 1,018,257,585 | +11.3%  | 109,921,233      | +1693.0%          | 10.8%     | 8,366  |
| fibonacci_u256_iter_rust                 | 1,065,696,026 | +16.5%  | 157,359,674      | +2466.8%          | 14.8%     | 9,095  |
| fibonacci_u256_iter_ink                  | 1,271,876,660 | +39.1%  | 363,540,308      | +5829.9%          | 28.6%     | 30,748 |
| Fibonacci_u256_pvm                       | 1,629,950,099 | +78.2%  | 721,613,747      | +11670.7%         | 44.3%     | 9,527  |
| fibonacci_u256_primitive_types_rust      | 2,933,518,096 | +220.8% | 2,025,181,744    | +32934.0%         | 69.0%     | 9,105  |
| fibonacci_u256_ink                       | 3,200,802,309 | +250.0% | 2,292,465,957    | +37293.9%         | 71.6%     | 30,821 |
| fibonacci_u256_rust                      | 4,493,234,036 | +391.4% | 3,584,897,684    | +58375.5%         | 79.8%     | 9,185  |


### Fibonacci_u256 - fib_15

| Implementation                           | ref_time       | vs Best  | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------------------------- | -------------- | -------- | ---------------- | ----------------- | --------- | ------ |
| Fibonacci_u256_iter_evm                  | 916,885,255    | -        | 8,548,903        | -                 | 0.9%      | 8,362  |
| Fibonacci_u256_iter_pvm                  | 977,940,565    | +6.7%    | 69,604,213       | +714.2%           | 7.1%      | 9,429  |
| fibonacci_u256_iter_primitive_types_rust | 1,000,198,239  | +9.1%    | 91,861,887       | +974.5%           | 9.2%      | 9,056  |
| fibonacci_u256_iter_rust                 | 1,142,953,026  | +24.7%   | 234,616,674      | +2644.4%          | 20.5%     | 9,095  |
| fibonacci_u256_iter_ink                  | 1,312,520,560  | +43.1%   | 404,184,208      | +4627.9%          | 30.8%     | 30,748 |
| Fibonacci_u256_evm                       | 2,123,924,519  | +131.6%  | 1,215,588,167    | +14119.2%         | 57.2%     | 8,366  |
| Fibonacci_u256_pvm                       | 8,869,266,899  | +867.3%  | 7,960,930,547    | +93022.2%         | 89.8%     | 9,527  |
| fibonacci_u256_primitive_types_rust      | 23,336,621,536 | +2445.2% | 22,428,285,184   | +262252.8%        | 96.1%     | 9,105  |
| fibonacci_u256_ink                       | 23,543,578,109 | +2467.8% | 22,635,241,757   | +264673.6%        | 96.1%     | 30,821 |
| fibonacci_u256_rust                      | 40,745,510,256 | +4343.9% | 39,837,173,904   | +465891.6%        | 97.8%     | 9,185  |


### Fibonacci_u256 - fib_5

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Fibonacci_u256_iter_evm                  | 912,048,635   | -       | 3,712,283        | -                 | 0.4%      | 8,362  |
| Fibonacci_u256_evm                       | 918,537,402   | +0.7%   | 10,201,050       | +174.8%           | 1.1%      | 8,366  |
| Fibonacci_u256_iter_pvm                  | 936,288,965   | +2.7%   | 27,952,613       | +653.0%           | 3.0%      | 9,429  |
| fibonacci_u256_iter_primitive_types_rust | 947,797,839   | +3.9%   | 39,461,487       | +963.0%           | 4.2%      | 9,056  |
| Fibonacci_u256_pvm                       | 976,960,499   | +7.1%   | 68,624,147       | +1748.6%          | 7.0%      | 9,527  |
| fibonacci_u256_iter_rust                 | 988,439,026   | +8.4%   | 80,102,674       | +2057.8%          | 8.1%      | 9,095  |
| fibonacci_u256_primitive_types_rust      | 1,094,062,516 | +20.0%  | 185,726,164      | +4903.0%          | 17.0%     | 9,105  |
| fibonacci_u256_rust                      | 1,223,381,896 | +34.1%  | 315,045,544      | +8386.6%          | 25.8%     | 9,185  |
| fibonacci_u256_iter_ink                  | 1,231,232,760 | +35.0%  | 322,896,408      | +8598.1%          | 26.2%     | 30,748 |
| fibonacci_u256_ink                       | 1,366,788,309 | +49.9%  | 458,451,957      | +12249.6%         | 33.5%     | 30,821 |


### FungibleCredential - burn

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FungibleCredential_evm   | 1,776,126,473 | -       | 867,371,049      | -                 | 48.8%     | 97,804  |
| FungibleCredential_pvm   | 2,080,207,035 | +17.1%  | 1,171,451,611    | +35.1%            | 56.3%     | 156,353 |
| fungible_credential_rust | 2,267,817,993 | +27.7%  | 1,359,062,569    | +56.7%            | 59.9%     | 67,350  |


### FungibleCredential - createClass_nontransferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| fungible_credential_rust | 2,138,586,436 | -       | 1,228,128,532    | -                 | 57.4%     | 57,231  |
| FungibleCredential_evm   | 2,509,023,193 | +17.3%  | 1,598,565,289    | +30.2%            | 63.7%     | 139,190 |
| FungibleCredential_pvm   | 3,564,927,640 | +66.7%  | 2,654,469,736    | +116.1%           | 74.5%     | 249,186 |


### FungibleCredential - createClass_transferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| fungible_credential_rust | 2,125,416,575 | -       | 1,214,958,671    | -                 | 57.2%     | 57,231  |
| FungibleCredential_evm   | 2,509,011,373 | +18.0%  | 1,598,553,469    | +31.6%            | 63.7%     | 139,190 |
| FungibleCredential_pvm   | 3,564,990,332 | +67.7%  | 2,654,532,428    | +118.5%           | 74.5%     | 249,250 |


### FungibleCredential - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| FungibleCredential_evm   | 1,866,872,489 | -       | 240,189,727      | -                 | 12.9%     | 27,480 |
| fungible_credential_rust | 2,044,141,156 | +9.5%   | 248,044,968      | +3.3%             | 12.1%     | 17,191 |
| FungibleCredential_pvm   | 2,826,456,859 | +51.4%  | 257,434,062      | +7.2%             | 9.1%      | 27,448 |


### FungibleCredential - issue

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FungibleCredential_evm   | 3,510,993,100 | -       | 2,601,805,508    | -                 | 74.1%     | 251,982 |
| FungibleCredential_pvm   | 4,022,410,175 | +14.6%  | 3,113,222,583    | +19.7%            | 77.4%     | 310,147 |
| fungible_credential_rust | 4,034,749,383 | +14.9%  | 3,125,561,791    | +20.1%            | 77.5%     | 149,473 |


### FungibleCredential - issue_more

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FungibleCredential_evm   | 1,847,043,362 | -       | 937,855,770      | -                 | 50.8%     | 108,192 |
| FungibleCredential_pvm   | 2,150,790,107 | +16.4%  | 1,241,602,515    | +32.4%            | 57.7%     | 166,741 |
| fungible_credential_rust | 2,478,060,252 | +34.2%  | 1,568,872,660    | +67.3%            | 63.3%     | 77,707  |


### FungibleCredential - revoke

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FungibleCredential_evm   | 1,777,521,319 | -       | 868,333,727      | -                 | 48.9%     | 97,903  |
| FungibleCredential_pvm   | 2,080,211,001 | +17.0%  | 1,171,023,409    | +34.9%            | 56.3%     | 156,452 |
| fungible_credential_rust | 2,312,256,592 | +30.1%  | 1,403,069,000    | +61.6%            | 60.7%     | 67,449  |


### FungibleCredential - transfer

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| FungibleCredential_evm   | 3,711,462,975 | -       | 2,802,288,479    | -                 | 75.5%     | 272,621 |
| fungible_credential_rust | 4,214,235,721 | +13.5%  | 3,305,061,225    | +17.9%            | 78.4%     | 159,657 |
| FungibleCredential_pvm   | 4,351,172,212 | +17.2%  | 3,441,997,716    | +22.8%            | 79.1%     | 330,882 |


### KeyRegistry - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov   |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----- |
| KeyRegistry_evm   | 1,581,433,487 | -       | 2,056,984        | +39.7%            | 0.1%      | 6,934 |
| key_registry_rust | 1,813,884,938 | +14.7%  | 1,472,359        | -                 | 0.1%      | 6,934 |
| KeyRegistry_pvm   | 2,148,800,766 | +35.9%  | 12,524,738       | +750.7%           | 0.6%      | 6,934 |


### KeyRegistry - fetchPrekeyBundle

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| KeyRegistry_evm   | 2,526,794,598 | -       | 1,618,458,246    | -                 | 64.1%     | 187,326 |
| KeyRegistry_pvm   | 3,379,396,329 | +33.7%  | 2,471,073,073    | +52.7%            | 73.1%     | 221,925 |
| key_registry_rust | 3,614,799,765 | +43.1%  | 2,706,463,413    | +67.2%            | 74.9%     | 150,352 |


### KeyRegistry - registerIdentity

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| key_registry_rust | 2,698,518,110 | -       | 1,787,641,134    | -                 | 66.2%     | 89,095  |
| KeyRegistry_evm   | 3,194,682,332 | +18.4%  | 2,283,805,356    | +27.8%            | 71.5%     | 187,684 |
| KeyRegistry_pvm   | 3,717,502,195 | +37.8%  | 2,806,625,219    | +57.0%            | 75.5%     | 222,093 |


### KeyRegistry - updateSignedPrekey

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| KeyRegistry_evm   | 2,119,980,112 | -       | 1,209,941,280    | -                 | 57.1%     | 105,468 |
| key_registry_rust | 2,222,837,932 | +4.9%   | 1,312,799,100    | +8.5%             | 59.1%     | 68,745  |
| KeyRegistry_pvm   | 2,599,386,806 | +22.6%  | 1,689,347,974    | +39.6%            | 65.0%     | 160,647 |


### KeyRegistry - uploadOneTimePrekeys

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| KeyRegistry_evm   | 2,853,673,363 | -       | 1,943,634,531    | -                 | 68.1%     | 197,941 |
| KeyRegistry_pvm   | 3,226,119,737 | +13.1%  | 2,316,080,905    | +19.2%            | 71.8%     | 232,350 |
| key_registry_rust | 3,631,481,314 | +27.3%  | 2,721,442,482    | +40.0%            | 74.9%     | 150,537 |


### Log - addWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Log_evm        | 1,935,844,662 | -       | 1,027,076,142    | -                 | 53.1%     | 107,062 |
| Log_pvm        | 2,208,954,160 | +14.1%  | 1,300,185,640    | +26.6%            | 58.9%     | 154,803 |
| log_rust       | 2,472,228,897 | +27.7%  | 1,563,460,377    | +52.2%            | 63.2%     | 86,515  |


### Log - append

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| log_rust       | 2,169,314,827 | -       | 1,260,546,307    | -                 | 58.1%     | 55,789  |
| Log_evm        | 2,473,227,067 | +14.0%  | 1,564,458,547    | +24.1%            | 63.3%     | 148,186 |
| Log_pvm        | 2,824,129,690 | +30.2%  | 1,915,361,170    | +51.9%            | 67.8%     | 195,959 |


### Log - append_2

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| log_rust       | 2,169,314,827 | -       | 1,260,546,307    | -                 | 58.1%     | 55,789  |
| Log_evm        | 2,473,227,067 | +14.0%  | 1,564,458,547    | +24.1%            | 63.3%     | 148,186 |
| Log_pvm        | 2,824,129,690 | +30.2%  | 1,915,361,170    | +51.9%            | 67.8%     | 195,959 |


### Log - create_nonpermissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Log_evm        | 2,236,444,435 | -       | 1,328,108,083    | -                 | 59.4%     | 127,509 |
| log_rust       | 2,545,472,231 | +13.8%  | 1,637,135,879    | +23.3%            | 64.3%     | 76,130  |
| Log_pvm        | 3,079,700,330 | +37.7%  | 2,171,363,978    | +63.5%            | 70.5%     | 216,471 |


### Log - create_permissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Log_evm        | 2,236,469,907 | -       | 1,328,133,555    | -                 | 59.4%     | 127,573 |
| log_rust       | 2,545,478,599 | +13.8%  | 1,637,142,247    | +23.3%            | 64.3%     | 76,146  |
| Log_pvm        | 3,079,287,818 | +37.7%  | 2,170,951,466    | +63.5%            | 70.5%     | 216,599 |


### Log - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Log_evm        | 1,851,574,647 | -       | 240,000,251      | -                 | 13.0%     | 27,480 |
| log_rust       | 2,024,672,871 | +9.3%   | 246,761,486      | +2.8%             | 12.2%     | 17,191 |
| Log_pvm        | 2,639,527,273 | +42.6%  | 257,635,602      | +7.3%             | 9.8%      | 27,448 |


### Log - removeWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| log_rust       | 1,842,251,176 | -       | 933,482,656      | -                 | 50.7%     | 55,746  |
| Log_evm        | 2,620,064,927 | +42.2%  | 1,711,296,407    | +83.3%            | 65.3%     | 189,470 |
| Log_pvm        | 3,000,422,263 | +62.9%  | 2,091,653,743    | +124.1%           | 69.7%     | 237,630 |


### Log - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| log_rust       | 1,773,956,576 | -       | 865,188,056      | -                 | 48.8%     | 45,532  |
| Log_evm        | 3,073,325,911 | +73.2%  | 2,164,557,391    | +150.2%           | 70.4%     | 230,562 |
| Log_pvm        | 3,437,756,321 | +93.8%  | 2,528,987,801    | +192.3%           | 73.6%     | 278,367 |


### Marketplace - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| Marketplace_pvm | 6,187,798,542 | -       | 294,387,587      | -                 | 4.8%      | 27,448 |


### MarketplaceProxy - createItem_digital

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov       |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | --------- |
| MarketplaceProxy_evm | 9,165,615,277 | -       | 8,252,629,845    | -                 | 90.0%     | 1,021,778 |
| MarketplaceProxy_pvm | 9,324,520,521 | +1.7%   | 8,411,535,089    | +1.9%             | 90.2%     | 1,051,626 |


### MarketplaceProxy - createItem_physical

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov       |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | --------- |
| MarketplaceProxy_evm | 9,002,398,220 | -       | 8,089,412,788    | -                 | 89.9%     | 1,021,842 |
| MarketplaceProxy_pvm | 9,161,303,464 | +1.8%   | 8,248,318,032    | +2.0%             | 90.0%     | 1,051,690 |


### MarketplaceProxy - deactivateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 1,931,368,184 | -       | 1,023,031,832    | -                 | 53.0%     | 327,072 |
| MarketplaceProxy_pvm | 2,009,965,178 | +4.1%   | 1,101,628,826    | +7.7%             | 54.8%     | 341,996 |


### MarketplaceProxy - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 6,721,148,144 | -       | 5,163,902,659    | +0.2%             | 76.8%     | 576,148 |
| MarketplaceProxy_pvm | 6,856,095,329 | +2.0%   | 5,153,863,060    | -                 | 75.2%     | 582,642 |


### MarketplaceProxy - markAsShipped

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 3,871,689,122 | -       | 2,962,082,458    | -                 | 76.5%     | 501,891 |
| MarketplaceProxy_pvm | 3,950,412,028 | +2.0%   | 3,040,805,364    | +2.7%             | 77.0%     | 516,815 |


### MarketplaceProxy - purchaseItem_digital

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 11,447,805,882 | -       | 10,537,243,210   | -                 | 92.0%     | 930,783 |
| MarketplaceProxy_pvm | 11,527,327,092 | +0.7%   | 10,616,764,420   | +0.8%             | 92.1%     | 945,707 |


### MarketplaceProxy - purchaseItem_physical

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 11,517,389,828 | -       | 10,605,137,772   | -                 | 92.1%     | 956,578 |
| MarketplaceProxy_pvm | 11,596,899,774 | +0.7%   | 10,684,647,718   | +0.7%             | 92.1%     | 971,502 |


### MarketplaceProxy - purchaseItem_with_matchmaker

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | pov       |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | --------- |
| MarketplaceProxy_evm | 12,838,699,069 | -       | 11,928,136,397   | -                 | 92.9%     | 1,022,901 |
| MarketplaceProxy_pvm | 12,918,220,279 | +0.6%   | 12,007,657,607   | +0.7%             | 93.0%     | 1,037,825 |


### MarketplaceProxy - registerMatchMaker

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 4,028,583,666 | -       | 3,118,977,002    | -                 | 77.4%     | 450,447 |
| MarketplaceProxy_pvm | 4,108,110,508 | +2.0%   | 3,198,503,844    | +2.5%             | 77.9%     | 465,371 |


### MarketplaceProxy - registerShop

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 3,992,543,189 | -       | 3,079,976,829    | -                 | 77.1%     | 450,932 |
| MarketplaceProxy_pvm | 4,071,246,383 | +2.0%   | 3,158,680,023    | +2.6%             | 77.6%     | 465,856 |


### MarketplaceProxy - updateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 5,550,419,750 | -       | 4,637,853,390    | -                 | 83.6%     | 554,175 |
| MarketplaceProxy_pvm | 5,629,122,944 | +1.4%   | 4,716,556,584    | +1.7%             | 83.8%     | 569,099 |


### MarketplaceProxy - updateMatchMakerFee

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MarketplaceProxy_evm | 2,149,960,133 | -       | 1,241,623,781    | -                 | 57.8%     | 347,553 |
| MarketplaceProxy_pvm | 2,228,557,127 | +3.7%   | 1,320,220,775    | +6.3%             | 59.2%     | 362,477 |


### MockMobRule - addCounterEvidence

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| MockMobRule_evm | 1,347,613,156 | -       | 438,006,492      | -                 | 32.5%     | 55,160 |
| MockMobRule_pvm | 1,641,775,307 | +21.8%  | 732,168,643      | +67.2%            | 44.6%     | 96,667 |


### MockMobRule - createDispute

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MockMobRule_evm | 3,434,345,913 | -       | 2,523,468,937    | -                 | 73.5%     | 209,498 |
| MockMobRule_pvm | 4,094,038,357 | +19.2%  | 3,183,161,381    | +26.1%            | 77.8%     | 251,103 |


### MockMobRule - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| MockMobRule_evm | 2,024,769,550 | -       | 418,687,641      | -                 | 20.7%     | 37,737 |
| MockMobRule_pvm | 2,880,269,548 | +42.3%  | 611,253,174      | +46.0%            | 21.2%     | 37,705 |


### MockMobRule - resolveCase

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| MockMobRule_evm | 1,382,876,290 | -       | 474,107,770      | -                 | 34.3%     | 65,257  |
| MockMobRule_pvm | 1,519,688,479 | +9.9%   | 610,919,959      | +28.9%            | 40.2%     | 106,764 |


### NonFungibleCredential - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| NonFungibleCredential_evm    | 1,857,886,230 | -       | 240,078,425      | -                 | 12.9%     | 27,480 |
| non_fungible_credential_rust | 2,065,375,665 | +11.2%  | 247,164,566      | +3.0%             | 12.0%     | 17,191 |
| NonFungibleCredential_pvm    | 2,824,115,840 | +52.0%  | 257,299,702      | +7.2%             | 9.1%      | 27,448 |


### NonFungibleCredential - issue_nontransferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| non_fungible_credential_rust | 4,223,180,819 | -       | 3,312,303,843    | -                 | 78.4%     | 151,045 |
| NonFungibleCredential_evm    | 4,866,491,437 | +15.2%  | 3,955,614,461    | +19.4%            | 81.3%     | 344,387 |
| NonFungibleCredential_pvm    | 6,272,156,783 | +48.5%  | 5,361,279,807    | +61.9%            | 85.5%     | 444,541 |


### NonFungibleCredential - issue_transferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| non_fungible_credential_rust | 4,209,851,478 | -       | 3,298,974,502    | -                 | 78.4%     | 151,013 |
| NonFungibleCredential_evm    | 4,866,439,872 | +15.6%  | 3,955,562,896    | +19.9%            | 81.3%     | 344,259 |
| NonFungibleCredential_pvm    | 6,271,482,706 | +49.0%  | 5,360,605,730    | +62.5%            | 85.5%     | 444,252 |


### NonFungibleCredential - issue_with_expiry

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| non_fungible_credential_rust | 4,237,042,102 | -       | 3,326,165,126    | -                 | 78.5%     | 151,061 |
| NonFungibleCredential_evm    | 4,866,540,736 | +14.9%  | 3,955,663,760    | +18.9%            | 81.3%     | 344,451 |
| NonFungibleCredential_pvm    | 6,266,904,978 | +47.9%  | 5,356,028,002    | +61.0%            | 85.5%     | 444,442 |


### NonFungibleCredential - revoke

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| NonFungibleCredential_evm    | 1,246,508,501 | -       | 338,172,149      | -                 | 27.1%     | 45,712  |
| NonFungibleCredential_pvm    | 1,400,108,167 | +12.3%  | 491,771,815      | +45.4%            | 35.1%     | 104,675 |
| non_fungible_credential_rust | 1,772,499,645 | +42.2%  | 864,163,293      | +155.5%           | 48.8%     | 48,091  |


### NonFungibleCredential - transfer

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| non_fungible_credential_rust | 3,234,142,887 | -       | 2,325,387,463    | -                 | 71.9%     | 109,729 |
| NonFungibleCredential_evm    | 6,411,968,813 | +98.3%  | 5,503,213,389    | +136.7%           | 85.8%     | 508,557 |
| NonFungibleCredential_pvm    | 7,685,635,660 | +137.6% | 6,776,880,236    | +191.4%           | 88.2%     | 567,974 |


### NonFungibleCredential - updateMetadata

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| NonFungibleCredential_evm    | 1,186,551,152 | -       | 277,782,632      | -                 | 23.4%     | 35,522 |
| NonFungibleCredential_pvm    | 1,353,506,693 | +14.1%  | 444,738,173      | +60.1%            | 32.9%     | 94,485 |
| non_fungible_credential_rust | 1,817,628,735 | +53.2%  | 908,860,215      | +227.2%           | 50.0%     | 48,190 |


### SimpleToken - deploy

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| SimpleToken_evm                         | 1,520,388,900 | -       | 1,300,898        | +1836.4%          | 0.1%      | 6,934  |
| simple_token_u32_no_alloc_rust          | 1,545,828,374 | +1.7%   | 67,180           | -                 | 0.0%      | 6,934  |
| simple_token_u128_no_alloc_rust         | 1,557,570,377 | +2.4%   | 67,180           | -                 | 0.0%      | 6,934  |
| simple_token_u256_no_alloc_rust         | 1,558,488,476 | +2.5%   | 67,180           | -                 | 0.0%      | 6,934  |
| simple_token_u256_macro_no_alloc_rust   | 1,570,858,652 | +3.3%   | 67,180           | -                 | 0.0%      | 6,934  |
| simple_token_u256_macro_bump_alloc_rust | 1,581,569,807 | +4.0%   | 67,180           | -                 | 0.0%      | 6,934  |
| SimpleToken_pvm                         | 1,608,891,374 | +5.8%   | 12,457,558       | +18443.6%         | 0.8%      | 6,934  |
| simple_token_u256_stylus                | 1,720,802,034 | +13.2%  | 16,918,421       | +25083.7%         | 1.0%      | 6,934  |
| simple_token_u256_ink                   | 1,917,054,851 | +26.1%  | 224,768,278      | +334476.2%        | 11.7%     | 17,191 |


### SimpleToken - mint

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| SimpleToken_evm                         | 1,413,586,998 | -       | 504,818,478      | -                 | 35.7%     | 49,925 |
| SimpleToken_pvm                         | 1,499,610,773 | +6.1%   | 590,842,253      | +17.0%            | 39.4%     | 54,689 |
| simple_token_u32_no_alloc_rust          | 1,518,803,927 | +7.4%   | 610,035,407      | +20.8%            | 40.2%     | 51,543 |
| simple_token_u128_no_alloc_rust         | 1,519,883,772 | +7.5%   | 611,115,252      | +21.1%            | 40.2%     | 52,272 |
| simple_token_u256_no_alloc_rust         | 1,575,144,997 | +11.4%  | 666,376,477      | +32.0%            | 42.3%     | 52,329 |
| simple_token_u256_macro_no_alloc_rust   | 1,576,750,401 | +11.5%  | 667,981,881      | +32.3%            | 42.4%     | 53,097 |
| simple_token_u256_macro_bump_alloc_rust | 1,577,648,106 | +11.6%  | 668,879,586      | +32.5%            | 42.4%     | 53,762 |
| simple_token_u256_stylus                | 1,752,002,360 | +23.9%  | 843,233,840      | +67.0%            | 48.1%     | 61,360 |
| simple_token_u256_ink                   | 1,945,591,012 | +37.6%  | 1,036,822,492    | +105.4%           | 53.3%     | 60,704 |


### SimpleToken - transfer

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| SimpleToken_evm                         | 1,439,608,209 | -       | 530,839,689      | -                 | 36.9%     | 49,957 |
| SimpleToken_pvm                         | 1,559,858,582 | +8.4%   | 651,090,062      | +22.7%            | 41.7%     | 54,850 |
| simple_token_u128_no_alloc_rust         | 1,582,933,199 | +10.0%  | 674,164,679      | +27.0%            | 42.6%     | 52,304 |
| simple_token_u32_no_alloc_rust          | 1,587,808,950 | +10.3%  | 679,040,430      | +27.9%            | 42.8%     | 51,551 |
| simple_token_u256_no_alloc_rust         | 1,648,033,936 | +14.5%  | 739,265,416      | +39.3%            | 44.9%     | 52,393 |
| simple_token_u256_macro_no_alloc_rust   | 1,649,034,720 | +14.5%  | 740,266,200      | +39.5%            | 44.9%     | 53,161 |
| simple_token_u256_macro_bump_alloc_rust | 1,649,932,425 | +14.6%  | 741,163,905      | +39.6%            | 44.9%     | 53,826 |
| simple_token_u256_stylus                | 1,898,145,087 | +31.9%  | 989,376,567      | +86.4%            | 52.1%     | 61,521 |
| simple_token_u256_ink                   | 2,328,060,821 | +61.7%  | 1,419,292,301    | +167.4%           | 61.0%     | 81,282 |


### Store - delegate

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 2,395,214,979 | -       | 1,485,608,315    | -                 | 62.0%     | 139,613 |
| store_rust     | 2,636,671,014 | +10.1%  | 1,727,064,350    | +16.3%            | 65.5%     | 91,406  |
| Store_pvm      | 2,943,604,009 | +22.9%  | 2,033,997,345    | +36.9%            | 69.1%     | 206,477 |


### Store - deleteFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 2,774,849,056 | -       | 1,865,255,488    | -                 | 67.2%     | 180,894 |
| store_rust     | 3,471,957,971 | +25.1%  | 2,562,364,403    | +37.4%            | 73.8%     | 143,320 |
| Store_pvm      | 4,198,671,204 | +51.3%  | 3,289,077,636    | +76.3%            | 78.3%     | 248,435 |


### Store - delete_

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 2,358,280,450 | -       | 1,449,092,858    | -                 | 61.4%     | 129,356 |
| Store_pvm      | 2,818,362,834 | +19.5%  | 1,909,175,242    | +31.7%            | 67.7%     | 196,897 |
| store_rust     | 2,998,359,265 | +27.1%  | 2,089,171,673    | +44.2%            | 69.7%     | 122,587 |


### Store - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov   |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----- |
| Store_evm      | 1,639,118,420 | -       | 2,771,458        | +88.2%            | 0.2%      | 6,934 |
| store_rust     | 2,021,004,851 | +23.3%  | 1,472,359        | -                 | 0.1%      | 6,934 |
| Store_pvm      | 2,728,523,910 | +66.5%  | 12,524,738       | +750.7%           | 0.5%      | 6,934 |


### Store - revokeDelegation

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| store_rust     | 2,608,443,657 | -       | 1,698,836,993    | -                 | 65.1%     | 91,876  |
| Store_evm      | 2,812,878,541 | +7.8%   | 1,903,271,877    | +12.0%            | 67.7%     | 191,218 |
| Store_pvm      | 3,431,579,366 | +31.6%  | 2,521,972,702    | +48.5%            | 73.5%     | 258,759 |


### Store - set

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 2,553,247,394 | -       | 1,643,640,730    | -                 | 64.4%     | 149,902 |
| Store_pvm      | 2,948,345,025 | +15.5%  | 2,038,738,361    | +24.0%            | 69.1%     | 216,927 |
| store_rust     | 3,022,210,511 | +18.4%  | 2,112,603,847    | +28.5%            | 69.9%     | 111,920 |


### Store - setFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 2,974,543,580 | -       | 2,064,517,844    | -                 | 69.4%     | 201,443 |
| store_rust     | 3,509,139,569 | +18.0%  | 2,599,113,833    | +25.9%            | 74.1%     | 132,672 |
| Store_pvm      | 4,325,047,631 | +45.4%  | 3,415,021,895    | +65.4%            | 79.0%     | 268,468 |


### Store - set_update

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| Store_evm      | 1,705,688,610 | -       | 796,081,946      | -                 | 46.7%     | 78,039  |
| store_rust     | 1,781,271,828 | +4.4%   | 871,665,164      | +9.5%             | 48.9%     | 60,819  |
| Store_pvm      | 1,974,309,687 | +15.7%  | 1,064,703,023    | +33.7%            | 53.9%     | 145,095 |


### TetherToken - approve

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| TetherToken_evm | 1,290,605,008 | -       | 381,836,488      | -                 | 29.6%     | 43,751 |
| TetherToken_pvm | 1,501,669,496 | +16.4%  | 592,900,976      | +55.3%            | 39.5%     | 93,770 |


### TetherToken - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| TetherToken_evm | 3,497,129,450 | -       | 1,892,368,315    | -                 | 54.1%     | 150,692 |
| TetherToken_pvm | 4,628,305,323 | +32.3%  | 2,236,980,821    | +18.2%            | 48.3%     | 150,951 |


### TetherToken - transfer

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| TetherToken_evm | 1,818,383,584 | -       | 909,615,064      | -                 | 50.0%     | 105,485 |
| TetherToken_pvm | 2,086,105,022 | +14.7%  | 1,177,336,502    | +29.4%            | 56.4%     | 155,408 |


### TetherToken - transferFrom

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| TetherToken_evm | 2,105,144,530 | -       | 1,195,970,034    | -                 | 56.8%     | 126,188 |
| TetherToken_pvm | 2,454,418,497 | +16.6%  | 1,545,244,001    | +29.2%            | 63.0%     | 176,143 |


### W3S - buyTicket

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 5,878,648,001 | -       | 4,970,311,649    | -                 | 84.5%     | 410,815 |
| W3S_pvm        | 6,986,402,427 | +18.8%  | 6,078,066,075    | +22.3%            | 87.0%     | 526,526 |


### W3S - checkIn

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 3,168,658,756 | -       | 2,260,322,404    | -                 | 71.3%     | 201,409 |
| W3S_pvm        | 3,808,584,822 | +20.2%  | 2,900,248,470    | +28.3%            | 76.2%     | 316,795 |


### W3S - configurePaymentToken

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 2,099,262,672 | -       | 1,190,088,176    | -                 | 56.7%     | 122,513 |
| W3S_pvm        | 2,514,900,144 | +19.8%  | 1,605,712,552    | +34.9%            | 63.8%     | 215,979 |


### W3S - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 3,044,904,406 | -       | 1,333,402,182    | -                 | 43.8%     | 119,953 |
| W3S_pvm        | 4,917,904,402 | +61.5%  | 1,718,437,518    | +28.9%            | 34.9%     | 119,761 |


### W3S - grantVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 1,349,812,505 | -       | 441,476,153      | -                 | 32.7%     | 60,651  |
| W3S_pvm        | 1,689,132,080 | +25.1%  | 780,795,728      | +76.9%            | 46.2%     | 154,146 |


### W3S - pauseSales

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 1,265,282,732 | -       | 357,365,452      | -                 | 28.2%     | 50,266  |
| W3S_pvm        | 1,513,739,865 | +19.6%  | 605,822,585      | +69.5%            | 40.0%     | 143,793 |


### W3S - redeemTicketStaff

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 4,463,423,554 | -       | 3,554,655,034    | -                 | 79.6%     | 311,376 |
| W3S_pvm        | 5,335,838,185 | +19.5%  | 4,427,069,665    | +24.5%            | 83.0%     | 405,131 |


### W3S - revokeVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 1,353,908,542 | -       | 445,572,190      | -                 | 32.9%     | 60,683  |
| W3S_pvm        | 1,689,339,040 | +24.8%  | 781,002,688      | +75.3%            | 46.2%     | 154,339 |


### W3S - setMerkleRoot

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 1,205,940,763 | -       | 297,172,243      | -                 | 24.6%     | 40,204  |
| W3S_pvm        | 1,467,248,329 | +21.7%  | 558,479,809      | +87.9%            | 38.1%     | 133,763 |


### W3S - unpauseSales

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov     |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------- |
| W3S_evm        | 1,266,827,842 | -       | 358,910,562      | -                 | 28.3%     | 50,298  |
| W3S_pvm        | 1,516,315,577 | +19.7%  | 608,398,297      | +69.5%            | 40.1%     | 143,954 |


### WETH9 - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| WETH9_evm      | 2,258,505,247 | -       | 715,949,346      | -                 | 31.7%     | 68,572 |
| WETH9_pvm      | 2,553,547,152 | +13.1%  | 765,794,390      | +7.0%             | 30.0%     | 68,476 |


### WETH9 - deposit

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| WETH9_evm      | 1,178,470,380 | -       | 270,448,332      | -                 | 22.9%     | 30,360 |
| WETH9_pvm      | 1,268,642,293 | +7.7%   | 360,620,245      | +33.3%            | 28.4%     | 45,882 |


### WETH9 - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| WETH9_evm      | 1,511,163,485 | -       | 602,394,965      | -                 | 39.9%     | 61,398 |
| WETH9_pvm      | 1,674,975,730 | +10.8%  | 766,207,210      | +27.2%            | 45.7%     | 76,920 |


### WETH9 - withdraw

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| WETH9_evm      | 1,706,253,387 | -       | 797,917,035      | -                 | 46.8%     | 46,052 |
| WETH9_pvm      | 1,823,615,356 | +6.9%   | 915,279,004      | +14.7%            | 50.2%     | 61,606 |


### XENCrypto - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| XENCrypto_evm  | 2,333,068,726 | -       | 653,973,786      | -                 | 28.0%     | 58,283 |
| XENCrypto_pvm  | 4,260,066,203 | +82.6%  | 932,677,525      | +42.6%            | 21.9%     | 58,219 |


### flipper - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| flipper_ink    | 1,749,173,921 | -       | 202,855,756      | -                 | 11.6%     | 17,191 |
| flipper_evm    | 1,755,797,102 | +0.4%   | 240,558,673      | +18.6%            | 13.7%     | 27,480 |
| flipper_pvm    | 1,829,960,804 | +4.6%   | 282,289,651      | +39.2%            | 15.4%     | 27,577 |
| flipper_stylus | 2,227,964,550 | +27.4%  | 659,628,116      | +225.2%           | 29.6%     | 58,348 |


### flipper - flip

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| flipper_evm    | 1,146,733,892 | -       | 238,816,612      | -                 | 20.8%     | 28,819 |
| flipper_pvm    | 1,169,184,388 | +2.0%   | 261,267,108      | +9.4%             | 22.3%     | 30,951 |
| flipper_ink    | 1,183,137,717 | +3.2%   | 275,220,437      | +15.2%            | 23.3%     | 30,869 |
| flipper_stylus | 1,269,246,658 | +10.7%  | 361,329,378      | +51.3%            | 28.5%     | 42,491 |


### incrementer - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| incrementer_ink    | 1,742,767,628 | -       | 189,958,342      | -                 | 10.9%     | 17,191 |
| incrementer_evm    | 1,756,864,281 | +0.8%   | 240,562,790      | +26.6%            | 13.7%     | 27,480 |
| incrementer_pvm    | 1,837,283,985 | +5.4%   | 282,155,291      | +48.5%            | 15.4%     | 27,577 |
| incrementer_stylus | 2,242,181,195 | +28.7%  | 648,476,236      | +241.4%           | 28.9%     | 58,348 |


### incrementer - inc

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | pov    |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ------ |
| incrementer_evm    | 1,147,883,152 | -       | 239,546,800      | -                 | 20.9%     | 28,974 |
| incrementer_pvm    | 1,176,600,280 | +2.5%   | 268,263,928      | +12.0%            | 22.8%     | 31,510 |
| incrementer_ink    | 1,189,738,710 | +3.6%   | 281,402,358      | +17.5%            | 23.7%     | 31,374 |
| incrementer_stylus | 1,276,169,293 | +11.2%  | 367,832,941      | +53.6%            | 28.8%     | 44,162 |


