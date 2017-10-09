import template from 'templates/home/HomeTmpl.hbs';
import TasksView from '../task/TasksView';
import TaskModel from '../../models/task/TaskModel';

var HomeView = Marionette.LayoutView.extend({
	
	id: 'home-view',
	
	template: template,
	
	regions: {
		tasksRegion: '#tasks-region'
	},
	
	onRender: function () {
		this.formatMoney();
		this.renderTasksView();
		
	},
	
	renderTasksView: function () {
		this.tasksRegion.show(new TasksView({
			model: new TaskModel(),
			collection: this.model.get('tasks')
		}));
	},
	
	formatMoney: function () {
		requirejs(['vendor/libs/accounting.js'], function (accounting) {
			console.log(accounting.formatMoney(2231));
		})
	}
	
});

export {HomeView as default};