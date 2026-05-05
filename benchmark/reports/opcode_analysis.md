# Opcode Analysis

Generated on: 2026-04-22

> **Unattributed** = `weight_consumed_ref_time - SUM(step weights)`. For **EVM** contracts this is near zero (~46 ps/byte of bytecode from code loading). For **PVM** contracts this is the RISC-V interpreter overhead between syscalls — the fuel burned executing PolkaVM instructions that are not traced individually.

