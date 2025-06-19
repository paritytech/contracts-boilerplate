// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

contract Test {
    uint8 constant ARRAY_SIZE = 1;

    struct Vector {
        uint8[ARRAY_SIZE] array;
        uint8 size;
    }

    function complex() public pure returns(Vector memory) {
        uint8[ARRAY_SIZE] memory input = [18];
        Vector memory output = fromArray(input, ARRAY_SIZE);
        
        map(output, div7);

        return output;
    }

    function div7(uint8 a) private pure returns(uint8) {
        return a / 7;
    }

    function fromArray(uint8[ARRAY_SIZE] memory array, uint8 size) private pure returns(Vector memory) {
        return Vector(array, size);
    }

    function map(Vector memory vector, function (uint8) pure returns(uint8) f) private pure {
        Vector memory result;
        result.size = vector.size;
        
        for(uint8 i = 0; i < vector.size; i++) {
            result.array[i] = f(vector.array[i]);
        }
    }
}
