#!/usr/bin/env -S deno run --allow-all
/**
 * HTML report generator - doesn't require a running RPC node
 * Run with: deno run --allow-all benchmark/html-report.ts
 */
import { ensureDir } from '@std/fs'
import { join } from '@std/path'

import {
    type BytecodeSizeHierarchy,
    DATASET_DESCRIPTIONS,
    DATASET_METHODOLOGY,
    getBaseVsMetered,
    getBenchmarkMetadata,
    getBytecodeHierarchy,
    getCategoryBreakdownHierarchy,
    getCategoryMappingHtml,
    getCostDecomposition7,
    getCostGapDecomposition,
    getDeployThreeWay,
    getDeployTotals,
    getExecTotals,
    getExecTotalsPairCount,
    getExecutiveSummary,
    getGasAnalysisHierarchy,
    getPerTxMedians,
    getSyscallCosts,
    getThreeWayTotals,
    getTopOps,
    getWeightAnalysisHierarchy,
} from './html-report/queries.ts'

import {
    card,
    categoryFilterControls,
    chartCanvas,
    dataTable,
    drilldownBytecodeChartScript,
    drilldownCategoryChartScript,
    drilldownChartScript,
    drilldownWeightChartScript,
    expandableBytecodeTable,
    expandableCategoryTable,
    expandableGasTable,
    expandableTableScript,
    expandableWeightTable,
    gasAnalysisFilterControls,
    htmlDocument,
    metricGrid,
    povChartScript,
    sectionCard,
    weightAnalysisFilterControls,
} from './html-report/templates.ts'

import {
    altImplLabel,
    type AltWeightSeries,
    buildCategoryColorMap,
    COLORS,
    getImplTypeColor,
    groupedBarChart,
    stackedBarChart,
    weightBreakdownChart,
} from './html-report/charts.ts'

const REPORTS_DIR = join(import.meta.dirname!, 'reports')

export async function generateHtmlReport(): Promise<void> {
    await ensureDir(REPORTS_DIR)

    const scripts: string[] = []
    let content = ''

    // Section 1: Executive Summary
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

    // Section 5: Bytecode Size
    const bytecodeSection = generateBytecodeSection()
    content += bytecodeSection.html
    scripts.push(bytecodeSection.scripts)

    // Section 6: EVM vs PVM Analysis
    content += generateEvmPvmAnalysis(bytecodeSection.hierarchy)

    // Generate final HTML
    const html = htmlDocument(content, scripts.join('\n'), getBenchmarkMetadata())

    const outputPath = join(REPORTS_DIR, 'benchmark_report.html')
    await Deno.writeTextFile(outputPath, html)
    console.log(`HTML report saved to ${outputPath}`)
}

function generateExecutiveSummary(): string {
    const summary = getExecutiveSummary()

    const metrics = [
        { value: summary.total_contracts, label: 'Contract Implementations' },
        { value: summary.total_transactions, label: 'Total Transactions' },
    ]

    const chainTableRows = summary.chains.map((chain) => [
        chain.chain_name,
        chain.contract_count,
        chain.transaction_count,
        Math.round(chain.avg_gas_used),
        chain.avg_ref_time ? Math.round(chain.avg_ref_time) : 'N/A',
        chain.avg_proof_size ? Math.round(chain.avg_proof_size) : 'N/A',
    ])

    const datasetDescriptions = Object.entries(DATASET_DESCRIPTIONS).map(
        ([name, desc]) => {
            const methodology = DATASET_METHODOLOGY[name]
            const details = methodology
                ? `<details class="methodology"><summary>&#9656; Selection criteria (show more)</summary>${methodology}</details>`
                : ''
            return `<li><strong>${name}</strong>: ${desc}${details}</li>`
        },
    ).join('')

    const summaryContent = `
        ${metricGrid(metrics)}
        <div style="margin-top: 1.5rem;">
            ${
        card(
            'Datasets',
            `<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">${datasetDescriptions}</ul>`,
        )
    }
        </div>
        <div style="margin-top: 1.5rem;">
            ${
        card(
            'Per-Runtime Summary',
            dataTable(
                [
                    'Runtime',
                    'Deployed Implementations',
                    'Transactions',
                    'Avg Gas',
                    'Avg ref_time',
                    'Avg proof_size',
                ],
                chainTableRows,
                { numberColumns: [1, 2, 3, 4, 5] },
            ),
        )
    }
        </div>
    `

    return sectionCard('summary', 'Summary', summaryContent)
}

function generateGasAnalysis(): { html: string; scripts: string } {
    const hierarchy = getGasAnalysisHierarchy()
    const scripts: string[] = []

    if (hierarchy.datasets.length === 0) {
        return {
            html: sectionCard(
                'gas-analysis',
                'Gas Analysis',
                card(
                    'No Data',
                    '<p>No gas data available. Run benchmarks first.</p>',
                ),
            ),
            scripts: '',
        }
    }

    // Average per-transaction % difference at dataset level
    const labels = hierarchy.datasets.map((d) => d.name)

    const toPctDiff = (val: number | null, base: number | null) =>
        val !== null && base !== null && base > 0
            ? Math.round((val / base - 1) * 10000) / 100
            : null

    const avgTxPctDiff = (
        contracts: typeof hierarchy.datasets[0]['contracts'],
        valKey: 'eth_rpc_evm_gas' | 'eth_rpc_pvm_gas',
    ) => {
        const diffs = contracts
            .flatMap((c) =>
                c.transactions.map((tx) => toPctDiff(tx[valKey], tx.geth_gas))
            )
            .filter((d): d is number => d !== null)
        return diffs.length > 0
            ? Math.round(
                diffs.reduce((s, d) => s + d, 0) / diffs.length * 100,
            ) / 100
            : null
    }

    // Discover all alt implementation types across all datasets
    const avgAltTxPctDiff = (
        contracts: typeof hierarchy.datasets[0]['contracts'],
        implLabel: string,
    ) => {
        const diffs: number[] = []
        for (const c of contracts) {
            const matchingAlts = c.alt_implementations.filter((a) =>
                altImplLabel(a.name) === implLabel
            )
            for (const alt of matchingAlts) {
                for (const altTx of alt.transactions) {
                    const baseTx = c.transactions.find((t) =>
                        t.name === altTx.name
                    )
                    const d = toPctDiff(altTx.pvm_gas, baseTx?.geth_gas ?? null)
                    if (d !== null) diffs.push(d)
                }
            }
        }
        return diffs.length > 0
            ? Math.round(
                diffs.reduce((s, d) => s + d, 0) / diffs.length * 100,
            ) / 100
            : null
    }

    // Collect all unique alt impl labels
    const altImplLabels = new Set<string>()
    for (const ds of hierarchy.datasets) {
        for (const c of ds.contracts) {
            for (const alt of c.alt_implementations) {
                altImplLabels.add(altImplLabel(alt.name))
            }
        }
    }

    const chartSeries: Array<{
        label: string
        data: (number | null)[]
        color: string
    }> = [
        {
            label: 'EVM',
            data: hierarchy.datasets.map((d) =>
                avgTxPctDiff(d.contracts, 'eth_rpc_evm_gas')
            ),
            color: COLORS.primary,
        },
        {
            label: 'PVM (Solidity)',
            data: hierarchy.datasets.map((d) =>
                avgTxPctDiff(d.contracts, 'eth_rpc_pvm_gas')
            ),
            color: COLORS.success,
        },
    ]

    for (const implLabel of altImplLabels) {
        const color = getImplTypeColor(implLabel)
        chartSeries.push({
            label: implLabel,
            data: hierarchy.datasets.map((d) =>
                avgAltTxPctDiff(d.contracts, implLabel)
            ),
            color: color.bg,
        })
    }

    const chartScript = groupedBarChart(
        'gasAnalysisChart',
        labels,
        chartSeries,
        { yLabel: 'Avg % difference vs Geth' },
    )
    scripts.push(chartScript)

    // Add expandable table script
    scripts.push(expandableTableScript())

    // Add drilldown chart script
    scripts.push(drilldownChartScript(hierarchy))

    const html = sectionCard(
        'gas-analysis',
        'Gas Analysis',
        `
        ${
            card(
                'Gas by Dataset (click bar to drill down, right-click to go back)',
                chartCanvas('gasAnalysisChart', 'wide'),
            )
        }
        ${gasAnalysisFilterControls()}
        ${
            card(
                'Detailed Gas Comparison (click to expand)',
                expandableGasTable(hierarchy),
            )
        }
    `,
    )

    return { html, scripts: scripts.join('\n') }
}

function generateWeightAnalysis(): { html: string; scripts: string } {
    const hierarchy = getWeightAnalysisHierarchy()
    const scripts: string[] = []

    if (hierarchy.datasets.length === 0) {
        return {
            html: sectionCard(
                'weight',
                'Weight Analysis (Revive only)',
                card(
                    'No Data',
                    '<p>No weight data available. Run benchmarks on eth-rpc chain.</p>',
                ),
            ),
            scripts: '',
        }
    }

    // Stacked bar chart showing metered vs overhead breakdown
    const labels = hierarchy.datasets.map((d) => d.name)

    // Discover all alt implementation types from weight data
    const altWeightLabels = new Set<string>()
    for (const ds of hierarchy.datasets) {
        for (const c of ds.contracts) {
            for (const alt of c.alt_implementations) {
                altWeightLabels.add(altImplLabel(alt.name))
            }
        }
    }

    // Build weight data for each alt implementation type
    const altWeightSeries: AltWeightSeries[] = []
    for (const implLabel of altWeightLabels) {
        const refTime = hierarchy.datasets.map((d) => {
            let sum = 0, count = 0
            for (const c of d.contracts) {
                for (
                    const alt of c.alt_implementations.filter((a) =>
                        altImplLabel(a.name) === implLabel
                    )
                ) {
                    for (const tx of alt.transactions) {
                        if (tx.pvm_ref_time !== null) {
                            sum += tx.pvm_ref_time
                            count++
                        }
                    }
                }
            }
            return count > 0 ? Math.round(sum / count) : null
        })
        const meteredPct = hierarchy.datasets.map((d) => {
            let sum = 0, count = 0
            for (const c of d.contracts) {
                for (
                    const alt of c.alt_implementations.filter((a) =>
                        altImplLabel(a.name) === implLabel
                    )
                ) {
                    for (const tx of alt.transactions) {
                        if (tx.pvm_metered_pct !== null) {
                            sum += tx.pvm_metered_pct
                            count++
                        }
                    }
                }
            }
            return count > 0 ? sum / count : null
        })
        if (refTime.some((v) => v !== null)) {
            altWeightSeries.push({
                label: implLabel,
                data: { refTime, meteredPct },
            })
        }
    }

    const chartScript = weightBreakdownChart(
        'weightAnalysisChart',
        labels,
        {
            refTime: hierarchy.datasets.map((d) => d.evm_ref_time),
            meteredPct: hierarchy.datasets.map((d) => d.evm_metered_pct),
        },
        {
            refTime: hierarchy.datasets.map((d) => d.pvm_ref_time),
            meteredPct: hierarchy.datasets.map((d) => d.pvm_metered_pct),
        },
        altWeightSeries,
        { yLabel: 'Avg ref_time per Transaction' },
    )
    scripts.push(chartScript)

    // Add drilldown chart script
    scripts.push(drilldownWeightChartScript(hierarchy))

    // Add PoV chart (benchmarked vs actual)
    scripts.push(povChartScript(hierarchy))

    const html = sectionCard(
        'weight',
        'Weight Analysis (Revive only)',
        `
        ${
            card(
                'Weight by Dataset (click bar to drill down, right-click to go back)',
                chartCanvas('weightAnalysisChart', 'wide'),
            )
        }
        ${
            card(
                'proof_size: Benchmarked vs Consumed (synced with weight chart drill-down)',
                chartCanvas('povAnalysisChart', 'wide'),
            )
        }
        ${weightAnalysisFilterControls()}
        ${(() => {
            const { refTimeTable, proofSizeTable } = expandableWeightTable(hierarchy)
            return card(
                'ref_time Comparison (click to expand)',
                refTimeTable,
            ) + card(
                'proof_size Comparison (click to expand)',
                proofSizeTable,
            )
        })()}
    `,
    )

    return { html, scripts: scripts.join('\n') }
}

function generateCategoryProfiling(): { html: string; scripts: string } {
    const hierarchy = getCategoryBreakdownHierarchy()
    const scripts: string[] = []

    if (hierarchy.datasets.length === 0) {
        return {
            html: sectionCard(
                'categories',
                'Opcode/Category Profiling',
                card('No Data', '<p>No category data available.</p>'),
            ),
            scripts: '',
        }
    }

    // Build stacked bar chart from hierarchy (dataset level)
    const labels = hierarchy.datasets.map((d) => d.name)
    const categoryColorMap = buildCategoryColorMap(hierarchy.allCategories)
    const stackedDatasets = hierarchy.allCategories.map((category) => {
        const data = hierarchy.datasets.map((d) => d.categories[category] ?? 0)
        return { label: category, data, color: categoryColorMap[category] }
    })

    const stackedChartScript = stackedBarChart(
        'categoryBreakdownChart',
        labels,
        stackedDatasets,
        {
            yLabel: '% of Total Cost',
            title: 'Category Breakdown by Dataset (click to drill down)',
        },
    )
    scripts.push(stackedChartScript)

    // Add drilldown script for category chart
    scripts.push(drilldownCategoryChartScript(hierarchy, categoryColorMap))

    const html = sectionCard(
        'categories',
        'Opcode/Category Profiling',
        `
        ${getCategoryMappingHtml()}
        ${
            card(
                'Category Breakdown (click bar to drill down, right-click to go back)',
                chartCanvas('categoryBreakdownChart', 'wide'),
            )
        }
        ${categoryFilterControls()}
        ${
            card(
                'Detailed Category Breakdown (click to expand)',
                expandableCategoryTable(hierarchy),
            )
        }
    `,
    )

    return { html, scripts: scripts.join('\n') }
}

function generateBytecodeSection(): {
    html: string
    scripts: string
    hierarchy: BytecodeSizeHierarchy | null
} {
    const hierarchy = getBytecodeHierarchy()

    if (hierarchy.datasets.length === 0) {
        return {
            html: sectionCard(
                'bytecode',
                'Bytecode Size',
                card(
                    'No Data',
                    '<p>No bytecode size data available. Run benchmarks first to generate bytecode_size_comparison.md</p>',
                ),
            ),
            scripts: '',
            hierarchy: null,
        }
    }

    const scripts: string[] = []
    const { implTypes } = hierarchy
    const labels = hierarchy.datasets.map((d) => d.name)

    // Build one Chart.js dataset per discovered impl type
    const chartDatasets = implTypes.map((implType) => {
        const color = getImplTypeColor(implType)
        const data = hierarchy.datasets.map((d) => {
            const vals = d.contracts
                .map((c) => c.sizes[implType])
                .filter((v): v is number => v !== null)
            return vals.length > 0
                ? Math.round(vals.reduce((s, v) => s + v, 0) / vals.length)
                : null
        })
        return {
            label: implType,
            data,
            backgroundColor: color.bg,
            borderColor: color.border,
            borderWidth: 1,
        }
    })

    const chartScript = `
        new Chart(document.getElementById('bytecodeChart'), {
            type: 'bar',
            data: {
                labels: ${JSON.stringify(labels)},
                datasets: ${JSON.stringify(chartDatasets)}
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'Avg Bytecode Size per Contract (click to drill down)' },
                    legend: { position: 'top' },
                    tooltip: {
                        callbacks: {
                            label: function(ctx) {
                                return ctx.dataset.label + ': ' + (ctx.raw ? ctx.raw.toLocaleString() + ' bytes' : 'N/A');
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: { maxRotation: 45, minRotation: 45 },
                    },
                    y: {
                        title: { display: true, text: 'Avg Size (bytes)' },
                        beginAtZero: true,
                    }
                }
            }
        });
    `
    scripts.push(chartScript)

    // Add drilldown script
    scripts.push(drilldownBytecodeChartScript(hierarchy))

    const html = sectionCard(
        'bytecode',
        'Bytecode Size',
        `
        ${
            card(
                'Bytecode Size by Dataset (click bar to drill down, right-click to go back)',
                chartCanvas('bytecodeChart', 'wide'),
            )
        }
        ${
            card(
                'Detailed Bytecode Comparison (click to expand)',
                expandableBytecodeTable(hierarchy),
            )
        }
    `,
    )

    return { html, scripts: scripts.join('\n'), hierarchy }
}

function generateEvmPvmAnalysis(
    bytecodeHierarchy: BytecodeSizeHierarchy | null,
): string {
    const fmt = (n: number) => n.toLocaleString()
    let content = ''

    // ── RQ1: Where do we spend the most? ──
    content += card('RQ1: Where do we spend the most?', '')

    // Base vs metered weight
    const baseVsMetered = getBaseVsMetered()
    if (baseVsMetered.length > 0) {
        const valPct = (v: number, p: number | null) =>
            p != null ? `${fmt(v)} (${p}%)` : fmt(v)
        content += card(
            'Base weight vs metered weight (deploy vs execution)',
            dataTable(
                [
                    'Type',
                    'Avg base ref_time',
                    'Avg metered ref_time',
                    'Avg base proof_size',
                    'Avg metered proof_size',
                ],
                baseVsMetered.map((r) => [
                    r.tx_type,
                    valPct(r.avg_base_rt, r.base_rt_pct),
                    valPct(r.avg_metered_rt, r.metered_rt_pct),
                    valPct(r.avg_base_pov, r.base_pov_pct),
                    valPct(r.avg_metered_pov, r.metered_pov_pct),
                ]),
            ),
        )
    }

    // Top ops (execution)
    const execOps = getTopOps(false)
    if (execOps.length > 0) {
        content += card(
            'Cost breakdown by operation category (execution)',
            dataTable(
                [
                    'Category',
                    'Total ref_time',
                    '% of ref_time',
                    'Total proof_size',
                    '% of proof_size',
                    'Calls',
                ],
                execOps.map((r) => [
                    r.category,
                    fmt(r.total_rt),
                    r.rt_pct,
                    fmt(r.total_pov),
                    r.pov_pct,
                    r.calls > 0 ? fmt(r.calls) : '—',
                ]),
                { numberColumns: [1, 3, 5] },
            ),
        )
    }

    // ── RQ2: What are the cost differences? ──
    content += card('RQ2: What are the cost differences?', '')

    // 93 EVM↔PVM/Sol execution cost totals
    const execTotals = getExecTotals()
    const execPairCount = getExecTotalsPairCount()
    if (execTotals.length > 0) {
        content += card(
            `${execPairCount} EVM↔PVM/Solidity execution pairs (excl. CoinTool_App)`,
            dataTable(
                ['Metric', 'EVM', 'PVM/Solidity', 'Diff'],
                execTotals.map(
                    (r) => [r.metric, fmt(r.evm), fmt(r.pvm_sol), r.diff],
                ),
                { numberColumns: [1, 2] },
            ),
        )
    }

    // 46 three-way comparison
    const threeWay = getThreeWayTotals()
    if (threeWay.rows.length > 0) {
        content += card(
            `${threeWay.pairCount} three-way pairs (7 polkadot-contracts)`,
            dataTable(
                ['Metric', 'EVM', 'PVM/Sol', 'vs EVM', 'PVM/Rust', 'vs EVM'],
                threeWay.rows.map(
                    (r) => [
                        r.metric,
                        fmt(r.evm),
                        fmt(r.pvm_sol),
                        r.vs_evm_sol,
                        fmt(r.pvm_rust),
                        r.vs_evm_rust,
                    ],
                ),
                { numberColumns: [1, 2, 4] },
            ),
        )
    }

    // Per-transaction medians
    const medians = getPerTxMedians()
    if (medians.length > 0) {
        content += card(
            'Per-transaction medians',
            dataTable(
                [
                    'Comparison',
                    'Median ref_time',
                    'Txs cheaper',
                    'Median proof_size',
                    'Txs cheaper',
                    'Median consumed',
                    'Txs cheaper',
                ],
                medians.map(
                    (r) => [
                        r.comparison,
                        r.median_ref_time,
                        r.txs_cheaper_rt,
                        r.median_proof_size,
                        r.txs_cheaper_pov,
                        r.median_consumed,
                        r.txs_cheaper_consumed,
                    ],
                ),
            ),
        )
    }

    // Deploy totals
    const deployTotals = getDeployTotals()
    if (deployTotals.rows.length > 0) {
        content += card(
            `${deployTotals.pairCount} EVM↔PVM/Solidity deploy pairs`,
            dataTable(
                ['Metric', 'EVM', 'PVM/Sol', 'vs EVM'],
                deployTotals.rows.map(
                    (r) => [r.metric, fmt(r.evm), fmt(r.pvm_sol), r.vs_evm],
                ),
                { numberColumns: [1, 2] },
            ),
        )
    }

    // Deploy three-way
    const deployThreeWay = getDeployThreeWay()
    if (deployThreeWay.rows.length > 0) {
        content += card(
            `${deployThreeWay.pairCount} deploy pairs where PVM/Rust exists`,
            dataTable(
                ['Metric', 'EVM', 'PVM/Sol', 'vs EVM', 'PVM/Rust', 'vs EVM'],
                deployThreeWay.rows.map(
                    (r) => [
                        r.metric,
                        fmt(r.evm),
                        fmt(r.pvm_sol),
                        r.vs_evm_sol,
                        fmt(r.pvm_rust),
                        r.vs_evm_rust,
                    ],
                ),
                { numberColumns: [1, 2, 4] },
            ),
        )
    }

    // Bytecode size comparison (derived from hierarchy)
    if (bytecodeHierarchy && bytecodeHierarchy.datasets.length > 0) {
        const allContracts = bytecodeHierarchy.datasets.flatMap((d) =>
            d.contracts
        )
        const bTypes = bytecodeHierarchy.implTypes
        const evmType = bTypes.find((t) => t === 'EVM')

        // Only show contracts that have an EVM implementation for ratio comparison
        const rows = allContracts
            .filter((c) => evmType && c.sizes[evmType] != null)
            .sort((a, b) => (a.sizes[evmType!] ?? 0) - (b.sizes[evmType!] ?? 0))
            .map((c) => {
                const evmBytes = c.sizes[evmType!]!
                const cells: (string | number)[] = [c.name]
                for (const t of bTypes) {
                    const sz = c.sizes[t]
                    cells.push(sz != null ? fmt(sz) : '—')
                    if (t === evmType) continue // no ratio for EVM vs itself
                    cells.push(
                        sz != null ? `${(sz / evmBytes).toFixed(1)}x` : '—',
                    )
                }
                return cells
            })

        if (rows.length > 0) {
            const headers: string[] = ['Contract']
            const numberCols: number[] = []
            for (const t of bTypes) {
                numberCols.push(headers.length)
                headers.push(`${t} bytes`)
                if (t !== evmType) headers.push('Ratio')
            }
            content += card(
                'Bytecode size comparison',
                dataTable(headers, rows, { numberColumns: numberCols }),
            )
        }
    }

    // ── RQ3: What are the sources? ──
    content += card('RQ3: What are the sources of cost differences?', '')

    // Per-call syscall costs
    const syscallCosts = getSyscallCosts()
    if (syscallCosts.length > 0) {
        content += card(
            'Per-call syscall costs across VMs',
            dataTable(
                [
                    'Operation',
                    'EVM avg ref_time',
                    'PVM/Sol avg',
                    'PVM/Rust avg',
                    'Sol vs EVM',
                    'Rust vs EVM',
                ],
                syscallCosts.map(
                    (r) => [
                        r.operation,
                        fmt(r.evm_avg),
                        r.pvm_sol_avg,
                        r.pvm_rust_avg,
                        r.evm_vs_sol,
                        r.evm_vs_rust,
                    ],
                ),
                { numberColumns: [1] },
            ),
        )
    }

    // Cost decomposition (7 polkadot-contracts)
    const decomp7 = getCostDecomposition7()
    if (decomp7.length > 0) {
        content += card(
            'Cost decomposition (7 polkadot-contracts, three-way)',
            dataTable(
                [
                    'Category',
                    'EVM total (calls)',
                    'EVM avg',
                    'PVM/Sol total (calls)',
                    'PVM/Sol avg',
                    'Rust total (calls)',
                    'Rust avg',
                ],
                decomp7.map(
                    (r) => [
                        r.category,
                        r.evm_total,
                        r.evm_avg,
                        r.pvm_sol_total,
                        r.pvm_sol_avg,
                        r.rust_total,
                        r.rust_avg,
                    ],
                ),
            ),
        )
    }

    // PVM cost gap decomposition
    const costGap = getCostGapDecomposition()
    if (costGap.pairCount > 0) {
        const gapTotals = card(
            `PVM cost gap overview (${costGap.pairCount} pairs, excl. CoinTool_App)`,
            dataTable(
                ['Metric', 'EVM total', 'PVM total', 'PVM - EVM', 'Diff'],
                [
                    [
                        'Metered ref_time',
                        fmt(costGap.totals.evm_rt),
                        fmt(costGap.totals.pvm_rt),
                        fmt(costGap.totals.pvm_rt - costGap.totals.evm_rt),
                        costGap.totals.rt_diff,
                    ],
                    [
                        'Metered proof_size',
                        fmt(costGap.totals.evm_pov),
                        fmt(costGap.totals.pvm_pov),
                        fmt(costGap.totals.pvm_pov - costGap.totals.evm_pov),
                        costGap.totals.pov_diff,
                    ],
                    [
                        'Consumed proof_size',
                        fmt(costGap.totals.evm_consumed),
                        fmt(costGap.totals.pvm_consumed),
                        fmt(costGap.totals.pvm_consumed - costGap.totals.evm_consumed),
                        costGap.totals.consumed_diff,
                    ],
                ],
                { numberColumns: [1, 2, 3] },
            ),
        )

        const gapSources = card(
            'PVM cost gap decomposition',
            dataTable(
                [
                    'Source',
                    'ref_time (ps)',
                    '% of gap',
                    'proof_size (bytes)',
                    '% of gap',
                ],
                costGap.sources.map(
                    (r) => [
                        r.source,
                        r.ref_time_delta,
                        r.rt_pct_of_gap,
                        r.proof_size_delta,
                        r.pov_pct_of_gap,
                    ],
                ),
            ),
        )

        content += gapTotals + gapSources
    }

    return sectionCard('evm-pvm-analysis', 'EVM vs PVM Analysis', content)
}

if (import.meta.main) {
    await generateHtmlReport()
}
