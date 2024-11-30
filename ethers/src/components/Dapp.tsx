import { useState, useEffect, useCallback } from 'react'
import { ethers, BrowserProvider } from 'ethers'
import TokenArtifact from '../contracts/Token.json'
import contractAddress from '../contracts/contract-address.json'
import { NoWalletDetected } from './NoWalletDetected'
import { ConnectWallet } from './ConnectWallet'
import { Loading } from './Loading'
import { Transfer } from './Transfer'
import { TransactionErrorMessage } from './TransactionErrorMessage'
import { WaitingForTransactionMessage } from './WaitingForTransactionMessage'
import { NoTokensMessage } from './NoTokensMessage'
import { kitchensink, westend } from '../chains'

const chain = import.meta.env.CHAIN === 'westend' ? westend : kitchensink
const ERROR_CODE_TX_REJECTED_BY_USER = 4001

interface Ethereum {
    isMetaMask?: boolean
    request: (args: { method: string; params?: any[] }) => Promise<any>
    on: (event: string, handler: (args: any) => void) => void
    networkVersion: string
}

declare global {
    interface Window {
        ethereum?: Ethereum
    }
}

interface TokenData {
    name: string
    symbol: string
}

export const Dapp = () => {
    const [selectedAddress, setSelectedAddress] = useState<string | undefined>()
    const [balance, setBalance] = useState<bigint | undefined>()
    const [tokenData, setTokenData] = useState<TokenData | undefined>()
    const [txBeingSent, setTxBeingSent] = useState<string | undefined>()
    const [transactionError, setTransactionError] = useState<
        Error | undefined
    >()
    const [networkError, setNetworkError] = useState<string | undefined>()
    const [token, setToken] = useState<ethers.Contract | null>(null)

    const initializeEthers = useCallback(async () => {
        if (!window.ethereum) return

        const newProvider = new BrowserProvider(window.ethereum)
        const signer = await newProvider.getSigner()
        const newToken = new ethers.Contract(
            contractAddress.Token,
            TokenArtifact,
            signer
        )
        setToken(newToken)

        const name = await newToken.name()
        const symbol = await newToken.symbol()
        setTokenData({ name, symbol })
    }, [])

    const connectWallet = useCallback(async () => {
        if (!window.ethereum) return

        const [address] = await window.ethereum.request({
            method: 'eth_requestAccounts',
        })
        setSelectedAddress(address)

        const networkId = window.ethereum.networkVersion
        if (networkId !== String(chain.id)) {
            setNetworkError('Please connect to Asset Hub Westend network')
            return
        }

        setNetworkError(undefined)
        initializeEthers()
    }, [initializeEthers])

    const updateBalance = useCallback(async () => {
        if (token && selectedAddress) {
            const userBalance = await token.balanceOf(selectedAddress)
            setBalance(userBalance)
        }
    }, [token, selectedAddress])

    const transferTokens = useCallback(
        async (to: string, amount: bigint) => {
            if (!token) return

            try {
                setTransactionError(undefined)
                const tx = await token.transfer(to, amount)
                setTxBeingSent(tx.hash)

                await tx.wait()
                await updateBalance()
            } catch (error: any) {
                if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) return
                setTransactionError(error)
            } finally {
                setTxBeingSent(undefined)
            }
        },
        [token, updateBalance]
    )

    useEffect(() => {
        if (selectedAddress && token) {
            const interval = setInterval(updateBalance, 1000)
            updateBalance()
            return () => clearInterval(interval)
        }
    }, [selectedAddress, token, updateBalance])

    if (!window.ethereum) {
        return <NoWalletDetected />
    }

    if (!selectedAddress) {
        return (
            <ConnectWallet
                connectWallet={connectWallet}
                networkError={networkError}
                dismiss={() => setNetworkError(undefined)}
            />
        )
    }

    if (!tokenData || balance === undefined) {
        return <Loading />
    }

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-12">
                    <h1>
                        {tokenData.name} ({tokenData.symbol})
                    </h1>
                    <p>
                        Welcome <b>{selectedAddress}</b>, you have{' '}
                        <b>
                            {balance.toString()} {tokenData.symbol}
                        </b>
                        .
                    </p>
                </div>
            </div>

            <hr />

            <div className="row">
                <div className="col-12">
                    {txBeingSent && (
                        <WaitingForTransactionMessage txHash={txBeingSent} />
                    )}

                    {transactionError && (
                        <TransactionErrorMessage
                            message={transactionError.message}
                            dismiss={() => setTransactionError(undefined)}
                        />
                    )}
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    {balance === 0n ? (
                        <NoTokensMessage selectedAddress={selectedAddress} />
                    ) : (
                        <Transfer
                            transferTokens={transferTokens}
                            tokenSymbol={tokenData.symbol}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dapp
