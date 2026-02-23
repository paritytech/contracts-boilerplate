// Sources flattened with hardhat v2.28.3 https://hardhat.org

// SPDX-License-Identifier: GPL-3.0-only AND MIT

// File @openzeppelin/contracts/utils/ReentrancyGuard.sol@v5.4.0

// Original license: SPDX_License_Identifier: MIT
// OpenZeppelin Contracts (last updated v5.1.0) (utils/ReentrancyGuard.sol)

pragma solidity ^0.8.20;

/**
 * @dev Contract module that helps prevent reentrant calls to a function.
 *
 * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier
 * available, which can be applied to functions to make sure there are no nested
 * (reentrant) calls to them.
 *
 * Note that because there is a single `nonReentrant` guard, functions marked as
 * `nonReentrant` may not call one another. This can be worked around by making
 * those functions `private`, and then adding `external` `nonReentrant` entry
 * points to them.
 *
 * TIP: If EIP-1153 (transient storage) is available on the chain you're deploying at,
 * consider using {ReentrancyGuardTransient} instead.
 *
 * TIP: If you would like to learn more about reentrancy and alternative ways
 * to protect against it, check out our blog post
 * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].
 */
abstract contract ReentrancyGuard {
    // Booleans are more expensive than uint256 or any type that takes up a full
    // word because each write operation emits an extra SLOAD to first read the
    // slot's contents, replace the bits taken up by the boolean, and then write
    // back. This is the compiler's defense against contract upgrades and
    // pointer aliasing, and it cannot be disabled.

    // The values being non-zero value makes deployment a bit more expensive,
    // but in exchange the refund on every call to nonReentrant will be lower in
    // amount. Since refunds are capped to a percentage of the total
    // transaction's gas, it is best to keep them low in cases like this one, to
    // increase the likelihood of the full refund coming into effect.
    uint256 private constant NOT_ENTERED = 1;
    uint256 private constant ENTERED = 2;

    uint256 private _status;

    /**
     * @dev Unauthorized reentrant call.
     */
    error ReentrancyGuardReentrantCall();

    constructor() {
        _status = NOT_ENTERED;
    }

    /**
     * @dev Prevents a contract from calling itself, directly or indirectly.
     * Calling a `nonReentrant` function from another `nonReentrant`
     * function is not supported. It is possible to prevent this from happening
     * by making the `nonReentrant` function external, and making it call a
     * `private` function that does the actual work.
     */
    modifier nonReentrant() {
        _nonReentrantBefore();
        _;
        _nonReentrantAfter();
    }

    function _nonReentrantBefore() private {
        // On the first call to nonReentrant, _status will be NOT_ENTERED
        if (_status == ENTERED) {
            revert ReentrancyGuardReentrantCall();
        }

        // Any calls to nonReentrant after this point will fail
        _status = ENTERED;
    }

    function _nonReentrantAfter() private {
        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
        _status = NOT_ENTERED;
    }

    /**
     * @dev Returns true if the reentrancy guard is currently set to "entered", which indicates there is a
     * `nonReentrant` function in the call stack.
     */
    function _reentrancyGuardEntered() internal view returns (bool) {
        return _status == ENTERED;
    }
}


// File src/interfaces/IEscrow.sol

// Original license: SPDX_License_Identifier: GPL-3.0-only
pragma solidity ^0.8.24;

/**
 * @title IEscrow
 * @notice Canonical interface for the Escrow primitive
 * @dev Hold native tokens with time-based and arbiter-controlled release
 *
 * Arbiter Model:
 * - If arbiter is set (non-zero): only arbiter can release/refund before expiry
 * - If no arbiter (zero address): depositor controls release, depositor/beneficiary can refund
 * - After expiry: anyone can trigger refund (fail-safe)
 */
interface IEscrow {
    // ============ Enums ============
    enum EscrowStatus {
        Pending,
        Released,
        Refunded
    }

    // ============ Structs ============
    struct EscrowInfo {
        uint64 id;
        address depositor;
        address beneficiary;
        address arbiter;
        uint256 amount;
        uint64 releaseTime;
        uint64 expiryTime;
        EscrowStatus status;
        uint64 createdAt;
        uint64 resolvedAt;
    }

    // ============ Events ============
    event EscrowCreated(
        uint64 indexed id,
        address indexed depositor,
        address indexed beneficiary,
        address arbiter,
        uint256 amount
    );
    event EscrowReleased(uint64 indexed id, address indexed releasedBy);
    event EscrowRefunded(uint64 indexed id, address indexed refundedBy);

    // ============ Functions ============

    /**
     * @notice Create a new escrow
     * @param beneficiary The recipient when released
     * @param arbiter If non-zero, only this address can release/refund. If zero, depositor controls.
     * @param releaseTime Timestamp after which release is allowed (0 = immediate)
     * @param expiryTime Timestamp after which anyone can refund (0 = no expiry)
     * @return The new escrow ID
     */
    function create(
        address beneficiary,
        address arbiter,
        uint64 releaseTime,
        uint64 expiryTime
    ) external payable returns (uint64);

    /**
     * @notice Release funds to beneficiary
     * @param escrowId The escrow ID
     */
    function release(uint64 escrowId) external;

    /**
     * @notice Refund funds to depositor
     * @param escrowId The escrow ID
     */
    function refund(uint64 escrowId) external;

    /**
     * @notice Get escrow info
     * @param escrowId The escrow ID
     * @return The escrow info
     */
    function get(uint64 escrowId) external view returns (EscrowInfo memory);

    /**
     * @notice List escrows by depositor
     * @param depositor The depositor address
     * @return Array of escrow IDs
     */
    function listByDepositor(address depositor) external view returns (uint64[] memory);

    /**
     * @notice List escrows by beneficiary
     * @param beneficiary The beneficiary address
     * @return Array of escrow IDs
     */
    function listByBeneficiary(address beneficiary) external view returns (uint64[] memory);

    /**
     * @notice Check if an escrow can be released
     * @param escrowId The escrow ID
     * @return True if release time condition is met
     */
    function canRelease(uint64 escrowId) external view returns (bool);

    /**
     * @notice Check if an escrow can be refunded by anyone (expiry passed)
     * @param escrowId The escrow ID
     * @return True if expired and can be refunded by anyone
     */
    function canRefund(uint64 escrowId) external view returns (bool);

    /**
     * @notice List escrows by depositor with pagination
     * @param depositor The depositor address
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of escrow IDs
     */
    function listByDepositor(address depositor, uint64 offset, uint64 limit) external view returns (uint64[] memory);

    /**
     * @notice List escrows by beneficiary with pagination
     * @param beneficiary The beneficiary address
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of escrow IDs
     */
    function listByBeneficiary(address beneficiary, uint64 offset, uint64 limit) external view returns (uint64[] memory);

    /**
     * @notice Count escrows by depositor
     * @param depositor The depositor address
     * @return Number of escrows
     */
    function countByDepositor(address depositor) external view returns (uint256);

    /**
     * @notice Count escrows by beneficiary
     * @param beneficiary The beneficiary address
     * @return Number of escrows
     */
    function countByBeneficiary(address beneficiary) external view returns (uint256);
}


// File src/Escrow.sol

// Original license: SPDX_License_Identifier: GPL-3.0-only
pragma solidity ^0.8.24;


/**
 * @title Escrow
 * @notice Hold native tokens with time-based and arbiter-controlled release
 * @dev See docs/technical-spec.md for full specification
 *
 * CRITICAL SECURITY NOTES:
 * - Uses ReentrancyGuard from OpenZeppelin
 * - Follows checks-effects-interactions pattern
 * - Implements pull pattern for fund withdrawals
 *
 * PALLET-REVIVE COMPATIBILITY:
 * - On pallet-revive (PolkaVM), native token transfers via `call{value: amount}("")`
 *   follow the same semantics as EVM: failed transfers revert the entire transaction
 * - The ReentrancyGuard protects against cross-contract reentrancy attacks
 * - Storage is updated BEFORE external calls to prevent reentrancy exploits
 *
 * Arbiter Model:
 * - If arbiter is set (non-zero): only arbiter can release/refund before expiry
 * - If no arbiter (zero address): depositor controls release, depositor/beneficiary can refund
 * - After expiry: anyone can trigger refund (fail-safe)
 */
contract Escrow is IEscrow, ReentrancyGuard {
    // ============ Errors ============
    error EscrowNotFound();
    error NotArbiter();
    error NotDepositor();
    error NotAuthorized();
    error EscrowAlreadyResolved();
    error ReleaseTimeNotReached();
    error ExpiryTimeNotReached();
    error InvalidAmount();
    error TransferFailed();

    // ============ Storage ============
    uint64 private _nextEscrowId = 1;

    // escrowId => EscrowInfo
    mapping(uint64 => EscrowInfo) private _escrows;

    // depositor => escrowIds array
    mapping(address => uint64[]) private _depositorEscrows;

    // beneficiary => escrowIds array
    mapping(address => uint64[]) private _beneficiaryEscrows;

    // ============ External Functions ============

    /**
     * @notice Create a new escrow
     * @param beneficiary The recipient when released
     * @param arbiter If non-zero, only this address can release/refund. If zero, depositor controls.
     * @param releaseTime Timestamp after which release is allowed (0 = immediate)
     * @param expiryTime Timestamp after which anyone can refund (0 = no expiry)
     * @return The new escrow ID
     */
    function create(
        address beneficiary,
        address arbiter,
        uint64 releaseTime,
        uint64 expiryTime
    ) external payable returns (uint64) {
        if (msg.value == 0) {
            revert InvalidAmount();
        }

        uint64 escrowId = _nextEscrowId++;

        _escrows[escrowId] = EscrowInfo({
            id: escrowId,
            depositor: msg.sender,
            beneficiary: beneficiary,
            arbiter: arbiter,
            amount: msg.value,
            releaseTime: releaseTime,
            expiryTime: expiryTime,
            status: EscrowStatus.Pending,
            createdAt: uint64(block.timestamp),
            resolvedAt: 0
        });

        _depositorEscrows[msg.sender].push(escrowId);
        _beneficiaryEscrows[beneficiary].push(escrowId);

        emit EscrowCreated(escrowId, msg.sender, beneficiary, arbiter, msg.value);

        return escrowId;
    }

    /**
     * @notice Release funds to beneficiary
     * @param escrowId The escrow ID
     * @dev Authorization:
     *   - With arbiter: only arbiter can release (after releaseTime)
     *   - No arbiter: only depositor can release (after releaseTime)
     */
    function release(uint64 escrowId) external nonReentrant {
        EscrowInfo storage escrow = _escrows[escrowId];
        _requirePending(escrow);

        // Check releaseTime
        if (escrow.releaseTime > 0 && block.timestamp < escrow.releaseTime) {
            revert ReleaseTimeNotReached();
        }

        // Check authorization
        if (escrow.arbiter != address(0)) {
            // With arbiter: only arbiter can release
            if (msg.sender != escrow.arbiter) {
                revert NotArbiter();
            }
        } else {
            // No arbiter: depositor controls release
            if (msg.sender != escrow.depositor) {
                revert NotDepositor();
            }
        }

        escrow.status = EscrowStatus.Released;
        escrow.resolvedAt = uint64(block.timestamp);

        (bool success,) = escrow.beneficiary.call{value: escrow.amount}("");
        if (!success) {
            revert TransferFailed();
        }

        emit EscrowReleased(escrowId, msg.sender);
    }

    /**
     * @notice Refund funds to depositor
     * @param escrowId The escrow ID
     * @dev Authorization:
     *   - After expiry: anyone can refund (fail-safe)
     *   - With arbiter (before expiry): only arbiter can refund
     *   - No arbiter (before expiry): depositor or beneficiary can refund
     */
    function refund(uint64 escrowId) external nonReentrant {
        EscrowInfo storage escrow = _escrows[escrowId];
        _requirePending(escrow);

        // Check if expiry has passed (anyone can refund after expiry)
        bool expiryPassed = escrow.expiryTime > 0 && block.timestamp > escrow.expiryTime;

        if (!expiryPassed) {
            // Check authorization before expiry
            if (escrow.arbiter != address(0)) {
                // With arbiter: only arbiter can refund
                if (msg.sender != escrow.arbiter) {
                    revert NotArbiter();
                }
            } else {
                // No arbiter: depositor or beneficiary can refund
                if (msg.sender != escrow.depositor && msg.sender != escrow.beneficiary) {
                    revert NotAuthorized();
                }
            }
        }
        // If expiryPassed, anyone can call refund

        escrow.status = EscrowStatus.Refunded;
        escrow.resolvedAt = uint64(block.timestamp);

        (bool success,) = escrow.depositor.call{value: escrow.amount}("");
        if (!success) {
            revert TransferFailed();
        }

        emit EscrowRefunded(escrowId, msg.sender);
    }

    /**
     * @notice Get escrow info
     * @param escrowId The escrow ID
     * @return The escrow info
     */
    function get(uint64 escrowId) external view returns (EscrowInfo memory) {
        EscrowInfo storage escrow = _escrows[escrowId];
        if (escrow.id == 0) {
            revert EscrowNotFound();
        }
        return escrow;
    }

    /**
     * @notice List escrows by depositor
     * @param depositor The depositor address
     * @return Array of escrow IDs
     */
    function listByDepositor(address depositor) external view returns (uint64[] memory) {
        return _depositorEscrows[depositor];
    }

    /**
     * @notice List escrows by beneficiary
     * @param beneficiary The beneficiary address
     * @return Array of escrow IDs
     */
    function listByBeneficiary(address beneficiary) external view returns (uint64[] memory) {
        return _beneficiaryEscrows[beneficiary];
    }

    /**
     * @notice Check if an escrow can be released
     * @param escrowId The escrow ID
     * @return True if release time condition is met
     */
    function canRelease(uint64 escrowId) external view returns (bool) {
        EscrowInfo storage escrow = _escrows[escrowId];
        if (escrow.id == 0 || escrow.status != EscrowStatus.Pending) {
            return false;
        }
        // Can release if releaseTime is 0 or has passed
        return escrow.releaseTime == 0 || block.timestamp >= escrow.releaseTime;
    }

    /**
     * @notice Check if an escrow can be refunded by anyone (expiry passed)
     * @param escrowId The escrow ID
     * @return True if expired and can be refunded by anyone
     */
    function canRefund(uint64 escrowId) external view returns (bool) {
        EscrowInfo storage escrow = _escrows[escrowId];
        if (escrow.id == 0 || escrow.status != EscrowStatus.Pending) {
            return false;
        }
        if (escrow.expiryTime == 0) {
            // No expiry - authorized parties can always refund
            return true;
        }
        return block.timestamp > escrow.expiryTime;
    }

    // ============ Pagination Functions ============

    /**
     * @notice List escrows by depositor with pagination
     * @param depositor The depositor address
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of escrow IDs
     */
    function listByDepositor(address depositor, uint64 offset, uint64 limit)
        external
        view
        returns (uint64[] memory)
    {
        uint64[] storage allEscrows = _depositorEscrows[depositor];
        uint256 total = allEscrows.length;

        if (offset >= total) {
            return new uint64[](0);
        }

        uint256 available = total - offset;
        uint256 count = limit < available ? limit : available;

        uint64[] memory result = new uint64[](count);
        for (uint256 i = 0; i < count; i++) {
            result[i] = allEscrows[offset + i];
        }
        return result;
    }

    /**
     * @notice List escrows by beneficiary with pagination
     * @param beneficiary The beneficiary address
     * @param offset Starting index
     * @param limit Maximum number of results
     * @return Array of escrow IDs
     */
    function listByBeneficiary(address beneficiary, uint64 offset, uint64 limit)
        external
        view
        returns (uint64[] memory)
    {
        uint64[] storage allEscrows = _beneficiaryEscrows[beneficiary];
        uint256 total = allEscrows.length;

        if (offset >= total) {
            return new uint64[](0);
        }

        uint256 available = total - offset;
        uint256 count = limit < available ? limit : available;

        uint64[] memory result = new uint64[](count);
        for (uint256 i = 0; i < count; i++) {
            result[i] = allEscrows[offset + i];
        }
        return result;
    }

    /**
     * @notice Count escrows by depositor
     * @param depositor The depositor address
     * @return Number of escrows
     */
    function countByDepositor(address depositor) external view returns (uint256) {
        return _depositorEscrows[depositor].length;
    }

    /**
     * @notice Count escrows by beneficiary
     * @param beneficiary The beneficiary address
     * @return Number of escrows
     */
    function countByBeneficiary(address beneficiary) external view returns (uint256) {
        return _beneficiaryEscrows[beneficiary].length;
    }

    // ============ Internal Functions ============

    function _requirePending(EscrowInfo storage escrow) internal view {
        if (escrow.id == 0) {
            revert EscrowNotFound();
        }
        if (escrow.status != EscrowStatus.Pending) {
            revert EscrowAlreadyResolved();
        }
    }
}
