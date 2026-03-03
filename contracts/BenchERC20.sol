// SPDX-License-Identifier: MIT
// source: https://github.com/paritytech/smart-bench/blob/master/contracts/solidity/contracts/BenchERC20.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BenchERC20 is ERC20 {
    constructor(uint256 initialSupply) ERC20("BenchERC20", "CAN") {
        _mint(msg.sender, initialSupply);
    }
}
