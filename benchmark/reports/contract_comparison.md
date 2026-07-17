# Revive Contract Comparison

Generated on: 2026-07-09

### Benchmark Environment

- **Chain:** Development | **Runtime:** revive-dev-runtime@0 | **Node:** Substrate Node 0.0.0-bbbb695f456 | **resolc:** 1.3.0+commit.fb0e9e6 | **solc:** 0.8.30+commit.73712a01

Comparison of gas usage across different contract implementations.

## Chain: eth-rpc

### BenchERC1155 - create

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC1155_evm         | 1,232,614,107 | -       | 317,200,837      | -                 | 25.7%     | 29,850      | 38,525            |
| BenchERC1155_pvm         | 1,326,804,655 | +7.6%   | 411,391,385      | +29.7%            | 31.0%     | 39,907      | 48,582            |
| bench_erc1155_macro_rust | 1,397,266,707 | +13.4%  | 481,853,437      | +51.9%            | 34.5%     | 37,982      | 46,657            |
| bench_erc1155_dsl_rust   | 1,407,967,487 | +14.2%  | 492,554,217      | +55.3%            | 35.0%     | 34,569      | 43,244            |
| bench_erc1155_stylus     | 1,484,241,751 | +20.4%  | 568,828,481      | +79.3%            | 38.3%     | 49,935      | 58,610            |
| bench_erc1155_ink        | 1,690,611,205 | +37.2%  | 775,197,935      | +144.4%           | 45.9%     | 51,577      | 60,252            |


### BenchERC1155 - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC1155_evm         | 1,613,497,764 | -       | 1,498,080        | +3514.7%          | 0.1%      | 10,832      | 19,507            |
| bench_erc1155_dsl_rust   | 1,740,382,238 | +7.9%   | 41,444           | -                 | 0.0%      | 24,914      | 33,589            |
| bench_erc1155_macro_rust | 1,863,647,085 | +15.5%  | 29,977,806       | +72233.3%         | 1.6%      | 35,153      | 43,828            |
| BenchERC1155_pvm         | 1,895,062,189 | +17.5%  | 8,753,785        | +21022.0%         | 0.5%      | 40,928      | 49,603            |
| bench_erc1155_stylus     | 2,171,533,475 | +34.6%  | 11,009,411       | +26464.5%         | 0.5%      | 71,012      | 79,687            |
| bench_erc1155_ink        | 2,393,829,539 | +48.4%  | 188,842,505      | +455557.0%        | 7.9%      | 86,147      | 94,822            |


### BenchERC20 - deploy

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC20_evm         | 1,987,980,955 | -       | 377,293,831      | -                 | 19.0%     | 31,202      | 39,877            |
| bench_erc20_dsl_rust   | 2,158,963,182 | +8.6%   | 444,629,513      | +17.8%            | 20.6%     | 42,629      | 51,304            |
| bench_erc20_macro_rust | 2,268,042,906 | +14.1%  | 492,511,127      | +30.5%            | 21.7%     | 49,343      | 58,018            |
| BenchERC20_pvm         | 2,279,075,196 | +14.6%  | 431,926,862      | +14.5%            | 19.0%     | 57,200      | 65,875            |
| bench_erc20_stylus     | 2,774,666,892 | +39.6%  | 632,001,143      | +67.5%            | 22.8%     | 99,878      | 108,553           |
| bench_erc20_ink        | 2,845,302,325 | +43.1%  | 685,354,536      | +81.7%            | 24.1%     | 91,517      | 100,192           |


### BenchERC20 - transfer

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC20_evm         | 1,139,744,219 | -       | 223,967,124      | -                 | 19.7%     | 29,765      | 38,440            |
| BenchERC20_pvm         | 1,223,323,929 | +7.3%   | 307,546,834      | +37.3%            | 25.1%     | 38,592      | 47,267            |
| bench_erc20_macro_rust | 1,294,789,633 | +13.6%  | 379,012,538      | +69.2%            | 29.3%     | 35,973      | 44,648            |
| bench_erc20_dsl_rust   | 1,329,991,137 | +16.7%  | 414,214,042      | +84.9%            | 31.1%     | 33,735      | 42,410            |
| bench_erc20_stylus     | 1,472,779,341 | +29.2%  | 557,002,246      | +148.7%           | 37.8%     | 49,399      | 58,074            |
| bench_erc20_ink        | 1,740,947,894 | +52.7%  | 825,170,799      | +268.4%           | 47.4%     | 60,320      | 68,995            |


### BenchERC721 - deploy

| Implementation          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC721_evm         | 1,612,063,344 | -       | 1,485,600        | +3484.6%          | 0.1%      | 10,676      | 19,351            |
| bench_erc721_dsl_rust   | 1,697,904,428 | +5.3%   | 41,444           | -                 | 0.0%      | 20,252      | 28,927            |
| bench_erc721_macro_rust | 1,771,247,624 | +9.9%   | 21,937,670       | +52833.3%         | 1.2%      | 25,898      | 34,573            |
| BenchERC721_pvm         | 1,816,445,314 | +12.7%  | 8,753,785        | +21022.0%         | 0.5%      | 32,303      | 40,978            |
| bench_erc721_stylus     | 1,938,598,931 | +20.3%  | 11,382,407       | +27364.5%         | 0.6%      | 45,416      | 54,091            |
| bench_erc721_ink        | 2,172,974,846 | +34.8%  | 179,884,217      | +433941.6%        | 8.3%      | 62,900      | 71,575            |


### BenchERC721 - mint

| Implementation          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchERC721_evm         | 1,144,907,740 | -       | 229,494,470      | -                 | 20.0%     | 29,798      | 38,473            |
| BenchERC721_pvm         | 1,216,241,600 | +6.2%   | 300,828,330      | +31.1%            | 24.7%     | 37,032      | 45,707            |
| bench_erc721_macro_rust | 1,247,005,840 | +8.9%   | 331,592,570      | +44.5%            | 26.6%     | 34,897      | 43,572            |
| bench_erc721_dsl_rust   | 1,282,611,356 | +12.0%  | 367,198,086      | +60.0%            | 28.6%     | 33,016      | 41,691            |
| bench_erc721_stylus     | 1,441,734,296 | +25.9%  | 526,321,026      | +129.3%           | 36.5%     | 41,403      | 50,078            |
| bench_erc721_ink        | 1,541,708,779 | +34.7%  | 626,295,509      | +172.9%           | 40.6%     | 55,888      | 64,563            |


### BenchStorage - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchStorage_evm         | 1,595,512,344 | -       | 1,341,600        | +3137.1%          | 0.1%      | 8,876       | 17,551            |
| bench_storage_dsl_rust   | 1,629,733,343 | +2.1%   | 41,444           | -                 | 0.0%      | 12,773      | 21,448            |
| bench_storage_macro_rust | 1,656,628,429 | +3.8%   | 6,810,610        | +16333.3%         | 0.4%      | 14,981      | 23,656            |
| BenchStorage_pvm         | 1,669,903,121 | +4.7%   | 8,463,677        | +20322.0%         | 0.5%      | 16,256      | 24,931            |
| bench_storage_stylus     | 1,870,430,503 | +17.2%  | 6,326,239        | +15164.5%         | 0.3%      | 38,492      | 47,167            |
| bench_storage_ink        | 1,876,024,466 | +17.6%  | 179,884,217      | +433941.6%        | 9.6%      | 30,320      | 38,995            |


### BenchStorage - read_100

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| BenchStorage_evm         | 1,014,390,190 | -       | 98,613,095       | -                 | 9.7%      | 8,783       | 17,458            |
| bench_storage_dsl_rust   | 1,877,003,547 | +85.0%  | 961,226,452      | +874.7%           | 51.2%     | 20,365      | 29,040            |
| BenchStorage_pvm         | 1,941,410,612 | +91.4%  | 1,025,633,517    | +940.1%           | 52.8%     | 11,269      | 19,944            |
| bench_storage_ink        | 3,695,162,376 | +264.3% | 2,779,385,281    | +2718.5%          | 75.2%     | 33,052      | 41,727            |
| bench_storage_macro_rust | 4,476,998,113 | +341.3% | 3,561,221,018    | +3511.3%          | 79.5%     | 21,101      | 29,776            |
| bench_storage_stylus     | 7,657,299,251 | +654.9% | 6,741,522,156    | +6736.3%          | 88.0%     | 28,937      | 37,612            |


### CoinTool_App - deploy

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| CoinTool_App_evm | 1,749,080,438 | -       | 80,739,029       | -                 | 4.6%      | 27,272      | 35,947            |
| CoinTool_App_pvm | 2,566,828,736 | +46.8%  | 206,440,067      | +155.7%           | 8.0%      | 103,196     | 111,871           |


### CoinTool_App - t

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| CoinTool_App_evm | 6,878,237,539 | -       | 5,958,899,369    | -                 | 86.6%     | 241,610     | 250,285           |
| CoinTool_App_pvm | 7,787,540,650 | +13.2%  | 6,868,202,480    | +15.3%            | 88.2%     | 531,717     | 540,392           |


### Computation - deploy

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Computation_evm        | 1,590,271,194 | -       | 1,296,000        | +3027.1%          | 0.1%      | 8,306       | 16,981            |
| computation_macro_rust | 1,607,573,303 | +1.1%   | 1,671,554        | +3933.3%          | 0.1%      | 10,163      | 18,838            |
| computation_dsl_rust   | 1,622,979,128 | +2.1%   | 41,444           | -                 | 0.0%      | 12,032      | 20,707            |
| computation_stylus     | 1,654,588,805 | +4.0%   | 6,657,791        | +15964.5%         | 0.4%      | 14,774      | 23,449            |
| Computation_pvm        | 1,660,143,515 | +4.4%   | 8,712,341        | +20922.0%         | 0.5%      | 15,158      | 23,833            |
| computation_ink        | 1,825,976,292 | +14.8%  | 179,221,113      | +432341.6%        | 9.8%      | 24,902      | 33,577            |


### Computation - odd_product_10

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Computation_evm        | 931,222,485   | -       | 15,809,215       | -                 | 1.7%      | 8,494       | 17,169            |
| computation_macro_rust | 931,945,615   | +0.1%   | 16,532,345       | +4.6%             | 1.8%      | 9,139       | 17,814            |
| computation_stylus     | 955,475,472   | +2.6%   | 40,073,227       | +153.5%           | 4.2%      | 10,673      | 19,348            |
| Computation_pvm        | 974,299,265   | +4.6%   | 58,885,995       | +272.5%           | 6.0%      | 10,804      | 19,479            |
| computation_dsl_rust   | 979,269,983   | +5.2%   | 63,856,713       | +303.9%           | 6.5%      | 9,762       | 18,437            |
| computation_ink        | 1,026,278,642 | +10.2%  | 110,865,372      | +601.3%           | 10.8%     | 20,890      | 29,565            |


### Computation - triangle_10

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Computation_evm        | 928,108,465   | -       | 12,695,195       | -                 | 1.4%      | 8,494       | 17,169            |
| computation_macro_rust | 931,033,847   | +0.3%   | 15,620,577       | +23.0%            | 1.7%      | 9,139       | 17,814            |
| computation_stylus     | 954,243,177   | +2.8%   | 38,829,907       | +205.9%           | 4.1%      | 10,676      | 19,351            |
| Computation_pvm        | 968,414,217   | +4.3%   | 53,000,947       | +317.5%           | 5.5%      | 10,804      | 19,479            |
| computation_dsl_rust   | 978,731,211   | +5.5%   | 63,317,941       | +398.8%           | 6.5%      | 9,762       | 18,437            |
| computation_ink        | 1,024,910,990 | +10.4%  | 109,497,720      | +762.5%           | 10.7%     | 20,890      | 29,565            |


### DocumentAccessManagement - configurePublicAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 1,312,009,444 | -       | 395,879,549      | -                 | 30.2%     | 58,942      | 67,617            |
| DocumentAccessManagement_pvm | 1,541,101,025 | +17.5%  | 624,971,130      | +57.9%            | 40.6%     | 140,451     | 149,126           |


### DocumentAccessManagement - createDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 2,154,411,414 | -       | 1,235,789,869    | -                 | 57.4%     | 131,323     | 139,998           |
| DocumentAccessManagement_pvm | 2,720,309,388 | +26.3%  | 1,801,687,843    | +45.8%            | 66.2%     | 212,832     | 221,507           |


### DocumentAccessManagement - createDocument2

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 2,154,460,662 | -       | 1,235,839,117    | -                 | 57.4%     | 131,355     | 140,030           |
| DocumentAccessManagement_pvm | 2,720,358,636 | +26.3%  | 1,801,737,091    | +45.8%            | 66.2%     | 212,864     | 221,539           |


### DocumentAccessManagement - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 1,842,105,684 | -       | 3,486,960        | -                 | 0.2%      | 35,696      | 44,371            |
| DocumentAccessManagement_pvm | 4,075,547,194 | +121.2% | 8,753,785        | +151.0%           | 0.2%      | 280,151     | 288,826           |


### DocumentAccessManagement - grantAccessWithShare

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 2,425,032,107 | -       | 1,506,763,362    | -                 | 62.1%     | 151,901     | 160,576           |
| DocumentAccessManagement_pvm | 2,916,906,207 | +20.3%  | 1,998,637,462    | +32.6%            | 68.5%     | 233,410     | 242,085           |


### DocumentAccessManagement - registerKeys

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 1,420,843,733 | -       | 504,713,838      | -                 | 35.5%     | 48,589      | 57,264            |
| DocumentAccessManagement_pvm | 1,682,013,327 | +18.4%  | 765,883,432      | +51.7%            | 45.5%     | 130,098     | 138,773           |


### DocumentAccessManagement - revokeAccess

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 2,540,035,628 | -       | 1,623,905,733    | -                 | 63.9%     | 141,254     | 149,929           |
| DocumentAccessManagement_pvm | 3,071,177,929 | +20.9%  | 2,155,048,034    | +32.7%            | 70.2%     | 222,763     | 231,438           |


### DocumentAccessManagement - transferOwnership

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 1,911,837,862 | -       | 995,707,967      | -                 | 52.1%     | 100,002     | 108,677           |
| DocumentAccessManagement_pvm | 2,390,084,286 | +25.0%  | 1,473,954,391    | +48.0%            | 61.7%     | 181,511     | 190,186           |


### DocumentAccessManagement - updateDocument

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DocumentAccessManagement_evm | 1,612,138,847 | -       | 693,517,302      | -                 | 43.0%     | 80,230      | 88,905            |
| DocumentAccessManagement_pvm | 1,928,395,104 | +19.6%  | 1,009,773,559    | +45.6%            | 52.4%     | 161,739     | 170,414           |


### DotNS - createSubdomain

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 2,752,896,370 | -       | 1,834,980,425    | -                 | 66.7%     | 73,340      | 82,015            |
| DotNS_evm      | 3,172,532,808 | +15.2%  | 2,254,616,863    | +22.9%            | 71.1%     | 170,995     | 179,670           |
| DotNS_pvm      | 9,335,250,859 | +239.1% | 8,417,334,914    | +358.7%           | 90.2%     | 238,936     | 247,611           |


### DotNS - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 1,806,465,864 | -       | 3,176,880        | +158.9%           | 0.2%      | 31,820      | 40,495            |
| dotns_rust     | 2,211,436,968 | +22.4%  | 1,227,039        | -                 | 0.1%      | 76,463      | 85,138            |
| DotNS_pvm      | 3,669,200,494 | +103.1% | 8,753,785        | +613.4%           | 0.2%      | 235,571     | 244,246           |


### DotNS - register

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 2,261,751,726 | -       | 1,345,269,031    | -                 | 59.5%     | 62,300      | 70,975            |
| DotNS_evm      | 2,645,387,753 | +17.0%  | 1,728,905,058    | +28.5%            | 65.4%     | 139,706     | 148,381           |
| DotNS_pvm      | 5,321,613,263 | +135.3% | 4,405,130,568    | +227.5%           | 82.8%     | 207,647     | 216,322           |


### DotNS - register_with_duration

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 2,260,439,273 | -       | 1,343,956,578    | -                 | 59.5%     | 62,340      | 71,015            |
| DotNS_evm      | 2,639,089,684 | +16.8%  | 1,722,606,989    | +28.2%            | 65.3%     | 139,738     | 148,413           |
| DotNS_pvm      | 5,212,405,266 | +130.6% | 4,295,922,571    | +219.6%           | 82.4%     | 207,679     | 216,354           |


### DotNS - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 1,638,842,530 | -       | 722,712,635      | -                 | 44.1%     | 42,043      | 50,718            |
| DotNS_evm      | 2,627,631,532 | +60.3%  | 1,711,501,637    | +136.8%           | 65.1%     | 139,962     | 148,637           |
| DotNS_pvm      | 4,661,105,578 | +184.4% | 3,744,975,683    | +418.2%           | 80.3%     | 207,903     | 216,578           |


### DotNS - renew

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 1,317,290,327 | -       | 400,807,632      | -                 | 30.4%     | 37,200      | 45,875            |
| dotns_rust     | 1,695,139,867 | +28.7%  | 778,668,197      | +94.3%            | 45.9%     | 42,136      | 50,811            |
| DotNS_pvm      | 2,988,236,162 | +126.8% | 2,071,753,467    | +416.9%           | 69.3%     | 105,141     | 113,816           |


### DotNS - setAddress

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 1,455,047,496 | -       | 538,564,801      | -                 | 37.0%     | 57,778      | 66,453            |
| dotns_rust     | 1,747,880,479 | +20.1%  | 831,397,784      | +54.4%            | 47.6%     | 42,139      | 50,814            |
| DotNS_pvm      | 3,056,662,607 | +110.1% | 2,140,179,912    | +297.4%           | 70.0%     | 125,719     | 134,394           |


### DotNS - setMetadata

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 1,539,826,707 | -       | 623,344,012      | -                 | 40.5%     | 57,746      | 66,421            |
| dotns_rust     | 1,707,261,516 | +10.9%  | 790,778,821      | +26.9%            | 46.3%     | 42,139      | 50,814            |
| DotNS_pvm      | 3,131,689,874 | +103.4% | 2,215,207,179    | +255.4%           | 70.7%     | 125,687     | 134,362           |


### DotNS - setSubdomainOwner

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| DotNS_evm      | 2,870,083,735 | -       | 1,952,531,615    | -                 | 68.0%     | 150,574     | 159,249           |
| dotns_rust     | 2,871,789,283 | +0.1%   | 1,954,237,163    | +0.1%             | 68.0%     | 73,594      | 82,269            |
| DotNS_pvm      | 7,125,359,147 | +148.3% | 6,207,807,027    | +217.9%           | 87.1%     | 218,515     | 227,190           |


### DotNS - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| dotns_rust     | 2,335,327,947 | -       | 1,418,845,252    | -                 | 60.8%     | 62,653      | 71,328            |
| DotNS_evm      | 2,459,453,052 | +5.3%   | 1,542,970,357    | +8.7%             | 62.7%     | 129,673     | 138,348           |
| DotNS_pvm      | 4,323,024,607 | +85.1%  | 3,406,541,912    | +140.1%           | 78.8%     | 197,614     | 206,289           |


### Escrow - create_simple

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Escrow_evm     | 2,047,436,353 | -       | 1,130,876,483    | -                 | 55.2%     | 125,538     | 134,213           |
| Escrow_pvm     | 2,414,016,743 | +17.9%  | 1,497,456,873    | +32.4%            | 62.0%     | 155,507     | 164,182           |
| escrow_rust    | 2,824,448,651 | +38.0%  | 1,907,888,781    | +68.7%            | 67.5%     | 83,006      | 91,681            |


### Escrow - create_with_arbiter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Escrow_evm     | 2,047,645,313 | -       | 1,131,085,443    | -                 | 55.2%     | 125,666     | 134,341           |
| Escrow_pvm     | 2,411,743,320 | +17.8%  | 1,495,183,450    | +32.2%            | 62.0%     | 155,635     | 164,310           |
| escrow_rust    | 2,824,462,539 | +37.9%  | 1,907,902,669    | +68.7%            | 67.5%     | 83,038      | 91,713            |


### Escrow - create_with_expiry

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Escrow_evm     | 2,047,670,145 | -       | 1,131,110,275    | -                 | 55.2%     | 125,666     | 134,341           |
| Escrow_pvm     | 2,409,985,673 | +17.7%  | 1,493,425,803    | +32.0%            | 62.0%     | 155,635     | 164,310           |
| escrow_rust    | 2,824,462,539 | +37.9%  | 1,907,902,669    | +68.7%            | 67.5%     | 83,038      | 91,713            |


### Escrow - create_with_releaseTime

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Escrow_evm     | 2,047,706,945 | -       | 1,131,147,075    | -                 | 55.2%     | 125,666     | 134,341           |
| Escrow_pvm     | 2,408,037,418 | +17.6%  | 1,491,477,548    | +31.9%            | 61.9%     | 155,635     | 164,310           |
| escrow_rust    | 2,824,462,539 | +37.9%  | 1,907,902,669    | +68.7%            | 67.5%     | 83,038      | 91,713            |


### Escrow - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Escrow_evm     | 1,946,955,440 | -       | 251,471,471      | +9.8%             | 12.9%     | 40,505      | 49,180            |
| escrow_rust    | 2,163,279,031 | +11.1%  | 229,089,532      | -                 | 10.6%     | 56,438      | 65,113            |
| Escrow_pvm     | 2,777,986,961 | +42.7%  | 264,302,222      | +15.4%            | 9.5%      | 130,271     | 138,946           |


### Escrow - refund

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Escrow_evm     | 1,850,842,746 | -       | 935,429,476      | -                 | 50.5%     | 78,738      | 87,413            |
| Escrow_pvm     | 1,955,829,704 | +5.7%   | 1,040,416,434    | +11.2%            | 53.2%     | 108,707     | 117,382           |
| escrow_rust    | 2,105,539,885 | +13.8%  | 1,190,126,615    | +27.2%            | 56.5%     | 46,477      | 55,152            |


### Escrow - release

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Escrow_evm     | 1,912,487,603 | -       | 997,074,333      | -                 | 52.1%     | 89,027      | 97,702            |
| Escrow_pvm     | 2,020,408,245 | +5.6%   | 1,104,994,975    | +10.8%            | 54.7%     | 118,996     | 127,671           |
| escrow_rust    | 2,101,311,058 | +9.9%   | 1,185,897,788    | +18.9%            | 56.4%     | 46,476      | 55,151            |


### FiatTokenProxy - approve

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,501,777,081 | -       | 585,999,986      | -                 | 39.0%     | 70,375      | 79,050            |
| FiatTokenProxy_pvm | 1,724,108,728 | +14.8%  | 808,331,633      | +37.9%            | 46.9%     | 161,992     | 170,667           |


### FiatTokenProxy - changeAdmin

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,030,510,232 | -       | 115,107,987      | -                 | 11.2%     | 19,816      | 28,491            |
| FiatTokenProxy_pvm | 1,076,959,741 | +4.5%   | 161,546,471      | +40.3%            | 15.0%     | 27,936      | 36,611            |


### FiatTokenProxy - configureMinter

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,661,189,113 | -       | 745,412,018      | -                 | 44.9%     | 90,921      | 99,596            |
| FiatTokenProxy_pvm | 1,881,462,010 | +13.3%  | 965,684,915      | +29.6%            | 51.3%     | 182,538     | 191,213           |


### FiatTokenProxy - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 2,031,056,278 | -       | 405,329,404      | -                 | 20.0%     | 36,513      | 45,188            |
| FiatTokenProxy_pvm | 2,272,532,085 | +11.9%  | 433,587,251      | +7.0%             | 19.1%     | 59,961      | 68,636            |


### FiatTokenProxy - initialize

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,914,382,739 | -       | 994,349,994      | -                 | 51.9%     | 133,043     | 141,718           |
| FiatTokenProxy_pvm | 2,298,475,704 | +20.1%  | 1,378,442,959    | +38.6%            | 60.0%     | 224,660     | 233,335           |


### FiatTokenProxy - mint

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,787,609,404 | -       | 871,832,309      | -                 | 48.8%     | 101,210     | 109,885           |
| FiatTokenProxy_pvm | 2,134,664,496 | +19.4%  | 1,218,887,401    | +39.8%            | 57.1%     | 192,827     | 201,502           |


### FiatTokenProxy - transfer

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,649,343,467 | -       | 733,566,372      | -                 | 44.5%     | 80,664      | 89,339            |
| FiatTokenProxy_pvm | 1,965,062,494 | +19.1%  | 1,049,285,399    | +43.0%            | 53.4%     | 172,281     | 180,956           |


### FiatTokenProxy - transferFrom

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenProxy_evm | 1,858,384,010 | -       | 942,276,165      | -                 | 50.7%     | 91,075      | 99,750            |
| FiatTokenProxy_pvm | 2,278,107,169 | +22.6%  | 1,361,999,324    | +44.5%            | 59.8%     | 182,692     | 191,367           |


### FiatTokenV2_2 - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FiatTokenV2_2_evm | 2,335,036,893 | -       | 332,156,754      | -                 | 14.2%     | 84,488      | 93,163            |
| FiatTokenV2_2_pvm | 4,636,077,091 | +98.5%  | 351,480,757      | +5.8%             | 7.6%      | 334,817     | 343,492           |


### Fibonacci - deploy

| Implementation                      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| fibonacci_u32_rust                  | 1,586,353,148 | -       | 41,444           | -                 | 0.0%      | 8,012       | 16,687            |
| Fibonacci_evm                       | 1,587,446,979 | +0.1%   | 1,272,000        | +2969.2%          | 0.1%      | 7,997       | 16,672            |
| fibonacci_u128_rust                 | 1,588,579,118 | +0.1%   | 41,444           | -                 | 0.0%      | 8,258       | 16,933            |
| fibonacci_u32_macro_bump_alloc_rust | 1,591,751,138 | +0.3%   | 41,444           | -                 | 0.0%      | 8,606       | 17,281            |
| fibonacci_u32_macro_no_alloc_rust   | 1,593,009,008 | +0.4%   | 41,444           | -                 | 0.0%      | 8,744       | 17,419            |
| fibonacci_u32_dsl_rust              | 1,597,657,658 | +0.7%   | 41,444           | -                 | 0.0%      | 9,254       | 17,929            |
| fibonacci_u32_macro_rust            | 1,598,139,278 | +0.7%   | 1,671,554        | +3933.3%          | 0.1%      | 9,128       | 17,803            |
| fibonacci_u256_rust                 | 1,606,763,543 | +1.3%   | 41,444           | -                 | 0.0%      | 10,253      | 18,928            |
| Fibonacci_pvm                       | 1,617,945,062 | +2.0%   | 8,215,013        | +19722.0%         | 0.5%      | 10,583      | 19,258            |
| fibonacci_u32_stylus                | 1,627,648,862 | +2.6%   | 6,160,463        | +14764.5%         | 0.4%      | 11,873      | 20,548            |
| fibonacci_u32_ink                   | 1,796,499,235 | +13.2%  | 179,304,001      | +432541.6%        | 10.0%     | 21,659      | 30,334            |


### Fibonacci - fib_10

| Implementation                      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| fibonacci_u32_rust                  | 990,737,564   | -       | 75,324,294       | -                 | 7.6%      | 8,423       | 17,098            |
| fibonacci_u32_macro_bump_alloc_rust | 993,839,485   | +0.3%   | 78,426,215       | +4.1%             | 7.9%      | 8,620       | 17,295            |
| fibonacci_u32_macro_rust            | 994,333,909   | +0.4%   | 78,920,639       | +4.8%             | 7.9%      | 8,794       | 17,469            |
| fibonacci_u32_macro_no_alloc_rust   | 998,133,749   | +0.7%   | 82,720,479       | +9.8%             | 8.3%      | 8,666       | 17,341            |
| fibonacci_u32_stylus                | 999,355,459   | +0.9%   | 83,942,189       | +11.4%            | 8.4%      | 9,709       | 18,384            |
| fibonacci_u32_dsl_rust              | 1,005,930,287 | +1.5%   | 90,517,017       | +20.2%            | 9.0%      | 8,836       | 17,511            |
| Fibonacci_evm                       | 1,045,499,155 | +5.5%   | 130,085,885      | +72.7%            | 12.4%     | 8,394       | 17,069            |
| fibonacci_u128_rust                 | 1,089,825,572 | +10.0%  | 174,412,302      | +131.5%           | 16.0%     | 8,504       | 17,179            |
| fibonacci_u32_ink                   | 1,135,535,588 | +14.6%  | 220,122,318      | +192.2%           | 19.4%     | 19,809      | 28,484            |
| Fibonacci_pvm                       | 1,176,334,963 | +18.7%  | 260,921,693      | +246.4%           | 22.2%     | 9,279       | 17,954            |
| fibonacci_u256_rust                 | 3,127,727,368 | +215.7% | 2,212,314,098    | +2837.1%          | 70.7%     | 9,169       | 17,844            |


### Fibonacci_u256 - deploy

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 1,586,122,899 | -       | 1,260,480        | +2941.4%          | 0.1%      | 7,853       | 16,528            |
| Fibonacci_u256_evm                       | 1,586,233,239 | +0.0%   | 1,261,440        | +2943.7%          | 0.1%      | 7,865       | 16,540            |
| fibonacci_u256_iter_primitive_types_rust | 1,603,236,038 | +1.1%   | 41,444           | -                 | 0.0%      | 9,866       | 18,541            |
| fibonacci_u256_iter_rust                 | 1,604,302,493 | +1.1%   | 41,444           | -                 | 0.0%      | 9,983       | 18,658            |
| fibonacci_u256_primitive_types_rust      | 1,604,575,943 | +1.2%   | 41,444           | -                 | 0.0%      | 10,013      | 18,688            |
| fibonacci_u256_rust                      | 1,606,763,543 | +1.3%   | 41,444           | -                 | 0.0%      | 10,253      | 18,928            |
| Fibonacci_u256_iter_pvm                  | 1,621,144,427 | +2.2%   | 8,215,013        | +19722.0%         | 0.5%      | 10,934      | 19,609            |
| Fibonacci_u256_pvm                       | 1,622,949,197 | +2.3%   | 8,215,013        | +19722.0%         | 0.5%      | 11,132      | 19,807            |
| fibonacci_u256_iter_ink                  | 1,814,835,337 | +14.4%  | 179,428,333      | +432841.6%        | 9.9%      | 23,657      | 32,332            |
| fibonacci_u256_ink                       | 1,816,831,522 | +14.5%  | 179,428,333      | +432841.6%        | 9.9%      | 23,876      | 32,551            |


### Fibonacci_u256 - fib_10

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 921,488,133   | -       | 6,074,863        | -                 | 0.7%      | 8,346       | 17,021            |
| Fibonacci_u256_iter_pvm                  | 948,024,543   | +2.9%   | 32,611,273       | +436.8%           | 3.4%      | 9,396       | 18,071            |
| fibonacci_u256_iter_primitive_types_rust | 956,619,936   | +3.8%   | 41,206,666       | +578.3%           | 4.3%      | 9,040       | 17,715            |
| fibonacci_u256_iter_rust                 | 1,013,206,336 | +10.0%  | 97,793,066       | +1509.8%          | 9.7%      | 9,079       | 17,754            |
| Fibonacci_u256_evm                       | 1,023,537,049 | +11.1%  | 108,123,779      | +1679.9%          | 10.6%     | 8,350       | 17,025            |
| fibonacci_u256_iter_ink                  | 1,073,634,736 | +16.5%  | 158,221,466      | +2504.5%          | 14.7%     | 20,475      | 29,150            |
| Fibonacci_u256_pvm                       | 1,365,005,835 | +48.1%  | 449,592,565      | +7300.9%          | 32.9%     | 9,462       | 18,137            |
| fibonacci_u256_primitive_types_rust      | 2,165,488,428 | +135.0% | 1,250,075,158    | +20477.8%         | 57.7%     | 9,089       | 17,764            |
| fibonacci_u256_ink                       | 2,263,639,708 | +145.7% | 1,348,226,438    | +22093.5%         | 59.6%     | 20,548      | 29,223            |
| fibonacci_u256_rust                      | 3,127,727,368 | +239.4% | 2,212,314,098    | +36317.5%         | 70.7%     | 9,169       | 17,844            |


### Fibonacci_u256 - fib_15

| Implementation                           | ref_time       | vs Best  | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | -------------- | -------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 923,865,833    | -        | 8,452,563        | -                 | 0.9%      | 8,346       | 17,021            |
| Fibonacci_u256_iter_pvm                  | 961,908,283    | +4.1%    | 46,495,013       | +450.1%           | 4.8%      | 9,396       | 18,071            |
| fibonacci_u256_iter_primitive_types_rust | 972,783,096    | +5.3%    | 57,369,826       | +578.7%           | 5.9%      | 9,040       | 17,715            |
| fibonacci_u256_iter_rust                 | 1,060,866,936  | +14.8%   | 145,453,666      | +1620.8%          | 13.7%     | 9,079       | 17,754            |
| fibonacci_u256_iter_ink                  | 1,098,708,356  | +18.9%   | 183,295,086      | +2068.5%          | 16.7%     | 20,475      | 29,150            |
| Fibonacci_u256_evm                       | 2,110,636,829  | +128.5%  | 1,195,223,559    | +14040.4%         | 56.6%     | 8,350       | 17,025            |
| Fibonacci_u256_pvm                       | 5,868,227,987  | +535.2%  | 4,952,814,717    | +58495.4%         | 84.4%     | 9,462       | 18,137            |
| fibonacci_u256_primitive_types_rust      | 14,752,362,780 | +1496.8% | 13,836,949,510   | +163601.2%        | 93.8%     | 9,089       | 17,764            |
| fibonacci_u256_ink                       | 14,813,297,348 | +1503.4% | 13,897,884,078   | +164322.1%        | 93.8%     | 20,548      | 29,223            |
| fibonacci_u256_rust                      | 25,492,111,644 | +2659.3% | 24,576,698,374   | +290660.3%        | 96.4%     | 9,169       | 17,844            |


### Fibonacci_u256 - fib_5

| Implementation                           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Fibonacci_u256_iter_evm                  | 919,110,433   | -       | 3,697,163        | -                 | 0.4%      | 8,346       | 17,021            |
| Fibonacci_u256_evm                       | 925,491,439   | +0.7%   | 10,078,169       | +172.6%           | 1.1%      | 8,350       | 17,025            |
| Fibonacci_u256_iter_pvm                  | 934,140,803   | +1.6%   | 18,727,533       | +406.5%           | 2.0%      | 9,396       | 18,071            |
| fibonacci_u256_iter_primitive_types_rust | 940,456,776   | +2.3%   | 25,043,506       | +577.4%           | 2.7%      | 9,040       | 17,715            |
| Fibonacci_u256_pvm                       | 958,813,191   | +4.3%   | 43,399,921       | +1073.9%          | 4.5%      | 9,462       | 18,137            |
| fibonacci_u256_iter_rust                 | 965,545,736   | +5.1%   | 50,132,466       | +1256.0%          | 5.2%      | 9,079       | 17,754            |
| fibonacci_u256_primitive_types_rust      | 1,030,710,264 | +12.1%  | 115,296,994      | +3018.5%          | 11.2%     | 9,089       | 17,764            |
| fibonacci_u256_iter_ink                  | 1,048,561,116 | +14.1%  | 133,147,846      | +3501.4%          | 12.7%     | 20,475      | 29,150            |
| fibonacci_u256_rust                      | 1,110,523,556 | +20.8%  | 195,110,286      | +5177.3%          | 17.6%     | 9,169       | 17,844            |
| fibonacci_u256_ink                       | 1,132,218,508 | +23.2%  | 216,805,238      | +5764.1%          | 19.1%     | 20,548      | 29,223            |


### FungibleCredential - burn

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,309,800,792 | -       | 394,045,747      | -                 | 30.1%     | 46,340      | 55,015            |
| FungibleCredential_pvm   | 1,520,903,292 | +16.1%  | 605,148,247      | +53.6%            | 39.8%     | 105,124     | 113,799           |
| fungible_credential_rust | 1,673,797,001 | +27.8%  | 758,041,956      | +92.4%            | 45.3%     | 46,683      | 55,358            |


### FungibleCredential - createClass_nontransferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,663,374,272 | -       | 746,174,952      | -                 | 44.9%     | 77,440      | 86,115            |
| fungible_credential_rust | 1,736,821,277 | +4.4%   | 819,621,957      | +9.8%             | 47.2%     | 46,950      | 55,625            |
| FungibleCredential_pvm   | 1,950,903,253 | +17.3%  | 1,033,703,933    | +38.5%            | 53.0%     | 136,224     | 144,899           |


### FungibleCredential - createClass_transferable

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,663,361,984 | -       | 746,162,664      | -                 | 44.9%     | 77,440      | 86,115            |
| fungible_credential_rust | 1,728,695,474 | +3.9%   | 811,496,154      | +8.8%             | 46.9%     | 46,950      | 55,625            |
| FungibleCredential_pvm   | 1,950,928,385 | +17.3%  | 1,033,729,065    | +38.5%            | 53.0%     | 136,224     | 144,899           |


### FungibleCredential - deploy

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,858,482,958 | -       | 80,706,859       | -                 | 4.3%      | 39,278      | 47,953            |
| fungible_credential_rust | 2,294,145,184 | +23.4%  | 228,754,375      | +183.4%           | 10.0%     | 70,832      | 79,507            |
| FungibleCredential_pvm   | 3,474,713,647 | +87.0%  | 90,670,198       | +12.3%            | 2.6%      | 215,504     | 224,179           |


### FungibleCredential - issue

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,931,369,946 | -       | 1,015,240,051    | -                 | 52.6%     | 107,920     | 116,595           |
| FungibleCredential_pvm   | 2,269,341,996 | +17.5%  | 1,353,212,101    | +33.3%            | 59.6%     | 166,704     | 175,379           |
| fungible_credential_rust | 2,759,702,016 | +42.9%  | 1,843,572,121    | +81.6%            | 66.8%     | 98,054      | 106,729           |


### FungibleCredential - issue_more

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,446,145,482 | -       | 530,015,587      | -                 | 36.7%     | 67,020      | 75,695            |
| FungibleCredential_pvm   | 1,657,829,008 | +14.6%  | 741,699,113      | +39.9%            | 44.7%     | 125,804     | 134,479           |
| fungible_credential_rust | 1,840,265,179 | +27.3%  | 924,135,284      | +74.4%            | 50.2%     | 57,043      | 65,718            |


### FungibleCredential - revoke

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 1,311,077,902 | -       | 394,948,007      | -                 | 30.1%     | 46,442      | 55,117            |
| FungibleCredential_pvm   | 1,520,657,670 | +16.0%  | 604,527,775      | +53.1%            | 39.8%     | 105,226     | 113,901           |
| fungible_credential_rust | 1,701,321,276 | +29.8%  | 785,191,381      | +98.8%            | 46.2%     | 46,785      | 55,460            |


### FungibleCredential - transfer

| Implementation           | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| FungibleCredential_evm   | 2,091,358,291 | -       | 1,175,250,446    | -                 | 56.2%     | 118,267     | 126,942           |
| FungibleCredential_pvm   | 2,517,682,597 | +20.4%  | 1,601,574,752    | +36.3%            | 63.6%     | 177,051     | 185,726           |
| fungible_credential_rust | 2,907,116,938 | +39.0%  | 1,991,009,093    | +69.4%            | 68.5%     | 108,329     | 117,004           |


### KeyRegistry - deploy

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 1,699,700,889 | -       | 2,248,080        | +96.5%            | 0.1%      | 20,207      | 28,882            |
| key_registry_rust | 2,094,235,445 | +23.2%  | 1,144,151        | -                 | 0.1%      | 63,614      | 72,289            |
| KeyRegistry_pvm   | 2,673,765,754 | +57.3%  | 8,753,785        | +665.1%           | 0.3%      | 126,359     | 135,034           |


### KeyRegistry - fetchPrekeyBundle

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 1,861,863,497 | -       | 946,472,277      | -                 | 50.8%     | 115,281     | 123,956           |
| KeyRegistry_pvm   | 2,418,007,799 | +29.9%  | 1,502,616,579    | +58.8%            | 62.1%     | 150,690     | 159,365           |
| key_registry_rust | 2,418,047,917 | +29.9%  | 1,502,656,697    | +58.8%            | 62.1%     | 88,731      | 97,406            |


### KeyRegistry - registerIdentity

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| key_registry_rust | 2,091,669,087 | -       | 1,174,116,967    | -                 | 56.1%     | 68,565      | 77,240            |
| KeyRegistry_evm   | 2,149,948,744 | +2.8%   | 1,232,396,624    | +5.0%             | 57.3%     | 105,356     | 114,031           |
| KeyRegistry_pvm   | 2,498,292,931 | +19.4%  | 1,580,740,811    | +34.6%            | 63.3%     | 140,765     | 149,440           |


### KeyRegistry - updateSignedPrekey

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 1,770,569,350 | -       | 853,722,830      | -                 | 48.2%     | 74,585      | 83,260            |
| key_registry_rust | 1,775,315,904 | +0.3%   | 858,469,384      | +0.6%             | 48.4%     | 58,340      | 67,015            |
| KeyRegistry_pvm   | 1,945,407,959 | +9.9%   | 1,028,561,439    | +20.5%            | 52.9%     | 109,994     | 118,669           |


### KeyRegistry - uploadOneTimePrekeys

| Implementation    | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ----------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| KeyRegistry_evm   | 1,556,898,295 | -       | 640,051,775      | -                 | 41.1%     | 74,425      | 83,100            |
| KeyRegistry_pvm   | 1,798,757,004 | +15.5%  | 881,910,484      | +37.8%            | 49.0%     | 109,834     | 118,509           |
| key_registry_rust | 2,610,111,635 | +67.6%  | 1,693,265,115    | +164.6%           | 64.9%     | 88,947      | 97,622            |


### Log - addWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,370,767,323 | -       | 454,990,228      | -                 | 33.2%     | 55,601      | 64,276            |
| Log_pvm        | 1,557,022,601 | +13.6%  | 641,245,506      | +40.9%            | 41.2%     | 104,160     | 112,835           |
| log_rust       | 1,908,297,708 | +39.2%  | 992,520,613      | +118.1%           | 52.0%     | 65,985      | 74,660            |


### Log - append

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,573,708,166 | -       | 657,931,071      | -                 | 41.8%     | 76,147      | 84,822            |
| log_rust       | 1,739,978,726 | +10.6%  | 824,201,631      | +25.3%            | 47.4%     | 45,471      | 54,146            |
| Log_pvm        | 1,816,314,446 | +15.4%  | 900,537,351      | +36.9%            | 49.6%     | 124,706     | 133,381           |


### Log - append_2

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,573,708,166 | -       | 657,931,071      | -                 | 41.8%     | 76,147      | 84,822            |
| log_rust       | 1,739,978,726 | +10.6%  | 824,201,631      | +25.3%            | 47.4%     | 45,471      | 54,146            |
| Log_pvm        | 1,816,314,446 | +15.4%  | 900,537,351      | +36.9%            | 49.6%     | 124,706     | 133,381           |


### Log - create_nonpermissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,396,241,885 | -       | 480,828,615      | -                 | 34.4%     | 65,759      | 74,434            |
| Log_pvm        | 1,677,135,828 | +20.1%  | 761,722,558      | +58.4%            | 45.4%     | 114,318     | 122,993           |
| log_rust       | 2,131,448,088 | +52.7%  | 1,216,034,818    | +152.9%           | 57.1%     | 65,849      | 74,524            |


### Log - create_permissioned

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,396,340,381 | -       | 480,927,111      | -                 | 34.4%     | 65,823      | 74,498            |
| Log_pvm        | 1,676,902,772 | +20.1%  | 761,489,502      | +58.3%            | 45.4%     | 114,382     | 123,057           |
| log_rust       | 2,131,455,032 | +52.6%  | 1,216,041,762    | +152.9%           | 57.1%     | 65,865      | 74,540            |


### Log - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,832,608,228 | -       | 80,481,739       | -                 | 4.4%      | 36,464      | 45,139            |
| log_rust       | 2,262,478,033 | +23.5%  | 227,959,729      | +183.2%           | 10.1%     | 67,445      | 76,120            |
| Log_pvm        | 3,169,439,362 | +72.9%  | 90,670,198       | +12.7%            | 2.9%      | 182,009     | 190,684           |


### Log - removeWriter

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Log_evm        | 1,474,521,037 | -       | 558,743,942      | -                 | 37.9%     | 55,697      | 64,372            |
| log_rust       | 1,495,943,880 | +1.5%   | 580,166,785      | +3.8%             | 38.8%     | 45,472      | 54,147            |
| Log_pvm        | 1,728,321,412 | +17.2%  | 812,544,317      | +45.4%            | 47.0%     | 104,256     | 112,931           |


### Log - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| log_rust       | 1,417,127,885 | -       | 501,350,790      | -                 | 35.4%     | 35,214      | 43,889            |
| Log_evm        | 1,537,139,930 | +8.5%   | 621,362,835      | +23.9%            | 40.4%     | 65,922      | 74,597            |
| Log_pvm        | 1,773,951,532 | +25.2%  | 858,174,437      | +71.2%            | 48.4%     | 114,481     | 123,156           |


### Marketplace - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Marketplace_pvm | 8,690,115,757 | -       | 120,011,023      | -                 | 1.4%      | 784,463     | 793,138           |


### MarketplaceProxy - createItem_digital

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 6,272,363,918 | -       | 5,353,036,773    | -                 | 85.3%     | 812,548     | 821,223           |
| MarketplaceProxy_pvm | 6,399,093,516 | +2.0%   | 5,479,766,371    | +2.4%             | 85.6%     | 840,782     | 849,457           |


### MarketplaceProxy - createItem_physical

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 6,157,994,831 | -       | 5,238,667,686    | -                 | 85.1%     | 812,580     | 821,255           |
| MarketplaceProxy_pvm | 6,284,724,429 | +2.1%   | 5,365,397,284    | +2.4%             | 85.4%     | 840,814     | 849,489           |


### MarketplaceProxy - deactivateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 1,692,831,316 | -       | 777,418,046      | -                 | 45.9%     | 299,691     | 308,366           |
| MarketplaceProxy_pvm | 1,755,797,159 | +3.7%   | 840,383,889      | +8.1%             | 47.9%     | 313,808     | 322,483           |


### MarketplaceProxy - deploy

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 4,915,708,510 | -       | 3,255,816,706    | +3.6%             | 66.2%     | 412,546     | 421,221           |
| MarketplaceProxy_pvm | 5,035,568,642 | +2.4%   | 3,141,615,818    | -                 | 62.4%     | 445,236     | 453,911           |


### MarketplaceProxy - markAsShipped

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 3,043,515,776 | -       | 2,127,033,081    | -                 | 69.9%     | 423,322     | 431,997           |
| MarketplaceProxy_pvm | 3,106,555,867 | +2.1%   | 2,190,073,172    | +3.0%             | 70.5%     | 437,439     | 446,114           |


### MarketplaceProxy - purchaseItem_digital

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 7,946,787,209 | -       | 7,029,521,739    | -                 | 88.5%     | 705,175     | 713,850           |
| MarketplaceProxy_pvm | 8,010,194,892 | +0.8%   | 7,092,929,422    | +0.9%             | 88.5%     | 719,292     | 727,967           |


### MarketplaceProxy - purchaseItem_physical

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 8,047,902,397 | -       | 7,129,214,702    | -                 | 88.6%     | 731,632     | 740,307           |
| MarketplaceProxy_pvm | 8,111,298,560 | +0.8%   | 7,192,610,865    | +0.9%             | 88.7%     | 745,749     | 754,424           |


### MarketplaceProxy - purchaseItem_with_matchmaker

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 9,019,513,065 | -       | 8,102,247,595    | -                 | 89.8%     | 787,423     | 796,098           |
| MarketplaceProxy_pvm | 9,082,920,748 | +0.7%   | 8,165,655,278    | +0.8%             | 89.9%     | 801,540     | 810,215           |


### MarketplaceProxy - registerMatchMaker

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 2,902,502,059 | -       | 1,986,019,364    | -                 | 68.4%     | 371,749     | 380,424           |
| MarketplaceProxy_pvm | 2,965,915,502 | +2.2%   | 2,049,432,807    | +3.2%             | 69.1%     | 385,866     | 394,541           |


### MarketplaceProxy - registerShop

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 2,967,539,725 | -       | 2,048,565,380    | -                 | 69.0%     | 372,395     | 381,070           |
| MarketplaceProxy_pvm | 3,030,559,656 | +2.1%   | 2,111,585,311    | +3.1%             | 69.7%     | 386,512     | 395,187           |


### MarketplaceProxy - updateItem

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 3,526,718,574 | -       | 2,607,744,229    | -                 | 73.9%     | 393,165     | 401,840           |
| MarketplaceProxy_pvm | 3,589,738,505 | +1.8%   | 2,670,764,160    | +2.4%             | 74.4%     | 407,282     | 415,957           |


### MarketplaceProxy - updateMatchMakerFee

| Implementation       | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MarketplaceProxy_evm | 1,831,768,766 | -       | 916,377,546      | -                 | 50.0%     | 309,974     | 318,649           |
| MarketplaceProxy_pvm | 1,894,734,609 | +3.4%   | 979,343,389      | +6.9%             | 51.7%     | 324,091     | 332,766           |


### MixedERC20 - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20_evm | 1,831,776,467 | -       | 168,887,738      | -                 | 9.2%      | 36,929      | 45,604            |
| MixedERC20_pvm | 2,605,653,164 | +42.2%  | 338,194,985      | +100.2%           | 13.0%     | 103,583     | 112,258           |


### MixedERC20 - mint

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20_evm | 1,108,934,090 | -       | 193,156,995      | -                 | 17.4%     | 30,742      | 39,417            |
| MixedERC20_pvm | 1,206,466,233 | +8.8%   | 290,689,138      | +50.5%            | 24.1%     | 53,861      | 62,536            |


### MixedERC20 - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20_evm | 1,143,150,670 | -       | 227,373,575      | -                 | 19.9%     | 30,774      | 39,449            |
| MixedERC20_pvm | 1,263,510,627 | +10.5%  | 347,733,532      | +52.9%            | 27.5%     | 53,893      | 62,568            |


### MixedERC20Factory - deploy

| Implementation        | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedERC20Factory_evm | 1,670,874,564 | -       | 1,997,280        | -                 | 0.1%      | 17,072      | 25,747            |
| MixedERC20Factory_pvm | 1,687,175,327 | +1.0%   | 8,836,673        | +342.4%           | 0.5%      | 18,110      | 26,785            |
| MixedERC20Factory_pvm | 2,001,224,239 | +19.8%  | 1,086,163,769    | +54282.1%         | 54.3%     | 71,714      | 80,389            |
| MixedERC20Factory_evm | 2,182,214,795 | +30.6%  | 1,267,154,325    | +63344.0%         | 58.1%     | 48,301      | 56,976            |


### MixedFactory - deploy

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedFactory_evm | 1,603,484,409 | -       | 1,410,960        | -                 | 0.1%      | 9,743       | 18,418            |
| MixedFactory_pvm | 1,739,961,349 | +8.5%   | 8,753,785        | +520.4%           | 0.5%      | 23,912      | 32,587            |


### MixedFactory - deployCreate

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedFactory_pvm | 1,752,264,044 | -       | 837,203,574      | -                 | 47.8%     | 29,998      | 38,673            |
| MixedFactory_evm | 1,979,166,140 | +12.9%  | 1,064,105,670    | +27.1%            | 53.8%     | 25,344      | 34,019            |


### MixedFactory - deployCreate2

| Implementation   | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedFactory_pvm | 1,753,142,172 | -       | 838,081,702      | -                 | 47.8%     | 30,030      | 38,705            |
| MixedFactory_evm | 1,979,322,768 | +12.9%  | 1,064,262,298    | +27.0%            | 53.8%     | 25,376      | 34,051            |


### MixedPool - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedPool_evm  | 1,795,565,017 | -       | 160,130,668      | -                 | 8.9%      | 33,917      | 42,592            |
| MixedPool_pvm  | 2,286,028,193 | +27.3%  | 198,136,509      | +23.7%            | 8.7%      | 83,666      | 92,341            |


### MixedSwapRouter - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapRouter_evm | 2,153,146,798 | -       | 542,651,089      | -                 | 25.2%     | 47,960      | 56,635            |
| MixedSwapRouter_pvm | 2,456,157,392 | +14.1%  | 652,460,263      | +20.2%            | 26.6%     | 85,971      | 94,646            |


### MixedSwapRouter - swap

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapRouter_evm | 4,176,113,391 | -       | 3,260,336,296    | -                 | 78.1%     | 184,919     | 193,594           |
| MixedSwapRouter_pvm | 5,278,978,837 | +26.4%  | 4,363,201,742    | +33.8%            | 82.7%     | 308,938     | 317,613           |


### MixedSwapToken0 - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapToken0_evm | 1,831,776,467 | -       | 168,887,738      | -                 | 9.2%      | 36,929      | 45,604            |
| MixedSwapToken0_pvm | 2,603,539,520 | +42.1%  | 336,081,341      | +99.0%            | 12.9%     | 103,583     | 112,258           |


### MixedSwapToken1 - deploy

| Implementation      | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MixedSwapToken1_evm | 1,831,776,467 | -       | 168,887,738      | -                 | 9.2%      | 36,929      | 45,604            |
| MixedSwapToken1_pvm | 2,603,539,520 | +42.1%  | 336,081,341      | +99.0%            | 12.9%     | 103,583     | 112,258           |


### MockMobRule - addCounterEvidence

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MockMobRule_evm | 1,204,096,029 | -       | 287,613,334      | -                 | 23.9%     | 44,823      | 53,498            |
| MockMobRule_pvm | 1,403,896,748 | +16.6%  | 487,414,053      | +69.5%            | 34.7%     | 87,423      | 96,098            |


### MockMobRule - createDispute

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MockMobRule_evm | 2,181,838,485 | -       | 1,264,286,365    | -                 | 57.9%     | 127,170     | 135,845           |
| MockMobRule_pvm | 2,620,188,124 | +20.1%  | 1,702,636,004    | +34.7%            | 65.0%     | 169,770     | 178,445           |


### MockMobRule - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MockMobRule_evm | 2,004,158,862 | -       | 261,357,018      | -                 | 13.0%     | 45,698      | 54,373            |
| MockMobRule_pvm | 3,319,411,804 | +65.6%  | 422,326,880      | +61.6%            | 12.7%     | 172,442     | 181,117           |


### MockMobRule - resolveCase

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| MockMobRule_evm | 1,178,167,169 | -       | 262,390,074      | -                 | 22.3%     | 44,663      | 53,338            |
| MockMobRule_pvm | 1,278,662,608 | +8.5%   | 362,885,513      | +38.3%            | 28.4%     | 87,263      | 95,938            |


### NonFungibleCredential - deploy

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 1,843,283,623 | -       | 80,574,619       | -                 | 4.4%      | 37,625      | 46,300            |
| non_fungible_credential_rust | 2,331,143,887 | +26.5%  | 228,208,393      | +183.2%           | 9.8%      | 74,951      | 83,626            |
| NonFungibleCredential_pvm    | 3,483,053,872 | +89.0%  | 90,670,198       | +12.5%            | 2.6%      | 216,419     | 225,094           |


### NonFungibleCredential - issue_nontransferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 2,649,668,101 | -       | 1,732,115,981    | -                 | 65.4%     | 159,169     | 167,844           |
| non_fungible_credential_rust | 3,094,969,836 | +16.8%  | 2,177,417,716    | +25.7%            | 70.4%     | 109,977     | 118,652           |
| NonFungibleCredential_pvm    | 3,299,846,835 | +24.5%  | 2,382,294,715    | +37.5%            | 72.2%     | 218,809     | 227,484           |


### NonFungibleCredential - issue_transferable

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 2,649,450,516 | -       | 1,731,898,396    | -                 | 65.4%     | 159,041     | 167,716           |
| non_fungible_credential_rust | 3,086,742,905 | +16.5%  | 2,169,190,785    | +25.2%            | 70.3%     | 109,961     | 118,636           |
| NonFungibleCredential_pvm    | 3,298,524,415 | +24.5%  | 2,380,972,295    | +37.5%            | 72.2%     | 218,681     | 227,356           |


### NonFungibleCredential - issue_with_expiry

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 2,649,811,220 | -       | 1,732,259,100    | -                 | 65.4%     | 159,233     | 167,908           |
| non_fungible_credential_rust | 3,103,526,409 | +17.1%  | 2,185,974,289    | +26.2%            | 70.4%     | 109,985     | 118,660           |
| NonFungibleCredential_pvm    | 3,294,129,749 | +24.3%  | 2,376,577,629    | +37.2%            | 72.1%     | 218,873     | 227,548           |


### NonFungibleCredential - revoke

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 1,101,629,593 | -       | 186,216,323      | -                 | 16.9%     | 35,407      | 44,082            |
| NonFungibleCredential_pvm    | 1,220,043,814 | +10.7%  | 304,630,544      | +63.6%            | 25.0%     | 95,047      | 103,722           |
| non_fungible_credential_rust | 1,417,273,111 | +28.7%  | 501,859,841      | +169.5%           | 35.4%     | 37,695      | 46,370            |


### NonFungibleCredential - transfer

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| non_fungible_credential_rust | 2,366,729,332 | -       | 1,450,974,287    | -                 | 61.3%     | 78,816      | 87,491            |
| NonFungibleCredential_evm    | 3,452,576,434 | +45.9%  | 2,536,821,389    | +74.8%            | 73.5%     | 199,868     | 208,543           |
| NonFungibleCredential_pvm    | 4,272,180,459 | +80.5%  | 3,356,425,414    | +131.3%           | 78.6%     | 259,508     | 268,183           |


### NonFungibleCredential - updateMetadata

| Implementation               | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| NonFungibleCredential_evm    | 1,203,480,655 | -       | 287,703,560      | -                 | 23.9%     | 35,506      | 44,181            |
| NonFungibleCredential_pvm    | 1,331,736,842 | +10.7%  | 415,959,747      | +44.6%            | 31.2%     | 95,146      | 103,821           |
| non_fungible_credential_rust | 1,448,442,670 | +20.4%  | 532,665,575      | +85.1%            | 36.8%     | 37,794      | 46,469            |


### SimpleToken - deploy

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| SimpleToken_evm                         | 1,596,450,234 | -       | 1,349,760        | +3156.8%          | 0.1%      | 8,978       | 17,653            |
| simple_token_u32_no_alloc_rust          | 1,640,425,238 | +2.8%   | 41,444           | -                 | 0.0%      | 13,946      | 22,621            |
| simple_token_u128_no_alloc_rust         | 1,660,359,743 | +4.0%   | 41,444           | -                 | 0.0%      | 16,133      | 24,808            |
| simple_token_u256_no_alloc_rust         | 1,661,918,408 | +4.1%   | 41,444           | -                 | 0.0%      | 16,304      | 24,979            |
| simple_token_u256_dsl_rust              | 1,673,075,168 | +4.8%   | 41,444           | -                 | 0.0%      | 17,528      | 26,203            |
| simple_token_u256_macro_no_alloc_rust   | 1,682,919,368 | +5.4%   | 41,444           | -                 | 0.0%      | 18,608      | 27,283            |
| simple_token_u256_macro_bump_alloc_rust | 1,701,103,793 | +6.6%   | 41,444           | -                 | 0.0%      | 20,603      | 29,278            |
| simple_token_u256_macro_rust            | 1,715,807,882 | +7.5%   | 20,570,018       | +49533.3%         | 1.2%      | 19,964      | 28,639            |
| SimpleToken_pvm                         | 1,735,051,642 | +8.7%   | 8,629,453        | +20722.0%         | 0.5%      | 23,387      | 32,062            |
| simple_token_u256_stylus                | 1,919,891,539 | +20.3%  | 11,050,855       | +26564.5%         | 0.6%      | 43,400      | 52,075            |
| simple_token_u256_ink                   | 2,096,733,861 | +31.3%  | 207,581,577      | +500772.4%        | 9.9%      | 51,497      | 60,172            |


### SimpleToken - mint

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| SimpleToken_evm                         | 1,105,037,501 | -       | 189,260,406      | -                 | 17.1%     | 29,331      | 38,006            |
| SimpleToken_pvm                         | 1,159,523,383 | +4.9%   | 243,746,288      | +28.8%            | 21.0%     | 34,159      | 42,834            |
| simple_token_u32_no_alloc_rust          | 1,178,578,134 | +6.7%   | 262,801,039      | +38.9%            | 22.3%     | 31,013      | 39,688            |
| simple_token_u128_no_alloc_rust         | 1,179,565,646 | +6.7%   | 263,788,551      | +39.4%            | 22.4%     | 31,742      | 40,417            |
| simple_token_u256_no_alloc_rust         | 1,213,686,130 | +9.8%   | 297,909,035      | +57.4%            | 24.5%     | 31,799      | 40,474            |
| simple_token_u256_macro_no_alloc_rust   | 1,215,011,558 | +10.0%  | 299,234,463      | +58.1%            | 24.6%     | 32,567      | 41,242            |
| simple_token_u256_macro_bump_alloc_rust | 1,215,855,466 | +10.0%  | 300,078,371      | +58.6%            | 24.7%     | 33,232      | 41,907            |
| simple_token_u256_macro_rust            | 1,240,961,725 | +12.3%  | 325,184,630      | +71.8%            | 26.2%     | 33,019      | 41,694            |
| simple_token_u256_dsl_rust              | 1,260,584,341 | +14.1%  | 344,807,246      | +82.2%            | 27.4%     | 32,207      | 40,882            |
| simple_token_u256_stylus                | 1,327,155,703 | +20.1%  | 411,378,608      | +117.4%           | 31.0%     | 40,830      | 49,505            |
| simple_token_u256_ink                   | 1,430,084,759 | +29.4%  | 514,307,664      | +171.7%           | 36.0%     | 40,142      | 48,817            |


### SimpleToken - transfer

| Implementation                          | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------------------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| SimpleToken_evm                         | 1,138,636,183 | -       | 222,859,088      | -                 | 19.6%     | 29,363      | 38,038            |
| SimpleToken_pvm                         | 1,215,804,824 | +6.8%   | 300,027,729      | +34.6%            | 24.7%     | 34,191      | 42,866            |
| simple_token_u128_no_alloc_rust         | 1,235,773,280 | +8.5%   | 319,996,185      | +43.6%            | 25.9%     | 31,758      | 40,433            |
| simple_token_u32_no_alloc_rust          | 1,238,455,816 | +8.8%   | 322,678,721      | +44.8%            | 26.1%     | 31,017      | 39,692            |
| simple_token_u256_macro_rust            | 1,274,355,080 | +11.9%  | 358,577,985      | +60.9%            | 28.1%     | 33,051      | 41,726            |
| simple_token_u256_no_alloc_rust         | 1,275,969,212 | +12.1%  | 360,192,117      | +61.6%            | 28.2%     | 31,831      | 40,506            |
| simple_token_u256_macro_no_alloc_rust   | 1,276,921,644 | +12.1%  | 361,144,549      | +62.1%            | 28.3%     | 32,599      | 41,274            |
| simple_token_u256_macro_bump_alloc_rust | 1,277,765,552 | +12.2%  | 361,988,457      | +62.4%            | 28.3%     | 33,264      | 41,939            |
| simple_token_u256_dsl_rust              | 1,294,533,429 | +13.7%  | 378,756,334      | +70.0%            | 29.3%     | 32,239      | 40,914            |
| simple_token_u256_stylus                | 1,435,466,108 | +26.1%  | 519,689,013      | +133.2%           | 36.2%     | 40,862      | 49,537            |
| simple_token_u256_ink                   | 1,597,437,410 | +40.3%  | 681,660,315      | +205.9%           | 42.7%     | 50,431      | 59,106            |


### Store - delegate

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,512,479,120 | -       | 595,996,425      | -                 | 39.4%     | 67,574      | 76,249            |
| Store_pvm      | 1,885,837,336 | +24.7%  | 969,354,641      | +62.6%            | 51.4%     | 134,395     | 143,070           |
| store_rust     | 1,998,426,945 | +32.1%  | 1,081,944,250    | +81.5%            | 54.1%     | 70,876      | 79,551            |


### Store - deleteFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,959,433,552 | -       | 1,042,972,907    | -                 | 53.2%     | 98,563      | 107,238           |
| store_rust     | 2,610,714,859 | +33.2%  | 1,694,254,214    | +62.4%            | 64.9%     | 112,422     | 121,097           |
| Store_pvm      | 2,923,426,865 | +49.2%  | 2,006,966,220    | +92.4%            | 68.7%     | 165,384     | 174,059           |


### Store - delete_

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,648,952,943 | -       | 732,823,048      | -                 | 44.4%     | 67,606      | 76,281            |
| Store_pvm      | 1,966,009,526 | +19.2%  | 1,049,879,631    | +43.3%            | 53.4%     | 134,427     | 143,102           |
| store_rust     | 2,245,106,821 | +36.2%  | 1,328,976,926    | +81.4%            | 59.2%     | 91,692      | 100,367           |


### Store - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,797,280,059 | -       | 3,096,960        | +170.7%           | 0.2%      | 30,821      | 39,496            |
| store_rust     | 2,445,864,800 | +36.1%  | 1,144,151        | -                 | 0.0%      | 102,191     | 110,866           |
| Store_pvm      | 3,629,468,209 | +101.9% | 8,753,785        | +665.1%           | 0.2%      | 231,212     | 239,887           |


### Store - revokeDelegation

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,746,071,425 | -       | 829,588,730      | -                 | 47.5%     | 67,734      | 76,409            |
| store_rust     | 1,942,023,515 | +11.2%  | 1,025,540,820    | +23.6%            | 52.8%     | 71,115      | 79,790            |
| Store_pvm      | 2,161,386,507 | +23.8%  | 1,244,914,837    | +50.1%            | 57.6%     | 134,552     | 143,227           |


### Store - set

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,705,944,412 | -       | 789,461,717      | -                 | 46.3%     | 67,574      | 76,249            |
| Store_pvm      | 1,977,000,965 | +15.9%  | 1,060,518,270    | +34.3%            | 53.6%     | 134,395     | 143,070           |
| store_rust     | 2,390,549,978 | +40.1%  | 1,474,067,283    | +86.7%            | 61.7%     | 91,390      | 100,065           |


### Store - setFor

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 2,021,068,566 | -       | 1,104,244,096    | -                 | 54.6%     | 98,534      | 107,209           |
| store_rust     | 2,764,387,265 | +36.8%  | 1,847,562,795    | +67.3%            | 66.8%     | 112,131     | 120,806           |
| Store_pvm      | 2,932,089,829 | +45.1%  | 2,015,265,359    | +82.5%            | 68.7%     | 165,355     | 174,030           |


### Store - set_update

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| Store_evm      | 1,280,062,739 | -       | 363,580,044      | -                 | 28.4%     | 36,867      | 45,542            |
| store_rust     | 1,450,121,897 | +13.3%  | 533,639,202      | +46.8%            | 36.8%     | 50,454      | 59,129            |
| Store_pvm      | 1,472,154,193 | +15.0%  | 555,671,498      | +52.8%            | 37.7%     | 103,688     | 112,363           |


### TetherToken - approve

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 1,156,296,364 | -       | 240,519,269      | -                 | 20.8%     | 33,414      | 42,089            |
| TetherToken_pvm | 1,307,080,553 | +13.0%  | 391,303,458      | +62.7%            | 29.9%     | 83,351      | 92,026            |


### TetherToken - deploy

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 2,946,761,588 | -       | 1,206,202,034    | -                 | 40.9%     | 117,251     | 125,926           |
| TetherToken_pvm | 4,502,058,729 | +52.8%  | 1,427,434,900    | +18.3%            | 31.7%     | 264,044     | 272,719           |


### TetherToken - transfer

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 1,536,149,641 | -       | 620,372,546      | -                 | 40.4%     | 84,763      | 93,438            |
| TetherToken_pvm | 1,724,374,354 | +12.3%  | 808,597,259      | +30.3%            | 46.9%     | 134,700     | 143,375           |


### TetherToken - transferFrom

| Implementation  | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| --------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| TetherToken_evm | 1,678,141,560 | -       | 762,033,715      | -                 | 45.4%     | 95,174      | 103,849           |
| TetherToken_pvm | 1,915,552,131 | +14.1%  | 999,444,286      | +31.2%            | 52.2%     | 145,111     | 153,786           |


### W3S - buyTicket

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 3,533,116,174 | -       | 2,617,702,904    | -                 | 74.1%     | 214,361     | 223,036           |
| W3S_pvm        | 4,278,735,271 | +21.1%  | 3,363,322,001    | +28.5%            | 78.6%     | 332,065     | 340,740           |


### W3S - checkIn

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 2,071,656,604 | -       | 1,156,265,384    | -                 | 55.8%     | 108,188     | 116,863           |
| W3S_pvm        | 2,525,052,428 | +21.9%  | 1,609,661,208    | +39.2%            | 63.7%     | 225,892     | 234,567           |


### W3S - configurePaymentToken

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,526,320,684 | -       | 610,190,789      | -                 | 40.0%     | 71,055      | 79,730            |
| W3S_pvm        | 1,831,144,119 | +20.0%  | 915,014,224      | +50.0%            | 50.0%     | 167,473     | 176,148           |


### W3S - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 2,510,934,107 | -       | 589,159,238      | -                 | 23.5%     | 96,104      | 104,779           |
| W3S_pvm        | 5,392,423,865 | +114.8% | 866,316,491      | +47.0%            | 16.1%     | 381,827     | 390,502           |


### W3S - grantVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,152,226,331 | -       | 236,813,061      | -                 | 20.6%     | 40,057      | 48,732            |
| W3S_pvm        | 1,428,366,952 | +24.0%  | 512,953,682      | +116.6%           | 35.9%     | 136,475     | 145,150           |


### W3S - pauseSales

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,121,676,357 | -       | 206,615,887      | -                 | 18.4%     | 39,961      | 48,636            |
| W3S_pvm        | 1,323,041,398 | +18.0%  | 407,980,928      | +97.5%            | 30.8%     | 136,379     | 145,054           |


### W3S - redeemTicketStaff

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 2,729,924,626 | -       | 1,814,169,581    | -                 | 66.5%     | 156,702     | 165,377           |
| W3S_pvm        | 3,316,445,403 | +21.5%  | 2,400,690,358    | +32.3%            | 72.4%     | 253,120     | 261,795           |


### W3S - revokeVolunteerRole

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,156,310,201 | -       | 240,896,931      | -                 | 20.8%     | 40,089      | 48,764            |
| W3S_pvm        | 1,429,330,847 | +23.6%  | 513,917,577      | +113.3%           | 36.0%     | 136,507     | 145,182           |


### W3S - setMerkleRoot

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,224,124,707 | -       | 308,347,612      | -                 | 25.2%     | 40,188      | 48,863            |
| W3S_pvm        | 1,434,896,954 | +17.2%  | 519,119,859      | +68.4%            | 36.2%     | 136,606     | 145,281           |


### W3S - unpauseSales

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| W3S_evm        | 1,123,232,297 | -       | 208,171,827      | -                 | 18.5%     | 39,993      | 48,668            |
| W3S_pvm        | 1,325,435,993 | +18.0%  | 410,375,523      | +97.1%            | 31.0%     | 136,411     | 145,086           |


### WETH9 - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 1,871,599,466 | -       | 236,657,327      | -                 | 12.6%     | 44,120      | 52,795            |
| WETH9_pvm      | 2,344,611,762 | +25.3%  | 267,599,328      | +13.1%            | 11.4%     | 92,621      | 101,296           |


### WETH9 - deposit

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 1,030,225,795 | -       | 115,077,125      | -                 | 11.2%     | 20,055      | 28,730            |
| WETH9_pvm      | 1,094,792,853 | +6.3%   | 179,644,183      | +56.1%            | 16.4%     | 36,552      | 45,227            |


### WETH9 - transfer

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 1,149,072,175 | -       | 233,295,080      | -                 | 20.3%     | 30,515      | 39,190            |
| WETH9_pvm      | 1,258,675,605 | +9.5%   | 342,898,510      | +47.0%            | 27.2%     | 47,012      | 55,687            |


### WETH9 - withdraw

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| WETH9_evm      | 1,496,750,880 | -       | 581,337,610      | -                 | 38.8%     | 24,860      | 33,535            |
| WETH9_pvm      | 1,578,210,255 | +5.4%   | 662,796,985      | +14.0%            | 42.0%     | 41,357      | 50,032            |


### XENCrypto - deploy

| Implementation | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| -------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| XENCrypto_evm  | 2,203,598,539 | -       | 336,841,810      | -                 | 15.3%     | 69,554      | 78,229            |
| XENCrypto_pvm  | 4,866,128,674 | +120.8% | 554,077,960      | +64.5%            | 11.4%     | 337,829     | 346,504           |


### flipper - deploy

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| flipper_evm        | 1,669,354,310 | -       | 80,789,291       | -                 | 4.8%      | 18,518      | 27,193            |
| flipper_macro_rust | 1,723,900,860 | +3.3%   | 96,808,766       | +19.8%            | 5.6%      | 22,799      | 31,474            |
| flipper_pvm        | 1,754,606,573 | +5.1%   | 109,029,259      | +35.0%            | 6.2%      | 24,827      | 33,502            |
| flipper_dsl_rust   | 1,797,899,185 | +7.7%   | 173,897,076      | +115.2%           | 9.7%      | 22,460      | 31,135            |
| flipper_ink        | 1,835,725,443 | +10.0%  | 194,058,464      | +140.2%           | 10.6%     | 24,398      | 33,073            |
| flipper_stylus     | 1,914,849,048 | +14.7%  | 235,801,454      | +191.9%           | 12.3%     | 38,756      | 47,431            |


### flipper - flip

| Implementation     | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ------------------ | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| flipper_evm        | 994,120,135   | -       | 79,059,665       | -                 | 8.0%      | 18,514      | 27,189            |
| flipper_pvm        | 1,008,349,466 | +1.4%   | 93,288,996       | +18.0%            | 9.3%      | 20,737      | 29,412            |
| flipper_ink        | 1,018,890,809 | +2.5%   | 103,830,339      | +31.3%            | 10.2%     | 20,595      | 29,270            |
| flipper_macro_rust | 1,027,904,108 | +3.4%   | 112,843,638      | +42.7%            | 11.0%     | 20,061      | 28,736            |
| flipper_stylus     | 1,036,335,336 | +4.2%   | 121,274,866      | +53.4%            | 11.7%     | 21,961      | 30,636            |
| flipper_dsl_rust   | 1,049,592,648 | +5.6%   | 134,532,178      | +70.2%            | 12.8%     | 19,980      | 28,655            |


### incrementer - deploy

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| incrementer_evm        | 1,671,165,570 | -       | 80,795,781       | -                 | 4.8%      | 18,716      | 27,391            |
| incrementer_macro_rust | 1,727,873,562 | +3.4%   | 97,554,758       | +20.7%            | 5.6%      | 23,153      | 31,828            |
| incrementer_pvm        | 1,767,364,295 | +5.8%   | 109,153,591      | +35.1%            | 6.2%      | 26,213      | 34,888            |
| incrementer_dsl_rust   | 1,800,551,650 | +7.7%   | 173,897,076      | +115.2%           | 9.7%      | 22,751      | 31,426            |
| incrementer_ink        | 1,838,789,427 | +10.0%  | 186,102,413      | +130.3%           | 10.1%     | 25,607      | 34,282            |
| incrementer_stylus     | 1,951,048,744 | +16.7%  | 228,921,750      | +183.3%           | 11.7%     | 43,484      | 52,159            |


### incrementer - inc

| Implementation         | ref_time      | vs Best | metered_ref_time | vs Best (metered) | % metered | metered pov | post_dispatch pov |
| ---------------------- | ------------- | ------- | ---------------- | ----------------- | --------- | ----------- | ----------------- |
| incrementer_evm        | 995,208,606   | -       | 79,795,336       | -                 | 8.0%      | 18,669      | 27,344            |
| incrementer_pvm        | 1,013,391,800 | +1.8%   | 97,978,530       | +22.8%            | 9.7%      | 21,295      | 29,970            |
| incrementer_ink        | 1,023,234,524 | +2.8%   | 107,821,254      | +35.1%            | 10.5%     | 21,097      | 29,772            |
| incrementer_macro_rust | 1,024,526,755 | +2.9%   | 109,124,510      | +36.8%            | 10.7%     | 20,272      | 28,947            |
| incrementer_stylus     | 1,041,389,888 | +4.6%   | 125,976,618      | +57.9%            | 12.1%     | 23,632      | 32,307            |
| incrementer_dsl_rust   | 1,048,350,832 | +5.3%   | 132,937,562      | +66.6%            | 12.7%     | 20,173      | 28,848            |


