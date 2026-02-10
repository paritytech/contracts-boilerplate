# Protocol Commons - Escrow Contract Makefile

.PHONY: all build link clean

CARGO = cargo +nightly
POLKATOOL = polkatool

TARGET_JSON = ../../riscv64emac-unknown-none-polkavm.json
BUILD_DIR = target/riscv64emac-unknown-none-polkavm/release
CONTRACT_NAME = escrow
OUTPUT = $(CONTRACT_NAME).polkavm

all: build link

build:
	RUSTC_BOOTSTRAP=1 $(CARGO) build --release --target $(TARGET_JSON)

link: build
	$(POLKATOOL) link --strip --min-stack-size 65536 $(BUILD_DIR)/$(CONTRACT_NAME) -o $(OUTPUT)

clean:
	$(CARGO) clean
	rm -f $(OUTPUT)
