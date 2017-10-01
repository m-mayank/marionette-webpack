var path = require('path');
var Webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devServer : {
		contentBase : './dist'
	},
	devtool : 'inline-source-map',
	entry : './src/app.js',
	output : {
		filename : 'bundle.js',
		path : path.resolve(__dirname, 'dist')
	},
	module : {
		loaders : [ {
			test : /\.hbs$/,
			exclude : /(node_modules|bower_components)/,
			loader : 'handlebars-loader'
		}, {
			test : /\.css$/,
			use : [ 'style-loader', 'css-loader' ]
		} ]
	},
	plugins : [ new Webpack.ProvidePlugin({
		'$' : 'jquery',
		'jQuery' : 'jquery',
		'Backbone' : 'backbone',
		'Marionette' : 'backbone.marionette',
		'Backbone.Stickit' : 'backbone.stickit',
		'Backbone.Validation' : 'backbone-validation',
		'Radio' : 'backbone.radio'
	}), new HTMLWebpackPlugin({
		template : './src/app.html'
	}) ]
}