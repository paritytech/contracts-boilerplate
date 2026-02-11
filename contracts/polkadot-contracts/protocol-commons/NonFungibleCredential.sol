// Sources flattened with hardhat v2.28.3 https://hardhat.org

// SPDX-License-Identifier: GPL-3.0-only

// File src/interfaces/INonFungibleCredential.sol

// Original license: SPDX_License_Identifier: GPL-3.0-only
pragma solidity ^0.8.24;

/**
 * @title INonFungibleCredential
 * @notice Canonical interface for the NonFungibleCredential primitive
 * @dev Individual tokens representing tickets, badges, roles, receipts, etc.
 */
interface INonFungibleCredential {
    // ============ Structs ============
    struct Credential {
        uint64 id;
        address issuer;
        address holder;
        string credentialClass;
        bytes32 metadataCid;
        bool transferable;
        bool revoked;
        uint64 expiry;
        uint64 issuedAt;
    }

    // ============ Events ============
    event CredentialIssued(
        uint64 indexed id,
        address indexed issuer,
        address indexed holder,
        string credentialClass
    );
    event CredentialTransferred(uint64 indexed id, address indexed from, address indexed to);
    event CredentialRevoked(uint64 indexed id, address indexed issuer);
    event MetadataUpdated(uint64 indexed id, bytes32 metadataCid);

    // ============ Functions ============

    /**
     * @notice Issue a new credential
     * @param to The recipient
     * @param credentialClass The credential class/type
     * @param metadataCid The metadata CID
     * @param transferable Whether the credential can be transferred
     * @param expiry Expiration timestamp (0 = no expiry)
     * @return The new credential ID
     */
    function issue(
        address to,
        string calldata credentialClass,
        bytes32 metadataCid,
        bool transferable,
        uint64 expiry
    ) external returns (uint64);

    /**
     * @notice Transfer a credential to a new holder
     * @param id The credential ID
     * @param to The new holder
     */
    function transfer(uint64 id, address to) external;

    /**
     * @notice Revoke a credential
     * @param id The credential ID
     */
    function revoke(uint64 id) external;

    /**
     * @notice Update metadata CID
     * @param id The credential ID
     * @param metadataCid The new metadata CID
     */
    function updateMetadata(uint64 id, bytes32 metadataCid) external;

    /**
     * @notice Get credential by ID
     * @param id The credential ID
     * @return The credential
     */
    function get(uint64 id) external view returns (Credential memory);

    /**
     * @notice List credentials by holder
     * @param holder The holder address
     * @return Array of credential IDs
     */
    function listByHolder(address holder) external view returns (uint64[] memory);

    /**
     * @notice List credentials by issuer
     * @param issuer The issuer address
     * @return Array of credential IDs
     */
    function listByIssuer(address issuer) external view returns (uint64[] memory);

    /**
     * @notice Check if a credential is valid (not revoked, not expired)
     * @param id The credential ID
     * @return True if valid
     */
    function isValid(uint64 id) external view returns (bool);

    /**
     * @notice Check if holder has a valid credential of a class
     * @param holder The holder address
     * @param credentialClass The credential class
     * @return True if holder has valid credential
     */
    function holdsValidCredential(address holder, string calldata credentialClass) external view returns (bool);

    /**
     * @notice List credentials by holder and class
     * @param holder The holder address
     * @param credentialClass The credential class
     * @return Array of credential IDs
     */
    function listByHolderAndClass(address holder, string calldata credentialClass)
        external
        view
        returns (uint64[] memory);

    /**
     * @notice List credentials by holder with pagination
     * @param holder The holder address
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of credential IDs
     */
    function listByHolder(address holder, uint64 offset, uint64 limit) external view returns (uint64[] memory);

    /**
     * @notice List credentials by issuer with pagination
     * @param issuer The issuer address
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of credential IDs
     */
    function listByIssuer(address issuer, uint64 offset, uint64 limit) external view returns (uint64[] memory);

    /**
     * @notice List credentials by holder and class with pagination
     * @param holder The holder address
     * @param credentialClass The credential class
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of credential IDs
     */
    function listByHolderAndClass(address holder, string calldata credentialClass, uint64 offset, uint64 limit)
        external
        view
        returns (uint64[] memory);

    /**
     * @notice Count credentials by holder
     * @param holder The holder address
     * @return Number of credentials
     */
    function countByHolder(address holder) external view returns (uint256);

    /**
     * @notice Count credentials by issuer
     * @param issuer The issuer address
     * @return Number of credentials
     */
    function countByIssuer(address issuer) external view returns (uint256);

    /**
     * @notice Count credentials by holder and class
     * @param holder The holder address
     * @param credentialClass The credential class
     * @return Number of credentials
     */
    function countByHolderAndClass(address holder, string calldata credentialClass) external view returns (uint256);

    /**
     * @notice Issue multiple credentials at once
     * @param to Array of recipient addresses
     * @param credentialClasses Array of credential classes
     * @param metadataCids Array of metadata CIDs
     * @param transferables Array of transferable flags
     * @param expiries Array of expiry timestamps
     * @return Array of new credential IDs
     */
    function issueBatch(
        address[] calldata to,
        string[] calldata credentialClasses,
        bytes32[] calldata metadataCids,
        bool[] calldata transferables,
        uint64[] calldata expiries
    ) external returns (uint64[] memory);
}


// File src/NonFungibleCredential.sol

// Original license: SPDX_License_Identifier: GPL-3.0-only
pragma solidity ^0.8.24;

/**
 * @title NonFungibleCredential
 * @notice Individual tokens representing tickets, badges, roles, receipts
 * @dev See docs/technical-spec.md for full specification
 */
contract NonFungibleCredential is INonFungibleCredential {
    // ============ Errors ============
    error CredentialNotFound();
    error NotCredentialHolder();
    error NotCredentialIssuer();
    error CredentialNotTransferable();
    error CredentialIsRevoked();
    error CredentialExpired();
    error LengthMismatch();
    error BatchTooLarge();

    // ============ Constants ============
    uint256 public constant MAX_BATCH_SIZE = 100;

    // ============ Storage ============
    uint64 private _nextCredentialId = 1;

    // credentialId => Credential
    mapping(uint64 => Credential) private _credentials;

    // holder => credentialIds array
    mapping(address => uint64[]) private _holderCredentials;

    // holder => credentialId => index in _holderCredentials (for O(1) removal)
    mapping(address => mapping(uint64 => uint256)) private _holderCredentialIndex;

    // issuer => credentialIds array
    mapping(address => uint64[]) private _issuerCredentials;

    // holder => class => credentialIds array
    mapping(address => mapping(string => uint64[])) private _holderClassCredentials;

    // holder => class => credentialId => index in _holderClassCredentials (for O(1) removal)
    mapping(address => mapping(string => mapping(uint64 => uint256))) private _holderClassCredentialIndex;

    // ============ External Functions ============

    /**
     * @notice Issue a new credential
     * @param to The holder address
     * @param credentialClass The credential class/type
     * @param metadataCid The metadata CID
     * @param transferable Whether the credential can be transferred
     * @param expiry Expiry timestamp (0 for no expiry)
     * @return The new credential ID
     */
    function issue(
        address to,
        string calldata credentialClass,
        bytes32 metadataCid,
        bool transferable,
        uint64 expiry
    ) external returns (uint64) {
        uint64 credentialId = _nextCredentialId++;

        _credentials[credentialId] = Credential({
            id: credentialId,
            issuer: msg.sender,
            holder: to,
            credentialClass: credentialClass,
            metadataCid: metadataCid,
            transferable: transferable,
            revoked: false,
            expiry: expiry,
            issuedAt: uint64(block.timestamp)
        });

        // Track holder credential with index for O(1) removal
        _holderCredentialIndex[to][credentialId] = _holderCredentials[to].length;
        _holderCredentials[to].push(credentialId);

        _issuerCredentials[msg.sender].push(credentialId);

        // Track holder class credential with index for O(1) removal
        _holderClassCredentialIndex[to][credentialClass][credentialId] = _holderClassCredentials[to][credentialClass].length;
        _holderClassCredentials[to][credentialClass].push(credentialId);

        emit CredentialIssued(credentialId, msg.sender, to, credentialClass);

        return credentialId;
    }

    /**
     * @notice Transfer a credential to a new holder
     * @param id The credential ID
     * @param to The new holder address
     */
    function transfer(uint64 id, address to) external {
        Credential storage credential = _credentials[id];
        if (credential.id == 0) {
            revert CredentialNotFound();
        }
        if (msg.sender != credential.holder) {
            revert NotCredentialHolder();
        }
        if (!credential.transferable) {
            revert CredentialNotTransferable();
        }
        if (credential.revoked) {
            revert CredentialIsRevoked();
        }
        if (credential.expiry != 0 && block.timestamp > credential.expiry) {
            revert CredentialExpired();
        }

        address from = credential.holder;
        string memory credClass = credential.credentialClass;
        credential.holder = to;

        // Remove from old holder's list using O(1) indexed removal
        _removeFromHolderCredentials(from, id);
        _removeFromHolderClassCredentials(from, credClass, id);

        // Add to new holder's list with index tracking
        _holderCredentialIndex[to][id] = _holderCredentials[to].length;
        _holderCredentials[to].push(id);

        _holderClassCredentialIndex[to][credClass][id] = _holderClassCredentials[to][credClass].length;
        _holderClassCredentials[to][credClass].push(id);

        emit CredentialTransferred(id, from, to);
    }

    /**
     * @notice Revoke a credential
     * @param id The credential ID
     */
    function revoke(uint64 id) external {
        Credential storage credential = _credentials[id];
        if (credential.id == 0) {
            revert CredentialNotFound();
        }
        if (msg.sender != credential.issuer) {
            revert NotCredentialIssuer();
        }

        credential.revoked = true;

        emit CredentialRevoked(id, msg.sender);
    }

    /**
     * @notice Update metadata CID
     * @param id The credential ID
     * @param metadataCid The new metadata CID
     */
    function updateMetadata(uint64 id, bytes32 metadataCid) external {
        Credential storage credential = _credentials[id];
        if (credential.id == 0) {
            revert CredentialNotFound();
        }
        if (msg.sender != credential.issuer) {
            revert NotCredentialIssuer();
        }

        credential.metadataCid = metadataCid;

        emit MetadataUpdated(id, metadataCid);
    }

    /**
     * @notice Get credential by ID
     * @param id The credential ID
     * @return The credential
     */
    function get(uint64 id) external view returns (Credential memory) {
        Credential storage credential = _credentials[id];
        if (credential.id == 0) {
            revert CredentialNotFound();
        }
        return credential;
    }

    /**
     * @notice List credentials by holder
     * @param holder The holder address
     * @return Array of credential IDs
     */
    function listByHolder(address holder) external view returns (uint64[] memory) {
        return _holderCredentials[holder];
    }

    /**
     * @notice List credentials by issuer
     * @param issuer The issuer address
     * @return Array of credential IDs
     */
    function listByIssuer(address issuer) external view returns (uint64[] memory) {
        return _issuerCredentials[issuer];
    }

    /**
     * @notice List credentials by holder and class
     * @param holder The holder address
     * @param credentialClass The credential class
     * @return Array of credential IDs
     */
    function listByHolderAndClass(address holder, string calldata credentialClass)
        external
        view
        returns (uint64[] memory)
    {
        return _holderClassCredentials[holder][credentialClass];
    }

    /**
     * @notice Check if credential is valid (not revoked, not expired)
     * @param id The credential ID
     * @return True if the credential is valid
     */
    function isValid(uint64 id) external view returns (bool) {
        Credential storage credential = _credentials[id];
        if (credential.id == 0) {
            return false;
        }
        if (credential.revoked) {
            return false;
        }
        if (credential.expiry != 0 && block.timestamp > credential.expiry) {
            return false;
        }
        return true;
    }

    /**
     * @notice Check if an address holds a valid credential of a specific class
     * @param holder The holder address
     * @param credentialClass The credential class
     * @return True if the holder has a valid credential of the class
     */
    function holdsValidCredential(address holder, string calldata credentialClass)
        external
        view
        returns (bool)
    {
        uint64[] storage credIds = _holderClassCredentials[holder][credentialClass];
        for (uint256 i = 0; i < credIds.length; i++) {
            Credential storage cred = _credentials[credIds[i]];
            if (!cred.revoked && (cred.expiry == 0 || block.timestamp <= cred.expiry)) {
                return true;
            }
        }
        return false;
    }

    // ============ Pagination Functions ============

    /**
     * @notice List credentials by holder with pagination
     * @param holder The holder address
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of credential IDs
     */
    function listByHolder(address holder, uint64 offset, uint64 limit) external view returns (uint64[] memory) {
        uint64[] storage allCredentials = _holderCredentials[holder];
        uint256 total = allCredentials.length;

        if (offset >= total) {
            return new uint64[](0);
        }

        uint256 available = total - offset;
        uint256 count = limit < available ? limit : available;

        uint64[] memory result = new uint64[](count);
        for (uint256 i = 0; i < count; i++) {
            result[i] = allCredentials[offset + i];
        }
        return result;
    }

    /**
     * @notice List credentials by issuer with pagination
     * @param issuer The issuer address
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of credential IDs
     */
    function listByIssuer(address issuer, uint64 offset, uint64 limit) external view returns (uint64[] memory) {
        uint64[] storage allCredentials = _issuerCredentials[issuer];
        uint256 total = allCredentials.length;

        if (offset >= total) {
            return new uint64[](0);
        }

        uint256 available = total - offset;
        uint256 count = limit < available ? limit : available;

        uint64[] memory result = new uint64[](count);
        for (uint256 i = 0; i < count; i++) {
            result[i] = allCredentials[offset + i];
        }
        return result;
    }

    /**
     * @notice List credentials by holder and class with pagination
     * @param holder The holder address
     * @param credentialClass The credential class
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of credential IDs
     */
    function listByHolderAndClass(address holder, string calldata credentialClass, uint64 offset, uint64 limit)
        external
        view
        returns (uint64[] memory)
    {
        uint64[] storage allCredentials = _holderClassCredentials[holder][credentialClass];
        uint256 total = allCredentials.length;

        if (offset >= total) {
            return new uint64[](0);
        }

        uint256 available = total - offset;
        uint256 count = limit < available ? limit : available;

        uint64[] memory result = new uint64[](count);
        for (uint256 i = 0; i < count; i++) {
            result[i] = allCredentials[offset + i];
        }
        return result;
    }

    /**
     * @notice Count credentials by holder
     * @param holder The holder address
     * @return Number of credentials
     */
    function countByHolder(address holder) external view returns (uint256) {
        return _holderCredentials[holder].length;
    }

    /**
     * @notice Count credentials by issuer
     * @param issuer The issuer address
     * @return Number of credentials
     */
    function countByIssuer(address issuer) external view returns (uint256) {
        return _issuerCredentials[issuer].length;
    }

    /**
     * @notice Count credentials by holder and class
     * @param holder The holder address
     * @param credentialClass The credential class
     * @return Number of credentials
     */
    function countByHolderAndClass(address holder, string calldata credentialClass) external view returns (uint256) {
        return _holderClassCredentials[holder][credentialClass].length;
    }

    /**
     * @notice Issue multiple credentials at once
     * @param to Array of recipient addresses
     * @param credentialClasses Array of credential classes
     * @param metadataCids Array of metadata CIDs
     * @param transferables Array of transferable flags
     * @param expiries Array of expiry timestamps
     * @return Array of new credential IDs
     */
    function issueBatch(
        address[] calldata to,
        string[] calldata credentialClasses,
        bytes32[] calldata metadataCids,
        bool[] calldata transferables,
        uint64[] calldata expiries
    ) external returns (uint64[] memory) {
        if (
            to.length != credentialClasses.length || to.length != metadataCids.length
                || to.length != transferables.length || to.length != expiries.length
        ) {
            revert LengthMismatch();
        }
        if (to.length > MAX_BATCH_SIZE) {
            revert BatchTooLarge();
        }

        uint64[] memory ids = new uint64[](to.length);

        for (uint256 i = 0; i < to.length; i++) {
            ids[i] = _issueOne(to[i], credentialClasses[i], metadataCids[i], transferables[i], expiries[i]);
        }

        return ids;
    }

    /**
     * @dev Internal function to issue a single credential (reduces stack depth in batch)
     */
    function _issueOne(
        address to,
        string calldata credentialClass,
        bytes32 metadataCid,
        bool transferable,
        uint64 expiry
    ) internal returns (uint64) {
        uint64 credentialId = _nextCredentialId++;

        _credentials[credentialId] = Credential({
            id: credentialId,
            issuer: msg.sender,
            holder: to,
            credentialClass: credentialClass,
            metadataCid: metadataCid,
            transferable: transferable,
            revoked: false,
            expiry: expiry,
            issuedAt: uint64(block.timestamp)
        });

        // Track holder credential with index for O(1) removal
        _holderCredentialIndex[to][credentialId] = _holderCredentials[to].length;
        _holderCredentials[to].push(credentialId);

        _issuerCredentials[msg.sender].push(credentialId);

        // Track holder class credential with index for O(1) removal
        _holderClassCredentialIndex[to][credentialClass][credentialId] = _holderClassCredentials[to][credentialClass].length;
        _holderClassCredentials[to][credentialClass].push(credentialId);

        emit CredentialIssued(credentialId, msg.sender, to, credentialClass);

        return credentialId;
    }

    // ============ Internal Functions ============

    /**
     * @dev O(1) removal from holder credentials array using index tracking
     */
    function _removeFromHolderCredentials(address holder, uint64 credentialId) internal {
        uint64[] storage arr = _holderCredentials[holder];
        uint256 index = _holderCredentialIndex[holder][credentialId];
        uint256 lastIndex = arr.length - 1;

        if (index != lastIndex) {
            uint64 lastId = arr[lastIndex];
            arr[index] = lastId;
            _holderCredentialIndex[holder][lastId] = index;
        }

        arr.pop();
        delete _holderCredentialIndex[holder][credentialId];
    }

    /**
     * @dev O(1) removal from holder class credentials array using index tracking
     */
    function _removeFromHolderClassCredentials(address holder, string memory credClass, uint64 credentialId) internal {
        uint64[] storage arr = _holderClassCredentials[holder][credClass];
        uint256 index = _holderClassCredentialIndex[holder][credClass][credentialId];
        uint256 lastIndex = arr.length - 1;

        if (index != lastIndex) {
            uint64 lastId = arr[lastIndex];
            arr[index] = lastId;
            _holderClassCredentialIndex[holder][credClass][lastId] = index;
        }

        arr.pop();
        delete _holderClassCredentialIndex[holder][credClass][credentialId];
    }
}
