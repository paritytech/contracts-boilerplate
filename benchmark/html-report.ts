import { ensureDir } from '@std/fs'
import { join } from '@std/path'
import { logger } from '../utils/logger.ts'
import type { Artifacts } from './lib.ts'

import {
    getExecutiveSummary,
    getGasAnalysisHierarchy,
    getWeightBreakdown,
    getRefTimeVsProofSize,
    getCategoryBreakdown,
    getDatasetComparison,
    getCategoryProfileComparison,
    type BytecodeSize,
} from './html-report/queries.ts'

import {
    htmlDocument,
    sectionCard,
    card,
    chartCanvas,
    metricGrid,
    dataTable,
    grid,
    expandableGasTable,
    expandableTableScript,
    drilldownChartScript,
    gasAnalysisFilterControls,
} from './html-report/templates.ts'

import {
    groupedBarChart,
    stackedBarChart,
    comboBarLineChart,
    scatterChart,
    radarChart,
    horizontalBarChart,
    getCategoryColor,
    COLORS,
} from './html-report/charts.ts'

const REPORTS_DIR = join(import.meta.dirname!, 'reports')

export async function generateHtmlReport(contracts: Artifacts): Promise<void> {
    await ensureDir(REPORTS_DIR)

    const scripts: string[] = []
    let content = ''

    // Section 1: Summary
    content += generateExecutiveSummary()

    // Section 2: Gas Analysis
    const gasSection = generateGasAnalysis()
    content += gasSection.html
    scripts.push(gasSection.scripts)

    // Section 3: Weight Analysis
    const weightSection = generateWeightAnalysis()
    content += weightSection.html
    scripts.push(weightSection.scripts)

    // Section 4: Category Profiling
    const categorySection = generateCategoryProfiling()
    content += categorySection.html
    scripts.push(categorySection.scripts)

    // Section 5: Dataset Analysis
    const datasetSection = generateDatasetAnalysis()
    content += datasetSection.html
    scripts.push(datasetSection.scripts)

    // Section 6: Bytecode Size
    const bytecodeSection = generateBytecodeSize(contracts)
    content += bytecodeSection.html
    scripts.push(bytecodeSection.scripts)

    // Generate final HTML
    const html = htmlDocument(content, scripts.join('\n'))

    const outputPath = join(REPORTS_DIR, 'benchmark_report.html')
    await Deno.writeTextFile(outputPath, html)
    logger.info(`HTML report saved to ${outputPath}`)
}

function generateExecutiveSummary(): string {
    const summary = getExecutiveSummary()

    const metrics = [
        { value: summary.total_contracts, label: 'Total Contracts' },
        { value: summary.total_transactions, label: 'Total Transactions' },
        { value: summary.avg_gas_used, label: 'Avg Gas Used' },
        { value: summary.avg_ref_time ?? 'N/A', label: 'Avg ref_time' },
    ]

    const chainTableRows = summary.chains.map(chain => [
        chain.chain_name,
        chain.contract_count,
        chain.transaction_count,
        Math.round(chain.avg_gas_used),
        chain.avg_ref_time ? Math.round(chain.avg_ref_time) : 'N/A',
        chain.avg_proof_size ? Math.round(chain.avg_proof_size) : 'N/A',
    ])

    const summaryContent = `
        ${metricGrid(metrics)}
        <div style="margin-top: 1.5rem;">
            ${card('Per-Chain Summary', dataTable(
                ['Chain', 'Contracts', 'Transactions', 'Avg Gas', 'Avg ref_time', 'Avg proof_size'],
                chainTableRows,
                { numberColumns: [1, 2, 3, 4, 5] }
            ))}
        </div>
    `

    return sectionCard('summary', 'Summary', summaryContent)
}

function generateGasAnalysis(): { html: string; scripts: string } {
    const hierarchy = getGasAnalysisHierarchy()
    const scripts: string[] = []

    if (hierarchy.datasets.length === 0) {
        return {
            html: sectionCard('gas-analysis', 'Gas Analysis',
                card('No Data', '<p>No gas data available. Run benchmarks first.</p>')
            ),
            scripts: '',
        }
    }

    // Combo bar + line chart at dataset level
    const labels = hierarchy.datasets.map(d => d.name)

    const chartScript = comboBarLineChart(
        'gasAnalysisChart',
        labels,
        [
            { label: 'eth-rpc (EVM)', data: hierarchy.datasets.map(d => d.eth_rpc_evm_gas), color: COLORS.primary },
            { label: 'eth-rpc (PVM)', data: hierarchy.datasets.map(d => d.eth_rpc_pvm_gas), color: COLORS.success },
        ],
        { label: 'Geth', data: hierarchy.datasets.map(d => d.geth_gas), color: COLORS.danger },
        { yLabel: 'Total Gas Used', logScale: true }
    )
    scripts.push(chartScript)

    // Add expandable table script
    scripts.push(expandableTableScript())

    // Add drilldown chart script
    scripts.push(drilldownChartScript(hierarchy))

    const html = sectionCard('gas-analysis', 'Gas Analysis', `
        ${gasAnalysisFilterControls()}
        ${card('Gas by Dataset (click bar to drill down, right-click to go back)', chartCanvas('gasAnalysisChart', 'wide'))}
        ${card('Detailed Gas Comparison (click to expand)', expandableGasTable(hierarchy))}
    `)

    return { html, scripts: scripts.join('\n') }
}

function generateWeightAnalysis(): { html: string; scripts: string } {
    const weightData = getWeightBreakdown()
    const refTimeVsProofSize = getRefTimeVsProofSize()
    const scripts: string[] = []

    if (weightData.length === 0) {
        return {
            html: sectionCard('weight', 'Weight Analysis (Revive only)',
                card('No Data', '<p>No weight data available. Run benchmarks on eth-rpc chain.</p>')
            ),
            scripts: '',
        }
    }

    // Stacked bar chart: base_call_weight vs weight_consumed
    const weightLabels = weightData.slice(0, 20).map(w => `${w.contract_id}:${w.transaction_name}`)
    const stackedChartScript = stackedBarChart(
        'weightBreakdownChart',
        weightLabels,
        [
            { label: 'Base Call Weight', data: weightData.slice(0, 20).map(w => w.base_call_weight_ref_time), color: COLORS.primary },
            { label: 'Weight Consumed', data: weightData.slice(0, 20).map(w => w.weight_consumed_ref_time), color: COLORS.success },
        ],
        { yLabel: 'ref_time' }
    )
    scripts.push(stackedChartScript)

    // Scatter plot: ref_time vs proof_size
    const scatterData = refTimeVsProofSize.slice(0, 50).map(d => ({
        x: d.ref_time,
        y: d.proof_size,
        label: `${d.contract_id}:${d.transaction_name}`,
    }))

    const scatterChartScript = scatterChart(
        'refTimeProofSizeChart',
        scatterData,
        { xLabel: 'ref_time', yLabel: 'proof_size', title: 'ref_time vs proof_size' }
    )
    scripts.push(scatterChartScript)

    // Data table
    const tableRows = weightData.slice(0, 20).map(w => {
        const totalRefTime = w.base_call_weight_ref_time + w.weight_consumed_ref_time
        const consumedPercent = ((w.weight_consumed_ref_time / totalRefTime) * 100).toFixed(1)
        return [
            w.contract_name,
            w.transaction_name,
            w.base_call_weight_ref_time.toLocaleString(),
            w.weight_consumed_ref_time.toLocaleString(),
            totalRefTime.toLocaleString(),
            `${consumedPercent}%`,
        ]
    })

    const html = sectionCard('weight', 'Weight Analysis (Revive only)', `
        ${grid(`
            ${card('Weight Breakdown (ref_time)', chartCanvas('weightBreakdownChart', 'wide'))}
            ${card('ref_time vs proof_size', chartCanvas('refTimeProofSizeChart'))}
        `)}
        ${card('Weight Details', dataTable(
            ['Contract', 'Transaction', 'Base Weight', 'Consumed', 'Total', '% Consumed'],
            tableRows,
            { numberColumns: [2, 3, 4] }
        ))}
    `)

    return { html, scripts: scripts.join('\n') }
}

function generateCategoryProfiling(): { html: string; scripts: string } {
    const categoryData = getCategoryBreakdown()
    const profileComparison = getCategoryProfileComparison()
    const scripts: string[] = []

    if (categoryData.length === 0) {
        return {
            html: sectionCard('categories', 'Opcode/Category Profiling',
                card('No Data', '<p>No category data available.</p>')
            ),
            scripts: '',
        }
    }

    // Get unique categories and transactions for stacked bar
    const categories = [...new Set(categoryData.map(c => c.category))].slice(0, 12)
    const transactions = [...new Set(categoryData.map(c => `${c.contract_id}:${c.transaction_name}`))].slice(0, 15)

    // Build stacked bar datasets
    const stackedDatasets = categories.map((category, idx) => {
        const data = transactions.map(tx => {
            const [contract_id, transaction_name] = tx.split(':')
            const entry = categoryData.find(
                c => c.category === category && c.contract_id === contract_id && c.transaction_name === transaction_name
            )
            return entry?.percent_of_total ?? 0
        })
        return { label: category, data, color: getCategoryColor(idx) }
    })

    const stackedChartScript = stackedBarChart(
        'categoryBreakdownChart',
        transactions,
        stackedDatasets,
        { yLabel: '% of Total Cost' }
    )
    scripts.push(stackedChartScript)

    // Radar chart: EVM vs PVM category profile
    const radarCategories = profileComparison.slice(0, 10).map(p => p.category)
    const radarChartScript = radarChart(
        'categoryRadarChart',
        radarCategories,
        [
            { label: 'EVM', data: profileComparison.slice(0, 10).map(p => p.evm_percent), color: COLORS.primary },
            { label: 'PVM', data: profileComparison.slice(0, 10).map(p => p.pvm_percent), color: COLORS.success },
        ],
        { title: 'Category Profile (% of Total Cost)' }
    )
    scripts.push(radarChartScript)

    // Category comparison table
    const tableRows = profileComparison.slice(0, 15).map(p => [
        p.category,
        `${p.evm_percent.toFixed(1)}%`,
        `${p.pvm_percent.toFixed(1)}%`,
        `${(p.pvm_percent - p.evm_percent) > 0 ? '+' : ''}${(p.pvm_percent - p.evm_percent).toFixed(1)}%`,
    ])

    const html = sectionCard('categories', 'Opcode/Category Profiling', `
        ${grid(`
            ${card('Category Breakdown per Transaction', chartCanvas('categoryBreakdownChart', 'wide'))}
            ${card('EVM vs PVM Category Profile', chartCanvas('categoryRadarChart'))}
        `)}
        ${card('Category Comparison', dataTable(
            ['Category', 'EVM %', 'PVM %', 'Difference'],
            tableRows,
            { numberColumns: [] }
        ))}
    `)

    return { html, scripts: scripts.join('\n') }
}

function generateDatasetAnalysis(): { html: string; scripts: string } {
    const datasetData = getDatasetComparison()
    const scripts: string[] = []

    if (datasetData.length === 0) {
        return {
            html: sectionCard('datasets', 'Dataset Analysis',
                card('No Data', '<p>No dataset data available.</p>')
            ),
            scripts: '',
        }
    }

    // Get unique datasets and chains
    const datasets = [...new Set(datasetData.map(d => d.dataset))]
    const chains = [...new Set(datasetData.map(d => d.chain_name))]

    // Grouped bar chart: avg gas per dataset
    const gasDatasets = chains.map((chain, idx) => {
        const data = datasets.map(dataset => {
            const entry = datasetData.find(d => d.dataset === dataset && d.chain_name === chain)
            return entry?.avg_gas ?? 0
        })
        const color = idx === 0 ? COLORS.primary : COLORS.success
        return { label: chain, data, color }
    })

    const gasChartScript = groupedBarChart(
        'datasetGasChart',
        datasets,
        gasDatasets,
        { yLabel: 'Average Gas' }
    )
    scripts.push(gasChartScript)

    // Grouped bar chart: transaction count per dataset
    const countDatasets = chains.map((chain, idx) => {
        const data = datasets.map(dataset => {
            const entry = datasetData.find(d => d.dataset === dataset && d.chain_name === chain)
            return entry?.transaction_count ?? 0
        })
        const color = idx === 0 ? COLORS.primary : COLORS.success
        return { label: chain, data, color }
    })

    const countChartScript = groupedBarChart(
        'datasetCountChart',
        datasets,
        countDatasets,
        { yLabel: 'Transaction Count' }
    )
    scripts.push(countChartScript)

    // Data table
    const tableRows = datasetData.map(d => [
        d.dataset,
        d.chain_name,
        d.avg_gas.toLocaleString(),
        d.avg_ref_time?.toLocaleString() ?? 'N/A',
        d.transaction_count,
    ])

    const html = sectionCard('datasets', 'Dataset Analysis', `
        ${grid(`
            ${card('Average Gas by Dataset', chartCanvas('datasetGasChart'))}
            ${card('Transaction Count by Dataset', chartCanvas('datasetCountChart'))}
        `)}
        ${card('Dataset Summary', dataTable(
            ['Dataset', 'Chain', 'Avg Gas', 'Avg ref_time', 'Transactions'],
            tableRows,
            { numberColumns: [2, 3, 4] }
        ))}
    `)

    return { html, scripts: scripts.join('\n') }
}

function generateBytecodeSize(contracts: Artifacts): { html: string; scripts: string } {
    const scripts: string[] = []

    // Collect bytecode sizes
    const bytecodeData: BytecodeSize[] = []

    for (const artifact of contracts) {
        for (const src of artifact.srcs) {
            const bytecode = src.getBytecode()
            const sizeBytes = bytecode.length / 2 - 1
            const vmType = src.supportEvm() ? 'EVM' : 'PVM'

            bytecodeData.push({
                contract_id: artifact.id,
                contract_name: src.getName(),
                vm_type: vmType,
                size_bytes: sizeBytes,
            })
        }
    }

    if (bytecodeData.length === 0) {
        return {
            html: sectionCard('bytecode', 'Bytecode Size',
                card('No Data', '<p>No bytecode data available.</p>')
            ),
            scripts: '',
        }
    }

    // Group by contract_id for comparison
    const byContractId = new Map<string, BytecodeSize[]>()
    for (const entry of bytecodeData) {
        if (!byContractId.has(entry.contract_id)) {
            byContractId.set(entry.contract_id, [])
        }
        byContractId.get(entry.contract_id)!.push(entry)
    }

    // Prepare data for horizontal bar chart
    const labels: string[] = []
    const evmSizes: number[] = []
    const pvmSizes: number[] = []

    for (const [contractId, entries] of byContractId) {
        if (entries.length < 2) continue

        const evmEntry = entries.find(e => e.vm_type === 'EVM')
        const pvmEntry = entries.find(e => e.vm_type === 'PVM')

        if (evmEntry && pvmEntry) {
            labels.push(contractId)
            evmSizes.push(evmEntry.size_bytes)
            pvmSizes.push(pvmEntry.size_bytes)
        }
    }

    const barChartScript = horizontalBarChart(
        'bytecodeSizeChart',
        labels,
        [
            { label: 'EVM', data: evmSizes, color: COLORS.primary },
            { label: 'PVM', data: pvmSizes, color: COLORS.success },
        ],
        { xLabel: 'Size (bytes)' }
    )
    scripts.push(barChartScript)

    // Data table with comparison
    const tableRows: Array<Array<string | number>> = []
    for (const [contractId, entries] of byContractId) {
        const evmEntry = entries.find(e => e.vm_type === 'EVM')
        const pvmEntry = entries.find(e => e.vm_type === 'PVM')

        if (evmEntry && pvmEntry) {
            const diff = ((pvmEntry.size_bytes - evmEntry.size_bytes) / evmEntry.size_bytes) * 100
            tableRows.push([
                contractId,
                evmEntry.size_bytes.toLocaleString(),
                pvmEntry.size_bytes.toLocaleString(),
                `${diff > 0 ? '+' : ''}${diff.toFixed(1)}%`,
            ])
        } else {
            for (const entry of entries) {
                tableRows.push([
                    contractId,
                    entry.vm_type === 'EVM' ? entry.size_bytes.toLocaleString() : 'N/A',
                    entry.vm_type === 'PVM' ? entry.size_bytes.toLocaleString() : 'N/A',
                    'N/A',
                ])
            }
        }
    }

    const html = sectionCard('bytecode', 'Bytecode Size', `
        ${card('EVM vs PVM Bytecode Size', chartCanvas('bytecodeSizeChart', 'tall'))}
        ${card('Size Comparison', dataTable(
            ['Contract', 'EVM (bytes)', 'PVM (bytes)', 'Difference'],
            tableRows,
            { numberColumns: [1, 2] }
        ))}
    `)

    return { html, scripts: scripts.join('\n') }
}
