# Auditoría real — NearTec Master 2026 V5 Clean Rebuild

## ZIPs/repos auditados literalmente

1. `NearTec-main.zip` — Next.js, 79 archivos, 45 archivos de código, 12,197 líneas aproximadas. Aporta mejor base visual y assets oficiales, pero contiene copy interno/antiguo como `Stack NearTec`, `Filtro comercial`, contacto viejo y cotizador con `Regla comercial`.
2. `NearTec_Web_Pro_2026_V4_1_SalesEngine.zip` — Next.js, 77 archivos, 41 archivos de código. Aporta estructura comercial, API y assets, pero conserva contacto viejo en `lib/neartec-pricing.ts` y referencias internas en código.
3. `NearTec_Web_Pro_2026_V4_SalesEngine.zip` — similar a V4.1, con menos líneas. Tiene precios/cotizador, pero conserva contacto viejo y deuda de copy.
4. `NearTec_Web_Pro_2026.zip` — estático inicial, 24 archivos. Sencillo y ligero, pero incompleto para Vercel/API y con contacto viejo.
5. `NearTec_Web_Pro_2026_VercelReady.zip` — estático compatible Vercel, 30 archivos. Aporta sencillez y estructura, pero conserva contacto viejo y no cumple Neary/PDF/landing final.

También se revisaron `NearTec_Master_2026_V2_Completo_Verificado.zip` y `NearTec_Master_2026_V3_Rebuild_Completo.zip`: tenían mejor limpieza, rutas y assets, pero no eran suficientes para PDF premium y validación visual completa.

## Decisión técnica

No se reutilizó una base completa anterior porque todas conservaban deuda: copy interno, contacto viejo, falta de PDF premium o diseño inconsistente. La V5 se reconstruye limpia, usando solo lo rescatable: logo oficial, assets visuales, estructura de servicios, precios reales y enfoque oscuro tecnológico.

## Validaciones incluidas

- `npm run verify`
- rutas principales
- API `/api/lead`
- API `/api/quote-pdf`
- Neary AI en JS público
- textos prohibidos fuera de fuente pública
- SEO base, canonical, Open Graph, sitemap, robots y JSON-LD
- configuración Vercel estática con `framework: null`

## Lo que no se puede validar dentro del ZIP

- Lighthouse real de producción: debe ejecutarse después del deploy.
- Screenshot real en tu dispositivo: debe validarse después de publicar.
- Entrega real a CRM/Make/n8n: depende de configurar `NEARTEC_LEAD_ENDPOINT_URL` o la variable compatible en Vercel.
