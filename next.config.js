/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },

  redirects: async () => {
    return [
      {
        source: '/cotizar',
        destination: '/#cotizador',
        permanent: false,
      },
      {
        source: '/contacto',
        destination: '/#contacto',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
