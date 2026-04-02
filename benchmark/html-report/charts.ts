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
    labels: (string | string[])[]
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

/**
 * Paired stacked bar chart using Chart.js stack groups.
 *
 * `pairedDatasets` already carry a `stack` field ('PVM' | 'EVM').
 * Chart.js groups bars with the same x-label but different stacks tightly together,
 * with a larger gap between different x-labels — exactly the visual the user wants.
 *
 * A small afterDraw plugin renders "PVM" / "EVM" sub-labels beneath each bar group.
 */
export function pairedStackedBarChart(
    canvasId: string,
    labels: string[],
    pairedDatasets: Array<{
        label: string
        data: number[]
        color: string
        stack: string
    }>,
    options: {
        title?: string
        xLabel?: string
        yLabel?: string
    } = {},
): string {
    const chartData = {
        labels,
        datasets: pairedDatasets.map((ds) => ({
            label: ds.label,
            data: ds.data,
            backgroundColor: ds.color,
            borderColor: ds.color.replace(/[\d.]+\)$/, '1)'),
            borderWidth: 1,
            stack: ds.stack,
        })),
    }

    // Stacks present (e.g. ['PVM','EVM'])
    const stacks = [...new Set(pairedDatasets.map((d) => d.stack))]

    return `
        (function() {
            var stacks = ${jsonStringify(stacks)};

            // Plugin: draw stack sub-labels ("PVM", "EVM") below the x-axis
            var subLabelPlugin = {
                id: 'stackSubLabels_${canvasId}',
                afterDraw: function(chart) {
                    var xScale = chart.scales.x;
                    var yScale = chart.scales.y;
                    var ctx = chart.ctx;
                    ctx.save();
                    ctx.font = '11px sans-serif';
                    ctx.fillStyle = Chart.defaults.color;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'top';

                    // y position: just below the x-axis line
                    var yPos = xScale.top + 4;

                    // For each x-label, find the bars of each stack to get their x-centers
                    for (var li = 0; li < chart.data.labels.length; li++) {
                        var stackCenters = {};
                        chart.data.datasets.forEach(function(ds, di) {
                            var meta = chart.getDatasetMeta(di);
                            if (meta.hidden) return;
                            var bar = meta.data[li];
                            if (!bar) return;
                            var s = ds.stack;
                            if (!stackCenters[s]) stackCenters[s] = { sum: 0, count: 0 };
                            stackCenters[s].sum += bar.x;
                            stackCenters[s].count++;
                        });
                        for (var si = 0; si < stacks.length; si++) {
                            var sc = stackCenters[stacks[si]];
                            if (sc && sc.count > 0) {
                                ctx.fillText(stacks[si], sc.sum / sc.count, yPos);
                            }
                        }
                    }
                    ctx.restore();
                }
            };

            new Chart(document.getElementById('${canvasId}'), {
                type: 'bar',
                data: ${jsonStringify(chartData)},
                plugins: [subLabelPlugin],
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: { padding: { bottom: 20 } },
                    plugins: {
                        title: ${
        options.title
            ? jsonStringify({ display: true, text: options.title })
            : '{ display: false }'
    },
                        legend: {
                            position: 'top',
                            labels: {
                                filter: function(item, data) {
                                    // Show one legend entry per category (hide duplicates from the second stack)
                                    var ds = data.datasets[item.datasetIndex];
                                    return ds.stack === stacks[0];
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            stacked: true,
                            title: { display: ${!!options.xLabel}, text: ${
        jsonStringify(options.xLabel || '')
    } },
                            ticks: { maxRotation: 45, minRotation: 45 },
                            grid: {
                                color: function(ctx) {
                                    // Only draw grid lines between label groups, not between stacks within a group
                                    return Chart.defaults.borderColor;
                                }
                            }
                        },
                        y: {
                            stacked: true,
                            title: { display: ${!!options.yLabel}, text: ${
        jsonStringify(options.yLabel || '')
    } },
                            beginAtZero: true
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
// There are only two VMs: EVM and PVM. The contract name suffix is the language.
// Suffix "evm" → EVM (always Solidity), "pvm" → PVM/Solidity, anything else → PVM/{lang}.

/** Capitalize a suffix for display. */
function displaySuffix(suffix: string): string {
    return suffix.charAt(0).toUpperCase() + suffix.slice(1)
}

/**
 * Get the display label for a given impl type and VM type.
 * E.g. ('rust', 'PVM') => 'PVM/Rust', ('solidity', 'EVM') => 'EVM'
 */
export function getImplTypeLabel(implType: string, vmType: string): string {
    if (vmType === 'EVM') return 'EVM'
    return `PVM/${displaySuffix(implType)}`
}

/**
 * Infer the display label from a contract name suffix.
 * E.g. "fibonacci_u32_rust" -> "PVM/Rust", "flipper_ink" -> "PVM/Ink"
 */
export function altImplLabel(contractName: string): string {
    const suffix = contractName.split('_').pop() ?? ''
    return `PVM/${displaySuffix(suffix)}`
}

// ── Color assignment ──
// EVM and PVM/Solidity are the two primary series (always present), so they get
// fixed colors. Every other impl type gets the next unused color from the
// palette (sequential assignment guarantees no collisions).

function implTypeColorFromRgb(r: number, g: number, b: number) {
    return {
        bg: `rgba(${r}, ${g}, ${b}, 0.8)`,
        border: `rgba(${r}, ${g}, ${b}, 1)`,
        hex: '#' +
            [r, g, b].map((c) => c.toString(16).padStart(2, '0')).join(''),
    }
}

const IMPL_COLORS = {
    evm: implTypeColorFromRgb(13, 110, 253),
    solidity: implTypeColorFromRgb(25, 135, 84),
}

const PALETTE = [
    implTypeColorFromRgb(253, 126, 20),
    implTypeColorFromRgb(111, 66, 193),
    implTypeColorFromRgb(32, 201, 151),
    implTypeColorFromRgb(214, 51, 132),
    implTypeColorFromRgb(255, 193, 7),
    implTypeColorFromRgb(13, 202, 240),
    implTypeColorFromRgb(220, 53, 69),
    implTypeColorFromRgb(108, 117, 125),
]

let _nextPaletteIdx = 0
const _colorCache: Record<string, typeof PALETTE[0]> = {}

function getColorForKey(key: string): typeof PALETTE[0] {
    if (key in IMPL_COLORS) return IMPL_COLORS[key as keyof typeof IMPL_COLORS]
    if (_colorCache[key]) return _colorCache[key]
    const color = PALETTE[_nextPaletteIdx % PALETTE.length]
    _nextPaletteIdx++
    _colorCache[key] = color
    return color
}

/** Get chart color for an impl type display label (e.g. "EVM", "PVM/Rust"). */
export function getImplTypeColor(
    implType: string,
): { bg: string; border: string } {
    if (implType === 'EVM') return getColorForKey('evm')
    if (implType === 'PVM/Solidity') return getColorForKey('solidity')
    // Extract suffix: "PVM/Rust" -> "rust"
    const suffix = implType.replace(/^PVM\//, '').toLowerCase()
    return getColorForKey(suffix)
}

/** Hex color for an impl suffix (e.g. 'rust', 'ink', 'solidity'). */
export function getImplHexColor(implSuffix: string): string {
    return getColorForKey(implSuffix).hex
}

/** Sort display labels: EVM first, then PVM/Solidity, then others alphabetically. */
export function sortImplTypes(types: string[]): string[] {
    return [...types].sort((a, b) => {
        // EVM always first
        if (a === 'EVM') return -1
        if (b === 'EVM') return 1
        // PVM/Solidity second
        if (a === 'PVM/Solidity') return -1
        if (b === 'PVM/Solidity') return 1
        return a.localeCompare(b)
    })
}

export { COLORS }
