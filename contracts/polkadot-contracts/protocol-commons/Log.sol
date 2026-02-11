// Sources flattened with hardhat v2.28.3 https://hardhat.org

// SPDX-License-Identifier: GPL-3.0-only

// File src/interfaces/ILog.sol

// Original license: SPDX_License_Identifier: GPL-3.0-only
pragma solidity ^0.8.24;

/**
 * @title ILog
 * @notice Canonical interface for the Log primitive
 * @dev Ordered append-only data structure for messages, comments, activity feeds
 */
interface ILog {
    // ============ Structs ============
    struct LogInfo {
        uint64 id;
        address owner;
        uint64 head;
        bool permissioned;
        uint64 createdAt;
    }

    struct LogEntry {
        uint64 logId;
        uint64 index;
        address author;
        bytes32 contentCid;
        uint64 timestamp;
    }

    // ============ Events ============
    event LogCreated(uint64 indexed id, address indexed owner, bool permissioned);
    event EntryAppended(uint64 indexed logId, uint64 indexed index, address indexed author, bytes32 contentCid);
    event WriterAdded(uint64 indexed logId, address indexed writer);
    event WriterRemoved(uint64 indexed logId, address indexed writer);
    event LogTransferred(uint64 indexed logId, address indexed from, address indexed to);

    // ============ Functions ============

    /**
     * @notice Create a new log
     * @param permissioned If true, only owner and writers can append
     * @return The new log ID
     */
    function create(bool permissioned) external returns (uint64);

    /**
     * @notice Append an entry to a log
     * @param logId The log ID
     * @param contentCid The content CID
     * @return The assigned index
     */
    function append(uint64 logId, bytes32 contentCid) external returns (uint64);

    /**
     * @notice Read entries by range
     * @param logId The log ID
     * @param from Starting index (1-based)
     * @param count Number of entries to read
     * @return Array of log entries
     */
    function read(uint64 logId, uint64 from, uint64 count) external view returns (LogEntry[] memory);

    /**
     * @notice Get a single entry by index
     * @param logId The log ID
     * @param index The entry index (1-based)
     * @return The log entry
     */
    function getEntry(uint64 logId, uint64 index) external view returns (LogEntry memory);

    /**
     * @notice Get the latest index (head) of a log
     * @param logId The log ID
     * @return The head index
     */
    function head(uint64 logId) external view returns (uint64);

    /**
     * @notice Get log metadata
     * @param logId The log ID
     * @return The log info
     */
    function getLog(uint64 logId) external view returns (LogInfo memory);

    /**
     * @notice Add a writer to a permissioned log
     * @param logId The log ID
     * @param writer The writer address
     */
    function addWriter(uint64 logId, address writer) external;

    /**
     * @notice Remove a writer from a log
     * @param logId The log ID
     * @param writer The writer address
     */
    function removeWriter(uint64 logId, address writer) external;

    /**
     * @notice List all writers of a log
     * @param logId The log ID
     * @return Array of writer addresses
     */
    function listWriters(uint64 logId) external view returns (address[] memory);

    /**
     * @notice List logs owned by an address
     * @param owner The owner address
     * @return Array of log IDs
     */
    function listByOwner(address owner) external view returns (uint64[] memory);

    /**
     * @notice Transfer log ownership
     * @param logId The log ID
     * @param newOwner The new owner
     */
    function transfer(uint64 logId, address newOwner) external;

    /**
     * @notice Check if an address can write to a log
     * @param logId The log ID
     * @param writer The writer address
     * @return True if writer can write
     */
    function canWrite(uint64 logId, address writer) external view returns (bool);

    /**
     * @notice List writers with pagination
     * @param logId The log ID
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of writer addresses
     */
    function listWriters(uint64 logId, uint64 offset, uint64 limit) external view returns (address[] memory);

    /**
     * @notice List logs by owner with pagination
     * @param owner The owner address
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of log IDs
     */
    function listByOwner(address owner, uint64 offset, uint64 limit) external view returns (uint64[] memory);

    /**
     * @notice Count writers for a log
     * @param logId The log ID
     * @return Number of writers
     */
    function countWriters(uint64 logId) external view returns (uint256);

    /**
     * @notice Count logs owned by an address
     * @param owner The owner address
     * @return Number of logs
     */
    function countByOwner(address owner) external view returns (uint256);

    /**
     * @notice Append multiple entries to a log at once
     * @param logId The log ID
     * @param contentCids Array of content CIDs
     * @return Array of assigned indices
     */
    function appendBatch(uint64 logId, bytes32[] calldata contentCids) external returns (uint64[] memory);
}


// File src/Log.sol

// Original license: SPDX_License_Identifier: GPL-3.0-only
pragma solidity ^0.8.24;

/**
 * @title Log
 * @notice Ordered append-only data structure for messages, comments, feeds
 * @dev See docs/technical-spec.md for full specification
 */
contract Log is ILog {
    // ============ Errors ============
    error LogNotFound();
    error NotLogOwner();
    error NotLogWriter();
    error EntryNotFound();
    error IndexOutOfRange();
    error BatchTooLarge();

    // ============ Constants ============
    uint256 public constant MAX_BATCH_SIZE = 100;

    // ============ Storage ============
    uint64 private _nextLogId = 1;

    // logId => LogInfo
    mapping(uint64 => LogInfo) private _logs;

    // logId => index => LogEntry
    mapping(uint64 => mapping(uint64 => LogEntry)) private _entries;

    // logId => writer => isWriter
    mapping(uint64 => mapping(address => bool)) private _writers;

    // logId => writers array (for enumeration)
    mapping(uint64 => address[]) private _writersList;

    // owner => logIds array
    mapping(address => uint64[]) private _ownerLogs;

    // ============ External Functions ============

    /**
     * @notice Create a new log
     * @param permissioned If true, only owner/writers can append
     * @return The new log ID
     */
    function create(bool permissioned) external returns (uint64) {
        uint64 logId = _nextLogId++;

        _logs[logId] = LogInfo({
            id: logId,
            owner: msg.sender,
            head: 0,
            permissioned: permissioned,
            createdAt: uint64(block.timestamp)
        });

        _ownerLogs[msg.sender].push(logId);

        emit LogCreated(logId, msg.sender, permissioned);

        return logId;
    }

    /**
     * @notice Append an entry to a log
     * @param logId The log ID
     * @param contentCid The CID of the content
     * @return The assigned index
     */
    function append(uint64 logId, bytes32 contentCid) external returns (uint64) {
        LogInfo storage logInfo = _logs[logId];
        if (logInfo.id == 0) {
            revert LogNotFound();
        }

        // Check write permission
        if (logInfo.permissioned) {
            if (msg.sender != logInfo.owner && !_writers[logId][msg.sender]) {
                revert NotLogWriter();
            }
        }

        // Increment head and assign index
        uint64 index = ++logInfo.head;

        _entries[logId][index] = LogEntry({
            logId: logId,
            index: index,
            author: msg.sender,
            contentCid: contentCid,
            timestamp: uint64(block.timestamp)
        });

        emit EntryAppended(logId, index, msg.sender, contentCid);

        return index;
    }

    /**
     * @notice Read entries by range
     * @param logId The log ID
     * @param from Starting index (inclusive)
     * @param count Number of entries to read
     * @return Array of log entries
     */
    function read(uint64 logId, uint64 from, uint64 count) external view returns (LogEntry[] memory) {
        LogInfo storage logInfo = _logs[logId];
        if (logInfo.id == 0) {
            revert LogNotFound();
        }

        // Validate range
        if (from == 0 || from > logInfo.head) {
            return new LogEntry[](0);
        }

        // Calculate actual count
        uint64 available = logInfo.head - from + 1;
        uint64 actualCount = count < available ? count : available;

        LogEntry[] memory result = new LogEntry[](actualCount);
        for (uint64 i = 0; i < actualCount; i++) {
            result[i] = _entries[logId][from + i];
        }

        return result;
    }

    /**
     * @notice Get a single entry by index
     * @param logId The log ID
     * @param index The entry index
     * @return The log entry
     */
    function getEntry(uint64 logId, uint64 index) external view returns (LogEntry memory) {
        LogInfo storage logInfo = _logs[logId];
        if (logInfo.id == 0) {
            revert LogNotFound();
        }

        if (index == 0 || index > logInfo.head) {
            revert EntryNotFound();
        }

        return _entries[logId][index];
    }

    /**
     * @notice Get latest index (head)
     * @param logId The log ID
     * @return The head index
     */
    function head(uint64 logId) external view returns (uint64) {
        LogInfo storage logInfo = _logs[logId];
        if (logInfo.id == 0) {
            revert LogNotFound();
        }
        return logInfo.head;
    }

    /**
     * @notice Get log metadata
     * @param logId The log ID
     * @return The log info
     */
    function getLog(uint64 logId) external view returns (LogInfo memory) {
        LogInfo storage logInfo = _logs[logId];
        if (logInfo.id == 0) {
            revert LogNotFound();
        }
        return logInfo;
    }

    /**
     * @notice Add a writer (permissioned logs only)
     * @param logId The log ID
     * @param writer The writer address
     */
    function addWriter(uint64 logId, address writer) external {
        LogInfo storage logInfo = _logs[logId];
        if (logInfo.id == 0) {
            revert LogNotFound();
        }
        if (msg.sender != logInfo.owner) {
            revert NotLogOwner();
        }

        if (!_writers[logId][writer]) {
            _writers[logId][writer] = true;
            _writersList[logId].push(writer);
            emit WriterAdded(logId, writer);
        }
    }

    /**
     * @notice Remove a writer
     * @param logId The log ID
     * @param writer The writer address
     */
    function removeWriter(uint64 logId, address writer) external {
        LogInfo storage logInfo = _logs[logId];
        if (logInfo.id == 0) {
            revert LogNotFound();
        }
        if (msg.sender != logInfo.owner) {
            revert NotLogOwner();
        }

        if (_writers[logId][writer]) {
            _writers[logId][writer] = false;

            // Remove from list using swap-and-pop
            address[] storage writers = _writersList[logId];
            for (uint256 i = 0; i < writers.length; i++) {
                if (writers[i] == writer) {
                    writers[i] = writers[writers.length - 1];
                    writers.pop();
                    break;
                }
            }

            emit WriterRemoved(logId, writer);
        }
    }

    /**
     * @notice List all writers
     * @param logId The log ID
     * @return Array of writer addresses
     */
    function listWriters(uint64 logId) external view returns (address[] memory) {
        LogInfo storage logInfo = _logs[logId];
        if (logInfo.id == 0) {
            revert LogNotFound();
        }
        return _writersList[logId];
    }

    /**
     * @notice List logs by owner
     * @param owner The owner address
     * @return Array of log IDs
     */
    function listByOwner(address owner) external view returns (uint64[] memory) {
        return _ownerLogs[owner];
    }

    /**
     * @notice Transfer log ownership
     * @param logId The log ID
     * @param newOwner The new owner address
     */
    function transfer(uint64 logId, address newOwner) external {
        LogInfo storage logInfo = _logs[logId];
        if (logInfo.id == 0) {
            revert LogNotFound();
        }
        if (msg.sender != logInfo.owner) {
            revert NotLogOwner();
        }

        address oldOwner = logInfo.owner;
        logInfo.owner = newOwner;

        // Remove from old owner's list
        uint64[] storage oldOwnerLogs = _ownerLogs[oldOwner];
        for (uint256 i = 0; i < oldOwnerLogs.length; i++) {
            if (oldOwnerLogs[i] == logId) {
                oldOwnerLogs[i] = oldOwnerLogs[oldOwnerLogs.length - 1];
                oldOwnerLogs.pop();
                break;
            }
        }

        // Add to new owner's list
        _ownerLogs[newOwner].push(logId);

        emit LogTransferred(logId, oldOwner, newOwner);
    }

    /**
     * @notice Check if address is a writer
     * @param logId The log ID
     * @param writer The address to check
     * @return True if the address is a writer
     */
    function isWriter(uint64 logId, address writer) external view returns (bool) {
        return _writers[logId][writer];
    }

    /**
     * @notice Check if address can write to log
     * @param logId The log ID
     * @param writer The address to check
     * @return True if the address can write
     */
    function canWrite(uint64 logId, address writer) external view returns (bool) {
        LogInfo storage logInfo = _logs[logId];
        if (logInfo.id == 0) {
            return false;
        }

        if (!logInfo.permissioned) {
            return true;
        }

        return writer == logInfo.owner || _writers[logId][writer];
    }

    /**
     * @notice List writers with pagination
     * @param logId The log ID
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of writer addresses
     */
    function listWriters(uint64 logId, uint64 offset, uint64 limit) external view returns (address[] memory) {
        LogInfo storage logInfo = _logs[logId];
        if (logInfo.id == 0) {
            revert LogNotFound();
        }

        address[] storage allWriters = _writersList[logId];
        uint256 total = allWriters.length;

        if (offset >= total) {
            return new address[](0);
        }

        uint256 available = total - offset;
        uint256 count = limit < available ? limit : available;

        address[] memory result = new address[](count);
        for (uint256 i = 0; i < count; i++) {
            result[i] = allWriters[offset + i];
        }
        return result;
    }

    /**
     * @notice List logs by owner with pagination
     * @param owner The owner address
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of log IDs
     */
    function listByOwner(address owner, uint64 offset, uint64 limit) external view returns (uint64[] memory) {
        uint64[] storage allLogs = _ownerLogs[owner];
        uint256 total = allLogs.length;

        if (offset >= total) {
            return new uint64[](0);
        }

        uint256 available = total - offset;
        uint256 count = limit < available ? limit : available;

        uint64[] memory result = new uint64[](count);
        for (uint256 i = 0; i < count; i++) {
            result[i] = allLogs[offset + i];
        }
        return result;
    }

    /**
     * @notice Count writers for a log
     * @param logId The log ID
     * @return Number of writers
     */
    function countWriters(uint64 logId) external view returns (uint256) {
        LogInfo storage logInfo = _logs[logId];
        if (logInfo.id == 0) {
            revert LogNotFound();
        }
        return _writersList[logId].length;
    }

    /**
     * @notice Count logs owned by an address
     * @param owner The owner address
     * @return Number of logs
     */
    function countByOwner(address owner) external view returns (uint256) {
        return _ownerLogs[owner].length;
    }

    /**
     * @notice Append multiple entries to a log at once
     * @param logId The log ID
     * @param contentCids Array of content CIDs
     * @return Array of assigned indices
     */
    function appendBatch(uint64 logId, bytes32[] calldata contentCids) external returns (uint64[] memory) {
        if (contentCids.length > MAX_BATCH_SIZE) {
            revert BatchTooLarge();
        }

        LogInfo storage logInfo = _logs[logId];
        if (logInfo.id == 0) {
            revert LogNotFound();
        }

        // Check write permission once
        if (logInfo.permissioned) {
            if (msg.sender != logInfo.owner && !_writers[logId][msg.sender]) {
                revert NotLogWriter();
            }
        }

        uint64[] memory indices = new uint64[](contentCids.length);

        for (uint256 i = 0; i < contentCids.length; i++) {
            uint64 index = ++logInfo.head;

            _entries[logId][index] = LogEntry({
                logId: logId,
                index: index,
                author: msg.sender,
                contentCid: contentCids[i],
                timestamp: uint64(block.timestamp)
            });

            emit EntryAppended(logId, index, msg.sender, contentCids[i]);

            indices[i] = index;
        }

        return indices;
    }
}
