# Topología, comparación y decisiones NearTec Master 2026

## Fuentes analizadas

### A — NearTec · Tecnología para vender, operar y crecer (2)
- Tipo: snapshot MHTML de una página.
- Archivos extraídos: 1 HTML + 3 assets.
- Fortalezas: hero directo, narrativa entendible, proceso visual.
- Debilidades: arquitectura de una sola página, sin API/cotizador completo.

### B — versión 3.zip
- Tipo: sitio estático Vercel-ready.
- Topología: API `/api/lead`, cotizador, PDF engine, pricing JSON, páginas por servicio y scripts de validación.
- Fortalezas: estructura deployable, API, cotizador, páginas.
- Debilidades: copy interno, UI básica en footer/cotizador, iconografía genérica.

### C — NearTec _ Tecnología a medida para vender, operar y escalar
- Tipo: snapshot MHTML de una versión visual más premium.
- Archivos extraídos: 1 HTML + assets AVIF/WEBP/PNG.
- Fortalezas: posicionamiento de integrador tecnológico, diseño SaaS/tech, profundidad visual.
- Debilidades: snapshot, no repo completo.

## Diseño final
Fusiona: la estructura deployable de B, la claridad comercial de A, y el lenguaje visual premium de C.

## Decisiones técnicas
- Sitio estático para Lighthouse alto.
- JS local único sin dependencias pesadas.
- Animaciones SVG/CSS con `prefers-reduced-motion`.
- HTML indexable para SEO.
- API Vercel para leads con `NEARTEC_LEAD_WEBHOOK_URL`.
- PDF generado en cliente sin librerías externas.
