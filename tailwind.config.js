/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: '#eeff26',
        "dark-bg": 'rgb(17, 25, 35)',
        "dark-op": '#192635',
        "dark-border": '#345170',
        "light-blue": '#AAB7CC'
      },
      fontFamily: {
        sans:['DM Sans',...defaultTheme.fontFamily.sans]
      },
      fontSize: { 
        base: ['12px', '20px'],
      },
      backgroundImage: {
        'pattern':'linear-gradient(rgb(52, 81, 112) 33%, rgba(255, 255, 255, 0) 0px)'
      }
    },
  },
  plugins: [],
}

