const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const config = require('config')
console.log(path.resolve(__dirname, 'src'))

module.exports = {
  mode: (process.env.NODE_ENV ? process.env.NODE_ENV : 'development'),
  entry: ['./src/index.js'],
  output: {
    library: 'VanillaComp',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: '(typeof self !== "undefined" ? self : this)',
    path: path.resolve(__dirname, 'dist'),
    publicPath: config.get('publicPath'),
    filename: 'vanilla-comp.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.art$/i,
        use: [{
          loader: 'art-template-loader',
          options: {
            // loader: require.resolve('./src/'),
            // htmlResourceRoot: __dirname,
            // root: path.resolve(__dirname)
          }
        }]
      },
      {
        test: /\.(jpg|png|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            context: ''
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      fileName: 'index.html',
      template: path.resolve(__dirname, 'index.html')
    })
  ],
  devServer: {
    port: 3500,
    host: 'localhost',
    open: config.get('open'),
    historyApiFallback: true,
    publicPath: '/'
  },
  // generate source map
  // devtool: ( 'production' === process.env.NODE_ENV ? "source-map" : "cheap-module-eval-source-map" )
  devtool: 'source-map'
}
