const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: 	{
		ttt_2b: './src/script/ttt-2-back.js',
		ttt_1: './src/script/ttt-1.js',
		ttt_2: './src/script/ttt-2.js',
		ttt_3: './src/script/ttt-3.js',
		ttt_1b:'./src/script/ttt-1-back.js',
	},
	output: {
        filename: "script/[name].main.js" 
    },
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
}

