const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
    
module.exports = {
  mode: 'development',
  entry: './src/app/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HTMLWebpackPlugin({template: './src/index.html'})
  ]

};
