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
      'lg': {'min': '1024px'},
      'xl': {'min': '1280px'},
    },
  },
  variants: {},
  plugins: [],
}
