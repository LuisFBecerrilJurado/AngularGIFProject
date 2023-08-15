/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {

    },
    extend: {
      colors: {
        'primary': '#FFD9CE',
        'secondary': '#C2E7D9',
        'enfasis': '#BA3B46',
        'font': '#1D1E2C',
        'focus': '#4EA5D9',
      }
    },
  },
  plugins: [],
}
