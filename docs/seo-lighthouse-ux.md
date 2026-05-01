# SEO, Lighthouse y UX/UI aplicados

## Decisiones técnicas

- Sitio estático sin framework pesado para reducir JS y mejorar carga.
- CSS único y JS propio dividido en dos archivos.
- Sin fuentes externas para evitar bloqueo por terceros.
- Imágenes locales.
- Canvas VFX decorativo con `prefers-reduced-motion` respetado.
- Estructura semántica con `header`, `main`, `section`, `footer`, `form`, `fieldset` y labels reales.
- Skip link para accesibilidad.
- CTAs arriba del fold y barra sticky móvil.
- Formulario progresivo: datos, ruta, variables, buyer fit y módulos por alcance.

## Objetivos de Core Web Vitals

- LCP: menor a 2.5 s.
- INP: menor a 200 ms.
- CLS: menor a 0.1.

## Checklist Lighthouse

### Performance

- Comprimir HTML, CSS, JS y SVG.
- Activar cache en `.htaccess`.
- Mantener logo optimizado.
- Revisar transferencia total.
- Evitar scripts de terceros antes del consentimiento y tracking necesario.

### Accessibility

- Controles con labels.
- Contraste alto.
- Focus visible por navegador.
- Navegación por teclado.
- Mensaje de PDF/WhatsApp también accesible como texto.

### Best Practices

- Headers de seguridad en `.htaccess`.
- Sin librerías innecesarias.
- Sin formularios que prometan envío si no se configura backend.
- Endpoint PHP opcional separado.

### SEO

- Title y description únicos.
- Canonical.
- Open Graph.
- JSON-LD de ProfessionalService y FAQPage.
- Sitemap y robots.
- Links descriptivos.
- Contenido visible alineado con datos estructurados.

## Diseño UX/UI

- Estética premium tecnológica: fondo oscuro, acento verde NearTec, cristal, tarjetas, flujo de sistema.
- Mobile-first: una columna, botones grandes, formulario táctil.
- Desktop: hero con panel de métricas, grid de servicios, cotizador con resultado sticky.
- Microinteracciones: scroll reveal, hover, canvas de nodos, pulso operativo.

## Reglas para pauta

- No mandar tráfico frío a una home genérica.
- Usar `landing-diagnostico.html` para diagnóstico inicial.
- Usar `index.html#cotizador` para campañas BOFU o remarketing.
- UTM obligatorio: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`.
