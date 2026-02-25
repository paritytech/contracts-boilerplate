// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {TransparentUpgradeableProxy} from "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";

/**
 * @title MarketplaceProxy
 * @notice Transparent upgradeable proxy for Marketplace contract
 * @dev Simply re-exports OpenZeppelin's TransparentUpgradeableProxy for compilation
 */
contract MarketplaceProxy is TransparentUpgradeableProxy {
    constructor(
        address _logic,
        address initialOwner,
        bytes memory _data
    ) TransparentUpgradeableProxy(_logic, initialOwner, _data) {}
}
