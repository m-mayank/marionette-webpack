var TaskModel = Backbone.Model.extend({
	
	idAttribute: 'taskId',
	
	defaults: function () {
		return {
			taskId: _.uniqueId('task-')
		};
	},
	
	validation: function () {
		return {
			taskName: {
				required: true
			}
		};
	}
});

export {TaskModel as default};