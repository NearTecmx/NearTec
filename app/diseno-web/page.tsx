import type { Metadata } from 'next'
import Link from 'next/link'
import { WebConversionBoard, LiveMetricBars } from '@/components/NearTecPremiumVisuals'

export const metadata: Metadata = {
  title: 'Diseño web, landing pages y conversión',
  description:
    'Diseño web NearTec: sitios, landing pages y ecommerce con UX comercial, velocidad, SEO base, formularios, WhatsApp y seguimiento.',
}

const items = [
  ['Mensaje claro', 'El usuario entiende qué vendes y por qué debería contactarte.'],
  ['UX comercial', 'Secciones, CTAs y lectura pensadas para celular y escritorio.'],
  ['Formularios conectados', 'Los contactos llegan con contexto, no como mensajes sueltos.'],
  ['SEO base', 'Metadatos, estructura, sitemap y contenido útil para búsqueda.'],
  ['Carga rápida', 'Imágenes y componentes preparados para buen rendimiento.'],
  ['Responsive real', 'Nada importante se recorta o queda fuera del área visible.'],
]

export default function DisenoWebPage() {
  return (
    <>
      <section className="section page">
        <div className="container split">
          <div>
            <span className="eyebrow">Diseño web</span>
            <h1>Sitios que explican, venden y generan contactos.</h1>
            <p className="lead">Creamos páginas, landings y ecommerce con estructura de conversión, no solo diseño bonito.</p>
            <div className="mini-grid">{items.map(([t,c])=><article key={t}><h3>{t}</h3><p>{c}</p></article>)}</div>
            <div className="button-row"><Link href="/cotizador" className="btn btn-green">Cotizar web</Link><Link href="/blog/mexico-digital-2026-mobile-first-ventas" className="btn btn-outline">Leer mobile-first</Link></div>
          </div>
          <WebConversionBoard />
        </div>
      </section>
      <section className="section compact"><div className="container"><LiveMetricBars /></div></section>
    </>
  )
}
