// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.8.0;

contract Caller {
    Callee callee;

    constructor() {
        callee = new Callee();
    }

    function staticCall() external view returns (bool success, bytes memory output) {
        (success, output) = address(callee).staticcall(
            abi.encodeWithSignature("selfdestructOp()")
        );
    }
}

contract Callee {
    function selfdestructOp() public {
        assembly {
            selfdestruct(caller())
        }
    }
}
