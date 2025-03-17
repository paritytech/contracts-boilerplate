import { compile } from '@parity/revive'
import { readFileSync, writeFileSync } from 'fs'
import { readdirSync } from 'node:fs'
import { join, basename } from 'node:path'

console.log('🚀 Compiling contracts...')

// Get all contracts in the contracts directory.
const rootDir = join(__dirname, '..')
const contractsDir = join(rootDir, 'contracts')
const codegenDir = join(rootDir, 'src', 'contracts')
const input = readdirSync(contractsDir).filter((f) => f.endsWith('.sol'))

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

            writeFileSync(
                join(codegenDir, `${name}.json`),
                JSON.stringify(abi, null, 2)
            )

            writeFileSync(
                join(codegenDir, `${name}.polkavm`),
                Buffer.from(contract.evm.bytecode.object, 'hex')
            )
        }
    }
}
