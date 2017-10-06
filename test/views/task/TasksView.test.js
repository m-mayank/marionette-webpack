import TasksView from '../../../src/views/task/TasksView';
import TaskCollection from '../../../src/collections/task/TasksCollection';
import TaskModel from '../../../src/models/task/TaskModel';

describe('Tasks view Test cases', function () {
	
	before(function () {
		jQuery('body').append('<div id="container"></div>');
		this.region = new Marionette.Region({
			el: '#container'
		});
		this.collection = new TaskCollection ();
		this.model = new TaskModel();
		this.view = new TasksView({
			model: this.model,
			collection: this.collection
		});
		this.region.show(this.view);
	});
	  
	describe('#instance of', function () {
		it('should be of instance TasksView', function () {
			assert.equal(this.view instanceof TasksView, true);
		});
	});
	
	describe('#find input task name', function () {
		it('task name input field should be available', function () {
			assert.equal(this.view.$el.find('#input-task-name').length, 1);
		});
	});
	
	describe('#find add task button', function () {
		it('add task button should be available', function () {
			assert.equal(this.view.$el.find('#btn-add-task').length, 1);
		});
	});
	
	describe('#btnAddTaskClicked()', function () {
		it('should have no task view when there is no task name', function () {
			this.view.$el.find('#input-task-name').val('').trigger('change');
			this.view.ui.btnAddTask.trigger('click');
			assert.equal(this.view.$el.find('#task-view').length, 0);
		});
	});
	
	describe('#enter task name', function () {
		it('task name should be available in model', function () {
			this.view.$el.find('#input-task-name').val('task-1').trigger('change');
			assert.equal(this.model.get('taskName'), 'task-1');
		});
	});
	
	describe('#btnAddTaskClicked()', function () {
		it('should have one task view', function () {
			this.view.$el.find('#input-task-name').val('task-1').trigger('change');
			this.view.ui.btnAddTask.trigger('click');
			assert.equal(this.view.$el.find('#task-view').length, 1);
		});
	});
	
	after(function () {
		this.region.reset();
		this.view = null;
		this.region = null;
		jQuery('#container').remove();
	});
});