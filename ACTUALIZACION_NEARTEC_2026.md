# Actualización NearTec Web 2026

## Objetivo
Elevar el sitio provisional en Vercel para que funcione como activo comercial real: venta, diagnóstico, captura de leads, contenido actual y autoridad.

## Cambios de estrategia aplicados

1. NearTec ya no comunica “hacemos de todo”. Ahora se presenta como integrador de crecimiento, operación e infraestructura.
2. La home prioriza diagnóstico, paquetes por dolor, precios base, automatización y contenido actual.
3. Se separa la narrativa de NearTec de la narrativa fiscal de iTimbre. iTimbre aparece solo como capa fiscal conectada cuando aplica.
4. Se refuerza mobile-first para que no se recorte texto, CTA ni tarjetas en celular.
5. Se agregó blog con fuentes actuales para activar SEO, remarketing y autoridad.

## Archivos principales modificados

- app/page.tsx
- app/layout.tsx
- app/blog/page.tsx
- app/blog/[slug]/page.tsx
- app/soluciones/page.tsx
- app/compunegocio/page.tsx
- app/infraestructura/page.tsx
- app/diseno-web/page.tsx
- app/diagnostico/page.tsx
- app/robots.ts
- app/sitemap.ts
- app/globals.css
- components/Navbar.tsx
- components/Footer.tsx
- lib/blog-data.ts
- lib/neartec-pricing.ts
- next.config.js

## Validación manual recomendada en Vercel

1. Revisar home en 360px, 390px, 414px, 768px, 1024px y desktop.
2. Probar menú móvil.
3. Probar cotizador y botón de WhatsApp.
4. Revisar `/sitemap.xml` y `/robots.txt`.
5. Revisar artículos de blog y fuentes.
6. Revisar que no haya textos tapados por el widget flotante.
7. Revisar que los botones de contacto usen el número oficial.

## Nota
No se ejecutó despliegue en Vercel desde este entorno. El ZIP está listo para subir o reemplazar el proyecto actual.
