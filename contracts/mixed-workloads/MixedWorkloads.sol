// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @notice Minimal ERC20 with public mint, used for mixed-workload benchmarks.
contract MixedERC20 {
    string public name;
    string public symbol;

    function decimals() public pure returns (uint8) {
        return 18;
    }

    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor(string memory name_, string memory symbol_) {
        name = name_;
        symbol = symbol_;
    }

    function transfer(address to, uint256 amount) external returns (bool) {
        require(to != address(0), "ERC20: transfer to zero");
        uint256 bal = balanceOf[msg.sender];
        require(bal >= amount, "ERC20: balance");
        unchecked {
            balanceOf[msg.sender] = bal - amount;
            balanceOf[to] += amount;
        }
        emit Transfer(msg.sender, to, amount);
        return true;
    }

    function approve(address spender, uint256 amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address from, address to, uint256 amount) external returns (bool) {
        require(to != address(0), "ERC20: transfer to zero");
        uint256 bal = balanceOf[from];
        require(bal >= amount, "ERC20: balance");

        uint256 allowed = allowance[from][msg.sender];
        require(allowed >= amount, "ERC20: allowance");
        if (allowed != type(uint256).max) {
            allowance[from][msg.sender] = allowed - amount;
        }

        unchecked {
            balanceOf[from] = bal - amount;
            balanceOf[to] += amount;
        }
        emit Transfer(from, to, amount);
        return true;
    }

    function mint(address to, uint256 amount) external returns (bool) {
        require(to != address(0), "ERC20: mint to zero");
        totalSupply += amount;
        balanceOf[to] += amount;
        emit Transfer(address(0), to, amount);
        return true;
    }
}

/// @notice Minimal contract deployed by MixedFactory.
contract MixedChild {
    uint256 public immutable value;

    constructor(uint256 value_) {
        value = value_;
    }
}

/// @notice Factory that deploys MixedChild contracts via CREATE and CREATE2.
contract MixedFactory {
    uint256 public nonce;

    event Deployed(address addr, uint256 nonce_);

    function deployCreate() external returns (address) {
        uint256 n = nonce++;
        MixedChild child = new MixedChild(n);
        address addr = address(child);
        emit Deployed(addr, n);
        return addr;
    }

    function deployCreate2() external returns (address) {
        uint256 n = nonce++;
        bytes32 salt = bytes32(n);
        MixedChild child = new MixedChild{salt: salt}(n);
        address addr = address(child);
        emit Deployed(addr, n);
        return addr;
    }
}

/// @notice Factory that deploys MixedERC20 contracts via CREATE.
contract MixedERC20Factory {
    uint256 public nonce;

    event Deployed(address addr, uint256 nonce_);

    function deploy() external returns (address) {
        uint256 n = nonce++;
        MixedERC20 token = new MixedERC20("Token", "TKN");
        address addr = address(token);
        emit Deployed(addr, n);
        return addr;
    }
}

interface IMixedERC20Minimal {
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

interface IMixedSwapCallback {
    function swapCallback(uint256 amountOwed, bytes calldata data) external;
}

/// @notice Constant-product AMM pool with callback-based swap (inspired by Uniswap V3).
contract MixedPool {
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

    function addLiquidity(uint256 amount0, uint256 amount1) external lock {
        IMixedERC20Minimal(token0).transferFrom(msg.sender, address(this), amount0);
        IMixedERC20Minimal(token1).transferFrom(msg.sender, address(this), amount1);
        reserve0 += amount0;
        reserve1 += amount1;
    }

    function swap(address recipient, uint256 amountIn, bytes calldata data) external lock returns (uint256 amountOut) {
        require(amountIn > 0, "Pool: zero input");

        uint256 amountInWithFee = amountIn * 997;
        amountOut = (reserve1 * amountInWithFee) / (reserve0 * 1000 + amountInWithFee);
        require(amountOut > 0 && amountOut < reserve1, "Pool: insufficient output");

        IMixedERC20Minimal(token1).transfer(recipient, amountOut);

        uint256 balanceBefore = IMixedERC20Minimal(token0).balanceOf(address(this));
        IMixedSwapCallback(msg.sender).swapCallback(amountIn, data);
        require(
            IMixedERC20Minimal(token0).balanceOf(address(this)) >= balanceBefore + amountIn,
            "Pool: insufficient input"
        );

        reserve0 += amountIn;
        reserve1 -= amountOut;
    }
}

/// @notice Minimal swap router implementing the V3 callback pattern.
contract MixedSwapRouter is IMixedSwapCallback {
    address public pool;
    address public token0;

    address private _caller;

    constructor(address _pool) {
        pool = _pool;
        token0 = MixedPool(_pool).token0();
    }

    function swap(uint256 amountIn, address recipient) external returns (uint256 amountOut) {
        _caller = msg.sender;
        amountOut = MixedPool(pool).swap(recipient, amountIn, "");
        _caller = address(0);
    }

    function swapCallback(uint256 amountOwed, bytes calldata) external override {
        require(msg.sender == pool, "SwapRouter: unauthorized");
        IMixedERC20Minimal(token0).transferFrom(_caller, msg.sender, amountOwed);
    }
}
