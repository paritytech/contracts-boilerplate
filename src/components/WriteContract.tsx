import { FormEvent, useState } from 'react'
import {
    type BaseError,
    useWriteContract,
    useWaitForTransactionReceipt,
    useReadContract,
} from 'wagmi'
import { WagmiMintExample as address } from '../../stackblitz/addresses'
import { WagmiMintExampleAbi } from '../../stackblitz/abi/WagmiMintExample'

export function WriteContract() {
    const [tokenId, setTokenId] = useState<string>('')
    const [tokens, setTokens] = useState<string[]>([])
    const {
        data: hash,
        error,
        isPending,
        writeContract,
    } = useWriteContract({
        mutation: {
            onSuccess: () => {
                setTokens((tokens) => [tokenId, ...tokens])
            },
        },
    })

    async function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        writeContract({
            address,
            abi: WagmiMintExampleAbi,
            functionName: 'mint',
            args: [BigInt(tokenId)],
        })
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })

    return (
        <div className="container">
            <div className="stack">
                <form className="set" onSubmit={submit}>
                    <input
                        name="tokenId"
                        value={tokenId}
                        onChange={(e) => setTokenId(e.target.value)}
                        placeholder="Token ID"
                        required
                    />
                    <button disabled={isPending} type="submit">
                        {isPending ? 'Confirming...' : 'Mint'}
                    </button>
                </form>
                {hash && <div>Transaction Hash: {hash}</div>}
                {isConfirming && <div>Waiting for confirmation...</div>}
                {isConfirmed && <div>Transaction confirmed.</div>}
                {error && (
                    <div>
                        Error:{' '}
                        {(error as BaseError).shortMessage || error.message}
                    </div>
                )}
            </div>
            {tokens.map((tokenId) => (
                <DisplayNft tokenId={BigInt(tokenId)} key={tokenId} />
            ))}
        </div>
    )
}

function DisplayNft(params: { tokenId: bigint }) {
    const { data } = useReadContract({
        abi: WagmiMintExampleAbi,
        address: address,
        functionName: 'tokenURI',
        args: [params.tokenId],
    })

    if (!data) {
        return null
    }
    const { name, image } = parseBase64DataURI(data)
    return (
        <div className="container">
            <div className="stack">
                <div className="text">{name}</div>
                <img src={image} alt={name} width={'300px'} height={'300px'} />
            </div>
        </div>
    )
}

function parseBase64DataURI(dataURI: string): { name: string; image: string } {
    const base64 = dataURI.split(',')[1]
    const jsonString = atob(base64)
    const metadata = JSON.parse(jsonString)
    return metadata as { name: string; image: string }
}
