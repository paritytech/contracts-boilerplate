// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title MockMobRule
 * @notice Mock dispute resolution contract simulating MobRule pallet for Phase 2
 * @dev Admin-resolved disputes - will be replaced with real MobRule in Phase 3
 * @author mark3t Team
 */
contract MockMobRule is Ownable {
    /// @notice Verdict types
    /// @dev Pending = not yet resolved, InitiatorWins = initiator's claim is valid, InitiatorLoses = initiator's claim rejected
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
        address initiator; // Who raised the dispute (buyer or seller)
        string disputeMetadataCID; // IPFS CID from Bulletin Chain containing full dispute metadata (title, description, evidence)
        string counterEvidenceCID; // IPFS CID from Bulletin Chain containing counter-evidence from the other party (empty if not submitted)
        Verdict verdict; // Pending until resolved
        uint256 createdAt;
    }

    /// @notice Counter for case IDs
    uint256 private _nextCaseId;

    /// @notice Mapping of case ID to Case
    mapping(uint256 => Case) public cases;

    /// @notice Mapping of purchase ID to case ID (one dispute per purchase)
    mapping(uint256 => uint256) public purchaseToCase;

    /// @notice Marketplace contract address (immutable, set at deployment)
    address public immutable MARKETPLACE;

    /// @notice Event emitted when a new dispute case is created
    /// @param caseId The case ID
    /// @param purchaseId The purchase ID
    /// @param buyer Buyer address
    /// @param seller Seller address
    /// @param initiator Who raised the dispute (buyer or seller)
    /// @param disputeMetadataCID IPFS CID from Bulletin Chain containing full dispute metadata
    event CaseCreated(
        uint256 indexed caseId,
        uint256 indexed purchaseId,
        address indexed buyer,
        address seller,
        address initiator,
        string disputeMetadataCID
    );

    /// @notice Event emitted when counter-evidence is added to a case
    /// @param caseId The case ID
    /// @param submitter The address that submitted counter-evidence
    /// @param counterEvidenceCID IPFS CID from Bulletin Chain containing counter-evidence metadata
    event CounterEvidenceAdded(uint256 indexed caseId, address indexed submitter, string counterEvidenceCID);

    /// @notice Event emitted when a case is resolved
    /// @param caseId The case ID
    /// @param verdict The verdict (1 = InitiatorWins, 2 = InitiatorLoses)
    /// @dev Admin dashboard can listen to this event for instant updates
    event CaseResolved(uint256 indexed caseId, Verdict indexed verdict);

    /**
     * @notice Initialize MockMobRule contract
     * @param initialOwner Address that will own the contract (admin)
     * @param marketplace_ Address of Marketplace contract (immutable)
     */
    constructor(address initialOwner, address marketplace_) Ownable(initialOwner) {
        require(marketplace_ != address(0), "Invalid marketplace");
        MARKETPLACE = marketplace_;
        _nextCaseId = 1;
    }

    /**
     * @notice Create a new dispute case
     * @param purchaseId_ The purchase ID from Marketplace
     * @param buyer_ Buyer address
     * @param seller_ Seller address
     * @param initiator_ Who is raising the dispute (must be either buyer_ or seller_)
     * @param disputeMetadataCID_ IPFS CID from Bulletin Chain containing full dispute metadata (title, description, evidence)
     * @return caseId The ID of the created case
     */
    function createDispute(
        uint256 purchaseId_,
        address buyer_,
        address seller_,
        address initiator_,
        string memory disputeMetadataCID_
    ) external returns (uint256) {
        require(buyer_ != address(0), "Invalid buyer");
        require(seller_ != address(0), "Invalid seller");
        require(initiator_ != address(0), "Invalid initiator");
        require(initiator_ == buyer_ || initiator_ == seller_, "Initiator must be buyer or seller");
        require(bytes(disputeMetadataCID_).length > 0, "CID required");
        require(purchaseToCase[purchaseId_] == 0, "Dispute exists");

        uint256 caseId = _nextCaseId;
        ++_nextCaseId;
        cases[caseId] = Case({
            caseId: caseId,
            purchaseId: purchaseId_,
            buyer: buyer_,
            seller: seller_,
            initiator: initiator_,
            disputeMetadataCID: disputeMetadataCID_,
            counterEvidenceCID: "",
            verdict: Verdict.Pending,
            createdAt: block.timestamp
        });

        purchaseToCase[purchaseId_] = caseId;

        emit CaseCreated(caseId, purchaseId_, buyer_, seller_, initiator_, disputeMetadataCID_);

        return caseId;
    }

    /**
     * @notice Add counter-evidence to an existing dispute case
     * @param caseId_ The case ID
     * @param counterEvidenceCID_ IPFS CID from Bulletin Chain containing counter-evidence metadata
     * @dev Only the non-initiator party (buyer or seller) can add counter-evidence
     * @dev Can be called by Marketplace contract on behalf of users
     */
    function addCounterEvidence(uint256 caseId_, string memory counterEvidenceCID_) external {
        Case storage case_ = cases[caseId_];
        require(case_.caseId != 0, "Case does not exist");
        require(case_.verdict == Verdict.Pending, "Case already resolved");
        require(bytes(counterEvidenceCID_).length > 0, "CID required");
        require(bytes(case_.counterEvidenceCID).length == 0, "Counter-evidence already submitted");

        // Note: Marketplace contract verifies caller is buyer/seller and not initiator
        // We trust Marketplace's verification here

        case_.counterEvidenceCID = counterEvidenceCID_;

        // Emit event with Marketplace's msg.sender (the actual user)
        // Marketplace will pass the user address in the event
        emit CounterEvidenceAdded(caseId_, msg.sender, counterEvidenceCID_);
    }

    /**
     * @notice Accept fault and auto-resolve case in favor of initiator (Marketplace only)
     * @param caseId_ The case ID to resolve
     * @dev Can only be called by the Marketplace contract
     * @dev Automatically sets verdict to InitiatorWins
     */
    function acceptFault(uint256 caseId_) external {
        require(msg.sender == MARKETPLACE, "Unauthorized: only Marketplace can call this");

        Case storage case_ = cases[caseId_];
        require(case_.caseId != 0, "Case does not exist");
        require(case_.verdict == Verdict.Pending, "Case already resolved");

        case_.verdict = Verdict.InitiatorWins;

        emit CaseResolved(caseId_, Verdict.InitiatorWins);
    }

    /**
     * @notice Resolve a dispute case (admin only)
     * @param caseId_ The case ID to resolve
     * @param verdict_ The verdict (1 = InitiatorWins, 2 = InitiatorLoses)
     * @dev Cannot set verdict back to Pending
     */
    function resolveCase(uint256 caseId_, Verdict verdict_) external onlyOwner {
        Case storage case_ = cases[caseId_];
        require(case_.caseId != 0, "Case does not exist");
        require(case_.verdict == Verdict.Pending, "Case already resolved");
        require(verdict_ != Verdict.Pending, "Cannot set Pending");

        case_.verdict = verdict_;

        emit CaseResolved(caseId_, verdict_);
    }

    /**
     * @notice Get verdict for a case
     * @param caseId_ The case ID
     * @return verdict The verdict (0 = Pending, 1 = InitiatorWins, 2 = InitiatorLoses)
     * @dev Frontend polls this function to check dispute status
     * @dev If verdict == Pending, case is still being resolved
     * @dev If verdict == InitiatorWins, initiator can claim funds
     * @dev If verdict == InitiatorLoses, non-initiator can claim funds
     */
    function getVerdict(uint256 caseId_) external view returns (Verdict verdict) {
        Case memory case_ = cases[caseId_];
        require(case_.caseId != 0, "Case does not exist");

        return case_.verdict;
    }

    /**
     * @notice Get full case information
     * @param caseId_ The case ID
     * @return case_ The full Case struct
     */
    function getCase(uint256 caseId_) external view returns (Case memory) {
        Case memory case_ = cases[caseId_];
        require(case_.caseId != 0, "Case does not exist");
        return case_;
    }

    /**
     * @notice Get case ID for a purchase
     * @param purchaseId_ The purchase ID
     * @return caseId The case ID (0 if no dispute exists)
     */
    function getCaseIdByPurchase(uint256 purchaseId_) external view returns (uint256) {
        return purchaseToCase[purchaseId_];
    }

    /**
     * @notice Get total number of cases
     * @return total The total number of cases created
     */
    function getTotalCases() external view returns (uint256) {
        return _nextCaseId > 0 ? _nextCaseId - 1 : 0;
    }

    /**
     * @notice Withdraw native tokens (owner only)
     * @dev Allows owner to withdraw voting rewards accumulated in the contract
     * @param to_ Address to send tokens to
     * @param amount_ Amount to withdraw
     */
    function withdrawNative(address payable to_, uint256 amount_) external onlyOwner {
        require(to_ != address(0), "Invalid address");
        require(amount_ > 0, "Amount must be greater than 0");
        require(address(this).balance >= amount_, "Insufficient balance");

        (bool success, ) = to_.call{value: amount_}("");
        require(success, "Transfer failed");
    }

    /**
     * @notice Withdraw ERC20 tokens (owner only)
     * @dev Allows owner to withdraw voting rewards accumulated in the contract
     * @param token_ Token contract address
     * @param to_ Address to send tokens to
     * @param amount_ Amount to withdraw
     */
    function withdrawERC20(address token_, address to_, uint256 amount_) external onlyOwner {
        require(token_ != address(0), "Invalid token address");
        require(to_ != address(0), "Invalid address");
        require(amount_ > 0, "Amount must be greater than 0");

        // Using low-level call to avoid import dependency
        (bool success, bytes memory data) = token_.call(
            abi.encodeWithSignature("transfer(address,uint256)", to_, amount_)
        );
        require(success && (data.length == 0 || abi.decode(data, (bool))), "Transfer failed");
    }

    /**
     * @notice Receive native tokens (for voting rewards)
     * @dev Allows contract to receive native tokens from Marketplace
     */
    receive() external payable {}
}
