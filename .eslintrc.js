module.exports = {
  root: true,
  extends: ['airbnb', '@react-native-community', 'plugin:prettier/recommended'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': { rootPathSuffix: 'src' },
    },
  },
};
