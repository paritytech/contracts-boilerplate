// Sources flattened with hardhat v2.28.3 https://hardhat.org

// SPDX-License-Identifier: GPL-3.0-only

// File src/interfaces/IDotNS.sol

// Original license: SPDX_License_Identifier: GPL-3.0-only
pragma solidity ^0.8.24;

/**
 * @title IDotNS
 * @notice Canonical interface for the DotNS primitive
 * @dev Human-readable naming system mapping names to addresses
 */
interface IDotNS {
    // ============ Structs ============
    struct Name {
        bytes32 node;
        bytes32 parent;
        string label;
        string fullName;
        address owner;
        address resolvedAddress;
        bytes32 metadataCid;
        uint64 expiry;
        uint64 createdAt;
    }

    // ============ Events ============
    event NameRegistered(bytes32 indexed node, string name, address indexed owner);
    event NameTransferred(bytes32 indexed node, string name, address indexed from, address indexed to);
    event AddressUpdated(bytes32 indexed node, string name, address oldAddress, address newAddress);
    event MetadataUpdated(bytes32 indexed node, string name, bytes32 cid);
    event NameRenewed(bytes32 indexed node, string name, uint64 newExpiry);
    event NameReleased(bytes32 indexed node, string name);
    event SubdomainCreated(bytes32 indexed node, bytes32 indexed parentNode, string label, address indexed owner);

    // ============ Functions ============

    /**
     * @notice Register a new top-level name
     * @param name The name to register (e.g., "alice" -> "alice.dot")
     * @param duration Registration duration in seconds
     * @return The node hash
     */
    function register(string calldata name, uint64 duration) external returns (bytes32);

    /**
     * @notice Resolve a name to an address
     * @param name The full name (e.g., "alice.dot")
     * @return The resolved address
     */
    function resolve(string calldata name) external view returns (address);

    /**
     * @notice Resolve by node hash
     * @param node The node hash
     * @return The resolved address
     */
    function resolveNode(bytes32 node) external view returns (address);

    /**
     * @notice Update the address a name points to
     * @param name The full name
     * @param newAddress The new address
     */
    function setAddress(string calldata name, address newAddress) external;

    /**
     * @notice Update metadata CID
     * @param name The full name
     * @param metadataCid The new metadata CID
     */
    function setMetadata(string calldata name, bytes32 metadataCid) external;

    /**
     * @notice Transfer ownership of a name
     * @param name The full name
     * @param newOwner The new owner
     */
    function transfer(string calldata name, address newOwner) external;

    /**
     * @notice Renew registration
     * @param name The full name
     * @param duration Additional duration in seconds
     */
    function renew(string calldata name, uint64 duration) external;

    /**
     * @notice Release a name (voluntary)
     * @param name The full name
     */
    function release(string calldata name) external;

    /**
     * @notice Get full name record
     * @param name The full name
     * @return The name record
     */
    function get(string calldata name) external view returns (Name memory);

    /**
     * @notice Get name record by node hash
     * @param node The node hash
     * @return The name record
     */
    function getNode(bytes32 node) external view returns (Name memory);

    /**
     * @notice Lookup names by owner
     * @param owner The owner address
     * @return Array of full names
     */
    function lookupByOwner(address owner) external view returns (string[] memory);

    /**
     * @notice Check if a name is available
     * @param name The name to check
     * @return True if available
     */
    function isAvailable(string calldata name) external view returns (bool);

    /**
     * @notice Get owner by node hash
     * @param node The node hash
     * @return The owner address
     */
    function ownerOfNode(bytes32 node) external view returns (address);

    /**
     * @notice Create a subdomain
     * @param parentName The parent name (e.g., "alice.dot")
     * @param label The subdomain label (e.g., "payments")
     * @param owner The subdomain owner
     * @param resolvedAddress The address to resolve to
     * @return The node hash
     */
    function createSubdomain(
        string calldata parentName,
        string calldata label,
        address owner,
        address resolvedAddress
    ) external returns (bytes32);

    /**
     * @notice Set subdomain owner
     * @param parentName The parent name
     * @param label The subdomain label
     * @param newOwner The new owner
     */
    function setSubdomainOwner(
        string calldata parentName,
        string calldata label,
        address newOwner
    ) external;

    /**
     * @notice Compute namehash for a name
     * @param name The full name
     * @return The node hash
     */
    function namehash(string calldata name) external pure returns (bytes32);

    /**
     * @notice Lookup names by owner with pagination
     * @param owner The owner address
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of full names
     */
    function lookupByOwner(address owner, uint64 offset, uint64 limit) external view returns (string[] memory);

    /**
     * @notice Count names owned by an address
     * @param owner The owner address
     * @return Number of names
     */
    function countByOwner(address owner) external view returns (uint256);
}


// File src/DotNS.sol

// Original license: SPDX_License_Identifier: GPL-3.0-only
pragma solidity ^0.8.24;

/**
 * @title DotNS
 * @notice Human-readable naming system mapping names to addresses
 * @dev See docs/technical-spec.md for full specification
 */
contract DotNS is IDotNS {
    // ============ Errors ============
    error NameAlreadyRegistered();
    error NameNotFound();
    error NameExpired();
    error NotNameOwner();
    error NotParentOwner();
    error InvalidNameFormat();
    error SubdomainDepthExceeded();

    // ============ Constants ============
    string public constant TLD = "dot";

    // ============ Storage ============
    // node => Name
    mapping(bytes32 => Name) private _names;

    // owner => nodes array
    mapping(address => bytes32[]) private _ownerNames;

    // owner => node => index in _ownerNames
    mapping(address => mapping(bytes32 => uint256)) private _ownerNameIndex;

    // owner => node => exists in _ownerNames
    mapping(address => mapping(bytes32 => bool)) private _ownerHasName;

    // ============ External Functions ============

    /**
     * @notice Register a new top-level name (e.g., "alice" → "alice.dot")
     * @param name The name to register (without TLD)
     * @param duration Registration period in seconds (0 = no expiry)
     * @return The node hash
     */
    function register(string calldata name, uint64 duration) external returns (bytes32) {
        _validateLabel(name);

        string memory fullName = string(abi.encodePacked(name, ".", TLD));
        bytes32 node = namehash(fullName);

        if (_names[node].node != bytes32(0)) {
            // Check if expired
            if (_names[node].expiry != 0 && block.timestamp > _names[node].expiry) {
                // Name is expired, allow re-registration
                _removeName(node);
            } else {
                revert NameAlreadyRegistered();
            }
        }

        bytes32 parentNode = namehash(TLD);
        uint64 expiry = duration > 0 ? uint64(block.timestamp) + duration : 0;

        _names[node] = Name({
            node: node,
            parent: parentNode,
            label: name,
            fullName: fullName,
            owner: msg.sender,
            resolvedAddress: msg.sender,
            metadataCid: bytes32(0),
            expiry: expiry,
            createdAt: uint64(block.timestamp)
        });

        _addToOwner(msg.sender, node);

        emit NameRegistered(node, fullName, msg.sender);

        return node;
    }

    /**
     * @notice Resolve a name to an address
     * @param name The full name (e.g., "alice.dot")
     * @return The resolved address
     */
    function resolve(string calldata name) external view returns (address) {
        bytes32 node = namehash(name);
        return resolveNode(node);
    }

    /**
     * @notice Resolve by node hash
     * @param node The namehash of the name
     * @return The resolved address
     */
    function resolveNode(bytes32 node) public view returns (address) {
        Name storage n = _names[node];
        if (n.node == bytes32(0)) {
            revert NameNotFound();
        }
        if (n.expiry != 0 && block.timestamp > n.expiry) {
            revert NameExpired();
        }
        return n.resolvedAddress;
    }

    /**
     * @notice Update the address a name points to
     * @param name The full name
     * @param newAddress The new address to resolve to
     */
    function setAddress(string calldata name, address newAddress) external {
        bytes32 node = namehash(name);
        Name storage n = _names[node];

        _requireOwner(n);

        address oldAddress = n.resolvedAddress;
        n.resolvedAddress = newAddress;

        emit AddressUpdated(node, name, oldAddress, newAddress);
    }

    /**
     * @notice Update metadata CID
     * @param name The full name
     * @param metadataCid The new metadata CID
     */
    function setMetadata(string calldata name, bytes32 metadataCid) external {
        bytes32 node = namehash(name);
        Name storage n = _names[node];

        _requireOwner(n);

        n.metadataCid = metadataCid;

        emit MetadataUpdated(node, name, metadataCid);
    }

    /**
     * @notice Transfer ownership of a name
     * @param name The full name
     * @param newOwner The new owner address
     */
    function transfer(string calldata name, address newOwner) external {
        bytes32 node = namehash(name);
        Name storage n = _names[node];

        _requireOwner(n);

        address oldOwner = n.owner;
        n.owner = newOwner;

        _removeFromOwner(oldOwner, node);
        _addToOwner(newOwner, node);

        emit NameTransferred(node, name, oldOwner, newOwner);
    }

    /**
     * @notice Renew registration
     * @param name The full name
     * @param duration Additional duration in seconds
     */
    function renew(string calldata name, uint64 duration) external {
        bytes32 node = namehash(name);
        Name storage n = _names[node];

        if (n.node == bytes32(0)) {
            revert NameNotFound();
        }

        uint64 currentExpiry = n.expiry;
        uint64 newExpiry;

        if (currentExpiry == 0) {
            // No expiry set, use current time as base
            newExpiry = uint64(block.timestamp) + duration;
        } else if (block.timestamp > currentExpiry) {
            // Already expired, renew from now
            newExpiry = uint64(block.timestamp) + duration;
        } else {
            // Not expired, extend from current expiry
            newExpiry = currentExpiry + duration;
        }

        n.expiry = newExpiry;

        emit NameRenewed(node, name, newExpiry);
    }

    /**
     * @notice Release a name (voluntary)
     * @param name The full name
     */
    function release(string calldata name) external {
        bytes32 node = namehash(name);
        Name storage n = _names[node];

        _requireOwner(n);

        _removeName(node);

        emit NameReleased(node, name);
    }

    /**
     * @notice Get full name record
     * @param name The full name
     * @return The name record
     */
    function get(string calldata name) external view returns (Name memory) {
        bytes32 node = namehash(name);
        return getNode(node);
    }

    /**
     * @notice Get name record by node hash
     * @param node The namehash
     * @return The name record
     */
    function getNode(bytes32 node) public view returns (Name memory) {
        Name storage n = _names[node];
        if (n.node == bytes32(0)) {
            revert NameNotFound();
        }
        return n;
    }

    /**
     * @notice Get owner by node hash
     * @param node The namehash
     * @return The owner address
     */
    function ownerOfNode(bytes32 node) external view returns (address) {
        Name storage n = _names[node];
        if (n.node == bytes32(0)) {
            revert NameNotFound();
        }
        if (n.expiry != 0 && block.timestamp > n.expiry) {
            revert NameExpired();
        }
        return n.owner;
    }

    /**
     * @notice Lookup names by owner
     * @param owner The owner address
     * @return Array of full names
     */
    function lookupByOwner(address owner) external view returns (string[] memory) {
        bytes32[] storage nodes = _ownerNames[owner];
        uint256 count = 0;

        // Count valid names
        for (uint256 i = 0; i < nodes.length; i++) {
            Name storage n = _names[nodes[i]];
            if (n.node != bytes32(0) && (n.expiry == 0 || block.timestamp <= n.expiry)) {
                count++;
            }
        }

        string[] memory result = new string[](count);
        uint256 idx = 0;

        for (uint256 i = 0; i < nodes.length; i++) {
            Name storage n = _names[nodes[i]];
            if (n.node != bytes32(0) && (n.expiry == 0 || block.timestamp <= n.expiry)) {
                result[idx++] = n.fullName;
            }
        }

        return result;
    }

    /**
     * @notice Create a subdomain
     * @param parentName The parent name (e.g., "alice.dot")
     * @param label The subdomain label (e.g., "payments")
     * @param subOwner The subdomain owner
     * @param subAddress The address it resolves to
     * @return The subdomain node hash
     */
    function createSubdomain(
        string calldata parentName,
        string calldata label,
        address subOwner,
        address subAddress
    ) external returns (bytes32) {
        bytes32 parentNode = namehash(parentName);
        Name storage parent = _names[parentNode];

        if (parent.node == bytes32(0)) {
            revert NameNotFound();
        }
        if (parent.expiry != 0 && block.timestamp > parent.expiry) {
            revert NameExpired();
        }
        if (msg.sender != parent.owner) {
            revert NotParentOwner();
        }

        // Check depth - only allow one level of subdomain
        // Parent must have exactly one "." (e.g., "alice.dot")
        uint256 dots = _countDots(parentName);
        if (dots != 1) {
            revert SubdomainDepthExceeded();
        }

        _validateLabel(label);

        string memory fullName = string(abi.encodePacked(label, ".", parentName));
        bytes32 node = namehash(fullName);

        if (_names[node].node != bytes32(0)) {
            revert NameAlreadyRegistered();
        }

        _names[node] = Name({
            node: node,
            parent: parentNode,
            label: label,
            fullName: fullName,
            owner: subOwner,
            resolvedAddress: subAddress,
            metadataCid: bytes32(0),
            expiry: parent.expiry, // Inherit parent expiry
            createdAt: uint64(block.timestamp)
        });

        _addToOwner(subOwner, node);

        emit SubdomainCreated(node, parentNode, label, subOwner);

        return node;
    }

    /**
     * @notice Set subdomain owner
     * @param parentName The parent name
     * @param label The subdomain label
     * @param newOwner The new owner
     */
    function setSubdomainOwner(string calldata parentName, string calldata label, address newOwner)
        external
    {
        bytes32 parentNode = namehash(parentName);
        Name storage parent = _names[parentNode];

        if (parent.node == bytes32(0)) {
            revert NameNotFound();
        }
        if (parent.expiry != 0 && block.timestamp > parent.expiry) {
            revert NameExpired();
        }
        if (msg.sender != parent.owner) {
            revert NotParentOwner();
        }

        string memory fullName = string(abi.encodePacked(label, ".", parentName));
        bytes32 node = namehash(fullName);
        Name storage n = _names[node];

        if (n.node == bytes32(0)) {
            revert NameNotFound();
        }

        address oldOwner = n.owner;
        n.owner = newOwner;

        _removeFromOwner(oldOwner, node);
        _addToOwner(newOwner, node);

        emit NameTransferred(node, fullName, oldOwner, newOwner);
    }

    /**
     * @notice Compute namehash for a name
     * @param name The full name (e.g., "alice.dot")
     * @return The namehash
     */
    function namehash(string memory name) public pure returns (bytes32) {
        if (bytes(name).length == 0) {
            return bytes32(0);
        }

        bytes memory nameBytes = bytes(name);
        int256 lastDot = -1;

        // Find the last dot
        for (uint256 i = 0; i < nameBytes.length; i++) {
            if (nameBytes[i] == ".") {
                lastDot = int256(i);
            }
        }

        string memory label;
        string memory remainder;

        if (lastDot == -1) {
            // No dot found - this is a TLD
            label = name;
            remainder = "";
        } else {
            // Split at the last dot
            label = _substring(name, uint256(lastDot) + 1, nameBytes.length);
            remainder = _substring(name, 0, uint256(lastDot));
        }

        bytes32 parentHash = namehash(remainder);
        bytes32 labelHash = keccak256(bytes(label));

        return keccak256(abi.encodePacked(parentHash, labelHash));
    }

    /**
     * @notice Check if a name is available
     * @param name The full name
     * @return True if available
     */
    function isAvailable(string calldata name) external view returns (bool) {
        bytes32 node = namehash(name);
        Name storage n = _names[node];

        if (n.node == bytes32(0)) {
            return true;
        }

        // Check if expired
        if (n.expiry != 0 && block.timestamp > n.expiry) {
            return true;
        }

        return false;
    }

    // ============ Internal Functions ============

    function _validateLabel(string memory label) internal pure {
        bytes memory labelBytes = bytes(label);
        if (labelBytes.length == 0 || labelBytes.length > 63) {
            revert InvalidNameFormat();
        }

        for (uint256 i = 0; i < labelBytes.length; i++) {
            bytes1 char = labelBytes[i];
            // Allow lowercase letters, numbers, and hyphens
            bool isValid = (char >= 0x61 && char <= 0x7a) // a-z
                || (char >= 0x30 && char <= 0x39) // 0-9
                || char == 0x2d; // hyphen

            if (!isValid) {
                revert InvalidNameFormat();
            }

            // Hyphen cannot be first or last character
            if (char == 0x2d && (i == 0 || i == labelBytes.length - 1)) {
                revert InvalidNameFormat();
            }
        }
    }

    function _requireOwner(Name storage n) internal view {
        if (n.node == bytes32(0)) {
            revert NameNotFound();
        }
        if (n.expiry != 0 && block.timestamp > n.expiry) {
            revert NameExpired();
        }
        if (msg.sender != n.owner) {
            revert NotNameOwner();
        }
    }

    function _addToOwner(address owner, bytes32 node) internal {
        if (!_ownerHasName[owner][node]) {
            _ownerNameIndex[owner][node] = _ownerNames[owner].length;
            _ownerNames[owner].push(node);
            _ownerHasName[owner][node] = true;
        }
    }

    function _removeFromOwner(address owner, bytes32 node) internal {
        if (_ownerHasName[owner][node]) {
            uint256 index = _ownerNameIndex[owner][node];
            uint256 lastIndex = _ownerNames[owner].length - 1;

            if (index != lastIndex) {
                bytes32 lastNode = _ownerNames[owner][lastIndex];
                _ownerNames[owner][index] = lastNode;
                _ownerNameIndex[owner][lastNode] = index;
            }

            _ownerNames[owner].pop();
            delete _ownerNameIndex[owner][node];
            _ownerHasName[owner][node] = false;
        }
    }

    function _removeName(bytes32 node) internal {
        Name storage n = _names[node];
        if (n.node != bytes32(0)) {
            _removeFromOwner(n.owner, node);
            delete _names[node];
        }
    }

    function _countDots(string memory str) internal pure returns (uint256) {
        bytes memory strBytes = bytes(str);
        uint256 count = 0;
        for (uint256 i = 0; i < strBytes.length; i++) {
            if (strBytes[i] == ".") {
                count++;
            }
        }
        return count;
    }

    function _substring(string memory str, uint256 startIndex, uint256 endIndex)
        internal
        pure
        returns (string memory)
    {
        bytes memory strBytes = bytes(str);
        bytes memory result = new bytes(endIndex - startIndex);
        for (uint256 i = startIndex; i < endIndex; i++) {
            result[i - startIndex] = strBytes[i];
        }
        return string(result);
    }

    // ============ Pagination Functions ============

    /**
     * @notice Lookup names by owner with pagination
     * @param owner The owner address
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of full names
     */
    function lookupByOwner(address owner, uint64 offset, uint64 limit) external view returns (string[] memory) {
        bytes32[] storage nodes = _ownerNames[owner];

        // First pass: count valid names
        uint256 totalValid = 0;
        for (uint256 i = 0; i < nodes.length; i++) {
            Name storage n = _names[nodes[i]];
            if (n.node != bytes32(0) && (n.expiry == 0 || block.timestamp <= n.expiry)) {
                totalValid++;
            }
        }

        if (offset >= totalValid) {
            return new string[](0);
        }

        uint256 available = totalValid - offset;
        uint256 count = limit < available ? limit : available;

        string[] memory result = new string[](count);
        uint256 validIdx = 0;
        uint256 resultIdx = 0;

        for (uint256 i = 0; i < nodes.length && resultIdx < count; i++) {
            Name storage n = _names[nodes[i]];
            if (n.node != bytes32(0) && (n.expiry == 0 || block.timestamp <= n.expiry)) {
                if (validIdx >= offset) {
                    result[resultIdx++] = n.fullName;
                }
                validIdx++;
            }
        }

        return result;
    }

    /**
     * @notice Count names owned by an address
     * @param owner The owner address
     * @return Number of valid names
     */
    function countByOwner(address owner) external view returns (uint256) {
        bytes32[] storage nodes = _ownerNames[owner];
        uint256 count = 0;

        for (uint256 i = 0; i < nodes.length; i++) {
            Name storage n = _names[nodes[i]];
            if (n.node != bytes32(0) && (n.expiry == 0 || block.timestamp <= n.expiry)) {
                count++;
            }
        }

        return count;
    }
}
