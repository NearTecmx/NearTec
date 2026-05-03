# NearTec Master 2026 V2 Complete

Sitio estático compatible con Vercel + funciones `/api`.

## Validar

```bash
npm install --engine-strict=false
npm run verify
```

## Desplegar

```bash
vercel --prod --logs --force
export PROJECT_URL="https://neartecmx.vercel.app"
bash scripts/vercel-prod-test.sh
```

## Webhook

Configurar `NEARTEC_LEAD_WEBHOOK_URL` en Vercel Production para enviar solicitudes a CRM, Make, n8n, Google Sheets o backend propio.
