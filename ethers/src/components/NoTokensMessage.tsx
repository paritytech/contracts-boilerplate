interface NoTokensMessageProps {
    selectedAddress: string
}

export function NoTokensMessage({ selectedAddress }: NoTokensMessageProps) {
    return (
        <>
            <p>You don't have tokens to transfer</p>
            <p>
                To get some tokens, run the following command in your terminal:
                <br />
                <code>bun tools/faucet.ts --address {selectedAddress}</code>
            </p>
        </>
    )
}
