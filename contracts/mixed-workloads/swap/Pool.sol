// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20Minimal {
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

interface ISwapCallback {
    function swapCallback(uint256 amountOwed, bytes calldata data) external;
}

/// @notice Constant-product AMM pool with callback-based swap (inspired by Uniswap V3).
/// The callback pattern ensures that input token transfer and swap execution are atomic
/// within a single transaction, preventing race conditions under concurrent access.
contract Pool {
    address public token0;
    address public token1;
    uint256 public reserve0;
    uint256 public reserve1;

    bool private _locked;

    modifier lock() {
        require(!_locked, "Pool: locked");
        _locked = true;
        _;
        _locked = false;
    }

    constructor(address _token0, address _token1) {
        token0 = _token0;
        token1 = _token1;
    }

    /// @notice Add liquidity by transferring tokens from msg.sender.
    /// Caller must approve this contract for both tokens beforehand.
    function addLiquidity(uint256 amount0, uint256 amount1) external lock {
        IERC20Minimal(token0).transferFrom(msg.sender, address(this), amount0);
        IERC20Minimal(token1).transferFrom(msg.sender, address(this), amount1);
        reserve0 += amount0;
        reserve1 += amount1;
    }

    /// @notice Swap token0 for token1 using the callback pattern.
    /// 1. Sends output (token1) to recipient
    /// 2. Calls swapCallback on msg.sender requesting input (token0)
    /// 3. Verifies payment was received
    function swap(address recipient, uint256 amountIn, bytes calldata data) external lock returns (uint256 amountOut) {
        require(amountIn > 0, "Pool: zero input");

        // Constant product with 0.3% fee
        uint256 amountInWithFee = amountIn * 997;
        amountOut = (reserve1 * amountInWithFee) / (reserve0 * 1000 + amountInWithFee);
        require(amountOut > 0 && amountOut < reserve1, "Pool: insufficient output");

        // Send output first (optimistic transfer)
        IERC20Minimal(token1).transfer(recipient, amountOut);

        // Request input via callback
        uint256 balanceBefore = IERC20Minimal(token0).balanceOf(address(this));
        ISwapCallback(msg.sender).swapCallback(amountIn, data);
        require(
            IERC20Minimal(token0).balanceOf(address(this)) >= balanceBefore + amountIn,
            "Pool: insufficient input"
        );

        reserve0 += amountIn;
        reserve1 -= amountOut;
    }
}
