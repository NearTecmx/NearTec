#!/usr/bin/env bash
set -euo pipefail
URL="${PROJECT_URL:-https://neartecmx.vercel.app}"
echo "Probando: $URL"
for p in / /landing/ /cotizador/ /compunegocio/ /cn7/ /crm/ /web/ /contacto/; do
  code=$(curl -L -s -o /dev/null -w "%{http_code}" "$URL$p")
  [ "$code" = "200" ] || { echo "ERROR $code $p"; exit 1; }
  echo "OK 200 $p"
done
code=$(curl -L -s -o /dev/null -w "%{http_code}" "$URL/api/lead")
[ "$code" = "405" ] || { echo "ERROR esperado 405 en GET /api/lead, recibí $code"; exit 1; }
echo "OK 405 /api/lead"
curl -L -s -X POST "$URL/api/lead" -H 'Content-Type: application/json' -d '{"name":"Prueba NearTec","email":"test@neartec.mx","phone":"6640000000","company":"NearTec Test","service":"Diagnóstico tecnológico","source":"prod-smoke","score":85}'
echo "\nPruebas de producción OK."
