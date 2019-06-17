const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

const isProd = process.env.DEPLOY_ENV === 'production';

module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  entry: './src/main.js',
  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  mode: isProd ? 'production' : 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: [
      //path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'static')
    ],
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.glsl$/,
        use: 'raw-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: path.resolve('./post-loader.js'),
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      redirectToHTTPS: JSON.stringify(isProd)
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: isProd ? 'Digital Inventory' : 'DI dev',
      // options set by html-minifier, currently using defaults set by
      // HtmlWebpackPlugin
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.resolve(__dirname, 'src', 'partials', 'basic-body.html'),
      location: 'body',
      priority: 'low',
    }),
  ]
};
