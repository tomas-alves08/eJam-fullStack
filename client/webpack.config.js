const path = require('path')

const webpack = require('webpack')
require('dotenv').config()

// const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, '../server/public'),
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      // 'process.env': JSON.stringify(dotenv.parsed),
      // 'process.env.NODE_ENV': JSON.stringify(
      //   isDevelopment ? 'development' : 'production'
      // ),
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
      'process.env.AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
      'process.env.PROJECT_ID': JSON.stringify(process.env.PROJECT_ID),
      'process.env.STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
      'process.env.MESSAGE_SENDING_ID': JSON.stringify(
        process.env.MESSAGE_SENDING_ID
      ),
      'process.env.APP_ID': JSON.stringify(process.env.APP_ID),
      'process.env.MEASUREMENT_ID': JSON.stringify(process.env.MEASUREMENT_ID),
    }),
  ],

  // plugins: [new Dotenv()],

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'source-map',
}
