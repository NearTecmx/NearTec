/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0A2540',
          green: '#00D1A1',
          light: '#F8FAFC',
          white: '#FFFFFF',
          ink: '#1e293b',
          muted: '#64748b',
          line: '#e2e8f0',
          surface: '#f1f5f9',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(135deg, #0a2540 0%, #00d1a1 100%)',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
        lift: '0 20px 50px rgba(15, 23, 42, 0.15)',
      },
      borderRadius: {
        base: '1rem',
        card: '1.75rem',
        large: '2rem',
      },
    },
  },
  plugins: [],
}
