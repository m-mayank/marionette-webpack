var Webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
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
		'Backbone' : 'backbone',
		'Marionette' : 'backbone.marionette',
		'Backbone.Stickit': 'backbone.stickit',
		'Backbone.Validation': 'backbone-validation',
		'Radio' : 'backbone.radio',
		'assert' : 'assert'
	}) ]
};