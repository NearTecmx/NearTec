import Link from 'next/link'
import { CONTACT } from '@/lib/neartec-data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2 className="text-3xl font-black tracking-tight">NearTec</h2>
          <p className="mt-3 max-w-md">Tecnología, operación comercial, CompuNegocio, CN7, web, CRM, nube, correo y soporte para empresas que quieren vender y operar con control.</p>
        </div>
        <div><b>Venta</b><p><Link href="/landing">Landing</Link></p><p><Link href="/cotizador">Cotizador</Link></p><p><Link href="/contacto">Contacto</Link></p></div>
        <div><b>Soluciones</b><p><Link href="/compunegocio">CompuNegocio</Link></p><p><Link href="/cn7">CN7 / Nube</Link></p><p><Link href="/crm-automatizacion">CRM</Link></p></div>
        <div><b>Contacto</b><p><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></p><p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p><p>{CONTACT.address}</p></div>
      </div>
    </footer>
  )
}
