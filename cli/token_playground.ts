#!/usr/bin/env -S deno run --env-file --allow-all
import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { MyTokenEvm } from '../codegen/addresses.ts'
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

const addresses = [
    { address: MyTokenEvm, name: 'EVM - solidity' },
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

type OpcodeStats = {
    opcode: string
    totalGas: number
    count: number
}

function analyzeOpcodes(trace: any, operationName: string, gasUsed: bigint) {
    const structLogs = trace.structLogs || []

    // Group by opcode
    const opcodeMap = new Map<string, { totalGas: number; count: number }>()

    for (const log of structLogs) {
        const op = log.op
        const gasCost = log.gasCost || 0

        if (!opcodeMap.has(op)) {
            opcodeMap.set(op, { totalGas: 0, count: 0 })
        }

        const stats = opcodeMap.get(op)!
        stats.totalGas += gasCost
        stats.count += 1
    }

    // Convert to array and sort by total gas (descending)
    const opcodeStats: OpcodeStats[] = Array.from(opcodeMap.entries())
        .map(([opcode, { totalGas, count }]) => ({
            opcode,
            totalGas,
            count,
        }))
        .sort((a, b) => b.totalGas - a.totalGas)

    // Create table
    const table = new Table({
        head: ['Opcode', 'Total Gas', 'Call Count', 'Avg Gas/Call', '% of Opcodes', '% of Tx Gas'],
        style: {
            head: ['cyan'],
        },
    })

    const totalGasFromOpcodes = opcodeStats.reduce((sum, stat) => sum + stat.totalGas, 0)
    const totalGasFromReceipt = Number(gasUsed)

    // Show top opcodes (or all if fewer than 20)
    const topOpcodes = opcodeStats.slice(0, 20)

    for (const stat of topOpcodes) {
        const avgGas = (stat.totalGas / stat.count).toFixed(1)
        const percentageOfOpcodes = ((stat.totalGas / totalGasFromOpcodes) * 100).toFixed(1)
        const percentageOfTxGas = ((stat.totalGas / totalGasFromReceipt) * 100).toFixed(1)

        table.push([
            stat.opcode,
            stat.totalGas.toString(),
            stat.count.toString(),
            avgGas,
            `${percentageOfOpcodes}%`,
            `${percentageOfTxGas}%`,
        ])
    }

    console.log(`\n## Opcode Analysis - ${operationName}\n`)
    console.log(`Total Gas (from receipt): ${totalGasFromReceipt}`)
    console.log(`Total Gas (from opcodes): ${totalGasFromOpcodes}`)
    console.log(`Total Opcodes Executed: ${structLogs.length}`)
    console.log(`\nTop Opcodes by Gas Cost:\n`)
    console.log(table.toString())
}

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
for (const { address } of addresses) {
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
    console.log(`receipt: ${receipt.transactionHash}`)

    const opcodes = await env.debugClient.traceTransaction(
        receipt.transactionHash,
        null as any,
        { disableMemory: true, disableStack: true },
    )

    analyzeOpcodes(opcodes, 'mint', receipt.gasUsed)
}

// transfer token
for (const { address } of addresses) {
    const { request } = await env.wallet.simulateContract({
        address,
        abi: abis.MyToken,
        functionName: 'transfer',
        args: [recipient, 1n],
    })

    const hash = await env.wallet.writeContract(request)
    const receipt = await env.wallet.waitForTransactionReceipt({ hash })
    console.log(`receipt: ${receipt.transactionHash}`)

    const opcodes = await env.debugClient.traceTransaction(
        receipt.transactionHash,
        null as any,
        { disableMemory: true, disableStack: true },
    )

    analyzeOpcodes(opcodes, 'transfer', receipt.gasUsed)
}
