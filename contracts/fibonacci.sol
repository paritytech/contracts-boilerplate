// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

contract Fibonacci {
    event FibonacciComputed(uint32 indexed n, uint32 result);

    function fibonacci(uint32 n) public {
        uint32 result = _fibonacci(n);
        emit FibonacciComputed(n, result);
    }

    function _fibonacci(uint32 n) internal pure returns (uint32) {
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        } else {
            return _fibonacci(n - 1) + _fibonacci(n - 2);
        }
    }
}
