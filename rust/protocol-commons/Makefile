CONTRACTS = store log dotns escrow fungible_credential key_registry non_fungible_credential
BUILD_DIR = target/riscv64emac-unknown-none-polkavm/release

.PHONY: all clean $(CONTRACTS)

all: $(CONTRACTS)

$(CONTRACTS):
	cargo build -Zjson-target-spec --release --bin $@
	polkatool link --strip --min-stack-size 65536 $(BUILD_DIR)/$@ -o $@/$@.polkavm

clean:
	cargo clean
	$(foreach c,$(CONTRACTS),rm -f $(c)/$(c).polkavm;)
