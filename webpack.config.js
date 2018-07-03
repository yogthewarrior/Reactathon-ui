var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const resolveUrlLoader = {loader: "resolve-url-loader", options: {absolute: true}}

var plugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.$": "jquery",
        "window.jQuery": "jquery",
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
        APP_ENV: JSON.stringify(APP_ENV),
        NODE_ENV: JSON.stringify(APP_ENV),
        'process.env.NODE_ENV': JSON.stringify(APP_ENV),
        'global.NODE_ENV': JSON.stringify(APP_ENV)
    })
];

var config = {
  entry: [
          'webpack-dev-server/client?http://localhost:5022',
          'react-hot-loader/patch',
          'webpack/hot/only-dev-server',
          'babel-polyfill',
          './src/index.js'
      ],
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
   },
   devServer: {
      contentBase:path.resolve(__dirname,'dist'),
      publicPath:'/',
      port: 5022,
      historyApiFallback: true,
   },
   module:{
     loaders: [
        {
           test: /\.jsx?$/,
           exclude: __dirname+'/node_modules',
           loader: 'babel-loader',
           query: {
              presets: ['env', 'react']
           }
        }
     ],
        rules:[
                {
                  test: /\.js$/,
                  include:[path.resolve(__dirname, 'src')],
                  exclude: [path.resolve(__dirname,"node_modules")],
                  loader: "babel-loader"
                },
                {
                  test: /\.css$/,
                  loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })                  
                },
                { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader", resolveUrlLoader]},
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: ["file-loader"]},
                { test: /\.mp3$/, use: ["file-loader"]},
                { test: /\.xlsx$/, use: ["file-loader"]},
                { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: [{loader: "url-loader", options: {limit: 10000, mimetype: "application/font-woff"}}]},
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: [{loader: "url-loader", options: {limit: 10000, mimetype: "application/octet-stream"}}]},
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: [{loader: "url-loader", options: {limit: 10000, mimetype: "image/svg+xml"}}]},
                { test: /\.(png|jpg|gif)$/, use: [{loader: "file-loader"}]}
      ]
    },
    plugins: plugins
};

module.exports = config;
