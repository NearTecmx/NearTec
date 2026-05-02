# NearTec Web Pro 2026 · Sistema CodeFirst

Versión 3 enfocada primero en código y funcionalidad. Los assets definitivos quedan para una fase posterior.

## Incluye

- Sitio multi-ruta: home, CompuNegocio, CN7, CRM, Web, Soporte, Casos, Recursos, Contacto, Landing, Diagnóstico y Cotizador.
- Burbuja flotante restaurada: WhatsApp + Neary AI.
- Cotizador con precios documentados, scoring, PDF, WhatsApp, correo y CSV.
- API Vercel `/api/lead` robusta con alias español/inglés y webhook opcional.
- Pruebas locales y producción para Termux/Vercel.

## Deploy

```bash
npm run predeploy:check
npm run smoke
vercel --prod
```

Configurar webhook real:

```bash
vercel env add NEARTEC_LEAD_WEBHOOK_URL production
vercel --prod
```
