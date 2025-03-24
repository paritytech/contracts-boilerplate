//! Call with deno task deploy [--filter <filter>]

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
await deploy({ name: 'WagmiMintExample', args: [] })

const daoAddress = await deploy({
    name: 'Dao',
    value: parseEther('100'),
    args: [],
})

await deploy({
    name: 'DaoAttacker',
    args: [daoAddress, 2n],
    value: parseEther('1'),
})
