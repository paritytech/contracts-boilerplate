#!/usr/bin/env -S deno run --env-file --allow-all

import { env, initEnv } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { Dao, DaoAttacker } from '../codegen/addresses.ts'
import type { Abi } from 'viem'

await initEnv()

const result = await env.wallet.readContract({
    address: Dao,
    abi: (abis as Record<string, Abi>).Dao,
    functionName: 'getBalance',
    args: [DaoAttacker],
})

console.log(result)
