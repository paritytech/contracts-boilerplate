// Run with
// deno task build --filter dao
// deno --env-file --allow-all src/cli/dao-hack-opcode-traces.ts | jless
import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { encodeFunctionData } from 'viem'
import { DaoAttacker } from '../codegen/addresses.ts'

const result = await env.debugClient.traceCall(
    {
        to: DaoAttacker,
        data: encodeFunctionData({
            abi: abis.DaoAttacker,
            functionName: 'attack',
            args: [],
        }),
    },
    null,
    {
        enableMemory: true,
        disableStack: false,
        disableStorage: false,
        enableReturnData: true,
    }
)
console.log(JSON.stringify(result, null, 2))
