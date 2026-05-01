/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [
      { source: '/automatizacion', destination: '/crm-automatizacion', permanent: true },
      { source: '/infraestructura', destination: '/cn7', permanent: true },
      { source: '/emailing', destination: '/crm-automatizacion', permanent: true },
      { source: '/sistemas', destination: '/compunegocio', permanent: true },
      { source: '/plataforma', destination: '/', permanent: true },
      { source: '/neartec', destination: '/', permanent: true },
      { source: '/blog', destination: '/recursos', permanent: true },
      { source: '/nosotros', destination: '/contacto', permanent: true },
      { source: '/casos-de-exito', destination: '/casos', permanent: true },
    ]
  },
  async headers() {
    return [
      { source: '/:path*', headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      ]},
      { source: '/images/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]},
    ]
  },
}
module.exports = nextConfig
