// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Implementation contract
contract Implementation {
    uint256 public value;

    fallback() external {
        assembly {
            let x := calldataload(4)
            sstore(0, x)
        }
    }
}

// Proxy contract - redirects all calls to implementation
contract DelegatecallProxy {
    uint256 public value;
    address public implementation;

    constructor(address _implementation) {
        implementation = _implementation;
    }

    fallback() external {
        implementation.delegatecall(msg.data);
    }
}
