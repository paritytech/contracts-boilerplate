import {
    Abi,
    CallParameters,
    ContractConstructorArgs,
    createClient,
    defineChain,
    formatTransactionRequest,
    hexToNumber,
    parseEther,
} from 'viem'
import { Abis, abis } from '../codegen/abis.ts'
import { createWalletClient, Hex, http, publicActions } from 'viem'
import { nonceManager, privateKeyToAccount } from 'viem/accounts'

type TracerType = 'callTracer' | 'prestateTracer' | 'opcodeTracer'
type TracerConfig = {
    callTracer: { withLog?: boolean; onlyTopCall?: boolean }
    opcodeTracer: {
        disableStack?: boolean
        enableMemory?: boolean
        disableStorage?: boolean
        enableReturnData?: boolean
    }
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
            const { result } = await resp.json()
            return hexToNumber(result)
        } catch (e) {
            console.error(`Failed to get chain id from ${rpcUrl}`, e)
            Deno.exit(1)
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
            const { result } = await resp.json()
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
            Deno.exit(1)
        }
    })()

    function getByteCode(
        name: string,
        bytecodeType: 'evm' | 'polkavm' = 'evm',
    ): Hex {
        return bytecodeType == 'evm'
            ? readBytecode(`codegen/evm/${name}.bin`)
            : readBytecode(`codegen/pvm/${name}.polkavm`)
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

    const transport = http(rpcUrl, {
        // enable batching
        // timeout: 60_000,
        // batch: { wait: 100 },
    })
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
        traceTransaction<Tracer extends TracerType>(
            txHash: Hex,
            tracer: Tracer,
            tracerConfig?: TracerConfig[Tracer],
        ) {
            const params: Record<string, unknown> = tracer == null
                ? (tracerConfig ?? {})
                : { tracer, tracerConfig }

            return client.request({
                method: 'debug_traceTransaction' as never,
                params: [txHash, params],
            })
        },
        postDispatchWeight(
            transactionHash: Hex,
        ) {
            return client.request({
                method: 'substrate_postDispatchWeight' as never,
                params: [
                    transactionHash,
                ],
            })
        },
        traceBlock<Tracer extends TracerType>(
            blockNumber: bigint,
            tracer: Tracer,
            tracerConfig?: TracerConfig[Tracer],
        ) {
            return client.request({
                method: 'debug_traceBlockByNumber' as never,
                params: [
                    `0x${blockNumber.toString(16)}`,
                    { tracer, tracerConfig },
                ],
            })
        },

        traceCall<Tracer extends TracerType>(
            args: CallParameters,
            tracer: Tracer | null,
            tracerConfig?: TracerConfig[Tracer],
        ) {
            const params: Record<string, unknown> = tracer == null
                ? (tracerConfig ?? {})
                : { tracer, tracerConfig }

            return client.request({
                method: 'debug_traceCall' as never,
                params: [formatTransactionRequest(args), 'latest', params],
            })
        },
    }))

    async function deploy<K extends keyof Abis>({
        name,
        args,
        value,
        bytecodeType,
        bytecode,
    }: {
        name: K
        args: ContractConstructorArgs<Abis[K]>
        value?: bigint
        bytecodeType?: 'evm' | 'polkavm'
        bytecode?: Hex
    }) {
        const hash = await wallet.deployContract({
            abi: abis[name] as Abi,
            bytecode: bytecode ?? getByteCode(name, bytecodeType),
            args: args as readonly unknown[],
            value,
        })

        return await wallet.waitForTransactionReceipt({ hash })
    }

    return { chain, deploy, getByteCode, wallet, debugClient }
}

export function readBytecode(
    filepath: string,
): Hex {
    return `0x${
        Array.from(Deno.readFileSync(filepath))
            .map((b: number) => b.toString(16).padStart(2, '0'))
            .join('')
    }` as Hex
}
