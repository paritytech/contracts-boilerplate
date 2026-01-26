import { ApiPromise, WsProvider, Keyring } from '@polkadot/api'
import { Hex } from 'viem'
import { logger } from '../../utils/logger.ts'

const U128_MAX = '340282366920938463463374607431768211455'

export async function uploadCodePVM(
    code: Hex,
    options?: {
        wsUrl?: string
        signerUri?: string
        signerName?: string
        storageDepositLimit?: string
    },
) {
    const wsUrl = options?.wsUrl ?? 'ws://localhost:9944'
    const signerUri = options?.signerUri ?? '//Alice'
    const signerName = options?.signerName ?? 'Alice default'
    const storageLimit = options?.storageDepositLimit ?? U128_MAX

    logger.info(`Uploading contract code to PVM...`)
    const api = await ApiPromise.create({
        provider: new WsProvider(wsUrl),
    })
    logger.debug(`Connected to ${wsUrl}`)

    try {
        const keyring = new Keyring({ type: 'sr25519' })
        const alice = keyring.addFromUri(signerUri, { name: signerName })
        logger.debug('Setup signer')

        const storageDepositLimit = api.createType('Balance', storageLimit)

        const tx = api.tx.revive.uploadCode(code, storageDepositLimit)
        logger.debug('Encoded transaction')

        const txHash = await tx.signAndSend(alice)
        return txHash
    } finally {
        await api.disconnect()
    }
}