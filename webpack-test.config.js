var JasmineWebpackPlugin = require('jasmine-webpack-plugin');

// config set up based on: https://www.npmjs.com/package/webpack-karma-jasmine
module.exports = {
  entry: ['specRoot.js'],
  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src'),
    },
  },
  plugins: [new JasmineWebpackPlugin()]
};
