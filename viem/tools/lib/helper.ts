import { wallet, visit } from './index.ts'
import {
    decodeFunctionData,
    formatEther,
    hexToBigInt,
    parseEventLogs,
} from 'viem'
import { Dao, DaoAttacker } from '../../codegen/addresses.ts'
import { abis } from '../../codegen/abis.ts'

export const visitor: Parameters<typeof visit>[1] = (key, value) => {
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
            return parseEventLogs({ abi: abis.Dao, logs: value })
        default: {
            if (typeof value === 'bigint') {
                return value.toString()
            }
            return value
        }
    }
}
