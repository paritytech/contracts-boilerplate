#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { TerminateTest } from '../codegen/addresses.ts'
import { encodeFunctionData } from 'viem'
import { parseArgs } from '@std/cli/parse-args'

const flags = parseArgs(Deno.args, {
    string: ['action'],
    boolean: ['redeploy'],
    alias: {
        a: 'action',
    },
})

const { action } = flags

switch (action) {
    case 'execute': {
        const { request } = await env.wallet.simulateContract({
            address: TerminateTest,
            abi: abis.TerminateTest,
            functionName: 'tryCallAfterTerminate',
            args: [flags.redeploy],
        })

        const hash = await env.wallet.writeContract(request)
        const receipt = await env.wallet.waitForTransactionReceipt({
            hash,
        })

        const res = await env.debugClient.traceTransaction(
            receipt.transactionHash,
            'callTracer',
            {},
        )
        console.log(JSON.stringify(res))
        break
    }

    case 'estimate': {
        const res = await env.wallet.estimateContractGas({
            address: TerminateTest,
            abi: abis.TerminateTest,
            functionName: 'tryCallAfterTerminate',
            args: [flags.redeploy],
        })

        console.log(res)
        break
    }

    case 'call': {
        try {
            const res = await env.wallet.readContract({
                address: TerminateTest,
                abi: abis.TerminateTest,
                functionName: 'tryCallAfterTerminate',
                args: [flags.redeploy],
            })
            console.log(res)
        } catch (err) {
            console.log(`Error: ${err}`)
        }

        break
    }

    default: {
        const res = await env.debugClient.traceCall(
            {
                account: env.wallet.account,
                to: TerminateTest,
                data: encodeFunctionData({
                    abi: abis.TerminateTest,
                    functionName: 'tryCallAfterTerminate',
                    args: [flags.redeploy],
                }),
            },
            'callTracer',
            {},
        )
        console.log(JSON.stringify(res))
    }
}
