// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/**
 * @title DocumentAccessManagement
 * @author Your Team
 * @notice Manages document access control with encrypted shares and time-based permissions
 * @dev Implements a hierarchical permission system for document management with support for
 *      encrypted key sharing, permission expiration, and ownership transfers.
 *      Permission hierarchy: NONE < VIEW < COMMENT < EDIT < ADMIN
 */
contract DocumentAccessManagement {
    /*//////////////////////////////////////////////////////////////
                                 TYPES
    //////////////////////////////////////////////////////////////*/

    struct Document {
        address owner;
        uint64 createdAt;
        uint64 lastUpdatedAt;
        bytes32 contentHash;
        bytes ipfsCid;
        address publicKey; // Public key for "anyone with the link" access via signature verification
    }

    struct Permission {
        uint8 level;
        uint64 expiresAt;
        uint64 grantedAt;
        address grantedBy;
    }

    struct UserKeys {
        bytes32 encryptionKey;
        bytes32 signingKey;
        address sessionKey;
        uint64 registeredAt;
    }

    /*//////////////////////////////////////////////////////////////
                                CONSTANTS
    //////////////////////////////////////////////////////////////*/

    uint8 public constant PERMISSION_NONE = 0;
    uint8 public constant PERMISSION_VIEW = 1;
    uint8 public constant PERMISSION_COMMENT = 2;
    uint8 public constant PERMISSION_EDIT = 3;
    uint8 public constant PERMISSION_ADMIN = 4;

    /*//////////////////////////////////////////////////////////////
                                 ERRORS
    //////////////////////////////////////////////////////////////*/

    error DocumentAccessManagement__DocumentAlreadyExists();
    error DocumentAccessManagement__DocumentDoesNotExist();
    error DocumentAccessManagement__IPFSCIDTooLong();
    error DocumentAccessManagement__InvalidPermissionLevel();
    error DocumentAccessManagement__InvalidEncryptedShareSize();
    error DocumentAccessManagement__InsufficientPermission();
    error DocumentAccessManagement__CannotRevokeOwnerPermission();
    error DocumentAccessManagement__OnlyOwnerCanTransfer();
    error DocumentAccessManagement__InvalidNewOwner();
    error DocumentAccessManagement__InvalidSignature();
    error DocumentAccessManagement__Unauthorized();

    /*//////////////////////////////////////////////////////////////
                                STORAGE
    //////////////////////////////////////////////////////////////*/

    mapping(bytes32 => Document) private s_documents;
    mapping(bytes32 => mapping(address => Permission)) private s_permissions;
    mapping(bytes32 => mapping(address => bytes)) private s_encryptedShares;
    mapping(address => UserKeys) private s_userKeys;

    // Track all documents accessible to each user (owned or shared)
    mapping(address => bytes32[]) private s_userDocuments;

    // Track all users who have access to each document
    mapping(bytes32 => address[]) private s_documentUsers;

    /*//////////////////////////////////////////////////////////////
                                 EVENTS
    //////////////////////////////////////////////////////////////*/

    /**
     * @dev Emitted when a new document is created
     * @param docId Unique document identifier
     * @param owner Address of the document owner
     * @param contentHash Hash of the document content
     * @param createdAt Timestamp of creation
     * @param ipfsCid IPFS Content Identifier
     */
    event DocumentCreated(
        bytes32 indexed docId,
        address owner,
        bytes32 contentHash,
        uint64 createdAt,
        bytes ipfsCid
    );

    /**
     * @dev Emitted when a document is updated
     * @param docId Document identifier
     * @param newContentHash Updated content hash
     * @param newIpfsCid Updated IPFS CID
     */
    event DocumentUpdated(
        bytes32 indexed docId,
        bytes32 newContentHash,
        bytes newIpfsCid
    );

    /**
     * @dev Emitted when access is granted to a user
     * @param docId Document identifier
     * @param user Address receiving access
     * @param permission Permission level granted
     * @param expiresAt Expiration timestamp (0 for no expiration)
     * @param grantedBy Address that granted the permission
     */
    event AccessGranted(
        bytes32 indexed docId,
        address indexed user,
        uint8 permission,
        uint64 expiresAt,
        address grantedBy
    );

    /**
     * @dev Emitted when access is revoked from a user
     * @param docId Document identifier
     * @param user Address losing access
     * @param revokedBy Address that revoked the permission
     */
    event AccessRevoked(
        bytes32 indexed docId,
        address indexed user,
        address revokedBy
    );

    /**
     * @dev Emitted when document ownership is transferred
     * @param docId Document identifier
     * @param previousOwner Previous owner address
     * @param newOwner New owner address
     */
    event OwnershipTransferred(
        bytes32 indexed docId,
        address indexed previousOwner,
        address indexed newOwner
    );

    /**
     * @dev Emitted when a user registers their encryption, signing, and session keys
     * @param user Address of the user registering keys
     * @param encryptionKey Public encryption key
     * @param signingKey Public signing key
     * @param sessionKey Session key address for browser-based signing
     * @param registeredAt Timestamp of registration
     */
    event KeysRegistered(
        address indexed user,
        bytes32 encryptionKey,
        bytes32 signingKey,
        address sessionKey,
        uint64 registeredAt
    );

    /**
     * @dev Emitted when public access is configured for a document
     * @param docId Document identifier
     * @param publicKey Public key address for signature verification
     */
    event PublicAccessConfigured(bytes32 indexed docId, address publicKey);

    /**
     * @dev Emitted when a document is removed
     * @param docId Document identifier
     * @param owner Address that removed the document (must be owner)
     */
    event DocumentRemoved(bytes32 indexed docId, address indexed owner);

    /*//////////////////////////////////////////////////////////////
                               MODIFIERS
    //////////////////////////////////////////////////////////////*/

    /**
     * @dev Ensures the document exists
     * @param docId Document identifier to check
     */
    modifier documentExists(bytes32 docId) {
        if (s_documents[docId].owner == address(0))
            revert DocumentAccessManagement__DocumentDoesNotExist();
        _;
    }

    /**
     * @dev Ensures caller has minimum required permission
     * @param docId Document identifier
     * @param minPermission Minimum permission level required
     */
    modifier onlyWithPermission(bytes32 docId, uint8 minPermission) {
        if (checkAccess(docId, msg.sender) < minPermission)
            revert DocumentAccessManagement__InsufficientPermission();
        _;
    }

    /*//////////////////////////////////////////////////////////////
                         INTERNAL FUNCTIONS
    //////////////////////////////////////////////////////////////*/

    /**
     * @dev Verify that a signature was created by the document's public key
     * @param docId Document identifier
     * @param messageHash Hash of the message that was signed
     * @param v ECDSA signature parameter v
     * @param r ECDSA signature parameter r
     * @param s ECDSA signature parameter s
     * @return isValid True if signature is valid
     */
    function _verifyDocumentKeySignature(
        bytes32 docId,
        bytes32 messageHash,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) internal view returns (bool) {
        address signer = ecrecover(messageHash, v, r, s);
        return signer != address(0) && signer == s_documents[docId].publicKey;
    }

    /**
     * @dev Verify that msg.sender is the user's registered session key.
     *      This works because:
     *      1. The session key is registered by the user (trusted)
     *      2. The session key must have the private key to submit the transaction
     *      3. msg.sender is derived from the sr25519 public key via Keccak256
     *
     * @param expectedOwner The user who should own the session key
     * @return isValid True if msg.sender is the expected owner's registered session key
     */
    function _verifySessionKey(
        address expectedOwner
    ) internal view returns (bool isValid) {
        address registeredSessionKey = s_userKeys[expectedOwner].sessionKey;
        return
            registeredSessionKey != address(0) &&
            msg.sender == registeredSessionKey;
    }

    /**
     * @dev Remove a document from user's documents array
     * @param user User address
     * @param docId Document to remove
     */
    function _removeFromUserDocuments(address user, bytes32 docId) internal {
        bytes32[] storage docs = s_userDocuments[user];
        for (uint256 i = 0; i < docs.length; i++) {
            if (docs[i] == docId) {
                docs[i] = docs[docs.length - 1];
                docs.pop();
                break;
            }
        }
    }

    /**
     * @dev Add a user to document's users array if not already present
     * @param docId Document identifier
     * @param user User address to add
     */
    function _addToDocumentUsers(bytes32 docId, address user) internal {
        address[] storage users = s_documentUsers[docId];

        // Check if user already exists
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i] == user) {
                return; // Already exists
            }
        }

        users.push(user);
    }

    /**
     * @dev Remove a user from document's users array
     * @param docId Document identifier
     * @param user User address to remove
     */
    function _removeFromDocumentUsers(bytes32 docId, address user) internal {
        address[] storage users = s_documentUsers[docId];
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i] == user) {
                users[i] = users[users.length - 1];
                users.pop();
                break;
            }
        }
    }

    /*//////////////////////////////////////////////////////////////
                          EXTERNAL FUNCTIONS
    //////////////////////////////////////////////////////////////*/

    /**
     * @notice Create a new document with content hash and IPFS CID
     * @dev Creates document, sets owner with ADMIN permission.
     *      When using session key signing, owner is the wallet's H160 address,
     *      not msg.sender (which would be the session key's mapped address).
     * @param docId Unique document identifier
     * @param contentHash Hash of the document content
     * @param ipfsCid IPFS Content Identifier for the document
     * @param owner The address that will own the document
     */
    function createDocument(
        bytes32 docId,
        bytes32 contentHash,
        bytes calldata ipfsCid,
        address owner
    ) private {
        if (s_documents[docId].owner != address(0))
            revert DocumentAccessManagement__DocumentAlreadyExists();
        if (ipfsCid.length > 128)
            revert DocumentAccessManagement__IPFSCIDTooLong();

        uint64 timestamp = uint64(block.timestamp);

        // Create document with owner
        s_documents[docId] = Document({
            owner: owner,
            createdAt: timestamp,
            lastUpdatedAt: timestamp,
            contentHash: contentHash,
            ipfsCid: ipfsCid,
            publicKey: address(0)
        });

        // Grant owner ADMIN permission
        s_permissions[docId][owner] = Permission({
            level: PERMISSION_ADMIN,
            expiresAt: 0,
            grantedAt: timestamp,
            grantedBy: owner
        });

        // Track document for user
        s_userDocuments[owner].push(docId);

        // Track user for document
        _addToDocumentUsers(docId, owner);

        emit DocumentCreated(docId, owner, contentHash, timestamp, ipfsCid);
    }

    /**
     * @notice Update document content hash and IPFS CID, or create if it doesn't exist
     * @dev Creates document if it doesn't exist, otherwise requires EDIT permission or higher.
     *      Supports three access modes:
     *      1. Session key (sessionOwner != address(0)): msg.sender must be sessionOwner's registered session key
     *      2. Link-based (sessionOwner == address(0), messageHash != 0): signature must verify against doc's public key
     *      3. Permission-based (sessionOwner == address(0), messageHash == 0): msg.sender must have EDIT permission
     * @param docId Document identifier
     * @param contentHash New content hash
     * @param ipfsCid New IPFS CID
     * @param sessionOwner Owner of the session key (address(0) to skip session key verification)
     * @param messageHash Hash for link-based signature verification (0x0 if not using link access)
     * @param v ECDSA signature parameter v (for link-based access)
     * @param r ECDSA signature parameter r (for link-based access)
     * @param s ECDSA signature parameter s (for link-based access)
     */
    function updateDocument(
        bytes32 docId,
        bytes32 contentHash,
        bytes calldata ipfsCid,
        address sessionOwner,
        bytes32 messageHash,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external {
        if (ipfsCid.length > 128)
            revert DocumentAccessManagement__IPFSCIDTooLong();

        // If document doesn't exist, create it
        if (s_documents[docId].owner == address(0)) {
            // Determine the owner for the new document
            address owner;
            if (sessionOwner != address(0)) {
                // Session key creation: verify msg.sender is registered session key
                if (!_verifySessionKey(sessionOwner)) {
                    revert DocumentAccessManagement__InvalidSignature();
                }
                owner = sessionOwner;
            } else {
                // Permission-based creation: msg.sender becomes owner
                owner = msg.sender;
            }
            createDocument(docId, contentHash, ipfsCid, owner);
            return;
        }

        // Authorization check for existing documents
        if (sessionOwner != address(0)) {
            // Session key access: verify msg.sender is registered session key
            if (!_verifySessionKey(sessionOwner)) {
                revert DocumentAccessManagement__InvalidSignature();
            }
            // Session owner must have EDIT permission
            if (checkAccess(docId, sessionOwner) < PERMISSION_EDIT) {
                revert DocumentAccessManagement__InsufficientPermission();
            }
        } else if (messageHash != bytes32(0)) {
            // Link-based access: verify signature against document's public key
            if (!_verifyDocumentKeySignature(docId, messageHash, v, r, s)) {
                revert DocumentAccessManagement__InvalidSignature();
            }
        } else {
            // Permission-based access: msg.sender must have EDIT permission
            if (checkAccess(docId, msg.sender) < PERMISSION_EDIT) {
                revert DocumentAccessManagement__InsufficientPermission();
            }
        }

        s_documents[docId].contentHash = contentHash;
        s_documents[docId].ipfsCid = ipfsCid;
        s_documents[docId].lastUpdatedAt = uint64(block.timestamp);

        emit DocumentUpdated(docId, contentHash, ipfsCid);
    }

    /**
     * @notice Grant access to a user with encrypted document key
     * @dev Requires ADMIN permission. Stores encrypted share for secure key distribution.
     *      Supports two access modes:
     *      1. Session key (sessionOwner != address(0)): msg.sender must be sessionOwner's registered session key
     *      2. Permission-based (sessionOwner == address(0)): msg.sender must have ADMIN permission
     * @param docId Document identifier
     * @param user User address to grant access to
     * @param permission Permission level to grant (1-4)
     * @param expiresAt Expiration timestamp (0 for no expiration)
     * @param encryptedShare Encrypted document key for the user
     * @param sessionOwner Owner of the session key (address(0) to skip session key verification)
     */
    function grantAccessWithShare(
        bytes32 docId,
        address user,
        uint8 permission,
        uint64 expiresAt,
        bytes calldata encryptedShare,
        address sessionOwner
    ) external documentExists(docId) {
        if (permission == PERMISSION_NONE || permission > PERMISSION_ADMIN) {
            revert DocumentAccessManagement__InvalidPermissionLevel();
        }
        if (encryptedShare.length == 0 || encryptedShare.length > 512) {
            revert DocumentAccessManagement__InvalidEncryptedShareSize();
        }

        // Determine the granter (who is authorizing this action)
        address granter;
        if (sessionOwner != address(0)) {
            // Session key access: verify msg.sender is registered session key
            if (!_verifySessionKey(sessionOwner)) {
                revert DocumentAccessManagement__InvalidSignature();
            }
            if (checkAccess(docId, sessionOwner) < PERMISSION_ADMIN) {
                revert DocumentAccessManagement__InsufficientPermission();
            }
            granter = sessionOwner;
        } else {
            // Permission-based access
            if (checkAccess(docId, msg.sender) < PERMISSION_ADMIN) {
                revert DocumentAccessManagement__InsufficientPermission();
            }
            granter = msg.sender;
        }

        uint64 timestamp = uint64(block.timestamp);

        // Store encrypted share
        s_encryptedShares[docId][user] = encryptedShare;

        // Set permission
        s_permissions[docId][user] = Permission({
            level: permission,
            expiresAt: expiresAt,
            grantedAt: timestamp,
            grantedBy: granter
        });

        // Track document for user (only add if not already tracked)
        // Owner is already tracked from createDocument, so skip if user is owner
        if (user != s_documents[docId].owner) {
            s_userDocuments[user].push(docId);
        }

        // Track user for document
        _addToDocumentUsers(docId, user);

        emit AccessGranted(docId, user, permission, expiresAt, granter);
    }

    /**
     * @notice Revoke access from a user
     * @dev Requires ADMIN permission. Cannot revoke owner's permission.
     *      Supports two access modes:
     *      1. Session key (sessionOwner != address(0)): msg.sender must be sessionOwner's registered session key
     *      2. Permission-based (sessionOwner == address(0)): msg.sender must have ADMIN permission
     * @param docId Document identifier
     * @param user User address to revoke access from
     * @param sessionOwner Owner of the session key (address(0) to skip session key verification)
     */
    function revokeAccess(
        bytes32 docId,
        address user,
        address sessionOwner
    ) external documentExists(docId) {
        if (user == s_documents[docId].owner)
            revert DocumentAccessManagement__CannotRevokeOwnerPermission();

        // Determine the revoker (who is authorizing this action)
        address revoker;
        if (sessionOwner != address(0)) {
            // Session key access: verify msg.sender is registered session key
            if (!_verifySessionKey(sessionOwner)) {
                revert DocumentAccessManagement__InvalidSignature();
            }
            if (checkAccess(docId, sessionOwner) < PERMISSION_ADMIN) {
                revert DocumentAccessManagement__InsufficientPermission();
            }
            revoker = sessionOwner;
        } else {
            // Permission-based access
            if (checkAccess(docId, msg.sender) < PERMISSION_ADMIN) {
                revert DocumentAccessManagement__InsufficientPermission();
            }
            revoker = msg.sender;
        }

        s_permissions[docId][user].level = PERMISSION_NONE;
        delete s_encryptedShares[docId][user];

        // Remove from user's documents
        _removeFromUserDocuments(user, docId);

        // Remove from document's users
        _removeFromDocumentUsers(docId, user);

        emit AccessRevoked(docId, user, revoker);
    }

    /**
     * @notice Transfer document ownership to a new address
     * @dev Only current owner can transfer. New owner receives ADMIN permission.
     *      Supports two access modes:
     *      1. Session key (sessionOwner != address(0)): msg.sender must be sessionOwner's registered session key
     *      2. Permission-based (sessionOwner == address(0)): msg.sender must be document owner
     * @param docId Document identifier
     * @param newOwner New owner address
     * @param sessionOwner Owner of the session key (address(0) to skip session key verification)
     */
    function transferOwnership(
        bytes32 docId,
        address newOwner,
        address sessionOwner
    ) external documentExists(docId) {
        if (newOwner == address(0))
            revert DocumentAccessManagement__InvalidNewOwner();

        // Determine the transferer (who is authorizing this action)
        address transferer;
        if (sessionOwner != address(0)) {
            // Session key access: verify msg.sender is registered session key
            if (!_verifySessionKey(sessionOwner)) {
                revert DocumentAccessManagement__InvalidSignature();
            }
            if (sessionOwner != s_documents[docId].owner) {
                revert DocumentAccessManagement__OnlyOwnerCanTransfer();
            }
            transferer = sessionOwner;
        } else {
            // Permission-based access
            if (msg.sender != s_documents[docId].owner) {
                revert DocumentAccessManagement__OnlyOwnerCanTransfer();
            }
            transferer = msg.sender;
        }

        address previousOwner = s_documents[docId].owner;
        uint64 timestamp = uint64(block.timestamp);

        // Update owner
        s_documents[docId].owner = newOwner;

        // Grant new owner ADMIN permission
        s_permissions[docId][newOwner] = Permission({
            level: PERMISSION_ADMIN,
            expiresAt: 0,
            grantedAt: timestamp,
            grantedBy: transferer
        });

        // Update document tracking
        _removeFromUserDocuments(previousOwner, docId);
        // New owner might already have access (shared), so check before adding
        bool alreadyTracked = false;
        bytes32[] storage newOwnerDocs = s_userDocuments[newOwner];
        for (uint256 i = 0; i < newOwnerDocs.length; i++) {
            if (newOwnerDocs[i] == docId) {
                alreadyTracked = true;
                break;
            }
        }
        if (!alreadyTracked) {
            s_userDocuments[newOwner].push(docId);
        }

        emit OwnershipTransferred(docId, previousOwner, newOwner);
    }

    /**
     * @notice Register encryption, signing, and session keys for the caller
     * @dev Allows registration of public keys for encrypted document sharing
     *      and a session key for browser-based signing without wallet popups.
     *      Uses msg.sender as the owner - caller registers their own keys.
     *      For updates, only the registered session key or the original caller can modify keys.
     * @param encryptionKey Public encryption key (bytes32)
     * @param signingKey Public signing key (bytes32)
     * @param sessionKey Session key address for browser-based signing (address(0) to disable)
     */
    function registerKeys(
        bytes32 encryptionKey,
        bytes32 signingKey,
        address sessionKey
    ) external {
        // Since we use s_userKeys[msg.sender], the caller is implicitly the owner
        // of these keys. They can always update their own keys.
        // No authorization check needed - you can only modify your own keys.
        uint64 timestamp = uint64(block.timestamp);

        s_userKeys[msg.sender] = UserKeys({
            encryptionKey: encryptionKey,
            signingKey: signingKey,
            sessionKey: sessionKey,
            registeredAt: timestamp
        });

        emit KeysRegistered(
            msg.sender,
            encryptionKey,
            signingKey,
            sessionKey,
            timestamp
        );
    }

    /**
     * @notice Configure public access for a document by setting its public key
     * @dev Only document owner or admin can configure public access.
     *      The public key will be used to verify signatures for "anyone with the link" access.
     *      Supports two access modes:
     *      1. Session key (sessionOwner != address(0)): msg.sender must be sessionOwner's registered session key
     *      2. Permission-based (sessionOwner == address(0)): msg.sender must have ADMIN permission
     * @param docId Document identifier
     * @param publicKey Public key address for signature verification (address derived from the key pair)
     * @param sessionOwner Owner of the session key (address(0) to skip session key verification)
     */
    function configurePublicAccess(
        bytes32 docId,
        address publicKey,
        address sessionOwner
    ) external documentExists(docId) {
        if (sessionOwner != address(0)) {
            // Session key access: verify msg.sender is registered session key
            if (!_verifySessionKey(sessionOwner)) {
                revert DocumentAccessManagement__InvalidSignature();
            }
            if (checkAccess(docId, sessionOwner) < PERMISSION_ADMIN) {
                revert DocumentAccessManagement__InsufficientPermission();
            }
        } else {
            // Permission-based access
            if (checkAccess(docId, msg.sender) < PERMISSION_ADMIN) {
                revert DocumentAccessManagement__InsufficientPermission();
            }
        }

        s_documents[docId].publicKey = publicKey;
        emit PublicAccessConfigured(docId, publicKey);
    }

    /**
     * @notice Remove a document and revoke all associated permissions
     * @dev Only document owner can remove. Deletes document data and revokes all user access.
     *      Supports two access modes:
     *      1. Session key (sessionOwner != address(0)): msg.sender must be sessionOwner's registered session key
     *      2. Permission-based (sessionOwner == address(0)): msg.sender must be document owner
     * @param docId Document identifier to remove
     * @param sessionOwner Owner of the session key (address(0) to skip session key verification)
     */
    function removeDocument(
        bytes32 docId,
        address sessionOwner
    ) external documentExists(docId) {
        // Determine the remover (who is authorizing this action)
        address remover;
        if (sessionOwner != address(0)) {
            // Session key access: verify msg.sender is registered session key
            if (!_verifySessionKey(sessionOwner)) {
                revert DocumentAccessManagement__InvalidSignature();
            }
            if (sessionOwner != s_documents[docId].owner) {
                revert DocumentAccessManagement__OnlyOwnerCanTransfer();
            }
            remover = sessionOwner;
        } else {
            // Permission-based access
            if (msg.sender != s_documents[docId].owner) {
                revert DocumentAccessManagement__OnlyOwnerCanTransfer();
            }
            remover = msg.sender;
        }

        // Get all users who have access
        address[] memory users = s_documentUsers[docId];

        // Revoke access and clean up for all users
        for (uint256 i = 0; i < users.length; i++) {
            address user = users[i];
            // Clean up permissions and encrypted shares
            delete s_permissions[docId][user];
            delete s_encryptedShares[docId][user];
            // Remove from user's documents
            _removeFromUserDocuments(user, docId);
        }

        // Delete document users array
        delete s_documentUsers[docId];

        // Delete the document itself
        delete s_documents[docId];

        emit AccessRevoked(docId, remover, remover);
    }

    /*//////////////////////////////////////////////////////////////
                       EXTERNAL VIEW FUNCTIONS
    //////////////////////////////////////////////////////////////*/

    /**
     * @notice Check if user has at least the specified permission level
     * @param docId Document identifier
     * @param user User address to check
     * @param minPermission Minimum required permission level
     * @return hasPermission_ True if user has sufficient permission
     */
    function hasPermission(
        bytes32 docId,
        address user,
        uint8 minPermission
    ) external view returns (bool hasPermission_) {
        return checkAccess(docId, user) >= minPermission;
    }

    /**
     * @notice Get document owner address
     * @param docId Document identifier
     * @return owner_ Owner address
     */
    function getOwner(bytes32 docId) external view returns (address owner_) {
        return s_documents[docId].owner;
    }

    /**
     * @notice Get permission details for a user
     * @dev Returns current permission level considering expiration
     * @param docId Document identifier
     * @param user User address
     * @return level Current permission level
     * @return expiresAt Expiration timestamp
     * @return grantedAt Grant timestamp
     * @return grantedBy Address that granted the permission
     */
    function getPermissionDetails(
        bytes32 docId,
        address user
    )
        external
        view
        returns (
            uint8 level,
            uint64 expiresAt,
            uint64 grantedAt,
            address grantedBy
        )
    {
        uint8 currentLevel = checkAccess(docId, user);
        Permission memory perm = s_permissions[docId][user];

        return (currentLevel, perm.expiresAt, perm.grantedAt, perm.grantedBy);
    }

    /**
     * @notice Get encrypted share for a user
     * @dev Requires VIEW permission or higher
     * @param docId Document identifier
     * @param user User address
     * @return encryptedShare_ Encrypted share data
     */
    function getEncryptedShare(
        bytes32 docId,
        address user
    ) external view returns (bytes memory encryptedShare_) {
        if (checkAccess(docId, user) < PERMISSION_VIEW)
            revert DocumentAccessManagement__InsufficientPermission();
        return s_encryptedShares[docId][user];
    }

    /**
     * @notice Verify if content hash matches stored hash
     * @param docId Document identifier
     * @param hash Hash to verify
     * @return isValid True if hash matches
     */
    function verifyContentHash(
        bytes32 docId,
        bytes32 hash
    ) external view returns (bool isValid) {
        return s_documents[docId].contentHash == hash;
    }

    /**
     * @notice Get all document information
     * @param docId Document identifier
     * @return owner_ Document owner
     * @return createdAt Creation timestamp
     * @return lastUpdatedAt Last update timestamp
     * @return contentHash Content hash
     * @return ipfsCid IPFS CID
     * @return publicKey Public key for signature verification (address(0) if not configured)
     */
    function getDocumentDetails(
        bytes32 docId
    )
        external
        view
        returns (
            address owner_,
            uint64 createdAt,
            uint64 lastUpdatedAt,
            bytes32 contentHash,
            bytes memory ipfsCid,
            address publicKey
        )
    {
        Document memory doc = s_documents[docId];
        return (
            doc.owner,
            doc.createdAt,
            doc.lastUpdatedAt,
            doc.contentHash,
            doc.ipfsCid,
            doc.publicKey
        );
    }

    /**
     * @notice Get the public key configured for a document's public access
     * @param docId Document identifier
     * @return publicKey_ Public key address (address(0) if not configured)
     */
    function getPublicKey(
        bytes32 docId
    ) external view returns (address publicKey_) {
        return s_documents[docId].publicKey;
    }

    /*//////////////////////////////////////////////////////////////
                        PUBLIC VIEW FUNCTIONS
    //////////////////////////////////////////////////////////////*/

    /**
     * @notice Check user's current access level
     * @dev Considers permission expiration when determining access level
     * @param docId Document identifier
     * @param user User address to check
     * @return level Current permission level (0 if expired)
     */
    function checkAccess(
        bytes32 docId,
        address user
    ) public view returns (uint8 level) {
        Permission memory permission = s_permissions[docId][user];

        // Check if permission has expired
        if (
            permission.level > PERMISSION_NONE &&
            permission.expiresAt > 0 &&
            block.timestamp > permission.expiresAt
        ) {
            return PERMISSION_NONE;
        }

        return permission.level;
    }

    /**
     * @notice Get the encryption key for a user
     * @dev Returns zero bytes32 if user hasn't registered keys
     * @param user User address to query
     * @return encryptionKey_ User's encryption key
     */
    function getEncryptionKey(
        address user
    ) external view returns (bytes32 encryptionKey_) {
        return s_userKeys[user].encryptionKey;
    }

    /**
     * @notice Get the signing key for a user
     * @dev Returns zero bytes32 if user hasn't registered keys
     * @param user User address to query
     * @return signingKey_ User's signing key
     */
    function getSigningKey(
        address user
    ) external view returns (bytes32 signingKey_) {
        return s_userKeys[user].signingKey;
    }

    /**
     * @notice Check if a user has registered keys
     * @param user User address to check
     * @return hasKeys_ True if user has registered keys
     */
    function hasKeys(address user) external view returns (bool hasKeys_) {
        return s_userKeys[user].registeredAt > 0;
    }

    /**
     * @notice Get all keys and registration timestamp for a user
     * @dev Returns all zero values if user hasn't registered keys
     * @param user User address to query
     * @return encryptionKey_ User's encryption key
     * @return signingKey_ User's signing key
     * @return sessionKey_ User's session key address
     * @return registeredAt_ Timestamp when keys were registered
     */
    function getKeys(
        address user
    )
        external
        view
        returns (
            bytes32 encryptionKey_,
            bytes32 signingKey_,
            address sessionKey_,
            uint64 registeredAt_
        )
    {
        UserKeys memory keys = s_userKeys[user];
        return (
            keys.encryptionKey,
            keys.signingKey,
            keys.sessionKey,
            keys.registeredAt
        );
    }

    /**
     * @notice Verify that a session key belongs to a specific user
     * @param user User address to check
     * @param sessionKey Session key address to verify
     * @return isValid_ True if the session key is registered to the user
     */
    function verifySessionKey(
        address user,
        address sessionKey
    ) external view returns (bool isValid_) {
        return
            s_userKeys[user].sessionKey == sessionKey &&
            sessionKey != address(0);
    }

    /**
     * @notice Get all document IDs accessible by a user (owned or shared)
     * @param user User address to query
     * @return docIds_ Array of all accessible document IDs
     */
    function getUserDocuments(
        address user
    ) external view returns (bytes32[] memory docIds_) {
        return s_userDocuments[user];
    }

    /**
     * @notice Get all document IDs owned by a user
     * @param user User address to query
     * @return docIds_ Array of document IDs owned by the user
     */
    function getOwnedDocuments(
        address user
    ) external view returns (bytes32[] memory docIds_) {
        bytes32[] memory allDocs = s_userDocuments[user];
        uint256 ownedCount = 0;

        // Count owned documents
        for (uint256 i = 0; i < allDocs.length; i++) {
            if (s_documents[allDocs[i]].owner == user) {
                ownedCount++;
            }
        }

        // Create array of owned documents
        bytes32[] memory owned = new bytes32[](ownedCount);
        uint256 index = 0;
        for (uint256 i = 0; i < allDocs.length; i++) {
            if (s_documents[allDocs[i]].owner == user) {
                owned[index] = allDocs[i];
                index++;
            }
        }

        return owned;
    }

    /**
     * @notice Get all document IDs shared with a user (not owned)
     * @param user User address to query
     * @return docIds_ Array of document IDs shared with the user
     */
    function getSharedDocuments(
        address user
    ) external view returns (bytes32[] memory docIds_) {
        bytes32[] memory allDocs = s_userDocuments[user];
        uint256 sharedCount = 0;

        // Count shared documents
        for (uint256 i = 0; i < allDocs.length; i++) {
            if (s_documents[allDocs[i]].owner != user) {
                sharedCount++;
            }
        }

        // Create array of shared documents
        bytes32[] memory shared = new bytes32[](sharedCount);
        uint256 index = 0;
        for (uint256 i = 0; i < allDocs.length; i++) {
            if (s_documents[allDocs[i]].owner != user) {
                shared[index] = allDocs[i];
                index++;
            }
        }

        return shared;
    }

    /**
     * @notice Get all users who have access to a document
     * @param docId Document identifier
     * @return users_ Array of user addresses with access to the document
     */
    function getDocumentUsers(
        bytes32 docId
    ) external view returns (address[] memory users_) {
        return s_documentUsers[docId];
    }

    /**
     * @notice Get all users with their permission details for a document
     * @param docId Document identifier
     * @return users_ Array of user addresses
     * @return permissions_ Array of permission levels (aligned with users_)
     * @return expiresAt_ Array of expiration timestamps (aligned with users_)
     */
    function getDocumentUsersWithPermissions(
        bytes32 docId
    )
        external
        view
        returns (
            address[] memory users_,
            uint8[] memory permissions_,
            uint64[] memory expiresAt_
        )
    {
        address[] memory users = s_documentUsers[docId];
        uint8[] memory permissions = new uint8[](users.length);
        uint64[] memory expirations = new uint64[](users.length);

        for (uint256 i = 0; i < users.length; i++) {
            permissions[i] = checkAccess(docId, users[i]);
            expirations[i] = s_permissions[docId][users[i]].expiresAt;
        }

        return (users, permissions, expirations);
    }
}
