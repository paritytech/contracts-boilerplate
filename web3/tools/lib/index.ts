import { writeFileSync } from 'node:fs'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { Web3, utils } from 'web3'
import { westend, kitchensink } from '../../src/chains.ts'

// Get the chain to deploy to.
export const chain = (() => {
    if (process.env.VITE_CHAIN === 'westend') {
        return westend
    } else if (process.env.VITE_CHAIN == 'kitchensink') {
        return kitchensink
    } else if (process.env.VITE_CHAIN) {
        console.error(
            `Invalid VITE_CHAIN env variable ${process.env.VITE_CHAIN}. Please provide either westend or kitchensink`
        )
        process.exit(1)
    } else {
        console.error(
            'Please provide a VITE_CHAIN env variable by specifying directly or adding it to the .env file'
        )
        process.exit(1)
    }
})()

// Ensure that the DEPLOYER_PRIVATE_KEY env variable is set.
const privateKeyName =
    chain === westend ? 'WESTEND_PRIVATE_KEY' : 'KITCHENSINK_PRIVATE_KEY'

const privateKey = process.env[privateKeyName]
if (!privateKey) {
    console.error(
        `Please provide a ${privateKeyName} env variable by specifying directly or adding it to the .env file`
    )
    process.exit(1)
}

/**
 * The wallet client, used to deploy contracts.
 */

export const provider = new Web3(chain.rpcUrl)
provider.eth.accounts.wallet.add(privateKey)
export const wallet = provider.eth.accounts.wallet.at(0)!

const codegenDir = join(__dirname, '..', '..', 'src', 'contracts')

/**
 * Get the byte code of a contract.
 */
function getByteCode(name: string): string {
    const data = readFileSync(join(codegenDir, `${name}.polkavm`)).toString(
        'hex'
    )
    return `0x${data}`
}

/**
 * Get the abi of a contract.
 */
export function getAbi(name: string): any {
    try {
        return JSON.parse(
            readFileSync(join(codegenDir, `${name}.json`), 'utf8')
        )
    } catch {
        console.error(`Could not find ABI for contract ${name}`)
    }
}

/**
 * Deploys a contract to the network.
 *
 * This function deploys a contract identified by its name, with the specified
 * arguments and optional value, and updates the addresses file with the contract's address.
 *
 * @param  options.name - The name of the contract to deploy.
 * @param [options.id] - An optional identifier that will be used to identify the contract in the generated addresses file, default to [options.name].
 * @param options.args - The arguments required by the contract's constructor.
 * @param [options.value] - An optional value (in wei) to send with the deployment.
 */
export async function deploy({
    id,
    name,
    args,
    value,
}: {
    id?: string
    name: string
    args: any[]
    value?: bigint
}) {
    console.log(`🚀 Deploying ${name} to ${chain.name}`)

    let balance = await provider.eth.getBalance(wallet.address)
    console.log(`💵 Account ${wallet.address} balance: ${balance}`)

    id ??= name

    const abi = getAbi(name)
    const bytecode = getByteCode(name)
    const contract = new provider.eth.Contract(abi)

    const deployTx = contract.deploy({
        data: bytecode,
        arguments: args,
    })

    const gas = await deployTx.estimateGas()
    const contractInstance = await deployTx
        .send({
            from: wallet.address,
            gas: utils.toHex(gas),
            value: utils.toHex(value ?? 0n),
        })
        .on('sending', (payload) => {
            console.log(`Sending transaction`, payload)
        })

    const address = contractInstance.options.address

    let addressesFile = join(codegenDir, 'contract-address.json')
    let addresses = existsSync(addressesFile)
        ? JSON.parse(readFileSync(addressesFile, 'utf8'))
        : {}

    addresses[id] = address

    writeFileSync(addressesFile, JSON.stringify(addresses, null, 2), 'utf8')
    console.log(`✅ Contract ${name} deployed: ${address}`)
}
