const path = require("path");

const useStyleSourceMap = true;

module.exports = ({ config }) => ({
  ...config,
  module: {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.stories\.js?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      }
    ]
  },
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@containers': path.resolve(__dirname, '../src/containers'),
      '@data': path.resolve(__dirname, '../src/data'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@images': path.resolve(__dirname, '../src/images'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@routes': path.resolve(__dirname, '../src/routes'),
      '@services': path.resolve(__dirname, '../src/services'),
      '@states': path.resolve(__dirname, '../src/states'),
      '@store': path.resolve(__dirname, '../src/store'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@utils': path.resolve(__dirname, '../src/utils')
    }
  }
});
