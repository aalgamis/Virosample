module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react/require-default-props': 2,
    'no-empty-pattern': 2,
    'no-confusing-arrow': 1,
    'arrow-parens': [2, 'as-needed'],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'no-console': 2,
  },
};
