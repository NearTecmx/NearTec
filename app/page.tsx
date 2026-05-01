import Link from 'next/link'
import SalesConsole from '@/components/SalesConsole'
import QuoteEngine from '@/components/QuoteEngine'
import LeadForm from '@/components/LeadForm'
import { CONTACT, leadPains, proofStats, solutions } from '@/lib/neartec-data'

export default function HomePage(){
  return <>
    <section className="hero"><div className="container hero-grid"><div><span className="eyebrow">NearTec · sistema comercial conectado</span><h1>Convierte más prospectos con tecnología que sí opera.</h1><p>Integramos web, CRM, WhatsApp, CompuNegocio, CN7, nube, correo y soporte para captar, filtrar, cotizar y enviar al asesor solo oportunidades con contexto.</p><div className="hero-actions"><Link className="btn btn-green" href="/cotizador">Cotizar mi solución</Link><Link className="btn btn-outline" href="/landing">Ver diagnóstico rápido</Link><a className="btn btn-dark" href={`https://wa.me/${CONTACT.whatsappNumber}`}>WhatsApp</a></div><div className="proof-line"><span>Web + CRM</span><span>CompuNegocio + CN7</span><span>PDF + WhatsApp</span><span>SEO + Lighthouse ready</span></div></div><SalesConsole/></div><div className="container trust-strip">{proofStats.map(([a,b])=><div key={a}><b>{a}</b><span>{b}</span></div>)}</div></section>
    <section className="section"><div className="container split"><div className="section-title"><span className="eyebrow">No más piezas sueltas</span><h2>Tu operación comercial necesita una ruta, no otro proveedor aislado.</h2><p>La web atrae, el CRM filtra, WhatsApp acelera, CompuNegocio opera, CN7 sostiene y el soporte evita que todo dependa de improvisación.</p></div><div className="solutions-grid">{solutions.map(s=><Link href={s.href} className={`nt-card solution-card bg-gradient-to-br ${s.accent}`} key={s.title}><div><small>{s.tag}</small><h3>{s.title}</h3><p>{s.summary}</p></div><ul>{s.bullets.map(b=><li key={b}>{b}</li>)}</ul></Link>)}</div></div></section>
    <section className="section-tight"><div className="container dark-band"><div className="section-title"><span className="eyebrow">Dolores que sí cuestan ventas</span><h2>Diseñado para leads potenciales, no para explicar la empresa eternamente.</h2></div><div className="pain-grid mt-8">{leadPains.map(([a,b])=><div className="pain-card" key={a}><b>{a}</b><p>{b}</p></div>)}</div></div></section>
    <section className="section" id="cotizador"><div className="container"><QuoteEngine/></div></section>
    <section className="section-tight"><div className="container split"><div className="section-title"><span className="eyebrow">Campañas listas para convertir</span><h2>Landing publicitaria separada para tráfico frío.</h2><p>La home construye autoridad. La landing filtra intención y manda el caso a ventas sin fricción.</p><Link className="btn btn-dark mt-5" href="/landing">Abrir landing</Link></div><LeadForm source="home-v4"/></div></section>
  </>
}
