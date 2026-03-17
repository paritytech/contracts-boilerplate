import { db } from '../lib.ts'
import { join } from '@std/path'
import { datasetCategories as contractCategories } from '../datasets.ts'

export interface BenchmarkMetadataRow {
    chain_name: string
    system_chain: string | null
    system_name: string | null
    system_version: string | null
    runtime_spec_name: string | null
    runtime_spec_version: number | null
    resolc_version: string | null
    solc_version: string | null
    recorded_at: string
}

export function getBenchmarkMetadata(): BenchmarkMetadataRow[] {
    try {
        return db.prepare(`
            SELECT chain_name, system_chain, system_name, system_version,
                   runtime_spec_name, runtime_spec_version,
                   resolc_version, solc_version, recorded_at
            FROM benchmark_metadata
            ORDER BY chain_name
        `).all() as BenchmarkMetadataRow[]
    } catch {
        return []
    }
}

// Dataset descriptions for the HTML report
export const DATASET_DESCRIPTIONS: Record<string, string> = {
    'test-contracts':
        'Small test contracts used for basic benchmarking (e.g. Fibonacci, SimpleToken).',
    'ethereum-contracts':
        'The most actively used contracts on Ethereum in 2025 (e.g. USDT, WETH, USDC, XEN).',
    'polkadot-contracts':
        'Real-world contracts being built by teams at Parity for the Polkadot ecosystem.',
}

// Dataset methodology HTML content keyed by dataset name.
// Rendered inside a collapsible <details> in the summary section.
export const DATASET_METHODOLOGY: Record<string, string> = {
    'ethereum-contracts': `\
<p>Contracts were selected by querying all Ethereum traces in 2025 using
<a href="https://app.allium.so/s/K2LtkNW9" target="_blank" rel="noopener">Allium</a>,
aggregated by recipient address (to_address).
Two rankings were produced: by total call count and by total gas consumption.
The top 3 from each ranking were included. For each contract, the 3 most called
function selectors (by call count or gas) were benchmarked.
Only write calls (CALL) were included; read-only calls (STATICCALL) were excluded
since benchmarking focuses on state-changing transactions.</p>
<h4>By call count</h4>
<table><thead><tr>
<th>Contract</th><th>Total calls</th><th>Top selectors</th><th>Calls</th>
</tr></thead><tbody>
<tr><td><a href="https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" target="_blank" rel="noopener">WETH</a></td><td>321,329,353</td><td>balanceOf</td><td>149,750,134</td></tr>
<tr><td></td><td></td><td>transfer</td><td>90,228,580</td></tr>
<tr><td></td><td></td><td>deposit</td><td>30,107,061</td></tr>
<tr><td><a href="https://etherscan.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7" target="_blank" rel="noopener">Tether (USDT)</a></td><td>191,378,911</td><td>transfer</td><td>98,159,919</td></tr>
<tr><td></td><td></td><td>balanceOf</td><td>46,783,952</td></tr>
<tr><td></td><td></td><td>transferFrom</td><td>32,547,619</td></tr>
<tr><td><a href="https://etherscan.io/address/0x43506849d7c04f9138d1a2050bbf3a0c054402dd" target="_blank" rel="noopener">USDC (FiatTokenProxy)</a></td><td>185,973,493</td><td>transfer</td><td>75,804,102</td></tr>
<tr><td></td><td></td><td>balanceOf</td><td>58,391,735</td></tr>
<tr><td></td><td></td><td>transferFrom</td><td>32,331,464</td></tr>
</tbody></table>
<h4>By gas consumption</h4>
<table><thead><tr>
<th>Contract</th><th>Total gas</th><th>Top selectors</th><th>Gas</th>
</tr></thead><tbody>
<tr><td><a href="https://etherscan.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7" target="_blank" rel="noopener">Tether (USDT)</a></td><td>4,786,144,607,779</td><td>transfer</td><td>3,753,968,494,925</td></tr>
<tr><td></td><td></td><td>transferFrom</td><td>654,588,082,394</td></tr>
<tr><td></td><td></td><td>approve</td><td>265,488,653,071</td></tr>
<tr><td><a href="https://etherscan.io/address/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" target="_blank" rel="noopener">USDC (FiatTokenProxy)</a></td><td>3,679,838,974,896</td><td>transfer</td><td>2,376,628,261,914</td></tr>
<tr><td></td><td></td><td>transferFrom</td><td>706,967,302,229</td></tr>
<tr><td></td><td></td><td>approve</td><td>324,389,815,620</td></tr>
<tr><td><a href="https://etherscan.io/address/0x0de8bf93da2f7eecb3d9169422413a9bef4ef628" target="_blank" rel="noopener">CoinTool (batch minter)</a></td><td>3,141,067,792,096</td><td>t*</td><td>2,952,995,520,294</td></tr>
</tbody></table>
<p>* CoinTool's top selectors are <code>t</code>, <code>c</code>, and <code>f</code>.
Since <code>t</code> internally calls <code>c</code> and <code>f</code>,
all three are aggregated into a single <code>t</code> benchmark.</p>
<p class="source-links">Source queries:
<a href="https://app.allium.so/s/K2LtkNW9" target="_blank" rel="noopener">by calls</a> &middot;
<a href="https://app.allium.so/s/uIwwdg7Z" target="_blank" rel="noopener">by gas</a> &middot;
per contract:
<a href="https://app.allium.so/s/4cXQZ7WI" target="_blank" rel="noopener">WETH</a>,
<a href="https://app.allium.so/s/y6mReG29" target="_blank" rel="noopener">Tether</a>,
<a href="https://app.allium.so/s/4eA1636Z" target="_blank" rel="noopener">USDC</a>,
<a href="https://app.allium.so/s/OaNuRqUw" target="_blank" rel="noopener">Tether (gas)</a>,
<a href="https://app.allium.so/s/vJtRXnrL" target="_blank" rel="noopener">USDC (gas)</a>,
<a href="https://app.allium.so/s/xzrgBw35" target="_blank" rel="noopener">CoinTool</a>
</p>
<p>Contracts have been slightly modified from their original source code to adapt to PVM or the test node configuration.</p>`,
    'polkadot-contracts': `\
<p>Contracts were sourced from repositories provided by the Parity products team.
Benchmarked transactions were derived from the test suites available in each repository.
The selection of benchmarked methods is not exhaustive and covers a subset of those exercised by existing tests.
Note that these contracts may have changed after this report was generated.</p>
<h4>Source repositories</h4>
<table><thead><tr>
<th>Repository</th><th>Contracts</th>
</tr></thead><tbody>
<tr><td><a href="https://github.com/paritytech/protocol-commons" target="_blank" rel="noopener">protocol-commons</a></td><td>Store, Log, NonFungibleCredential, FungibleCredential, Escrow, DotNS, KeyRegistry</td></tr>
<tr><td><a href="https://github.com/paritytech/mark3t" target="_blank" rel="noopener">mark3t</a></td><td>Marketplace*, MarketplaceProxy, MockMobRule</td></tr>
<tr><td><a href="https://github.com/paritytech/hackm3" target="_blank" rel="noopener">hackm3</a></td><td>DocumentAccessManagement</td></tr>
<tr><td><a href="https://github.com/paritytech/tick3t" target="_blank" rel="noopener">tick3t</a></td><td>W3S</td></tr>
</tbody></table>
<p>* The Marketplace.sol contract exceeds the EVM bytecode size limit
and is only deployed on PVM. The remaining contracts it interacts with (MarketplaceProxy,
MockMobRule) are deployed on both EVM and PVM, and the benchmark tests the
combination of both VMs.</p>
<p>Contracts have been slightly modified from their original source code to adapt to PVM or the test node configuration.</p>`,
}

// Dataset categorization for contracts.
// Imported directly from datasets.ts (no RPC needed thanks to lazy env).
export const DATASET_CATEGORIES: Record<string, string[]> = {
    ...contractCategories,
}
export const DATASET_ORDER: string[] = Object.keys(DATASET_CATEGORIES)

function datasetSortOrder(a: string, b: string): number {
    const ai = DATASET_ORDER.indexOf(a)
    const bi = DATASET_ORDER.indexOf(b)
    return (ai === -1 ? Infinity : ai) - (bi === -1 ? Infinity : bi)
}

import { getOpcodeCategory, OPCODE_CATEGORIES } from '../opcode-categories.ts'
export { getOpcodeCategory, OPCODE_CATEGORIES }
import { getImplTypeLabel, sortImplTypes } from './charts.ts'

// Category descriptions for tooltips
export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
    'Arithmetic': 'Basic math: ADD, SUB, MUL, DIV, MOD',
    'Bitwise': 'Bit manipulation: AND, OR, XOR, SHL, SHR',
    'Comparison': 'Value comparisons: LT, GT, EQ, ISZERO',
    'Math': 'Extended math: ADDMOD, MULMOD, EXP',
    'Crypto': 'Hash functions: KECCAK256, SHA3',
    'Memory': 'Volatile memory read/write: MLOAD, MSTORE',
    'Storage': 'Persistent storage read/write: SLOAD, SSTORE',
    'Calldata': 'Transaction input data access: CALLDATALOAD, CALLDATASIZE',
    'Context': 'Block/transaction context: ADDRESS, CALLER, TIMESTAMP, etc.',
    'Ether/Gas': 'Balance and gas operations: GAS, CALLVALUE, BALANCE',
    'Events': 'Log/event emission: LOG0-LOG4',
    'Calls': 'Contract calls: CALL, STATICCALL, DELEGATECALL',
    'Creation': 'Contract deployment: CREATE, CREATE2',
    'Return': 'Execution termination: RETURN, REVERT, STOP',
    'Return Data': 'Return data access: RETURNDATASIZE, RETURNDATACOPY',
    'Code': 'Contract code access: CODESIZE, EXTCODESIZE, EXTCODEHASH',
    'Immutables': 'Immutable data: LOADIMMUTABLE, SETIMMUTABLE',
    'Stack': 'Stack operations: PUSH, POP, DUP, SWAP',
    'Control Flow': 'Execution flow: JUMP, JUMPI, JUMPDEST',
}

export function getCategoryMappingHtml(): string {
    const rows = Object.entries(OPCODE_CATEGORIES).map(
        ([category, opcodes]) => {
            const evm = opcodes.filter((o) => o === o.toUpperCase()).join(', ')
            const pvm = opcodes.filter((o) => o !== o.toUpperCase()).join(', ')
            return `<tr><td><strong>${category}</strong></td><td><code>${
                evm || '&mdash;'
            }</code></td><td><code>${pvm || '&mdash;'}</code></td></tr>`
        },
    ).join('\n')

    return `<details class="methodology"><summary>&#9656; Category mapping (show more)</summary>
<p>Each EVM opcode and PVM syscall is grouped into a semantic category.
The cost attributed to each category is the sum of gas (EVM) or ref_time (PVM) consumed by its opcodes/syscalls.</p>
<table><thead><tr><th>Category</th><th>EVM opcodes</th><th>PVM syscalls</th></tr></thead>
<tbody>${rows}</tbody></table></details>`
}

export function getDatasetCategory(contractId: string): string {
    for (const [dataset, contracts] of Object.entries(DATASET_CATEGORIES)) {
        if (contracts.includes(contractId)) {
            return dataset
        }
    }
    return 'other'
}

// Type definitions
export interface ExecutiveSummary {
    total_contracts: number
    total_transactions: number
    avg_gas_used: number
    avg_ref_time: number | null
    chains: ChainSummary[]
}

export interface ChainSummary {
    chain_name: string
    contract_count: number
    transaction_count: number
    avg_gas_used: number
    avg_ref_time: number | null
    avg_proof_size: number | null
}

export interface EnvironmentComparison {
    contract_id: string
    transaction_name: string
    evm_gas: number | null
    pvm_ref_time: number | null
    pvm_gas: number | null
    percent_difference: number | null
}

export interface GasAnalysisData {
    contract_id: string
    transaction_name: string
    geth_gas: number | null
    eth_rpc_evm_gas: number | null
    eth_rpc_pvm_gas: number | null
}

export interface AltGasImplementation {
    name: string
    pvm_gas: number | null
    transactions: Array<{ name: string; pvm_gas: number | null }>
}

export interface GasAnalysisHierarchy {
    datasets: Array<{
        name: string
        geth_gas: number | null
        eth_rpc_evm_gas: number | null
        eth_rpc_pvm_gas: number | null
        contracts: Array<{
            name: string
            geth_gas: number | null
            eth_rpc_evm_gas: number | null
            eth_rpc_pvm_gas: number | null
            transactions: Array<{
                name: string
                geth_gas: number | null
                eth_rpc_evm_gas: number | null
                eth_rpc_pvm_gas: number | null
            }>
            alt_implementations: AltGasImplementation[]
        }>
    }>
}

export interface WeightBreakdown {
    contract_id: string
    contract_name: string
    transaction_name: string
    base_call_weight_ref_time: number
    weight_consumed_ref_time: number
    base_call_weight_proof_size: number
    weight_consumed_proof_size: number
    actual_pov: number | null
    benchmarked_pov: number | null
}

export interface RefTimeVsProofSize {
    contract_id: string
    transaction_name: string
    ref_time: number
    proof_size: number
    actual_pov: number | null
    benchmarked_pov: number | null
}

export interface WeightHierarchy {
    datasets: Array<{
        name: string
        evm_ref_time: number | null
        pvm_ref_time: number | null
        evm_proof_size: number | null
        pvm_proof_size: number | null
        evm_actual_pov: number | null
        pvm_actual_pov: number | null
        evm_benchmarked_pov: number | null
        pvm_benchmarked_pov: number | null
        evm_metered_pct: number | null
        pvm_metered_pct: number | null
        evm_metered_pct_proof_size: number | null
        pvm_metered_pct_proof_size: number | null
        evm_metered_ref_time: number | null
        pvm_metered_ref_time: number | null
        contracts: Array<{
            name: string
            evm_ref_time: number | null
            pvm_ref_time: number | null
            evm_proof_size: number | null
            pvm_proof_size: number | null
            evm_actual_pov: number | null
            pvm_actual_pov: number | null
            evm_benchmarked_pov: number | null
            pvm_benchmarked_pov: number | null
            evm_metered_pct: number | null
            pvm_metered_pct: number | null
            evm_metered_pct_proof_size: number | null
            pvm_metered_pct_proof_size: number | null
            evm_metered_ref_time: number | null
            pvm_metered_ref_time: number | null
            transactions: Array<{
                name: string
                evm_ref_time: number | null
                pvm_ref_time: number | null
                evm_proof_size: number | null
                pvm_proof_size: number | null
                evm_actual_pov: number | null
                pvm_actual_pov: number | null
                evm_benchmarked_pov: number | null
                pvm_benchmarked_pov: number | null
                evm_metered_pct: number | null
                pvm_metered_pct: number | null
                evm_metered_pct_proof_size: number | null
                pvm_metered_pct_proof_size: number | null
                evm_metered_ref_time: number | null
                pvm_metered_ref_time: number | null
            }>
            alt_implementations: AltWeightImplementation[]
        }>
    }>
}

export interface AltWeightImplementation {
    name: string
    pvm_ref_time: number | null
    pvm_proof_size: number | null
    pvm_actual_pov: number | null
    pvm_benchmarked_pov: number | null
    pvm_metered_pct: number | null
    pvm_metered_pct_proof_size: number | null
    pvm_metered_ref_time: number | null
    transactions: Array<{
        name: string
        pvm_ref_time: number | null
        pvm_proof_size: number | null
        pvm_actual_pov: number | null
        pvm_benchmarked_pov: number | null
        pvm_metered_pct: number | null
        pvm_metered_pct_proof_size: number | null
        pvm_metered_ref_time: number | null
    }>
}

export interface CategoryBreakdown {
    chain_name: string
    contract_id: string
    transaction_name: string
    category: string
    total_cost: number
    percent_of_total: number
    total_cost_proof_size: number
    percent_of_total_proof_size: number
}

export interface DatasetComparison {
    dataset: string
    chain_name: string
    avg_gas: number
    avg_ref_time: number | null
    transaction_count: number
}

export interface BytecodeSize {
    contract_id: string
    contract_name: string
    vm_type: string
    size_bytes: number
}

// Query functions
export function getExecutiveSummary(): ExecutiveSummary {
    const overall = db.prepare(`
        SELECT
            COUNT(DISTINCT contract_name) as total_contracts,
            COUNT(*) as total_transactions,
            AVG(gas_used) as avg_gas_used,
            AVG(weight_consumed_ref_time + COALESCE(base_call_weight_ref_time, 0)) as avg_ref_time
        FROM transactions
    `).get() as {
        total_contracts: number
        total_transactions: number
        avg_gas_used: number
        avg_ref_time: number | null
    }

    // Split eth-rpc by VM/language based on contract_name suffix
    // Discover all distinct suffixes dynamically from the database
    const suffixRows = db.prepare(`
        SELECT DISTINCT contract_name FROM transactions WHERE chain_name = 'eth-rpc'
    `).all() as { contract_name: string }[]
    const knownSuffixes = [
        ...new Set(
            suffixRows
                .map((r) => r.contract_name.split('_').pop()!)
                .filter((s) => s.length > 0 && /^[a-z]+$/.test(s)),
        ),
    ]

    // Build CASE WHEN clauses dynamically
    const caseClauses = knownSuffixes.map((suffix) => {
        const implType = suffix === 'evm' || suffix === 'pvm'
            ? 'solidity'
            : suffix
        const vmType = suffix === 'evm' ? 'EVM' : 'PVM'
        const label = getImplTypeLabel(implType, vmType)
        const safeSuffix = suffix.replace(/'/g, "''")
        const safeLabel = label.replace(/'/g, "''")
        return `WHEN chain_name = 'eth-rpc' AND contract_name LIKE '%_${safeSuffix}' THEN 'eth-rpc (${safeLabel})'`
    }).join('\n                ')

    const chains = db.prepare(`
        SELECT
            CASE
                ${caseClauses}
                ELSE chain_name
            END as chain_name,
            COUNT(DISTINCT contract_name) as contract_count,
            COUNT(*) as transaction_count,
            AVG(gas_used) as avg_gas_used,
            AVG(weight_consumed_ref_time + COALESCE(base_call_weight_ref_time, 0)) as avg_ref_time,
            AVG(weight_consumed_proof_size + COALESCE(base_call_weight_proof_size, 0)) as avg_proof_size
        FROM transactions
        GROUP BY 1
        ORDER BY chain_name
    `).all() as unknown as ChainSummary[]

    return {
        total_contracts: overall.total_contracts,
        total_transactions: overall.total_transactions,
        avg_gas_used: Math.round(overall.avg_gas_used),
        avg_ref_time: overall.avg_ref_time
            ? Math.round(overall.avg_ref_time)
            : null,
        chains,
    }
}

export function getEnvironmentComparison(): EnvironmentComparison[] {
    // Get EVM (Geth) data
    const evmData = db.prepare(`
        SELECT
            contract_id,
            transaction_name,
            gas_used as evm_gas
        FROM transactions
        WHERE chain_name = 'Geth'
        ORDER BY contract_id, transaction_name
    `).all() as Array<
        { contract_id: string; transaction_name: string; evm_gas: number }
    >

    // Get PVM (eth-rpc) data
    const pvmData = db.prepare(`
        SELECT
            contract_id,
            transaction_name,
            gas_used as pvm_gas,
            (weight_consumed_ref_time + COALESCE(base_call_weight_ref_time, 0)) as pvm_ref_time
        FROM transactions
        WHERE chain_name = 'eth-rpc'
        ORDER BY contract_id, transaction_name
    `).all() as Array<
        {
            contract_id: string
            transaction_name: string
            pvm_gas: number
            pvm_ref_time: number | null
        }
    >

    // Create lookup map for PVM data
    const pvmMap = new Map<string, typeof pvmData[0]>()
    for (const row of pvmData) {
        pvmMap.set(`${row.contract_id}:${row.transaction_name}`, row)
    }

    // Merge data
    const comparisons: EnvironmentComparison[] = []

    for (const evm of evmData) {
        const key = `${evm.contract_id}:${evm.transaction_name}`
        const pvm = pvmMap.get(key)

        comparisons.push({
            contract_id: evm.contract_id,
            transaction_name: evm.transaction_name,
            evm_gas: evm.evm_gas,
            pvm_ref_time: pvm?.pvm_ref_time ?? null,
            pvm_gas: pvm?.pvm_gas ?? null,
            percent_difference: pvm?.pvm_gas
                ? ((pvm.pvm_gas - evm.evm_gas) / evm.evm_gas) * 100
                : null,
        })
    }

    // Add PVM-only entries
    for (const pvm of pvmData) {
        const key = `${pvm.contract_id}:${pvm.transaction_name}`
        if (
            !evmData.find((e) =>
                `${e.contract_id}:${e.transaction_name}` === key
            )
        ) {
            comparisons.push({
                contract_id: pvm.contract_id,
                transaction_name: pvm.transaction_name,
                evm_gas: null,
                pvm_ref_time: pvm.pvm_ref_time,
                pvm_gas: pvm.pvm_gas,
                percent_difference: null,
            })
        }
    }

    return comparisons.sort((a, b) => {
        const cmp = a.contract_id.localeCompare(b.contract_id)
        return cmp !== 0
            ? cmp
            : a.transaction_name.localeCompare(b.transaction_name)
    })
}

export function getGasAnalysisData(): GasAnalysisData[] {
    // Get Geth data
    const gethData = db.prepare(`
        SELECT contract_id, transaction_name, gas_used as gas
        FROM transactions
        WHERE chain_name = 'Geth'
    `).all() as Array<
        { contract_id: string; transaction_name: string; gas: number }
    >

    // Get eth-rpc EVM data (contracts ending with _evm)
    const evmData = db.prepare(`
        SELECT contract_id, transaction_name, gas_used as gas
        FROM transactions
        WHERE chain_name = 'eth-rpc' AND contract_name LIKE '%_evm'
    `).all() as Array<
        { contract_id: string; transaction_name: string; gas: number }
    >

    // Get eth-rpc PVM data (contracts ending with _pvm)
    const pvmData = db.prepare(`
        SELECT contract_id, transaction_name, gas_used as gas
        FROM transactions
        WHERE chain_name = 'eth-rpc' AND contract_name LIKE '%_pvm'
    `).all() as Array<
        { contract_id: string; transaction_name: string; gas: number }
    >

    // Create lookup maps
    const gethMap = new Map<string, number>()
    for (const row of gethData) {
        gethMap.set(`${row.contract_id}:${row.transaction_name}`, row.gas)
    }

    const evmMap = new Map<string, number>()
    for (const row of evmData) {
        evmMap.set(`${row.contract_id}:${row.transaction_name}`, row.gas)
    }

    const pvmMap = new Map<string, number>()
    for (const row of pvmData) {
        pvmMap.set(`${row.contract_id}:${row.transaction_name}`, row.gas)
    }

    // Get all unique keys
    const allKeys = new Set([
        ...gethMap.keys(),
        ...evmMap.keys(),
        ...pvmMap.keys(),
    ])

    const results: GasAnalysisData[] = []
    for (const key of allKeys) {
        const [contract_id, transaction_name] = key.split(':')
        results.push({
            contract_id,
            transaction_name,
            geth_gas: gethMap.get(key) ?? null,
            eth_rpc_evm_gas: evmMap.get(key) ?? null,
            eth_rpc_pvm_gas: pvmMap.get(key) ?? null,
        })
    }

    return results.sort((a, b) => {
        const cmp = a.contract_id.localeCompare(b.contract_id)
        return cmp !== 0
            ? cmp
            : a.transaction_name.localeCompare(b.transaction_name)
    })
}

export function getGasAnalysisHierarchy(): GasAnalysisHierarchy {
    const flatData = getGasAnalysisData()

    // Fetch alternative PVM implementations (Rust, Ink, etc.)
    const altPvmData = db.prepare(`
        SELECT contract_id, contract_name, transaction_name, gas_used as gas
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND contract_name NOT LIKE '%_evm'
            AND contract_name NOT LIKE '%_pvm'
    `).all() as Array<
        {
            contract_id: string
            contract_name: string
            transaction_name: string
            gas: number
        }
    >

    // Group alt implementations by contract_id -> contract_name -> transactions
    const altImplMap = new Map<
        string,
        Map<string, Array<{ name: string; gas: number }>>
    >()
    for (const row of altPvmData) {
        if (!altImplMap.has(row.contract_id)) {
            altImplMap.set(row.contract_id, new Map())
        }
        const implMap = altImplMap.get(row.contract_id)!
        if (!implMap.has(row.contract_name)) implMap.set(row.contract_name, [])
        implMap.get(row.contract_name)!.push({
            name: row.transaction_name,
            gas: row.gas,
        })
    }

    // Group by dataset -> contract -> transaction
    const datasetMap = new Map<string, Map<string, GasAnalysisData[]>>()

    for (const row of flatData) {
        const dataset = getDatasetCategory(row.contract_id)

        if (!datasetMap.has(dataset)) {
            datasetMap.set(dataset, new Map())
        }

        const contractMap = datasetMap.get(dataset)!
        if (!contractMap.has(row.contract_id)) {
            contractMap.set(row.contract_id, [])
        }

        contractMap.get(row.contract_id)!.push(row)
    }

    // Build hierarchy with aggregated totals
    const datasets: GasAnalysisHierarchy['datasets'] = []

    for (const [datasetName, contractMap] of datasetMap) {
        let datasetGeth = 0, datasetEvm = 0, datasetPvm = 0
        let hasGeth = false, hasEvm = false, hasPvm = false

        const contracts: GasAnalysisHierarchy['datasets'][0]['contracts'] = []

        for (const [contractName, txs] of contractMap) {
            let contractGeth = 0, contractEvm = 0, contractPvm = 0
            let cHasGeth = false, cHasEvm = false, cHasPvm = false

            const transactions = txs.map((tx) => {
                if (tx.geth_gas !== null) {
                    contractGeth += tx.geth_gas
                    cHasGeth = true
                }
                if (tx.eth_rpc_evm_gas !== null) {
                    contractEvm += tx.eth_rpc_evm_gas
                    cHasEvm = true
                }
                if (tx.eth_rpc_pvm_gas !== null) {
                    contractPvm += tx.eth_rpc_pvm_gas
                    cHasPvm = true
                }

                return {
                    name: tx.transaction_name,
                    geth_gas: tx.geth_gas,
                    eth_rpc_evm_gas: tx.eth_rpc_evm_gas,
                    eth_rpc_pvm_gas: tx.eth_rpc_pvm_gas,
                }
            })

            if (cHasGeth) {
                datasetGeth += contractGeth
                hasGeth = true
            }
            if (cHasEvm) {
                datasetEvm += contractEvm
                hasEvm = true
            }
            if (cHasPvm) {
                datasetPvm += contractPvm
                hasPvm = true
            }

            // Build alt implementations for this contract
            const alt_implementations: AltGasImplementation[] = []
            const implMap = altImplMap.get(contractName)
            if (implMap) {
                for (const [implName, implTxs] of implMap) {
                    const totalGas = implTxs.reduce((s, t) => s + t.gas, 0)
                    alt_implementations.push({
                        name: implName,
                        pvm_gas: totalGas,
                        transactions: implTxs.map((t) => ({
                            name: t.name,
                            pvm_gas: t.gas,
                        })),
                    })
                }
                alt_implementations.sort((a, b) => a.name.localeCompare(b.name))
            }

            contracts.push({
                name: contractName,
                geth_gas: cHasGeth ? contractGeth : null,
                eth_rpc_evm_gas: cHasEvm ? contractEvm : null,
                eth_rpc_pvm_gas: cHasPvm ? contractPvm : null,
                transactions,
                alt_implementations,
            })
        }

        datasets.push({
            name: datasetName,
            geth_gas: hasGeth ? datasetGeth : null,
            eth_rpc_evm_gas: hasEvm ? datasetEvm : null,
            eth_rpc_pvm_gas: hasPvm ? datasetPvm : null,
            contracts: contracts.sort((a, b) => a.name.localeCompare(b.name)),
        })
    }

    return {
        datasets: datasets.sort((a, b) => datasetSortOrder(a.name, b.name)),
    }
}

export function getWeightBreakdown(): WeightBreakdown[] {
    return db.prepare(`
        SELECT
            contract_id,
            contract_name,
            transaction_name,
            base_call_weight_ref_time,
            weight_consumed_ref_time,
            base_call_weight_proof_size,
            weight_consumed_proof_size,
            COALESCE(actual_pov, post_dispatch_pov) as actual_pov,
            benchmarked_pov
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND base_call_weight_ref_time IS NOT NULL
            AND weight_consumed_ref_time IS NOT NULL
        ORDER BY contract_id, transaction_name
    `).all() as unknown as WeightBreakdown[]
}

export function getRefTimeVsProofSize(): RefTimeVsProofSize[] {
    return db.prepare(`
        SELECT
            contract_id,
            transaction_name,
            (weight_consumed_ref_time + COALESCE(base_call_weight_ref_time, 0)) as ref_time,
            (weight_consumed_proof_size + COALESCE(base_call_weight_proof_size, 0)) as proof_size,
            COALESCE(actual_pov, post_dispatch_pov) as actual_pov,
            benchmarked_pov
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND weight_consumed_ref_time IS NOT NULL
        ORDER BY ref_time DESC
    `).all() as unknown as RefTimeVsProofSize[]
}

interface WeightData {
    contract_id: string
    transaction_name: string
    evm_ref_time: number | null
    pvm_ref_time: number | null
    evm_proof_size: number | null
    pvm_proof_size: number | null
    evm_actual_pov: number | null
    pvm_actual_pov: number | null
    evm_benchmarked_pov: number | null
    pvm_benchmarked_pov: number | null
    evm_metered_pct: number | null
    pvm_metered_pct: number | null
    evm_metered_pct_proof_size: number | null
    pvm_metered_pct_proof_size: number | null
    evm_metered_ref_time: number | null
    pvm_metered_ref_time: number | null
}

interface RawWeightRow {
    contract_id: string
    transaction_name: string
    ref_time: number
    proof_size: number
    actual_pov: number | null
    benchmarked_pov: number | null
    weight_consumed: number
    base_weight: number
    weight_consumed_ps: number
    base_weight_ps: number
}

export function getWeightAnalysisHierarchy(): WeightHierarchy {
    // Get EVM weight data (contracts ending with _evm)
    const evmData = db.prepare(`
        SELECT
            contract_id,
            transaction_name,
            (weight_consumed_ref_time + COALESCE(base_call_weight_ref_time, 0)) as ref_time,
            (weight_consumed_proof_size + COALESCE(base_call_weight_proof_size, 0)) as proof_size,
            COALESCE(actual_pov, post_dispatch_pov) as actual_pov,
            benchmarked_pov,
            weight_consumed_ref_time as weight_consumed,
            COALESCE(base_call_weight_ref_time, 0) as base_weight,
            COALESCE(weight_consumed_proof_size, 0) as weight_consumed_ps,
            COALESCE(base_call_weight_proof_size, 0) as base_weight_ps
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND contract_name LIKE '%_evm'
            AND weight_consumed_ref_time IS NOT NULL
    `).all() as unknown as RawWeightRow[]

    // Get PVM weight data (contracts ending with _pvm)
    const pvmData = db.prepare(`
        SELECT
            contract_id,
            transaction_name,
            (weight_consumed_ref_time + COALESCE(base_call_weight_ref_time, 0)) as ref_time,
            (weight_consumed_proof_size + COALESCE(base_call_weight_proof_size, 0)) as proof_size,
            COALESCE(actual_pov, post_dispatch_pov) as actual_pov,
            benchmarked_pov,
            weight_consumed_ref_time as weight_consumed,
            COALESCE(base_call_weight_ref_time, 0) as base_weight,
            COALESCE(weight_consumed_proof_size, 0) as weight_consumed_ps,
            COALESCE(base_call_weight_proof_size, 0) as base_weight_ps
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND contract_name LIKE '%_pvm'
            AND weight_consumed_ref_time IS NOT NULL
    `).all() as unknown as RawWeightRow[]

    // Get alt PVM weight data (Rust, Ink, etc.)
    const altPvmWeightData = db.prepare(`
        SELECT
            contract_id,
            contract_name,
            transaction_name,
            (weight_consumed_ref_time + COALESCE(base_call_weight_ref_time, 0)) as ref_time,
            (weight_consumed_proof_size + COALESCE(base_call_weight_proof_size, 0)) as proof_size,
            COALESCE(actual_pov, post_dispatch_pov) as actual_pov,
            benchmarked_pov,
            weight_consumed_ref_time as weight_consumed,
            COALESCE(base_call_weight_ref_time, 0) as base_weight,
            COALESCE(weight_consumed_proof_size, 0) as weight_consumed_ps,
            COALESCE(base_call_weight_proof_size, 0) as base_weight_ps
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND contract_name NOT LIKE '%_evm'
            AND contract_name NOT LIKE '%_pvm'
            AND weight_consumed_ref_time IS NOT NULL
    `).all() as unknown as (RawWeightRow & { contract_name: string })[]

    // Group alt weight implementations by contract_id -> contract_name -> transactions
    const altWeightMap = new Map<
        string,
        Map<
            string,
            Array<
                {
                    name: string
                    ref_time: number
                    proof_size: number
                    actual_pov: number | null
                    benchmarked_pov: number | null
                    metered_pct: number
                    metered_pct_proof_size: number
                    metered_ref_time: number
                }
            >
        >
    >()
    for (const row of altPvmWeightData) {
        if (!altWeightMap.has(row.contract_id)) {
            altWeightMap.set(row.contract_id, new Map())
        }
        const implMap = altWeightMap.get(row.contract_id)!
        if (!implMap.has(row.contract_name)) implMap.set(row.contract_name, [])
        const metered_pct = row.ref_time > 0
            ? (row.weight_consumed / row.ref_time) * 100
            : 0
        const metered_pct_proof_size = row.proof_size > 0
            ? (row.weight_consumed_ps / row.proof_size) * 100
            : 0
        implMap.get(row.contract_name)!.push({
            name: row.transaction_name,
            ref_time: row.ref_time,
            proof_size: row.proof_size,
            actual_pov: row.actual_pov,
            benchmarked_pov: row.benchmarked_pov,
            metered_pct,
            metered_pct_proof_size,
            metered_ref_time: row.weight_consumed,
        })
    }

    // Create lookup maps with metered percentage and metered ref_time
    const evmMap = new Map<
        string,
        {
            ref_time: number
            proof_size: number
            actual_pov: number | null
            benchmarked_pov: number | null
            metered_pct: number
            metered_pct_proof_size: number
            metered_ref_time: number
        }
    >()
    for (const row of evmData) {
        const metered_pct = row.ref_time > 0
            ? (row.weight_consumed / row.ref_time) * 100
            : 0
        const metered_pct_proof_size = row.proof_size > 0
            ? (row.weight_consumed_ps / row.proof_size) * 100
            : 0
        evmMap.set(`${row.contract_id}:${row.transaction_name}`, {
            ref_time: row.ref_time,
            proof_size: row.proof_size,
            actual_pov: row.actual_pov,
            benchmarked_pov: row.benchmarked_pov,
            metered_pct,
            metered_pct_proof_size,
            metered_ref_time: row.weight_consumed,
        })
    }

    const pvmMap = new Map<
        string,
        {
            ref_time: number
            proof_size: number
            actual_pov: number | null
            benchmarked_pov: number | null
            metered_pct: number
            metered_pct_proof_size: number
            metered_ref_time: number
        }
    >()
    for (const row of pvmData) {
        const metered_pct = row.ref_time > 0
            ? (row.weight_consumed / row.ref_time) * 100
            : 0
        const metered_pct_proof_size = row.proof_size > 0
            ? (row.weight_consumed_ps / row.proof_size) * 100
            : 0
        pvmMap.set(`${row.contract_id}:${row.transaction_name}`, {
            ref_time: row.ref_time,
            proof_size: row.proof_size,
            actual_pov: row.actual_pov,
            benchmarked_pov: row.benchmarked_pov,
            metered_pct,
            metered_pct_proof_size,
            metered_ref_time: row.weight_consumed,
        })
    }

    // Get all unique keys
    const allKeys = new Set([...evmMap.keys(), ...pvmMap.keys()])

    // Build flat data
    const flatData: WeightData[] = []
    for (const key of allKeys) {
        const [contract_id, transaction_name] = key.split(':')
        const evm = evmMap.get(key)
        const pvm = pvmMap.get(key)
        flatData.push({
            contract_id,
            transaction_name,
            evm_ref_time: evm?.ref_time ?? null,
            pvm_ref_time: pvm?.ref_time ?? null,
            evm_proof_size: evm?.proof_size ?? null,
            pvm_proof_size: pvm?.proof_size ?? null,
            evm_actual_pov: evm?.actual_pov ?? null,
            pvm_actual_pov: pvm?.actual_pov ?? null,
            evm_benchmarked_pov: evm?.benchmarked_pov ?? null,
            pvm_benchmarked_pov: pvm?.benchmarked_pov ?? null,
            evm_metered_pct: evm?.metered_pct ?? null,
            pvm_metered_pct: pvm?.metered_pct ?? null,
            evm_metered_pct_proof_size: evm?.metered_pct_proof_size ?? null,
            pvm_metered_pct_proof_size: pvm?.metered_pct_proof_size ?? null,
            evm_metered_ref_time: evm?.metered_ref_time ?? null,
            pvm_metered_ref_time: pvm?.metered_ref_time ?? null,
        })
    }

    // Group by dataset -> contract -> transaction
    const datasetMap = new Map<string, Map<string, WeightData[]>>()

    for (const row of flatData) {
        const dataset = getDatasetCategory(row.contract_id)

        if (!datasetMap.has(dataset)) {
            datasetMap.set(dataset, new Map())
        }

        const contractMap = datasetMap.get(dataset)!
        if (!contractMap.has(row.contract_id)) {
            contractMap.set(row.contract_id, [])
        }

        contractMap.get(row.contract_id)!.push(row)
    }

    // Build hierarchy with aggregated totals
    const datasets: WeightHierarchy['datasets'] = []

    for (const [datasetName, contractMap] of datasetMap) {
        let datasetEvmRefTime = 0, datasetPvmRefTime = 0
        let datasetEvmProofSize = 0, datasetPvmProofSize = 0
        let datasetEvmActualPov = 0, datasetPvmActualPov = 0
        let datasetEvmActualPovCount = 0, datasetPvmActualPovCount = 0
        let datasetEvmBenchPov = 0, datasetPvmBenchPov = 0
        let datasetEvmBenchPovCount = 0, datasetPvmBenchPovCount = 0
        let datasetEvmMeteredSum = 0, datasetPvmMeteredSum = 0
        let datasetEvmMeteredSumPs = 0, datasetPvmMeteredSumPs = 0
        let datasetEvmMeteredRefTime = 0, datasetPvmMeteredRefTime = 0
        let datasetEvmCount = 0, datasetPvmCount = 0
        let hasEvm = false, hasPvm = false

        const contracts: WeightHierarchy['datasets'][0]['contracts'] = []

        for (const [contractName, txs] of contractMap) {
            let contractEvmRefTime = 0, contractPvmRefTime = 0
            let contractEvmProofSize = 0, contractPvmProofSize = 0
            let contractEvmActualPov = 0, contractPvmActualPov = 0
            let contractEvmActualPovCount = 0, contractPvmActualPovCount = 0
            let contractEvmBenchPov = 0, contractPvmBenchPov = 0
            let contractEvmBenchPovCount = 0, contractPvmBenchPovCount = 0
            let contractEvmMeteredSum = 0, contractPvmMeteredSum = 0
            let contractEvmMeteredSumPs = 0, contractPvmMeteredSumPs = 0
            let contractEvmMeteredRefTime = 0, contractPvmMeteredRefTime = 0
            let contractEvmCount = 0, contractPvmCount = 0
            let cHasEvm = false, cHasPvm = false

            const transactions = txs.map((tx) => {
                if (tx.evm_ref_time !== null) {
                    contractEvmRefTime += tx.evm_ref_time
                    contractEvmProofSize += tx.evm_proof_size ?? 0
                    if (tx.evm_actual_pov !== null) {
                        contractEvmActualPov += tx.evm_actual_pov
                        contractEvmActualPovCount++
                    }
                    if (tx.evm_benchmarked_pov !== null) {
                        contractEvmBenchPov += tx.evm_benchmarked_pov
                        contractEvmBenchPovCount++
                    }
                    contractEvmMeteredSum += tx.evm_metered_pct ?? 0
                    contractEvmMeteredSumPs += tx.evm_metered_pct_proof_size ?? 0
                    contractEvmMeteredRefTime += tx.evm_metered_ref_time ?? 0
                    contractEvmCount++
                    cHasEvm = true
                }
                if (tx.pvm_ref_time !== null) {
                    contractPvmRefTime += tx.pvm_ref_time
                    contractPvmProofSize += tx.pvm_proof_size ?? 0
                    if (tx.pvm_actual_pov !== null) {
                        contractPvmActualPov += tx.pvm_actual_pov
                        contractPvmActualPovCount++
                    }
                    if (tx.pvm_benchmarked_pov !== null) {
                        contractPvmBenchPov += tx.pvm_benchmarked_pov
                        contractPvmBenchPovCount++
                    }
                    contractPvmMeteredSum += tx.pvm_metered_pct ?? 0
                    contractPvmMeteredSumPs += tx.pvm_metered_pct_proof_size ?? 0
                    contractPvmMeteredRefTime += tx.pvm_metered_ref_time ?? 0
                    contractPvmCount++
                    cHasPvm = true
                }

                return {
                    name: tx.transaction_name,
                    evm_ref_time: tx.evm_ref_time,
                    pvm_ref_time: tx.pvm_ref_time,
                    evm_proof_size: tx.evm_proof_size,
                    pvm_proof_size: tx.pvm_proof_size,
                    evm_actual_pov: tx.evm_actual_pov,
                    pvm_actual_pov: tx.pvm_actual_pov,
                    evm_benchmarked_pov: tx.evm_benchmarked_pov,
                    pvm_benchmarked_pov: tx.pvm_benchmarked_pov,
                    evm_metered_pct: tx.evm_metered_pct,
                    pvm_metered_pct: tx.pvm_metered_pct,
                    evm_metered_pct_proof_size: tx.evm_metered_pct_proof_size,
                    pvm_metered_pct_proof_size: tx.pvm_metered_pct_proof_size,
                    evm_metered_ref_time: tx.evm_metered_ref_time,
                    pvm_metered_ref_time: tx.pvm_metered_ref_time,
                }
            })

            if (cHasEvm) {
                datasetEvmRefTime += contractEvmRefTime
                datasetEvmProofSize += contractEvmProofSize
                datasetEvmActualPov += contractEvmActualPov
                datasetEvmActualPovCount += contractEvmActualPovCount
                datasetEvmBenchPov += contractEvmBenchPov
                datasetEvmBenchPovCount += contractEvmBenchPovCount
                datasetEvmMeteredSum += contractEvmMeteredSum
                datasetEvmMeteredSumPs += contractEvmMeteredSumPs
                datasetEvmMeteredRefTime += contractEvmMeteredRefTime
                datasetEvmCount += contractEvmCount
                hasEvm = true
            }
            if (cHasPvm) {
                datasetPvmRefTime += contractPvmRefTime
                datasetPvmProofSize += contractPvmProofSize
                datasetPvmActualPov += contractPvmActualPov
                datasetPvmActualPovCount += contractPvmActualPovCount
                datasetPvmBenchPov += contractPvmBenchPov
                datasetPvmBenchPovCount += contractPvmBenchPovCount
                datasetPvmMeteredSum += contractPvmMeteredSum
                datasetPvmMeteredSumPs += contractPvmMeteredSumPs
                datasetPvmMeteredRefTime += contractPvmMeteredRefTime
                datasetPvmCount += contractPvmCount
                hasPvm = true
            }

            // Build alt weight implementations for this contract
            const alt_implementations: AltWeightImplementation[] = []
            const altWMap = altWeightMap.get(contractName)
            if (altWMap) {
                for (const [implName, implTxs] of altWMap) {
                    const count = implTxs.length
                    const altActualPovTxs = implTxs.filter((t) => t.actual_pov !== null)
                    const altBenchPovTxs = implTxs.filter((t) => t.benchmarked_pov !== null)
                    alt_implementations.push({
                        name: implName,
                        pvm_ref_time: count > 0
                            ? Math.round(
                                implTxs.reduce((s, t) => s + t.ref_time, 0) /
                                    count,
                            )
                            : null,
                        pvm_proof_size: count > 0
                            ? Math.round(
                                implTxs.reduce((s, t) => s + t.proof_size, 0) /
                                    count,
                            )
                            : null,
                        pvm_actual_pov: altActualPovTxs.length > 0
                            ? Math.round(
                                altActualPovTxs.reduce((s, t) => s + t.actual_pov!, 0) /
                                    altActualPovTxs.length,
                            )
                            : null,
                        pvm_benchmarked_pov: altBenchPovTxs.length > 0
                            ? Math.round(
                                altBenchPovTxs.reduce((s, t) => s + t.benchmarked_pov!, 0) /
                                    altBenchPovTxs.length,
                            )
                            : null,
                        pvm_metered_pct: count > 0
                            ? implTxs.reduce((s, t) => s + t.metered_pct, 0) /
                                count
                            : null,
                        pvm_metered_pct_proof_size: count > 0
                            ? implTxs.reduce((s, t) => s + t.metered_pct_proof_size, 0) /
                                count
                            : null,
                        pvm_metered_ref_time: count > 0
                            ? Math.round(
                                implTxs.reduce(
                                    (s, t) => s + t.metered_ref_time,
                                    0,
                                ) / count,
                            )
                            : null,
                        transactions: implTxs.map((t) => ({
                            name: t.name,
                            pvm_ref_time: t.ref_time,
                            pvm_proof_size: t.proof_size,
                            pvm_actual_pov: t.actual_pov,
                            pvm_benchmarked_pov: t.benchmarked_pov,
                            pvm_metered_pct: t.metered_pct,
                            pvm_metered_pct_proof_size: t.metered_pct_proof_size,
                            pvm_metered_ref_time: t.metered_ref_time,
                        })),
                    })
                }
                alt_implementations.sort((a, b) => a.name.localeCompare(b.name))
            }

            contracts.push({
                name: contractName,
                evm_ref_time: cHasEvm && contractEvmCount > 0
                    ? Math.round(contractEvmRefTime / contractEvmCount)
                    : null,
                pvm_ref_time: cHasPvm && contractPvmCount > 0
                    ? Math.round(contractPvmRefTime / contractPvmCount)
                    : null,
                evm_proof_size: cHasEvm && contractEvmCount > 0
                    ? Math.round(contractEvmProofSize / contractEvmCount)
                    : null,
                pvm_proof_size: cHasPvm && contractPvmCount > 0
                    ? Math.round(contractPvmProofSize / contractPvmCount)
                    : null,
                evm_actual_pov: cHasEvm && contractEvmActualPovCount > 0
                    ? Math.round(contractEvmActualPov / contractEvmActualPovCount)
                    : null,
                pvm_actual_pov: cHasPvm && contractPvmActualPovCount > 0
                    ? Math.round(contractPvmActualPov / contractPvmActualPovCount)
                    : null,
                evm_benchmarked_pov: cHasEvm && contractEvmBenchPovCount > 0
                    ? Math.round(contractEvmBenchPov / contractEvmBenchPovCount)
                    : null,
                pvm_benchmarked_pov: cHasPvm && contractPvmBenchPovCount > 0
                    ? Math.round(contractPvmBenchPov / contractPvmBenchPovCount)
                    : null,
                evm_metered_pct: cHasEvm && contractEvmCount > 0
                    ? contractEvmMeteredSum / contractEvmCount
                    : null,
                pvm_metered_pct: cHasPvm && contractPvmCount > 0
                    ? contractPvmMeteredSum / contractPvmCount
                    : null,
                evm_metered_pct_proof_size: cHasEvm && contractEvmCount > 0
                    ? contractEvmMeteredSumPs / contractEvmCount
                    : null,
                pvm_metered_pct_proof_size: cHasPvm && contractPvmCount > 0
                    ? contractPvmMeteredSumPs / contractPvmCount
                    : null,
                evm_metered_ref_time: cHasEvm && contractEvmCount > 0
                    ? Math.round(contractEvmMeteredRefTime / contractEvmCount)
                    : null,
                pvm_metered_ref_time: cHasPvm && contractPvmCount > 0
                    ? Math.round(contractPvmMeteredRefTime / contractPvmCount)
                    : null,
                transactions,
                alt_implementations,
            })
        }

        datasets.push({
            name: datasetName,
            evm_ref_time: hasEvm && datasetEvmCount > 0
                ? Math.round(datasetEvmRefTime / datasetEvmCount)
                : null,
            pvm_ref_time: hasPvm && datasetPvmCount > 0
                ? Math.round(datasetPvmRefTime / datasetPvmCount)
                : null,
            evm_proof_size: hasEvm && datasetEvmCount > 0
                ? Math.round(datasetEvmProofSize / datasetEvmCount)
                : null,
            pvm_proof_size: hasPvm && datasetPvmCount > 0
                ? Math.round(datasetPvmProofSize / datasetPvmCount)
                : null,
            evm_actual_pov: hasEvm && datasetEvmActualPovCount > 0
                ? Math.round(datasetEvmActualPov / datasetEvmActualPovCount)
                : null,
            pvm_actual_pov: hasPvm && datasetPvmActualPovCount > 0
                ? Math.round(datasetPvmActualPov / datasetPvmActualPovCount)
                : null,
            evm_benchmarked_pov: hasEvm && datasetEvmBenchPovCount > 0
                ? Math.round(datasetEvmBenchPov / datasetEvmBenchPovCount)
                : null,
            pvm_benchmarked_pov: hasPvm && datasetPvmBenchPovCount > 0
                ? Math.round(datasetPvmBenchPov / datasetPvmBenchPovCount)
                : null,
            evm_metered_pct: hasEvm && datasetEvmCount > 0
                ? datasetEvmMeteredSum / datasetEvmCount
                : null,
            pvm_metered_pct: hasPvm && datasetPvmCount > 0
                ? datasetPvmMeteredSum / datasetPvmCount
                : null,
            evm_metered_pct_proof_size: hasEvm && datasetEvmCount > 0
                ? datasetEvmMeteredSumPs / datasetEvmCount
                : null,
            pvm_metered_pct_proof_size: hasPvm && datasetPvmCount > 0
                ? datasetPvmMeteredSumPs / datasetPvmCount
                : null,
            evm_metered_ref_time: hasEvm && datasetEvmCount > 0
                ? Math.round(datasetEvmMeteredRefTime / datasetEvmCount)
                : null,
            pvm_metered_ref_time: hasPvm && datasetPvmCount > 0
                ? Math.round(datasetPvmMeteredRefTime / datasetPvmCount)
                : null,
            contracts: contracts.sort((a, b) => a.name.localeCompare(b.name)),
        })
    }

    return {
        datasets: datasets.sort((a, b) => datasetSortOrder(a.name, b.name)),
    }
}

export function getCategoryBreakdown(): CategoryBreakdown[] {
    const allData = db.prepare(`
        SELECT
            t.chain_name,
            t.contract_id,
            t.transaction_name,
            t.weight_consumed_ref_time,
            t.weight_consumed_proof_size,
            t.gas_used,
            s.op,
            SUM(s.gas_cost) as total_gas_cost,
            SUM(s.weight_cost_ref_time) as total_weight_cost_ref_time,
            SUM(s.weight_cost_proof_size) as total_weight_cost_proof_size
        FROM transactions AS t
        JOIN transaction_steps AS s ON s.hash = t.hash AND s.chain_name = t.chain_name
        GROUP BY t.hash, t.chain_name, s.op
        ORDER BY t.chain_name, t.contract_id, t.transaction_name
    `).all() as Array<{
        chain_name: string
        contract_id: string
        transaction_name: string
        weight_consumed_ref_time: number | null
        weight_consumed_proof_size: number | null
        gas_used: number
        op: string | null
        total_gas_cost: number | null
        total_weight_cost_ref_time: number | null
        total_weight_cost_proof_size: number | null
    }>

    // Aggregate by category
    const categoryMap = new Map<string, CategoryBreakdown>()

    for (const row of allData) {
        const category = getOpcodeCategory(row.op)
        const key =
            `${row.chain_name}:${row.contract_id}:${row.transaction_name}:${category}`

        const isPvm = row.chain_name === 'eth-rpc'
        const cost = isPvm
            ? (row.total_weight_cost_ref_time ?? 0)
            : (row.total_gas_cost ?? 0)
        const total = isPvm
            ? (row.weight_consumed_ref_time ?? row.gas_used)
            : row.gas_used

        const costProofSize = isPvm
            ? (row.total_weight_cost_proof_size ?? 0)
            : 0
        const totalProofSize = isPvm ? (row.weight_consumed_proof_size ?? 0) : 0

        if (!categoryMap.has(key)) {
            categoryMap.set(key, {
                chain_name: row.chain_name,
                contract_id: row.contract_id,
                transaction_name: row.transaction_name,
                category,
                total_cost: 0,
                percent_of_total: 0,
                total_cost_proof_size: 0,
                percent_of_total_proof_size: 0,
            })
        }

        const entry = categoryMap.get(key)!
        entry.total_cost += cost
        entry.percent_of_total = total > 0
            ? (entry.total_cost / total) * 100
            : 0
        entry.total_cost_proof_size += costProofSize
        entry.percent_of_total_proof_size = totalProofSize > 0
            ? (entry.total_cost_proof_size / totalProofSize) * 100
            : 0
    }

    return Array.from(categoryMap.values())
}

export function getDatasetComparison(): DatasetComparison[] {
    const allData = db.prepare(`
        SELECT
            chain_name,
            contract_id,
            gas_used,
            (weight_consumed_ref_time + COALESCE(base_call_weight_ref_time, 0)) as ref_time
        FROM transactions
        ORDER BY chain_name, contract_id
    `).all() as Array<
        {
            chain_name: string
            contract_id: string
            gas_used: number
            ref_time: number | null
        }
    >

    // Group by dataset and chain
    const datasetMap = new Map<string, {
        total_gas: number
        total_ref_time: number
        count: number
        ref_time_count: number
    }>()

    for (const row of allData) {
        const dataset = getDatasetCategory(row.contract_id)
        const key = `${dataset}:${row.chain_name}`

        if (!datasetMap.has(key)) {
            datasetMap.set(key, {
                total_gas: 0,
                total_ref_time: 0,
                count: 0,
                ref_time_count: 0,
            })
        }

        const entry = datasetMap.get(key)!
        entry.total_gas += row.gas_used
        entry.count++

        if (row.ref_time !== null) {
            entry.total_ref_time += row.ref_time
            entry.ref_time_count++
        }
    }

    const results: DatasetComparison[] = []
    for (const [key, data] of datasetMap) {
        const [dataset, chain_name] = key.split(':')
        results.push({
            dataset,
            chain_name,
            avg_gas: Math.round(data.total_gas / data.count),
            avg_ref_time: data.ref_time_count > 0
                ? Math.round(data.total_ref_time / data.ref_time_count)
                : null,
            transaction_count: data.count,
        })
    }

    return results.sort((a, b) =>
        a.dataset.localeCompare(b.dataset) ||
        a.chain_name.localeCompare(b.chain_name)
    )
}

// Category hierarchy types
export interface OpcodeDetail {
    op: string
    category: string
    pct: number // % of transaction total (ref_time)
    pct_proof_size: number // % of transaction total (proof_size)
}

export interface CategoryHierarchyRow {
    name: string
    categories: Record<string, number> // category name -> ref_time percentage
    total_cost: number
    categories_proof_size: Record<string, number> // category name -> proof_size percentage
    total_cost_proof_size: number
    opcodes?: OpcodeDetail[] // only at transaction level
}

export interface CategoryHierarchy {
    datasets: Array<
        CategoryHierarchyRow & {
            contracts: Array<
                CategoryHierarchyRow & {
                    transactions: CategoryHierarchyRow[]
                }
            >
        }
    >
    allCategories: string[]
}

export function getCategoryBreakdownHierarchy(): CategoryHierarchy & {
    categoryDescriptions: Record<string, string>
} {
    // Query per-opcode data directly (before category aggregation) for eth-rpc only
    const rawData = db.prepare(`
        SELECT
            t.contract_id,
            t.transaction_name,
            t.weight_consumed_ref_time,
            t.weight_consumed_proof_size,
            s.op,
            SUM(s.weight_cost_ref_time) as total_weight_cost_ref_time,
            SUM(s.weight_cost_proof_size) as total_weight_cost_proof_size
        FROM transactions AS t
        JOIN transaction_steps AS s ON s.hash = t.hash AND s.chain_name = t.chain_name
        WHERE t.chain_name = 'eth-rpc'
        GROUP BY t.hash, s.op
        ORDER BY t.contract_id, t.transaction_name
    `).all() as Array<{
        contract_id: string
        transaction_name: string
        weight_consumed_ref_time: number | null
        weight_consumed_proof_size: number | null
        op: string | null
        total_weight_cost_ref_time: number | null
        total_weight_cost_proof_size: number | null
    }>

    // Get all unique categories sorted by total usage
    const categoryTotals = new Map<string, number>()
    for (const row of rawData) {
        const category = getOpcodeCategory(row.op)
        const cost = row.total_weight_cost_ref_time ?? 0
        categoryTotals.set(category, (categoryTotals.get(category) ?? 0) + cost)
    }
    const allCategories = [...categoryTotals.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([cat]) => cat)
        .slice(0, 12) // Top 12 categories

    // Group by dataset -> contract -> transaction
    // Store actual costs and per-opcode data
    interface OpAccum {
        cost: number
        costProofSize: number
    }
    interface TxAccum {
        categoryCosts: Map<string, number>
        total: number
        categoryCostsProofSize: Map<string, number>
        totalProofSize: number
        opcodes: Map<string, OpAccum> // op -> costs
    }
    const datasetMap = new Map<string, Map<string, Map<string, TxAccum>>>()

    for (const row of rawData) {
        const dataset = getDatasetCategory(row.contract_id)
        const category = getOpcodeCategory(row.op)
        const cost = row.total_weight_cost_ref_time ?? 0
        const costPs = row.total_weight_cost_proof_size ?? 0

        if (!datasetMap.has(dataset)) {
            datasetMap.set(dataset, new Map())
        }
        const contractMap = datasetMap.get(dataset)!

        if (!contractMap.has(row.contract_id)) {
            contractMap.set(row.contract_id, new Map())
        }
        const txMap = contractMap.get(row.contract_id)!

        if (!txMap.has(row.transaction_name)) {
            txMap.set(row.transaction_name, {
                categoryCosts: new Map(),
                total: 0,
                categoryCostsProofSize: new Map(),
                totalProofSize: 0,
                opcodes: new Map(),
            })
        }
        const txData = txMap.get(row.transaction_name)!

        // Accumulate category costs
        txData.categoryCosts.set(
            category,
            (txData.categoryCosts.get(category) ?? 0) + cost,
        )
        txData.total += cost
        txData.categoryCostsProofSize.set(
            category,
            (txData.categoryCostsProofSize.get(category) ?? 0) + costPs,
        )
        txData.totalProofSize += costPs

        // Accumulate per-opcode costs
        if (row.op) {
            const opKey = row.op
            if (!txData.opcodes.has(opKey)) {
                txData.opcodes.set(opKey, { cost: 0, costProofSize: 0 })
            }
            const opData = txData.opcodes.get(opKey)!
            opData.cost += cost
            opData.costProofSize += costPs
        }
    }

    // Helper to calculate percentages from cost maps
    function calcPercentages(
        costMap: Map<string, number>,
        total: number,
    ): Record<string, number> {
        const result: Record<string, number> = {}
        for (const cat of allCategories) {
            const catCost = costMap.get(cat) ?? 0
            result[cat] = total > 0 ? (catCost / total) * 100 : 0
        }
        return result
    }

    // Build hierarchy
    const datasets: CategoryHierarchy['datasets'] = []

    for (const [datasetName, contractMap] of datasetMap) {
        const datasetCategories = new Map<string, number>()
        const datasetCategoriesPs = new Map<string, number>()
        let datasetTotal = 0
        let datasetTotalPs = 0

        const contracts: CategoryHierarchy['datasets'][0]['contracts'] = []

        for (const [contractName, txMap] of contractMap) {
            const contractCategories = new Map<string, number>()
            const contractCategoriesPs = new Map<string, number>()
            let contractTotal = 0
            let contractTotalPs = 0

            const transactions: CategoryHierarchyRow[] = []

            for (const [txName, txData] of txMap) {
                // Build opcode detail sorted by ref_time descending
                const opcodes: OpcodeDetail[] = [...txData.opcodes.entries()]
                    .sort((a, b) => b[1].cost - a[1].cost)
                    .map(([op, data]) => ({
                        op,
                        category: getOpcodeCategory(op),
                        pct: txData.total > 0
                            ? (data.cost / txData.total) * 100
                            : 0,
                        pct_proof_size: txData.totalProofSize > 0
                            ? (data.costProofSize / txData.totalProofSize) * 100
                            : 0,
                    }))

                transactions.push({
                    name: txName,
                    categories: calcPercentages(
                        txData.categoryCosts,
                        txData.total,
                    ),
                    total_cost: txData.total,
                    categories_proof_size: calcPercentages(
                        txData.categoryCostsProofSize,
                        txData.totalProofSize,
                    ),
                    total_cost_proof_size: txData.totalProofSize,
                    opcodes,
                })

                // Aggregate actual costs to contract level (not percentages)
                for (const [cat, cost] of txData.categoryCosts) {
                    contractCategories.set(
                        cat,
                        (contractCategories.get(cat) ?? 0) + cost,
                    )
                }
                contractTotal += txData.total
                for (const [cat, cost] of txData.categoryCostsProofSize) {
                    contractCategoriesPs.set(
                        cat,
                        (contractCategoriesPs.get(cat) ?? 0) + cost,
                    )
                }
                contractTotalPs += txData.totalProofSize
            }

            contracts.push({
                name: contractName,
                categories: calcPercentages(contractCategories, contractTotal),
                total_cost: contractTotal,
                categories_proof_size: calcPercentages(
                    contractCategoriesPs,
                    contractTotalPs,
                ),
                total_cost_proof_size: contractTotalPs,
                transactions: transactions.sort((a, b) =>
                    a.name.localeCompare(b.name)
                ),
            })

            // Aggregate to dataset level
            for (const [cat, cost] of contractCategories) {
                datasetCategories.set(
                    cat,
                    (datasetCategories.get(cat) ?? 0) + cost,
                )
            }
            datasetTotal += contractTotal
            for (const [cat, cost] of contractCategoriesPs) {
                datasetCategoriesPs.set(
                    cat,
                    (datasetCategoriesPs.get(cat) ?? 0) + cost,
                )
            }
            datasetTotalPs += contractTotalPs
        }

        datasets.push({
            name: datasetName,
            categories: calcPercentages(datasetCategories, datasetTotal),
            total_cost: datasetTotal,
            categories_proof_size: calcPercentages(
                datasetCategoriesPs,
                datasetTotalPs,
            ),
            total_cost_proof_size: datasetTotalPs,
            contracts: contracts.sort((a, b) => a.name.localeCompare(b.name)),
        })
    }

    return {
        datasets: datasets.sort((a, b) => datasetSortOrder(a.name, b.name)),
        allCategories,
        categoryDescriptions: CATEGORY_DESCRIPTIONS,
    }
}

// Bytecode size data parsed from markdown report
export interface BytecodeSizeEntry {
    contract_id: string
    contract_name: string
    vm_type: string
    impl_type: string
    size_bytes: number
    vs_smallest: string
}

export interface BytecodeSizeData {
    groups: Array<{
        contract_id: string
        entries: BytecodeSizeEntry[]
    }>
}

export interface BytecodeImplementation {
    name: string
    vm_type: string
    size_bytes: number
    implType: string
}

export interface BytecodeSizeHierarchy {
    implTypes: string[]
    datasets: Array<{
        name: string
        sizes: Record<string, number | null>
        contracts: Array<{
            name: string
            sizes: Record<string, number | null>
            implementations: BytecodeImplementation[]
        }>
    }>
}

/** Infer impl type from contract name suffix (fallback for legacy markdown without Impl Type column). */
function inferImplType(contractName: string, vmType: string): string {
    if (vmType === 'EVM') return 'solidity'
    const lastUnderscore = contractName.lastIndexOf('_')
    if (lastUnderscore === -1) return 'unknown'
    const suffix = contractName.slice(lastUnderscore + 1)
    return suffix === 'pvm' ? 'solidity' : suffix
}

export function getBytecodeComparison(): BytecodeSizeData {
    const reportsDir = join(import.meta.dirname!, '..', 'reports')
    const markdownPath = join(reportsDir, 'bytecode_size_comparison.md')

    try {
        const content = Deno.readTextFileSync(markdownPath)
        const groups: BytecodeSizeData['groups'] = []

        // Parse markdown sections
        const sections = content.split(/^## /m).slice(1) // Split by ## headers, skip first empty

        for (const section of sections) {
            const lines = section.trim().split('\n')
            const headerLine = lines[0]
            const contractId = headerLine.replace(' Implementations', '').trim()

            // Find table rows (skip header and separator)
            const tableLines = lines.filter((line) =>
                line.startsWith('|') && !line.includes('---')
            )
            const dataRows = tableLines.slice(1) // Skip header row

            const entries: BytecodeSizeEntry[] = []
            for (const row of dataRows) {
                const cells = row.split('|').map((c) => c.trim()).filter((c) =>
                    c
                )
                if (cells.length >= 5) {
                    // New format: Contract | VM Type | Impl Type | Size | vs Smallest
                    entries.push({
                        contract_id: contractId,
                        contract_name: cells[0],
                        vm_type: cells[1],
                        impl_type: cells[2],
                        size_bytes: parseInt(cells[3].replace(/,/g, ''), 10),
                        vs_smallest: cells[4],
                    })
                } else if (cells.length >= 4) {
                    // Legacy format without Impl Type — infer from name suffix
                    entries.push({
                        contract_id: contractId,
                        contract_name: cells[0],
                        vm_type: cells[1],
                        impl_type: inferImplType(cells[0], cells[1]),
                        size_bytes: parseInt(cells[2].replace(/,/g, ''), 10),
                        vs_smallest: cells[3],
                    })
                }
            }

            if (entries.length > 0) {
                groups.push({ contract_id: contractId, entries })
            }
        }

        return { groups }
    } catch {
        return { groups: [] }
    }
}

// ─── EVM vs PVM Analysis queries ───

const EVM_TO_RUST: Record<string, string> = {
    DotNS: 'dotns_rust',
    Escrow: 'escrow_rust',
    FungibleCredential: 'fungible_credential_rust',
    KeyRegistry: 'key_registry_rust',
    Log: 'log_rust',
    NonFungibleCredential: 'non_fungible_credential_rust',
    Store: 'store_rust',
}

const NAME_MAP_VALUES = Object.entries(EVM_TO_RUST)
    .map(([evm, rust]) => `('${evm}_evm', '${evm}_pvm', '${rust}')`)
    .join(', ')

// RQ1: Base weight vs metered weight
export interface BaseVsMeteredRow {
    tx_type: string
    avg_base_rt: number
    avg_metered_rt: number
    base_rt_pct: number
    metered_rt_pct: number
    avg_base_pov: number
    avg_metered_pov: number
    base_pov_pct: number | null
    metered_pov_pct: number | null
}

export function getBaseVsMetered(): BaseVsMeteredRow[] {
    return db.prepare(`
        SELECT
            CASE WHEN transaction_name = 'deploy' THEN 'deploy' ELSE 'execution' END as tx_type,
            ROUND(AVG(base_call_weight_ref_time)) as avg_base_rt,
            ROUND(AVG(weight_consumed_ref_time)) as avg_metered_rt,
            ROUND(AVG(base_call_weight_ref_time) * 100.0
                / AVG(base_call_weight_ref_time + weight_consumed_ref_time), 1) as base_rt_pct,
            ROUND(AVG(weight_consumed_ref_time) * 100.0
                / AVG(base_call_weight_ref_time + weight_consumed_ref_time), 1) as metered_rt_pct,
            ROUND(AVG(COALESCE(base_call_weight_proof_size, 0))) as avg_base_pov,
            ROUND(AVG(COALESCE(weight_consumed_proof_size, 0))) as avg_metered_pov,
            ROUND(AVG(COALESCE(base_call_weight_proof_size, 0)) * 100.0
                / NULLIF(AVG(COALESCE(base_call_weight_proof_size, 0) + COALESCE(weight_consumed_proof_size, 0)), 0), 1) as base_pov_pct,
            ROUND(AVG(COALESCE(weight_consumed_proof_size, 0)) * 100.0
                / NULLIF(AVG(COALESCE(base_call_weight_proof_size, 0) + COALESCE(weight_consumed_proof_size, 0)), 0), 1) as metered_pov_pct
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND weight_consumed_ref_time IS NOT NULL
            AND base_call_weight_ref_time IS NOT NULL
            AND (contract_name LIKE '%_evm' OR contract_name LIKE '%_pvm')
        GROUP BY tx_type
        ORDER BY tx_type
    `).all() as unknown as BaseVsMeteredRow[]
}

// RQ1: Cost breakdown by operation category
export interface TopOpsRow {
    category: string
    total_rt: number
    rt_pct: string
    total_pov: number
    pov_pct: string
    calls: number
}

export function getTopOps(deploy: boolean): TopOpsRow[] {
    const txFilter = deploy ? "= 'deploy'" : "<> 'deploy'"
    const catCase = `
        CASE
            WHEN op IN ('SSTORE','set_storage_or_clear','set_storage') THEN 'Storage write'
            WHEN op IN ('SLOAD','get_storage_or_zero','get_storage') THEN 'Storage read'
            WHEN op IN ('CREATE2','instantiate') THEN 'Contract creation'
            WHEN op IN ('CALL','DELEGATECALL','call_evm','delegate_call_evm','call') THEN 'Cross-contract calls'
            WHEN op IN ('KECCAK256','hash_keccak_256') THEN 'Hashing'
            WHEN op IN ('LOG1','LOG2','LOG3','LOG4','deposit_event') THEN 'Events'
            WHEN op IN ('get_immutable_data','set_immutable_data') THEN 'Immutable data'
            ELSE 'Other attributed'
        END`

    const totals = db.prepare(`
        SELECT SUM(weight_consumed_ref_time) as metered_rt,
            SUM(COALESCE(weight_consumed_proof_size, 0)) as metered_pov
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND transaction_name ${txFilter}
            AND weight_consumed_ref_time IS NOT NULL
            AND base_call_weight_ref_time IS NOT NULL
            AND (contract_name LIKE '%_evm' OR contract_name LIKE '%_pvm')
    `).get() as { metered_rt: number; metered_pov: number }

    const cats = db.prepare(`
        SELECT ${catCase} as category,
            SUM(s.weight_cost_ref_time) as total_rt,
            SUM(COALESCE(s.weight_cost_proof_size, 0)) as total_pov,
            COUNT(*) as calls
        FROM transaction_steps s
        JOIN transactions t ON s.hash = t.hash AND s.chain_name = t.chain_name
        WHERE t.chain_name = 'eth-rpc'
            AND t.transaction_name ${txFilter}
            AND t.weight_consumed_ref_time IS NOT NULL
            AND t.base_call_weight_ref_time IS NOT NULL
            AND (t.contract_name LIKE '%_evm' OR t.contract_name LIKE '%_pvm')
        GROUP BY category
        ORDER BY total_rt DESC
    `).all() as {
        category: string
        total_rt: number
        total_pov: number
        calls: number
    }[]

    const attrRt = cats.reduce((s, r) => s + r.total_rt, 0)
    const attrPov = cats.reduce((s, r) => s + r.total_pov, 0)
    const unattrRt = totals.metered_rt - attrRt
    const unattrPov = totals.metered_pov - attrPov

    const rtPct = (v: number) => (v / totals.metered_rt * 100).toFixed(1) + '%'
    const povPct = (v: number) =>
        totals.metered_pov > 0
            ? (v / totals.metered_pov * 100).toFixed(1) + '%'
            : '—'

    const named = cats.filter((r) => r.category !== 'Other attributed')
    const sqlOther = cats.find((r) => r.category === 'Other attributed')
    const top3 = named.slice(0, 3)
    const remainRt = named.slice(3).reduce((s, r) => s + r.total_rt, 0) +
        (sqlOther?.total_rt ?? 0)
    const remainPov = named.slice(3).reduce((s, r) => s + r.total_pov, 0) +
        (sqlOther?.total_pov ?? 0)
    const remainCalls = named.slice(3).reduce((s, r) => s + r.calls, 0) +
        (sqlOther?.calls ?? 0)

    return [
        ...top3.map((r) => ({
            category: r.category,
            total_rt: Math.round(r.total_rt),
            rt_pct: rtPct(r.total_rt),
            total_pov: Math.round(r.total_pov),
            pov_pct: povPct(r.total_pov),
            calls: r.calls,
        })),
        {
            category: 'Other attributed',
            total_rt: Math.round(remainRt),
            rt_pct: rtPct(remainRt),
            total_pov: Math.round(remainPov),
            pov_pct: povPct(remainPov),
            calls: remainCalls,
        },
        {
            category: 'Unattributed',
            total_rt: Math.round(unattrRt),
            rt_pct: rtPct(unattrRt),
            total_pov: Math.round(unattrPov),
            pov_pct: povPct(unattrPov),
            calls: 0,
        },
    ]
}

// RQ2: Execution cost totals (93 pairs)
export interface ExecTotalsRow {
    metric: string
    evm: number
    pvm_sol: number
    diff: string
}

export function getExecTotals(): ExecTotalsRow[] {
    const allRow = db.prepare(`
        SELECT
            COUNT(*) as n,
            SUM(e.weight_consumed_ref_time) as evm_rt,
            SUM(p.weight_consumed_ref_time) as pvm_rt,
            SUM(e.weight_consumed_proof_size) as evm_pov,
            SUM(p.weight_consumed_proof_size) as pvm_pov,
            SUM(COALESCE(e.actual_pov, e.post_dispatch_pov, 0)) as evm_consumed,
            SUM(COALESCE(p.actual_pov, p.post_dispatch_pov, 0)) as pvm_consumed
        FROM transactions e
        JOIN transactions p
            ON REPLACE(e.contract_name, '_evm', '_pvm') = p.contract_name
            AND e.transaction_name = p.transaction_name
            AND e.chain_name = p.chain_name
        WHERE e.chain_name = 'eth-rpc'
            AND e.contract_name LIKE '%_evm'
            AND e.transaction_name <> 'deploy'
            AND e.weight_consumed_ref_time IS NOT NULL
            AND p.weight_consumed_ref_time IS NOT NULL
            AND e.contract_name NOT LIKE '%CoinTool%'
    `).get() as {
        n: number
        evm_rt: number
        pvm_rt: number
        evm_pov: number
        pvm_pov: number
        evm_consumed: number
        pvm_consumed: number
    }

    const fmtPctDiff = (a: number, b: number) =>
        b === 0
            ? '—'
            : `${((a - b) / b * 100) >= 0 ? '+' : ''}${
                ((a - b) / b * 100).toFixed(1)
            }%`

    return [
        {
            metric: 'Metered ref_time',
            evm: Math.round(allRow.evm_rt),
            pvm_sol: Math.round(allRow.pvm_rt),
            diff: fmtPctDiff(allRow.pvm_rt, allRow.evm_rt),
        },
        {
            metric: 'Metered proof_size',
            evm: Math.round(allRow.evm_pov),
            pvm_sol: Math.round(allRow.pvm_pov),
            diff: fmtPctDiff(allRow.pvm_pov, allRow.evm_pov),
        },
        {
            metric: 'Consumed proof_size',
            evm: Math.round(allRow.evm_consumed),
            pvm_sol: Math.round(allRow.pvm_consumed),
            diff: fmtPctDiff(allRow.pvm_consumed, allRow.evm_consumed),
        },
    ]
}

export function getExecTotalsPairCount(): number {
    const row = db.prepare(`
        SELECT COUNT(*) as n
        FROM transactions e
        JOIN transactions p
            ON REPLACE(e.contract_name, '_evm', '_pvm') = p.contract_name
            AND e.transaction_name = p.transaction_name
            AND e.chain_name = p.chain_name
        WHERE e.chain_name = 'eth-rpc'
            AND e.contract_name LIKE '%_evm'
            AND e.transaction_name <> 'deploy'
            AND e.weight_consumed_ref_time IS NOT NULL
            AND p.weight_consumed_ref_time IS NOT NULL
            AND e.contract_name NOT LIKE '%CoinTool%'
    `).get() as { n: number }
    return row.n
}

// RQ2: Three-way comparison (46 pairs)
export interface ThreeWayTotalsRow {
    metric: string
    evm: number
    pvm_sol: number
    vs_evm_sol: string
    pvm_rust: number
    vs_evm_rust: string
}

export function getThreeWayTotals(): {
    rows: ThreeWayTotalsRow[]
    pairCount: number
} {
    const row7 = db.prepare(`
        WITH name_map(evm_name, pvm_name, rust_name) AS (VALUES ${NAME_MAP_VALUES})
        SELECT
            COUNT(*) as n,
            SUM(e.weight_consumed_ref_time) as evm_rt,
            SUM(p.weight_consumed_ref_time) as pvm_rt,
            SUM(r.weight_consumed_ref_time) as rust_rt,
            SUM(e.weight_consumed_proof_size) as evm_pov,
            SUM(p.weight_consumed_proof_size) as pvm_pov,
            SUM(r.weight_consumed_proof_size) as rust_pov,
            SUM(COALESCE(e.actual_pov, e.post_dispatch_pov, 0)) as evm_consumed,
            SUM(COALESCE(p.actual_pov, p.post_dispatch_pov, 0)) as pvm_consumed,
            SUM(COALESCE(r.actual_pov, r.post_dispatch_pov, 0)) as rust_consumed
        FROM name_map nm
        JOIN transactions e ON e.contract_name = nm.evm_name AND e.chain_name = 'eth-rpc'
            AND e.transaction_name <> 'deploy' AND e.weight_consumed_ref_time IS NOT NULL
        JOIN transactions p ON p.contract_name = nm.pvm_name AND p.chain_name = e.chain_name
            AND p.transaction_name = e.transaction_name AND p.weight_consumed_ref_time IS NOT NULL
        JOIN transactions r ON r.contract_name = nm.rust_name AND r.chain_name = e.chain_name
            AND r.transaction_name = e.transaction_name AND r.weight_consumed_ref_time IS NOT NULL
    `).get() as {
        n: number
        evm_rt: number
        pvm_rt: number
        rust_rt: number
        evm_pov: number
        pvm_pov: number
        rust_pov: number
        evm_consumed: number
        pvm_consumed: number
        rust_consumed: number
    }

    const fmtPctDiff = (a: number, b: number) =>
        b === 0
            ? '—'
            : `${((a - b) / b * 100) >= 0 ? '+' : ''}${
                ((a - b) / b * 100).toFixed(1)
            }%`

    return {
        pairCount: row7.n,
        rows: [
            {
                metric: 'Metered ref_time',
                evm: Math.round(row7.evm_rt),
                pvm_sol: Math.round(row7.pvm_rt),
                vs_evm_sol: fmtPctDiff(row7.pvm_rt, row7.evm_rt),
                pvm_rust: Math.round(row7.rust_rt),
                vs_evm_rust: fmtPctDiff(row7.rust_rt, row7.evm_rt),
            },
            {
                metric: 'Metered proof_size',
                evm: Math.round(row7.evm_pov),
                pvm_sol: Math.round(row7.pvm_pov),
                vs_evm_sol: fmtPctDiff(row7.pvm_pov, row7.evm_pov),
                pvm_rust: Math.round(row7.rust_pov),
                vs_evm_rust: fmtPctDiff(row7.rust_pov, row7.evm_pov),
            },
            {
                metric: 'Consumed proof_size',
                evm: Math.round(row7.evm_consumed),
                pvm_sol: Math.round(row7.pvm_consumed),
                vs_evm_sol: fmtPctDiff(row7.pvm_consumed, row7.evm_consumed),
                pvm_rust: Math.round(row7.rust_consumed),
                vs_evm_rust: fmtPctDiff(row7.rust_consumed, row7.evm_consumed),
            },
        ],
    }
}

// RQ2: Per-transaction medians
export interface MedianRow {
    comparison: string
    median_ref_time: string
    txs_cheaper_rt: string
    median_proof_size: string
    txs_cheaper_pov: string
    median_consumed: string
    txs_cheaper_consumed: string
}

export function getPerTxMedians(): MedianRow[] {
    const pct = (n: number) => `${n >= 0 ? '+' : ''}${n.toFixed(1)}%`
    const median = (arr: number[]) => {
        if (arr.length === 0) return 0
        const s = [...arr].sort((a, b) => a - b)
        return s[Math.floor(s.length / 2)]
    }

    const solPairPcts = db.prepare(`
        SELECT
            ROUND((p.weight_consumed_ref_time - e.weight_consumed_ref_time) * 100.0
                / e.weight_consumed_ref_time, 1) as rt_pct,
            ROUND((p.weight_consumed_proof_size - e.weight_consumed_proof_size) * 100.0
                / e.weight_consumed_proof_size, 1) as pov_pct,
            ROUND((COALESCE(p.actual_pov, p.post_dispatch_pov) - COALESCE(e.actual_pov, e.post_dispatch_pov)) * 100.0
                / NULLIF(COALESCE(e.actual_pov, e.post_dispatch_pov), 0), 1) as consumed_pct
        FROM transactions e
        JOIN transactions p ON p.contract_name = REPLACE(e.contract_name, '_evm', '_pvm')
            AND p.chain_name = e.chain_name AND p.transaction_name = e.transaction_name
            AND p.weight_consumed_ref_time IS NOT NULL
        WHERE e.chain_name = 'eth-rpc'
            AND e.contract_name LIKE '%_evm'
            AND e.contract_name <> 'CoinTool_App_evm'
            AND e.transaction_name <> 'deploy'
            AND e.weight_consumed_ref_time IS NOT NULL
    `).all() as { rt_pct: number; pov_pct: number; consumed_pct: number | null }[]

    const rustPairPcts = db.prepare(`
        WITH name_map(evm_name, pvm_name, rust_name) AS (VALUES ${NAME_MAP_VALUES})
        SELECT
            ROUND((r.weight_consumed_ref_time - e.weight_consumed_ref_time) * 100.0
                / e.weight_consumed_ref_time, 1) as rt_pct,
            ROUND((r.weight_consumed_proof_size - e.weight_consumed_proof_size) * 100.0
                / e.weight_consumed_proof_size, 1) as pov_pct,
            ROUND((COALESCE(r.actual_pov, r.post_dispatch_pov) - COALESCE(e.actual_pov, e.post_dispatch_pov)) * 100.0
                / NULLIF(COALESCE(e.actual_pov, e.post_dispatch_pov), 0), 1) as consumed_pct
        FROM name_map nm
        JOIN transactions e ON e.contract_name = nm.evm_name AND e.chain_name = 'eth-rpc'
            AND e.transaction_name <> 'deploy' AND e.weight_consumed_ref_time IS NOT NULL
        JOIN transactions r ON r.contract_name = nm.rust_name AND r.chain_name = e.chain_name
            AND r.transaction_name = e.transaction_name AND r.weight_consumed_ref_time IS NOT NULL
    `).all() as { rt_pct: number; pov_pct: number; consumed_pct: number | null }[]

    const rustVsSolPcts = db.prepare(`
        WITH name_map(evm_name, pvm_name, rust_name) AS (VALUES ${NAME_MAP_VALUES})
        SELECT
            ROUND((r.weight_consumed_ref_time - p.weight_consumed_ref_time) * 100.0
                / p.weight_consumed_ref_time, 1) as rt_pct,
            ROUND((COALESCE(r.weight_consumed_proof_size,0) - COALESCE(p.weight_consumed_proof_size,0)) * 100.0
                / NULLIF(COALESCE(p.weight_consumed_proof_size,0), 0), 1) as pov_pct,
            ROUND((COALESCE(r.actual_pov, r.post_dispatch_pov) - COALESCE(p.actual_pov, p.post_dispatch_pov)) * 100.0
                / NULLIF(COALESCE(p.actual_pov, p.post_dispatch_pov), 0), 1) as consumed_pct
        FROM name_map nm
        JOIN transactions e ON e.contract_name = nm.evm_name AND e.chain_name = 'eth-rpc'
            AND e.transaction_name <> 'deploy' AND e.weight_consumed_ref_time IS NOT NULL
        JOIN transactions p ON p.contract_name = nm.pvm_name AND p.chain_name = e.chain_name
            AND p.transaction_name = e.transaction_name AND p.weight_consumed_ref_time IS NOT NULL
        JOIN transactions r ON r.contract_name = nm.rust_name AND r.chain_name = e.chain_name
            AND r.transaction_name = e.transaction_name AND r.weight_consumed_ref_time IS NOT NULL
    `).all() as { rt_pct: number; pov_pct: number | null; consumed_pct: number | null }[]

    const solRts = solPairPcts.map((r) => r.rt_pct).sort((a, b) => a - b)
    const solPovs = solPairPcts.map((r) => r.pov_pct).sort((a, b) => a - b)
    const solConsumed = solPairPcts.filter((r) => r.consumed_pct != null).map((r) => r.consumed_pct!).sort((a, b) => a - b)
    const rustRts = rustPairPcts.map((r) => r.rt_pct).sort((a, b) => a - b)
    const rustPovs = rustPairPcts.map((r) => r.pov_pct).sort((a, b) => a - b)
    const rustConsumed = rustPairPcts.filter((r) => r.consumed_pct != null).map((r) => r.consumed_pct!).sort((a, b) => a - b)
    const rvsRts = rustVsSolPcts.map((r) => r.rt_pct).sort((a, b) => a - b)
    const rvsPovs = rustVsSolPcts.filter((r) => r.pov_pct != null).map((r) =>
        r.pov_pct!
    ).sort((a, b) => a - b)
    const rvsConsumed = rustVsSolPcts.filter((r) => r.consumed_pct != null).map((r) => r.consumed_pct!).sort((a, b) => a - b)

    const fmtConsumed = (arr: number[]) => arr.length > 0 ? pct(median(arr)) : '—'
    const fmtCheaper = (arr: number[]) => arr.length > 0
        ? `${arr.filter((p) => p < 0).length}/${arr.length}`
        : '—'

    return [
        {
            comparison: `PVM/Sol vs EVM (${solRts.length} txs)`,
            median_ref_time: pct(median(solRts)),
            txs_cheaper_rt: `${
                solRts.filter((p) => p < 0).length
            }/${solRts.length}`,
            median_proof_size: pct(median(solPovs)),
            txs_cheaper_pov: `${
                solPovs.filter((p) => p < 0).length
            }/${solPovs.length}`,
            median_consumed: fmtConsumed(solConsumed),
            txs_cheaper_consumed: fmtCheaper(solConsumed),
        },
        {
            comparison: `PVM/Rust vs EVM (${rustRts.length} txs)`,
            median_ref_time: pct(median(rustRts)),
            txs_cheaper_rt: `${
                rustRts.filter((p) => p < 0).length
            }/${rustRts.length}`,
            median_proof_size: pct(median(rustPovs)),
            txs_cheaper_pov: `${
                rustPovs.filter((p) => p < 0).length
            }/${rustPovs.length}`,
            median_consumed: fmtConsumed(rustConsumed),
            txs_cheaper_consumed: fmtCheaper(rustConsumed),
        },
        {
            comparison: `PVM/Rust vs PVM/Sol (${rvsRts.length} txs)`,
            median_ref_time: pct(median(rvsRts)),
            txs_cheaper_rt: `${
                rvsRts.filter((p) => p < 0).length
            }/${rvsRts.length}`,
            median_proof_size: rvsPovs.length > 0 ? pct(median(rvsPovs)) : '—',
            txs_cheaper_pov: rvsPovs.length > 0
                ? `${rvsPovs.filter((p) => p < 0).length}/${rvsPovs.length}`
                : '—',
            median_consumed: fmtConsumed(rvsConsumed),
            txs_cheaper_consumed: fmtCheaper(rvsConsumed),
        },
    ]
}

// RQ2: Deploy totals
export interface DeployTotalsRow {
    metric: string
    evm: number
    pvm_sol: number
    vs_evm: string
}

export interface DeployThreeWayRow {
    metric: string
    evm: number
    pvm_sol: number
    vs_evm_sol: string
    pvm_rust: number
    vs_evm_rust: string
}

interface DeployRow {
    contract: string
    base_rt: number
    metered_rt: number
    base_pov: number
    metered_pov: number
    consumed: number
}

export function getDeployTotals(): {
    pairCount: number
    rows: DeployTotalsRow[]
} {
    const deploys = db.prepare(`
        SELECT REPLACE(contract_name, '_evm', '') as contract,
            base_call_weight_ref_time as base_rt,
            weight_consumed_ref_time as metered_rt,
            COALESCE(base_call_weight_proof_size, 0) as base_pov,
            COALESCE(weight_consumed_proof_size, 0) as metered_pov,
            COALESCE(actual_pov, post_dispatch_pov, 0) as consumed
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND contract_name LIKE '%_evm'
            AND transaction_name = 'deploy'
            AND weight_consumed_ref_time IS NOT NULL
            AND base_call_weight_ref_time IS NOT NULL
    `).all() as unknown as DeployRow[]

    const pvmMap = new Map<string, DeployRow>()
    for (
        const r of db.prepare(`
        SELECT REPLACE(contract_name, '_pvm', '') as contract,
            base_call_weight_ref_time as base_rt,
            weight_consumed_ref_time as metered_rt,
            COALESCE(base_call_weight_proof_size, 0) as base_pov,
            COALESCE(weight_consumed_proof_size, 0) as metered_pov,
            COALESCE(actual_pov, post_dispatch_pov, 0) as consumed
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND contract_name LIKE '%_pvm'
            AND transaction_name = 'deploy'
            AND weight_consumed_ref_time IS NOT NULL
    `).all() as unknown as DeployRow[]
    ) {
        pvmMap.set(r.contract, r)
    }

    const solPairs = deploys.filter((r) => pvmMap.has(r.contract))
    const fmtPctDiff = (a: number, b: number) =>
        b === 0
            ? '—'
            : `${((a - b) / b * 100) >= 0 ? '+' : ''}${
                ((a - b) / b * 100).toFixed(1)
            }%`

    const sumField = (rows: DeployRow[], f: (r: DeployRow) => number) =>
        rows.reduce((s, r) => s + f(r), 0)
    const sumPvm = (rows: DeployRow[], f: (r: DeployRow) => number) =>
        rows.reduce((s, r) => s + f(pvmMap.get(r.contract)!), 0)

    return {
        pairCount: solPairs.length,
        rows: [
            {
                metric: 'Base ref_time',
                evm: Math.round(sumField(solPairs, (r) => r.base_rt)),
                pvm_sol: Math.round(sumPvm(solPairs, (r) => r.base_rt)),
                vs_evm: fmtPctDiff(
                    sumPvm(solPairs, (r) => r.base_rt),
                    sumField(solPairs, (r) => r.base_rt),
                ),
            },
            {
                metric: 'Metered ref_time',
                evm: Math.round(sumField(solPairs, (r) => r.metered_rt)),
                pvm_sol: Math.round(sumPvm(solPairs, (r) => r.metered_rt)),
                vs_evm: fmtPctDiff(
                    sumPvm(solPairs, (r) => r.metered_rt),
                    sumField(solPairs, (r) => r.metered_rt),
                ),
            },
            {
                metric: 'Consumed proof_size',
                evm: Math.round(sumField(solPairs, (r) => r.consumed)),
                pvm_sol: Math.round(sumPvm(solPairs, (r) => r.consumed)),
                vs_evm: fmtPctDiff(
                    sumPvm(solPairs, (r) => r.consumed),
                    sumField(solPairs, (r) => r.consumed),
                ),
            },
        ],
    }
}

export function getDeployThreeWay(): {
    pairCount: number
    rows: DeployThreeWayRow[]
} {
    const deploys = db.prepare(`
        SELECT REPLACE(contract_name, '_evm', '') as contract,
            base_call_weight_ref_time as base_rt,
            weight_consumed_ref_time as metered_rt,
            COALESCE(base_call_weight_proof_size, 0) as base_pov,
            COALESCE(weight_consumed_proof_size, 0) as metered_pov,
            COALESCE(actual_pov, post_dispatch_pov, 0) as consumed
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND contract_name LIKE '%_evm'
            AND transaction_name = 'deploy'
            AND weight_consumed_ref_time IS NOT NULL
            AND base_call_weight_ref_time IS NOT NULL
    `).all() as unknown as DeployRow[]

    const pvmMap = new Map<string, DeployRow>()
    for (
        const r of db.prepare(`
        SELECT REPLACE(contract_name, '_pvm', '') as contract,
            base_call_weight_ref_time as base_rt,
            weight_consumed_ref_time as metered_rt,
            COALESCE(base_call_weight_proof_size, 0) as base_pov,
            COALESCE(weight_consumed_proof_size, 0) as metered_pov,
            COALESCE(actual_pov, post_dispatch_pov, 0) as consumed
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND contract_name LIKE '%_pvm'
            AND transaction_name = 'deploy'
            AND weight_consumed_ref_time IS NOT NULL
    `).all() as unknown as DeployRow[]
    ) {
        pvmMap.set(r.contract, r)
    }

    const rustToEvm: Record<string, string> = {}
    for (const [evmBase, rustName] of Object.entries(EVM_TO_RUST)) {
        rustToEvm[rustName] = evmBase
    }
    const extraRustDeploy: Record<string, string> = {
        fibonacci_rust: 'Fibonacci',
        simple_token_no_alloc_rust: 'SimpleToken',
    }
    const allRustToEvm = { ...rustToEvm, ...extraRustDeploy }

    const rustMap = new Map<string, DeployRow>()
    for (
        const r of db.prepare(`
        SELECT contract_name as contract,
            base_call_weight_ref_time as base_rt,
            weight_consumed_ref_time as metered_rt,
            COALESCE(base_call_weight_proof_size, 0) as base_pov,
            COALESCE(weight_consumed_proof_size, 0) as metered_pov,
            COALESCE(actual_pov, post_dispatch_pov, 0) as consumed
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND contract_name LIKE '%_rust'
            AND transaction_name = 'deploy'
            AND weight_consumed_ref_time IS NOT NULL
    `).all() as unknown as DeployRow[]
    ) {
        const evmBase = allRustToEvm[r.contract]
        if (evmBase && !rustMap.has(evmBase)) rustMap.set(evmBase, r)
    }

    const polkadotContracts = new Set(Object.keys(EVM_TO_RUST))
    const rustPairs = deploys.filter((r) =>
        polkadotContracts.has(r.contract) && rustMap.has(r.contract) &&
        pvmMap.has(r.contract)
    )

    if (rustPairs.length === 0) return { pairCount: 0, rows: [] }

    const fmtPctDiff = (a: number, b: number) =>
        b === 0
            ? '—'
            : `${((a - b) / b * 100) >= 0 ? '+' : ''}${
                ((a - b) / b * 100).toFixed(1)
            }%`
    const sumField = (rows: DeployRow[], f: (r: DeployRow) => number) =>
        rows.reduce((s, r) => s + f(r), 0)
    const sumPvm = (rows: DeployRow[], f: (r: DeployRow) => number) =>
        rows.reduce((s, r) => s + f(pvmMap.get(r.contract)!), 0)
    const sumRust = (rows: DeployRow[], f: (r: DeployRow) => number) =>
        rows.reduce((s, r) => s + f(rustMap.get(r.contract)!), 0)

    const makeRow = (
        metric: string,
        evm: number,
        sol: number,
        rust: number,
    ): DeployThreeWayRow => ({
        metric,
        evm: Math.round(evm),
        pvm_sol: Math.round(sol),
        vs_evm_sol: fmtPctDiff(sol, evm),
        pvm_rust: Math.round(rust),
        vs_evm_rust: fmtPctDiff(rust, evm),
    })

    return {
        pairCount: rustPairs.length,
        rows: [
            makeRow(
                'Base ref_time',
                sumField(rustPairs, (r) => r.base_rt),
                sumPvm(rustPairs, (r) => r.base_rt),
                sumRust(rustPairs, (r) => r.base_rt),
            ),
            makeRow(
                'Metered ref_time',
                sumField(rustPairs, (r) => r.metered_rt),
                sumPvm(rustPairs, (r) => r.metered_rt),
                sumRust(rustPairs, (r) => r.metered_rt),
            ),
            makeRow(
                'Metered proof_size',
                sumField(rustPairs, (r) => r.metered_pov),
                sumPvm(rustPairs, (r) => r.metered_pov),
                sumRust(rustPairs, (r) => r.metered_pov),
            ),
            makeRow(
                'Consumed proof_size',
                sumField(rustPairs, (r) => r.consumed),
                sumPvm(rustPairs, (r) => r.consumed),
                sumRust(rustPairs, (r) => r.consumed),
            ),
        ],
    }
}

// RQ3: Per-call syscall costs across VMs
export interface SyscallCostRow {
    operation: string
    evm_avg: number
    pvm_sol_avg: string
    pvm_rust_avg: string
    evm_vs_sol: string
    evm_vs_rust: string
}

function avgSyscallCost(
    ops: string[],
    vmFilter: string,
): { avg: number; calls: number } | null {
    const placeholders = ops.map(() => '?').join(',')
    const row = db.prepare(`
        SELECT ROUND(AVG(s.weight_cost_ref_time)) as avg, COUNT(*) as calls
        FROM transaction_steps s
        JOIN transactions t ON s.hash = t.hash AND s.chain_name = t.chain_name
        WHERE t.chain_name = 'eth-rpc'
            AND t.transaction_name <> 'deploy'
            AND t.contract_name LIKE ?
            AND s.op IN (${placeholders})
    `).get(vmFilter, ...ops) as { avg: number; calls: number } | null
    return row && row.calls > 0 ? row : null
}

export function getSyscallCosts(): SyscallCostRow[] {
    const pctFmt = (n: number) => `${n >= 0 ? '+' : ''}${n.toFixed(1)}%`
    const ops = [
        {
            label: 'Storage write',
            evm: ['SSTORE'],
            pvmSol: ['set_storage_or_clear'],
            pvmRust: ['set_storage'],
        },
        {
            label: 'Storage read',
            evm: ['SLOAD'],
            pvmSol: ['get_storage_or_zero'],
            pvmRust: ['get_storage'],
        },
        {
            label: 'Keccak256',
            evm: ['KECCAK256'],
            pvmSol: ['hash_keccak_256'],
            pvmRust: ['hash_keccak_256'],
        },
        {
            label: 'Event',
            evm: ['LOG1', 'LOG2', 'LOG3', 'LOG4'],
            pvmSol: ['deposit_event'],
            pvmRust: ['deposit_event'],
        },
        {
            label: 'Cross-contract call',
            evm: ['CALL', 'DELEGATECALL'],
            pvmSol: ['call_evm', 'delegate_call_evm'],
            pvmRust: ['call_evm', 'delegate_call_evm', 'call'],
        },
    ]

    return ops.map((op) => {
        const evm = avgSyscallCost(op.evm, '%_evm')
        const sol = avgSyscallCost(op.pvmSol, '%_pvm')
        const rust = avgSyscallCost(op.pvmRust, '%_rust')
        if (!evm) return null
        return {
            operation: op.label,
            evm_avg: evm.avg,
            pvm_sol_avg: sol ? sol.avg.toLocaleString() : '—',
            pvm_rust_avg: rust ? rust.avg.toLocaleString() : '—',
            evm_vs_sol: sol ? pctFmt((sol.avg - evm.avg) / evm.avg * 100) : '—',
            evm_vs_rust: rust
                ? pctFmt((rust.avg - evm.avg) / evm.avg * 100)
                : '—',
        }
    }).filter((r): r is SyscallCostRow => r !== null)
}

// RQ3: Cost decomposition (7 polkadot-contracts, three-way)
export interface CostDecompositionRow {
    category: string
    evm_total: string
    evm_avg: string
    pvm_sol_total: string
    pvm_sol_avg: string
    rust_total: string
    rust_avg: string
}

export function getCostDecomposition7(): CostDecompositionRow[] {
    type CatRow = { category: string; rt: number; pov: number; calls: number }

    const evmNames = Object.keys(EVM_TO_RUST).map((n) => `'${n}_evm'`).join(',')
    const pvmNames = Object.keys(EVM_TO_RUST).map((n) => `'${n}_pvm'`).join(',')
    const rustNames = Object.values(EVM_TO_RUST).map((n) => `'${n}'`).join(',')

    const queryCats = (nameList: string) =>
        db.prepare(`
        SELECT
            CASE
                WHEN s.op IN ('SSTORE', 'set_storage_or_clear', 'set_storage') THEN 'Storage write'
                WHEN s.op IN ('SLOAD', 'get_storage_or_zero', 'get_storage') THEN 'Storage read'
                WHEN s.op IN ('KECCAK256', 'hash_keccak_256') THEN 'Keccak256'
                WHEN s.op IN ('LOG1','LOG2','LOG3','LOG4','deposit_event') THEN 'Events'
                WHEN s.op IN ('CALL','DELEGATECALL','call','call_evm','delegate_call_evm') THEN 'Cross-contract calls'
                WHEN s.op IN ('get_immutable_data','set_immutable_data') THEN 'Immutable data'
                ELSE 'Other'
            END as category,
            SUM(s.weight_cost_ref_time) as rt,
            SUM(s.weight_cost_proof_size) as pov,
            COUNT(*) as calls
        FROM transaction_steps s
        JOIN transactions t ON s.hash = t.hash AND s.chain_name = t.chain_name
        WHERE t.chain_name = 'eth-rpc'
            AND t.transaction_name <> 'deploy'
            AND t.contract_name IN (${nameList})
            AND t.weight_consumed_ref_time IS NOT NULL
        GROUP BY category
    `).all() as CatRow[]

    const queryTotals = (nameList: string) =>
        db.prepare(`
        SELECT SUM(weight_consumed_ref_time) as total_rt, SUM(weight_consumed_proof_size) as total_pov
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND transaction_name <> 'deploy'
            AND contract_name IN (${nameList})
            AND weight_consumed_ref_time IS NOT NULL
    `).get() as { total_rt: number; total_pov: number }

    const evmCats = queryCats(evmNames)
    const pvmCats = queryCats(pvmNames)
    const rustCats = queryCats(rustNames)
    const evmTotals = queryTotals(evmNames)
    const pvmTotals = queryTotals(pvmNames)
    const rustTotals = queryTotals(rustNames)

    const sumField = (cats: CatRow[], field: 'rt' | 'pov') =>
        cats.reduce((s, c) => s + c[field], 0)
    const evmAttrRt = sumField(evmCats, 'rt')
    const pvmAttrRt = sumField(pvmCats, 'rt')
    const rustAttrRt = sumField(rustCats, 'rt')
    const evmAttrPov = sumField(evmCats, 'pov')
    const pvmAttrPov = sumField(pvmCats, 'pov')
    const rustAttrPov = sumField(rustCats, 'pov')

    const catMap = (cats: CatRow[]) => {
        const m = new Map<string, CatRow>()
        for (const c of cats) m.set(c.category, c)
        return m
    }
    const evmMap = catMap(evmCats)
    const pvmMap = catMap(pvmCats)
    const rustMap = catMap(rustCats)

    const fmt = (n: number) => n.toLocaleString()
    const fmtTotal = (m: Map<string, CatRow>, cat: string): string => {
        const c = m.get(cat)
        if (!c) return '—'
        return `${fmt(Math.round(c.rt / 1_000_000))}M / ${
            fmt(Math.round(c.pov / 1_000))
        }K (${fmt(c.calls)})`
    }
    const fmtAvg = (m: Map<string, CatRow>, cat: string): string => {
        const c = m.get(cat)
        if (!c) return '—'
        return `${fmt(Math.round(c.rt / c.calls / 1_000_000))}M / ${
            fmt(Math.round(c.pov / c.calls / 1_000))
        }K`
    }

    const mainCats = [
        'Storage write',
        'Storage read',
        'Keccak256',
        'Events',
        'Cross-contract calls',
    ]
    return [
        ...mainCats.map((cat) => ({
            category: cat,
            evm_total: fmtTotal(evmMap, cat),
            evm_avg: fmtAvg(evmMap, cat),
            pvm_sol_total: fmtTotal(pvmMap, cat),
            pvm_sol_avg: fmtAvg(pvmMap, cat),
            rust_total: fmtTotal(rustMap, cat),
            rust_avg: fmtAvg(rustMap, cat),
        })),
        {
            category: 'Immutable data',
            evm_total: '—',
            evm_avg: '—',
            pvm_sol_total: fmtTotal(pvmMap, 'Immutable data'),
            pvm_sol_avg: fmtAvg(pvmMap, 'Immutable data'),
            rust_total: '—',
            rust_avg: '—',
        },
        {
            category: 'Other syscalls',
            evm_total: '—',
            evm_avg: '—',
            pvm_sol_total: '—',
            pvm_sol_avg: '—',
            rust_total: fmtTotal(rustMap, 'Other'),
            rust_avg: fmtAvg(rustMap, 'Other'),
        },
        {
            category: 'EVM opcodes',
            evm_total: fmtTotal(evmMap, 'Other'),
            evm_avg: fmtAvg(evmMap, 'Other'),
            pvm_sol_total: '—',
            pvm_sol_avg: '—',
            rust_total: '—',
            rust_avg: '—',
        },
        {
            category: 'Unattributed',
            evm_total: `${
                fmt(Math.round((evmTotals.total_rt - evmAttrRt) / 1_000_000))
            }M / ${
                fmt(Math.round((evmTotals.total_pov - evmAttrPov) / 1_000))
            }K`,
            evm_avg: '',
            pvm_sol_total: `${
                fmt(Math.round((pvmTotals.total_rt - pvmAttrRt) / 1_000_000))
            }M / ${
                fmt(Math.round((pvmTotals.total_pov - pvmAttrPov) / 1_000))
            }K`,
            pvm_sol_avg: '',
            rust_total: `${
                fmt(Math.round((rustTotals.total_rt - rustAttrRt) / 1_000_000))
            }M / ${
                fmt(Math.round((rustTotals.total_pov - rustAttrPov) / 1_000))
            }K`,
            rust_avg: '',
        },
        {
            category: 'Total metered',
            evm_total: `${fmt(Math.round(evmTotals.total_rt / 1_000_000))}M / ${
                fmt(Math.round(evmTotals.total_pov / 1_000))
            }K`,
            evm_avg: '',
            pvm_sol_total: `${
                fmt(Math.round(pvmTotals.total_rt / 1_000_000))
            }M / ${fmt(Math.round(pvmTotals.total_pov / 1_000))}K`,
            pvm_sol_avg: '',
            rust_total: `${
                fmt(Math.round(rustTotals.total_rt / 1_000_000))
            }M / ${fmt(Math.round(rustTotals.total_pov / 1_000))}K`,
            rust_avg: '',
        },
    ]
}

// RQ3: PVM cost gap decomposition
export interface CostGapRow {
    source: string
    ref_time_delta: string
    rt_pct_of_gap: string
    proof_size_delta: string
    pov_pct_of_gap: string
}

export function getCostGapDecomposition(): {
    pairCount: number
    totals: {
        evm_rt: number
        pvm_rt: number
        evm_pov: number
        pvm_pov: number
        evm_consumed: number
        pvm_consumed: number
        rt_diff: string
        pov_diff: string
        consumed_diff: string
    }
    sources: CostGapRow[]
} {
    const raw = db.prepare(`
        WITH matched AS (
            SELECT
                e.hash as e_hash, p.hash as p_hash, e.chain_name as chain,
                e.weight_consumed_ref_time as e_rt,
                p.weight_consumed_ref_time as p_rt,
                e.weight_consumed_proof_size as e_pov,
                p.weight_consumed_proof_size as p_pov,
                COALESCE(e.actual_pov, e.post_dispatch_pov, 0) as e_consumed,
                COALESCE(p.actual_pov, p.post_dispatch_pov, 0) as p_consumed
            FROM transactions e
            JOIN transactions p
                ON REPLACE(e.contract_name, '_evm', '_pvm') = p.contract_name
                AND e.transaction_name = p.transaction_name
                AND e.chain_name = p.chain_name
            WHERE e.chain_name = 'eth-rpc'
                AND e.contract_name LIKE '%_evm'
                AND e.transaction_name != 'deploy'
                AND e.weight_consumed_ref_time IS NOT NULL
                AND p.weight_consumed_ref_time IS NOT NULL
                AND e.contract_name NOT LIKE '%CoinTool%'
        ),
        per_pair AS (
            SELECT m.*,
                COALESCE(es.attr_rt, 0) as e_attr_rt,
                COALESCE(es.attr_pov, 0) as e_attr_pov,
                COALESCE(ps.attr_rt, 0) as p_attr_rt,
                COALESCE(ps.attr_pov, 0) as p_attr_pov,
                COALESCE(ps.call_rt, 0) as p_call_rt,
                COALESCE(ps.call_pov, 0) as p_call_pov,
                COALESCE(es.call_rt, 0) as e_call_rt,
                COALESCE(es.call_pov, 0) as e_call_pov,
                COALESCE(ps.immut_rt, 0) as p_immut_rt,
                COALESCE(ps.immut_pov, 0) as p_immut_pov,
                COALESCE(es.immut_rt, 0) as e_immut_rt,
                COALESCE(es.immut_pov, 0) as e_immut_pov
            FROM matched m
            LEFT JOIN (
                SELECT hash, chain_name,
                    SUM(weight_cost_ref_time) as attr_rt,
                    SUM(weight_cost_proof_size) as attr_pov,
                    SUM(CASE WHEN op IN ('CALL','DELEGATECALL','call_evm','delegate_call_evm') THEN weight_cost_ref_time ELSE 0 END) as call_rt,
                    SUM(CASE WHEN op IN ('CALL','DELEGATECALL','call_evm','delegate_call_evm') THEN weight_cost_proof_size ELSE 0 END) as call_pov,
                    SUM(CASE WHEN op IN ('get_immutable_data','set_immutable_data') THEN weight_cost_ref_time ELSE 0 END) as immut_rt,
                    SUM(CASE WHEN op IN ('get_immutable_data','set_immutable_data') THEN weight_cost_proof_size ELSE 0 END) as immut_pov
                FROM transaction_steps GROUP BY hash, chain_name
            ) es ON es.hash = m.e_hash AND es.chain_name = m.chain
            LEFT JOIN (
                SELECT hash, chain_name,
                    SUM(weight_cost_ref_time) as attr_rt,
                    SUM(weight_cost_proof_size) as attr_pov,
                    SUM(CASE WHEN op IN ('CALL','DELEGATECALL','call_evm','delegate_call_evm') THEN weight_cost_ref_time ELSE 0 END) as call_rt,
                    SUM(CASE WHEN op IN ('CALL','DELEGATECALL','call_evm','delegate_call_evm') THEN weight_cost_proof_size ELSE 0 END) as call_pov,
                    SUM(CASE WHEN op IN ('get_immutable_data','set_immutable_data') THEN weight_cost_ref_time ELSE 0 END) as immut_rt,
                    SUM(CASE WHEN op IN ('get_immutable_data','set_immutable_data') THEN weight_cost_proof_size ELSE 0 END) as immut_pov
                FROM transaction_steps GROUP BY hash, chain_name
            ) ps ON ps.hash = m.p_hash AND ps.chain_name = m.chain
        )
        SELECT
            COUNT(*) as n_pairs,
            SUM(e_rt) as sum_evm_rt,
            SUM(p_rt) as sum_pvm_rt,
            SUM(e_pov) as sum_evm_pov,
            SUM(p_pov) as sum_pvm_pov,
            SUM(e_consumed) as sum_evm_consumed,
            SUM(p_consumed) as sum_pvm_consumed,
            SUM(p_rt - e_rt) as rt_gap,
            SUM(p_pov - e_pov) as pov_gap,
            SUM(p_consumed - e_consumed) as consumed_gap,
            SUM((p_rt - p_attr_rt) - (e_rt - e_attr_rt)) as unattr_rt,
            SUM((p_pov - p_attr_pov) - (e_pov - e_attr_pov)) as unattr_pov,
            SUM(p_call_rt - e_call_rt) as call_rt,
            SUM(p_call_pov - e_call_pov) as call_pov,
            SUM(p_immut_rt - e_immut_rt) as immut_rt,
            SUM(p_immut_pov - e_immut_pov) as immut_pov
        FROM per_pair
    `).get() as Record<string, number>

    const fmt = (n: number) => n.toLocaleString()
    const fmtDelta = (n: number) => (n >= 0 ? '+' : '') + fmt(Math.round(n))
    const pctFmt = (n: number) => `${n >= 0 ? '+' : ''}${n.toFixed(1)}%`
    const fmtPctOfGap = (val: number, gap: number) =>
        gap === 0 ? '—' : (val / gap * 100).toFixed(1) + '%'

    const rtGap = raw.rt_gap
    const povGap = raw.pov_gap
    const consumedGap = raw.consumed_gap
    const otherRt = rtGap - raw.unattr_rt - raw.call_rt - raw.immut_rt
    const otherPov = povGap - raw.unattr_pov - raw.call_pov - raw.immut_pov

    return {
        pairCount: raw.n_pairs,
        totals: {
            evm_rt: Math.round(raw.sum_evm_rt),
            pvm_rt: Math.round(raw.sum_pvm_rt),
            evm_pov: Math.round(raw.sum_evm_pov),
            pvm_pov: Math.round(raw.sum_pvm_pov),
            evm_consumed: Math.round(raw.sum_evm_consumed),
            pvm_consumed: Math.round(raw.sum_pvm_consumed),
            rt_diff: pctFmt(rtGap / raw.sum_evm_rt * 100),
            pov_diff: pctFmt(povGap / raw.sum_evm_pov * 100),
            consumed_diff: raw.sum_evm_consumed
                ? pctFmt(consumedGap / raw.sum_evm_consumed * 100)
                : '—',
        },
        sources: [
            {
                source: 'Unattributed (interpreter + bytecode)',
                ref_time_delta: fmtDelta(raw.unattr_rt),
                rt_pct_of_gap: fmtPctOfGap(raw.unattr_rt, rtGap),
                proof_size_delta: fmtDelta(raw.unattr_pov),
                pov_pct_of_gap: fmtPctOfGap(raw.unattr_pov, povGap),
            },
            {
                source: 'Cross-contract calls',
                ref_time_delta: fmtDelta(raw.call_rt),
                rt_pct_of_gap: fmtPctOfGap(raw.call_rt, rtGap),
                proof_size_delta: fmtDelta(raw.call_pov),
                pov_pct_of_gap: fmtPctOfGap(raw.call_pov, povGap),
            },
            {
                source: 'Immutable data (PVM-only)',
                ref_time_delta: fmtDelta(raw.immut_rt),
                rt_pct_of_gap: fmtPctOfGap(raw.immut_rt, rtGap),
                proof_size_delta: fmtDelta(raw.immut_pov),
                pov_pct_of_gap: fmtPctOfGap(raw.immut_pov, povGap),
            },
            {
                source: 'Other attributed ops (net)',
                ref_time_delta: fmtDelta(otherRt),
                rt_pct_of_gap: fmtPctOfGap(otherRt, rtGap),
                proof_size_delta: fmtDelta(otherPov),
                pov_pct_of_gap: fmtPctOfGap(otherPov, povGap),
            },
            {
                source: 'Net PVM surplus',
                ref_time_delta: fmtDelta(rtGap),
                rt_pct_of_gap: '100%',
                proof_size_delta: fmtDelta(povGap),
                pov_pct_of_gap: '100%',
            },
        ],
    }
}

export function getBytecodeHierarchy(): BytecodeSizeHierarchy {
    const bytecodeData = getBytecodeComparison()
    const allImplTypes = new Set<string>()

    // Group by dataset -> contract
    const datasetMap = new Map<
        string,
        Map<string, BytecodeImplementation[]>
    >()

    for (const group of bytecodeData.groups) {
        const dataset = getDatasetCategory(group.contract_id)
        if (!datasetMap.has(dataset)) datasetMap.set(dataset, new Map())
        const contractMap = datasetMap.get(dataset)!

        const implementations: BytecodeImplementation[] = []
        for (const entry of group.entries) {
            const implType = getImplTypeLabel(entry.impl_type, entry.vm_type)
            allImplTypes.add(implType)
            implementations.push({
                name: entry.contract_name,
                vm_type: entry.vm_type,
                size_bytes: entry.size_bytes,
                implType,
            })
        }
        contractMap.set(group.contract_id, implementations)
    }

    const implTypes = sortImplTypes([...allImplTypes])

    // Helper: pick representative size per impl type for a contract
    // For each impl type, average across all implementations of that type
    function sizesPerImplType(
        impls: BytecodeImplementation[],
    ): Record<string, number | null> {
        const sizes: Record<string, number | null> = {}
        for (const t of implTypes) {
            const matching = impls.filter((i) => i.implType === t)
            sizes[t] = matching.length > 0
                ? Math.round(
                    matching.reduce((s, i) => s + i.size_bytes, 0) /
                        matching.length,
                )
                : null
        }
        return sizes
    }

    // Build hierarchy
    const datasets: BytecodeSizeHierarchy['datasets'] = []

    for (const [datasetName, contractMap] of datasetMap) {
        const contracts: BytecodeSizeHierarchy['datasets'][0]['contracts'] = []

        for (const [contractName, impls] of contractMap) {
            contracts.push({
                name: contractName,
                sizes: sizesPerImplType(impls),
                implementations: impls.sort((a, b) =>
                    a.size_bytes - b.size_bytes
                ),
            })
        }

        // Dataset-level sizes: sum of contract sizes per impl type
        const datasetSizes: Record<string, number | null> = {}
        for (const t of implTypes) {
            const vals = contracts.map((c) => c.sizes[t]).filter(
                (v): v is number => v !== null,
            )
            datasetSizes[t] = vals.length > 0
                ? vals.reduce((s, v) => s + v, 0)
                : null
        }

        datasets.push({
            name: datasetName,
            sizes: datasetSizes,
            contracts: contracts.sort((a, b) => a.name.localeCompare(b.name)),
        })
    }

    return {
        implTypes,
        datasets: datasets.sort((a, b) => datasetSortOrder(a.name, b.name)),
    }
}
