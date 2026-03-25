import {
    Abi,
    ContractConstructorArgs,
    createClient,
    defineChain,
    formatTransactionRequest,
    hexToNumber,
    parseEther,
    TransactionRequest,
} from 'viem'
import { Abis, abis } from '../codegen/abis.ts'
import { createWalletClient, Hex, http, publicActions } from 'viem'
import { nonceManager, privateKeyToAccount } from 'viem/accounts'

type TracerType =
    | 'callTracer'
    | 'prestateTracer'
    | 'opcodeTracer'
    | 'syscallTracer'
type TracerConfig = {
    syscallTracer: {
        enableReturnData?: boolean
    }
    opcodeTracer: {
        limit?: number
        enableMemory?: boolean
        disableStack?: boolean
        disableStorage?: boolean
        enableReturnData?: boolean
    }
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
    privateKeys,
}: {
    rpcUrl: string
    privateKey?: Hex
    privateKeys?: readonly [Hex, Hex]
}) {
    const resolvedPrivateKeys = privateKeys ??
        (privateKey ? [privateKey, privateKey] : undefined)
    if (!resolvedPrivateKeys) {
        throw new Error('createEnv requires privateKeys or privateKey')
    }
    const [primaryPrivateKey, secondaryPrivateKey] = resolvedPrivateKeys

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
            return String(result).split('/')[0] || 'Unknown'
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

    const serverWallet = account
        ? createWalletClient({
            account,
            transport,
            chain,
        }).extend(publicActions)
        : undefined

    const wallet = createWalletClient({
        account: privateKeyToAccount(primaryPrivateKey, { nonceManager }),
        transport,
        chain,
    }).extend(publicActions)

    const wallet2 = createWalletClient({
        account: privateKeyToAccount(secondaryPrivateKey, { nonceManager }),
        transport,
        chain,
    }).extend(publicActions)

    await fundWallets(rpcUrl, [wallet, wallet2], serverWallet)

    const debugClient = createClient({
        chain,
        transport,
    }).extend((client) => ({
        traceTransaction<Tracer extends TracerType>(
            txHash: Hex,
            tracer: Tracer,
            tracerConfig?: TracerConfig[Tracer],
        ): Promise<unknown> {
            return client.request({
                method: 'debug_traceTransaction' as 'eth_chainId',
                params: [
                    txHash,
                    tracer == 'opcodeTracer'
                        ? tracerConfig
                        : { tracer, tracerConfig },
                ] as never,
            })
        },
        traceBlock<Tracer extends TracerType>(
            blockNumber: bigint,
            tracer: Tracer,
            tracerConfig?: TracerConfig[Tracer],
        ): Promise<unknown> {
            return client.request({
                method: 'debug_traceBlockByNumber' as 'eth_chainId',
                params: [
                    `0x${blockNumber.toString(16)}`,
                    {
                        tracer: tracer == 'opcodeTracer' ? null : tracer,
                        tracerConfig,
                    },
                ] as never,
            })
        },

        traceCall<Tracer extends TracerType>(
            args: TransactionRequest,
            tracer: Tracer,
            tracerConfig: TracerConfig[Tracer],
            blockOrTag: 'latest' | Hex = 'latest',
        ): Promise<unknown> {
            return client.request({
                method: 'debug_traceCall' as 'eth_chainId',
                params: [
                    formatTransactionRequest(args),
                    blockOrTag,
                    {
                        tracer: tracer == 'opcodeTracer' ? null : tracer,
                        tracerConfig,
                    },
                ] as never,
            })
        },

        postDispatchWeight(
            txHash: Hex,
        ): Promise<{ ref_time: bigint; proof_size: bigint }> {
            return client.request({
                // deno-lint-ignore no-explicit-any
                method: 'polkadot_postDispatchWeight' as any,
                params: [txHash] as never,
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

    return {
        chain,
        deploy,
        getByteCode,
        wallet,
        wallet2,
        debugClient,
    }
}

/**
 * Ensure each wallet has at least 500 ETH (in 18-decimal units).
 *
 * Tries Alice's Substrate account first (works on omni-node / asset-hub).
 * Falls back to serverWallet via eth-rpc (works on Geth where there is no Substrate RPC).
 */
async function fundWallets(
    rpcUrl: string,
    // deno-lint-ignore no-explicit-any
    wallets: any[],
    // deno-lint-ignore no-explicit-any
    serverWallet: any | undefined,
): Promise<void> {
    const endowment = parseEther('1000')
    const threshold = endowment / 2n

    const getUnfunded = async (): Promise<Hex[]> => {
        const result: Hex[] = []
        for (const w of wallets) {
            const balance: bigint = await w.getBalance(w.account)
            if (balance < threshold) result.push(w.account.address)
        }
        return result
    }

    let addresses = await getUnfunded()
    if (addresses.length === 0) return

    // Try Alice (Substrate RPC) first — this is the primary path
    try {
        await fundFromAlice(rpcUrl, addresses, endowment)
        addresses = await getUnfunded()
        if (addresses.length === 0) return
    } catch {
        // No Substrate RPC (e.g. Geth) — fall through to serverWallet
    }

    // Fallback: fund via eth-rpc serverWallet (Geth)
    if (serverWallet) {
        for (const address of addresses) {
            if (address === serverWallet.account.address) continue
            const hash = await serverWallet.sendTransaction({
                account: serverWallet.account,
                to: address,
                value: endowment,
            })
            await serverWallet.waitForTransactionReceipt({ hash })
        }
    }
}

/**
 * Fund Ethereum addresses from Alice's Substrate account via `balances.transferKeepAlive`.
 * Alice is pre-funded in every Substrate dev genesis preset.
 */
async function fundFromAlice(
    ethRpcUrl: string,
    addresses: Hex[],
    amountEth: bigint,
): Promise<void> {
    const { ApiPromise, Keyring, WsProvider } = await import('@polkadot/api')

    const parsed = new URL(ethRpcUrl)
    parsed.protocol = 'ws:'
    parsed.port = '9944'
    const wsUrl = parsed.toString().replace(/\/$/, '')

    const api = await ApiPromise.create({
        provider: new WsProvider(wsUrl),
        noInitWarn: true,
    })

    try {
        // eth-rpc uses 18 decimals; the native Substrate token may differ.
        const decimals = api.registry.chainDecimals[0] ?? 12
        const substrateAmount = decimals < 18
            ? amountEth / 10n ** BigInt(18 - decimals)
            : amountEth * 10n ** BigInt(decimals - 18)

        const keyring = new Keyring({ type: 'sr25519' })
        const alice = keyring.addFromUri('//Alice')

        for (const ethAddr of addresses) {
            // Pallet-revive maps 20-byte ETH addresses to 32-byte AccountId32
            // by right-padding with 0xee: `eth_address ++ 0xee * 12`
            const hex = ethAddr.replace(/^0x/, '').toLowerCase() +
                'ee'.repeat(12)
            const dest = new Uint8Array(
                hex.match(/.{2}/g)!.map((b) => parseInt(b, 16)),
            )

            await new Promise<void>((resolve, reject) => {
                api.tx.balances
                    .transferKeepAlive(dest, substrateAmount)
                    .signAndSend(alice, ({ status, dispatchError }) => {
                        if (dispatchError) {
                            reject(
                                new Error(
                                    `Fund ${ethAddr}: ${dispatchError.toString()}`,
                                ),
                            )
                        } else if (status.isInBlock || status.isFinalized) {
                            resolve()
                        }
                    })
                    .catch(reject)
            })
        }
    } finally {
        await api.disconnect()
    }
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
