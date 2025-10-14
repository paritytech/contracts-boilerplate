#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { Test } from '../codegen/addresses.ts'

{
    const { request } = await env.wallet.simulateContract({
        address: Test,
        abi: abis.Test,
        functionName: 'main',
        args: [],
    })

    const result = await env.wallet.writeContract(request)
    console.log(result)
}
