module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'max-len': 'off',
    camelcase: 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
  },
};
