import template from '../../templates/task/TaskTmpl.hbs';
var TaskView = Marionette.ItemView.extend({
	
	id: 'task-view',
	
	template: template,
	
	ui: {
		btnRemove: '#btn-remove-task'
	},
	
	events: {
		'click @ui.btnRemove': 'btnRemoveTaskClicked'
	},
	
	btnRemoveTaskClicked: function () {
		this.model.collection.remove(this.model);
	}
	
});

export {TaskView as default};