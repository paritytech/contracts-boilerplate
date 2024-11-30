import * as React from 'react'
import { Connector, useChainId, useConfig, useConnect } from 'wagmi'
import { switchChain } from '@wagmi/core'
import { config } from '../wagmi'

export function Connect() {
    const chainId = useChainId()
    const { chains } = useConfig()
    const { connectors, connect } = useConnect()

    const otherChain = chains.find((c) => c.id !== chainId)
    return (
        <div className="container">
            <div
                className="text"
                style={{ padding: '6px 9px' }}
            >{`Chain: ${chains.find((c) => c.id == chainId)?.name}`}</div>
            <div className="set">
                {connectors.map((connector) => (
                    <ConnectorButton
                        key={connector.uid}
                        connector={connector}
                        onClick={() => connect({ connector, chainId })}
                    />
                ))}

                <button
                    style={{ marginLeft: 'auto' }}
                    onClick={() =>
                        switchChain(config, {
                            chainId: otherChain!.id,
                        })
                    }
                    type="button"
                >
                    Switch to {otherChain!.name}
                </button>
            </div>
        </div>
    )
}

function ConnectorButton({
    connector,
    onClick,
}: {
    connector: Connector
    onClick: () => void
}) {
    const [ready, setReady] = React.useState(false)
    React.useEffect(() => {
        ;(async () => {
            const provider = await connector.getProvider()
            setReady(!!provider)
        })()
    }, [connector, setReady])

    return (
        <button disabled={!ready} onClick={onClick} type="button">
            {connector.name}
        </button>
    )
}
