#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail
PORT="${PORT:-8080}"
python -m http.server "$PORT" >/tmp/neartec-v3-http.log 2>&1 &
PID=$!
trap 'kill $PID 2>/dev/null || true' EXIT
sleep 1
for path in / /landing/ /diagnostico/ /cotizador/ /assets/data/pricing.json; do
  code=$(curl -L -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:$PORT$path")
  echo "$code $path"
  [ "$code" = "200" ] || exit 23
done
echo "Local smoke OK: http://127.0.0.1:$PORT"
