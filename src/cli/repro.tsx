import { encodeDeployData, Hex } from 'viem'
import { abis } from '../codegen/abis.ts'
import { readFileSync } from 'node:fs'
import { env } from '../tools/lib/index.ts'

const walletClient = env.wallet
const rpcUrl = 'http://localhost:8545'
const abi = abis.Test
const bytecode: Hex = `0x${readFileSync(
    '/home/pg/github/contracts-boilerplate/src/codegen/bytecode/Test.polkavm'
).toString('hex')}`
const nonce = await walletClient.getTransactionCount(walletClient.account)
const chainId = walletClient.chain.id

const data = encodeDeployData({
    abi,
    bytecode,
})

const gasEstimateResponse = await fetch(rpcUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_estimateGas',
        params: [
            {
                from: walletClient.account.address,
                to: null,
                data,
                value: '0x0',
                type: '0x2',
                maxFeePerGas: '0x100',
            },
            'latest',
        ],
        id: 1,
    }),
})

const gasEstimate = await gasEstimateResponse.json()
const gasEstimateNumber = BigInt(gasEstimate.result)

const transaction = {
    to: null,
    data,
    nonce: nonce,
    gas: gasEstimateNumber,
    maxPriorityFeePerGas: 1000n, // works if I change it to a higher value
    maxFeePerGas: 1000n, // works if I change it to a higher value
    chainId,
    account: walletClient.account,
    chain: walletClient.chain,
}

const signedTx = await walletClient.signTransaction(transaction)

const response = await fetch(rpcUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_sendRawTransaction',
        params: [signedTx],
        id: 1,
    }),
})

const { result: hash } = await response.json()
console.log(hash)
const receipt = await walletClient.waitForTransactionReceipt({ hash })
console.log(receipt.status)
