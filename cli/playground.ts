#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { EnumTest } from '../codegen/addresses.ts'

{
    const result = await env.wallet.readContract(
        {
            address: EnumTest,
            abi: abis.EnumTest,
            functionName: 'callTestEnum',
            args: [2],
        },
    )

    console.log('tx', result)
}
