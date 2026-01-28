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

// Send transaction to trigger delegatecall
const calldata = ('0x00000000' + encodeAbiParameters(
    parseAbiParameters('uint256'),
    [42n]
).slice(2)) as Hex

const txHash = await env.wallet.sendTransaction({
    to: proxyReceipt.contractAddress!,
    data: calldata,
})
await env.wallet.waitForTransactionReceipt({ hash: txHash })

// Get traces
const opcodeTrace = await env.debugClient.traceTransaction(txHash, 'opcodeTracer', {
    enableMemory: false,
    disableStack: true,
    disableStorage: false,
    enableReturnData: true,
})

const callTrace = await env.debugClient.traceTransaction(txHash, 'callTracer', {
    enableMemory: false,
    disableStack: true,
    disableStorage: false,
    enableReturnData: true,
})

// Extract gas values from opcodeTracer
type StructLog = { op: string; depth: number; gasCost: number }
const structLogs = (opcodeTrace as { structLogs: StructLog[] }).structLogs
const delegatecallOp = structLogs.find((log) => log.op === 'DELEGATECALL' || log.op === 'delegate_call_evm')!
const depth2GasCost = structLogs
    .filter((log) => log.depth === 2)
    .reduce((sum, log) => sum + (log.gasCost || 0), 0)
const intrinsicCost = delegatecallOp.gasCost - depth2GasCost

// Extract gas values from callTracer
type CallTrace = { type: string; gasUsed: string; calls?: CallTrace[] }
const findDelegateCall = (trace: CallTrace): CallTrace | undefined => {
    if (trace.type === 'DELEGATECALL') return trace
    for (const call of trace.calls || []) {
        const found = findDelegateCall(call)
        if (found) return found
    }
}
const delegateCallTrace = findDelegateCall(callTrace as CallTrace)!
const callTracerGasUsed = parseInt(delegateCallTrace.gasUsed, 16)

// Assert: opcodeTracer DELEGATECALL gasCost === callTracer gasUsed + Intrinsic cost
console.log(`opcodeTracer DELEGATECALL gasCost: ${delegatecallOp.gasCost}`)
console.log(`callTracer DELEGATECALL gasUsed:   ${callTracerGasUsed}`)
console.log(`Intrinsic DELEGATECALL cost:       ${intrinsicCost}`)
console.log(``)
console.log(`${delegatecallOp.gasCost} === ${callTracerGasUsed} + ${intrinsicCost}`)

if (delegatecallOp.gasCost === callTracerGasUsed + intrinsicCost) {
    console.log(`PASS`)
} else {
    console.log(`FAIL: ${delegatecallOp.gasCost} !== ${callTracerGasUsed + intrinsicCost}`)
    Deno.exit(1)
}

// OUTPUT
// opcodeTracer DELEGATECALL gasCost: 24857
// callTracer DELEGATECALL gasUsed:   22202
// Intrinsic DELEGATECALL cost:       2655

// 24857 === 22202 + 2655
// PASS