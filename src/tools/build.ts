//! Call with deno task build [--filter <filter>] [--clean]

/// <reference path="./solc.d.ts" />
import { compile, SolcOutput, tryResolveImport } from '@parity/revive'
import solc from 'solc'
import { format } from 'prettier'
import { readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { join, basename } from 'node:path'
import { Buffer } from 'node:buffer'
import { parseArgs } from 'node:util'

type CompileInput = Parameters<typeof compile>[0]

const {
    values: { filter, clean },
} = parseArgs({
    args: process.argv.slice(2),
    options: {
        clean: {
            type: 'boolean',
            short: 'c',
        },
        filter: {
            type: 'string',
            short: 'f',
        },
    },
})

function evmCompile(sources: CompileInput) {
    const input = {
        language: 'Solidity',
        sources,
        settings: {
            outputSelection: {
                '*': {
                    '*': ['*'],
                },
            },
        },
    }

    return solc.compile(JSON.stringify(input), {
        import: (relativePath) => {
            const source = readFileSync(tryResolveImport(relativePath), 'utf8')
            return { contents: source }
        },
    })
}

// Get all contracts in the contracts directory.
const rootDir = join(import.meta.dirname, '..', '..')
const contractsDir = join(rootDir, 'contracts')
const codegenDir = join(rootDir, 'src', 'codegen')
const input = readdirSync(contractsDir)
    .filter((f) => f.endsWith('.sol'))
    .filter((f) => !filter || f.toLowerCase().includes(filter.toLowerCase()))

if (clean) {
    console.log('🧹 Cleaning codegen directory...')
    for (const dirname of ['abi', 'bytecode']) {
        const dir = join(codegenDir, dirname)
        const files = readdirSync(dir).filter((f) => !f.endsWith('.gitkeep'))
        for (const file of files) {
            unlinkSync(join(dir, file))
        }
    }
}

console.log('🚀 Compiling contracts...')

// Generate the index file.
const indexCode = [
    `
    export type Abis = typeof abis
    export const abis = {
    `.trimEnd(),
]
for (const file of input) {
    console.log(`\n🔨 Compiling ${file}...`)
    const name = basename(file, '.sol')
    const input = {
        [name]: { content: readFileSync(join(contractsDir, file), 'utf8') },
    }

    const reviveOut = await compile(input).catch((err) => {
        console.error('Failed to build with resolc', err)
        process.exit(1)
    })

    const evmOut = JSON.parse(evmCompile(input)) as SolcOutput

    for (const [id, contracts] of Object.entries(reviveOut.contracts)) {
        for (const [name, contract] of Object.entries(contracts)) {
            console.log(`- 📜 contract ${name}`)
            const abi = contract.abi
            const abiName = `${name}Abi`
            writeFileSync(
                join(codegenDir, 'abi', `${name}.ts`),
                await format(
                    `export const ${abiName} = ${JSON.stringify(abi, null, 2)} as const`,
                    {
                        parser: 'typescript',
                    }
                )
            )

            writeFileSync(
                join(codegenDir, 'bytecode', `${name}.polkavm`),
                Buffer.from(contract.evm.bytecode.object, 'hex')
            )

            writeFileSync(
                join(codegenDir, 'bytecode', `${name}.evm`),
                Buffer.from(
                    evmOut.contracts[id][name].evm.bytecode.object,
                    'hex'
                )
            )

            indexCode.unshift(`import { ${abiName} } from './abi/${name}.ts'`)
            indexCode.push(`${name}: ${abiName},`)
        }
    }
}
indexCode.push('}')

writeFileSync(
    join(codegenDir, `abis.ts`),
    await format(indexCode.join('\n'), {
        parser: 'typescript',
    })
)
