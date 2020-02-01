var JasmineWebpackPlugin = require('jasmine-webpack-plugin');

module.exports = {
  entry: ['specRoot.js'],
  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src'),
    },
  },
  plugins: [new JasmineWebpackPlugin()]
};
