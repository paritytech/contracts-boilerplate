import { env } from '../../tools/lib/index.ts'
import { abis } from '../../codegen/abis.ts'
import { Artifacts, loadAddresses, solidity } from '../lib.ts'
import { deploy as deployContract } from '../../tools/lib/index.ts'
import { uploadCodePVM } from '../../tools/lib/pvm.ts'

const externalRecipient = '0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63'

/**
 * Real Ethereum contracts adapted for benchmarking
 * These are production contracts deployed on Ethereum mainnet
 */
export const ethereumContracts: Artifacts = [
    {
        id: 'TetherToken',
        srcs: [...solidity('ethereum-contracts/tether.sol', 'TetherToken')],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [100000000000n, 'Tether USD', 'USDT', 6n],
            })
        },
        calls: [
            {
                name: 'transfer',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.TetherToken,
                        functionName: 'transfer',
                        args: [env.wallet2.account.address, 10n],
                    })
                },
            },
            {
                name: 'approve',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.TetherToken,
                        functionName: 'approve',
                        args: [env.wallet2.account.address, 100n],
                    })
                },
            },
            {
                name: 'transferFrom',
                exec: async (address) => {
                    return await env.wallet2.writeContract({
                        address,
                        abi: abis.TetherToken,
                        functionName: 'transferFrom',
                        args: [
                            env.wallet.account.address,
                            env.wallet2.account.address,
                            10n,
                        ],
                    })
                },
            },
        ],
    },
    {
        id: 'WETH9',
        srcs: [...solidity('ethereum-contracts/weth.sol', 'WETH9')],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [
            {
                name: 'deposit',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.WETH9,
                        functionName: 'deposit',
                        args: [],
                        value: 1000000000000000000n,
                    })
                },
            },
            {
                name: 'transfer',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.WETH9,
                        functionName: 'transfer',
                        args: [env.wallet2.account.address, 10n],
                    })
                },
            },
            {
                name: 'withdraw',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.WETH9,
                        functionName: 'withdraw',
                        args: [10n],
                    })
                },
            },
        ],
    },
    {
        id: 'FiatTokenV2_2',
        srcs: [...solidity('ethereum-contracts/usdc_implementation.sol', 'FiatTokenV2_2')],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [],
    },
    {
        id: 'FiatTokenProxy',
        srcs: [...solidity('ethereum-contracts/usdc_proxy.sol', 'FiatTokenProxy')],
        deploy: async (id, name, bytecode) => {
            const addresses = await loadAddresses()
            const implementationKey = name.endsWith('_pvm')
                ? 'FiatTokenV2_2_pvm'
                : 'FiatTokenV2_2_evm'
            const implementation = addresses[implementationKey]
            if (!implementation) {
                throw new Error(`Missing ${implementationKey} address`)
            }
            return deployContract({
                name: { id, name },
                bytecode,
                args: [implementation],
            })
        },
        calls: [
            {
                name: 'changeAdmin',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.FiatTokenProxy,
                        functionName: 'changeAdmin',
                        args: [externalRecipient],
                    })
                },
            },
            {
                name: 'initialize',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.FiatTokenV2_2,
                        functionName: 'initialize',
                        args: [
                            'USD Coin',
                            'USDC',
                            'USD',
                            6,
                            env.wallet.account.address,
                            env.wallet.account.address,
                            env.wallet.account.address,
                            env.wallet.account.address,
                        ],
                    })
                },
            },
            {
                name: 'configureMinter',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.FiatTokenV2_2,
                        functionName: 'configureMinter',
                        args: [env.wallet.account.address, 1_000_000n],
                    })
                },
            },
            {
                name: 'mint',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.FiatTokenV2_2,
                        functionName: 'mint',
                        args: [env.wallet.account.address, 1_000_000n],
                    })
                },
            },
            {
                name: 'transfer',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.FiatTokenV2_2,
                        functionName: 'transfer',
                        args: [env.wallet2.account.address, 10n],
                    })
                },
            },
            {
                name: 'approve',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.FiatTokenV2_2,
                        functionName: 'approve',
                        args: [env.wallet2.account.address, 100n],
                    })
                },
            },
            {
                name: 'transferFrom',
                exec: async (address) => {
                    return await env.wallet2.writeContract({
                        address,
                        abi: abis.FiatTokenV2_2,
                        functionName: 'transferFrom',
                        args: [
                            env.wallet.account.address,
                            env.wallet2.account.address,
                            10n,
                        ],
                    })
                },
            },
        ],
    },
    {
        id: 'XENCrypto',
        srcs: [...solidity('ethereum-contracts/xen_token.sol', 'XENCrypto')],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [],
    },
    {
        id: 'CoinTool_App',
        srcs: [...solidity('ethereum-contracts/xen_minter.sol', 'CoinTool_App')],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        setup: async () => {
            // Upload CoinTool_Proxy code to PVM before executing calls
            // This is needed because the 't' function creates proxies using CREATE2
            if (env.chain.name !== 'Geth') {
                const code = env.getByteCode('CoinTool_Proxy', 'polkavm')
                await uploadCodePVM(code)
            }
        },
        calls: [
            {
                name: 't',
                exec: async (address) => {
                    const addresses = await loadAddresses()
                    let tokenAddress

                    if (address === addresses.CoinTool_App_pvm) {
                        tokenAddress = addresses.XENCrypto_pvm
                    } else if (address === addresses.CoinTool_App_evm) {
                        tokenAddress = addresses.XENCrypto_evm
                    }

                    if (!tokenAddress) {
                        throw new Error('Missing XENCrypto address')
                    }

                    const tokenHex = tokenAddress.slice(2) // drop 0x
                    const data = '0x59635f6f000000000000000000000000' +
                        tokenHex +
                        '000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000004600000000000000000000000000000000000000000000000000000000'
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.CoinTool_App,
                        functionName: 't',
                        args: [
                            50n,
                            data,
                            '0x01',
                        ],
                    })
                },
            },
        ],
    },
]
