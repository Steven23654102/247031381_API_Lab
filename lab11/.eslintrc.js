// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  env: {
    node: true,
    jest: true
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single']
  }
};
