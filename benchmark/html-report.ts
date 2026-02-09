#!/usr/bin/env -S deno run --allow-all
/**
 * HTML report generator - doesn't require a running RPC node
 * Run with: deno run --allow-all benchmark/html-report.ts
 */
import { ensureDir } from '@std/fs'
import { join } from '@std/path'

import {
    getExecutiveSummary,
    getGasAnalysisHierarchy,
    getWeightAnalysisHierarchy,
    getCategoryBreakdownHierarchy,
    getFibonacciComparison,
    getBytecodeHierarchy,
    getCategoryMappingHtml,
    DATASET_DESCRIPTIONS,
    DATASET_METHODOLOGY,
} from './html-report/queries.ts'

import {
    htmlDocument,
    sectionCard,
    card,
    chartCanvas,
    metricGrid,
    dataTable,
    expandableGasTable,
    expandableTableScript,
    drilldownChartScript,
    gasAnalysisFilterControls,
    expandableWeightTable,
    drilldownWeightChartScript,
    weightAnalysisFilterControls,
    fibonacciComparisonTable,
    expandableCategoryTable,
    drilldownCategoryChartScript,
    categoryFilterControls,
    expandableBytecodeTable,
    drilldownBytecodeChartScript,
} from './html-report/templates.ts'

import {
    stackedBarChart,
    groupedBarChart,
    weightBreakdownChart,
    buildCategoryColorMap,
    COLORS,
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

    // Generate final HTML
    const html = htmlDocument(content, scripts.join('\n'))

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

    const chainTableRows = summary.chains.map(chain => [
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
        }
    ).join('')

    const summaryContent = `
        ${metricGrid(metrics)}
        <div style="margin-top: 1.5rem;">
            ${card('Datasets', `<ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8;">${datasetDescriptions}</ul>`)}
        </div>
        <div style="margin-top: 1.5rem;">
            ${card('Per-Runtime Summary', dataTable(
                ['Runtime', 'Deployed Implementations', 'Transactions', 'Avg Gas', 'Avg ref_time', 'Avg proof_size'],
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

    // Average per-transaction % difference at dataset level
    const labels = hierarchy.datasets.map(d => d.name)

    const toPctDiff = (val: number | null, base: number | null) =>
        val !== null && base !== null && base > 0 ? Math.round((val / base - 1) * 10000) / 100 : null

    const avgTxPctDiff = (contracts: typeof hierarchy.datasets[0]['contracts'], valKey: 'eth_rpc_evm_gas' | 'eth_rpc_pvm_gas') => {
        const diffs = contracts
            .flatMap(c => c.transactions.map(tx => toPctDiff(tx[valKey], tx.geth_gas)))
            .filter((d): d is number => d !== null)
        return diffs.length > 0 ? Math.round(diffs.reduce((s, d) => s + d, 0) / diffs.length * 100) / 100 : null
    }

    const chartScript = groupedBarChart(
        'gasAnalysisChart',
        labels,
        [
            { label: 'eth-rpc (EVM) vs Geth', data: hierarchy.datasets.map(d => avgTxPctDiff(d.contracts, 'eth_rpc_evm_gas')), color: COLORS.primary },
            { label: 'eth-rpc (PVM) vs Geth', data: hierarchy.datasets.map(d => avgTxPctDiff(d.contracts, 'eth_rpc_pvm_gas')), color: COLORS.success },
        ],
        { yLabel: 'Avg % difference vs Geth' }
    )
    scripts.push(chartScript)

    // Add expandable table script
    scripts.push(expandableTableScript())

    // Add drilldown chart script
    scripts.push(drilldownChartScript(hierarchy))

    const html = sectionCard('gas-analysis', 'Gas Analysis', `
        ${card('Gas by Dataset (click bar to drill down, right-click to go back)', chartCanvas('gasAnalysisChart', 'wide'))}
        ${gasAnalysisFilterControls()}
        ${card('Detailed Gas Comparison (click to expand)', expandableGasTable(hierarchy))}
    `)

    return { html, scripts: scripts.join('\n') }
}

function generateWeightAnalysis(): { html: string; scripts: string } {
    const hierarchy = getWeightAnalysisHierarchy()
    const fibonacciData = getFibonacciComparison()
    const scripts: string[] = []

    if (hierarchy.datasets.length === 0) {
        return {
            html: sectionCard('weight', 'Weight Analysis (Revive only)',
                card('No Data', '<p>No weight data available. Run benchmarks on eth-rpc chain.</p>')
            ),
            scripts: '',
        }
    }

    // Stacked bar chart showing metered vs overhead breakdown
    const labels = hierarchy.datasets.map(d => d.name)

    const chartScript = weightBreakdownChart(
        'weightAnalysisChart',
        labels,
        {
            refTime: hierarchy.datasets.map(d => d.evm_ref_time),
            meteredPct: hierarchy.datasets.map(d => d.evm_metered_pct),
        },
        {
            refTime: hierarchy.datasets.map(d => d.pvm_ref_time),
            meteredPct: hierarchy.datasets.map(d => d.pvm_metered_pct),
        },
        { yLabel: 'Avg ref_time per Transaction' }
    )
    scripts.push(chartScript)

    // Add drilldown chart script
    scripts.push(drilldownWeightChartScript(hierarchy))

    // Fibonacci implementations comparison table
    let fibonacciSection = ''
    if (fibonacciData.length > 0) {
        fibonacciSection = card('Fibonacci Implementations Comparison', fibonacciComparisonTable(fibonacciData))
    }

    const html = sectionCard('weight', 'Weight Analysis (Revive only)', `
        ${card('Weight by Dataset (click bar to drill down, right-click to go back)', chartCanvas('weightAnalysisChart', 'wide'))}
        ${weightAnalysisFilterControls()}
        ${card('Detailed Weight Comparison (click to expand)', expandableWeightTable(hierarchy))}
        ${fibonacciSection}
    `)

    return { html, scripts: scripts.join('\n') }
}

function generateCategoryProfiling(): { html: string; scripts: string } {
    const hierarchy = getCategoryBreakdownHierarchy()
    const scripts: string[] = []

    if (hierarchy.datasets.length === 0) {
        return {
            html: sectionCard('categories', 'Opcode/Category Profiling',
                card('No Data', '<p>No category data available.</p>')
            ),
            scripts: '',
        }
    }

    // Build stacked bar chart from hierarchy (dataset level)
    const labels = hierarchy.datasets.map(d => d.name)
    const categoryColorMap = buildCategoryColorMap(hierarchy.allCategories)
    const stackedDatasets = hierarchy.allCategories.map(category => {
        const data = hierarchy.datasets.map(d => d.categories[category] ?? 0)
        return { label: category, data, color: categoryColorMap[category] }
    })

    const stackedChartScript = stackedBarChart(
        'categoryBreakdownChart',
        labels,
        stackedDatasets,
        { yLabel: '% of Total Cost', title: 'Category Breakdown by Dataset (click to drill down)' }
    )
    scripts.push(stackedChartScript)

    // Add drilldown script for category chart
    scripts.push(drilldownCategoryChartScript(hierarchy, categoryColorMap))

    const html = sectionCard('categories', 'Opcode/Category Profiling', `
        ${getCategoryMappingHtml()}
        ${card('Category Breakdown (click bar to drill down, right-click to go back)', chartCanvas('categoryBreakdownChart', 'wide'))}
        ${categoryFilterControls()}
        ${card('Detailed Category Breakdown (click to expand)', expandableCategoryTable(hierarchy))}
    `)

    return { html, scripts: scripts.join('\n') }
}

function generateBytecodeSection(): { html: string; scripts: string } {
    const hierarchy = getBytecodeHierarchy()

    if (hierarchy.datasets.length === 0) {
        return {
            html: sectionCard('bytecode', 'Bytecode Size',
                card('No Data', '<p>No bytecode size data available. Run benchmarks first to generate bytecode_size_comparison.md</p>')
            ),
            scripts: '',
        }
    }

    const scripts: string[] = []

    // Show average bytecode size per contract at dataset level
    const labels = hierarchy.datasets.map(d => d.name)

    const avg = (total: number | null, contracts: typeof hierarchy.datasets[0]['contracts'], vm: 'evm' | 'pvm') => {
        if (total === null) return null
        const count = contracts.filter(c => vm === 'evm' ? c.evm_size !== null : c.pvm_size !== null).length
        return count > 0 ? Math.round(total / count) : null
    }

    const evmData = hierarchy.datasets.map(d => avg(d.evm_size, d.contracts, 'evm'))
    const pvmData = hierarchy.datasets.map(d => avg(d.pvm_size, d.contracts, 'pvm'))

    const chartScript = `
        new Chart(document.getElementById('bytecodeChart'), {
            type: 'bar',
            data: {
                labels: ${JSON.stringify(labels)},
                datasets: [
                    {
                        label: 'EVM',
                        data: ${JSON.stringify(evmData)},
                        backgroundColor: 'rgba(13, 110, 253, 0.8)',
                        borderColor: 'rgba(13, 110, 253, 1)',
                        borderWidth: 1,
                    },
                    {
                        label: 'PVM',
                        data: ${JSON.stringify(pvmData)},
                        backgroundColor: 'rgba(25, 135, 84, 0.8)',
                        borderColor: 'rgba(25, 135, 84, 1)',
                        borderWidth: 1,
                    }
                ]
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

    const html = sectionCard('bytecode', 'Bytecode Size', `
        ${card('Bytecode Size by Dataset (click bar to drill down, right-click to go back)', chartCanvas('bytecodeChart', 'wide'))}
        ${card('Detailed Bytecode Comparison (click to expand)', expandableBytecodeTable(hierarchy))}
    `)

    return { html, scripts: scripts.join('\n') }
}

if (import.meta.main) {
    await generateHtmlReport()
}
