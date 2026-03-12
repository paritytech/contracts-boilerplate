// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

interface SimpleToken {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external payable;
    function mint(address to, uint256 amount) external payable;
}
