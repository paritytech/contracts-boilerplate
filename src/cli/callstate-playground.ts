// Run with
// deno --env-file --allow-all src/cli/callstate-playground.ts
import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { TracingCaller } from '../codegen/addresses.ts'
import { encodeFunctionData } from 'viem'

// const reqs = [
//     await env.wallet.prepareTransactionRequest({
//         to: PretraceFixture,
//         nonceManager: env.wallet.account.nonceManager,
//         data: encodeFunctionData({
//             abi: abis.PretraceFixture,
//             functionName: 'writeStorage',
//             args: [BigInt(Date.now())],
//         }),
//     }),
//
//     await env.wallet.prepareTransactionRequest({
//         to: PretraceFixture,
//         nonceManager: env.wallet.account.nonceManager,
//         data: encodeFunctionData({
//             abi: abis.PretraceFixture,
//             functionName: 'writeStorage',
//             args: [BigInt(Date.now() + 42)],
//         }),
//     }),
// ]

// const hashes = await Promise.all(
//     reqs.map((req) => env.wallet.sendTransaction(req))
// )
//
// const receipts = await Promise.all(
//     hashes.map((hash) => env.wallet.waitForTransactionReceipt({ hash }))
// )
//
// {
//     const blockNumber = receipts[0].blockNumber
//     const res = await env.debugClient.traceBlock(
//         blockNumber,
//         'prestateTracer',
//         {
//             diffMode: true,
//             disableCode: true,
//         }
//     )
//     console.log(`traceBlock ${blockNumber}`, res)
// }

{
    const res = await env.debugClient.traceCall(
        {
            from: env.wallet.account.address,
            to: TracingCaller,
            data: encodeFunctionData({
                abi: abis.TracingCaller,
                functionName: 'create',
            }),
        },
        'callTracer',
        {}
    )
    console.log('create call', res)
}
{
    const res = await env.debugClient.traceCall(
        {
            from: env.wallet.account.address,
            to: TracingCaller,
            data: encodeFunctionData({
                abi: abis.TracingCaller,
                functionName: 'create2',
            }),
        },
        'callTracer',
        {}
    )
    console.log('create2 call', res)
}
