// SPDX-License-Identifier: MIT
// source: https://github.com/paritytech/smart-bench/blob/master/contracts/solidity/contracts/Storage.sol
pragma solidity ^0.8.0;

contract BenchStorage {
    mapping(address => uint256) private _balances;

    constructor() {}

    function read(address account, int32 count) public view {
        for (int32 counter = 1; counter <= count; counter++) {
            _balances[account];
        }
    }

    function write(address account, int32 count) public {
        for (int32 counter = 1; counter <= count; counter++) {
            _balances[account] = 1000000;
        }
    }

    function readWrite(address account, int32 count) public {
        for (int32 counter = 1; counter <= count; counter++) {
            _balances[account] += 1;
        }
    }
}
