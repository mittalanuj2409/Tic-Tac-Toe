const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var ttt_1 = Object.assign({}, config, {
    name: "ttt_1",
    entry: './src/script/ttt-1.js',
    output: {
       filename: 'ttt-1-main.js',
       path: path.resolve(__dirname, 'src/script')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './dist/ttt-1.html',
        inject: true,
        chunks: [],
        filename: 'ttt-1.html'
      })
    ]
});

var ttt_2 = Object.assign({}, config, {
    name: "ttt_2",
    entry: './src/script/ttt-2.js',
    output: {
       filename: 'ttt-2-main.js',
       path: path.resolve(__dirname, 'src/script')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './dist/ttt-2.html',
        inject: true,
        chunks: [],
        filename: 'ttt-2.html'
      })
    ]
});

var ttt_3 = Object.assign({}, config, {
    name: "ttt_3",
    entry: './src/script/ttt-3.js',
    output: {
       filename: 'ttt-3-main.js',
       path: path.resolve(__dirname, 'src/script')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './dist/ttt-3.html',
        inject: true,
        chunks: [],
        filename: 'ttt-3.html'
      })
    ]
});

var ttt_1b = Object.assign({}, config, {
    name: "ttt_1b",
    entry: './src/script/ttt-1-back.js',
    output: {
       filename: 'ttt-1b-main.js',
       path: path.resolve(__dirname, 'src/script')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './dist/ttt-1-back.html',
        inject: true,
        chunks: [],
        filename: 'ttt-1-back.html'
      })
    ]
});

var ttt_2b = Object.assign({}, config, {
    name: "ttt_2b",
    entry: './src/script/ttt-2-back.js',
    output: {
       filename: 'ttt-2b-main.js',
       path: path.resolve(__dirname, 'src/script')
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './dist/ttt-2-back.html',
        inject: true,
        chunks: [],
        filename: 'ttt-2-back.html'
      })
    ]
});

var config = {
  // TODO: Add common Configuration
  name: "ttt_1",
  entry: './src/script/ttt-1.js',
  output: {
     filename: 'ttt-1-main.js',
     path: path.resolve(__dirname, 'src/script')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/ttt-1.html',
      inject: true,
      chunks: [],
      filename: 'ttt-1.html'
    })
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
}

module.exports = [
  config, ttt_2, ttt_3, ttt_1b, ttt_2b
];