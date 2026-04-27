# NearTec V2 Sales-Tech — Actualización aplicada

Fecha: 27/04/2026

## Objetivo
Convertir el sitio rediseñado de NearTec en una experiencia más tecnológica, cinematográfica, interactiva y orientada a ventas, manteniendo claridad comercial y mobile-first.

## Cambios aplicados

### 1. Home V2
- Reescritura total del hero para comunicar a NearTec como empresa que desarrolla e integra tecnología.
- Se reemplazó el enfoque de “automatización comercial” como eje único por una narrativa completa: diseño web, punto de venta, CompuNegocio, CN7, hosting, VPS, FTP, correo, emailing, automatización y soporte remoto.
- Se agregaron secciones de servicios reales, industrias, dolores de negocio, proceso de implementación, precios base y CTA final.

### 2. Diseño y VFX
- Nuevo sistema visual “NearTec OS” con dashboard cinematográfico.
- Animaciones CSS ligeras: scanline, signal paths, orb, grid motion, glow, tarjetas interactivas y efectos de profundidad.
- Bloques oscuros estratégicos para elevar la percepción tech sin dominar la identidad con negro.
- Mejor estructura mobile-first para evitar recortes y saturación.

### 3. Cotizador V2
- El cotizador ahora separa lo que sí tiene precio documentado de lo que requiere propuesta personalizada.
- Se cotiza con precio base: CompuNegocio, implementación, soporte, desarrollo, CN7 y timbres.
- Se capturan como requerimiento: diseño web, hosting, VPS, FTP, correo, emailing, automatización y conexión fiscal.
- Se agregó captura de datos de lead: empresa, contacto, WhatsApp y correo.
- Se agregó descarga/generación de PDF mediante vista imprimible del navegador.
- Se mantiene envío directo a WhatsApp con resumen estructurado.

### 4. SEO y metadata
- Metadata actualizada para representar correctamente el portafolio de NearTec.
- JSON-LD actualizado con servicios reales de NearTec.

### 5. Interacción comercial
- Se ajustó el botón flotante para que sea más claro como acceso a cotización/contacto.
- Se agregaron CTAs más directos: Cotizar proyecto, WhatsApp directo, Ver servicios.

## Archivos principales modificados
- app/page.tsx
- app/layout.tsx
- app/globals.css
- components/NearTecPremiumVisuals.tsx
- components/CotizadorNearTec.tsx
- components/ChatWidget.tsx
- lib/neartec-pricing.ts

## Validación pendiente
No se pudo ejecutar build dentro del entorno porque no están instaladas las dependencias locales de Next.js y `npm install` no completó en el entorno. Ejecutar en local o Vercel:

```bash
npm install
npm run build
```

## Rutas a validar
- /
- /cotizador
- /soluciones
- /compunegocio
- /infraestructura
- /diseno-web
- /emailing
- /contacto
