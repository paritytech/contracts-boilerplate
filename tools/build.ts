import { join } from '@std/path'
import { parseArgs } from '@std/cli'
import { compile, generateAbiIndex, generateLibIndex } from '../utils/build.ts'
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

// Extract relative imports from a Solidity file (e.g., "./interfaces/Foo.sol")
function extractRelativeImports(content: string): string[] {
    const importRegex = /import\s+(?:{[^}]*}\s+from\s+)?["'](\.[^"']+)["']/g
    const imports: string[] = []
    let match
    while ((match = importRegex.exec(content)) !== null) {
        imports.push(match[1])
    }
    return imports
}

// Recursively collect all files needed for a contract
function collectDependencies(
    filePath: string,
    contractsDir: string,
    visited = new Set<string>(),
): Map<string, string> {
    if (visited.has(filePath)) {
        return new Map()
    }
    visited.add(filePath)

    const fullPath = join(contractsDir, filePath)
    const content = Deno.readTextFileSync(fullPath)
    const sources = new Map([[filePath, content]])

    const imports = extractRelativeImports(content)
    for (const importPath of imports) {
        // Resolve relative import path
        const dir = filePath.includes('/')
            ? filePath.substring(0, filePath.lastIndexOf('/'))
            : ''
        const resolvedPath = join(dir, importPath).replace(/^\.\//, '')

        const deps = collectDependencies(resolvedPath, contractsDir, visited)
        for (const [path, content] of deps) {
            sources.set(path, content)
        }
    }

    return sources
}

const contracts = Array.from(Deno.readDirSync(contractsDir))
    .filter((f) => f.isFile && f.name.endsWith('.sol'))
    .filter((f) => !filter || f.name.includes(filter))

if (contracts.length === 0) {
    logger.warn('No contracts found to compile')
    Deno.exit(0)
}

for (const contract of contracts) {
    // Collect only the files needed for this contract
    const sources = collectDependencies(contract.name, contractsDir)
    const sourcesObj = Object.fromEntries(
        Array.from(sources.entries()).map(([path, content]) => [
            path,
            { content },
        ]),
    )

    await compile({
        fileName: contract.name,
        sources: sourcesObj,
        rootDir,
        compiler: (Deno.env.get('SOLC_BIN') as 'solc') ?? 'solc',
        generateAbi: true,
    })

    if (!solcOnly) {
        await compile({
            fileName: contract.name,
            sources: sourcesObj,
            rootDir,
            compiler: (Deno.env.get('RESOLC_BIN') as 'resolc') ?? 'resolc',
        })
    }
}

await generateAbiIndex(rootDir)
await generateLibIndex(rootDir)

logger.info('✨ All contracts compiled successfully')
