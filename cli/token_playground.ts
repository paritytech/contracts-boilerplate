#!/usr/bin/env -S deno run --env-file --allow-all
import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { MyTokenEvm, MyTokenInk, MyTokenPvm } from '../codegen/addresses.ts'
import { Hex, parseEther } from 'viem'
import Table from 'npm:cli-table3'

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

const addresses = [
    { address: MyTokenEvm, name: 'EVM - solidity' },
    { address: MyTokenPvm, name: 'PVM - solidity' },
    { address: MyTokenInk, name: 'PVM - Ink!' },
] as const

type CodeSizeEntry = {
    name: string
    size: number
}

type StatEntry = {
    operation: string
    gas: bigint
    weight: { ref_time: bigint; proof_size: bigint }
}

const codeSizes: CodeSizeEntry[] = []
const stats: StatEntry[] = []

for (const { name, address } of addresses) {
    const code = await env.wallet.getCode({ address })
    if (!code) {
        console.error(`Deploy contract first with "deno task deploy"`)
        Deno.exit(1)
    }
    codeSizes.push({
        name,
        size: code.length / 2 - 1,
    })
}

// mint token
for (const { name, address } of addresses) {
    const { request } = await env.wallet.simulateContract({
        address,
        abi: abis.MyToken,
        functionName: 'mint',
        args: [
            '0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac',
            10_000n,
        ],
    })

    const hash = await env.wallet.writeContract(request)
    const receipt = await env.wallet.waitForTransactionReceipt({ hash })
    const weight = await env.debugClient.postDispatchWeight(hash)

    stats.push({
        operation: `mint (${name})`,
        gas: receipt.gasUsed,
        weight,
    })
}

// transfer token
for (const { name, address } of addresses) {
    const { request } = await env.wallet.simulateContract({
        address,
        abi: abis.MyToken,
        functionName: 'transfer',
        args: [recipient, 1n],
    })

    const hash = await env.wallet.writeContract(request)
    const receipt = await env.wallet.waitForTransactionReceipt({ hash })
    const weight = await env.debugClient.postDispatchWeight(hash)

    stats.push({
        operation: `transfer (${name})`,
        gas: receipt.gasUsed,
        weight,
    })
}

// Separate mint and transfer operations
const mintStats = stats.filter((s) => s.operation.includes('mint'))
const transferStats = stats.filter((s) => s.operation.includes('transfer'))

function createOperationTable(operationStats: StatEntry[], title: string) {
    const minGas = operationStats.reduce(
        (min, s) => s.gas < min ? s.gas : min,
        operationStats[0].gas,
    )
    const minRefTime = operationStats.reduce(
        (min, s) => s.weight.ref_time < min ? s.weight.ref_time : min,
        operationStats[0].weight.ref_time,
    )
    const minProofSize = operationStats.reduce(
        (min, s) => s.weight.proof_size < min ? s.weight.proof_size : min,
        operationStats[0].weight.proof_size,
    )

    const table = new Table({
        head: [
            'Implementation',
            'Gas Used',
            'Gas %',
            'Ref Time',
            'Ref Time %',
            'Proof Size',
            'Proof Size %',
        ],
        style: {
            head: ['cyan'],
        },
    })

    for (const stat of operationStats) {
        const gasPercent = ((Number(stat.gas) / Number(minGas)) * 100).toFixed(
            1,
        )
        const refTimePercent =
            ((Number(stat.weight.ref_time) / Number(minRefTime)) * 100).toFixed(
                1,
            )
        const proofSizePercent =
            ((Number(stat.weight.proof_size) / Number(minProofSize)) * 100)
                .toFixed(1)

        // Extract implementation name (EVM or PVM) from operation
        const implName = stat.operation.match(/\((.*?)\)/)?.[1] ||
            stat.operation

        table.push([
            implName,
            stat.gas.toString(),
            `${gasPercent}%`,
            stat.weight.ref_time.toString(),
            `${refTimePercent}%`,
            stat.weight.proof_size.toString(),
            `${proofSizePercent}%`,
        ])
    }

    console.log(`\n## ${title}\n`)
    console.log(table.toString())
}

createOperationTable(mintStats, 'Mint Operation')
createOperationTable(transferStats, 'Transfer Operation')

// Output code size table
const minCodeSize = codeSizes.reduce(
    (min, c) => c.size < min ? c.size : min,
    codeSizes[0].size,
)

const codeSizeTable = new Table({
    head: ['Implementation', 'Code Size (bytes)', 'Size %'],
    style: {
        head: ['cyan'],
    },
})

for (const entry of codeSizes) {
    const sizePercent = ((entry.size / minCodeSize) * 100).toFixed(1)
    codeSizeTable.push([
        entry.name,
        entry.size.toString(),
        `${sizePercent}%`,
    ])
}

console.log('\n' + codeSizeTable.toString())
