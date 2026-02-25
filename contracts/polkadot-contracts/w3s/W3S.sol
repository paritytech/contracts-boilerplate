// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

// Precompile interface for Asset Hub ERC20 tokens
interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 value) external returns (bool);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
}

/**
 * @title W3S - Web3 Summit 2026 Ticketing System
 * @notice ERC721 ticket system with multi-token deposits, refunds, and role-based access
 * @dev Supports Standard (paid), Staff (free), and Free ticket types
 */
contract W3S is ERC721Enumerable, AccessControl, ReentrancyGuard {
    // ============ Enums ============

    enum TicketType {
        Standard,  // Paid ticket with refundable deposit
        Staff,     // Free, non-transferable
        Free       // Free, non-transferable
    }

    // ============ Structs ============

    struct TicketData {
        TicketType ticketType;
        address paymentToken;      // Token address (address(0) for DOT or free tickets)
        uint256 depositAmount;     // Amount deposited (0 for free tickets, >0 for paid)
        bool isCheckedIn;
        bool hasBeenRefunded;
    }

    struct TokenConfig {
        bool enabled;
        uint256 pricePerToken;     // Price in token's native decimals (e.g., 50 * 10^6 for USDC)
    }

    // ============ Constants ============

    bytes32 public constant W3F = keccak256("W3F");
    bytes32 public constant VOLUNTEER = keccak256("VOLUNTEER");

    // ============ State Variables ============

    // Merkle roots for whitelists
    bytes32 public staffMerkleRoot;
    bytes32 public freeTicketsMerkleRoot;

    // Event metadata
    bytes public eventMetadata;

    // Ticket tracking
    mapping(uint256 => TicketData) public tickets;
    uint256 private _nextTokenId;

    // Payment token configuration
    mapping(address => TokenConfig) public tokenConfigs;
    address[] public supportedTokens;

    // Sales control
    bool public salesPaused;

    // Redemption tracking (per address per ticket type)
    mapping(address => mapping(TicketType => bool)) public hasRedeemed;

    // ============ Custom Errors ============

    error AlreadyRedeemed();
    error MerkleRootNotSet();
    error InvalidMerkleProof();
    error TicketDoesNotExist();
    error AlreadyCheckedIn();
    error TransferFailed();
    error TokenNotSupported();
    error InvalidRecipient();
    error InvalidAmount();
    error InsufficientBalance();
    error TransferNotAllowed();
    error InvalidTicketType();
    error IncorrectPrice();
    error SalesPaused();

    // ============ Events ============

    event TicketPurchased(
        uint256 indexed tokenId,
        address indexed buyer,
        TicketType ticketType,
        address paymentToken,
        uint256 depositAmount,
        uint256 timestamp
    );

    event TicketRedeemed(
        uint256 indexed tokenId,
        address indexed recipient,
        TicketType ticketType,
        uint256 timestamp
    );

    event TicketCheckedIn(
        uint256 indexed tokenId,
        address indexed holder,
        address indexed volunteer,
        uint256 timestamp
    );

    event DepositRefunded(
        uint256 indexed tokenId,
        address indexed recipient,
        address token,
        uint256 amount,
        uint256 timestamp
    );

    event TokenConfigUpdated(
        address indexed token,
        bool enabled,
        uint256 pricePerToken
    );

    event MerkleRootUpdated(
        TicketType indexed ticketType,
        bytes32 newRoot,
        uint256 timestamp
    );

    event FundsWithdrawn(
        address indexed token,
        address indexed recipient,
        uint256 amount,
        uint256 timestamp
    );

    event SalesPausedEvent(uint256 timestamp);
    event SalesUnpausedEvent(uint256 timestamp);

    // ============ Constructor ============

    constructor() ERC721("Web3 Summit 2026", "W3S") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(W3F, msg.sender);

        // Configure initial supported tokens (Asset Hub precompiles)
        // DOT - Polkadot native token (10 decimals)
        // Note: DOT uses address(0) and is paid via msg.value
        // tokenConfigs[address(0)] = TokenConfig({
        //     enabled: true,
        //     pricePerToken: 25 * 10**10  // 25 DOT
        // });
        // supportedTokens.push(address(0));

        // // USDC - USD Coin (6 decimals)
        // address USDC = 0x0000053900000000000000000000000001200000;
        // tokenConfigs[USDC] = TokenConfig({
        //     enabled: true,
        //     pricePerToken: 50 * 10**6  // 50 USDC
        // });
        // supportedTokens.push(USDC);

        // // USDt - Tether USD (6 decimals)
        // address USDT = 0x000007c000000000000000000000000001200000;
        // tokenConfigs[USDT] = TokenConfig({
        //     enabled: true,
        //     pricePerToken: 50 * 10**6  // 50 USDT
        // });
        // supportedTokens.push(USDT);

        // // TBT - Test Token (10 decimals)
        // address TBT = 0x02Faf19900000000000000000000000001200000;
        // tokenConfigs[TBT] = TokenConfig({
        //     enabled: true,
        //     pricePerToken: 50 * 10**10  // 50 TBT
        // });
        // supportedTokens.push(TBT);
    }

    // ============ External Functions - Ticket Purchase & Redemption ============

    /**
     * @notice Buy a standard ticket with refundable deposit
     * @param paymentToken Address of ERC20 token to pay with (use address(0) for DOT)
     */
    function buyTicket(address paymentToken) external payable nonReentrant {
        if (salesPaused) revert SalesPaused();
        if (!tokenConfigs[paymentToken].enabled) revert TokenNotSupported();

        TokenConfig memory config = tokenConfigs[paymentToken];
        uint256 price = config.pricePerToken;

        // Handle DOT (native token) vs ERC20 tokens
        if (paymentToken == address(0)) {
            // DOT payment via msg.value
            if (msg.value != price) revert IncorrectPrice();
        } else {
            // ERC20 payment via precompile
            if (msg.value > 0) revert IncorrectPrice(); // Prevent accidental DOT loss
            bool success = IERC20(paymentToken).transferFrom(msg.sender, address(this), price);
            if (!success) revert TransferFailed();
        }

        // Mint ticket
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);

        // Store ticket data
        tickets[tokenId] = TicketData({
            ticketType: TicketType.Standard,
            paymentToken: paymentToken,
            depositAmount: price,
            isCheckedIn: false,
            hasBeenRefunded: false
        });

        emit TicketPurchased(tokenId, msg.sender, TicketType.Standard, paymentToken, price, block.timestamp);
    }

    /**
     * @notice Redeem free staff ticket with merkle proof
     * @param merkleProof Proof that caller is in staff list
     */
    function redeemTicketStaff(bytes32[] calldata merkleProof) external {
        if (hasRedeemed[msg.sender][TicketType.Staff]) revert AlreadyRedeemed();
        if (staffMerkleRoot == bytes32(0)) revert MerkleRootNotSet();

        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        if (!MerkleProof.verify(merkleProof, staffMerkleRoot, leaf)) {
            revert InvalidMerkleProof();
        }

        hasRedeemed[msg.sender][TicketType.Staff] = true;

        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);

        tickets[tokenId] = TicketData({
            ticketType: TicketType.Staff,
            paymentToken: address(0),
            depositAmount: 0,
            isCheckedIn: false,
            hasBeenRefunded: false
        });

        emit TicketRedeemed(tokenId, msg.sender, TicketType.Staff, block.timestamp);
    }

    /**
     * @notice Redeem free ticket with merkle proof
     * @param merkleProof Proof that caller is in free ticket list
     */
    function redeemFreeTicket(bytes32[] calldata merkleProof) external {
        if (hasRedeemed[msg.sender][TicketType.Free]) revert AlreadyRedeemed();
        if (freeTicketsMerkleRoot == bytes32(0)) revert MerkleRootNotSet();

        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        if (!MerkleProof.verify(merkleProof, freeTicketsMerkleRoot, leaf)) {
            revert InvalidMerkleProof();
        }

        hasRedeemed[msg.sender][TicketType.Free] = true;

        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);

        tickets[tokenId] = TicketData({
            ticketType: TicketType.Free,
            paymentToken: address(0),
            depositAmount: 0,
            isCheckedIn: false,
            hasBeenRefunded: false
        });

        emit TicketRedeemed(tokenId, msg.sender, TicketType.Free, block.timestamp);
    }

    // ============ External Functions - Check-in & Refunds ============

    /**
     * @notice Check in a ticket and auto-refund if standard ticket
     * @param tokenId Token ID to check in
     */
    function checkIn(uint256 tokenId) external onlyRole(VOLUNTEER) nonReentrant {
        if (_ownerOf(tokenId) == address(0)) revert TicketDoesNotExist();

        TicketData storage ticket = tickets[tokenId];
        if (ticket.isCheckedIn) revert AlreadyCheckedIn();

        address holder = ownerOf(tokenId);
        ticket.isCheckedIn = true;

        // Auto-refund for standard tickets
        if (ticket.ticketType == TicketType.Standard && !ticket.hasBeenRefunded) {
            _refundDeposit(tokenId, holder, ticket);
        }

        emit TicketCheckedIn(tokenId, holder, msg.sender, block.timestamp);
    }

    /**
     * @notice Internal function to handle refund logic
     * @dev Uses SafeERC20 and tracks refund status to prevent double refunds
     */
    function _refundDeposit(uint256 tokenId, address recipient, TicketData storage ticket) private {
        uint256 amount = ticket.depositAmount;
        address token = ticket.paymentToken;

        if (amount == 0) return;

        // Mark as refunded before transfer (Checks-Effects-Interactions pattern)
        ticket.hasBeenRefunded = true;

        bool success;

        // Handle DOT (native) vs ERC20 refunds
        if (token == address(0)) {
            // DOT refund using native transfer
            (success, ) = payable(recipient).call{value: amount}("");
        } else {
            // ERC20 refund using precompile
            success = IERC20(token).transfer(recipient, amount);
        }

        // Revert entire check-in if refund fails
        if (!success) revert TransferFailed();

        emit DepositRefunded(tokenId, recipient, token, amount, block.timestamp);
    }

    // ============ External Functions - Admin (W3F) ============

    /**
     * @notice Update merkle root for staff or free tickets
     * @param ticketType Type of ticket (Staff or Free)
     * @param merkleRoot New merkle root
     */
    function setMerkleRoot(TicketType ticketType, bytes32 merkleRoot)
        external
        onlyRole(W3F)
    {
        if (ticketType == TicketType.Standard) revert InvalidTicketType();

        if (ticketType == TicketType.Staff) {
            staffMerkleRoot = merkleRoot;
        } else if (ticketType == TicketType.Free) {
            freeTicketsMerkleRoot = merkleRoot;
        }

        emit MerkleRootUpdated(ticketType, merkleRoot, block.timestamp);
    }

    /**
     * @notice Set event metadata (Gordian Envelope format)
     * @param metadata Event metadata in dCBOR format
     */
    function setEventMetadata(bytes calldata metadata) external onlyRole(W3F) {
        eventMetadata = metadata;
    }

    /**
     * @notice Configure a payment token
     * @param token ERC20 token address (use address(0) for DOT)
     * @param enabled Whether token is accepted
     * @param pricePerToken Price in token's smallest unit (e.g., 50 * 10^6 for 50 USDC)
     */
    function configurePaymentToken(
        address token,
        bool enabled,
        uint256 pricePerToken
    ) external onlyRole(W3F) {
        // Note: address(0) is allowed for DOT (native token)

        bool wasEnabled = tokenConfigs[token].enabled;

        tokenConfigs[token] = TokenConfig({
            enabled: enabled,
            pricePerToken: pricePerToken
        });

        // Add to supportedTokens array if newly enabled
        if (enabled && !wasEnabled) {
            supportedTokens.push(token);
        }
        // Remove from array if disabled (gas-intensive, admin only)
        else if (!enabled && wasEnabled) {
            _removeFromSupportedTokens(token);
        }

        emit TokenConfigUpdated(token, enabled, pricePerToken);
    }

    /**
     * @notice Withdraw all accumulated funds of a specific token after event
     * @param token Token address to withdraw (use address(0) for DOT)
     * @param recipient Address to receive funds
     */
    function withdrawFunds(
        address token,
        address recipient
    ) external onlyRole(W3F) nonReentrant {
        if (recipient == address(0)) revert InvalidRecipient();

        bool success;
        uint256 amount;

        // Handle DOT (native) vs ERC20 withdrawals
        if (token == address(0)) {
            // DOT withdrawal - get entire balance
            amount = address(this).balance;
            if (amount == 0) revert InvalidAmount();
            (success, ) = payable(recipient).call{value: amount}("");
        } else {
            // ERC20 withdrawal - get entire balance
            amount = IERC20(token).balanceOf(address(this));
            if (amount == 0) revert InvalidAmount();
            success = IERC20(token).transfer(recipient, amount);
        }

        if (!success) revert TransferFailed();

        emit FundsWithdrawn(token, recipient, amount, block.timestamp);
    }

    /**
     * @notice Pause ticket sales (emergency stop)
     */
    function pauseSales() external onlyRole(W3F) {
        salesPaused = true;
        emit SalesPausedEvent(block.timestamp);
    }

    /**
     * @notice Unpause ticket sales
     */
    function unpauseSales() external onlyRole(W3F) {
        salesPaused = false;
        emit SalesUnpausedEvent(block.timestamp);
    }

    /**
     * @notice Grant VOLUNTEER role to check-in staff
     * @param account Address to grant role to
     */
    function grantVolunteerRole(address account) external onlyRole(W3F) {
        _grantRole(VOLUNTEER, account);
    }

    /**
     * @notice Revoke VOLUNTEER role
     * @param account Address to revoke role from
     */
    function revokeVolunteerRole(address account) external onlyRole(W3F) {
        _revokeRole(VOLUNTEER, account);
    }

    // ============ External Functions - View ============

    /**
     * @notice Get ticket details
     * @param tokenId Token ID
     * @return Ticket data struct
     */
    function getTicketData(uint256 tokenId) external view returns (TicketData memory) {
        if (_ownerOf(tokenId) == address(0)) revert TicketDoesNotExist();
        return tickets[tokenId];
    }

    /**
     * @notice Get price for a specific token
     * @param token Token address
     * @return Price in token's smallest unit
     */
    function getPrice(address token) external view returns (uint256) {
        if (!tokenConfigs[token].enabled) revert TokenNotSupported();
        return tokenConfigs[token].pricePerToken;
    }

    /**
     * @notice Get all supported tokens
     * @return Array of token addresses
     */
    function getSupportedTokens() external view returns (address[] memory) {
        return supportedTokens;
    }

    /**
     * @notice Check if ticket is checked in (backward compatibility)
     * @param tokenId Token ID
     * @return True if checked in
     */
    function isCheckedIn(uint256 tokenId) external view returns (bool) {
        return tickets[tokenId].isCheckedIn;
    }

    /**
     * @notice Get total supply of tickets
     * @return Total number of tickets minted
     */
    function totalSupply() public view override returns (uint256) {
        return _nextTokenId;
    }

    // ============ Internal Functions ============

    /**
     * @notice Remove token from supportedTokens array
     * @param token Token address to remove
     */
    function _removeFromSupportedTokens(address token) private {
        uint256 length = supportedTokens.length;
        for (uint256 i = 0; i < length; i++) {
            if (supportedTokens[i] == token) {
                // Move last element to this position and pop
                supportedTokens[i] = supportedTokens[length - 1];
                supportedTokens.pop();
                break;
            }
        }
    }

    /**
     * @notice Override ERC721 transfer to prevent transfer of non-transferable tickets
     */
    function _update(address to, uint256 tokenId, address auth)
        internal
        override
        returns (address)
    {
        address from = _ownerOf(tokenId);

        // Allow minting and burning
        if (from == address(0) || to == address(0)) {
            return super._update(to, tokenId, auth);
        }

        // Block transfers for staff and free tickets
        TicketData memory ticket = tickets[tokenId];
        if (ticket.ticketType != TicketType.Standard) {
            revert TransferNotAllowed();
        }

        return super._update(to, tokenId, auth);
    }

    // ============ Public Functions ============

    /**
     * @notice Interface support
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721Enumerable, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
