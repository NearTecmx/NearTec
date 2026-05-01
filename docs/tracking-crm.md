# Tracking, CRM y operación comercial

## Eventos recomendados

| Evento | Cuándo se dispara | Plataforma |
|---|---|---|
| PageView | Carga de página | GA4 / Meta / LinkedIn |
| ViewContent | Vista de sección/cotizador | GA4 / Meta |
| Lead | Lead guardado o formulario enviado | GA4 / Meta |
| QualifiedLead | Score mayor o igual a 55 | GA4 / Meta / CRM |
| HotLead | Score mayor o igual a 80 | CRM / WhatsApp |
| QuotePDF | Descarga de PDF | GA4 |
| WhatsAppClick | Clic en WhatsApp | GA4 / Meta |
| EmailClick | Clic en correo | GA4 |
| QuoteSent | Cotización enviada por asesor | CRM |
| MeetingBooked | Reunión agendada | CRM |
| Won | Venta cerrada | CRM / offline conversion |
| Lost | Perdido con motivo | CRM |

## Campos de CRM

- fecha/hora entrada
- fuente
- canal
- campaña
- conjunto/anuncio
- UTM source
- UTM medium
- UTM campaign
- UTM content
- nombre
- empresa
- teléfono
- correo
- servicio
- módulos
- score
- calificación
- etapa
- responsable
- siguiente acción
- fecha próxima acción
- cotización MXN / USD
- nota del prospecto

## Pipeline NearTec

Nuevo lead → Contactado → Diagnóstico agendado → Diagnóstico realizado → Cotización enviada → Negociación → Ganado / Perdido → Onboarding

## Pipeline iTimbre empresa

Nuevo lead → Validación fiscal/técnica → Demo o llamada técnica → Requerimientos → Cotización → Prueba/integración → Ganado / Perdido → Implementación

## Pipeline Distribuidor

Aplicante → Calificado → Presentación de programa → Documentos/acuerdo → Activación → Primer cliente referido → Distribuidor activo

## Implementación sin proceso falso

El sitio funciona sin CRM conectado. Guarda leads en navegador y exporta CSV. Para producción real, configurar una de estas opciones:

1. Endpoint PHP incluido.
2. Form handler del hosting.
3. Zapier/Make webhook.
4. CRM con formulario nativo.
5. API propia con base de datos.

No se debe decir “lead enviado a CRM” hasta que exista endpoint activo y probado.
