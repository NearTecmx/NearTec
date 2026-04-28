# NearTec V3 Premium Sales-Tech

## Archivos modificados

- `app/page.tsx`
- `app/globals.css`
- `components/NearTecPremiumVisuals.tsx`
- `components/ClientLogoStrip.tsx`
- `components/CotizadorNearTec.tsx`

## Enfoque aplicado

- Home más comercial y menos tipo presentación.
- Hero oscuro cinematográfico con tablero tecnológico y señales visuales.
- Copy enfocado en venta, operación, infraestructura y desarrollo tecnológico real.
- Servicios reordenados como rutas comerciales: captación, operación, cloud, confianza, seguimiento e integración.
- Cotizador conservado como filtro de leads con PDF y WhatsApp.
- Cliente/logo strip corregido para usar `next/image` y eliminar el warning de `<img>`.
- CSS V3 agregado como capa final para no romper páginas internas.

## Después de reemplazar archivos

```powershell
pnpm build
git status
git add app/page.tsx app/globals.css components/NearTecPremiumVisuals.tsx components/ClientLogoStrip.tsx components/CotizadorNearTec.tsx
git commit -m "Build V3 premium sales-tech experience"
git push -u origin v3-premium-tech
```

## Validación visual sugerida

- Desktop: 1440px, 1366px, 1280px.
- Tablet: 768px.
- Mobile: 390px, 414px, 360px.
- Revisar que el hero no recorte texto ni botones.
- Revisar que el cotizador descargue PDF y abra WhatsApp con el resumen.
