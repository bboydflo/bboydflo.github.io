const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1'
      },

      // https://tail-animista.vercel.app/
      animation: {
        'slide-top': 'slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-in-bottom': 'slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
      },
      keyframes: {
        'slide-in-bottom': {
          '0%': {
            transform: 'translateY(100px)',
            opacity: '0'
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        'slide-top': {
          '0%': {
            transform: 'translateY(-100px)',
            opacity: '0'
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.backface-hidden': {
          'backface-visibility': 'hidden'
        },
        '.skewed-polygon': {
          'clip-path': 'polygon(0 5%, 100% 0%, 100% 95%, 0 100%)'
        },
        '.skewed-polygon-sm': {
          'clip-path': 'polygon(0 9%, 100% 0%, 100% 91%, 0 100%)'
        },
        '.skewed-polygon-md': {
          'clip-path': 'polygon(0 13%, 100% 0%, 100% 87%, 0 100%)'
        },
        '.skewed-polygon-lg': {
          'clip-path': 'polygon(0 15%, 100% 0%, 100% 85%, 0 100%)'
        }
      }

      addUtilities(newUtilities)
    }),
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography'),
  ],
}
