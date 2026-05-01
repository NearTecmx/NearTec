import Link from 'next/link'
export default function NotFound(){ return <section className="page-hero"><div className="container"><span className="eyebrow">404</span><h1>Ruta no encontrada.</h1><p>Regresa al cotizador o a la landing de diagnóstico.</p><Link className="btn btn-green" href="/">Volver al inicio</Link></div></section> }
