#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { MyToken } from '../codegen/addresses.ts'
import { Hex, parseEther } from 'viem'

const recipient: Hex = '0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63'

// fund recipient if needed
{
    //  endow the account wallet with some funds if needed
    const endowment = parseEther('1')
    const balance = await env.wallet.getBalance({ address: recipient })
    if (balance == 0n) {
        console.log(`funding ${recipient}`)
        const hash = await env.wallet.sendTransaction({
            to: recipient,
            value: endowment,
        })
        await env.wallet.waitForTransactionReceipt({ hash })
    }
}

const code = await env.wallet.getCode({ address: MyToken })
if (!code) {
    console.error(`Deploy contract first with "deno task deploy"`)
    Deno.exit(1)
} else {
    console.log(`MyToken code size: ${code.length / 2 - 1} bytes`)
}

// mint token
{
    const { request } = await env.wallet.simulateContract({
        address: MyToken,
        abi: abis.MyToken,
        functionName: 'mint',
        args: [
            '0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac',
            10_000_000_000_000_000_000_000_000n,
        ],
    })

    const hash = await env.wallet.writeContract(request)
    console.log('mint tx', hash)

    const receipt = await env.wallet.waitForTransactionReceipt({ hash })
    console.log('minting gas used: ', receipt.gasUsed)
}

// transfer token
{
    const { request } = await env.wallet.simulateContract({
        address: MyToken,
        abi: abis.MyToken,
        functionName: 'transfer',
        args: [recipient, 1n],
    })

    const hash = await env.wallet.writeContract(request)
    console.log('transfer tx', hash)

    const receipt = await env.wallet.waitForTransactionReceipt({ hash })
    console.log('transfer gas used:', receipt.gasUsed)
}
