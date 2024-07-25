/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '24px', // default padding
        md: '48px', // padding untuk layar md
        lg: '96px', // padding untuk layar lg
        xl: '192px', // padding untuk layar xl
      },
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',    // Border radius 32px
        '5xl': '2.5rem',  // Border radius 40px
        '6xl': '3rem',    // Border radius 48px
        '7xl': '3.5rem',  // Border radius 56px
      },
      colors: {
        primary: '#1F4B43',
        secondary: '#E7C873'
      },
      screens: {
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Mengganti font default sans
      },
    },
  },
  plugins: [],
}
