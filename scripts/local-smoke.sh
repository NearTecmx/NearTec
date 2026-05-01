#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail
PORT="${PORT:-8080}"
npm run build
npm run start -- -p "$PORT" &
PID=$!
trap 'kill $PID 2>/dev/null || true' EXIT
sleep 5
curl -L -sS -o /dev/null -w 'Home %{http_code}
' "http://127.0.0.1:$PORT/"
curl -L -sS -o /dev/null -w 'Landing %{http_code}
' "http://127.0.0.1:$PORT/landing"
