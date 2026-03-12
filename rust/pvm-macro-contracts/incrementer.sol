// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface incrementer {
    function inc(int32 by) external payable;
    function get() external view returns (int32);
}
