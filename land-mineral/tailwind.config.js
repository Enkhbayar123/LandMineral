/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This sets 'Inter' as the default font for 'font-sans'
        sans: ['Inter', 'sans-serif'], 
      },
      colors: {
        // Custom branding colors if you want to use them specifically
        brand: {
          dark: '#0f172a',  // slate-900
          main: '#059669',  // emerald-600
          accent: '#f59e0b', // amber-500
        }
      }
    },
  },
  plugins: [],
}