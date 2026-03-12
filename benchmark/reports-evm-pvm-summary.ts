import { DatabaseSync } from 'node:sqlite'
import { ensureDir } from '@std/fs'
import { join } from '@std/path'
import { tablemark } from 'tablemark'

const DB_PATH = join(import.meta.dirname!, '..', 'stats.db')
const db = new DatabaseSync(DB_PATH)
const REPORTS_DIR = join(import.meta.dirname!, 'reports')
const CODEGEN_DIR = join(import.meta.dirname!, '..', 'codegen')
const RUST_DIR = join(import.meta.dirname!, '..', 'rust')
const INK_DIR = join(import.meta.dirname!, '..', 'ink')

// ─── Utilities ───

function table(data: Record<string, unknown>[]) {
    return tablemark(data, { align: undefined, headerCase: 'preserve' })
}

function fmt(n: number): string {
    return n.toLocaleString()
}

function pct(n: number): string {
    const sign = n >= 0 ? '+' : ''
    return `${sign}${n.toFixed(1)}%`
}

function fmtPct(a: number, b: number): string {
    return b === 0 ? '—' : pct((a - b) / b * 100)
}

function fileSize(path: string): number | null {
    try {
        return Deno.statSync(path).size
    } catch {
        return null
    }
}

// ─── Constants ───

import { datasetCategories } from './datasets.ts'

// Test contracts are excluded from aggregate tables to avoid skewing real-world
// workload analysis. They are still included in the variant-specific tables
// (SimpleToken variants, Fibonacci variants, bytecode sizes).
const TEST_CONTRACT_IDS = datasetCategories['test-contracts'] ?? []
const TEST_EXCLUDE_SQL = TEST_CONTRACT_IDS.map((id) =>
    `'${id.replace(/'/g, "''")}'`
).join(',')

const EVM_TO_RUST: Record<string, string> = {
    DotNS: 'dotns_rust',
    Escrow: 'escrow_rust',
    FungibleCredential: 'fungible_credential_rust',
    KeyRegistry: 'key_registry_rust',
    Log: 'log_rust',
    NonFungibleCredential: 'non_fungible_credential_rust',
    Store: 'store_rust',
}

const EVM_TO_INK: Record<string, string> = {
    Fibonacci: 'fibonacci',
    Fibonacci_u256: 'fibonacci_u256',
    Fibonacci_u256_iter: 'fibonacci_u256_iter',
    SimpleToken: 'simple_token',
}

function rustBytecodeSizeFn(dbName: string): number | null {
    const base = dbName.replace(/_rust$/, '')
    return fileSize(
        join(RUST_DIR, 'protocol-commons', base, `${base}.polkavm`),
    ) ??
        fileSize(
            join(RUST_DIR, 'contracts', 'target', `${base}.release.polkavm`),
        ) ??
        fileSize(join(RUST_DIR, 'contracts', `${base}.polkavm`))
}

function inkBytecodeSizeFn(inkName: string): number | null {
    return fileSize(
        join(INK_DIR, inkName, 'target', 'ink', `${inkName}.polkavm`),
    )
}

// ─── RQ1: Base vs metered weight ───

function baseVsMeteredTable(): string {
    const rows = db.prepare(`
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
			AND contract_id NOT IN (${TEST_EXCLUDE_SQL})
		GROUP BY tx_type
		ORDER BY tx_type
	`).all() as {
        tx_type: string
        avg_base_rt: number
        avg_metered_rt: number
        base_rt_pct: number
        metered_rt_pct: number
        avg_base_pov: number
        avg_metered_pov: number
        base_pov_pct: number | null
        metered_pov_pct: number | null
    }[]

    const valPct = (v: number, p: number | null) =>
        p != null ? `${fmt(v)} (${p}%)` : fmt(v)

    return table(rows.map((r) => ({
        'Type': r.tx_type,
        'Avg base ref_time': valPct(r.avg_base_rt, r.base_rt_pct),
        'Avg metered ref_time': valPct(r.avg_metered_rt, r.metered_rt_pct),
        'Avg base proof_size': valPct(r.avg_base_pov, r.base_pov_pct),
        'Avg metered proof_size': valPct(r.avg_metered_pov, r.metered_pov_pct),
    }))) + '\n\n'
}

// ─── RQ1: Top operations by metered cost ───

function topOpsTable(deploy: boolean): string {
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
			AND contract_id NOT IN (${TEST_EXCLUDE_SQL})
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
			AND t.contract_id NOT IN (${TEST_EXCLUDE_SQL})
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

    const makeRow = (cat: string, rt: number, pov: number, calls: string) => ({
        'Category': cat,
        'Total ref_time': fmt(Math.round(rt)),
        '% of ref_time': rtPct(rt),
        'Total proof_size': fmt(Math.round(pov)),
        '% of proof_size': povPct(pov),
        'Calls': calls,
    })

    return table([
        ...top3.map((r) =>
            makeRow(r.category, r.total_rt, r.total_pov, fmt(r.calls))
        ),
        makeRow('Other attributed', remainRt, remainPov, fmt(remainCalls)),
        makeRow('Unattributed', unattrRt, unattrPov, '—'),
    ]) + '\n\n'
}

// ─── RQ2: Execution cost totals ───

function execTotalsTable(): string {
    const nameMapValues = Object.entries(EVM_TO_RUST)
        .map(([evm, rust]) => `('${evm}_evm', '${evm}_pvm', '${rust}')`)
        .join(', ')

    // All 93 pairs (excl CoinTool_App)
    const allRow = db.prepare(`
		SELECT
			COUNT(*) as n,
			SUM(e.weight_consumed_ref_time) as evm_rt,
			SUM(p.weight_consumed_ref_time) as pvm_rt,
			SUM(e.weight_consumed_proof_size) as evm_pov,
			SUM(p.weight_consumed_proof_size) as pvm_pov
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
			AND e.contract_id NOT IN (${TEST_EXCLUDE_SQL})
	`).get() as {
        n: number
        evm_rt: number
        pvm_rt: number
        evm_pov: number
        pvm_pov: number
    }

    let md =
        `**${allRow.n} EVM↔PVM/Solidity pairs (excluding CoinTool_App and test contracts):**\n`
    md += table([
        {
            'Metric': 'Metered ref_time',
            'EVM': fmt(Math.round(allRow.evm_rt)),
            'PVM/Solidity': fmt(Math.round(allRow.pvm_rt)),
            'Diff': fmtPct(allRow.pvm_rt, allRow.evm_rt),
        },
        {
            'Metric': 'Metered proof_size',
            'EVM': fmt(Math.round(allRow.evm_pov)),
            'PVM/Solidity': fmt(Math.round(allRow.pvm_pov)),
            'Diff': fmtPct(allRow.pvm_pov, allRow.evm_pov),
        },
    ]) + '\n\n'

    // 46 pairs with Rust (7 polkadot-contracts)
    const row7 = db.prepare(`
		WITH name_map(evm_name, pvm_name, rust_name) AS (VALUES ${nameMapValues})
		SELECT
			COUNT(*) as n,
			SUM(e.weight_consumed_ref_time) as evm_rt,
			SUM(p.weight_consumed_ref_time) as pvm_rt,
			SUM(r.weight_consumed_ref_time) as rust_rt,
			SUM(e.weight_consumed_proof_size) as evm_pov,
			SUM(p.weight_consumed_proof_size) as pvm_pov,
			SUM(r.weight_consumed_proof_size) as rust_pov
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
    }

    md += `**${row7.n} pairs where PVM/Rust exists (7 polkadot-contracts):**\n`
    const makeRow7 = (
        metric: string,
        evm: number,
        sol: number,
        rust: number,
    ) => ({
        'Metric': metric,
        'EVM': fmt(Math.round(evm)),
        'PVM/Sol': fmt(Math.round(sol)),
        'vs EVM': fmtPct(sol, evm),
        'PVM/Rust': fmt(Math.round(rust)),
        'vs EVM ': fmtPct(rust, evm),
    })
    md += table([
        makeRow7('Metered ref_time', row7.evm_rt, row7.pvm_rt, row7.rust_rt),
        makeRow7(
            'Metered proof_size',
            row7.evm_pov,
            row7.pvm_pov,
            row7.rust_pov,
        ),
    ]) + '\n\n'

    // Per-tx median comparisons
    const solPairPcts = db.prepare(`
		SELECT
			ROUND((p.weight_consumed_ref_time - e.weight_consumed_ref_time) * 100.0
				/ e.weight_consumed_ref_time, 1) as rt_pct,
			ROUND((p.weight_consumed_proof_size - e.weight_consumed_proof_size) * 100.0
				/ e.weight_consumed_proof_size, 1) as pov_pct
		FROM transactions e
		JOIN transactions p ON p.contract_name = REPLACE(e.contract_name, '_evm', '_pvm')
			AND p.chain_name = e.chain_name AND p.transaction_name = e.transaction_name
			AND p.weight_consumed_ref_time IS NOT NULL
		WHERE e.chain_name = 'eth-rpc'
			AND e.contract_name LIKE '%_evm'
			AND e.contract_name <> 'CoinTool_App_evm'
			AND e.transaction_name <> 'deploy'
			AND e.weight_consumed_ref_time IS NOT NULL
			AND e.contract_id NOT IN (${TEST_EXCLUDE_SQL})
	`).all() as { rt_pct: number; pov_pct: number }[]

    const rustPairPcts = db.prepare(`
		WITH name_map(evm_name, pvm_name, rust_name) AS (VALUES ${nameMapValues})
		SELECT
			ROUND((r.weight_consumed_ref_time - e.weight_consumed_ref_time) * 100.0
				/ e.weight_consumed_ref_time, 1) as rt_pct,
			ROUND((r.weight_consumed_proof_size - e.weight_consumed_proof_size) * 100.0
				/ e.weight_consumed_proof_size, 1) as pov_pct
		FROM name_map nm
		JOIN transactions e ON e.contract_name = nm.evm_name AND e.chain_name = 'eth-rpc'
			AND e.transaction_name <> 'deploy' AND e.weight_consumed_ref_time IS NOT NULL
		JOIN transactions r ON r.contract_name = nm.rust_name AND r.chain_name = e.chain_name
			AND r.transaction_name = e.transaction_name AND r.weight_consumed_ref_time IS NOT NULL
	`).all() as { rt_pct: number; pov_pct: number }[]

    const rustVsSolPcts = db.prepare(`
		WITH name_map(evm_name, pvm_name, rust_name) AS (VALUES ${nameMapValues})
		SELECT
			ROUND((r.weight_consumed_ref_time - p.weight_consumed_ref_time) * 100.0
				/ p.weight_consumed_ref_time, 1) as rt_pct,
			ROUND((COALESCE(r.weight_consumed_proof_size,0) - COALESCE(p.weight_consumed_proof_size,0)) * 100.0
				/ NULLIF(COALESCE(p.weight_consumed_proof_size,0), 0), 1) as pov_pct
		FROM name_map nm
		JOIN transactions e ON e.contract_name = nm.evm_name AND e.chain_name = 'eth-rpc'
			AND e.transaction_name <> 'deploy' AND e.weight_consumed_ref_time IS NOT NULL
		JOIN transactions p ON p.contract_name = nm.pvm_name AND p.chain_name = e.chain_name
			AND p.transaction_name = e.transaction_name AND p.weight_consumed_ref_time IS NOT NULL
		JOIN transactions r ON r.contract_name = nm.rust_name AND r.chain_name = e.chain_name
			AND r.transaction_name = e.transaction_name AND r.weight_consumed_ref_time IS NOT NULL
	`).all() as { rt_pct: number; pov_pct: number | null }[]

    const median = (arr: number[]) => {
        if (arr.length === 0) return 0
        const s = [...arr].sort((a, b) => a - b)
        return s[Math.floor(s.length / 2)]
    }

    const solRts = solPairPcts.map((r) => r.rt_pct).sort((a, b) => a - b)
    const solPovs = solPairPcts.map((r) => r.pov_pct).sort((a, b) => a - b)
    const rustRts = rustPairPcts.map((r) => r.rt_pct).sort((a, b) => a - b)
    const rustPovs = rustPairPcts.map((r) => r.pov_pct).sort((a, b) => a - b)
    const rvsRts = rustVsSolPcts.map((r) => r.rt_pct).sort((a, b) => a - b)
    const rvsPovs = rustVsSolPcts.filter((r) => r.pov_pct != null).map((r) =>
        r.pov_pct!
    ).sort((a, b) => a - b)

    md += `**Per-transaction medians:**\n`
    md += table([
        {
            'Comparison': `PVM/Sol vs EVM (${solRts.length} txs)`,
            'Median ref_time': pct(median(solRts)),
            'Txs cheaper': `${
                solRts.filter((p) => p < 0).length
            }/${solRts.length}`,
            'Median proof_size': pct(median(solPovs)),
            'Txs cheaper ': `${
                solPovs.filter((p) => p < 0).length
            }/${solPovs.length}`,
        },
        {
            'Comparison': `PVM/Rust vs EVM (${rustRts.length} txs)`,
            'Median ref_time': pct(median(rustRts)),
            'Txs cheaper': `${
                rustRts.filter((p) => p < 0).length
            }/${rustRts.length}`,
            'Median proof_size': pct(median(rustPovs)),
            'Txs cheaper ': `${
                rustPovs.filter((p) => p < 0).length
            }/${rustPovs.length}`,
        },
        {
            'Comparison': `PVM/Rust vs PVM/Sol (${rvsRts.length} txs)`,
            'Median ref_time': pct(median(rvsRts)),
            'Txs cheaper': `${
                rvsRts.filter((p) => p < 0).length
            }/${rvsRts.length}`,
            'Median proof_size': rvsPovs.length > 0
                ? pct(median(rvsPovs))
                : '—',
            'Txs cheaper ': rvsPovs.length > 0
                ? `${rvsPovs.filter((p) => p < 0).length}/${rvsPovs.length}`
                : '—',
        },
    ]) + '\n\n'

    return md
}

// ─── RQ2: Deployment cost totals ───

interface DeployRow {
    contract: string
    base_rt: number
    metered_rt: number
    base_pov: number
    metered_pov: number
}

function deployTotalsTable(): string {
    const deploys = db.prepare(`
		SELECT REPLACE(contract_name, '_evm', '') as contract,
			base_call_weight_ref_time as base_rt,
			weight_consumed_ref_time as metered_rt,
			COALESCE(base_call_weight_proof_size, 0) as base_pov,
			COALESCE(weight_consumed_proof_size, 0) as metered_pov
		FROM transactions
		WHERE chain_name = 'eth-rpc'
			AND contract_name LIKE '%_evm'
			AND transaction_name = 'deploy'
			AND weight_consumed_ref_time IS NOT NULL
			AND base_call_weight_ref_time IS NOT NULL
			AND contract_id NOT IN (${TEST_EXCLUDE_SQL})
	`).all() as DeployRow[]

    const pvmMap = new Map<string, DeployRow>()
    for (
        const r of db.prepare(`
		SELECT REPLACE(contract_name, '_pvm', '') as contract,
			base_call_weight_ref_time as base_rt,
			weight_consumed_ref_time as metered_rt,
			COALESCE(base_call_weight_proof_size, 0) as base_pov,
			COALESCE(weight_consumed_proof_size, 0) as metered_pov
		FROM transactions
		WHERE chain_name = 'eth-rpc'
			AND contract_name LIKE '%_pvm'
			AND transaction_name = 'deploy'
			AND weight_consumed_ref_time IS NOT NULL
			AND contract_id NOT IN (${TEST_EXCLUDE_SQL})
	`).all() as DeployRow[]
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
			COALESCE(weight_consumed_proof_size, 0) as metered_pov
		FROM transactions
		WHERE chain_name = 'eth-rpc'
			AND contract_name LIKE '%_rust'
			AND transaction_name = 'deploy'
			AND weight_consumed_ref_time IS NOT NULL
	`).all() as DeployRow[]
    ) {
        const evmBase = allRustToEvm[r.contract]
        if (evmBase && !rustMap.has(evmBase)) rustMap.set(evmBase, r)
    }

    const sumField = (rows: DeployRow[], f: (r: DeployRow) => number) =>
        rows.reduce((s, r) => s + f(r), 0)
    const sumPvm = (rows: DeployRow[], f: (r: DeployRow) => number) =>
        rows.reduce((s, r) => {
            const pvm = pvmMap.get(r.contract)
            return pvm ? s + f(pvm) : s
        }, 0)

    const makeRow = (metric: string, evm: number, pvm: number) => ({
        'Metric': metric,
        'EVM': fmt(Math.round(evm)),
        'PVM/Sol': fmt(Math.round(pvm)),
        'vs EVM': fmtPct(pvm, evm),
    })

    // All 19 EVM↔PVM/Sol deploy pairs
    const solPairs = deploys.filter((r) => pvmMap.has(r.contract))
    let md = `**All ${solPairs.length} EVM↔PVM/Solidity deploy pairs:**\n`
    md += table([
        makeRow(
            'Base ref_time',
            sumField(solPairs, (r) => r.base_rt),
            sumPvm(solPairs, (r) => r.base_rt),
        ),
        makeRow(
            'Metered ref_time',
            sumField(solPairs, (r) => r.metered_rt),
            sumPvm(solPairs, (r) => r.metered_rt),
        ),
    ]) + '\n\n'

    // 7 polkadot-contracts with Rust
    const polkadotContracts = new Set(Object.keys(EVM_TO_RUST))
    const rustPairs = deploys.filter((r) =>
        polkadotContracts.has(r.contract) && rustMap.has(r.contract)
    )
    const sumRust = (rows: DeployRow[], f: (r: DeployRow) => number) =>
        rows.reduce((s, r) => {
            const rust = rustMap.get(r.contract)
            return rust ? s + f(rust) : s
        }, 0)

    if (rustPairs.length > 0) {
        const makeRow3 = (
            metric: string,
            evm: number,
            sol: number,
            rust: number,
        ) => ({
            'Metric': metric,
            'EVM': fmt(Math.round(evm)),
            'PVM/Sol': fmt(Math.round(sol)),
            'vs EVM': fmtPct(sol, evm),
            'PVM/Rust': fmt(Math.round(rust)),
            'vs EVM ': fmtPct(rust, evm),
        })

        md += `**${rustPairs.length} deploy pairs where PVM/Rust exists:**\n`
        md += table([
            makeRow3(
                'Base ref_time',
                sumField(rustPairs, (r) => r.base_rt),
                sumPvm(rustPairs, (r) => r.base_rt),
                sumRust(rustPairs, (r) => r.base_rt),
            ),
            makeRow3(
                'Metered ref_time',
                sumField(rustPairs, (r) => r.metered_rt),
                sumPvm(rustPairs, (r) => r.metered_rt),
                sumRust(rustPairs, (r) => r.metered_rt),
            ),
            makeRow3(
                'Metered proof_size',
                sumField(rustPairs, (r) => r.metered_pov),
                sumPvm(rustPairs, (r) => r.metered_pov),
                sumRust(rustPairs, (r) => r.metered_pov),
            ),
        ]) + '\n\n'
    }

    return md
}

// ─── RQ2: Bytecode size comparison ───

function bytecodeSizeTable(): string {
    const deploys = db.prepare(`
		SELECT REPLACE(contract_name, '_evm', '') as contract
		FROM transactions
		WHERE chain_name = 'eth-rpc'
			AND contract_name LIKE '%_evm'
			AND transaction_name = 'deploy'
			AND weight_consumed_ref_time IS NOT NULL
			AND base_call_weight_ref_time IS NOT NULL
		ORDER BY contract
	`).all() as { contract: string }[]

    const rows = deploys.map((r) => {
        const evmSize = fileSize(join(CODEGEN_DIR, 'evm', `${r.contract}.bin`))
        const pvmSize = fileSize(
            join(CODEGEN_DIR, 'pvm', `${r.contract}.polkavm`),
        )
        const rustBytecodeNames: Record<string, string> = {
            Fibonacci: 'fibonacci_rust',
            Fibonacci_u256: 'fibonacci_u256_rust',
            Fibonacci_u256_iter: 'fibonacci_u256_iter_rust',
            SimpleToken: 'simple_token_with_alloc_rust',
        }
        const rustName = EVM_TO_RUST[r.contract] ??
            rustBytecodeNames[r.contract]
        const rustSize = rustName ? rustBytecodeSizeFn(rustName) : null
        const inkName = EVM_TO_INK[r.contract]
        const inkSize = inkName ? inkBytecodeSizeFn(inkName) : null
        if (evmSize == null || pvmSize == null) return null
        return { contract: r.contract, evmSize, pvmSize, rustSize, inkSize }
    }).filter((r) => r != null).sort((a, b) => a.evmSize - b.evmSize)

    return table(rows.map((r) => ({
        'Contract': r.contract,
        'EVM bytes': fmt(r.evmSize),
        'PVM/Solidity bytes': fmt(r.pvmSize),
        'Ratio': `${(r.pvmSize / r.evmSize).toFixed(1)}x`,
        'PVM/Rust bytes': r.rustSize != null ? fmt(r.rustSize) : '—',
        'Ratio ': r.rustSize != null
            ? `${(r.rustSize / r.evmSize).toFixed(1)}x`
            : '—',
        'ink! bytes': r.inkSize != null ? fmt(r.inkSize) : '—',
        'Ratio  ': r.inkSize != null
            ? `${(r.inkSize / r.evmSize).toFixed(1)}x`
            : '—',
    }))) + '\n\n'
}

// ─── RQ2: SimpleToken implementation variants ───

function simpleTokenTable(): string {
    const tokens = db.prepare(`
		SELECT contract_name, transaction_name, weight_consumed_ref_time as metered
		FROM transactions
		WHERE chain_name = 'eth-rpc'
			AND transaction_name <> 'deploy'
			AND weight_consumed_ref_time IS NOT NULL
			AND (contract_name IN ('SimpleToken_evm','SimpleToken_pvm')
				OR contract_name LIKE 'simple_token%')
		ORDER BY transaction_name, metered
	`).all() as {
        contract_name: string
        transaction_name: string
        metered: number
    }[]

    const txNames = [...new Set(tokens.map((r) => r.transaction_name))]
    const contracts = [...new Set(tokens.map((r) => r.contract_name))]

    const map = new Map<string, number>()
    for (const r of tokens) {
        map.set(`${r.contract_name}|${r.transaction_name}`, r.metered)
    }

    const evmBaseline = new Map<string, number>()
    for (const tx of txNames) {
        const evm = map.get(`SimpleToken_evm|${tx}`)
        if (evm) evmBaseline.set(tx, evm)
    }

    const rows = contracts.map((c) => {
        const row: Record<string, string> = { 'Contract': c }
        for (const tx of txNames) {
            const val = map.get(`${c}|${tx}`)
            const evm = evmBaseline.get(tx)
            if (val != null && evm != null) {
                const diff = c === 'SimpleToken_evm'
                    ? ''
                    : ` (${pct((val - evm) / evm * 100)})`
                row[tx] = fmt(val) + diff
            } else {
                row[tx] = '—'
            }
        }
        return row
    })

    return table(rows) + '\n\n'
}

// ─── RQ2: Fibonacci integer-width variants ───

function fibonacciTable(): string {
    const fib = db.prepare(`
		SELECT contract_name, weight_consumed_ref_time as metered
		FROM transactions
		WHERE chain_name = 'eth-rpc'
			AND transaction_name = 'fib_10'
			AND weight_consumed_ref_time IS NOT NULL
		ORDER BY metered
	`).all() as { contract_name: string; metered: number }[]

    const evmMetered = fib.find((r) => r.contract_name === 'Fibonacci_evm')
        ?.metered
    if (!evmMetered) return ''

    return table(fib.map((r) => ({
        'Contract': r.contract_name,
        'Metered ref_time': fmt(r.metered),
        'vs EVM': r.contract_name === 'Fibonacci_evm'
            ? '—'
            : pct((r.metered - evmMetered) / evmMetered * 100),
    }))) + '\n\n'
}

// ─── RQ3: Syscall per-call cost across VMs ───

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
			AND t.contract_id NOT IN (${TEST_EXCLUDE_SQL})
			AND s.op IN (${placeholders})
	`).get(vmFilter, ...ops) as { avg: number; calls: number } | null
    return row && row.calls > 0 ? row : null
}

function syscallCostTable(): string {
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

    const rows = ops.map((op) => {
        const evm = avgSyscallCost(op.evm, '%_evm')
        const sol = avgSyscallCost(op.pvmSol, '%_pvm')
        const rust = avgSyscallCost(op.pvmRust, '%_rust')
        if (!evm) return null
        return {
            'Operation': op.label,
            'EVM avg ref_time': fmt(evm.avg),
            'PVM/Solidity avg': sol ? fmt(sol.avg) : '—',
            'PVM/Rust avg': rust ? fmt(rust.avg) : '—',
            'EVM vs Sol': sol ? pct((sol.avg - evm.avg) / evm.avg * 100) : '—',
            'EVM vs Rust': rust
                ? pct((rust.avg - evm.avg) / evm.avg * 100)
                : '—',
        }
    }).filter((r) => r != null)

    return table(rows) + '\n\n'
}

// ─── RQ3: Cost decomposition (7 polkadot-contracts, three-way) ───

function costDecomposition7Table(): string {
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
    const rows = [
        ...mainCats.map((cat) => ({
            'Category': cat,
            'EVM total (calls)': fmtTotal(evmMap, cat),
            'EVM avg': fmtAvg(evmMap, cat),
            'PVM/Sol total (calls)': fmtTotal(pvmMap, cat),
            'PVM/Sol avg': fmtAvg(pvmMap, cat),
            'Rust total (calls)': fmtTotal(rustMap, cat),
            'Rust avg': fmtAvg(rustMap, cat),
        })),
        {
            'Category': 'Immutable data',
            'EVM total (calls)': '—',
            'EVM avg': '—',
            'PVM/Sol total (calls)': fmtTotal(pvmMap, 'Immutable data'),
            'PVM/Sol avg': fmtAvg(pvmMap, 'Immutable data'),
            'Rust total (calls)': '—',
            'Rust avg': '—',
        },
        {
            'Category': 'Other syscalls',
            'EVM total (calls)': '—',
            'EVM avg': '—',
            'PVM/Sol total (calls)': '—',
            'PVM/Sol avg': '—',
            'Rust total (calls)': fmtTotal(rustMap, 'Other'),
            'Rust avg': fmtAvg(rustMap, 'Other'),
        },
        {
            'Category': 'EVM opcodes',
            'EVM total (calls)': fmtTotal(evmMap, 'Other'),
            'EVM avg': fmtAvg(evmMap, 'Other'),
            'PVM/Sol total (calls)': '—',
            'PVM/Sol avg': '—',
            'Rust total (calls)': '—',
            'Rust avg': '—',
        },
        {
            'Category': 'Unattributed',
            'EVM total (calls)': `${
                fmt(Math.round((evmTotals.total_rt - evmAttrRt) / 1_000_000))
            }M / ${
                fmt(Math.round((evmTotals.total_pov - evmAttrPov) / 1_000))
            }K`,
            'EVM avg': '',
            'PVM/Sol total (calls)': `${
                fmt(Math.round((pvmTotals.total_rt - pvmAttrRt) / 1_000_000))
            }M / ${
                fmt(Math.round((pvmTotals.total_pov - pvmAttrPov) / 1_000))
            }K`,
            'PVM/Sol avg': '',
            'Rust total (calls)': `${
                fmt(Math.round((rustTotals.total_rt - rustAttrRt) / 1_000_000))
            }M / ${
                fmt(Math.round((rustTotals.total_pov - rustAttrPov) / 1_000))
            }K`,
            'Rust avg': '',
        },
        {
            'Category': '**Total metered**',
            'EVM total (calls)': `**${
                fmt(Math.round(evmTotals.total_rt / 1_000_000))
            }M / ${fmt(Math.round(evmTotals.total_pov / 1_000))}K**`,
            'EVM avg': '',
            'PVM/Sol total (calls)': `**${
                fmt(Math.round(pvmTotals.total_rt / 1_000_000))
            }M / ${fmt(Math.round(pvmTotals.total_pov / 1_000))}K**`,
            'PVM/Sol avg': '',
            'Rust total (calls)': `**${
                fmt(Math.round(rustTotals.total_rt / 1_000_000))
            }M / ${fmt(Math.round(rustTotals.total_pov / 1_000))}K**`,
            'Rust avg': '',
        },
    ]

    return table(rows) + '\n\n'
}

// ─── RQ3: PVM cost gap decomposition ───

function costGapDecompositionTable(): string {
    const raw = db.prepare(`
		WITH matched AS (
			SELECT
				e.hash as e_hash, p.hash as p_hash, e.chain_name as chain,
				e.weight_consumed_ref_time as e_rt,
				p.weight_consumed_ref_time as p_rt,
				e.weight_consumed_proof_size as e_pov,
				p.weight_consumed_proof_size as p_pov
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
				AND e.contract_id NOT IN (${TEST_EXCLUDE_SQL})
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
			SUM(p_rt - e_rt) as rt_gap,
			SUM(p_pov - e_pov) as pov_gap,
			SUM((p_rt - p_attr_rt) - (e_rt - e_attr_rt)) as unattr_rt,
			SUM((p_pov - p_attr_pov) - (e_pov - e_attr_pov)) as unattr_pov,
			SUM(p_call_rt - e_call_rt) as call_rt,
			SUM(p_call_pov - e_call_pov) as call_pov,
			SUM(p_immut_rt - e_immut_rt) as immut_rt,
			SUM(p_immut_pov - e_immut_pov) as immut_pov
		FROM per_pair
	`).get() as Record<string, number>

    const fmtDelta = (n: number) => (n >= 0 ? '+' : '') + fmt(Math.round(n))
    const rtGap = raw.rt_gap
    const povGap = raw.pov_gap
    const otherRt = rtGap - raw.unattr_rt - raw.call_rt - raw.immut_rt
    const otherPov = povGap - raw.unattr_pov - raw.call_pov - raw.immut_pov

    let md = `**Excluding CoinTool_App (${raw.n_pairs} pairs):**\n\n`

    md += table([
        {
            'Metric': 'Metered ref_time',
            'EVM total': fmt(Math.round(raw.sum_evm_rt)),
            'PVM total': fmt(Math.round(raw.sum_pvm_rt)),
            'PVM - EVM': fmtDelta(rtGap),
            'Diff': pct(rtGap / raw.sum_evm_rt * 100),
        },
        {
            'Metric': 'Metered proof_size',
            'EVM total': fmt(Math.round(raw.sum_evm_pov)),
            'PVM total': fmt(Math.round(raw.sum_pvm_pov)),
            'PVM - EVM': fmtDelta(povGap),
            'Diff': pct(povGap / raw.sum_evm_pov * 100),
        },
    ]) + '\n\n'

    const sources = [
        {
            source: 'Unattributed (interpreter + bytecode)',
            rt: raw.unattr_rt,
            pov: raw.unattr_pov,
        },
        { source: 'Cross-contract calls', rt: raw.call_rt, pov: raw.call_pov },
        {
            source: 'Immutable data (PVM-only)',
            rt: raw.immut_rt,
            pov: raw.immut_pov,
        },
        { source: 'Other attributed ops (net)', rt: otherRt, pov: otherPov },
        { source: '**Net PVM surplus**', rt: rtGap, pov: povGap },
    ]

    const fmtPctOfGap = (val: number, gap: number) =>
        gap === 0 ? '—' : (val / gap * 100).toFixed(1) + '%'

    md += table(sources.map((r) => ({
        'Source': r.source,
        'ref_time (ps)': fmtDelta(r.rt),
        '% of gap': r.source === '**Net PVM surplus**'
            ? '100%'
            : fmtPctOfGap(r.rt, rtGap),
        'proof_size (bytes)': fmtDelta(r.pov),
        '% of gap ': r.source === '**Net PVM surplus**'
            ? '100%'
            : fmtPctOfGap(r.pov, povGap),
    }))) + '\n\n'

    return md
}

// ─── Main ───

export async function generateEvmPvmSummary() {
    await ensureDir(REPORTS_DIR)

    const resolcVersion = new TextDecoder().decode(
        new Deno.Command('resolc', { args: ['--version'], stdout: 'piped' })
            .outputSync().stdout,
    ).trim()
    let md = `# EVM vs PVM Cost Summary\n\n`
    md += `Generated on: ${new Date().toISOString().split('T')[0]}\n`
    md += `resolc: ${resolcVersion}\n\n`

    // RQ1: Where do we spend the most?
    md += `## Base weight vs metered weight\n\n`
    md += baseVsMeteredTable()

    md += `## Top operations by metered cost\n\n`
    md += `**Execution transactions:**\n`
    md += topOpsTable(false)
    md += `**Deploy transactions:**\n`
    md += topOpsTable(true)

    // RQ2: What are the cost differences?
    md += `## Execution cost totals\n\n`
    md += execTotalsTable()

    md += `## Deployment cost totals\n\n`
    md += deployTotalsTable()

    md += `## Bytecode size comparison\n\n`
    md += bytecodeSizeTable()

    md += `## SimpleToken implementation variants\n\n`
    md += simpleTokenTable()

    md += `## Fibonacci integer-width variants\n\n`
    md += fibonacciTable()

    // RQ3: What are the sources of cost differences?
    md += `## Syscall per-call cost across VMs\n\n`
    md += syscallCostTable()

    md += `## Cost decomposition (7 polkadot-contracts)\n\n`
    md += costDecomposition7Table()

    md += `## PVM cost gap decomposition\n\n`
    md += costGapDecompositionTable()

    const outPath = join(REPORTS_DIR, 'evm_pvm_summary.md')
    await Deno.writeTextFile(outPath, md)
    console.log(`Written to ${outPath}`)
}

if (import.meta.main) {
    await generateEvmPvmSummary()
}
