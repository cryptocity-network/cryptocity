/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      current: {
        DEFAULT: 'currentColor'
      },
      white: {
        DEFAULT: '#ffffff'
      },
      black: {
        DEFAULT: '#000000'
      },
      blue: {
        DEFAULT: '#1F2348', /* rgb(31, 35, 72) */
        darker: '#2A2E51',
        dark: '#151833', /* rgb(21, 24, 51) */
        light: '#0582CA', /* rgb(5, 130, 202) */
        'light-darkened': '#0071C3', /* rgb(0, 113, 195) */
        'light-on-dark': '#0CA6FE', /* rgb(12, 166, 254) */
        'light-on-dark-darkened': '#0E99EC',
        s3: '#2C72C7',
        // TODO:
        's3-on-dark': '#2C72C7',
        's3-on-dark-darkened': '#2C72C7'
      },
      gold: {
        DEFAULT: '#E9B213', /* rgb(233, 178, 19) */
        darkened: '#E5A212'
      },
      /* Nimiq color palette */
      green: {
        DEFAULT: '#21BCA5', /* rgb(33, 188, 165) */
        light: '#88B04B',
        darkened: '#20B29E'
      },
      orange: {
        DEFAULT: '#FC8702', /* rgb(252, 135, 2) */
        darkened: '#FC7500'
      },
      red: {
        DEFAULT: '#D94432', /* rgb(216, 65, 51) */
        'on-dark': '#FF5C48',
        darkened: '#D13030'
      },
      purple: {
        DEFAULT: '#5F4B8B' /* rgb(95, 75, 139) */
      },
      pink: {
        DEFAULT: '#FA7268' /* rgb(250, 114, 104) */
      },
      brown: {
        DEFAULT: '#795548' /* rgb(121, 85, 72) */
      },
      gray: {
        DEFAULT: '#F4F4F4',
        light: '#FAFAFA'
      },
      highlight: 'rgba(31, 35, 72, 0.06)',
      card: 'white',
      // Utilities
      transparent: {
        DEFAULT: 'transparent',
        unset: 'unset'
      }
    },
    spacing: {
      0: '0rem',
      1: '0.0625rem',
      2: '0.125rem',
      4: '0.25rem',
      6: '0.375rem',
      8: '0.5rem',
      10: '0.625rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      22: '1.375rem',
      24: '1.5rem',
      26: '1.625rem',
      28: '1.75rem',
      32: '2rem',
      40: '2.5rem',
      48: '3rem',
      56: '3.5rem',
      64: '4rem',
      72: '4.5rem',
      80: '5rem',
      96: '6rem',
      104: '6.5rem',
      112: '7rem',
      120: '7.5rem',
      128: '8rem',
      136: '8.5rem',
      144: '9rem',
      160: '10rem',
      192: '12rem',
      200: '12.5rem',
      240: '15rem',
      280: '17.5rem',
      300: '18.75rem',
      320: '20rem',
      360: '22.5rem',

      // Utilities
      full: '100%',
      unset: 'unset',
      intrinsic: 'intrinsic',
      'fit-content': 'fit-content'
    },
    fontFamily: {
      sans: [
        'Mulish',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      mono: [
        'Fira Code',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ]
    },
    fontWeight: {
      extralight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
      extrablack: '1000'
    },
    fontSize: {
      12: '0.75rem',
      13: '0.8125rem',
      14: '0.875rem',
      15: '0.9375rem',
      16: '1rem',
      17: '1.0625rem',
      18: '1.125rem',
      20: '1.25rem',
      21: '1.3125rem',
      22: '1.375rem',
      24: '1.5rem',
      26: '1.625rem',
      28: '1.75rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
      44: '2.75rem',
      48: '3rem'
    },
    letterSpacing: {
      normal: '0em',
      wide: '.095em',
      wider: '.17em'
    },
    lineHeight: {
      1: '1',
      1.1: '1.1',
      1.2: '1.2',
      1.3: '1.3',
      1.4: '1.4',
      1.5: '1.5',
      1.6: '1.6'
    },
    screens: {
      '2xs': '360px',
      xs: '420px',
      sm: '640px',
      'max-md': { max: '767px' },
      'max-lg': { max: '1024px' },
      md: '768px',
      lg: '1024px',
      xl: '1152px',
      '2xl': '1440px'
    },
    boxShadow: {
      DEFAULT:
        '0px 18px 38px rgba(31, 35, 72, 0.07), 0px 7px 8.5px rgba(31, 35, 72, 0.04), 0px 2px 2.5px rgba(31, 35, 72, 0.02)',
      around:
        '0px 6px 20px rgba(59, 76, 106, 0.13), 0px 1.34018px 4.46726px rgba(59, 76, 106, 0.0774939), 0px 0.399006px 1.33002px rgba(59, 76, 106, 0.0525061)',
      banner:
        '0px 4px 16px rgba(0, 0, 0, 0.07), 0px 1.5px 3px rgba(0, 0, 0, 0.05), 0px 0.337011px 2px rgba(0, 0, 0, 0.0254662);',
      'border-dark': '0 0 0 1.5px rgba(31, 35, 72, 0.1)',
      'border-light': '0 0 0 1.5px rgba(255, 255, 255, 0.25)',
      'border-blue-light': '0 0 0 1.5px rgba(5, 130, 202, 1)',
      'border-blue-light-on-dark': '0 0 0 1.5px rgba(12, 166, 254, 1)'
    },
    borderRadius: {
      0: '0rem',
      2: '0.125rem',
      4: '0.25rem',
      6: '0.375rem',
      8: '0.5rem',
      full: '9999px',
      DEFAULT: '625rem'
    },
    borderWidth: {
      0: '0rem',
      1: '0.0625rem',
      '3/2': '0.09375rem',
      2: '0.125rem',
      4: '0.25rem',
      6: '0.375rem',
      8: '0.5rem',
      DEFAULT: '0.0625rem'
    },
    extend: {
      backgroundImage: {
        'img-none': 'none',
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        // Radial gradient backgrounds based on the previously defined theme colors
        'radial-white': 'radial-gradient(100% 100% at 100% 100%, theme(colors.grey.light), theme(colors.white.DEFAULT))',
        'radial-grey': 'radial-gradient(100% 100% at 100% 100%, #EAE9EA, theme(colors.grey.DEFAULT))',
        'radial-gold': 'radial-gradient(100% 100% at 100% 100%, #EC991C, theme(colors.gold.DEFAULT))',
        'radial-gold-darkened': 'radial-gradient(100% 100% at 100% 100%, #E58A1B, theme(colors.gold.darkened))',
        'radial-blue-dark': 'radial-gradient(100% 100% at 100% 100%, #260133, theme(colors.blue.dark))',
        'radial-blue-dark-darkened': 'radial-gradient(100% 100% at 100% 100%, #180021, theme(colors.blue.dark-darkened))',
        'radial-blue-light': 'radial-gradient(100% 100% at 100% 100%, #265DD7, theme(colors.blue.light))',
        'radial-blue-light-darkened': 'radial-gradient(100% 100% at 100% 100%, #2355C4, theme(colors.blue.light-darkened))',
        'radial-green': 'radial-gradient(100% 100% at 100% 100%, #41A38E, theme(colors.green.DEFAULT))',
        'radial-green-darkened': 'radial-gradient(100% 100% at 100% 100%, #3D9988, theme(colors.green.darkened))',
        'radial-orange': 'radial-gradient(100% 100% at 100% 100%, #FD6216, theme(colors.orange.DEFAULT))',
        'radial-orange-darkened': 'radial-gradient(100% 100% at 100% 100%, #EA5200, theme(colors.orange.darkened))',
        'radial-red': 'radial-gradient(100% 100% at 100% 100%, #CC3047, theme(colors.red.DEFAULT))',
        'radial-red-darkened': 'radial-gradient(100% 100% at 100% 100%, #BF2D46, theme(colors.red.darkened))',
        'radial-brown': 'radial-gradient(100% 100% at 100% 100%, #724147, theme(colors.brown.DEFAULT))',
        'radial-purple': 'radial-gradient(100% 100% at 100% 100%, #4D4C96, theme(colors.purple.DEFAULT))',
        'radial-pink': 'radial-gradient(100% 100% at 100% 100%, #E0516B, theme(colors.pink.DEFAULT))',
        'radial-lime': 'radial-gradient(100% 100% at 100% 100%, #70B069, theme(colors.lime.DEFAULT))',
        'radial-transparent': 'radial-gradient(100% 100% at 100% 100%, transparent, transparent)',
        'radial-blue-dark-dimmed': 'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), theme(colors.blue.dark-dimmed);'
      },
      transitionProperty: {
        'transform-opacity': 'transform, opacity',
        height: 'height',
        'transform-width': 'transform, width',
        'colors-opacity': 'background-color, border-color, color, fill, stroke, opacity',
        'border-radius': 'border-radius'
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.25, 0, 0, 1)',
        oasis: 'cubic-bezier(0.64, -0.15, 0.47, 0.67)'
      },
      transitionDuration: {
        DEFAULT: '400ms',
        0: '0ms'
      },
      zIndex: {
        1: 1,
        '-10': -10
      }
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    }
  ]
}
