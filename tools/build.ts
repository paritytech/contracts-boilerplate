/// <reference path="./solc.d.ts" />

import * as resolc from '@parity/resolc'
import solc from 'solc'
import { basename, join } from '@std/path'
import * as log from '@std/log'
import { parseArgs } from '@std/cli'

type CompileInput = Parameters<typeof resolc.compile>[0]
const LOG_LEVEL = (Deno.env.get('LOG_LEVEL')?.toUpperCase() ??
    'INFO') as log.LevelName
log.setup({
    handlers: {
        console: new log.ConsoleHandler(LOG_LEVEL),
    },
    loggers: {
        default: {
            level: LOG_LEVEL,
            handlers: ['console'],
        },
    },
})

const logger = log.getLogger()
const { filter, solcOnly, force, clean } = parseArgs(Deno.args, {
    string: ['filter'],
    boolean: ['solcOnly', 'clean', 'force'],
})

// Handle clean flag
if (clean) {
    logger.info('🧹 Cleaning generated files in codegen directory...')
    const currentDir = new URL('.', import.meta.url).pathname
    const rootDir = join(currentDir, '..')

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
            const output = new TextDecoder().decode(cleanResult.stdout)
            if (output.trim()) {
                logger.info(output.trim())
            }
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

async function format(code: string) {
    const command = new Deno.Command('deno', {
        args: ['fmt', '-'],
        stdin: 'piped',
        stdout: 'piped',
    })

    const child = command.spawn()
    const writer = child.stdin.getWriter()
    await writer.write(new TextEncoder().encode(code))
    await writer.close()

    const { stdout } = await child.output()
    return stdout
}

async function computeSha256(content: string): Promise<string> {
    const encoder = new TextEncoder()
    const data = encoder.encode(content)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

function readCachedHash(hashFile: string): string | null {
    try {
        return Deno.readTextFileSync(hashFile).trim()
    } catch {
        return null
    }
}

function writeCachedHash(hashFile: string, hash: string): void {
    Deno.writeTextFileSync(hashFile, hash)
}

let resolcVersion = ''
async function pvmCompile(file: Deno.DirEntry, sources: CompileInput) {
    if (resolcVersion === '') {
        if (Deno.env.get('REVIVE_BIN') === undefined) {
            resolcVersion = ` @parity/resolc: ${resolc.version().trim()}`
        } else {
            resolcVersion = new TextDecoder()
                .decode(
                    (
                        await new Deno.Command('resolc', {
                            args: ['--version'],
                            stdout: 'piped',
                        }).output()
                    ).stdout,
                )
                .trim()
        }
    }
    logger.info(`Compiling ${file.name} with revive ${resolcVersion}`)
    return await resolc.compile(sources, {
        bin: Deno.env.get('REVIVE_BIN'),
    })
}

let solcVersion = ''
function evmCompile(file: Deno.DirEntry, sources: CompileInput) {
    if (solcVersion === '') {
        solcVersion = solc.version()
    }
    logger.info(`Compile ${file.name} with solc ${solcVersion}`)
    const input = {
        language: 'Solidity',
        sources,
        settings: {
            optimizer: {
                enabled: true,
            },
            viaIR: true, // <-- THIS activates the Y+ pipeline
            outputSelection: {
                '*': {
                    '*': ['*'],
                },
            },
        },
    }

    return solc.compile(JSON.stringify(input), {
        import: (relativePath: string) => {
            const source = Deno.readTextFileSync(
                resolc.tryResolveImport(relativePath),
            )
            return { contents: source }
        },
    })
}

logger.debug('Compiling contracts...')

const currentDir = new URL('.', import.meta.url).pathname
const rootDir = join(currentDir, '..')
const contractsDir = join(rootDir, 'contracts')
const codegenDir = join(rootDir, 'codegen')
const abiDir = join(codegenDir, 'abi')
const pvmDir = join(codegenDir, 'pvm')
const evmDir = join(codegenDir, 'evm')
let generateAbiIndex = false

const input = Array.from(Deno.readDirSync(contractsDir))
    .filter((f) => f.isFile && f.name.endsWith('.sol'))
    .filter((f) => !filter || f.name.includes(filter))

for (const file of input) {
    const name = basename(file.name)
    const sourceFilePath = join(contractsDir, file.name)
    const sourceContent = Deno.readTextFileSync(sourceFilePath)
    const sourceHash = await computeSha256(sourceContent)
    const inputSources = {
        [name]: {
            content: sourceContent,
        },
    }

    // Create marker files to track if this source has been compiled
    const pvmSourceMarkerFile = join(pvmDir, `.${name}.sha256.txt`)
    const pvmSourceMarkerHash = readCachedHash(pvmSourceMarkerFile)
    const needsPvmCompilation = !solcOnly &&
        (force || pvmSourceMarkerHash !== sourceHash)

    const evmSourceMarkerFile = join(evmDir, `.${name}.sha256.txt`)
    const evmSourceMarkerHash = readCachedHash(evmSourceMarkerFile)
    const needsEvmCompilation = force || evmSourceMarkerHash !== sourceHash

    if (needsPvmCompilation) {
        const reviveOut = await pvmCompile(file, inputSources)

        for (const contracts of Object.values(reviveOut.contracts)) {
            for (const [name, contract] of Object.entries(contracts)) {
                if (contract?.evm?.bytecode?.object) {
                    const pvmFile = join(pvmDir, `${name}.polkavm`)
                    logger.info(`📜 Add PVM contract ${name}`)
                    const bytecode = new Uint8Array(
                        contract.evm.bytecode.object
                            .match(/.{1,2}/g)!
                            .map((byte) => parseInt(byte, 16)),
                    )
                    Deno.writeFileSync(pvmFile, bytecode)
                }
            }
        }
        writeCachedHash(pvmSourceMarkerFile, sourceHash)
    } else if (!solcOnly) {
        logger.debug(
            `⏭️  Skipping PVM compilation for ${file.name} (unchanged)`,
        )
    }

    if (!needsEvmCompilation) {
        logger.debug(
            `⏭️  Skipping EVM compilation for ${file.name} (unchanged)`,
        )
        continue
    }

    const evmOut = JSON.parse(
        evmCompile(file, inputSources),
    ) as resolc.SolcOutput

    if (evmOut.errors) {
        for (const error of evmOut.errors) {
            if (error.severity === 'warning') {
                logger.warn(error.formattedMessage)
            } else {
                logger.error(error.formattedMessage)
            }
        }

        if (evmOut.errors.some((err) => err.severity !== 'warning')) {
            Deno.exit(1)
        }
    }

    for (const contracts of Object.values(evmOut.contracts)) {
        for (const [name, contract] of Object.entries(contracts)) {
            const evmFile = join(evmDir, `${name}.bin`)
            const abiFile = join(abiDir, `${name}.ts`)

            // Only write bytecode if it exists and is not empty
            if (contract.evm?.bytecode?.object) {
                const bytecodeHex = contract.evm.bytecode.object
                if (bytecodeHex.length > 0) {
                    logger.info(`📜 Add EVM contract ${name}`)
                    const bytecode = new Uint8Array(
                        bytecodeHex
                            .match(/.{1,2}/g)!
                            .map((byte) => parseInt(byte, 16)),
                    )
                    Deno.writeFileSync(evmFile, bytecode)
                }
            }

            logger.info(`📜 Add ABI ${name}`)
            const abi = contract.abi
            const abiName = `${name}Abi`
            const tsContent = `export const ${abiName} = ${
                JSON.stringify(
                    abi,
                    null,
                    2,
                )
            } as const\n`
            Deno.writeTextFileSync(abiFile, tsContent)
            generateAbiIndex = true
        }

        // Mark that we've compiled this source file for EVM
        writeCachedHash(evmSourceMarkerFile, sourceHash)

        if (needsEvmCompilation || needsPvmCompilation) {
            logger.info(`✅ Compiled ${file.name} successfully`)
        }
    }
}

if (generateAbiIndex) {
    logger.debug('📦 Generating ABI index file...')
    const indexCode = [
        `
    export type Abis = typeof abis
    export const abis = {
    `.trimEnd(),
    ]

    try {
        const abiFiles = Array.from(Deno.readDirSync(abiDir))
            .filter((f) => f.isFile && f.name.endsWith('.ts'))
            .sort((a, b) => a.name.localeCompare(b.name))

        for (const abiFile of abiFiles) {
            const contractName = basename(abiFile.name, '.ts')
            const abiName = `${contractName}Abi`
            const importStatement =
                `import { ${abiName} } from './abi/${contractName}.ts'`
            indexCode.unshift(importStatement)
            indexCode.push(`${contractName}: ${abiName},`)
        }
    } catch (error) {
        logger.warn(
            `⚠️  Could not read ABI directory (it may not exist yet): ${error}`,
        )
    }

    indexCode.push('}')
    Deno.writeFileSync(
        join(codegenDir, `abis.ts`),
        await format(indexCode.join('\n')),
    )
}
