module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    animationDelay: {
      600: '-600ms',
      700: '-800ms',
      800: '-1000ms',
      900: '-1200ms',
      1000: '-1400ms',
      1100: '-1600ms'
    },
    extend: {
      colors: {
        textPrimary: '#282e3e',
        borderColor: '#a8b1ff',
        colorPrimary: '#4254ff',
        bgColor: '#f6f7fb',
        bgDark: '#0a092d',
        bgDarkSc: '#13141b',
        bgDarkTh: '#1b1d28',
        bgElement: '#2e3956',
        textDark: '#f6f7fb',
        textHover: '#fecd20',
        textColor: '#303545'
      },
      inset: {
        dropdown: '110%'
      },
      spacing: {
        header: '60px'
      },

      keyframes: {
        showModalY: {
          to: {
            transform: 'translateY(0)',
            opacity: '1'
          },
          from: {
            transform: 'translateY(-100%)',
            opacity: '0'
          }
        },
        hiddeModalY: {
          from: {
            transform: 'translateY(0)',
            opacity: '1'
          },
          to: {
            transform: 'translateY(-100%)',
            opacity: '0'
          }
        },
        fadeIn: {
          from: {
            transform: 'translateY(100%)'
          },
          to: {
            transform: 'translateY(0)'
          }
        },
        scaling: {
          '0%': {
            transform: 'scale(0.2)'
          },
          '40%': {
            transform: 'scale(0.2)'
          },
          '100%': {
            transform: 'scale(0.2)'
          },
          '20%': {
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        showModalY: 'showModalY 1s linear',
        hiddeModalY: 'hiddeModalY 1s linear',
        showModalY5: 'showModalY 0.5s linear',
        hiddeModalY5: 'hiddeModalY 0.5s linear',
        fadeIn: 'fadeIn 1s linear',
        scaling: 'scaling 1.8s ease-in-out infinite'
      }
    }
  },
  plugins: [
    require('tailwindcss-animation-delay'),
    require('@tailwindcss/line-clamp')
  ]
}
