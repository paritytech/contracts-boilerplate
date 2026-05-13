// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface flipper {
    function flip() external payable;
    function get() external view returns (bool);
}
