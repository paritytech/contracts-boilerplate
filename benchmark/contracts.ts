#!/usr/bin/env -S deno run --env-file --allow-all
import { env } from '../tools/lib/index.ts'
import { logger } from '../utils/logger.ts'
import { build, deleteChainData, deploy, execute } from './lib.ts'
import { parseArgs } from '@std/cli'

// Import contract definitions
import { testContracts } from './contracts/test-contracts.ts'
import { ethereumContracts } from './contracts/ethereum-contracts.ts'

/**
 * Combined contracts array for benchmarking
 * - testContracts: Simple test contracts (Fibonacci, SimpleToken)
 * - ethereumContracts: Real Ethereum contracts (USDT, WETH, USDC, XEN)
 */
export const contracts = [
    ...testContracts,
    ...ethereumContracts,
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
