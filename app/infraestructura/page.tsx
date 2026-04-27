import type { Metadata } from 'next'
import Link from 'next/link'
import { InfrastructurePulseBoard, LiveMetricBars } from '@/components/NearTecPremiumVisuals'

export const metadata: Metadata = {
  title: 'Infraestructura cloud, hosting, correo y CN7',
  description:
    'Infraestructura NearTec para empresas: hosting, VPS, correo corporativo, CN7, respaldos, soporte remoto y continuidad operativa.',
}

const items = [
  ['Hosting empresarial', 'Base estable para sitios, landings y aplicaciones.'],
  ['VPS', 'Servidor para proyectos que requieren mayor control.'],
  ['Correo corporativo', 'Mejor imagen, confianza y administración de comunicación.'],
  ['CN7', 'Servidor y base de datos en nube con respaldo para CompuNegocio.'],
  ['Respaldo', 'Continuidad para proteger información operativa.'],
  ['Soporte', 'Atención remota para configuración, cambios y operación.'],
]

const checks = [
  ['Dominio y DNS', 'Evita configuraciones dispersas que rompen correo o web.'],
  ['Correo', 'Revisa entregabilidad, identidad y accesos.'],
  ['Backups', 'Define frecuencia, ubicación y recuperación.'],
  ['Accesos', 'Controla usuarios, permisos y continuidad.'],
]

export default function InfraestructuraPage() {
  return (
    <>
      <section className="section page">
        <div className="container split">
          <div>
            <span className="eyebrow">Infraestructura</span>
            <h1>Nube, correo y respaldo para operar estable.</h1>
            <p className="lead">Hosting, VPS, correo corporativo, CN7 y continuidad para que tu operación no dependa de piezas frágiles.</p>
            <div className="mini-grid">{items.map(([t,c])=><article key={t}><h3>{t}</h3><p>{c}</p></article>)}</div>
            <div className="button-row"><Link href="/cotizador" className="btn btn-green">Cotizar infraestructura</Link><Link href="/blog/ciberseguridad-ia-nube-pymes-mexico-2026" className="btn btn-outline">Leer seguridad 2026</Link></div>
          </div>
          <InfrastructurePulseBoard />
        </div>
      </section>

      <section className="section compact">
        <div className="container split reverse">
          <LiveMetricBars />
          <div>
            <span className="eyebrow">Checklist técnico</span>
            <h2>Antes de crecer, revisa la base.</h2>
            <div className="stack-list">{checks.map(([t,c])=><article key={t}><h3>{t}</h3><p>{c}</p></article>)}</div>
          </div>
        </div>
      </section>
    </>
  )
}
