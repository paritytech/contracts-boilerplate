// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title PretraceFixture
/// @notice A simple contract to exercise storage, balance, and nonce changes
contract PretraceFixture {
    uint256 public value;
    mapping(address => uint256) public balances;

    constructor() payable {
        balances[msg.sender] = msg.value;
        value = 42;
    }

    function writeStorage(uint256 _value) external {
        value = _value;
    }

    function readStorage() external view returns (uint256) {
        return value;
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

    function callContract(address childAddr) external {
        PretraceFixtureChild(childAddr).increment();
    }

    function delegatecallContract(address childAddr) external {
        (bool success, ) = childAddr.delegatecall(
            abi.encodeWithSelector(PretraceFixtureChild.increment.selector)
        );
        require(success, "Delegatecall failed");
    }}

/// @title Child
/// @notice A disposable child contract used to test contract deployment and calls
contract PretraceFixtureChild {
    uint256 public value = 1;

    function increment() external {
        value += 1;
    }

}
