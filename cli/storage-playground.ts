#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { Storage } from '../codegen/addresses.ts'
import { encodeFunctionData } from 'viem'
import type { Abi } from 'viem'

{
    const res = await env.debugClient.traceCall(
        {
            to: Storage,
            data: encodeFunctionData({
                abi: (abis as Record<string, Abi>).Storage,
                functionName: 'write_n1_read_n2',
                args: [BigInt(Date.now())],
            }),
        },
        'prestateTracer',
        { diffMode: false },
    )
    console.log(res)
}
