#!/usr/bin/env bash
set -euo pipefail
PROJECT_URL="${PROJECT_URL:-https://neartecmx.vercel.app}"
echo "Probando: $PROJECT_URL"
check_200(){ local path="$1"; local code; code="$(curl -L -sS -o /dev/null -w "%{http_code}" "$PROJECT_URL$path")"; if [ "$code" != "200" ]; then echo "ERROR $path esperado 200, obtuvo $code"; exit 1; fi; echo "OK 200 $path"; }
for p in / /landing/ /campanas/ /diagnostico/ /cotizador/ /compunegocio/ /cn7/ /crm/ /web/ /soporte/ /contacto/ /soluciones/; do check_200 "$p"; done
API_GET_CODE="$(curl -L -sS -o /dev/null -w "%{http_code}" "$PROJECT_URL/api/lead")"; if [ "$API_GET_CODE" != "405" ]; then echo "ERROR API GET esperado 405, obtuvo $API_GET_CODE"; exit 1; fi; echo "OK 405 /api/lead"
API_RESPONSE="$(curl -L -sS -X POST "$PROJECT_URL/api/lead" -H "Content-Type: application/json" -d '{"name":"Prueba NearTec","email":"test@neartec.mx","phone":"6640000000","company":"NearTec Test","service":"Diagnóstico tecnológico","source":"prod-smoke"}')"
echo "$API_RESPONSE"; echo "$API_RESPONSE" | grep -q '"ok":true' || { echo 'ERROR API POST no respondió ok:true'; exit 1; }
echo 'OK /api/lead POST'; echo 'Pruebas de producción OK.'
