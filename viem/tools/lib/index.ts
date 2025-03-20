import { writeFileSync } from 'node:fs'
import {
    CallParameters,
    ContractConstructorArgs,
    createClient,
    defineChain,
    formatEther,
    formatTransactionRequest,
    hexToNumber,
    parseEther,
} from 'viem'
import { abis, Abis } from '../../codegen/abis.ts'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { createWalletClient, Hex, http, publicActions } from 'viem'
import { privateKeyToAccount, nonceManager } from 'viem/accounts'

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
const url = (() => {
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

/// The chain id
export const chainId = await (async () => {
    try {
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jsonrpc: '2.0',
                method: 'eth_chainId',
                id: 1,
            }),
        })
        let { result } = await resp.json()
        return hexToNumber(result)
    } catch (e) {
        console.error(`Failed to get chain id from ${url}`, e)
        process.exit(1)
    }
})()

/// The chain name
export const chainName = await (async () => {
    try {
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                jsonrpc: '2.0',
                method: 'web3_clientVersion',
                id: 1,
            }),
        })
        let { result } = await resp.json()
        return String(result).split('/')[0] || 'Unknown'
    } catch (e) {
        console.error(`Failed to get chain name from ${url}`, e)
        process.exit(1)
    }
})()

export const chain = defineChain({
    id: chainId,
    name: chainName,
    nativeCurrency: {
        name: 'Westie',
        symbol: 'WST',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: [url],
        },
    },
    testnet: true,
})

export const transport = http(url)
const [account] = await createWalletClient({ transport, chain }).getAddresses()
export const serverWallet = createWalletClient({
    account,
    transport,
    chain,
}).extend(publicActions)

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

export const wallet = createWalletClient({
    account: privateKeyToAccount(privateKey, { nonceManager }),
    transport,
    chain,
}).extend(publicActions)

// On geth let's endow the account wallet with some funds, to match the eth-rpc setup
if (chainName == 'geth') {
    const endowment = parseEther('1000')
    const balance = await serverWallet.getBalance(serverWallet.account)
    if (balance < endowment / 2n) {
        await serverWallet.sendTransaction({
            account: serverWallet.account,
            to: wallet.account.address,
            value: endowment,
        })
    }
}

export const debugClient = createClient({
    chain,
    transport,
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
        args: CallParameters | { from?: Hex },
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
export function getByteCode(name: string): Hex {
    const ext = chainName == 'geth' ? 'evm' : 'polkavm'
    const data = readFileSync(
        join(codegenDir, 'bytecode', `${name}.${ext}`)
    ).toString('hex')
    return `0x${data}`
}

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
    if (firstDeploy) {
        firstDeploy = false
        const balance = await wallet.getBalance(wallet.account)
        console.log(
            `🔗 Chain ${wallet.chain.name} - ${wallet.chain.rpcUrls.default.http[0]}`
        )
        console.log(
            `👤 Account ${wallet.account.address} - balance: ${formatEther(balance)}\n`
        )
    }
    console.log(`🚀 Deploying ${name}`)

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
    console.log(`✅ ${name} deployed: ${address}\n`)
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
