import { Artifacts, db } from './lib.ts'
import { logger } from '../utils/logger.ts'
import { ensureDir } from '@std/fs'
import { join } from '@std/path'
import { tablemark } from 'tablemark'
import { sumOf } from '@std/collections'

const REPORTS_DIR = join(import.meta.dirname!, 'reports')

function table(data: Record<string, unknown>[]) {
    return tablemark(data, { align: undefined, headerCase: 'preserve' })
}

export async function report(contracts: Artifacts) {
    await ensureDir(REPORTS_DIR)
    await generateOpcodeAnalysis()
    await generateContractComparison()
    await generateBytecodeComparison(contracts)
    logger.info(`Reports saved to ${REPORTS_DIR}`)
}

async function generateOpcodeAnalysis() {
    let markdown = `# Opcode Analysis\n\n`
    markdown += `Generated on: ${new Date().toISOString().split('T')[0]}\n\n`

    const allData = db.prepare(`
        SELECT
            t.chain_name,
            t.contract_id,
            t.contract_name,
            t.transaction_name,
            t.gas_used,
            t.weight_consumed_ref_time,
            t.weight_consumed_proof_size,
            t.base_call_weight_ref_time,
            t.base_call_weight_proof_size,
            s.op,
            SUM(s.gas_cost) as total_gas_cost,
            COUNT(*) as count,
            SUM(s.weight_cost_ref_time) as total_weight_cost_ref_time,
            SUM(s.weight_cost_proof_size) as total_weight_cost_proof_size
        FROM transactions AS t
        JOIN 
            transaction_steps AS s ON s.hash = t.hash AND s.chain_name = t.chain_name
        GROUP BY 
            t.hash, t.chain_name, s.op
        ORDER BY 
            t.chain_name, t.contract_id, t.contract_name, t.transaction_name, total_gas_cost DESC
    `).all() as Array<{
        chain_name: string
        contract_id: string
        contract_name: string
        transaction_name: string
        gas_used: number
        weight_consumed_ref_time: number | null
        weight_consumed_proof_size: number | null
        base_call_weight_ref_time: number | null
        base_call_weight_proof_size: number | null
        op: string | null
        total_gas_cost: number | null
        count: number
        total_weight_cost_ref_time: number | null
        total_weight_cost_proof_size: number | null
    }>

    const byChain = Object.groupBy(allData, (row) => row.chain_name)

    for (const [chainName, chainRows] of Object.entries(byChain)) {
        if (!chainRows) continue

        markdown += `## Chain: ${chainName}\n\n`

        const byTransaction = Object.groupBy(
            chainRows,
            (row) => `${row.contract_name}:${row.transaction_name}`,
        )

        // Sort entries by contract_id, then transaction_name
        const sortedEntries = Object.entries(byTransaction).sort((a, b) => {
            const txA = a[1]?.[0]
            const txB = b[1]?.[0]
            if (!txA || !txB) return 0

            // First sort by contract_id
            if (txA.contract_id !== txB.contract_id) {
                return txA.contract_id.localeCompare(txB.contract_id)
            }

            // Then by transaction_name
            return txA.transaction_name.localeCompare(txB.transaction_name)
        })

        for (const [, opcodes] of sortedEntries) {
            if (!opcodes) continue

            const tx = opcodes[0]
            markdown += `### ${tx.contract_name} - ${tx.transaction_name}\n\n`
            markdown +=
                `- **Total Gas Used:** ${tx.gas_used.toLocaleString()}\n`

            // Display weight metrics if available
            if (
                tx.weight_consumed_ref_time !== null &&
                tx.base_call_weight_ref_time !== null
            ) {
                const totalRefTime = tx.base_call_weight_ref_time +
                    tx.weight_consumed_ref_time
                const weightConsumedPercent =
                    ((tx.weight_consumed_ref_time / totalRefTime) * 100)
                        .toFixed(1)

                markdown += [
                    `- **Base Call Weight:** ref_time=${tx.base_call_weight_ref_time.toLocaleString()}, proof_size=${
                        tx.base_call_weight_proof_size?.toLocaleString() ??
                            'N/A'
                    }`,
                    `- **Total Weight:** ref_time=${totalRefTime.toLocaleString()}, proof_size=${
                        ((tx.base_call_weight_proof_size ?? 0) +
                            (tx.weight_consumed_proof_size ?? 0))
                            .toLocaleString()
                    }`,
                    `- **Weight Consumed:** ref_time=${tx.weight_consumed_ref_time.toLocaleString()} (${weightConsumedPercent}% of total), proof_size=${
                        (tx.weight_consumed_proof_size ?? 0).toLocaleString()
                    }`,
                ].join('\n') + '\n'
            }

            markdown += '\n'

            const topOpcodes = opcodes!.slice(0, 20)
            const totalGasFromOpcodes = sumOf(
                topOpcodes,
                (op) => op.total_gas_cost!,
            )

            // Check if weight cost data is available
            const hasWeightCost = topOpcodes.some(
                (op) => op.total_weight_cost_ref_time !== null,
            )

            const tableData = topOpcodes.map((opcode) => {
                const avgGas = (opcode.total_gas_cost! / opcode.count).toFixed(
                    1,
                )

                const row: Record<string, string | null | undefined> = {
                    'Opcode': opcode.op,
                    'Total Gas': opcode.total_gas_cost?.toLocaleString(),
                    'Call Count': opcode.count.toLocaleString(),
                    'Avg Gas/Call': avgGas,
                }

                if (
                    hasWeightCost && opcode.total_weight_cost_ref_time !== null
                ) {
                    const percentOfRefTime = tx.weight_consumed_ref_time
                        ? ((opcode.total_weight_cost_ref_time /
                            tx.weight_consumed_ref_time) * 100).toFixed(1)
                        : '0.0'

                    const percentOfProofSize = tx.weight_consumed_proof_size
                        ? ((opcode.total_weight_cost_proof_size ?? 0) /
                            tx.weight_consumed_proof_size * 100).toFixed(1)
                        : '0.0'

                    row['ref time'] = opcode.total_weight_cost_ref_time
                        .toLocaleString()
                    row['proof size'] =
                        opcode.total_weight_cost_proof_size?.toLocaleString() ??
                            '0'
                    row['% of ref time'] = `${percentOfRefTime}%`
                    row['% of proof size'] = `${percentOfProofSize}%`
                } else {
                    const percentOfOpcodes =
                        ((opcode.total_gas_cost! / totalGasFromOpcodes) * 100)
                            .toFixed(1)
                    const percentOfTxGas =
                        ((opcode.total_gas_cost! / tx.gas_used) * 100).toFixed(
                            1,
                        )
                    row['% of opcodes'] = `${percentOfOpcodes}%`
                    row['% of tx Gas'] = `${percentOfTxGas}%`
                }

                return row
            })

            markdown += table(tableData) + '\n\n'
        }
    }

    await Deno.writeTextFile(
        join(REPORTS_DIR, 'opcode_analysis.md'),
        markdown,
    )
}

async function generateContractComparison() {
    let markdown = `# Revive Contract Comparison\n\n`
    markdown += `Generated on: ${new Date().toISOString().split('T')[0]}\n\n`
    markdown +=
        `Comparison of gas usage across different contract implementations.\n\n`

    // Get all transactions with contract_id extracted in SQL
    const txRows = db.prepare(`
        SELECT
            contract_id,
            contract_name,
            transaction_name,
            gas_used,
            weight_consumed_ref_time,
            weight_consumed_proof_size,
            base_call_weight_ref_time,
            base_call_weight_proof_size
        FROM transactions
        WHERE chain_name == 'eth-rpc'
        ORDER BY contract_id, transaction_name, (base_call_weight_ref_time + weight_consumed_ref_time) ASC
    `).all() as Array<{
        contract_name: string
        transaction_name: string
        gas_used: number
        contract_id: string
        weight_consumed_ref_time: number | null
        weight_consumed_proof_size: number | null
        base_call_weight_ref_time: number | null
        base_call_weight_proof_size: number | null
    }>

    const groupedByContractAndTx = Object.groupBy(
        txRows,
        (row) => `${row.contract_id}:${row.transaction_name}`,
    )

    // Generate one table per (contract_id, operation)
    for (
        const [groupKey, implementations] of Object.entries(
            groupedByContractAndTx,
        )
    ) {
        if (!implementations) continue

        const [contract_id, transaction_name] = groupKey.split(':')
        markdown += `## ${contract_id} - ${transaction_name}\n\n`

        // Find best (lowest) total weight ref_time
        const bestRefTime = Math.min(
            ...implementations
                .filter((row) =>
                    row.weight_consumed_ref_time !== null &&
                    row.base_call_weight_ref_time !== null
                )
                .map((row) =>
                    row.base_call_weight_ref_time! +
                    row.weight_consumed_ref_time!
                ),
        )

        const tableData = implementations.map((row) => {
            const result: Record<string, string> = {
                'Implementation': row.contract_name,
            }

            if (
                row.weight_consumed_ref_time !== null &&
                row.base_call_weight_ref_time !== null
            ) {
                const totalRefTime = row.base_call_weight_ref_time +
                    row.weight_consumed_ref_time
                const totalProofSize = (row.base_call_weight_proof_size ?? 0) +
                    (row.weight_consumed_proof_size ?? 0)
                const meterPercent =
                    ((row.weight_consumed_ref_time / totalRefTime) * 100)
                        .toFixed(1)
                const vsBest = totalRefTime === bestRefTime
                    ? '-'
                    : `+${((totalRefTime / bestRefTime - 1) * 100).toFixed(1)}%`

                result['ref_time'] = totalRefTime
                    .toLocaleString()
                result['vs Best'] = vsBest
                result['% metered'] = `${meterPercent}%`
                result['pov'] = totalProofSize.toLocaleString()
            }

            return result
        })

        markdown += table(tableData) + '\n\n'
    }

    await Deno.writeTextFile(
        join(REPORTS_DIR, 'contract_comparison.md'),
        markdown,
    )
}

async function generateBytecodeComparison(contracts: Artifacts) {
    let markdown = `# Bytecode Size Comparison\n\n`
    markdown += `Generated on: ${new Date().toISOString().split('T')[0]}\n\n`

    // Collect bytecode sizes for all contracts
    interface BytecodeEntry {
        contract_id: string
        contract_name: string
        size_bytes: number
        vm_type: string
    }

    const bytecodeData: BytecodeEntry[] = []

    for (const artifact of contracts) {
        for (const src of artifact.srcs) {
            const bytecode = src.getBytecode()
            const sizeBytes = bytecode.length / 2 - 1 // Convert hex string to byte count
            const vmType = src.supportEvm() ? 'EVM' : 'PVM'

            bytecodeData.push({
                contract_id: artifact.id,
                contract_name: src.getName(),
                size_bytes: sizeBytes,
                vm_type: vmType,
            })
        }
    }

    // Group by contract ID to compare implementations
    const byContractId = Object.groupBy(
        bytecodeData,
        (entry) => entry.contract_id,
    )

    // Generate per-contract comparison
    for (const [contractId, entries] of Object.entries(byContractId)) {
        if (!entries || entries.length <= 1) continue // Skip if only one implementation

        markdown += `## ${contractId} Implementations\n\n`

        const sorted = entries.sort((a, b) => a.size_bytes - b.size_bytes)
        const smallest = sorted[0].size_bytes

        const tableData = sorted.map((entry) => {
            const vsSmallest = entry.size_bytes === smallest
                ? '-'
                : `+${((entry.size_bytes / smallest - 1) * 100).toFixed(1)}%`

            return {
                'Contract': entry.contract_name,
                'VM Type': entry.vm_type,
                'Size (bytes)': entry.size_bytes.toLocaleString(),
                'vs Smallest': vsSmallest,
            }
        })

        markdown += table(tableData) + '\n\n'
    }

    await Deno.writeTextFile(
        join(REPORTS_DIR, 'bytecode_size_comparison.md'),
        markdown,
    )
}
