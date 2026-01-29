import { env } from '../../tools/lib/index.ts'
import { abis } from '../../codegen/abis.ts'
import { Artifacts, solidity } from '../lib.ts'
import { deploy as deployContract } from '../../tools/lib/index.ts'
import { Hex, keccak256, toHex, encodePacked } from 'viem'

// Role hashes (keccak256 of role names)
const W3F_ROLE = keccak256(toHex('W3F'))
const VOLUNTEER_ROLE = keccak256(toHex('VOLUNTEER'))

// Ticket types enum
const TicketType = {
    Standard: 0,
    Staff: 1,
    Free: 2,
} as const

// Generate merkle leaf for an address (same as Solidity's keccak256(abi.encodePacked(address)))
function merkleLeaf(address: Hex): Hex {
    return keccak256(encodePacked(['address'], [address]))
}

// Empty proof for single-leaf tree
const emptyProof: Hex[] = []

// Price: 50 tokens with 6 decimals (like USDC)
const tokenPrice = 50n * 10n ** 6n

// Track deployed mock token address and merkle roots (set in setup)
let mockTokenAddress: Hex | null = null
let staffMerkleRoot: Hex | null = null
let freeMerkleRoot: Hex | null = null

export const w3sContracts: Artifacts = [
    // ============ W3S Ticketing Contract ============
    {
        id: 'W3S',
        srcs: [...solidity('W3S.sol', 'W3S')],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        setup: async () => {
            // Deploy MockERC20 token for testing
            const { loadAddresses } = await import('../lib.ts')
            const { readBytecode: readBytecodeUtil } = await import('../../utils/index.ts')
            const addresses = await loadAddresses()

            // Get all W3S contract addresses (both pvm and evm if they exist)
            const w3sAddresses: Hex[] = []
            if (addresses['W3S_pvm']) w3sAddresses.push(addresses['W3S_pvm'])
            if (addresses['W3S_evm']) w3sAddresses.push(addresses['W3S_evm'])

            if (w3sAddresses.length === 0) {
                throw new Error('W3S contract not deployed')
            }

            // Compute merkle roots now that env is initialized
            // For single-leaf merkle tree, the root IS the leaf
            staffMerkleRoot = merkleLeaf(env.wallet2.account.address)
            freeMerkleRoot = merkleLeaf(env.wallet2.account.address)

            // Deploy MockERC20 (proper ERC20 with approve/transferFrom returning bool)
            const mintAmount = 1000000n * 10n ** 6n // 1M tokens with 6 decimals
            const mockBytecode = readBytecodeUtil(
                env.chain.name === 'Geth' ? './codegen/evm/MockERC20.bin' : './codegen/pvm/MockERC20.polkavm'
            )

            const deployHash = await env.wallet.deployContract({
                abi: abis.MockERC20,
                bytecode: mockBytecode,
                args: ['Test USDT', 'USDT', 6],
            })
            const receipt = await env.wallet.waitForTransactionReceipt({ hash: deployHash })
            mockTokenAddress = receipt.contractAddress!

            // Mint tokens to wallet
            let hash = await env.wallet.writeContract({
                address: mockTokenAddress,
                abi: abis.MockERC20,
                functionName: 'mint',
                args: [env.wallet.account.address, mintAmount],
            })
            await env.wallet.waitForTransactionReceipt({ hash })

            // Configure all W3S variants with the same token and settings
            for (const w3sAddress of w3sAddresses) {
                // Configure payment token on W3S
                hash = await env.wallet.writeContract({
                    address: w3sAddress,
                    abi: abis.W3S,
                    functionName: 'configurePaymentToken',
                    args: [mockTokenAddress, true, tokenPrice],
                })
                await env.wallet.waitForTransactionReceipt({ hash })

                // Set merkle roots for staff and free tickets
                hash = await env.wallet.writeContract({
                    address: w3sAddress,
                    abi: abis.W3S,
                    functionName: 'setMerkleRoot',
                    args: [TicketType.Staff, staffMerkleRoot],
                })
                await env.wallet.waitForTransactionReceipt({ hash })

                hash = await env.wallet.writeContract({
                    address: w3sAddress,
                    abi: abis.W3S,
                    functionName: 'setMerkleRoot',
                    args: [TicketType.Free, freeMerkleRoot],
                })
                await env.wallet.waitForTransactionReceipt({ hash })

                // Grant volunteer role to wallet2
                hash = await env.wallet.writeContract({
                    address: w3sAddress,
                    abi: abis.W3S,
                    functionName: 'grantVolunteerRole',
                    args: [env.wallet2.account.address],
                })
                await env.wallet.waitForTransactionReceipt({ hash })

                // Approve W3S to spend tokens from wallet
                hash = await env.wallet.writeContract({
                    address: mockTokenAddress,
                    abi: abis.MockERC20,
                    functionName: 'approve',
                    args: [w3sAddress, mintAmount],
                })
                await env.wallet.waitForTransactionReceipt({ hash })
            }
        },
        calls: [
            // Configure payment token (admin)
            {
                name: 'configurePaymentToken',
                exec: async (address) => {
                    // Configure a new token (use a dummy address)
                    const dummyToken = '0x0000000000000000000000000000000000000001' as Hex
                    return env.wallet.writeContract({
                        address,
                        abi: abis.W3S,
                        functionName: 'configurePaymentToken',
                        args: [dummyToken, true, tokenPrice],
                    })
                },
            },
            // Set merkle root (admin) - update Free ticket root to avoid breaking redeemTicketStaff
            {
                name: 'setMerkleRoot',
                exec: (address) => {
                    const newRoot = keccak256(toHex('new-merkle-root'))
                    return env.wallet.writeContract({
                        address,
                        abi: abis.W3S,
                        functionName: 'setMerkleRoot',
                        args: [TicketType.Free, newRoot],
                    })
                },
            },
            // Grant volunteer role (admin)
            {
                name: 'grantVolunteerRole',
                exec: (address) => {
                    const newVolunteer = '0x0000000000000000000000000000000000000002' as Hex
                    return env.wallet.writeContract({
                        address,
                        abi: abis.W3S,
                        functionName: 'grantVolunteerRole',
                        args: [newVolunteer],
                    })
                },
            },
            // Buy ticket with ERC20
            {
                name: 'buyTicket',
                exec: async (address) => {
                    if (!mockTokenAddress) {
                        throw new Error('Mock token not deployed')
                    }
                    return env.wallet.writeContract({
                        address,
                        abi: abis.W3S,
                        functionName: 'buyTicket',
                        args: [mockTokenAddress],
                    })
                },
            },
            // Redeem staff ticket (with merkle proof)
            {
                name: 'redeemTicketStaff',
                exec: (address) => {
                    // wallet2 is in the staff merkle tree (root set in setup)
                    return env.wallet2.writeContract({
                        address,
                        abi: abis.W3S,
                        functionName: 'redeemTicketStaff',
                        args: [emptyProof],
                    })
                },
            },
            // Check in ticket (volunteer)
            {
                name: 'checkIn',
                exec: (address) => {
                    // wallet2 is a volunteer, check in ticket 0
                    return env.wallet2.writeContract({
                        address,
                        abi: abis.W3S,
                        functionName: 'checkIn',
                        args: [0n],
                    })
                },
            },
            // Pause sales (admin)
            {
                name: 'pauseSales',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.W3S,
                        functionName: 'pauseSales',
                        args: [],
                    })
                },
            },
            // Unpause sales (admin)
            {
                name: 'unpauseSales',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.W3S,
                        functionName: 'unpauseSales',
                        args: [],
                    })
                },
            },
            // Revoke volunteer role (admin)
            {
                name: 'revokeVolunteerRole',
                exec: (address) => {
                    const volunteerToRevoke = '0x0000000000000000000000000000000000000002' as Hex
                    return env.wallet.writeContract({
                        address,
                        abi: abis.W3S,
                        functionName: 'revokeVolunteerRole',
                        args: [volunteerToRevoke],
                    })
                },
            },
        ],
    },
]
