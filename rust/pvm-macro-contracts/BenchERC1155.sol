// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface BenchERC1155 {
    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint128 id, uint256 value);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    function create(uint256 value) external payable returns (uint128);
    function balanceOf(address owner, uint128 tokenId) external view returns (uint256);
    function safeTransferFrom(address from, address to, uint128 tokenId, uint256 value, bytes calldata data) external payable;
    function setApprovalForAll(address operator, bool approved) external payable;
    function isApprovedForAll(address owner, address operator) external view returns (bool);
}
