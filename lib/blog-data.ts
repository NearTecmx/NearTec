export type BlogSource = {
  label: string
  url: string
}

export type BlogPost = {
  slug: string
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  audience: string
  sourceLabel: string
  sources: BlogSource[]
  takeaways: string[]
  body: Array<{ heading: string; content: string[] }>
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'hot-sale-2026-operacion-digital-pymes-mexico',
    title: 'HOT SALE 2026: tu web, inventario y atención no pueden improvisarse',
    category: 'Ecommerce / Operación',
    date: '2026-04-25',
    readTime: '6 min',
    audience: 'Dueños, marketing, ventas y operación',
    sourceLabel: 'AMVO / México 2026',
    excerpt:
      'El HOT SALE 2026 concentra tráfico, mensajes y ventas del 25 de mayo al 2 de junio. Si tu operación vive en piezas sueltas, el pico de demanda se vuelve riesgo.',
    sources: [
      { label: 'AMVO · HOT SALE 2026', url: 'https://amvo.org.mx/hot-sale/' },
      { label: 'AMVO Blog · guía estratégica HOT SALE 2026', url: 'https://blog.amvo.org.mx/blog/hot-sale-2026-gu%C3%ADa-estrat%C3%A9gica-para-empresas-de-ecommerce-en-m%C3%A9xico' },
    ],
    takeaways: [
      'Mobile-first ya no es opcional: el tráfico fuerte entra desde celular.',
      'Antes de meter campañas, revisa velocidad, checkout, formularios y WhatsApp.',
      'Después del pico de ventas, el seguimiento define si hay recompra o abandono.',
    ],
    body: [
      {
        heading: 'El problema no es vender más; es soportar el pico',
        content: [
          'La temporada alta expone los puntos débiles: páginas lentas, formularios que no registran bien, WhatsApp saturado, inventario sin control y reportes que llegan tarde.',
          'Para una PyME, el error común es preparar diseño y promociones, pero olvidar el sistema operativo que sostiene la venta.',
        ],
      },
      {
        heading: 'Checklist mínimo antes de una campaña fuerte',
        content: [
          'Valida carga móvil, CTA visible, formularios, botón de WhatsApp, correo corporativo, respaldo, inventario, etiquetas de leads y seguimiento postventa.',
          'NearTec debe vender este ángulo como diagnóstico operativo: menos improvisación, más control y mejor conversión.',
        ],
      },
    ],
  },
  {
    slug: 'ciberseguridad-ia-nube-pymes-mexico-2026',
    title: 'Ciberseguridad, IA y nube: lo que una PyME mexicana debe revisar en 2026',
    category: 'Infraestructura',
    date: '2026-04-25',
    readTime: '7 min',
    audience: 'Dirección, operaciones y TI',
    sourceLabel: 'PwC / Cloudflare 2026',
    excerpt:
      'La seguridad ya no es solo antivirus. En 2026, la nube, los accesos, los respaldos y las integraciones SaaS son parte del riesgo operativo real.',
    sources: [
      { label: 'PwC México · Digital Trust Insights 2026', url: 'https://www.pwc.com/mx/es/ciberseguridad/digital-trust.html' },
      { label: 'Cloudflare · 2026 Threat Report', url: 'https://blog.cloudflare.com/2026-threat-report/' },
    ],
    takeaways: [
      'La seguridad en nube debe revisarse junto con hosting, correo y respaldo.',
      'Las integraciones mal administradas amplían el riesgo.',
      'Los respaldos y la visibilidad de accesos son parte de continuidad, no lujo.',
    ],
    body: [
      {
        heading: 'La nueva superficie de riesgo está en las conexiones',
        content: [
          'Las empresas pequeñas ya usan correo, WhatsApp, CRM, nubes, pagos, formularios y automatizaciones. Cada conexión mal configurada puede abrir una brecha.',
          'NearTec debe comunicar seguridad como continuidad operativa: que la empresa pueda seguir trabajando aunque falle una pieza.',
        ],
      },
      {
        heading: 'Qué revisar primero',
        content: [
          'Correo corporativo, contraseñas, permisos, respaldos, hosting, DNS, formularios, accesos al panel web y proveedor que realmente responda cuando algo falla.',
        ],
      },
    ],
  },
  {
    slug: 'mexico-digital-2026-mobile-first-ventas',
    title: 'México digital 2026: por qué tu sitio debe vender perfecto desde celular',
    category: 'Web / Conversión',
    date: '2026-04-25',
    readTime: '5 min',
    audience: 'Dueños, marketing y ventas',
    sourceLabel: 'DataReportal / Google',
    excerpt:
      'México ya opera con una base digital masiva. Si tu sitio se corta, carga lento o es confuso en móvil, estás perdiendo demanda antes del primer contacto.',
    sources: [
      { label: 'DataReportal · Digital 2026 Mexico', url: 'https://datareportal.com/reports/digital-2026-mexico' },
      { label: 'Google Search Central · Core Web Vitals', url: 'https://developers.google.com/search/docs/appearance/core-web-vitals' },
    ],
    takeaways: [
      'La experiencia móvil debe guiar el diseño, no ser una adaptación secundaria.',
      'Los CTAs deben estar visibles sin tapar contenido ni depender de zoom.',
      'La velocidad, claridad y seguimiento son parte de ventas.',
    ],
    body: [
      {
        heading: 'Diseñar bonito no alcanza',
        content: [
          'Un sitio que se ve premium pero no explica la oferta, no carga rápido o no lleva a WhatsApp con contexto no cumple función comercial.',
          'El estándar para NearTec debe ser mobile-first: lectura clara, botones táctiles, secciones compactas y sin recortes.',
        ],
      },
      {
        heading: 'Qué debe tener una página que vende',
        content: [
          'Propuesta de valor inmediata, servicios agrupados, prueba social, precios base cuando existan, cotizador, rutas de contacto y contenido útil para remarketing.',
        ],
      },
    ],
  },
  {
    slug: 'crm-whatsapp-leads-pymes-neartec',
    title: 'WhatsApp no es CRM: cómo evitar que tus leads se enfríen',
    category: 'Automatización',
    date: '2026-04-25',
    readTime: '6 min',
    audience: 'Ventas, dirección y marketing',
    sourceLabel: 'Estrategia NearTec',
    excerpt:
      'Cuando los contactos llegan por Facebook, Instagram, web y WhatsApp sin etiquetas ni seguimiento, el problema no es falta de leads: es falta de sistema.',
    sources: [
      { label: 'Salesforce · Social Media Manager y CRM', url: 'https://www.salesforce.com/es/blog/social-media-manager-habilidades/' },
      { label: 'Meta Business Help · WhatsApp y páginas', url: 'https://www.facebook.com/help/2783732558314697/' },
    ],
    takeaways: [
      'Cada lead debe tener origen, necesidad, prioridad y siguiente paso.',
      'Las respuestas rápidas reducen pérdida de intención.',
      'El CRM empieza con disciplina comercial, aunque después se automatice.',
    ],
    body: [
      {
        heading: 'El lead se enfría cuando nadie sabe qué sigue',
        content: [
          'Un mensaje sin etiqueta, sin responsable y sin recordatorio compite contra todos los demás chats del día.',
          'La automatización comercial de NearTec debe resolver esa fricción: captar, filtrar, priorizar y llevar a cotización o diagnóstico.',
        ],
      },
      {
        heading: 'Ruta mínima recomendada',
        content: [
          'Formulario o WhatsApp con preguntas clave, etiqueta por servicio, respuesta automática, responsable asignado, resumen para ventas y recordatorio de seguimiento.',
        ],
      },
    ],
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
