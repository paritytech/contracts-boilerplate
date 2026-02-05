#!/usr/bin/env -S deno run --allow-all
/**
 * Standalone HTML report generator - doesn't require a running RPC node
 * Run with: deno run --allow-all benchmark/generate-html-report.ts
 *
 * Note: Bytecode size comparison is not available in standalone mode.
 * Use './benchmark/contracts.ts --html-report' for full report with bytecode sizes.
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
    comboBarLineChart,
    weightBreakdownChart,
    getCategoryColor,
    COLORS,
} from './html-report/charts.ts'

const REPORTS_DIR = join(import.meta.dirname!, 'reports')

async function generateHtmlReport(): Promise<void> {
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
        { yLabel: 'Total Gas Used (log scale)', logScale: true }
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
        { yLabel: 'ref_time' }
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
        ${weightAnalysisFilterControls()}
        ${card('Weight by Dataset (click bar to drill down, right-click to go back)', chartCanvas('weightAnalysisChart', 'wide'))}
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
    const stackedDatasets = hierarchy.allCategories.map((category, idx) => {
        const data = hierarchy.datasets.map(d => d.categories[category] ?? 0)
        return { label: category, data, color: getCategoryColor(idx) }
    })

    const stackedChartScript = stackedBarChart(
        'categoryBreakdownChart',
        labels,
        stackedDatasets,
        { yLabel: '% of Total Cost', title: 'Category Breakdown by Dataset (click to drill down)' }
    )
    scripts.push(stackedChartScript)

    // Add drilldown script for category chart
    scripts.push(drilldownCategoryChartScript(hierarchy))

    const html = sectionCard('categories', 'Opcode/Category Profiling', `
        ${categoryFilterControls()}
        ${card('Category Breakdown (click bar to drill down, right-click to go back)', chartCanvas('categoryBreakdownChart', 'wide'))}
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

    // Create horizontal bar chart at dataset level
    const labels = hierarchy.datasets.map(d => d.name)
    const evmData = hierarchy.datasets.map(d => d.evm_size)
    const pvmData = hierarchy.datasets.map(d => d.pvm_size)

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
                    title: { display: true, text: 'Total Bytecode Size by Dataset (click to drill down)' },
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
                        title: { display: true, text: 'Size (bytes)' },
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

await generateHtmlReport()
