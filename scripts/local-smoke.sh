#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail
PORT="${PORT:-8080}"
BASE="http://127.0.0.1:${PORT}"

npm run predeploy:check
node scripts/smoke-test.mjs
node scripts/test-api-local.mjs

python3 -m http.server "$PORT" >/tmp/neartec-local-server.log 2>&1 &
PID=$!
cleanup() { kill "$PID" >/dev/null 2>&1 || true; }
trap cleanup EXIT
sleep 2

for path in / /landing-diagnostico.html /assets/css/styles.css /assets/js/app.js /assets/data/pricing.json /assets/data/lead-rules.json /assets/img/neartec-logo.jpg; do
  code=$(curl -L -s -o /tmp/neartec-smoke-body -w '%{http_code}' "$BASE$path")
  if [ "$code" != "200" ]; then
    echo "ERROR: $path respondió HTTP $code"
    exit 1
  fi
  echo "OK $path HTTP $code"
done

echo "Local smoke OK. Abre $BASE en el navegador del teléfono si quieres revisar UI."
