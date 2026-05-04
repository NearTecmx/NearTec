#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail
: "${REPO_URL:?Falta REPO_URL}"
: "${ZIP_PATH:?Falta ZIP_PATH}"
REPO_DIR="${REPO_DIR:-$HOME/neartec-site}"
BRANCH="${BRANCH:-main}"
COMMIT_MESSAGE="${COMMIT_MESSAGE:-Replace NearTec with V3 CodeFirst build}"
[ -d "$REPO_DIR/.git" ] || git clone "$REPO_URL" "$REPO_DIR"
cd "$REPO_DIR"
git fetch --all --prune
git checkout "$BRANCH"
git pull --rebase origin "$BRANCH"
BACKUP_BRANCH="backup/pre-neartec-v3-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BACKUP_BRANCH"
git push -u origin "$BACKUP_BRANCH"
git checkout "$BRANCH"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
unzip -q "$ZIP_PATH" -d "$TMP/new"
SRC="$TMP/new"
if [ ! -f "$SRC/package.json" ]; then
  PKG=$(find "$TMP/new" -maxdepth 3 -name package.json | head -n1)
  SRC=$(dirname "$PKG")
fi
rsync -a --delete --exclude='.git/' --exclude='.vercel/' "$SRC"/ "$REPO_DIR"/
chmod +x scripts/*.sh || true
npm run predeploy:check
npm run smoke
git add -A
git commit -m "$COMMIT_MESSAGE" || true
git push origin "$BRANCH"
echo "Repo actualizado. Backup: $BACKUP_BRANCH"
