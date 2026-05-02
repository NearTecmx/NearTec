# NearTec Web V4.7 — Technology Integrator System

Versión enfocada en NearTec como integrador tecnológico: desarrollo web, apps, automatización, CRM, IA, CompuNegocio, CN7, nube, hosting, VPS, correo, soporte, timbres y desarrollo a medida.

## Validación

```bash
npm install --engine-strict=false
npm run predeploy:check
npm run smoke
npm run type-check
```

## Deploy

```bash
vercel --prod --logs
export PROJECT_URL="https://neartecmx.vercel.app"
bash scripts/vercel-prod-test.sh
```

## Leads reales

Configurar en Vercel:

```bash
NEARTEC_LEAD_WEBHOOK_URL=https://...
```
