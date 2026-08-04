/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      mont: ['Libre Baskerville', 'Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
    },
    container: {
    center: true,
    padding: '1rem',
    screens: {
      lg: '1200px',
      xl: '1200px',
      '2xl': '1200px',
    },
  },
  },
  plugins: [],
}

