#!/usr/bin/env bash
set -euo pipefail
PROJECT_URL="${PROJECT_URL:-https://neartecmx.vercel.app}"
echo "Probando: $PROJECT_URL"
check(){ local p="$1"; local c; c="$(curl -L -sS -o /dev/null -w "%{http_code}" "$PROJECT_URL$p")"; [ "$c" = "200" ] || { echo "ERROR $p esperado 200, obtuvo $c"; exit 1; }; echo "OK 200 $p"; }
for p in / /landing/ /campanas/ /diagnostico/ /cotizador/ /compunegocio/ /cn7/ /crm/ /web/ /soporte/ /contacto/ /soluciones/; do check "$p"; done
GET="$(curl -L -sS -o /dev/null -w "%{http_code}" "$PROJECT_URL/api/lead")"; [ "$GET" = "405" ] || { echo "ERROR API GET esperado 405, obtuvo $GET"; exit 1; }; echo "OK 405 /api/lead"
R="$(curl -L -sS -X POST "$PROJECT_URL/api/lead" -H 'Content-Type: application/json' -d '{"name":"Prueba NearTec","email":"test@neartec.mx","phone":"6640000000","company":"NearTec Test","service":"Diagnóstico tecnológico","source":"prod-smoke"}')"; echo "$R"; echo "$R"|grep -q '"ok":true' || { echo 'ERROR API POST'; exit 1; }; echo 'OK /api/lead POST'; echo 'Pruebas de producción OK.'
