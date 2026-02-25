// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

/// @title Minimal ERC-20-like token with only mint and transfer entry points.
contract SimpleToken {
    uint256 public totalSupply;

    mapping(address => uint256) private balances;

    event Transfer(address indexed from, address indexed to, uint256 value);

    error InsufficientBalance();

    /// @notice Returns the balance of `account`.
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }

    /// @notice Transfers `amount` tokens from the caller to `to`.
    function transfer(address to, uint256 amount) external payable {
        uint256 senderBalance = balances[msg.sender];
        if (senderBalance < amount) {
            revert InsufficientBalance();
        }

        unchecked {
            balances[msg.sender] = senderBalance - amount;
            balances[to] += amount;
        }

        emit Transfer(msg.sender, to, amount);
    }

    /// @notice Permissionless mint mirroring the ink! implementation.
    /// Emits a Transfer event with the zero address as the sender.
    function mint(address to, uint256 amount) external payable {
        balances[to] += amount;
        totalSupply += amount;
        emit Transfer(address(0), to, amount);
    }
}
