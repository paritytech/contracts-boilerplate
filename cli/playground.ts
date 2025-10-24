#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { Caller } from '../codegen/addresses.ts'
import { encodeFunctionData } from 'viem'

{
    const result = await env.wallet.readContract({
        address: Caller,
        abi: abis.Caller,
        functionName: 'staticCall',
        args: [],
    })
    console.log({ result })
}

{
    const result = await env.debugClient.traceCall(
        {
            to: Caller,
            data: encodeFunctionData({
                abi: abis.Caller,
                functionName: 'staticCall',
                args: [],
            }),
        },
        'callTracer'
    )

    console.log(result)
}
