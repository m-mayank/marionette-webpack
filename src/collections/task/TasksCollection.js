import TaskModel from '../../models/task/TaskModel';

var TasksCollection = Backbone.Collection.extend({
	
	model: TaskModel,
	
	addTask: function (taskName) {
		this.add(new TaskModel({
			taskName: taskName
		}));
	}
	
});

export {TasksCollection as default};