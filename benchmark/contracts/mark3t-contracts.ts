import { env } from '../../tools/lib/index.ts'
import { abis } from '../../codegen/abis.ts'
import { Artifacts, solidity } from '../lib.ts'
import { deploy as deployContract } from '../../tools/lib/index.ts'
import { uploadCodePVM } from '../../tools/lib/pvm.ts'
import { Hex, parseEther, encodeFunctionData } from 'viem'

// Test constants
const METADATA_HASH = 'QmTest123456789'
const ITEM_NAME = 'Test Item'
const ITEM_CATEGORY = 'electronics'
const ITEM_PRICE = parseEther('0.1')
const SHOP_NAME = 'Test Shop'
const SHOP_METADATA_CID = 'QmTestShopMetadata'
const SHOP_PUBLIC_KEY = '0x' + '0'.repeat(64)
const DISPUTE_METADATA_CID = 'QmDisputeEvidence123'
const COUNTER_EVIDENCE_CID = 'QmCounterEvidence456'

// Counter for unique names
let nameCounter = 0
function uniqueName(base: string): string {
    return `${base}${Date.now().toString(36)}${(nameCounter++).toString(36)}`
}

// Helper for encrypted data
function dummyEncryptedData(): Hex {
    return '0x1234567890abcdef1234567890abcdef' as Hex
}

// Store deployed contract addresses for cross-contract interactions
let marketplaceProxyAddress: Hex | undefined
let marketplaceImplAddress: Hex | undefined
let mockMobRuleAddress: Hex | undefined

// Track purchase IDs per proxy address (each proxy has fresh on-chain state starting at 1)
const nextPurchaseIdByProxy: Record<string, bigint> = {}
function getNextPurchaseId(proxyAddress: Hex): bigint {
    if (!nextPurchaseIdByProxy[proxyAddress]) {
        nextPurchaseIdByProxy[proxyAddress] = 1n
    }
    return nextPurchaseIdByProxy[proxyAddress]++
}

export const mark3tContracts: Artifacts = [
    // ============ Mark3tMarketplace Implementation Contract (PVM only - too big for EVM) ============
    {
        id: 'Mark3tMarketplace',
        srcs: solidity('Mark3tMarketplace.sol', 'Marketplace'),
        pvmOnly: true,
        deploy: async (id, name, bytecode) => {
            // Upload ProxyAdmin bytecode early so it's available when the proxy deploys
            if (env.chain.name !== 'Geth') {
                const code = env.getByteCode('ProxyAdmin', 'polkavm')
                await uploadCodePVM(code)
            }

            // Deploy the implementation contract (no constructor args for upgradeable)
            const receipt = await deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
            marketplaceImplAddress = receipt.contractAddress as Hex
            return receipt
        },
        calls: [], // Calls will be through the proxy
    },

    // ============ Mark3tMarketplaceProxy Contract (EVM and PVM) ============
    {
        id: 'Mark3tMarketplaceProxy',
        srcs: [...solidity('Mark3tMarketplaceProxy.sol', 'Mark3tMarketplaceProxy')],
        deploy: async (id, name, bytecode) => {
            if (!marketplaceImplAddress) {
                throw new Error('Marketplace implementation must be deployed first')
            }

            // Encode the initialize() call
            const initData = encodeFunctionData({
                abi: abis.Marketplace,
                functionName: 'initialize',
                args: [env.wallet.account.address],
            })

            // Deploy the proxy with implementation address, owner, and init data
            const receipt = await deployContract({
                name: { id, name },
                bytecode,
                args: [marketplaceImplAddress, env.wallet.account.address, initData],
            })
            marketplaceProxyAddress = receipt.contractAddress as Hex
            return receipt
        },
        calls: [
            // Shop operations
            {
                name: 'registerShop',
                exec: async (address) => {
                    // Register a new shop with unique name
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'registerShop',
                        args: [uniqueName('Shop'), 'QmUpdatedMetadata', SHOP_PUBLIC_KEY],
                    })
                },
            },

            // Item creation - Digital
            {
                name: 'createItem_digital',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'createItem',
                        args: [
                            0, // ItemType.DIGITAL
                            uniqueName(ITEM_NAME),
                            ITEM_CATEGORY,
                            METADATA_HASH,
                            ITEM_PRICE,
                            '0x0000000000000000000000000000000000000000', // NATIVE_ASSET
                        ],
                    })
                },
            },

            // Item creation - Physical
            {
                name: 'createItem_physical',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'createItem',
                        args: [
                            1, // ItemType.PHYSICAL
                            uniqueName(ITEM_NAME),
                            'clothing',
                            METADATA_HASH,
                            ITEM_PRICE,
                            '0x0000000000000000000000000000000000000000',
                        ],
                    })
                },
            },

            // Item update
            {
                name: 'updateItem',
                exec: async (address) => {
                    // Create an item first, then update it
                    const tx = await env.wallet.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'createItem',
                        args: [0, 'Item to Update', 'books', METADATA_HASH, ITEM_PRICE, '0x0000000000000000000000000000000000000000'],
                    })
                    await env.wallet.waitForTransactionReceipt({ hash: tx })

                    const totalItems = await env.wallet.readContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'getTotalItems',
                        args: [],
                    })

                    return env.wallet.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'updateItem',
                        args: [
                            totalItems,
                            'Updated Item Name',
                            'art',
                            'QmUpdatedHash',
                            parseEther('0.2'),
                        ],
                    })
                },
            },

            // Item deactivation
            {
                name: 'deactivateItem',
                exec: async (address) => {
                    // Create an item first, then deactivate it
                    const tx = await env.wallet.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'createItem',
                        args: [0, 'Item to Deactivate', 'misc', METADATA_HASH, ITEM_PRICE, '0x0000000000000000000000000000000000000000'],
                    })
                    await env.wallet.waitForTransactionReceipt({ hash: tx })

                    const totalItems = await env.wallet.readContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'getTotalItems',
                        args: [],
                    })

                    return env.wallet.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'deactivateItem',
                        args: [totalItems],
                    })
                },
            },

            // Purchase digital item (instant payment)
            {
                name: 'purchaseItem_digital',
                exec: async (address) => {
                    // Create a digital item first
                    const tx = await env.wallet.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'createItem',
                        args: [0, 'Digital Product', 'software', METADATA_HASH, ITEM_PRICE, '0x0000000000000000000000000000000000000000'],
                    })
                    await env.wallet.waitForTransactionReceipt({ hash: tx })

                    const totalItems = await env.wallet.readContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'getTotalItems',
                        args: [],
                    })

                    // Track purchase ID
                    getNextPurchaseId(address)

                    // Purchase with wallet2 (buyer)
                    return env.wallet2.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'purchaseItem',
                        args: [
                            totalItems,
                            0n, // matchmakerId = 0 (direct purchase)
                            '0x', // empty shipping address for digital
                            '', // empty buyer public key for digital
                        ],
                        value: ITEM_PRICE,
                    })
                },
            },

            // Purchase physical item (escrow)
            {
                name: 'purchaseItem_physical',
                exec: async (address) => {
                    // Create a physical item first
                    const tx = await env.wallet.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'createItem',
                        args: [1, 'Physical Product', 'hardware', METADATA_HASH, ITEM_PRICE, '0x0000000000000000000000000000000000000000'],
                    })
                    await env.wallet.waitForTransactionReceipt({ hash: tx })

                    const totalItems = await env.wallet.readContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'getTotalItems',
                        args: [],
                    })

                    // Track purchase ID
                    getNextPurchaseId(address)

                    // Purchase with wallet2 (buyer)
                    return env.wallet2.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'purchaseItem',
                        args: [
                            totalItems,
                            0n,
                            dummyEncryptedData(), // encrypted shipping address
                            SHOP_PUBLIC_KEY, // buyer public key
                        ],
                        value: ITEM_PRICE,
                    })
                },
            },

            // Mark as shipped
            {
                name: 'markAsShipped',
                exec: async (address) => {
                    // Create and purchase a physical item first
                    const createTx = await env.wallet.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'createItem',
                        args: [1, 'Shipping Test', 'goods', METADATA_HASH, ITEM_PRICE, '0x0000000000000000000000000000000000000000'],
                    })
                    await env.wallet.waitForTransactionReceipt({ hash: createTx })

                    const totalItems = await env.wallet.readContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'getTotalItems',
                        args: [],
                    })

                    const purchaseTx = await env.wallet2.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'purchaseItem',
                        args: [totalItems, 0n, dummyEncryptedData(), SHOP_PUBLIC_KEY],
                        value: ITEM_PRICE,
                    })
                    await env.wallet2.waitForTransactionReceipt({ hash: purchaseTx })

                    // Track the purchase ID (incremented after each physical item purchase)
                    const purchaseId = getNextPurchaseId(address)

                    // Mark as shipped (seller is wallet)
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'markAsShipped',
                        args: [
                            purchaseId,
                            '0x44484c3b545241434b313233' as Hex, // "DHL;TRACK123" encoded
                        ],
                    })
                },
            },

            // Match-maker registration
            {
                name: 'registerMatchMaker',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'registerMatchMaker',
                        args: [uniqueName('MatchMaker'), 250], // 2.5% fee
                    })
                },
            },

            // Match-maker fee update
            {
                name: 'updateMatchMakerFee',
                exec: async (address) => {
                    // Register a match-maker first
                    const regTx = await env.wallet2.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'registerMatchMaker',
                        args: [uniqueName('FeeUpdateMM'), 200],
                    })
                    await env.wallet2.waitForTransactionReceipt({ hash: regTx })

                    // Update fee
                    return env.wallet2.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'updateMatchMakerFee',
                        args: [500], // 5% fee
                    })
                },
            },

            // Purchase with matchmaker fee
            {
                name: 'purchaseItem_with_matchmaker',
                exec: async (address) => {
                    // Create digital item
                    const createTx = await env.wallet.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'createItem',
                        args: [0, 'MM Test Item', 'digital', METADATA_HASH, ITEM_PRICE, '0x0000000000000000000000000000000000000000'],
                    })
                    await env.wallet.waitForTransactionReceipt({ hash: createTx })

                    const totalItems = await env.wallet.readContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'getTotalItems',
                        args: [],
                    })

                    // Track purchase ID
                    getNextPurchaseId(address)

                    // Get matchmaker ID (should be 1 from previous registration)
                    // Calculate fee: 2.5% of 0.1 ETH = 0.0025 ETH
                    const matchmakerFee = (ITEM_PRICE * 250n) / 10000n
                    const totalPayment = ITEM_PRICE + matchmakerFee

                    return env.wallet2.writeContract({
                        address,
                        abi: abis.Marketplace,
                        functionName: 'purchaseItem',
                        args: [totalItems, 1n, '0x', ''], // matchmakerId = 1
                        value: totalPayment,
                    })
                },
            },
        ],
    },

    // ============ Mark3tMockMobRule Contract (EVM and PVM) ============
    {
        id: 'Mark3tMockMobRule',
        srcs: [...solidity('Mark3tMockMobRule.sol', 'MockMobRule')],
        deploy: async (id, name, bytecode) => {
            if (!marketplaceProxyAddress) {
                throw new Error('Marketplace proxy must be deployed first')
            }
            // Deploy with owner and marketplace proxy address
            const receipt = await deployContract({
                name: { id, name },
                bytecode,
                args: [env.wallet.account.address, marketplaceProxyAddress],
            })
            mockMobRuleAddress = receipt.contractAddress as Hex
            return receipt
        },
        setup: async () => {
            if (!marketplaceProxyAddress || !mockMobRuleAddress) {
                throw new Error('Both Marketplace proxy and MockMobRule must be deployed')
            }
            // Set MockMobRule address on Marketplace
            await env.wallet.writeContract({
                address: marketplaceProxyAddress,
                abi: abis.Marketplace,
                functionName: 'setMockMobRule',
                args: [mockMobRuleAddress],
            })
        },
        calls: [
            {
                name: 'createDispute',
                exec: async (address) => {
                    const uniquePurchaseId = BigInt(Date.now())
                    return env.wallet.writeContract({
                        address,
                        abi: abis.MockMobRule,
                        functionName: 'createDispute',
                        args: [
                            uniquePurchaseId,
                            env.wallet2.account.address, // buyer
                            env.wallet.account.address,  // seller
                            env.wallet2.account.address, // initiator
                            DISPUTE_METADATA_CID,
                        ],
                    })
                },
            },
            {
                name: 'addCounterEvidence',
                exec: async (address) => {
                    // Create a new dispute first, then add counter evidence
                    const uniquePurchaseId = BigInt(Date.now() + 1)
                    await env.wallet.writeContract({
                        address,
                        abi: abis.MockMobRule,
                        functionName: 'createDispute',
                        args: [
                            uniquePurchaseId,
                            env.wallet2.account.address,
                            env.wallet.account.address,
                            env.wallet2.account.address,
                            DISPUTE_METADATA_CID,
                        ],
                    })
                    // Get the case ID
                    const caseId = await env.wallet.readContract({
                        address,
                        abi: abis.MockMobRule,
                        functionName: 'getCaseIdByPurchase',
                        args: [uniquePurchaseId],
                    })
                    return env.wallet.writeContract({
                        address,
                        abi: abis.MockMobRule,
                        functionName: 'addCounterEvidence',
                        args: [caseId, COUNTER_EVIDENCE_CID],
                    })
                },
            },
            {
                name: 'resolveCase',
                exec: async (address) => {
                    // Create a new dispute and resolve it
                    const uniquePurchaseId = BigInt(Date.now() + 2)
                    await env.wallet.writeContract({
                        address,
                        abi: abis.MockMobRule,
                        functionName: 'createDispute',
                        args: [
                            uniquePurchaseId,
                            env.wallet2.account.address,
                            env.wallet.account.address,
                            env.wallet2.account.address,
                            DISPUTE_METADATA_CID,
                        ],
                    })
                    const caseId = await env.wallet.readContract({
                        address,
                        abi: abis.MockMobRule,
                        functionName: 'getCaseIdByPurchase',
                        args: [uniquePurchaseId],
                    })
                    // Resolve as InitiatorWins (verdict = 1)
                    return env.wallet.writeContract({
                        address,
                        abi: abis.MockMobRule,
                        functionName: 'resolveCase',
                        args: [caseId, 1], // InitiatorWins
                    })
                },
            },
        ],
    },
]
