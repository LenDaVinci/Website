/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/main.js', "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme:  {
    screens: {
      'm': '968px',
      
    },
      extend: {
        backgroundImage: {
          'bgimg': 'url("./assets/images/lp1.jpeg")',
          'gentimg': 'url("./assets/images/gent.png")'
        },
        fontFamily: {
          glacialIndifference: ["glacialIndiffernce", "sans-serif"]
        },
        colors :{
          'textcolor': '#f1e5d9',
        },
        spacing:{
          'notew': '24rem',
          'noteh': '16rem',
          'tripimg': '50vh'
        }
    }
},
  plugins: [],
}

