// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface BenchERC1155 {
    function create(uint256 value) external payable returns (uint128);
    function balanceOf(address owner, uint128 tokenId) external view returns (uint256);
    function safeTransferFrom(address from, address to, uint128 tokenId, uint256 value) external payable;
    function setApprovalForAll(address operator, bool approved) external payable;
    function isApprovedForAll(address owner, address operator) external view returns (bool);
}
