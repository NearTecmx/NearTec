#!/usr/bin/env bash
set -euo pipefail

PROJECT_URL="${PROJECT_URL:-https://neartecmx.vercel.app}"

echo "Probando: $PROJECT_URL"

for path in "/" "/landing/" "/campanas/" "/cotizador/" "/compunegocio/" "/cn7/"; do
  code="$(curl -L -s -o /dev/null -w "%{http_code}" "$PROJECT_URL$path")"
  if [ "$code" != "200" ]; then
    echo "ERROR $code $path"
    exit 1
  fi
  echo "OK 200 $path"
done

api_get="$(curl -L -s -o /dev/null -w "%{http_code}" "$PROJECT_URL/api/lead")"
if [ "$api_get" != "405" ] && [ "$api_get" != "200" ]; then
  echo "ERROR /api/lead GET $api_get"
  exit 1
fi
echo "OK $api_get /api/lead"

api_post="$(curl -L -s "$PROJECT_URL/api/lead" \
  -H "content-type: application/json" \
  -d '{"name":"Prueba NearTec","email":"test@neartec.mx","phone":"6640000000","company":"NearTec Test","service":"Diagnóstico tecnológico","message":"","source":"termux-production-test","score":85}')"

echo "$api_post"

echo "$api_post" | grep -q '"ok":true' || {
  echo "ERROR: API POST no regresó ok true"
  exit 1
}

echo "Pruebas de producción OK."
