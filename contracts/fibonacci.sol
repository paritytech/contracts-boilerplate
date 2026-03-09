// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

contract Fibonacci {
    function fibonacci(uint32 n) public payable {
        uint32 result = _fibonacci(n);
        if (result  == 0) {
            revert();
        }
    }

    function _fibonacci(uint32 n) internal pure returns (uint32) {
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        } else {
            unchecked {
            return _fibonacci(n - 1) + _fibonacci(n - 2);
            }
        }
    }
}

contract Fibonacci_u256 {
    function fibonacci(uint256 n) public payable {
        uint256 result = _fibonacci(n);
        if (result == 0) {
            revert();
        }
    }

    function _fibonacci(uint256 n) internal pure returns (uint256) {
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        } else {
            unchecked {
            return _fibonacci(n - 1) + _fibonacci(n - 2);
            }
        }
    }
}

contract Fibonacci_u256_iter {
    function fibonacci(uint256 n) public payable {
        uint256 result = _fibonacci(n);
        if (result == 0) {
            revert();
        }
    }

    function _fibonacci(uint256 n) internal pure returns (uint256) {
        if (n == 0) {
            return 0;
        }
        uint256 a = 0;
        uint256 b = 1;
        unchecked {
            for (uint256 i = 1; i < n; i++) {
                uint256 tmp = a + b;
                a = b;
                b = tmp;
            }
        }
        return b;
    }
}
