import { deploy } from '../tools/lib/index.ts'
import { readBytecode } from '../utils/index.ts'

await deploy({
    name: { name: 'MyToken', mappedTo: 'MyTokenEvm' },
    args: [],
})

await deploy({
    name: { name: 'MyToken', mappedTo: 'MyTokenPvm' },
    args: [],
    bytecodeType: 'polkavm', // Specify `pvm` for PVM bytecode deployment
})
await deploy({
    name: { name: 'MyToken', mappedTo: 'MyTokenInk' },
    args: [],
    bytecode: readBytecode('./ink/ink_erc20/target/ink/ink_erc20.polkavm'),
})

await deploy({
    name: { name: 'MyToken', mappedTo: 'MyTokenRustWithAlloc' },
    args: [],
    bytecode: readBytecode('./rust/contract_with_alloc/contract.polkavm'),
})

await deploy({
    name: { name: 'MyToken', mappedTo: 'MyTokenRustNoAlloc' },
    args: [],
    bytecode: readBytecode('./rust/contract_no_alloc/contract.polkavm'),
})
