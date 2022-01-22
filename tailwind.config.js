const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
      "./resources/**/*.antlers.html",
      "./content/**/*.md",
      "./content/**/*.yaml",
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
      "./content/**/*.md",
  ],
  theme: {
    extend: {
        colors: {
            teal: colors.teal,
            cyan: colors.cyan,
            background: colors.gray,
            'primary': colors.sky,
            'secondary': colors.teal,
            'font-primary': colors.gray['50'],
            'font-secondary': colors.gray['300'],
            'font-hover': colors.gray['500'],
        },
        spacing: {
            'em': '1em',
        }
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      plugin(function ({ addVariant }) {
          addVariant('third', '&:nth-child(3)')
          addVariant('second', '&:nth-child(2)')
      })
  ],
}
