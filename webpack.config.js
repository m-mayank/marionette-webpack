var path = require('path');
var Webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devServer : {
		contentBase : './dist'
	},
	devtool : 'inline-source-map',
	entry : {
		app : "./src/app.js",
		vendor : [ 'jquery', 'jquery-ui', 'underscore', 'foundation-sites',
				'backbone.stickit', 'backbone.radio', 'backbone.marionette',
				'backbone-validation', 'backbone' ]
	},
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
	plugins : [ new Webpack.optimize.CommonsChunkPlugin({
		name : 'vendor',
		filename : 'vendor.bundle.js'
	}), new Webpack.ProvidePlugin({
		'$' : 'jquery',
		'jQuery' : 'jquery',
		'_' : 'underscore',
		'Backbone' : 'backbone',
		'Marionette' : 'backbone.marionette',
		'Backbone.Stickit' : 'backbone.stickit',
		'Backbone.Validation' : 'backbone-validation',
		'Radio' : 'backbone.radio'
	}), new HTMLWebpackPlugin({
		template : './src/app.html'
	}) ]
}