// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

contract Test {
    uint8 constant SIZE = 3;

    function array() public pure {
        uint8[SIZE][SIZE][SIZE] memory array;

        for(uint8 i = 0; i < SIZE; i++) {
            for(uint8 j = 0; j < SIZE; j++) {
                for(uint8 p = 0; p < SIZE; p++) {
                    array[i][j][p] = i*SIZE*SIZE + j*SIZE + p;
                }
            }
        }

        for(uint8 p = 0; p < SIZE; p++) {
            for(uint8 j = 0; j < SIZE; j++) {
                for(uint8 i = 0; i < SIZE; i++) {
                    array[i][j][p] == i*SIZE*SIZE + j*SIZE + p;
                }
            }
        }
    }
}
