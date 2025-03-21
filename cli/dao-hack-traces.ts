// Run with
// deno --env-file --allow-all ./cli/dao-hack-traces.ts | jless
import { wallet, debugClient, visit } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import {
    encodeFunctionData,
    decodeFunctionData,
    hexToBigInt,
    parseEventLogs,
    formatEther,
} from 'viem'
import { Dao, DaoAttacker } from '../codegen/addresses.ts'

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

function visitor(key: string, value: any) {
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
                    abi: [...abis.DaoAttacker, ...abis.Dao],
                    data: value,
                })
            } catch (e) {
                return value
            }
        case 'logs':
            return parseEventLogs({ abi: abis.Dao, logs: value })
        default: {
            if (typeof value === 'bigint') {
                return value.toString()
            }
            return value
        }
    }
}
