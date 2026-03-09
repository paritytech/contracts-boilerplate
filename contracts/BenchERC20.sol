// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BenchERC20 {
    uint256 private _totalSupply;
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    error InsufficientBalance();
    error InsufficientAllowance();

    constructor(uint256 initialSupply) {
        _balances[msg.sender] = initialSupply;
        _totalSupply = initialSupply;
        emit Transfer(address(0), msg.sender, initialSupply);
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address owner) public view returns (uint256) {
        return _balances[owner];
    }

    function allowance(address owner, address spender) public view returns (uint256) {
        return _allowances[owner][spender];
    }

    function transfer(address to, uint256 value) public payable {
        _transferFromTo(msg.sender, to, value);
    }

    function approve(address spender, uint256 value) public payable {
        _allowances[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
    }

    function transferFrom(address from, address to, uint256 value) public payable {
        uint256 currentAllowance = _allowances[from][msg.sender];
        if (currentAllowance < value) {
            revert InsufficientAllowance();
        }
        _transferFromTo(from, to, value);
        unchecked {
            _allowances[from][msg.sender] = currentAllowance - value;
        }
    }

    function mint(address to, uint256 value) public payable {
        _balances[to] += value;
        _totalSupply += value;
        emit Transfer(address(0), to, value);
    }

    function _transferFromTo(address from, address to, uint256 value) internal {
        uint256 fromBalance = _balances[from];
        if (fromBalance < value) {
            revert InsufficientBalance();
        }
        unchecked {
            _balances[from] = fromBalance - value;
        }
        _balances[to] += value;
        emit Transfer(from, to, value);
    }
}
