import { Hex, TransactionReceipt } from 'viem'
import { deploy as deployContract, env } from '../tools/lib/index.ts'
import type { Abis } from '../codegen/abis.ts'
import { readBytecode } from '../utils/index.ts'
import { compile, LinkReferences } from '../utils/build.ts'
import { join } from '@std/path'
import { logger } from '../utils/logger.ts'
import { Buffer } from 'node:buffer'
import { DatabaseSync } from 'node:sqlite'

export const db = new DatabaseSync('stats.db')
db.exec(
    `
CREATE TABLE IF NOT EXISTS benchmark_metadata (
    chain_name TEXT PRIMARY KEY,
    system_chain TEXT,
    system_name TEXT,
    system_version TEXT,
    runtime_spec_name TEXT,
    runtime_spec_version INTEGER,
    runtime_impl_name TEXT,
    runtime_impl_version INTEGER,
    resolc_version TEXT,
    solc_version TEXT,
    recorded_at TEXT NOT NULL
);



CREATE TABLE IF NOT EXISTS transactions (
    hash BLOB NOT NULL,
    chain_name TEXT NOT NULL,
    contract_id TEXT NOT NULL,
    contract_name TEXT NOT NULL,
    transaction_name TEXT NOT NULL,
    block_number INTEGER,
    gas_used INTEGER NOT NULL,
    status INTEGER NOT NULL,
    post_dispatch_ref_time INTEGER,
    post_dispatch_pov INTEGER,
    weight_consumed_ref_time INTEGER,
    weight_consumed_proof_size INTEGER,
    base_call_weight_ref_time INTEGER,
    base_call_weight_proof_size INTEGER,
    actual_pov INTEGER,
    benchmarked_pov INTEGER,

    PRIMARY KEY (hash, chain_name)
);

CREATE TABLE IF NOT EXISTS transaction_steps (
    hash BLOB NOT NULL,
    chain_name TEXT NOT NULL,
    op TEXT NOT NULL,
    gas_cost INTEGER NOT NULL,
    weight_cost_ref_time INTEGER,
    weight_cost_proof_size INTEGER,
    FOREIGN KEY (hash, chain_name) REFERENCES transactions(hash, chain_name)
);

CREATE INDEX IF NOT EXISTS idx_transaction_steps_hash_chain
    ON transaction_steps(hash, chain_name);
`,
)

// deno-lint-ignore ban-types
export type ImplType = 'solidity' | 'ink' | 'rust' | 'stylus' | (string & {})

export interface ContractInfo {
    readonly implType: ImplType
    supportEvm(): boolean
    getName(): string
    getBytecode(): Hex
    build(): Promise<void>
}

export function ink(name: string): ContractInfo {
    const dir = name.replace(/_ink$/, '')
    const inkDir = join(import.meta.dirname!, '..', 'ink', dir)
    // cargo-contract names the artifact after the Cargo.toml package name (dashes -> underscores)
    const cargoToml = Deno.readTextFileSync(join(inkDir, 'Cargo.toml'))
    const pkgName =
        cargoToml.match(/^name\s*=\s*"(.+)"/m)?.[1]?.replace(/-/g, '_') ?? dir
    return {
        implType: 'ink',
        supportEvm() {
            return false
        },
        getName() {
            return name
        },
        getBytecode() {
            return readBytecode(`./ink/${dir}/target/ink/${pkgName}.polkavm`)
        },
        async build() {
            const cmd = new Deno.Command('cargo', {
                args: ['contract', 'build', '--release'],
                cwd: inkDir,
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

export function solidity(
    fileName: string,
    name: string,
    _displayName?: string,
): ContractInfo[] {
    const bytecodes = { pvm: 'polkavm', evm: 'bin' } as const
    const buildRun = { evm: false, pvm: false }
    const libraryLinks = {
        evm: undefined as LinkReferences | undefined,
        pvm: undefined as LinkReferences | undefined,
    }

    return Object.entries(bytecodes).map(([type, ext]) => {
        // Type-specific configuration
        const buildType = type as 'evm' | 'pvm'
        const isEvm = type === 'evm'
        const compiler = isEvm ? 'solc' : 'resolc'

        const contract = {
            implType: 'solidity' as ImplType,
            supportEvm() {
                return isEvm
            },
            getName() {
                return `${name}_${type}`
            },
            getBytecode() {
                return readBytecode(`./codegen/${type}/${name}.${ext}`)
            },
            async build() {
                const libs = libraryLinks[buildType]
                const shouldBuild = !buildRun[buildType] || libs

                if (!shouldBuild) return

                const rootDir = join(import.meta.dirname!, '..')
                const contractsDir = join(rootDir, 'contracts')
                const sourceFilePath = join(contractsDir, fileName)
                const sourceContent = Deno.readTextFileSync(sourceFilePath)

                await compile({
                    fileName,
                    sources: { [fileName]: { content: sourceContent } },
                    rootDir,
                    compiler,
                    generateAbi: isEvm,
                    libraries: libs,
                })

                buildRun[buildType] = true
            },

            setLibraries(libs: LinkReferences) {
                libraryLinks[buildType] = libs
            },
        }
        return contract
    })
}

export function rust(name: string): ContractInfo {
    return {
        implType: 'rust',
        supportEvm() {
            return false
        },
        getName() {
            return `${name}_rust`
        },
        getBytecode() {
            return readBytecode(
                `./rust/contracts/target/${name}.release.polkavm`,
            )
        },
        async build() {
            const cwd = join(import.meta.dirname!, '..', 'rust', 'contracts')
            const cmd = new Deno.Command('cargo', {
                args: ['build', '--release', '--bin', name],
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

export function stylus(name: string): ContractInfo {
    const dir = join(import.meta.dirname!, '..', 'stylus', name)
    // Derive lib name from Cargo.toml package name (dashes become underscores)
    const cargoToml = Deno.readTextFileSync(join(dir, 'Cargo.toml'))
    const pkgName = cargoToml.match(/^name\s*=\s*"(.+)"/m)?.[1]
    if (!pkgName) {
        throw new Error(`Cannot read package name from ${dir}/Cargo.toml`)
    }
    const libName = pkgName.replace(/-/g, '_')
    return {
        implType: 'stylus',
        supportEvm() {
            return false
        },
        getName() {
            return `${name}_stylus`
        },
        getBytecode() {
            return readBytecode(
                join(
                    dir,
                    'target',
                    'riscv64emac-unknown-none-polkavm',
                    'release',
                    `${libName}.polkavm`,
                ),
            )
        },
        async build() {
            const cmd = new Deno.Command('cargo', {
                args: ['stylus', 'build', '--target', 'pvm'],
                cwd: dir,
                stdout: 'inherit',
                stderr: 'inherit',
            })
            const result = await cmd.output()
            if (!result.success) {
                throw new Error(`Failed to build stylus contract: ${name}`)
            }
        },
    }
}

export function pcRust(name: string): ContractInfo {
    const pcRoot = join(import.meta.dirname!, '..', 'rust', 'protocol-commons')
    return {
        implType: 'rust',
        supportEvm() {
            return false
        },
        getName() {
            return `${name}_rust`
        },
        getBytecode() {
            return readBytecode(join(pcRoot, name, `${name}.polkavm`))
        },
        async build() {
            const cmd = new Deno.Command('make', {
                args: [name],
                cwd: pcRoot,
                stdout: 'inherit',
                stderr: 'inherit',
            })
            const result = await cmd.output()
            if (!result.success) {
                throw new Error(`Failed to build pc rust contract: ${name}`)
            }
        },
    }
}

export type Artifacts = Array<{
    id: string
    srcs: ContractInfo[]
    /** Skip deploying the EVM variant (e.g. contract too large for EVM) */
    pvmOnly?: boolean
    deploy: (
        id: keyof Abis,
        name: string,
        bytecode: Hex,
    ) => Promise<TransactionReceipt>
    calls: Array<{
        name: string
        exec: (address: Hex) => Promise<Hex>
    }>
    setup?: () => Promise<void>
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

async function resolveLibraryLinks(
    src: ContractInfo,
    deployedAddresses: Record<string, string>,
) {
    // currently we only support library linking for solidity contracts
    const solidityContract = src as ContractInfo & {
        setLibraries?: (libs: LinkReferences) => void
    }
    if (!solidityContract.setLibraries) return

    const contractName = src.getName()
    const match = contractName.match(/_(evm|pvm)$/)

    const suffix = match?.[0] ?? ''
    const baseName = suffix
        ? contractName.slice(0, -suffix.length)
        : contractName
    const type = src.supportEvm() ? 'evm' : 'pvm'

    // Load library dependencies
    const { libs } = await import('../codegen/libs.ts')
    if (!(baseName in libs)) return // contract does not require library linking

    const lib = libs[baseName as keyof typeof libs]
    const libRefs: LinkReferences = {}

    for (const [libSrc, LibContracts] of Object.entries(lib)) {
        for (const libName of LibContracts) {
            let libAddress = deployedAddresses[`${libName}${suffix}`]
            if (!libAddress) {
                // not deployed library -> deploy it
                const ext = src.supportEvm() ? 'bin' : 'polkavm'
                const receipt = await deployContract({
                    name: {
                        id: libName as keyof Abis,
                        name: `${libName}${suffix}`,
                    },
                    args: [],
                    bytecode: readBytecode(
                        `./codegen/${type}/${libName}.${ext}`,
                    ),
                })
                if (!receipt.contractAddress) {
                    throw new Error(
                        `${contractName} library link: Unable to deploy library contract ${libName}`,
                    )
                }
                libAddress = receipt.contractAddress
                // Track deployed library to avoid redeployment
                deployedAddresses[`${libName}${suffix}`] = libAddress
            }
            libRefs[libSrc] ??= {}
            libRefs[libSrc][libName] = libAddress
        }
    }

    // Set libraries and trigger recompilation
    solidityContract.setLibraries(libRefs)
    await src.build()
}

async function jsonRpc(url: string, method: string): Promise<unknown> {
    const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jsonrpc: '2.0', method, id: 1 }),
    })
    const { result } = await resp.json()
    return result
}

function getToolVersion(cmd: string, args: string[]): string | null {
    try {
        const result = new Deno.Command(cmd, {
            args,
            stdout: 'piped',
            stderr: 'piped',
        }).outputSync()
        return new TextDecoder().decode(result.stdout).trim() || null
    } catch {
        return null
    }
}

async function recordMetadata() {
    // Migrate old schema if needed
    try {
        db.prepare('SELECT system_chain FROM benchmark_metadata LIMIT 1').get()
    } catch {
        db.exec('DROP TABLE IF EXISTS benchmark_metadata')
        db.exec(`CREATE TABLE benchmark_metadata (
            chain_name TEXT PRIMARY KEY,
            system_chain TEXT, system_name TEXT, system_version TEXT,
            runtime_spec_name TEXT, runtime_spec_version INTEGER,
            runtime_impl_name TEXT, runtime_impl_version INTEGER,
            resolc_version TEXT, solc_version TEXT,
            recorded_at TEXT NOT NULL
        )`)
    }

    const chainName = env.chain.name
    const rpcUrl = env.chain.rpcUrls.default.http[0]
    const isGeth = chainName === 'Geth'

    let systemChain: string | null = null
    let systemName: string | null = null
    let systemVersion: string | null = null
    let specName: string | null = null
    let specVersion: number | null = null
    let implName: string | null = null
    let implVersion: number | null = null

    if (isGeth) {
        // Geth: get version from web3_clientVersion
        try {
            const clientVersion = (await jsonRpc(rpcUrl, 'web3_clientVersion')) as string
            // e.g. "Geth/v1.14.3-stable-ab48ba42/darwin-arm64/go1.22.3"
            systemName = 'Geth'
            systemVersion = clientVersion?.match(/v[\d.]+[^ /]*/)?.[0] ?? clientVersion
            systemChain = 'Geth --dev'
        } catch {
            logger.debug('Could not query geth web3_clientVersion')
        }
    } else {
        // Substrate node: query via substrate RPC on port 9944
        const nodeUrl = rpcUrl.replace(':8545', ':9944')
        try {
            const [chain, name, version, runtimeVersion] = await Promise.all([
                jsonRpc(nodeUrl, 'system_chain'),
                jsonRpc(nodeUrl, 'system_name'),
                jsonRpc(nodeUrl, 'system_version'),
                jsonRpc(nodeUrl, 'state_getRuntimeVersion'),
            ])

            systemChain = (chain as string) ?? null
            systemName = (name as string) ?? null
            systemVersion = (version as string) ?? null

            const rv = runtimeVersion as Record<string, unknown> | null
            if (rv) {
                specName = (rv.specName as string) ?? null
                specVersion = (rv.specVersion as number) ?? null
                implName = (rv.implName as string) ?? null
                implVersion = (rv.implVersion as number) ?? null
            }
        } catch {
            logger.debug('Could not query substrate node RPCs')
        }
    }

    const resolcVersion = getToolVersion('resolc', ['--version'])
        ?.match(/version\s+([\d.]+\+commit\.\w+)/)?.[1] ?? getToolVersion('resolc', ['--version'])
    const solcVersion = getToolVersion('solc', ['--version'])
        ?.match(/([\d.]+\+commit\.\w+)/)?.[1] ?? getToolVersion('solc', ['--version'])

    db.prepare(`
        INSERT OR REPLACE INTO benchmark_metadata (
            chain_name, system_chain, system_name, system_version,
            runtime_spec_name, runtime_spec_version,
            runtime_impl_name, runtime_impl_version,
            resolc_version, solc_version, recorded_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
        chainName,
        systemChain,
        systemName,
        systemVersion,
        specName,
        specVersion,
        implName,
        implVersion,
        resolcVersion,
        solcVersion,
        new Date().toISOString(),
    )

    logger.debug(
        `Recorded metadata: chain=${systemChain}, runtime=${specName ?? 'EVM'}@${specVersion ?? ''}, node=${systemName} ${systemVersion}`,
    )
}

export async function deploy(contracts: Artifacts) {
    await recordMetadata()

    // Track deployed libraries to avoid redeployment within this session
    const deployedAddresses: Record<string, string> = {}

    for (const artifact of contracts) {
        const srcs = env.chain.name == 'Geth'
            ? artifact.srcs.filter((src) => src.supportEvm())
            : artifact.pvmOnly
            ? artifact.srcs.filter((src) => !src.supportEvm())
            : artifact.srcs

        for (const src of srcs) {
            const contract = src.getName()
            logger.debug(`Deploying ${contract}...`)
            await resolveLibraryLinks(src, deployedAddresses)
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

        if (artifact.setup) {
            logger.debug(`Running setup for ${artifact.id}...`)
            await artifact.setup()
        }
    }
}

export async function execute(contracts: Artifacts) {
    // Use loadAddresses to avoid module caching issues
    const addresses = await loadAddresses()

    for (const artifact of contracts) {
        const srcs = env.chain.name == 'Geth'
            ? artifact.srcs.filter((src) => src.supportEvm())
            : artifact.pvmOnly
            ? artifact.srcs.filter((src) => !src.supportEvm())
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

// CALL-type opcodes where gasCost includes forwarded gas
const CALL_OPCODES = new Set([
    'CALL',
    'DELEGATECALL',
    'STATICCALL',
    'CALLCODE',
    'CREATE',
    'CREATE2',
])

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
            depth: number
            weightCost?: { ref_time: number; proof_size: number }
        }>
        weightConsumed?: { ref_time: number; proof_size: number }
        baseCallWeight?: { ref_time: number; proof_size: number }
    }

    // Calculate intrinsic gas costs for Geth by removing forwarded gas for call opcodes
    const rawLogs = typedTrace.structLogs ?? []
    const structLogs = chainName === 'Geth'
        ? rawLogs.map((log, i) => {
            if (!CALL_OPCODES.has(log.op)) {
                return log
            }

            // For call opcodes, check if next entry has higher depth (child call started)
            const nextLog = rawLogs[i + 1]
            if (nextLog && nextLog.depth > log.depth) {
                // Intrinsic cost = total gasCost - gas forwarded to child
                const gasForwarded = nextLog.gas
                const intrinsicCost = log.gasCost - gasForwarded
                return { ...log, gasCost: intrinsicCost }
            }

            // No child call (e.g., call to precompile or empty account)
            return log
        })
        : rawLogs
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
    block_number,
    gas_used,
    status,
    post_dispatch_ref_time,
    post_dispatch_pov,
    weight_consumed_ref_time,
    weight_consumed_proof_size,
    base_call_weight_ref_time,
    base_call_weight_proof_size
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`,
        ).run(
            hashBytes,
            chainName,
            contractId,
            contract,
            action,
            receipt.blockNumber ? Number(receipt.blockNumber) : null,
            Number(receipt.gasUsed),
            statusValue,
            weight ? Number(weight.ref_time) : null,
            weight ? Number(weight.proof_size) : null,
            weightConsumed ? Number(weightConsumed.ref_time) : null,
            weightConsumed ? Number(weightConsumed.proof_size) : null,
            baseCallWeight ? Number(baseCallWeight.ref_time) : null,
            baseCallWeight ? Number(baseCallWeight.proof_size) : null,
        )

        const insertStep = db.prepare(
            `
INSERT INTO transaction_steps (
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

let nameCounter = 0
export function uniqueName(base: string): string {
    return `${base}${Date.now().toString(36)}${(nameCounter++).toString(36)}`
}

export async function loadAddresses(): Promise<Record<string, Hex>> {
    // Add cache busting to get fresh addresses
    const mod = await import(`../codegen/addresses.ts?t=${Date.now()}`)
    return mod as Record<string, Hex>
}
