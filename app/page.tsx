import CotizadorNearTec from '@/components/CotizadorNearTec'

const highlights = [
  'CompuNegocio',
  'CN7',
  'Implementación',
  'Soporte remoto',
  'Infraestructura',
  'WhatsApp directo',
]

const solutions = [
  {
    title: 'CompuNegocio',
    body: 'Licenciamiento por estación para una operación más ordenada, estable y lista para crecer.',
  },
  {
    title: 'CN7 y nube',
    body: 'Entorno remoto, respaldo y continuidad operativa para empresas que necesitan trabajar sin fricción.',
  },
  {
    title: 'Implementación',
    body: 'Configuración inicial, validación, puesta en marcha y acompañamiento desde el arranque.',
  },
  {
    title: 'Soporte técnico',
    body: 'Atención remota para incidencias, capacitación, ajustes y seguimiento comercial.',
  },
  {
    title: 'Desarrollo',
    body: 'Cambios, mejoras y personalizaciones para procesos que requieren una solución más precisa.',
  },
  {
    title: 'Infraestructura',
    body: 'Base tecnológica para empresas que necesitan operar mejor, vender mejor y responder más rápido.',
  },
]

const process = [
  {
    step: '01',
    title: 'Diagnóstico',
    body: 'Entendemos el servicio, el tamaño de operación y lo que realmente necesita tu empresa.',
  },
  {
    step: '02',
    title: 'Estimado',
    body: 'El cotizador genera una base clara para licencias, nube, soporte, desarrollo e implementación.',
  },
  {
    step: '03',
    title: 'Asesoría',
    body: 'Un asesor revisa el alcance, afina variables y aterriza la ruta correcta para el proyecto.',
  },
  {
    step: '04',
    title: 'Seguimiento',
    body: 'La conversación continúa por WhatsApp para acelerar validación, cierre y arranque.',
  },
]

const faqs = [
  {
    question: '¿El cotizador reemplaza la cotización final?',
    answer:
      'No. Genera un estimado inicial para acelerar el proceso comercial. La validación final la realiza un asesor con el alcance real del proyecto.',
  },
  {
    question: '¿Puedo cotizar algo personalizado?',
    answer:
      'Sí. Puedes escribir exactamente lo que necesitas y enviarlo directo para revisión comercial y técnica.',
  },
  {
    question: '¿Qué tipos de servicio puedo cotizar?',
    answer:
      'CompuNegocio, CN7, nube, soporte, implementación, desarrollo y requerimientos personalizados.',
  },
  {
    question: '¿La atención continúa por WhatsApp?',
    answer:
      'Sí. El sitio está pensado para llevar al prospecto directo con un asesor y mantener el seguimiento sin perder contexto.',
  },
]

export default function HomePage() {
  return (
    <div className="pb-16">
      <section
        id="inicio"
        className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-16 lg:pt-12"
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10">
          <div>
            <span className="inline-flex rounded-full border border-[var(--brand-line)] bg-[var(--brand-green-soft)] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--brand-ink)]">
              Tecnología empresarial
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.98] text-[var(--brand-ink)] sm:text-5xl lg:text-6xl">
              NearTec: infraestructura, CN7, soporte e implementación para empresas que necesitan operar mejor.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--brand-muted)] sm:text-lg">
              Soluciones tecnológicas para empresas que buscan orden operativo, continuidad,
              velocidad de respuesta y atención comercial directa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cotizador" className="btn-primary">
                Cotizar ahora
              </a>

              <a
                href="https://wa.me/526631656898?text=Hola,%20quiero%20informaci%C3%B3n%20de%20NearTec."
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--brand-line)] bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--brand-ink)] shadow-[0_10px_24px_rgba(18,24,18,0.05)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-[var(--brand-line)] bg-white p-5 shadow-[var(--brand-shadow)] md:p-7">
            <div className="rounded-[28px] bg-[linear-gradient(135deg,#ffffff_0%,#f4f9e7_100%)] p-6 md:p-7">
              <div className="flex flex-wrap gap-2">
                {['NearTec', 'Business Tech', 'Atención directa'].map((item) => (
                  <span
                    key={