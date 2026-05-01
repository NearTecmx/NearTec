export default function SalesConsole(){
  const rows=[['Web','Captación','88%'],['CRM','Seguimiento','92%'],['POS','Operación','81%'],['CN7','Continuidad','86%']]
  return <div className="sales-console"><div className="console-top"><div><b>NearTec Sales OS</b><p className="m-0 text-sm text-near-mute">Ruta comercial conectada</p></div><span className="status-dot"/></div><div className="pipeline">{rows.map(([a,b,c])=><div className="pipe-row" key={a}><b>{a}</b><div className="bar"><i style={{width:c}}/></div><span>{c}</span></div>)}</div><div className="mini-board"><div><span>Lead scoring</span><b>Activo</b></div><div><span>WhatsApp</span><b>Listo</b></div><div><span>Cotizador PDF</span><b>Incluido</b></div><div><span>CRM/Webhook</span><b>Preparado</b></div></div></div>
}
