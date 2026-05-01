#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

pkg update -y
pkg upgrade -y
pkg install -y git nodejs-lts unzip rsync openssh curl jq python nano
npm i -g vercel

git config --global init.defaultBranch main

echo "Termux listo. Versiones:"
git --version
node --version
npm --version
vercel --version
