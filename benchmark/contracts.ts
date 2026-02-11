#!/usr/bin/env -S deno run --env-file --allow-all
import { env } from '../tools/lib/index.ts'
import { logger } from '../utils/logger.ts'
import { build, deleteChainData, deploy, execute } from './lib.ts'
import { parseArgs } from '@std/cli'

// Import contract definitions
import { testContracts } from './contracts/test-contracts.ts'
import { ethereumContracts } from './contracts/ethereum-contracts.ts'
import { protocolCommonsContracts } from './contracts/protocol-commons-contracts.ts'
import { hackm3Contracts } from './contracts/hackm3-contracts.ts'
import { w3sContracts } from './contracts/w3s-contracts.ts'
import { mark3tContracts } from './contracts/mark3t-contracts.ts'

/**
 * Combined contracts array for benchmarking
 * - testContracts: Simple test contracts (Fibonacci, SimpleToken)
 * - ethereumContracts: Real Ethereum contracts (USDT, WETH, USDC, XEN)
 * - protocolCommonsContracts: Protocol Commons contracts (Store, Log, NFC, FC, Escrow, DotNS, KeyRegistry)
 * - hackm3Contracts: HackM3 contracts (DocumentAccessManagement)
 * - w3sContracts: W3S Ticketing contracts
 * - mark3tContracts: mark3t Marketplace contracts (Marketplace, MockMobRule)
 */
export const contracts = [
    ...testContracts,
    ...ethereumContracts,
    ...protocolCommonsContracts,
    ...hackm3Contracts,
    ...w3sContracts,
    ...(env.chain.name !== 'Geth' ? mark3tContracts : []), // mark3t contracts are too big to be tested w/ geth
]

const cli = parseArgs(Deno.args, {
    boolean: ['build', 'execute', 'report', 'html-report', 'clean'],
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

if (cli['html-report']) {
    logger.info(`Generating HTML report...`)
    const { generateHtmlReport } = await import('./html-report.ts')
    await generateHtmlReport()
}
