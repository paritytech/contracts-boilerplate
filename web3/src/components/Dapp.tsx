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
import { NetworkErrorMessage } from './NetworkErrorMessage'

const CHAIN = import.meta.env.VITE_CHAIN
debugger
const chain = CHAIN === 'westend' ? westend : kitchensink
const ERROR_CODE_TX_REJECTED_BY_USER = 4001

interface Ethereum {
    isMetaMask?: boolean
    request: (args: { method: string; params?: any[] }) => Promise<any>
    on: (event: string, handler: (args: any) => void) => void
    off: (event: string, handler: (args: any) => void) => void
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

// This component is in charge of doing these things:
//   1. It connects to the user's wallet
//   2. Initializes ethers and the Token contract
//   3. Polls the user balance to keep it updated.
//   4. Transfers tokens by sending transactions
//   5. Renders the whole application
export function Dapp() {
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

        // We first initialize ethers by creating a provider using window.ethereum
        const provider = new BrowserProvider(window.ethereum)

        const signer = await provider.getSigner()
        // Then, we initialize the contract using that provider and the token's
        // artifact. You can do this same thing with your contracts.
        const newToken = new ethers.Contract(
            contractAddress.Token,
            TokenArtifact,
            signer
        )
        setToken(newToken)

        // Fetching the token data and the user's balance are specific to this
        // sample project, but you can reuse the same initialization pattern.
        const name = await newToken.name()
        const symbol = await newToken.symbol()
        setTokenData({ name, symbol })
    }, [])

    const connectWallet = useCallback(async () => {
        if (!window.ethereum) return

        // To connect to the user's wallet, we have to run this method.
        // It returns a promise that will resolve to the user's address.
        const [address] = await window.ethereum.request({
            method: 'eth_requestAccounts',
        })
        setSelectedAddress(address)

        // First we check the network
        const provider = new BrowserProvider(window.ethereum)
        const network = await provider.getNetwork()
        if (network.chainId.toString() !== String(chain.id)) {
            setNetworkError(`Please connect to ${chain.name} network`)
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
        async (to: string, amount: number) => {
            if (!token) return

            try {
                // If a transaction fails, we save that error in the component's state.
                // We only save one such error, so before sending a second transaction, we
                // clear it.
                setTransactionError(undefined)
                // We send the transaction, and save its hash in the Dapp's state. This
                // way we can indicate that we are waiting for it to be mined.
                const tx = await token.transfer(to, amount)
                setTxBeingSent(tx.hash)

                // We use .wait() to wait for the transaction to be mined. This method
                // returns the transaction's receipt.
                await tx.wait()
                // If we got here, the transaction was successful, so you may want to
                // update your state. Here, we update the user's balance.
                await updateBalance()
            } catch (error: any) {
                // We check the error code to see if this error was produced because the
                // user rejected a tx. If that's the case, we do nothing.
                if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) return
                // Other errors are logged and stored in the Dapp's state. This is used to
                // show them to the user, and for debugging.
                setTransactionError(error)
            } finally {
                // If we leave the try/catch, we aren't sending a tx anymore, so we clear
                // this part of the state.
                setTxBeingSent(undefined)
            }
        },
        [token, updateBalance]
    )

    // When the component mounts, start polling the user's balance
    useEffect(() => {
        if (selectedAddress && token) {
            // We poll the user's balance, so we have to stop doing that when Dapp
            // gets unmounted
            const interval = setInterval(updateBalance, 1000)
            // We run it once immediately so we don't have to wait for it
            updateBalance()
            return () => clearInterval(interval)
        }
    }, [selectedAddress, token, updateBalance])

    // Handle wallet account changes
    useEffect(() => {
        if (!window.ethereum) return

        const handleAccountsChanged = ([newAddress]: string[]) => {
            // `accountsChanged` event can be triggered with an undefined newAddress.
            // This happens when the user removes the Dapp from the "Connected
            // list of sites allowed access to your addresses" (Metamask > Settings > Connections)
            // To avoid errors, we reset the dapp state
            if (!newAddress) {
                setSelectedAddress(undefined)
                setToken(null)
                setBalance(undefined)
                setTokenData(undefined)
                return
            }

            setSelectedAddress(newAddress)
            initializeEthers()
        }

        window.ethereum.on('accountsChanged', handleAccountsChanged)

        return () => {
            window.ethereum?.off('accountsChanged', handleAccountsChanged)
        }
    }, [initializeEthers])

    // Ethereum wallets inject the window.ethereum object. If it hasn't been
    // injected, we instruct the user to install a wallet.
    if (!window.ethereum) {
        return <NoWalletDetected />
    }

    // The next thing we need to do, is to ask the user to connect their wallet.
    // When the wallet gets connected, we are going to save the users's address
    // in the component's state. So, if it hasn't been saved yet, we have
    // to show the ConnectWallet component.
    //
    // Note that we pass it a callback that is going to be called when the user
    // clicks a button. This callback just calls the connectWallet method.
    if (!selectedAddress) {
        return (
            <ConnectWallet
                connectWallet={connectWallet}
                networkError={networkError}
                dismiss={() => setNetworkError(undefined)}
            />
        )
    }

    // If the token data or the user's balance hasn't loaded yet, we show
    // a loading component.
    if (!tokenData || balance === undefined) {
        if (networkError) {
            return (
                <NetworkErrorMessage
                    message={networkError}
                    dismiss={() => {
                        setSelectedAddress(undefined)
                        setNetworkError(undefined)
                    }}
                />
            )
        }

        return <Loading />
    }

    // If everything is loaded, we render the application.
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
                    {/* 
                      Sending a transaction isn't an immediate action. You have to wait
                      for it to be mined.
                      If we are waiting for one, we show a message here.
                    */}
                    {txBeingSent && (
                        <WaitingForTransactionMessage txHash={txBeingSent} />
                    )}

                    {/* 
                      Sending a transaction can fail in multiple ways. 
                      If that happened, we show a message here.
                    */}
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
                    {/*
                      If the user has no tokens, we don't show the Transfer form
                    */}
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
