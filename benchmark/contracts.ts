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

export const contracts: Artifacts = [
    {
        id: 'Fibonacci',
        srcs: [
            ink('fibonacci'),
            rust('fibonacci'),
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
