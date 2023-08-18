/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      acme: ['Acme'],
    },
    extend: {
      colors: {
        'primary': '#FFD9CE',
        'secondary': '#FDBCB4',
        'enfasis': '#BA3B46',
        'font': '#1D1E2C',
        'focus': '#4EA5D9',
      }
    },
  },
}
