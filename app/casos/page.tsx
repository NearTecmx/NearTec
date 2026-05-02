import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Casos y proyectos NearTec',
  description: 'Ejemplos de rutas tecnológicas NearTec para web, apps, automatización, CompuNegocio, CN7, nube y soporte.',
}

export default function Page() {
  return (
    <ServicePage
      kind="casos"
      eyebrow="Casos NearTec"
      title="Proyectos donde la tecnología deja de estar suelta y empieza a trabajar conectada."
      description="Cada negocio requiere una combinación distinta: web, apps, CRM, automatización, CompuNegocio, CN7, nube, soporte o desarrollo a medida."
      proof={['Arquitectura por necesidad', 'Implementación por fases', 'Soporte continuo']}
      features={[
        ['Presencia y captación', 'Sitios, landings, formularios, WhatsApp y contenido técnico para explicar mejor el servicio.'],
        ['Operación y control', 'CompuNegocio, timbres, inventario, usuarios, reportes y mejoras operativas.'],
        ['Infraestructura y continuidad', 'CN7, nube, respaldo, hosting, correo, VPS, soporte y mantenimiento.'],
      ]}
    />
  )
}
