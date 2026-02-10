// Color palettes
const COLORS = {
    primary: 'rgba(13, 110, 253, 0.8)',
    primaryLight: 'rgba(13, 110, 253, 0.4)',
    secondary: 'rgba(108, 117, 125, 0.8)',
    secondaryLight: 'rgba(108, 117, 125, 0.4)',
    success: 'rgba(25, 135, 84, 0.8)',
    successLight: 'rgba(25, 135, 84, 0.4)',
    warning: 'rgba(255, 193, 7, 0.8)',
    warningLight: 'rgba(255, 193, 7, 0.4)',
    danger: 'rgba(220, 53, 69, 0.8)',
    dangerLight: 'rgba(220, 53, 69, 0.4)',
    info: 'rgba(13, 202, 240, 0.8)',
    infoLight: 'rgba(13, 202, 240, 0.4)',
    purple: 'rgba(111, 66, 193, 0.8)',
    purpleLight: 'rgba(111, 66, 193, 0.4)',
    orange: 'rgba(253, 126, 20, 0.8)',
    orangeLight: 'rgba(253, 126, 20, 0.4)',
    teal: 'rgba(32, 201, 151, 0.8)',
    tealLight: 'rgba(32, 201, 151, 0.4)',
    pink: 'rgba(214, 51, 132, 0.8)',
    pinkLight: 'rgba(214, 51, 132, 0.4)',
}

const CATEGORY_COLORS = [
    COLORS.primary, COLORS.success, COLORS.warning, COLORS.danger,
    COLORS.info, COLORS.purple, COLORS.orange, COLORS.teal,
    COLORS.pink, COLORS.secondary, COLORS.primaryLight, COLORS.successLight,
    COLORS.warningLight, COLORS.dangerLight, COLORS.infoLight, COLORS.purpleLight,
]

export interface ChartData {
    labels: string[]
    datasets: Array<{
        label: string
        data: (number | null)[]
        backgroundColor?: string | string[]
        borderColor?: string | string[]
        borderWidth?: number
    }>
}

export interface ChartOptions {
    responsive?: boolean
    maintainAspectRatio?: boolean
    indexAxis?: 'x' | 'y'
    scales?: Record<string, unknown>
    plugins?: Record<string, unknown>
}

function jsonStringify(obj: unknown): string {
    return JSON.stringify(obj, (_key, value) => {
        if (typeof value === 'number' && !Number.isFinite(value)) {
            return null
        }
        return value
    })
}

export function groupedBarChart(
    canvasId: string,
    labels: string[],
    datasets: Array<{ label: string; data: (number | null)[]; color: string }>,
    options: { title?: string; xLabel?: string; yLabel?: string; horizontal?: boolean; logScale?: boolean } = {}
): string {
    const chartData: ChartData = {
        labels,
        datasets: datasets.map(ds => ({
            label: ds.label,
            data: ds.data,
            backgroundColor: ds.color,
            borderColor: ds.color.replace('0.8', '1'),
            borderWidth: 1,
        })),
    }

    const yScale = options.logScale
        ? {
            type: 'logarithmic',
            title: { display: !!options.yLabel, text: options.yLabel || '' },
        }
        : {
            title: { display: !!options.yLabel, text: options.yLabel || '' },
            beginAtZero: true,
        }

    const chartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: options.horizontal ? 'y' : 'x',
        plugins: {
            title: options.title ? { display: true, text: options.title } : { display: false },
            legend: { position: 'top' },
        },
        scales: {
            x: {
                title: { display: !!options.xLabel, text: options.xLabel || '' },
                ticks: { maxRotation: 45, minRotation: 45 },
            },
            y: yScale,
        },
    }

    return `
        new Chart(document.getElementById('${canvasId}'), {
            type: 'bar',
            data: ${jsonStringify(chartData)},
            options: ${jsonStringify(chartOptions)}
        });
    `
}

export function stackedBarChart(
    canvasId: string,
    labels: string[],
    datasets: Array<{ label: string; data: number[]; color: string }>,
    options: { title?: string; xLabel?: string; yLabel?: string; horizontal?: boolean } = {}
): string {
    const chartData: ChartData = {
        labels,
        datasets: datasets.map(ds => ({
            label: ds.label,
            data: ds.data,
            backgroundColor: ds.color,
            borderColor: ds.color.replace('0.8', '1'),
            borderWidth: 1,
        })),
    }

    const chartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: options.horizontal ? 'y' : 'x',
        plugins: {
            title: options.title ? { display: true, text: options.title } : { display: false },
            legend: { position: 'top' },
        },
        scales: {
            x: {
                stacked: true,
                title: { display: !!options.xLabel, text: options.xLabel || '' },
                ticks: { maxRotation: 45, minRotation: 45 },
            },
            y: {
                stacked: true,
                title: { display: !!options.yLabel, text: options.yLabel || '' },
                beginAtZero: true,
            },
        },
    }

    return `
        new Chart(document.getElementById('${canvasId}'), {
            type: 'bar',
            data: ${jsonStringify(chartData)},
            options: ${jsonStringify(chartOptions)}
        });
    `
}

export function comboBarLineChart(
    canvasId: string,
    labels: string[],
    barDatasets: Array<{ label: string; data: (number | null)[]; color: string }>,
    lineDataset: { label: string; data: (number | null)[]; color: string },
    options: { title?: string; xLabel?: string; yLabel?: string; logScale?: boolean } = {}
): string {
    const datasets = [
        // Bar datasets
        ...barDatasets.map(ds => ({
            type: 'bar' as const,
            label: ds.label,
            data: ds.data,
            backgroundColor: ds.color,
            borderColor: ds.color.replace('0.8', '1'),
            borderWidth: 1,
            order: 2,
        })),
        // Line dataset
        {
            type: 'line' as const,
            label: lineDataset.label,
            data: lineDataset.data,
            borderColor: lineDataset.color.replace('0.8', '1'),
            backgroundColor: 'transparent',
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: lineDataset.color.replace('0.8', '1'),
            tension: 0.1,
            order: 1,
        },
    ]

    const chartData = { labels, datasets }

    const yScale = options.logScale
        ? {
            type: 'logarithmic',
            title: { display: !!options.yLabel, text: options.yLabel || '' },
        }
        : {
            title: { display: !!options.yLabel, text: options.yLabel || '' },
            beginAtZero: true,
        }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: options.title ? { display: true, text: options.title } : { display: false },
            legend: { position: 'top' },
        },
        scales: {
            x: {
                title: { display: !!options.xLabel, text: options.xLabel || '' },
                ticks: { maxRotation: 45, minRotation: 45 },
            },
            y: yScale,
        },
    }

    return `
        new Chart(document.getElementById('${canvasId}'), {
            type: 'bar',
            data: ${jsonStringify(chartData)},
            options: ${jsonStringify(chartOptions)}
        });
    `
}

export function weightBreakdownChart(
    canvasId: string,
    labels: string[],
    evmData: { refTime: (number | null)[]; meteredPct: (number | null)[] },
    pvmData: { refTime: (number | null)[]; meteredPct: (number | null)[] },
    rustData: { refTime: (number | null)[]; meteredPct: (number | null)[] } | null,
    options: { title?: string; yLabel?: string } = {}
): string {
    // Calculate metered and overhead portions for each
    const calcMetered = (data: { refTime: (number | null)[]; meteredPct: (number | null)[] }) =>
        data.refTime.map((rt, i) => {
            if (rt === null || data.meteredPct[i] === null) return null
            return rt * (data.meteredPct[i]! / 100)
        })
    const calcOverhead = (data: { refTime: (number | null)[]; meteredPct: (number | null)[] }) =>
        data.refTime.map((rt, i) => {
            if (rt === null || data.meteredPct[i] === null) return null
            return rt * (1 - data.meteredPct[i]! / 100)
        })

    const evmMetered = calcMetered(evmData)
    const evmOverhead = calcOverhead(evmData)
    const pvmMetered = calcMetered(pvmData)
    const pvmOverhead = calcOverhead(pvmData)

    const datasets: Array<Record<string, unknown>> = [
        {
            label: 'EVM Metered',
            data: evmMetered,
            backgroundColor: COLORS.primary,
            borderColor: COLORS.primary.replace('0.8', '1'),
            borderWidth: 1,
            stack: 'evm',
        },
        {
            label: 'EVM Overhead',
            data: evmOverhead,
            backgroundColor: COLORS.primaryLight,
            borderColor: COLORS.primary.replace('0.8', '1'),
            borderWidth: 1,
            stack: 'evm',
        },
        {
            label: 'PVM (Solidity) Metered',
            data: pvmMetered,
            backgroundColor: COLORS.success,
            borderColor: COLORS.success.replace('0.8', '1'),
            borderWidth: 1,
            stack: 'pvm',
        },
        {
            label: 'PVM (Solidity) Overhead',
            data: pvmOverhead,
            backgroundColor: COLORS.successLight,
            borderColor: COLORS.success.replace('0.8', '1'),
            borderWidth: 1,
            stack: 'pvm',
        },
    ]

    if (rustData) {
        datasets.push(
            {
                label: 'Rust Metered',
                data: calcMetered(rustData),
                backgroundColor: COLORS.orange,
                borderColor: COLORS.orange.replace('0.8', '1'),
                borderWidth: 1,
                stack: 'rust',
            },
            {
                label: 'Rust Overhead',
                data: calcOverhead(rustData),
                backgroundColor: COLORS.orangeLight,
                borderColor: COLORS.orange.replace('0.8', '1'),
                borderWidth: 1,
                stack: 'rust',
            },
        )
    }

    const chartData = { labels, datasets }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            title: { display: true, text: 'Weight (ref_time) by Dataset (click to drill down)' },
            legend: { position: 'top' },
        },
        scales: {
            x: {
                ticks: { maxRotation: 45, minRotation: 45 },
            },
            y: {
                stacked: true,
                title: { display: true, text: options.yLabel || 'ref_time' },
                beginAtZero: true,
            },
        },
    }

    return `
        (function() {
            window.weightEvmMeteredPct = ${jsonStringify(evmData.meteredPct)};
            window.weightPvmMeteredPct = ${jsonStringify(pvmData.meteredPct)};
            window.weightRustMeteredPct = ${jsonStringify(rustData?.meteredPct ?? [])};
            new Chart(document.getElementById('${canvasId}'), {
                type: 'bar',
                data: ${jsonStringify(chartData)},
                options: {
                    ...${jsonStringify(chartOptions)},
                    plugins: {
                        ...${jsonStringify(chartOptions.plugins)},
                        tooltip: {
                            callbacks: {
                                afterBody: function(context) {
                                    if (!context || context.length === 0) return '';
                                    const idx = context[0].dataIndex;
                                    const evmPct = window.weightEvmMeteredPct[idx];
                                    const pvmPct = window.weightPvmMeteredPct[idx];
                                    const rustPct = window.weightRustMeteredPct[idx];
                                    const lines = [];
                                    if (evmPct !== null) lines.push('EVM % metered: ' + evmPct.toFixed(1) + '%');
                                    if (pvmPct !== null) lines.push('PVM % metered: ' + pvmPct.toFixed(1) + '%');
                                    if (rustPct !== null && rustPct !== undefined) lines.push('Rust % metered: ' + rustPct.toFixed(1) + '%');
                                    return lines.length > 0 ? '\\n' + lines.join('\\n') : '';
                                }
                            }
                        }
                    }
                }
            });
        })();
    `
}

// Colors for Fibonacci implementations
const FIBONACCI_COLORS = [
    'rgba(78, 121, 167, 0.8)',   // EVM Solidity - blue
    'rgba(89, 161, 79, 0.8)',    // PVM Solidity - green
    'rgba(242, 142, 44, 0.8)',   // Ink - orange
    'rgba(225, 87, 89, 0.8)',    // Rust - red
    'rgba(118, 183, 178, 0.8)',  // Rust u128 - teal
    'rgba(176, 122, 161, 0.8)',  // Rust u256 - purple
]

export interface FibonacciChartData {
    variant: string
    label: string
    transaction_name: string
    ref_time: number | null
}

export function fibonacciComparisonChart(
    canvasId: string,
    data: FibonacciChartData[],
    options: { title?: string } = {}
): string {
    // Group by transaction, then by variant
    const transactions = [...new Set(data.map(d => d.transaction_name))].filter(t => t !== 'deploy')
    const variants = [...new Set(data.map(d => d.label))]

    const chartData = {
        labels: transactions,
        datasets: variants.map((variant, idx) => ({
            label: variant,
            data: transactions.map(tx => {
                const entry = data.find(d => d.label === variant && d.transaction_name === tx)
                return entry?.ref_time ?? null
            }),
            backgroundColor: FIBONACCI_COLORS[idx % FIBONACCI_COLORS.length],
            borderColor: FIBONACCI_COLORS[idx % FIBONACCI_COLORS.length].replace('0.8', '1'),
            borderWidth: 1,
        })),
    }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: { display: true, text: options.title || 'Fibonacci Implementations Comparison' },
            legend: { position: 'top' },
        },
        scales: {
            x: {
                ticks: { maxRotation: 45, minRotation: 45 },
            },
            y: {
                title: { display: true, text: 'ref_time' },
                beginAtZero: true,
            },
        },
    }

    return `
        (function() {
            new Chart(document.getElementById('${canvasId}'), {
                type: 'bar',
                data: ${jsonStringify(chartData)},
                options: ${jsonStringify(chartOptions)}
            });
        })();
    `
}

export function divergingBarChart(
    canvasId: string,
    labels: string[],
    data: number[],
    options: { title?: string; xLabel?: string } = {}
): string {
    const colors = data.map(v => v >= 0 ? COLORS.danger : COLORS.success)

    const chartData: ChartData = {
        labels,
        datasets: [{
            label: '% Difference from EVM',
            data,
            backgroundColor: colors,
            borderColor: colors.map(c => c.replace('0.8', '1')),
            borderWidth: 1,
        }],
    }

    const chartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
            title: options.title ? { display: true, text: options.title } : { display: false },
            legend: { display: false },
        },
        scales: {
            x: {
                title: { display: !!options.xLabel, text: options.xLabel || '' },
            },
            y: {
                ticks: { font: { size: 10 } },
            },
        },
    }

    return `
        new Chart(document.getElementById('${canvasId}'), {
            type: 'bar',
            data: ${jsonStringify(chartData)},
            options: ${jsonStringify(chartOptions)}
        });
    `
}

export function scatterChart(
    canvasId: string,
    data: Array<{ x: number; y: number; label: string }>,
    options: { title?: string; xLabel?: string; yLabel?: string } = {}
): string {
    const chartData = {
        datasets: [{
            label: 'Transactions',
            data: data.map(d => ({ x: d.x, y: d.y })),
            backgroundColor: COLORS.primary,
            borderColor: COLORS.primary.replace('0.8', '1'),
            pointRadius: 6,
            pointHoverRadius: 8,
        }],
    }

    const labels = data.map(d => d.label)

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: options.title ? { display: true, text: options.title } : { display: false },
        },
        scales: {
            x: {
                title: { display: !!options.xLabel, text: options.xLabel || '' },
                type: 'linear',
                position: 'bottom',
            },
            y: {
                title: { display: !!options.yLabel, text: options.yLabel || '' },
                beginAtZero: true,
            },
        },
    }

    return `
        (function() {
            const labels = ${jsonStringify(labels)};
            new Chart(document.getElementById('${canvasId}'), {
                type: 'scatter',
                data: ${jsonStringify(chartData)},
                options: {
                    ...${jsonStringify(chartOptions)},
                    plugins: {
                        ...${jsonStringify(chartOptions.plugins)},
                        tooltip: {
                            callbacks: {
                                label: function(ctx) {
                                    return labels[ctx.dataIndex] + ': (' + ctx.parsed.x.toLocaleString() + ', ' + ctx.parsed.y.toLocaleString() + ')';
                                }
                            }
                        }
                    }
                }
            });
        })();
    `
}

export function radarChart(
    canvasId: string,
    labels: string[],
    datasets: Array<{ label: string; data: number[]; color: string }>,
    options: { title?: string } = {}
): string {
    const chartData: ChartData = {
        labels,
        datasets: datasets.map(ds => ({
            label: ds.label,
            data: ds.data,
            backgroundColor: ds.color.replace('0.8', '0.2'),
            borderColor: ds.color,
            borderWidth: 2,
        })),
    }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: options.title ? { display: true, text: options.title } : { display: false },
            legend: { position: 'top' },
        },
        scales: {
            r: {
                beginAtZero: true,
                ticks: { font: { size: 10 } },
            },
        },
    }

    return `
        new Chart(document.getElementById('${canvasId}'), {
            type: 'radar',
            data: ${jsonStringify(chartData)},
            options: ${jsonStringify(chartOptions)}
        });
    `
}

export function horizontalBarChart(
    canvasId: string,
    labels: string[],
    datasets: Array<{ label: string; data: number[]; color: string }>,
    options: { title?: string; xLabel?: string } = {}
): string {
    return groupedBarChart(canvasId, labels, datasets, { ...options, horizontal: true })
}

export function getCategoryColor(index: number): string {
    return CATEGORY_COLORS[index % CATEGORY_COLORS.length]
}

export function buildCategoryColorMap(categories: string[]): Record<string, string> {
    const map: Record<string, string> = {}
    for (let i = 0; i < categories.length; i++) {
        map[categories[i]] = CATEGORY_COLORS[i % CATEGORY_COLORS.length]
    }
    return map
}

export { COLORS, CATEGORY_COLORS }
