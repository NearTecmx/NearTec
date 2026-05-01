/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        near: {
          green: '#8cc63e',
          lime: '#b6ff4a',
          ink: '#111814',
          graphite: '#1f2a24',
          soft: '#f6faef',
          line: '#dce9d0',
          mute: '#647060',
        }
      },
      borderRadius: { '4xl': '2rem', '5xl': '2.5rem' },
      boxShadow: {
        soft: '0 22px 70px rgba(28, 51, 24, 0.12)',
        lift: '0 34px 110px rgba(28, 51, 24, 0.18)'
      }
    }
  },
  plugins: []
}
module.exports = config
