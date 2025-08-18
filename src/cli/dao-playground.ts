// Run with
// deno task build --filter dao
// deno --env-file --allow-all ./src/cli/dao-playground.ts
import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { Dao, DaoAttacker } from '../codegen/addresses.ts'

const result = await env.wallet.readContract({
    address: Dao,
    abi: abis.Dao,
    functionName: 'getBalance',
    args: [DaoAttacker],
})

console.log(result)
