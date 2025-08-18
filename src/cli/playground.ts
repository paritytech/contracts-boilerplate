// deno --env-file --allow-all src/cli/playground.ts
import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { Storage } from '../codegen/addresses.ts'

{
    const result = await env.wallet.readContract({
        address: Storage,
        abi: abis.Storage,
        functionName: 'gethash',
        args: [],
    })
    console.log(result)
}
