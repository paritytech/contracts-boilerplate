import {
    CallParameters,
    ContractConstructorArgs,
    createClient,
    defineChain,
    formatTransactionRequest,
    hexToNumber,
    parseEther,
} from 'viem'
import { abis, Abis } from '../codegen/abis.ts'
import { join } from 'node:path'
import { createWalletClient, Hex, http, publicActions } from 'viem'
import { privateKeyToAccount, nonceManager } from 'viem/accounts'
import { readFileSync } from 'node:fs'

type TracerType = 'callTracer' | 'prestateTracer'
type TracerConfig = {
    callTracer: { withLog?: boolean; onlyTopCall?: boolean }
    prestateTracer: {
        diffMode?: boolean
        disableCode?: boolean
        disableStorage?: boolean
    }
}

export async function createEnv({
    rpcUrl,
    privateKey,
}: {
    rpcUrl: string
    privateKey: Hex
}) {
    const chainId = await (async () => {
        try {
            const resp = await fetch(rpcUrl, {
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
            console.error(`Failed to get chain id from ${rpcUrl}`, e)
            process.exit(1)
        }
    })()

    /// The chain name
    const chainName = await (async () => {
        try {
            const resp = await fetch(rpcUrl, {
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
            const id = String(result).split('/')[0] || 'Unknown'

            if (id == 'Geth') {
                return 'Geth'
            } else if (chainId == 420_420_421) {
                return 'Westend'
            } else if (chainId == 420_420_420) {
                return 'KitchenSink'
            } else {
                return 'Unknown'
            }
        } catch (e) {
            console.error(`Failed to get chain name from ${rpcUrl}`, e)
            process.exit(1)
        }
    })()

    function getByteCode(name: string): Hex {
        const codegenDir = join(import.meta.dirname, '..', 'codegen')
        const ext = chainName == 'Geth' ? 'evm' : 'polkavm'
        const data = readFileSync(
            join(codegenDir, 'bytecode', `${name}.${ext}`)
        ).toString('hex')
        return `0x${data}`
    }

    const chain = defineChain({
        id: chainId,
        name: chainName,
        nativeCurrency: {
            name: 'Westie',
            symbol: 'WST',
            decimals: 18,
        },
        rpcUrls: {
            default: {
                http: [rpcUrl],
            },
        },
        testnet: true,
    })

    const transport = http(rpcUrl)
    const [account] = await createWalletClient({
        transport,
        chain,
    }).getAddresses()

    const serverWallet = createWalletClient({
        account,
        transport,
        chain,
    }).extend(publicActions)

    const wallet = createWalletClient({
        account: privateKeyToAccount(privateKey, { nonceManager }),
        transport,
        chain,
    }).extend(publicActions)

    // On geth let's endow the account wallet with some funds, to match the eth-rpc setup
    if (chainName == 'Geth') {
        const endowment = parseEther('1000')
        const balance = await serverWallet.getBalance(wallet.account)
        if (balance < endowment / 2n) {
            const hash = await serverWallet.sendTransaction({
                account: serverWallet.account,
                to: wallet.account.address,
                value: endowment,
            })
            await serverWallet.waitForTransactionReceipt({ hash })
        }
    }

    const debugClient = createClient({
        chain,
        transport,
    }).extend((client) => ({
        async traceTransaction<Tracer extends TracerType>(
            txHash: Hex,
            tracer: Tracer,
            tracerConfig?: TracerConfig[Tracer]
        ) {
            return client.request({
                method: 'debug_traceTransaction' as any,
                params: [txHash, { tracer, tracerConfig } as any],
            })
        },
        async traceBlock<Tracer extends TracerType>(
            blockNumber: bigint,
            tracer: Tracer,
            tracerConfig?: TracerConfig[Tracer]
        ) {
            return client.request({
                method: 'debug_traceBlockByNumber' as any,
                params: [
                    `0x${blockNumber.toString(16)}`,
                    { tracer, tracerConfig } as any,
                ],
            })
        },

        async traceCall<Tracer extends TracerType>(
            args: TransactionRequest,
            tracer: Tracer,
            tracerConfig: TracerConfig[Tracer],
            blockOrTag: 'latest' | Hex = 'latest'
        ) {
            return client.request({
                method: 'debug_traceCall' as any,
                params: [
                    formatTransactionRequest(args),
                    blockOrTag,
                    { tracer, tracerConfig } as any,
                ],
            })
        },
    }))

    async function deploy<K extends keyof Abis>({
        name,
        args,
        value,
    }: {
        name: K
        args: ContractConstructorArgs<Abis[K]>
        value?: bigint
    }) {
        const hash = await wallet.deployContract({
            abi: abis[name] as any,
            bytecode: getByteCode(name),
            args: args as any,
            value,
            maxPriorityFeePerGas: 0n,
        })

        return await wallet.waitForTransactionReceipt({ hash })
    }

    return { chain, deploy, wallet, debugClient }
}
