// Sources flattened with hardhat v2.28.3 https://hardhat.org

// SPDX-License-Identifier: GPL-3.0-only

// File src/interfaces/IStore.sol

// Original license: SPDX_License_Identifier: GPL-3.0-only
pragma solidity ^0.8.24;

/**
 * @title IStore
 * @notice Canonical interface for the Store primitive
 * @dev Owner-scoped key-value storage for CID pointers with delegation support
 */
interface IStore {
    // ============ Structs ============
    struct Entry {
        bytes32 value;
        uint64 updatedAt;
        bool exists;
    }

    struct Delegation {
        address delegate;
        string keyPrefix;
        uint64 createdAt;
    }

    // ============ Events ============
    event EntrySet(address indexed owner, string key, bytes32 value);
    event EntryDeleted(address indexed owner, string key);
    event DelegationCreated(address indexed owner, address indexed delegatee, string keyPrefix);
    event DelegationRevoked(address indexed owner, address indexed delegatee, string keyPrefix);

    // ============ Functions ============

    /**
     * @notice Set a key-value pair for the caller
     * @param key The key (max 256 bytes)
     * @param value The 32-byte value (typically a CID)
     */
    function set(string calldata key, bytes32 value) external;

    /**
     * @notice Set a key-value pair for a specific owner (requires delegation)
     * @param owner The owner of the entry
     * @param key The key
     * @param value The value
     */
    function setFor(address owner, string calldata key, bytes32 value) external;

    /**
     * @notice Get a value by owner and key
     * @param owner The owner
     * @param key The key
     * @return The value
     */
    function get(address owner, string calldata key) external view returns (bytes32);

    /**
     * @notice Check if a key exists for an owner
     * @param owner The owner
     * @param key The key
     * @return True if exists
     */
    function exists(address owner, string calldata key) external view returns (bool);

    /**
     * @notice Delete a key from caller's storage
     * @param key The key to delete
     */
    function delete_(string calldata key) external;

    /**
     * @notice Delete a key from a specific owner's storage (requires delegation)
     * @param owner The owner
     * @param key The key
     */
    function deleteFor(address owner, string calldata key) external;

    /**
     * @notice Delegate write access to another address for a key prefix
     * @param delegatee The address to grant access
     * @param keyPrefix The key prefix (e.g., "notes/*")
     * @dev WARNING: An empty prefix ("") grants FULL write access to ALL keys.
     */
    function delegate(address delegatee, string calldata keyPrefix) external;

    /**
     * @notice Revoke a delegation
     * @param delegatee The address to revoke
     * @param keyPrefix The key prefix
     */
    function revokeDelegation(address delegatee, string calldata keyPrefix) external;

    /**
     * @notice Check if an address can write to an owner's key
     * @param writer The writer address
     * @param owner The owner address
     * @param key The key
     * @return True if writer can write
     */
    function canWrite(address writer, address owner, string calldata key) external view returns (bool);

    /**
     * @notice List all delegations for an owner
     * @param owner The owner
     * @return Array of delegations
     */
    function listDelegations(address owner) external view returns (Delegation[] memory);

    /**
     * @notice List keys by prefix for an owner
     * @param owner The owner
     * @param prefix The prefix to filter by
     * @return Array of matching keys
     */
    function list(address owner, string calldata prefix) external view returns (string[] memory);

    /**
     * @notice List keys by prefix for an owner with pagination
     * @param owner The owner
     * @param prefix The prefix to filter by
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of matching keys
     */
    function list(address owner, string calldata prefix, uint64 offset, uint64 limit)
        external
        view
        returns (string[] memory);

    /**
     * @notice List delegations with pagination
     * @param owner The owner
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of delegations
     */
    function listDelegations(address owner, uint64 offset, uint64 limit)
        external
        view
        returns (Delegation[] memory);

    /**
     * @notice Count keys matching prefix for an owner
     * @param owner The owner
     * @param prefix The prefix to filter by
     * @return Number of matching keys
     */
    function countKeys(address owner, string calldata prefix) external view returns (uint256);

    /**
     * @notice Count delegations for an owner
     * @param owner The owner
     * @return Number of delegations
     */
    function countDelegations(address owner) external view returns (uint256);

    /**
     * @notice Set multiple key-value pairs at once
     * @param keys Array of keys
     * @param values Array of values
     */
    function setBatch(string[] calldata keys, bytes32[] calldata values) external;

    /**
     * @notice Set multiple key-value pairs for another owner (requires delegation)
     * @param owner The owner
     * @param keys Array of keys
     * @param values Array of values
     */
    function setForBatch(address owner, string[] calldata keys, bytes32[] calldata values) external;
}


// File src/Store.sol

// Original license: SPDX_License_Identifier: GPL-3.0-only
pragma solidity ^0.8.24;

/**
 * @title Store
 * @notice Owner-scoped key-value storage for CID pointers
 * @dev See docs/technical-spec.md for full specification
 */
contract Store is IStore {
    // ============ Errors ============
    error NotAuthorized();
    error KeyNotFound();
    error KeyTooLong();
    error LengthMismatch();
    error BatchTooLarge();
    error TooManyKeysForOnChainEnumeration(uint256 keyCount, uint256 maxKeys);

    // ============ Constants ============
    uint256 public constant MAX_KEY_LENGTH = 256;
    uint256 public constant MAX_BATCH_SIZE = 100;
    /// @notice Maximum keys for on-chain enumeration. Use indexer for larger datasets.
    /// @dev See docs: https://protocol-commons.org/sdk/indexer
    uint256 public constant MAX_ENUMERABLE_KEYS = 2000;

    // ============ Storage ============
    // owner => key => Entry
    mapping(address => mapping(string => Entry)) private _entries;
    // owner => list of keys (for enumeration)
    mapping(address => string[]) private _ownerKeys;
    // owner => key => index in _ownerKeys (for deletion)
    mapping(address => mapping(string => uint256)) private _keyIndex;
    // owner => delegations array
    mapping(address => Delegation[]) private _delegations;
    // owner => delegate => keyPrefix => exists (for quick lookup)
    mapping(address => mapping(address => mapping(string => bool))) private _delegationExists;

    // ============ External Functions ============

    /**
     * @notice Set a key to a value
     * @param key The key to set (max 256 bytes)
     * @param value The CID value (32 bytes)
     */
    function set(string calldata key, bytes32 value) external {
        _setFor(msg.sender, key, value);
    }

    /**
     * @notice Set a key for another owner (requires delegation)
     * @param owner The owner's address
     * @param key The key to set
     * @param value The CID value
     */
    function setFor(address owner, string calldata key, bytes32 value) external {
        if (!canWrite(msg.sender, owner, key)) {
            revert NotAuthorized();
        }
        _setFor(owner, key, value);
    }

    /**
     * @notice Get a value by owner and key
     * @param owner The owner's address
     * @param key The key to look up
     * @return The CID value
     */
    function get(address owner, string calldata key) external view returns (bytes32) {
        Entry storage entry = _entries[owner][key];
        if (!entry.exists) {
            revert KeyNotFound();
        }
        return entry.value;
    }

    /**
     * @notice Delete a key from caller's storage
     * @param key The key to delete
     */
    function delete_(string calldata key) external {
        _deleteFor(msg.sender, key);
    }

    /**
     * @notice Delete a key from a specific owner's storage (requires delegation)
     * @param owner The owner's address
     * @param key The key to delete
     */
    function deleteFor(address owner, string calldata key) external {
        if (!canWrite(msg.sender, owner, key)) {
            revert NotAuthorized();
        }
        _deleteFor(owner, key);
    }

    /**
     * @notice List keys by prefix for an owner
     * @param owner The owner's address
     * @param prefix The prefix to filter by
     * @return keys Array of matching keys
     * @dev Reverts if owner has more than MAX_ENUMERABLE_KEYS. Use indexer for large datasets.
     */
    function list(address owner, string calldata prefix) external view returns (string[] memory) {
        string[] storage allKeys = _ownerKeys[owner];

        // Soft limit: prevent gas exhaustion on large datasets
        if (allKeys.length > MAX_ENUMERABLE_KEYS) {
            revert TooManyKeysForOnChainEnumeration(allKeys.length, MAX_ENUMERABLE_KEYS);
        }

        uint256 count = 0;

        // First pass: count matches
        for (uint256 i = 0; i < allKeys.length; i++) {
            if (_entries[owner][allKeys[i]].exists && _startsWith(allKeys[i], prefix)) {
                count++;
            }
        }

        // Second pass: collect matches
        string[] memory result = new string[](count);
        uint256 idx = 0;
        for (uint256 i = 0; i < allKeys.length; i++) {
            if (_entries[owner][allKeys[i]].exists && _startsWith(allKeys[i], prefix)) {
                result[idx++] = allKeys[i];
            }
        }

        return result;
    }

    /**
     * @notice Delegate write access to another address for a key prefix
     * @param delegatee The address to delegate to
     * @param keyPrefix The key prefix (e.g., "notes/*")
     * @dev SECURITY WARNING: An empty prefix ("") grants FULL write access to ALL keys.
     *      Use this carefully - it's equivalent to giving the delegatee complete control
     *      over your storage namespace. For limited delegation, use specific prefixes
     *      like "app:myapp:*" or "public/*".
     */
    function delegate(address delegatee, string calldata keyPrefix) external {
        if (_delegationExists[msg.sender][delegatee][keyPrefix]) {
            return; // Already delegated
        }

        _delegations[msg.sender].push(
            Delegation({delegate: delegatee, keyPrefix: keyPrefix, createdAt: uint64(block.timestamp)})
        );
        _delegationExists[msg.sender][delegatee][keyPrefix] = true;

        emit DelegationCreated(msg.sender, delegatee, keyPrefix);
    }

    /**
     * @notice Revoke delegation
     * @param delegatee The delegate address
     * @param keyPrefix The key prefix to revoke
     */
    function revokeDelegation(address delegatee, string calldata keyPrefix) external {
        if (!_delegationExists[msg.sender][delegatee][keyPrefix]) {
            return; // Nothing to revoke
        }

        Delegation[] storage delegations = _delegations[msg.sender];
        for (uint256 i = 0; i < delegations.length; i++) {
            if (
                delegations[i].delegate == delegatee
                    && keccak256(bytes(delegations[i].keyPrefix)) == keccak256(bytes(keyPrefix))
            ) {
                // Swap with last and pop
                delegations[i] = delegations[delegations.length - 1];
                delegations.pop();
                break;
            }
        }
        _delegationExists[msg.sender][delegatee][keyPrefix] = false;

        emit DelegationRevoked(msg.sender, delegatee, keyPrefix);
    }

    /**
     * @notice List delegations for an owner
     * @param owner The owner's address
     * @return Array of delegations
     */
    function listDelegations(address owner) external view returns (Delegation[] memory) {
        return _delegations[owner];
    }

    /**
     * @notice List keys by prefix with pagination
     * @param owner The owner's address
     * @param prefix The prefix to filter by
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return keys Array of matching keys
     * @dev Reverts if owner has more than MAX_ENUMERABLE_KEYS. Use indexer for large datasets.
     */
    function list(address owner, string calldata prefix, uint64 offset, uint64 limit)
        external
        view
        returns (string[] memory)
    {
        string[] storage allKeys = _ownerKeys[owner];

        // Soft limit: prevent gas exhaustion on large datasets
        if (allKeys.length > MAX_ENUMERABLE_KEYS) {
            revert TooManyKeysForOnChainEnumeration(allKeys.length, MAX_ENUMERABLE_KEYS);
        }

        // First pass: count total matches
        uint256 totalMatches = 0;
        for (uint256 i = 0; i < allKeys.length; i++) {
            if (_entries[owner][allKeys[i]].exists && _startsWith(allKeys[i], prefix)) {
                totalMatches++;
            }
        }

        if (offset >= totalMatches) {
            return new string[](0);
        }

        uint256 available = totalMatches - offset;
        uint256 count = limit < available ? limit : available;

        string[] memory result = new string[](count);
        uint256 matchIdx = 0;
        uint256 resultIdx = 0;

        for (uint256 i = 0; i < allKeys.length && resultIdx < count; i++) {
            if (_entries[owner][allKeys[i]].exists && _startsWith(allKeys[i], prefix)) {
                if (matchIdx >= offset) {
                    result[resultIdx++] = allKeys[i];
                }
                matchIdx++;
            }
        }

        return result;
    }

    /**
     * @notice List delegations with pagination
     * @param owner The owner's address
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of delegations
     */
    function listDelegations(address owner, uint64 offset, uint64 limit)
        external
        view
        returns (Delegation[] memory)
    {
        Delegation[] storage allDelegations = _delegations[owner];
        uint256 total = allDelegations.length;

        if (offset >= total) {
            return new Delegation[](0);
        }

        uint256 available = total - offset;
        uint256 count = limit < available ? limit : available;

        Delegation[] memory result = new Delegation[](count);
        for (uint256 i = 0; i < count; i++) {
            result[i] = allDelegations[offset + i];
        }
        return result;
    }

    /**
     * @notice Count keys matching prefix for an owner
     * @param owner The owner's address
     * @param prefix The prefix to filter by
     * @return Number of matching keys
     * @dev Reverts if owner has more than MAX_ENUMERABLE_KEYS. Use indexer for large datasets.
     */
    function countKeys(address owner, string calldata prefix) external view returns (uint256) {
        string[] storage allKeys = _ownerKeys[owner];

        // Soft limit: prevent gas exhaustion on large datasets
        if (allKeys.length > MAX_ENUMERABLE_KEYS) {
            revert TooManyKeysForOnChainEnumeration(allKeys.length, MAX_ENUMERABLE_KEYS);
        }

        uint256 count = 0;

        for (uint256 i = 0; i < allKeys.length; i++) {
            if (_entries[owner][allKeys[i]].exists && _startsWith(allKeys[i], prefix)) {
                count++;
            }
        }

        return count;
    }

    /**
     * @notice Count delegations for an owner
     * @param owner The owner's address
     * @return Number of delegations
     */
    function countDelegations(address owner) external view returns (uint256) {
        return _delegations[owner].length;
    }

    /**
     * @notice Set multiple key-value pairs at once
     * @param keys Array of keys
     * @param values Array of values
     */
    function setBatch(string[] calldata keys, bytes32[] calldata values) external {
        if (keys.length != values.length) {
            revert LengthMismatch();
        }
        if (keys.length > MAX_BATCH_SIZE) {
            revert BatchTooLarge();
        }

        for (uint256 i = 0; i < keys.length; i++) {
            _setFor(msg.sender, keys[i], values[i]);
        }
    }

    /**
     * @notice Set multiple key-value pairs for another owner (requires delegation)
     * @param owner The owner's address
     * @param keys Array of keys
     * @param values Array of values
     */
    function setForBatch(address owner, string[] calldata keys, bytes32[] calldata values) external {
        if (keys.length != values.length) {
            revert LengthMismatch();
        }
        if (keys.length > MAX_BATCH_SIZE) {
            revert BatchTooLarge();
        }

        for (uint256 i = 0; i < keys.length; i++) {
            if (!canWrite(msg.sender, owner, keys[i])) {
                revert NotAuthorized();
            }
            _setFor(owner, keys[i], values[i]);
        }
    }

    /**
     * @notice Check if address can write to owner's key
     * @param writer The writer's address
     * @param owner The owner's address
     * @param key The key to check
     * @return True if writer can write to key
     */
    function canWrite(address writer, address owner, string calldata key) public view returns (bool) {
        // Owner can always write
        if (writer == owner) {
            return true;
        }

        // Check delegations
        Delegation[] storage delegations = _delegations[owner];
        for (uint256 i = 0; i < delegations.length; i++) {
            if (delegations[i].delegate == writer) {
                string memory prefix = delegations[i].keyPrefix;
                // Remove trailing * for matching
                string memory trimmedPrefix = _trimWildcard(prefix);
                if (_startsWith(key, trimmedPrefix)) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * @notice Check if an entry exists
     * @param owner The owner's address
     * @param key The key to check
     * @return True if the entry exists
     */
    function exists(address owner, string calldata key) external view returns (bool) {
        return _entries[owner][key].exists;
    }

    /**
     * @notice Get entry metadata
     * @param owner The owner's address
     * @param key The key to look up
     * @return value The CID value
     * @return updatedAt The last update timestamp
     */
    function getEntry(address owner, string calldata key)
        external
        view
        returns (bytes32 value, uint64 updatedAt)
    {
        Entry storage entry = _entries[owner][key];
        if (!entry.exists) {
            revert KeyNotFound();
        }
        return (entry.value, entry.updatedAt);
    }

    // ============ Internal Functions ============

    function _setFor(address owner, string calldata key, bytes32 value) internal {
        if (bytes(key).length > MAX_KEY_LENGTH) {
            revert KeyTooLong();
        }

        Entry storage entry = _entries[owner][key];

        if (!entry.exists) {
            // New key - add to owner's key list
            _keyIndex[owner][key] = _ownerKeys[owner].length;
            _ownerKeys[owner].push(key);
        }

        entry.value = value;
        entry.updatedAt = uint64(block.timestamp);
        entry.exists = true;

        emit EntrySet(owner, key, value);
    }

    function _deleteFor(address owner, string calldata key) internal {
        Entry storage entry = _entries[owner][key];
        if (!entry.exists) {
            revert KeyNotFound();
        }

        // Remove from key list using swap-and-pop
        uint256 index = _keyIndex[owner][key];
        uint256 lastIndex = _ownerKeys[owner].length - 1;

        if (index != lastIndex) {
            string memory lastKey = _ownerKeys[owner][lastIndex];
            _ownerKeys[owner][index] = lastKey;
            _keyIndex[owner][lastKey] = index;
        }

        _ownerKeys[owner].pop();
        delete _keyIndex[owner][key];
        delete _entries[owner][key];

        emit EntryDeleted(owner, key);
    }

    function _startsWith(string memory str, string memory prefix) internal pure returns (bool) {
        bytes memory strBytes = bytes(str);
        bytes memory prefixBytes = bytes(prefix);

        if (prefixBytes.length > strBytes.length) {
            return false;
        }

        for (uint256 i = 0; i < prefixBytes.length; i++) {
            if (strBytes[i] != prefixBytes[i]) {
                return false;
            }
        }

        return true;
    }

    function _trimWildcard(string memory str) internal pure returns (string memory) {
        bytes memory strBytes = bytes(str);
        if (strBytes.length > 0 && strBytes[strBytes.length - 1] == "*") {
            bytes memory result = new bytes(strBytes.length - 1);
            for (uint256 i = 0; i < strBytes.length - 1; i++) {
                result[i] = strBytes[i];
            }
            return string(result);
        }
        return str;
    }
}
