/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
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
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}
