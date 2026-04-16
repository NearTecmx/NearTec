import Link from 'next/link'

const capabilities = [
  {
    title: 'NearTec',
    text: 'Infraestructura, hosting, CN7, ERP CompuNegocio y desarrollo a medida.',
  },
  {
    title: 'iTimbre',
    text: 'PAC, timbres, facturación electrónica, nómina, validación CFDI y módulos fiscales.',
  },
  {
    title: 'Cotización guiada',
    text: 'El usuario elige servicio, escribe lo que necesita y pasa a WhatsApp sin fricción.',
  },
  {
    title: 'Conversión comercial',
    text: 'Diseñado para captar leads y moverlos a seguimiento humano real.',
  },
]

const blogCards = [
  {
    title: 'CFDI 4.0 y operación fiscal',
    text: 'Bloque orientado a cambios fiscales, guías y contenido de autoridad para posicionar SEO.',
  },
  {
    title: 'Infraestructura segura para PyMEs',
    text: 'Contenido para explicar CN7, backups, soporte remoto y escalabilidad técnica.',
  },
  {
    title: 'Distribuidores y cartera contable',
    text: 'Bloque comercial para captar contadores, revendedores y aliados estratégicos.',
  },
]

export default function Home() {
  return (
    <div>
      <section className="section-shell pb-10 pt-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="pill">Hecho en Tijuana · Ecosistema comercial</span>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] text-brand-blue md:text-6xl">
              Soluciones digitales que convierten visitas en{' '}
              <span className="text-brand-green">ventas reales</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
              Un solo frente para infraestructura, facturación electrónica,
              ERP, soporte y cotización guiada. El usuario entra, entiende y
              pasa a contacto sin perderse.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/neartec" className="btn-primary">
                Ver NearTec
              </Link>
              <Link href="/itimbre" className="btn-secondary">
                Ver iTimbre
              </Link>
              <Link href="/#contacto" className="rounded-2xl border border-brand-line bg-white px-6 py-3 font-semibold text-brand-blue shadow-soft transition hover:border-brand-green hover:text-brand-green">
                Contacto
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {['Infraestructura', 'PAC / timbres', 'Soporte remoto'].map((item) => (
                <div key={item} className="surface-card p-4 text-sm font-semibold text-brand-blue">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card surface-card-hover overflow-hidden p-6 md:p-8">
            <div className="rounded-[24px] bg-brand-gradient p-7 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/75">
                Topología comercial
              </p>
              <h2 className="mt-3 text-3xl font-black">Dos marcas, un flujo</h2>
              <p className="mt-4 max-w-xl text-white/85">
                NearTec capta, estructura y da soporte técnico. iTimbre
                monetiza la facturación, timbres y módulos fiscales.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] border border-brand-line bg-white p-5">
                <p className="text-sm font-semibold text-brand-blue">Ruta 1</p>
                <p className="mt-1 text-sm text-brand-muted">
                  Empresa que necesita hosting, ERP o soporte.
                </p>
              </div>
              <div className="rounded-[22px] border border-brand-line bg-white p-5">
                <p className="text-sm font-semibold text-brand-blue">Ruta 2</p>
                <p className="mt-1 text-sm text-brand-muted">
                  Empresa que necesita PAC, timbres o facturación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="selector" className="section-shell pt-0">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
            Entrada por marca
          </p>
          <h2 className="mt-2 text-3xl font-black text-brand-blue md:text-4xl">
            Elige la plataforma correcta
          </h2>
          <p className="mt-3 text-brand-muted">
            La navegación está pensada para que el usuario vaya directo al
            módulo que necesita.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Link href="/neartec" className="surface-card surface-card-hover group p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-muted">
              NearTec
            </p>
            <h3 className="mt-3 text-3xl font-black text-brand-blue">
              Infraestructura y operación empresarial
            </h3>
            <p className="mt-4 max-w-xl text-brand-muted">
              Hosting, CN7, CompuNegocio, soporte y desarrollo a medida con
              salida comercial clara.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-blue transition group-hover:text-brand-green">
              Abrir NearTec <span>→</span>
            </span>
          </Link>

          <Link href="/itimbre" className="surface-card surface-card-hover group p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-muted">
              iTimbre
            </p>
            <h3 className="mt-3 text-3xl font-black text-brand-blue">
              Facturación electrónica y timbres
            </h3>
            <p className="mt-4 max-w-xl text-brand-muted">
              PAC, CFDI, validación, módulos fiscales y cotización guiada para
              cierre comercial rápido.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-blue transition group-hover:text-brand-green">
              Abrir iTimbre <span>→</span>
            </span>
          </Link>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
            Qué resuelve
          </p>
          <h2 className="mt-2 text-3xl font-black text-brand-blue md:text-4xl">
            Capas que hoy sí venden
          </h2>
        </div>

        <div className="grid-soft">
          {capabilities.map((item) => (
            <div key={item.title} className="surface-card surface-card-hover p-6">
              <h3 className="text-xl font-black text-brand-blue">{item.title}</h3>
              <p className="mt-3 leading-7 text-brand-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
              Flujo comercial
            </p>
            <h2 className="mt-2 text-3xl font-black text-brand-blue">
              Proceso simple, sin ruido
            </h2>
            <ol className="mt-6 space-y-4">
              {[
                'El usuario entra a la marca correcta.',
                'Selecciona servicio o explica su necesidad.',
                'Recibe estimado en tiempo real.',
                'Pasa a WhatsApp para cierre y seguimiento.',
              ].map((step, index) => (
                <li key={step} className="flex gap-4 rounded-2xl bg-brand-light p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm leading-6 text-brand-muted">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="surface-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-muted">
              Blog / noticias
            </p>
            <h2 className="mt-2 text-3xl font-black text-brand-blue">
              Contenido para SEO y confianza
            </h2>

            <div className="mt-6 grid gap-4">
              {blogCards.map((card) => (
                <article key={card.title} className="rounded-[22px] border border-brand-line bg-brand-surface p-5">
                  <h3 className="text-lg font-black text-brand-blue">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="section-shell pt-0">
        <div className="surface-card bg-brand-gradient p-8 text-white md:p-10">
          <h2 className="text-3xl font-black md:text-4xl">Contacto directo</h2>
          <p className="mt-3 max-w-2xl text-white/85">
            Para seguimiento comercial, cotización o soporte, el flujo más
            rápido es WhatsApp. El sitio deja todo listo para eso.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+526646300473" className="btn-secondary border-white/20 bg-white/10 text-white hover:border-white hover:text-white">
              Llamar ahora
            </a>
            <a href="mailto:info@itimbre.com" className="btn-secondary border-white/20 bg-white/10 text-white hover:border-white hover:text-white">
              Enviar correo
            </a>
            <Link href="/neartec#cotizador" className="btn-primary bg-white text-brand-blue hover:bg-brand-light">
              Cotizar NearTec
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
