// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Child {
    uint256 public value;

    constructor(uint256 _value) payable {
        value = _value;
    }

    function getValue() public view returns (uint256, uint256) {
        return (value, address(this).balance);
    }

    function terminate() public {
        selfdestruct(payable(msg.sender));
    }
}

contract TerminateTest {
    Child public child;

    constructor() payable {
    }


    function terminate() public {
        child.terminate();
    }

    function tryCallAfterTerminate(bool redeploy) public returns (uint256, uint256) {
        if (redeploy) {
           child = new Child{value: 1 ether}(42);
        }
        child.terminate();

        try child.getValue() returns (uint256 val, uint256 bal) {
            return (val, bal);
        } catch Error(string memory reason) {
            revert(string.concat("getValue() failed: ", reason));
        } catch (bytes memory data) {
            revert(string.concat("getValue() failed with: ", string(data)));
        }
    }
}
