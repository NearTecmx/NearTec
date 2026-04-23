/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/inicio',
        destination: '/',
        permanent: false,
      },
      {
        source: '/cotizar',
        destination: '/cotizador',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig