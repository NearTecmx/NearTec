# Topología y validación

## Estructura
- HTML estático por ruta.
- CSS único: `assets/css/styles.css`.
- JS único: `assets/js/app.js`.
- API Vercel: `api/lead.js`, `api/health.js`.
- Assets oficiales: logo, isotipo, Neary, WhatsApp oficial, OG/Twitter.

## Decisiones
- Sin Next.js para evitar detección errónea en Vercel.
- `framework: null` en `vercel.json`.
- Gráficos SVG/CSS y canvas ligero para fondo tecnológico.
- PDF generado en navegador vía canvas + PDF JPEG vectorizado.
- Copy público orientado a venta y diagnóstico, sin textos internos.

## Checklist cubierto
1. Neary AI + WhatsApp con opciones y salida a asesor.
2. Sin textos internos visibles.
3. Contraste reforzado y sticky bar con espacio reservado.
4. Footer empresarial completo.
5. Páginas personalizadas por servicio.
6. PDF premium descargable con logo e información oficial.
7. Landing de campañas completa.
8. Fondo animado tech con polígonos y conexiones.
