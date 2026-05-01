#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

: "${PROJECT_URL:?Falta PROJECT_URL. Ejemplo: export PROJECT_URL='https://neartecmx.vercel.app'}"

BASE="${PROJECT_URL%/}"

echo "Probando: $BASE"

check_code() {
  local expected="$1"
  local path="$2"
  local code

  code="$(curl -L -s -o /tmp/neartec_prod_check.txt -w "%{http_code}" "$BASE$path")"

  if [ "$code" != "$expected" ]; then
    echo "ERROR: $path esperaba $expected y respondió $code"
    echo "Respuesta:"
    cat /tmp/neartec_prod_check.txt
    exit 23
  fi

  echo "OK $code $path"
}

check_code 200 "/"
check_code 200 "/landing"
check_code 200 "/landing-diagnostico.html"
check_code 200 "/assets/data/pricing.json"
check_code 200 "/assets/data/lead-rules.json"

api_get_code="$(curl -L -s -o /tmp/neartec_api_get.txt -w "%{http_code}" "$BASE/api/lead")"
if [ "$api_get_code" != "405" ]; then
  echo "ERROR: /api/lead por GET esperaba 405 y respondió $api_get_code"
  cat /tmp/neartec_api_get.txt
  exit 24
fi
echo "OK 405 /api/lead GET protegido"

api_response="$(curl -s -X POST "$BASE/api/lead" \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Prueba NearTec",
    "email":"test@neartec.mx",
    "phone":"6640000000",
    "company":"NearTec Test",
    "service":"Diagnóstico comercial",
    "score":85,
    "source":"termux-production-test"
  }')"

api_ok="$(echo "$api_response" | jq -r '.ok')"

if [ "$api_ok" != "true" ]; then
  echo "ERROR: /api/lead POST no respondió ok=true"
  echo "$api_response" | jq
  exit 25
fi

echo "OK /api/lead POST"
echo "$api_response" | jq

echo "Pruebas de producción OK."
