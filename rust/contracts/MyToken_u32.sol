// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

interface MyToken_u32 {
    event Transfer(address indexed from, address indexed to, uint32 value);
    error InsufficientBalance();

    function totalSupply() external view returns (uint32);
    function balanceOf(address account) external view returns (uint32);

    function transfer(address to, uint32 amount) external;
    function mint(address to, uint32 amount) external;
}
