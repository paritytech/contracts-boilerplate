// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Child.sol";

/// @notice Factory that deploys Child contracts via CREATE and CREATE2.
///         An auto-incrementing nonce is used as the constructor argument and
///         as the CREATE2 salt so that every deployment produces a unique address.
contract Factory {
    uint256 public nonce;

    event Deployed(address addr, uint256 nonce_);

    /// @notice Deploy a Child contract using the CREATE opcode.
    function deployCreate() external returns (address) {
        uint256 n = nonce++;
        Child child = new Child(n);
        address addr = address(child);
        emit Deployed(addr, n);
        return addr;
    }

    /// @notice Deploy a Child contract using the CREATE2 opcode.
    function deployCreate2() external returns (address) {
        uint256 n = nonce++;
        bytes32 salt = bytes32(n);
        Child child = new Child{salt: salt}(n);
        address addr = address(child);
        emit Deployed(addr, n);
        return addr;
    }
}
