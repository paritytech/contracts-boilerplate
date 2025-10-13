// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.0;

/// @title StaticCaller
/// @notice Demonstrates static calls to both state-changing and view functions
/// @dev Used to test STATICCALL opcode behavior with different function types
contract StaticCaller {
    /// @notice Attempts to call a state-changing function via static call
    /// @dev This should return false because changeState modifies state
    /// @param target The contract to call
    /// @param newValue The value to pass to changeState
    /// @return success Whether the static call succeeded (should be false)
    function staticCallChangeState(address target, uint256 newValue) external view returns (bool success) {
        // This should return false because changeState modifies state
        bytes memory callData = abi.encodeWithSignature("changeState(uint256)", newValue);
        (success, ) = target.staticcall(callData);
    }

    /// @notice Calls a view function via static call
    /// @dev This should succeed because getValue only reads state
    /// @param target The contract to call
    /// @return success Whether the static call succeeded (should be true)
    /// @return result The value returned by getValue
    function staticCallGetValue(address target) external view returns (bool success, uint256 result) {
        // This should succeed because getValue is a view function
        bytes memory callData = abi.encodeWithSignature("getValue()");
        bytes memory returnData;
        (success, returnData) = target.staticcall(callData);
        if (success && returnData.length >= 32) {
            result = abi.decode(returnData, (uint256));
        }
    }
}
