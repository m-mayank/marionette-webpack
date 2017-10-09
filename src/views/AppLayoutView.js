import template from 'templates/AppLayoutTmpl.hbs';
import appVent from '../appVent';
import appConstants from '../appConstants';
import LoginView from './login/LoginView';
import HomeView from './home/HomeView';

var AppLayoutView = Marionette.LayoutView.extend({
	
	id: 'app-layout-view',
	
	template: template,
	
	regions: {
		'layoutRegion': '#layout-region'
	},
	
	initialize: function () {
		this.subscribeToAppVent();
	},
	
	subscribeToAppVent: function () {
		this.listenTo(appVent, appConstants.EVENT_SHOW_LOGIN, this.renderLoginView, this);
		this.listenTo(appVent, appConstants.EVENT_SHOW_HOME, this.renderHomeView, this);
	},
	
	renderLoginView: function () {
		this.layoutRegion.show(new LoginView({
			model: this.model
		}));
	},
	
	renderHomeView: function () {
		this.layoutRegion.show(new HomeView({
			model: this.model
		}));
	}
});

export {AppLayoutView as default};