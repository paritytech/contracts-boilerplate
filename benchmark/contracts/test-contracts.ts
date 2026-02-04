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
            ink('fibonacci'),
            rust('fibonacci'),
            rust('fibonacci_u128'),
            rust('fibonacci_u256'),
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
        id: 'SimpleToken',
        srcs: [
            ink('simple_token'),
            rust('simple_token_no_alloc'),
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
                    await env.wallet.sendTransaction({
                        to: externalRecipient,
                        value: parseEther('1'),
                    })

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
