export interface NearyAnswer {
  answer: string
  escalate: boolean
}

export const QUICK_SUGGESTIONS = [
  '¿Qué vende NearTec?',
  '¿Qué me conviene contratar primero?',
  '¿Cuánto cuesta CompuNegocio?',
  '¿Qué es CN7?',
  '¿Pueden automatizar mis leads?',
  'Quiero hablar por WhatsApp',
]

const fallback: NearyAnswer = {
  answer:
    'Ese caso necesita contexto específico. Te recomiendo continuar por WhatsApp para que un asesor revise tu necesidad y te dé una ruta clara.',
  escalate: true,
}

function includesAny(text: string, words: string[]) {
  return words.some((word) => text.includes(word))
}

export function getNearyAnswer(question: string): NearyAnswer {
  const q = question.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  if (includesAny(q, ['whatsapp', 'asesor', 'humano', 'llamar', 'contacto', 'telefono'])) {
    return {
      answer: 'Te paso a WhatsApp. Ahí pueden validar alcance, tiempos y propuesta sin hacerte perder tiempo.',
      escalate: true,
    }
  }

  if (includesAny(q, ['que vende', 'que hace', 'neartec', 'servicios'])) {
    return {
      answer:
        'NearTec integra sitio web, CRM y automatización, CompuNegocio, infraestructura cloud, correo, hosting, VPS, emailing y conexión fiscal con iTimbre cuando aplica. La idea es que vendas mejor y operes con más orden.',
      escalate: false,
    }
  }

  if (includesAny(q, ['primero', 'conviene', 'necesito', 'recomiendas', 'empezar'])) {
    return {
      answer:
        'Si tu problema es vender, empieza por sitio web + CRM. Si tu problema es operación diaria, empieza por CompuNegocio. Si tu problema es continuidad, empieza por CN7/nube. El cotizador te ayuda a elegir rápido.',
      escalate: false,
    }
  }

  if (includesAny(q, ['compunegocio', 'punto de venta', 'pos', 'inventario', 'estaciones'])) {
    return {
      answer:
        'CompuNegocio ayuda con punto de venta, inventario, ventas, reportes, timbres y operación diaria. La base documentada inicia en $450 MXN/mes por estación para 1 a 3 licencias; baja a $400 en 4 a 8 y $350 en 9 o más.',
      escalate: false,
    }
  }

  if (includesAny(q, ['cn7', 'nube', 'respaldo', 'backup', 'base de datos'])) {
    return {
      answer:
        'CN7 es la capa de nube/respaldo para operar con más continuidad. La base documentada incluye CN7 con respaldo desde $99 USD/mes y CN7 hospedado desde $149 USD/mes, según alcance.',
      escalate: false,
    }
  }

  if (includesAny(q, ['crm', 'automatizacion', 'leads', 'seguimiento', 'agenda', 'ventas'])) {
    return {
      answer:
        'NearTec puede ayudarte a filtrar leads, priorizarlos, conectar WhatsApp, agenda y seguimiento comercial para que los prospectos no se enfríen. Lo correcto es definir primero el flujo de venta y luego automatizar.',
      escalate: false,
    }
  }

  if (includesAny(q, ['sitio', 'web', 'landing', 'ecommerce', 'pagina'])) {
    return {
      answer:
        'NearTec desarrolla sitios, landings y ecommerce enfocados en claridad, conversión y seguimiento. No se trata solo de verse bien: el sitio debe explicar tu oferta y llevar al usuario a cotizar o contactar.',
      escalate: false,
    }
  }

  if (includesAny(q, ['hosting', 'vps', 'correo', 'emailing', 'email', 'servidor'])) {
    return {
      answer:
        'NearTec ofrece hosting, VPS, correo corporativo, emailing, servidores y respaldo para que tu operación tenga una base más estable y profesional.',
      escalate: false,
    }
  }

  if (includesAny(q, ['itimbre', 'facturacion', 'cfdi', 'timbres', 'fiscal'])) {
    return {
      answer:
        'Cuando el proyecto necesita facturación, timbres o capa fiscal, NearTec puede conectarse con iTimbre. NearTec ordena la operación; iTimbre cubre la parte fiscal/documental cuando aplica.',
      escalate: false,
    }
  }

  if (includesAny(q, ['precio', 'costo', 'cuanto', 'cotizar', 'cotizacion'])) {
    return {
      answer:
        'Hay precios base documentados para CompuNegocio, CN7, implementación, soporte, desarrollo y timbres. Para web, CRM o proyectos mixtos conviene cotizar por alcance. Usa el cotizador y luego pasa a WhatsApp con el resumen.',
      escalate: false,
    }
  }

  return fallback
}
