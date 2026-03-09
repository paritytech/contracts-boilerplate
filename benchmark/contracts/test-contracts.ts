import { env } from '../../tools/lib/index.ts'
import { abis } from '../../codegen/abis.ts'
import { Artifacts, ink, rust, solidity } from '../lib.ts'
import { deploy as deployContract } from '../../tools/lib/index.ts'
import { parseEther } from 'viem'

const externalRecipient = '0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63'

export const testContracts: Artifacts = [
    {
        id: 'Fibonacci',
        srcs: [
            ink('fibonacci_u32_ink'),
            rust('fibonacci_u32'),
            rust('fibonacci_u128'),
            rust('fibonacci_u256'),
            rust('fibonacci_u32_macro_no_alloc'),
            rust('fibonacci_u32_macro_bump_alloc'),
            ...solidity('fibonacci.sol', 'Fibonacci'),
        ],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [
            {
                name: 'fib_10',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.Fibonacci,
                        functionName: 'fibonacci',
                        args: [10],
                    })
                },
            },
        ],
    },
    {
        id: 'Fibonacci_u256',
        srcs: [
            ink('fibonacci_u256_ink'),
            ink('fibonacci_u256_iter_ink'),
            rust('fibonacci_u256'),
            rust('fibonacci_u256_iter'),
            rust('fibonacci_u256_primitive_types'),
            rust('fibonacci_u256_iter_primitive_types'),
            ...solidity('fibonacci.sol', 'Fibonacci_u256'),
            ...solidity('fibonacci.sol', 'Fibonacci_u256_iter'),
        ],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [
            {
                name: 'fib_5',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.Fibonacci_u256,
                        functionName: 'fibonacci',
                        args: [5n],
                    })
                },
            },
            {
                name: 'fib_10',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.Fibonacci_u256,
                        functionName: 'fibonacci',
                        args: [10n],
                    })
                },
            },
            {
                name: 'fib_15',
                exec: async (address) => {
                    return await env.wallet.writeContract({
                        address,
                        abi: abis.Fibonacci_u256,
                        functionName: 'fibonacci',
                        args: [15n],
                    })
                },
            },
        ],
    },
    {
        id: 'SimpleToken',
        srcs: [
            ink('simple_token_u256_ink'),
            rust('simple_token_u32_no_alloc'),
            // TODO: this one generates a contract with uint32 abi selectors (instead of uint256)
            // Keeping it here for now as we should still include it later to compare bytecode size
            // rust('simple_token_u32_macro_no_alloc'),
            rust('simple_token_u128_no_alloc'),
            rust('simple_token_u256_no_alloc'),
            rust('simple_token_u256_macro_no_alloc'),
            rust('simple_token_u256_macro_bump_alloc'),
            ...solidity('simple_token.sol', 'SimpleToken'),
        ],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [],
            })
        },
        calls: [
            {
                name: 'mint',
                exec: (address) => {
                    return env.wallet.writeContract({
                        address,
                        abi: abis.SimpleToken,
                        functionName: 'mint',
                        args: [
                            env.wallet.account.address,
                            10_000_000_000_000_000_000_000_000n,
                        ],
                    })
                },
            },
            {
                name: 'transfer',
                exec: async (address) => {
                    // fund destination first
                    const fundTx = await env.wallet.sendTransaction({
                        to: externalRecipient,
                        value: parseEther('1'),
                    })
                    await env.wallet.waitForTransactionReceipt({ hash: fundTx })

                    return env.wallet.writeContract({
                        address,
                        abi: abis.SimpleToken,
                        functionName: 'transfer',
                        args: [
                            externalRecipient,
                            10_000_000_000_000_000_000_000_000n,
                        ],
                    })
                },
            },
        ],
    },
]
