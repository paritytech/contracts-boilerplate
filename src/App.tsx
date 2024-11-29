import { useAccount } from 'wagmi'
import { WriteContract } from './components/WriteContract'
import { Account } from './components/Account'
import { Connect } from './components/Connect'

export default function App() {
    const { isConnected } = useAccount()
    return (
        <>
            {isConnected ? <Account /> : <Connect />}
            {isConnected && <WriteContract />}
        </>
    )
}
