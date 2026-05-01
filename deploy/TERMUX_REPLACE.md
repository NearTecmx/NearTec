# Sustitución V4 desde Termux

1. Copia el ZIP a `/sdcard/Download/`.
2. En Termux:

```bash
pkg update -y
pkg install -y git nodejs-lts unzip rsync curl jq openssh nano
npm i -g vercel

mkdir -p ~/neartec-v4
cd ~/neartec-v4
unzip -o /sdcard/Download/NearTec_Web_Pro_2026_V4_SalesEngine.zip
npm run predeploy:check
npm run smoke

export REPO_URL="https://github.com/NearTecmx/NearTec.git"
export REPO_DIR="$HOME/neartec-site"
export BRANCH="main"
export ZIP_PATH="/sdcard/Download/NearTec_Web_Pro_2026_V4_SalesEngine.zip"
bash scripts/replace-from-zip.sh

cd ~/neartec-site
vercel --prod
export PROJECT_URL="https://neartecmx.vercel.app"
bash scripts/vercel-prod-test.sh
```
