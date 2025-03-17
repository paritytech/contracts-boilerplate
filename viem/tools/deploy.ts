import { parseEther } from 'viem'
import { deploy } from './lib/index.ts'

/**
 * List all contracts to deploy here:
 * Make sure to set the .env file with the required values. (See .env.example)
 *
 * for example:
 * ```ts
 * await deploy({ name: 'Token', args: ["My Awseome Token", "MAT"] })
 * ```
 */
//await deploy({ name: 'WagmiMintExample', args: [] })
//await deploy({ name: 'Token', args: [] })
//await deploy({ name: 'Storage', args: [] })

//await deploy({
//    name: 'CharityToken',
//    args: ['0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac'],
//})

const daoAddress = await deploy({
    name: 'Dao',
    value: parseEther('100'),
    args: [],
})

await deploy({
    name: 'DaoAttacker',
    args: [daoAddress, 5n],
    value: parseEther('1'),
})
