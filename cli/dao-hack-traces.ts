#!/usr/bin/env -S deno run --env-file --allow-all

import { env } from '../tools/lib/index.ts'
import { abis } from '../codegen/abis.ts'
import {
    decodeFunctionData,
    encodeFunctionData,
    formatEther,
    hexToBigInt,
    parseEventLogs,
} from 'viem'
import { Dao, DaoAttacker } from '../codegen/addresses.ts'
import type { Abi } from 'viem'

const result = await env.debugClient.traceCall(
    {
        to: DaoAttacker,
        data: encodeFunctionData({
            abi: (abis as Record<string, Abi>).DaoAttacker,
            functionName: 'attack',
            args: [],
        }),
    },
    'callTracer',
)
console.log(JSON.stringify(visit(result, visitor), null, 2))

// deno-lint-ignore no-explicit-any
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
                const abiRecord = abis as Record<string, Abi>
                return decodeFunctionData({
                    abi: [...abiRecord.DaoAttacker, ...abiRecord.Dao],
                    data: value,
                })
            } catch (_e) {
                return value
            }
        case 'logs':
            return parseEventLogs({ abi: (abis as Record<string, Abi>).Dao, logs: value })
        default: {
            if (typeof value === 'bigint') {
                return value.toString()
            }
            return value
        }
    }
}

// deno-lint-ignore no-explicit-any
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
        }, {} as Record<string, unknown>)

        // Keep 'calls' last
        return Object.fromEntries(
            Object.entries(out).sort(([keyA], [keyB]) => {
                if (keyA === 'calls') return 1
                if (keyB === 'calls') return -1
                return 0
            }),
        )
    } else {
        return obj
    }
}
