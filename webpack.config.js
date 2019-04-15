const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var glob_entries = require('webpack-glob-entries')

module.exports = {
   entry: './index.js',
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index.js'
   },
   watch: true,
   devServer: {
      inline: true,
      historyApiFallback: true,
      port: 8080
   },
   devtool: 'inline-source-map',
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: 'index.html'
      })
   ]
}