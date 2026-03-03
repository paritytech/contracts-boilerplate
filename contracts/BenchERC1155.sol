// SPDX-License-Identifier: MIT
// source: https://github.com/paritytech/smart-bench/blob/master/contracts/solidity/contracts/BenchERC1155.sol
// Updated to remove deprecated Counters library (removed in OZ v5)
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract BenchERC1155 is ERC1155 {
    uint256 private _tokenIdCounter;

    constructor() ERC1155("") {}

    function create(uint256 balance) public returns (uint256) {
        _tokenIdCounter++;
        uint256 newItemId = _tokenIdCounter;
        _mint(msg.sender, newItemId, balance, "");
        return newItemId;
    }
}
