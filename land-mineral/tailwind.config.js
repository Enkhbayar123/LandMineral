/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // We override 'emerald' so you don't have to rewrite all your code.
        emerald: {
          50: '#FdFaEf',
          100: '#Fbf6De',
          200: '#F6EcbD',
          300: '#F0E19b',
          400: '#EbD77A',
          500: '#D4AF37', // <--- Your Golden Yellow
          600: '#Aa8C2c', // Darker gold for hover states
          700: '#806921',
          800: '#554616',
          900: '#2b230b',
          950: '#151105',
        },
        brand: {
          dark: '#0f172a',
          main: '#D4AF37', // Updated this too
          accent: '#f59e0b',
        }
      }
    },
  },
  plugins: [],
}