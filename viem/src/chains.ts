import { defineChain } from 'viem'

export const AssetHubWestend = defineChain({
    id: 420420421,
    name: 'AssetHub',
    nativeCurrency: {
        name: 'Westie',
        symbol: 'WST',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://westend-asset-hub-eth-rpc.polkadot.io'],
        },
    },
    testnet: true,
})

export const Kitchensink = defineChain({
    id: 420420421,
    name: 'Kitchensink',
    nativeCurrency: {
        name: 'Dev',
        symbol: 'DEV',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['http://localhost:8545'],
        },
    },
    testnet: true,
})
