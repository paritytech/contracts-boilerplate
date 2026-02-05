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
                    th.style.cursor = 'pointer';
                    // Preserve existing title (category descriptions) and append sort hint
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

export interface GasHierarchyData {
    datasets: Array<GasRow & {
        contracts: Array<GasRow & {
            transactions: GasRow[]
        }>
    }>
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
                        return {
                            ...contract,
                            geth_gas: contract.geth_gas, // Keep original geth value
                            eth_rpc_evm_gas: filteredTxs.some(tx => tx.eth_rpc_evm_gas !== null) ? evm : null,
                            eth_rpc_pvm_gas: filteredTxs.some(tx => tx.eth_rpc_pvm_gas !== null) ? pvm : null,
                            transactions: filteredTxs.map(tx => ({
                                ...tx,
                                geth_gas: contract.transactions.find(t => t.name === tx.name)?.geth_gas ?? null
                            }))
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

        function getChartData(level, parent) {
            let items = [];
            let title = 'Gas by Dataset';
            const suffix = hideDeployTx ? ' (excluding deploy)' : '';

            if (level === 'datasets') {
                items = gasHierarchy.datasets;
                title = 'Gas by Dataset' + suffix + ' (click to drill down)';
            } else if (level === 'contracts' && parent) {
                const dataset = gasHierarchy.datasets.find(d => d.name === parent);
                if (dataset) {
                    items = dataset.contracts;
                    title = 'Gas by Contract: ' + parent + suffix + ' (click to drill down, right-click to go back)';
                }
            } else if (level === 'transactions' && parent) {
                for (const dataset of gasHierarchy.datasets) {
                    const contract = dataset.contracts.find(c => c.name === parent);
                    if (contract) {
                        items = contract.transactions;
                        title = 'Gas by Transaction: ' + parent + suffix + ' (right-click to go back)';
                        break;
                    }
                }
            }

            return {
                labels: items.map(i => i.name),
                evmData: items.map(i => i.eth_rpc_evm_gas),
                pvmData: items.map(i => i.eth_rpc_pvm_gas),
                gethData: items.map(i => i.geth_gas),
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
            chart.data.datasets[2].data = data.gethData;
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
            const rows = document.querySelectorAll('.expandable-table tbody tr');
            rows.forEach(row => {
                const nameCell = row.querySelector('td:first-child');
                if (nameCell) {
                    const name = nameCell.textContent.trim();
                    if (hideDeployTx && name === 'deploy' && row.classList.contains('level-2')) {
                        row.style.display = 'none';
                    } else if (!row.classList.contains('hidden-row')) {
                        row.style.display = '';
                    }
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
            Hide deploy transactions
        </label>
    </div>
    `
}

export function expandableGasTable(data: GasHierarchyData): string {
    let rowId = 0
    const rows: string[] = []

    // Calculate totals across all datasets
    const totals = {
        geth_gas: 0 as number | null,
        eth_rpc_evm_gas: 0 as number | null,
        eth_rpc_pvm_gas: 0 as number | null,
    }
    let hasGeth = false, hasEvm = false, hasPvm = false

    for (const dataset of data.datasets) {
        if (dataset.geth_gas !== null) { totals.geth_gas! += dataset.geth_gas; hasGeth = true }
        if (dataset.eth_rpc_evm_gas !== null) { totals.eth_rpc_evm_gas! += dataset.eth_rpc_evm_gas; hasEvm = true }
        if (dataset.eth_rpc_pvm_gas !== null) { totals.eth_rpc_pvm_gas! += dataset.eth_rpc_pvm_gas; hasPvm = true }

        const datasetId = rowId++
        rows.push(`
            <tr class="level-0" data-id="${datasetId}" data-level="0">
                <td><span class="expand-toggle" onclick="toggleExpand(${datasetId}, 0)">${dataset.name}</span></td>
                <td class="number">${formatGas(dataset.geth_gas)}</td>
                <td class="number">${formatGas(dataset.eth_rpc_evm_gas)}</td>
                <td class="number">${calcDiff(dataset.geth_gas, dataset.eth_rpc_evm_gas)}</td>
                <td class="number">${formatGas(dataset.eth_rpc_pvm_gas)}</td>
                <td class="number">${calcDiff(dataset.geth_gas, dataset.eth_rpc_pvm_gas)}</td>
            </tr>
        `)

        for (const contract of dataset.contracts) {
            const contractId = rowId++
            rows.push(`
                <tr class="level-1 hidden-row" data-id="${contractId}" data-level="1" data-parent="${datasetId}">
                    <td><span class="expand-toggle" onclick="toggleExpand(${contractId}, 1)">${contract.name}</span></td>
                    <td class="number">${formatGas(contract.geth_gas)}</td>
                    <td class="number">${formatGas(contract.eth_rpc_evm_gas)}</td>
                    <td class="number">${calcDiff(contract.geth_gas, contract.eth_rpc_evm_gas)}</td>
                    <td class="number">${formatGas(contract.eth_rpc_pvm_gas)}</td>
                    <td class="number">${calcDiff(contract.geth_gas, contract.eth_rpc_pvm_gas)}</td>
                </tr>
            `)

            for (const tx of contract.transactions) {
                rows.push(`
                    <tr class="level-2 hidden-row" data-level="2" data-parent="${contractId}">
                        <td>${tx.name}</td>
                        <td class="number">${formatGas(tx.geth_gas)}</td>
                        <td class="number">${formatGas(tx.eth_rpc_evm_gas)}</td>
                        <td class="number">${calcDiff(tx.geth_gas, tx.eth_rpc_evm_gas)}</td>
                        <td class="number">${formatGas(tx.eth_rpc_pvm_gas)}</td>
                        <td class="number">${calcDiff(tx.geth_gas, tx.eth_rpc_pvm_gas)}</td>
                    </tr>
                `)
            }
        }
    }

    if (!hasGeth) totals.geth_gas = null
    if (!hasEvm) totals.eth_rpc_evm_gas = null
    if (!hasPvm) totals.eth_rpc_pvm_gas = null

    // Add total row
    rows.push(`
        <tr class="level-0 total-row" style="border-top: 2px solid var(--border-color); font-weight: 700;">
            <td>Total</td>
            <td class="number">${formatGas(totals.geth_gas)}</td>
            <td class="number">${formatGas(totals.eth_rpc_evm_gas)}</td>
            <td class="number">${calcDiff(totals.geth_gas, totals.eth_rpc_evm_gas)}</td>
            <td class="number">${formatGas(totals.eth_rpc_pvm_gas)}</td>
            <td class="number">${calcDiff(totals.geth_gas, totals.eth_rpc_pvm_gas)}</td>
        </tr>
    `)

    return `
    <table class="expandable-table">
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

export interface WeightHierarchyData {
    datasets: Array<WeightRow & {
        contracts: Array<WeightRow & {
            transactions: WeightRow[]
        }>
    }>
}

function formatWeight(value: number | null): string {
    return value !== null ? value.toLocaleString() : 'N/A'
}

function formatMetered(value: number | null): string {
    return value !== null ? `${value.toFixed(1)}%` : 'N/A'
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

            // Deep clone and filter out deploy transactions
            weightHierarchy = {
                datasets: weightHierarchyOriginal.datasets.map(dataset => ({
                    ...dataset,
                    contracts: dataset.contracts.map(contract => {
                        const filteredTxs = contract.transactions.filter(tx => tx.name !== 'deploy');
                        // Recalculate contract totals
                        const evmRefTime = filteredTxs.reduce((sum, tx) => sum + (tx.evm_ref_time || 0), 0);
                        const pvmRefTime = filteredTxs.reduce((sum, tx) => sum + (tx.pvm_ref_time || 0), 0);
                        const evmProofSize = filteredTxs.reduce((sum, tx) => sum + (tx.evm_proof_size || 0), 0);
                        const pvmProofSize = filteredTxs.reduce((sum, tx) => sum + (tx.pvm_proof_size || 0), 0);
                        const evmCount = filteredTxs.filter(tx => tx.evm_metered_pct !== null).length;
                        const pvmCount = filteredTxs.filter(tx => tx.pvm_metered_pct !== null).length;
                        const evmMeteredSum = filteredTxs.reduce((sum, tx) => sum + (tx.evm_metered_pct || 0), 0);
                        const pvmMeteredSum = filteredTxs.reduce((sum, tx) => sum + (tx.pvm_metered_pct || 0), 0);
                        const evmMeteredRefTime = filteredTxs.reduce((sum, tx) => sum + (tx.evm_metered_ref_time || 0), 0);
                        const pvmMeteredRefTime = filteredTxs.reduce((sum, tx) => sum + (tx.pvm_metered_ref_time || 0), 0);
                        return {
                            ...contract,
                            evm_ref_time: filteredTxs.some(tx => tx.evm_ref_time !== null) ? evmRefTime : null,
                            pvm_ref_time: filteredTxs.some(tx => tx.pvm_ref_time !== null) ? pvmRefTime : null,
                            evm_proof_size: filteredTxs.some(tx => tx.evm_proof_size !== null) ? evmProofSize : null,
                            pvm_proof_size: filteredTxs.some(tx => tx.pvm_proof_size !== null) ? pvmProofSize : null,
                            evm_metered_pct: evmCount > 0 ? evmMeteredSum / evmCount : null,
                            pvm_metered_pct: pvmCount > 0 ? pvmMeteredSum / pvmCount : null,
                            evm_metered_ref_time: filteredTxs.some(tx => tx.evm_metered_ref_time !== null) ? evmMeteredRefTime : null,
                            pvm_metered_ref_time: filteredTxs.some(tx => tx.pvm_metered_ref_time !== null) ? pvmMeteredRefTime : null,
                            transactions: filteredTxs
                        };
                    }).filter(c => c.transactions.length > 0)
                })).map(dataset => {
                    // Recalculate dataset totals
                    const evmRefTime = dataset.contracts.reduce((sum, c) => sum + (c.evm_ref_time || 0), 0);
                    const pvmRefTime = dataset.contracts.reduce((sum, c) => sum + (c.pvm_ref_time || 0), 0);
                    const evmProofSize = dataset.contracts.reduce((sum, c) => sum + (c.evm_proof_size || 0), 0);
                    const pvmProofSize = dataset.contracts.reduce((sum, c) => sum + (c.pvm_proof_size || 0), 0);
                    const evmCount = dataset.contracts.filter(c => c.evm_metered_pct !== null).length;
                    const pvmCount = dataset.contracts.filter(c => c.pvm_metered_pct !== null).length;
                    const evmMeteredSum = dataset.contracts.reduce((sum, c) => sum + (c.evm_metered_pct || 0), 0);
                    const pvmMeteredSum = dataset.contracts.reduce((sum, c) => sum + (c.pvm_metered_pct || 0), 0);
                    const evmMeteredRefTime = dataset.contracts.reduce((sum, c) => sum + (c.evm_metered_ref_time || 0), 0);
                    const pvmMeteredRefTime = dataset.contracts.reduce((sum, c) => sum + (c.pvm_metered_ref_time || 0), 0);
                    return {
                        ...dataset,
                        evm_ref_time: dataset.contracts.some(c => c.evm_ref_time !== null) ? evmRefTime : null,
                        pvm_ref_time: dataset.contracts.some(c => c.pvm_ref_time !== null) ? pvmRefTime : null,
                        evm_proof_size: dataset.contracts.some(c => c.evm_proof_size !== null) ? evmProofSize : null,
                        pvm_proof_size: dataset.contracts.some(c => c.pvm_proof_size !== null) ? pvmProofSize : null,
                        evm_metered_pct: evmCount > 0 ? evmMeteredSum / evmCount : null,
                        pvm_metered_pct: pvmCount > 0 ? pvmMeteredSum / pvmCount : null,
                        evm_metered_ref_time: dataset.contracts.some(c => c.evm_metered_ref_time !== null) ? evmMeteredRefTime : null,
                        pvm_metered_ref_time: dataset.contracts.some(c => c.pvm_metered_ref_time !== null) ? pvmMeteredRefTime : null
                    };
                })
            };
        }

        function getWeightChartData(level, parent, metric) {
            let items = [];
            const metricLabel = metric === 'ref_time' ? 'Weight (ref_time)' : 'Weight (proof_size)';
            let title = metricLabel + ' by Dataset';
            const suffix = hideWeightDeployTx ? ' (excluding deploy)' : '';

            if (level === 'datasets') {
                items = weightHierarchy.datasets;
                title = metricLabel + ' by Dataset' + suffix + ' (click to drill down)';
            } else if (level === 'contracts' && parent) {
                const dataset = weightHierarchy.datasets.find(d => d.name === parent);
                if (dataset) {
                    items = dataset.contracts;
                    title = metricLabel + ' by Contract: ' + parent + suffix + ' (click to drill down, right-click to go back)';
                }
            } else if (level === 'transactions' && parent) {
                for (const dataset of weightHierarchy.datasets) {
                    const contract = dataset.contracts.find(c => c.name === parent);
                    if (contract) {
                        items = contract.transactions;
                        title = metricLabel + ' by Transaction: ' + parent + suffix + ' (right-click to go back)';
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
            } else {
                evmMetered = evmValues;
                evmOverhead = evmValues.map(() => null);
                pvmMetered = pvmValues;
                pvmOverhead = pvmValues.map(() => null);
            }

            return {
                labels: items.map(i => i.name),
                evmMetered, evmOverhead, pvmMetered, pvmOverhead,
                evmMeteredPct: items.map(i => i.evm_metered_pct),
                pvmMeteredPct: items.map(i => i.pvm_metered_pct),
                title, metric
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
            chart.options.plugins.title.text = data.title;
            chart.options.scales.y.title.text = data.metric;

            if (data.metric === 'ref_time') {
                chart.data.datasets[0].label = 'EVM Metered';
                chart.data.datasets[1].label = 'EVM Overhead';
                chart.data.datasets[2].label = 'PVM Metered';
                chart.data.datasets[3].label = 'PVM Overhead';
                chart.data.datasets[1].hidden = false;
                chart.data.datasets[3].hidden = false;
            } else {
                chart.data.datasets[0].label = 'EVM';
                chart.data.datasets[1].label = '';
                chart.data.datasets[2].label = 'PVM';
                chart.data.datasets[3].label = '';
                chart.data.datasets[1].hidden = true;
                chart.data.datasets[3].hidden = true;
            }

            window.weightEvmMeteredPct = data.evmMeteredPct;
            window.weightPvmMeteredPct = data.pvmMeteredPct;
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
            const rows = document.querySelectorAll('.expandable-weight-table tbody tr');
            rows.forEach(row => {
                const nameCell = row.querySelector('td:first-child');
                if (nameCell) {
                    const name = nameCell.textContent.trim();
                    if (hideWeightDeployTx && name === 'deploy' && row.classList.contains('level-2')) {
                        row.style.display = 'none';
                    } else if (!row.classList.contains('hidden-row')) {
                        row.style.display = '';
                    }
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
            Hide deploy transactions
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
    `
}

export function expandableWeightTable(data: WeightHierarchyData): string {
    let rowId = 1000 // Start from 1000 to avoid conflicts with gas table IDs
    const rows: string[] = []

    // Calculate totals across all datasets
    const totals = {
        evm_ref_time: 0 as number | null,
        evm_metered_ref_time: 0 as number | null,
        evm_proof_size: 0 as number | null,
        pvm_ref_time: 0 as number | null,
        pvm_metered_ref_time: 0 as number | null,
        pvm_proof_size: 0 as number | null,
    }
    let hasEvmRefTime = false, hasEvmMetered = false, hasEvmProof = false
    let hasPvmRefTime = false, hasPvmMetered = false, hasPvmProof = false
    let evmMeteredPctSum = 0, evmMeteredPctCount = 0
    let pvmMeteredPctSum = 0, pvmMeteredPctCount = 0

    for (const dataset of data.datasets) {
        if (dataset.evm_ref_time !== null) { totals.evm_ref_time! += dataset.evm_ref_time; hasEvmRefTime = true }
        if (dataset.evm_metered_ref_time !== null) { totals.evm_metered_ref_time! += dataset.evm_metered_ref_time; hasEvmMetered = true }
        if (dataset.evm_proof_size !== null) { totals.evm_proof_size! += dataset.evm_proof_size; hasEvmProof = true }
        if (dataset.pvm_ref_time !== null) { totals.pvm_ref_time! += dataset.pvm_ref_time; hasPvmRefTime = true }
        if (dataset.pvm_metered_ref_time !== null) { totals.pvm_metered_ref_time! += dataset.pvm_metered_ref_time; hasPvmMetered = true }
        if (dataset.pvm_proof_size !== null) { totals.pvm_proof_size! += dataset.pvm_proof_size; hasPvmProof = true }
        if (dataset.evm_metered_pct !== null) { evmMeteredPctSum += dataset.evm_metered_pct; evmMeteredPctCount++ }
        if (dataset.pvm_metered_pct !== null) { pvmMeteredPctSum += dataset.pvm_metered_pct; pvmMeteredPctCount++ }

        const datasetId = rowId++
        rows.push(`
            <tr class="level-0" data-id="${datasetId}" data-level="0">
                <td><span class="expand-toggle" onclick="toggleExpand(${datasetId}, 0)">${dataset.name}</span></td>
                <td class="number">${formatWeight(dataset.evm_ref_time)}</td>
                <td class="number">${formatWeight(dataset.evm_metered_ref_time)}</td>
                <td class="number">${formatMetered(dataset.evm_metered_pct)}</td>
                <td class="number">${formatWeight(dataset.evm_proof_size)}</td>
                <td class="number">${formatWeight(dataset.pvm_ref_time)}</td>
                <td class="number">${formatWeight(dataset.pvm_metered_ref_time)}</td>
                <td class="number">${formatMetered(dataset.pvm_metered_pct)}</td>
                <td class="number">${formatWeight(dataset.pvm_proof_size)}</td>
                <td class="number">${calcDiff(dataset.evm_ref_time, dataset.pvm_ref_time)}</td>
                <td class="number">${calcDiff(dataset.evm_metered_ref_time, dataset.pvm_metered_ref_time)}</td>
            </tr>
        `)

        for (const contract of dataset.contracts) {
            const contractId = rowId++
            rows.push(`
                <tr class="level-1 hidden-row" data-id="${contractId}" data-level="1" data-parent="${datasetId}">
                    <td><span class="expand-toggle" onclick="toggleExpand(${contractId}, 1)">${contract.name}</span></td>
                    <td class="number">${formatWeight(contract.evm_ref_time)}</td>
                    <td class="number">${formatWeight(contract.evm_metered_ref_time)}</td>
                    <td class="number">${formatMetered(contract.evm_metered_pct)}</td>
                    <td class="number">${formatWeight(contract.evm_proof_size)}</td>
                    <td class="number">${formatWeight(contract.pvm_ref_time)}</td>
                    <td class="number">${formatWeight(contract.pvm_metered_ref_time)}</td>
                    <td class="number">${formatMetered(contract.pvm_metered_pct)}</td>
                    <td class="number">${formatWeight(contract.pvm_proof_size)}</td>
                    <td class="number">${calcDiff(contract.evm_ref_time, contract.pvm_ref_time)}</td>
                    <td class="number">${calcDiff(contract.evm_metered_ref_time, contract.pvm_metered_ref_time)}</td>
                </tr>
            `)

            for (const tx of contract.transactions) {
                rows.push(`
                    <tr class="level-2 hidden-row" data-level="2" data-parent="${contractId}">
                        <td>${tx.name}</td>
                        <td class="number">${formatWeight(tx.evm_ref_time)}</td>
                        <td class="number">${formatWeight(tx.evm_metered_ref_time)}</td>
                        <td class="number">${formatMetered(tx.evm_metered_pct)}</td>
                        <td class="number">${formatWeight(tx.evm_proof_size)}</td>
                        <td class="number">${formatWeight(tx.pvm_ref_time)}</td>
                        <td class="number">${formatWeight(tx.pvm_metered_ref_time)}</td>
                        <td class="number">${formatMetered(tx.pvm_metered_pct)}</td>
                        <td class="number">${formatWeight(tx.pvm_proof_size)}</td>
                        <td class="number">${calcDiff(tx.evm_ref_time, tx.pvm_ref_time)}</td>
                        <td class="number">${calcDiff(tx.evm_metered_ref_time, tx.pvm_metered_ref_time)}</td>
                    </tr>
                `)
            }
        }
    }

    if (!hasEvmRefTime) totals.evm_ref_time = null
    if (!hasEvmMetered) totals.evm_metered_ref_time = null
    if (!hasEvmProof) totals.evm_proof_size = null
    if (!hasPvmRefTime) totals.pvm_ref_time = null
    if (!hasPvmMetered) totals.pvm_metered_ref_time = null
    if (!hasPvmProof) totals.pvm_proof_size = null

    const avgEvmMeteredPct = evmMeteredPctCount > 0 ? evmMeteredPctSum / evmMeteredPctCount : null
    const avgPvmMeteredPct = pvmMeteredPctCount > 0 ? pvmMeteredPctSum / pvmMeteredPctCount : null

    // Add total row
    rows.push(`
        <tr class="level-0 total-row" style="border-top: 2px solid var(--border-color); font-weight: 700;">
            <td>Total</td>
            <td class="number">${formatWeight(totals.evm_ref_time)}</td>
            <td class="number">${formatWeight(totals.evm_metered_ref_time)}</td>
            <td class="number">${formatMetered(avgEvmMeteredPct)}</td>
            <td class="number">${formatWeight(totals.evm_proof_size)}</td>
            <td class="number">${formatWeight(totals.pvm_ref_time)}</td>
            <td class="number">${formatWeight(totals.pvm_metered_ref_time)}</td>
            <td class="number">${formatMetered(avgPvmMeteredPct)}</td>
            <td class="number">${formatWeight(totals.pvm_proof_size)}</td>
            <td class="number">${calcDiff(totals.evm_ref_time, totals.pvm_ref_time)}</td>
            <td class="number">${calcDiff(totals.evm_metered_ref_time, totals.pvm_metered_ref_time)}</td>
        </tr>
    `)

    return `
    <table class="expandable-table expandable-weight-table">
        <thead>
            <tr>
                <th rowspan="2">Name</th>
                <th colspan="4" class="group-header">EVM</th>
                <th colspan="4" class="group-header">PVM</th>
                <th colspan="2" class="group-header">Δ (PVM vs EVM)</th>
            </tr>
            <tr>
                <th class="number">ref_time</th>
                <th class="number">metered</th>
                <th class="number">%</th>
                <th class="number">proof</th>
                <th class="number">ref_time</th>
                <th class="number">metered</th>
                <th class="number">%</th>
                <th class="number">proof</th>
                <th class="number">ref_time</th>
                <th class="number">metered</th>
            </tr>
        </thead>
        <tbody>
            ${rows.join('')}
        </tbody>
    </table>
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

    // Calculate totals
    const totals: Record<string, number> = {}
    let totalCost = 0
    for (const cat of allCategories) {
        totals[cat] = 0
    }

    for (const dataset of datasets) {
        totalCost += dataset.total_cost
        for (const cat of allCategories) {
            totals[cat] += (dataset.categories[cat] ?? 0) * dataset.total_cost / 100
        }

        const datasetId = rowId++
        rows.push(`
            <tr class="level-0" data-id="${datasetId}" data-level="0">
                <td><span class="expand-toggle" onclick="toggleExpand(${datasetId}, 0)">${dataset.name}</span></td>
                ${allCategories.map(cat => `<td class="number">${(dataset.categories[cat] ?? 0).toFixed(1)}%</td>`).join('')}
            </tr>
        `)

        for (const contract of dataset.contracts) {
            const contractId = rowId++
            rows.push(`
                <tr class="level-1 hidden-row" data-id="${contractId}" data-level="1" data-parent="${datasetId}">
                    <td><span class="expand-toggle" onclick="toggleExpand(${contractId}, 1)">${contract.name}</span></td>
                    ${allCategories.map(cat => `<td class="number">${(contract.categories[cat] ?? 0).toFixed(1)}%</td>`).join('')}
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

    // Calculate total percentages
    const totalPcts: Record<string, number> = {}
    for (const cat of allCategories) {
        totalPcts[cat] = totalCost > 0 ? (totals[cat] / totalCost) * 100 : 0
    }

    // Add total row
    rows.push(`
        <tr class="level-0 total-row" style="border-top: 2px solid var(--border-color); font-weight: 700;">
            <td>Total</td>
            ${allCategories.map(cat => `<td class="number">${totalPcts[cat].toFixed(1)}%</td>`).join('')}
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
            Hide deploy transactions
        </label>
    </div>
    `
}

export function drilldownCategoryChartScript(hierarchy: CategoryHierarchyData): string {
    return `
        // Store category hierarchy data for drill-down
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
            const datasets = categories.map((cat, idx) => ({
                label: cat,
                data: items.map(i => i.categories[cat] ?? 0),
                backgroundColor: getCategoryColorByIndex(idx),
            }));

            return {
                labels: items.map(i => i.name),
                datasets,
                title,
                canDrillDown: level !== 'transactions'
            };
        }

        function getCategoryColorByIndex(idx) {
            const colors = [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(199, 199, 199, 0.8)',
                'rgba(83, 102, 255, 0.8)',
                'rgba(255, 99, 255, 0.8)',
                'rgba(99, 255, 132, 0.8)',
                'rgba(255, 180, 86, 0.8)',
                'rgba(102, 255, 255, 0.8)',
            ];
            return colors[idx % colors.length];
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
            const rows = document.querySelectorAll('.expandable-category-table tbody tr');
            rows.forEach(row => {
                const nameCell = row.querySelector('td:first-child');
                if (nameCell) {
                    const name = nameCell.textContent.trim();
                    if (hideCategoryDeployTx && name === 'deploy' && row.classList.contains('level-2')) {
                        row.style.display = 'none';
                    } else if (!row.classList.contains('hidden-row')) {
                        row.style.display = '';
                    }
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

    // Calculate totals
    let totalEvmSize = 0
    let totalPvmSize = 0
    let hasEvm = false
    let hasPvm = false

    for (const dataset of data.datasets) {
        if (dataset.evm_size !== null) { totalEvmSize += dataset.evm_size; hasEvm = true }
        if (dataset.pvm_size !== null) { totalPvmSize += dataset.pvm_size; hasPvm = true }

        const datasetId = rowId++
        rows.push(`
            <tr class="level-0" data-id="${datasetId}" data-level="0">
                <td><span class="expand-toggle" onclick="toggleExpand(${datasetId}, 0)">${dataset.name}</span></td>
                <td class="number">${formatBytes(dataset.evm_size)}</td>
                <td class="number">${formatBytes(dataset.pvm_size)}</td>
                <td class="number">${calcSizeDiff(dataset.evm_size, dataset.pvm_size)}</td>
            </tr>
        `)

        for (const contract of dataset.contracts) {
            const evmLabel = contract.evm_name ? `<span title="${contract.evm_name}">${formatBytes(contract.evm_size)}</span>` : 'N/A'
            const pvmLabel = contract.pvm_name ? `<span title="${contract.pvm_name}">${formatBytes(contract.pvm_size)}</span>` : 'N/A'

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

    // Add total row
    rows.push(`
        <tr class="level-0 total-row" style="border-top: 2px solid var(--border-color); font-weight: 700;">
            <td>Total</td>
            <td class="number">${hasEvm ? formatBytes(totalEvmSize) : 'N/A'}</td>
            <td class="number">${hasPvm ? formatBytes(totalPvmSize) : 'N/A'}</td>
            <td class="number">${calcSizeDiff(hasEvm ? totalEvmSize : null, hasPvm ? totalPvmSize : null)}</td>
        </tr>
    `)

    return `
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

        function getBytecodeChartData(level, parent) {
            let items = [];
            let title = 'Total Bytecode Size by Dataset (bytes)';

            if (level === 'datasets') {
                items = bytecodeHierarchy.datasets;
                title = 'Total Bytecode Size by Dataset (click to drill down)';
            } else if (level === 'contracts' && parent) {
                const dataset = bytecodeHierarchy.datasets.find(d => d.name === parent);
                if (dataset) {
                    items = dataset.contracts;
                    title = 'Bytecode Size by Contract: ' + parent + ' (right-click to go back)';
                }
            }

            return {
                labels: items.map(i => i.name),
                evmData: items.map(i => i.evm_size),
                pvmData: items.map(i => i.pvm_size),
                title: title,
                canDrillDown: level === 'datasets'
            };
        }

        function updateBytecodeChart(level, parent) {
            bytecodeCurrentLevel = level;
            bytecodeCurrentParent = parent;

            const data = getBytecodeChartData(level, parent);
            const chart = Chart.getChart('bytecodeChart');

            chart.data.labels = data.labels;
            chart.data.datasets[0].data = data.evmData;
            chart.data.datasets[1].data = data.pvmData;
            chart.options.plugins.title.text = data.title;
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
