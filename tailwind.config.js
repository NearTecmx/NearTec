/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#77b900',
          lime: '#a4e635',
          ink: '#0b1110',
          dark: '#10240e',
          muted: '#4c5a50',
          line: '#dbe8d0',
        },
      },
      boxShadow: {
        brand: '0 26px 80px rgba(17, 49, 12, 0.13)',
        'brand-strong': '0 34px 110px rgba(17, 49, 12, 0.2)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

module.exports = config