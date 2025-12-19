// SPDX-License-Identifier: MIT
pragma solidity ^0.8;


contract EnumTest {
    EnumTestChild private child;

    constructor() {
        child = new EnumTestChild();
    }

    function callTestEnum(EnumTestChild.Operation op) external returns (string memory) {
        return child.testEnum(op);
    }
}


contract EnumTestChild {
    enum Operation {
        Call,         // 0
        DelegateCall  // 1
        // Value 2 is OUT OF BOUNDS
    }

    function testEnum(Operation op) public returns (string memory) {
        if (op == Operation.Call) {
            return "CALL";
        } else if (op == Operation.DelegateCall) {
            return "DELEGATECALL";
        } else {
            // This branch should never execute if bounds checking works
            return "UNKNOWN";
        }
    }
}

