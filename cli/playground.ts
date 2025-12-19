#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { Storage } from '../codegen/addresses.ts'

{
    const result = await env.wallet.writeContract(
        {
            address: Storage,
            abi: abis.Storage,
            functionName: 'store',
            args: [42n],
        },
    )

    console.log('tx', result)
}
