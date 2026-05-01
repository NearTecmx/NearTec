# NearTec Web V4.1 Sales Engine

Sitio Next.js oficial para NearTec enfocado en captación, filtrado, cotización y cierre comercial.

## Incluye

- Diseño V4.1 más tecnológico, claro y comercial.
- Home oficial orientada a leads potenciales.
- Landing publicitaria `/landing`.
- Cotizador `/cotizador` con PDF, scoring y WhatsApp contextual.
- Neary AI + burbuja de WhatsApp.
- API `/api/lead` preparada para `NEARTEC_LEAD_WEBHOOK_URL`.
- Contacto oficial: WhatsApp `664 404 6194` y correo `meta@itimbre.com`.
- Scripts para Termux, GitHub y Vercel.

## Termux

```bash
export REPO_URL="https://github.com/NearTecmx/NearTec.git"
export REPO_DIR="$HOME/neartec-site"
export BRANCH="main"
export ZIP_PATH="/sdcard/Download/NearTec_Web_Pro_2026_V4_1_SalesEngine.zip"

bash scripts/replace-from-zip.sh
```

En Termux se omite `npm run build` local porque Next.js/SWC puede fallar en Android. Vercel hace el build real en Linux.

## Producción

```bash
cd ~/neartec-site
vercel --prod --logs
export PROJECT_URL="https://neartecmx.vercel.app"
bash scripts/vercel-prod-test.sh
```

## Webhook

```bash
vercel env add NEARTEC_LEAD_WEBHOOK_URL production
vercel --prod
```
