#!/usr/bin/env -S deno run --env-file --allow-all
import { deploy as deployContract, env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { logger } from '../utils/logger.ts'
import {
    Artifacts,
    build,
    deleteChainData,
    deploy,
    execute,
    ink,
    rust,
    solidity,
} from './lib.ts'
import { parseArgs } from '@std/cli'
import { parseEther } from 'viem'

export const contracts: Artifacts = [
    {
        id: 'Fibonacci',
        srcs: [
            ink('fibonacci'),
            rust('fibonacci'),
            rust('fibonacci_u128'),
            rust('fibonacci_u256'),
            ...solidity('fibonacci.sol', 'Fibonacci'),
        ],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [
            {
                name: 'fib_10',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.Fibonacci,
                        functionName: 'fibonacci',
                        args: [10],
                    })
                },
            },
        ],
    },
    {
        id: 'SimpleToken',
        srcs: [
            ink('simple_token'),
            rust('simple_token_no_alloc'),
            ...solidity('simple_token.sol', 'SimpleToken'),
        ],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [
            {
                name: 'mint',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.SimpleToken,
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
                    // fund destination first
                    await env.wallet.sendTransaction({
                        to: '0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63',
                        value: parseEther('1'),
                    })

                    return env.wallet.writeContract({
                        address,
                        abi: abis.SimpleToken,
                        functionName: 'transfer',
                        args: [
                            '0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63',
                            10_000_000_000_000_000_000_000_000n,
                        ],
                    })
                },
            },
        ],
    },
    {
        id: 'TetherToken',
        srcs: [
            ...solidity('tether.sol', 'TetherToken'),
        ],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [100000000000n, "Tether USD", "USDT", 6n], // follow the init tx args
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
                        args: [env.wallet.account.address, env.wallet2.account.address, 10n],
                    })
                },
            },
        ],
    },
    {
        id: 'WETH9',
        srcs: [
            ...solidity('weth.sol', 'WETH9'),
        ],
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
                        value: parseEther('1'),
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
]

const cli = parseArgs(Deno.args, {
    boolean: ['build', 'execute', 'report', 'clean'],
})

if (cli.build) {
    logger.info(`Building contracts...`)
    await build(contracts)
}
if (cli.execute) {
    logger.info(`Deleting existing data for chain: ${env.chain.name}`)
    deleteChainData(env.chain.name)

    logger.info(`Deploying contracts...`)
    await deploy(contracts)

    logger.info(`Executing contracts...`)
    await execute(contracts)
}

if (cli.report) {
    logger.info(`Generating reports...`)
    const { report } = await import('./reports.ts')
    await report(contracts)
}
