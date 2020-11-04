const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry : {
      app: path.resolve(__dirname,'src/index.js') ,            
      
    },
    mode: 'development',
    output: {
        path : path.resolve(__dirname,'dist'),
        filename: 'js/[name]-bundle.js',
        publicPath : 'http://localhost:9000/',
        chunkFilename : 'js/[id].[chunkhash].js'
    },
    devServer : {
      contentBase : path.resolve(__dirname,'dist'),
      open: true,
      port: 9000,
      hot: true,

    },

    module : {
      rules : [
        {
          test: /\.js|jsx$/,
          use : 'babel-loader' ,
          exclude : '/node_modules/'
        },
        {
          test: /\.css$/,
          use :[
            'style-loader',
            'css-loader'            
          ]
        },
        
        {
          test: /\.jpg|jpeg|png|svg|gif|woff|ttf|eot|mp4$/,
          use: {
            loader: "file-loader",
            options: {
              outputPath: "assets/"
            }
          }
        }
      ]
    },
    plugins :[

      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
       template : path.resolve(__dirname,'public/index.html')  
      })
      
    ]
}