CONTRACTS = store log dotns escrow fungible_credential key_registry non_fungible_credential
BUILD_DIR = target/riscv64emac-unknown-none-polkavm/release

.PHONY: all clean $(CONTRACTS)

all: $(CONTRACTS)

$(CONTRACTS):
	RUSTC_BOOTSTRAP=1 cargo +nightly build --release --bin $@
	polkatool link --strip --min-stack-size 65536 $(BUILD_DIR)/$@ -o $@/$@.polkavm

clean:
	cargo +nightly clean
	$(foreach c,$(CONTRACTS),rm -f $(c)/$(c).polkavm;)
