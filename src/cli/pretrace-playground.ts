// Run with
// deno task build --filter storage
// deno --env-file --allow-all src/cli/pretrace-playground.ts
import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import { PretraceFixture } from '../codegen/addresses.ts'
import { encodeFunctionData } from 'viem'

{
    // const res = await env.debugClient.traceCall(
    //     {
    //         to: PretraceFixture,
    //         data: encodeFunctionData({
    //             abi: abis.Storage,
    //             functionName: 'write_n1_read_n2',
    //             args: [BigInt(2n)],
    //         }),
    //     },
    //     'prestateTracer',
    //     { diffMode: false, disableCode: true }
    // )
    //
    //

    const res = await env.debugClient.traceCall(
        {
            data: '0x68874f1f0000000000000000000000003ed62137c5db927cb137c26455969116bf0c23cb',
            from:"0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac",
            to:"0xc01ee7f10ea4af4673cfff62710e1d7792aba8f3"
        },
        "0xe969d81cd5a97ce04a512fb73cb78b9a630eba6bb49a9141aa850ca5201f700c",

        'prestateTracer',
        {"tracer":"prestateTracer","tracerConfig":{"diffMode":false}}

    )
}
//
// const { request } = await env.wallet.simulateContract({
//     address: PretraceFixture,
//     abi: abis.PretraceFixture,
//     functionName: 'writeStorage',
//     args: [BigInt(4n)],
// })
// const hash = await env.wallet.writeContract(request)
// let receipt = await env.wallet.waitForTransactionReceipt({
//     hash,
// })
//
// console.log(receipt)
//
// const res = await env.debugClient.traceBlock(
//     receipt.blockNumber,
//     'prestateTracer',
//     { diffMode: false, disableCode: true }
// )
// console.log(res)
