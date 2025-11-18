#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { Test } from '../codegen/addresses.ts'
import { encodeFunctionData } from 'viem'

switch (Deno.env.get('ACTION')) {
    case 'execute': {
        const { request } = await env.wallet.simulateContract({
            address: Test,
            abi: abis.Test,
            functionName: 'tryCatchNewContract',
            args: ['0x0000000000000000000000000000000000000000'],
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
            address: Test,
            abi: abis.Test,
            functionName: 'tryCatchNewContract',
            args: ['0x0000000000000000000000000000000000000000'],
        })

        console.log(res)
        break
    }

    default: {
        const res = await env.debugClient.traceCall(
            {
                account: env.wallet.account,
                gas: 28663198355n, // * 140n / 100n,
                to: Test,
                data: encodeFunctionData({
                    abi: abis.Test,
                    functionName: 'tryCatchNewContract',
                    args: ['0x0000000000000000000000000000000000000000'],
                }),
            },
            'callTracer',
            {},
        )
        console.log(JSON.stringify(res))
    }
}
