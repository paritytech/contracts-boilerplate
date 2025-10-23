// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.0;

/// @title StateChanger
/// @notice A simple contract that stores a value and allows modification
/// @dev Used to test static call behavior when state changes are attempted
contract StateChanger {
    uint256 public value;

    /// @notice Changes the stored value (modifies state)
    /// @dev This function should fail when called via STATICCALL
    /// @param newValue The new value to store
    function changeState(uint256 newValue) external {
        value = newValue; // This modifies state - should revert in static call
    }

    /// @notice Returns the current stored value (read-only)
    /// @dev This function should succeed when called via STATICCALL
    /// @return The current stored value
    function getValue() external view returns (uint256) {
        return value;
    }
}
