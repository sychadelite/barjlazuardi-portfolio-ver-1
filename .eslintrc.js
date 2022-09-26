module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'space-before-function-paren': ['error', 'ignore'],
    indent: 'ignore',
    'eol-last': ['error', 'ignore']
  }
}
