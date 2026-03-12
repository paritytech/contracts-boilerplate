// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

interface BenchStorage {
    function read(address account, uint32 count) external view;
    function write(address account, uint32 count) external payable;
    function readWrite(address account, uint32 count) external payable;
}
