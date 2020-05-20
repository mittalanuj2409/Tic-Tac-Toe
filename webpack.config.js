const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const package     = require('../../../package.json');



module.exports = {
	mode: 'development',
	entry: 	{
		ttt_2b: './src/script/ttt-2-back.js',
		ttt_1: './src/script/ttt-1.js',
		ttt_2: './src/script/ttt-2.js',
		ttt_3: './src/script/ttt-3.js',
		ttt_1b:'./src/script/ttt-1-back.js',
		// vendor: Object.keys(package.dependencies),
	},
	output: {
        filename: "[name].main.js" 
    },
    // watch: true,
    resolve: {extensions: [".js", ".ts"]},
    module: {
	    rules: [
	      {
	        test: /\.js$/,
	        include: [
	        	path.resolve(__dirname, 'src/script/')
	        ],
	        exclude: [
	        	path.resolve(__dirname, 'node_modules/'),
	        	path.resolve(__dirname, 'dist')
	        ],
	        use: {
	          loader: 'babel-loader',
	          options: {
	            presets: ['@babel/preset-env']
	          }
	        }
	      }
	    ]
	  },
    // plugins: [
    // 	new HtmlWebpackPlugin({
    // 		hash: true,
	   //      template: './dist/ttt-2-back.html',
	   //      chunks: ["vendor", "ttt_2b"],
	   //      filename: './dist/ttt-2-back.html'
	   //    }),
    // 	new HtmlWebpackPlugin({
    // 		hash: true,
	   //      template: './dist/ttt-1-back.html',
	   //      chunks: ["vendor", "ttt_1b"],
	   //      filename: './dist/ttt-1-back.html'
	   //    }),
    // 	new HtmlWebpackPlugin({
    // 		hash: true,
	   //      template: './dist/ttt-2.html',
	   //      chunks: ["vendor", "ttt_2"],
	   //      filename: './dist/ttt-2.html'
	   //    }),
    // 	new HtmlWebpackPlugin({
    // 		hash: true,
	   //      template: './dist/ttt-1.html',
	   //      chunks: ["vendor", "ttt_1"],
	   //      filename: './dist/ttt-1.html'
	   //    }),
    // 	new HtmlWebpackPlugin({
    // 		hash: true,
	   //      template: './dist/ttt-3.html',
	   //      chunks: ["vendor", "ttt_3"],
	   //      filename: './dist/ttt-3.html'
	   //    })

    // ],
}

