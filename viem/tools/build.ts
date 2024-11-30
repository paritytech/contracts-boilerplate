import { compile } from '@parity/revive'
import { format } from 'prettier'
import { readFileSync, writeFileSync } from 'fs'
import { readdirSync } from 'node:fs'
import { join, basename } from 'node:path'

console.log('🚀 Compiling contracts...')

// Get all contracts in the contracts directory.
const rootDir = join(__dirname, '..')
const contractsDir = join(rootDir, 'contracts')
const codegenDir = join(rootDir, 'codegen')
const input = readdirSync(contractsDir).filter((f) => f.endsWith('.sol'))

// Generate the index file.
const indexCode = [
    `
    export type Abis = typeof abis
    export const abis = {
    `.trimEnd(),
]

for (const file of input) {
    console.log(`🔨 Compiling ${file}...`)
    const name = basename(file, '.sol')
    const input = {
        [name]: { content: readFileSync(join(contractsDir, file), 'utf8') },
    }

    const out = await compile(input)

    for (const contracts of Object.values(out.contracts)) {
        for (const [name, contract] of Object.entries(contracts)) {
            console.log(`📜 Add contract ${name}`)
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

            indexCode.unshift(`import { ${abiName} } from './abi/${name}'`)
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
