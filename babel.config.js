module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@config': './src/config',
          '@services': './src/services',
          '@components': './src/components',
          '@framework': './src/framework',
          '@assets': './src/assets',
          '@common': './src/common',
          '@constants': './src/constants',
          '@context': './src/context',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@models': './src/models',
          '@native': './src/native',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    'react-native-reanimated/plugin',
  ],
};
