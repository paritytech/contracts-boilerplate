import { getCategoryBreakdownHierarchy } from './html-report/queries.ts'

// Check the hierarchy data
const hierarchy = getCategoryBreakdownHierarchy()

console.log('=== Dataset Level ===')
for (const dataset of hierarchy.datasets) {
    const sumPct = Object.values(dataset.categories).reduce((a, b) => a + b, 0)
    console.log(`${dataset.name}: sum of categories = ${sumPct.toFixed(1)}%`)

    if (dataset.name === 'test-contracts') {
        console.log('  Categories:', dataset.categories)
    }
}

console.log('\n=== Contract Level (test-contracts) ===')
const testContracts = hierarchy.datasets.find(d => d.name === 'test-contracts')
if (testContracts) {
    for (const contract of testContracts.contracts) {
        const sumPct = Object.values(contract.categories).reduce((a, b) => a + b, 0)
        console.log(`${contract.name}: sum of categories = ${sumPct.toFixed(1)}%`)
    }
}

console.log('\n=== Transaction Level (Fibonacci) ===')
const fibonacci = testContracts?.contracts.find(c => c.name === 'Fibonacci')
if (fibonacci) {
    for (const tx of fibonacci.transactions) {
        const sumPct = Object.values(tx.categories).reduce((a, b) => a + b, 0)
        console.log(`${tx.name}: sum of categories = ${sumPct.toFixed(1)}%`)
    }
}
