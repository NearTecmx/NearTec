# NearTec Web V4 Sales Engine

Versión V4 basada en el proyecto original Next.js, con rediseño tecnológico claro, no dominado por negro, orientado a leads y ventas.

## Incluye
- Home comercial oficial
- Landing `/landing`
- Cotizador `/cotizador`
- Neary AI + WhatsApp flotante
- API `/api/lead` lista para webhook real
- Rutas de solución: CompuNegocio, CN7, CRM, Web, Soporte
- SEO técnico, robots, sitemap y metadata
- Scripts Termux/Vercel

## Pruebas
```bash
npm run predeploy:check
npm run smoke
npm run build
```

## Reemplazo desde Termux
```bash
export REPO_URL="https://github.com/NearTecmx/NearTec.git"
export REPO_DIR="$HOME/neartec-site"
export BRANCH="main"
export ZIP_PATH="/sdcard/Download/NearTec_Web_Pro_2026_V4_SalesEngine.zip"
bash scripts/replace-from-zip.sh
```
