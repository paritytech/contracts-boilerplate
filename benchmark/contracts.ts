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
            ink('fibonacci', 'fibonacci_u32_ink'),
            rust('fibonacci_u32'),
            rust('fibonacci_u128'),
            rust('fibonacci_u256'),
            rust('fibonacci_u32_macro_no_alloc'),
            rust('fibonacci_u32_macro_bump_alloc'),
            ...solidity('fibonacci.sol', 'Fibonacci', 'Fibonacci_u32'),
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
            ink('simple_token', 'simple_token_u256_ink'),
            rust('simple_token_u32_no_alloc'),
            rust('simple_token_u32_macro_no_alloc'),
            rust('simple_token_u128_no_alloc'),
            rust('simple_token_u256_no_alloc'),
            rust('simple_token_u256_macro_no_alloc'),
            rust('simple_token_u256_macro_bump_alloc'),
            ...solidity('simple_token.sol', 'SimpleToken', 'SimpleToken_u256'),
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
