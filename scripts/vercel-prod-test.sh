#!/usr/bin/env bash
set -euo pipefail
PROJECT_URL="${PROJECT_URL:-https://neartecmx.vercel.app}"
echo "Probando: $PROJECT_URL"
check(){ local p="$1"; local code; code="$(curl -L -sS -o /dev/null -w "%{http_code}" "$PROJECT_URL$p")"; [ "$code" = "200" ] || { echo "ERROR $p esperado 200, obtuvo $code"; exit 1; }; echo "OK 200 $p"; }
for p in / /landing/ /campanas/ /cotizador/ /compunegocio/ /cn7/ /crm/ /web/ /contacto/ /soluciones/ /soporte/; do check "$p"; done
GET_CODE="$(curl -L -sS -o /dev/null -w "%{http_code}" "$PROJECT_URL/api/lead")"; [ "$GET_CODE" = "405" ] || { echo "ERROR API GET esperado 405, obtuvo $GET_CODE"; exit 1; }; echo "OK 405 /api/lead"
RESP="$(curl -L -sS -X POST "$PROJECT_URL/api/lead" -H "Content-Type: application/json" -d '{"name":"Prueba NearTec","email":"test@neartec.mx","phone":"6640000000","company":"NearTec Test","service":"Diagnóstico tecnológico","message":"","source":"prod-smoke","score":85}')"; echo "$RESP"; echo "$RESP" | grep -q '"ok":true' || { echo "ERROR API POST no respondió ok:true"; exit 1; }
echo "OK /api/lead POST"; echo "Pruebas de producción OK."
