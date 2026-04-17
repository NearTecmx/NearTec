import Link from 'next/link'
import CotizadorNearTec from '@/components/CotizadorNearTec'

const services = [
  {
    title: 'Infraestructura en la Nube',
    description: 'Hosting robusto, servidores dedicados y almacenamiento escalable con respaldo automático.',
    icon: '☁️',
  },
  {
    title: 'CN7 - Sistema ERP',
    description: 'Gestión empresarial completa: inventario, facturación, contabilidad y reportes en tiempo real.',
    icon: '📊',
  },
  {
    title: 'CompuNegocio - Licencias',
    description: 'Licencias por estación con póliza comercial clara y soporte técnico especializado.',
    icon: '💼',
  },
  {
    title: 'Soporte 24/7',
    description: 'Atención remota, implementación, capacitación y mantenimiento preventivo continuo.',
    icon: '🛠️',
  },
]

const benefits = [
  'Implementación rápida y profesional',
  'Soporte técnico especializado',
  'Actualizaciones y mantenimiento incluido',
  'Seguridad y respaldos automáticos',
  'Escalabilidad según tu negocio',
  'ROI comprobado en operaciones',
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-shell pb-10 pt-16 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="pill">Hecho en Tijuana · Infraestructura Profesional</span>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] text-brand-blue md:text-6xl">
              Infraestructura tecnológica que{' '}
              <span className="text-brand-green">mueve tu negocio</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
              Hosting en la nube, CN7, CompuNegocio y soporte técnico especializado. 
              Todo lo que necesitas para que tu empresa opere sin interrupciones.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#cotizador" className="btn-primary">
                Solicitar Cotización
              </Link>
              <a 
                href="tel:+526631656898" 
                className="btn-secondary"
              >
                Hablar con un Experto
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {['Hosting Robusto', 'CN7 Completo', 'Soporte 24/7'].map((item) => (
                <div key={item} className="surface-card p-4 text-center text-sm font-semibold text-brand-blue">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card surface-card-hover overflow-hidden p-6 md:p-8">
            <div className="rounded-[24px] bg-brand-gradient p-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/75">
                Por qué elegir NearTec
              </p>
              <h2 className="mt-3 text-3xl font-black">Profesionalismo total</h2>
              <p className="mt-4 max-w-xl text-white/85">
                Más de 10 años entregando infraestructura confiable a PyMEs y empresas 
                medianas en México. Soporte real, sin interrupciones.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {benefits.slice(0, 3).map((benefit) => (
                <div key={benefit} className="flex gap-3 rounded-2xl border border-brand-line bg-white p-4">
                  <span className="text-lg">✓</span>
                  <p className="text-sm font-semibold text-brand-blue">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="section-shell pt-0">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
            Nuestros Servicios
          </p>
          <h2 className="mt-2 text-3xl font-black text-brand-blue md:text-4xl">
            Soluciones completas para tu operación
          </h2>
          <p className="mt-4 text-brand-muted">
            Desde infraestructura básica hasta ERP completo. Todo integrado y profesional.
          </p>
        </div>

        <div className="grid-soft">
          {services.map((service) => (
            <div key={service.title} className="surface-card surface-card-hover p-8">
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="text-xl font-black text-brand-blue">{service.title}</h3>
              <p className="mt-3 leading-7 text-brand-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-shell pt-0">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="surface-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
              Ventajas
            </p>
            <h2 className="mt-2 text-3xl font-black text-brand-blue">
              Por qué empresas confían en NearTec
            </h2>
            <ul className="mt-6 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={benefit} className="flex gap-4 rounded-2xl bg-brand-light p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-6 text-brand-muted">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
              Proceso Simple
            </p>
            <h2 className="mt-2 text-3xl font-black text-brand-blue">
              Comenzar es fácil
            </h2>
            <ol className="mt-6 space-y-4">
              {[
                'Cuéntanos tus necesidades',
                'Presentamos propuesta y presupuesto',
                'Implementación con seguimiento',
                'Soporte continuo y dedicado',
              ].map((step, index) => (
                <li key={step} className="flex gap-4 rounded-2xl border border-brand-green bg-green-50 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-6 text-brand-blue font-semibold">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Cotizador */}
      <section id="cotizador" className="section-shell pt-0">
        <CotizadorNearTec />
      </section>

      {/* CTA Final */}
      <section id="contacto" className="section-shell pt-0">
        <div className="surface-card bg-brand-gradient p-8 text-white md:p-12">
          <h2 className="text-3xl font-black md:text-4xl">¿Listo para profesionalizar tu infraestructura?</h2>
          <p className="mt-4 max-w-2xl text-white/85 text-lg">
            Solicita una consulta gratuita con nuestro equipo técnico. 
            Evaluaremos tus necesidades y te presentaremos la mejor solución.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a 
              href="tel:+526631656898" 
              className="btn-secondary border-white/20 bg-white/10 text-white hover:border-white hover:text-white"
            >
              Llamar Ahora
            </a>
            <a 
              href="mailto:info@neartec.com" 
              className="btn-secondary border-white/20 bg-white/10 text-white hover:border-white hover:text-white"
            >
              Enviar Correo
            </a>
            <Link 
              href="#cotizador" 
              className="btn-primary bg-white text-brand-blue hover:bg-brand-light"
            >
              Cotizar Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
