import template from '../../templates/task/TasksTmpl.hbs';
import TaskView from './TaskView';

var TasksView = Marionette.CompositeView.extend({
	
	id: 'tasks-view',
	
	template: template,

	childViewContainer: '#task-region',
	
	childView: TaskView,
	
	ui: {
		btnAddTask: '#btn-add-task'
	},
	
	bindings: {
		'#input-task-name': 'taskName'
	},
	
	events: {
		'click @ui.btnAddTask': 'btnAddTaskClicked'
	},
	
	onRender: function () {
		this.stickit();
		Backbone.Validation.bind(this);
	},
	
	btnAddTaskClicked: function () {
		if (this.model.isValid(true)) {
			this.collection.addTask(this.model.get('taskName'));
			this.model.clear();
		}
	},
	
	onDestroy: function () {
		this.unstickit();
		Backbone.Validation.unbind(this);
	}
	
});

export {TasksView as default};