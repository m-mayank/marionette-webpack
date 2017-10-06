import TasksCollection from '../../collections/task/TasksCollection';

var UserModel = Backbone.Model.extend({
	
	initialize: function () {
		this.initTasks();
	},
	
	initTasks: function () {
		this.set('tasks', new TasksCollection());
	},
	
	validation: function () {
		return {
			username: {
				required: true
			},
			password: {
				required: true
			}
		};
	}
});

export {UserModel as default};