module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js', '.svg'],
        alias: {
          app: './app',
          '@components': './app/components/',
          '@screens': './app/screens/',
          '@store': './app/store/',
          '@navigation': './app/navigation',
          '@models': './app/models/',
          '@constants': './app/constants/',
          '@config': './app/config',
        },
      },
    ],
    'jest-hoist',
    'react-native-reanimated/plugin',
  ],
};
