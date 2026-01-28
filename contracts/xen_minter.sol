/**
 *Submitted for verification at Etherscan.io on 2022-10-13
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/*
    Refactor goals:
    - No hardcoded proxy bytecode literals (no bytes.concat(0x3d60...))
    - No inline assembly for CREATE2 or CALL
    - Keep original contract structure/names for easy diff
    - Preserve behavior: deploy deterministic proxies and call them with `data`
      so that inside delegated execution msg.sender == original (this contract),
      enabling d/c/dKill/cKill/k gating to work.
*/

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
}

/**
 * @notice Source-code-only proxy deployed with CREATE2 via `new {salt: ...}`.
 * @dev Fallback delegates all calls to `implementation` and **does not bubble
 *      return data** (matches the original contract's behavior of ignoring `succeeded`).
 *      No assembly is used.
 */
contract CoinTool_Proxy {
    address public immutable implementation;

    constructor(address _implementation) payable {
        implementation = _implementation;
    }

    fallback() external payable {
        // Delegatecall into the implementation; ignore returndata and success
        // to mimic the original "fire-and-forget" calls.
        implementation.delegatecall(msg.data);
    }

    receive() external payable {}
}

contract CoinTool_App {
    address owner;
    address private immutable original;
    mapping(address => mapping(bytes => uint256)) public map;

    constructor() payable {
        original = address(this);
        owner = tx.origin;
    }

    receive() external payable {}
    fallback() external payable {}

    // --- internal helpers (new) ---

    function _salt(bytes calldata _saltBytes, uint256 i, address user) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(_saltBytes, i, user));
    }

    function _deployProxy(bytes32 salt) internal returns (address proxy) {
        // CREATE2 deployment without assembly (compiler handles it)
        proxy = address(new CoinTool_Proxy{salt: salt}(address(this)));
    }

    function _predictProxy(bytes32 salt) internal view returns (address predicted) {
        // Standard CREATE2 formula using init_code hash:
        // address = keccak256(0xff ++ deployer ++ salt ++ keccak256(init_code))[12:]
        bytes memory initCode = abi.encodePacked(
            type(CoinTool_Proxy).creationCode,
            abi.encode(address(this))
        );

        bytes32 initCodeHash = keccak256(initCode);
        bytes32 h = keccak256(abi.encodePacked(bytes1(0xff), address(this), salt, initCodeHash));
        predicted = address(uint160(uint256(h)));
    }

    // --- original functions, refactored to avoid bytecode literals + assembly ---

    function t(uint256 total, bytes memory data, bytes calldata _saltBytes) external payable {
        require(msg.sender == tx.origin);

        uint256 i = map[msg.sender][_saltBytes] + 1;
        uint256 end = total + i;

        for (; i < end; ++i) {
            bytes32 salt = _salt(_saltBytes, i, msg.sender);
            address proxy = _deployProxy(salt);

            // Call proxy with the provided calldata (no assembly)
            // (ignore success to match original behavior)
            proxy.call(data);
        }

        map[msg.sender][_saltBytes] += total;
    }

    function t_(uint256[] calldata a, bytes memory data, bytes calldata _saltBytes) external payable {
        require(msg.sender == tx.origin);

        for (uint256 i = 0; i < a.length; ++i) {
            bytes32 salt = keccak256(abi.encodePacked(_saltBytes, a[i], msg.sender));
            address proxy = _deployProxy(salt);

            proxy.call(data);
        }

        uint256 e = a[a.length - 1];
        if (e > map[msg.sender][_saltBytes]) {
            map[msg.sender][_saltBytes] = e;
        }
    }

    function f(uint256[] calldata a, bytes memory data, bytes memory _saltBytes) external payable {
        require(msg.sender == tx.origin);

        for (uint256 i = 0; i < a.length; ++i) {
            bytes32 salt = keccak256(abi.encodePacked(_saltBytes, a[i], msg.sender));
            address proxy = _predictProxy(salt);

            // Mimic original behavior: calling an address with no code should not revert.
            // Using low-level .call(data) preserves that:
            // - If proxy not deployed: call succeeds (does nothing) in most cases.
            // - If deployed: proxy fallback delegatecalls into this contract.
            proxy.call(data);
        }
    }

    // --- keep remaining functions & structure (no assembly) ---

    function d(address a, bytes memory data) external payable {
        require(msg.sender == original);
        a.delegatecall(data);
    }

    function c(address a, bytes calldata data) external payable {
        require(msg.sender == original);
        external_call(a, data);
    }

    function dKill(address a, bytes memory data) external payable {
        require(msg.sender == original);
        a.delegatecall(data);
        (bool ok,) = payable(msg.sender).call{value: address(this).balance}("");
        require(ok, "SWEEP_FAILED");
    }

    function cKill(address a, bytes calldata data) external payable {
        require(msg.sender == original);
        external_call(a, data);
        (bool ok,) = payable(msg.sender).call{value: address(this).balance}("");
        require(ok, "SWEEP_FAILED");
    }

    function k() external {
        require(msg.sender == original);
        (bool ok,) = payable(msg.sender).call{value: address(this).balance}("");
        require(ok, "SWEEP_FAILED");
    }

    function external_call(address destination, bytes memory data) internal {
        destination.call(data);
    }

    function claimTokens(address _token) external {
        require(owner == msg.sender);

        if (_token == address(0)) {
            payable(owner).transfer(address(this).balance);
            return;
        }
        IERC20 erc20token = IERC20(_token);
        uint256 balance = erc20token.balanceOf(address(this));
        erc20token.transfer(owner, balance);
    }
}