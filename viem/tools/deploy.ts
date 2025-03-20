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
