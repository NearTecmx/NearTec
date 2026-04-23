export interface BlogPost {
  slug: string
  tag: string
  title: string
  excerpt: string
  dateLabel: string
  featured?: boolean
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'como-saber-si-tu-empresa-necesita-un-sitio-web-que-venda',
    tag: 'Sitios web',
    title: 'Cómo saber si tu empresa necesita un sitio web que venda y no solo se vea bonito',
    excerpt: 'Señales claras para detectar cuándo tu página actual está frenando ventas y no ayudando a convertir.',
    dateLabel: 'Abril 2026',
    featured: true,
  },
  {
    slug: 'errores-que-hacen-que-los-leads-se-pierdan',
    tag: 'Automatización',
    title: 'Errores que hacen que los leads se pierdan aunque sí te estén escribiendo',
    excerpt: 'Qué rompe el seguimiento comercial y cómo corregirlo con una ruta simple.',
    dateLabel: 'Abril 2026',
  },
  {
    slug: 'cuando-conviene-instalar-compunegocio',
    tag: 'CompuNegocio',
    title: 'Cuándo sí conviene instalar CompuNegocio en un negocio con caja, inventario y varias estaciones',
    excerpt: 'Una guía clara para tiendas, retail y operaciones que ya necesitan más control.',
    dateLabel: 'Abril 2026',
  },
  {
    slug: 'hosting-vps-o-nube-que-conviene',
    tag: 'Infraestructura',
    title: 'Hosting, VPS o nube: qué conviene según el tamaño y la operación de tu empresa',
    excerpt: 'Una explicación directa para elegir mejor sin perderte en palabras técnicas.',
    dateLabel: 'Abril 2026',
  },
  {
    slug: 'porque-tu-correo-corporativo-importa',
    tag: 'Correo',
    title: 'Por qué tu correo corporativo sí importa cuando quieres vender y dar confianza',
    excerpt: 'La imagen, la entrega y la continuidad también impactan la conversión.',
    dateLabel: 'Abril 2026',
  },
  {
    slug: 'que-puedes-cotizar-hoy-con-neartec',
    tag: 'Ventas',
    title: 'Qué puedes cotizar hoy con NearTec y cómo saber cuál servicio sí te conviene',
    excerpt: 'Una guía rápida para entrar por la ruta correcta desde la primera visita.',
    dateLabel: 'Abril 2026',
  },
]