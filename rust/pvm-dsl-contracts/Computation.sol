// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

interface Computation {
    function oddProduct(int32 x) external pure returns (int64);
    function triangleNumber(int32 x) external pure returns (int64);
}
