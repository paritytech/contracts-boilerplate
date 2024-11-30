import { writeFileSync } from 'node:fs'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { ethers } from 'ethers'
import { westend, kitchensink } from '../../src/chains.ts'

// Get the chain to deploy to.
export const chain = (() => {
    if (process.env.CHAIN === 'westend') {
        return westend
    } else if (process.env.CHAIN == 'kitchensink') {
        return kitchensink
    } else if (process.env.CHAIN) {
        console.error(
            `Invalid CHAIN env variable ${process.env.CHAIN}. Please provide either westend or kitchensink`
        )
        process.exit(1)
    } else {
        console.error(
            'Please provide a CHAIN env variable by specifying directly or adding it to the .env file'
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

export const provider = new ethers.JsonRpcProvider(chain.rpcUrl)
export const wallet = new ethers.Wallet(privateKey, provider)

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

    id ??= name
    const factory = new ethers.ContractFactory(
        getAbi(name),
        getByteCode(name),
        wallet
    )
    const contract = await factory.deploy(...args, { value })
    await contract.waitForDeployment()
    const address = await contract.getAddress()

    let addressesFile = join(codegenDir, 'contract-address.json')
    let addresses = existsSync(addressesFile)
        ? JSON.parse(readFileSync(addressesFile, 'utf8'))
        : {}

    addresses[id] = address

    writeFileSync(addressesFile, JSON.stringify(addresses, null, 2), 'utf8')
    console.log(`✅ Contract ${name} deployed: ${address}`)
}
