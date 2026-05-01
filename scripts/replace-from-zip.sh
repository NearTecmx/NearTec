#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

: "${REPO_URL:?Falta REPO_URL. Ejemplo: export REPO_URL='https://github.com/usuario/repo.git'}"
: "${ZIP_PATH:?Falta ZIP_PATH. Ejemplo: export ZIP_PATH='/sdcard/Download/NearTec_Web_Pro_2026_VercelReady_v2_Termux.zip'}"
REPO_DIR="${REPO_DIR:-$HOME/neartec-site}"
BRANCH="${BRANCH:-main}"
COMMIT_MESSAGE="${COMMIT_MESSAGE:-Replace NearTec site with Vercel-ready build}"

if [ ! -f "$ZIP_PATH" ]; then
  echo "ERROR: No existe ZIP_PATH: $ZIP_PATH"
  exit 1
fi

if [ ! -d "$REPO_DIR/.git" ]; then
  git clone "$REPO_URL" "$REPO_DIR"
fi

cd "$REPO_DIR"
git fetch --all --prune
git checkout "$BRANCH"
git pull --rebase origin "$BRANCH"

BACKUP_BRANCH="backup/pre-neartec-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BACKUP_BRANCH"
git push -u origin "$BACKUP_BRANCH"
git checkout "$BRANCH"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
unzip -q "$ZIP_PATH" -d "$TMP/new"

if [ -f "$TMP/new/package.json" ]; then
  SRC="$TMP/new"
else
  PACKAGE_PATH="$(find "$TMP/new" -maxdepth 3 -name package.json | head -n 1 || true)"
  if [ -z "$PACKAGE_PATH" ]; then
    echo "ERROR: El ZIP no contiene package.json. No se reemplazó nada."
    exit 1
  fi
  SRC="$(dirname "$PACKAGE_PATH")"
fi

rsync -a --delete --exclude='.git/' --exclude='.vercel/' "$SRC"/ "$REPO_DIR"/

npm run predeploy:check
node scripts/smoke-test.mjs
node scripts/test-api-local.mjs

git status --short
git add -A
if git diff --cached --quiet; then
  echo "No hay cambios nuevos para commit."
else
  git commit -m "$COMMIT_MESSAGE"
  git push origin "$BRANCH"
fi

echo "Repo actualizado en $REPO_DIR. Backup remoto: $BACKUP_BRANCH"
