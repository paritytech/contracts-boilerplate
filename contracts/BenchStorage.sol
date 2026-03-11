// SPDX-License-Identifier: MIT
// source: https://github.com/paritytech/smart-bench/blob/master/contracts/solidity/contracts/Storage.sol
pragma solidity ^0.8.0;

contract BenchStorage {
    mapping(address => uint128) private _balances;

    constructor() {}

    function read(address account, uint32 count) public view {
        for (uint32 counter = 1; counter <= count; counter++) {
            _balances[account];
        }
    }

    function write(address account, uint32 count) public payable {
        for (uint32 counter = 1; counter <= count; counter++) {
            _balances[account] = 1000000;
        }
    }

    function readWrite(address account, uint32 count) public payable {
        for (uint32 counter = 1; counter <= count; counter++) {
            _balances[account] += 1;
        }
    }
}
