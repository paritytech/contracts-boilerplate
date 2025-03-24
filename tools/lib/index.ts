import { writeFileSync } from 'node:fs'
import { createEnv } from '../../utils/index.ts'
import { ContractConstructorArgs, formatEther } from 'viem'
import { abis, Abis } from '../../codegen/abis.ts'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { Hex } from 'viem'
import { parseArgs } from 'node:util'

const {
    values: { filter },
} = parseArgs({
    args: process.argv.slice(2),
    options: {
        filter: {
            type: 'string',
            short: 'f',
        },
    },
})

const codegenDir = join(import.meta.dirname, '..', '..', 'codegen')

/**
 * Ensures that the specified value is a hex string.
 */
export function assertHex(label: string, value: string): asserts value is Hex {
    if (!value.startsWith('0x')) {
        console.error(`${label} must start with 0x`)
        process.exit(1)
    }
}

// The RPC URL to use
const rpcUrl = (() => {
    if (process.env.VITE_CHAIN === 'local') {
        if (!process.env.VITE_LOCAL_RPC_URL) {
            console.error(
                'VITE_LOCAL_RPC_URL must be set when VITE_CHAIN is local'
            )
            process.exit(1)
        }
        return String(process.env.VITE_LOCAL_RPC_URL)
    } else if (process.env.VITE_CHAIN === 'testnet') {
        if (!process.env.VITE_TESTNET_RPC_URL) {
            console.error(
                'VITE_TESTNET_RPC_URL must be set when VITE_CHAIN is testnet'
            )
            process.exit(1)
        }
        return String(process.env.VITE_TESTNET_RPC_URL)
    }

    console.error('VITE_CHAIN must be set in the .env file')
    process.exit(1)
})()

// Ensure that the DEPLOYER_PRIVATE_KEY env variable is set.
const privateKeyName =
    process.env.VITE_CHAIN === 'local'
        ? 'LOCAL_PRIVATE_KEY'
        : 'TESTNET_PRIVATE_KEY'

const privateKey = process.env[privateKeyName]
if (!privateKey) {
    console.error(
        `Please provide a ${privateKeyName} env variable by specifying directly or adding it to the .env file`
    )
    process.exit(1)
}

assertHex(privateKeyName, privateKey)

const env = await createEnv({
    rpcUrl,
    privateKey,
})

let firstDeploy = true

/**
 * Deploys a contract to the network.
 *
 * This function deploys a contract identified by its name, with the specified
 * arguments and optional value, and updates the addresses file with the contract's address.
 *
 * @param  options.name - The name of the contract to deploy.
 * @param [options.id] - An optional identifier that will be used to identify the contract in the generated addresses file, default to [options.name].
 * @param options.args - The arguments required by the contract's constructor.
 * @param [options.value] - An optional value (in wei) to send with the deployment.
 */
export async function deploy<K extends keyof Abis>({
    id,
    name,
    args,
    value,
}: {
    id?: string
    name: K
    args: ContractConstructorArgs<Abis[K]>
    value?: bigint
}): Promise<Hex> {
    if (filter && !name.toLowerCase().includes(filter.toLowerCase())) {
        return '0x'
    }

    if (firstDeploy) {
        firstDeploy = false
        const balance = await env.wallet.getBalance(env.wallet.account)
        console.log(
            `🔗 Chain ${env.wallet.chain.name} - ${env.wallet.chain.rpcUrls.default.http[0]}`
        )
        console.log(
            `👤 Account ${env.wallet.account.address} - balance: ${formatEther(balance)}\n`
        )
        if (balance == 0n) {
            console.error('❌ Account has no funds')
            process.exit(1)
        }

        const chain = `
import { defineChain } from 'viem'

export const chain = defineChain({
    id: ${env.chain.id},
    name: '${env.chain.name}',
    nativeCurrency: {
        name: 'Westie',
        symbol: 'WST',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['${rpcUrl}'],
        },
    },
    testnet: true,
}) `

        writeFileSync(join(codegenDir, 'chain.ts'), chain, 'utf8')
    }
    console.log(`🚀 Deploying ${name}`)

    id ??= name
    const receipt = await env.deploy({
        name,
        args: args as any,
        value,
    })

    if (receipt.status === 'reverted') {
        console.error(`❌ Contract "${name}" reverted`)
        process.exit(1)
    }
    const address = receipt.contractAddress
    if (!address) {
        throw new Error('Deployed receipt should have a contract address')
    }

    let addressesFile = join(codegenDir, 'addresses.ts')
    let addresses = existsSync(addressesFile)
        ? readFileSync(addressesFile, 'utf8')
        : ''

    const exportLine = `export const ${id} = "${address}";`
    const regex = new RegExp(`^export const ${id} = .*`, 'm')

    if (regex.test(addresses)) {
        addresses = addresses.replace(regex, exportLine)
    } else {
        addresses = `${addresses}\n${exportLine}`
    }

    writeFileSync(addressesFile, addresses, 'utf8')
    console.log(`✅ ${name} deployed: ${address}\n`)
    return address
}
