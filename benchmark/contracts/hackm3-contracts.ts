import { env } from '../../tools/lib/index.ts'
import { abis } from '../../codegen/abis.ts'
import { Artifacts, solidity } from '../lib.ts'
import { deploy as deployContract } from '../../tools/lib/index.ts'
import { Hex, keccak256, toHex } from 'viem'

// Helper to create test data
const testDocId = keccak256(toHex('test-document-1'))
const testDocId2 = keccak256(toHex('test-document-2'))
const contentHash = keccak256(toHex('document content'))
const contentHash2 = keccak256(toHex('updated document content'))
const ipfsCid = toHex('QmTest123456789').slice(0, 66) as Hex // Truncate to bytes32-like
const ipfsCidBytes = '0x516d5465737431323334353637383900000000000000000000000000000000' as Hex
const encryptedShare = '0x656e637279707465642d6b65792d64617461000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000' as Hex

// Permission levels
const PERMISSION_VIEW = 1
const PERMISSION_EDIT = 3
const PERMISSION_ADMIN = 4

// Keys for registerKeys
const encryptionKey = keccak256(toHex('encryption-key'))
const signingKey = keccak256(toHex('signing-key'))

export const hackm3Contracts: Artifacts = [
    // ============ DocumentAccessManagement Contract ============
    {
        id: 'DocumentAccessManagement',
        srcs: [...solidity('DocumentAccessManagement.sol', 'DocumentAccessManagement')],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [
            // Create document (via updateDocument when document doesn't exist)
            {
                name: 'createDocument',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DocumentAccessManagement,
                        functionName: 'updateDocument',
                        args: [
                            testDocId,
                            contentHash,
                            ipfsCidBytes,
                            '0x0000000000000000000000000000000000000000' as Hex, // sessionOwner
                            '0x0000000000000000000000000000000000000000000000000000000000000000' as Hex, // messageHash
                            0, // v
                            '0x0000000000000000000000000000000000000000000000000000000000000000' as Hex, // r
                            '0x0000000000000000000000000000000000000000000000000000000000000000' as Hex, // s
                        ],
                    })
                },
            },
            // Update existing document
            {
                name: 'updateDocument',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DocumentAccessManagement,
                        functionName: 'updateDocument',
                        args: [
                            testDocId,
                            contentHash2,
                            ipfsCidBytes,
                            '0x0000000000000000000000000000000000000000' as Hex,
                            '0x0000000000000000000000000000000000000000000000000000000000000000' as Hex,
                            0,
                            '0x0000000000000000000000000000000000000000000000000000000000000000' as Hex,
                            '0x0000000000000000000000000000000000000000000000000000000000000000' as Hex,
                        ],
                    })
                },
            },
            // Register keys
            {
                name: 'registerKeys',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DocumentAccessManagement,
                        functionName: 'registerKeys',
                        args: [
                            encryptionKey,
                            signingKey,
                            '0x0000000000000000000000000000000000000000' as Hex, // sessionKey (disabled)
                        ],
                    })
                },
            },
            // Grant access with encrypted share
            {
                name: 'grantAccessWithShare',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DocumentAccessManagement,
                        functionName: 'grantAccessWithShare',
                        args: [
                            testDocId,
                            env.wallet2.account.address, // user
                            PERMISSION_EDIT, // permission level
                            0n, // expiresAt (no expiration)
                            encryptedShare, // encrypted share
                            '0x0000000000000000000000000000000000000000' as Hex, // sessionOwner
                        ],
                    })
                },
            },
            // Revoke access
            {
                name: 'revokeAccess',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DocumentAccessManagement,
                        functionName: 'revokeAccess',
                        args: [
                            testDocId,
                            env.wallet2.account.address, // user
                            '0x0000000000000000000000000000000000000000' as Hex, // sessionOwner
                        ],
                    })
                },
            },
            // Create second document for transfer test
            {
                name: 'createDocument2',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DocumentAccessManagement,
                        functionName: 'updateDocument',
                        args: [
                            testDocId2,
                            contentHash,
                            ipfsCidBytes,
                            '0x0000000000000000000000000000000000000000' as Hex,
                            '0x0000000000000000000000000000000000000000000000000000000000000000' as Hex,
                            0,
                            '0x0000000000000000000000000000000000000000000000000000000000000000' as Hex,
                            '0x0000000000000000000000000000000000000000000000000000000000000000' as Hex,
                        ],
                    })
                },
            },
            // Transfer ownership
            {
                name: 'transferOwnership',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DocumentAccessManagement,
                        functionName: 'transferOwnership',
                        args: [
                            testDocId2,
                            env.wallet2.account.address, // newOwner
                            '0x0000000000000000000000000000000000000000' as Hex, // sessionOwner
                        ],
                    })
                },
            },
            // Configure public access
            {
                name: 'configurePublicAccess',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DocumentAccessManagement,
                        functionName: 'configurePublicAccess',
                        args: [
                            testDocId,
                            env.wallet2.account.address, // publicKey (use wallet2 as test address)
                            '0x0000000000000000000000000000000000000000' as Hex, // sessionOwner
                        ],
                    })
                },
            },
        ],
    },
]
