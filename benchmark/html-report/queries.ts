import { db } from '../lib.ts'
import { join } from '@std/path'

// Dataset descriptions for the HTML report
export const DATASET_DESCRIPTIONS: Record<string, string> = {
    'test-contracts': 'Small test contracts used for basic benchmarking (e.g. Fibonacci, SimpleToken).',
    'ethereum-contracts': 'The most actively used contracts on Ethereum in 2025 (e.g. USDT, WETH, USDC, XEN).',
    'polkadot-contracts': 'Real-world contracts being built by teams at Parity for the Polkadot ecosystem.',
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
</p>`,
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
<tr><td><a href="https://github.com/paritytech/mark3t" target="_blank" rel="noopener">mark3t</a></td><td>Mark3tMarketplace*, Mark3tMarketplaceProxy, Mark3tMockMobRule</td></tr>
<tr><td><a href="https://github.com/paritytech/hackm3" target="_blank" rel="noopener">hackm3</a></td><td>DocumentAccessManagement</td></tr>
<tr><td><a href="https://github.com/paritytech/tick3t" target="_blank" rel="noopener">tick3t</a></td><td>W3S</td></tr>
</tbody></table>
<p>* The Mark3tMarketplace (Marketplace.sol) contract exceeds the EVM bytecode size limit
and is only deployed on PVM. The remaining contracts it interacts with (Mark3tMarketplaceProxy,
Mark3tMockMobRule) are deployed on both EVM and PVM, and the benchmark tests the
combination of both VMs.</p>`,
}

// Canonical dataset ordering used across all charts and tables
export const DATASET_ORDER = ['test-contracts', 'ethereum-contracts', 'polkadot-contracts']

function datasetSortOrder(a: string, b: string): number {
    const ai = DATASET_ORDER.indexOf(a)
    const bi = DATASET_ORDER.indexOf(b)
    return (ai === -1 ? Infinity : ai) - (bi === -1 ? Infinity : bi)
}

// Dataset categorization for contracts
export const DATASET_CATEGORIES: Record<string, string[]> = {
    'test-contracts': ['Fibonacci', 'SimpleToken'],
    'ethereum-contracts': ['TetherToken', 'WETH9', 'FiatTokenV2_2', 'FiatTokenProxy', 'XENCrypto', 'CoinTool_App'],
    'polkadot-contracts': [
        'Store', 'Log', 'NonFungibleCredential', 'FungibleCredential',
        'Escrow', 'DotNS', 'KeyRegistry', 'DocumentAccessManagement',
        'W3S', 'Mark3tMarketplace', 'Mark3tMarketplaceProxy', 'Mark3tMockMobRule',
    ],
}

import { OPCODE_CATEGORIES, getOpcodeCategory } from '../opcode-categories.ts'
export { OPCODE_CATEGORIES, getOpcodeCategory }

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
    const rows = Object.entries(OPCODE_CATEGORIES).map(([category, opcodes]) => {
        const evm = opcodes.filter(o => o === o.toUpperCase()).join(', ')
        const pvm = opcodes.filter(o => o !== o.toUpperCase()).join(', ')
        return `<tr><td><strong>${category}</strong></td><td><code>${evm || '&mdash;'}</code></td><td><code>${pvm || '&mdash;'}</code></td></tr>`
    }).join('\n')

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
}

export interface RefTimeVsProofSize {
    contract_id: string
    transaction_name: string
    ref_time: number
    proof_size: number
}

export interface WeightHierarchy {
    datasets: Array<{
        name: string
        evm_ref_time: number | null
        pvm_ref_time: number | null
        evm_proof_size: number | null
        pvm_proof_size: number | null
        evm_metered_pct: number | null
        pvm_metered_pct: number | null
        evm_metered_ref_time: number | null
        pvm_metered_ref_time: number | null
        contracts: Array<{
            name: string
            evm_ref_time: number | null
            pvm_ref_time: number | null
            evm_proof_size: number | null
            pvm_proof_size: number | null
            evm_metered_pct: number | null
            pvm_metered_pct: number | null
            evm_metered_ref_time: number | null
            pvm_metered_ref_time: number | null
            transactions: Array<{
                name: string
                evm_ref_time: number | null
                pvm_ref_time: number | null
                evm_proof_size: number | null
                pvm_proof_size: number | null
                evm_metered_pct: number | null
                pvm_metered_pct: number | null
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
    pvm_metered_pct: number | null
    pvm_metered_ref_time: number | null
    transactions: Array<{
        name: string
        pvm_ref_time: number | null
        pvm_proof_size: number | null
        pvm_metered_pct: number | null
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
    `).get() as { total_contracts: number; total_transactions: number; avg_gas_used: number; avg_ref_time: number | null }

    // Split eth-rpc by VM/language based on contract_name suffix
    const chains = db.prepare(`
        SELECT
            CASE
                WHEN chain_name = 'eth-rpc' AND contract_name LIKE '%_evm' THEN 'eth-rpc (EVM)'
                WHEN chain_name = 'eth-rpc' AND contract_name LIKE '%_pvm' THEN 'eth-rpc (PVM/Solidity)'
                WHEN chain_name = 'eth-rpc' AND contract_name LIKE '%_rust' THEN 'eth-rpc (PVM/Rust)'
                WHEN chain_name = 'eth-rpc' AND contract_name LIKE '%_ink' THEN 'eth-rpc (PVM/Ink)'
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
        avg_ref_time: overall.avg_ref_time ? Math.round(overall.avg_ref_time) : null,
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
    `).all() as Array<{ contract_id: string; transaction_name: string; evm_gas: number }>

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
    `).all() as Array<{ contract_id: string; transaction_name: string; pvm_gas: number; pvm_ref_time: number | null }>

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
        if (!evmData.find(e => `${e.contract_id}:${e.transaction_name}` === key)) {
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
        return cmp !== 0 ? cmp : a.transaction_name.localeCompare(b.transaction_name)
    })
}

export function getGasAnalysisData(): GasAnalysisData[] {
    // Get Geth data
    const gethData = db.prepare(`
        SELECT contract_id, transaction_name, gas_used as gas
        FROM transactions
        WHERE chain_name = 'Geth'
    `).all() as Array<{ contract_id: string; transaction_name: string; gas: number }>

    // Get eth-rpc EVM data (contracts ending with _evm)
    const evmData = db.prepare(`
        SELECT contract_id, transaction_name, gas_used as gas
        FROM transactions
        WHERE chain_name = 'eth-rpc' AND contract_name LIKE '%_evm'
    `).all() as Array<{ contract_id: string; transaction_name: string; gas: number }>

    // Get eth-rpc PVM data (contracts ending with _pvm)
    const pvmData = db.prepare(`
        SELECT contract_id, transaction_name, gas_used as gas
        FROM transactions
        WHERE chain_name = 'eth-rpc' AND contract_name LIKE '%_pvm'
    `).all() as Array<{ contract_id: string; transaction_name: string; gas: number }>

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
    const allKeys = new Set([...gethMap.keys(), ...evmMap.keys(), ...pvmMap.keys()])

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
        return cmp !== 0 ? cmp : a.transaction_name.localeCompare(b.transaction_name)
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
    `).all() as Array<{ contract_id: string; contract_name: string; transaction_name: string; gas: number }>

    // Group alt implementations by contract_id -> contract_name -> transactions
    const altImplMap = new Map<string, Map<string, Array<{ name: string; gas: number }>>>()
    for (const row of altPvmData) {
        if (!altImplMap.has(row.contract_id)) altImplMap.set(row.contract_id, new Map())
        const implMap = altImplMap.get(row.contract_id)!
        if (!implMap.has(row.contract_name)) implMap.set(row.contract_name, [])
        implMap.get(row.contract_name)!.push({ name: row.transaction_name, gas: row.gas })
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

            const transactions = txs.map(tx => {
                if (tx.geth_gas !== null) { contractGeth += tx.geth_gas; cHasGeth = true }
                if (tx.eth_rpc_evm_gas !== null) { contractEvm += tx.eth_rpc_evm_gas; cHasEvm = true }
                if (tx.eth_rpc_pvm_gas !== null) { contractPvm += tx.eth_rpc_pvm_gas; cHasPvm = true }

                return {
                    name: tx.transaction_name,
                    geth_gas: tx.geth_gas,
                    eth_rpc_evm_gas: tx.eth_rpc_evm_gas,
                    eth_rpc_pvm_gas: tx.eth_rpc_pvm_gas,
                }
            })

            if (cHasGeth) { datasetGeth += contractGeth; hasGeth = true }
            if (cHasEvm) { datasetEvm += contractEvm; hasEvm = true }
            if (cHasPvm) { datasetPvm += contractPvm; hasPvm = true }

            // Build alt implementations for this contract
            const alt_implementations: AltGasImplementation[] = []
            const implMap = altImplMap.get(contractName)
            if (implMap) {
                for (const [implName, implTxs] of implMap) {
                    const totalGas = implTxs.reduce((s, t) => s + t.gas, 0)
                    alt_implementations.push({
                        name: implName,
                        pvm_gas: totalGas,
                        transactions: implTxs.map(t => ({ name: t.name, pvm_gas: t.gas })),
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
            weight_consumed_proof_size
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
            (weight_consumed_proof_size + COALESCE(base_call_weight_proof_size, 0)) as proof_size
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
    evm_metered_pct: number | null
    pvm_metered_pct: number | null
    evm_metered_ref_time: number | null
    pvm_metered_ref_time: number | null
}

interface RawWeightRow {
    contract_id: string
    transaction_name: string
    ref_time: number
    proof_size: number
    weight_consumed: number
    base_weight: number
}

export function getWeightAnalysisHierarchy(): WeightHierarchy {
    // Get EVM weight data (contracts ending with _evm)
    const evmData = db.prepare(`
        SELECT
            contract_id,
            transaction_name,
            (weight_consumed_ref_time + COALESCE(base_call_weight_ref_time, 0)) as ref_time,
            (weight_consumed_proof_size + COALESCE(base_call_weight_proof_size, 0)) as proof_size,
            weight_consumed_ref_time as weight_consumed,
            COALESCE(base_call_weight_ref_time, 0) as base_weight
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND contract_name LIKE '%_evm'
            AND weight_consumed_ref_time IS NOT NULL
    `).all() as RawWeightRow[]

    // Get PVM weight data (contracts ending with _pvm)
    const pvmData = db.prepare(`
        SELECT
            contract_id,
            transaction_name,
            (weight_consumed_ref_time + COALESCE(base_call_weight_ref_time, 0)) as ref_time,
            (weight_consumed_proof_size + COALESCE(base_call_weight_proof_size, 0)) as proof_size,
            weight_consumed_ref_time as weight_consumed,
            COALESCE(base_call_weight_ref_time, 0) as base_weight
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND contract_name LIKE '%_pvm'
            AND weight_consumed_ref_time IS NOT NULL
    `).all() as RawWeightRow[]

    // Get alt PVM weight data (Rust, Ink, etc.)
    const altPvmWeightData = db.prepare(`
        SELECT
            contract_id,
            contract_name,
            transaction_name,
            (weight_consumed_ref_time + COALESCE(base_call_weight_ref_time, 0)) as ref_time,
            (weight_consumed_proof_size + COALESCE(base_call_weight_proof_size, 0)) as proof_size,
            weight_consumed_ref_time as weight_consumed,
            COALESCE(base_call_weight_ref_time, 0) as base_weight
        FROM transactions
        WHERE chain_name = 'eth-rpc'
            AND contract_name NOT LIKE '%_evm'
            AND contract_name NOT LIKE '%_pvm'
            AND weight_consumed_ref_time IS NOT NULL
    `).all() as (RawWeightRow & { contract_name: string })[]

    // Group alt weight implementations by contract_id -> contract_name -> transactions
    const altWeightMap = new Map<string, Map<string, Array<{ name: string; ref_time: number; proof_size: number; metered_pct: number; metered_ref_time: number }>>>()
    for (const row of altPvmWeightData) {
        if (!altWeightMap.has(row.contract_id)) altWeightMap.set(row.contract_id, new Map())
        const implMap = altWeightMap.get(row.contract_id)!
        if (!implMap.has(row.contract_name)) implMap.set(row.contract_name, [])
        const metered_pct = row.ref_time > 0 ? (row.weight_consumed / row.ref_time) * 100 : 0
        implMap.get(row.contract_name)!.push({
            name: row.transaction_name,
            ref_time: row.ref_time,
            proof_size: row.proof_size,
            metered_pct,
            metered_ref_time: row.weight_consumed,
        })
    }

    // Create lookup maps with metered percentage and metered ref_time
    const evmMap = new Map<string, { ref_time: number; proof_size: number; metered_pct: number; metered_ref_time: number }>()
    for (const row of evmData) {
        const metered_pct = row.ref_time > 0 ? (row.weight_consumed / row.ref_time) * 100 : 0
        evmMap.set(`${row.contract_id}:${row.transaction_name}`, {
            ref_time: row.ref_time,
            proof_size: row.proof_size,
            metered_pct,
            metered_ref_time: row.weight_consumed
        })
    }

    const pvmMap = new Map<string, { ref_time: number; proof_size: number; metered_pct: number; metered_ref_time: number }>()
    for (const row of pvmData) {
        const metered_pct = row.ref_time > 0 ? (row.weight_consumed / row.ref_time) * 100 : 0
        pvmMap.set(`${row.contract_id}:${row.transaction_name}`, {
            ref_time: row.ref_time,
            proof_size: row.proof_size,
            metered_pct,
            metered_ref_time: row.weight_consumed
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
            evm_metered_pct: evm?.metered_pct ?? null,
            pvm_metered_pct: pvm?.metered_pct ?? null,
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
        let datasetEvmMeteredSum = 0, datasetPvmMeteredSum = 0
        let datasetEvmMeteredRefTime = 0, datasetPvmMeteredRefTime = 0
        let datasetEvmCount = 0, datasetPvmCount = 0
        let hasEvm = false, hasPvm = false

        const contracts: WeightHierarchy['datasets'][0]['contracts'] = []

        for (const [contractName, txs] of contractMap) {
            let contractEvmRefTime = 0, contractPvmRefTime = 0
            let contractEvmProofSize = 0, contractPvmProofSize = 0
            let contractEvmMeteredSum = 0, contractPvmMeteredSum = 0
            let contractEvmMeteredRefTime = 0, contractPvmMeteredRefTime = 0
            let contractEvmCount = 0, contractPvmCount = 0
            let cHasEvm = false, cHasPvm = false

            const transactions = txs.map(tx => {
                if (tx.evm_ref_time !== null) {
                    contractEvmRefTime += tx.evm_ref_time
                    contractEvmProofSize += tx.evm_proof_size ?? 0
                    contractEvmMeteredSum += tx.evm_metered_pct ?? 0
                    contractEvmMeteredRefTime += tx.evm_metered_ref_time ?? 0
                    contractEvmCount++
                    cHasEvm = true
                }
                if (tx.pvm_ref_time !== null) {
                    contractPvmRefTime += tx.pvm_ref_time
                    contractPvmProofSize += tx.pvm_proof_size ?? 0
                    contractPvmMeteredSum += tx.pvm_metered_pct ?? 0
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
                    evm_metered_pct: tx.evm_metered_pct,
                    pvm_metered_pct: tx.pvm_metered_pct,
                    evm_metered_ref_time: tx.evm_metered_ref_time,
                    pvm_metered_ref_time: tx.pvm_metered_ref_time,
                }
            })

            if (cHasEvm) {
                datasetEvmRefTime += contractEvmRefTime
                datasetEvmProofSize += contractEvmProofSize
                datasetEvmMeteredSum += contractEvmMeteredSum
                datasetEvmMeteredRefTime += contractEvmMeteredRefTime
                datasetEvmCount += contractEvmCount
                hasEvm = true
            }
            if (cHasPvm) {
                datasetPvmRefTime += contractPvmRefTime
                datasetPvmProofSize += contractPvmProofSize
                datasetPvmMeteredSum += contractPvmMeteredSum
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
                    alt_implementations.push({
                        name: implName,
                        pvm_ref_time: count > 0 ? Math.round(implTxs.reduce((s, t) => s + t.ref_time, 0) / count) : null,
                        pvm_proof_size: count > 0 ? Math.round(implTxs.reduce((s, t) => s + t.proof_size, 0) / count) : null,
                        pvm_metered_pct: count > 0 ? implTxs.reduce((s, t) => s + t.metered_pct, 0) / count : null,
                        pvm_metered_ref_time: count > 0 ? Math.round(implTxs.reduce((s, t) => s + t.metered_ref_time, 0) / count) : null,
                        transactions: implTxs.map(t => ({
                            name: t.name,
                            pvm_ref_time: t.ref_time,
                            pvm_proof_size: t.proof_size,
                            pvm_metered_pct: t.metered_pct,
                            pvm_metered_ref_time: t.metered_ref_time,
                        })),
                    })
                }
                alt_implementations.sort((a, b) => a.name.localeCompare(b.name))
            }

            contracts.push({
                name: contractName,
                evm_ref_time: cHasEvm && contractEvmCount > 0 ? Math.round(contractEvmRefTime / contractEvmCount) : null,
                pvm_ref_time: cHasPvm && contractPvmCount > 0 ? Math.round(contractPvmRefTime / contractPvmCount) : null,
                evm_proof_size: cHasEvm && contractEvmCount > 0 ? Math.round(contractEvmProofSize / contractEvmCount) : null,
                pvm_proof_size: cHasPvm && contractPvmCount > 0 ? Math.round(contractPvmProofSize / contractPvmCount) : null,
                evm_metered_pct: cHasEvm && contractEvmCount > 0 ? contractEvmMeteredSum / contractEvmCount : null,
                pvm_metered_pct: cHasPvm && contractPvmCount > 0 ? contractPvmMeteredSum / contractPvmCount : null,
                evm_metered_ref_time: cHasEvm && contractEvmCount > 0 ? Math.round(contractEvmMeteredRefTime / contractEvmCount) : null,
                pvm_metered_ref_time: cHasPvm && contractPvmCount > 0 ? Math.round(contractPvmMeteredRefTime / contractPvmCount) : null,
                transactions,
                alt_implementations,
            })
        }

        datasets.push({
            name: datasetName,
            evm_ref_time: hasEvm && datasetEvmCount > 0 ? Math.round(datasetEvmRefTime / datasetEvmCount) : null,
            pvm_ref_time: hasPvm && datasetPvmCount > 0 ? Math.round(datasetPvmRefTime / datasetPvmCount) : null,
            evm_proof_size: hasEvm && datasetEvmCount > 0 ? Math.round(datasetEvmProofSize / datasetEvmCount) : null,
            pvm_proof_size: hasPvm && datasetPvmCount > 0 ? Math.round(datasetPvmProofSize / datasetPvmCount) : null,
            evm_metered_pct: hasEvm && datasetEvmCount > 0 ? datasetEvmMeteredSum / datasetEvmCount : null,
            pvm_metered_pct: hasPvm && datasetPvmCount > 0 ? datasetPvmMeteredSum / datasetPvmCount : null,
            evm_metered_ref_time: hasEvm && datasetEvmCount > 0 ? Math.round(datasetEvmMeteredRefTime / datasetEvmCount) : null,
            pvm_metered_ref_time: hasPvm && datasetPvmCount > 0 ? Math.round(datasetPvmMeteredRefTime / datasetPvmCount) : null,
            contracts: contracts.sort((a, b) => a.name.localeCompare(b.name)),
        })
    }

    return {
        datasets: datasets.sort((a, b) => datasetSortOrder(a.name, b.name)),
    }
}

// Fibonacci implementations comparison
export interface FibonacciImplementation {
    variant: string
    label: string
    transaction_name: string
    ref_time: number | null
    metered_ref_time: number | null
    metered_pct: number | null
    proof_size: number | null
}

const FIBONACCI_VARIANTS = [
    { pattern: 'Fibonacci_evm', label: 'EVM (Solidity)' },
    { pattern: 'Fibonacci_pvm', label: 'PVM (Solidity)' },
    { pattern: 'fibonacci_ink', label: 'PVM (Ink)' },
    { pattern: 'fibonacci_rust', label: 'PVM (Rust)' },
    { pattern: 'fibonacci_u128_rust', label: 'PVM (Rust u128)' },
    { pattern: 'fibonacci_u256_rust', label: 'PVM (Rust u256)' },
]

export function getFibonacciComparison(): FibonacciImplementation[] {
    const results: FibonacciImplementation[] = []

    for (const { pattern, label } of FIBONACCI_VARIANTS) {
        const data = db.prepare(`
            SELECT
                transaction_name,
                (weight_consumed_ref_time + COALESCE(base_call_weight_ref_time, 0)) as ref_time,
                (weight_consumed_proof_size + COALESCE(base_call_weight_proof_size, 0)) as proof_size,
                weight_consumed_ref_time as weight_consumed
            FROM transactions
            WHERE chain_name = 'eth-rpc'
                AND contract_name = ?
                AND weight_consumed_ref_time IS NOT NULL
            ORDER BY transaction_name
        `).all(pattern) as Array<{ transaction_name: string; ref_time: number; proof_size: number; weight_consumed: number }>

        for (const row of data) {
            const metered_pct = row.ref_time > 0 ? (row.weight_consumed / row.ref_time) * 100 : 0
            results.push({
                variant: pattern,
                label,
                transaction_name: row.transaction_name,
                ref_time: row.ref_time,
                metered_ref_time: row.weight_consumed,
                metered_pct,
                proof_size: row.proof_size,
            })
        }
    }

    return results
}

export function getCategoryBreakdown(): CategoryBreakdown[] {
    const allData = db.prepare(`
        SELECT
            t.chain_name,
            t.contract_id,
            t.transaction_name,
            t.weight_consumed_ref_time,
            t.gas_used,
            s.op,
            SUM(s.gas_cost) as total_gas_cost,
            SUM(s.weight_cost_ref_time) as total_weight_cost_ref_time
        FROM transactions AS t
        JOIN transaction_steps AS s ON s.hash = t.hash AND s.chain_name = t.chain_name
        GROUP BY t.hash, t.chain_name, s.op
        ORDER BY t.chain_name, t.contract_id, t.transaction_name
    `).all() as Array<{
        chain_name: string
        contract_id: string
        transaction_name: string
        weight_consumed_ref_time: number | null
        gas_used: number
        op: string | null
        total_gas_cost: number | null
        total_weight_cost_ref_time: number | null
    }>

    // Aggregate by category
    const categoryMap = new Map<string, CategoryBreakdown>()

    for (const row of allData) {
        const category = getOpcodeCategory(row.op)
        const key = `${row.chain_name}:${row.contract_id}:${row.transaction_name}:${category}`

        const isPvm = row.chain_name === 'eth-rpc'
        const cost = isPvm
            ? (row.total_weight_cost_ref_time ?? 0)
            : (row.total_gas_cost ?? 0)
        const total = isPvm
            ? (row.weight_consumed_ref_time ?? row.gas_used)
            : row.gas_used

        if (!categoryMap.has(key)) {
            categoryMap.set(key, {
                chain_name: row.chain_name,
                contract_id: row.contract_id,
                transaction_name: row.transaction_name,
                category,
                total_cost: 0,
                percent_of_total: 0,
            })
        }

        const entry = categoryMap.get(key)!
        entry.total_cost += cost
        entry.percent_of_total = total > 0 ? (entry.total_cost / total) * 100 : 0
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
    `).all() as Array<{ chain_name: string; contract_id: string; gas_used: number; ref_time: number | null }>

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
            datasetMap.set(key, { total_gas: 0, total_ref_time: 0, count: 0, ref_time_count: 0 })
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
            avg_ref_time: data.ref_time_count > 0 ? Math.round(data.total_ref_time / data.ref_time_count) : null,
            transaction_count: data.count,
        })
    }

    return results.sort((a, b) => a.dataset.localeCompare(b.dataset) || a.chain_name.localeCompare(b.chain_name))
}

export function getCategoryProfileComparison(): Array<{
    category: string
    evm_percent: number
    pvm_percent: number
}> {
    const categoryData = getCategoryBreakdown()

    // Aggregate by chain and category
    const evmTotals = new Map<string, number>()
    const pvmTotals = new Map<string, number>()
    let evmTotal = 0
    let pvmTotal = 0

    for (const row of categoryData) {
        if (row.chain_name === 'Geth') {
            evmTotals.set(row.category, (evmTotals.get(row.category) ?? 0) + row.total_cost)
            evmTotal += row.total_cost
        } else if (row.chain_name === 'eth-rpc') {
            pvmTotals.set(row.category, (pvmTotals.get(row.category) ?? 0) + row.total_cost)
            pvmTotal += row.total_cost
        }
    }

    // Get all categories
    const allCategories = new Set([...evmTotals.keys(), ...pvmTotals.keys()])

    const results: Array<{ category: string; evm_percent: number; pvm_percent: number }> = []
    for (const category of allCategories) {
        results.push({
            category,
            evm_percent: evmTotal > 0 ? ((evmTotals.get(category) ?? 0) / evmTotal) * 100 : 0,
            pvm_percent: pvmTotal > 0 ? ((pvmTotals.get(category) ?? 0) / pvmTotal) * 100 : 0,
        })
    }

    return results.sort((a, b) => (b.evm_percent + b.pvm_percent) - (a.evm_percent + a.pvm_percent))
}

// Category hierarchy types
export interface CategoryHierarchyRow {
    name: string
    categories: Record<string, number>  // category name -> percentage
    total_cost: number
}

export interface CategoryHierarchy {
    datasets: Array<CategoryHierarchyRow & {
        contracts: Array<CategoryHierarchyRow & {
            transactions: CategoryHierarchyRow[]
        }>
    }>
    allCategories: string[]
}

export function getCategoryBreakdownHierarchy(): CategoryHierarchy & { categoryDescriptions: Record<string, string> } {
    const categoryData = getCategoryBreakdown()

    // Filter to only eth-rpc (PVM) data for category breakdown
    const pvmData = categoryData.filter(d => d.chain_name === 'eth-rpc')

    // Get all unique categories sorted by total usage
    const categoryTotals = new Map<string, number>()
    for (const row of pvmData) {
        categoryTotals.set(row.category, (categoryTotals.get(row.category) ?? 0) + row.total_cost)
    }
    const allCategories = [...categoryTotals.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([cat]) => cat)
        .slice(0, 12)  // Top 12 categories

    // Group by dataset -> contract -> transaction
    // Store actual costs, not percentages - percentages will be calculated at the end
    const datasetMap = new Map<string, Map<string, Map<string, { categoryCosts: Map<string, number>; total: number }>>>()

    for (const row of pvmData) {
        const dataset = getDatasetCategory(row.contract_id)

        if (!datasetMap.has(dataset)) {
            datasetMap.set(dataset, new Map())
        }
        const contractMap = datasetMap.get(dataset)!

        if (!contractMap.has(row.contract_id)) {
            contractMap.set(row.contract_id, new Map())
        }
        const txMap = contractMap.get(row.contract_id)!

        if (!txMap.has(row.transaction_name)) {
            txMap.set(row.transaction_name, { categoryCosts: new Map(), total: 0 })
        }
        const txData = txMap.get(row.transaction_name)!

        // Accumulate actual costs, not percentages
        txData.categoryCosts.set(row.category, (txData.categoryCosts.get(row.category) ?? 0) + row.total_cost)
        txData.total += row.total_cost
    }

    // Build hierarchy
    const datasets: CategoryHierarchy['datasets'] = []

    for (const [datasetName, contractMap] of datasetMap) {
        const datasetCategories = new Map<string, number>()
        let datasetTotal = 0

        const contracts: CategoryHierarchy['datasets'][0]['contracts'] = []

        for (const [contractName, txMap] of contractMap) {
            const contractCategories = new Map<string, number>()
            let contractTotal = 0

            const transactions: CategoryHierarchyRow[] = []

            for (const [txName, txData] of txMap) {
                // Calculate percentages from accumulated costs
                const catObj: Record<string, number> = {}
                for (const cat of allCategories) {
                    const catCost = txData.categoryCosts.get(cat) ?? 0
                    catObj[cat] = txData.total > 0 ? (catCost / txData.total) * 100 : 0
                }
                transactions.push({
                    name: txName,
                    categories: catObj,
                    total_cost: txData.total,
                })

                // Aggregate actual costs to contract level (not percentages)
                for (const [cat, cost] of txData.categoryCosts) {
                    contractCategories.set(cat, (contractCategories.get(cat) ?? 0) + cost)
                }
                contractTotal += txData.total
            }

            // Calculate contract percentages
            const contractCatObj: Record<string, number> = {}
            for (const cat of allCategories) {
                const catCost = contractCategories.get(cat) ?? 0
                contractCatObj[cat] = contractTotal > 0 ? (catCost / contractTotal) * 100 : 0
            }

            contracts.push({
                name: contractName,
                categories: contractCatObj,
                total_cost: contractTotal,
                transactions: transactions.sort((a, b) => a.name.localeCompare(b.name)),
            })

            // Aggregate to dataset level
            for (const [cat, cost] of contractCategories) {
                datasetCategories.set(cat, (datasetCategories.get(cat) ?? 0) + cost)
            }
            datasetTotal += contractTotal
        }

        // Calculate dataset percentages
        const datasetCatObj: Record<string, number> = {}
        for (const cat of allCategories) {
            const catCost = datasetCategories.get(cat) ?? 0
            datasetCatObj[cat] = datasetTotal > 0 ? (catCost / datasetTotal) * 100 : 0
        }

        datasets.push({
            name: datasetName,
            categories: datasetCatObj,
            total_cost: datasetTotal,
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
}

export interface BytecodeSizeHierarchy {
    datasets: Array<{
        name: string
        evm_size: number | null
        pvm_size: number | null
        contracts: Array<{
            name: string
            evm_size: number | null
            pvm_size: number | null
            evm_name: string | null
            pvm_name: string | null
            implementations: BytecodeImplementation[]
        }>
    }>
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
            const tableLines = lines.filter(line => line.startsWith('|') && !line.includes('---'))
            const dataRows = tableLines.slice(1) // Skip header row

            const entries: BytecodeSizeEntry[] = []
            for (const row of dataRows) {
                const cells = row.split('|').map(c => c.trim()).filter(c => c)
                if (cells.length >= 4) {
                    entries.push({
                        contract_id: contractId,
                        contract_name: cells[0],
                        vm_type: cells[1],
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

export function getBytecodeHierarchy(): BytecodeSizeHierarchy {
    const bytecodeData = getBytecodeComparison()

    // Group by dataset -> contract
    const datasetMap = new Map<string, Map<string, { evm_size: number | null; pvm_size: number | null; evm_name: string | null; pvm_name: string | null }>>()

    for (const group of bytecodeData.groups) {
        const dataset = getDatasetCategory(group.contract_id)

        if (!datasetMap.has(dataset)) {
            datasetMap.set(dataset, new Map())
        }

        const contractMap = datasetMap.get(dataset)!

        // Find EVM and PVM sizes for this contract
        let evmSize: number | null = null
        let pvmSize: number | null = null
        let evmName: string | null = null
        let pvmName: string | null = null
        const implementations: BytecodeImplementation[] = []

        for (const entry of group.entries) {
            implementations.push({ name: entry.contract_name, vm_type: entry.vm_type, size_bytes: entry.size_bytes })
            if (entry.vm_type === 'EVM') {
                evmSize = entry.size_bytes
                evmName = entry.contract_name
            } else if (entry.vm_type === 'PVM') {
                // Prefer the Solidity-compiled PVM (_pvm suffix) for apples-to-apples comparison
                const isSolidityPvm = entry.contract_name.endsWith('_pvm')
                const currentIsSolidityPvm = pvmName?.endsWith('_pvm') ?? false
                if (pvmSize === null || (isSolidityPvm && !currentIsSolidityPvm)) {
                    pvmSize = entry.size_bytes
                    pvmName = entry.contract_name
                }
            }
        }

        contractMap.set(group.contract_id, { evm_size: evmSize, pvm_size: pvmSize, evm_name: evmName, pvm_name: pvmName, implementations })
    }

    // Build hierarchy
    const datasets: BytecodeSizeHierarchy['datasets'] = []

    for (const [datasetName, contractMap] of datasetMap) {
        let datasetEvmSize = 0
        let datasetPvmSize = 0
        let hasEvm = false
        let hasPvm = false

        const contracts: BytecodeSizeHierarchy['datasets'][0]['contracts'] = []

        for (const [contractName, sizes] of contractMap) {
            if (sizes.evm_size !== null) {
                datasetEvmSize += sizes.evm_size
                hasEvm = true
            }
            if (sizes.pvm_size !== null) {
                datasetPvmSize += sizes.pvm_size
                hasPvm = true
            }

            contracts.push({
                name: contractName,
                evm_size: sizes.evm_size,
                pvm_size: sizes.pvm_size,
                evm_name: sizes.evm_name,
                pvm_name: sizes.pvm_name,
                implementations: sizes.implementations.sort((a, b) => a.size_bytes - b.size_bytes),
            })
        }

        datasets.push({
            name: datasetName,
            evm_size: hasEvm ? datasetEvmSize : null,
            pvm_size: hasPvm ? datasetPvmSize : null,
            contracts: contracts.sort((a, b) => a.name.localeCompare(b.name)),
        })
    }

    return {
        datasets: datasets.sort((a, b) => datasetSortOrder(a.name, b.name)),
    }
}
