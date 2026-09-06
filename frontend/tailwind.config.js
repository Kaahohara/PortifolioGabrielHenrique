/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#013A40',
        buttonblue: '#56868b',
        primary: '#b3d1d4e8',
        lightblue: '#C5D7D9',
      },
      backgroundImage: {
        'blue-background': "url('/src/assets/media/FundoBluee.png')",
        'banner': "url('/src/assets/media/banner.png')",
        'noticiamateria': "url('/src/assets/media/noticiamateria.png')",
        'img-alfabeto': "url('/src/assets/media/alfabeto.jpeg')",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1.1)' },
          '50%': { transform: 'translateY(-10px) scale(1.1)' },
        },
        shake: {
          '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
          '20%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
          '40%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
          '60%': { transform: 'translate(3px, 2px) rotate(0deg)' },
          '80%': { transform: 'translate(1px, -1px) rotate(1deg)' },
          '100%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
        }
      },
      keyframes: {
        pulapula: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)', 
          },
          '50%': {
            transform: 'translateY(0)', 
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)', 
          },
        },
      },

      animation: {
        float: 'float 3s ease-in-out infinite',
        shake: 'shake 0.5s ease-in-out infinite',
        pulo: 'pulapula 1s 3 forwards',

      }
    },
  },
  plugins: [],
}