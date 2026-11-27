#!/usr/bin/env bash
set -euo pipefail

readonly rust_version="1.100.0"
readonly trunk_version="0.22.2"
readonly tools_dir="${TMPDIR:-/tmp}/portfolio-yew-tools"

mkdir -p "$tools_dir"
export PATH="${CARGO_HOME:-$HOME/.cargo}/bin:$tools_dir:$PATH"

if ! command -v rustup >/dev/null 2>&1; then
  curl --fail --silent --show-error --location https://sh.rustup.rs \
    --output "$tools_dir/rustup-init.sh"
  sh "$tools_dir/rustup-init.sh" -y --profile minimal --default-toolchain none
fi

rustup toolchain install "$rust_version" --profile minimal --target wasm32-unknown-unknown
export RUSTUP_TOOLCHAIN="$rust_version"

if ! command -v trunk >/dev/null 2>&1 || [[ "$(trunk --version)" != "trunk $trunk_version" ]]; then
  curl --fail --silent --show-error --location \
    "https://github.com/trunk-rs/trunk/releases/download/v${trunk_version}/trunk-x86_64-unknown-linux-gnu.tar.gz" \
    --output "$tools_dir/trunk.tar.gz"
  tar -xzf "$tools_dir/trunk.tar.gz" -C "$tools_dir" trunk
  export PATH="$tools_dir:$PATH"
fi

trunk build --release --locked --skip-version-check
