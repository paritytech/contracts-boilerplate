import {
    useAccount,
    useChainId,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
    usePublicClient,
} from 'wagmi'

export function Account() {
    const chainId = useChainId()

    const client = usePublicClient()
    const { address, connector } = useAccount()
    const { disconnect } = useDisconnect()
    const { data: ensName } = useEnsName({ address })
    const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

    const formattedAddress = formatAddress(address)

    return (
        <div className="container">
            <div className="row">
                <div className="inline">
                    {ensAvatar ? (
                        <img
                            alt="ENS Avatar"
                            className="avatar"
                            src={ensAvatar}
                        />
                    ) : (
                        <div className="avatar" />
                    )}
                    <div className="stack">
                        {address && (
                            <div className="text">
                                {ensName
                                    ? `${ensName} (${formattedAddress})`
                                    : address}
                            </div>
                        )}
                        <div className="subtext">
                            Connected to {connector?.name} Connector - ChainId:{' '}
                            {chainId} - RPC:{' '}
                            {client.chain.rpcUrls.default.http[0]}
                        </div>
                    </div>
                </div>
                <button
                    className="button"
                    onClick={() => disconnect()}
                    type="button"
                >
                    Disconnect
                </button>
            </div>
        </div>
    )
}

function formatAddress(address?: string) {
    if (!address) return null
    return `${address.slice(0, 6)}…${address.slice(38, 42)}`
}
