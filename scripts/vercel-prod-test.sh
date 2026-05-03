#!/usr/bin/env bash
set -euo pipefail
PROJECT_URL="${PROJECT_URL:-https://neartecmx.vercel.app}"
echo "Probando: $PROJECT_URL"
check_200(){ code="$(curl -L -sS -o /dev/null -w "%{http_code}" "$PROJECT_URL$1")"; [ "$code" = "200" ] || { echo "ERROR $1 esperado 200, obtuvo $code"; exit 1; }; echo "OK 200 $1"; }
for p in / /landing/ /campanas/ /cotizador/ /compunegocio/ /cn7/ /crm/ /web/ /contacto/ /soluciones/ /soporte/; do check_200 "$p"; done
code="$(curl -L -sS -o /dev/null -w "%{http_code}" "$PROJECT_URL/api/lead")"; [ "$code" = "405" ] || { echo "ERROR API GET esperado 405, obtuvo $code"; exit 1; }; echo "OK 405 /api/lead"
resp="$(curl -L -sS -X POST "$PROJECT_URL/api/lead" -H "Content-Type: application/json" -d '{"name":"Prueba NearTec","email":"test@neartec.mx","phone":"6640000000","company":"NearTec Test","service":"Diagnóstico tecnológico","source":"prod-smoke"}')"; echo "$resp"; echo "$resp" | grep -q '"ok":true' || { echo "ERROR API POST"; exit 1; }; echo "OK /api/lead POST"; echo "Pruebas de producción OK."
