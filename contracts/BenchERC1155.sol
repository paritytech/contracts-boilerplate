// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BenchERC1155 {
    mapping(address => mapping(uint128 => uint256)) private _balances;
    mapping(address => mapping(address => bool)) private _approvals;
    uint128 private _tokenIdNonce;

    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint128 tokenId, uint256 value);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    error UnexistentToken();
    error ZeroAddressTransfer();
    error NotApproved();
    error InsufficientBalance();
    error SelfApproval();
    error BatchTransferMismatch();

    constructor() {}

    function create(uint256 value) public payable returns (uint128) {
        _tokenIdNonce += 1;
        _balances[msg.sender][_tokenIdNonce] = value;
        emit TransferSingle(
            msg.sender,
            address(0),
            value == 0 ? address(0) : msg.sender,
            _tokenIdNonce,
            value
        );
        return _tokenIdNonce;
    }

    function balanceOf(address owner, uint128 tokenId) public view returns (uint256) {
        return _balances[owner][tokenId];
    }

    function safeTransferFrom(
        address from,
        address to,
        uint128 tokenId,
        uint256 value,
        bytes calldata /*_data*/
    ) public payable {
        if (msg.sender != from) {
            if (!_approvals[from][msg.sender]) {
                revert NotApproved();
            }
        }
        if (to == address(0)) {
            revert ZeroAddressTransfer();
        }
        uint256 balance = _balances[from][tokenId];
        if (balance < value) {
            revert InsufficientBalance();
        }
        unchecked {
            _balances[from][tokenId] = balance - value;
        }
        _balances[to][tokenId] += value;
        emit TransferSingle(msg.sender, from, to, tokenId, value);
    }

    function setApprovalForAll(address operator, bool approved) public payable {
        if (operator == msg.sender) {
            revert SelfApproval();
        }
        _approvals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    function isApprovedForAll(address owner, address operator) public view returns (bool) {
        return _approvals[owner][operator];
    }
}
