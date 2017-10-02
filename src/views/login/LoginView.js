import template from '../../templates/login/LoginTmpl.hbs';
import appVent from '../../appVent';
import appConstants from '../../appConstants';

var LoginView = Marionette.ItemView.extend({
	
	id: 'login-view',
	
	template: template,
	
	ui: {
		'btnRegister': '#btn-register'
	},
	
	events: {
		'click @ui.btnRegister': 'registerClicked'
	},
	
	bindings: {
		'#input-username': 'username',
	    '#input-password': 'password'
	},
	
	onRender: function () {
		this.stickit();
		Backbone.Validation.bind(this);
	},
	
	registerClicked: function () {
		if (this.model.isValid(true)) {
			appVent.trigger(appConstants.EVENT_REDIRECT_TO_HOME);
		}
	},
	
	onDestroy: function () {
		this.unstickit();
		Backbone.Validation.unbind(this);
	}
});

export {LoginView as default};