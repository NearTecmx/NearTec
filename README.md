# NearTec Web Pro

Sitio estático premium para NearTec con landing publicitaria, cotizador, scoring de leads, PDF descargable y rutas de contacto con contexto.

## Estado de despliegue

Preparado para GitHub y Vercel. La raíz del repositorio debe ser esta carpeta, donde viven `index.html`, `landing-diagnostico.html`, `package.json` y `vercel.json`.

- Frontend: estático, listo para Vercel.
- API Vercel: `api/lead.js`, lista para recibir leads y reenviarlos a un webhook real.
- PHP opcional: movido a `backend/php/`, solo para hosting tradicional con PHP.
- Configuración Vercel: `vercel.json` con clean URLs, headers, rewrite `/landing` y salida desde raíz.

Ver guía completa en `DEPLOY_VERCEL.md`.

## Qué incluye

- `index.html`: home comercial + cotizador + precios documentados.
- `landing-diagnostico.html`: landing de pauta para diagnóstico comercial-operativo.
- `assets/css/styles.css`: diseño responsive, VFX visuales, accesibilidad y mobile-first.
- `assets/js/app.js`: cotizador, scoring, exportación CSV, WhatsApp y manejo de leads local.
- `assets/js/pdf-engine.js`: generación real de PDF en navegador sin librerías externas.
- `assets/data/pricing.json`: precios documentados de CompuNegocio, CN7 e iTimbre.
- `assets/data/lead-rules.json`: reglas de calificación basadas en perfiles de prospecto.
- `api/lead.js`: endpoint Vercel opcional para reenviar leads a webhook real.
- `backend/php/lead.php`: endpoint PHP opcional para hosting tradicional.
- `docs/`: topología, tracking, SEO/Lighthouse y análisis de fuentes.

## Cómo probar localmente

```bash
npm run predeploy:check
python3 -m http.server 8080
```

Abrir:

- `http://localhost:8080/`
- `http://localhost:8080/landing-diagnostico.html`

## Publicación rápida en Vercel

1. Crear repo en GitHub.
2. Subir el contenido de esta carpeta como raíz del repo.
3. Importar repo en Vercel.
4. Framework Preset: `Other` o automático.
5. Build Command: vacío/null por `vercel.json`.
6. Output Directory: `.` por `vercel.json`.
7. Deploy.

## Endpoint de leads

Sin backend, el sitio sigue funcionando: guarda leads en `localStorage`, exporta CSV, descarga PDF y abre WhatsApp/correo con resumen.

Para envío real desde Vercel:

1. Crear variable `NEARTEC_LEAD_WEBHOOK_URL` en Vercel.
2. Apuntarla a Make, Zapier, n8n, Google Apps Script, CRM o backend propio.
3. Opcional: definir `ALLOWED_ORIGIN=https://neartec.com`.
4. Activar la casilla “Intentar enviar al endpoint” en el cotizador.

## Regla comercial importante

Los precios de web, hosting, VPS, correo, emailing, CRM y automatización no se inventaron. Se marcan como servicios por alcance y se envían al asesor para propuesta formal.
