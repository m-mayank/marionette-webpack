import config from './app-config';
import AppLayoutView from './views/AppLayoutView';
import UserModel from './models/user/UserModel';

import bootstrap from 'foundation-sites/dist/css/foundation.min.css';
import css from './app.css';

var App = Marionette.Application.extend({
	
	channel: Radio.channel('app-channel'),
	
	onStart: function () {
		console.log('App started.');
		this.addRegion();
		this.showView();
		// jQuery(document).foundation();
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
	}
});

var app = new App();
app.start();