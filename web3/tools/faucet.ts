import { Contract, TransactionResponse } from 'ethers'
import contractAddress from '../src/contracts/contract-address.json'
import { wallet, getAbi } from './lib'
import { parseArgs } from 'node:util'

const {
    values: { address },
} = parseArgs({
    args: process.argv.slice(2),
    options: {
        ['address']: {
            type: 'string',
            short: 'a',
        },
    },
})

try {
    const abi = getAbi('Token')
    const contract = new Contract(contractAddress.Token, abi, wallet)
    const tx = (await contract.transfer(address, 10)) as TransactionResponse
    console.log('Call transaction hash:', tx.hash)
    tx.wait()
} catch (e) {
    console.error('Failed to call contract', e)
}
