const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, 'client', 'index.js'),
	output: {
		filename: '[name].bundle.js',
		path: path.resolve('public'),
		publicPath: '/',
	},
	devtool: 'eval-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: '!!raw-loader!./template.ejs', // raw-loader is used instead of ejs-loader, so that HtmlWebpackPlugin does not try to evaluate ejs variables.
			filename: 'index.ejs', // filename 'index.ejs' is given specifically, because by default HtmlWebpackPlugin outputs 'index.html'
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
};
