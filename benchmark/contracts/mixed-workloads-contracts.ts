import { env } from '../../tools/lib/index.ts'
import { abis } from '../../codegen/abis.ts'
import {
    Artifacts,
    ContractInfo,
    ImplType,
    loadAddresses,
    solidity,
} from '../lib.ts'
import { deploy as deployContract } from '../../tools/lib/index.ts'
import { uploadCodePVM } from '../../tools/lib/pvm.ts'
import { readBytecode } from '../../utils/index.ts'
import { Hex, parseEther } from 'viem'

const externalRecipient = '0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63'
const LIQUIDITY_AMOUNT = 1_000_000_000_000_000_000_000_000n // 1e24

/**
 * Creates a ContractInfo pair (evm + pvm) that reuses MixedERC20 bytecode
 * but deploys under a different instance name.
 */
function mixedERC20Instance(instanceName: string): ContractInfo[] {
    const bytecodes = { pvm: 'polkavm', evm: 'bin' } as const
    return Object.entries(bytecodes).map(([type, ext]) => ({
        implType: 'solidity' as ImplType,
        supportEvm() {
            return type === 'evm'
        },
        getName() {
            return `${instanceName}_${type}`
        },
        getBytecode() {
            return readBytecode(`./codegen/${type}/MixedERC20.${ext}`)
        },
        async build() {
            // Bytecode is already compiled by the MixedERC20 artifact
        },
    }))
}

/**
 * Mixed workloads: ERC20 mint/transfer, CREATE/CREATE2 deploys,
 * AMM swaps (V3 callback pattern), ERC20 factory deploys.
 *
 * Mirrors the mixed-workloads test from resolc-compiler-tests.
 */
export const mixedWorkloadsContracts: Artifacts = [
    // --- Main ERC20 for mint/transfer benchmarks ---
    {
        id: 'MixedERC20',
        srcs: [...solidity('mixed-workloads/MixedWorkloads.sol', 'MixedERC20')],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: ['Wrapped BTC', 'WBTC'],
            })
        },
        calls: [
            {
                name: 'mint',
                exec: (address) => {
                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.MixedERC20,
                        functionName: 'mint',
                        args: [
                            env.wallet.account.address,
                            10_000_000_000_000_000_000_000_000n,
                        ],
                    })
                },
            },
            {
                name: 'transfer',
                exec: async (address) => {
                    const fundTx = await env.wallet.sendTransaction({
                        to: externalRecipient,
                        value: parseEther('1'),
                    })
                    await env.wallet.waitForTransactionReceipt({ hash: fundTx })

                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.MixedERC20,
                        functionName: 'transfer',
                        args: [externalRecipient, 1_000_000_000_000_000_000n],
                    })
                },
            },
        ],
    },

    // --- Factory for CREATE/CREATE2 child contract deploys ---
    {
        id: 'MixedFactory',
        srcs: [
            ...solidity('mixed-workloads/MixedWorkloads.sol', 'MixedFactory'),
        ],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        setup: async () => {
            // Upload MixedChild bytecode so CREATE/CREATE2 can find it on PVM
            if (env.chain.name !== 'Geth') {
                const code = env.getByteCode('MixedChild', 'polkavm')
                await uploadCodePVM(code)
            }
        },
        calls: [
            {
                name: 'deployCreate',
                exec: (address) => {
                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.MixedFactory,
                        functionName: 'deployCreate',
                        args: [],
                    })
                },
            },
            {
                name: 'deployCreate2',
                exec: (address) => {
                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.MixedFactory,
                        functionName: 'deployCreate2',
                        args: [],
                    })
                },
            },
        ],
    },

    // --- ERC20 Factory: deploys new ERC20 instances via CREATE ---
    {
        id: 'MixedERC20Factory',
        srcs: [
            ...solidity(
                'mixed-workloads/MixedWorkloads.sol',
                'MixedERC20Factory',
            ),
        ],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        setup: async () => {
            // Upload MixedERC20 bytecode so CREATE can find it on PVM
            if (env.chain.name !== 'Geth') {
                const code = env.getByteCode('MixedERC20', 'polkavm')
                await uploadCodePVM(code)
            }
        },
        calls: [
            {
                name: 'deploy',
                exec: (address) => {
                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.MixedERC20Factory,
                        functionName: 'deploy',
                        args: [],
                    })
                },
            },
        ],
    },

    // --- SwapToken0: MixedERC20 instance for swap pool ---
    {
        // @ts-ignore - shares MixedERC20 ABI
        id: 'MixedSwapToken0',
        srcs: mixedERC20Instance('MixedSwapToken0'),
        deploy: (_id, name, bytecode) => {
            return deployContract({
                // @ts-ignore - shares MixedERC20 ABI
                name: { id: 'MixedERC20', name },
                bytecode,
                args: ['TK0', 'TK0'],
            })
        },
        calls: [],
    },

    // --- SwapToken1: MixedERC20 instance for swap pool ---
    {
        // @ts-ignore - shares MixedERC20 ABI
        id: 'MixedSwapToken1',
        srcs: mixedERC20Instance('MixedSwapToken1'),
        deploy: (_id, name, bytecode) => {
            return deployContract({
                // @ts-ignore - shares MixedERC20 ABI
                name: { id: 'MixedERC20', name },
                bytecode,
                args: ['TK1', 'TK1'],
            })
        },
        calls: [],
    },

    // --- AMM Pool: constant-product swap with callback pattern ---
    {
        id: 'MixedPool',
        srcs: [
            ...solidity('mixed-workloads/MixedWorkloads.sol', 'MixedPool'),
        ],
        deploy: async (id, name, bytecode) => {
            const addresses = await loadAddresses()
            const suffix = name.endsWith('_pvm') ? '_pvm' : '_evm'
            const token0 = addresses[`MixedSwapToken0${suffix}`]
            const token1 = addresses[`MixedSwapToken1${suffix}`]
            if (!token0 || !token1) {
                throw new Error(
                    `Missing swap token addresses: token0=${token0}, token1=${token1}`,
                )
            }
            return deployContract({
                name: { id, name },
                bytecode,
                args: [token0, token1],
            })
        },
        setup: async () => {
            const addresses = await loadAddresses()

            // Seed liquidity for both evm and pvm variants
            for (const suffix of ['_evm', '_pvm']) {
                const poolAddr = addresses[`MixedPool${suffix}`] as
                    | Hex
                    | undefined
                const token0Addr = addresses[`MixedSwapToken0${suffix}`] as
                    | Hex
                    | undefined
                const token1Addr = addresses[`MixedSwapToken1${suffix}`] as
                    | Hex
                    | undefined

                if (!poolAddr || !token0Addr || !token1Addr) continue

                // Mint tokens to deployer
                // @ts-ignore - run `deno task build` to generate ABI
                let hash = await env.wallet.writeContract({
                    address: token0Addr,
                    abi: abis.MixedERC20,
                    functionName: 'mint',
                    args: [env.wallet.account.address, LIQUIDITY_AMOUNT],
                })
                await env.wallet.waitForTransactionReceipt({ hash })

                // @ts-ignore - run `deno task build` to generate ABI
                hash = await env.wallet.writeContract({
                    address: token1Addr,
                    abi: abis.MixedERC20,
                    functionName: 'mint',
                    args: [env.wallet.account.address, LIQUIDITY_AMOUNT],
                })
                await env.wallet.waitForTransactionReceipt({ hash })

                // Approve pool to spend tokens
                // @ts-ignore - run `deno task build` to generate ABI
                hash = await env.wallet.writeContract({
                    address: token0Addr,
                    abi: abis.MixedERC20,
                    functionName: 'approve',
                    args: [poolAddr, LIQUIDITY_AMOUNT],
                })
                await env.wallet.waitForTransactionReceipt({ hash })

                // @ts-ignore - run `deno task build` to generate ABI
                hash = await env.wallet.writeContract({
                    address: token1Addr,
                    abi: abis.MixedERC20,
                    functionName: 'approve',
                    args: [poolAddr, LIQUIDITY_AMOUNT],
                })
                await env.wallet.waitForTransactionReceipt({ hash })

                // Add liquidity
                // @ts-ignore - run `deno task build` to generate ABI
                hash = await env.wallet.writeContract({
                    address: poolAddr,
                    abi: abis.MixedPool,
                    functionName: 'addLiquidity',
                    args: [LIQUIDITY_AMOUNT, LIQUIDITY_AMOUNT],
                })
                await env.wallet.waitForTransactionReceipt({ hash })
            }
        },
        calls: [],
    },

    // --- Swap Router: routes swaps through Pool with V3 callback ---
    {
        id: 'MixedSwapRouter',
        srcs: [
            ...solidity(
                'mixed-workloads/MixedWorkloads.sol',
                'MixedSwapRouter',
            ),
        ],
        deploy: async (id, name, bytecode) => {
            const addresses = await loadAddresses()
            const suffix = name.endsWith('_pvm') ? '_pvm' : '_evm'
            const pool = addresses[`MixedPool${suffix}`]
            if (!pool) {
                throw new Error(`Missing MixedPool${suffix} address`)
            }
            return deployContract({
                name: { id, name },
                bytecode,
                args: [pool],
            })
        },
        setup: async () => {
            const addresses = await loadAddresses()
            const SWAP_AMOUNT = 5_000_000_000_000_000n // enough for 5 swaps

            for (const suffix of ['_evm', '_pvm']) {
                const routerAddr = addresses[`MixedSwapRouter${suffix}`] as
                    | Hex
                    | undefined
                const token0Addr = addresses[`MixedSwapToken0${suffix}`] as
                    | Hex
                    | undefined

                if (!routerAddr || !token0Addr) continue

                // Mint SwapToken0 to deployer for swaps
                // @ts-ignore - run `deno task build` to generate ABI
                let hash = await env.wallet.writeContract({
                    address: token0Addr,
                    abi: abis.MixedERC20,
                    functionName: 'mint',
                    args: [env.wallet.account.address, SWAP_AMOUNT],
                })
                await env.wallet.waitForTransactionReceipt({ hash })

                // Approve router to spend SwapToken0
                // @ts-ignore - run `deno task build` to generate ABI
                hash = await env.wallet.writeContract({
                    address: token0Addr,
                    abi: abis.MixedERC20,
                    functionName: 'approve',
                    args: [routerAddr, SWAP_AMOUNT],
                })
                await env.wallet.waitForTransactionReceipt({ hash })
            }
        },
        calls: [
            {
                name: 'swap',
                exec: (address) => {
                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.MixedSwapRouter,
                        functionName: 'swap',
                        args: [
                            1_000_000_000_000_000n,
                            env.wallet.account.address,
                        ],
                    })
                },
            },
        ],
    },
]
