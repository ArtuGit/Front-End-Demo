module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: [
      // Paths to your templates here...
    ],
  },
  theme: {
    screens: {
      'sm': {'min': '1px', 'max': '767px'},
      'md': {'min': '768px'},
      'lg': {'min': '1200px'},
      'xl': {'min': '1500px'},
    },
    colors: {
      'cst-primary': {
        darkblue: 'hsl(233, 26%, 24%)', //big text?
        limegreen: 'hsl(136, 65%, 51%)',
        brightcyan: 'hsl(192, 70%, 51%)',
      },
      'cst-neutral': {
        grayishblue: 'hsl(233, 8%, 62%)', //small text?
        lightgrayishblue: 'hsl(220, 16%, 96%)',//body background?
        verylightgray: 'hsl(0, 0%, 98%)', //body background?
        white: 'hsl(0, 0%, 100%)', //header background?
      },
    },
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        'public-sans': ['Public Sans', 'sans-serif']
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
