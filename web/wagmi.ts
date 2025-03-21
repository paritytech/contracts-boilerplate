import { http, createConfig } from 'wagmi'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
import { chain } from '../codegen/chain'

const wallectConnectId = import.meta.env.VITE_WC_PROJECT_ID
export const config = createConfig({
    chains: [chain],
    connectors: [
        injected(),
        coinbaseWallet(),
        ...(wallectConnectId
            ? [walletConnect({ projectId: wallectConnectId })]
            : []),
    ],
    transports: {
        [chain.id]: http(),
    },
})

declare module 'wagmi' {
    interface Register {
        config: typeof config
    }
}
