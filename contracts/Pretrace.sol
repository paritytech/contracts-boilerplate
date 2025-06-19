// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title PretraceFixture
/// @notice A simple contract to exercise storage, balance, and nonce changes
contract PretraceFixture {
    uint256 public storedValue;
    uint256 public otherStoredValue;
    mapping(address => uint256) public balances;

    constructor() payable {
        storedValue = 1;
        otherStoredValue = 2;
        balances[msg.sender] = msg.value;
    }

    function writeStorage(uint256 _value) external {
        storedValue = _value;
    }

    function readStorage() external view returns (uint256) {
        return storedValue;
    }

    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, 'Insufficient balance');
        balances[msg.sender] -= amount;
        (bool sent, ) = msg.sender.call{value: amount}('');
        require(sent, 'Transfer failed');
    }

    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }

    function getExternalBalance(
        address account
    ) external view returns (uint256) {
        return account.balance;
    }

    function createChild() external returns (address) {
        PretraceFixtureChild c = new PretraceFixtureChild();
        return address(c);
    }
}

/// @title Child
/// @notice A disposable child contract to bump parent nonce
contract PretraceFixtureChild {
    uint256 public dummy = 1;
}
