import { join } from '@std/path'
import { parseArgs } from '@std/cli'
import { compile, generateAbiIndex } from '../utils/build.ts'
import { logger } from '../utils/logger.ts'

const { filter, solcOnly, clean } = parseArgs(Deno.args, {
    string: ['filter'],
    boolean: ['solcOnly', 'clean'],
})

const currentDir = new URL('.', import.meta.url).pathname
const rootDir = join(currentDir, '..')

// Handle clean flag
if (clean) {
    logger.info('🧹 Cleaning generated files in codegen directory...')

    // Use git clean to remove untracked files
    const cleanCommand = new Deno.Command('git', {
        args: ['clean', '-fdx', 'codegen/'],
        cwd: rootDir,
        stdout: 'piped',
        stderr: 'piped',
    })

    try {
        const cleanResult = await cleanCommand.output()
        if (cleanResult.success) {
            logger.info('✅ Cleaned codegen directory successfully')
        } else {
            logger.error(new TextDecoder().decode(cleanResult.stderr))
            Deno.exit(1)
        }
    } catch (error) {
        logger.error(`Failed to clean codegen directory: ${error}`)
        Deno.exit(1)
    }
}

logger.debug('Compiling contracts...')

const contractsDir = join(rootDir, 'contracts')
const contracts = Array.from(Deno.readDirSync(contractsDir))
    .filter((f) => f.isFile && f.name.endsWith('.sol'))
    .filter((f) => !filter || f.name.includes(filter))

if (contracts.length === 0) {
    logger.warn('No contracts found to compile')
    Deno.exit(0)
}

for (const contract of contracts) {
    const sourceFilePath = join(contractsDir, contract.name)
    const sourceContent = Deno.readTextFileSync(sourceFilePath)

    await compile({
        fileName: contract.name,
        sourceContent,
        rootDir,
        compiler: (Deno.env.get('SOLC_BIN') as 'solc') ?? 'solc',
        generateAbi: true,
    })

    if (!solcOnly) {
        await compile({
            fileName: contract.name,
            sourceContent,
            rootDir,
            compiler: 'resolc',
        })
    }
}

await generateAbiIndex(rootDir)

logger.info('✨ All contracts compiled successfully')
