#!/data/data/com.termux/files/usr/bin/bash
set -u
: "${PROJECT_URL:?Falta PROJECT_URL. Ejemplo: export PROJECT_URL='https://neartecmx.vercel.app'}"
BASE="${PROJECT_URL%/}"; TMP_DIR="$HOME/neartec-tmp"; mkdir -p "$TMP_DIR"
echo "Probando: $BASE"
check(){ expected="$1"; path="$2"; code=$(curl -L -sS -o "$TMP_DIR/body.txt" -w "%{http_code}" "$BASE$path" 2>"$TMP_DIR/err.txt"); if [ "$code" != "$expected" ]; then echo "ERROR $path esperaba $expected y respondió $code"; cat "$TMP_DIR/body.txt"; exit 23; fi; echo "OK $code $path"; }
check 200 /
check 200 /landing
check 200 /landing/
check 200 /diagnostico/
check 200 /cotizador/
check 200 /assets/data/pricing.json
check 405 /api/lead
api=$(curl -sS -X POST "$BASE/api/lead" -H "Content-Type: application/json" -d '{"name":"Prueba NearTec","email":"test@neartec.mx","phone":"6640000000","company":"NearTec Test","service":"Diagnóstico comercial","score":85,"source":"termux-production-test"}')
ok=$(echo "$api" | jq -r '.ok // "false"')
[ "$ok" = "true" ] || { echo "$api" | jq .; exit 25; }
echo "OK /api/lead POST"; echo "$api" | jq .; echo "Pruebas de producción OK."
