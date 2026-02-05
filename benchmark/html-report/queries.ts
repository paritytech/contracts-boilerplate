import { db } from '../lib.ts'
import { join } from '@std/path'

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

// Opcode category mapping (reused from reports.ts)
export const OPCODE_CATEGORIES: Record<string, string[]> = {
    'Arithmetic': ['ADD', 'SUB', 'MUL', 'DIV', 'MOD', 'SDIV', 'SMOD'],
    'Bitwise': ['OR', 'XOR', 'AND', 'SHL', 'SHR', 'SAR', 'BYTE', 'NOT'],
    'Comparison': ['LT', 'GT', 'EQ', 'ISZERO', 'SLT', 'SGT'],
    'Math': ['ADDMOD', 'MULMOD', 'EXP', 'SIGNEXTEND'],
    'Crypto': ['KECCAK256', 'SHA3', 'hash_keccak_256'],
    'Memory': ['MLOAD', 'MSTORE', 'MSTORE8', 'MSIZE', 'MCOPY'],
    'Storage': ['SLOAD', 'SSTORE', 'TLOAD', 'TSTORE', 'get_storage', 'set_storage', 'get_storage_or_zero', 'set_storage_or_clear'],
    'Calldata': ['CALLDATALOAD', 'CALLDATASIZE', 'CALLDATACOPY', 'call_data_load', 'call_data_size', 'call_data_copy'],
    'Context': [
        'ADDRESS', 'CALLER', 'ORIGIN', 'CHAINID', 'GASPRICE', 'GASLIMIT',
        'COINBASE', 'BLOCKHASH', 'NUMBER', 'TIMESTAMP', 'BASEFEE', 'PREVRANDAO',
        'BLOBHASH', 'BLOBBASEFEE', 'address', 'caller', 'origin', 'chain_id',
        'gas_price', 'gas_limit', 'block_author', 'block_hash', 'block_number', 'now', 'base_fee',
    ],
    'Ether/Gas': ['GAS', 'CALLVALUE', 'BALANCE', 'SELFBALANCE', 'ref_time_left', 'value_transferred', 'balance', 'balance_of'],
    'Events': ['LOG0', 'LOG1', 'LOG2', 'LOG3', 'LOG4', 'deposit_event'],
    'Calls': ['CALL', 'STATICCALL', 'DELEGATECALL', 'CALLCODE', 'call_evm', 'delegate_call_evm'],
    'Creation': ['CREATE', 'CREATE2', 'instantiate'],
    'Return': ['RETURN', 'REVERT', 'STOP', 'INVALID', 'SELFDESTRUCT', 'seal_return', 'consume_all_gas', 'terminate'],
    'Return Data': ['RETURNDATASIZE', 'RETURNDATACOPY', 'return_data_size', 'return_data_copy'],
    'Code': ['CODESIZE', 'CODECOPY', 'EXTCODESIZE', 'EXTCODECOPY', 'EXTCODEHASH', 'code_size', 'code_hash'],
    'Immutables': ['LOADIMMUTABLE', 'SETIMMUTABLE', 'get_immutable_data', 'set_immutable_data'],
    'Stack': [
        'POP', 'PUSH0', 'PUSH1', 'PUSH2', 'PUSH3', 'PUSH4', 'PUSH5', 'PUSH6', 'PUSH7', 'PUSH8',
        'PUSH9', 'PUSH10', 'PUSH11', 'PUSH12', 'PUSH13', 'PUSH14', 'PUSH15', 'PUSH16', 'PUSH17',
        'PUSH18', 'PUSH19', 'PUSH20', 'PUSH21', 'PUSH22', 'PUSH23', 'PUSH24', 'PUSH25', 'PUSH26',
        'PUSH27', 'PUSH28', 'PUSH29', 'PUSH30', 'PUSH31', 'PUSH32',
        'DUP1', 'DUP2', 'DUP3', 'DUP4', 'DUP5', 'DUP6', 'DUP7', 'DUP8',
        'DUP9', 'DUP10', 'DUP11', 'DUP12', 'DUP13', 'DUP14', 'DUP15', 'DUP16',
        'SWAP1', 'SWAP2', 'SWAP3', 'SWAP4', 'SWAP5', 'SWAP6', 'SWAP7', 'SWAP8',
        'SWAP9', 'SWAP10', 'SWAP11', 'SWAP12', 'SWAP13', 'SWAP14', 'SWAP15', 'SWAP16',
    ],
    'Control Flow': ['JUMP', 'JUMPI', 'JUMPDEST', 'PC'],
}

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

// Build reverse mapping
const OPCODE_TO_CATEGORY: Record<string, string> = {}
for (const [category, opcodes] of Object.entries(OPCODE_CATEGORIES)) {
    for (const opcode of opcodes) {
        OPCODE_TO_CATEGORY[opcode.toLowerCase()] = category
    }
}

export function getOpcodeCategory(opcode: string | null): string {
    if (!opcode) return 'Unknown'
    return OPCODE_TO_CATEGORY[opcode.toLowerCase()] ?? 'Other'
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
        }>
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
            COUNT(DISTINCT contract_id) as total_contracts,
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
            COUNT(DISTINCT contract_id) as contract_count,
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

            contracts.push({
                name: contractName,
                geth_gas: cHasGeth ? contractGeth : null,
                eth_rpc_evm_gas: cHasEvm ? contractEvm : null,
                eth_rpc_pvm_gas: cHasPvm ? contractPvm : null,
                transactions,
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
        datasets: datasets.sort((a, b) => a.name.localeCompare(b.name)),
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

            contracts.push({
                name: contractName,
                evm_ref_time: cHasEvm ? contractEvmRefTime : null,
                pvm_ref_time: cHasPvm ? contractPvmRefTime : null,
                evm_proof_size: cHasEvm ? contractEvmProofSize : null,
                pvm_proof_size: cHasPvm ? contractPvmProofSize : null,
                evm_metered_pct: cHasEvm && contractEvmCount > 0 ? contractEvmMeteredSum / contractEvmCount : null,
                pvm_metered_pct: cHasPvm && contractPvmCount > 0 ? contractPvmMeteredSum / contractPvmCount : null,
                evm_metered_ref_time: cHasEvm ? contractEvmMeteredRefTime : null,
                pvm_metered_ref_time: cHasPvm ? contractPvmMeteredRefTime : null,
                transactions,
            })
        }

        datasets.push({
            name: datasetName,
            evm_ref_time: hasEvm ? datasetEvmRefTime : null,
            pvm_ref_time: hasPvm ? datasetPvmRefTime : null,
            evm_proof_size: hasEvm ? datasetEvmProofSize : null,
            pvm_proof_size: hasPvm ? datasetPvmProofSize : null,
            evm_metered_pct: hasEvm && datasetEvmCount > 0 ? datasetEvmMeteredSum / datasetEvmCount : null,
            pvm_metered_pct: hasPvm && datasetPvmCount > 0 ? datasetPvmMeteredSum / datasetPvmCount : null,
            evm_metered_ref_time: hasEvm ? datasetEvmMeteredRefTime : null,
            pvm_metered_ref_time: hasPvm ? datasetPvmMeteredRefTime : null,
            contracts: contracts.sort((a, b) => a.name.localeCompare(b.name)),
        })
    }

    return {
        datasets: datasets.sort((a, b) => a.name.localeCompare(b.name)),
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
        datasets: datasets.sort((a, b) => a.name.localeCompare(b.name)),
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

        for (const entry of group.entries) {
            if (entry.vm_type === 'EVM') {
                evmSize = entry.size_bytes
                evmName = entry.contract_name
            } else if (entry.vm_type === 'PVM') {
                // Take the smallest PVM if multiple (e.g., solidity vs rust)
                if (pvmSize === null || entry.size_bytes < pvmSize) {
                    pvmSize = entry.size_bytes
                    pvmName = entry.contract_name
                }
            }
        }

        contractMap.set(group.contract_id, { evm_size: evmSize, pvm_size: pvmSize, evm_name: evmName, pvm_name: pvmName })
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
        datasets: datasets.sort((a, b) => a.name.localeCompare(b.name)),
    }
}
