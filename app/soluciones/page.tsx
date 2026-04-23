import Link from 'next/link'
import { PlatformDeepBoard, ResourcePulsePanel } from '@/components/NearTecPremiumVisuals'

const solutionRoutes = [
  ['Presencia para vender', 'Sitio web, landing, ecommerce, hosting y correo para explicar mejor tu oferta.', '/diseno-web'],
  ['Automatización comercial', 'CRM, lead filtering, agenda, WhatsApp y seguimiento para no perder oportunidades.', '/automatizacion'],
  ['Operación conectada', 'CompuNegocio, punto de venta, inventario, timbres y control diario.', '/compunegocio'],
  ['Infraestructura y nube', 'Hosting, VPS, CN7, respaldo, correo corporativo y soporte.', '/infraestructura'],
  ['Emailing corporativo', 'Campañas, segmentación, estadísticas y recuperación de prospectos.', '/emailing'],
  ['Conexión fiscal', 'Integración con iTimbre cuando tu operación requiere CFDI o timbres.', '/contacto'],
]

const pains = [
  ['Web desactualizada', 'Tu sitio no explica ni genera contacto con intención clara.'],
  ['Leads fríos', 'Llegan prospectos, pero no existe seguimiento ni prioridad.'],
  ['Operación dispersa', 'Tu negocio depende de herramientas separadas y soporte fragmentado.'],
  ['Crecimiento sin orden', 'Necesitas saber qué contratar primero y qué puede esperar.'],
]

export default function SolucionesPage() {
  return (
    <div>
      <section className="ntx-hero">
        <div className="ntx-container ntx-hero__grid">
          <div className="ntx-hero__copy">
            <span className="ntx-badge">Soluciones NearTec</span>
            <h1>Paquetes claros para vender y operar mejor.</h1>
            <p>NearTec agrupa diseño web, automatización, CompuNegocio, nube y soporte en rutas comprables por necesidad.</p>
            <div className="ntx-hero__actions">
              <Link href="/cotizador" className="ntx-btn ntx-btn--green">Cotizar</Link>
              <Link href="/contacto" className="ntx-btn ntx-btn--ghost">Hablar</Link>
            </div>
          </div>
          <PlatformDeepBoard />
        </div>
      </section>

      <section className="ntx-section">
        <div className="ntx-container">
          <div className="ntx-section-head">
            <span className="ntx-badge">Elige tu ruta</span>
            <h2>Entra por el problema, no por el tecnicismo.</h2>
            <p>Así la propuesta sale más clara, más rápida y más fácil de comparar.</p>
          </div>
          <div className="ntx-service-grid">
            {solutionRoutes.map(([title, copy, href], index) => (
              <Link key={title} href={href} className="ntx-service-card">
                <span className="ntx-service-card__icon">{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <strong>Ver ruta</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ntx-section">
        <div className="ntx-container ntx-split">
          <div>
            <span className="ntx-badge">Dolores frecuentes</span>
            <h2>NearTec aplica cuando la operación ya no debe seguir improvisando.</h2>
            <div className="ntx-pain-grid">
              {pains.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
          <ResourcePulsePanel />
        </div>
      </section>

      <section className="ntx-section">
        <div className="ntx-container">
          <div className="ntx-final-cta">
            <span className="ntx-badge ntx-badge--dark">Diagnóstico</span>
            <h2>Si no sabes qué ruta elegir, empieza por cotizar.</h2>
            <p>El cotizador filtra tu necesidad y arma un resumen para ventas.</p>
            <div className="ntx-hero__actions">
              <Link href="/cotizador" className="ntx-btn ntx-btn--green">Cotizar</Link>
              <Link href="/contacto" className="ntx-btn ntx-btn--ghost-dark">Contacto</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
