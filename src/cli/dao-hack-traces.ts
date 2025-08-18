// Run with
// deno task build --filter dao
// deno --env-file --allow-all src/cli/dao-hack-traces.ts | jless
import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import {
    encodeFunctionData,
    decodeFunctionData,
    hexToBigInt,
    parseEventLogs,
    formatEther,
} from 'viem'
import { Dao, DaoAttacker } from '../codegen/addresses.ts'

const result = await env.debugClient.traceCall(
    {
        to: DaoAttacker,
        data: encodeFunctionData({
            abi: abis.DaoAttacker,
            functionName: 'attack',
            args: [],
        }),
    },
    'callTracer'
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
            } else if (value == '0x0000000000000000000000000000000000000000') {
                return '<caller>'
            }
            return value
        }
        case 'value':
            return formatEther(hexToBigInt(value))
        case 'input':
            if (value === '0x') {
                return { functionName: 'receive' }
            }
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

function visit(obj: any, callback: (key: string, value: any) => any): any {
    if (Array.isArray(obj)) {
        return obj.map((item) => visit(item, callback))
    } else if (typeof obj === 'object' && obj !== null) {
        const out = Object.keys(obj).reduce((acc, key) => {
            const res = visit(callback(key, obj[key]), callback)
            if (res) {
                acc[key] = res
            }
            return acc
        }, {} as any)

        // Keep 'calls' last
        return Object.fromEntries(
            Object.entries(out).sort(([keyA], [keyB]) => {
                if (keyA === 'calls') return 1
                if (keyB === 'calls') return -1
                return 0
            })
        )
    } else {
        return obj
    }
}
