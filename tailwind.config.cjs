/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,astro}'],
  theme: {
    extend: {
      colors: {
        'primary-basic': '#003cc6',
        primary: {
          50: '#e7f7ff',
          100: '#d3f0ff',
          200: '#b0e1ff',
          300: '#81caff',
          400: '#4fa4ff',
          500: '#287bff',
          600: '#044fff',
          700: '#004eff',
          800: '#003cc6',
          900: '#0b3da4'
        },
        'secondary-basic': '#18dfb4',
        secondary: {
          50: '#eafff8',
          100: '#ccffed',
          200: '#9dfddf',
          300: '#5ff6d0',
          400: '#18dfb4',
          500: '#00cea7',
          600: '#00a889',
          700: '#008771',
          800: '#006a5b',
          900: '#00574c'
        }
      },
      fontFamily: {
        body: ['Venacti Regular', 'system-ui', 'sans-serif'],
        title: ['Venacti Bold', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
