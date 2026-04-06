// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Pool.sol";

/// @notice Minimal swap router implementing the V3 callback pattern.
/// Users approve this contract for token0, then call swap().
/// The router calls Pool.swap() which calls back swapCallback(),
/// where the router pulls token0 from the user via transferFrom.
/// This makes the entire transfer+swap atomic in a single transaction.
contract SwapRouter is ISwapCallback {
    address public pool;
    address public token0;

    address private _caller;

    constructor(address _pool) {
        pool = _pool;
        token0 = Pool(_pool).token0();
    }

    function swap(uint256 amountIn, address recipient) external returns (uint256 amountOut) {
        _caller = msg.sender;
        amountOut = Pool(pool).swap(recipient, amountIn, "");
        _caller = address(0);
    }

    function swapCallback(uint256 amountOwed, bytes calldata) external override {
        require(msg.sender == pool, "SwapRouter: unauthorized");
        IERC20Minimal(token0).transferFrom(_caller, msg.sender, amountOwed);
    }
}
