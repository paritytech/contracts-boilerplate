// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title IMockMobRule
 * @notice Interface for MockMobRule contract
 * @dev Used by Marketplace to interact with MockMobRule without direct dependency
 */
interface IMockMobRule {
    /// @notice Verdict types
    enum Verdict {
        Pending,
        InitiatorWins,
        InitiatorLoses
    }

    /// @notice Dispute case structure
    struct Case {
        uint256 caseId;
        uint256 purchaseId;
        address buyer;
        address seller;
        address initiator;
        string disputeMetadataCID;
        string counterEvidenceCID;
        Verdict verdict;
        uint256 createdAt;
    }

    /**
     * @notice Create a new dispute case
     * @param purchaseId_ The purchase ID from Marketplace
     * @param buyer_ Buyer address
     * @param seller_ Seller address
     * @param initiator_ Who is raising the dispute (must be either buyer_ or seller_)
     * @param disputeMetadataCID_ IPFS CID from Bulletin Chain containing full dispute metadata
     * @return caseId The ID of the created case
     */
    function createDispute(
        uint256 purchaseId_,
        address buyer_,
        address seller_,
        address initiator_,
        string memory disputeMetadataCID_
    ) external returns (uint256);

    /**
     * @notice Add counter-evidence to an existing dispute case
     * @param caseId_ The case ID
     * @param counterEvidenceCID_ IPFS CID from Bulletin Chain containing counter-evidence metadata
     */
    function addCounterEvidence(uint256 caseId_, string memory counterEvidenceCID_) external;

    /**
     * @notice Accept fault and auto-resolve case in favor of initiator (Marketplace only)
     * @param caseId_ The case ID to resolve
     * @dev Can only be called by authorized Marketplace contract
     * @dev Automatically sets verdict to InitiatorWins
     */
    function acceptFault(uint256 caseId_) external;

    /**
     * @notice Resolve a dispute case (admin only)
     * @param caseId_ The case ID to resolve
     * @param verdict_ The verdict (1 = InitiatorWins, 2 = InitiatorLoses)
     */
    function resolveCase(uint256 caseId_, Verdict verdict_) external;

    /**
     * @notice Get verdict for a case
     * @param caseId_ The case ID
     * @return verdict The verdict (0 = Pending, 1 = InitiatorWins, 2 = InitiatorLoses)
     */
    function getVerdict(uint256 caseId_) external view returns (Verdict verdict);

    /**
     * @notice Get full case information
     * @param caseId_ The case ID
     * @return case_ The full Case struct
     */
    function getCase(uint256 caseId_) external view returns (Case memory);

    /**
     * @notice Get case ID for a purchase
     * @param purchaseId_ The purchase ID
     * @return caseId The case ID (0 if no dispute exists)
     */
    function getCaseIdByPurchase(uint256 purchaseId_) external view returns (uint256);

    /**
     * @notice Get total number of cases
     * @return total The total number of cases created
     */
    function getTotalCases() external view returns (uint256);
}

import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {Ownable2StepUpgradeable} from "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol";
import {ReentrancyGuardUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import {PausableUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title Marketplace
 * @notice Decentralized marketplace for digital and physical goods on Asset Hub EVM
 * @dev Upgradeable contract with escrow, encrypted key storage, and multi-asset support
 */
contract Marketplace is Initializable, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable {
    /// @notice Version of the contract
    string public constant VERSION = "2.0.0";

    /// @notice Maximum match-maker fee in basis points (10% = 1000)
    uint16 public constant MAX_MATCHMAKER_FEE = 1000;

    /// @notice Dispute period duration (48 hours)
    uint256 public constant DISPUTE_PERIOD = 48 hours;

    /// @notice Delivery timeout duration (14 days)
    uint256 public constant DELIVERY_TIMEOUT = 14 days;

    /// @notice Post-delivery dispute window (2 days)
    uint256 public constant POST_DELIVERY_TIMEOUT = 2 days;

    /// @notice Native asset address (0x0)
    address public constant NATIVE_ASSET = address(0);

    /**
     * Note: enums here have corresponding types in packages/types/src/item.ts
     * keep them in sync
     */

    enum ItemType {
        DIGITAL,
        PHYSICAL
    }

    enum PurchaseStatus {
        PENDING,
        COMPLETED,
        DISPUTED,
        REFUNDED,
        SHIPPED,
        DELIVERED
    }

    struct Item {
        uint256 id;
        address seller;
        ItemType itemType;
        string metadataIPFSHash; // JSON metadata with description, images, etc.
        uint256 price;
        address paymentAsset; // address(0) for native token, ERC20 address otherwise
        bool active;
        uint256 createdAt;
        string name; // Item title (max 200 chars)
        string category; // Lowercase category tag (max 50 chars)
    }

    struct Purchase {
        uint256 id;
        uint256 itemId;
        address buyer;
        address seller;
        uint256 amount;
        address paymentAsset;
        uint256 purchaseTime;
        uint256 releaseTime;
        PurchaseStatus status;
        // Shipping fields
        bytes32 deliveryCode; // Deprecated - please reuse me or remove me before production
        uint256 deliveryTimeout; // Block timestamp when delivery should be complete
        uint256 postDeliveryTimeout; // Block timestamp when post-delivery disputes end
        bool deliveryConfirmed; // True if buyer confirmed delivery
        bool disputePaused; // Deprecated - please reuse me or remove me before production
        uint256 shippingTimestamp; // Block timestamp when delivery code was set (0 if not shipped)
        uint256 deliveryTimestamp; // Block timestamp when delivery was confirmed (0 if not confirmed)
        // Dispute fields
        uint256 disputeCaseId; // Case ID from MockMobRule (0 = no dispute, >0 = active dispute)
        string disputeMetadataCID; // IPFS CID from Bulletin Chain containing initiator's evidence (empty if no dispute)
        string counterEvidenceCID; // IPFS CID from Bulletin Chain containing counter-evidence from other party (empty if not submitted)
        address disputeInitiator; // Who raised the dispute (address(0) if no dispute, buyer/seller if dispute exists)
        bytes encryptedShippingAddress; // Encrypted shipping address (ECDH with seller's public key)
        string buyerPublicKey; // Buyer's X25519 public key (hex string) for decryption
        bytes encryptedTrackingInfo; // Encrypted tracking info in format "CARRIER;TrackingNumber" (ECDH with buyer's public key)
        uint8 shopRating; // The rating given by the buyer in the current purchase
        // Staking fields
        uint256 initiatorStake; // Amount staked by dispute initiator (0 if no dispute)
        uint256 challengerStake; // Amount staked by challenger when adding evidence (0 if not challenged)
        bool faultAccepted; // True if the other party accepted fault (no challenge)
        // Match-maker fields (must be at the end for upgradeable contract storage layout)
        uint256 matchmakerId; // Match-maker ID (0 = direct purchase / matchmaker #0)
        uint16 matchmakerFeeSnapshot; // Fee at purchase time (basis points, 100 = 1%)
        uint256 matchmakerFeeAmount; // Calculated fee amount in payment asset
    }

    struct MatchMaker {
        uint256 id;
        address owner;
        string name; // Human-readable alias/name for the match-maker
        uint16 feePercentage; // basis points (100 = 1%)
        uint256 registeredAt;
        bool active;
        uint256 feesAccumulated; // Total accumulated fees in native asset
    }

    /// @notice Counter for item IDs
    uint256 private _nextItemId;

    /// @notice Counter for purchase IDs
    uint256 private _nextPurchaseId;

    /// @notice Mapping of item ID to Item
    mapping(uint256 => Item) public items;

    /// @notice Mapping of purchase ID to Purchase
    mapping(uint256 => Purchase) public purchases;

    /// @notice Mapping of item ID => buyer => purchased
    mapping(uint256 => mapping(address => bool)) public hasPurchased;

    /// @notice Mapping of allowed payment assets
    mapping(address => bool) public allowedAssets;

    /// @notice Address of MockMobRule contract for dispute resolution
    IMockMobRule public mockMobRule;

    // Events
    event ItemCreated(
        uint256 indexed itemId,
        address indexed seller,
        ItemType itemType,
        string name,
        string category,
        uint256 price,
        address paymentAsset
    );

    event ItemUpdated(uint256 indexed itemId, string name, string category, string metadataIPFSHash, uint256 price);

    event ItemDeactivated(uint256 indexed itemId);

    event ItemPurchased(
        uint256 indexed purchaseId,
        uint256 indexed itemId,
        address indexed buyer,
        address seller,
        uint256 amount
    );

    event FundsReleased(uint256 indexed purchaseId, address indexed seller, uint256 amount);

    event DisputeRaised(
        uint256 indexed purchaseId,
        uint256 indexed caseId,
        address indexed initiator,
        string disputeMetadataCID
    );

    event DisputeEvidenceAdded(uint256 indexed purchaseId, address indexed submitter, string counterEvidenceCID);

    event DisputeStaked(uint256 indexed purchaseId, address indexed staker, uint256 amount, address paymentAsset);

    event FaultAccepted(uint256 indexed purchaseId, address indexed accepter, address indexed initiator);

    event MarkedAsShipped(uint256 indexed purchaseId, address indexed seller);

    event TrackingInfoSet(uint256 indexed purchaseId, address indexed seller);

    event DeliveryConfirmed(uint256 indexed purchaseId, address indexed buyer);

    event PaymentAssetAdded(address indexed asset);

    event PaymentAssetRemoved(address indexed asset);

    event MockMobRuleUpdated(address indexed newAddress, address indexed oldAddress);

    // Match-maker events
    event MatchMakerRegistered(uint256 indexed matchmakerId, address indexed owner, string name, uint16 feePercentage);

    event MatchMakerFeeUpdated(uint256 indexed matchmakerId, uint16 oldFee, uint16 newFee);

    event MatchMakerFeesReleased(
        uint256 indexed purchaseId,
        uint256 indexed matchmakerId,
        uint256 amount,
        address asset
    );

    event MatchMakerFeesClaimed(uint256 indexed matchmakerId, address indexed toAddress, uint256 amount, address asset);

    struct Shop {
        address owner;
        string name;
        string metadataCID;
        string publicKey;
        uint256 registeredAt;
        bool active;
        // Storing two ints instead of individual ratings gives us constant storage
        // and faster average update
        uint256 ratingCount;
        uint256 ratingSum;
    }

    mapping(address => Shop) private shops;

    event ShopRegistered(address indexed owner, string name, string metadataCID, string publicKey);

    event ShopUpdated(address indexed owner, string name, string metadataCID, string publicKey);

    /// @notice Category tracking for autocomplete/discovery
    mapping(string => uint256) public categoryUsageCount;
    string[] private _allCategories;
    mapping(string => bool) private _categoryExists;

    /// @notice Dispute stake amount (configurable, default 5 tokens)
    uint256 public disputeStakeAmount;

    /// @notice Mapping of match-maker ID to MatchMaker (added in v2.0.0)
    mapping(uint256 => MatchMaker) public matchMakers;

    /// @notice Mapping of owner address to match-maker ID (added in v2.0.0)
    mapping(address => uint256) public matchMakerIdByOwner;

    /// @notice Counter for match-maker IDs (starts at 1, 0 = direct/MM #0, added in v2.0.0)
    uint256 private _nextMatchMakerId;

    /// @notice Mapping of match-maker ID to payment asset to accumulated fees (added in v2.0.0)
    mapping(uint256 => mapping(address => uint256)) public matchMakerFeesByAsset;

    event ShopRated(address indexed shop, address indexed buyer, uint256 indexed purchaseId, uint8 rating);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    /**
     * @notice Initialize the contract
     * @param owner_ Initial owner address
     */
    function initialize(address owner_) public initializer {
        __Ownable_init(owner_);
        __ReentrancyGuard_init();
        __Pausable_init();

        // Native asset is always allowed
        allowedAssets[NATIVE_ASSET] = true;

        // Dispute stake amount should be set via setDisputeStakeAmount() after deployment
        // to match the specific chain's native token decimals (Westend=12, Paseo/Polkadot=10)
        disputeStakeAmount = 0;

        _nextItemId = 1;
        _nextPurchaseId = 1;
        _nextMatchMakerId = 1; // MM ID 0 is reserved for direct/default purchases
    }

    /**
     * @dev Normalize category string to lowercase for consistent matching.
     *
     * ASCII Table Reference:
     *   - Uppercase letters A-Z have codes 65-90  (0x41-0x5A)
     *   - Lowercase letters a-z have codes 97-122 (0x61-0x7A)
     *   - The difference between cases is exactly 32 (0x20)
     *
     * Example: 'A' (65) + 32 = 'a' (97)
     *
     * This ensures "Electronics", "ELECTRONICS", and "electronics" all map
     * to "electronics" for consistent category filtering and discovery.
     *
     * @param category_ Input category string (any case)
     * @return Lowercase category string
     */
    function _normalizeCategory(string memory category_) private pure returns (string memory) {
        bytes memory categoryBytes = bytes(category_);
        bytes memory lowerBytes = new bytes(categoryBytes.length);

        for (uint256 i = 0; i < categoryBytes.length; i++) {
            bytes1 char = categoryBytes[i];
            // Check if character is uppercase A-Z (ASCII 65-90 / 0x41-0x5A)
            // If so, add 32 to convert to lowercase a-z (ASCII 97-122 / 0x61-0x7A)
            if (char >= 0x41 && char <= 0x5A) {
                lowerBytes[i] = bytes1(uint8(char) + 32);
            } else {
                lowerBytes[i] = char;
            }
        }

        return string(lowerBytes);
    }

    /**
     * @dev Track category usage for discovery
     * @param category_ Normalized category string
     */
    function _trackCategory(string memory category_) private {
        if (!_categoryExists[category_]) {
            _allCategories.push(category_);
            _categoryExists[category_] = true;
        }
        categoryUsageCount[category_]++;
    }

    /**
     * @notice Create a new item listing
     * @param itemType_ Type of item (DIGITAL or PHYSICAL)
     * @param name_ Item title (max 200 characters)
     * @param category_ Category tag (will be normalized to lowercase, max 50 chars)
     * @param metadataIPFSHash_ IPFS hash of item metadata JSON
     * @param price_ Price in payment asset
     * @param paymentAsset_ Payment asset address (0x0 for native)
     * @return itemId The ID of the created item
     */
    function createItem(
        ItemType itemType_,
        string memory name_,
        string memory category_,
        string memory metadataIPFSHash_,
        uint256 price_,
        address paymentAsset_
    ) external whenNotPaused returns (uint256) {
        require(bytes(name_).length > 0 && bytes(name_).length <= 200, "Name must be 1-200 chars");
        require(bytes(category_).length > 0 && bytes(category_).length <= 50, "Category must be 1-50 chars");
        require(this.isShopRegistered(msg.sender), "Shop not registered");
        require(bytes(metadataIPFSHash_).length > 0, "Invalid metadata hash");
        require(price_ > 0, "Price must be greater than 0");
        require(allowedAssets[paymentAsset_], "Payment asset not allowed");

        // Normalize category to lowercase
        string memory normalizedCategory = _normalizeCategory(category_);

        uint256 itemId = _nextItemId++;

        items[itemId] = Item({
            id: itemId,
            seller: msg.sender,
            itemType: itemType_,
            name: name_,
            category: normalizedCategory,
            metadataIPFSHash: metadataIPFSHash_,
            price: price_,
            paymentAsset: paymentAsset_,
            active: true,
            createdAt: block.timestamp
        });

        // Track category for discovery
        _trackCategory(normalizedCategory);

        emit ItemCreated(itemId, msg.sender, itemType_, name_, normalizedCategory, price_, paymentAsset_);

        return itemId;
    }

    /**
     * @notice Update an existing item
     * @param itemId_ Item ID to update
     * @param name_ New item title
     * @param category_ New category tag
     * @param metadataIPFSHash_ New IPFS hash of metadata
     * @param price_ New price
     */
    function updateItem(
        uint256 itemId_,
        string memory name_,
        string memory category_,
        string memory metadataIPFSHash_,
        uint256 price_
    ) external {
        Item storage item = items[itemId_];
        require(item.seller == msg.sender, "Not item owner");
        require(item.active, "Item not active");
        require(bytes(name_).length > 0 && bytes(name_).length <= 200, "Name must be 1-200 chars");
        require(bytes(category_).length > 0 && bytes(category_).length <= 50, "Category must be 1-50 chars");
        require(bytes(metadataIPFSHash_).length > 0, "Invalid metadata hash");
        require(price_ > 0, "Price must be greater than 0");

        // Normalize new category
        string memory normalizedCategory = _normalizeCategory(category_);

        // Update category tracking if category changed
        if (keccak256(bytes(item.category)) != keccak256(bytes(normalizedCategory))) {
            // Decrement old category count
            if (categoryUsageCount[item.category] > 0) {
                categoryUsageCount[item.category]--;
            }
            // Track new category
            _trackCategory(normalizedCategory);
        }

        item.name = name_;
        item.category = normalizedCategory;
        item.metadataIPFSHash = metadataIPFSHash_;
        item.price = price_;

        emit ItemUpdated(itemId_, name_, normalizedCategory, metadataIPFSHash_, price_);
    }

    /**
     * @notice Deactivate an item
     * @param itemId_ Item ID to deactivate
     */
    function deactivateItem(uint256 itemId_) external {
        Item storage item = items[itemId_];
        require(item.seller == msg.sender, "Not item owner");
        require(item.active, "Item already inactive");

        item.active = false;

        emit ItemDeactivated(itemId_);
    }

    /**
     * @notice Purchase an item
     * @dev Digital goods: payment sent directly to seller (instant delivery)
     * @dev Physical goods: payment held in escrow until buyer confirms delivery
     * @param itemId_ Item ID to purchase
     * @param matchmakerId_ Match-maker ID (0 = direct purchase)
     * @param encryptedShippingAddress_ Encrypted shipping address (only for physical items, empty for digital)
     * @param buyerPublicKey_ Buyer's X25519 public key (hex string) for decryption (only for physical items, not implemented yet for digital)
     * @return purchaseId The ID of the purchase
     */
    function purchaseItem(
        uint256 itemId_,
        uint256 matchmakerId_,
        bytes calldata encryptedShippingAddress_,
        string calldata buyerPublicKey_
    ) external payable nonReentrant whenNotPaused returns (uint256) {
        Item memory item = items[itemId_];
        require(item.active, "Item not active");
        require(item.seller != msg.sender, "Cannot buy own item");

        // Calculate matchmaker fee if applicable
        uint16 matchmakerFeeSnapshot = 0;
        uint256 matchmakerFeeAmount = 0;

        if (matchmakerId_ != 0) {
            MatchMaker memory matchmaker = matchMakers[matchmakerId_];
            require(matchmaker.active, "Match-maker not active");
            matchmakerFeeSnapshot = matchmaker.feePercentage;
            // Calculate fee: price * fee / 10000 (basis points)
            matchmakerFeeAmount = (item.price * matchmakerFeeSnapshot) / 10000;
        }

        uint256 totalPayment = item.price + matchmakerFeeAmount;

        // Handle payment (item price + matchmaker fee)
        if (item.paymentAsset == NATIVE_ASSET) {
            require(msg.value == totalPayment, "Incorrect payment amount");
        } else {
            require(msg.value == 0, "No native payment needed");
            require(
                IERC20(item.paymentAsset).transferFrom(msg.sender, address(this), totalPayment),
                "Payment transfer failed"
            );
        }

        uint256 purchaseId = _nextPurchaseId++;

        // @TODO update this once digital item encryption is implemented
        // Digital goods: Temporarily instant payment to seller (no escrow needed), immediately completed
        // Physical goods: escrow until buyer confirms delivery
        bool isDigital = item.itemType == ItemType.DIGITAL;
        PurchaseStatus initialStatus = isDigital ? PurchaseStatus.COMPLETED : PurchaseStatus.PENDING;

        // Validate shipping address: required for physical items, must be empty for digital items
        if (isDigital) {
            require(encryptedShippingAddress_.length == 0, "Shipping address not needed for digital items");
            // for future item decryption (not implemented yet) ?
            // require(bytes(buyerPublicKey_).length > 0, "Buyer public key required for digital items");
        } else {
            require(encryptedShippingAddress_.length > 0, "Shipping address required for physical items");
            require(bytes(buyerPublicKey_).length > 0, "Buyer public key required for physical items");
        }

        purchases[purchaseId] = Purchase({
            id: purchaseId,
            itemId: itemId_,
            buyer: msg.sender,
            seller: item.seller,
            amount: item.price,
            paymentAsset: item.paymentAsset,
            purchaseTime: block.timestamp,
            releaseTime: isDigital ? 0 : block.timestamp + DISPUTE_PERIOD,
            status: initialStatus,
            // Initialize shipping fields
            deliveryCode: bytes32(0), // Deprecated - please reuse me or remove me before production
            deliveryTimeout: 0,
            postDeliveryTimeout: 0,
            deliveryConfirmed: isDigital, // Digital goods are immediately delivered
            disputePaused: false, // Deprecated - please reuse me or remove me before production
            shippingTimestamp: 0,
            deliveryTimestamp: 0,
            // Initialize dispute fields
            disputeCaseId: 0,
            disputeMetadataCID: "",
            counterEvidenceCID: "",
            disputeInitiator: address(0),
            encryptedShippingAddress: encryptedShippingAddress_, // Store encrypted shipping address
            buyerPublicKey: buyerPublicKey_, // Store buyer's public key for decryption
            encryptedTrackingInfo: "", // Initialize empty, will be set when seller ships
            shopRating: 0,
            // Initialize staking fields
            initiatorStake: 0,
            challengerStake: 0,
            faultAccepted: false,
            // Match-maker fields (must be at the end for upgradeable contract storage layout)
            matchmakerId: matchmakerId_,
            matchmakerFeeSnapshot: matchmakerFeeSnapshot,
            matchmakerFeeAmount: matchmakerFeeAmount
        });

        // Record purchase
        hasPurchased[itemId_][msg.sender] = true;

        emit ItemPurchased(purchaseId, itemId_, msg.sender, item.seller, item.price);

        // For digital goods, send payment immediately to seller and release matchmaker fee
        if (isDigital) {
            _transferFunds(item.seller, item.price, item.paymentAsset);
            emit FundsReleased(purchaseId, item.seller, item.price);

            // Release matchmaker fee immediately for digital goods
            _releaseMatchMakerFee(purchaseId, matchmakerId_, matchmakerFeeAmount, item.paymentAsset);
        }

        // For physical goods, the funds are held in escrow until the buyer confirms delivery
        // the escrow logic is implicit

        return purchaseId;
    }

    /**
     * @notice Release funds to seller after delivery timeout (if buyer didn't confirm)
     * @param purchaseId_ Purchase ID
     * @dev Only for physical goods - digital goods release funds immediately on purchase
     * @dev Can be called in two scenarios:
     *      1. Delivery timeout: Item shipped but buyer didn't confirm delivery within timeout
     *         - Status must be SHIPPED
     *         - Delivery timeout has passed
     *         - Buyer hasn't confirmed delivery
     *      2. Post-delivery timeout: Buyer confirmed delivery, post-delivery window passed
     *         - Status must be DELIVERED
     *         - Post-delivery timeout has passed
     *      Both require no active dispute
     */
    function releaseFunds(uint256 purchaseId_) external nonReentrant {
        Purchase storage purchase = purchases[purchaseId_];
        require(purchase.disputeCaseId == 0, "Dispute active - cannot release");

        if (purchase.status == PurchaseStatus.SHIPPED) {
            // Case 1: Delivery timeout - buyer didn't confirm delivery
            require(block.timestamp >= purchase.deliveryTimeout, "Delivery timeout not reached");
            require(!purchase.deliveryConfirmed, "Delivery already confirmed");
        } else if (purchase.status == PurchaseStatus.DELIVERED) {
            // Case 2: Post-delivery timeout - buyer confirmed but dispute window passed
            require(block.timestamp >= purchase.postDeliveryTimeout, "Post-delivery timeout not reached");
        } else {
            revert("Invalid status for fund release");
        }

        purchase.status = PurchaseStatus.COMPLETED;

        // Transfer funds to seller
        _transferFunds(purchase.seller, purchase.amount, purchase.paymentAsset);

        emit FundsReleased(purchaseId_, purchase.seller, purchase.amount);

        // Release matchmaker fee on successful delivery
        _releaseMatchMakerFee(purchaseId_, purchase.matchmakerId, purchase.matchmakerFeeAmount, purchase.paymentAsset);
    }

    /**
     * @notice Get item details
     * @param itemId_ Item ID
     * @return Item struct
     */
    function getItem(uint256 itemId_) external view returns (Item memory) {
        return items[itemId_];
    }

    /**
     * @notice Get purchase details
     * @param purchaseId_ Purchase ID
     * @return Purchase struct
     */
    function getPurchase(uint256 purchaseId_) external view returns (Purchase memory) {
        return purchases[purchaseId_];
    }

    /**
     * @notice Seller marks item as shipped with tracking info
     * @param purchaseId_ Purchase ID
     * @param encryptedTrackingInfo_ Encrypted tracking info in format "CARRIER;TrackingNumber"
     * @dev Only seller can call, only for physical goods, only once
     */
    function markAsShipped(uint256 purchaseId_, bytes memory encryptedTrackingInfo_) external {
        Purchase storage purchase = purchases[purchaseId_];
        require(purchase.seller == msg.sender, "Only seller can mark as shipped");
        require(purchase.status == PurchaseStatus.PENDING, "Purchase not pending");

        Item memory item = items[purchase.itemId];
        require(item.itemType == ItemType.PHYSICAL, "Only for physical goods");
        require(purchase.shippingTimestamp == 0, "Already shipped");
        require(encryptedTrackingInfo_.length > 0, "Tracking info cannot be empty");
        // not sure if we should allow overwriting the tracking info
        require(purchase.encryptedTrackingInfo.length == 0, "Tracking info already set");

        purchase.status = PurchaseStatus.SHIPPED;
        purchase.deliveryTimeout = block.timestamp + DELIVERY_TIMEOUT;
        purchase.shippingTimestamp = block.timestamp;
        // Set encrypted tracking info
        purchase.encryptedTrackingInfo = encryptedTrackingInfo_;

        emit MarkedAsShipped(purchaseId_, purchase.seller);
        emit TrackingInfoSet(purchaseId_, purchase.seller);
    }

    /**
     * @notice Buyer confirms delivery
     * @param purchaseId_ Purchase ID
     * @dev Sets status to DELIVERED and starts post-delivery timeout window
     * @dev Funds remain in escrow until post-delivery timeout passes (seller must call releaseFunds)
     * @dev Only for physical goods - digital goods release funds immediately on purchase
     * @dev Only the original buyer can call this function (enforced by msg.sender check)
     */
    function confirmDelivery(uint256 purchaseId_) external nonReentrant {
        Purchase storage purchase = purchases[purchaseId_];
        require(msg.sender == purchase.buyer, "Only buyer can confirm");
        require(purchase.status == PurchaseStatus.SHIPPED, "Item not shipped");
        require(!purchase.deliveryConfirmed, "Already confirmed");
        require(block.timestamp <= purchase.deliveryTimeout, "Delivery timeout passed");

        purchase.deliveryConfirmed = true;
        purchase.status = PurchaseStatus.DELIVERED;
        // Set post-delivery timeout window (2 days after delivery confirmation for disputes)
        purchase.postDeliveryTimeout = block.timestamp + POST_DELIVERY_TIMEOUT;
        purchase.deliveryTimestamp = block.timestamp;

        // Funds remain in escrow - seller must call releaseFunds after post-delivery timeout

        emit DeliveryConfirmed(purchaseId_, purchase.buyer);
    }

    /**
     * @notice Set MockMobRule contract address for dispute resolution
     * @param mockMobRule_ Address of MockMobRule contract
     * @dev Validates that address is a contract and implements IMockMobRule interface
     */
    function setMockMobRule(address mockMobRule_) external onlyOwner {
        require(mockMobRule_ != address(0), "Invalid address");
        require(mockMobRule_.code.length > 0, "Not a contract");

        // Verify interface by calling a view function
        // This will revert if interface doesn't match
        IMockMobRule(mockMobRule_).getTotalCases();

        address oldAddress = address(mockMobRule);
        mockMobRule = IMockMobRule(mockMobRule_);
        emit MockMobRuleUpdated(mockMobRule_, oldAddress);
    }

    /**
     * @notice Raise a dispute for a purchase
     * @param purchaseId_ The purchase ID to dispute
     * @param disputeMetadataCID_ IPFS CID from Bulletin Chain containing full dispute metadata
     * @return caseId The case ID from MockMobRule
     * @dev Only buyer or seller can raise dispute. First one to call wins.
     * @dev Purchase must not be finalized (COMPLETED or REFUNDED)
     * @dev MockMobRule must be set before calling this function
     * @dev Requires stake of disputeStakeAmount in the same payment asset as the purchase
     */
    function raiseDispute(
        uint256 purchaseId_,
        string memory disputeMetadataCID_
    ) external payable nonReentrant returns (uint256 caseId) {
        // Get purchase
        Purchase storage purchase = purchases[purchaseId_];
        require(purchase.id != 0, "Purchase does not exist");

        // Check no existing dispute
        require(purchase.disputeCaseId == 0, "Dispute already exists");

        // Check caller is buyer or seller
        require(msg.sender == purchase.buyer || msg.sender == purchase.seller, "Not buyer or seller");

        // Check MockMobRule is set
        require(address(mockMobRule) != address(0), "MockMobRule not set");

        // Verify MockMobRule is still valid (address hasn't changed)
        // This ensures connection is still valid
        try mockMobRule.getTotalCases() returns (uint256) {
            // Connection is valid, continue
        } catch {
            revert("MockMobRule connection failed");
        }

        // Check CID not empty
        require(bytes(disputeMetadataCID_).length > 0, "CID required");

        // Check purchase not finalized
        require(
            purchase.status != PurchaseStatus.COMPLETED && purchase.status != PurchaseStatus.REFUNDED,
            "Purchase finalized"
        );

        // For DELIVERED status, check post-delivery timeout hasn't passed
        // Check this before requiring stake payment (fail fast on validation)
        if (purchase.status == PurchaseStatus.DELIVERED) {
            require(block.timestamp < purchase.postDeliveryTimeout, "Post-delivery dispute window expired");
        }

        // Require stake payment
        require(disputeStakeAmount > 0, "Stake amount not set");

        // Handle stake payment (same asset as purchase)
        if (purchase.paymentAsset == NATIVE_ASSET) {
            require(msg.value == disputeStakeAmount, "Incorrect stake amount");
        } else {
            require(msg.value == 0, "No native payment needed");
            require(
                IERC20(purchase.paymentAsset).transferFrom(msg.sender, address(this), disputeStakeAmount),
                "Stake transfer failed"
            );
        }

        // Call MockMobRule.createDispute()
        caseId = mockMobRule.createDispute(
            purchaseId_,
            purchase.buyer,
            purchase.seller,
            msg.sender, // initiator
            disputeMetadataCID_
        );

        // Update purchase
        purchase.disputeCaseId = caseId;
        purchase.disputeMetadataCID = disputeMetadataCID_;
        purchase.disputeInitiator = msg.sender;
        purchase.initiatorStake = disputeStakeAmount;
        purchase.status = PurchaseStatus.DISPUTED;

        // Emit events
        emit DisputeRaised(purchaseId_, caseId, msg.sender, disputeMetadataCID_);
        emit DisputeStaked(purchaseId_, msg.sender, disputeStakeAmount, purchase.paymentAsset);

        return caseId;
    }

    /**
     * @notice Accept fault and release funds to initiator (for the other party)
     * @param purchaseId_ The purchase ID with an active dispute
     * @dev Only the non-initiator party can accept fault
     * @dev No stake required - fault accepted means initiator wins
     * @dev Automatically releases purchase amount + initiator stake back to initiator
     */
    function acceptFault(uint256 purchaseId_) external nonReentrant {
        Purchase storage purchase = purchases[purchaseId_];
        require(purchase.id != 0, "Purchase does not exist");
        require(purchase.disputeCaseId != 0, "No active dispute");
        require(purchase.status == PurchaseStatus.DISPUTED, "Dispute not active");
        require(!purchase.faultAccepted, "Fault already accepted");
        require(purchase.challengerStake == 0, "Already challenged");

        // Check caller is buyer or seller
        require(msg.sender == purchase.buyer || msg.sender == purchase.seller, "Not buyer or seller");

        // Check caller is NOT the initiator (only the other party can accept fault)
        require(msg.sender != purchase.disputeInitiator, "Initiator cannot accept own fault");

        // Mark fault as accepted
        purchase.faultAccepted = true;

        // Resolve dispute in MockMobRule (initiator wins)
        require(address(mockMobRule) != address(0), "MockMobRule not set");
        // Call MockMobRule.acceptFault to resolve the dispute
        // This will set verdict to InitiatorWins
        mockMobRule.acceptFault(purchase.disputeCaseId);

        // Determine final status based on who is initiator
        if (purchase.disputeInitiator == purchase.buyer) {
            purchase.status = PurchaseStatus.REFUNDED;
        } else {
            purchase.status = PurchaseStatus.COMPLETED;
        }

        // Transfer purchase amount + initiator stake to initiator
        uint256 totalAmount = purchase.amount + purchase.initiatorStake;
        _transferFunds(purchase.disputeInitiator, totalAmount, purchase.paymentAsset);

        // Emit events
        emit FaultAccepted(purchaseId_, msg.sender, purchase.disputeInitiator);
        emit FundsReleased(purchaseId_, purchase.disputeInitiator, totalAmount);
    }

    /**
     * @notice Add counter-evidence to an existing dispute (for the other party)
     * @param purchaseId_ The purchase ID with an active dispute
     * @param counterEvidenceCID_ IPFS CID from Bulletin Chain containing counter-evidence metadata
     * @dev Only the non-initiator party (buyer or seller) can add counter-evidence
     * @dev Dispute must exist and not be resolved
     * @dev Requires stake of disputeStakeAmount to challenge the dispute
     */
    function addDisputeEvidence(uint256 purchaseId_, string memory counterEvidenceCID_) external payable nonReentrant {
        Purchase storage purchase = purchases[purchaseId_];
        require(purchase.id != 0, "Purchase does not exist");
        require(purchase.disputeCaseId != 0, "No active dispute");
        require(purchase.status == PurchaseStatus.DISPUTED, "Dispute not active");
        require(bytes(counterEvidenceCID_).length > 0, "CID required");
        require(!purchase.faultAccepted, "Fault already accepted");
        require(purchase.challengerStake == 0, "Already challenged");

        // Check caller is buyer or seller
        require(msg.sender == purchase.buyer || msg.sender == purchase.seller, "Not buyer or seller");

        // Check caller is NOT the initiator (only the other party can add counter-evidence)
        require(msg.sender != purchase.disputeInitiator, "Initiator cannot add counter-evidence");

        // Check MockMobRule is set
        require(address(mockMobRule) != address(0), "MockMobRule not set");

        // Require stake payment (same asset as purchase)
        require(disputeStakeAmount > 0, "Stake amount not set");

        // Handle stake payment
        if (purchase.paymentAsset == NATIVE_ASSET) {
            require(msg.value == disputeStakeAmount, "Incorrect stake amount");
        } else {
            require(msg.value == 0, "No native payment needed");
            require(
                IERC20(purchase.paymentAsset).transferFrom(msg.sender, address(this), disputeStakeAmount),
                "Stake transfer failed"
            );
        }

        // Call MockMobRule.addCounterEvidence() to store counter-evidence
        mockMobRule.addCounterEvidence(purchase.disputeCaseId, counterEvidenceCID_);

        // Store counter-evidence and challenger stake
        purchase.counterEvidenceCID = counterEvidenceCID_;
        purchase.challengerStake = disputeStakeAmount;

        // Emit events
        emit DisputeEvidenceAdded(purchaseId_, msg.sender, counterEvidenceCID_);
        emit DisputeStaked(purchaseId_, msg.sender, disputeStakeAmount, purchase.paymentAsset);
    }

    /**
     * @notice Get dispute status for a purchase
     * @param purchaseId_ The purchase ID
     * @return hasDispute True if purchase has an active dispute
     * @return caseId The case ID (0 if no dispute)
     * @return verdict The verdict (0 = Pending, 1 = InitiatorWins, 2 = InitiatorLoses)
     * @return isResolved True if dispute has been resolved (verdict != Pending)
     * @return initiator The address that initiated the dispute
     * @return winner The address of the winner (address(0) if pending or no dispute)
     */
    function getDisputeStatus(
        uint256 purchaseId_
    )
        external
        view
        returns (bool hasDispute, uint256 caseId, uint8 verdict, bool isResolved, address initiator, address winner)
    {
        Purchase memory purchase = purchases[purchaseId_];
        require(purchase.id != 0, "Purchase does not exist");

        hasDispute = purchase.disputeCaseId != 0;

        if (!hasDispute) {
            return (false, 0, 0, false, address(0), address(0));
        }

        caseId = purchase.disputeCaseId;
        initiator = purchase.disputeInitiator;

        // If fault was accepted, dispute is resolved and initiator wins
        if (purchase.faultAccepted) {
            verdict = uint8(IMockMobRule.Verdict.InitiatorWins);
            isResolved = true;
            winner = initiator;
            return (hasDispute, caseId, verdict, isResolved, initiator, winner);
        }

        // Query MockMobRule for verdict
        require(address(mockMobRule) != address(0), "MockMobRule not set");

        try mockMobRule.getVerdict(caseId) returns (IMockMobRule.Verdict verdict_) {
            verdict = uint8(verdict_);
            isResolved = verdict_ != IMockMobRule.Verdict.Pending;

            // Determine winner based on verdict
            if (isResolved) {
                if (verdict_ == IMockMobRule.Verdict.InitiatorWins) {
                    winner = initiator;
                } else {
                    // InitiatorLoses
                    // Other party wins
                    winner = (initiator == purchase.buyer) ? purchase.seller : purchase.buyer;
                }
            } else {
                winner = address(0); // Pending, no winner yet
            }
        } catch {
            // If query fails, assume pending
            verdict = 0; // Pending
            isResolved = false;
            winner = address(0);
        }

        return (hasDispute, caseId, verdict, isResolved, initiator, winner);
    }

    /**
     * @notice Claim dispute resolution funds (only winner can call)
     * @param purchaseId_ The purchase ID
     * @dev Transfers funds to winner based on verdict:
     *      - If buyer wins: refund buyer (item price + MM fee + initiator stake, status = REFUNDED)
     *      - If seller wins: release item price + initiator stake to seller, MM fee to match-maker (status = COMPLETED)
     * @dev Winner receives purchase amount + initiator stake. Challenger stake goes to MockMobRule as voting reward simulation.
     */
    function claimDisputeResolution(uint256 purchaseId_) external nonReentrant {
        Purchase storage purchase = purchases[purchaseId_];
        require(purchase.id != 0, "Purchase does not exist");
        require(purchase.disputeCaseId != 0, "No dispute");
        require(purchase.status == PurchaseStatus.DISPUTED, "Dispute not active");
        require(!purchase.faultAccepted, "Dispute already resolved via acceptFault");

        (bool hasDispute, , , bool isResolved, , address winner) = this.getDisputeStatus(purchaseId_);
        require(hasDispute, "No dispute");
        require(isResolved, "Dispute not resolved");
        require(winner != address(0), "No winner determined");
        require(msg.sender == winner, "Not winner");

        require(address(mockMobRule) != address(0), "MockMobRule not set");

        // Transfer challenger stake to MockMobRule (simulates rewards for voters in real MobRule system)
        // Only transfer if challenger stake exists (dispute was challenged)
        if (purchase.challengerStake > 0) {
            _transferFunds(address(mockMobRule), purchase.challengerStake, purchase.paymentAsset);
        }

        // Calculate and transfer winnings based on winner
        // Winner receives: purchase amount + initiator stake (+ MM fee if buyer wins as refund)
        if (winner == purchase.buyer) {
            // Buyer wins: refund item price + matchmaker fee + initiator stake
            purchase.status = PurchaseStatus.REFUNDED;
            uint256 refundAmount = purchase.amount + purchase.matchmakerFeeAmount + purchase.initiatorStake;
            _transferFunds(winner, refundAmount, purchase.paymentAsset);
            emit FundsReleased(purchaseId_, winner, refundAmount);
        } else {
            // Seller wins: release item price + initiator stake to seller, matchmaker fee to match-maker
            purchase.status = PurchaseStatus.COMPLETED;
            uint256 sellerAmount = purchase.amount + purchase.initiatorStake;
            _transferFunds(winner, sellerAmount, purchase.paymentAsset);
            emit FundsReleased(purchaseId_, winner, sellerAmount);

            // Release matchmaker fee on seller win
            _releaseMatchMakerFee(
                purchaseId_,
                purchase.matchmakerId,
                purchase.matchmakerFeeAmount,
                purchase.paymentAsset
            );
        }
    }

    /**
     * @notice Get total number of items created
     * @return Total item count
     */
    function getTotalItems() external view returns (uint256) {
        return _nextItemId > 0 ? _nextItemId - 1 : 0;
    }

    /**
     * @notice Get all active items (paginated)
     * @param offset_ Starting index
     * @param limit_ Maximum number of items to return
     * @return Array of active items
     */
    function getActiveItems(uint256 offset_, uint256 limit_) external view returns (Item[] memory) {
        require(limit_ > 0 && limit_ <= 100, "Limit must be between 1 and 100");

        // Single pass: count and collect active items simultaneously
        Item[] memory tempItems = new Item[](limit_);
        uint256 activeCount = 0;
        uint256 resultIndex = 0;

        for (uint256 i = 1; i < _nextItemId; i++) {
            if (items[i].active) {
                if (activeCount >= offset_ && resultIndex < limit_) {
                    tempItems[resultIndex++] = items[i];
                }
                activeCount++;
            }
        }

        // Copy to correctly-sized array
        Item[] memory result = new Item[](resultIndex);
        for (uint256 i = 0; i < resultIndex; i++) {
            result[i] = tempItems[i];
        }

        return result;
    }

    /**
     * @notice Get items by seller (paginated)
     * @param seller_ Seller address
     * @param offset_ Starting index
     * @param limit_ Maximum number of items to return
     * @return Array of items created by seller
     */
    function getItemsBySeller(address seller_, uint256 offset_, uint256 limit_) external view returns (Item[] memory) {
        require(limit_ > 0 && limit_ <= 100, "Limit must be between 1 and 100");

        // Single pass: count and collect seller's items simultaneously
        Item[] memory tempItems = new Item[](limit_);
        uint256 sellerCount = 0;
        uint256 resultIndex = 0;

        for (uint256 i = 1; i < _nextItemId; i++) {
            if (items[i].seller == seller_) {
                if (sellerCount >= offset_ && resultIndex < limit_) {
                    tempItems[resultIndex++] = items[i];
                }
                sellerCount++;
            }
        }

        // Copy to correctly-sized array
        Item[] memory result = new Item[](resultIndex);
        for (uint256 i = 0; i < resultIndex; i++) {
            result[i] = tempItems[i];
        }

        return result;
    }

    /**
     * @notice Get items by category (paginated)
     * @param category_ Category to filter by (case-insensitive)
     * @param offset_ Starting index
     * @param limit_ Maximum number of items to return
     * @return Array of items in the specified category
     */
    function getItemsByCategory(
        string memory category_,
        uint256 offset_,
        uint256 limit_
    ) external view returns (Item[] memory) {
        require(limit_ > 0 && limit_ <= 100, "Limit must be between 1 and 100");

        // Normalize category for comparison
        string memory normalizedCategory = _normalizeCategory(category_);
        bytes32 categoryHash = keccak256(bytes(normalizedCategory));

        // Single pass: count and collect category items simultaneously
        Item[] memory tempItems = new Item[](limit_);
        uint256 categoryCount = 0;
        uint256 resultIndex = 0;

        for (uint256 i = 1; i < _nextItemId; i++) {
            if (items[i].active && keccak256(bytes(items[i].category)) == categoryHash) {
                if (categoryCount >= offset_ && resultIndex < limit_) {
                    tempItems[resultIndex++] = items[i];
                }
                categoryCount++;
            }
        }

        // Copy to correctly-sized array
        Item[] memory result = new Item[](resultIndex);
        for (uint256 i = 0; i < resultIndex; i++) {
            result[i] = tempItems[i];
        }

        return result;
    }

    /**
     * @notice Get all categories that have been used
     * @return Array of all category strings
     */
    function getAllCategories() external view returns (string[] memory) {
        return _allCategories;
    }

    /**
     * @notice Get popular categories (with minimum usage threshold)
     * @param minUsage_ Minimum number of items in category
     * @return Array of popular category strings
     */
    function getPopularCategories(uint256 minUsage_) external view returns (string[] memory) {
        // Count categories that meet threshold
        uint256 popularCount = 0;
        for (uint256 i = 0; i < _allCategories.length; i++) {
            if (categoryUsageCount[_allCategories[i]] >= minUsage_) {
                popularCount++;
            }
        }

        // Collect popular categories
        string[] memory result = new string[](popularCount);
        uint256 resultIndex = 0;

        for (uint256 i = 0; i < _allCategories.length; i++) {
            if (categoryUsageCount[_allCategories[i]] >= minUsage_) {
                result[resultIndex] = _allCategories[i];
                resultIndex++;
            }
        }

        return result;
    }

    /**
     * @notice Add a payment asset
     * @param asset_ Asset address to add
     */
    function addPaymentAsset(address asset_) external onlyOwner {
        require(!allowedAssets[asset_], "Asset already allowed");
        allowedAssets[asset_] = true;
        emit PaymentAssetAdded(asset_);
    }

    /**
     * @notice Remove a payment asset
     * @param asset_ Asset address to remove
     */
    function removePaymentAsset(address asset_) external onlyOwner {
        require(asset_ != NATIVE_ASSET, "Cannot remove native asset");
        require(allowedAssets[asset_], "Asset not allowed");
        allowedAssets[asset_] = false;
        emit PaymentAssetRemoved(asset_);
    }

    /**
     * @notice Set dispute stake amount (owner only)
     * @param amount_ New stake amount (in payment asset's smallest unit)
     * @dev Can be updated to adjust staking requirements
     */
    function setDisputeStakeAmount(uint256 amount_) external onlyOwner {
        require(amount_ > 0, "Stake amount must be greater than 0");
        disputeStakeAmount = amount_;
    }

    /**
     * @notice Pause the contract (emergency)
     */
    function pause() external onlyOwner {
        _pause();
    }

    /**
     * @notice Unpause the contract
     */
    function unpause() external onlyOwner {
        _unpause();
    }

    /**
     * @dev Internal function to transfer funds
     */
    function _transferFunds(address to_, uint256 amount_, address asset_) private {
        if (asset_ == NATIVE_ASSET) {
            (bool success, ) = payable(to_).call{value: amount_}("");
            require(success, "Transfer failed");
        } else {
            require(IERC20(asset_).transfer(to_, amount_), "Transfer failed");
        }
    }

    /**
     * @dev Internal function to release match-maker fee
     */
    function _releaseMatchMakerFee(
        uint256 purchaseId_,
        uint256 matchmakerId_,
        uint256 matchmakerFeeAmount_,
        address paymentAsset_
    ) private {
        if (matchmakerFeeAmount_ > 0 && matchmakerId_ != 0) {
            matchMakerFeesByAsset[matchmakerId_][paymentAsset_] += matchmakerFeeAmount_;
            emit MatchMakerFeesReleased(purchaseId_, matchmakerId_, matchmakerFeeAmount_, paymentAsset_);
        }
    }

    /**
     * @notice Register or update a shop for the caller
     * @param name_ Human readable shop name
     * @param metadataCID_ CID that points to the shop metadata JSON (logo, description, links, etc.)
     * @param publicKey_ X25519 public encryption key for ECDH (hex string)
     */
    function registerShop(string calldata name_, string calldata metadataCID_, string calldata publicKey_) external {
        require(bytes(name_).length > 0, "Name required");
        require(bytes(metadataCID_).length > 0, "Invalid metadata CID");
        require(bytes(publicKey_).length > 0, "Public key required");

        Shop storage shop = shops[msg.sender];
        bool isNewShop = shop.owner == address(0) || !shop.active;

        shop.owner = msg.sender;
        shop.name = name_;
        shop.metadataCID = metadataCID_;
        shop.publicKey = publicKey_;
        shop.registeredAt = block.timestamp;
        shop.active = true;

        if (isNewShop) {
            emit ShopRegistered(msg.sender, name_, metadataCID_, publicKey_);
        } else {
            emit ShopUpdated(msg.sender, name_, metadataCID_, publicKey_);
        }
    }

    /**
     * @notice Returns the shop struct for an owner
     */
    function getShop(address owner_) external view returns (Shop memory) {
        return shops[owner_];
    }

    /**
     * @notice Returns true if the owner has an active shop
     */
    function isShopRegistered(address owner_) external view returns (bool) {
        Shop memory shop = shops[owner_];
        return shop.owner != address(0) && shop.active;
    }

    function rateSeller(uint256 purchaseId, uint8 rating) external {
        Purchase memory purchase = purchases[purchaseId];

        require(purchase.buyer == msg.sender, "Only the buyer can submit rating");
        require(purchase.status == PurchaseStatus.COMPLETED, "Shop can only be rated once the purchase is complete");
        require(purchase.shopRating == 0, "Shop can only be rated once per purchase");
        require(rating >= 1, "Only ratings between 1 and 5 are accepted");
        require(rating <= 5, "Only ratings between 1 and 5 are accepted");

        shops[purchase.seller].ratingCount++;
        shops[purchase.seller].ratingSum += rating;
        purchases[purchaseId].shopRating = rating;

        emit ShopRated(purchase.seller, msg.sender, purchaseId, rating);
    }

    /**
     * Rating is returned in the range 10-50, to display it as "4.2"
     * There are no floats in Solidity...
     */
    function getShopRating(address owner_) external view returns (uint256 rating, uint256 ratingCount) {
        Shop memory shop = shops[owner_];
        require(shop.owner != address(0), "Shop not found");

        if (shop.ratingCount == 0) return (0, 0);

        return ((shop.ratingSum * 10) / shop.ratingCount, shop.ratingCount);
    }

    // ==================== Match-Maker Functions ====================

    /**
     * @notice Register as a match-maker
     * @param name_ Human-readable name/alias for the match-maker
     * @param feePercentage_ Fee in basis points (100 = 1%, max 1000 = 10%)
     * @return matchmakerId The ID of the registered match-maker
     */
    function registerMatchMaker(string calldata name_, uint16 feePercentage_) external returns (uint256) {
        require(bytes(name_).length > 0, "Name required");
        require(feePercentage_ <= MAX_MATCHMAKER_FEE, "Fee exceeds maximum");
        require(matchMakerIdByOwner[msg.sender] == 0, "Already registered");

        uint256 matchmakerId = _nextMatchMakerId++;

        matchMakers[matchmakerId] = MatchMaker({
            id: matchmakerId,
            owner: msg.sender,
            name: name_,
            feePercentage: feePercentage_,
            registeredAt: block.timestamp,
            active: true,
            feesAccumulated: 0
        });

        matchMakerIdByOwner[msg.sender] = matchmakerId;

        emit MatchMakerRegistered(matchmakerId, msg.sender, name_, feePercentage_);

        return matchmakerId;
    }

    /**
     * @notice Update match-maker fee percentage
     * @param newFeePercentage_ New fee in basis points (100 = 1%, max 1000 = 10%)
     * @dev Only the match-maker owner can update their fee
     * @dev Fee changes only affect new purchases (existing purchases use snapshot)
     */
    function updateMatchMakerFee(uint16 newFeePercentage_) external {
        uint256 matchmakerId = matchMakerIdByOwner[msg.sender];
        require(matchmakerId != 0, "Not a match-maker");
        require(newFeePercentage_ <= MAX_MATCHMAKER_FEE, "Fee exceeds maximum");

        MatchMaker storage matchmaker = matchMakers[matchmakerId];
        require(matchmaker.active, "Match-maker not active");

        uint16 oldFee = matchmaker.feePercentage;
        matchmaker.feePercentage = newFeePercentage_;

        emit MatchMakerFeeUpdated(matchmakerId, oldFee, newFeePercentage_);
    }

    /**
     * @notice Get match-maker details by ID
     * @param matchmakerId_ Match-maker ID
     * @return MatchMaker struct
     */
    function getMatchMaker(uint256 matchmakerId_) external view returns (MatchMaker memory) {
        return matchMakers[matchmakerId_];
    }

    /**
     * @notice Check if an address is a registered match-maker
     * @param owner_ Address to check
     * @return True if the address is a registered and active match-maker
     */
    function isMatchMakerRegistered(address owner_) external view returns (bool) {
        uint256 matchmakerId = matchMakerIdByOwner[owner_];
        if (matchmakerId == 0) return false;
        return matchMakers[matchmakerId].active;
    }

    /**
     * @notice Get match-maker accumulated fees for a specific payment asset
     * @param matchmakerId_ Match-maker ID
     * @param asset_ Payment asset address (address(0) for native)
     * @return amount Accumulated fees in the specified asset
     */
    function getMatchMakerFees(uint256 matchmakerId_, address asset_) external view returns (uint256 amount) {
        return matchMakerFeesByAsset[matchmakerId_][asset_];
    }

    /**
     * @notice Claim accumulated match-maker fees
     * @param toAddress_ Address to send fees to
     * @param asset_ Payment asset to claim (address(0) for native)
     * @dev Only the match-maker owner can claim their fees
     */
    function claimMatchMakerFees(address toAddress_, address asset_) external nonReentrant {
        require(toAddress_ != address(0), "Invalid recipient");

        uint256 matchmakerId = matchMakerIdByOwner[msg.sender];
        require(matchmakerId != 0, "Not a match-maker");

        uint256 amount = matchMakerFeesByAsset[matchmakerId][asset_];
        require(amount > 0, "No fees to claim");

        // Reset accumulated fees before transfer (CEI pattern)
        matchMakerFeesByAsset[matchmakerId][asset_] = 0;

        // Transfer fees
        _transferFunds(toAddress_, amount, asset_);

        emit MatchMakerFeesClaimed(matchmakerId, toAddress_, amount, asset_);
    }

    /**
     * @notice Get total number of match-makers registered
     * @return Total match-maker count
     */
    function getTotalMatchMakers() external view returns (uint256) {
        return _nextMatchMakerId > 0 ? _nextMatchMakerId - 1 : 0;
    }

    // ==================== Item Discovery Functions ====================

    /**
     * @notice Get all active item IDs (paginated)
     * @param offset_ Starting index
     * @param limit_ Maximum number of item IDs to return
     * @return itemIds Array of active item IDs
     * @return total Total count of active items
     */
    function getAllActiveItemIds(
        uint256 offset_,
        uint256 limit_
    ) external view returns (uint256[] memory itemIds, uint256 total) {
        require(limit_ > 0 && limit_ <= 100, "Limit must be between 1 and 100");

        // Collect active items with offset and limit
        uint256[] memory tempIds = new uint256[](limit_);
        uint256 activeCount = 0;
        uint256 resultIndex = 0;

        for (uint256 i = 1; i < _nextItemId; i++) {
            if (items[i].active) {
                if (activeCount >= offset_ && resultIndex < limit_) {
                    tempIds[resultIndex++] = i;
                }
                activeCount++;
            }
        }

        total = activeCount;

        // Copy to correctly-sized array
        itemIds = new uint256[](resultIndex);
        for (uint256 i = 0; i < resultIndex; i++) {
            itemIds[i] = tempIds[i];
        }
    }

    /**
     * @notice Get multiple items by their IDs
     * @param itemIds_ Array of item IDs to fetch
     * @return Array of Item structs
     */
    function getMultipleItems(uint256[] calldata itemIds_) external view returns (Item[] memory) {
        require(itemIds_.length <= 100, "Too many items requested");

        Item[] memory result = new Item[](itemIds_.length);

        for (uint256 i = 0; i < itemIds_.length; i++) {
            result[i] = items[itemIds_[i]];
        }

        return result;
    }
}
