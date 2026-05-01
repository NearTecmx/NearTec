export default function SalesConsole(){
  const nodes = [
    ['01', 'Más claridad', 'Sitio web + landing + SEO'],
    ['02', 'Más seguimiento', 'CRM + WhatsApp + automatización'],
    ['03', 'Más velocidad', 'Cotización + propuesta + contacto'],
    ['04', 'Más control', 'CompuNegocio + CN7 + soporte'],
  ]

  return <div className="command-visual" aria-label="Visual de soluciones NearTec">
    <div className="halo-orbit" />
    <div className="console-glass">
      <div className="console-toolbar">
        <div>
          <span className="live-pill"><i/> Soluciones listas para crecer</span>
          <b>NearTec Growth Panel</b>
        </div>
        <span className="console-code">NT / SALES</span>
      </div>

      <div className="dashboard-card main-metric">
        <span>Lo que obtiene tu negocio</span>
        <strong>Más prospectos claros, mejor seguimiento y una operación más estable.</strong>
        <div className="service-signal" aria-hidden="true">
          <div><small>Web</small><i/></div>
          <div><small>CRM</small><i/></div>
          <div><small>WhatsApp</small><i/></div>
          <div><small>POS</small><i/></div>
          <div><small>Nube</small><i/></div>
        </div>
      </div>

      <div className="node-stack">
        {nodes.map(([step, title, detail]) => <div className="system-node" key={step}>
          <span>{step}</span><div><b>{title}</b><small>{detail}</small></div><em>Activo</em>
        </div>)}
      </div>

      <div className="console-grid-mini">
        <div><small>Resultado</small><b>Más contactos útiles</b></div>
        <div><small>Seguimiento</small><b>Respuesta más rápida</b></div>
        <div><small>Operación</small><b>Más control diario</b></div>
      </div>
    </div>

    <div className="floating-chip chip-a">Sitio que vende</div>
    <div className="floating-chip chip-b">WhatsApp con orden</div>
    <div className="floating-chip chip-c">Operación estable</div>
  </div>
}
