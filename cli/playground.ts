#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { Fibonacci } from '../codegen/addresses.ts'

// await env.wallet.sendTransaction({
//     to: '0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63',
//     value: parseEther('1'),
// })

{
    const result = await env.wallet.writeContract(
        {
            address: Fibonacci,
            abi: abis.Fibonacci,
            functionName: 'fibonacci',
            args: [5n],
        },
    )

    console.log('tx', result)
}
