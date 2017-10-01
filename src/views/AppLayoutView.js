var template = require('../templates/AppLayoutTmpl.hbs');
export default Marionette.ItemView.extend({
	
	id: 'app-layout-view',
	
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
		console.log(this.model.isValid(true));
	},
	
	onDestroy: function () {
		Backbone.Validation.unbind(this);
	}
});