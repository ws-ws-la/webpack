const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
   mode: 'production',
   //开始相对路径
   entry: './src/main.js',
   //绝对路径
   output: {
      path: path.join(__dirname, 'lib'),
      filename: 'index.js',
      clean: true
   },

   plugins: [
      new HtmlWebpackPlugin({
         template: path.join(__dirname, 'public/index.html')
      })
   ],
   devServer: {
      open: true,
      port: 30000
   },
   module: {
      rules: [{
            test: /\.css/i,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.less/i,
            use: ['style-loader', 'css-loader', 'less-loader']
         },
         {
            test: /\.(gif|png)/i,
            type: "asset/resource",
            generator: {
               filename: 'images/[hash:6][ext]'
            },
            parser: {
               dataUrlCondition: {
                  maxSize: 2 * 1024
               }
            }
         },
         {
            test: /\.(eot|svg|ttf|woff|woff2)/i,
            type: 'asset/resource',
            generator: {
               filename: 'fonts/[hash:6][ext]'
            },
         },
         {
            test: /\.js/i,
            use: ['babel-loader']
         }
      ]
   }
}