'use client'

import { useMemo, useState } from 'react'
import {
  calculateNearTecQuote,
  CONTACT,
  formatMoney,
  getLeadQualification,
  getRecommendedModules,
  getTimbresPackageLabel,
  SERVICE_OPTIONS,
  TIMBRES_PACKAGES,
  type BillingCycle,
  type CloudPlan,
  type ServiceFocus,
} from '@/lib/neartec-pricing'

function openWhatsApp(message: string) {
  const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

const simplifiedServices: Array<{ value: ServiceFocus; title: string; copy: string; icon: string }> = [
  { value: 'diseno', title: 'Sitio web', copy: 'Para vender mejor online.', icon: '🌐' },
  { value: 'compunegocio', title: 'CompuNegocio', copy: 'Para caja, inventario y control.', icon: '🧾' },
  { value: 'automatizacion', title: 'Automatización', copy: 'Para responder y dar seguimiento.', icon: '⚙️' },
  { value: 'infraestructura', title: 'Infraestructura', copy: 'Para hosting, correo y continuidad.', icon: '☁️' },
  { value: 'cn7', title: 'CN7 / nube', copy: 'Para respaldo y operación en la nube.', icon: '🛡️' },
  { value: 'personalizado', title: 'Proyecto mixto', copy: 'Para una necesidad especial.', icon: '✨' },
]

const sizeOptions = [
  { seats: 1, label: '1 a 3 usuarios' },
  { seats: 5, label: '4 a 8 usuarios' },
  { seats: 12, label: '9 o más usuarios' },
]

export default function CotizadorNearTec() {
  const [serviceFocus, setServiceFocus] = useState<ServiceFocus>('compunegocio')
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly')
  const [seats, setSeats] = useState(3)
  const [includeImplementation, setIncludeImplementation] = useState(true)
  const [cloudPlan, setCloudPlan] = useState<CloudPlan>('none')
  const [timbresPackage, setT