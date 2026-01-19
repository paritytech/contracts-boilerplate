import { join } from '@std/path'
import { logger } from './logger.ts'

export type CompileInput = Record<string, { content: string }>

export interface CompileOutput {
    errors?: Array<{
        severity: string
        formattedMessage: string
    }>
    contracts: Record<
        string,
        Record<
            string,
            {
                evm?: {
                    bytecode?: {
                        object: string
                    }
                }
                abi: unknown
            }
        >
    >
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

const compilerVersions: Record<string, string> = {}

async function checkCompilerExists(compiler: 'solc' | 'resolc') {
    if (compilerVersions[compiler]) return

    try {
        const command = new Deno.Command(compiler, {
            args: ['--version'],
            stdout: 'piped',
            stderr: 'piped',
        })
        const output = await command.output()
        if (!output.success) {
            logger.error(
                `Failed to run ${compiler}: ${
                    new TextDecoder().decode(output.stderr)
                }`,
            )
            Deno.exit(1)
        }
        const versionOutput = new TextDecoder().decode(output.stdout)
        // For solc: extract "Version: x.x.x", for resolc: just use trimmed output
        const match = versionOutput.match(/Version: ([^\n]+)/)
        compilerVersions[compiler] = match
            ? match[1].trim()
            : versionOutput.trim()
    } catch (error) {
        logger.error(
            `Could not find ${compiler} executable. Please install ${compiler}.`,
        )
        logger.error(`Error: ${error}`)
        Deno.exit(1)
    }
}

async function compileWithBinary(
    compiler: 'solc' | 'resolc',
    sources: CompileInput,
    rootDir: string,
): Promise<CompileOutput> {
    await checkCompilerExists(compiler)
    logger.info(`Compiling with ${compiler} ${compilerVersions[compiler]}`)

    const optimizerSettings = compiler === 'resolc'
        ? { enabled: true, mode: 'z' }
        : { enabled: true, runs: 200 }

    const input = {
        language: 'Solidity',
        sources,
        settings: {
            optimizer: optimizerSettings,
            viaIR: true,
            remappings: [
                `@openzeppelin/=${
                    join(rootDir, 'node_modules/@openzeppelin/')
                }/`,
            ],
            outputSelection: {
                '*': {
                    '*': ['abi', 'evm.bytecode', 'metadata'],
                },
            },
        },
    }

    const command = new Deno.Command(compiler, {
        args: ['--standard-json'],
        stdin: 'piped',
        stdout: 'piped',
        stderr: 'piped',
    })

    const child = command.spawn()
    const writer = child.stdin.getWriter()
    await writer.write(new TextEncoder().encode(JSON.stringify(input)))
    await writer.close()

    const { stdout, stderr, success } = await child.output()
    const stderrText = new TextDecoder().decode(stderr)
    const stdoutText = new TextDecoder().decode(stdout)

    if (stderrText.trim().length > 0) {
        logger.error(`${compiler} stderr: ${stderrText}`)
    }

    if (!success) {
        logger.error(`${compiler} command failed`)
        Deno.exit(1)
    }

    try {
        const result = JSON.parse(stdoutText) as CompileOutput

        // Check for errors in the compilation output
        if (result.errors) {
            for (const error of result.errors) {
                if (error.severity === 'error') {
                    logger.error(error.formattedMessage)
                } else if (error.severity === 'warning') {
                    logger.warn(error.formattedMessage)
                }
            }

            if (result.errors.some((err) => err.severity === 'error')) {
                throw new Error(`Compilation failed with ${compiler}`)
            }
        }

        return result
    } catch (e) {
        logger.error(`Failed to parse ${compiler} output: ${e}`)
        logger.error(`Output was: ${stdoutText}`)
        Deno.exit(1)
    }
}

export async function compile(options: {
    fileName: string
    sources: CompileInput
    rootDir: string
    compiler: 'solc' | 'resolc'
    generateAbi?: boolean
}) {
    const { fileName, sources, rootDir, compiler, generateAbi = false } =
        options

    const codegenDir = join(rootDir, 'codegen')
    const abiDir = join(codegenDir, 'abi')
    const outputDir = compiler.includes('resolc')
        ? join(codegenDir, 'pvm')
        : join(codegenDir, 'evm')

    logger.info(`Compiling ${fileName} with ${compiler}...`)
    const output = await compileWithBinary(compiler, sources, rootDir)

    for (const contracts of Object.values(output.contracts)) {
        for (const [contractName, contract] of Object.entries(contracts)) {
            if (contract?.evm?.bytecode?.object) {
                const bytecodeHex = contract.evm.bytecode.object
                if (bytecodeHex.length > 0) {
                    const ext = compiler === 'resolc' ? 'polkavm' : 'bin'
                    const outputFile = join(outputDir, `${contractName}.${ext}`)
                    const label = compiler === 'resolc' ? 'PVM' : 'EVM'
                    logger.info(`📜 Add ${label} contract ${contractName}`)
                    const bytecode = new Uint8Array(
                        bytecodeHex
                            .match(/.{1,2}/g)!
                            .map((byte) => parseInt(byte, 16)),
                    )
                    Deno.writeFileSync(outputFile, bytecode)
                }
            }

            if (generateAbi) {
                logger.info(`📜 Add ABI ${contractName}`)
                const abi = contract.abi
                const abiName = `${contractName}Abi`
                const tsContent = `export const ${abiName} = ${
                    JSON.stringify(
                        abi,
                        null,
                        2,
                    )
                } as const\n`
                Deno.writeTextFileSync(
                    join(abiDir, `${contractName}.ts`),
                    tsContent,
                )
            }
        }
    }

    logger.info(`✅ Compiled ${fileName} with ${compiler} successfully`)
}

export async function generateAbiIndex(rootDir: string) {
    const codegenDir = join(rootDir, 'codegen')
    const abiDir = join(codegenDir, 'abi')

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
            const contractName = abiFile.name.replace('.ts', '')
            const abiName = `${contractName}Abi`
            const importStatement =
                `import { ${abiName} } from './abi/${contractName}.ts'`
            indexCode.unshift(importStatement)
            indexCode.push(`${contractName}: ${abiName},`)
        }
    } catch (error) {
        logger.warn(
            `⚠️ Could not generate abi: ${error}`,
        )
    }

    indexCode.push('}')
    Deno.writeFileSync(
        join(codegenDir, `abis.ts`),
        await format(indexCode.join('\n')),
    )
}
