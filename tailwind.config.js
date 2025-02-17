/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "appGabrielPortifolio/templates/**/*.html",
     "appGabrielPortifolio/static/**/*.html",
     "appGabrielPortifolio/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'darkblue': '#013A40', 
        'buttonblue':'#56868b',
        'primary':'#b3d1d4e8',
        'lightblue':'#C5D7D9',
      },
      backgroundImage: {
        'blueBackground': "url('/static/media/FundoBluee.png')",
        'noticiamateria': "url('/static/media/noticiamateria.png')",
        'imgAlfabeto': "url('/static/media/alfabeto.jpeg')",
      },
    },
  },
  plugins: [],
}
