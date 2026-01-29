import { env } from '../../tools/lib/index.ts'
import { abis } from '../../codegen/abis.ts'
import { Artifacts, solidity } from '../lib.ts'
import { deploy as deployContract } from '../../tools/lib/index.ts'
import { Hex, keccak256, toHex, parseEther } from 'viem'

// Helper to create a bytes32 value from string
function toBytes32(str: string): Hex {
    const encoder = new TextEncoder()
    const bytes = encoder.encode(str)
    const hex = Array.from(bytes)
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('')
        .padEnd(64, '0')
    return `0x${hex}` as Hex
}

// Test constants (matching Solidity tests)
const CID_1 = keccak256(toHex('content1'))
const CID_2 = keccak256(toHex('content2'))
const METADATA_CID = keccak256(toHex('metadata1'))

// Credential classes
const CLASS_TICKET = 'web3summit-2026-ga'
const CLASS_BADGE = 'contributor-badge'
const CLASS_POINTS = 'loyalty-points'
const CLASS_TICKETS = 'drink-tickets'

// Key material for KeyRegistry
const aliceIk = keccak256(toHex('alice-identity-key'))
const aliceSpk = keccak256(toHex('alice-signed-prekey'))
const aliceSigningKey = keccak256(toHex('alice-signing-key'))
// 64-byte signature
const aliceSpkSig = `0x${keccak256(toHex('sig-part1')).slice(2)}${keccak256(toHex('sig-part2')).slice(2)}` as Hex

// Counter for unique names
let nameCounter = 0
function uniqueName(base: string): string {
    return `${base}${Date.now().toString(36)}${(nameCounter++).toString(36)}`
}

// One year in seconds
const ONE_YEAR = 365n * 24n * 60n * 60n

export const protocolCommonsContracts: Artifacts = [
    // ============ Store Contract ============
    {
        id: 'Store',
        srcs: [...solidity('Store.sol', 'Store')],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [
            {
                name: 'set',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Store,
                        functionName: 'set',
                        args: ['mykey', CID_1],
                    })
                },
            },
            {
                name: 'set_update',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Store,
                        functionName: 'set',
                        args: ['mykey', CID_2],
                    })
                },
            },
            {
                name: 'delete_',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Store,
                        functionName: 'delete_',
                        args: ['mykey'],
                    })
                },
            },
            {
                name: 'delegate',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Store,
                        functionName: 'delegate',
                        args: [env.wallet2.account.address, 'notes/*'],
                    })
                },
            },
            {
                name: 'setFor',
                exec: (address) => {
                    return env.wallet2.writeContract({
                        address,
                        abi: abis.Store,
                        functionName: 'setFor',
                        args: [env.wallet.account.address, 'notes/meeting', CID_1],
                    })
                },
            },
            {
                name: 'deleteFor',
                exec: (address) => {
                    return env.wallet2.writeContract({
                        address,
                        abi: abis.Store,
                        functionName: 'deleteFor',
                        args: [env.wallet.account.address, 'notes/meeting'],
                    })
                },
            },
            {
                name: 'revokeDelegation',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Store,
                        functionName: 'revokeDelegation',
                        args: [env.wallet2.account.address, 'notes/*'],
                    })
                },
            },
        ],
    },

    // ============ Log Contract ============
    {
        id: 'Log',
        srcs: [...solidity('Log.sol', 'Log')],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [
            {
                name: 'create_nonpermissioned',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Log,
                        functionName: 'create',
                        args: [false],
                    })
                },
            },
            {
                name: 'create_permissioned',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Log,
                        functionName: 'create',
                        args: [true],
                    })
                },
            },
            {
                name: 'append',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Log,
                        functionName: 'append',
                        args: [1n, CID_1],
                    })
                },
            },
            {
                name: 'append_2',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Log,
                        functionName: 'append',
                        args: [1n, CID_2],
                    })
                },
            },
            {
                name: 'addWriter',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Log,
                        functionName: 'addWriter',
                        args: [2n, env.wallet2.account.address],
                    })
                },
            },
            {
                name: 'removeWriter',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Log,
                        functionName: 'removeWriter',
                        args: [2n, env.wallet2.account.address],
                    })
                },
            },
            {
                name: 'transfer',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Log,
                        functionName: 'transfer',
                        args: [1n, env.wallet2.account.address],
                    })
                },
            },
        ],
    },

    // ============ NonFungibleCredential Contract ============
    {
        id: 'NonFungibleCredential',
        srcs: [...solidity('NonFungibleCredential.sol', 'NonFungibleCredential')],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [
            {
                name: 'issue_transferable',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.NonFungibleCredential,
                        functionName: 'issue',
                        args: [env.wallet2.account.address, CLASS_TICKET, METADATA_CID, true, 0n],
                    })
                },
            },
            {
                name: 'issue_nontransferable',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.NonFungibleCredential,
                        functionName: 'issue',
                        args: [env.wallet2.account.address, CLASS_BADGE, METADATA_CID, false, 0n],
                    })
                },
            },
            {
                name: 'issue_with_expiry',
                exec: (address) => {
                    const expiry = BigInt(Math.floor(Date.now() / 1000)) + ONE_YEAR
                    return env.wallet.writeContract({
                        address,
                        abi: abis.NonFungibleCredential,
                        functionName: 'issue',
                        args: [env.wallet2.account.address, CLASS_TICKET, METADATA_CID, true, expiry],
                    })
                },
            },
            {
                name: 'transfer',
                exec: (address) => {
                    return env.wallet2.writeContract({
                        address,
                        abi: abis.NonFungibleCredential,
                        functionName: 'transfer',
                        args: [1n, env.wallet.account.address],
                    })
                },
            },
            {
                name: 'updateMetadata',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.NonFungibleCredential,
                        functionName: 'updateMetadata',
                        args: [1n, CID_2],
                    })
                },
            },
            {
                name: 'revoke',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.NonFungibleCredential,
                        functionName: 'revoke',
                        args: [2n],
                    })
                },
            },
        ],
    },

    // ============ FungibleCredential Contract ============
    {
        id: 'FungibleCredential',
        srcs: [...solidity('FungibleCredential.sol', 'FungibleCredential')],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [
            {
                name: 'createClass_transferable',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.FungibleCredential,
                        functionName: 'createClass',
                        args: [CLASS_POINTS, METADATA_CID, 0n, true],
                    })
                },
            },
            {
                name: 'createClass_nontransferable',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.FungibleCredential,
                        functionName: 'createClass',
                        args: [CLASS_TICKETS, METADATA_CID, 1000n, false],
                    })
                },
            },
            {
                name: 'issue',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.FungibleCredential,
                        functionName: 'issue',
                        args: [1n, env.wallet2.account.address, 100n],
                    })
                },
            },
            {
                name: 'issue_more',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.FungibleCredential,
                        functionName: 'issue',
                        args: [1n, env.wallet2.account.address, 50n],
                    })
                },
            },
            {
                name: 'transfer',
                exec: (address) => {
                    return env.wallet2.writeContract({
                        address,
                        abi: abis.FungibleCredential,
                        functionName: 'transfer',
                        args: [1n, env.wallet.account.address, 50n],
                    })
                },
            },
            {
                name: 'burn',
                exec: (address) => {
                    return env.wallet2.writeContract({
                        address,
                        abi: abis.FungibleCredential,
                        functionName: 'burn',
                        args: [1n, 30n],
                    })
                },
            },
            {
                name: 'revoke',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.FungibleCredential,
                        functionName: 'revoke',
                        args: [1n, env.wallet2.account.address, 20n],
                    })
                },
            },
        ],
    },

    // ============ DotNS Contract ============
    {
        id: 'DotNS',
        srcs: [...solidity('DotNS.sol', 'DotNS')],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [
            {
                name: 'register',
                exec: (address) => {
                    const name = uniqueName('bench')
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'register',
                        args: [name, 0n],
                    })
                },
            },
            {
                name: 'register_with_duration',
                exec: (address) => {
                    const name = uniqueName('test')
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'register',
                        args: [name, ONE_YEAR],
                    })
                },
            },
            {
                name: 'setAddress',
                exec: async (address) => {
                    const name = uniqueName('addr')
                    await env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'register',
                        args: [name, 0n],
                    })
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'setAddress',
                        args: [`${name}.dot`, env.wallet2.account.address],
                    })
                },
            },
            {
                name: 'setMetadata',
                exec: async (address) => {
                    const name = uniqueName('meta')
                    await env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'register',
                        args: [name, 0n],
                    })
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'setMetadata',
                        args: [`${name}.dot`, METADATA_CID],
                    })
                },
            },
            {
                name: 'transfer',
                exec: async (address) => {
                    const name = uniqueName('xfer')
                    await env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'register',
                        args: [name, 0n],
                    })
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'transfer',
                        args: [`${name}.dot`, env.wallet2.account.address],
                    })
                },
            },
            {
                name: 'renew',
                exec: async (address) => {
                    const name = uniqueName('renew')
                    await env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'register',
                        args: [name, ONE_YEAR],
                    })
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'renew',
                        args: [`${name}.dot`, ONE_YEAR],
                    })
                },
            },
            {
                name: 'release',
                exec: async (address) => {
                    const name = uniqueName('release')
                    await env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'register',
                        args: [name, 0n],
                    })
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'release',
                        args: [`${name}.dot`],
                    })
                },
            },
            {
                name: 'createSubdomain',
                exec: async (address) => {
                    const name = uniqueName('parent')
                    await env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'register',
                        args: [name, 0n],
                    })
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'createSubdomain',
                        args: [`${name}.dot`, 'payments', env.wallet2.account.address, env.wallet2.account.address],
                    })
                },
            },
            {
                name: 'setSubdomainOwner',
                exec: async (address) => {
                    const name = uniqueName('sub')
                    await env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'register',
                        args: [name, 0n],
                    })
                    await env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'createSubdomain',
                        args: [`${name}.dot`, 'work', env.wallet2.account.address, env.wallet2.account.address],
                    })
                    return env.wallet.writeContract({
                        address,
                        abi: abis.DotNS,
                        functionName: 'setSubdomainOwner',
                        args: [`${name}.dot`, 'work', env.wallet.account.address],
                    })
                },
            },
        ],
    },

    // ============ KeyRegistry Contract ============
    {
        id: 'KeyRegistry',
        srcs: [...solidity('KeyRegistry.sol', 'KeyRegistry')],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [
            {
                name: 'registerIdentity',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.KeyRegistry,
                        functionName: 'registerIdentity',
                        args: [aliceIk, aliceSpk, aliceSigningKey, aliceSpkSig],
                    })
                },
            },
            {
                name: 'updateSignedPrekey',
                exec: (address) => {
                    const newSpk = keccak256(toHex('new-signed-prekey'))
                    const newSig = `0x${keccak256(toHex('new-sig-1')).slice(2)}${keccak256(toHex('new-sig-2')).slice(2)}` as Hex
                    return env.wallet.writeContract({
                        address,
                        abi: abis.KeyRegistry,
                        functionName: 'updateSignedPrekey',
                        args: [newSpk, newSig],
                    })
                },
            },
            {
                name: 'uploadOneTimePrekeys',
                exec: (address) => {
                    const otks = [
                        keccak256(toHex('otk-1')),
                        keccak256(toHex('otk-2')),
                        keccak256(toHex('otk-3')),
                    ]
                    return env.wallet.writeContract({
                        address,
                        abi: abis.KeyRegistry,
                        functionName: 'uploadOneTimePrekeys',
                        args: [otks],
                    })
                },
            },
            {
                name: 'fetchPrekeyBundle',
                exec: (address) => {
                    return env.wallet2.writeContract({
                        address,
                        abi: abis.KeyRegistry,
                        functionName: 'fetchPrekeyBundle',
                        args: [env.wallet.account.address],
                    })
                },
            },
        ],
    },

    // ============ Escrow Contract ============
    {
        id: 'Escrow',
        srcs: [...solidity('Escrow.sol', 'Escrow')],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [
            {
                name: 'create_simple',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Escrow,
                        functionName: 'create',
                        args: [
                            env.wallet2.account.address, // beneficiary
                            '0x0000000000000000000000000000000000000000', // no arbiter
                            0n, // no releaseTime
                            0n, // no expiryTime
                        ],
                        value: parseEther('0.001'),
                    })
                },
            },
            {
                name: 'create_with_arbiter',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Escrow,
                        functionName: 'create',
                        args: [
                            env.wallet2.account.address, // beneficiary
                            '0x0000000000000000000000000000000000000003', // arbiter
                            0n, // no releaseTime
                            0n, // no expiryTime
                        ],
                        value: parseEther('0.001'),
                    })
                },
            },
            {
                name: 'create_with_releaseTime',
                exec: (address) => {
                    const releaseTime = BigInt(Math.floor(Date.now() / 1000)) + 86400n // 1 day
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Escrow,
                        functionName: 'create',
                        args: [
                            env.wallet2.account.address,
                            '0x0000000000000000000000000000000000000000',
                            releaseTime,
                            0n,
                        ],
                        value: parseEther('0.001'),
                    })
                },
            },
            {
                name: 'create_with_expiry',
                exec: (address) => {
                    const expiryTime = BigInt(Math.floor(Date.now() / 1000)) + 604800n // 7 days
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Escrow,
                        functionName: 'create',
                        args: [
                            env.wallet2.account.address,
                            '0x0000000000000000000000000000000000000000',
                            0n,
                            expiryTime,
                        ],
                        value: parseEther('0.001'),
                    })
                },
            },
            {
                name: 'release',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Escrow,
                        functionName: 'release',
                        args: [1n],
                    })
                },
            },
            {
                name: 'refund',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Escrow,
                        functionName: 'refund',
                        args: [3n],
                    })
                },
            },
        ],
    },
]
