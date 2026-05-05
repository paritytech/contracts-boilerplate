// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @notice Minimal contract deployed by the factory. Keeps a single immutable
///         value set at construction time so that each instance is distinct.
contract Child {
    uint256 public immutable value;

    constructor(uint256 value_) {
        value = value_;
    }
}
