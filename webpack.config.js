const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

const PORT = process.env.PORT;
const isProd = process.env.DEPLOY_ENV === 'production';
const appTitle = 'Digital Inventory';

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src'),
    },
  },
  mode: isProd ? 'production' : 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: [
      path.resolve(__dirname, 'dist'),
      path.resolve(__dirname, 'static')
    ],
    compress: true,
    port: PORT
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          // alternatively could put these options in `.babelrc`
          options: {
            "presets": ["@babel/preset-env", "@babel/preset-react"],
            "plugins": ["@babel/plugin-syntax-dynamic-import"]
          }
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
      title: `${appTitle} | local dev server`,
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
