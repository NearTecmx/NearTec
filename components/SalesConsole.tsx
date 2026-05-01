export default function SalesConsole(){
  const nodes = [
    ['01', 'Entrada', 'Web / Ads / SEO', '96%'],
    ['02', 'Filtro', 'CRM + scoring', '88%'],
    ['03', 'Cotización', 'PDF + WhatsApp', '91%'],
    ['04', 'Operación', 'CompuNegocio + CN7', '84%'],
  ]
  return <div className="command-visual" aria-label="Visual de sistema comercial NearTec">
    <div className="halo-orbit" />
    <div className="console-glass">
      <div className="console-toolbar">
        <div><span className="live-pill"><i/> Sistema comercial activo</span><b>NearTec Command Layer</b></div>
        <span className="console-code">NT-OS/04</span>
      </div>
      <div className="dashboard-card main-metric">
        <span>Ruta estimada</span>
        <strong>Lead → Cotización → Cierre</strong>
        <div className="sparkline"><i/><i/><i/><i/><i/><i/></div>
      </div>
      <div className="node-stack">
        {nodes.map(([step, title, detail, progress]) => <div className="system-node" key={step}>
          <span>{step}</span><div><b>{title}</b><small>{detail}</small></div><em>{progress}</em>
        </div>)}
      </div>
      <div className="console-grid-mini">
        <div><small>Neary AI</small><b>Perfilando</b></div>
        <div><small>WhatsApp</small><b>Contextual</b></div>
        <div><small>Webhook</small><b>Preparado</b></div>
      </div>
    </div>
    <div className="floating-chip chip-a">PDF listo</div>
    <div className="floating-chip chip-b">CRM SLA</div>
    <div className="floating-chip chip-c">CN7 backup</div>
  </div>
}
