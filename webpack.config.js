const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: { main: './src/app/index.js', somos: './src/app/somos.js' },
 
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      chunks: ['main']
    }),
    new HTMLWebpackPlugin({
      filename: 'somos.html',
      template: './src/somos.html',
      minify: {
        collapseWhitespace: true,
        removeComments: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      chunks: ['somos']
    })
  ]
}
