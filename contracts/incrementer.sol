// SPDX-License-Identifier: MIT
// source: https://github.com/paritytech/smart-bench/blob/master/contracts/solidity/contracts/incrementer.sol
pragma solidity ^0.8.0;

contract incrementer {
    int32 private value;

    /// Constructor that initializes the `int32` value to the given `init_value`.
    constructor(int32 initvalue) {
        value = initvalue;
    }

    /// This increments the value by `by`.
    function inc(int32 by) public payable {
        value += by;
    }

    /// Simply returns the current value of our `int32`.
    function get() public view returns (int32) {
        return value;
    }
}
