import config from './app-config';
import bootstrap from 'foundation-sites/dist/css/foundation.min.css';
import css from './app.css';
import appVent from './appVent';
import AppRouter from './AppRouter';
import AppLayoutView from './views/AppLayoutView';
import UserModel from './models/user/UserModel';

var App = Marionette.Application.extend({
	
	initialize: function () {
		this.addRegion();
	},
	
	onStart: function () {
		this.showView();
		this.startHistory();
	},
	
	addRegion: function () {
		this.addRegions({
			region: '#app-region'
		});
	},
	
	showView: function () {
		this.region.show(new AppLayoutView({
			model: new UserModel()
		}));
	},
	
	startHistory: function () {
		var router = new AppRouter();
		if (Backbone.history) {
			Backbone.history.start();
		}
	}
});

var app = new App();
app.start();