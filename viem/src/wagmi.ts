import { http, createConfig } from 'wagmi'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
import { AssetHubWestend, Kitchensink } from './chains'

const wallectConnectId = import.meta.env.VITE_WC_PROJECT_ID
export const config = createConfig({
    chains: [Kitchensink, AssetHubWestend],
    connectors: [
        injected(),
        coinbaseWallet(),
        ...(wallectConnectId
            ? [walletConnect({ projectId: wallectConnectId })]
            : []),
    ],
    transports: {
        [Kitchensink.id]: http(),
        [AssetHubWestend.id]: http(),
    },
})

declare module 'wagmi' {
    interface Register {
        config: typeof config
    }
}
