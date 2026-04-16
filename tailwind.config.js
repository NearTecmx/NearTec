/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores extraídos del branding oficial de los PDFs
        neartec: {
          blue: '#1E3A8A', // Azul corporativo
          light: '#3B82F6',
        },
        itimbre: {
          indigo: '#4F46E5', // Tono iTimbre
          dark: '#312E81',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Tipografía moderna, mejora usabilidad
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Necesario para que el select y los inputs del cotizador se vean pro
  ],
}