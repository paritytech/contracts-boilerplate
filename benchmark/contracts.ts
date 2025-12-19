#!/usr/bin/env -S deno run --env-file --allow-all
import { Hex } from 'viem'
import { deploy as deployContract, env } from '../tools/lib/index.ts'
import { Abis, abis } from '../codegen/abis.ts'
import { logger } from '../utils/logger.ts'
import {
    build,
    deleteChainData,
    deploy,
    execute,
    ink,
    rust,
    solidity,
} from './lib.ts'
import { parseArgs } from '@std/cli'

export const contracts = [
    {
        id: 'Fibonacci',
        srcs: [
            ink('fibonacci'),
            rust('fibonacci'),
            ...solidity('fibonacci.sol', 'Fibonacci'),
        ],
        deploy: async (
            id: keyof Abis,
            name: string,
            bytecode: Hex,
        ): Promise<Hex> => {
            const receipt = await deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
            return receipt.transactionHash!
        },
        calls: [
            {
                name: 'fib_10',
                exec: async (address: Hex): Promise<Hex> => {
                    const { request } = await env.wallet.simulateContract({
                        address,
                        abi: abis.Fibonacci,
                        functionName: 'fibonacci',
                        args: [10],
                    })
                    return await env.wallet.writeContract(request)
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
        deploy: async (
            id: keyof Abis,
            name: string,
            bytecode: Hex,
        ): Promise<Hex> => {
            const receipt = await deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
            return receipt.transactionHash!
        },
        calls: [
            {
                name: 'mint',
                exec: async (address: Hex): Promise<Hex> => {
                    const { request } = await env.wallet.simulateContract({
                        address,
                        abi: abis.SimpleToken,
                        functionName: 'mint',
                        args: [
                            env.wallet.account.address,
                            10_000_000_000_000_000_000_000_000n,
                        ],
                    })
                    return await env.wallet.writeContract(request)
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
