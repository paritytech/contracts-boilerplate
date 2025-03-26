// Run with
// deno task build --filter dao
// deno --env-file --allow-all ./cli/playground.ts
import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { CallRust } from '../codegen/addresses.ts'

const result = await env.wallet.readContract({
    address: CallRust,
    abi: abis.CallRust,
    functionName: 'fibonacci',
    args: [4],
})

console.log(result)
