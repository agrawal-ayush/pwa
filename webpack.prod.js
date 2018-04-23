const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OfflinePlugin = require('offline-plugin')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    app: `./index.js`,
    vendor: ['react','react-dom','react-router']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name]-[chunkhash:6].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]",camelCase'])
    }]
  },
  performance: {
    hints: "error"
  },
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: `./index.html`
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash:6].css'
    }),
    new OfflinePlugin()
  ]
};