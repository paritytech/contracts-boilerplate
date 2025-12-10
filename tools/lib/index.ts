import { writeFileSync } from 'node:fs'
import { createEnv } from '../../utils/index.ts'
import { ContractConstructorArgs, formatEther } from 'viem'
import { Abis } from '../../codegen/abis.ts'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { Hex } from 'viem'
import { parseArgs } from '@std/cli/parse-args'

const flags = parseArgs(Deno.args, {
    string: ['filter'],
    alias: {
        f: 'filter',
    },
})

const { filter } = flags

const codegenDir = join(import.meta.dirname!, '..', '..', 'codegen')

const rpcUrl = Deno.env.get('RPC_URL') ?? 'http://localhost:8545'

/// load private key, default account is 0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac
function loadPrivateKey(): Hex {
    if (Deno.env.has('PRIVATE_KEY')) {
        const privateKey = Deno.env.get('PRIVATE_KEY')
        return privateKey!.startsWith('0x')
            ? privateKey as Hex
            : ('0x' + privateKey) as Hex
    }
    return '0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133'
}

const privateKey = loadPrivateKey()

export const env = await createEnv({
    rpcUrl,
    privateKey,
})

let firstDeploy = true

/**
 * Deploys a contract to the network.
 *
 * This function deploys a contract identified by its name, with the specified
 * arguments and optional value, and updates the addresses file with the contract's address.
 *
 * @param options.name - The name of the contract to deploy, or an object with name and mappedTo.
 * @param options.args - The arguments required by the contract's constructor.
 * @param [options.value] - An optional value (in wei) to send with the deployment.
 * @param [options.bytecodeType] - The type of bytecode to deploy ('evm' or 'polkavm').
 */
export async function deploy<K extends keyof Abis>({
    name,
    args,
    value,
    bytecodeType,
    bytecode,
}: {
    name: K | { name: K; mappedTo: string }
    args: ContractConstructorArgs<Abis[K]>
    value?: bigint
    bytecodeType?: 'evm' | 'polkavm'
    bytecode?: Hex
}): Promise<Hex> {
    let contractName: K
    let mappedTo: string | undefined

    if (typeof name === 'string') {
        contractName = name
        mappedTo = undefined
    } else {
        contractName = name.name
        mappedTo = name.mappedTo
    }

    if (filter && !contractName.toLowerCase().includes(filter.toLowerCase())) {
        return '0x'
    }

    if (firstDeploy) {
        firstDeploy = false
        const balance = await env.wallet.getBalance(env.wallet.account)
        const nonce = await env.wallet.getTransactionCount(env.wallet.account)
        console.log(
            `🔗 Chain: ${env.wallet.chain.name} - ${
                env.wallet.chain.rpcUrls.default.http[0]
            }`,
        )
        console.log(`👤 Account: ${env.wallet.account.address}`)
        console.log(`💰 balance: ${formatEther(balance)}`)
        console.log(`🔢 nonce: ${nonce}\n`)
        if (balance == 0n) {
            console.error('❌ Account has no funds')
            Deno.exit(1)
        }

        const chain = `
import { defineChain } from 'viem'

export const chain = defineChain({
    id: ${env.chain.id},
    name: '${env.chain.name}',
    nativeCurrency: {
        name: 'Westie',
        symbol: 'WST',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['${rpcUrl}'],
        },
    },
    testnet: true,
}) `

        writeFileSync(join(codegenDir, 'chain.ts'), chain, 'utf8')
    }
    console.log(`🚀 Deploying ${contractName}`)

    const id = mappedTo ?? contractName
    const receipt = await env.deploy({
        name: contractName,
        args,
        value,
        bytecodeType,
        bytecode,
    })

    if (receipt.status === 'reverted') {
        console.error(`❌ Contract "${contractName}" reverted`)
        Deno.exit(1)
    }
    const address = receipt.contractAddress
    if (!address) {
        throw new Error('Deployed receipt should have a contract address')
    }
    {
        const addressesFile = join(codegenDir, 'addresses.ts')
        let addresses = existsSync(addressesFile)
            ? readFileSync(addressesFile, 'utf8')
            : ''

        const exportLine = `export const ${id} = "${address}";`
        const regex = new RegExp(`^export const ${id} = .*`, 'm')

        if (regex.test(addresses)) {
            addresses = addresses.replace(regex, exportLine)
        } else {
            addresses = `${addresses}\n${exportLine}`
        }
        writeFileSync(addressesFile, addresses, 'utf8')
    }

    {
        const contractsFile = join(codegenDir, 'contracts.ts')
        let contracts = existsSync(contractsFile)
            ? readFileSync(contractsFile, 'utf8')
            : [
                `// prettier-ignore`,
                `import * as addresses from './addresses.ts'`,
                `import { abis } from './abis.ts'`,
            ].join('\n')

        const exportLine =
            `export const ${id} = { address: addresses.${id}, abi: abis.${contractName} }`
        const regex = new RegExp(`^export const ${id} = .*`, 'm')

        if (regex.test(contracts)) {
            contracts = contracts.replace(regex, exportLine)
        } else {
            contracts = `${contracts}\n${exportLine}`
        }
        writeFileSync(contractsFile, contracts, 'utf8')
    }

    console.log(
        `✅ ${contractName} deployed: ${address} at block ${receipt.blockNumber}\n tx hash: ${receipt.transactionHash}`,
    )
    return address
}
