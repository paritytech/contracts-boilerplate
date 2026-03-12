import type { Artifacts } from './lib.ts'

// Import contract definitions
import { testContracts } from './contracts/test-contracts.ts'
import { ethereumContracts } from './contracts/ethereum-contracts.ts'
import { protocolCommonsContracts } from './contracts/protocol-commons-contracts.ts'
import { hackm3Contracts } from './contracts/hackm3-contracts.ts'
import { w3sContracts } from './contracts/w3s-contracts.ts'
import { mark3tContracts } from './contracts/mark3t-contracts.ts'

/**
 * Dataset mapping: dataset name -> contract artifacts
 * The keys define the hierarchy used in the HTML report.
 * Adding contracts to any of these arrays automatically updates the report.
 */
export const datasets: Record<string, Artifacts> = {
    'test-contracts': testContracts,
    'ethereum-contracts': ethereumContracts,
    'polkadot-contracts': [
        ...protocolCommonsContracts,
        ...hackm3Contracts,
        ...w3sContracts,
        ...mark3tContracts,
    ],
}

/**
 * Dataset categories: dataset name -> contract IDs.
 * Derived from the actual contract definitions — importable by any script
 * without requiring a running RPC node.
 */
export const datasetCategories: Record<string, string[]> = Object.fromEntries(
    Object.entries(datasets).map(([name, artifacts]) => [
        name,
        artifacts.map((a) => a.id),
    ]),
)

export { mark3tContracts }
