// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Storage {
    uint256 public n1;
    uint256 public n2;

    constructor() {
        n1 = 42;
        n2 = 100;
    }

    function gethash() public view returns (bytes32) {
        return blockhash(block.number);
    }

    /**
     * @dev Store value in variable
     * @param num value to store
     */
    function write_n1_read_n2(uint256 num) public {
        n1 = num + n2;
    }

    function write_n2(uint256 num) public {
        n2 = num;
    }

    function add_funds() external payable {}

}
