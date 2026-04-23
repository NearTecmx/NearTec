import Link from 'next/link'
import { PlatformDeepBoard, ResourcePulsePanel } from '@/components/NearTecPremiumVisuals'

const layers = [
  {
    title: 'Presencia digital',
    body: 'Sitio, landing o ecommerce con una promesa clara y CTA visibles.',
  },
  {
    title: 'Captación y marketing',
    body: 'Formularios, campañas y contenido que sí traen tráfico con intención.',
  },
  {
    title: 'Seguimiento comercial',
    body: 'CRM, lead filtering, automatización y agenda para no perder oportunidad.',
  },
  {
    title: 'Operación y control',
    body: 'CompuNegocio, permisos, reportes y flujo diario con menos fricción.',
  },
  {
    title: 'Infraestructura',
    body: 'Hosting, VPS, correo corporativo, respaldo y continuidad del entorno.',
  },
  {
    title: 'Conexión fiscal',
    body: 'Cuando aplica, NearTec conecta la capa fiscal con iTimbre sin romper la operación.',
  },
]

const businessRoutes = [
  'Quiero vender más',
  'Quiero ordenar mi operación',
  'Quiero modernizar infraestructura',
  'Quiero digitalizar administración y ventas',
  'Quiero conectar mi operación con facturación',
]

export default function PlataformaPage() {
  return (
    <div className="pb-14">
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div className="cinematic-reveal">
            <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
              Plataforma NearTec
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[0.96] text-[#0f1115] sm:text-5xl lg:text-6xl">
              La arquitectura digital para empresas que quieren vender y operar mejor.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#67717a] sm:text-base">
              Aquí no se trata de juntar servicios al azar. Se trata de conectar presencia digital,
              captación, seguimiento, operación, infraestructura y capa fiscal con una lógica que
              sí se entiende y sí se vende.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/cotizador" className="btn-primary">
                Cotizar
              </Link>
              <Link href="/contacto" className="btn-secondary">
                Hablar
              </Link>
            </div>
          </div>
          <div className="cinematic-reveal delay-2">
            <PlatformDeepBoard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
            Módulos activables
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.45rem]">
            Un ecosistema limpio que trabaja como una sola empresa.
          </h2>
          <p className="mt-4 text-[15px] leading-8 text-[#67717a]">
            Cada capa resuelve una fricción distinta. Juntas, hacen que la empresa se vea más
            seria, se sienta más ordenada y convierta mejor.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {layers.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-[28px] border border-[#e6e8ea] bg-white p-5 shadow-[0_18px_40px_rgba(15,17,21,0.06)] cinematic-reveal delay-${(index % 4) + 1}`}
            >
              <h3 className="text-[1.08rem] font-black text-[#0f1115]">{item.title}</h3>
              <p className="mt-3 text-sm leading-8 text-[#67717a]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_0.96fr] lg:px-8">
        <div className="rounded-[34px] border border-[#dce8bf] bg-white p-6 shadow-[0_24px_60px_rgba(15,17,21,0.08)] cinematic-reveal sm:p-7">
          <span className="inline-flex rounded-full border border-[#dce8bf] bg-[#eef7d7] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0f1115]">
            Rutas por perfil
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#0f1115] md:text-[2.35rem]">
            No todas las empresas necesitan el mismo stack.
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {businessRoutes.map((route) => (
              <div
                key={route}
                className="rounded-[24px] border border-[#e6e8ea] bg-[#f9fbf4] px-4 py-4 text-sm font-semibold text-[#24303a]"
              >
                {route}
              </div>
            ))}
          </div>
        </div>

        <div className="cinematic-reveal delay-2">
          <ResourcePulsePanel />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[34px] border border-[#dce8bf] bg-[#0f1115] p-6 text-white shadow-[0_28px_70px_rgba(15,17,21,0.22)] sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/14 bg-white/5 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-white">
                Cierre visual y comercial
              </span>
              <h2 className="mt-4 text-3xl font-black md:text-[2.35rem]">
                La ventaja no está en meter más cosas. Está en conectar lo correcto con claridad.
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-white/72">
                Cuando la plataforma está bien narrada, el sitio deja de sonar a “solución total”
                genérica y empieza a verse como una arquitectura comprable.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/cotizador" className="btn-primary">
                Empezar diagnóstico
              </Link>
              <Link href="/contacto" className="btn-secondary btn-secondary--light">
                Hablar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}