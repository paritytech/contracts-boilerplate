// SPDX-License-Identifier: MIT
// source: https://github.com/paritytech/smart-bench/blob/master/contracts/solidity/contracts/BenchERC721.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BenchERC721 is ERC721 {
    constructor() ERC721("BenchERC721", "CANFT") {}

    function mint(uint256 tokenId) public {
        _safeMint(msg.sender, tokenId);
    }
}
