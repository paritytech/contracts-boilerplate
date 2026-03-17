#!/usr/bin/env -S deno run --allow-read --allow-write
/**
 * Parse StorageWeightReclaim logs from a polkadot-parachain collator and
 * update the transactions table with actual PoV (proof_size) per transaction.
 *
 * Usage:
 *   ./benchmark/import-pov.ts <logfile> [chain_name]
 *
 * The log lines look like:
 *   Reclaiming storage weight. block: 42 extrinsic: 1 benchmarked: 12345 consumed: 6789
 *   Benchmarked storage weight smaller than consumed storage weight. block: 42 extrinsic: 1 benchmarked: 100 consumed: 200
 *
 * Joins on block_number in the transactions table.
 */
import { DatabaseSync } from 'node:sqlite'
import { parseArgs } from '@std/cli'

const cli = parseArgs(Deno.args, {
    string: ['chain'],
    default: { chain: 'eth-rpc' },
})

const logFile = cli._[0] as string
if (!logFile) {
    console.error('Usage: ./benchmark/import-pov.ts <logfile> [--chain <chain_name>]')
    Deno.exit(1)
}

const chainName = cli.chain

// Parse log lines
const content = await Deno.readTextFile(logFile)
const lines = content.split('\n')

// Match both trace (reclaiming) and error (underestimate) log lines
const pattern = /block: (\d+) extrinsic: (\d+) benchmarked: (\d+) consumed: (\d+)/

interface PovEntry {
    block: number
    extrinsic: number
    benchmarked: number
    consumed: number
}

const entries: PovEntry[] = []
for (const line of lines) {
    if (!line.includes('storage_reclaim_pallet')) continue
    const match = line.match(pattern)
    if (match) {
        entries.push({
            block: parseInt(match[1]),
            extrinsic: parseInt(match[2]),
            benchmarked: parseInt(match[3]),
            consumed: parseInt(match[4]),
        })
    }
}

console.log(`Parsed ${entries.length} StorageWeightReclaim entries from ${logFile}`)

if (entries.length === 0) {
    console.error('No StorageWeightReclaim entries found. Make sure the collator was run with:')
    console.error('  -lruntime::storage_reclaim_pallet=trace')
    Deno.exit(1)
}

// Update database
const db = new DatabaseSync('stats.db')

// Add columns if they don't exist
for (const col of ['actual_pov', 'benchmarked_pov']) {
    try {
        db.exec(`ALTER TABLE transactions ADD COLUMN ${col} INTEGER`)
        console.log(`Added ${col} column to transactions table`)
    } catch {
        // Column already exists
    }
}

const update = db.prepare(
    'UPDATE transactions SET actual_pov = ?, benchmarked_pov = ? WHERE block_number = ? AND chain_name = ?',
)

let updated = 0
let skipped = 0

for (const entry of entries) {
    // extrinsic 0 is typically the timestamp inherent, user txs start at 1
    // With instant seal and one tx per block, extrinsic 1 is our transaction
    const result = update.run(entry.consumed, entry.benchmarked, entry.block, chainName)
    if (result.changes > 0) {
        updated++
    } else {
        skipped++
    }
}

console.log(`Updated ${updated} transactions with actual PoV`)
if (skipped > 0) {
    console.log(`Skipped ${skipped} entries (no matching block_number in DB for chain '${chainName}')`)
}

// Show summary of actual vs benchmarked proof_size
const summary = db.prepare(`
    SELECT
        contract_name,
        transaction_name,
        block_number,
        weight_consumed_proof_size as benchmarked_pov,
        actual_pov,
        CASE WHEN actual_pov > 0
            THEN ROUND(100.0 * (weight_consumed_proof_size - actual_pov) / actual_pov, 1)
            ELSE NULL
        END as overcharge_pct
    FROM transactions
    WHERE chain_name = ? AND actual_pov IS NOT NULL
    ORDER BY contract_name, transaction_name
`).all(chainName) as Array<Record<string, unknown>>

if (summary.length > 0) {
    console.log('\n--- Actual PoV vs Benchmarked proof_size ---')
    console.log('Contract | Transaction | Block | Benchmarked | Actual | Overcharge%')
    console.log('---------|-------------|-------|-------------|--------|------------')
    for (const row of summary) {
        console.log(
            `${row.contract_name} | ${row.transaction_name} | ${row.block_number} | ${row.benchmarked_pov} | ${row.actual_pov} | ${row.overcharge_pct ?? 'N/A'}%`,
        )
    }
}

db.close()
