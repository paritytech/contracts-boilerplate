#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { MyToken } from '../codegen/addresses.ts'
import { privateKeyToAccount } from 'viem/accounts'
import { generatePrivateKey } from 'viem/accounts'
import { parseEther } from 'viem'

const code = await env.wallet.getCode({ address: MyToken })
if (!code) {
    console.error(`Deploy contract first with "deno task deploy"`)
    Deno.exit(1)
} else {
    console.log(`MyToken code size: ${code.length / 2 - 1} bytes`)
}

const ITERATIONS = 300

// Generate address pool (first half senders, second half receivers)
console.log('Generating address...')
const addressPool = Array.from({ length: ITERATIONS * 2 }, () => {
    const privateKey = generatePrivateKey()
    const account = privateKeyToAccount(privateKey)
    return { privateKey, address: account.address, account }
})
const senderAccounts = addressPool.slice(0, ITERATIONS)
const receiverAddresses = addressPool.slice(ITERATIONS).map((a) => a.address)
console.log(
    `Generated ${ITERATIONS} sender accounts and ${ITERATIONS} receiver addresses`,
)

// Prefund all addresses to bring accounts into existence
{
    console.log('Prefunding all addresses...')
    const nonce = await env.wallet.getTransactionCount(env.wallet.account)
    const fundHashes = await Promise.all(
        addressPool.map((account, index) => {
            return env.wallet.sendTransaction({
                to: account.address,
                value: parseEther('1'),
                nonce: nonce + addressPool.length - 1 - index,
            })
        }),
    )
    console.log(`Sent ${fundHashes.length} funding transactions`)
    await env.wallet.waitForTransactionReceipt({ hash: fundHashes[0] })
    console.log('All addresses funded')
}

{
    // Simulate and execute mint with env.wallet
    const mintRequest = {
        address: MyToken,
        abi: abis.MyToken,
        functionName: 'mint',
        args: [env.wallet.account.address, 10_000_000_000_000_000_000_000_000n],
    } as const
    const mintHash = await env.wallet.writeContract(mintRequest)
    const mintReceipt = await env.wallet.waitForTransactionReceipt({
        hash: mintHash,
    })

    // Simulate and execute transfer with env.wallet
    const transferRequest = {
        address: MyToken,
        abi: abis.MyToken,
        functionName: 'transfer',
        args: [receiverAddresses[0], 1n],
    } as const
    const transferHash = await env.wallet.writeContract(transferRequest)
    const transferReceipt = await env.wallet.waitForTransactionReceipt({
        hash: transferHash,
    })

    // Build all transactions for the loop
    console.log('Building all transactions...')
    const allRequests = []
    for (let i = 0; i < ITERATIONS; i++) {
        const sender = senderAccounts[i]
        const receiverAddress = receiverAddresses[i]

        // Mint transaction from sender (nonce 0)
        allRequests.push(
            env.wallet.writeContract({
                ...mintRequest,
                nonce: 0,
                account: sender.account,
                gas: mintReceipt.gasUsed,
                gasPrice: mintReceipt.effectiveGasPrice,
            }),
        )

        // // Transfer transaction from sender (nonce 1)
        allRequests.push(
            env.wallet.writeContract({
                ...transferRequest,
                args: [receiverAddress, 1n],
                nonce: 1,
                account: sender.account,
                gas: transferReceipt.gasUsed,
                gasPrice: mintReceipt.effectiveGasPrice,
            }),
        )
    }

    // Send all transactions at once
    console.log('Sending all transactions...')
    const allHashes = await Promise.all(allRequests)
    console.log(
        `Sent ${allHashes.length} transactions (${ITERATIONS} mint + ${ITERATIONS} transfer)`,
    )

    console.log('Waiting for last transaction...')
    env.wallet.waitForTransactionReceipt({
        hash: allHashes[allHashes.length - 1],
    })

    console.log(`\nSuccessfully processed ${ITERATIONS} mint + transfer pairs`)
}
