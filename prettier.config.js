const tailwindPlugin = require('prettier-plugin-tailwindcss')

module.exports = {
  plugins: [tailwindPlugin],
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  arrowParens: 'always',
}
