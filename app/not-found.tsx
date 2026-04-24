import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section page">
      <div className="container">
        <div className="nt-card contact-card" style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow">404</span>
          <h1>Esta sección no está disponible.</h1>
          <p className="lead">Vuelve al inicio o entra a contacto para guiarte a la ruta correcta.</p>
          <div className="button-row" style={{ justifyContent: 'center' }}>
            <Link href="/" className="btn btn-green">
              Inicio
            </Link>
            <Link href="/contacto" className="btn btn-outline">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
