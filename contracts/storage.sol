// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Storage {
    uint256 private storedNumber;
    mapping(address => uint256) private storedNumbers;

    function store(uint256 num) public {
        storedNumber = num;
    }

    function storeAt(address addr, uint256 num) public {
        storedNumbers[addr] = num;
    }

    function retrieve() public view returns (uint256) {
        return storedNumber;
    }

    function balanceOf(address addr) public view returns (uint256) {
        return storedNumbers[addr];
    }
}
