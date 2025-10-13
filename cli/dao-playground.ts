#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { Dao, DaoAttacker } from '../codegen/addresses.ts'

const result = await env.wallet.readContract({
    address: Dao,
    abi: (abis as any).Dao,
    functionName: 'getBalance',
    args: [DaoAttacker],
})

console.log(result)
