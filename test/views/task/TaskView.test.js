import TaskView from '../../../src/views/task/TaskView';
import TaskCollection from '../../../src/collections/task/TasksCollection';

describe('Task view Test cases', function () {
	
	before(function () {
		jQuery('body').append('<div id="container"></div>');
		this.region = new Marionette.Region({
			el: '#container'
		});
		this.collection = new TaskCollection ([{
			taskName: 'task-1'
		}, {
			taskName: 'task-2'
		}]);
		this.model = this.collection.models[0];
		this.view = new TaskView({
			model: this.model
		});
		this.region.show(this.view);
	});
	  
	describe('#instance of', function () {
		it('should be of instance TaskView', function () {
			assert.equal(this.view instanceof TaskView, true);
		});
	});
	
	describe('#find remove task button', function () {
		it('remove task button should be available', function () {
			assert.equal(this.view.$el.find('#btn-remove-task').length, 1);
		});
	});
	
	describe('#display task name', function () {
		it('task-1 shloud be displayed', function () {
			assert.equal(this.view.$el.find('#span-task-name').text(), 'task-1');
		});
	});
	
	describe('#btnRemoveTaskClicked()', function () {
		it('should not have tasks-1', function () {
			this.view.ui.btnRemove.trigger('click');
			assert.equal(this.collection.where({
				taskName: 'task-1'
			}).length, 0);
		});
	});
	
	after(function () {
		this.region.reset();
		this.view = null;
		this.region = null;
		jQuery('#container').remove();
	});
});