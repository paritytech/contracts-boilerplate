#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { Storage } from '../codegen/addresses.ts'

{
    const { request } = await env.wallet.simulateContract({
        address: Storage,
        abi: abis.UsernameRegistry,
        functionName: 'registerUsername',
        args: ['foo'],
    })

    const result = await env.wallet.writeContract(request)
    console.log(result)
}

{
    const result = await env.wallet.readContract({
        address: Storage,
        abi: abis.UsernameRegistry,
        functionName: 'getUsername',
        args: [env.wallet.account.address],
    })
    console.log({ result })
}
