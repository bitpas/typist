const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
};
