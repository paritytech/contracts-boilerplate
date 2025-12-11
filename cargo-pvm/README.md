# cargo-pvm

A cargo subcommand to build Rust contracts to PolkaVM bytecode.

## Installation

```bash
cd /home/pg/github/contracts-boilerplate/cargo-pvm
cargo install --path .
```

Alternatively, you can run it directly from the target directory:

```bash
/home/pg/github/contracts-boilerplate/cargo-pvm/target/release/cargo-pvm pvm [OPTIONS]
```

## Usage

Once installed, you can use it as a cargo subcommand:

```bash
cargo pvm <CONTRACT_PATH>
```

### Options

- `<CONTRACT>` - Path to the contract source file (positional, required)
- `-o, --output <PATH>` - Output path for the PolkaVM bytecode (defaults to `./<contract_name>.polkavm`)
- `-v, --verbose` - Enable verbose output
- `-h, --help` - Print help
- `-V, --version` - Print version

### Examples

Build a contract with default output:

```bash
cargo pvm src/contract_with_alloc.rs
```

Build with custom output path:

```bash
cargo pvm src/contract_with_alloc.rs -o my_contract.polkavm
```

Build with verbose output:

```bash
cargo pvm src/contract_with_alloc.rs --verbose
```

## How It Works

1. Searches for a `Cargo.toml` in the contract's directory or parent directories
2. Builds the contract to RISC-V ELF using the PolkaVM target
3. Links the ELF binary to PolkaVM bytecode using `polkavm-linker`
4. Outputs the final bytecode to the specified path

The tool automatically:
- Uses `-Zbuild-std=core,alloc` for minimal binary size
- Enables panic_immediate_abort for smaller binaries
- Strips and optimizes the final bytecode
- Targets the ReviveV1 instruction set

## Requirements

- Rust nightly toolchain
- PolkaVM linker dependencies
