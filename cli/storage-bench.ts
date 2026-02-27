#!/usr/bin/env -S deno run --env-file --allow-all
import { parseArgs } from '@std/cli'
import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { StorageBench } from '../codegen/addresses.ts'
import { decodeEventLog, encodeFunctionData } from 'viem'

const args = parseArgs(Deno.args, {
    boolean: ['trace'],
    default: { trace: false },
})

const method = args._[0]?.toString()
const numBytes = BigInt(args._[1] ?? 0)

if (!method || !['write', 'read', 'noop'].includes(method)) {
    console.log(
        `Usage: ./cli/storage-bench.ts <write|read|noop> [numBytes] [--trace]

Methods:
  write <numBytes>   Write numBytes to storage (rounds up to 32-byte slots)
  read <numBytes>    Read how many slots were written for numBytes
  noop               Do nothing (measure base transaction overhead)

Flags:
  --trace            Enable debug tracing`,
    )
    Deno.exit(1)
}

const abi = abis.StorageBench

type Method = 'write' | 'read' | 'noop'
const fnArgs = method === 'noop' ? ([] as const) : ([numBytes] as const)

if (args.trace) {
    const data = encodeFunctionData({
        abi,
        functionName: method as Method,
        args: fnArgs as readonly [] | readonly [bigint],
    })

    const result = await env.debugClient.traceCall(
        { to: StorageBench, data },
        'callTracer',
        { withLog: true },
    )
    console.log(JSON.stringify(result, null, 2))
} else {
    const { request } = await env.wallet.simulateContract({
        address: StorageBench,
        abi,
        functionName: method as Method,
        args: fnArgs as readonly [] | readonly [bigint],
    })

    const hash = await env.wallet.writeContract(request)
    const receipt = await env.wallet.waitForTransactionReceipt({ hash })
    console.log(`tx: ${receipt.transactionHash}`)
    console.log(`status: ${receipt.status}`)
    console.log(`gas used: ${receipt.gasUsed}`)

    if (method === 'read') {
        for (const log of receipt.logs) {
            try {
                const event = decodeEventLog({ abi, ...log })
                if (event.eventName === 'ReadResult') {
                    console.log(`slots written: ${event.args.slotsWritten}`)
                }
            } catch { /* skip non-matching logs */ }
        }
    }
}
