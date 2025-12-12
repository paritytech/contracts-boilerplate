#!/usr/bin/env -S deno run --env-file --allow-all
import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import {
    FibonacciEvm,
    FibonacciInk,
    FibonacciPvm,
    FibonacciRust,
    FibonacciRustU128,
    FibonacciRustU256,
    MyTokenEvm,
    MyTokenInk,
    MyTokenPvm,
    MyTokenRustNoAlloc,
    MyTokenRustWithAlloc,
} from '../codegen/addresses.ts'
import { Hex, parseEther } from 'viem'
import Table from 'cli-table3'

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

const tokenAddresses = [
    { address: MyTokenEvm, name: 'Token - EVM - solidity' },
    { address: MyTokenPvm, name: 'Token - PVM - solidity' },
    { address: MyTokenInk, name: 'Token - PVM - Ink!' },
    { address: MyTokenRustWithAlloc, name: 'Token - PVM - Rust with alloc' },
    { address: MyTokenRustNoAlloc, name: 'Token - PVM - Rust no alloc' },
] as const

const fibAddresses = [
    { address: FibonacciEvm, name: 'Fibonacci - EVM - solidity' },
    { address: FibonacciPvm, name: 'Fibonacci - PVM - solidity' },
    { address: FibonacciRust, name: 'Fibonacci - PVM - Rust' },
    { address: FibonacciRustU128, name: 'Fibonacci u128 - PVM - Rust' },
    { address: FibonacciRustU256, name: 'Fibonacci u256 - PVM - Rust' },
    { address: FibonacciInk, name: 'Fibonacci - PVM - Ink!' },
] as const

type CodeSizeEntry = {
    name: string
    size: number
}

type StatEntry = {
    operation: string
    gas: bigint
    weight: { ref_time: bigint; proof_size: bigint }
    status: 'success' | 'reverted'
}

const tokenCodeSizes: CodeSizeEntry[] = []
const fibCodeSizes: CodeSizeEntry[] = []
const stats: StatEntry[] = []

for (const { name, address } of tokenAddresses) {
    const code = await env.wallet.getCode({ address })
    if (!code) {
        console.error(`Deploy contract first with "deno task deploy"`)
        Deno.exit(1)
    }
    tokenCodeSizes.push({
        name,
        size: code.length / 2 - 1,
    })
}

for (const { name, address } of fibAddresses) {
    const code = await env.wallet.getCode({ address })
    if (!code) {
        console.error(`Deploy contract first with "deno task deploy"`)
        Deno.exit(1)
    }
    fibCodeSizes.push({
        name,
        size: code.length / 2 - 1,
    })
}

// mint token
for (const { name, address } of tokenAddresses) {
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
        status: receipt.status,
    })
}

// transfer token
for (const { name, address } of tokenAddresses) {
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
        status: receipt.status,
    })
}

// fibonacci calls
for (const { name, address } of fibAddresses) {
    const { request } = await env.wallet.simulateContract({
        address,
        abi: abis.Fibonacci,
        functionName: 'fibonacci',
        args: [20],
    })

    const hash = await env.wallet.writeContract(request)
    const receipt = await env.wallet.waitForTransactionReceipt({ hash })
    const weight = await env.debugClient.postDispatchWeight(hash)

    stats.push({
        operation: `fibonacci (${name})`,
        gas: receipt.gasUsed,
        weight,
        status: receipt.status,
    })
}

// Separate mint, transfer, and fibonacci operations
const mintStats = stats.filter((s) => s.operation.includes('mint'))
const transferStats = stats.filter((s) => s.operation.includes('transfer'))
const fibonacciStats = stats.filter((s) => s.operation.includes('fibonacci'))

function createOperationTable(operationStats: StatEntry[], title: string) {
    // Sort by ref_time (ascending)
    const sortedStats = [...operationStats].sort((a, b) =>
        Number(a.weight.ref_time - b.weight.ref_time)
    )

    const minGas = sortedStats.reduce(
        (min, s) => s.gas < min ? s.gas : min,
        sortedStats[0].gas,
    )
    const minRefTime = sortedStats.reduce(
        (min, s) => s.weight.ref_time < min ? s.weight.ref_time : min,
        sortedStats[0].weight.ref_time,
    )
    const minProofSize = sortedStats.reduce(
        (min, s) => s.weight.proof_size < min ? s.weight.proof_size : min,
        sortedStats[0].weight.proof_size,
    )

    const table = new Table({
        head: [
            'Implementation',
            'Success',
            'Ref Time',
            'Ref Time %',
            'Proof Size',
            'Proof Size %',
            'Gas Used',
            'Gas %',
        ],
        style: {
            head: ['cyan'],
        },
    })

    for (const stat of sortedStats) {
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
            stat.status === 'success' ? '✓' : '✗',
            stat.weight.ref_time.toString(),
            `${refTimePercent}%`,
            stat.weight.proof_size.toString(),
            `${proofSizePercent}%`,
            stat.gas.toString(),
            `${gasPercent}%`,
        ])
    }

    console.log(`\n## ${title}\n`)
    console.log(table.toString())
}

createOperationTable(mintStats, 'Mint Operation')
createOperationTable(transferStats, 'Transfer Operation')
createOperationTable(fibonacciStats, 'Fibonacci(20) Operation')

// Output token code size table
const sortedTokenCodeSizes = [...tokenCodeSizes].sort((a, b) => a.size - b.size)

const minTokenCodeSize = sortedTokenCodeSizes.reduce(
    (min, c) => c.size < min ? c.size : min,
    sortedTokenCodeSizes[0].size,
)

const tokenCodeSizeTable = new Table({
    head: ['Implementation', 'Code Size (bytes)', 'Size %'],
    style: {
        head: ['cyan'],
    },
})

for (const entry of sortedTokenCodeSizes) {
    const sizePercent = ((entry.size / minTokenCodeSize) * 100).toFixed(1)
    tokenCodeSizeTable.push([
        entry.name,
        entry.size.toString(),
        `${sizePercent}%`,
    ])
}

console.log('\n## Token Code Size\n')
console.log(tokenCodeSizeTable.toString())

// Output fibonacci code size table
const sortedFibCodeSizes = [...fibCodeSizes].sort((a, b) => a.size - b.size)

const minFibCodeSize = sortedFibCodeSizes.reduce(
    (min, c) => c.size < min ? c.size : min,
    sortedFibCodeSizes[0].size,
)

const fibCodeSizeTable = new Table({
    head: ['Implementation', 'Code Size (bytes)', 'Size %'],
    style: {
        head: ['cyan'],
    },
})

for (const entry of sortedFibCodeSizes) {
    const sizePercent = ((entry.size / minFibCodeSize) * 100).toFixed(1)
    fibCodeSizeTable.push([
        entry.name,
        entry.size.toString(),
        `${sizePercent}%`,
    ])
}

console.log('\n## Fibonacci Code Size\n')
console.log(fibCodeSizeTable.toString())
