/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  async headers() {
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
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },

  async redirects() {
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
      {
        source: '/inicio',
        destination: '/#inicio',
        permanent: false,
      },
    ]
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'neartec.com',
      },
    ],
  },
}

module.exports = nextConfig