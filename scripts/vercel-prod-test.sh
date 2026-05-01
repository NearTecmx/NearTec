#!/data/data/com.termux/files/usr/bin/bash
set -u

: "${PROJECT_URL:?Falta PROJECT_URL. Ejemplo: export PROJECT_URL='https://neartecmx.vercel.app'}"

BASE="${PROJECT_URL%/}"
TMP_DIR="$HOME/neartec-tmp"
TMP_FILE="$TMP_DIR/prod_check_body.txt"
ERR_FILE="$TMP_DIR/prod_check_error.txt"
API_ERR_FILE="$TMP_DIR/api_check_error.txt"

mkdir -p "$TMP_DIR"

echo "Probando: $BASE"

check_code() {
  local expected="$1"
  local path="$2"
  local code

  code="$(curl -L -sS -o "$TMP_FILE" -w "%{http_code}" "$BASE$path" 2>"$ERR_FILE")"
  local curl_exit=$?

  if [ "$curl_exit" -ne 0 ]; then
    echo "ERROR CURL en $path"
    cat "$ERR_FILE"
    exit 23
  fi

  if [ "$code" != "$expected" ]; then
    echo "ERROR: $path esperaba $expected y respondió $code"
    echo "Respuesta:"
    cat "$TMP_FILE"
    exit 23
  fi

  echo "OK $code $path"
}

check_code 200 "/"
check_code 200 "/landing"
check_code 200 "/landing/"
check_code 200 "/landing-diagnostico.html"
check_code 200 "/assets/data/pricing.json"
check_code 200 "/assets/data/lead-rules.json"
check_code 405 "/api/lead"

api_response="$(curl -sS -X POST "$BASE/api/lead" \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Prueba NearTec",
    "email":"test@neartec.mx",
    "phone":"6640000000",
    "company":"NearTec Test",
    "service":"Diagnóstico comercial",
    "score":85,
    "source":"termux-production-test"
  }' 2>"$API_ERR_FILE")"

api_exit=$?

if [ "$api_exit" -ne 0 ]; then
  echo "ERROR CURL en POST /api/lead"
  cat "$API_ERR_FILE"
  exit 25
fi

api_ok="$(echo "$api_response" | jq -r '.ok // "false"' 2>/dev/null || echo "false")"

if [ "$api_ok" != "true" ]; then
  echo "ERROR: /api/lead POST no respondió ok=true"
  echo "$api_response" | jq . 2>/dev/null || echo "$api_response"
  exit 25
fi

echo "OK /api/lead POST"
echo "$api_response" | jq .

echo "Pruebas de producción OK."
