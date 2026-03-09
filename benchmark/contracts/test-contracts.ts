import { env } from '../../tools/lib/index.ts'
import { abis } from '../../codegen/abis.ts'
import { Artifacts, ink, rust, solidity, stylus } from '../lib.ts'
import { deploy as deployContract } from '../../tools/lib/index.ts'
import { parseEther } from 'viem'

const externalRecipient = '0x3d26c9637dFaB74141bA3C466224C0DBFDfF4A63'

export const testContracts: Artifacts = [
    {
        id: 'Fibonacci',
        srcs: [
            ink('fibonacci_u32_ink'),
            stylus('fibonacci_u32'),
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
        id: 'SimpleToken',
        srcs: [
            ink('simple_token_u256_ink'),
            stylus('simple_token_u256'),
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
    {
        id: 'flipper',
        srcs: [
            ink('flipper_ink'),
            stylus('flipper'),
            // @ts-ignore - run `deno task build` to generate ABI
            ...solidity('flipper.sol', 'flipper'),
        ],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [false],
            })
        },
        calls: [
            {
                name: 'flip',
                exec: (address) => {
                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.flipper,
                        functionName: 'flip',
                        args: [],
                    })
                },
            },
        ],
    },
    {
        id: 'incrementer',
        srcs: [
            ink('incrementer_ink'),
            stylus('incrementer'),
            // @ts-ignore - run `deno task build` to generate ABI
            ...solidity('incrementer.sol', 'incrementer'),
        ],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [0],
            })
        },
        calls: [
            {
                name: 'inc',
                exec: (address) => {
                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.incrementer,
                        functionName: 'inc',
                        args: [1],
                    })
                },
            },
        ],
    },
    {
        id: 'BenchStorage',
        srcs: [
            ink('bench_storage_ink'),
            stylus('bench_storage'),
            // @ts-ignore - run `deno task build` to generate ABI
            ...solidity('BenchStorage.sol', 'BenchStorage'),
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
                name: 'write_100',
                exec: (address) => {
                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.BenchStorage,
                        functionName: 'write',
                        args: [env.wallet.account.address, 100],
                    })
                },
            },
            {
                name: 'read_100',
                exec: (address) => {
                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.BenchStorage,
                        functionName: 'read',
                        args: [env.wallet.account.address, 100],
                    })
                },
            },
            {
                name: 'readWrite_100',
                exec: (address) => {
                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.BenchStorage,
                        functionName: 'readWrite',
                        args: [env.wallet.account.address, 100],
                    })
                },
            },
        ],
    },
    {
        id: 'Computation',
        srcs: [
            ink('computation_ink'),
            stylus('computation'),
            // @ts-ignore - run `deno task build` to generate ABI
            ...solidity('Computation.sol', 'Computation'),
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
                name: 'triangle_10',
                exec: (address) => {
                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Computation,
                        functionName: 'triangleNumber',
                        args: [10],
                    })
                },
            },
            {
                name: 'odd_product_10',
                exec: (address) => {
                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.Computation,
                        functionName: 'oddProduct',
                        args: [10],
                    })
                },
            },
        ],
    },
    {
        id: 'BenchERC20',
        srcs: [
            ink('bench_erc20_ink'),
            stylus('bench_erc20'),
            // @ts-ignore - run `deno task build` to generate ABI
            ...solidity('BenchERC20.sol', 'BenchERC20'),
        ],
        deploy: (id, name, bytecode) => {
            return deployContract({
                name: { id, name },
                bytecode,
                args: [10_000_000_000_000_000_000_000_000n],
            })
        },
        calls: [
            {
                name: 'transfer',
                exec: async (address) => {
                    const fundTx = await env.wallet.sendTransaction({
                        to: externalRecipient,
                        value: parseEther('1'),
                    })
                    await env.wallet.waitForTransactionReceipt({ hash: fundTx })
                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.BenchERC20,
                        functionName: 'transfer',
                        args: [
                            externalRecipient,
                            1_000_000_000_000_000_000n,
                        ],
                    })
                },
            },
        ],
    },
    {
        id: 'BenchERC721',
        srcs: [
            ink('bench_erc721_ink'),
            stylus('bench_erc721'),
            // @ts-ignore - run `deno task build` to generate ABI
            ...solidity('BenchERC721.sol', 'BenchERC721'),
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
                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.BenchERC721,
                        functionName: 'mint',
                        args: [1],
                    })
                },
            },
        ],
    },
    {
        id: 'BenchERC1155',
        srcs: [
            ink('bench_erc1155_ink'),
            stylus('bench_erc1155'),
            // @ts-ignore - run `deno task build` to generate ABI
            ...solidity('BenchERC1155.sol', 'BenchERC1155'),
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
                name: 'create',
                exec: (address) => {
                    // @ts-ignore - run `deno task build` to generate ABI
                    return env.wallet.writeContract({
                        address,
                        abi: abis.BenchERC1155,
                        functionName: 'create',
                        args: [1000],
                    })
                },
            },
        ],
    },
]
