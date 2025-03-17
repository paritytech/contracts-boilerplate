import { writeFileSync } from 'node:fs'
import {
    CallParameters,
    ContractConstructorArgs,
    createClient,
    ExactPartial,
    formatTransactionRequest,
    TransactionRequest,
} from 'viem'
import { abis, Abis } from '../../codegen/abis.ts'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { createWalletClient, Hex, http, publicActions } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { AssetHubWestend, Kitchensink } from '../../src/chains.ts'

// Get the chain to deploy to.
const chain = (() => {
    if (process.env.VITE_CHAIN === 'westend') {
        return AssetHubWestend
    } else if (process.env.VITE_CHAIN == 'kitchensink') {
        return Kitchensink
    } else if (process.env.VITE_CHAIN) {
        console.error(
            `Invalid VITE_CHAIN env variable ${process.env.VITE_CHAIN}. Please provide either westend or kitchensink`
        )
        process.exit(1)
    } else {
        console.error(
            'Please provide a VITE_CHAIN env variable by specifying directly or adding it to the .env file'
        )
        process.exit(1)
    }
})()

/**
 * Ensures that the specified private key is a hex string.
 */
export function assertHex(
    privateKeyName: string,
    value: string
): asserts value is Hex {
    if (!value.startsWith('0x')) {
        console.error(`${privateKeyName} must start with 0x`)
        process.exit(1)
    }
}

// Ensure that the DEPLOYER_PRIVATE_KEY env variable is set.
const privateKeyName =
    chain === AssetHubWestend
        ? 'WESTEND_PRIVATE_KEY'
        : 'KITCHENSINK_PRIVATE_KEY'

const privateKey = process.env[privateKeyName]
if (!privateKey) {
    console.error(
        `Please provide a ${privateKeyName} env variable by specifying directly or adding it to the .env file`
    )
    process.exit(1)
}

assertHex(privateKeyName, privateKey)

/**
 * The wallet client, used to deploy contracts.
 */
export const wallet = createWalletClient({
    account: privateKeyToAccount(privateKey),
    chain,
    transport: http(),
}).extend(publicActions)

export const debugClient = createClient({
    chain,
    transport: http(),
}).extend((client) => ({
    async traceTransaction(txHash: Hex, tracerConfig: { withLog: boolean }) {
        return client.request({
            method: 'debug_traceTransaction' as any,
            params: [txHash, { tracer: 'callTracer', tracerConfig } as any],
        })
    },
    async traceBlock(blockNumber: bigint, tracerConfig: { withLog: boolean }) {
        return client.request({
            method: 'debug_traceBlockByNumber' as any,
            params: [
                `0x${blockNumber.toString(16)}`,
                { tracer: 'callTracer', tracerConfig } as any,
            ],
        })
    },

    async traceCall(
        args: ExactPartial<TransactionRequest>,
        tracerConfig: { withLog: boolean }
    ) {
        return client.request({
            method: 'debug_traceCall' as any,
            params: [
                formatTransactionRequest(args),
                'latest',
                { tracer: 'callTracer', tracerConfig } as any,
            ],
        })
    },
}))

const codegenDir = join(import.meta.dirname, '..', '..', 'codegen')

/**
 * Get the byte code of a contract.
 */
function getByteCode(name: string): Hex {
    const data = readFileSync(
        join(codegenDir, 'bytecode', `${name}.polkavm`)
    ).toString('hex')
    return `0x${data}`
}

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
    console.log(`🚀 Deploying ${name} to ${wallet.chain.name}`)

    const balance = await wallet.getBalance(wallet.account)
    console.log(`Account ${wallet.account.address} balance: ${balance}`)

    id ??= name
    const hash = await wallet.deployContract({
        abi: abis[name] as any,
        bytecode: getByteCode(name),
        args: args as any,
        value,
    })

    const receipt = await wallet.waitForTransactionReceipt({ hash })
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
    console.log(`✅ Contract ${name} deployed: ${address}`)
    return address
}

export function visit(
    obj: any,
    callback: (key: string, value: any) => any
): any {
    if (Array.isArray(obj)) {
        return obj.map((item) => visit(item, callback))
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).reduce((acc, key) => {
            const res = visit(callback(key, obj[key]), callback)
            if (res) {
                acc[key] = res
            }
            return acc
        }, {} as any)
    } else {
        return obj
    }
}
