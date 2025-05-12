// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ATracing {
    address public callee;

    constructor(address _callee) {
        callee = _callee;
    }

    function callB() public {
        bool success;
        bytes memory encodedSignature = abi.encodeWithSignature("callC()");
        (success, ) = callee.call(encodedSignature);
        require(success, "callB failed");
    }
}

contract BTracing {
    address public callee;

    constructor(address _callee) {
        callee = _callee;
    }

    function callC() external {
        bool success;
        bytes memory encodedSignature = abi.encodeWithSignature("noop()");
        (success, ) = callee.call(encodedSignature);
        require(success, "callC failed");
    }
}

contract CTracing {
    function noop() external {
        // noop
    }
}
