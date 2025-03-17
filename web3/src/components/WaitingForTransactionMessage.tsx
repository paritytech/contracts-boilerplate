export function WaitingForTransactionMessage({ txHash }: { txHash: string }) {
    return (
        <div className="alert alert-info" role="alert">
            Waiting for transaction <strong>{txHash}</strong> to be mined
        </div>
    )
}
