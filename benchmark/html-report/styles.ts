export function getStyles(): string {
    return `
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --bg-card: #ffffff;
    --text-primary: #212529;
    --text-secondary: #6c757d;
    --border-color: #dee2e6;
    --accent-color: #0d6efd;
    --accent-hover: #0b5ed7;
    --success-color: #198754;
    --warning-color: #ffc107;
    --danger-color: #dc3545;
    --shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    --shadow-lg: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

@media (prefers-color-scheme: dark) {
    :root {
        --bg-primary: #1a1d21;
        --bg-secondary: #212529;
        --bg-card: #2b3035;
        --text-primary: #f8f9fa;
        --text-secondary: #adb5bd;
        --border-color: #495057;
        --accent-color: #4dabf7;
        --accent-hover: #74c0fc;
        --success-color: #51cf66;
        --warning-color: #fcc419;
        --danger-color: #ff6b6b;
        --shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.3);
        --shadow-lg: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
    }
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem;
}

header {
    background: var(--bg-card);
    border-bottom: 1px solid var(--border-color);
    padding: 1.5rem 0;
    margin-bottom: 2rem;
    box-shadow: var(--shadow);
}

header h1 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

header p {
    color: var(--text-secondary);
    font-size: 0.875rem;
}

nav {
    background: var(--bg-card);
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow);
}

nav ul {
    list-style: none;
    display: flex;
    gap: 0;
    overflow-x: auto;
    padding: 0 1rem;
}

nav a {
    display: block;
    padding: 1rem 1.25rem;
    text-decoration: none;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 500;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
    transition: all 0.2s ease;
}

nav a:hover {
    color: var(--accent-color);
    background: var(--bg-secondary);
}

nav a.active {
    color: var(--accent-color);
    border-bottom-color: var(--accent-color);
}

.section {
    margin-bottom: 3rem;
    scroll-margin-top: 80px;
}

.section-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--accent-color);
}

.card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: var(--shadow);
}

.card-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.chart-container {
    position: relative;
    width: 100%;
    height: 350px;
}

.chart-container.tall {
    height: 500px;
}

.chart-container.wide {
    height: 400px;
}

.chart-container canvas {
    width: 100% !important;
    height: 100% !important;
}

.grid {
    display: grid;
    gap: 1.5rem;
}

.grid-2 {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.grid-3 {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;
}

th, td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
}

th {
    background: var(--bg-secondary);
    font-weight: 600;
    white-space: nowrap;
}

tr:hover td {
    background: var(--bg-secondary);
}

.number {
    text-align: right;
    font-variant-numeric: tabular-nums;
}

.positive {
    color: var(--danger-color);
}

.negative {
    color: var(--success-color);
}

.metric-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.metric-card {
    background: var(--bg-secondary);
    padding: 1.25rem;
    border-radius: 0.5rem;
    text-align: center;
}

.metric-value {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--accent-color);
    margin-bottom: 0.25rem;
}

.metric-label {
    font-size: 0.75rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.legend {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    justify-content: center;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    color: var(--text-secondary);
}

.legend-color {
    width: 12px;
    height: 12px;
    border-radius: 2px;
}

footer {
    text-align: center;
    padding: 2rem;
    color: var(--text-secondary);
    font-size: 0.75rem;
    border-top: 1px solid var(--border-color);
    margin-top: 3rem;
}

/* Filter controls */
.filter-controls {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: center;
}

.filter-controls label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 0.875rem;
    color: var(--text-secondary);
}

.filter-controls input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    cursor: pointer;
}

/* Expandable table styles */
.expandable-table .expand-toggle {
    cursor: pointer;
    user-select: none;
}

.expandable-table .expand-toggle::before {
    content: '▶';
    display: inline-block;
    width: 1em;
    margin-right: 0.5em;
    transition: transform 0.2s ease;
    font-size: 0.75em;
}

.expandable-table .expand-toggle.expanded::before {
    transform: rotate(90deg);
}

.expandable-table .level-0 td:first-child {
    font-weight: 600;
}

.expandable-table .level-1 td:first-child {
    padding-left: 2rem;
}

.expandable-table .level-2 td:first-child {
    padding-left: 3.5rem;
    font-weight: 400;
    color: var(--text-secondary);
}

.expandable-table .hidden-row {
    display: none;
}

.expandable-table tr.level-0 {
    background-color: var(--bg-secondary);
}

.expandable-table tr.level-1:hover td {
    background-color: var(--bg-secondary);
}

/* Implementation type tags */
.impl-tag {
    display: inline-block;
    font-size: 0.675rem;
    font-weight: 600;
    padding: 0.1em 0.45em;
    border-radius: 3px;
    margin-left: 0.4em;
    vertical-align: middle;
    letter-spacing: 0.02em;
}
.impl-tag-solidity { background: rgba(25, 135, 84, 0.15); color: #198754; }
.impl-tag-rust { background: rgba(253, 126, 20, 0.15); color: #d56a10; }
.impl-tag-ink { background: rgba(111, 66, 193, 0.15); color: #6f42c1; }

/* Alt implementation rows: subtle left accent */
.expandable-table tr.alt-impl-row td:first-child {
    border-left: 3px solid rgba(253, 126, 20, 0.5);
    padding-left: calc(3.5rem - 3px);
}

/* Table notes */
.table-note {
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin: 0 0 0.5rem 0;
    font-style: italic;
}

/* Implementation range indicator (min–max) below aggregated values */
.impl-range {
    display: block;
    font-size: 0.7rem;
    color: var(--text-secondary);
    font-weight: 400;
    white-space: nowrap;
}

/* Grouped table headers */
.group-header {
    text-align: center !important;
    border-bottom: 2px solid var(--border-color);
    background: var(--bg-card);
    font-weight: 700;
}

.expandable-weight-table-wrapper {
    overflow-x: auto;
}

.expandable-weight-table th,
.expandable-weight-table td {
    padding: 0.5rem 0.5rem;
    font-size: 0.75rem;
    white-space: nowrap;
}

.expandable-weight-table thead tr:first-child th {
    border-bottom: 1px solid var(--border-color);
}

.expandable-weight-table thead tr:first-child th:nth-child(2) {
    border-left: 2px solid var(--border-color);
}

.expandable-weight-table thead tr:first-child th:nth-child(3) {
    border-left: 2px solid var(--border-color);
}

.expandable-weight-table thead tr:first-child th:nth-child(4) {
    border-left: 2px solid var(--border-color);
}

.expandable-weight-table thead tr:last-child th:nth-child(1),
.expandable-weight-table thead tr:last-child th:nth-child(4),
.expandable-weight-table thead tr:last-child th:nth-child(7) {
    border-left: 2px solid var(--border-color);
}

.expandable-weight-table tbody td:nth-child(2),
.expandable-weight-table tbody td:nth-child(5),
.expandable-weight-table tbody td:nth-child(8) {
    border-left: 2px solid var(--border-color);
}

/* Sortable table headers */
.expandable-table th.sortable {
    cursor: pointer;
    user-select: none;
    position: relative;
    padding-right: 1.5rem !important;
}

.expandable-table th.sortable::after {
    content: '⇅';
    position: absolute;
    right: 0.25rem;
    opacity: 0.3;
    font-size: 0.75rem;
}

.expandable-table th.sortable.sort-asc::after {
    content: '↑';
    opacity: 1;
}

.expandable-table th.sortable.sort-desc::after {
    content: '↓';
    opacity: 1;
}

.expandable-table th.sortable:hover {
    background-color: var(--bg-primary);
}

/* Collapsible methodology */
details.methodology {
    margin-top: -0.25rem;
    font-size: 0.8125rem;
    color: var(--text-secondary);
}

details.methodology summary {
    cursor: pointer;
    font-weight: 500;
    color: var(--text-secondary);
    list-style: none;
}

details.methodology summary:hover {
    color: var(--accent-color);
}

details.methodology[open] summary {
    margin-bottom: 0.75rem;
}

details.methodology h4 {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-top: 1rem;
    margin-bottom: 0.375rem;
}

details.methodology h4:first-of-type {
    margin-top: 0.5rem;
}

details.methodology p {
    margin-bottom: 0.5rem;
    line-height: 1.5;
}

details.methodology .source-links {
    margin-top: 0.75rem;
    font-size: 0.75rem;
}

details.methodology table {
    margin-bottom: 0.75rem;
    font-size: 0.8125rem;
}

details.methodology a {
    color: var(--accent-color);
    text-decoration: none;
}

details.methodology a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .container {
        padding: 0.5rem;
    }

    .card {
        padding: 1rem;
    }

    .grid-2, .grid-3 {
        grid-template-columns: 1fr;
    }

    nav ul {
        gap: 0;
    }

    nav a {
        padding: 0.75rem 1rem;
    }

    table {
        font-size: 0.75rem;
    }

    th, td {
        padding: 0.5rem;
    }
}
`
}
