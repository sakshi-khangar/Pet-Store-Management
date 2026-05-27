/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#aa3bff',
        'primary-hover': '#8a2fd6',
        'primary-light': 'rgba(170, 59, 255, 0.1)',
        'primary-border': 'rgba(170, 59, 255, 0.5)',
      },
      borderRadius: {
        'xl': '20px',
        'full-xl': '30px',
      },
      spacing: {
        '80': '80px',
      },
    },
  },
  plugins: [],
}
