/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0f172a', // Slate 900
          blue: '#1e3a8a', // Blue 900
          lightBlue: '#3b82f6', // Blue 500
          gray: '#f8fafc', // Slate 50
          darkGray: '#334155', // Slate 700
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
