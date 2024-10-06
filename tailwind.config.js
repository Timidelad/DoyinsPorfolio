/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backGroundCl: '#000000',
        boldTextCl: '#FAFAFA',
        navBarCl: '#0B0A0A',
        strokeCl: '#FFFFFF',
        imgContainerCl: '#171616',
        bodyTextCl: '#989898',
        purpleCl: '#7A6DFF',
        purpleSt: '#7A6DFE',
        purpletx: '#776AFE',
      },
      fontFamily: {
        workSans: ['Work Sans', 'sans-serif']
      },
      letterSpacing: {
        'normalSpace': '15%'
      },
      keyframes: {
        wiggle : {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

