import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'CN7, nube y respaldo NearTec',
  description: 'Protege tu operación con CN7, nube y respaldo para trabajar con más continuidad.',
}

export default function Page() {
  return (
    <ServicePage
      kind="cn7"
      eyebrow="CN7 y nube"
      title="Protege tu información y trabaja con más continuidad."
      description="Llevamos tu operación a nube o respaldo para reducir riesgos y depender menos de una sola máquina local."
      features={[
        ['CN7 con respaldo', 'Ideal para negocios que buscan continuidad y protección.'],
        ['CN7 hospedado', 'Trabaja desde un entorno administrado con mayor estabilidad.'],
        ['Recuperación y tranquilidad', 'Tu información queda mejor preparada ante fallas.'],
      ]}
    />
  )
}
