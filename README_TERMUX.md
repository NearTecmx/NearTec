# Instalación Termux — NearTec Master 2026 V5 Clean Rebuild

Guarda este ZIP en `/sdcard/Download/NearTec_Master_2026_V5_Clean_Rebuild.zip` y ejecuta el bloque de instalación que te entregue ChatGPT.

## Validación local

```bash
npm install --engine-strict=false
npm run verify
```

## Deploy

```bash
vercel --prod --logs --force
```

## Variable para enviar solicitudes

Configura en Vercel Production:

```txt
NEARTEC_LEAD_ENDPOINT_URL
```

También mantiene compatibilidad con la variable anterior si ya existe.
