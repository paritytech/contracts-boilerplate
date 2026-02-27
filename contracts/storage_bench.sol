// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/// Writes a configurable number of bytes to storage for gas benchmarking.
contract StorageBench {
    // Each slot holds 32 bytes
    mapping(uint256 => bytes32) private data;

    event ReadResult(uint256 numBytes, uint256 slotsWritten);

    /// Writes `numBytes` bytes to storage (rounded up to 32-byte slots).
    function write(uint256 numBytes) public {
        uint256 slots = (numBytes + 31) / 32;
        for (uint256 i = 0; i < slots; i++) {
            data[i] = bytes32(i + 1);
        }
    }

    /// Does nothing; used to measure base transaction overhead.
    function noop() public {}

    /// Reads slots and emits the count of non-zero ones.
    function read(uint256 numBytes) public {
        uint256 slots = (numBytes + 31) / 32;
        uint256 slotsWritten = 0;
        for (uint256 i = 0; i < slots; i++) {
            if (data[i] != 0) {
                slotsWritten++;
            }
        }
        emit ReadResult(numBytes, slotsWritten);
    }
}
