#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

PROJECT_URL="${PROJECT_URL:-}"

if [ -z "$PROJECT_URL" ]; then
  echo "No definiste PROJECT_URL. Se intentará desplegar con Vercel CLI."
  PROJECT_URL="$(vercel --prod --yes | tail -n 1)"
fi

PROJECT_URL="${PROJECT_URL%/}"
echo "Probando: $PROJECT_URL"

for path in / /landing /landing-diagnostico.html /assets/data/pricing.json /assets/data/lead-rules.json; do
  code=$(curl -L -s -o /tmp/neartec-vercel-body -w '%{http_code}' "$PROJECT_URL$path")
  if [ "$code" != "200" ]; then
    echo "ERROR: $PROJECT_URL$path respondió HTTP $code"
    exit 1
  fi
  echo "OK $path HTTP $code"
done

API_RESPONSE="$(curl -L -s -X POST "$PROJECT_URL/api/lead" \
  -H 'Content-Type: application/json' \
  -d '{"input":{"company":"QA NearTec","name":"Prueba Vercel","phone":"6640000000","service":"compunegocio"},"quote":{"monthlyMxn":450},"lead":{"score":82,"label":"Lead caliente"}}')"

echo "$API_RESPONSE" | jq .
if ! echo "$API_RESPONSE" | jq -e '.ok == true' >/dev/null; then
  echo "ERROR: API /api/lead no respondió ok=true"
  exit 1
fi

echo "Vercel smoke OK."
