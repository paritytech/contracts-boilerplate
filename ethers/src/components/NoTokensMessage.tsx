interface NoTokensMessageProps {
    selectedAddress: string
}

export function NoTokensMessage({ selectedAddress }: NoTokensMessageProps) {
    return (
        <>
            <p>You don't have tokens to transfer</p>
            <p>
                To get some tokens, open a terminal in the root of the
                repository and run:
                <br />
                <br />
                <code>bun tools/faucet.ts --address {selectedAddress}</code>
            </p>
        </>
    )
}
