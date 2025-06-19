//! Call with deno task deploy [--filter <filter>]

import {
    deploy,
    // printAccountInfo
} from './lib/index.ts'

/**
 * List all contracts to deploy here:
 * Make sure to set the .env file with the required values. (See .env.example)
 *
 * for example:
 * ```ts
 * await deploy({ name: 'Token', args: ["My Awseome Token", "MAT"] })
 * ```
 */

// await printAccountInfo()
await deploy({ name: 'Test', args: [] })
// // await deploy({ name: 'PretraceFixtureChild', args: [] })
// const address = await deploy({ name: 'Dao', args: [] })
// await deploy({
//     name: 'DaoAttacker',
//     args: [address, 1n],
//     value: parseEther('1'),
// })
