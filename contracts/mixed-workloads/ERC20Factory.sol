// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./ERC20.sol";

/// @notice Factory that deploys ERC20 contracts via CREATE.
///         An auto-incrementing nonce ensures every deployment produces a unique address.
contract ERC20Factory {
    uint256 public nonce;

    event Deployed(address addr, uint256 nonce_);

    /// @notice Deploy an ERC20 token contract using the CREATE opcode.
    function deploy() external returns (address) {
        uint256 n = nonce++;
        ERC20 token = new ERC20("Token", "TKN");
        address addr = address(token);
        emit Deployed(addr, n);
        return addr;
    }
}
