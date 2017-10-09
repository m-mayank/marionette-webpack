var path = require('path'),
	Webpack = require('webpack'),
	nodeExternals = require('webpack-node-externals');

module.exports = {
	resolve : {
		alias : {
			templates : path.resolve(__dirname, 'src/templates/')
		}
	},
	target : 'node',
	externals : [ nodeExternals() ],
	module : {
		loaders : [ {
			test : /\.hbs$/,
			exclude : /(node_modules|bower_components)/,
			loader : 'handlebars-loader'
		} ]
	},
	plugins : [ new Webpack.ProvidePlugin({
		'$' : 'jquery',
		'jQuery' : 'jquery',
		'_' : 'underscore',
		'Backbone' : 'backbone',
		'Marionette' : 'backbone.marionette',
		'Backbone.Stickit' : 'backbone.stickit',
		'Backbone.Validation' : 'backbone-validation',
		'Radio' : 'backbone.radio',
		'assert' : 'assert',
		'requirejs' : 'requirejs'
	}) ]
};