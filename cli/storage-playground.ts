#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { Storage } from '../codegen/addresses.ts'
import { encodeFunctionData } from 'viem'

{
    const res = await env.debugClient.traceCall(
        {
            to: Storage,
            data: encodeFunctionData({
                abi: (abis as any).Storage,
                functionName: 'write_n1_read_n2',
                args: [BigInt(Date.now())],
            }),
        },
        'prestateTracer',
        { diffMode: false }
    )
    console.log(res)
}
// {
//     const { request } = await env.wallet.simulateContract({
//         address: Storage,
//         abi: abis.Storage,
//         functionName: 'write_n1_read_n2',
//         args: [BigInt(Date.now())],
//     })
//     const hash = await env.wallet.writeContract(request)
//     let receipt = await env.wallet.waitForTransactionReceipt({
//         hash,
//     })
//
//     console.log(receipt)
//     const res = await env.debugClient.traceBlock(
//         receipt.blockNumber,
//         'prestateTracer',
//         { diffMode: false }
//     )
//     console.log(res)
// }
