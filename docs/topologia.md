# Topología completa NearTec Web Pro

## 1. Arquitectura de páginas

```text
/
├── index.html                    Home comercial, segmentación y cotizador completo
├── landing-diagnostico.html      Landing de pauta para diagnóstico inicial
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── .htaccess
├── assets/
│   ├── css/styles.css            Sistema visual, responsive y VFX
│   ├── js/app.js                 Cotizador, scoring, CSV, WhatsApp y lead storage
│   ├── js/pdf-engine.js          PDF real generado en navegador
│   ├── data/pricing.json         Precios documentados
│   ├── data/lead-rules.json      Reglas de calificación y buyer fit
│   ├── img/neartec-logo.jpg      Logo oficial entregado
│   └── icons/favicon.svg
├── api/
│   ├── lead.php                  Endpoint opcional real en PHP
│   └── config.sample.php
├── crm/leads-template.csv
└── docs/
```

## 2. Flujo comercial real

1. Usuario entra por home o landing.
2. El mensaje lo segmenta: web/CRM, operación/POS, nube/soporte, iTimbre/fiscal o distribuidores.
3. El cotizador suma únicamente precios documentados.
4. Servicios no documentados se agregan como módulos para propuesta.
5. El lead recibe score por datos, intención, buyer fit, volumen y módulos.
6. El usuario puede:
   - guardar el lead localmente,
   - descargar PDF,
   - exportar CSV,
   - enviar WhatsApp con resumen,
   - mandar correo,
   - o enviar a `api/lead.php` si el servidor está configurado.
7. El asesor entra con contexto y no desde cero.

## 3. Fuentes internas aplicadas

- NearTec como integrador tecnológico-comercial.
- iTimbre como vertical fiscal/documental.
- CompuNegocio/CN7 como capa operativa y nube.
- Canal distribuidores como expansión indirecta.
- SLA comercial sugerido: responder en menos de 10 minutos hábiles.
- CRM mínimo: fuente, UTM, responsable, etapa, siguiente acción y seguimiento.

## 4. Componentes funcionales

### Cotizador

Calcula:

- CompuNegocio mensual/anual por estación.
- Implementación base.
- Soporte por hora.
- Desarrollo por hora.
- CN7 en USD mensual.
- Timbres CompuNegocio.
- Paquetes iTimbre.
- Timbres iTimbre estándar.
- Buzón de nómina por número de trabajadores.

No calcula:

- Web.
- Hosting.
- VPS.
- Correo.
- Emailing.
- CRM.
- Automatización.

Estos módulos quedan en propuesta personalizada.

### Scoring

Usa perfiles detectados:

- Shelter / maquiladora.
- Distribuidor con sucursales.
- Cadena de tiendas.
- Comercializadora con vendedores de campo.
- Negocio con alto volumen de timbrado.

### PDF

`assets/js/pdf-engine.js` genera un PDF real en navegador con:

- Datos de empresa y contacto.
- Score y siguiente acción.
- Partidas calculadas.
- Totales MXN/USD.
- Módulos por alcance.
- Notas comerciales.

## 5. Roadmap recomendado

### Fase 1

- Publicar en subcarpeta `/nuevo/`.
- Probar móvil, desktop, PDF, WhatsApp y exportación CSV.
- Validar textos legales y claims fiscales.

### Fase 2

- Conectar Meta Pixel, Google Tag, LinkedIn Insight y UTMs.
- Configurar endpoint PHP o CRM externo.
- Crear landings específicas: CompuNegocio, distribuidores iTimbre, Carta Porte, autofactura.

### Fase 3

- Server-side events / CAPI.
- CRM con pipeline real.
- Dashboard de leads, reuniones, cotizaciones y cierres.
