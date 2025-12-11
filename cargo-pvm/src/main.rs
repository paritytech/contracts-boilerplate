use anyhow::{Context, Result};
use clap::Parser;
use std::{fs, path::PathBuf, process::Command};

/// Build contracts to PolkaVM bytecode
#[derive(Parser, Debug)]
#[command(name = "cargo")]
#[command(bin_name = "cargo")]
enum CargoCli {
    Pvm(PvmArgs),
}

#[derive(Parser, Debug)]
#[command(author, version, about, long_about = None)]
struct PvmArgs {
    /// Path to the contract source file
    #[arg(value_name = "CONTRACT")]
    contract: PathBuf,

    /// Output path for the PolkaVM bytecode (defaults to ./<contract_name>.polkavm)
    #[arg(short, long, value_name = "PATH")]
    output: Option<PathBuf>,

    /// Enable verbose output
    #[arg(short, long)]
    verbose: bool,
}

fn main() -> Result<()> {
    let CargoCli::Pvm(args) = CargoCli::parse();

    if args.verbose {
        println!("Building contract: {}", args.contract.display());
    }

    if !args.contract.exists() {
        anyhow::bail!("Contract file does not exist: {}", args.contract.display());
    }

    let contract_name = args
        .contract
        .file_stem()
        .context("Failed to extract contract name from path")?
        .to_str()
        .context("Invalid UTF-8 in contract name")?;

    if args.verbose {
        println!("Contract name: {}", contract_name);
    }

    let contract_dir = args
        .contract
        .parent()
        .context("Failed to get contract directory")?;

    let build_dir = std::env::current_dir()?.join("target");

    let elf_path = build_contract(
        contract_dir,
        &build_dir,
        contract_name,
        &args.contract,
        args.verbose,
    )?;

    let output_path = args
        .output
        .unwrap_or_else(|| PathBuf::from(format!("./{}.polkavm", contract_name)));

    link_to_polkavm(&elf_path, &output_path, args.verbose)?;

    println!(
        "Successfully built PolkaVM contract: {}",
        output_path.display()
    );

    Ok(())
}

fn find_manifest(start_dir: &std::path::Path) -> Result<Option<PathBuf>> {
    let mut current = start_dir.canonicalize()?;
    loop {
        let manifest = current.join("Cargo.toml");
        if manifest.exists() {
            return Ok(Some(manifest));
        }

        match current.parent() {
            Some(parent) => current = parent.to_path_buf(),
            None => return Ok(None),
        }
    }
}

fn build_contract(
    contract_dir: &std::path::Path,
    build_dir: &PathBuf,
    contract_name: &str,
    _contract_path: &PathBuf,
    verbose: bool,
) -> Result<PathBuf> {
    if verbose {
        println!("Building RISC-V ELF binary...");
    }

    let mut args = polkavm_linker::TargetJsonArgs::default();
    args.is_64_bit = true;

    let target_json = polkavm_linker::target_json_path(args).map_err(|e| anyhow::anyhow!(e))?;

    // Find Cargo.toml in the contract directory or parent directories
    let manifest_path = find_manifest(contract_dir)?
        .context("Could not find Cargo.toml in contract directory or parent directories")?;

    let work_dir = manifest_path.parent().unwrap();

    let mut build_command = Command::new("cargo");
    build_command
        .current_dir(work_dir)
        .env("RUSTC_BOOTSTRAP", "1")
        .env("SKIP_BUILD_SCRIPT", "1")
        .args(["build", "--release", "--manifest-path"])
        .arg(&manifest_path)
        .args([
            "-Zbuild-std=core,alloc",
            "-Zbuild-std-features=panic_immediate_abort",
            "--bin",
        ])
        .arg(contract_name)
        .arg("--target")
        .arg(&target_json);

    if verbose {
        println!("Running: {:?}", build_command);
    }

    let build_res = build_command
        .output()
        .context("Failed to execute cargo build")?;

    if !build_res.status.success() {
        let stderr = String::from_utf8_lossy(&build_res.stderr);
        let stdout = String::from_utf8_lossy(&build_res.stdout);
        eprintln!("{}", stdout);
        eprintln!("{}", stderr);
        anyhow::bail!("Failed to build contract {}", contract_name);
    }

    if verbose {
        let stdout = String::from_utf8_lossy(&build_res.stdout);
        println!("{}", stdout);
    }

    let elf_path = build_dir
        .join("pvm-build/riscv64emac-unknown-none-polkavm/release")
        .join(contract_name);

    if !elf_path.exists() {
        anyhow::bail!("ELF binary was not generated at: {}", elf_path.display());
    }

    Ok(elf_path)
}

fn link_to_polkavm(elf_path: &PathBuf, output_path: &PathBuf, verbose: bool) -> Result<()> {
    if verbose {
        println!("Linking to PolkaVM bytecode...");
    }

    let mut config = polkavm_linker::Config::default();
    config.set_strip(true);
    config.set_optimize(true);

    let elf_bytes =
        fs::read(elf_path).with_context(|| format!("Failed to read ELF from {:?}", elf_path))?;

    let linked = polkavm_linker::program_from_elf(
        config,
        polkavm_linker::TargetInstructionSet::ReviveV1,
        &elf_bytes,
    )
    .map_err(|err| anyhow::anyhow!("Failed to link PolkaVM program: {}", err))?;

    let linked_size = linked.len();

    fs::write(output_path, linked)
        .with_context(|| format!("Failed to write PolkaVM bytecode to {:?}", output_path))?;

    if verbose {
        println!("Wrote {} bytes to {}", linked_size, output_path.display());
    }

    Ok(())
}
