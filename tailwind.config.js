/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      zIndex: {
        negative: -1,
      },
       fontFamily: {
         'anta': ['Anta', 'sans-serif'],
         'jersey': ['Jersey 20', 'sans-serif'],
        'dosis':['Dosis'],
        'cat':['Catamaran'],
       },
       keyframes: {
         'gradient-x': {
           '0%, 100%': {
             'background-size': '200% 200%',
             'background-position': 'left bottom'
           },
           '50%': {
             'background-size': '200% 200%',
             'background-position': 'right bottom'
           }
         },
         "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'marquee': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
       },
       animation: {
         'fade-in': 'fade-in 1s ease-out forwards',
        'bounce': 'bounce 1s infinite',
        'slide-in': 'slide-in 1s ease-out forwards',
        'marquee': 'marquee 20s linear infinite',
       },
       colors: {
        'primary-dark': '#000000',
        'primary-light': '#2A675C',
        'secondary-light': '#9fffed',
      },
     }
  },
  plugins: [],
 }
