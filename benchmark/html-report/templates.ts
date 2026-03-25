import { getStyles } from './styles.ts'
import { getImplHexColor } from './charts.ts'
import type { BenchmarkMetadataRow } from './queries.ts'

export function htmlDocument(
    content: string,
    scripts: string,
    metadata?: BenchmarkMetadataRow[],
): string {
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
            ${
        (metadata ?? []).map((m) => {
            const chain = m.system_chain ?? m.chain_name
            let line = `<p><strong>${chain}</strong>`
            if (m.runtime_spec_name) {
                line +=
                    ` | Runtime: ${m.runtime_spec_name}@${m.runtime_spec_version}`
            }
            if (m.system_name) {
                line += ` | Node: ${m.system_name} ${m.system_version ?? ''}`
            }
            if (m.resolc_version) line += ` | resolc: ${m.resolc_version}`
            if (m.solc_version) line += ` | solc: ${m.solc_version}`
            line += `</p>`
            return line
        }).join('\n            ')
    }
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
                <li><a href="#evm-pvm-analysis">EVM vs PVM Analysis</a></li>
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
        // ── Global exclusion state ──
        // Keys are compound: "dataset|contract|txName"
        const excludedTxKeys = new Set();

        function txKey(dataset, contract, txname) {
            return dataset + '|' + contract + '|' + txname;
        }

        function toggleTxExclusion(dataset, contract, txname) {
            var key = txKey(dataset, contract, txname);
            if (excludedTxKeys.has(key)) excludedTxKeys.delete(key);
            else excludedTxKeys.add(key);
            applyExclusions();
        }

        function resetExclusions() {
            excludedTxKeys.clear();
            applyExclusions();
        }

        function toggleDeployExclusion(checked) {
            document.querySelectorAll('tr.level-2[data-txname="deploy"]').forEach(function(row) {
                var key = txKey(row.dataset.dataset, row.dataset.contract, 'deploy');
                if (checked) excludedTxKeys.add(key);
                else excludedTxKeys.delete(key);
            });
            applyExclusions();
        }

        function syncDeployCheckboxes() {
            // Check if ALL deploy rows are excluded
            var deployRows = document.querySelectorAll('tr.level-2[data-txname="deploy"]:not(.alt-impl-row)');
            var allExcluded = deployRows.length > 0;
            deployRows.forEach(function(row) {
                if (!excludedTxKeys.has(txKey(row.dataset.dataset, row.dataset.contract, 'deploy'))) allExcluded = false;
            });
            ['hideDeployCheckbox','hideWeightDeployCheckbox','hideCategoryDeployCheckbox'].forEach(function(id) {
                var cb = document.getElementById(id);
                if (cb) cb.checked = allExcluded;
            });
        }

        function applyExclusions() {
            document.querySelectorAll('tr.level-2[data-txname]').forEach(function(row) {
                var key = txKey(row.dataset.dataset, row.dataset.contract, row.dataset.txname);
                row.classList.toggle('excluded-row', excludedTxKeys.has(key));
            });
            syncDeployCheckboxes();
            if (typeof window.updateGasSection === 'function') window.updateGasSection();
            if (typeof window.updateWeightSection === 'function') window.updateWeightSection();
            if (typeof window.updateCategorySection === 'function') window.updateCategorySection();
            updateExclusionIndicator();
        }

        function updateExclusionIndicator() {
            document.querySelectorAll('.excl-indicator').forEach(function(el) {
                if (excludedTxKeys.size > 0) {
                    el.innerHTML = excludedTxKeys.size + ' excluded (<a onclick="resetExclusions()">reset</a>)';
                    el.style.display = '';
                } else {
                    el.innerHTML = '';
                    el.style.display = 'none';
                }
            });
        }

        // ── JS formatting helpers (mirrors TS formatGas / calcDiff / formatWeight / etc.) ──
        function fmtGas(v) { return v !== null ? v.toLocaleString() : 'N/A'; }
        function fmtDiff(base, compare) {
            if (base === null || compare === null) return 'N/A';
            if (base === 0) return compare === 0 ? '0.0%' : 'N/A';
            var d = ((compare - base) / base) * 100;
            var s = d > 0 ? '+' : '';
            return s + d.toFixed(1) + '%';
        }
        function fmtWeight(v) { return v !== null ? v.toLocaleString() : 'N/A'; }
        function fmtWeightPct(w, pct) {
            if (w === null) return 'N/A';
            var ps = pct !== null ? ' (' + pct.toFixed(1) + '%)' : '';
            return w.toLocaleString() + ps;
        }
        function fmtCatPct(v) { return v.toFixed(1) + '%'; }
        function fmtCompact(v) {
            var abs = Math.abs(v);
            if (abs >= 1e9) return (v / 1e9).toFixed(1) + 'B';
            if (abs >= 1e6) return (v / 1e6).toFixed(1) + 'M';
            if (abs >= 1e3) return (v / 1e3).toFixed(1) + 'K';
            return v.toLocaleString();
        }
        var IMPL_FIXED_HEX = { evm: '#0d6efd', solidity: '#198754' };
        var IMPL_HEX_PALETTE = ['#fd7e14','#6f42c1','#20c997','#d63384','#ffc107','#0dcaf0','#dc3545','#6c757d'];
        var _implHexCache = {};
        var _implHexNext = 0;
        function implColorJS(label) {
            var l = label.toLowerCase();
            if (IMPL_FIXED_HEX[l]) return IMPL_FIXED_HEX[l];
            if (_implHexCache[l]) return _implHexCache[l];
            var c = IMPL_HEX_PALETTE[_implHexNext % IMPL_HEX_PALETTE.length];
            _implHexNext++;
            _implHexCache[l] = c;
            return c;
        }
        // ── Shared alt-impl helpers (used by gas and weight drilldowns) ──
        function displaySuffixShared(suffix) {
            return suffix.charAt(0).toUpperCase() + suffix.slice(1);
        }
        function altImplLabelShared(name) {
            var parts = name.split('_');
            var suffix = parts[parts.length - 1];
            return 'PVM/' + displaySuffixShared(suffix);
        }
        var CHART_PALETTE = [
            { bg: 'rgba(253, 126, 20, 0.8)', border: 'rgba(253, 126, 20, 1)' },
            { bg: 'rgba(111, 66, 193, 0.8)', border: 'rgba(111, 66, 193, 1)' },
            { bg: 'rgba(32, 201, 151, 0.8)', border: 'rgba(32, 201, 151, 1)' },
            { bg: 'rgba(214, 51, 132, 0.8)', border: 'rgba(214, 51, 132, 1)' },
            { bg: 'rgba(255, 193, 7, 0.8)', border: 'rgba(255, 193, 7, 1)' },
            { bg: 'rgba(13, 202, 240, 0.8)', border: 'rgba(13, 202, 240, 1)' },
            { bg: 'rgba(220, 53, 69, 0.8)', border: 'rgba(220, 53, 69, 1)' },
            { bg: 'rgba(108, 117, 125, 0.8)', border: 'rgba(108, 117, 125, 1)' }
        ];
        var _chartColorCache = {};
        var _chartColorNext = 0;
        function getChartImplColor(implLabel) {
            if (_chartColorCache[implLabel]) return _chartColorCache[implLabel];
            var c = CHART_PALETTE[_chartColorNext % CHART_PALETTE.length];
            _chartColorNext++;
            _chartColorCache[implLabel] = c;
            return c;
        }

        function getImplLabelJS(contractName, altName) {
            var base = contractName.replace(/_pvm$/, '');
            var snake = base.replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
            var lower = base.toLowerCase();
            var prefixes = [snake + '_', lower + '_'];
            for (var i = 0; i < prefixes.length; i++) {
                if (altName.indexOf(prefixes[i]) === 0) return altName.slice(prefixes[i].length);
            }
            return altName;
        }
        function jsWithRange(mainHtml, allValues, rangeFmt) {
            var entries = allValues.filter(function(e) { return e.value !== null; });
            if (entries.length <= 1) return mainHtml;
            var mn = entries.reduce(function(a,b){ return a.value < b.value ? a : b; });
            var mx = entries.reduce(function(a,b){ return a.value > b.value ? a : b; });
            if (mn.value === mx.value) return mainHtml;
            return mainHtml + '<span class="impl-range"><span style="color:'+implColorJS(mn.label)+'">'+rangeFmt(mn.value)+'</span>..<span style="color:'+implColorJS(mx.label)+'">'+rangeFmt(mx.value)+'</span></span>';
        }
        function jsWithDiffRange(mainDiff, base, allCompareValues) {
            if (base === null) return mainDiff;
            var entries = allCompareValues.filter(function(e) { return e.value !== null; });
            if (entries.length <= 1) return mainDiff;
            var withDiffs = entries.map(function(e){ return { label: e.label, diff: ((e.value - base) / base) * 100 }; });
            var mn = withDiffs.reduce(function(a,b){ return a.diff < b.diff ? a : b; });
            var mx = withDiffs.reduce(function(a,b){ return a.diff > b.diff ? a : b; });
            if (Math.abs(mx.diff - mn.diff) < 0.1) return mainDiff;
            function fd(d){ var s = d > 0 ? '+' : ''; return s + d.toFixed(1) + '%'; }
            return mainDiff + '<span class="impl-range"><span style="color:'+implColorJS(mn.label)+'">'+fd(mn.diff)+'</span>..<span style="color:'+implColorJS(mx.label)+'">'+fd(mx.diff)+'</span></span>';
        }
        function avgArr(arr) {
            var vals = arr.filter(function(v){ return v !== null; });
            return vals.length > 0 ? Math.round(vals.reduce(function(s,v){ return s+v; },0) / vals.length) : null;
        }
        function avgPctArr(arr) {
            var vals = arr.filter(function(v){ return v !== null; });
            return vals.length > 0 ? vals.reduce(function(s,v){ return s+v; },0) / vals.length : null;
        }

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

        // Initialize sortable tables + click-to-exclude
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

            // Click-to-exclude on level-2 transaction rows
            document.querySelectorAll('tr.level-2[data-txname]:not(.alt-impl-row)').forEach(function(row) {
                row.addEventListener('click', function(e) {
                    if (e.target.closest('.expand-toggle')) return;
                    toggleTxExclusion(row.dataset.dataset, row.dataset.contract, row.dataset.txname);
                });
            });
        });
    </script>
</body>
</html>`
}

export function sectionCard(
    id: string,
    title: string,
    content: string,
): string {
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
        <div class="metric-value">${
        typeof value === 'number' ? value.toLocaleString() : value
    }</div>
        <div class="metric-label">${label}</div>
    </div>`
}

export function metricGrid(
    metrics: Array<{ value: string | number; label: string }>,
): string {
    return `
    <div class="metric-grid">
        ${metrics.map((m) => metricCard(m.value, m.label)).join('')}
    </div>`
}

export function dataTable(
    headers: string[],
    rows: Array<Array<string | number>>,
    options: { numberColumns?: number[] } = {},
): string {
    const { numberColumns = [] } = options

    return `
    <table>
        <thead>
            <tr>
                ${
        headers.map((h, i) =>
            `<th class="${numberColumns.includes(i) ? 'number' : ''}">${h}</th>`
        ).join('')
    }
            </tr>
        </thead>
        <tbody>
            ${
        rows.map((row) => `
                <tr>
                    ${
            row.map((cell, i) => {
                const isNumber = numberColumns.includes(i)
                const formatted = typeof cell === 'number'
                    ? cell.toLocaleString()
                    : cell
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
            }).join('')
        }
                </tr>
            `).join('')
    }
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
    datasets: Array<
        GasRow & {
            contracts: Array<
                GasRow & {
                    transactions: GasRow[]
                    alt_implementations: AltGasImpl[]
                }
            >
        }
    >
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
    const color = getImplHexColor(label.toLowerCase())
    return `<span class="impl-tag" style="background:${color}20;color:${color}">${label}</span>`
}

function formatGas(value: number | null): string {
    return value !== null ? value.toLocaleString() : 'N/A'
}

function calcDiff(base: number | null, compare: number | null): string {
    if (base === null || compare === null) return 'N/A'
    if (base === 0) return compare === 0 ? '0.0%' : 'N/A'
    const diff = ((compare - base) / base) * 100
    const sign = diff > 0 ? '+' : ''
    return `${sign}${diff.toFixed(1)}%`
}

/** HTML-encode a string for safe use in data-* attributes */
function escAttr(s: string): string {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
}

/** Format a number in compact form for range indicators */
function formatCompact(v: number): string {
    const abs = Math.abs(v)
    if (abs >= 1e9) return `${(v / 1e9).toFixed(1)}B`
    if (abs >= 1e6) return `${(v / 1e6).toFixed(1)}M`
    if (abs >= 1e3) return `${(v / 1e3).toFixed(1)}K`
    return v.toLocaleString()
}

interface LabeledValue {
    value: number | null
    label: string
}

/** Map implementation label to its CSS color */
function implColor(label: string): string {
    return getImplHexColor(label.toLowerCase())
}

/** Append a colored min..max range indicator below an aggregated value */
function withRange(
    mainValue: string,
    allValues: LabeledValue[],
    rangeFmt: (v: number) => string = formatCompact,
): string {
    const entries = allValues.filter((
        e,
    ): e is { value: number; label: string } => e.value !== null)
    if (entries.length <= 1) return mainValue
    const minEntry = entries.reduce((a, b) => a.value < b.value ? a : b)
    const maxEntry = entries.reduce((a, b) => a.value > b.value ? a : b)
    if (minEntry.value === maxEntry.value) return mainValue
    return `${mainValue}<span class="impl-range"><span style="color:${
        implColor(minEntry.label)
    }">${rangeFmt(minEntry.value)}</span>..<span style="color:${
        implColor(maxEntry.label)
    }">${rangeFmt(maxEntry.value)}</span></span>`
}

/** Append a colored min..max range for percentage-diff columns */
function withDiffRange(
    mainDiff: string,
    base: number | null,
    allCompareValues: LabeledValue[],
): string {
    if (base === null) return mainDiff
    const entries = allCompareValues.filter((
        e,
    ): e is { value: number; label: string } => e.value !== null)
    if (entries.length <= 1) return mainDiff
    const withDiffs = entries.map((e) => ({
        label: e.label,
        diff: ((e.value - base) / base) * 100,
    }))
    const minEntry = withDiffs.reduce((a, b) => a.diff < b.diff ? a : b)
    const maxEntry = withDiffs.reduce((a, b) => a.diff > b.diff ? a : b)
    if (Math.abs(maxEntry.diff - minEntry.diff) < 0.1) return mainDiff
    const fmtDiff = (d: number) => {
        const s = d > 0 ? '+' : ''
        return `${s}${d.toFixed(1)}%`
    }
    return `${mainDiff}<span class="impl-range"><span style="color:${
        implColor(minEntry.label)
    }">${fmtDiff(minEntry.diff)}</span>..<span style="color:${
        implColor(maxEntry.label)
    }">${fmtDiff(maxEntry.diff)}</span></span>`
}

export function drilldownChartScript(hierarchy: GasHierarchyData): string {
    return `
        // Store hierarchy data for drill-down
        const gasHierarchyOriginal = ${JSON.stringify(hierarchy)};
        let gasHierarchy = JSON.parse(JSON.stringify(gasHierarchyOriginal));
        let currentLevel = 'datasets';
        let currentParent = null;
        function filterGasHierarchy() {
            if (excludedTxKeys.size === 0) {
                gasHierarchy = JSON.parse(JSON.stringify(gasHierarchyOriginal));
                return;
            }

            gasHierarchy = {
                datasets: gasHierarchyOriginal.datasets.map(dataset => ({
                    ...dataset,
                    contracts: dataset.contracts.map(contract => {
                        const filteredTxs = contract.transactions.filter(tx => !excludedTxKeys.has(txKey(dataset.name, contract.name, tx.name)));
                        const evm = filteredTxs.reduce((sum, tx) => sum + (tx.eth_rpc_evm_gas || 0), 0);
                        const pvm = filteredTxs.reduce((sum, tx) => sum + (tx.eth_rpc_pvm_gas || 0), 0);
                        const filteredAlts = (contract.alt_implementations || []).map(alt => ({
                            ...alt,
                            transactions: alt.transactions.filter(tx => !excludedTxKeys.has(txKey(dataset.name, contract.name, tx.name)))
                        }));
                        return {
                            ...contract,
                            geth_gas: contract.geth_gas,
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
                    const originalDataset = gasHierarchyOriginal.datasets.find(d => d.name === dataset.name);
                    const evm = dataset.contracts.reduce((sum, c) => sum + (c.eth_rpc_evm_gas || 0), 0);
                    const pvm = dataset.contracts.reduce((sum, c) => sum + (c.eth_rpc_pvm_gas || 0), 0);
                    return {
                        ...dataset,
                        geth_gas: originalDataset?.geth_gas ?? null,
                        eth_rpc_evm_gas: dataset.contracts.some(c => c.eth_rpc_evm_gas !== null) ? evm : null,
                        eth_rpc_pvm_gas: dataset.contracts.some(c => c.eth_rpc_pvm_gas !== null) ? pvm : null
                    };
                }).filter(d => d.contracts.length > 0)
            };
        }

        function toPctDiff(val, base) {
            return val !== null && base !== null && base > 0 ? Math.round((val / base - 1) * 10000) / 100 : null;
        }

        function geoMeanOfTxRatios(contracts, valKey) {
            var ratios = [];
            contracts.forEach(function(c) {
                c.transactions.forEach(function(tx) {
                    if (tx[valKey] !== null && tx.geth_gas !== null && tx.geth_gas > 0) {
                        ratios.push(tx[valKey] / tx.geth_gas);
                    }
                });
            });
            if (ratios.length === 0) return null;
            var logSum = ratios.reduce(function(s, r) { return s + Math.log(r); }, 0);
            var gm = Math.exp(logSum / ratios.length);
            return Math.round((gm - 1) * 10000) / 100;
        }

        function geoMeanOfChildRatios(children, valKey) {
            var ratios = children.filter(function(c) { return c[valKey] !== null && c.geth_gas !== null && c.geth_gas > 0; })
                .map(function(c) { return c[valKey] / c.geth_gas; });
            if (ratios.length === 0) return null;
            var logSum = ratios.reduce(function(s, r) { return s + Math.log(r); }, 0);
            var gm = Math.exp(logSum / ratios.length);
            return Math.round((gm - 1) * 10000) / 100;
        }

        // Map contract name suffix to display label (browser-side)
        // Generic: compute avg pct diff for a given impl label across contracts
        function geoMeanAltTxRatios(contracts, implLabel) {
            var ratios = [];
            contracts.forEach(function(c) {
                var alts = (c.alt_implementations || []).filter(function(a) { return altImplLabelShared(a.name) === implLabel; });
                alts.forEach(function(alt) {
                    alt.transactions.forEach(function(altTx) {
                        var baseTx = c.transactions.find(function(t) { return t.name === altTx.name; });
                        if (altTx.pvm_gas !== null && baseTx && baseTx.geth_gas !== null && baseTx.geth_gas > 0) {
                            ratios.push(altTx.pvm_gas / baseTx.geth_gas);
                        }
                    });
                });
            });
            if (ratios.length === 0) return null;
            var logSum = ratios.reduce(function(s, r) { return s + Math.log(r); }, 0);
            var gm = Math.exp(logSum / ratios.length);
            return Math.round((gm - 1) * 10000) / 100;
        }

        function geoMeanAltRatiosForContract(contract, implLabel) {
            var ratios = [];
            var alts = (contract.alt_implementations || []).filter(function(a) { return altImplLabelShared(a.name) === implLabel; });
            alts.forEach(function(alt) {
                alt.transactions.forEach(function(altTx) {
                    var baseTx = contract.transactions.find(function(t) { return t.name === altTx.name; });
                    if (altTx.pvm_gas !== null && baseTx && baseTx.geth_gas !== null && baseTx.geth_gas > 0) {
                        ratios.push(altTx.pvm_gas / baseTx.geth_gas);
                    }
                });
            });
            if (ratios.length === 0) return null;
            var logSum = ratios.reduce(function(s, r) { return s + Math.log(r); }, 0);
            var gm = Math.exp(logSum / ratios.length);
            return Math.round((gm - 1) * 10000) / 100;
        }

        function altPctDiffForTx(contract, txName, implLabel) {
            var diffs = [];
            var alts = (contract.alt_implementations || []).filter(function(a) { return altImplLabelShared(a.name) === implLabel; });
            alts.forEach(function(alt) {
                var altTx = alt.transactions.find(function(t) { return t.name === txName; });
                if (altTx) {
                    var baseTx = contract.transactions.find(function(t) { return t.name === txName; });
                    var d = toPctDiff(altTx.pvm_gas, baseTx ? baseTx.geth_gas : null);
                    if (d !== null) diffs.push(d);
                }
            });
            return diffs.length > 0 ? Math.round(diffs.reduce(function(s, d) { return s + d; }, 0) / diffs.length * 100) / 100 : null;
        }

        // Discover all alt impl labels from hierarchy
        var gasAltImplLabels = [];
        (function() {
            var labels = {};
            gasHierarchy.datasets.forEach(function(ds) {
                ds.contracts.forEach(function(c) {
                    (c.alt_implementations || []).forEach(function(a) {
                        labels[altImplLabelShared(a.name)] = true;
                    });
                });
            });
            gasAltImplLabels = Object.keys(labels);
        })();

        function getChartData(level, parent) {
            let items = [];
            let title = 'Gas by Dataset';
            const suffix = excludedTxKeys.size > 0 ? ' (excl. ' + excludedTxKeys.size + ')' : '';
            var altData = {};

            if (level === 'datasets') {
                items = gasHierarchy.datasets;
                title = 'Avg Gas by Dataset' + suffix + ' (click to drill down)';
                gasAltImplLabels.forEach(function(lbl) {
                    altData[lbl] = items.map(function(i) { return geoMeanAltTxRatios(i.contracts, lbl); });
                });
                return {
                    labels: items.map(i => i.name),
                    evmData: items.map(i => geoMeanOfTxRatios(i.contracts, 'eth_rpc_evm_gas')),
                    pvmData: items.map(i => geoMeanOfTxRatios(i.contracts, 'eth_rpc_pvm_gas')),
                    altData: altData,
                    title: title,
                    canDrillDown: true
                };
            } else if (level === 'contracts' && parent) {
                const dataset = gasHierarchy.datasets.find(d => d.name === parent);
                if (dataset) {
                    items = dataset.contracts;
                    title = 'Avg Gas by Contract: ' + parent + suffix + ' (click to drill down, right-click to go back)';
                    gasAltImplLabels.forEach(function(lbl) {
                        altData[lbl] = items.map(function(i) { return geoMeanAltRatiosForContract(i, lbl); });
                    });
                    return {
                        labels: items.map(i => i.name),
                        evmData: items.map(i => geoMeanOfChildRatios(i.transactions, 'eth_rpc_evm_gas')),
                        pvmData: items.map(i => geoMeanOfChildRatios(i.transactions, 'eth_rpc_pvm_gas')),
                        altData: altData,
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
                gasAltImplLabels.forEach(function(lbl) {
                    altData[lbl] = contract ? items.map(function(i) { return altPctDiffForTx(contract, i.name, lbl); }) : items.map(function() { return null; });
                });
                return {
                    labels: items.map(i => i.name),
                    evmData: items.map(i => toPctDiff(i.eth_rpc_evm_gas, i.geth_gas)),
                    pvmData: items.map(i => toPctDiff(i.eth_rpc_pvm_gas, i.geth_gas)),
                    altData: altData,
                    title: title,
                    canDrillDown: false
                };
            }

            gasAltImplLabels.forEach(function(lbl) {
                altData[lbl] = items.map(function() { return null; });
            });
            return {
                labels: items.map(i => i.name),
                evmData: items.map(i => toPctDiff(i.eth_rpc_evm_gas, i.geth_gas)),
                pvmData: items.map(i => toPctDiff(i.eth_rpc_pvm_gas, i.geth_gas)),
                altData: altData,
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
            // Ensure alt impl datasets exist (starting at index 2)
            for (var i = 0; i < gasAltImplLabels.length; i++) {
                if (!chart.data.datasets[2 + i]) {
                    var _lbl = gasAltImplLabels[i];
                    var _clr = getChartImplColor(_lbl);
                    chart.data.datasets.push({
                        label: _lbl, data: [],
                        backgroundColor: _clr.bg, borderColor: _clr.border, borderWidth: 1,
                    });
                }
                chart.data.datasets[2 + i].data = data.altData[gasAltImplLabels[i]];
            }
            chart.options.plugins.title.text = data.title;
            chart.options.plugins.title.display = true;

            chart.update();
        }

        // Deploy checkbox handler
        document.getElementById('hideDeployCheckbox').onchange = function(evt) {
            toggleDeployExclusion(evt.target.checked);
        };

        function updateGasTable() {
            var table = document.querySelector('.expandable-gas-table');
            if (!table) return;

            if (excludedTxKeys.size === 0) {
                // Restore original HTML
                table.querySelectorAll('[data-orig]').forEach(function(cell) {
                    cell.innerHTML = cell.dataset.orig;
                    delete cell.dataset.orig;
                });
                return;
            }

            // Save original HTML if not already saved
            table.querySelectorAll('tr.level-0 td.number, tr.level-1 td.number').forEach(function(cell) {
                if (!cell.dataset.orig) cell.dataset.orig = cell.innerHTML;
            });

            // Update level-0 dataset rows
            table.querySelectorAll('tr.level-0:not(.total-row)').forEach(function(row) {
                var toggle = row.querySelector('.expand-toggle');
                if (!toggle) return;
                var name = toggle.textContent.trim();
                var ds = gasHierarchy.datasets.find(function(d){ return d.name === name; });
                var allTxs = [];
                if (ds) ds.contracts.forEach(function(c){ c.transactions.forEach(function(tx){ allTxs.push(tx); }); });
                var geth = avgArr(allTxs.map(function(t){ return t.geth_gas; }));
                var evm = avgArr(allTxs.map(function(t){ return t.eth_rpc_evm_gas; }));
                var pvm = avgArr(allTxs.map(function(t){ return t.eth_rpc_pvm_gas; }));
                var cells = row.querySelectorAll('td');
                cells[1].innerHTML = fmtGas(geth);
                cells[2].innerHTML = fmtGas(evm);
                cells[3].innerHTML = fmtDiff(geth, evm);
                cells[4].innerHTML = fmtGas(pvm);
                cells[5].innerHTML = fmtDiff(geth, pvm);
            });

            // Update level-1 contract rows
            table.querySelectorAll('tr.level-1').forEach(function(row) {
                var toggle = row.querySelector('.expand-toggle');
                if (!toggle) return;
                var contractName = toggle.textContent.trim();
                var contract = null;
                for (var di = 0; di < gasHierarchy.datasets.length && !contract; di++) {
                    contract = gasHierarchy.datasets[di].contracts.find(function(c){ return c.name === contractName; }) || null;
                }
                var txs = contract ? contract.transactions : [];
                var geth = avgArr(txs.map(function(t){ return t.geth_gas; }));
                var evm = avgArr(txs.map(function(t){ return t.eth_rpc_evm_gas; }));
                var pvm = avgArr(txs.map(function(t){ return t.eth_rpc_pvm_gas; }));
                // Build range data from alt implementations
                var altAvgs = contract ? (contract.alt_implementations || []).map(function(alt) {
                    var vals = alt.transactions.map(function(t){ return t.pvm_gas; }).filter(function(v){ return v !== null; });
                    return { label: getImplLabelJS(contract.name, alt.name), value: vals.length > 0 ? Math.round(vals.reduce(function(s,v){ return s+v; },0)/vals.length) : null };
                }) : [];
                var allPvm = [{ value: pvm, label: 'solidity' }].concat(altAvgs);
                var cells = row.querySelectorAll('td');
                cells[1].innerHTML = fmtGas(geth);
                cells[2].innerHTML = fmtGas(evm);
                cells[3].innerHTML = fmtDiff(geth, evm);
                cells[4].innerHTML = jsWithRange(fmtGas(pvm), allPvm, fmtGas);
                cells[5].innerHTML = jsWithDiffRange(fmtDiff(geth, pvm), geth, allPvm);
            });

            // Update total row
            var allTxs = [];
            gasHierarchy.datasets.forEach(function(ds){ ds.contracts.forEach(function(c){ c.transactions.forEach(function(tx){ allTxs.push(tx); }); }); });
            var geth = avgArr(allTxs.map(function(t){ return t.geth_gas; }));
            var evm = avgArr(allTxs.map(function(t){ return t.eth_rpc_evm_gas; }));
            var pvm = avgArr(allTxs.map(function(t){ return t.eth_rpc_pvm_gas; }));
            var totalRow = table.querySelector('tr.total-row');
            if (totalRow) {
                totalRow.querySelectorAll('td.number').forEach(function(cell) {
                    if (!cell.dataset.orig) cell.dataset.orig = cell.innerHTML;
                });
                var cells = totalRow.querySelectorAll('td');
                cells[1].innerHTML = fmtGas(geth);
                cells[2].innerHTML = fmtGas(evm);
                cells[3].innerHTML = fmtDiff(geth, evm);
                cells[4].innerHTML = fmtGas(pvm);
                cells[5].innerHTML = fmtDiff(geth, pvm);
            }
        }

        function updateGasSection() {
            filterGasHierarchy();
            updateGasChart(currentLevel, currentParent);
            updateGasTable();
        }
        window.updateGasSection = updateGasSection;

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
        <span class="excl-indicator" style="display:none"></span>
    </div>
    <p class="table-note">Dataset and contract rows show the average gas for the Solidity implementation. Colored ranges show the min..max across all PVM implementations. Chart uses geometric mean of ratios (not arithmetic mean of % differences). Click a transaction row to exclude it.</p>
    `
}

export function expandableGasTable(data: GasHierarchyData): string {
    let rowId = 0
    const rows: string[] = []

    // Helper to compute average gas across transactions
    function avgGas(
        txs: Array<
            {
                geth_gas: number | null
                eth_rpc_evm_gas: number | null
                eth_rpc_pvm_gas: number | null
            }
        >,
        key: 'geth_gas' | 'eth_rpc_evm_gas' | 'eth_rpc_pvm_gas',
    ): number | null {
        const vals = txs.map((tx) => tx[key]).filter((v): v is number =>
            v !== null
        )
        return vals.length > 0
            ? Math.round(vals.reduce((s, v) => s + v, 0) / vals.length)
            : null
    }

    // Collect all transactions for overall average
    type GasTx = {
        name: string
        geth_gas: number | null
        eth_rpc_evm_gas: number | null
        eth_rpc_pvm_gas: number | null
    }
    const allTxs: GasTx[] = []

    for (const dataset of data.datasets) {
        const datasetTxs = dataset.contracts.flatMap((c) => c.transactions)
        allTxs.push(...datasetTxs)

        const dsAvg = {
            geth: avgGas(datasetTxs, 'geth_gas'),
            evm: avgGas(datasetTxs, 'eth_rpc_evm_gas'),
            pvm: avgGas(datasetTxs, 'eth_rpc_pvm_gas'),
        }

        const datasetId = rowId++
        rows.push(`
            <tr class="level-0" data-id="${datasetId}" data-level="0">
                <td><span class="expand-toggle" onclick="toggleExpand(${datasetId}, 0)">${dataset.name}</span></td>
                <td class="number">${formatGas(dsAvg.geth)}</td>
                <td class="number">${formatGas(dsAvg.evm)}</td>
                <td class="number">${calcDiff(dsAvg.geth, dsAvg.evm)}</td>
                <td class="number">${formatGas(dsAvg.pvm)}</td>
                <td class="number">${calcDiff(dsAvg.geth, dsAvg.pvm)}</td>
            </tr>
        `)

        for (const contract of dataset.contracts) {
            const cAvg = {
                geth: avgGas(contract.transactions, 'geth_gas'),
                evm: avgGas(contract.transactions, 'eth_rpc_evm_gas'),
                pvm: avgGas(contract.transactions, 'eth_rpc_pvm_gas'),
            }

            // Collect all PVM gas values (Solidity avg + alt avgs) for range display
            const altLabels = contract.alt_implementations.map((alt) =>
                getImplLabel(contract.name, alt.name)
            )
            const altPvmAvgs = contract.alt_implementations.map((alt) => {
                const vals = alt.transactions.map((t) => t.pvm_gas).filter((
                    v,
                ): v is number => v !== null)
                return vals.length > 0
                    ? Math.round(vals.reduce((s, v) => s + v, 0) / vals.length)
                    : null
            })
            const allPvmAll: LabeledValue[] = [
                { value: cAvg.pvm, label: 'solidity' },
                ...altPvmAvgs.map((v, i) => ({
                    value: v,
                    label: altLabels[i],
                })),
            ]

            const pvmGasAll = withRange(
                formatGas(cAvg.pvm),
                allPvmAll,
                formatGas,
            )
            const pvmDiffAll = withDiffRange(
                calcDiff(cAvg.geth, cAvg.pvm),
                cAvg.geth,
                allPvmAll,
            )

            const contractId = rowId++
            rows.push(`
                <tr class="level-1 hidden-row" data-id="${contractId}" data-level="1" data-parent="${datasetId}">
                    <td><span class="expand-toggle" onclick="toggleExpand(${contractId}, 1)">${contract.name}</span></td>
                    <td class="number">${formatGas(cAvg.geth)}</td>
                    <td class="number">${formatGas(cAvg.evm)}</td>
                    <td class="number">${calcDiff(cAvg.geth, cAvg.evm)}</td>
                    <td class="number">${pvmGasAll}</td>
                    <td class="number">${pvmDiffAll}</td>
                </tr>
            `)

            // Build alt tx lookup by transaction name
            const hasAlts = contract.alt_implementations.length > 0
            const altGasByTxName = new Map<
                string,
                Array<{ label: string; pvm_gas: number | null }>
            >()
            if (hasAlts) {
                for (const alt of contract.alt_implementations) {
                    const label = getImplLabel(contract.name, alt.name)
                    for (const tx of alt.transactions) {
                        if (!altGasByTxName.has(tx.name)) {
                            altGasByTxName.set(tx.name, [])
                        }
                        altGasByTxName.get(tx.name)!.push({
                            label,
                            pvm_gas: tx.pvm_gas,
                        })
                    }
                }
            }

            for (const tx of contract.transactions) {
                const tag = hasAlts ? ' ' + implTag('solidity') : ''
                rows.push(`
                    <tr class="level-2 hidden-row" data-level="2" data-parent="${contractId}" data-txname="${
                    escAttr(tx.name)
                }" data-dataset="${escAttr(dataset.name)}" data-contract="${
                    escAttr(contract.name)
                }">
                        <td>${tx.name}${tag}</td>
                        <td class="number">${formatGas(tx.geth_gas)}</td>
                        <td class="number">${formatGas(tx.eth_rpc_evm_gas)}</td>
                        <td class="number">${
                    calcDiff(tx.geth_gas, tx.eth_rpc_evm_gas)
                }</td>
                        <td class="number">${formatGas(tx.eth_rpc_pvm_gas)}</td>
                        <td class="number">${
                    calcDiff(tx.geth_gas, tx.eth_rpc_pvm_gas)
                }</td>
                    </tr>
                `)

                // Alt implementation rows for the same transaction
                const alts = altGasByTxName.get(tx.name) || []
                for (const { label, pvm_gas } of alts) {
                    rows.push(`
                        <tr class="level-2 hidden-row alt-impl-row" data-level="2" data-parent="${contractId}" data-txname="${
                        escAttr(tx.name)
                    }" data-dataset="${escAttr(dataset.name)}" data-contract="${
                        escAttr(contract.name)
                    }">
                            <td>${tx.name} ${implTag(label)}</td>
                            <td class="number"></td>
                            <td class="number"></td>
                            <td class="number"></td>
                            <td class="number">${formatGas(pvm_gas)}</td>
                            <td class="number">${
                        calcDiff(tx.geth_gas, pvm_gas)
                    }</td>
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

    // Add average row
    rows.push(`
        <tr class="level-0 total-row" style="border-top: 2px solid var(--border-color); font-weight: 700;">
            <td>Avg per transaction</td>
            <td class="number">${formatGas(overallAvg.geth)}</td>
            <td class="number">${formatGas(overallAvg.evm)}</td>
            <td class="number">${calcDiff(overallAvg.geth, overallAvg.evm)}</td>
            <td class="number">${formatGas(overallAvg.pvm)}</td>
            <td class="number">${calcDiff(overallAvg.geth, overallAvg.pvm)}</td>
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
    evm_metered_pct_proof_size: number | null
    pvm_metered_pct_proof_size: number | null
    evm_metered_ref_time: number | null
    pvm_metered_ref_time: number | null
    evm_post_dispatch_pov: number | null
    pvm_post_dispatch_pov: number | null
}

export interface AltWeightImpl {
    name: string
    pvm_ref_time: number | null
    pvm_proof_size: number | null
    pvm_metered_pct: number | null
    pvm_metered_pct_proof_size: number | null
    pvm_metered_ref_time: number | null
    pvm_post_dispatch_pov: number | null
    transactions: Array<{
        name: string
        pvm_ref_time: number | null
        pvm_proof_size: number | null
        pvm_metered_pct: number | null
        pvm_metered_pct_proof_size: number | null
        pvm_metered_ref_time: number | null
        pvm_post_dispatch_pov: number | null
    }>
}

export interface WeightHierarchyData {
    datasets: Array<
        WeightRow & {
            contracts: Array<
                WeightRow & {
                    transactions: WeightRow[]
                    alt_implementations: AltWeightImpl[]
                }
            >
        }
    >
}

function formatWeight(value: number | null): string {
    return value !== null ? value.toLocaleString() : 'N/A'
}

function formatWeightWithPct(
    weight: number | null,
    pct: number | null,
): string {
    if (weight === null) return 'N/A'
    const pctStr = pct !== null ? ` (${pct.toFixed(1)}%)` : ''
    return `${weight.toLocaleString()}${pctStr}`
}

export function drilldownWeightChartScript(
    hierarchy: WeightHierarchyData,
): string {
    return `
        // Store weight hierarchy data for drill-down
        const weightHierarchyOriginal = ${JSON.stringify(hierarchy)};
        let weightHierarchy = JSON.parse(JSON.stringify(weightHierarchyOriginal));
        let weightCurrentLevel = 'datasets';
        let weightCurrentParent = null;
        let weightMetric = 'ref_time'; // 'ref_time' or 'proof_size'

        function filterWeightHierarchy() {
            if (excludedTxKeys.size === 0) {
                weightHierarchy = JSON.parse(JSON.stringify(weightHierarchyOriginal));
                return;
            }

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
                        const filteredTxs = contract.transactions.filter(tx => !excludedTxKeys.has(txKey(dataset.name, contract.name, tx.name)));
                        const filteredAlts = (contract.alt_implementations || []).map(alt => ({
                            ...alt,
                            transactions: alt.transactions.filter(tx => !excludedTxKeys.has(txKey(dataset.name, contract.name, tx.name)))
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
                            evm_post_dispatch_pov: avgOfFiltered(filteredTxs, 'evm_post_dispatch_pov'),
                            pvm_post_dispatch_pov: avgOfFiltered(filteredTxs, 'pvm_post_dispatch_pov'),
                            transactions: filteredTxs,
                            alt_implementations: filteredAlts
                        };
                    }).filter(c => c.transactions.length > 0)
                })).map(dataset => {
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
                        pvm_metered_ref_time: avgOfFiltered(allTxs, 'pvm_metered_ref_time'),
                        evm_post_dispatch_pov: avgOfFiltered(allTxs, 'evm_post_dispatch_pov'),
                        pvm_post_dispatch_pov: avgOfFiltered(allTxs, 'pvm_post_dispatch_pov')
                    };
                }).filter(d => d.contracts.length > 0)
            };
        }

        // Discover all alt impl labels from weight hierarchy
        var weightAltImplLabels = [];
        (function() {
            var labels = {};
            weightHierarchyOriginal.datasets.forEach(function(ds) {
                ds.contracts.forEach(function(c) {
                    (c.alt_implementations || []).forEach(function(a) {
                        labels[altImplLabelShared(a.name)] = true;
                    });
                });
            });
            weightAltImplLabels = Object.keys(labels);
        })();

        function getAltWeightForItems(items, level, metric, implLabel) {
            // Extract weight data for a specific alt impl label
            // Returns { refTime, meteredPct } arrays parallel to items
            var refTime = [];
            var meteredPct = [];
            var pctField = metric === 'proof_size' ? 'pvm_metered_pct_proof_size' : 'pvm_metered_pct';

            if (level === 'datasets') {
                items.forEach(function(dataset) {
                    var sum = 0, pctSum = 0, count = 0;
                    dataset.contracts.forEach(function(c) {
                        var alts = (c.alt_implementations || []).filter(function(a) { return altImplLabelShared(a.name) === implLabel; });
                        alts.forEach(function(alt) {
                            alt.transactions.forEach(function(tx) {
                                var val = metric === 'ref_time' ? tx.pvm_ref_time : tx.pvm_proof_size;
                                if (val !== null) { sum += val; count++; }
                                if (tx[pctField] !== null) { pctSum += tx[pctField]; }
                            });
                        });
                    });
                    refTime.push(count > 0 ? Math.round(sum / count) : null);
                    meteredPct.push(count > 0 ? pctSum / count : null);
                });
            } else if (level === 'contracts') {
                items.forEach(function(contract) {
                    var sum = 0, pctSum = 0, count = 0;
                    var alts = (contract.alt_implementations || []).filter(function(a) { return altImplLabelShared(a.name) === implLabel; });
                    alts.forEach(function(alt) {
                        alt.transactions.forEach(function(tx) {
                            var val = metric === 'ref_time' ? tx.pvm_ref_time : tx.pvm_proof_size;
                            if (val !== null) { sum += val; count++; }
                            if (tx[pctField] !== null) { pctSum += tx[pctField]; }
                        });
                    });
                    refTime.push(count > 0 ? Math.round(sum / count) : null);
                    meteredPct.push(count > 0 ? pctSum / count : null);
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
                        var alts = (contract.alt_implementations || []).filter(function(a) { return altImplLabelShared(a.name) === implLabel; });
                        alts.forEach(function(alt) {
                            var altTx = alt.transactions.find(function(t) { return t.name === tx.name; });
                            if (altTx) {
                                var val = metric === 'ref_time' ? altTx.pvm_ref_time : altTx.pvm_proof_size;
                                if (val !== null) { sum += val; count++; }
                                if (altTx[pctField] !== null) { pctSum += altTx[pctField]; }
                            }
                        });
                    }
                    refTime.push(count > 0 ? Math.round(sum / count) : null);
                    meteredPct.push(count > 0 ? pctSum / count : null);
                });
            }

            return { refTime: refTime, meteredPct: meteredPct };
        }

        function getWeightChartData(level, parent, metric) {
            let items = [];
            const metricName = metric === 'ref_time' ? 'ref_time' : 'proof_size';
            const suffix = excludedTxKeys.size > 0 ? ' (excl. ' + excludedTxKeys.size + ')' : '';
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

            // Get alt impl data for all discovered labels
            var altData = {};
            weightAltImplLabels.forEach(function(lbl) {
                var d = getAltWeightForItems(items, level, metric, lbl);
                altData[lbl] = {
                    metered: d.refTime.map(function(val, idx) {
                        if (val === null || d.meteredPct[idx] === null) return null;
                        return val * (d.meteredPct[idx] / 100);
                    }),
                    overhead: d.refTime.map(function(val, idx) {
                        if (val === null || d.meteredPct[idx] === null) return null;
                        return val * (1 - d.meteredPct[idx] / 100);
                    }),
                    meteredPct: d.meteredPct
                };
            });

            const evmPctField = metric === 'proof_size' ? 'evm_metered_pct_proof_size' : 'evm_metered_pct';
            const pvmPctField = metric === 'proof_size' ? 'pvm_metered_pct_proof_size' : 'pvm_metered_pct';

            evmMetered = items.map((i, idx) => {
                const val = evmValues[idx];
                if (val === null || i[evmPctField] === null) return null;
                return val * (i[evmPctField] / 100);
            });
            evmOverhead = items.map((i, idx) => {
                const val = evmValues[idx];
                if (val === null || i[evmPctField] === null) return null;
                return val * (1 - i[evmPctField] / 100);
            });
            pvmMetered = items.map((i, idx) => {
                const val = pvmValues[idx];
                if (val === null || i[pvmPctField] === null) return null;
                return val * (i[pvmPctField] / 100);
            });
            pvmOverhead = items.map((i, idx) => {
                const val = pvmValues[idx];
                if (val === null || i[pvmPctField] === null) return null;
                return val * (1 - i[pvmPctField] / 100);
            });

            return {
                labels: items.map(i => i.name),
                evmMetered, evmOverhead, pvmMetered, pvmOverhead,
                altData: altData,
                evmMeteredPct: items.map(i => i.evm_metered_pct),
                pvmMeteredPct: items.map(i => i.pvm_metered_pct),
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

            // Ensure alt impl datasets exist (2 per impl: metered + overhead, starting at index 4)
            for (var ai = 0; ai < weightAltImplLabels.length; ai++) {
                var _lbl = weightAltImplLabels[ai];
                var _clr = getChartImplColor(_lbl);
                var _stack = _lbl.toLowerCase().replace(/[^a-z]/g, '');
                var metIdx = 4 + ai * 2;
                var ovrIdx = 4 + ai * 2 + 1;
                if (!chart.data.datasets[metIdx]) {
                    chart.data.datasets.push({
                        label: _lbl + ' Metered', data: [],
                        backgroundColor: _clr.bg, borderColor: _clr.border,
                        borderWidth: 1, stack: _stack,
                    });
                }
                if (!chart.data.datasets[ovrIdx]) {
                    chart.data.datasets.push({
                        label: _lbl + ' Overhead', data: [],
                        backgroundColor: _clr.bg.replace('0.8', '0.4'), borderColor: _clr.border,
                        borderWidth: 1, stack: _stack,
                    });
                }
            }

            // Update alt impl datasets dynamically
            for (var i = 0; i < weightAltImplLabels.length; i++) {
                var lbl = weightAltImplLabels[i];
                var color = getChartImplColor(lbl);
                var lightColor = color.bg.replace('0.8', '0.4');
                var meteredIdx = 4 + i * 2;
                var overheadIdx = 4 + i * 2 + 1;
                var stackId = lbl.toLowerCase().replace(/[^a-z]/g, '');

                chart.data.datasets[meteredIdx].data = data.altData[lbl].metered;
                chart.data.datasets[meteredIdx].backgroundColor = color.bg;
                chart.data.datasets[meteredIdx].borderColor = color.border;
                chart.data.datasets[meteredIdx].stack = stackId;

                chart.data.datasets[overheadIdx].data = data.altData[lbl].overhead;
                chart.data.datasets[overheadIdx].backgroundColor = lightColor;
                chart.data.datasets[overheadIdx].borderColor = color.border;
                chart.data.datasets[overheadIdx].stack = stackId;

                chart.data.datasets[meteredIdx].label = lbl + ' Metered';
                chart.data.datasets[overheadIdx].label = lbl + ' Base';
                chart.data.datasets[overheadIdx].hidden = false;
            }

            chart.options.plugins.title.text = data.title;
            chart.options.scales.y.title.text = data.yLabel;

            chart.data.datasets[0].label = 'EVM Metered';
            chart.data.datasets[1].label = 'EVM Base';
            chart.data.datasets[2].label = 'PVM (Solidity) Metered';
            chart.data.datasets[3].label = 'PVM (Solidity) Base';
            chart.data.datasets[1].hidden = false;
            chart.data.datasets[3].hidden = false;

            // Update tooltip pct data
            var pctEntries = [
                { key: 'evm', label: 'EVM', pct: data.evmMeteredPct },
                { key: 'pvm', label: 'PVM/Solidity', pct: data.pvmMeteredPct }
            ];
            weightAltImplLabels.forEach(function(lbl) {
                pctEntries.push({ key: lbl.toLowerCase().replace(/[^a-z]/g, ''), label: lbl, pct: data.altData[lbl].meteredPct });
            });
            window.weightPctData = pctEntries;
            chart.update();
        }

        // Deploy checkbox handler for weight
        document.getElementById('hideWeightDeployCheckbox').onchange = function(evt) {
            toggleDeployExclusion(evt.target.checked);
        };

        // Metric radio button handler
        document.querySelectorAll('input[name="weightMetric"]').forEach(radio => {
            radio.onchange = function(evt) {
                weightMetric = evt.target.value;
                updateWeightChart(weightCurrentLevel, weightCurrentParent);
            };
        });

        function updateWeightTable() {
            var tables = document.querySelectorAll('.expandable-weight-table');
            if (!tables.length) return;

            if (excludedTxKeys.size === 0) {
                tables.forEach(function(table) {
                    table.querySelectorAll('[data-orig]').forEach(function(cell) {
                        cell.innerHTML = cell.dataset.orig;
                        delete cell.dataset.orig;
                    });
                });
                return;
            }

            // Save original HTML if not already saved
            tables.forEach(function(table) {
                table.querySelectorAll('tr.level-0 td.number, tr.level-1 td.number').forEach(function(cell) {
                    if (!cell.dataset.orig) cell.dataset.orig = cell.innerHTML;
                });
            });

            function rtRowCells(row, v, rangeRef, rangeMetered) {
                var cells = row.querySelectorAll('td');
                // EVM: ref_time, metered
                cells[1].innerHTML = fmtWeight(v.evm_ref_time);
                cells[2].innerHTML = fmtWeightPct(v.evm_metered_ref_time, v.evm_metered_pct);
                // PVM: ref_time, metered
                cells[3].innerHTML = rangeRef ? jsWithRange(fmtWeight(v.pvm_ref_time), rangeRef, fmtCompact) : fmtWeight(v.pvm_ref_time);
                cells[4].innerHTML = rangeMetered ? jsWithRange(fmtWeightPct(v.pvm_metered_ref_time, v.pvm_metered_pct), rangeMetered, fmtCompact) : fmtWeightPct(v.pvm_metered_ref_time, v.pvm_metered_pct);
                // Deltas
                cells[5].innerHTML = rangeRef ? jsWithDiffRange(fmtDiff(v.evm_ref_time, v.pvm_ref_time), v.evm_ref_time, rangeRef) : fmtDiff(v.evm_ref_time, v.pvm_ref_time);
                cells[6].innerHTML = rangeMetered ? jsWithDiffRange(fmtDiff(v.evm_metered_ref_time, v.pvm_metered_ref_time), v.evm_metered_ref_time, rangeMetered) : fmtDiff(v.evm_metered_ref_time, v.pvm_metered_ref_time);
            }

            function meteredPs(ps, pct) {
                if (ps === null || pct === null) return null;
                return Math.round(ps * pct / 100);
            }

            function psRowCells(row, v, rangeProof) {
                var cells = row.querySelectorAll('td');
                var evmMet = meteredPs(v.evm_proof_size, v.evm_metered_pct_proof_size);
                var pvmMet = meteredPs(v.pvm_proof_size, v.pvm_metered_pct_proof_size);
                // EVM: base_call, metered, post_dispatch
                cells[1].innerHTML = fmtWeight(v.evm_proof_size);
                cells[2].innerHTML = fmtWeightPct(evmMet, v.evm_metered_pct_proof_size);
                cells[3].innerHTML = fmtWeight(v.evm_post_dispatch_pov !== undefined ? v.evm_post_dispatch_pov : null);
                // PVM: base_call, metered, post_dispatch
                cells[4].innerHTML = rangeProof ? jsWithRange(fmtWeight(v.pvm_proof_size), rangeProof, fmtCompact) : fmtWeight(v.pvm_proof_size);
                cells[5].innerHTML = fmtWeightPct(pvmMet, v.pvm_metered_pct_proof_size);
                cells[6].innerHTML = fmtWeight(v.pvm_post_dispatch_pov !== undefined ? v.pvm_post_dispatch_pov : null);
                // Delta: base_call, metered, post_dispatch
                cells[7].innerHTML = rangeProof ? jsWithDiffRange(fmtDiff(v.evm_proof_size, v.pvm_proof_size), v.evm_proof_size, rangeProof) : fmtDiff(v.evm_proof_size, v.pvm_proof_size);
                cells[8].innerHTML = fmtDiff(evmMet, pvmMet);
                cells[9].innerHTML = fmtDiff(v.evm_post_dispatch_pov !== undefined ? v.evm_post_dispatch_pov : null, v.pvm_post_dispatch_pov !== undefined ? v.pvm_post_dispatch_pov : null);
            }

            function wAvgs(txs) {
                return {
                    evm_ref_time: avgArr(txs.map(function(t){ return t.evm_ref_time; })),
                    evm_metered_ref_time: avgArr(txs.map(function(t){ return t.evm_metered_ref_time; })),
                    evm_metered_pct: avgPctArr(txs.map(function(t){ return t.evm_metered_pct; })),
                    evm_proof_size: avgArr(txs.map(function(t){ return t.evm_proof_size; })),
                    evm_metered_pct_proof_size: avgPctArr(txs.map(function(t){ return t.evm_metered_pct_proof_size; })),
                    evm_post_dispatch_pov: avgArr(txs.map(function(t){ return t.evm_post_dispatch_pov; })),
                    pvm_ref_time: avgArr(txs.map(function(t){ return t.pvm_ref_time; })),
                    pvm_metered_ref_time: avgArr(txs.map(function(t){ return t.pvm_metered_ref_time; })),
                    pvm_metered_pct: avgPctArr(txs.map(function(t){ return t.pvm_metered_pct; })),
                    pvm_proof_size: avgArr(txs.map(function(t){ return t.pvm_proof_size; })),
                    pvm_metered_pct_proof_size: avgPctArr(txs.map(function(t){ return t.pvm_metered_pct_proof_size; })),
                    pvm_post_dispatch_pov: avgArr(txs.map(function(t){ return t.pvm_post_dispatch_pov; })),
                };
            }

            function findContract(name) {
                var contract = null;
                for (var di = 0; di < weightHierarchy.datasets.length && !contract; di++) {
                    contract = weightHierarchy.datasets[di].contracts.find(function(c){ return c.name === name; }) || null;
                }
                return contract;
            }

            function buildRanges(contract, v) {
                var rangeRef = null, rangeMetered = null, rangeProof = null;
                if (contract) {
                    var alts = (contract.alt_implementations || []);
                    if (alts.length > 0) {
                        rangeRef = [{ value: v.pvm_ref_time, label: 'solidity' }];
                        rangeMetered = [{ value: v.pvm_metered_ref_time, label: 'solidity' }];
                        rangeProof = [{ value: v.pvm_proof_size, label: 'solidity' }];
                        alts.forEach(function(alt) {
                            var label = getImplLabelJS(contract.name, alt.name);
                            var av = wAvgs(alt.transactions);
                            rangeRef.push({ value: av.pvm_ref_time, label: label });
                            rangeMetered.push({ value: av.pvm_metered_ref_time, label: label });
                            rangeProof.push({ value: av.pvm_proof_size, label: label });
                        });
                    }
                }
                return { rangeRef: rangeRef, rangeMetered: rangeMetered, rangeProof: rangeProof };
            }

            // ref_time table
            var rtTable = document.querySelector('.weight-reftime-table');
            if (rtTable) {
                rtTable.querySelectorAll('tr.level-0:not(.total-row)').forEach(function(row) {
                    var toggle = row.querySelector('.expand-toggle');
                    if (!toggle) return;
                    var name = toggle.textContent.trim();
                    var ds = weightHierarchy.datasets.find(function(d){ return d.name === name; });
                    var allTxs = [];
                    if (ds) ds.contracts.forEach(function(c){ c.transactions.forEach(function(tx){ allTxs.push(tx); }); });
                    rtRowCells(row, wAvgs(allTxs), null, null);
                });
                rtTable.querySelectorAll('tr.level-1').forEach(function(row) {
                    var toggle = row.querySelector('.expand-toggle');
                    if (!toggle) return;
                    var contract = findContract(toggle.textContent.trim());
                    var v = wAvgs(contract ? contract.transactions : []);
                    var ranges = buildRanges(contract, v);
                    rtRowCells(row, v, ranges.rangeRef, ranges.rangeMetered);
                });
                var allTxsRT = [];
                weightHierarchy.datasets.forEach(function(ds){ ds.contracts.forEach(function(c){ c.transactions.forEach(function(tx){ allTxsRT.push(tx); }); }); });
                var totalRowRT = rtTable.querySelector('tr.total-row');
                if (totalRowRT) {
                    totalRowRT.querySelectorAll('td.number').forEach(function(cell) {
                        if (!cell.dataset.orig) cell.dataset.orig = cell.innerHTML;
                    });
                    rtRowCells(totalRowRT, wAvgs(allTxsRT), null, null);
                }
            }

            // proof_size table
            var psTable = document.querySelector('.weight-proofsize-table');
            if (psTable) {
                psTable.querySelectorAll('tr.level-0:not(.total-row)').forEach(function(row) {
                    var toggle = row.querySelector('.expand-toggle');
                    if (!toggle) return;
                    var name = toggle.textContent.trim();
                    var ds = weightHierarchy.datasets.find(function(d){ return d.name === name; });
                    var allTxs = [];
                    if (ds) ds.contracts.forEach(function(c){ c.transactions.forEach(function(tx){ allTxs.push(tx); }); });
                    psRowCells(row, wAvgs(allTxs), null);
                });
                psTable.querySelectorAll('tr.level-1').forEach(function(row) {
                    var toggle = row.querySelector('.expand-toggle');
                    if (!toggle) return;
                    var contract = findContract(toggle.textContent.trim());
                    var v = wAvgs(contract ? contract.transactions : []);
                    var ranges = buildRanges(contract, v);
                    psRowCells(row, v, ranges.rangeProof);
                });
                var allTxsPS = [];
                weightHierarchy.datasets.forEach(function(ds){ ds.contracts.forEach(function(c){ c.transactions.forEach(function(tx){ allTxsPS.push(tx); }); }); });
                var totalRowPS = psTable.querySelector('tr.total-row');
                if (totalRowPS) {
                    totalRowPS.querySelectorAll('td.number').forEach(function(cell) {
                        if (!cell.dataset.orig) cell.dataset.orig = cell.innerHTML;
                    });
                    psRowCells(totalRowPS, wAvgs(allTxsPS), null);
                }
            }
        }

        function updateWeightSection() {
            filterWeightHierarchy();
            updateWeightChart(weightCurrentLevel, weightCurrentParent);
            updateWeightTable();
        }
        window.updateWeightSection = updateWeightSection;

        // Add click handler for weight drill-down
        document.getElementById('weightAnalysisChart').onclick = function(evt) {
            const chart = Chart.getChart('weightAnalysisChart');
            const points = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

            if (points.length > 0) {
                // Ignore clicks on non-bar datasets (PoV lines, etc.)
                var dsType = chart.data.datasets[points[0].datasetIndex].type;
                if (dsType === 'scatter' || dsType === 'line') return;
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
        <span class="excl-indicator" style="display:none"></span>
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
    <p class="table-note">Dataset and contract rows show the average weight for the Solidity implementation. Colored ranges show the min..max across all PVM implementations. Click a transaction row to exclude it.</p>
    `
}

export function expandableWeightTable(
    data: WeightHierarchyData,
): { refTimeTable: string; proofSizeTable: string } {
    type WeightTx =
        WeightHierarchyData['datasets'][0]['contracts'][0]['transactions'][0]
    function avgWeight(txs: WeightTx[], key: keyof WeightTx): number | null {
        const vals = txs.map((tx) => tx[key] as number | null).filter((
            v,
        ): v is number => v !== null)
        return vals.length > 0
            ? Math.round(vals.reduce((s, v) => s + v, 0) / vals.length)
            : null
    }
    function avgPct(txs: WeightTx[], key: keyof WeightTx): number | null {
        const vals = txs.map((tx) => tx[key] as number | null).filter((
            v,
        ): v is number => v !== null)
        return vals.length > 0
            ? vals.reduce((s, v) => s + v, 0) / vals.length
            : null
    }

    const allTxs: WeightTx[] = data.datasets.flatMap((d) =>
        d.contracts.flatMap((c) => c.transactions)
    )

    function weightAvgs(txs: WeightTx[]) {
        return {
            evm_ref_time: avgWeight(txs, 'evm_ref_time'),
            evm_metered_ref_time: avgWeight(txs, 'evm_metered_ref_time'),
            evm_metered_pct: avgPct(txs, 'evm_metered_pct'),
            evm_proof_size: avgWeight(txs, 'evm_proof_size'),
            evm_metered_pct_proof_size: avgPct(
                txs,
                'evm_metered_pct_proof_size',
            ),
            evm_post_dispatch_pov: avgWeight(txs, 'evm_post_dispatch_pov'),
            pvm_ref_time: avgWeight(txs, 'pvm_ref_time'),
            pvm_metered_ref_time: avgWeight(txs, 'pvm_metered_ref_time'),
            pvm_metered_pct: avgPct(txs, 'pvm_metered_pct'),
            pvm_proof_size: avgWeight(txs, 'pvm_proof_size'),
            pvm_metered_pct_proof_size: avgPct(
                txs,
                'pvm_metered_pct_proof_size',
            ),
            pvm_post_dispatch_pov: avgWeight(txs, 'pvm_post_dispatch_pov'),
        }
    }

    type PvmRanges = {
        ref: LabeledValue[]
        metered: LabeledValue[]
        proof: LabeledValue[]
    }

    interface AltTxData {
        label: string
        pvm_ref_time: number | null
        pvm_metered_ref_time: number | null
        pvm_metered_pct: number | null
        pvm_proof_size: number | null
        pvm_metered_pct_proof_size: number | null
        pvm_post_dispatch_pov: number | null
    }

    function buildAltTxLookup(
        contract: WeightHierarchyData['datasets'][0]['contracts'][0],
    ): { hasAlts: boolean; byName: Map<string, AltTxData[]> } {
        const hasAlts = contract.alt_implementations.length > 0
        const byName = new Map<string, AltTxData[]>()
        if (hasAlts) {
            for (const alt of contract.alt_implementations) {
                const label = getImplLabel(contract.name, alt.name)
                for (const tx of alt.transactions) {
                    if (!byName.has(tx.name)) byName.set(tx.name, [])
                    byName.get(tx.name)!.push({
                        label,
                        pvm_ref_time: tx.pvm_ref_time,
                        pvm_metered_ref_time: tx.pvm_metered_ref_time,
                        pvm_metered_pct: tx.pvm_metered_pct,
                        pvm_proof_size: tx.pvm_proof_size,
                        pvm_metered_pct_proof_size:
                            tx.pvm_metered_pct_proof_size,
                        pvm_post_dispatch_pov: tx.pvm_post_dispatch_pov,
                    })
                }
            }
        }
        return { hasAlts, byName }
    }

    function buildPvmRanges(
        contract: WeightHierarchyData['datasets'][0]['contracts'][0],
        cAll: ReturnType<typeof weightAvgs>,
    ): PvmRanges | undefined {
        if (contract.alt_implementations.length === 0) return undefined
        const wAltLabels = contract.alt_implementations.map((alt) =>
            getImplLabel(contract.name, alt.name)
        )
        const altAvgs = contract.alt_implementations.map((alt) =>
            weightAvgs(alt.transactions as unknown as WeightTx[])
        )
        return {
            ref: [
                { value: cAll.pvm_ref_time, label: 'solidity' },
                ...altAvgs.map((a, i) => ({
                    value: a.pvm_ref_time,
                    label: wAltLabels[i],
                })),
            ],
            metered: [
                { value: cAll.pvm_metered_ref_time, label: 'solidity' },
                ...altAvgs.map((a, i) => ({
                    value: a.pvm_metered_ref_time,
                    label: wAltLabels[i],
                })),
            ],
            proof: [
                { value: cAll.pvm_proof_size, label: 'solidity' },
                ...altAvgs.map((a, i) => ({
                    value: a.pvm_proof_size,
                    label: wAltLabels[i],
                })),
            ],
        }
    }

    // ══════════════════════════════════════════════
    // ref_time table
    // ══════════════════════════════════════════════
    let rowId = 1000
    const rtRows: string[] = []

    const td = (val: string, gs = false) =>
        `<td class="number${gs ? ' group-start' : ''}">${val}</td>`

    function refTimeCells(
        v: ReturnType<typeof weightAvgs>,
        rangeAll?: PvmRanges,
    ) {
        const cells: string[] = []
        // EVM
        cells.push(td(formatWeight(v.evm_ref_time), true))
        cells.push(
            td(formatWeightWithPct(v.evm_metered_ref_time, v.evm_metered_pct)),
        )
        // PVM
        cells.push(td(
            rangeAll?.ref
                ? withRange(
                    formatWeight(v.pvm_ref_time),
                    rangeAll.ref,
                    formatCompact,
                )
                : formatWeight(v.pvm_ref_time),
            true,
        ))
        cells.push(td(
            rangeAll?.metered
                ? withRange(
                    formatWeightWithPct(
                        v.pvm_metered_ref_time,
                        v.pvm_metered_pct,
                    ),
                    rangeAll.metered,
                    formatCompact,
                )
                : formatWeightWithPct(
                    v.pvm_metered_ref_time,
                    v.pvm_metered_pct,
                ),
        ))
        // Delta
        cells.push(td(
            rangeAll
                ? withDiffRange(
                    calcDiff(v.evm_ref_time, v.pvm_ref_time),
                    v.evm_ref_time,
                    rangeAll.ref,
                )
                : calcDiff(v.evm_ref_time, v.pvm_ref_time),
            true,
        ))
        cells.push(td(
            rangeAll
                ? withDiffRange(
                    calcDiff(v.evm_metered_ref_time, v.pvm_metered_ref_time),
                    v.evm_metered_ref_time,
                    rangeAll.metered,
                )
                : calcDiff(v.evm_metered_ref_time, v.pvm_metered_ref_time),
        ))
        return cells.join('')
    }

    for (const dataset of data.datasets) {
        const dsTxs = dataset.contracts.flatMap((c) => c.transactions)
        const dsAll = weightAvgs(dsTxs)
        const datasetId = rowId++
        rtRows.push(`
            <tr class="level-0" data-id="${datasetId}" data-level="0">
                <td><span class="expand-toggle" onclick="toggleExpand(${datasetId}, 0)">${dataset.name}</span></td>
                ${refTimeCells(dsAll)}
            </tr>
        `)
        for (const contract of dataset.contracts) {
            const cAll = weightAvgs(contract.transactions)
            const pvmRange = buildPvmRanges(contract, cAll)
            const contractId = rowId++
            rtRows.push(`
                <tr class="level-1 hidden-row" data-id="${contractId}" data-level="1" data-parent="${datasetId}">
                    <td><span class="expand-toggle" onclick="toggleExpand(${contractId}, 1)">${contract.name}</span></td>
                    ${refTimeCells(cAll, pvmRange)}
                </tr>
            `)
            const { hasAlts, byName: altByName } = buildAltTxLookup(contract)
            for (const tx of contract.transactions) {
                const wTag = hasAlts ? ' ' + implTag('solidity') : ''
                rtRows.push(`
                    <tr class="level-2 hidden-row" data-level="2" data-parent="${contractId}" data-txname="${
                    escAttr(tx.name)
                }" data-dataset="${escAttr(dataset.name)}" data-contract="${
                    escAttr(contract.name)
                }">
                        <td>${tx.name}${wTag}</td>
                        <td class="number group-start">${
                    formatWeight(tx.evm_ref_time)
                }</td>
                        <td class="number">${
                    formatWeightWithPct(
                        tx.evm_metered_ref_time,
                        tx.evm_metered_pct,
                    )
                }</td>
                        <td class="number group-start">${
                    formatWeight(tx.pvm_ref_time)
                }</td>
                        <td class="number">${
                    formatWeightWithPct(
                        tx.pvm_metered_ref_time,
                        tx.pvm_metered_pct,
                    )
                }</td>
                        <td class="number group-start">${
                    calcDiff(tx.evm_ref_time, tx.pvm_ref_time)
                }</td>
                        <td class="number">${
                    calcDiff(tx.evm_metered_ref_time, tx.pvm_metered_ref_time)
                }</td>
                    </tr>
                `)
                for (const alt of (altByName.get(tx.name) || [])) {
                    rtRows.push(`
                        <tr class="level-2 hidden-row alt-impl-row" data-level="2" data-parent="${contractId}" data-txname="${
                        escAttr(tx.name)
                    }" data-dataset="${escAttr(dataset.name)}" data-contract="${
                        escAttr(contract.name)
                    }">
                            <td>${tx.name} ${implTag(alt.label)}</td>
                            <td class="number group-start"></td>
                            <td class="number"></td>
                            <td class="number group-start">${
                        formatWeight(alt.pvm_ref_time)
                    }</td>
                            <td class="number">${
                        formatWeightWithPct(
                            alt.pvm_metered_ref_time,
                            alt.pvm_metered_pct,
                        )
                    }</td>
                            <td class="number group-start">${
                        calcDiff(tx.evm_ref_time, alt.pvm_ref_time)
                    }</td>
                            <td class="number">${
                        calcDiff(
                            tx.evm_metered_ref_time,
                            alt.pvm_metered_ref_time,
                        )
                    }</td>
                        </tr>
                    `)
                }
            }
        }
    }

    const overallAll = weightAvgs(allTxs)
    rtRows.push(`
        <tr class="level-0 total-row" style="border-top: 2px solid var(--border-color); font-weight: 700;">
            <td>Avg per transaction</td>
            ${refTimeCells(overallAll)}
        </tr>
    `)

    const refTimeTable = `
    <div class="expandable-weight-table-wrapper">
    <table class="expandable-table expandable-weight-table weight-reftime-table">
        <thead>
            <tr>
                <th rowspan="2">Name</th>
                <th colspan="2" class="group-header group-start">EVM</th>
                <th colspan="2" class="group-header group-start">PVM</th>
                <th colspan="2" class="group-header group-start">Δ (PVM vs EVM)</th>
            </tr>
            <tr>
                <th class="number group-start">ref_time</th>
                <th class="number">metered</th>
                <th class="number group-start">ref_time</th>
                <th class="number">metered</th>
                <th class="number group-start">ref_time</th>
                <th class="number">metered</th>
            </tr>
        </thead>
        <tbody>
            ${rtRows.join('')}
        </tbody>
    </table>
    </div>
    `

    // ══════════════════════════════════════════════
    // proof_size table
    // ══════════════════════════════════════════════
    rowId = 5000 // different ID range to avoid conflicts
    const psRows: string[] = []

    function meteredProofSize(
        proofSize: number | null,
        pct: number | null,
    ): number | null {
        if (proofSize === null || pct === null) return null
        return Math.round(proofSize * pct / 100)
    }

    function proofSizeCells(
        v: ReturnType<typeof weightAvgs>,
        rangeAll?: PvmRanges,
    ) {
        const cells: string[] = []
        const evmMetered = meteredProofSize(
            v.evm_proof_size,
            v.evm_metered_pct_proof_size,
        )
        const pvmMetered = meteredProofSize(
            v.pvm_proof_size,
            v.pvm_metered_pct_proof_size,
        )
        // EVM: base_call, metered, post_dispatch
        cells.push(td(formatWeight(v.evm_proof_size), true))
        cells.push(
            td(formatWeightWithPct(evmMetered, v.evm_metered_pct_proof_size)),
        )
        cells.push(td(formatWeight(v.evm_post_dispatch_pov)))
        // PVM: base_call, metered, post_dispatch
        cells.push(td(
            rangeAll?.proof
                ? withRange(
                    formatWeight(v.pvm_proof_size),
                    rangeAll.proof,
                    formatCompact,
                )
                : formatWeight(v.pvm_proof_size),
            true,
        ))
        cells.push(
            td(formatWeightWithPct(pvmMetered, v.pvm_metered_pct_proof_size)),
        )
        cells.push(td(formatWeight(v.pvm_post_dispatch_pov)))
        // Delta: base_call, metered, post_dispatch
        cells.push(td(
            rangeAll
                ? withDiffRange(
                    calcDiff(v.evm_proof_size, v.pvm_proof_size),
                    v.evm_proof_size,
                    rangeAll.proof,
                )
                : calcDiff(v.evm_proof_size, v.pvm_proof_size),
            true,
        ))
        cells.push(td(calcDiff(evmMetered, pvmMetered)))
        cells.push(
            td(calcDiff(v.evm_post_dispatch_pov, v.pvm_post_dispatch_pov)),
        )
        return cells.join('')
    }

    for (const dataset of data.datasets) {
        const dsTxs = dataset.contracts.flatMap((c) => c.transactions)
        const dsAll = weightAvgs(dsTxs)
        const datasetId = rowId++
        psRows.push(`
            <tr class="level-0" data-id="${datasetId}" data-level="0">
                <td><span class="expand-toggle" onclick="toggleExpand(${datasetId}, 0)">${dataset.name}</span></td>
                ${proofSizeCells(dsAll)}
            </tr>
        `)
        for (const contract of dataset.contracts) {
            const cAll = weightAvgs(contract.transactions)
            const pvmRange = buildPvmRanges(contract, cAll)
            const contractId = rowId++
            psRows.push(`
                <tr class="level-1 hidden-row" data-id="${contractId}" data-level="1" data-parent="${datasetId}">
                    <td><span class="expand-toggle" onclick="toggleExpand(${contractId}, 1)">${contract.name}</span></td>
                    ${proofSizeCells(cAll, pvmRange)}
                </tr>
            `)
            const { hasAlts, byName: altByName } = buildAltTxLookup(contract)
            for (const tx of contract.transactions) {
                const wTag = hasAlts ? ' ' + implTag('solidity') : ''
                psRows.push(`
                        <tr class="level-2 hidden-row" data-level="2" data-parent="${contractId}" data-txname="${
                    escAttr(tx.name)
                }" data-dataset="${escAttr(dataset.name)}" data-contract="${
                    escAttr(contract.name)
                }">
                            <td>${tx.name}${wTag}</td>
                            <td class="number group-start">${
                    formatWeight(tx.evm_proof_size)
                }</td>
                            <td class="number">${
                    formatWeightWithPct(
                        meteredProofSize(
                            tx.evm_proof_size,
                            tx.evm_metered_pct_proof_size,
                        ),
                        tx.evm_metered_pct_proof_size,
                    )
                }</td>
                            <td class="number">${
                    formatWeight(tx.evm_post_dispatch_pov)
                }</td>
                            <td class="number group-start">${
                    formatWeight(tx.pvm_proof_size)
                }</td>
                            <td class="number">${
                    formatWeightWithPct(
                        meteredProofSize(
                            tx.pvm_proof_size,
                            tx.pvm_metered_pct_proof_size,
                        ),
                        tx.pvm_metered_pct_proof_size,
                    )
                }</td>
                            <td class="number">${
                    formatWeight(tx.pvm_post_dispatch_pov)
                }</td>
                            <td class="number group-start">${
                    calcDiff(tx.evm_proof_size, tx.pvm_proof_size)
                }</td>
                            <td class="number">${
                    calcDiff(
                        meteredProofSize(
                            tx.evm_proof_size,
                            tx.evm_metered_pct_proof_size,
                        ),
                        meteredProofSize(
                            tx.pvm_proof_size,
                            tx.pvm_metered_pct_proof_size,
                        ),
                    )
                }</td>
                            <td class="number">${
                    calcDiff(tx.evm_post_dispatch_pov, tx.pvm_post_dispatch_pov)
                }</td>
                        </tr>
                    `)
                for (const alt of (altByName.get(tx.name) || [])) {
                    psRows.push(`
                            <tr class="level-2 hidden-row alt-impl-row" data-level="2" data-parent="${contractId}" data-txname="${
                        escAttr(tx.name)
                    }" data-dataset="${escAttr(dataset.name)}" data-contract="${
                        escAttr(contract.name)
                    }">
                                <td>${tx.name} ${implTag(alt.label)}</td>
                                <td class="number group-start"></td>
                                <td class="number"></td>
                                <td class="number"></td>
                                <td class="number group-start">${
                        formatWeight(alt.pvm_proof_size)
                    }</td>
                                <td class="number">${
                        formatWeightWithPct(
                            meteredProofSize(
                                alt.pvm_proof_size,
                                alt.pvm_metered_pct_proof_size,
                            ),
                            alt.pvm_metered_pct_proof_size,
                        )
                    }</td>
                                <td class="number">${
                        formatWeight(alt.pvm_post_dispatch_pov)
                    }</td>
                                <td class="number group-start">${
                        calcDiff(tx.evm_proof_size, alt.pvm_proof_size)
                    }</td>
                                <td class="number">${
                        calcDiff(
                            meteredProofSize(
                                tx.evm_proof_size,
                                tx.evm_metered_pct_proof_size,
                            ),
                            meteredProofSize(
                                alt.pvm_proof_size,
                                alt.pvm_metered_pct_proof_size,
                            ),
                        )
                    }</td>
                                <td class="number">${
                        calcDiff(
                            tx.evm_post_dispatch_pov,
                            alt.pvm_post_dispatch_pov,
                        )
                    }</td>
                            </tr>
                        `)
                }
            }
        }
    }

    psRows.push(`
        <tr class="level-0 total-row" style="border-top: 2px solid var(--border-color); font-weight: 700;">
            <td>Avg per transaction</td>
            ${proofSizeCells(overallAll)}
        </tr>
    `)

    const proofSizeTable = `
    <div class="expandable-weight-table-wrapper">
    <table class="expandable-table expandable-weight-table weight-proofsize-table">
        <thead>
            <tr>
                <th rowspan="2">Name</th>
                <th colspan="3" class="group-header group-start">EVM</th>
                <th colspan="3" class="group-header group-start">PVM</th>
                <th colspan="3" class="group-header group-start">Δ (PVM vs EVM)</th>
            </tr>
            <tr>
                <th class="number group-start">base_call</th>
                <th class="number">metered</th>
                <th class="number">post_dispatch</th>
                <th class="number group-start">base_call</th>
                <th class="number">metered</th>
                <th class="number">post_dispatch</th>
                <th class="number group-start">base_call</th>
                <th class="number">metered</th>
                <th class="number">post_dispatch</th>
            </tr>
        </thead>
        <tbody>
            ${psRows.join('')}
        </tbody>
    </table>
    </div>
    `

    return { refTimeTable, proofSizeTable }
}

// Category Hierarchy Types and Functions
export interface CategoryHierarchyRow {
    name: string
    categories: Record<string, number>
    total_cost: number
    categories_proof_size: Record<string, number>
    total_cost_proof_size: number
    opcodes?: Array<
        { op: string; category: string; pct: number; pct_proof_size: number }
    >
}

export interface CategoryHierarchyData {
    datasets: Array<
        CategoryHierarchyRow & {
            contracts: Array<
                CategoryHierarchyRow & {
                    transactions: CategoryHierarchyRow[]
                }
            >
        }
    >
    allCategories: string[]
    categoryDescriptions?: Record<string, string>
}

export function expandableCategoryTable(data: CategoryHierarchyData): string {
    let rowId = 2000 // Start from 2000 to avoid conflicts with other table IDs
    const rows: string[] = []
    const { allCategories, datasets, categoryDescriptions = {} } = data

    // Calculate totals
    const totals: Record<string, number> = {}
    let totalCost = 0
    for (const cat of allCategories) {
        totals[cat] = 0
    }

    for (const dataset of datasets) {
        totalCost += dataset.total_cost
        for (const cat of allCategories) {
            totals[cat] += (dataset.categories[cat] ?? 0) * dataset.total_cost /
                100
        }

        const datasetId = rowId++
        rows.push(`
            <tr class="level-0" data-id="${datasetId}" data-level="0">
                <td><span class="expand-toggle" onclick="toggleExpand(${datasetId}, 0)">${dataset.name}</span></td>
                ${
            allCategories.map((cat) =>
                `<td class="number">${
                    (dataset.categories[cat] ?? 0).toFixed(1)
                }%</td>`
            ).join('')
        }
            </tr>
        `)

        for (const contract of dataset.contracts) {
            const contractId = rowId++
            rows.push(`
                <tr class="level-1 hidden-row" data-id="${contractId}" data-level="1" data-parent="${datasetId}">
                    <td><span class="expand-toggle" onclick="toggleExpand(${contractId}, 1)">${contract.name}</span></td>
                    ${
                allCategories.map((cat) =>
                    `<td class="number">${
                        (contract.categories[cat] ?? 0).toFixed(1)
                    }%</td>`
                ).join('')
            }
                </tr>
            `)

            for (const tx of contract.transactions) {
                // Build tooltip text per category from opcode detail
                const opcodeTips: Record<string, string> = {}
                if (tx.opcodes) {
                    for (const op of tx.opcodes) {
                        if (!opcodeTips[op.category]) {
                            opcodeTips[op.category] = ''
                        }
                        opcodeTips[op.category] += `${op.op}: ${
                            op.pct.toFixed(1)
                        }%\n`
                    }
                }

                rows.push(`
                    <tr class="level-2 hidden-row" data-level="2" data-parent="${contractId}" data-txname="${
                    escAttr(tx.name)
                }" data-dataset="${escAttr(dataset.name)}" data-contract="${
                    escAttr(contract.name)
                }">
                        <td>${tx.name}</td>
                        ${
                    allCategories.map((cat) => {
                        const tip = opcodeTips[cat]
                            ? ` title="${escAttr(opcodeTips[cat].trimEnd())}"`
                            : ''
                        return `<td class="number"${tip}>${
                            (tx.categories[cat] ?? 0).toFixed(1)
                        }%</td>`
                    }).join('')
                }
                    </tr>
                `)
            }
        }
    }

    // Calculate total percentages
    const totalPcts: Record<string, number> = {}
    for (const cat of allCategories) {
        totalPcts[cat] = totalCost > 0 ? (totals[cat] / totalCost) * 100 : 0
    }

    // Add total row
    rows.push(`
        <tr class="level-0 total-row" style="border-top: 2px solid var(--border-color); font-weight: 700;">
            <td>Total</td>
            ${
        allCategories.map((cat) =>
            `<td class="number">${totalPcts[cat].toFixed(1)}%</td>`
        ).join('')
    }
        </tr>
    `)

    return `
    <div style="overflow-x: auto;">
    <table class="expandable-table expandable-category-table">
        <thead>
            <tr>
                <th>Name</th>
                ${
        allCategories.map((cat) =>
            `<th class="number" style="font-size: 0.75rem;" title="${
                categoryDescriptions[cat] || cat
            }">${cat}</th>`
        ).join('')
    }
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
        <span class="excl-indicator" style="display:none"></span>
        <span style="margin-left: 1.5rem;">View:</span>
        <label>
            <input type="radio" name="categoryMetric" value="ref_time" checked>
            ref_time
        </label>
        <label>
            <input type="radio" name="categoryMetric" value="proof_size">
            proof_size
        </label>
    </div>
    <p class="table-note">Click a transaction row to exclude it.</p>
    `
}

export function drilldownCategoryChartScript(
    hierarchy: CategoryHierarchyData,
    categoryColorMap: Record<string, string>,
): string {
    return `
        // Store category hierarchy data for drill-down
        const categoryColorMap = ${JSON.stringify(categoryColorMap)};
        const categoryHierarchyOriginal = ${JSON.stringify(hierarchy)};
        let categoryHierarchy = JSON.parse(JSON.stringify(categoryHierarchyOriginal));
        let categoryCurrentLevel = 'datasets';
        let categoryCurrentParent = null;
        let categoryMetric = 'ref_time'; // 'ref_time' or 'proof_size'

        function catField(item) {
            return categoryMetric === 'proof_size' ? (item.categories_proof_size || item.categories) : item.categories;
        }
        function catCostField(item) {
            return categoryMetric === 'proof_size' ? (item.total_cost_proof_size ?? item.total_cost) : item.total_cost;
        }

        function recalculateCategoryPercentages(transactions, allCategories) {
            const totals = {};
            const totalsPs = {};
            let totalCost = 0;
            let totalCostPs = 0;
            for (const cat of allCategories) {
                totals[cat] = 0;
                totalsPs[cat] = 0;
            }
            for (const tx of transactions) {
                totalCost += tx.total_cost;
                totalCostPs += (tx.total_cost_proof_size ?? 0);
                for (const cat of allCategories) {
                    totals[cat] += (tx.categories[cat] ?? 0) * tx.total_cost / 100;
                    totalsPs[cat] += ((tx.categories_proof_size || {})[cat] ?? 0) * (tx.total_cost_proof_size ?? 0) / 100;
                }
            }
            const result = {};
            const resultPs = {};
            for (const cat of allCategories) {
                result[cat] = totalCost > 0 ? (totals[cat] / totalCost) * 100 : 0;
                resultPs[cat] = totalCostPs > 0 ? (totalsPs[cat] / totalCostPs) * 100 : 0;
            }
            return { categories: result, total_cost: totalCost, categories_proof_size: resultPs, total_cost_proof_size: totalCostPs };
        }

        function filterCategoryHierarchy() {
            if (excludedTxKeys.size === 0) {
                categoryHierarchy = JSON.parse(JSON.stringify(categoryHierarchyOriginal));
                return;
            }

            const allCategories = categoryHierarchyOriginal.allCategories;

            categoryHierarchy = {
                allCategories,
                datasets: categoryHierarchyOriginal.datasets.map(dataset => {
                    const contracts = dataset.contracts.map(contract => {
                        const filteredTxs = contract.transactions.filter(tx => !excludedTxKeys.has(txKey(dataset.name, contract.name, tx.name)));
                        const recalc = recalculateCategoryPercentages(filteredTxs, allCategories);
                        return {
                            name: contract.name,
                            categories: recalc.categories,
                            total_cost: recalc.total_cost,
                            categories_proof_size: recalc.categories_proof_size,
                            total_cost_proof_size: recalc.total_cost_proof_size,
                            transactions: filteredTxs
                        };
                    }).filter(c => c.transactions.length > 0);

                    const contractTxs = contracts.flatMap(c => c.transactions);
                    const datasetRecalc = recalculateCategoryPercentages(contractTxs, allCategories);
                    return {
                        name: dataset.name,
                        categories: datasetRecalc.categories,
                        total_cost: datasetRecalc.total_cost,
                        categories_proof_size: datasetRecalc.categories_proof_size,
                        total_cost_proof_size: datasetRecalc.total_cost_proof_size,
                        contracts
                    };
                }).filter(d => d.contracts.length > 0)
            };
        }

        function getCategoryChartData(level, parent) {
            let items = [];
            let title = 'Category Breakdown by Dataset';
            const metricLabel = categoryMetric === 'proof_size' ? ' [proof_size]' : ' [ref_time]';
            const suffix = excludedTxKeys.size > 0 ? ' (excl. ' + excludedTxKeys.size + ')' : '';

            if (level === 'datasets') {
                items = categoryHierarchy.datasets;
                title = 'Category Breakdown by Dataset' + metricLabel + suffix + ' (click to drill down)';
            } else if (level === 'contracts' && parent) {
                const dataset = categoryHierarchy.datasets.find(d => d.name === parent);
                if (dataset) {
                    items = dataset.contracts;
                    title = 'Category Breakdown by Contract: ' + parent + metricLabel + suffix + ' (click to drill down, right-click to go back)';
                }
            } else if (level === 'transactions' && parent) {
                for (const dataset of categoryHierarchy.datasets) {
                    const contract = dataset.contracts.find(c => c.name === parent);
                    if (contract) {
                        items = contract.transactions;
                        title = 'Category Breakdown by Transaction: ' + parent + metricLabel + suffix + ' (right-click to go back)';
                        break;
                    }
                }
            }

            const categories = categoryHierarchy.allCategories;
            const datasets = categories.map(cat => ({
                label: cat,
                data: items.map(i => catField(i)[cat] ?? 0),
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

        // Deploy checkbox handler for category
        document.getElementById('hideCategoryDeployCheckbox').onchange = function(evt) {
            toggleDeployExclusion(evt.target.checked);
        };

        // Metric radio button handler
        document.querySelectorAll('input[name="categoryMetric"]').forEach(radio => {
            radio.onchange = function(evt) {
                categoryMetric = evt.target.value;
                updateCategoryChart(categoryCurrentLevel, categoryCurrentParent);
                updateCategoryTable();
            };
        });

        function updateCategoryTable() {
            var table = document.querySelector('.expandable-category-table');
            if (!table) return;
            var allCats = categoryHierarchy.allCategories;

            if (excludedTxKeys.size === 0 && categoryMetric === 'ref_time') {
                table.querySelectorAll('[data-orig]').forEach(function(cell) {
                    cell.innerHTML = cell.dataset.orig;
                    delete cell.dataset.orig;
                });
                return;
            }

            // Save original HTML if not already saved
            table.querySelectorAll('td.number').forEach(function(cell) {
                if (!cell.dataset.orig) cell.dataset.orig = cell.innerHTML;
            });

            // Update level-0 dataset rows (iterate DOM, look up in hierarchy)
            table.querySelectorAll('tr.level-0:not(.total-row)').forEach(function(row) {
                var toggle = row.querySelector('.expand-toggle');
                if (!toggle) return;
                var name = toggle.textContent.trim();
                var ds = categoryHierarchy.datasets.find(function(d){ return d.name === name; });
                var cells = row.querySelectorAll('td');
                for (var i = 0; i < allCats.length; i++) {
                    cells[i + 1].innerHTML = ds ? fmtCatPct(catField(ds)[allCats[i]] ?? 0) : '<span class="number">N/A</span>';
                }
            });

            // Update level-1 contract rows (iterate DOM, look up in hierarchy)
            table.querySelectorAll('tr.level-1').forEach(function(row) {
                var toggle = row.querySelector('.expand-toggle');
                if (!toggle) return;
                var cName = toggle.textContent.trim();
                var contract = null;
                for (var di = 0; di < categoryHierarchy.datasets.length; di++) {
                    var found = categoryHierarchy.datasets[di].contracts.find(function(c){ return c.name === cName; });
                    if (found) { contract = found; break; }
                }
                var cells = row.querySelectorAll('td');
                for (var i = 0; i < allCats.length; i++) {
                    cells[i + 1].innerHTML = contract ? fmtCatPct(catField(contract)[allCats[i]] ?? 0) : '<span class="number">N/A</span>';
                }
            });

            // Update level-2 transaction rows (values + tooltips)
            table.querySelectorAll('tr.level-2').forEach(function(row) {
                var txName = row.dataset.txname;
                var dsName = row.dataset.dataset;
                var cName = row.dataset.contract;
                var tx = null;
                var ds = categoryHierarchy.datasets.find(function(d){ return d.name === dsName; });
                if (ds) {
                    var c = ds.contracts.find(function(c){ return c.name === cName; });
                    if (c) tx = c.transactions.find(function(t){ return t.name === txName; });
                }
                var cells = row.querySelectorAll('td');
                for (var i = 0; i < allCats.length; i++) {
                    cells[i + 1].innerHTML = tx ? fmtCatPct(catField(tx)[allCats[i]] ?? 0) : '<span class="number">N/A</span>';
                    // Update tooltip for metric switch
                    if (tx && tx.opcodes) {
                        var tip = '';
                        for (var j = 0; j < tx.opcodes.length; j++) {
                            var op = tx.opcodes[j];
                            if (op.category === allCats[i]) {
                                var pv = categoryMetric === 'proof_size' ? op.pct_proof_size : op.pct;
                                tip += op.op + ': ' + pv.toFixed(1) + '%\\n';
                            }
                        }
                        cells[i + 1].title = tip.trimEnd();
                    }
                }
            });

            // Update total row
            var totalRow = table.querySelector('tr.total-row');
            if (totalRow) {
                totalRow.querySelectorAll('td.number').forEach(function(cell) {
                    if (!cell.dataset.orig) cell.dataset.orig = cell.innerHTML;
                });
                // Recalculate overall totals
                var allTxs = [];
                categoryHierarchy.datasets.forEach(function(ds){ ds.contracts.forEach(function(c){ c.transactions.forEach(function(tx){ allTxs.push(tx); }); }); });
                var recalc = recalculateCategoryPercentages(allTxs, allCats);
                var cats = categoryMetric === 'proof_size' ? recalc.categories_proof_size : recalc.categories;
                var cells = totalRow.querySelectorAll('td');
                for (var i = 0; i < allCats.length; i++) {
                    cells[i + 1].innerHTML = fmtCatPct(cats[allCats[i]] ?? 0);
                }
            }
        }

        function updateCategorySection() {
            filterCategoryHierarchy();
            updateCategoryChart(categoryCurrentLevel, categoryCurrentParent);
            updateCategoryTable();
        }
        window.updateCategorySection = updateCategorySection;

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

// Bytecode Size Hierarchy Types and Functions
export interface BytecodeHierarchyData {
    implTypes: string[]
    datasets: Array<{
        name: string
        sizes: Record<string, number | null>
        contracts: Array<{
            name: string
            sizes: Record<string, number | null>
            implementations: Array<
                {
                    name: string
                    vm_type: string
                    size_bytes: number
                    implType: string
                }
            >
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
    let rowId = 3000
    const rows: string[] = []
    const evmKey = 'EVM'
    const pvmSolKey = 'PVM/Solidity'

    function avgSizeForType(
        contracts: BytecodeHierarchyData['datasets'][0]['contracts'],
        implType: string,
    ): number | null {
        const vals = contracts.map((c) => c.sizes[implType]).filter(
            (v): v is number => v !== null,
        )
        return vals.length > 0
            ? Math.round(vals.reduce((s, v) => s + v, 0) / vals.length)
            : null
    }

    const allContracts = data.datasets.flatMap((d) => d.contracts)

    for (const dataset of data.datasets) {
        const dsAvgEvm = avgSizeForType(dataset.contracts, evmKey)
        const dsAvgPvm = avgSizeForType(dataset.contracts, pvmSolKey)

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
            const evmSize = contract.sizes[evmKey] ?? null
            const pvmSolSize = contract.sizes[pvmSolKey] ?? null

            const evmImpl = contract.implementations.find((i) =>
                i.implType === evmKey
            )
            const pvmSolImpl = contract.implementations.find((i) =>
                i.implType === pvmSolKey
            )
            // Collect all non-Solidity PVM impls
            const altImpls = contract.implementations.filter((i) =>
                i.implType !== evmKey && i.implType !== pvmSolKey
            )
            const hasAltImpls = altImpls.length > 0
            const contractId = hasAltImpls ? rowId++ : -1

            const evmLabel = evmImpl
                ? `<span title="${evmImpl.name}">${formatBytes(evmSize)}</span>`
                : 'N/A'
            const pvmLabel = pvmSolImpl
                ? `<span title="${pvmSolImpl.name}">${
                    formatBytes(pvmSolSize)
                }</span>`
                : 'N/A'

            if (hasAltImpls) {
                const allPvmSizes: LabeledValue[] = [
                    { value: pvmSolSize, label: 'solidity' },
                    ...altImpls.map((i) => ({
                        value: i.size_bytes as number | null,
                        label: getImplLabel(contract.name, i.name),
                    })),
                ]
                const pvmWithRange = withRange(
                    pvmLabel,
                    allPvmSizes,
                    formatBytes,
                )
                const diffWithRange = withDiffRange(
                    calcSizeDiff(evmSize, pvmSolSize),
                    evmSize,
                    allPvmSizes,
                )

                rows.push(`
                    <tr class="level-1 hidden-row" data-id="${contractId}" data-level="1" data-parent="${datasetId}">
                        <td style="padding-left: 2rem;"><span class="expand-toggle" onclick="toggleExpand(${contractId}, 1)">${contract.name}</span></td>
                        <td class="number">${evmLabel}</td>
                        <td class="number">${pvmWithRange}</td>
                        <td class="number">${diffWithRange}</td>
                    </tr>
                `)

                // Solidity row (EVM + PVM)
                if (evmImpl || pvmSolImpl) {
                    rows.push(`
                        <tr class="level-2 hidden-row" data-level="2" data-parent="${contractId}">
                            <td style="padding-left: 3.5rem;">${contract.name} ${
                        implTag('solidity')
                    }</td>
                            <td class="number">${
                        evmImpl ? formatBytes(evmImpl.size_bytes) : ''
                    }</td>
                            <td class="number">${
                        pvmSolImpl ? formatBytes(pvmSolImpl.size_bytes) : ''
                    }</td>
                            <td class="number">${
                        evmImpl && pvmSolImpl
                            ? calcSizeDiff(
                                evmImpl.size_bytes,
                                pvmSolImpl.size_bytes,
                            )
                            : ''
                    }</td>
                        </tr>
                    `)
                }

                // Alt implementations
                for (const impl of altImpls) {
                    const label = getImplLabel(contract.name, impl.name)
                    rows.push(`
                        <tr class="level-2 hidden-row alt-impl-row" data-level="2" data-parent="${contractId}">
                            <td style="padding-left: 3.5rem;">${contract.name} ${
                        implTag(label)
                    }</td>
                            <td class="number"></td>
                            <td class="number">${
                        formatBytes(impl.size_bytes)
                    }</td>
                            <td class="number">${
                        calcSizeDiff(evmSize, impl.size_bytes)
                    }</td>
                        </tr>
                    `)
                }
            } else {
                rows.push(`
                    <tr class="level-1 hidden-row" data-level="1" data-parent="${datasetId}">
                        <td style="padding-left: 2rem;">${contract.name}</td>
                        <td class="number">${evmLabel}</td>
                        <td class="number">${pvmLabel}</td>
                        <td class="number">${
                    calcSizeDiff(evmSize, pvmSolSize)
                }</td>
                    </tr>
                `)
            }
        }
    }

    const overallAvgEvm = avgSizeForType(allContracts, evmKey)
    const overallAvgPvm = avgSizeForType(allContracts, pvmSolKey)

    rows.push(`
        <tr class="level-0 total-row" style="border-top: 2px solid var(--border-color); font-weight: 700;">
            <td>Avg per contract</td>
            <td class="number">${formatBytes(overallAvgEvm)}</td>
            <td class="number">${formatBytes(overallAvgPvm)}</td>
            <td class="number">${
        calcSizeDiff(overallAvgEvm, overallAvgPvm)
    }</td>
        </tr>
    `)

    return `
    <p class="table-note">Dataset rows show the average bytecode size for the Solidity implementation. Colored ranges show the min..max across all PVM implementations.</p>
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

export function drilldownBytecodeChartScript(
    hierarchy: BytecodeHierarchyData,
): string {
    return `
        // Store bytecode hierarchy data for drill-down
        const bytecodeHierarchy = ${JSON.stringify(hierarchy)};
        let bytecodeCurrentLevel = 'datasets';
        let bytecodeCurrentParent = null;

        // Avg of contract sizes for a given impl type across a dataset
        function avgImplTypeSize(contracts, implType) {
            var vals = contracts.map(function(c) { return c.sizes[implType]; }).filter(function(v) { return v !== null && v !== undefined; });
            return vals.length > 0 ? Math.round(vals.reduce(function(s, v) { return s + v; }, 0) / vals.length) : null;
        }

        function updateBytecodeChart(level, parent) {
            bytecodeCurrentLevel = level;
            bytecodeCurrentParent = parent;

            const chart = Chart.getChart('bytecodeChart');
            const implTypes = bytecodeHierarchy.implTypes;

            if (level === 'datasets') {
                const items = bytecodeHierarchy.datasets;
                chart.data.labels = items.map(function(i) { return i.name; });
                implTypes.forEach(function(implType, idx) {
                    if (idx < chart.data.datasets.length) {
                        chart.data.datasets[idx].data = items.map(function(d) {
                            return avgImplTypeSize(d.contracts, implType);
                        });
                    }
                });
                chart.options.plugins.title.text = 'Avg Bytecode Size per Contract (click to drill down)';
                chart.options.scales.y.title.text = 'Avg Size (bytes)';
            } else if (level === 'contracts' && parent) {
                const dataset = bytecodeHierarchy.datasets.find(function(d) { return d.name === parent; });
                if (!dataset) return;
                const items = dataset.contracts;
                chart.data.labels = items.map(function(i) { return i.name; });
                implTypes.forEach(function(implType, idx) {
                    if (idx < chart.data.datasets.length) {
                        chart.data.datasets[idx].data = items.map(function(c) {
                            return c.sizes[implType] !== undefined ? c.sizes[implType] : null;
                        });
                    }
                });
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
