import { getStyles } from './styles.ts'

export function htmlDocument(content: string, scripts: string): string {
    const styles = getStyles()
    const date = new Date().toISOString().split('T')[0]

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Benchmark Report</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js"></script>
    <style>${styles}</style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Contract Benchmark Report</h1>
            <p>Generated on ${date}</p>
        </div>
    </header>

    <nav>
        <div class="container">
            <ul>
                <li><a href="#summary">Summary</a></li>
                <li><a href="#gas-analysis">Gas Analysis</a></li>
                <li><a href="#weight">Weight Analysis</a></li>
                <li><a href="#categories">Category Profiling</a></li>
                <li><a href="#bytecode">Bytecode Size</a></li>
            </ul>
        </div>
    </nav>

    <main class="container">
        ${content}
    </main>

    <footer>
        <div class="container">
            <p>Contract Benchmark Report &bull; EVM vs PVM Comparison</p>
        </div>
    </footer>

    <script>
        // Navigation highlighting
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('nav a');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + entry.target.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => observer.observe(section));

        // Initialize charts
        function initCharts() {
            try {
                ${scripts}
                console.log('Charts initialized successfully');
            } catch (error) {
                console.error('Error initializing charts:', error);
            }
        }

        if (typeof Chart === 'undefined') {
            console.error('Chart.js not loaded');
        } else if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initCharts);
        } else {
            initCharts();
        }

        // Global function for expandable tables
        function toggleExpand(id, level) {
            const toggle = document.querySelector('[data-id="' + id + '"] .expand-toggle');
            if (!toggle) return;

            const isExpanded = toggle.classList.contains('expanded');
            toggle.classList.toggle('expanded');

            const children = document.querySelectorAll('[data-parent="' + id + '"]');
            children.forEach(child => {
                if (isExpanded) {
                    child.classList.add('hidden-row');
                    const childToggle = child.querySelector('.expand-toggle');
                    if (childToggle) {
                        childToggle.classList.remove('expanded');
                        const childId = child.getAttribute('data-id');
                        if (childId) {
                            document.querySelectorAll('[data-parent="' + childId + '"]').forEach(gc => {
                                gc.classList.add('hidden-row');
                            });
                        }
                    }
                } else {
                    child.classList.remove('hidden-row');
                }
            });
        }

        // Table sorting functionality
        const tableSortState = new Map();

        function parseNumericValue(text) {
            if (!text || text === 'N/A') return null;
            // Remove formatting: commas, %, +/- signs
            const cleaned = text.replace(/[,%+]/g, '').trim();
            const num = parseFloat(cleaned);
            return isNaN(num) ? null : num;
        }

        function sortTable(table, colIndex) {
            const tbody = table.querySelector('tbody');
            if (!tbody) return;

            // Get current sort state for this table/column
            const tableId = table.closest('.card')?.querySelector('.card-title')?.textContent || 'unknown';
            const stateKey = tableId + '-' + colIndex;
            const currentDir = tableSortState.get(stateKey) || 'none';
            const newDir = currentDir === 'asc' ? 'desc' : 'asc';
            tableSortState.set(stateKey, newDir);

            // Update header indicators
            table.querySelectorAll('th').forEach((th, idx) => {
                th.classList.remove('sort-asc', 'sort-desc');
                if (idx === colIndex) {
                    th.classList.add('sort-' + newDir);
                }
            });

            // Get all rows
            const allRows = Array.from(tbody.querySelectorAll('tr'));

            // Separate total row (keep at bottom)
            const totalRow = allRows.find(r => r.classList.contains('total-row'));
            const dataRows = allRows.filter(r => !r.classList.contains('total-row'));

            // Group rows by hierarchy: dataset -> contracts -> transactions
            const level0Rows = dataRows.filter(r => r.classList.contains('level-0'));

            // Build hierarchy map
            const hierarchyMap = new Map();
            level0Rows.forEach(row => {
                const id = row.getAttribute('data-id');
                const children = dataRows.filter(r => r.getAttribute('data-parent') === id);
                const level1Children = children.filter(r => r.classList.contains('level-1'));

                const level1Map = new Map();
                level1Children.forEach(l1 => {
                    const l1Id = l1.getAttribute('data-id');
                    const l2Children = dataRows.filter(r => r.getAttribute('data-parent') === l1Id);
                    level1Map.set(l1, l2Children);
                });

                hierarchyMap.set(row, level1Map);
            });

            // Sort level-0 rows
            level0Rows.sort((a, b) => {
                const aCell = a.querySelectorAll('td')[colIndex];
                const bCell = b.querySelectorAll('td')[colIndex];
                const aVal = parseNumericValue(aCell?.textContent);
                const bVal = parseNumericValue(bCell?.textContent);

                // Handle nulls
                if (aVal === null && bVal === null) return 0;
                if (aVal === null) return 1;
                if (bVal === null) return -1;

                return newDir === 'asc' ? aVal - bVal : bVal - aVal;
            });

            // Rebuild tbody with sorted rows
            tbody.innerHTML = '';
            level0Rows.forEach(l0Row => {
                tbody.appendChild(l0Row);
                const level1Map = hierarchyMap.get(l0Row);
                if (level1Map) {
                    // Sort level-1 rows within this dataset
                    const l1Rows = Array.from(level1Map.keys());
                    l1Rows.sort((a, b) => {
                        const aCell = a.querySelectorAll('td')[colIndex];
                        const bCell = b.querySelectorAll('td')[colIndex];
                        const aVal = parseNumericValue(aCell?.textContent);
                        const bVal = parseNumericValue(bCell?.textContent);
                        if (aVal === null && bVal === null) return 0;
                        if (aVal === null) return 1;
                        if (bVal === null) return -1;
                        return newDir === 'asc' ? aVal - bVal : bVal - aVal;
                    });

                    l1Rows.forEach(l1Row => {
                        tbody.appendChild(l1Row);
                        // Sort level-2 rows within this contract
                        const l2Rows = level1Map.get(l1Row) || [];
                        l2Rows.sort((a, b) => {
                            const aCell = a.querySelectorAll('td')[colIndex];
                            const bCell = b.querySelectorAll('td')[colIndex];
                            const aVal = parseNumericValue(aCell?.textContent);
                            const bVal = parseNumericValue(bCell?.textContent);
                            if (aVal === null && bVal === null) return 0;
                            if (aVal === null) return 1;
                            if (bVal === null) return -1;
                            return newDir === 'asc' ? aVal - bVal : bVal - aVal;
                        });
                        l2Rows.forEach(l2Row => tbody.appendChild(l2Row));
                    });
                }
            });

            // Add total row back at the end
            if (totalRow) {
                tbody.appendChild(totalRow);
            }
        }

        // Initialize sortable tables
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.expandable-table').forEach(table => {
                const headerRow = table.querySelector('thead tr:last-child') || table.querySelector('thead tr');
                if (!headerRow) return;

                headerRow.querySelectorAll('th').forEach((th, idx) => {
                    if (!th.classList.contains('number')) return;
                    th.classList.add('sortable');
                    const existingTitle = th.getAttribute('title');
                    th.title = existingTitle ? existingTitle + ' (click to sort)' : 'Click to sort';
                    th.addEventListener('click', () => sortTable(table, idx));
                });
            });
        });
    </script>
</body>
</html>`
}

export function sectionCard(id: string, title: string, content: string): string {
    return `
    <section id="${id}" class="section">
        <h2 class="section-title">${title}</h2>
        ${content}
    </section>`
}

export function card(title: string, content: string, className = ''): string {
    return `
    <div class="card ${className}">
        <h3 class="card-title">${title}</h3>
        ${content}
    </div>`
}

export function chartCanvas(id: string, className = ''): string {
    return `
    <div class="chart-container ${className}">
        <canvas id="${id}"></canvas>
    </div>`
}

export function metricCard(value: string | number, label: string): string {
    return `
    <div class="metric-card">
        <div class="metric-value">${typeof value === 'number' ? value.toLocaleString() : value}</div>
        <div class="metric-label">${label}</div>
    </div>`
}

export function metricGrid(metrics: Array<{ value: string | number; label: string }>): string {
    return `
    <div class="metric-grid">
        ${metrics.map(m => metricCard(m.value, m.label)).join('')}
    </div>`
}

export function dataTable(
    headers: string[],
    rows: Array<Array<string | number>>,
    options: { numberColumns?: number[] } = {}
): string {
    const { numberColumns = [] } = options

    return `
    <table>
        <thead>
            <tr>
                ${headers.map((h, i) => `<th class="${numberColumns.includes(i) ? 'number' : ''}">${h}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            ${rows.map(row => `
                <tr>
                    ${row.map((cell, i) => {
                        const isNumber = numberColumns.includes(i)
                        const formatted = typeof cell === 'number' ? cell.toLocaleString() : cell
                        const className = isNumber ? 'number' : ''

                        // Add color class for percentage values
                        let colorClass = ''
                        if (typeof cell === 'string' && cell.includes('%')) {
                            const numMatch = cell.match(/([+-]?\d+\.?\d*)%/)
                            if (numMatch) {
                                const num = parseFloat(numMatch[1])
                                if (num > 0) colorClass = 'positive'
                                else if (num < 0) colorClass = 'negative'
                            }
                        }

                        return `<td class="${className} ${colorClass}">${formatted}</td>`
                    }).join('')}
                </tr>
            `).join('')}
        </tbody>
    </table>`
}

export function grid(content: string, columns: 2 | 3 = 2): string {
    return `<div class="grid grid-${columns}">${content}</div>`
}

export interface GasRow {
    name: string
    geth_gas: number | null
    eth_rpc_evm_gas: number | null
    eth_rpc_pvm_gas: number | null
}

export interface AltGasImpl {
    name: string
    pvm_gas: number | null
    transactions: Array<{ name: string; pvm_gas: number | null }>
}

export interface GasHierarchyData {
    datasets: Array<GasRow & {
        contracts: Array<GasRow & {
            transactions: GasRow[]
            alt_implementations: AltGasImpl[]
        }>
    }>
}

/** Derive a short label (e.g. "ink", "rust", "u128_rust") from an alt implementation name */
function getImplLabel(contractName: string, altName: string): string {
    const base = contractName.replace(/_pvm$/, '')
    // Convert CamelCase to snake_case: "SimpleToken" → "simple_token"
    // Handle consecutive uppercase (e.g. "DotNS" → "dot_ns", not "dot_n_s")
    const snake = base
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
        .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
        .toLowerCase()
    // Try snake_case prefix first, then plain lowercase (for names like DotNS → dotns)
    const lower = base.toLowerCase()
    for (const prefix of [snake + '_', lower + '_']) {
        if (altName.startsWith(prefix)) {
            return altName.slice(prefix.length)
        }
    }
    return altName
}

/** Generate a small colored tag for an implementation label */
function implTag(label: string): string {
    const lower = label.toLowerCase()
    let cls = 'impl-tag-rust'
    if (lower === 'solidity') cls = 'impl-tag-solidity'
    else if (lower === 'ink') cls = 'impl-tag-ink'
    return `<span class="impl-tag ${cls}">${label}</span>`
}

function formatGas(value: number | null): string {
    return value !== null ? value.toLocaleString() : 'N/A'
}

function calcDiff(base: number | null, compare: number | null): string {
    if (base === null || compare === null) return 'N/A'
    const diff = ((compare - base) / base) * 100
    const sign = diff > 0 ? '+' : ''
    return `${sign}${diff.toFixed(1)}%`
}

/** HTML-encode a string for safe use in data-* attributes */
function escAttr(s: string): string {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

/** Format a number in compact form for range indicators */
function formatCompact(v: number): string {
    const abs = Math.abs(v)
    if (abs >= 1e9) return `${(v / 1e9).toFixed(1)}B`
    if (abs >= 1e6) return `${(v / 1e6).toFixed(1)}M`
    if (abs >= 1e3) return `${(v / 1e3).toFixed(1)}K`
    return v.toLocaleString()
}

interface LabeledValue { value: number | null; label: string }

/** Map implementation label to its CSS color */
function implColor(label: string): string {
    const lower = label.toLowerCase()
    if (lower === 'solidity') return '#198754'
    if (lower === 'ink') return '#6f42c1'
    return '#d56a10' // rust and other alts
}

/** Append a colored min..max range indicator below an aggregated value */
function withRange(mainValue: string, allValues: LabeledValue[], rangeFmt: (v: number) => string = formatCompact): string {
    const entries = allValues.filter((e): e is { value: number; label: string } => e.value !== null)
    if (entries.length <= 1) return mainValue
    const minEntry = entries.reduce((a, b) => a.value < b.value ? a : b)
    const maxEntry = entries.reduce((a, b) => a.value > b.value ? a : b)
    if (minEntry.value === maxEntry.value) return mainValue
    return `${mainValue}<span class="impl-range"><span style="color:${implColor(minEntry.label)}">${rangeFmt(minEntry.value)}</span>..<span style="color:${implColor(maxEntry.label)}">${rangeFmt(maxEntry.value)}</span></span>`
}

/** Append a colored min..max range for percentage-diff columns */
function withDiffRange(mainDiff: string, base: number | null, allCompareValues: LabeledValue[]): string {
    if (base === null) return mainDiff
    const entries = allCompareValues.filter((e): e is { value: number; label: string } => e.value !== null)
    if (entries.length <= 1) return mainDiff
    const withDiffs = entries.map(e => ({ label: e.label, diff: ((e.value - base) / base) * 100 }))
    const minEntry = withDiffs.reduce((a, b) => a.diff < b.diff ? a : b)
    const maxEntry = withDiffs.reduce((a, b) => a.diff > b.diff ? a : b)
    if (Math.abs(maxEntry.diff - minEntry.diff) < 0.1) return mainDiff
    const fmtDiff = (d: number) => { const s = d > 0 ? '+' : ''; return `${s}${d.toFixed(1)}%` }
    return `${mainDiff}<span class="impl-range"><span style="color:${implColor(minEntry.label)}">${fmtDiff(minEntry.diff)}</span>..<span style="color:${implColor(maxEntry.label)}">${fmtDiff(maxEntry.diff)}</span></span>`
}

export function drilldownChartScript(hierarchy: GasHierarchyData): string {
    return `
        // Store hierarchy data for drill-down
        const gasHierarchyOriginal = ${JSON.stringify(hierarchy)};
        let gasHierarchy = JSON.parse(JSON.stringify(gasHierarchyOriginal));
        let currentLevel = 'datasets';
        let currentParent = null;
        let hideDeployTx = false;

        function filterHierarchy(hide) {
            if (!hide) {
                gasHierarchy = JSON.parse(JSON.stringify(gasHierarchyOriginal));
                return;
            }

            // Deep clone and filter out deploy transactions
            // Keep geth_gas unchanged (reference line) - only filter EVM/PVM data
            gasHierarchy = {
                datasets: gasHierarchyOriginal.datasets.map(dataset => ({
                    ...dataset,
                    contracts: dataset.contracts.map(contract => {
                        const filteredTxs = contract.transactions.filter(tx => tx.name !== 'deploy');
                        // Recalculate contract totals - keep geth unchanged
                        const evm = filteredTxs.reduce((sum, tx) => sum + (tx.eth_rpc_evm_gas || 0), 0);
                        const pvm = filteredTxs.reduce((sum, tx) => sum + (tx.eth_rpc_pvm_gas || 0), 0);
                        // Filter alt_implementations deploy transactions too
                        const filteredAlts = (contract.alt_implementations || []).map(alt => ({
                            ...alt,
                            transactions: alt.transactions.filter(tx => tx.name !== 'deploy')
                        }));
                        return {
                            ...contract,
                            geth_gas: contract.geth_gas, // Keep original geth value
                            eth_rpc_evm_gas: filteredTxs.some(tx => tx.eth_rpc_evm_gas !== null) ? evm : null,
                            eth_rpc_pvm_gas: filteredTxs.some(tx => tx.eth_rpc_pvm_gas !== null) ? pvm : null,
                            transactions: filteredTxs.map(tx => ({
                                ...tx,
                                geth_gas: contract.transactions.find(t => t.name === tx.name)?.geth_gas ?? null
                            })),
                            alt_implementations: filteredAlts
                        };
                    }).filter(c => c.transactions.length > 0)
                })).map(dataset => {
                    // Recalculate dataset totals - keep geth from original
                    const originalDataset = gasHierarchyOriginal.datasets.find(d => d.name === dataset.name);
                    const evm = dataset.contracts.reduce((sum, c) => sum + (c.eth_rpc_evm_gas || 0), 0);
                    const pvm = dataset.contracts.reduce((sum, c) => sum + (c.eth_rpc_pvm_gas || 0), 0);
                    return {
                        ...dataset,
                        geth_gas: originalDataset?.geth_gas ?? null, // Keep original geth value
                        eth_rpc_evm_gas: dataset.contracts.some(c => c.eth_rpc_evm_gas !== null) ? evm : null,
                        eth_rpc_pvm_gas: dataset.contracts.some(c => c.eth_rpc_pvm_gas !== null) ? pvm : null
                    };
                })
            };
        }

        function toPctDiff(val, base) {
            return val !== null && base !== null && base > 0 ? Math.round((val / base - 1) * 10000) / 100 : null;
        }

        function avgOfTxPctDiffs(contracts, valKey) {
            var diffs = [];
            contracts.forEach(function(c) {
                c.transactions.forEach(function(tx) {
                    var d = toPctDiff(tx[valKey], tx.geth_gas);
                    if (d !== null) diffs.push(d);
                });
            });
            return diffs.length > 0 ? Math.round(diffs.reduce(function(s, d) { return s + d; }, 0) / diffs.length * 100) / 100 : null;
        }

        function avgOfPctDiffs(children, valKey) {
            var diffs = children.map(function(c) { return toPctDiff(c[valKey], c.geth_gas); }).filter(function(d) { return d !== null; });
            return diffs.length > 0 ? Math.round(diffs.reduce(function(s, d) { return s + d; }, 0) / diffs.length * 100) / 100 : null;
        }

        function avgRustTxPctDiffs(contracts) {
            var diffs = [];
            contracts.forEach(function(c) {
                var rustAlts = (c.alt_implementations || []).filter(function(a) { return a.name.indexOf('rust') !== -1; });
                rustAlts.forEach(function(alt) {
                    alt.transactions.forEach(function(altTx) {
                        var baseTx = c.transactions.find(function(t) { return t.name === altTx.name; });
                        var d = toPctDiff(altTx.pvm_gas, baseTx ? baseTx.geth_gas : null);
                        if (d !== null) diffs.push(d);
                    });
                });
            });
            return diffs.length > 0 ? Math.round(diffs.reduce(function(s, d) { return s + d; }, 0) / diffs.length * 100) / 100 : null;
        }

        function avgRustPctDiffsForContract(contract) {
            var diffs = [];
            var rustAlts = (contract.alt_implementations || []).filter(function(a) { return a.name.indexOf('rust') !== -1; });
            rustAlts.forEach(function(alt) {
                alt.transactions.forEach(function(altTx) {
                    var baseTx = contract.transactions.find(function(t) { return t.name === altTx.name; });
                    var d = toPctDiff(altTx.pvm_gas, baseTx ? baseTx.geth_gas : null);
                    if (d !== null) diffs.push(d);
                });
            });
            return diffs.length > 0 ? Math.round(diffs.reduce(function(s, d) { return s + d; }, 0) / diffs.length * 100) / 100 : null;
        }

        function rustPctDiffForTx(contract, txName) {
            var diffs = [];
            var rustAlts = (contract.alt_implementations || []).filter(function(a) { return a.name.indexOf('rust') !== -1; });
            rustAlts.forEach(function(alt) {
                var altTx = alt.transactions.find(function(t) { return t.name === txName; });
                if (altTx) {
                    var baseTx = contract.transactions.find(function(t) { return t.name === txName; });
                    var d = toPctDiff(altTx.pvm_gas, baseTx ? baseTx.geth_gas : null);
                    if (d !== null) diffs.push(d);
                }
            });
            return diffs.length > 0 ? Math.round(diffs.reduce(function(s, d) { return s + d; }, 0) / diffs.length * 100) / 100 : null;
        }

        function getChartData(level, parent) {
            let items = [];
            let title = 'Gas by Dataset';
            const suffix = hideDeployTx ? ' (excluding deploy)' : '';

            if (level === 'datasets') {
                items = gasHierarchy.datasets;
                title = 'Avg Gas by Dataset' + suffix + ' (click to drill down)';
                return {
                    labels: items.map(i => i.name),
                    evmData: items.map(i => avgOfTxPctDiffs(i.contracts, 'eth_rpc_evm_gas')),
                    pvmData: items.map(i => avgOfTxPctDiffs(i.contracts, 'eth_rpc_pvm_gas')),
                    rustPvmData: items.map(i => avgRustTxPctDiffs(i.contracts)),
                    title: title,
                    canDrillDown: true
                };
            } else if (level === 'contracts' && parent) {
                const dataset = gasHierarchy.datasets.find(d => d.name === parent);
                if (dataset) {
                    items = dataset.contracts;
                    title = 'Avg Gas by Contract: ' + parent + suffix + ' (click to drill down, right-click to go back)';
                    return {
                        labels: items.map(i => i.name),
                        evmData: items.map(i => avgOfPctDiffs(i.transactions, 'eth_rpc_evm_gas')),
                        pvmData: items.map(i => avgOfPctDiffs(i.transactions, 'eth_rpc_pvm_gas')),
                        rustPvmData: items.map(i => avgRustPctDiffsForContract(i)),
                        title: title,
                        canDrillDown: true
                    };
                }
            } else if (level === 'transactions' && parent) {
                let contract = null;
                for (const dataset of gasHierarchy.datasets) {
                    contract = dataset.contracts.find(c => c.name === parent);
                    if (contract) {
                        items = contract.transactions;
                        title = 'Gas by Transaction: ' + parent + suffix + ' (right-click to go back)';
                        break;
                    }
                }
                return {
                    labels: items.map(i => i.name),
                    evmData: items.map(i => toPctDiff(i.eth_rpc_evm_gas, i.geth_gas)),
                    pvmData: items.map(i => toPctDiff(i.eth_rpc_pvm_gas, i.geth_gas)),
                    rustPvmData: contract ? items.map(i => rustPctDiffForTx(contract, i.name)) : items.map(() => null),
                    title: title,
                    canDrillDown: false
                };
            }

            return {
                labels: items.map(i => i.name),
                evmData: items.map(i => toPctDiff(i.eth_rpc_evm_gas, i.geth_gas)),
                pvmData: items.map(i => toPctDiff(i.eth_rpc_pvm_gas, i.geth_gas)),
                rustPvmData: items.map(() => null),
                title: title,
                canDrillDown: level !== 'transactions'
            };
        }

        function updateGasChart(level, parent) {
            currentLevel = level;
            currentParent = parent;

            const data = getChartData(level, parent);
            const chart = Chart.getChart('gasAnalysisChart');

            chart.data.labels = data.labels;
            chart.data.datasets[0].data = data.evmData;
            chart.data.datasets[1].data = data.pvmData;
            chart.data.datasets[2].data = data.rustPvmData;
            chart.options.plugins.title.text = data.title;
            chart.options.plugins.title.display = true;

            chart.update();
        }

        // Filter checkbox handler
        document.getElementById('hideDeployCheckbox').onchange = function(evt) {
            hideDeployTx = evt.target.checked;
            filterHierarchy(hideDeployTx);
            updateGasChart(currentLevel, currentParent);
            updateTableVisibility();
        };

        function updateTableVisibility() {
            const table = document.querySelector('.expandable-gas-table');
            table.querySelectorAll('tbody tr').forEach(row => {
                const nameCell = row.querySelector('td:first-child');
                if (nameCell) {
                    const name = nameCell.textContent.trim();
                    if (hideDeployTx && name.startsWith('deploy') && row.classList.contains('level-2')) {
                        row.style.display = 'none';
                    } else if (!row.classList.contains('hidden-row')) {
                        row.style.display = '';
                    }
                }
            });
            table.querySelectorAll('.swappable').forEach(cell => {
                if (hideDeployTx) {
                    if (!cell.dataset.all) cell.dataset.all = cell.innerHTML;
                    cell.innerHTML = cell.dataset.excl;
                } else {
                    if (cell.dataset.all) cell.innerHTML = cell.dataset.all;
                }
            });
        }

        // Add click handler for drill-down
        document.getElementById('gasAnalysisChart').onclick = function(evt) {
            const chart = Chart.getChart('gasAnalysisChart');
            const points = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

            if (points.length > 0) {
                const index = points[0].index;
                const label = chart.data.labels[index];

                if (currentLevel === 'datasets') {
                    updateGasChart('contracts', label);
                } else if (currentLevel === 'contracts') {
                    updateGasChart('transactions', label);
                }
            }
        };

        // Add right-click handler to go back
        document.getElementById('gasAnalysisChart').oncontextmenu = function(evt) {
            evt.preventDefault();

            if (currentLevel === 'transactions') {
                // Find parent dataset
                for (const dataset of gasHierarchy.datasets) {
                    if (dataset.contracts.find(c => c.name === currentParent)) {
                        updateGasChart('contracts', dataset.name);
                        return;
                    }
                }
            } else if (currentLevel === 'contracts') {
                updateGasChart('datasets', null);
            }
        };
    `
}

export function gasAnalysisFilterControls(): string {
    return `
    <div class="filter-controls">
        <label>
            <input type="checkbox" id="hideDeployCheckbox">
            Exclude deploy transactions
        </label>
    </div>
    <p class="table-note">Dataset and contract rows show the average gas for the Solidity implementation. Colored ranges show the min..max across all PVM implementations (Solidity, Rust, Ink).</p>
    `
}

export function expandableGasTable(data: GasHierarchyData): string {
    let rowId = 0
    const rows: string[] = []

    // Helper to compute average gas across transactions
    function avgGas(txs: Array<{ geth_gas: number | null; eth_rpc_evm_gas: number | null; eth_rpc_pvm_gas: number | null }>, key: 'geth_gas' | 'eth_rpc_evm_gas' | 'eth_rpc_pvm_gas'): number | null {
        const vals = txs.map(tx => tx[key]).filter((v): v is number => v !== null)
        return vals.length > 0 ? Math.round(vals.reduce((s, v) => s + v, 0) / vals.length) : null
    }

    // Collect all transactions for overall average
    type GasTx = { name: string; geth_gas: number | null; eth_rpc_evm_gas: number | null; eth_rpc_pvm_gas: number | null }
    const allTxs: GasTx[] = []
    const noDeploy = (txs: GasTx[]) => txs.filter(tx => tx.name !== 'deploy')

    for (const dataset of data.datasets) {
        const datasetTxs = dataset.contracts.flatMap(c => c.transactions)
        allTxs.push(...datasetTxs)

        const dsAvg = {
            geth: avgGas(datasetTxs, 'geth_gas'),
            evm: avgGas(datasetTxs, 'eth_rpc_evm_gas'),
            pvm: avgGas(datasetTxs, 'eth_rpc_pvm_gas'),
        }
        const dsExcl = {
            geth: avgGas(noDeploy(datasetTxs), 'geth_gas'),
            evm: avgGas(noDeploy(datasetTxs), 'eth_rpc_evm_gas'),
            pvm: avgGas(noDeploy(datasetTxs), 'eth_rpc_pvm_gas'),
        }

        const datasetId = rowId++
        rows.push(`
            <tr class="level-0" data-id="${datasetId}" data-level="0">
                <td><span class="expand-toggle" onclick="toggleExpand(${datasetId}, 0)">${dataset.name}</span></td>
                <td class="number swappable" data-excl="${formatGas(dsExcl.geth)}">${formatGas(dsAvg.geth)}</td>
                <td class="number swappable" data-excl="${formatGas(dsExcl.evm)}">${formatGas(dsAvg.evm)}</td>
                <td class="number swappable" data-excl="${calcDiff(dsExcl.geth, dsExcl.evm)}">${calcDiff(dsAvg.geth, dsAvg.evm)}</td>
                <td class="number swappable" data-excl="${formatGas(dsExcl.pvm)}">${formatGas(dsAvg.pvm)}</td>
                <td class="number swappable" data-excl="${calcDiff(dsExcl.geth, dsExcl.pvm)}">${calcDiff(dsAvg.geth, dsAvg.pvm)}</td>
            </tr>
        `)

        for (const contract of dataset.contracts) {
            const cAvg = {
                geth: avgGas(contract.transactions, 'geth_gas'),
                evm: avgGas(contract.transactions, 'eth_rpc_evm_gas'),
                pvm: avgGas(contract.transactions, 'eth_rpc_pvm_gas'),
            }
            const cExcl = {
                geth: avgGas(noDeploy(contract.transactions), 'geth_gas'),
                evm: avgGas(noDeploy(contract.transactions), 'eth_rpc_evm_gas'),
                pvm: avgGas(noDeploy(contract.transactions), 'eth_rpc_pvm_gas'),
            }

            // Collect all PVM gas values (Solidity avg + alt avgs) for range display
            const altLabels = contract.alt_implementations.map(alt => getImplLabel(contract.name, alt.name))
            const altPvmAvgs = contract.alt_implementations.map(alt => {
                const vals = alt.transactions.map(t => t.pvm_gas).filter((v): v is number => v !== null)
                return vals.length > 0 ? Math.round(vals.reduce((s, v) => s + v, 0) / vals.length) : null
            })
            const altPvmExclAvgs = contract.alt_implementations.map(alt => {
                const vals = alt.transactions.filter(t => t.name !== 'deploy').map(t => t.pvm_gas).filter((v): v is number => v !== null)
                return vals.length > 0 ? Math.round(vals.reduce((s, v) => s + v, 0) / vals.length) : null
            })
            const allPvmAll: LabeledValue[] = [
                { value: cAvg.pvm, label: 'solidity' },
                ...altPvmAvgs.map((v, i) => ({ value: v, label: altLabels[i] })),
            ]
            const allPvmExcl: LabeledValue[] = [
                { value: cExcl.pvm, label: 'solidity' },
                ...altPvmExclAvgs.map((v, i) => ({ value: v, label: altLabels[i] })),
            ]

            const pvmGasAll = withRange(formatGas(cAvg.pvm), allPvmAll, formatGas)
            const pvmDiffAll = withDiffRange(calcDiff(cAvg.geth, cAvg.pvm), cAvg.geth, allPvmAll)
            const pvmGasExcl = withRange(formatGas(cExcl.pvm), allPvmExcl, formatGas)
            const pvmDiffExcl = withDiffRange(calcDiff(cExcl.geth, cExcl.pvm), cExcl.geth, allPvmExcl)

            const contractId = rowId++
            rows.push(`
                <tr class="level-1 hidden-row" data-id="${contractId}" data-level="1" data-parent="${datasetId}">
                    <td><span class="expand-toggle" onclick="toggleExpand(${contractId}, 1)">${contract.name}</span></td>
                    <td class="number swappable" data-excl="${formatGas(cExcl.geth)}">${formatGas(cAvg.geth)}</td>
                    <td class="number swappable" data-excl="${formatGas(cExcl.evm)}">${formatGas(cAvg.evm)}</td>
                    <td class="number swappable" data-excl="${calcDiff(cExcl.geth, cExcl.evm)}">${calcDiff(cAvg.geth, cAvg.evm)}</td>
                    <td class="number swappable" data-excl="${escAttr(pvmGasExcl)}">${pvmGasAll}</td>
                    <td class="number swappable" data-excl="${escAttr(pvmDiffExcl)}">${pvmDiffAll}</td>
                </tr>
            `)

            // Build alt tx lookup by transaction name
            const hasAlts = contract.alt_implementations.length > 0
            const altGasByTxName = new Map<string, Array<{label: string, pvm_gas: number | null}>>()
            if (hasAlts) {
                for (const alt of contract.alt_implementations) {
                    const label = getImplLabel(contract.name, alt.name)
                    for (const tx of alt.transactions) {
                        if (!altGasByTxName.has(tx.name)) altGasByTxName.set(tx.name, [])
                        altGasByTxName.get(tx.name)!.push({ label, pvm_gas: tx.pvm_gas })
                    }
                }
            }

            for (const tx of contract.transactions) {
                const tag = hasAlts ? ' ' + implTag('solidity') : ''
                rows.push(`
                    <tr class="level-2 hidden-row" data-level="2" data-parent="${contractId}">
                        <td>${tx.name}${tag}</td>
                        <td class="number">${formatGas(tx.geth_gas)}</td>
                        <td class="number">${formatGas(tx.eth_rpc_evm_gas)}</td>
                        <td class="number">${calcDiff(tx.geth_gas, tx.eth_rpc_evm_gas)}</td>
                        <td class="number">${formatGas(tx.eth_rpc_pvm_gas)}</td>
                        <td class="number">${calcDiff(tx.geth_gas, tx.eth_rpc_pvm_gas)}</td>
                    </tr>
                `)

                // Alt implementation rows for the same transaction
                const alts = altGasByTxName.get(tx.name) || []
                for (const { label, pvm_gas } of alts) {
                    rows.push(`
                        <tr class="level-2 hidden-row alt-impl-row" data-level="2" data-parent="${contractId}">
                            <td>${tx.name} ${implTag(label)}</td>
                            <td class="number"></td>
                            <td class="number"></td>
                            <td class="number"></td>
                            <td class="number">${formatGas(pvm_gas)}</td>
                            <td class="number">${calcDiff(tx.geth_gas, pvm_gas)}</td>
                        </tr>
                    `)
                }
            }
        }
    }

    const overallAvg = {
        geth: avgGas(allTxs, 'geth_gas'),
        evm: avgGas(allTxs, 'eth_rpc_evm_gas'),
        pvm: avgGas(allTxs, 'eth_rpc_pvm_gas'),
    }
    const overallExcl = {
        geth: avgGas(noDeploy(allTxs), 'geth_gas'),
        evm: avgGas(noDeploy(allTxs), 'eth_rpc_evm_gas'),
        pvm: avgGas(noDeploy(allTxs), 'eth_rpc_pvm_gas'),
    }

    // Add average row
    rows.push(`
        <tr class="level-0 total-row" style="border-top: 2px solid var(--border-color); font-weight: 700;">
            <td>Avg per transaction</td>
            <td class="number swappable" data-excl="${formatGas(overallExcl.geth)}">${formatGas(overallAvg.geth)}</td>
            <td class="number swappable" data-excl="${formatGas(overallExcl.evm)}">${formatGas(overallAvg.evm)}</td>
            <td class="number swappable" data-excl="${calcDiff(overallExcl.geth, overallExcl.evm)}">${calcDiff(overallAvg.geth, overallAvg.evm)}</td>
            <td class="number swappable" data-excl="${formatGas(overallExcl.pvm)}">${formatGas(overallAvg.pvm)}</td>
            <td class="number swappable" data-excl="${calcDiff(overallExcl.geth, overallExcl.pvm)}">${calcDiff(overallAvg.geth, overallAvg.pvm)}</td>
        </tr>
    `)

    return `
    <table class="expandable-table expandable-gas-table">
        <thead>
            <tr>
                <th>Name</th>
                <th class="number">Geth</th>
                <th class="number">eth-rpc EVM</th>
                <th class="number">vs Geth</th>
                <th class="number">eth-rpc PVM</th>
                <th class="number">vs Geth</th>
            </tr>
        </thead>
        <tbody>
            ${rows.join('')}
        </tbody>
    </table>
    `
}

export function expandableTableScript(): string {
    // toggleExpand is now defined globally in htmlDocument template
    return ''
}

// Weight Analysis Hierarchy Types and Functions
export interface WeightRow {
    name: string
    evm_ref_time: number | null
    pvm_ref_time: number | null
    evm_proof_size: number | null
    pvm_proof_size: number | null
    evm_metered_pct: number | null
    pvm_metered_pct: number | null
    evm_metered_ref_time: number | null
    pvm_metered_ref_time: number | null
}

export interface AltWeightImpl {
    name: string
    pvm_ref_time: number | null
    pvm_proof_size: number | null
    pvm_metered_pct: number | null
    pvm_metered_ref_time: number | null
    transactions: Array<{
        name: string
        pvm_ref_time: number | null
        pvm_proof_size: number | null
        pvm_metered_pct: number | null
        pvm_metered_ref_time: number | null
    }>
}

export interface WeightHierarchyData {
    datasets: Array<WeightRow & {
        contracts: Array<WeightRow & {
            transactions: WeightRow[]
            alt_implementations: AltWeightImpl[]
        }>
    }>
}

function formatWeight(value: number | null): string {
    return value !== null ? value.toLocaleString() : 'N/A'
}

function formatMetered(value: number | null): string {
    return value !== null ? `${value.toFixed(1)}%` : 'N/A'
}

function formatWeightWithPct(weight: number | null, pct: number | null): string {
    if (weight === null) return 'N/A'
    const pctStr = pct !== null ? ` (${pct.toFixed(1)}%)` : ''
    return `${weight.toLocaleString()}${pctStr}`
}

export function drilldownWeightChartScript(hierarchy: WeightHierarchyData): string {
    return `
        // Store weight hierarchy data for drill-down
        const weightHierarchyOriginal = ${JSON.stringify(hierarchy)};
        let weightHierarchy = JSON.parse(JSON.stringify(weightHierarchyOriginal));
        let weightCurrentLevel = 'datasets';
        let weightCurrentParent = null;
        let hideWeightDeployTx = false;
        let weightMetric = 'ref_time'; // 'ref_time' or 'proof_size'

        function filterWeightHierarchy(hide) {
            if (!hide) {
                weightHierarchy = JSON.parse(JSON.stringify(weightHierarchyOriginal));
                return;
            }

            // Deep clone and filter out deploy transactions, recalculate averages
            function avgOfFiltered(txs, key) {
                var vals = txs.map(function(tx) { return tx[key]; }).filter(function(v) { return v !== null; });
                return vals.length > 0 ? Math.round(vals.reduce(function(s, v) { return s + v; }, 0) / vals.length) : null;
            }
            function avgPctOfFiltered(txs, key) {
                var vals = txs.map(function(tx) { return tx[key]; }).filter(function(v) { return v !== null; });
                return vals.length > 0 ? vals.reduce(function(s, v) { return s + v; }, 0) / vals.length : null;
            }

            weightHierarchy = {
                datasets: weightHierarchyOriginal.datasets.map(dataset => ({
                    ...dataset,
                    contracts: dataset.contracts.map(contract => {
                        const filteredTxs = contract.transactions.filter(tx => tx.name !== 'deploy');
                        // Filter alt_implementations deploy transactions too
                        const filteredAlts = (contract.alt_implementations || []).map(alt => ({
                            ...alt,
                            transactions: alt.transactions.filter(tx => tx.name !== 'deploy')
                        }));
                        return {
                            ...contract,
                            evm_ref_time: avgOfFiltered(filteredTxs, 'evm_ref_time'),
                            pvm_ref_time: avgOfFiltered(filteredTxs, 'pvm_ref_time'),
                            evm_proof_size: avgOfFiltered(filteredTxs, 'evm_proof_size'),
                            pvm_proof_size: avgOfFiltered(filteredTxs, 'pvm_proof_size'),
                            evm_metered_pct: avgPctOfFiltered(filteredTxs, 'evm_metered_pct'),
                            pvm_metered_pct: avgPctOfFiltered(filteredTxs, 'pvm_metered_pct'),
                            evm_metered_ref_time: avgOfFiltered(filteredTxs, 'evm_metered_ref_time'),
                            pvm_metered_ref_time: avgOfFiltered(filteredTxs, 'pvm_metered_ref_time'),
                            transactions: filteredTxs,
                            alt_implementations: filteredAlts
                        };
                    }).filter(c => c.transactions.length > 0)
                })).map(dataset => {
                    // Recalculate dataset averages from all transactions across contracts
                    const allTxs = [];
                    dataset.contracts.forEach(function(c) { c.transactions.forEach(function(tx) { allTxs.push(tx); }); });
                    return {
                        ...dataset,
                        evm_ref_time: avgOfFiltered(allTxs, 'evm_ref_time'),
                        pvm_ref_time: avgOfFiltered(allTxs, 'pvm_ref_time'),
                        evm_proof_size: avgOfFiltered(allTxs, 'evm_proof_size'),
                        pvm_proof_size: avgOfFiltered(allTxs, 'pvm_proof_size'),
                        evm_metered_pct: avgPctOfFiltered(allTxs, 'evm_metered_pct'),
                        pvm_metered_pct: avgPctOfFiltered(allTxs, 'pvm_metered_pct'),
                        evm_metered_ref_time: avgOfFiltered(allTxs, 'evm_metered_ref_time'),
                        pvm_metered_ref_time: avgOfFiltered(allTxs, 'pvm_metered_ref_time')
                    };
                })
            };
        }

        function getRustWeightForItems(items, level, metric) {
            // Extract Rust weight data from alt_implementations
            // Returns { rustRefTime, rustMeteredPct } arrays parallel to items
            var rustRefTime = [];
            var rustMeteredPct = [];

            if (level === 'datasets') {
                items.forEach(function(dataset) {
                    var sum = 0, pctSum = 0, count = 0;
                    dataset.contracts.forEach(function(c) {
                        var rustAlts = (c.alt_implementations || []).filter(function(a) { return a.name.indexOf('rust') !== -1; });
                        rustAlts.forEach(function(alt) {
                            alt.transactions.forEach(function(tx) {
                                var val = metric === 'ref_time' ? tx.pvm_ref_time : tx.pvm_proof_size;
                                if (val !== null) { sum += val; count++; }
                                if (tx.pvm_metered_pct !== null) { pctSum += tx.pvm_metered_pct; }
                            });
                        });
                    });
                    rustRefTime.push(count > 0 ? Math.round(sum / count) : null);
                    rustMeteredPct.push(count > 0 ? pctSum / count : null);
                });
            } else if (level === 'contracts') {
                items.forEach(function(contract) {
                    var sum = 0, pctSum = 0, count = 0;
                    var rustAlts = (contract.alt_implementations || []).filter(function(a) { return a.name.indexOf('rust') !== -1; });
                    rustAlts.forEach(function(alt) {
                        alt.transactions.forEach(function(tx) {
                            var val = metric === 'ref_time' ? tx.pvm_ref_time : tx.pvm_proof_size;
                            if (val !== null) { sum += val; count++; }
                            if (tx.pvm_metered_pct !== null) { pctSum += tx.pvm_metered_pct; }
                        });
                    });
                    rustRefTime.push(count > 0 ? Math.round(sum / count) : null);
                    rustMeteredPct.push(count > 0 ? pctSum / count : null);
                });
            } else if (level === 'transactions') {
                // Find the parent contract to get alt_implementations
                var contract = null;
                for (var di = 0; di < weightHierarchy.datasets.length; di++) {
                    for (var ci = 0; ci < weightHierarchy.datasets[di].contracts.length; ci++) {
                        var c = weightHierarchy.datasets[di].contracts[ci];
                        if (c.transactions === items) { contract = c; break; }
                    }
                    if (contract) break;
                }
                items.forEach(function(tx) {
                    var sum = 0, pctSum = 0, count = 0;
                    if (contract) {
                        var rustAlts = (contract.alt_implementations || []).filter(function(a) { return a.name.indexOf('rust') !== -1; });
                        rustAlts.forEach(function(alt) {
                            var altTx = alt.transactions.find(function(t) { return t.name === tx.name; });
                            if (altTx) {
                                var val = metric === 'ref_time' ? altTx.pvm_ref_time : altTx.pvm_proof_size;
                                if (val !== null) { sum += val; count++; }
                                if (altTx.pvm_metered_pct !== null) { pctSum += altTx.pvm_metered_pct; }
                            }
                        });
                    }
                    rustRefTime.push(count > 0 ? Math.round(sum / count) : null);
                    rustMeteredPct.push(count > 0 ? pctSum / count : null);
                });
            }

            return { rustRefTime: rustRefTime, rustMeteredPct: rustMeteredPct };
        }

        function getWeightChartData(level, parent, metric) {
            let items = [];
            const metricName = metric === 'ref_time' ? 'ref_time' : 'proof_size';
            const suffix = hideWeightDeployTx ? ' (excluding deploy)' : '';
            let title = '';
            let yLabel = '';

            if (level === 'datasets') {
                items = weightHierarchy.datasets;
                title = 'Avg ' + metricName + ' per Transaction by Dataset' + suffix + ' (click to drill down)';
                yLabel = 'Avg ' + metricName + ' per Transaction';
            } else if (level === 'contracts' && parent) {
                const dataset = weightHierarchy.datasets.find(d => d.name === parent);
                if (dataset) {
                    items = dataset.contracts;
                    title = 'Avg ' + metricName + ' per Transaction: ' + parent + suffix + ' (click to drill down, right-click to go back)';
                    yLabel = 'Avg ' + metricName + ' per Transaction';
                }
            } else if (level === 'transactions' && parent) {
                for (const dataset of weightHierarchy.datasets) {
                    const contract = dataset.contracts.find(c => c.name === parent);
                    if (contract) {
                        items = contract.transactions;
                        title = metricName + ' by Transaction: ' + parent + suffix + ' (right-click to go back)';
                        yLabel = metricName;
                        break;
                    }
                }
            }

            // Get the appropriate values based on metric
            const evmValues = metric === 'ref_time'
                ? items.map(i => i.evm_ref_time)
                : items.map(i => i.evm_proof_size);
            const pvmValues = metric === 'ref_time'
                ? items.map(i => i.pvm_ref_time)
                : items.map(i => i.pvm_proof_size);

            // Calculate metered and overhead portions based on metric
            let evmMetered, evmOverhead, pvmMetered, pvmOverhead;
            let rustMetered, rustOverhead;

            // Get Rust data
            const rustData = getRustWeightForItems(items, level, metric);

            if (metric === 'ref_time') {
                evmMetered = items.map((i, idx) => {
                    const val = evmValues[idx];
                    if (val === null || i.evm_metered_pct === null) return null;
                    return val * (i.evm_metered_pct / 100);
                });
                evmOverhead = items.map((i, idx) => {
                    const val = evmValues[idx];
                    if (val === null || i.evm_metered_pct === null) return null;
                    return val * (1 - i.evm_metered_pct / 100);
                });
                pvmMetered = items.map((i, idx) => {
                    const val = pvmValues[idx];
                    if (val === null || i.pvm_metered_pct === null) return null;
                    return val * (i.pvm_metered_pct / 100);
                });
                pvmOverhead = items.map((i, idx) => {
                    const val = pvmValues[idx];
                    if (val === null || i.pvm_metered_pct === null) return null;
                    return val * (1 - i.pvm_metered_pct / 100);
                });
                rustMetered = rustData.rustRefTime.map((val, idx) => {
                    if (val === null || rustData.rustMeteredPct[idx] === null) return null;
                    return val * (rustData.rustMeteredPct[idx] / 100);
                });
                rustOverhead = rustData.rustRefTime.map((val, idx) => {
                    if (val === null || rustData.rustMeteredPct[idx] === null) return null;
                    return val * (1 - rustData.rustMeteredPct[idx] / 100);
                });
            } else {
                evmMetered = evmValues;
                evmOverhead = evmValues.map(() => null);
                pvmMetered = pvmValues;
                pvmOverhead = pvmValues.map(() => null);
                rustMetered = rustData.rustRefTime;
                rustOverhead = rustData.rustRefTime.map(() => null);
            }

            return {
                labels: items.map(i => i.name),
                evmMetered, evmOverhead, pvmMetered, pvmOverhead,
                rustMetered, rustOverhead,
                evmMeteredPct: items.map(i => i.evm_metered_pct),
                pvmMeteredPct: items.map(i => i.pvm_metered_pct),
                rustMeteredPct: rustData.rustMeteredPct,
                title, metric, yLabel
            };
        }

        function updateWeightChart(level, parent) {
            weightCurrentLevel = level;
            weightCurrentParent = parent;

            const data = getWeightChartData(level, parent, weightMetric);
            const chart = Chart.getChart('weightAnalysisChart');

            chart.data.labels = data.labels;
            chart.data.datasets[0].data = data.evmMetered;
            chart.data.datasets[1].data = data.evmOverhead;
            chart.data.datasets[2].data = data.pvmMetered;
            chart.data.datasets[3].data = data.pvmOverhead;

            // Ensure Rust datasets exist (they may not if initial chart had no Rust data)
            while (chart.data.datasets.length < 6) {
                chart.data.datasets.push({
                    label: '',
                    data: [],
                    backgroundColor: chart.data.datasets.length === 4 ? 'rgba(253, 126, 20, 0.8)' : 'rgba(253, 126, 20, 0.4)',
                    borderColor: 'rgba(253, 126, 20, 1)',
                    borderWidth: 1,
                    stack: 'rust',
                });
            }
            chart.data.datasets[4].data = data.rustMetered;
            chart.data.datasets[5].data = data.rustOverhead;

            chart.options.plugins.title.text = data.title;
            chart.options.scales.y.title.text = data.yLabel;

            if (data.metric === 'ref_time') {
                chart.data.datasets[0].label = 'EVM Metered';
                chart.data.datasets[1].label = 'EVM Overhead';
                chart.data.datasets[2].label = 'PVM (Solidity) Metered';
                chart.data.datasets[3].label = 'PVM (Solidity) Overhead';
                chart.data.datasets[4].label = 'Rust Metered';
                chart.data.datasets[5].label = 'Rust Overhead';
                chart.data.datasets[1].hidden = false;
                chart.data.datasets[3].hidden = false;
                chart.data.datasets[5].hidden = false;
            } else {
                chart.data.datasets[0].label = 'EVM';
                chart.data.datasets[1].label = '';
                chart.data.datasets[2].label = 'PVM (Solidity)';
                chart.data.datasets[3].label = '';
                chart.data.datasets[4].label = 'PVM (Rust)';
                chart.data.datasets[5].label = '';
                chart.data.datasets[1].hidden = true;
                chart.data.datasets[3].hidden = true;
                chart.data.datasets[5].hidden = true;
            }

            window.weightEvmMeteredPct = data.evmMeteredPct;
            window.weightPvmMeteredPct = data.pvmMeteredPct;
            window.weightRustMeteredPct = data.rustMeteredPct;
            chart.update();
        }

        // Filter checkbox handler for weight
        document.getElementById('hideWeightDeployCheckbox').onchange = function(evt) {
            hideWeightDeployTx = evt.target.checked;
            filterWeightHierarchy(hideWeightDeployTx);
            updateWeightChart(weightCurrentLevel, weightCurrentParent);
            updateWeightTableVisibility();
        };

        // Metric radio button handler
        document.querySelectorAll('input[name="weightMetric"]').forEach(radio => {
            radio.onchange = function(evt) {
                weightMetric = evt.target.value;
                updateWeightChart(weightCurrentLevel, weightCurrentParent);
            };
        });

        function updateWeightTableVisibility() {
            const table = document.querySelector('.expandable-weight-table');
            table.querySelectorAll('tbody tr').forEach(row => {
                const nameCell = row.querySelector('td:first-child');
                if (nameCell) {
                    const name = nameCell.textContent.trim();
                    if (hideWeightDeployTx && name.startsWith('deploy') && row.classList.contains('level-2')) {
                        row.style.display = 'none';
                    } else if (!row.classList.contains('hidden-row')) {
                        row.style.display = '';
                    }
                }
            });
            table.querySelectorAll('.swappable').forEach(cell => {
                if (hideWeightDeployTx) {
                    if (!cell.dataset.all) cell.dataset.all = cell.innerHTML;
                    cell.innerHTML = cell.dataset.excl;
                } else {
                    if (cell.dataset.all) cell.innerHTML = cell.dataset.all;
                }
            });
        }

        // Add click handler for weight drill-down
        document.getElementById('weightAnalysisChart').onclick = function(evt) {
            const chart = Chart.getChart('weightAnalysisChart');
            const points = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

            if (points.length > 0) {
                const index = points[0].index;
                const label = chart.data.labels[index];

                if (weightCurrentLevel === 'datasets') {
                    updateWeightChart('contracts', label);
                } else if (weightCurrentLevel === 'contracts') {
                    updateWeightChart('transactions', label);
                }
            }
        };

        // Add right-click handler to go back
        document.getElementById('weightAnalysisChart').oncontextmenu = function(evt) {
            evt.preventDefault();

            if (weightCurrentLevel === 'transactions') {
                for (const dataset of weightHierarchy.datasets) {
                    if (dataset.contracts.find(c => c.name === weightCurrentParent)) {
                        updateWeightChart('contracts', dataset.name);
                        return;
                    }
                }
            } else if (weightCurrentLevel === 'contracts') {
                updateWeightChart('datasets', null);
            }
        };
    `
}

export function weightAnalysisFilterControls(): string {
    return `
    <div class="filter-controls">
        <label>
            <input type="checkbox" id="hideWeightDeployCheckbox">
            Exclude deploy transactions
        </label>
        <span style="margin-left: 1.5rem;">View:</span>
        <label>
            <input type="radio" name="weightMetric" value="ref_time" checked>
            ref_time
        </label>
        <label>
            <input type="radio" name="weightMetric" value="proof_size">
            proof_size
        </label>
    </div>
    <p class="table-note">Dataset and contract rows show the average weight for the Solidity implementation. Colored ranges show the min..max across all PVM implementations (Solidity, Rust, Ink).</p>
    `
}

export function expandableWeightTable(data: WeightHierarchyData): string {
    let rowId = 1000 // Start from 1000 to avoid conflicts with gas table IDs
    const rows: string[] = []

    // Helper to compute average across all transactions
    type WeightTx = WeightHierarchyData['datasets'][0]['contracts'][0]['transactions'][0]
    function avgWeight(txs: WeightTx[], key: keyof WeightTx): number | null {
        const vals = txs.map(tx => tx[key] as number | null).filter((v): v is number => v !== null)
        return vals.length > 0 ? Math.round(vals.reduce((s, v) => s + v, 0) / vals.length) : null
    }
    function avgPct(txs: WeightTx[], key: keyof WeightTx): number | null {
        const vals = txs.map(tx => tx[key] as number | null).filter((v): v is number => v !== null)
        return vals.length > 0 ? vals.reduce((s, v) => s + v, 0) / vals.length : null
    }

    // Collect all transactions for overall average
    const allTxs: WeightTx[] = data.datasets.flatMap(d => d.contracts.flatMap(c => c.transactions))
    const noDeployW = (txs: WeightTx[]) => txs.filter(tx => tx.name !== 'deploy')

    function weightAvgs(txs: WeightTx[]) {
        return {
            evm_ref_time: avgWeight(txs, 'evm_ref_time'),
            evm_metered_ref_time: avgWeight(txs, 'evm_metered_ref_time'),
            evm_metered_pct: avgPct(txs, 'evm_metered_pct'),
            evm_proof_size: avgWeight(txs, 'evm_proof_size'),
            pvm_ref_time: avgWeight(txs, 'pvm_ref_time'),
            pvm_metered_ref_time: avgWeight(txs, 'pvm_metered_ref_time'),
            pvm_metered_pct: avgPct(txs, 'pvm_metered_pct'),
            pvm_proof_size: avgWeight(txs, 'pvm_proof_size'),
        }
    }

    function weightRow(v: ReturnType<typeof weightAvgs>, cls: string) {
        return [
            `<td class="number ${cls}">${formatWeight(v.evm_ref_time)}</td>`,
            `<td class="number ${cls}">${formatWeightWithPct(v.evm_metered_ref_time, v.evm_metered_pct)}</td>`,
            `<td class="number ${cls}">${formatWeight(v.evm_proof_size)}</td>`,
            `<td class="number ${cls}">${formatWeight(v.pvm_ref_time)}</td>`,
            `<td class="number ${cls}">${formatWeightWithPct(v.pvm_metered_ref_time, v.pvm_metered_pct)}</td>`,
            `<td class="number ${cls}">${formatWeight(v.pvm_proof_size)}</td>`,
            `<td class="number ${cls}">${calcDiff(v.evm_ref_time, v.pvm_ref_time)}</td>`,
            `<td class="number ${cls}">${calcDiff(v.evm_metered_ref_time, v.pvm_metered_ref_time)}</td>`,
            `<td class="number ${cls}">${calcDiff(v.evm_proof_size, v.pvm_proof_size)}</td>`,
        ].join('')
    }

    type PvmRanges = { ref: LabeledValue[], metered: LabeledValue[], proof: LabeledValue[] }

    function swappableWeightCells(all: ReturnType<typeof weightAvgs>, excl: ReturnType<typeof weightAvgs>, rangeAll?: PvmRanges, rangeExcl?: PvmRanges) {
        const cells: string[] = []

        // Helper to push a simple swappable cell
        const pushCell = (allVal: string, exclVal: string) => {
            cells.push(`<td class="number swappable" data-excl="${escAttr(exclVal)}">${allVal}</td>`)
        }

        // Helper to push a swappable cell with optional range annotations
        const pushRangeCell = (allVal: string, exclVal: string, allRange: LabeledValue[] | undefined, exclRange: LabeledValue[] | undefined, rfmt: (v: number) => string) => {
            if (allRange) {
                const aVal = withRange(allVal, allRange, rfmt)
                const eVal = withRange(exclVal, exclRange ?? [], rfmt)
                pushCell(aVal, eVal)
            } else {
                pushCell(allVal, exclVal)
            }
        }

        // EVM columns: ref_time, metered (pct%), proof
        pushCell(formatWeight(all.evm_ref_time), formatWeight(excl.evm_ref_time))
        pushCell(formatWeightWithPct(all.evm_metered_ref_time, all.evm_metered_pct), formatWeightWithPct(excl.evm_metered_ref_time, excl.evm_metered_pct))
        pushCell(formatWeight(all.evm_proof_size), formatWeight(excl.evm_proof_size))

        // PVM columns: ref_time, metered (pct%), proof — with range annotations
        pushRangeCell(formatWeight(all.pvm_ref_time), formatWeight(excl.pvm_ref_time), rangeAll?.ref, rangeExcl?.ref, formatCompact)
        pushRangeCell(formatWeightWithPct(all.pvm_metered_ref_time, all.pvm_metered_pct), formatWeightWithPct(excl.pvm_metered_ref_time, excl.pvm_metered_pct), rangeAll?.metered, rangeExcl?.metered, formatCompact)
        pushRangeCell(formatWeight(all.pvm_proof_size), formatWeight(excl.pvm_proof_size), rangeAll?.proof, rangeExcl?.proof, formatCompact)

        // Delta columns
        const refDiffAll = withDiffRange(calcDiff(all.evm_ref_time, all.pvm_ref_time), all.evm_ref_time, rangeAll?.ref ?? [])
        const refDiffExcl = withDiffRange(calcDiff(excl.evm_ref_time, excl.pvm_ref_time), excl.evm_ref_time, rangeExcl?.ref ?? [])
        pushCell(refDiffAll, refDiffExcl)
        const metDiffAll = withDiffRange(calcDiff(all.evm_metered_ref_time, all.pvm_metered_ref_time), all.evm_metered_ref_time, rangeAll?.metered ?? [])
        const metDiffExcl = withDiffRange(calcDiff(excl.evm_metered_ref_time, excl.pvm_metered_ref_time), excl.evm_metered_ref_time, rangeExcl?.metered ?? [])
        pushCell(metDiffAll, metDiffExcl)
        const proofDiffAll = withDiffRange(calcDiff(all.evm_proof_size, all.pvm_proof_size), all.evm_proof_size, rangeAll?.proof ?? [])
        const proofDiffExcl = withDiffRange(calcDiff(excl.evm_proof_size, excl.pvm_proof_size), excl.evm_proof_size, rangeExcl?.proof ?? [])
        pushCell(proofDiffAll, proofDiffExcl)
        return cells.join('')
    }

    for (const dataset of data.datasets) {
        const dsTxs = dataset.contracts.flatMap(c => c.transactions)
        const dsAll = weightAvgs(dsTxs)
        const dsExcl = weightAvgs(noDeployW(dsTxs))

        const datasetId = rowId++
        rows.push(`
            <tr class="level-0" data-id="${datasetId}" data-level="0">
                <td><span class="expand-toggle" onclick="toggleExpand(${datasetId}, 0)">${dataset.name}</span></td>
                ${swappableWeightCells(dsAll, dsExcl)}
            </tr>
        `)

        for (const contract of dataset.contracts) {
            const cAll = weightAvgs(contract.transactions)
            const cExcl = weightAvgs(noDeployW(contract.transactions))

            // Collect PVM ranges from alt implementations
            const wAltLabels = contract.alt_implementations.map(alt => getImplLabel(contract.name, alt.name))
            const altWeightAvgsAll = contract.alt_implementations.map(alt => weightAvgs(alt.transactions))
            const altWeightAvgsExcl = contract.alt_implementations.map(alt => weightAvgs(alt.transactions.filter(t => t.name !== 'deploy')))
            const pvmRangeAll: PvmRanges | undefined = contract.alt_implementations.length > 0 ? {
                ref: [{ value: cAll.pvm_ref_time, label: 'solidity' }, ...altWeightAvgsAll.map((a, i) => ({ value: a.pvm_ref_time, label: wAltLabels[i] }))],
                metered: [{ value: cAll.pvm_metered_ref_time, label: 'solidity' }, ...altWeightAvgsAll.map((a, i) => ({ value: a.pvm_metered_ref_time, label: wAltLabels[i] }))],
                proof: [{ value: cAll.pvm_proof_size, label: 'solidity' }, ...altWeightAvgsAll.map((a, i) => ({ value: a.pvm_proof_size, label: wAltLabels[i] }))],
            } : undefined
            const pvmRangeExcl: PvmRanges | undefined = contract.alt_implementations.length > 0 ? {
                ref: [{ value: cExcl.pvm_ref_time, label: 'solidity' }, ...altWeightAvgsExcl.map((a, i) => ({ value: a.pvm_ref_time, label: wAltLabels[i] }))],
                metered: [{ value: cExcl.pvm_metered_ref_time, label: 'solidity' }, ...altWeightAvgsExcl.map((a, i) => ({ value: a.pvm_metered_ref_time, label: wAltLabels[i] }))],
                proof: [{ value: cExcl.pvm_proof_size, label: 'solidity' }, ...altWeightAvgsExcl.map((a, i) => ({ value: a.pvm_proof_size, label: wAltLabels[i] }))],
            } : undefined

            const contractId = rowId++
            rows.push(`
                <tr class="level-1 hidden-row" data-id="${contractId}" data-level="1" data-parent="${datasetId}">
                    <td><span class="expand-toggle" onclick="toggleExpand(${contractId}, 1)">${contract.name}</span></td>
                    ${swappableWeightCells(cAll, cExcl, pvmRangeAll, pvmRangeExcl)}
                </tr>
            `)

            // Build alt tx lookup by transaction name
            const hasWeightAlts = contract.alt_implementations.length > 0
            const altWeightByTxName = new Map<string, Array<{label: string, pvm_ref_time: number | null, pvm_metered_ref_time: number | null, pvm_metered_pct: number | null, pvm_proof_size: number | null}>>()
            if (hasWeightAlts) {
                for (const alt of contract.alt_implementations) {
                    const label = getImplLabel(contract.name, alt.name)
                    for (const tx of alt.transactions) {
                        if (!altWeightByTxName.has(tx.name)) altWeightByTxName.set(tx.name, [])
                        altWeightByTxName.get(tx.name)!.push({
                            label,
                            pvm_ref_time: tx.pvm_ref_time,
                            pvm_metered_ref_time: tx.pvm_metered_ref_time,
                            pvm_metered_pct: tx.pvm_metered_pct,
                            pvm_proof_size: tx.pvm_proof_size,
                        })
                    }
                }
            }

            for (const tx of contract.transactions) {
                const wTag = hasWeightAlts ? ' ' + implTag('solidity') : ''
                rows.push(`
                    <tr class="level-2 hidden-row" data-level="2" data-parent="${contractId}">
                        <td>${tx.name}${wTag}</td>
                        <td class="number">${formatWeight(tx.evm_ref_time)}</td>
                        <td class="number">${formatWeightWithPct(tx.evm_metered_ref_time, tx.evm_metered_pct)}</td>
                        <td class="number">${formatWeight(tx.evm_proof_size)}</td>
                        <td class="number">${formatWeight(tx.pvm_ref_time)}</td>
                        <td class="number">${formatWeightWithPct(tx.pvm_metered_ref_time, tx.pvm_metered_pct)}</td>
                        <td class="number">${formatWeight(tx.pvm_proof_size)}</td>
                        <td class="number">${calcDiff(tx.evm_ref_time, tx.pvm_ref_time)}</td>
                        <td class="number">${calcDiff(tx.evm_metered_ref_time, tx.pvm_metered_ref_time)}</td>
                        <td class="number">${calcDiff(tx.evm_proof_size, tx.pvm_proof_size)}</td>
                    </tr>
                `)

                // Alt implementation rows for the same transaction
                const alts = altWeightByTxName.get(tx.name) || []
                for (const alt of alts) {
                    rows.push(`
                        <tr class="level-2 hidden-row alt-impl-row" data-level="2" data-parent="${contractId}">
                            <td>${tx.name} ${implTag(alt.label)}</td>
                            <td class="number"></td>
                            <td class="number"></td>
                            <td class="number"></td>
                            <td class="number">${formatWeight(alt.pvm_ref_time)}</td>
                            <td class="number">${formatWeightWithPct(alt.pvm_metered_ref_time, alt.pvm_metered_pct)}</td>
                            <td class="number">${formatWeight(alt.pvm_proof_size)}</td>
                            <td class="number">${calcDiff(tx.evm_ref_time, alt.pvm_ref_time)}</td>
                            <td class="number">${calcDiff(tx.evm_metered_ref_time, alt.pvm_metered_ref_time)}</td>
                            <td class="number">${calcDiff(tx.evm_proof_size, alt.pvm_proof_size)}</td>
                        </tr>
                    `)
                }
            }
        }
    }

    const overallAll = weightAvgs(allTxs)
    const overallExcl = weightAvgs(noDeployW(allTxs))

    // Add average row
    rows.push(`
        <tr class="level-0 total-row" style="border-top: 2px solid var(--border-color); font-weight: 700;">
            <td>Avg per transaction</td>
            ${swappableWeightCells(overallAll, overallExcl)}
        </tr>
    `)

    return `
    <div class="expandable-weight-table-wrapper">
    <table class="expandable-table expandable-weight-table">
        <thead>
            <tr>
                <th rowspan="2">Name</th>
                <th colspan="3" class="group-header">EVM</th>
                <th colspan="3" class="group-header">PVM</th>
                <th colspan="3" class="group-header">Δ (PVM vs EVM)</th>
            </tr>
            <tr>
                <th class="number">ref_time</th>
                <th class="number">metered</th>
                <th class="number">proof</th>
                <th class="number">ref_time</th>
                <th class="number">metered</th>
                <th class="number">proof</th>
                <th class="number">ref_time</th>
                <th class="number">metered</th>
                <th class="number">proof</th>
            </tr>
        </thead>
        <tbody>
            ${rows.join('')}
        </tbody>
    </table>
    </div>
    `
}

// Category Hierarchy Types and Functions
export interface CategoryHierarchyRow {
    name: string
    categories: Record<string, number>
    total_cost: number
}

export interface CategoryHierarchyData {
    datasets: Array<CategoryHierarchyRow & {
        contracts: Array<CategoryHierarchyRow & {
            transactions: CategoryHierarchyRow[]
        }>
    }>
    allCategories: string[]
    categoryDescriptions?: Record<string, string>
}

export function expandableCategoryTable(data: CategoryHierarchyData): string {
    let rowId = 2000 // Start from 2000 to avoid conflicts with other table IDs
    const rows: string[] = []
    const { allCategories, datasets, categoryDescriptions = {} } = data

    // Recalculate category percentages for a set of transactions
    function recalcCategoryPcts(txs: CategoryHierarchyRow[]): Record<string, number> {
        const catTotals: Record<string, number> = {}
        let cost = 0
        for (const cat of allCategories) catTotals[cat] = 0
        for (const tx of txs) {
            cost += tx.total_cost
            for (const cat of allCategories) {
                catTotals[cat] += (tx.categories[cat] ?? 0) * tx.total_cost / 100
            }
        }
        const result: Record<string, number> = {}
        for (const cat of allCategories) {
            result[cat] = cost > 0 ? (catTotals[cat] / cost) * 100 : 0
        }
        return result
    }

    // Calculate totals
    const totals: Record<string, number> = {}
    const totalsExcl: Record<string, number> = {}
    let totalCost = 0
    let totalCostExcl = 0
    for (const cat of allCategories) {
        totals[cat] = 0
        totalsExcl[cat] = 0
    }

    for (const dataset of datasets) {
        totalCost += dataset.total_cost
        for (const cat of allCategories) {
            totals[cat] += (dataset.categories[cat] ?? 0) * dataset.total_cost / 100
        }

        // Compute excluding-deploy percentages
        const dsTxs = dataset.contracts.flatMap(c => c.transactions)
        const dsTxsExcl = dsTxs.filter(tx => tx.name !== 'deploy')
        const dsExclPcts = recalcCategoryPcts(dsTxsExcl)

        // Track excluding-deploy totals
        const dsCostExcl = dsTxsExcl.reduce((s, tx) => s + tx.total_cost, 0)
        totalCostExcl += dsCostExcl
        for (const cat of allCategories) {
            totalsExcl[cat] += (dsExclPcts[cat] ?? 0) * dsCostExcl / 100
        }

        const datasetId = rowId++
        rows.push(`
            <tr class="level-0" data-id="${datasetId}" data-level="0">
                <td><span class="expand-toggle" onclick="toggleExpand(${datasetId}, 0)">${dataset.name}</span></td>
                ${allCategories.map(cat => `<td class="number swappable" data-excl="${(dsExclPcts[cat] ?? 0).toFixed(1)}%">${(dataset.categories[cat] ?? 0).toFixed(1)}%</td>`).join('')}
            </tr>
        `)

        for (const contract of dataset.contracts) {
            const cTxsExcl = contract.transactions.filter(tx => tx.name !== 'deploy')
            const cExclPcts = recalcCategoryPcts(cTxsExcl)

            const contractId = rowId++
            rows.push(`
                <tr class="level-1 hidden-row" data-id="${contractId}" data-level="1" data-parent="${datasetId}">
                    <td><span class="expand-toggle" onclick="toggleExpand(${contractId}, 1)">${contract.name}</span></td>
                    ${allCategories.map(cat => `<td class="number swappable" data-excl="${(cExclPcts[cat] ?? 0).toFixed(1)}%">${(contract.categories[cat] ?? 0).toFixed(1)}%</td>`).join('')}
                </tr>
            `)

            for (const tx of contract.transactions) {
                rows.push(`
                    <tr class="level-2 hidden-row" data-level="2" data-parent="${contractId}">
                        <td>${tx.name}</td>
                        ${allCategories.map(cat => `<td class="number">${(tx.categories[cat] ?? 0).toFixed(1)}%</td>`).join('')}
                    </tr>
                `)
            }
        }
    }

    // Calculate total percentages (all and excluding deploy)
    const totalPcts: Record<string, number> = {}
    const totalPctsExcl: Record<string, number> = {}
    for (const cat of allCategories) {
        totalPcts[cat] = totalCost > 0 ? (totals[cat] / totalCost) * 100 : 0
        totalPctsExcl[cat] = totalCostExcl > 0 ? (totalsExcl[cat] / totalCostExcl) * 100 : 0
    }

    // Add total row
    rows.push(`
        <tr class="level-0 total-row" style="border-top: 2px solid var(--border-color); font-weight: 700;">
            <td>Total</td>
            ${allCategories.map(cat => `<td class="number swappable" data-excl="${totalPctsExcl[cat].toFixed(1)}%">${totalPcts[cat].toFixed(1)}%</td>`).join('')}
        </tr>
    `)

    return `
    <div style="overflow-x: auto;">
    <table class="expandable-table expandable-category-table">
        <thead>
            <tr>
                <th>Name</th>
                ${allCategories.map(cat => `<th class="number" style="font-size: 0.75rem;" title="${categoryDescriptions[cat] || cat}">${cat}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            ${rows.join('')}
        </tbody>
    </table>
    </div>
    `
}

export function categoryFilterControls(): string {
    return `
    <div class="filter-controls">
        <label>
            <input type="checkbox" id="hideCategoryDeployCheckbox">
            Exclude deploy transactions
        </label>
    </div>
    `
}

export function drilldownCategoryChartScript(hierarchy: CategoryHierarchyData, categoryColorMap: Record<string, string>): string {
    return `
        // Store category hierarchy data for drill-down
        const categoryColorMap = ${JSON.stringify(categoryColorMap)};
        const categoryHierarchyOriginal = ${JSON.stringify(hierarchy)};
        let categoryHierarchy = JSON.parse(JSON.stringify(categoryHierarchyOriginal));
        let categoryCurrentLevel = 'datasets';
        let categoryCurrentParent = null;
        let hideCategoryDeployTx = false;

        function recalculateCategoryPercentages(transactions, allCategories) {
            // Recalculate percentages based on remaining transactions
            const totals = {};
            let totalCost = 0;
            for (const cat of allCategories) {
                totals[cat] = 0;
            }
            for (const tx of transactions) {
                totalCost += tx.total_cost;
                for (const cat of allCategories) {
                    totals[cat] += (tx.categories[cat] ?? 0) * tx.total_cost / 100;
                }
            }
            const result = {};
            for (const cat of allCategories) {
                result[cat] = totalCost > 0 ? (totals[cat] / totalCost) * 100 : 0;
            }
            return { categories: result, total_cost: totalCost };
        }

        function filterCategoryHierarchy(hide) {
            if (!hide) {
                categoryHierarchy = JSON.parse(JSON.stringify(categoryHierarchyOriginal));
                return;
            }

            const allCategories = categoryHierarchyOriginal.allCategories;

            categoryHierarchy = {
                allCategories,
                datasets: categoryHierarchyOriginal.datasets.map(dataset => {
                    const contracts = dataset.contracts.map(contract => {
                        const filteredTxs = contract.transactions.filter(tx => tx.name !== 'deploy');
                        const recalc = recalculateCategoryPercentages(filteredTxs, allCategories);
                        return {
                            name: contract.name,
                            categories: recalc.categories,
                            total_cost: recalc.total_cost,
                            transactions: filteredTxs
                        };
                    }).filter(c => c.transactions.length > 0);

                    const contractTxs = contracts.flatMap(c => c.transactions);
                    const datasetRecalc = recalculateCategoryPercentages(contractTxs, allCategories);
                    return {
                        name: dataset.name,
                        categories: datasetRecalc.categories,
                        total_cost: datasetRecalc.total_cost,
                        contracts
                    };
                }).filter(d => d.contracts.length > 0)
            };
        }

        function getCategoryChartData(level, parent) {
            let items = [];
            let title = 'Category Breakdown by Dataset';
            const suffix = hideCategoryDeployTx ? ' (excluding deploy)' : '';

            if (level === 'datasets') {
                items = categoryHierarchy.datasets;
                title = 'Category Breakdown by Dataset' + suffix + ' (click to drill down)';
            } else if (level === 'contracts' && parent) {
                const dataset = categoryHierarchy.datasets.find(d => d.name === parent);
                if (dataset) {
                    items = dataset.contracts;
                    title = 'Category Breakdown by Contract: ' + parent + suffix + ' (click to drill down, right-click to go back)';
                }
            } else if (level === 'transactions' && parent) {
                for (const dataset of categoryHierarchy.datasets) {
                    const contract = dataset.contracts.find(c => c.name === parent);
                    if (contract) {
                        items = contract.transactions;
                        title = 'Category Breakdown by Transaction: ' + parent + suffix + ' (right-click to go back)';
                        break;
                    }
                }
            }

            const categories = categoryHierarchy.allCategories;
            const datasets = categories.map(cat => ({
                label: cat,
                data: items.map(i => i.categories[cat] ?? 0),
                backgroundColor: categoryColorMap[cat] || 'rgba(128, 128, 128, 0.8)',
            }));

            return {
                labels: items.map(i => i.name),
                datasets,
                title,
                canDrillDown: level !== 'transactions'
            };
        }

        function updateCategoryChart(level, parent) {
            categoryCurrentLevel = level;
            categoryCurrentParent = parent;

            const data = getCategoryChartData(level, parent);
            const chart = Chart.getChart('categoryBreakdownChart');

            chart.data.labels = data.labels;
            chart.data.datasets = data.datasets;
            chart.options.plugins.title.text = data.title;
            chart.options.plugins.title.display = true;

            chart.update();
        }

        // Filter checkbox handler for category
        document.getElementById('hideCategoryDeployCheckbox').onchange = function(evt) {
            hideCategoryDeployTx = evt.target.checked;
            filterCategoryHierarchy(hideCategoryDeployTx);
            updateCategoryChart(categoryCurrentLevel, categoryCurrentParent);
            updateCategoryTableVisibility();
        };

        function updateCategoryTableVisibility() {
            const table = document.querySelector('.expandable-category-table');
            table.querySelectorAll('tbody tr').forEach(row => {
                const nameCell = row.querySelector('td:first-child');
                if (nameCell) {
                    const name = nameCell.textContent.trim();
                    if (hideCategoryDeployTx && name.startsWith('deploy') && row.classList.contains('level-2')) {
                        row.style.display = 'none';
                    } else if (!row.classList.contains('hidden-row')) {
                        row.style.display = '';
                    }
                }
            });
            table.querySelectorAll('.swappable').forEach(cell => {
                if (hideCategoryDeployTx) {
                    if (!cell.dataset.all) cell.dataset.all = cell.innerHTML;
                    cell.innerHTML = cell.dataset.excl;
                } else {
                    if (cell.dataset.all) cell.innerHTML = cell.dataset.all;
                }
            });
        }

        // Add click handler for category drill-down
        document.getElementById('categoryBreakdownChart').onclick = function(evt) {
            const chart = Chart.getChart('categoryBreakdownChart');
            const points = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

            if (points.length > 0) {
                const index = points[0].index;
                const label = chart.data.labels[index];

                if (categoryCurrentLevel === 'datasets') {
                    updateCategoryChart('contracts', label);
                } else if (categoryCurrentLevel === 'contracts') {
                    updateCategoryChart('transactions', label);
                }
            }
        };

        // Add right-click handler to go back
        document.getElementById('categoryBreakdownChart').oncontextmenu = function(evt) {
            evt.preventDefault();

            if (categoryCurrentLevel === 'transactions') {
                for (const dataset of categoryHierarchy.datasets) {
                    if (dataset.contracts.find(c => c.name === categoryCurrentParent)) {
                        updateCategoryChart('contracts', dataset.name);
                        return;
                    }
                }
            } else if (categoryCurrentLevel === 'contracts') {
                updateCategoryChart('datasets', null);
            }
        };
    `
}

// Fibonacci implementations comparison table
export interface FibonacciTableData {
    variant: string
    label: string
    transaction_name: string
    ref_time: number | null
    metered_ref_time: number | null
    proof_size: number | null
}

function calcVsBest(value: number | null, best: number | null): string {
    if (value === null || best === null || best === 0) return 'N/A'
    if (value === best) return 'best'
    const diff = ((value - best) / best) * 100
    const sign = diff > 0 ? '+' : ''
    const className = diff > 0 ? 'positive' : 'negative'
    return `<span class="${className}">${sign}${diff.toFixed(1)}%</span>`
}

export function fibonacciComparisonTable(data: FibonacciTableData[]): string {
    // Group by transaction
    const transactions = [...new Set(data.map(d => d.transaction_name))].filter(t => t !== 'deploy')
    const variants = [...new Set(data.map(d => d.label))]

    const tables: string[] = []

    for (const tx of transactions) {
        const txData = data.filter(d => d.transaction_name === tx)

        // Find best values (lowest)
        const bestRefTime = Math.min(...txData.filter(d => d.ref_time !== null).map(d => d.ref_time!))
        const bestMetered = Math.min(...txData.filter(d => d.metered_ref_time !== null).map(d => d.metered_ref_time!))
        const bestProof = Math.min(...txData.filter(d => d.proof_size !== null).map(d => d.proof_size!))

        const rows = variants.map(variant => {
            const entry = txData.find(d => d.label === variant)
            if (!entry) return ''

            return `
                <tr>
                    <td>${variant}</td>
                    <td class="number">${entry.ref_time?.toLocaleString() ?? 'N/A'}</td>
                    <td class="number">${calcVsBest(entry.ref_time, bestRefTime)}</td>
                    <td class="number">${entry.metered_ref_time?.toLocaleString() ?? 'N/A'}</td>
                    <td class="number">${calcVsBest(entry.metered_ref_time, bestMetered)}</td>
                    <td class="number">${entry.proof_size?.toLocaleString() ?? 'N/A'}</td>
                    <td class="number">${calcVsBest(entry.proof_size, bestProof)}</td>
                </tr>
            `
        }).filter(r => r !== '')

        tables.push(`
            <div style="margin-bottom: 1.5rem;">
                <h4 style="margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-secondary);">${tx}</h4>
                <table class="fibonacci-table">
                    <thead>
                        <tr>
                            <th>Implementation</th>
                            <th class="number">ref_time</th>
                            <th class="number">vs best</th>
                            <th class="number">metered</th>
                            <th class="number">vs best</th>
                            <th class="number">proof_size</th>
                            <th class="number">vs best</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows.join('')}
                    </tbody>
                </table>
            </div>
        `)
    }

    return tables.join('')
}

// Bytecode Size Hierarchy Types and Functions
export interface BytecodeHierarchyData {
    datasets: Array<{
        name: string
        evm_size: number | null
        pvm_size: number | null
        contracts: Array<{
            name: string
            evm_size: number | null
            pvm_size: number | null
            evm_name: string | null
            pvm_name: string | null
            implementations: Array<{ name: string; vm_type: string; size_bytes: number }>
        }>
    }>
}

function formatBytes(value: number | null): string {
    if (value === null) return 'N/A'
    return value.toLocaleString()
}

function calcSizeDiff(evm: number | null, pvm: number | null): string {
    if (evm === null || pvm === null) return 'N/A'
    const diff = ((pvm - evm) / evm) * 100
    const sign = diff > 0 ? '+' : ''
    return `${sign}${diff.toFixed(1)}%`
}

export function expandableBytecodeTable(data: BytecodeHierarchyData): string {
    let rowId = 3000 // Start from 3000 to avoid conflicts with other table IDs
    const rows: string[] = []

    // Helper to compute average size per contract
    function avgSize(contracts: BytecodeHierarchyData['datasets'][0]['contracts'], key: 'evm_size' | 'pvm_size'): number | null {
        const vals = contracts.map(c => c[key]).filter((v): v is number => v !== null)
        return vals.length > 0 ? Math.round(vals.reduce((s, v) => s + v, 0) / vals.length) : null
    }

    // Collect all contracts for overall average
    const allContracts = data.datasets.flatMap(d => d.contracts)

    for (const dataset of data.datasets) {
        const dsAvgEvm = avgSize(dataset.contracts, 'evm_size')
        const dsAvgPvm = avgSize(dataset.contracts, 'pvm_size')

        const datasetId = rowId++
        rows.push(`
            <tr class="level-0" data-id="${datasetId}" data-level="0">
                <td><span class="expand-toggle" onclick="toggleExpand(${datasetId}, 0)">${dataset.name}</span></td>
                <td class="number">${formatBytes(dsAvgEvm)}</td>
                <td class="number">${formatBytes(dsAvgPvm)}</td>
                <td class="number">${calcSizeDiff(dsAvgEvm, dsAvgPvm)}</td>
            </tr>
        `)

        for (const contract of dataset.contracts) {
            const hasMultipleImpls = contract.implementations.length > 2
            const contractId = hasMultipleImpls ? rowId++ : -1

            const evmLabel = contract.evm_name ? `<span title="${contract.evm_name}">${formatBytes(contract.evm_size)}</span>` : 'N/A'
            const pvmLabel = contract.pvm_name ? `<span title="${contract.pvm_name}">${formatBytes(contract.pvm_size)}</span>` : 'N/A'

            if (hasMultipleImpls) {
                const altPvmImpls = contract.implementations
                    .filter(i => i.vm_type !== 'EVM' && !i.name.endsWith('_pvm'))
                const allPvmSizes: LabeledValue[] = [
                    { value: contract.pvm_size, label: 'solidity' },
                    ...altPvmImpls.map(i => ({ value: i.size_bytes as number | null, label: getImplLabel(contract.name, i.name) })),
                ]
                const pvmWithRange = withRange(pvmLabel, allPvmSizes, formatBytes)
                const diffWithRange = withDiffRange(calcSizeDiff(contract.evm_size, contract.pvm_size), contract.evm_size, allPvmSizes)

                rows.push(`
                    <tr class="level-1 hidden-row" data-id="${contractId}" data-level="1" data-parent="${datasetId}">
                        <td style="padding-left: 2rem;"><span class="expand-toggle" onclick="toggleExpand(${contractId}, 1)">${contract.name}</span></td>
                        <td class="number">${evmLabel}</td>
                        <td class="number">${pvmWithRange}</td>
                        <td class="number">${diffWithRange}</td>
                    </tr>
                `)

                // Combined Solidity row (EVM + PVM)
                const evmImpl = contract.implementations.find(i => i.vm_type === 'EVM')
                const pvmSolImpl = contract.implementations.find(i => i.name.endsWith('_pvm'))
                if (evmImpl || pvmSolImpl) {
                    rows.push(`
                        <tr class="level-2 hidden-row" data-level="2" data-parent="${contractId}">
                            <td style="padding-left: 3.5rem;">${contract.name} ${implTag('solidity')}</td>
                            <td class="number">${evmImpl ? formatBytes(evmImpl.size_bytes) : ''}</td>
                            <td class="number">${pvmSolImpl ? formatBytes(pvmSolImpl.size_bytes) : ''}</td>
                            <td class="number">${evmImpl && pvmSolImpl ? calcSizeDiff(evmImpl.size_bytes, pvmSolImpl.size_bytes) : ''}</td>
                        </tr>
                    `)
                }

                // Alt implementations with parenthetical labels
                for (const impl of contract.implementations) {
                    if (impl.vm_type === 'EVM' || impl.name.endsWith('_pvm')) continue
                    const label = getImplLabel(contract.name, impl.name)
                    rows.push(`
                        <tr class="level-2 hidden-row alt-impl-row" data-level="2" data-parent="${contractId}">
                            <td style="padding-left: 3.5rem;">${contract.name} ${implTag(label)}</td>
                            <td class="number"></td>
                            <td class="number">${formatBytes(impl.size_bytes)}</td>
                            <td class="number">${calcSizeDiff(contract.evm_size, impl.size_bytes)}</td>
                        </tr>
                    `)
                }
            } else {
                rows.push(`
                    <tr class="level-1 hidden-row" data-level="1" data-parent="${datasetId}">
                        <td style="padding-left: 2rem;">${contract.name}</td>
                        <td class="number">${evmLabel}</td>
                        <td class="number">${pvmLabel}</td>
                        <td class="number">${calcSizeDiff(contract.evm_size, contract.pvm_size)}</td>
                    </tr>
                `)
            }
        }
    }

    const overallAvgEvm = avgSize(allContracts, 'evm_size')
    const overallAvgPvm = avgSize(allContracts, 'pvm_size')

    // Add average row
    rows.push(`
        <tr class="level-0 total-row" style="border-top: 2px solid var(--border-color); font-weight: 700;">
            <td>Avg per contract</td>
            <td class="number">${formatBytes(overallAvgEvm)}</td>
            <td class="number">${formatBytes(overallAvgPvm)}</td>
            <td class="number">${calcSizeDiff(overallAvgEvm, overallAvgPvm)}</td>
        </tr>
    `)

    return `
    <p class="table-note">Dataset rows show the average bytecode size for the Solidity implementation. Colored ranges show the min..max across all PVM implementations (Solidity, Rust, Ink).</p>
    <table class="expandable-table expandable-bytecode-table">
        <thead>
            <tr>
                <th>Name</th>
                <th class="number">EVM (bytes)</th>
                <th class="number">PVM (bytes)</th>
                <th class="number">Δ (PVM vs EVM)</th>
            </tr>
        </thead>
        <tbody>
            ${rows.join('')}
        </tbody>
    </table>
    `
}

export function drilldownBytecodeChartScript(hierarchy: BytecodeHierarchyData): string {
    return `
        // Store bytecode hierarchy data for drill-down
        const bytecodeHierarchy = ${JSON.stringify(hierarchy)};
        let bytecodeCurrentLevel = 'datasets';
        let bytecodeCurrentParent = null;

        function avgSize(dataset, vm) {
            var contracts = dataset.contracts.filter(function(c) { return vm === 'evm' ? c.evm_size !== null : c.pvm_size !== null; });
            var total = vm === 'evm' ? dataset.evm_size : dataset.pvm_size;
            return total !== null && contracts.length > 0 ? Math.round(total / contracts.length) : null;
        }

        function avgRustBytecodeSize(contracts) {
            // For each contract, avg Rust impl sizes, then avg across contracts
            var sizes = [];
            contracts.forEach(function(c) {
                var rustImpls = (c.implementations || []).filter(function(i) { return i.name.indexOf('rust') !== -1 && i.vm_type === 'PVM'; });
                if (rustImpls.length > 0) {
                    var avg = Math.round(rustImpls.reduce(function(s, i) { return s + i.size_bytes; }, 0) / rustImpls.length);
                    sizes.push(avg);
                }
            });
            return sizes.length > 0 ? Math.round(sizes.reduce(function(s, v) { return s + v; }, 0) / sizes.length) : null;
        }

        function contractRustBytecodeSize(contract) {
            var rustImpls = (contract.implementations || []).filter(function(i) { return i.name.indexOf('rust') !== -1 && i.vm_type === 'PVM'; });
            if (rustImpls.length === 0) return null;
            return Math.round(rustImpls.reduce(function(s, i) { return s + i.size_bytes; }, 0) / rustImpls.length);
        }

        function updateBytecodeChart(level, parent) {
            bytecodeCurrentLevel = level;
            bytecodeCurrentParent = parent;

            const chart = Chart.getChart('bytecodeChart');

            if (level === 'datasets') {
                const items = bytecodeHierarchy.datasets;
                chart.data.labels = items.map(i => i.name);
                chart.data.datasets[0].data = items.map(i => avgSize(i, 'evm'));
                chart.data.datasets[1].data = items.map(i => avgSize(i, 'pvm'));
                chart.data.datasets[2].data = items.map(i => avgRustBytecodeSize(i.contracts));
                chart.options.plugins.title.text = 'Avg Bytecode Size per Contract (click to drill down)';
                chart.options.scales.y.title.text = 'Avg Size (bytes)';
            } else if (level === 'contracts' && parent) {
                const dataset = bytecodeHierarchy.datasets.find(d => d.name === parent);
                if (!dataset) return;
                const items = dataset.contracts;
                chart.data.labels = items.map(i => i.name);
                chart.data.datasets[0].data = items.map(i => i.evm_size);
                chart.data.datasets[1].data = items.map(i => i.pvm_size);
                chart.data.datasets[2].data = items.map(i => contractRustBytecodeSize(i));
                chart.options.plugins.title.text = 'Bytecode Size: ' + parent + ' (right-click to go back)';
                chart.options.scales.y.title.text = 'Size (bytes)';
            }

            chart.options.plugins.title.display = true;
            chart.update();
        }

        // Add click handler for bytecode drill-down
        document.getElementById('bytecodeChart').onclick = function(evt) {
            const chart = Chart.getChart('bytecodeChart');
            const points = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

            if (points.length > 0 && bytecodeCurrentLevel === 'datasets') {
                const index = points[0].index;
                const label = chart.data.labels[index];
                updateBytecodeChart('contracts', label);
            }
        };

        // Add right-click handler to go back
        document.getElementById('bytecodeChart').oncontextmenu = function(evt) {
            evt.preventDefault();

            if (bytecodeCurrentLevel === 'contracts') {
                updateBytecodeChart('datasets', null);
            }
        };
    `
}
