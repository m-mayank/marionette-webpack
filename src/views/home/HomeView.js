import template from '../../templates/home/HomeTmpl.hbs';
var HomeView = Marionette.ItemView.extend({
	
	id: 'home-view',
	
	template: template,
	
});

export {HomeView as default};