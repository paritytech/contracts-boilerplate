// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BenchERC721 {
    mapping(uint32 => address) private _tokenOwner;
    mapping(uint32 => address) private _tokenApprovals;
    mapping(address => uint32) private _ownedTokensCount;
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    event Transfer(address indexed from, address indexed to, uint32 indexed id);
    event Approval(address indexed from, address indexed to, uint32 indexed id);

    error NotOwner();
    error NotApproved();
    error TokenExists();
    error TokenNotFound();
    error CannotInsert();
    error CannotFetchValue();
    error NotAllowed();

    constructor() {}

    function balanceOf(address owner) public view returns (uint32) {
        return _ownedTokensCount[owner];
    }

    function ownerOf(uint32 id) public view returns (address) {
        return _tokenOwner[id];
    }

    function mint(uint32 id) public payable {
        if (_tokenOwner[id] != address(0)) {
            revert TokenExists();
        }
        if (msg.sender == address(0)) {
            revert NotAllowed();
        }
        _ownedTokensCount[msg.sender] += 1;
        _tokenOwner[id] = msg.sender;
        emit Transfer(address(0), msg.sender, id);
    }

    function transfer(address destination, uint32 id) public payable {
        _transferTokenFrom(msg.sender, destination, id);
    }

    function transferFrom(address from, address to, uint32 id) public payable {
        _transferTokenFrom(from, to, id);
    }

    function _transferTokenFrom(address from, address to, uint32 id) internal {
        address owner = _tokenOwner[id];
        if (owner == address(0)) {
            revert TokenNotFound();
        }
        address approved = _tokenApprovals[id];
        bool isApprovedOrOwner = msg.sender == owner
            || approved == msg.sender
            || _operatorApprovals[owner][msg.sender];
        if (!isApprovedOrOwner) {
            revert NotApproved();
        }
        if (owner != from) {
            revert NotOwner();
        }
        delete _tokenApprovals[id];
        _ownedTokensCount[from] -= 1;
        delete _tokenOwner[id];
        if (to == address(0)) {
            revert NotAllowed();
        }
        _ownedTokensCount[to] += 1;
        _tokenOwner[id] = to;
        emit Transfer(from, to, id);
    }
}
