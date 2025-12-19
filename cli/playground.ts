#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { Storage } from '../codegen/addresses.ts'
import { parseEther } from 'viem'

await env.wallet.sendTransaction({
    to: '0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63',
    value: parseEther('1'),
})

// {
//     const result = await env.wallet.writeContract(
//         {
//             address: Storage,
//             abi: abis.Storage,
//             functionName: 'store',
//             args: [42n],
//         },
//     )
//
//     console.log('tx', result)
// }
