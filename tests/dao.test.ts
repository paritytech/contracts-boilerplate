/// <reference path="./test-setup.ts" />
import { beforeAll, inject, expect, test } from 'vitest'
import { abis } from '../codegen/abis.ts'
import { createEnv } from '../utils/index.ts'
import { Hex, parseEther } from 'viem'
let Dao: Hex = '0x'

const { deploy, wallet } = await createEnv({
    rpcUrl: inject('rpcUrl'),
    privateKey: inject('privateKey'),
})

beforeAll(async () => {
    Dao = await deploy({
        name: 'Dao',
        value: parseEther('100'),
        args: [],
    }).then((receipt) => receipt.contractAddress!)
})

test('deposit works', async () => {
    const { request } = await wallet.simulateContract({
        address: Dao,
        abi: abis.Dao,
        functionName: 'deposit',
        value: parseEther('1'),
    })

    const hash = await wallet.writeContract(request)
    let receipt = await wallet.waitForTransactionReceipt({
        hash,
    })

    expect(receipt.status).toBe('success')
})
