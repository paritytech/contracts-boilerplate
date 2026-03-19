# Revive Contract Comparison

Generated on: 2026-03-19

### Benchmark Environment

- **Chain:** Westend Asset Hub Development | **Runtime:** westmint@1021004 | **Node:** polkadot-omni-node 1.21.2-5a82c9637e4 | **resolc:** 1.0.0+commit.b080c1d | **solc:** 0.8.30+commit.73712a01

Comparison of gas usage across different contract implementations.

## Chain: eth-rpc

### BenchERC1155 - create

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchERC1155_evm     | 799,616,351   | -       | 342,907,191      | -                 | 42.9%     | 50,438      | 60,227          | 8,157        | 7.4x           |
| BenchERC1155_pvm     | 942,092,203   | +17.8%  | 485,383,043      | +41.5%            | 51.5%     | 60,327      | 70,116          | 18,611       | 3.8x           |
| bench_erc1155_stylus | 1,194,841,165 | +49.4%  | 738,132,005      | +115.3%           | 61.8%     | 70,459      | 80,248          | 28,954       | 2.8x           |
| bench_erc1155_ink    | 1,322,937,826 | +65.4%  | 866,228,666      | +152.6%           | 65.5%     | 57,518      | 67,307          | 26,579       | 2.5x           |


### BenchERC1155 - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchERC1155_evm     | 722,977,862   | -       | 1,425,734        | -                 | 0.2%      | 6,934       | 16,723          | 6,046        | 2.8x           |
| BenchERC1155_pvm     | 893,455,631   | +23.6%  | 12,524,738       | +778.5%           | 1.4%      | 6,934       | 16,723          | 6,315        | 2.6x           |
| bench_erc1155_stylus | 1,061,493,682 | +46.8%  | 16,851,241       | +1081.9%          | 1.6%      | 6,934       | 16,723          | 6,688        | 2.5x           |
| bench_erc1155_ink    | 1,113,603,115 | +54.0%  | 112,707,286      | +7805.2%          | 10.1%     | 17,191      | 26,980          | 7,223        | 3.7x           |


### BenchERC20 - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchERC20_evm     | 928,355,440   | -       | 207,576,448      | -                 | 22.4%     | 27,448      | 37,237          | 6,588        | 5.7x           |
| BenchERC20_pvm     | 1,150,963,698 | +24.0%  | 290,012,259      | +39.7%            | 25.2%     | 27,448      | 37,237          | 6,611        | 5.6x           |
| bench_erc20_ink    | 1,529,967,413 | +64.8%  | 597,339,824      | +187.8%           | 39.0%     | 27,448      | 37,237          | 6,852        | 5.4x           |
| bench_erc20_stylus | 1,719,153,995 | +85.2%  | 685,229,483      | +230.1%           | 39.9%     | 58,219      | 68,008          | 6,357        | 10.7x          |


### BenchERC20 - transfer

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchERC20_evm     | 803,589,064   | -       | 346,447,736      | -                 | 43.1%     | 50,353      | 60,142          | 8,653        | 7.0x           |
| BenchERC20_pvm     | 933,966,017   | +16.2%  | 476,824,689      | +37.6%            | 51.1%     | 59,216      | 69,005          | 17,596       | 3.9x           |
| bench_erc20_stylus | 1,316,894,748 | +63.9%  | 859,753,420      | +148.2%           | 65.3%     | 69,955      | 79,744          | 27,951       | 2.9x           |
| bench_erc20_ink    | 1,616,793,887 | +101.2% | 1,159,652,559    | +234.7%           | 71.7%     | 84,244      | 94,033          | 22,249       | 4.2x           |


### BenchERC721 - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchERC721_evm     | 722,129,794   | -       | 1,415,230        | -                 | 0.2%      | 6,934       | 16,723          | 6,223        | 2.7x           |
| BenchERC721_pvm     | 849,161,381   | +17.6%  | 12,524,738       | +785.0%           | 1.5%      | 6,934       | 16,723          | 6,030        | 2.8x           |
| bench_erc721_stylus | 924,673,378   | +28.0%  | 17,455,861       | +1133.4%          | 1.9%      | 6,934       | 16,723          | 5,149        | 3.2x           |
| bench_erc721_ink    | 1,011,644,377 | +40.1%  | 98,660,554       | +6871.3%          | 9.8%      | 17,191      | 26,980          | 6,588        | 4.1x           |


### BenchERC721 - mint

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchERC721_evm     | 907,636,021   | -       | 450,926,861      | -                 | 49.7%     | 70,964      | 80,753          | 8,402        | 9.6x           |
| BenchERC721_pvm     | 1,018,411,695 | +12.2%  | 561,702,535      | +24.6%            | 55.2%     | 78,059      | 87,848          | 15,592       | 5.6x           |
| bench_erc721_stylus | 1,368,231,055 | +50.7%  | 911,521,895      | +102.1%           | 66.6%     | 82,441      | 92,230          | 19,715       | 4.7x           |
| bench_erc721_ink    | 1,405,512,965 | +54.9%  | 948,803,805      | +110.4%           | 67.5%     | 84,609      | 94,398          | 20,696       | 4.6x           |


### BenchStorage - deploy

| Implementation       | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchStorage_evm     | 712,344,394 | -       | 1,294,030        | -                 | 0.2%      | 6,934       | 16,723          | 6,205        | 2.7x           |
| BenchStorage_pvm     | 764,067,695 | +7.3%   | 12,121,658       | +836.7%           | 1.6%      | 6,934       | 16,723          | 6,237        | 2.7x           |
| bench_storage_ink    | 859,929,792 | +20.7%  | 98,593,374       | +7519.1%          | 11.5%     | 17,191      | 26,980          | 5,938        | 4.5x           |
| bench_storage_stylus | 879,302,462 | +23.4%  | 9,259,901        | +615.6%           | 1.1%      | 6,934       | 16,723          | 5,911        | 2.8x           |


### BenchStorage - read_100

| Implementation       | ref_time       | vs Best  | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | -------------- | -------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| BenchStorage_evm     | 557,246,950    | -        | 100,105,622      | -                 | 18.0%     | 8,793       | 18,582          | 3,791        | 4.9x           |
| BenchStorage_pvm     | 2,090,337,331  | +275.1%  | 1,633,196,003    | +1531.5%          | 78.1%     | 11,358      | 21,147          | 6,450        | 3.3x           |
| bench_storage_ink    | 9,523,033,333  | +1608.9% | 9,065,878,909    | +8956.3%          | 95.2%     | 1,049,501   | 1,059,290       | 7,986        | 132.6x         |
| bench_storage_stylus | 14,424,452,810 | +2488.5% | 13,967,298,386   | +13852.6%         | 96.8%     | 1,047,593   | 1,057,382       | 14,628       | 72.3x          |


### BenchStorage - write_100

| Implementation       | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| bench_storage_ink    | 12,471,733,966 | -       | 12,014,579,542   | -                 | 96.3%     | 1,059,742   | 1,069,531       | 10,819       | 98.9x          |
| BenchStorage_evm     | 16,289,559,738 | +30.6%  | 15,832,405,314   | +31.8%            | 97.2%     | 2,066,564   | 2,076,353       | 8,313        | 249.8x         |
| BenchStorage_pvm     | 18,712,989,222 | +50.0%  | 18,255,834,798   | +51.9%            | 97.6%     | 2,069,097   | 2,078,886       | 10,715       | 194.0x         |
| bench_storage_stylus | 26,633,110,825 | +113.5% | 26,175,956,401   | +117.9%           | 98.3%     | 2,076,429   | 2,086,218       | 17,745       | 117.6x         |


### CoinTool_App - deploy

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| CoinTool_App_evm | 902,352,076   | -       | 147,619,528      | -                 | 16.4%     | 27,480      | 37,269          | 7,197        | 5.2x           |
| CoinTool_App_pvm | 1,392,536,524 | +54.3%  | 217,040,815      | +47.0%            | 15.6%     | 27,448      | 37,237          | 6,725        | 5.5x           |


### CoinTool_App - t

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| CoinTool_App_evm | 5,189,153,101 | -       | 4,727,768,669    | -                 | 91.1%     | 432,337     | 442,126         | 32,950       | 13.4x          |
| CoinTool_App_pvm | 7,004,572,102 | +35.0%  | 6,543,187,670    | +38.4%            | 93.4%     | 752,467     | 762,256         | 168,994      | 4.5x           |


### Computation - deploy

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Computation_evm    | 709,245,684 | -       | 1,255,650        | -                 | 0.2%      | 6,934       | 16,723          | 5,388        | 3.1x           |
| computation_stylus | 752,514,067 | +6.1%   | 9,797,341        | +680.3%           | 1.3%      | 6,934       | 16,723          | 5,756        | 2.9x           |
| Computation_pvm    | 756,897,733 | +6.7%   | 12,457,558       | +892.1%           | 1.6%      | 6,934       | 16,723          | 5,662        | 3.0x           |
| computation_ink    | 822,060,937 | +15.9%  | 94,629,754       | +7436.3%          | 11.5%     | 17,191      | 26,980          | 6,452        | 4.2x           |


### Computation - odd_product_10

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Computation_evm    | 472,654,771 | -       | 15,945,611       | -                 | 3.4%      | 8,504       | 18,293          | 3,370        | 5.4x           |
| computation_stylus | 518,066,029 | +9.6%   | 61,356,869       | +284.8%           | 11.8%     | 10,686      | 20,475          | 5,613        | 3.6x           |
| Computation_pvm    | 548,048,260 | +16.0%  | 91,339,100       | +472.8%           | 16.7%     | 10,793      | 20,582          | 5,994        | 3.4x           |
| computation_ink    | 548,581,760 | +16.1%  | 91,872,600       | +476.2%           | 16.7%     | 19,994      | 29,783          | 5,756        | 5.2x           |


### Computation - triangle_10

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Computation_evm    | 469,487,565 | -       | 12,778,405       | -                 | 2.7%      | 8,504       | 18,293          | 3,370        | 5.4x           |
| computation_stylus | 516,050,629 | +9.9%   | 59,341,469       | +364.4%           | 11.5%     | 10,686      | 20,475          | 5,613        | 3.6x           |
| Computation_pvm    | 539,314,860 | +14.9%  | 82,605,700       | +546.4%           | 15.3%     | 10,793      | 20,582          | 5,994        | 3.4x           |
| computation_ink    | 546,096,100 | +16.3%  | 89,386,940       | +599.5%           | 16.4%     | 19,994      | 29,783          | 5,756        | 5.2x           |


### DocumentAccessManagement - configurePublicAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 860,781,880   | -       | 403,221,480      | -                 | 46.8%     | 69,241      | 79,030          | 18,461       | 4.3x           |
| DocumentAccessManagement_pvm | 1,180,568,143 | +37.2%  | 722,981,551      | +79.3%            | 61.2%     | 149,808     | 159,597         | 99,002       | 1.6x           |


### DocumentAccessManagement - createDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 2,576,397,149 | -       | 2,115,850,861    | -                 | 82.1%     | 295,963     | 305,752         | 17,279       | 17.7x          |
| DocumentAccessManagement_pvm | 3,546,700,521 | +37.7%  | 3,086,154,233    | +45.9%            | 87.0%     | 396,879     | 406,668         | 97,849       | 4.2x           |


### DocumentAccessManagement - createDocument2

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 2,576,409,885 | -       | 2,115,863,597    | -                 | 82.1%     | 295,995     | 305,784         | 18,165       | 16.8x          |
| DocumentAccessManagement_pvm | 3,546,762,985 | +37.7%  | 3,086,216,697    | +45.9%            | 87.0%     | 396,943     | 406,732         | 98,706       | 4.1x           |


### DocumentAccessManagement - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 858,130,545   | -       | 3,099,708        | -                 | 0.4%      | 6,934       | 16,723          | 6,690        | 2.5x           |
| DocumentAccessManagement_pvm | 2,165,248,244 | +152.3% | 12,524,738       | +304.1%           | 0.6%      | 6,934       | 16,723          | 6,563        | 2.5x           |


### DocumentAccessManagement - grantAccessWithShare

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 2,487,839,023 | -       | 2,027,711,807    | -                 | 81.5%     | 285,674     | 295,463         | 18,231       | 16.2x          |
| DocumentAccessManagement_pvm | 3,229,686,647 | +29.8%  | 2,769,559,431    | +36.6%            | 85.8%     | 366,204     | 375,993         | 98,772       | 3.8x           |


### DocumentAccessManagement - registerKeys

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 857,187,706   | -       | 399,614,210      | -                 | 46.6%     | 58,891      | 68,680          | 17,786       | 3.9x           |
| DocumentAccessManagement_pvm | 1,340,965,508 | +56.4%  | 883,378,916      | +121.1%           | 65.9%     | 160,098     | 169,887         | 98,327       | 1.7x           |


### DocumentAccessManagement - revokeAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 3,282,527,673 | -       | 2,824,941,081    | -                 | 86.1%     | 419,073     | 428,862         | 18,946       | 22.6x          |
| DocumentAccessManagement_pvm | 4,092,518,321 | +24.7%  | 3,634,931,729    | +28.7%            | 88.8%     | 500,280     | 510,069         | 99,487       | 5.1x           |


### DocumentAccessManagement - transferOwnership

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 2,757,701,633 | -       | 2,300,115,041    | -                 | 83.4%     | 346,954     | 356,743         | 18,744       | 19.0x          |
| DocumentAccessManagement_pvm | 3,511,949,140 | +27.4%  | 3,054,362,548    | +32.8%            | 87.0%     | 437,773     | 447,562         | 99,285       | 4.5x           |


### DocumentAccessManagement - updateDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DocumentAccessManagement_evm | 1,141,833,146 | -       | 681,286,858      | -                 | 59.7%     | 100,824     | 110,613         | 14,681       | 7.5x           |
| DocumentAccessManagement_pvm | 1,592,495,758 | +39.5%  | 1,131,949,470    | +66.1%            | 71.1%     | 181,417     | 191,206         | 95,288       | 2.0x           |


### DotNS - createSubdomain

| Implementation | ref_time       | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | -------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| dotns_rust     | 2,743,306,464  | -       | 2,283,598,320    | -                 | 83.2%     | 83,613      | 93,402          | 31,723       | 2.9x           |
| DotNS_evm      | 3,097,361,485  | +12.9%  | 2,637,653,341    | +15.5%            | 85.2%     | 294,479     | 304,268         | 18,063       | 16.8x          |
| DotNS_pvm      | 12,321,436,390 | +349.1% | 11,861,728,246   | +419.4%           | 96.3%     | 382,054     | 391,843         | 84,431       | 4.6x           |


### DotNS - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DotNS_evm      | 837,059,317   | -       | 2,838,724        | +76.7%            | 0.3%      | 6,934       | 16,723          | 6,377        | 2.6x           |
| dotns_rust     | 1,075,515,579 | +28.5%  | 1,606,719        | -                 | 0.1%      | 6,934       | 16,723          | 6,365        | 2.6x           |
| DotNS_pvm      | 1,926,961,286 | +130.2% | 12,524,738       | +679.5%           | 0.6%      | 6,934       | 16,723          | 5,493        | 3.0x           |


### DotNS - register

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| dotns_rust     | 2,060,324,654 | -       | 1,602,332,086    | -                 | 77.8%     | 72,570      | 82,359          | 30,601       | 2.7x           |
| DotNS_evm      | 2,627,218,547 | +27.5%  | 2,169,212,883    | +35.4%            | 82.6%     | 263,190     | 272,979         | 15,619       | 17.5x          |
| DotNS_pvm      | 6,708,654,817 | +225.6% | 6,250,649,153    | +290.1%           | 93.2%     | 350,830     | 360,619         | 81,658       | 4.4x           |


### DotNS - register_with_duration

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| dotns_rust     | 2,058,456,003 | -       | 1,600,463,435    | -                 | 77.8%     | 72,610      | 82,399          | 30,950       | 2.7x           |
| DotNS_evm      | 2,620,122,012 | +27.3%  | 2,162,116,348    | +35.1%            | 82.5%     | 263,222     | 273,011         | 16,333       | 16.7x          |
| DotNS_pvm      | 6,552,486,013 | +218.3% | 6,094,480,349    | +280.8%           | 93.0%     | 350,732     | 360,521         | 82,236       | 4.4x           |


### DotNS - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| dotns_rust     | 1,513,101,668 | -       | 1,055,528,172    | -                 | 69.8%     | 52,666      | 62,455          | 31,545       | 2.0x           |
| DotNS_evm      | 2,703,160,819 | +78.7%  | 2,245,574,227    | +112.7%           | 83.1%     | 284,024     | 293,813         | 18,567       | 15.8x          |
| DotNS_pvm      | 5,695,482,933 | +276.4% | 5,237,896,341    | +396.2%           | 92.0%     | 352,214     | 362,003         | 84,606       | 4.3x           |


### DotNS - renew

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DotNS_evm      | 941,878,987   | -       | 483,886,419      | -                 | 51.4%     | 57,791      | 67,580          | 13,174       | 5.1x           |
| dotns_rust     | 1,598,904,414 | +69.8%  | 1,140,911,846    | +135.8%           | 71.4%     | 52,762      | 62,551          | 28,319       | 2.2x           |
| DotNS_pvm      | 3,388,445,227 | +259.8% | 2,930,439,563    | +505.6%           | 86.5%     | 124,885     | 134,674         | 80,543       | 1.7x           |


### DotNS - setAddress

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DotNS_evm      | 1,002,031,726 | -       | 544,039,158      | -                 | 54.3%     | 68,080      | 77,869          | 13,313       | 5.8x           |
| dotns_rust     | 1,679,097,099 | +67.6%  | 1,221,104,531    | +124.5%           | 72.7%     | 52,762      | 62,551          | 28,187       | 2.2x           |
| DotNS_pvm      | 3,408,940,584 | +240.2% | 2,950,934,920    | +442.4%           | 86.6%     | 145,463     | 155,252         | 80,593       | 1.9x           |


### DotNS - setMetadata

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| DotNS_evm      | 936,900,074   | -       | 478,907,506      | -                 | 51.1%     | 57,759      | 67,548          | 16,867       | 4.0x           |
| dotns_rust     | 1,618,513,918 | +72.8%  | 1,160,521,350    | +142.3%           | 71.7%     | 52,762      | 62,551          | 28,220       | 2.2x           |
| DotNS_pvm      | 3,267,349,192 | +248.7% | 2,809,343,528    | +486.6%           | 86.0%     | 124,853     | 134,642         | 82,880       | 1.6x           |


### DotNS - setSubdomainOwner

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| dotns_rust     | 2,936,323,034 | -       | 2,477,047,058    | -                 | 84.4%     | 84,220      | 94,009          | 29,039       | 3.2x           |
| DotNS_evm      | 2,987,917,068 | +1.8%   | 2,528,641,092    | +2.1%             | 84.6%     | 294,636     | 304,425         | 15,609       | 19.5x          |
| DotNS_pvm      | 9,356,213,448 | +218.6% | 8,896,937,472    | +259.2%           | 95.1%     | 372,211     | 382,000         | 82,645       | 4.6x           |


### DotNS - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| dotns_rust     | 2,221,647,892 | -       | 1,763,655,324    | -                 | 79.4%     | 73,276      | 83,065          | 31,460       | 2.6x           |
| DotNS_evm      | 2,678,234,795 | +20.6%  | 2,220,229,131    | +25.9%            | 82.9%     | 284,024     | 293,813         | 14,027       | 20.9x          |
| DotNS_pvm      | 5,508,148,570 | +147.9% | 5,050,142,906    | +186.3%           | 91.7%     | 361,664     | 371,453         | 81,103       | 4.6x           |


### Escrow - create_simple

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| escrow_rust    | 2,458,531,503 | -       | 2,000,434,167    | -                 | 81.4%     | 93,287      | 103,076         | 19,993       | 5.2x           |
| Escrow_evm     | 2,647,322,726 | +7.7%   | 2,189,225,390    | +9.4%             | 82.7%     | 310,692     | 320,481         | 11,738       | 27.3x          |
| Escrow_pvm     | 3,320,599,695 | +35.1%  | 2,862,502,359    | +43.1%            | 86.2%     | 361,141     | 370,930         | 41,605       | 8.9x           |


### Escrow - create_with_arbiter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| escrow_rust    | 2,458,544,239 | -       | 2,000,446,903    | -                 | 81.4%     | 93,319      | 103,108         | 20,472       | 5.0x           |
| Escrow_evm     | 2,647,385,894 | +7.7%   | 2,189,288,558    | +9.4%             | 82.7%     | 310,820     | 320,609         | 12,387       | 25.9x          |
| Escrow_pvm     | 3,318,189,207 | +35.0%  | 2,860,091,871    | +43.0%            | 86.2%     | 361,268     | 371,057         | 42,254       | 8.8x           |


### Escrow - create_with_expiry

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| escrow_rust    | 2,458,544,239 | -       | 2,000,446,903    | -                 | 81.4%     | 93,319      | 103,108         | 20,575       | 5.0x           |
| Escrow_evm     | 2,647,398,630 | +7.7%   | 2,189,301,294    | +9.4%             | 82.7%     | 310,852     | 320,641         | 12,829       | 25.0x          |
| Escrow_pvm     | 3,316,728,671 | +34.9%  | 2,858,631,335    | +42.9%            | 86.2%     | 361,267     | 371,056         | 42,696       | 8.7x           |


### Escrow - create_with_releaseTime

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| escrow_rust    | 2,458,544,239 | -       | 2,000,446,903    | -                 | 81.4%     | 93,319      | 103,108         | 20,542       | 5.0x           |
| Escrow_evm     | 2,647,423,590 | +7.7%   | 2,189,326,254    | +9.4%             | 82.7%     | 310,884     | 320,673         | 12,452       | 25.8x          |
| Escrow_pvm     | 3,314,936,951 | +34.8%  | 2,856,839,615    | +42.8%            | 86.2%     | 361,202     | 370,991         | 42,319       | 8.8x           |


### Escrow - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Escrow_evm     | 1,006,208,734 | -       | 235,481,935      | +40.3%            | 23.4%     | 37,737      | 47,526          | 6,921        | 6.9x           |
| escrow_rust    | 1,079,161,741 | +7.3%   | 167,836,939      | -                 | 15.6%     | 17,191      | 26,980          | 6,758        | 4.0x           |
| Escrow_pvm     | 1,504,741,665 | +49.5%  | 257,344,308      | +53.3%            | 17.1%     | 37,705      | 47,494          | 7,055        | 6.7x           |


### Escrow - refund

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Escrow_evm     | 1,632,144,047 | -       | 1,175,408,695    | -                 | 72.0%     | 161,696     | 171,485         | 12,514       | 13.7x          |
| Escrow_pvm     | 1,787,516,793 | +9.5%   | 1,330,781,441    | +13.2%            | 74.4%     | 191,274     | 201,063         | 42,381       | 4.7x           |
| escrow_rust    | 1,948,975,262 | +19.4%  | 1,492,253,006    | +27.0%            | 76.6%     | 77,978      | 87,767          | 18,603       | 4.7x           |


### Escrow - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Escrow_evm     | 1,630,256,205 | -       | 1,173,520,853    | -                 | 72.0%     | 161,696     | 171,485         | 14,387       | 11.9x          |
| Escrow_pvm     | 1,789,935,273 | +9.8%   | 1,333,199,921    | +13.6%            | 74.5%     | 191,274     | 201,063         | 44,254       | 4.5x           |
| escrow_rust    | 1,942,120,950 | +19.1%  | 1,485,398,694    | +26.6%            | 76.5%     | 77,976      | 87,765          | 22,040       | 4.0x           |


### FiatTokenProxy - approve

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 867,889,835   | -       | 410,735,411      | -                 | 47.3%     | 70,861      | 80,650          | 25,357       | 3.2x           |
| FiatTokenProxy_pvm | 1,180,874,640 | +36.1%  | 723,707,120      | +76.2%            | 61.3%     | 167,515     | 177,304         | 122,259      | 1.5x           |


### FiatTokenProxy - changeAdmin

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 687,817,653 | -       | 231,095,397      | -                 | 33.6%     | 40,410      | 50,199          | 5,468        | 9.2x           |
| FiatTokenProxy_pvm | 759,877,547 | +10.5%  | 303,155,291      | +31.2%            | 39.9%     | 48,934      | 58,723          | 14,101       | 4.2x           |


### FiatTokenProxy - configureMinter

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 1,070,829,348 | -       | 613,661,828      | -                 | 57.3%     | 101,699     | 111,488         | 25,493       | 4.4x           |
| FiatTokenProxy_pvm | 1,388,259,890 | +29.6%  | 931,092,370      | +51.7%            | 67.1%     | 198,318     | 208,107         | 122,395      | 1.7x           |


### FiatTokenProxy - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 950,881,882   | -       | 221,244,040      | -                 | 23.3%     | 31,458      | 41,247          | 6,900        | 6.0x           |
| FiatTokenProxy_pvm | 1,125,349,189 | +18.3%  | 263,769,577      | +19.2%            | 23.4%     | 31,458      | 41,247          | 6,668        | 6.2x           |


### FiatTokenProxy - initialize

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 2,074,194,811 | -       | 1,611,972,235    | -                 | 77.7%     | 246,711     | 256,500         | 25,021       | 10.3x          |
| FiatTokenProxy_pvm | 2,653,488,984 | +27.9%  | 2,191,266,408    | +35.9%            | 82.6%     | 343,074     | 352,863         | 121,923      | 2.9x           |


### FiatTokenProxy - mint

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 1,535,282,411 | -       | 1,078,114,891    | -                 | 70.2%     | 163,433     | 173,222         | 25,737       | 6.7x           |
| FiatTokenProxy_pvm | 2,051,382,989 | +33.6%  | 1,594,215,469    | +47.9%            | 77.7%     | 260,021     | 269,810         | 122,639      | 2.2x           |


### FiatTokenProxy - transfer

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 1,448,939,837 | -       | 991,772,317      | -                 | 68.4%     | 153,176     | 162,965         | 25,495       | 6.4x           |
| FiatTokenProxy_pvm | 1,926,851,940 | +33.0%  | 1,469,684,420    | +48.2%            | 76.3%     | 249,731     | 259,520         | 122,397      | 2.1x           |


### FiatTokenProxy - transferFrom

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenProxy_evm | 1,792,810,793 | -       | 1,335,250,393    | -                 | 74.5%     | 194,454     | 204,243         | 22,903       | 8.9x           |
| FiatTokenProxy_pvm | 2,439,450,166 | +36.1%  | 1,981,889,766    | +48.4%            | 81.2%     | 291,105     | 300,894         | 119,673      | 2.5x           |


### FiatTokenV2_2 - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FiatTokenV2_2_evm | 1,334,587,618 | -       | 382,802,032      | -                 | 28.7%     | 58,283      | 68,072          | 7,127        | 9.6x           |
| FiatTokenV2_2_pvm | 2,785,743,363 | +108.7% | 415,446,501      | +8.5%             | 14.9%     | 58,477      | 68,266          | 7,087        | 9.6x           |


### Fibonacci - deploy

| Implementation                      | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| fibonacci_u32_rust                  | 706,494,835 | -       | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 4,813        | 3.5x           |
| Fibonacci_evm                       | 707,582,570 | +0.2%   | 1,235,450        | +1739.0%          | 0.2%      | 6,934       | 16,723          | 5,220        | 3.2x           |
| fibonacci_u128_rust                 | 707,799,502 | +0.2%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,209        | 3.2x           |
| fibonacci_u32_macro_bump_alloc_rust | 709,667,914 | +0.4%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,328        | 3.1x           |
| fibonacci_u32_macro_no_alloc_rust   | 710,408,836 | +0.6%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,222        | 3.2x           |
| fibonacci_u256_rust                 | 718,510,657 | +1.7%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,154        | 3.2x           |
| Fibonacci_pvm                       | 732,932,459 | +3.7%   | 11,718,578       | +17343.6%         | 1.6%      | 6,934       | 16,723          | 5,022        | 3.3x           |
| fibonacci_u32_stylus                | 736,132,438 | +4.2%   | 8,991,181        | +13283.7%         | 1.2%      | 6,934       | 16,723          | 5,138        | 3.3x           |
| fibonacci_u32_ink                   | 810,829,259 | +14.8%  | 94,898,474       | +141160.0%        | 11.7%     | 17,191      | 26,980          | 4,805        | 5.6x           |


### Fibonacci - fib_10

| Implementation                      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| fibonacci_u32_rust                  | 578,114,854   | -       | 121,405,694      | -                 | 21.0%     | 8,433       | 18,222          | 3,591        | 5.1x           |
| fibonacci_u32_macro_bump_alloc_rust | 582,305,059   | +0.7%   | 125,595,899      | +3.5%             | 21.6%     | 8,630       | 18,419          | 3,694        | 5.0x           |
| Fibonacci_evm                       | 588,954,142   | +1.9%   | 132,244,982      | +8.9%             | 22.5%     | 8,404       | 18,193          | 3,605        | 5.0x           |
| fibonacci_u32_macro_no_alloc_rust   | 589,233,457   | +1.9%   | 132,524,297      | +9.2%             | 22.5%     | 8,676       | 18,465          | 3,768        | 4.9x           |
| fibonacci_u32_stylus                | 590,175,961   | +2.1%   | 133,466,801      | +9.9%             | 22.6%     | 9,719       | 19,508          | 4,910        | 4.0x           |
| fibonacci_u128_rust                 | 738,675,955   | +27.8%  | 281,966,795      | +132.3%           | 38.2%     | 8,514       | 18,303          | 3,705        | 4.9x           |
| fibonacci_u32_ink                   | 816,909,403   | +41.3%  | 360,200,243      | +196.7%           | 44.1%     | 29,537      | 39,326          | 4,966        | 7.9x           |
| Fibonacci_pvm                       | 876,873,957   | +51.7%  | 420,164,797      | +246.1%           | 47.9%     | 9,351       | 19,140          | 4,689        | 4.1x           |
| fibonacci_u256_rust                 | 4,041,606,844 | +599.1% | 3,584,897,684    | +2852.8%          | 88.7%     | 9,179       | 18,968          | 4,304        | 4.4x           |


### Fibonacci_u256 - deploy

| Implementation                           | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Fibonacci_u256_iter_evm                  | 706,799,738 | -       | 1,225,754        | +1724.6%          | 0.2%      | 6,934       | 16,723          | 3,782        | 4.4x           |
| Fibonacci_u256_evm                       | 706,864,974 | +0.0%   | 1,226,562        | +1725.8%          | 0.2%      | 6,934       | 16,723          | 5,605        | 3.0x           |
| fibonacci_u256_iter_primitive_types_rust | 716,432,854 | +1.4%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 4,590        | 3.6x           |
| fibonacci_u256_iter_rust                 | 717,061,027 | +1.5%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 4,857        | 3.4x           |
| fibonacci_u256_primitive_types_rust      | 717,222,097 | +1.5%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,694        | 2.9x           |
| fibonacci_u256_rust                      | 718,510,657 | +1.7%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 2,871        | 5.8x           |
| Fibonacci_u256_iter_pvm                  | 734,092,163 | +3.9%   | 11,718,578       | +17343.6%         | 1.6%      | 6,934       | 16,723          | 5,980        | 2.8x           |
| Fibonacci_u256_pvm                       | 735,670,649 | +4.1%   | 11,718,578       | +17343.6%         | 1.6%      | 6,934       | 16,723          | 5,506        | 3.0x           |
| fibonacci_u256_ink                       | 827,161,757 | +17.0%  | 94,898,474       | +141160.0%        | 11.5%     | 17,191      | 26,980          | 5,715        | 4.7x           |
| fibonacci_u256_iter_ink                  | 827,274,506 | +17.0%  | 94,898,474       | +141160.0%        | 11.5%     | 17,191      | 26,980          | 5,284        | 5.1x           |


### Fibonacci_u256 - fib_10

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Fibonacci_u256_iter_evm                  | 462,839,753   | -       | 6,130,593        | -                 | 1.3%      | 8,356       | 18,145          | 3,661        | 5.0x           |
| Fibonacci_u256_iter_pvm                  | 505,487,573   | +9.2%   | 48,778,413       | +695.7%           | 9.6%      | 9,423       | 19,212          | 4,624        | 4.2x           |
| fibonacci_u256_iter_primitive_types_rust | 522,370,847   | +12.9%  | 65,661,687       | +971.0%           | 12.6%     | 9,050       | 18,839          | 4,180        | 4.5x           |
| Fibonacci_u256_evm                       | 566,630,393   | +22.4%  | 109,921,233      | +1693.0%          | 19.4%     | 8,360       | 18,149          | 3,254        | 5.6x           |
| fibonacci_u256_iter_rust                 | 614,068,834   | +32.7%  | 157,359,674      | +2466.8%          | 25.6%     | 9,089       | 18,878          | 4,214        | 4.5x           |
| fibonacci_u256_iter_ink                  | 716,752,236   | +54.9%  | 260,043,076      | +4141.7%          | 36.3%     | 30,558      | 40,347          | 6,091        | 6.6x           |
| Fibonacci_u256_pvm                       | 1,178,322,907 | +154.6% | 721,613,747      | +11670.7%         | 61.2%     | 9,521       | 19,310          | 4,651        | 4.2x           |
| fibonacci_u256_primitive_types_rust      | 2,481,890,904 | +436.2% | 2,025,181,744    | +32934.0%         | 81.6%     | 9,099       | 18,888          | 4,338        | 4.4x           |
| fibonacci_u256_ink                       | 2,634,259,405 | +469.2% | 2,177,550,245    | +35419.4%         | 82.7%     | 30,551      | 40,340          | 5,782        | 7.0x           |
| fibonacci_u256_rust                      | 4,041,606,844 | +773.2% | 3,584,897,684    | +58375.5%         | 88.7%     | 9,179       | 18,968          | 4,304        | 4.4x           |


### Fibonacci_u256 - fib_15

| Implementation                           | ref_time       | vs Best  | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------------------- | -------------- | -------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Fibonacci_u256_iter_evm                  | 465,258,063    | -        | 8,548,903        | -                 | 1.8%      | 8,356       | 18,145          | 3,661        | 5.0x           |
| Fibonacci_u256_iter_pvm                  | 526,300,277    | +13.1%   | 69,604,213       | +714.2%           | 13.2%     | 9,420       | 19,209          | 4,624        | 4.2x           |
| fibonacci_u256_iter_primitive_types_rust | 548,571,047    | +17.9%   | 91,861,887       | +974.5%           | 16.7%     | 9,050       | 18,839          | 4,180        | 4.5x           |
| fibonacci_u256_iter_rust                 | 691,325,834    | +48.6%   | 234,616,674      | +2644.4%          | 33.9%     | 9,089       | 18,878          | 4,214        | 4.5x           |
| fibonacci_u256_iter_ink                  | 763,442,336    | +64.1%   | 306,733,176      | +3488.0%          | 40.2%     | 30,558      | 40,347          | 6,091        | 6.6x           |
| Fibonacci_u256_evm                       | 1,672,297,327  | +259.4%  | 1,215,588,167    | +14119.2%         | 72.7%     | 8,360       | 18,149          | 3,254        | 5.6x           |
| Fibonacci_u256_pvm                       | 8,417,639,707  | +1709.2% | 7,960,930,547    | +93022.2%         | 94.6%     | 9,521       | 19,310          | 4,651        | 4.2x           |
| fibonacci_u256_primitive_types_rust      | 22,885,007,440 | +4818.8% | 22,428,285,184   | +262252.8%        | 98.0%     | 9,102       | 18,891          | 4,338        | 4.4x           |
| fibonacci_u256_ink                       | 22,977,048,301 | +4838.6% | 22,520,326,045   | +263329.4%        | 98.0%     | 30,554      | 40,343          | 5,782        | 7.0x           |
| fibonacci_u256_rust                      | 40,293,896,160 | +8560.5% | 39,837,173,904   | +465891.6%        | 98.9%     | 9,182       | 18,971          | 4,304        | 4.4x           |


### Fibonacci_u256 - fib_5

| Implementation                           | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Fibonacci_u256_iter_evm                  | 460,421,443 | -       | 3,712,283        | -                 | 0.8%      | 8,356       | 18,145          | 3,661        | 5.0x           |
| Fibonacci_u256_evm                       | 466,910,210 | +1.4%   | 10,201,050       | +174.8%           | 2.2%      | 8,360       | 18,149          | 3,254        | 5.6x           |
| Fibonacci_u256_iter_pvm                  | 484,661,773 | +5.3%   | 27,952,613       | +653.0%           | 5.8%      | 9,423       | 19,212          | 4,624        | 4.2x           |
| fibonacci_u256_iter_primitive_types_rust | 496,170,647 | +7.8%   | 39,461,487       | +963.0%           | 8.0%      | 9,050       | 18,839          | 4,180        | 4.5x           |
| Fibonacci_u256_pvm                       | 525,333,307 | +14.1%  | 68,624,147       | +1748.6%          | 13.1%     | 9,521       | 19,310          | 4,651        | 4.2x           |
| fibonacci_u256_iter_rust                 | 536,811,834 | +16.6%  | 80,102,674       | +2057.8%          | 14.9%     | 9,089       | 18,878          | 4,214        | 4.5x           |
| fibonacci_u256_primitive_types_rust      | 642,435,324 | +39.5%  | 185,726,164      | +4903.0%          | 28.9%     | 9,099       | 18,888          | 4,338        | 4.4x           |
| fibonacci_u256_iter_ink                  | 670,062,136 | +45.5%  | 213,352,976      | +5647.2%          | 31.8%     | 30,558      | 40,347          | 6,091        | 6.6x           |
| fibonacci_u256_rust                      | 771,754,704 | +67.6%  | 315,045,544      | +8386.6%          | 40.8%     | 9,179       | 18,968          | 4,304        | 4.4x           |
| fibonacci_u256_ink                       | 800,245,405 | +73.8%  | 343,536,245      | +9154.0%          | 42.9%     | 30,551      | 40,340          | 5,782        | 7.0x           |


### FungibleCredential - burn

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 1,091,230,377 | -       | 634,089,049      | -                 | 58.1%     | 97,801      | 107,590         | 12,456       | 8.6x           |
| FungibleCredential_pvm   | 1,395,310,939 | +27.9%  | 938,169,611      | +48.0%            | 67.2%     | 156,350     | 166,139         | 70,349       | 2.4x           |
| fungible_credential_rust | 1,630,764,801 | +49.4%  | 1,173,636,569    | +85.1%            | 72.0%     | 67,344      | 77,133          | 22,583       | 3.4x           |


### FungibleCredential - createClass_nontransferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 1,432,359,193 | -       | 973,502,289      | -                 | 68.0%     | 139,190     | 148,979         | 15,244       | 9.8x           |
| fungible_credential_rust | 1,513,510,340 | +5.7%   | 1,054,666,532    | +8.3%             | 69.7%     | 57,228      | 67,017          | 25,470       | 2.6x           |
| FungibleCredential_pvm   | 2,290,873,640 | +59.9%  | 1,832,016,736    | +88.2%            | 80.0%     | 249,186     | 258,975         | 73,071       | 3.5x           |


### FungibleCredential - createClass_transferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 1,432,347,373 | -       | 973,490,469      | -                 | 68.0%     | 139,190     | 148,979         | 15,002       | 9.9x           |
| fungible_credential_rust | 1,500,340,479 | +4.7%   | 1,041,496,671    | +7.0%             | 69.4%     | 57,228      | 67,017          | 25,399       | 2.6x           |
| FungibleCredential_pvm   | 2,290,936,332 | +59.9%  | 1,832,079,428    | +88.2%            | 80.0%     | 249,250     | 259,039         | 72,829       | 3.6x           |


### FungibleCredential - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 966,669,489   | -       | 147,476,727      | -                 | 15.3%     | 27,480      | 37,269          | 7,022        | 5.3x           |
| fungible_credential_rust | 1,155,902,156 | +19.6%  | 167,295,968      | +13.4%            | 14.5%     | 17,191      | 26,980          | 7,139        | 3.8x           |
| FungibleCredential_pvm   | 1,926,253,859 | +99.3%  | 164,721,062      | +11.7%            | 8.6%      | 27,448      | 37,237          | 6,804        | 5.5x           |


### FungibleCredential - issue

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 2,233,940,100 | -       | 1,776,353,508    | -                 | 79.5%     | 251,982     | 261,771         | 15,514       | 16.9x          |
| FungibleCredential_pvm   | 2,745,357,175 | +22.9%  | 2,287,770,583    | +28.8%            | 83.3%     | 310,147     | 319,936         | 73,341       | 4.4x           |
| fungible_credential_rust | 2,958,085,383 | +32.4%  | 2,500,498,791    | +40.8%            | 84.5%     | 149,473     | 159,262         | 25,647       | 6.2x           |


### FungibleCredential - issue_more

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 1,150,196,362 | -       | 692,609,770      | -                 | 60.2%     | 108,192     | 117,981         | 12,667       | 9.3x           |
| FungibleCredential_pvm   | 1,453,943,107 | +26.4%  | 996,356,515      | +43.9%            | 68.5%     | 166,741     | 176,530         | 70,560       | 2.5x           |
| fungible_credential_rust | 1,829,056,156 | +59.0%  | 1,371,482,660    | +98.0%            | 75.0%     | 77,704      | 87,493          | 22,607       | 3.9x           |


### FungibleCredential - revoke

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 1,092,625,223 | -       | 635,051,727      | -                 | 58.1%     | 97,900      | 107,689         | 12,460       | 8.6x           |
| FungibleCredential_pvm   | 1,395,328,001 | +27.7%  | 937,741,409      | +47.7%            | 67.2%     | 156,452     | 166,241         | 70,353       | 2.4x           |
| fungible_credential_rust | 1,675,216,496 | +53.3%  | 1,217,643,000    | +91.7%            | 72.7%     | 67,446      | 77,235          | 22,587       | 3.4x           |


### FungibleCredential - transfer

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| FungibleCredential_evm   | 2,410,468,879 | -       | 1,952,908,479    | -                 | 81.0%     | 272,618     | 282,407         | 16,187       | 17.4x          |
| FungibleCredential_pvm   | 3,050,178,116 | +26.5%  | 2,592,617,716    | +32.8%            | 85.0%     | 330,879     | 340,668         | 74,014       | 4.6x           |
| fungible_credential_rust | 3,125,594,625 | +29.7%  | 2,668,034,225    | +36.6%            | 85.4%     | 159,654     | 169,443         | 25,678       | 6.6x           |


### KeyRegistry - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| KeyRegistry_evm   | 773,943,487   | -       | 2,056,984        | +39.7%            | 0.3%      | 6,934       | 16,723          | 6,559        | 2.5x           |
| key_registry_rust | 1,006,394,938 | +30.0%  | 1,472,359        | -                 | 0.1%      | 6,934       | 16,723          | 6,315        | 2.6x           |
| KeyRegistry_pvm   | 1,341,310,766 | +73.3%  | 12,524,738       | +750.7%           | 0.9%      | 6,934       | 16,723          | 6,699        | 2.5x           |


### KeyRegistry - fetchPrekeyBundle

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| KeyRegistry_evm   | 1,665,424,406 | -       | 1,208,715,246    | -                 | 72.6%     | 187,320     | 197,109         | 13,117       | 15.0x          |
| KeyRegistry_pvm   | 2,518,039,233 | +51.2%  | 2,061,330,073    | +70.5%            | 81.9%     | 221,922     | 231,711         | 47,341       | 4.9x           |
| key_registry_rust | 2,744,464,573 | +64.8%  | 2,287,755,413    | +89.3%            | 83.4%     | 150,346     | 160,135         | 27,316       | 5.9x           |


### KeyRegistry - registerIdentity

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| KeyRegistry_evm   | 1,851,843,332 | -       | 1,392,567,356    | -                 | 75.2%     | 187,684     | 197,473         | 11,787       | 16.8x          |
| key_registry_rust | 1,899,993,110 | +2.6%   | 1,440,717,134    | +3.5%             | 75.8%     | 89,095      | 98,884          | 26,191       | 3.8x           |
| KeyRegistry_pvm   | 2,374,663,195 | +28.2%  | 1,915,387,219    | +37.5%            | 80.7%     | 222,093     | 231,882         | 46,544       | 5.0x           |


### KeyRegistry - updateSignedPrekey

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| KeyRegistry_evm   | 1,216,778,112 | -       | 758,340,280      | -                 | 62.3%     | 105,468     | 115,257         | 9,318        | 12.4x          |
| KeyRegistry_pvm   | 1,603,471,806 | +31.8%  | 1,145,033,974    | +51.0%            | 71.4%     | 160,647     | 170,436         | 43,999       | 3.9x           |
| key_registry_rust | 1,654,582,836 | +36.0%  | 1,196,158,100    | +57.7%            | 72.3%     | 68,742      | 78,531          | 23,621       | 3.3x           |


### KeyRegistry - uploadOneTimePrekeys

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| KeyRegistry_evm   | 1,774,010,363 | -       | 1,315,572,531    | -                 | 74.2%     | 197,941     | 207,730         | 12,432       | 16.7x          |
| KeyRegistry_pvm   | 2,146,456,737 | +21.0%  | 1,688,018,905    | +28.3%            | 78.6%     | 232,350     | 242,139         | 47,189       | 5.1x           |
| key_registry_rust | 2,623,602,314 | +47.9%  | 2,165,164,482    | +64.6%            | 82.5%     | 150,537     | 160,326         | 26,710       | 6.0x           |


### Log - addWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Log_evm        | 1,170,212,662 | -       | 713,045,142      | -                 | 60.9%     | 107,062     | 116,851         | 13,814       | 8.5x           |
| Log_pvm        | 1,443,322,160 | +23.3%  | 986,154,640      | +38.3%            | 68.3%     | 154,803     | 164,592         | 61,931       | 2.7x           |
| log_rust       | 1,742,488,897 | +48.9%  | 1,285,321,377    | +80.3%            | 73.8%     | 86,515      | 96,304          | 24,510       | 3.9x           |


### Log - append

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Log_evm        | 1,453,384,067 | -       | 996,216,547      | -                 | 68.5%     | 148,186     | 157,975         | 13,616       | 11.6x          |
| log_rust       | 1,544,238,731 | +6.3%   | 1,087,084,307    | +9.1%             | 70.4%     | 55,786      | 65,575          | 24,360       | 2.7x           |
| Log_pvm        | 1,804,286,690 | +24.1%  | 1,347,119,170    | +35.2%            | 74.7%     | 195,959     | 205,748         | 61,733       | 3.3x           |


### Log - append_2

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Log_evm        | 1,453,384,067 | -       | 996,216,547      | -                 | 68.5%     | 148,186     | 157,975         | 13,748       | 11.5x          |
| log_rust       | 1,544,238,731 | +6.3%   | 1,087,084,307    | +9.1%             | 70.4%     | 55,786      | 65,575          | 24,393       | 2.7x           |
| Log_pvm        | 1,804,286,690 | +24.1%  | 1,347,119,170    | +35.2%            | 74.7%     | 195,959     | 205,748         | 61,865       | 3.3x           |


### Log - create_nonpermissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Log_evm        | 1,309,314,435 | -       | 852,579,083      | -                 | 65.1%     | 127,509     | 137,298         | 13,272       | 10.3x          |
| log_rust       | 1,758,898,135 | +34.3%  | 1,302,175,879    | +52.7%            | 74.0%     | 76,127      | 85,916          | 24,120       | 3.6x           |
| Log_pvm        | 1,967,144,330 | +50.2%  | 1,510,408,978    | +77.2%            | 76.8%     | 216,471     | 226,260         | 61,389       | 3.7x           |


### Log - create_permissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Log_evm        | 1,309,339,907 | -       | 852,604,555      | -                 | 65.1%     | 127,573     | 137,362         | 13,652       | 10.1x          |
| log_rust       | 1,758,904,503 | +34.3%  | 1,302,182,247    | +52.7%            | 74.0%     | 76,143      | 85,932          | 24,377       | 3.5x           |
| Log_pvm        | 1,966,731,818 | +50.2%  | 1,509,996,466    | +77.1%            | 76.8%     | 216,599     | 226,388         | 61,769       | 3.7x           |


### Log - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Log_evm        | 951,371,647   | -       | 147,287,251      | -                 | 15.5%     | 27,480      | 37,269          | 6,606        | 5.6x           |
| log_rust       | 1,136,433,871 | +19.5%  | 166,012,486      | +12.7%            | 14.6%     | 17,191      | 26,980          | 6,996        | 3.9x           |
| Log_pvm        | 1,739,324,273 | +82.8%  | 164,922,602      | +12.0%            | 9.5%      | 27,448      | 37,237          | 5,929        | 6.3x           |


### Log - removeWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| log_rust       | 1,285,960,080 | -       | 828,805,656      | -                 | 64.5%     | 55,743      | 65,532          | 21,346       | 3.1x           |
| Log_evm        | 1,689,935,927 | +31.4%  | 1,232,768,407    | +48.7%            | 72.9%     | 189,470     | 199,259         | 14,054       | 14.2x          |
| Log_pvm        | 2,070,293,263 | +61.0%  | 1,613,125,743    | +94.6%            | 77.9%     | 237,630     | 247,419         | 62,171       | 4.0x           |


### Log - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| log_rust       | 1,229,629,480 | -       | 772,475,056      | -                 | 62.8%     | 45,529      | 55,318          | 21,293       | 2.6x           |
| Log_evm        | 1,957,770,911 | +59.2%  | 1,500,603,391    | +94.3%            | 76.6%     | 230,562     | 240,351         | 14,087       | 17.1x          |
| Log_pvm        | 2,322,201,321 | +88.9%  | 1,865,033,801    | +141.4%           | 80.3%     | 278,367     | 288,156         | 62,204       | 4.6x           |


### Marketplace - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Marketplace_pvm | 5,287,595,542 | -       | 201,674,587      | -                 | 3.8%      | 27,448      | 37,237          | 6,159        | 6.0x           |


### MarketplaceProxy - createItem_digital

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 6,955,434,277 | -       | 6,494,049,845    | -                 | 93.4%     | 1,021,778   | 1,031,567       | 283,345      | 3.6x           |
| MarketplaceProxy_pvm | 7,090,411,521 | +1.9%   | 6,629,027,089    | +2.1%             | 93.5%     | 1,051,626   | 1,061,415       | 294,730      | 3.6x           |


### MarketplaceProxy - createItem_physical

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 6,792,217,220 | -       | 6,330,832,788    | -                 | 93.2%     | 1,021,842   | 1,031,631       | 283,719      | 3.6x           |
| MarketplaceProxy_pvm | 6,927,194,464 | +2.0%   | 6,465,810,032    | +2.1%             | 93.3%     | 1,051,690   | 1,061,479       | 295,104      | 3.6x           |


### MarketplaceProxy - deactivateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 1,327,234,184 | -       | 870,498,832      | -                 | 65.6%     | 327,072     | 336,861         | 282,551      | 1.2x           |
| MarketplaceProxy_pvm | 1,393,867,178 | +5.0%   | 937,131,826      | +7.7%             | 67.2%     | 341,996     | 351,785         | 294,005      | 1.2x           |


### MarketplaceProxy - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 4,071,362,144 | -       | 3,321,606,659    | -                 | 81.6%     | 576,148     | 585,937         | 284,356      | 2.1x           |
| MarketplaceProxy_pvm | 4,355,843,329 | +7.0%   | 3,461,101,060    | +4.2%             | 79.5%     | 582,642     | 592,431         | 292,702      | 2.0x           |


### MarketplaceProxy - markAsShipped

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 2,857,812,122 | -       | 2,399,806,458    | -                 | 84.0%     | 501,891     | 511,680         | 285,487      | 1.8x           |
| MarketplaceProxy_pvm | 2,924,571,028 | +2.3%   | 2,466,565,364    | +2.8%             | 84.3%     | 516,815     | 526,604         | 296,908      | 1.8x           |


### MarketplaceProxy - purchaseItem_digital

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 7,682,438,690 | -       | 7,223,503,210    | -                 | 94.0%     | 930,777     | 940,566         | 286,771      | 3.3x           |
| MarketplaceProxy_pvm | 7,749,995,900 | +0.9%   | 7,291,060,420    | +0.9%             | 94.1%     | 945,701     | 955,490         | 298,192      | 3.2x           |


### MarketplaceProxy - purchaseItem_physical

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 7,707,165,636 | -       | 7,246,540,772    | -                 | 94.0%     | 956,572     | 966,361         | 286,515      | 3.4x           |
| MarketplaceProxy_pvm | 7,774,711,582 | +0.9%   | 7,314,086,718    | +0.9%             | 94.1%     | 971,496     | 981,285         | 297,936      | 3.3x           |


### MarketplaceProxy - purchaseItem_with_matchmaker

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 8,896,870,877 | -       | 8,437,935,397    | -                 | 94.8%     | 1,022,895   | 1,032,684       | 289,110      | 3.6x           |
| MarketplaceProxy_pvm | 8,964,428,087 | +0.8%   | 8,505,492,607    | +0.8%             | 94.9%     | 1,037,819   | 1,047,608       | 300,531      | 3.5x           |


### MarketplaceProxy - registerMatchMaker

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 2,730,601,666 | -       | 2,272,596,002    | -                 | 83.2%     | 450,447     | 460,236         | 283,690      | 1.6x           |
| MarketplaceProxy_pvm | 2,798,164,508 | +2.5%   | 2,340,158,844    | +3.0%             | 83.6%     | 465,371     | 475,160         | 295,144      | 1.6x           |


### MarketplaceProxy - registerShop

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 2,694,561,189 | -       | 2,233,595,829    | -                 | 82.9%     | 450,932     | 460,721         | 282,183      | 1.6x           |
| MarketplaceProxy_pvm | 2,761,300,383 | +2.5%   | 2,300,335,023    | +3.0%             | 83.3%     | 465,856     | 475,645         | 293,535      | 1.6x           |


### MarketplaceProxy - updateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 4,132,797,750 | -       | 3,671,832,390    | -                 | 88.8%     | 554,175     | 563,964         | 283,640      | 2.0x           |
| MarketplaceProxy_pvm | 4,199,536,944 | +1.6%   | 3,738,571,584    | +1.8%             | 89.0%     | 569,099     | 578,888         | 295,061      | 2.0x           |


### MarketplaceProxy - updateMatchMakerFee

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MarketplaceProxy_evm | 1,521,871,941 | -       | 1,065,162,781    | -                 | 70.0%     | 347,547     | 357,336         | 280,123      | 1.3x           |
| MarketplaceProxy_pvm | 1,588,504,935 | +4.4%   | 1,131,795,775    | +6.3%             | 71.2%     | 362,471     | 372,260         | 291,790      | 1.3x           |


### MixedERC20 - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MixedERC20_evm | 1,054,638,415 | -       | 303,111,160      | -                 | 28.7%     | 48,026      | 57,815          | 7,452        | 7.8x           |
| MixedERC20_pvm | 1,671,172,534 | +58.5%  | 568,617,751      | +87.6%            | 34.0%     | 47,962      | 57,751          | 7,308        | 7.9x           |


### MixedERC20 - mint

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MixedERC20_evm | 780,038,103 | -       | 322,883,679      | -                 | 41.4%     | 51,333      | 61,122          | 9,926        | 6.2x           |
| MixedERC20_pvm | 920,592,087 | +18.0%  | 463,437,663      | +43.5%            | 50.3%     | 74,147      | 83,936          | 32,671       | 2.6x           |


### MixedERC20 - transfer

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MixedERC20_evm | 806,687,817 | -       | 349,533,393      | -                 | 43.3%     | 51,365      | 61,154          | 10,029       | 6.1x           |
| MixedERC20_pvm | 982,894,888 | +21.8%  | 525,740,464      | +50.4%            | 53.5%     | 74,211      | 84,000          | 32,774       | 2.6x           |


### MixedERC20Factory - deploy

| Implementation        | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MixedERC20Factory_evm | 756,900,582   | -       | 1,845,894        | -                 | 0.2%      | 6,934       | 16,723          | 6,696        | 2.5x           |
| MixedERC20Factory_pvm | 772,830,308   | +2.1%   | 12,524,738       | +578.5%           | 1.6%      | 6,934       | 16,723          | 6,810        | 2.5x           |
| MixedERC20Factory_evm | 1,450,551,235 | +91.6%  | 994,234,955      | +53762.0%         | 68.5%     | 79,798      | 89,587          | 13,363       | 6.7x           |
| MixedERC20Factory_pvm | 1,619,914,923 | +114.0% | 1,163,598,643    | +62937.1%         | 71.8%     | 102,800     | 112,589         | 39,882       | 2.8x           |


### MixedFactory - deploy

| Implementation   | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MixedFactory_evm | 717,057,695 | -       | 1,352,408        | -                 | 0.2%      | 6,934       | 16,723          | 6,294        | 2.7x           |
| MixedFactory_pvm | 800,808,167 | +11.7%  | 12,524,738       | +826.1%           | 1.6%      | 6,934       | 16,723          | 6,327        | 2.6x           |


### MixedFactory - deployCreate

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MixedFactory_pvm | 1,086,800,485 | -       | 630,484,205      | -                 | 58.0%     | 40,558      | 50,347          | 17,636       | 2.9x           |
| MixedFactory_evm | 1,125,015,301 | +3.5%   | 668,699,021      | +6.1%             | 59.4%     | 36,263      | 46,052          | 11,325       | 4.1x           |


### MixedFactory - deployCreate2

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MixedFactory_pvm | 1,087,803,469 | -       | 631,487,189      | -                 | 58.1%     | 40,622      | 50,411          | 16,388       | 3.1x           |
| MixedFactory_evm | 1,125,137,251 | +3.4%   | 668,820,971      | +5.9%             | 59.4%     | 36,295      | 46,084          | 11,109       | 4.1x           |


### MixedPool - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MixedPool_evm  | 1,029,572,096 | -       | 294,216,269      | -                 | 28.6%     | 48,026      | 57,815          | 7,504        | 7.7x           |
| MixedPool_pvm  | 1,385,249,852 | +34.5%  | 353,828,699      | +20.3%            | 25.5%     | 47,962      | 57,751          | 7,658        | 7.5x           |


### MixedSwapRouter - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MixedSwapRouter_evm | 1,254,638,636 | -       | 533,972,393      | -                 | 42.6%     | 65,403      | 75,192          | 10,561       | 7.1x           |
| MixedSwapRouter_pvm | 1,532,528,715 | +22.1%  | 702,567,144      | +31.6%            | 45.8%     | 83,958      | 93,747          | 29,737       | 3.2x           |


### MixedSwapRouter - swap

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MixedSwapRouter_evm | 4,011,934,338 | -       | 3,554,766,818    | -                 | 88.6%     | 394,652     | 404,441         | 16,554       | 24.4x          |
| MixedSwapRouter_pvm | 5,693,616,172 | +41.9%  | 5,236,461,748    | +47.3%            | 92.0%     | 519,128     | 528,917         | 65,648       | 8.1x           |


### MixedSwapToken0 - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MixedSwapToken0_evm | 1,054,638,415 | -       | 303,111,160      | -                 | 28.7%     | 48,026      | 57,815          | 6,573        | 8.8x           |
| MixedSwapToken0_pvm | 1,667,746,354 | +58.1%  | 565,191,571      | +86.5%            | 33.9%     | 47,962      | 57,751          | 6,121        | 9.4x           |


### MixedSwapToken1 - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MixedSwapToken1_evm | 1,054,638,415 | -       | 303,111,160      | -                 | 28.7%     | 48,026      | 57,815          | 6,147        | 9.4x           |
| MixedSwapToken1_pvm | 1,667,746,354 | +58.1%  | 565,191,571      | +86.5%            | 33.9%     | 47,962      | 57,751          | 6,154        | 9.4x           |


### MockMobRule - addCounterEvidence

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MockMobRule_evm | 779,344,964   | -       | 321,365,492      | -                 | 41.2%     | 55,154      | 64,943          | 13,806       | 4.7x           |
| MockMobRule_pvm | 1,073,533,307 | +37.7%  | 615,527,643      | +91.5%            | 57.3%     | 96,667      | 106,456         | 55,348       | 1.9x           |


### MockMobRule - createDispute

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MockMobRule_evm | 1,998,793,913 | -       | 1,539,517,937    | -                 | 77.0%     | 209,498     | 219,287         | 13,435       | 16.3x          |
| MockMobRule_pvm | 2,658,486,357 | +33.0%  | 2,199,210,381    | +42.9%            | 82.7%     | 251,103     | 260,892         | 54,944       | 4.7x           |


### MockMobRule - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MockMobRule_evm | 1,043,817,550 | -       | 245,225,641      | -                 | 23.5%     | 37,737      | 47,526          | 7,275        | 6.5x           |
| MockMobRule_pvm | 1,830,532,548 | +75.4%  | 369,006,174      | +50.5%            | 20.2%     | 37,705      | 47,494          | 7,237        | 6.6x           |


### MockMobRule - resolveCase

| Implementation  | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| MockMobRule_evm | 802,657,194 | -       | 345,502,770      | -                 | 43.0%     | 65,254      | 75,043          | 14,104       | 5.3x           |
| MockMobRule_pvm | 939,482,479 | +17.0%  | 482,314,959      | +39.6%            | 51.3%     | 106,764     | 116,553         | 55,582       | 2.1x           |


### NonFungibleCredential - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| NonFungibleCredential_evm    | 957,683,230   | -       | 147,365,425      | -                 | 15.4%     | 27,480      | 37,269          | 7,319        | 5.1x           |
| non_fungible_credential_rust | 1,177,136,665 | +22.9%  | 166,415,566      | +12.9%            | 14.1%     | 17,191      | 26,980          | 7,274        | 3.7x           |
| NonFungibleCredential_pvm    | 1,923,912,840 | +100.9% | 164,586,702      | +11.7%            | 8.6%      | 27,448      | 37,237          | 6,956        | 5.4x           |


### NonFungibleCredential - issue_nontransferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| NonFungibleCredential_evm    | 3,000,267,437 | -       | 2,540,991,461    | -                 | 84.7%     | 344,387     | 354,176         | 15,644       | 22.6x          |
| non_fungible_credential_rust | 3,077,731,819 | +2.6%   | 2,618,455,843    | +3.0%             | 85.1%     | 151,045     | 160,834         | 27,241       | 5.9x           |
| NonFungibleCredential_pvm    | 4,220,506,783 | +40.7%  | 3,761,230,807    | +48.0%            | 89.1%     | 444,541     | 454,330         | 74,007       | 6.1x           |


### NonFungibleCredential - issue_transferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| NonFungibleCredential_evm    | 3,000,215,872 | -       | 2,540,939,896    | -                 | 84.7%     | 344,259     | 354,048         | 14,687       | 24.1x          |
| non_fungible_credential_rust | 3,064,402,478 | +2.1%   | 2,605,126,502    | +2.5%             | 85.0%     | 151,013     | 160,802         | 26,777       | 6.0x           |
| NonFungibleCredential_pvm    | 4,219,832,706 | +40.7%  | 3,760,556,730    | +48.0%            | 89.1%     | 444,252     | 454,041         | 73,050       | 6.2x           |


### NonFungibleCredential - issue_with_expiry

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| NonFungibleCredential_evm    | 3,000,316,736 | -       | 2,541,040,760    | -                 | 84.7%     | 344,451     | 354,240         | 16,017       | 22.1x          |
| non_fungible_credential_rust | 3,091,593,102 | +3.0%   | 2,632,317,126    | +3.6%             | 85.1%     | 151,061     | 160,850         | 27,517       | 5.8x           |
| NonFungibleCredential_pvm    | 4,215,254,978 | +40.5%  | 3,755,979,002    | +47.8%            | 89.1%     | 444,442     | 454,231         | 74,380       | 6.1x           |


### NonFungibleCredential - revoke

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| NonFungibleCredential_evm    | 690,217,405   | -       | 233,495,149      | -                 | 33.8%     | 45,709      | 55,498          | 11,908       | 4.7x           |
| NonFungibleCredential_pvm    | 843,830,167   | +22.3%  | 387,094,815      | +65.8%            | 45.9%     | 104,675     | 114,464         | 70,601       | 1.6x           |
| non_fungible_credential_rust | 1,228,172,549 | +77.9%  | 771,450,293      | +230.4%           | 62.8%     | 48,088      | 57,877          | 23,967       | 2.4x           |


### NonFungibleCredential - transfer

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| non_fungible_credential_rust | 2,342,891,791 | -       | 1,885,750,463    | -                 | 80.5%     | 109,726     | 119,515         | 27,481       | 4.3x           |
| NonFungibleCredential_evm    | 4,216,737,717 | +80.0%  | 3,759,596,389    | +99.4%            | 89.2%     | 508,554     | 518,343         | 16,456       | 31.5x          |
| NonFungibleCredential_pvm    | 5,490,404,564 | +134.3% | 5,033,263,236    | +166.9%           | 91.7%     | 567,971     | 577,760         | 74,819       | 7.7x           |


### NonFungibleCredential - updateMetadata

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| NonFungibleCredential_evm    | 642,224,056   | -       | 185,069,632      | -                 | 28.8%     | 35,519      | 45,308          | 11,979       | 3.8x           |
| NonFungibleCredential_pvm    | 809,192,693   | +26.0%  | 352,025,173      | +90.2%            | 43.5%     | 94,485      | 104,274         | 70,672       | 1.5x           |
| non_fungible_credential_rust | 1,273,301,639 | +98.3%  | 816,147,215      | +341.0%           | 64.1%     | 48,187      | 57,976          | 23,967       | 2.4x           |


### SimpleToken - deploy

| Implementation                          | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------------------------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| SimpleToken_evm                         | 712,898,900 | -       | 1,300,898        | +1836.4%          | 0.2%      | 6,934       | 16,723          | 5,824        | 2.9x           |
| simple_token_u32_no_alloc_rust          | 738,338,374 | +3.6%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,765        | 2.9x           |
| simple_token_u128_no_alloc_rust         | 750,080,377 | +5.2%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,839        | 2.9x           |
| simple_token_u256_no_alloc_rust         | 750,998,476 | +5.3%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,783        | 2.9x           |
| simple_token_u256_macro_no_alloc_rust   | 763,368,652 | +7.1%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 5,275        | 3.2x           |
| simple_token_u256_macro_bump_alloc_rust | 774,079,807 | +8.6%   | 67,180           | -                 | 0.0%      | 6,934       | 16,723          | 4,623        | 3.6x           |
| SimpleToken_pvm                         | 801,401,374 | +12.4%  | 12,457,558       | +18443.6%         | 1.6%      | 6,934       | 16,723          | 6,263        | 2.7x           |
| simple_token_u256_stylus                | 913,312,034 | +28.1%  | 16,918,421       | +25083.7%         | 1.9%      | 6,934       | 16,723          | 5,755        | 2.9x           |
| simple_token_u256_ink                   | 966,857,228 | +35.6%  | 127,627,358      | +189878.2%        | 13.2%     | 17,191      | 26,980          | 5,931        | 4.5x           |


### SimpleToken - mint

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| SimpleToken_evm                         | 776,533,806   | -       | 319,392,478      | -                 | 41.1%     | 49,919      | 59,708          | 7,869        | 7.6x           |
| SimpleToken_pvm                         | 862,557,581   | +11.1%  | 405,416,253      | +26.9%            | 47.0%     | 54,683      | 64,472          | 12,969       | 5.0x           |
| simple_token_u32_no_alloc_rust          | 881,750,735   | +13.5%  | 424,609,407      | +32.9%            | 48.2%     | 51,537      | 61,326          | 9,495        | 6.5x           |
| simple_token_u128_no_alloc_rust         | 882,830,580   | +13.7%  | 425,689,252      | +33.3%            | 48.2%     | 52,266      | 62,055          | 10,493       | 5.9x           |
| simple_token_u256_no_alloc_rust         | 938,091,805   | +20.8%  | 480,950,477      | +50.6%            | 51.3%     | 52,323      | 62,112          | 10,205       | 6.1x           |
| simple_token_u256_macro_no_alloc_rust   | 939,697,209   | +21.0%  | 482,555,881      | +51.1%            | 51.4%     | 53,091      | 62,880          | 10,671       | 5.9x           |
| simple_token_u256_macro_bump_alloc_rust | 940,594,914   | +21.1%  | 483,453,586      | +51.4%            | 51.4%     | 53,756      | 63,545          | 11,512       | 5.5x           |
| simple_token_u256_stylus                | 1,114,949,168 | +43.6%  | 657,807,840      | +106.0%           | 59.0%     | 61,354      | 71,143          | 19,137       | 3.7x           |
| simple_token_u256_ink                   | 1,178,705,143 | +51.8%  | 721,563,815      | +125.9%           | 61.2%     | 57,869      | 67,658          | 15,753       | 4.3x           |


### SimpleToken - transfer

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| SimpleToken_evm                         | 802,555,017   | -       | 345,413,689      | -                 | 43.0%     | 49,951      | 59,740          | 4,788        | 12.5x          |
| SimpleToken_pvm                         | 922,805,390   | +15.0%  | 465,664,062      | +34.8%            | 50.5%     | 54,844      | 64,633          | 9,451        | 6.8x           |
| simple_token_u128_no_alloc_rust         | 945,880,007   | +17.9%  | 488,738,679      | +41.5%            | 51.7%     | 52,298      | 62,087          | 10,733       | 5.8x           |
| simple_token_u32_no_alloc_rust          | 950,755,758   | +18.5%  | 493,614,430      | +42.9%            | 51.9%     | 51,545      | 61,334          | 9,722        | 6.3x           |
| simple_token_u256_no_alloc_rust         | 1,010,980,744 | +26.0%  | 553,839,416      | +60.3%            | 54.8%     | 52,387      | 62,176          | 10,461       | 5.9x           |
| simple_token_u256_macro_no_alloc_rust   | 1,011,981,528 | +26.1%  | 554,840,200      | +60.6%            | 54.8%     | 53,155      | 62,944          | 10,927       | 5.8x           |
| simple_token_u256_macro_bump_alloc_rust | 1,012,879,233 | +26.2%  | 555,737,905      | +60.9%            | 54.9%     | 53,820      | 63,609          | 11,739       | 5.4x           |
| simple_token_u256_stylus                | 1,261,091,895 | +57.1%  | 803,950,567      | +132.8%           | 63.8%     | 61,515      | 71,304          | 16,056       | 4.4x           |
| simple_token_u256_ink                   | 1,440,850,972 | +79.5%  | 983,709,644      | +184.8%           | 68.3%     | 78,447      | 88,236          | 15,901       | 5.5x           |


### Store - delegate

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 1,456,120,979 | -       | 998,115,315      | -                 | 68.5%     | 139,613     | 149,402         | 14,659       | 10.2x          |
| store_rust     | 1,918,895,014 | +31.8%  | 1,460,889,350    | +46.4%            | 76.1%     | 91,406      | 101,195         | 39,069       | 2.6x           |
| Store_pvm      | 2,004,510,009 | +37.7%  | 1,546,504,345    | +54.9%            | 77.2%     | 206,477     | 216,266         | 81,885       | 2.6x           |


### Store - deleteFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 1,787,885,960 | -       | 1,329,906,488    | -                 | 74.4%     | 180,891     | 190,680         | 15,572       | 12.2x          |
| store_rust     | 2,556,778,875 | +43.0%  | 2,098,799,403    | +57.8%            | 82.1%     | 143,317     | 153,106         | 40,501       | 3.8x           |
| Store_pvm      | 3,211,708,108 | +79.6%  | 2,753,728,636    | +107.1%           | 85.7%     | 248,432     | 258,221         | 82,769       | 3.1x           |


### Store - delete_

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 1,431,150,450 | -       | 973,563,858      | -                 | 68.0%     | 129,356     | 139,145         | 15,206       | 9.2x           |
| Store_pvm      | 1,891,232,834 | +32.1%  | 1,433,646,242    | +47.3%            | 75.8%     | 196,897     | 206,686         | 82,403       | 2.5x           |
| store_rust     | 2,107,121,265 | +47.2%  | 1,649,534,673    | +69.4%            | 78.3%     | 122,587     | 132,376         | 39,865       | 3.3x           |


### Store - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 831,628,420   | -       | 2,771,458        | +88.2%            | 0.3%      | 6,934       | 16,723          | 5,512        | 3.0x           |
| store_rust     | 1,213,514,851 | +45.9%  | 1,472,359        | -                 | 0.1%      | 6,934       | 16,723          | 6,190        | 2.7x           |
| Store_pvm      | 1,921,033,910 | +131.0% | 12,524,738       | +750.7%           | 0.7%      | 6,934       | 16,723          | 5,150        | 3.2x           |


### Store - revokeDelegation

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 1,813,964,541 | -       | 1,355,958,877    | -                 | 74.8%     | 191,218     | 201,007         | 15,308       | 13.1x          |
| store_rust     | 1,959,452,657 | +8.0%   | 1,501,446,993    | +10.7%            | 76.6%     | 91,876      | 101,665         | 39,805       | 2.6x           |
| Store_pvm      | 2,432,665,366 | +34.1%  | 1,974,659,702    | +45.6%            | 81.2%     | 258,759     | 268,548         | 82,505       | 3.3x           |


### Store - set

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 1,533,404,394 | -       | 1,075,398,730    | -                 | 70.1%     | 149,902     | 159,691         | 14,659       | 10.9x          |
| Store_pvm      | 1,928,502,025 | +25.8%  | 1,470,496,361    | +36.7%            | 76.3%     | 216,927     | 226,716         | 81,885       | 2.8x           |
| store_rust     | 2,142,936,511 | +39.8%  | 1,684,930,847    | +56.7%            | 78.6%     | 111,920     | 121,709         | 38,832       | 3.1x           |


### Store - setFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 1,894,867,484 | -       | 1,436,455,844    | -                 | 75.8%     | 201,440     | 211,229         | 15,168       | 13.9x          |
| store_rust     | 2,605,924,473 | +37.5%  | 2,147,512,833    | +49.5%            | 82.4%     | 132,669     | 142,458         | 39,714       | 3.6x           |
| Store_pvm      | 3,245,371,535 | +71.3%  | 2,786,959,895    | +94.0%            | 85.9%     | 268,465     | 278,254         | 82,365       | 3.4x           |


### Store - set_update

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| Store_evm      | 975,935,514   | -       | 517,942,946      | -                 | 53.1%     | 78,036      | 87,825          | 12,072       | 7.3x           |
| store_rust     | 1,236,944,732 | +26.7%  | 778,952,164      | +50.4%            | 63.0%     | 60,816      | 70,605          | 35,930       | 2.0x           |
| Store_pvm      | 1,244,569,687 | +27.5%  | 786,564,023      | +51.9%            | 63.2%     | 145,095     | 154,884         | 79,609       | 1.9x           |


### TetherToken - approve

| Implementation  | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| TetherToken_evm | 734,300,816 | -       | 277,159,488      | -                 | 37.7%     | 43,745      | 53,534          | 12,366       | 4.3x           |
| TetherToken_pvm | 945,378,400 | +28.7%  | 488,223,976      | +76.2%            | 51.6%     | 93,767      | 103,556         | 62,601       | 1.7x           |


### TetherToken - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| TetherToken_evm | 1,903,078,450 | -       | 1,105,807,315    | -                 | 58.1%     | 150,692     | 160,481         | 6,555        | 24.5x          |
| TetherToken_pvm | 3,034,254,323 | +59.4%  | 1,450,419,821    | +31.2%            | 47.8%     | 150,951     | 160,740         | 6,941        | 23.2x          |


### TetherToken - transfer

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| TetherToken_evm | 1,121,523,488 | -       | 664,369,064      | -                 | 59.2%     | 105,482     | 115,271         | 12,609       | 9.1x           |
| TetherToken_pvm | 1,389,244,926 | +23.9%  | 932,090,502      | +40.3%            | 67.1%     | 155,405     | 165,194         | 62,844       | 2.6x           |


### TetherToken - transferFrom

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| TetherToken_evm | 1,315,571,434 | -       | 858,011,034      | -                 | 65.2%     | 126,185     | 135,974         | 9,620        | 14.1x          |
| TetherToken_pvm | 1,664,845,401 | +26.5%  | 1,207,285,001    | +40.7%            | 72.5%     | 176,140     | 185,929         | 59,554       | 3.1x           |


### W3S - buyTicket

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 3,662,501,001 | -       | 3,205,765,649    | -                 | 87.5%     | 410,815     | 420,604         | 25,933       | 16.2x          |
| W3S_pvm        | 4,770,255,427 | +30.2%  | 4,313,520,075    | +34.6%            | 90.4%     | 526,526     | 536,315         | 141,006      | 3.8x           |


### W3S - checkIn

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 1,972,328,564 | -       | 1,515,619,404    | -                 | 76.8%     | 201,403     | 211,192         | 26,367       | 8.0x           |
| W3S_pvm        | 2,612,254,630 | +32.4%  | 2,155,545,470    | +42.2%            | 82.5%     | 316,789     | 326,578         | 140,967      | 2.3x           |


### W3S - configurePaymentToken

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 1,252,894,768 | -       | 795,308,176      | -                 | 63.5%     | 122,516     | 132,305         | 19,383       | 6.8x           |
| W3S_pvm        | 1,668,519,144 | +33.2%  | 1,210,932,552    | +52.3%            | 72.6%     | 215,979     | 225,768         | 112,316      | 2.0x           |


### W3S - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 1,761,885,406 | -       | 857,873,182      | -                 | 48.7%     | 119,953     | 129,742         | 7,205        | 18.0x          |
| W3S_pvm        | 3,634,885,402 | +106.3% | 1,242,908,518    | +44.9%            | 34.2%     | 119,761     | 129,550         | 6,476        | 20.0x          |


### W3S - grantVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 781,557,409   | -       | 324,835,153      | -                 | 41.6%     | 60,648      | 70,437          | 19,413       | 3.6x           |
| W3S_pvm        | 1,120,890,080 | +43.4%  | 664,154,728      | +104.5%           | 59.3%     | 154,146     | 163,935         | 112,246      | 1.5x           |


### W3S - pauseSales

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 708,991,636 | -       | 252,688,452      | -                 | 35.6%     | 50,263      | 60,052          | 19,644       | 3.1x           |
| W3S_pvm        | 957,448,769 | +35.0%  | 501,145,585      | +98.3%            | 52.3%     | 143,790     | 153,579         | 112,439      | 1.4x           |


### W3S - redeemTicketStaff

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 2,758,671,362 | -       | 2,301,530,034    | -                 | 83.4%     | 311,370     | 321,159         | 19,957       | 16.1x          |
| W3S_pvm        | 3,631,085,993 | +31.6%  | 3,173,944,665    | +37.9%            | 87.4%     | 405,125     | 414,914         | 112,690      | 3.7x           |


### W3S - revokeVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 785,653,446   | -       | 328,931,190      | -                 | 41.9%     | 60,680      | 70,469          | 19,713       | 3.6x           |
| W3S_pvm        | 1,121,097,040 | +42.7%  | 664,361,688      | +102.0%           | 59.3%     | 154,339     | 164,128         | 112,610      | 1.5x           |


### W3S - setMerkleRoot

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 661,613,667 | -       | 204,459,243      | -                 | 30.9%     | 40,201      | 49,990          | 16,151       | 3.1x           |
| W3S_pvm        | 922,934,329 | +39.5%  | 465,766,809      | +127.8%           | 50.5%     | 133,763     | 143,552         | 109,548      | 1.3x           |


### W3S - unpauseSales

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| W3S_evm        | 710,536,746 | -       | 254,233,562      | -                 | 35.8%     | 50,295      | 60,084          | 19,713       | 3.0x           |
| W3S_pvm        | 960,037,577 | +35.1%  | 503,721,297      | +98.1%            | 52.5%     | 143,954     | 153,743         | 112,541      | 1.4x           |


### WETH9 - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| WETH9_evm      | 1,172,876,247 | -       | 437,810,346      | -                 | 37.3%     | 68,572      | 78,361          | 6,874        | 11.4x          |
| WETH9_pvm      | 1,467,918,152 | +25.2%  | 487,655,390      | +11.4%            | 33.2%     | 68,476      | 78,265          | 5,624        | 13.9x          |


### WETH9 - deposit

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| WETH9_evm      | 634,143,284 | -       | 177,735,332      | -                 | 28.0%     | 30,357      | 40,146          | 9,578        | 4.2x           |
| WETH9_pvm      | 724,315,197 | +14.2%  | 267,907,245      | +50.7%            | 37.0%     | 45,879      | 55,668          | 24,367       | 2.3x           |


### WETH9 - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| WETH9_evm      | 862,159,389   | -       | 405,004,965      | -                 | 47.0%     | 61,395      | 71,184          | 9,717        | 7.3x           |
| WETH9_pvm      | 1,025,971,634 | +19.0%  | 568,817,210      | +40.4%            | 55.4%     | 76,917      | 86,706          | 24,506       | 3.5x           |


### WETH9 - withdraw

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| WETH9_evm      | 952,572,291   | -       | 495,850,035      | -                 | 52.1%     | 46,049      | 55,838          | 7,793        | 7.2x           |
| WETH9_pvm      | 1,069,934,260 | +12.3%  | 613,212,004      | +23.7%            | 57.3%     | 61,603      | 71,392          | 22,549       | 3.2x           |


### XENCrypto - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| XENCrypto_evm  | 1,259,403,726 | -       | 387,798,786      | -                 | 30.8%     | 58,283      | 68,072          | 6,890        | 9.9x           |
| XENCrypto_pvm  | 3,117,616,203 | +147.5% | 597,717,525      | +54.1%            | 19.2%     | 58,219      | 68,008          | 7,109        | 9.6x           |


### flipper - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| flipper_ink    | 852,218,926   | -       | 117,336,976      | -                 | 13.8%     | 17,191      | 26,980          | 6,118        | 4.4x           |
| flipper_evm    | 855,594,102   | +0.4%   | 147,845,673      | +26.0%            | 17.3%     | 27,480      | 37,269          | 5,190        | 7.2x           |
| flipper_pvm    | 929,757,804   | +9.1%   | 189,576,651      | +61.6%            | 20.4%     | 27,577      | 37,366          | 6,085        | 6.1x           |
| flipper_stylus | 1,223,084,550 | +43.5%  | 462,238,116      | +293.9%           | 37.8%     | 58,348      | 68,137          | 6,017        | 11.3x          |


### flipper - flip

| Implementation | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| -------------- | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| flipper_evm    | 602,393,700 | -       | 146,103,612      | -                 | 24.3%     | 28,813      | 38,602          | 7,316        | 5.3x           |
| flipper_ink    | 624,150,380 | +3.6%   | 167,860,292      | +14.9%            | 26.9%     | 30,618      | 40,407          | 6,010        | 6.7x           |
| flipper_pvm    | 624,844,196 | +3.7%   | 168,554,108      | +15.4%            | 27.0%     | 30,945      | 40,734          | 9,768        | 4.2x           |
| flipper_stylus | 712,942,466 | +18.4%  | 256,652,378      | +75.7%            | 36.0%     | 42,485      | 52,274          | 11,021       | 4.7x           |


### incrementer - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| incrementer_ink    | 828,719,461   | -       | 100,811,842      | -                 | 12.2%     | 17,191      | 26,980          | 6,621        | 4.1x           |
| incrementer_evm    | 856,661,281   | +3.4%   | 147,849,790      | +46.7%            | 17.3%     | 27,480      | 37,269          | 6,424        | 5.8x           |
| incrementer_pvm    | 937,080,985   | +13.1%  | 189,442,291      | +87.9%            | 20.2%     | 27,577      | 37,366          | 4,918        | 7.6x           |
| incrementer_stylus | 1,237,301,195 | +49.3%  | 451,086,236      | +347.5%           | 36.5%     | 58,348      | 68,137          | 6,022        | 11.3x          |


### incrementer - inc

| Implementation     | ref_time    | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | benchmarked pov | consumed pov | pov overcharge |
| ------------------ | ----------- | ------- | ---------------- | ----------------- | --------- | ----------- | --------------- | ------------ | -------------- |
| incrementer_evm    | 603,542,960 | -       | 146,833,800      | -                 | 24.3%     | 28,968      | 38,757          | 7,639        | 5.1x           |
| incrementer_ink    | 621,979,665 | +3.1%   | 165,270,505      | +12.6%            | 26.6%     | 30,287      | 40,076          | 5,826        | 6.9x           |
| incrementer_pvm    | 632,260,088 | +4.8%   | 175,550,928      | +19.6%            | 27.8%     | 31,504      | 41,293          | 9,609        | 4.3x           |
| incrementer_stylus | 719,865,101 | +19.3%  | 263,155,941      | +79.2%            | 36.6%     | 44,156      | 53,945          | 12,710       | 4.2x           |


