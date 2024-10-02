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
        purpleSt: '#7A6DFE'
      },
      fontFamily: {
        workSans: ['Work Sans', 'sans-serif']
      },
      letterSpacing: {
        'normalSpace': '15%'
      }
    },
  },
  plugins: [],
}

