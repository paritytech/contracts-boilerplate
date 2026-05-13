// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

interface BenchERC721 {
    event Transfer(address indexed from, address indexed to, uint32 indexed id);

    function balanceOf(address owner) external view returns (uint32);
    function ownerOf(uint32 id) external view returns (address);
    function mint(uint32 id) external payable;
    function transfer(address to, uint32 id) external payable;
    function transferFrom(address from, address to, uint32 id) external payable;
}
