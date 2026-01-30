#!/usr/bin/env -S deno run --env-file --allow-all

import { env, deploy } from '../tools/lib/index.ts'
import { encodeAbiParameters, parseAbiParameters } from 'viem'
import type { Hex } from 'viem'

// Deploy contracts
const implReceipt = await deploy({ name: 'Implementation', args: [] })
const proxyReceipt = await deploy({
    name: 'DelegatecallProxy',
    args: [implReceipt.contractAddress!],
})

const calldata = ('0x00000000' + encodeAbiParameters(
    parseAbiParameters('uint256'),
    [42n]
).slice(2)) as Hex

// Run the first limit twice because the first run has different additional costs
const gasLimits = [200_000n, 200_000n, 500_000n, 1_000_000n]

type StructLog = { op: string; depth: number; gasCost: number; gas: number }

const results: {
    gasLimit: bigint
    gasCost: number
    gasBeforeCall: number
    afterCallGas: number
}[] = []

for (const gasLimit of gasLimits) {
    const txHash = await env.wallet.sendTransaction({
        to: proxyReceipt.contractAddress!,
        data: calldata,
        gas: gasLimit,
    })
    await env.wallet.waitForTransactionReceipt({ hash: txHash })

    const opcodeTrace = await env.debugClient.traceTransaction(txHash, 'opcodeTracer', {
        enableMemory: false,
        disableStack: false,
        disableStorage: true,
        enableReturnData: false,
    })

    const structLogs = (opcodeTrace as { structLogs: StructLog[] }).structLogs
    const delegatecallIdx = structLogs.findIndex((log) => log.op === 'DELEGATECALL' || log.op === 'delegate_call_evm')
    const delegatecallOp = structLogs[delegatecallIdx]

    // Find first opcode back at depth 1 after the DELEGATECALL
    let afterCallIdx = delegatecallIdx + 1
    while (afterCallIdx < structLogs.length && structLogs[afterCallIdx].depth !== 1) {
        afterCallIdx++
    }
    const afterCallOp = structLogs[afterCallIdx]

    results.push({
        gasLimit,
        gasCost: delegatecallOp.gasCost,
        gasBeforeCall: delegatecallOp.gas,
        afterCallGas: afterCallOp.gas,
    })
}

// Summary table
console.log('\n=== Summary Table ===')
console.log('| Gas Limit | DELEGATECALL gas | gasCost | After-call gas | Actual Deducted |')
console.log('|-----------|------------------|---------|----------------|-----------------|')
for (const r of results) {
    const actualDeducted = r.gasBeforeCall - r.afterCallGas
    console.log(`| ${r.gasLimit.toString().padStart(9)} | ${r.gasBeforeCall.toString().padStart(16)} | ${r.gasCost.toString().padStart(7)} | ${r.afterCallGas.toString().padStart(14)} | ${actualDeducted.toString().padStart(15)} |`)
}

const COLD_COST = 2600
const WARM_COST = 100

console.log('\n=== Verifying EIP-2929 + EIP-150 1/64th rule ===')
console.log('Formula: delegateCall.gasCost = gas_left - floor(gas_left/64) + ACCOUNT_ACCESS_COST')
console.log('         gas_left = delegateCall.gas - ACCOUNT_ACCESS_COST')
console.log('')
for (const r of results) {
    const gas_left = r.gasBeforeCall - COLD_COST
    const expected = gas_left - Math.floor(gas_left / 64) + COLD_COST
    console.log(`Gas limit: ${r.gasLimit}`)
    console.log(`  gas - (gas - ACCOUNT_ACCESS)/64 = ${gas_left} - ${Math.floor(gas_left / 64)} = ${expected}`)
    console.log(`  gasCost      = ${r.gasCost}`)
    console.log()
}
