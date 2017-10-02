import appVent from './appVent';
import appConstants from './appConstants';
import appController from './appController';

var AppRouter = Marionette.AppRouter.extend({
	
	appRoutes: {
		'login': 'fnLogin',
		'home': 'fnHome',
		'*actions': 'defaultAction'
	},
	
	controller: appController,
	
	initialize: function () {
		this.controller.navigate = this.navigate;
		this.subscribeToVent();
	},
	
	subscribeToVent: function () {
		this.listenTo(appVent, appConstants.EVENT_REDIRECT_TO_HOME, this.redirectToHome, this);
	},
	
	redirectToHome: function () {
		this.navigate('#home', {
			trigger: true
		});
	}
});

export {AppRouter as default};