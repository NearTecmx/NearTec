import Link from 'next/link'
import { CONTACT } from '@/lib/neartec-pricing'
import { LiveMetricBars, NearTecFlowMockup } from '@/components/NearTecPremiumVisuals'

const intents = [
  {
    title: 'Quiero una propuesta',
    body: 'Si ya sabes que quieres una ruta comercial completa con stack sugerido y números base.',
    whatsapp: 'Hola, quiero una propuesta guiada de NearTec.',
  },
  {
    title: 'Quiero una demo',
    body: 'Si quieres ver el sistema o la ruta en vivo antes de decidir.',
    whatsapp: 'Hola, quiero agendar una demo con NearTec.',
  },
  {
    title: 'Quiero CompuNegocio',
    body: 'Si el dolor está en caja, inventario, estaciones, timbres o CN7.',
    whatsapp: 'Hola, quiero revisar CompuNegocio con NearTec.',
  },
  {
    title: 'Quiero infraestructura',
    body: 'Si el reto está en hosting, nube, correo corporativo o continuidad.',
    whatsapp: 'Hola, quiero revisar infraestructura con NearTec.',
  },
  {
    title: 'Quiero CRM y automatización',
    body: 'Si el problema es lead filtering, seguimiento y agenda comercial.',
    whatsapp: 'Hola, quiero revisar CRM y automatización con NearTec.',
  },
  {
    title: 'Necesito soporte',
    body: 'Si lo que ya tienes necesita revisión, ajuste o acompañamiento.',
    whatsapp: 'Hola, necesito soporte con NearTec.',
  },
]

export default function ContactoPage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="cinematic-reveal">
            <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
              Contacto y agenda
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.96] text-[#0f1115] sm:text-5xl lg:text-6xl">
              Habla con NearTec por la ruta correcta desde el inicio.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#67717a] sm:text-base">
              Aquí la prioridad no es meterte a un formulario muerto. La prioridad es saber si vienes
              por propuesta, demo, CompuNegocio, infraestructura o soporte y llevarte directo al
              siguiente paso útil.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero hablar con NearTec.')}`} target="_blank" rel="noreferrer" className="btn-primary">
                Abrir WhatsApp
              </a>
              <Link href="/cotizador" className="btn-secondary">
                Iniciar diagnóstico
              </Link>
            </div>
          </div>
          <div className="cinematic-reveal delay-2">
            <LiveMetricBars />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
            Selector de intención
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.45rem]">
            Entra por la necesidad correcta y aceleras la venta.
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {intents.map((item, index) => (
            <a
              key={item.title}
              href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(item.whatsapp)}`}
              target="_blank"
              rel="noreferrer"
              className={`rounded-[28px] border border-[#e6e8ea] bg-white p-5 shadow-[0_18px_40px_rgba(15,17,21,0.06)] transition hover:translate-y-[-2px] cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <h3 className="text-[1.08rem] font-black text-[#0f1115]">{item.title}</h3>
              <p className="mt-3 text-sm leading-8 text-[#67717a]">{item.body}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div className="cinematic-reveal">
          <NearTecFlowMockup />
        </div>
        <div className="rounded-[34px] border border-[#dce8bf] bg-white p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] cinematic-reveal delay-2 sm:p-7">
          <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
            Canales directos
          </span>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ['WhatsApp', 'El canal más rápido para seguir cotización, demo o revisión.', `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hola, quiero información de NearTec.')}`],
              ['Correo', 'Para mandar contexto, requerimientos y validación formal.', `mailto:${CONTACT.email}`],
              ['Teléfono', 'Para una conversación directa cuando ya estás listo para avanzar.', CONTACT.phoneHref],
              ['Diagnóstico', 'Si aún estás definiendo qué necesitas exactamente.', '/cotizador'],
            ].map(([title, body, href]) =>
              href.startsWith('/') ? (
                <Link key={title} href={href} className="rounded-[24px] border border-[#e6e8ea] bg-[#f9fbf4] p-4 shadow-sm">
                  <h3 className="text-base font-black text-[#0f1115]">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#67717a]">{body}</p>
                </Link>
              ) : (
                <a key={title} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="rounded-[24px] border border-[#e6e8ea] bg-[#f9fbf4] p-4 shadow-sm">
                  <h3 className="text-base font-black text-[#0f1115]">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#67717a]">{body}</p>
                </a>
              )
            )}
          </div>
          <div className="mt-6 rounded-[24px] border border-[#e6e8ea] bg-white p-4 shadow-sm">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#67717a]">Contacto público actual</p>
            <p className="mt-3 text-sm leading-8 text-[#24303a]">
              {CONTACT.address}
              <br />
              {CONTACT.email}
              <br />
              {CONTACT.phoneDisplay}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}