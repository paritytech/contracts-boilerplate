//! Call with deno task deploy [--filter <filter>]

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

// const cAddress = await deploy({ name: 'CTracing', args: [] })
// const bAddress = await deploy({ name: 'BTracing', args: [cAddress] })
// await deploy({ name: 'ATracing', args: [bAddress] })
// await deploy({ name: 'Storage', args: [] })

// await deploy({
//     name: 'Fibonacci',
//     args: [],
// })

// await deploy({
//     name: 'Storage',
//     args: [],
//     // bytecodeType: 'polkavm', // Specify `pvm` for PVM bytecode deployment
// })

await deploy({
    name: 'MyToken',
    args: [],
    // bytecodeType: 'polkavm', // Specify `pvm` for PVM bytecode deployment
})
