#!/usr/bin/env -S deno run --env-file --allow-all
import { env, initEnv } from '../tools/lib/index.ts'
import { logger } from '../utils/logger.ts'
import { build, deleteChainData, deploy, execute } from './lib.ts'
import { parseArgs } from '@std/cli'
import { datasetCategories, datasets, mark3tContracts } from './datasets.ts'

export { datasetCategories, datasets }

// CLI entry point — only runs when executed directly, not when imported as a module.
if (import.meta.main) {
    const cli = parseArgs(Deno.args, {
        boolean: ['build', 'execute', 'report', 'html-report', 'clean'],
    })

    const allContracts = Object.values(datasets).flat()

    if (cli.build) {
        logger.info(`Building contracts...`)
        await build(allContracts)
    }
    if (cli.execute) {
        await initEnv()

        const mark3tIds = new Set(mark3tContracts.map((c) => c.id))
        const contracts = env.chain.name === 'Geth'
            ? allContracts.filter((a) => !mark3tIds.has(a.id))
            : allContracts

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
        await report(allContracts)
    }

    if (cli['html-report']) {
        logger.info(`Generating HTML report...`)
        const { generateHtmlReport } = await import('./html-report.ts')
        await generateHtmlReport()
    }
}
