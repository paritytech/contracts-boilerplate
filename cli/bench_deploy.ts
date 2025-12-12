#!/usr/bin/env -S deno run --env-file --allow-all
import { deploy } from '../tools/lib/index.ts'
import { readBytecode } from '../utils/index.ts'

// Fibonacci

await deploy({
    name: { name: 'Fibonacci', mappedTo: 'FibonacciEvm' },
    args: [],
})

await deploy({
    name: { name: 'Fibonacci', mappedTo: 'FibonacciPvm' },
    args: [],
    bytecodeType: 'polkavm',
})

await deploy({
    name: { name: 'Fibonacci', mappedTo: 'FibonacciInk' },
    args: [],
    bytecode: readBytecode('./ink/fibonacci/target/ink/fibonacci.polkavm'),
})

await deploy({
    name: { name: 'Fibonacci', mappedTo: 'FibonacciRust' },
    args: [],
    bytecode: readBytecode('./rust/contracts/fibonacci.polkavm'),
})
await deploy({
    name: { name: 'Fibonacci', mappedTo: 'FibonacciRustU128' },
    args: [],
    bytecode: readBytecode('./rust/contracts/fibonacci_u128.polkavm'),
})
await deploy({
    name: { name: 'Fibonacci', mappedTo: 'FibonacciRustU256' },
    args: [],
    bytecode: readBytecode('./rust/contracts/fibonacci_u256.polkavm'),
})

// MyToken

await deploy({
    name: { name: 'MyToken', mappedTo: 'MyTokenEvm' },
    args: [],
})

await deploy({
    name: { name: 'MyToken', mappedTo: 'MyTokenPvm' },
    args: [],
    bytecodeType: 'polkavm',
})

await deploy({
    name: { name: 'MyToken', mappedTo: 'MyTokenInk' },
    args: [],
    bytecode: readBytecode('./ink/ink_erc20/target/ink/ink_erc20.polkavm'),
})

await deploy({
    name: { name: 'MyToken', mappedTo: 'MyTokenRustWithAlloc' },
    args: [],
    bytecode: readBytecode('./rust/contracts/erc20_with_alloc.polkavm'),
})

await deploy({
    name: { name: 'MyToken', mappedTo: 'MyTokenRustNoAlloc' },
    args: [],
    bytecode: readBytecode('./rust/contracts/erc20_no_alloc.polkavm'),
})
