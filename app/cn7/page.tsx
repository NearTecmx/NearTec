import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'CN7, nube y respaldo NearTec',
  description: 'CN7, nube, respaldo, hosting, VPS, correo y continuidad para empresas que necesitan operar con menos riesgo.',
}

export default function Page() {
  return (
    <ServicePage
      kind="cn7"
      eyebrow="CN7, nube e infraestructura"
      title="Menos riesgo local, más continuidad para operar."
      description="Llevamos tu sistema, respaldo o infraestructura a una ruta más estable con CN7, nube, hosting, VPS, correo, FTP y soporte técnico."
      proof={['CN7 desde $99 USD / mes', 'CN7 hospedado $149 USD / mes', 'Respaldo automático disponible']}
      features={[
        ['CN7 con respaldo', 'Ideal para negocios que necesitan proteger base de datos, sistema y continuidad operativa.'],
        ['Hosting, VPS, correo y FTP', 'Infraestructura administrada para proyectos, sistemas, correos corporativos y operación técnica.'],
        ['Recuperación y soporte', 'Mejor preparación ante fallas, cambios de equipo, pérdida de información o crecimiento operativo.'],
      ]}
    />
  )
}
