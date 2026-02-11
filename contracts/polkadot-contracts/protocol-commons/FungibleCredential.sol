// Sources flattened with hardhat v2.28.3 https://hardhat.org

// SPDX-License-Identifier: GPL-3.0-only

// File src/interfaces/IFungibleCredential.sol

// Original license: SPDX_License_Identifier: GPL-3.0-only
pragma solidity ^0.8.24;

/**
 * @title IFungibleCredential
 * @notice Canonical interface for the FungibleCredential primitive
 * @dev Splittable, balance-based tokens (points, credits, drink tickets)
 */
interface IFungibleCredential {
    // ============ Structs ============
    struct TokenClass {
        uint64 classId;
        address issuer;
        string name;
        bytes32 metadataCid;
        uint128 totalSupply;
        uint128 maxSupply;
        bool transferable;
        uint64 createdAt;
    }

    // ============ Events ============
    event ClassCreated(uint64 indexed classId, address indexed issuer, string name);
    event TokensIssued(uint64 indexed classId, address indexed to, uint128 amount);
    event TokensTransferred(uint64 indexed classId, address indexed from, address indexed to, uint128 amount);
    event TokensBurned(uint64 indexed classId, address indexed holder, uint128 amount);
    event TokensRevoked(uint64 indexed classId, address indexed from, uint128 amount);

    // ============ Functions ============

    /**
     * @notice Create a new token class
     * @param name The class name
     * @param metadataCid The metadata CID
     * @param maxSupply Maximum supply (0 = unlimited)
     * @param transferable Whether tokens can be transferred
     * @return The new class ID
     */
    function createClass(
        string calldata name,
        bytes32 metadataCid,
        uint128 maxSupply,
        bool transferable
    ) external returns (uint64);

    /**
     * @notice Issue tokens to an address
     * @param classId The class ID
     * @param to The recipient
     * @param amount The amount to issue
     */
    function issue(uint64 classId, address to, uint128 amount) external;

    /**
     * @notice Transfer tokens to another address
     * @param classId The class ID
     * @param to The recipient
     * @param amount The amount to transfer
     */
    function transfer(uint64 classId, address to, uint128 amount) external;

    /**
     * @notice Burn tokens (reduce own balance)
     * @param classId The class ID
     * @param amount The amount to burn
     */
    function burn(uint64 classId, uint128 amount) external;

    /**
     * @notice Revoke/burn tokens from a holder (issuer only)
     * @param classId The class ID
     * @param from The holder
     * @param amount The amount to revoke
     */
    function revoke(uint64 classId, address from, uint128 amount) external;

    /**
     * @notice Get balance of a holder for a class
     * @param classId The class ID
     * @param holder The holder address
     * @return The balance
     */
    function balanceOf(uint64 classId, address holder) external view returns (uint128);

    /**
     * @notice Get token class info
     * @param classId The class ID
     * @return The token class
     */
    function getClass(uint64 classId) external view returns (TokenClass memory);

    /**
     * @notice List all balances for a holder
     * @param holder The holder address
     * @return classIds Array of class IDs
     * @return amounts Array of amounts
     */
    function listBalances(address holder) external view returns (uint64[] memory classIds, uint128[] memory amounts);

    /**
     * @notice List balances for a holder with pagination
     * @param holder The holder address
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return classIds Array of class IDs
     * @return amounts Array of amounts
     */
    function listBalances(address holder, uint64 offset, uint64 limit)
        external
        view
        returns (uint64[] memory classIds, uint128[] memory amounts);

    /**
     * @notice List all holders of a class
     * @param classId The class ID
     * @return holders Array of holder addresses
     * @return amounts Array of balances
     */
    function listHolders(uint64 classId) external view returns (address[] memory holders, uint128[] memory amounts);

    /**
     * @notice List holders of a class with pagination
     * @param classId The class ID
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return holders Array of holder addresses
     * @return amounts Array of balances
     */
    function listHolders(uint64 classId, uint64 offset, uint64 limit)
        external
        view
        returns (address[] memory holders, uint128[] memory amounts);

    /**
     * @notice Count balances for a holder
     * @param holder The holder address
     * @return Number of classes with balance
     */
    function countBalances(address holder) external view returns (uint256);

    /**
     * @notice Count holders of a class
     * @param classId The class ID
     * @return Number of holders
     */
    function countHolders(uint64 classId) external view returns (uint256);

    /**
     * @notice Issue tokens to multiple recipients at once
     * @param classId The class ID
     * @param to Array of recipient addresses
     * @param amounts Array of amounts to issue
     */
    function issueBatch(uint64 classId, address[] calldata to, uint128[] calldata amounts) external;
}


// File src/FungibleCredential.sol

// Original license: SPDX_License_Identifier: GPL-3.0-only
pragma solidity ^0.8.24;

/**
 * @title FungibleCredential
 * @notice Splittable, balance-based tokens (points, credits, drink tickets)
 * @dev See docs/technical-spec.md for full specification
 */
contract FungibleCredential is IFungibleCredential {
    // ============ Errors ============
    error ClassNotFound();
    error InsufficientBalance();
    error ExceedsMaxSupply();
    error NotClassIssuer();
    error TokensNotTransferable();
    error LengthMismatch();
    error BatchTooLarge();

    // ============ Constants ============
    uint256 public constant MAX_BATCH_SIZE = 100;

    // ============ Storage ============
    uint64 private _nextClassId = 1;

    // classId => TokenClass
    mapping(uint64 => TokenClass) private _classes;

    // classId => holder => balance
    mapping(uint64 => mapping(address => uint128)) private _balances;

    // holder => classIds array (for enumeration)
    mapping(address => uint64[]) private _holderClasses;

    // classId => holder => exists in _holderClasses
    mapping(uint64 => mapping(address => bool)) private _holderHasClass;

    // classId => holders array
    mapping(uint64 => address[]) private _classHolders;

    // classId => holder => exists in _classHolders
    mapping(uint64 => mapping(address => bool)) private _isClassHolder;

    // ============ External Functions ============

    /**
     * @notice Create a new token class
     * @param name The token class name
     * @param metadataCid The metadata CID
     * @param maxSupply Maximum supply (0 for unlimited)
     * @param transferable Whether tokens can be transferred
     * @return The new class ID
     */
    function createClass(string calldata name, bytes32 metadataCid, uint128 maxSupply, bool transferable)
        external
        returns (uint64)
    {
        uint64 classId = _nextClassId++;

        _classes[classId] = TokenClass({
            classId: classId,
            issuer: msg.sender,
            name: name,
            metadataCid: metadataCid,
            totalSupply: 0,
            maxSupply: maxSupply,
            transferable: transferable,
            createdAt: uint64(block.timestamp)
        });

        emit ClassCreated(classId, msg.sender, name);

        return classId;
    }

    /**
     * @notice Issue tokens to an address
     * @param classId The class ID
     * @param to The recipient address
     * @param amount The amount to issue
     */
    function issue(uint64 classId, address to, uint128 amount) external {
        TokenClass storage tokenClass = _classes[classId];
        if (tokenClass.classId == 0) {
            revert ClassNotFound();
        }
        if (msg.sender != tokenClass.issuer) {
            revert NotClassIssuer();
        }
        if (tokenClass.maxSupply != 0 && tokenClass.totalSupply + amount > tokenClass.maxSupply) {
            revert ExceedsMaxSupply();
        }

        tokenClass.totalSupply += amount;
        _balances[classId][to] += amount;

        // Track holder
        _addHolder(classId, to);

        emit TokensIssued(classId, to, amount);
    }

    /**
     * @notice Transfer tokens to another address
     * @param classId The class ID
     * @param to The recipient address
     * @param amount The amount to transfer
     */
    function transfer(uint64 classId, address to, uint128 amount) external {
        TokenClass storage tokenClass = _classes[classId];
        if (tokenClass.classId == 0) {
            revert ClassNotFound();
        }
        if (!tokenClass.transferable) {
            revert TokensNotTransferable();
        }
        if (_balances[classId][msg.sender] < amount) {
            revert InsufficientBalance();
        }

        _balances[classId][msg.sender] -= amount;
        _balances[classId][to] += amount;

        // Update holder tracking
        if (_balances[classId][msg.sender] == 0) {
            _removeHolder(classId, msg.sender);
        }
        _addHolder(classId, to);

        emit TokensTransferred(classId, msg.sender, to, amount);
    }

    /**
     * @notice Burn tokens (reduce own balance)
     * @param classId The class ID
     * @param amount The amount to burn
     */
    function burn(uint64 classId, uint128 amount) external {
        TokenClass storage tokenClass = _classes[classId];
        if (tokenClass.classId == 0) {
            revert ClassNotFound();
        }
        if (_balances[classId][msg.sender] < amount) {
            revert InsufficientBalance();
        }

        _balances[classId][msg.sender] -= amount;
        tokenClass.totalSupply -= amount;

        // Update holder tracking
        if (_balances[classId][msg.sender] == 0) {
            _removeHolder(classId, msg.sender);
        }

        emit TokensBurned(classId, msg.sender, amount);
    }

    /**
     * @notice Revoke/burn tokens from a holder (issuer only)
     * @param classId The class ID
     * @param from The holder address
     * @param amount The amount to revoke
     */
    function revoke(uint64 classId, address from, uint128 amount) external {
        TokenClass storage tokenClass = _classes[classId];
        if (tokenClass.classId == 0) {
            revert ClassNotFound();
        }
        if (msg.sender != tokenClass.issuer) {
            revert NotClassIssuer();
        }
        if (_balances[classId][from] < amount) {
            revert InsufficientBalance();
        }

        _balances[classId][from] -= amount;
        tokenClass.totalSupply -= amount;

        // Update holder tracking
        if (_balances[classId][from] == 0) {
            _removeHolder(classId, from);
        }

        emit TokensRevoked(classId, from, amount);
    }

    /**
     * @notice Get balance of an address
     * @param classId The class ID
     * @param holder The holder address
     * @return The balance
     */
    function balanceOf(uint64 classId, address holder) external view returns (uint128) {
        return _balances[classId][holder];
    }

    /**
     * @notice Get token class info
     * @param classId The class ID
     * @return The token class
     */
    function getClass(uint64 classId) external view returns (TokenClass memory) {
        TokenClass storage tokenClass = _classes[classId];
        if (tokenClass.classId == 0) {
            revert ClassNotFound();
        }
        return tokenClass;
    }

    /**
     * @notice List all balances for a holder
     * @param holder The holder address
     * @return classIds Array of class IDs
     * @return amounts Array of corresponding balances
     */
    function listBalances(address holder) external view returns (uint64[] memory classIds, uint128[] memory amounts) {
        uint64[] storage classes = _holderClasses[holder];
        uint256 count = 0;

        // Count non-zero balances
        for (uint256 i = 0; i < classes.length; i++) {
            if (_balances[classes[i]][holder] > 0) {
                count++;
            }
        }

        classIds = new uint64[](count);
        amounts = new uint128[](count);

        uint256 idx = 0;
        for (uint256 i = 0; i < classes.length; i++) {
            uint128 balance = _balances[classes[i]][holder];
            if (balance > 0) {
                classIds[idx] = classes[i];
                amounts[idx] = balance;
                idx++;
            }
        }

        return (classIds, amounts);
    }

    /**
     * @notice List all holders of a class
     * @param classId The class ID
     * @return holders Array of holder addresses
     * @return amounts Array of corresponding balances
     */
    function listHolders(uint64 classId) external view returns (address[] memory holders, uint128[] memory amounts) {
        TokenClass storage tokenClass = _classes[classId];
        if (tokenClass.classId == 0) {
            revert ClassNotFound();
        }

        address[] storage allHolders = _classHolders[classId];
        uint256 count = 0;

        // Count non-zero balances
        for (uint256 i = 0; i < allHolders.length; i++) {
            if (_balances[classId][allHolders[i]] > 0) {
                count++;
            }
        }

        holders = new address[](count);
        amounts = new uint128[](count);

        uint256 idx = 0;
        for (uint256 i = 0; i < allHolders.length; i++) {
            uint128 balance = _balances[classId][allHolders[i]];
            if (balance > 0) {
                holders[idx] = allHolders[i];
                amounts[idx] = balance;
                idx++;
            }
        }

        return (holders, amounts);
    }

    // ============ Pagination Functions ============

    /**
     * @notice List balances for a holder with pagination
     * @param holder The holder address
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return classIds Array of class IDs
     * @return amounts Array of corresponding balances
     */
    function listBalances(address holder, uint64 offset, uint64 limit)
        external
        view
        returns (uint64[] memory classIds, uint128[] memory amounts)
    {
        uint64[] storage classes = _holderClasses[holder];

        // First pass: count non-zero balances
        uint256 totalNonZero = 0;
        for (uint256 i = 0; i < classes.length; i++) {
            if (_balances[classes[i]][holder] > 0) {
                totalNonZero++;
            }
        }

        if (offset >= totalNonZero) {
            return (new uint64[](0), new uint128[](0));
        }

        uint256 available = totalNonZero - offset;
        uint256 count = limit < available ? limit : available;

        classIds = new uint64[](count);
        amounts = new uint128[](count);

        uint256 validIdx = 0;
        uint256 resultIdx = 0;

        for (uint256 i = 0; i < classes.length && resultIdx < count; i++) {
            uint128 balance = _balances[classes[i]][holder];
            if (balance > 0) {
                if (validIdx >= offset) {
                    classIds[resultIdx] = classes[i];
                    amounts[resultIdx] = balance;
                    resultIdx++;
                }
                validIdx++;
            }
        }

        return (classIds, amounts);
    }

    /**
     * @notice List holders of a class with pagination
     * @param classId The class ID
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return holders Array of holder addresses
     * @return amounts Array of corresponding balances
     */
    function listHolders(uint64 classId, uint64 offset, uint64 limit)
        external
        view
        returns (address[] memory holders, uint128[] memory amounts)
    {
        TokenClass storage tokenClass = _classes[classId];
        if (tokenClass.classId == 0) {
            revert ClassNotFound();
        }

        address[] storage allHolders = _classHolders[classId];

        // First pass: count non-zero balances
        uint256 totalNonZero = 0;
        for (uint256 i = 0; i < allHolders.length; i++) {
            if (_balances[classId][allHolders[i]] > 0) {
                totalNonZero++;
            }
        }

        if (offset >= totalNonZero) {
            return (new address[](0), new uint128[](0));
        }

        uint256 available = totalNonZero - offset;
        uint256 count = limit < available ? limit : available;

        holders = new address[](count);
        amounts = new uint128[](count);

        uint256 validIdx = 0;
        uint256 resultIdx = 0;

        for (uint256 i = 0; i < allHolders.length && resultIdx < count; i++) {
            uint128 balance = _balances[classId][allHolders[i]];
            if (balance > 0) {
                if (validIdx >= offset) {
                    holders[resultIdx] = allHolders[i];
                    amounts[resultIdx] = balance;
                    resultIdx++;
                }
                validIdx++;
            }
        }

        return (holders, amounts);
    }

    /**
     * @notice Count balances for a holder
     * @param holder The holder address
     * @return Number of classes with balance
     */
    function countBalances(address holder) external view returns (uint256) {
        uint64[] storage classes = _holderClasses[holder];
        uint256 count = 0;

        for (uint256 i = 0; i < classes.length; i++) {
            if (_balances[classes[i]][holder] > 0) {
                count++;
            }
        }

        return count;
    }

    /**
     * @notice Count holders of a class
     * @param classId The class ID
     * @return Number of holders with balance
     */
    function countHolders(uint64 classId) external view returns (uint256) {
        TokenClass storage tokenClass = _classes[classId];
        if (tokenClass.classId == 0) {
            revert ClassNotFound();
        }

        address[] storage allHolders = _classHolders[classId];
        uint256 count = 0;

        for (uint256 i = 0; i < allHolders.length; i++) {
            if (_balances[classId][allHolders[i]] > 0) {
                count++;
            }
        }

        return count;
    }

    /**
     * @notice Issue tokens to multiple recipients at once
     * @param classId The class ID
     * @param to Array of recipient addresses
     * @param amounts Array of amounts to issue
     */
    function issueBatch(uint64 classId, address[] calldata to, uint128[] calldata amounts) external {
        if (to.length != amounts.length) {
            revert LengthMismatch();
        }
        if (to.length > MAX_BATCH_SIZE) {
            revert BatchTooLarge();
        }

        TokenClass storage tokenClass = _classes[classId];
        if (tokenClass.classId == 0) {
            revert ClassNotFound();
        }
        if (msg.sender != tokenClass.issuer) {
            revert NotClassIssuer();
        }

        // Calculate total amount to issue with overflow protection
        uint128 totalAmount = 0;
        for (uint256 i = 0; i < amounts.length; i++) {
            // Check individual amount won't cause overflow
            if (amounts[i] > type(uint128).max - totalAmount) {
                revert ExceedsMaxSupply();
            }
            totalAmount += amounts[i];
        }

        if (tokenClass.maxSupply != 0 && tokenClass.totalSupply + totalAmount > tokenClass.maxSupply) {
            revert ExceedsMaxSupply();
        }

        tokenClass.totalSupply += totalAmount;

        for (uint256 i = 0; i < to.length; i++) {
            _balances[classId][to[i]] += amounts[i];
            _addHolder(classId, to[i]);
            emit TokensIssued(classId, to[i], amounts[i]);
        }
    }

    // ============ Internal Functions ============

    function _addHolder(uint64 classId, address holder) internal {
        if (!_holderHasClass[classId][holder]) {
            _holderClasses[holder].push(classId);
            _holderHasClass[classId][holder] = true;
        }
        if (!_isClassHolder[classId][holder]) {
            _classHolders[classId].push(holder);
            _isClassHolder[classId][holder] = true;
        }
    }

    function _removeHolder(uint64 classId, address holder) internal {
        // Note: We don't actually remove from arrays to avoid gas-intensive operations
        // The listBalances and listHolders functions filter out zero balances
        // This is a tradeoff between write gas and read gas
    }
}
