import template from '../../templates/home/HomeTmpl.hbs';
import TasksView from '../task/TasksView';
import TaskModel from '../../models/task/TaskModel';

var HomeView = Marionette.LayoutView.extend({
	
	id: 'home-view',
	
	template: template,
	
	regions: {
		tasksRegion: '#tasks-region'
	},
	
	onRender: function () {
		this.renderTasksView();
	},
	
	renderTasksView: function () {
		this.tasksRegion.show(new TasksView({
			model: new TaskModel(),
			collection: this.model.get('tasks')
		}));
	}
	
});

export {HomeView as default};