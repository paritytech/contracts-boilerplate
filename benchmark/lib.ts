import { Hex, TransactionReceipt } from 'viem'
import { env } from '../tools/lib/index.ts'
import { Abis } from '../codegen/abis.ts'
import { readBytecode } from '../utils/index.ts'
import { compile, LibraryLink } from '../utils/build.ts'
import { join } from '@std/path'
import { logger } from '../utils/logger.ts'
import { Buffer } from 'node:buffer'
import { DatabaseSync } from 'node:sqlite'

export const db = new DatabaseSync('stats.db')
db.exec(
    `
CREATE TABLE IF NOT EXISTS transactions (
    hash BLOB NOT NULL,
    chain_name TEXT NOT NULL,
    contract_id TEXT NOT NULL,
    contract_name TEXT NOT NULL,
    transaction_name TEXT NOT NULL,
    gas_used INTEGER NOT NULL,
    status INTEGER NOT NULL,
    post_dispatch_ref_time INTEGER,
    post_dispatch_pov INTEGER,
    weight_consumed_ref_time INTEGER,
    weight_consumed_proof_size INTEGER,
    base_call_weight_ref_time INTEGER,
    base_call_weight_proof_size INTEGER,

    PRIMARY KEY (hash, chain_name)
);

CREATE TABLE IF NOT EXISTS transaction_steps (
    hash BLOB NOT NULL,
    chain_name TEXT NOT NULL,
    op TEXT NOT NULL,
    gas_cost INTEGER NOT NULL,
    weight_cost_ref_time INTEGER,
    weight_cost_proof_size INTEGER,
    PRIMARY KEY (hash, chain_name, op),
    FOREIGN KEY (hash, chain_name) REFERENCES transactions(hash, chain_name)
);
`,
)

export interface ContractInfo {
    supportEvm(): boolean
    getName(): string
    getBytecode(): Hex
    build(): Promise<void>
}

export function ink(name: string): ContractInfo {
    return {
        supportEvm() {
            return false
        },
        getName() {
            return `${name}_ink`
        },
        getBytecode() {
            return readBytecode(`./ink/${name}/target/ink/${name}.polkavm`)
        },
        async build() {
            const cwd = join(import.meta.dirname!, '..', 'ink', name)
            const cmd = new Deno.Command('cargo', {
                args: ['contract', 'build', '--release'],
                cwd,
                stdout: 'inherit',
                stderr: 'inherit',
            })
            const result = await cmd.output()
            if (!result.success) {
                throw new Error(`Failed to build ink contract: ${name}`)
            }
        },
    }
}

type LibraryLinkResolver = (
    bytecodeType: 'evm' | 'pvm',
) => LibraryLink | undefined

export function solidity(
    fileName: string,
    name: string,
    libraries?: LibraryLink | LibraryLinkResolver,
): ContractInfo[] {
    const bytecodes = { pvm: 'polkavm', evm: 'bin' } as const
    let buildRun = false

    return Object.entries(bytecodes).map(([type, ext]) => ({
        supportEvm() {
            return type == 'evm'
        },
        getName() {
            return `${name}_${type}`
        },
        getBytecode() {
            return readBytecode(`./codegen/${type}/${name}.${ext}`)
        },
        async build() {
            if (buildRun) return
            buildRun = true

            const rootDir = join(import.meta.dirname!, '..')
            const contractsDir = join(rootDir, 'contracts')
            const sourceFilePath = join(contractsDir, fileName)
            const sourceContent = Deno.readTextFileSync(sourceFilePath)
            const resolveLibraries = (compiler: 'solc' | 'resolc') => {
                if (typeof libraries !== 'function') return libraries
                return libraries(compiler === 'solc' ? 'evm' : 'pvm')
            }

            // Compile with resolc for PVM
            await compile({
                fileName,
                sourceContent,
                rootDir,
                compiler: 'resolc',
                libraries: resolveLibraries('resolc'),
            })

            // Compile with solc for EVM
            await compile({
                fileName,
                sourceContent,
                rootDir,
                compiler: 'solc',
                generateAbi: true,
                libraries: resolveLibraries('solc'),
            })
        },
    }))
}

export function rust(name: string): ContractInfo {
    return {
        supportEvm() {
            return false
        },
        getName() {
            return `${name}_rust`
        },
        getBytecode() {
            return readBytecode(`./rust/contracts/${name}.polkavm`)
        },
        async build() {
            const cwd = join(import.meta.dirname!, '..', 'rust', 'contracts')
            const cmd = new Deno.Command('cargo', {
                args: ['pvm-contract', 'build', '-b', name],
                cwd,
                stdout: 'inherit',
                stderr: 'inherit',
            })
            const result = await cmd.output()
            if (!result.success) {
                throw new Error(`Failed to build rust contract: ${name}`)
            }
        },
    }
}

export type Artifacts = Array<{
    id: string
    srcs: ContractInfo[]
    deploy: (
        id: keyof Abis,
        name: string,
        bytecode: Hex,
    ) => Promise<TransactionReceipt>
    calls: Array<{
        name: string
        exec: (address: Hex) => Promise<Hex>
    }>
}>

export function deleteChainData(chainName: string) {
    db.exec('BEGIN')
    try {
        db.prepare(
            `DELETE FROM transaction_steps WHERE chain_name = ?`,
        ).run(chainName)

        db.prepare(
            `DELETE FROM transactions WHERE chain_name = ?`,
        ).run(chainName)

        db.exec('COMMIT')
        logger.debug(`Deleted all data for chain: ${chainName}`)
    } catch (error) {
        db.exec('ROLLBACK')
        throw error
    }
}

export async function build(contracts: Artifacts) {
    for (const artifact of contracts) {
        for (const src of artifact.srcs) {
            logger.debug(`Building ${src.getName()}...`)
            await src.build()
        }
    }
}

export async function deploy(contracts: Artifacts) {
    for (const artifact of contracts) {
        const srcs = env.chain.name == 'Geth'
            ? artifact.srcs.filter((src) => src.supportEvm())
            : artifact.srcs

        for (const src of srcs) {
            const contract = src.getName()
            logger.debug(`Deploying ${contract}...`)

            const receipt = await artifact.deploy(
                artifact.id as keyof Abis,
                contract,
                src.getBytecode(),
            )

            await updateStats(
                artifact.id,
                contract,
                'deploy',
                receipt.transactionHash,
            )
        }
    }
}

export async function execute(contracts: Artifacts) {
    const addresses = await import('../codegen/addresses.ts') as Record<
        string,
        Hex
    >

    for (const artifact of contracts) {
        const srcs = env.chain.name == 'Geth'
            ? artifact.srcs.filter((src) => src.supportEvm())
            : artifact.srcs
        for (const src of srcs) {
            for (const call of artifact.calls) {
                const contract = src.getName()
                logger.debug(`Executing ${call.name} on ${contract}...`)
                const hash = await call.exec(addresses[contract])
                await updateStats(artifact.id, contract, call.name, hash)
            }
        }
    }
}

async function updateStats(
    contractId: string,
    contract: string,
    action: string,
    hash: Hex,
) {
    const chainName = env.chain.name

    const receipt = await env.wallet.waitForTransactionReceipt({
        hash,
    })

    const weight = env.chain.name !== 'Geth'
        ? await env.debugClient.postDispatchWeight(hash)
        : undefined

    const trace = await env.debugClient.traceTransaction(
        hash,
        'opcodeTracer',
        { disableStack: true },
    )

    const hashBytes = Buffer.from(hash.slice(2), 'hex')
    const statusValue = receipt.status === 'success' ? 1 : 0
    const typedTrace = trace as {
        structLogs?: Array<{
            op: string
            gas: number
            gasCost: number
            weightCost?: { ref_time: number; proof_size: number }
        }>
        weightConsumed?: { ref_time: number; proof_size: number }
        baseCallWeight?: { ref_time: number; proof_size: number }
    }
    const structLogs = typedTrace.structLogs ?? []
    const weightConsumed = typedTrace.weightConsumed
    const baseCallWeight = typedTrace.baseCallWeight

    db.exec('BEGIN')
    try {
        db.prepare(
            `
INSERT OR REPLACE INTO transactions (
    hash,
    chain_name,
    contract_id,
    contract_name,
    transaction_name,
    gas_used,
    status,
    post_dispatch_ref_time,
    post_dispatch_pov,
    weight_consumed_ref_time,
    weight_consumed_proof_size,
    base_call_weight_ref_time,
    base_call_weight_proof_size
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`,
        ).run(
            hashBytes,
            chainName,
            contractId,
            contract,
            action,
            receipt.gasUsed.toString(),
            statusValue,
            weight ? weight.ref_time.toString() : null,
            weight ? weight.proof_size.toString() : null,
            weightConsumed ? weightConsumed.ref_time.toString() : null,
            weightConsumed ? weightConsumed.proof_size.toString() : null,
            baseCallWeight ? baseCallWeight.ref_time.toString() : null,
            baseCallWeight ? baseCallWeight.proof_size.toString() : null,
        )

        const insertStep = db.prepare(
            `
INSERT OR REPLACE INTO transaction_steps (
    hash,
    chain_name,
    op,
    gas_cost,
    weight_cost_ref_time,
    weight_cost_proof_size
) VALUES (?, ?, ?, ?, ?, ?)
`,
        )

        for (const log of structLogs) {
            insertStep.run(
                hashBytes,
                chainName,
                log.op,
                log.gasCost,
                log.weightCost ? log.weightCost.ref_time : null,
                log.weightCost ? log.weightCost.proof_size : null,
            )
        }

        db.exec('COMMIT')
    } catch (error) {
        db.exec('ROLLBACK')
        throw error
    }
}
