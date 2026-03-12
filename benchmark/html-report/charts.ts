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
    COLORS.primary,
    COLORS.success,
    COLORS.warning,
    COLORS.danger,
    COLORS.info,
    COLORS.purple,
    COLORS.orange,
    COLORS.teal,
    COLORS.pink,
    COLORS.secondary,
    COLORS.primaryLight,
    COLORS.successLight,
    COLORS.warningLight,
    COLORS.dangerLight,
    COLORS.infoLight,
    COLORS.purpleLight,
]

interface ChartData {
    labels: string[]
    datasets: Array<{
        label: string
        data: (number | null)[]
        backgroundColor?: string | string[]
        borderColor?: string | string[]
        borderWidth?: number
    }>
}

interface ChartOptions {
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
    options: {
        title?: string
        xLabel?: string
        yLabel?: string
        horizontal?: boolean
        logScale?: boolean
    } = {},
): string {
    const chartData: ChartData = {
        labels,
        datasets: datasets.map((ds) => ({
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
            title: options.title
                ? { display: true, text: options.title }
                : { display: false },
            legend: { position: 'top' },
        },
        scales: {
            x: {
                title: {
                    display: !!options.xLabel,
                    text: options.xLabel || '',
                },
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
    options: {
        title?: string
        xLabel?: string
        yLabel?: string
        horizontal?: boolean
    } = {},
): string {
    const chartData: ChartData = {
        labels,
        datasets: datasets.map((ds) => ({
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
            title: options.title
                ? { display: true, text: options.title }
                : { display: false },
            legend: { position: 'top' },
        },
        scales: {
            x: {
                stacked: true,
                title: {
                    display: !!options.xLabel,
                    text: options.xLabel || '',
                },
                ticks: { maxRotation: 45, minRotation: 45 },
            },
            y: {
                stacked: true,
                title: {
                    display: !!options.yLabel,
                    text: options.yLabel || '',
                },
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

export interface WeightSeriesData {
    refTime: (number | null)[]
    meteredPct: (number | null)[]
}

export interface AltWeightSeries {
    label: string
    data: WeightSeriesData
}

export function weightBreakdownChart(
    canvasId: string,
    labels: string[],
    evmData: WeightSeriesData,
    pvmData: WeightSeriesData,
    altImpls: AltWeightSeries[],
    options: { title?: string; yLabel?: string } = {},
): string {
    // Calculate metered and overhead portions for each
    const calcMetered = (
        data: WeightSeriesData,
    ) => data.refTime.map((rt, i) => {
        if (rt === null || data.meteredPct[i] === null) return null
        return rt * (data.meteredPct[i]! / 100)
    })
    const calcOverhead = (
        data: WeightSeriesData,
    ) => data.refTime.map((rt, i) => {
        if (rt === null || data.meteredPct[i] === null) return null
        return rt * (1 - data.meteredPct[i]! / 100)
    })

    const datasets: Array<Record<string, unknown>> = [
        {
            label: 'EVM Metered',
            data: calcMetered(evmData),
            backgroundColor: COLORS.primary,
            borderColor: COLORS.primary.replace('0.8', '1'),
            borderWidth: 1,
            stack: 'evm',
        },
        {
            label: 'EVM Overhead',
            data: calcOverhead(evmData),
            backgroundColor: COLORS.primaryLight,
            borderColor: COLORS.primary.replace('0.8', '1'),
            borderWidth: 1,
            stack: 'evm',
        },
        {
            label: 'PVM (Solidity) Metered',
            data: calcMetered(pvmData),
            backgroundColor: COLORS.success,
            borderColor: COLORS.success.replace('0.8', '1'),
            borderWidth: 1,
            stack: 'pvm',
        },
        {
            label: 'PVM (Solidity) Overhead',
            data: calcOverhead(pvmData),
            backgroundColor: COLORS.successLight,
            borderColor: COLORS.success.replace('0.8', '1'),
            borderWidth: 1,
            stack: 'pvm',
        },
    ]

    // Add alt implementation stacks dynamically
    for (const impl of altImpls) {
        const color = getImplTypeColor(impl.label)
        const lightColor = color.bg.replace('0.8', '0.4')
        const stackId = impl.label.toLowerCase().replace(/[^a-z]/g, '')
        datasets.push(
            {
                label: `${impl.label} Metered`,
                data: calcMetered(impl.data),
                backgroundColor: color.bg,
                borderColor: color.border,
                borderWidth: 1,
                stack: stackId,
            },
            {
                label: `${impl.label} Overhead`,
                data: calcOverhead(impl.data),
                backgroundColor: lightColor,
                borderColor: color.border,
                borderWidth: 1,
                stack: stackId,
            },
        )
    }

    const chartData = { labels, datasets }

    // Build tooltip pct data for all series
    const pctEntries = [
        { key: 'evm', label: 'EVM', pct: evmData.meteredPct },
        { key: 'pvm', label: 'PVM/Solidity', pct: pvmData.meteredPct },
        ...altImpls.map((impl) => ({
            key: impl.label.toLowerCase().replace(/[^a-z]/g, ''),
            label: impl.label,
            pct: impl.data.meteredPct,
        })),
    ]

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            title: {
                display: true,
                text: 'Weight (ref_time) by Dataset (click to drill down)',
            },
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
            window.weightPctData = ${jsonStringify(pctEntries)};
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
                                    const lines = [];
                                    for (const entry of window.weightPctData) {
                                        const pct = entry.pct[idx];
                                        if (pct !== null && pct !== undefined) {
                                            lines.push(entry.label + ' % metered: ' + pct.toFixed(1) + '%');
                                        }
                                    }
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

export function buildCategoryColorMap(
    categories: string[],
): Record<string, string> {
    const map: Record<string, string> = {}
    for (let i = 0; i < categories.length; i++) {
        map[categories[i]] = CATEGORY_COLORS[i % CATEGORY_COLORS.length]
    }
    return map
}

// ── Implementation type helpers ──

// Display labels for known impl types (language tag from ContractInfo.implType).
// The key is `${vmType}/${implType}` for PVM, or just `EVM` for EVM.
const IMPL_DISPLAY_LABELS: Record<string, string> = {
    'solidity/EVM': 'EVM',
    'solidity/PVM': 'PVM/Solidity',
    'rust/PVM': 'PVM/Rust',
    'ink/PVM': 'PVM/ink!',
    'stylus/PVM': 'PVM/Stylus',
}

// Canonical sort order for display labels
const IMPL_DISPLAY_ORDER = [
    'EVM',
    'PVM/Solidity',
    'PVM/Rust',
    'PVM/ink!',
    'PVM/Stylus',
]

const IMPL_TYPE_COLORS: Record<string, { bg: string; border: string }> = {
    'EVM': { bg: 'rgba(13, 110, 253, 0.8)', border: 'rgba(13, 110, 253, 1)' },
    'PVM/Solidity': {
        bg: 'rgba(25, 135, 84, 0.8)',
        border: 'rgba(25, 135, 84, 1)',
    },
    'PVM/Rust': {
        bg: 'rgba(253, 126, 20, 0.8)',
        border: 'rgba(253, 126, 20, 1)',
    },
    'PVM/ink!': {
        bg: 'rgba(111, 66, 193, 0.8)',
        border: 'rgba(111, 66, 193, 1)',
    },
    'PVM/Stylus': {
        bg: 'rgba(32, 201, 151, 0.8)',
        border: 'rgba(32, 201, 151, 1)',
    },
}

// Fallback palette for unknown impl types
const FALLBACK_COLORS = [
    { bg: COLORS.pink, border: 'rgba(214, 51, 132, 1)' },
    { bg: COLORS.warning, border: 'rgba(255, 193, 7, 1)' },
    { bg: COLORS.info, border: 'rgba(13, 202, 240, 1)' },
    { bg: COLORS.danger, border: 'rgba(220, 53, 69, 1)' },
    { bg: COLORS.secondary, border: 'rgba(108, 117, 125, 1)' },
]

/** Simple string hash to deterministically pick a fallback color index. */
function strHash(s: string): number {
    let h = 0
    for (let i = 0; i < s.length; i++) {
        h = ((h << 5) - h + s.charCodeAt(i)) | 0
    }
    return Math.abs(h)
}

/**
 * Get the display label for a given impl type and VM type.
 * E.g. ('rust', 'PVM') => 'PVM/Rust', ('solidity', 'EVM') => 'EVM'
 */
export function getImplTypeLabel(implType: string, vmType: string): string {
    const key = `${implType}/${vmType}`
    if (IMPL_DISPLAY_LABELS[key]) return IMPL_DISPLAY_LABELS[key]
    // Unknown impl type — capitalize the language tag
    if (vmType === 'EVM') return 'EVM'
    const capitalized = implType.charAt(0).toUpperCase() + implType.slice(1)
    return `PVM/${capitalized}`
}

/** Get chart color for an impl type label. Assigns fallback colors for unknown types. */
export function getImplTypeColor(
    implType: string,
): { bg: string; border: string } {
    if (IMPL_TYPE_COLORS[implType]) return IMPL_TYPE_COLORS[implType]
    // Deterministically pick from fallback palette based on the type name
    const color = FALLBACK_COLORS[strHash(implType) % FALLBACK_COLORS.length]
    IMPL_TYPE_COLORS[implType] = color
    return color
}

/** Canonical ordering: known types first, then unknown alphabetically. */
export function sortImplTypes(types: string[]): string[] {
    return [...types].sort((a, b) => {
        const ai = IMPL_DISPLAY_ORDER.indexOf(a)
        const bi = IMPL_DISPLAY_ORDER.indexOf(b)
        if (ai !== -1 && bi !== -1) return ai - bi
        if (ai !== -1) return -1
        if (bi !== -1) return 1
        return a.localeCompare(b)
    })
}

/**
 * Infer the PVM display label from an alt implementation contract name.
 * E.g. "fibonacci_u32_rust" -> "PVM/Rust", "flipper_ink" -> "PVM/ink!", "flipper_stylus" -> "PVM/Stylus"
 */
const SUFFIX_TO_LABEL: Record<string, string> = {
    rust: 'PVM/Rust',
    ink: 'PVM/ink!',
    stylus: 'PVM/Stylus',
}

export function altImplLabel(contractName: string): string {
    const suffix = contractName.split('_').pop() ?? ''
    return SUFFIX_TO_LABEL[suffix] ?? `PVM/${suffix}`
}

export { COLORS }
