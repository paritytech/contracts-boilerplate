// Sources flattened with hardhat v2.28.3 https://hardhat.org

// SPDX-License-Identifier: GPL-3.0-only

// File src/interfaces/IKeyRegistry.sol

// Original license: SPDX_License_Identifier: GPL-3.0-only
pragma solidity ^0.8.24;

/**
 * @title IKeyRegistry
 * @notice Canonical interface for the KeyRegistry primitive
 * @dev X3DH key bundle management for end-to-end encryption
 *
 * Key Types:
 * - Identity Key (IK): Long-term X25519 public key
 * - Signing Key (SK): Ed25519 public key for signature verification
 * - Signed Prekey (SPK): Medium-term X25519 public key, signed by SK
 * - One-Time Prekey (OPK): Ephemeral X25519 public keys for forward secrecy
 */
interface IKeyRegistry {
    // ============ Structs ============

    /**
     * @notice Complete prekey bundle for initiating encrypted communication
     */
    struct PrekeyBundle {
        address owner;
        bytes32 identityKey;        // X25519 public key (IK)
        bytes32 signedPrekey;       // X25519 public key (SPK)
        bytes spkSignature;         // Ed25519 signature of SPK (64 bytes)
        uint64 spkId;               // SPK version/ID
        uint64 spkTimestamp;        // When SPK was last updated
        bytes32 oneTimePrekey;      // X25519 public key (OPK), zeroes if none available
        uint64 otkRemaining;        // Remaining OPKs in pool
    }

    // ============ Events ============

    event IdentityKeyRegistered(address indexed owner, bytes32 identityKey);
    event SignedPrekeyUpdated(address indexed owner, bytes32 signedPrekey, uint64 spkId);
    event OneTimePrekeysUploaded(address indexed owner, uint64 count);
    event OneTimePrekeyConsumed(address indexed owner, address indexed consumer);

    // ============ Functions ============

    /**
     * @notice Register identity with initial keys
     * @param identityKey X25519 public key for encryption key agreement
     * @param signedPrekey X25519 public key for signed prekey
     * @param signingKey Ed25519 public key for signature verification
     * @param spkSignature Ed25519 signature over signedPrekey, signed by signingKey
     */
    function registerIdentity(
        bytes32 identityKey,
        bytes32 signedPrekey,
        bytes32 signingKey,
        bytes calldata spkSignature
    ) external;

    /**
     * @notice Rotate the signed prekey
     * @param signedPrekey New X25519 public key for SPK
     * @param spkSignature Ed25519 signature over signedPrekey
     */
    function updateSignedPrekey(bytes32 signedPrekey, bytes calldata spkSignature) external;

    /**
     * @notice Upload batch of one-time prekeys
     * @param prekeys Array of X25519 public keys
     */
    function uploadOneTimePrekeys(bytes32[] calldata prekeys) external;

    /**
     * @notice Check if address has registered keys
     * @param owner The address to check
     * @return True if registered
     */
    function hasKeys(address owner) external view returns (bool);

    /**
     * @notice Get prekey bundle without consuming OPK
     * @param owner The bundle owner
     * @return The prekey bundle
     */
    function getPrekeyBundle(address owner) external view returns (PrekeyBundle memory);

    /**
     * @notice Batch get prekey bundles without consuming OPKs
     * @param owners Array of addresses
     * @return Array of prekey bundles
     */
    function getPrekeyBundles(address[] calldata owners) external view returns (PrekeyBundle[] memory);

    /**
     * @notice Get prekey bundle AND consume one OPK atomically
     * @param owner The bundle owner
     * @return The prekey bundle (with consumed OPK)
     */
    function fetchPrekeyBundle(address owner) external returns (PrekeyBundle memory);

    /**
     * @notice Get remaining OPK count
     * @param owner The address to check
     * @return Number of remaining OPKs
     */
    function getOtkCount(address owner) external view returns (uint64);
}


// File src/KeyRegistry.sol

// Original license: SPDX_License_Identifier: GPL-3.0-only
pragma solidity ^0.8.24;

/**
 * @title KeyRegistry
 * @notice X3DH key bundle management for end-to-end encryption
 * @dev See docs/technical-spec.md for full specification
 *
 * Security Features:
 * - Identity key uniqueness enforcement
 * - OPK consumption locking to prevent race conditions
 * - Zero-value validation for all keys
 * - SPK != IK validation
 *
 * Note: Ed25519 signature verification is done client-side.
 * On-chain verification is expensive and not required for the
 * security model (users verify signatures before trusting bundles).
 */
contract KeyRegistry is IKeyRegistry {
    // ============ Errors ============
    error AlreadyRegistered();
    error NotRegistered();
    error ZeroAddress();
    error ZeroKey();
    error IdentityKeyAlreadyUsed();
    error SpkMustDifferFromIk();
    error InvalidSignatureLength();
    error BatchTooLarge();
    error PoolCapacityExceeded();
    error OtkLocked();

    // ============ Constants ============
    uint256 public constant SIGNATURE_SIZE = 64;
    uint256 public constant MAX_OPK_BATCH_SIZE = 100;
    uint256 public constant MAX_OPK_POOL_SIZE = 500;
    uint256 public constant MAX_BATCH_QUERY_SIZE = 50;

    // ============ Storage ============

    // Identity key data
    struct IdentityKeyData {
        bytes32 identityKey;
        bytes32 signingKey;
        uint64 registeredAt;
    }

    // Signed prekey data
    struct SignedPrekeyData {
        bytes32 signedPrekey;
        bytes spkSignature;
        uint64 spkId;
        uint64 updatedAt;
    }

    // owner => IdentityKeyData
    mapping(address => IdentityKeyData) private _identityKeys;

    // owner => SignedPrekeyData
    mapping(address => SignedPrekeyData) private _signedPrekeys;

    // identityKey => bool (for uniqueness check)
    mapping(bytes32 => bool) private _identityKeyExists;

    // OPK pool: owner => array of OPKs
    mapping(address => bytes32[]) private _otkPool;

    // OPK read index: owner => next index to consume from
    mapping(address => uint256) private _otkReadIndex;

    // OPK consumption lock: owner => bool
    mapping(address => bool) private _otkLock;

    // ============ External Functions ============

    /**
     * @notice Register identity with initial keys
     * @param identityKey X25519 public key for encryption key agreement
     * @param signedPrekey X25519 public key for signed prekey
     * @param signingKey Ed25519 public key for signature verification
     * @param spkSignature Ed25519 signature over signedPrekey
     */
    function registerIdentity(
        bytes32 identityKey,
        bytes32 signedPrekey,
        bytes32 signingKey,
        bytes calldata spkSignature
    ) external {
        if (msg.sender == address(0)) {
            revert ZeroAddress();
        }
        if (_identityKeys[msg.sender].identityKey != bytes32(0)) {
            revert AlreadyRegistered();
        }
        if (identityKey == bytes32(0)) {
            revert ZeroKey();
        }
        if (signedPrekey == bytes32(0)) {
            revert ZeroKey();
        }
        if (signingKey == bytes32(0)) {
            revert ZeroKey();
        }
        if (_identityKeyExists[identityKey]) {
            revert IdentityKeyAlreadyUsed();
        }
        if (signedPrekey == identityKey) {
            revert SpkMustDifferFromIk();
        }
        if (spkSignature.length != SIGNATURE_SIZE) {
            revert InvalidSignatureLength();
        }

        // Mark identity key as used
        _identityKeyExists[identityKey] = true;

        // Store identity key data
        _identityKeys[msg.sender] = IdentityKeyData({
            identityKey: identityKey,
            signingKey: signingKey,
            registeredAt: uint64(block.timestamp)
        });

        // Store signed prekey
        _signedPrekeys[msg.sender] = SignedPrekeyData({
            signedPrekey: signedPrekey,
            spkSignature: spkSignature,
            spkId: 1,
            updatedAt: uint64(block.timestamp)
        });

        emit IdentityKeyRegistered(msg.sender, identityKey);
    }

    /**
     * @notice Rotate the signed prekey
     * @param signedPrekey New X25519 public key for SPK
     * @param spkSignature Ed25519 signature over signedPrekey
     */
    function updateSignedPrekey(bytes32 signedPrekey, bytes calldata spkSignature) external {
        IdentityKeyData storage ikData = _identityKeys[msg.sender];
        if (ikData.identityKey == bytes32(0)) {
            revert NotRegistered();
        }
        if (signedPrekey == bytes32(0)) {
            revert ZeroKey();
        }
        if (signedPrekey == ikData.identityKey) {
            revert SpkMustDifferFromIk();
        }
        if (spkSignature.length != SIGNATURE_SIZE) {
            revert InvalidSignatureLength();
        }

        SignedPrekeyData storage spkData = _signedPrekeys[msg.sender];
        uint64 newSpkId = spkData.spkId + 1;

        spkData.signedPrekey = signedPrekey;
        spkData.spkSignature = spkSignature;
        spkData.spkId = newSpkId;
        spkData.updatedAt = uint64(block.timestamp);

        emit SignedPrekeyUpdated(msg.sender, signedPrekey, newSpkId);
    }

    /**
     * @notice Upload batch of one-time prekeys
     * @param prekeys Array of X25519 public keys
     */
    function uploadOneTimePrekeys(bytes32[] calldata prekeys) external {
        if (_identityKeys[msg.sender].identityKey == bytes32(0)) {
            revert NotRegistered();
        }
        if (prekeys.length > MAX_OPK_BATCH_SIZE) {
            revert BatchTooLarge();
        }

        bytes32[] storage pool = _otkPool[msg.sender];
        uint256 readIdx = _otkReadIndex[msg.sender];
        uint256 remaining = pool.length > readIdx ? pool.length - readIdx : 0;

        if (remaining + prekeys.length > MAX_OPK_POOL_SIZE) {
            revert PoolCapacityExceeded();
        }

        // Compact pool if it's been consumed
        if (readIdx > 0 && remaining == 0) {
            delete _otkPool[msg.sender];
            _otkReadIndex[msg.sender] = 0;
        }

        uint256 storedCount = 0;
        for (uint256 i = 0; i < prekeys.length; i++) {
            if (prekeys[i] != bytes32(0)) {
                pool.push(prekeys[i]);
                storedCount++;
            }
        }

        emit OneTimePrekeysUploaded(msg.sender, uint64(storedCount));
    }

    /**
     * @notice Check if address has registered keys
     * @param owner The address to check
     * @return True if registered
     */
    function hasKeys(address owner) external view returns (bool) {
        return _identityKeys[owner].identityKey != bytes32(0);
    }

    /**
     * @notice Get prekey bundle without consuming OPK
     * @param owner The bundle owner
     * @return The prekey bundle
     */
    function getPrekeyBundle(address owner) external view returns (PrekeyBundle memory) {
        return _buildBundleView(owner);
    }

    /**
     * @notice Batch get prekey bundles without consuming OPKs
     * @param owners Array of addresses
     * @return Array of prekey bundles
     */
    function getPrekeyBundles(address[] calldata owners) external view returns (PrekeyBundle[] memory) {
        if (owners.length > MAX_BATCH_QUERY_SIZE) {
            revert BatchTooLarge();
        }

        PrekeyBundle[] memory bundles = new PrekeyBundle[](owners.length);
        for (uint256 i = 0; i < owners.length; i++) {
            bundles[i] = _buildBundleView(owners[i]);
        }
        return bundles;
    }

    /**
     * @notice Get prekey bundle AND consume one OPK atomically
     * @param owner The bundle owner
     * @return The prekey bundle (with consumed OPK)
     */
    function fetchPrekeyBundle(address owner) external returns (PrekeyBundle memory) {
        if (owner == address(0)) {
            revert ZeroAddress();
        }

        PrekeyBundle memory bundle = _buildBundleConsume(owner);

        // Emit event if OPK was consumed
        if (bundle.oneTimePrekey != bytes32(0)) {
            emit OneTimePrekeyConsumed(owner, msg.sender);
        }

        return bundle;
    }

    /**
     * @notice Get remaining OPK count
     * @param owner The address to check
     * @return Number of remaining OPKs
     */
    function getOtkCount(address owner) external view returns (uint64) {
        bytes32[] storage pool = _otkPool[owner];
        uint256 readIdx = _otkReadIndex[owner];
        return pool.length > readIdx ? uint64(pool.length - readIdx) : 0;
    }

    // ============ Internal Functions ============

    /**
     * @dev Build bundle without consuming OPK (view)
     */
    function _buildBundleView(address owner) internal view returns (PrekeyBundle memory) {
        IdentityKeyData storage ikData = _identityKeys[owner];
        SignedPrekeyData storage spkData = _signedPrekeys[owner];

        bytes32 otk = bytes32(0);
        uint64 remaining = 0;

        if (ikData.identityKey != bytes32(0)) {
            bytes32[] storage pool = _otkPool[owner];
            uint256 readIdx = _otkReadIndex[owner];
            remaining = pool.length > readIdx ? uint64(pool.length - readIdx) : 0;

            if (remaining > 0) {
                otk = pool[readIdx];
            }
        }

        return PrekeyBundle({
            owner: owner,
            identityKey: ikData.identityKey,
            signedPrekey: spkData.signedPrekey,
            spkSignature: spkData.spkSignature,
            spkId: spkData.spkId,
            spkTimestamp: spkData.updatedAt,
            oneTimePrekey: otk,
            otkRemaining: remaining
        });
    }

    /**
     * @dev Build bundle and consume OPK (state-changing)
     */
    function _buildBundleConsume(address owner) internal returns (PrekeyBundle memory) {
        IdentityKeyData storage ikData = _identityKeys[owner];
        SignedPrekeyData storage spkData = _signedPrekeys[owner];

        bytes32 otk = bytes32(0);
        uint64 remaining = 0;

        if (ikData.identityKey != bytes32(0)) {
            bytes32[] storage pool = _otkPool[owner];
            uint256 readIdx = _otkReadIndex[owner];
            remaining = pool.length > readIdx ? uint64(pool.length - readIdx) : 0;

            if (remaining > 0) {
                // Try to acquire lock
                if (_otkLock[owner]) {
                    // Already locked, return without OPK
                    otk = bytes32(0);
                } else {
                    _otkLock[owner] = true;

                    otk = pool[readIdx];
                    _otkReadIndex[owner] = readIdx + 1;
                    remaining--;

                    _otkLock[owner] = false;
                }
            }
        }

        return PrekeyBundle({
            owner: owner,
            identityKey: ikData.identityKey,
            signedPrekey: spkData.signedPrekey,
            spkSignature: spkData.spkSignature,
            spkId: spkData.spkId,
            spkTimestamp: spkData.updatedAt,
            oneTimePrekey: otk,
            otkRemaining: remaining
        });
    }
}
