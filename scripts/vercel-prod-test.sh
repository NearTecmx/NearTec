#!/usr/bin/env bash
set -euo pipefail
PROJECT_URL="${PROJECT_URL:-https://neartecmx.vercel.app}"
echo "Probando: $PROJECT_URL"
for path in / /landing/ /campanas/ /cotizador/ /compunegocio/ /cn7/ /crm/ /web/ /contacto/ /soluciones/ /soporte/; do
  code="$(curl -s -o /dev/null -w '%{http_code}' "$PROJECT_URL$path")"
  if [ "$code" != "200" ]; then echo "ERROR $code $path"; exit 1; fi
  echo "OK 200 $path"
done
code="$(curl -s -o /dev/null -w '%{http_code}' "$PROJECT_URL/api/lead")"
if [ "$code" != "405" ]; then echo "ERROR API GET esperado 405, obtuvo $code"; exit 1; fi
echo "OK 405 /api/lead"
curl -s -X POST "$PROJECT_URL/api/lead" -H 'Content-Type: application/json' -d '{"name":"Prueba NearTec","email":"test@neartec.mx","phone":"6640000000","company":"NearTec Test","service":"Diagnóstico tecnológico","source":"prod-smoke","score":85}'
echo ""
echo "Pruebas de producción OK."
