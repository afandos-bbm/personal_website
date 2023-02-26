/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,astro,jsx,ts,tsx}'],
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
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 2s ease-out 1.8s 1 normal both'
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '2ch' },
          '15%, 20%': { width: '4ch' },
          '25%, 30%': { width: '6ch' },
          '35%, 40%': { width: '8ch' },
          '45%, 50%': { width: '10ch' },
          '55%, 60%': { width: '12ch' },
          '65%, 70%': { width: '14ch' },
          '75%, 80%': { width: '16ch' },
          '85%, 90%': { width: '18ch' },
          '95%': { width: '20ch' }
        },
        cursor: {
          '0%': {},
          '40%': { opacity: 1 },
          '60%': {},
          '100%': { opacity: 0 }
        }
      }
    },
    variants: {
      extend: {
        display: ['group-hover']
      }
    },
    plugins: []
  }
}
