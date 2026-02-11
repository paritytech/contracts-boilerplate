// Opcode category mapping for EVM opcodes and PVM syscalls
export const OPCODE_CATEGORIES: Record<string, string[]> = {
    'Arithmetic': ['ADD', 'SUB', 'MUL', 'DIV', 'MOD', 'SDIV', 'SMOD'],
    'Bitwise': ['OR', 'XOR', 'AND', 'SHL', 'SHR', 'SAR', 'BYTE', 'NOT'],
    'Comparison': ['LT', 'GT', 'EQ', 'ISZERO', 'SLT', 'SGT'],
    'Math': ['ADDMOD', 'MULMOD', 'EXP', 'SIGNEXTEND'],
    'Crypto': [
        'KECCAK256', 'SHA3',
        // PVM syscalls
        'hash_keccak_256',
    ],
    'Memory': ['MLOAD', 'MSTORE', 'MSTORE8', 'MSIZE', 'MCOPY'],
    'Storage': [
        'SLOAD', 'SSTORE', 'TLOAD', 'TSTORE',
        // PVM syscalls
        'get_storage', 'set_storage', 'get_storage_or_zero', 'set_storage_or_clear',
    ],
    'Calldata': [
        'CALLDATALOAD', 'CALLDATASIZE', 'CALLDATACOPY',
        // PVM syscalls
        'call_data_load', 'call_data_size', 'call_data_copy',
    ],
    'Context': [
        'ADDRESS', 'CALLER', 'ORIGIN', 'CHAINID', 'GASPRICE', 'GASLIMIT',
        'COINBASE', 'BLOCKHASH', 'NUMBER', 'TIMESTAMP', 'BASEFEE', 'PREVRANDAO',
        'BLOBHASH', 'BLOBBASEFEE',
        // PVM syscalls
        'address', 'caller', 'origin', 'chain_id', 'gas_price', 'gas_limit',
        'block_author', 'block_hash', 'block_number', 'now', 'base_fee',
    ],
    'Ether/Gas': [
        'GAS', 'CALLVALUE', 'BALANCE', 'SELFBALANCE',
        // PVM syscalls
        'ref_time_left', 'value_transferred', 'balance', 'balance_of',
    ],
    'Events': [
        'LOG0', 'LOG1', 'LOG2', 'LOG3', 'LOG4',
        // PVM syscalls
        'deposit_event',
    ],
    'Calls': [
        'CALL', 'STATICCALL', 'DELEGATECALL', 'CALLCODE',
        // PVM syscalls
        'call_evm', 'delegate_call_evm',
    ],
    'Creation': [
        'CREATE', 'CREATE2',
        // PVM syscalls
        'instantiate',
    ],
    'Return': [
        'RETURN', 'REVERT', 'STOP', 'INVALID', 'SELFDESTRUCT',
        // PVM syscalls
        'seal_return', 'consume_all_gas', 'terminate',
    ],
    'Return Data': [
        'RETURNDATASIZE', 'RETURNDATACOPY',
        // PVM syscalls
        'return_data_size', 'return_data_copy',
    ],
    'Code': [
        'CODESIZE', 'CODECOPY', 'EXTCODESIZE', 'EXTCODECOPY', 'EXTCODEHASH',
        // PVM syscalls
        'code_size', 'code_hash',
    ],
    'Immutables': [
        'LOADIMMUTABLE', 'SETIMMUTABLE',
        // PVM syscalls
        'get_immutable_data', 'set_immutable_data',
    ],
    'Stack': [
        'POP', 'PUSH0', 'PUSH1', 'PUSH2', 'PUSH3', 'PUSH4', 'PUSH5', 'PUSH6',
        'PUSH7', 'PUSH8', 'PUSH9', 'PUSH10', 'PUSH11', 'PUSH12', 'PUSH13',
        'PUSH14', 'PUSH15', 'PUSH16', 'PUSH17', 'PUSH18', 'PUSH19', 'PUSH20',
        'PUSH21', 'PUSH22', 'PUSH23', 'PUSH24', 'PUSH25', 'PUSH26', 'PUSH27',
        'PUSH28', 'PUSH29', 'PUSH30', 'PUSH31', 'PUSH32',
        'DUP1', 'DUP2', 'DUP3', 'DUP4', 'DUP5', 'DUP6', 'DUP7', 'DUP8',
        'DUP9', 'DUP10', 'DUP11', 'DUP12', 'DUP13', 'DUP14', 'DUP15', 'DUP16',
        'SWAP1', 'SWAP2', 'SWAP3', 'SWAP4', 'SWAP5', 'SWAP6', 'SWAP7', 'SWAP8',
        'SWAP9', 'SWAP10', 'SWAP11', 'SWAP12', 'SWAP13', 'SWAP14', 'SWAP15', 'SWAP16',
    ],
    'Control Flow': ['JUMP', 'JUMPI', 'JUMPDEST', 'PC'],
}

// Build reverse mapping: opcode -> category (case-insensitive)
const OPCODE_TO_CATEGORY: Record<string, string> = {}
for (const [category, opcodes] of Object.entries(OPCODE_CATEGORIES)) {
    for (const opcode of opcodes) {
        OPCODE_TO_CATEGORY[opcode.toLowerCase()] = category
    }
}

export function getOpcodeCategory(opcode: string | null): string {
    if (!opcode) return 'Unknown'
    return OPCODE_TO_CATEGORY[opcode.toLowerCase()] ?? 'Other'
}
