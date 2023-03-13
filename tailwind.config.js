/** @type {import('tailwindcss').Config} */
const { green } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
      success: '#5AAC44',
      primary: colors.blue[200]
     }
    },
  },
 
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
