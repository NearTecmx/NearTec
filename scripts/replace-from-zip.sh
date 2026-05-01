#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail
: "${REPO_URL:?Falta REPO_URL}"
: "${ZIP_PATH:?Falta ZIP_PATH}"
REPO_DIR="${REPO_DIR:-$HOME/neartec-site}"
BRANCH="${BRANCH:-main}"
COMMIT_MESSAGE="${COMMIT_MESSAGE:-Replace NearTec with V4 sales engine}"
if [ ! -d "$REPO_DIR/.git" ]; then git clone "$REPO_URL" "$REPO_DIR"; fi
cd "$REPO_DIR"; git fetch --all --prune; git checkout "$BRANCH"; git pull --rebase origin "$BRANCH"
BACKUP_BRANCH="backup/pre-v4-$(date +%Y%m%d-%H%M%S)"; git checkout -b "$BACKUP_BRANCH"; git push -u origin "$BACKUP_BRANCH"; git checkout "$BRANCH"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT
unzip -q "$ZIP_PATH" -d "$TMP/new"
SRC="$TMP/new"; if [ ! -f "$SRC/package.json" ]; then PACKAGE_PATH=$(find "$SRC" -maxdepth 3 -name package.json | head -n 1); SRC=$(dirname "$PACKAGE_PATH"); fi
rsync -a --delete --exclude='.git/' --exclude='.vercel/' "$SRC"/ "$REPO_DIR"/
chmod +x scripts/*.sh || true
npm run predeploy:check; npm run smoke; if [ -n "${PREFIX:-}" ] && echo "$PREFIX" | grep -q "com.termux"; then
  echo "Termux/Android detectado: se omite npm run build local porque Next.js SWC no compila bien en Android. Vercel hará el build en Linux."
else
  npm run build
fi
git add -A
if git diff --cached --quiet; then echo 'No hay cambios nuevos.'; else git commit -m "$COMMIT_MESSAGE"; git push origin "$BRANCH"; fi
echo "Repo actualizado en $REPO_DIR"; echo "Backup remoto: $BACKUP_BRANCH"
