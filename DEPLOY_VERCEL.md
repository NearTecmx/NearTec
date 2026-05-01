# Despliegue en GitHub + Vercel

## Estado real

Este paquete está preparado para subirse como repositorio GitHub y desplegarse en Vercel como sitio estático con una función serverless para leads.

## Pasos

1. Crear repositorio en GitHub.
2. Subir el contenido de esta carpeta como raíz del repositorio. No subir una carpeta contenedora por encima.
3. En Vercel: **Add New Project** → importar repo.
4. Framework Preset: **Other** o dejar detección automática.
5. Build Command: vacío/null por `vercel.json`.
6. Output Directory: `.` por `vercel.json`.
7. Deploy.

## Leads en Vercel

El navegador guarda leads localmente, exporta CSV, genera PDF y abre WhatsApp/correo sin backend.

El endpoint `/api/lead` queda activo en Vercel, pero no guarda datos en disco porque las funciones serverless no deben depender de almacenamiento local persistente. Para envío real configura la variable:

```bash
NEARTEC_LEAD_WEBHOOK_URL=https://tu-webhook.com/neartec-leads
```

Puede apuntar a Make, Zapier, n8n, Google Apps Script, Airtable, HubSpot, Zoho, Kommo o backend propio.

## Variables recomendadas en Vercel

```bash
NEARTEC_LEAD_WEBHOOK_URL=
ALLOWED_ORIGIN=https://neartec.com
```

## Validación local

```bash
npm run predeploy:check
python3 -m http.server 8080
```

Abrir:

- `http://localhost:8080/`
- `http://localhost:8080/landing-diagnostico.html`

## Backend PHP opcional

El backend PHP anterior está en `backend/php/`. No se usa en Vercel. Sirve para hosting tradicional con PHP/cPanel/Apache.
