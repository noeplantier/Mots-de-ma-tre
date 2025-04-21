/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        'DEFAULT': '0.5px',
      },
      textStrokeColor: {
        'white': '#ffffff',
      },
  

      colors: {
        pink: {
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          900: '#831843',
        },
        purple: {
          900: '#581c87',
        },
        neutral: {
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },


  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-white': {
          '-webkit-text-stroke': '0.5px white',
          'text-stroke': '0.5px white',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
}
}