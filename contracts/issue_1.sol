// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract UsernameRegistry {
    mapping(address => string) public addressToUsername;
    
    function registerUsername(string memory username) public payable {
        addressToUsername[msg.sender] = username;  // WRITE WORKS ✅
    }
    
    function getUsername(address user) public view returns (string memory) {
        return addressToUsername[user];  // READ FAILS ❌
    }
}
