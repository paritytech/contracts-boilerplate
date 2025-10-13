#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { encodeFunctionData } from 'viem'
import { StateChanger, StaticCaller } from '../codegen/addresses.ts'

const result = await env.debugClient.traceCall(
    {
        to: StaticCaller,
        data: encodeFunctionData({
            abi: (abis as any).StaticCaller,
            functionName: 'staticCallChangeState',
            args: [StateChanger, 42n],
        }),
    },
    'callTracer'
    // {
    //     enableMemory: true,
    //     disableStack: false,
    //     disableStorage: false,
    //     enableReturnData: true,
    // }
)
console.log(JSON.stringify(result, null, 2))
