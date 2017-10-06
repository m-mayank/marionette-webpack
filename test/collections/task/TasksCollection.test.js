import config from '../../../src/app-config';
import TasksCollection from '../../../src/collections/task/TasksCollection';
import TaskModel from '../../../src/models/task/TaskModel';

describe('Tasks Collection test case', function() {
  before(function () {
	  this.collection = new TasksCollection();
  });
  
  describe('#instance of', function() {
    it('should return true', function() {
    		assert.equal(this.collection instanceof TasksCollection, true);
    });
  });
  
  describe('#instance of collection\'s Model', function () {
	  it('should be instance of TaskModel', function () {
		  this.collection.add(new TaskModel({
			  taskName: 'test'
		  }))
		  assert.equal(this.collection.models[0] instanceof TaskModel, true);
		  this.collection.reset();
	  });
  });
  
  describe('#addTask()', function () {
	  it('should have one task', function () {
		  this.collection.add(new TaskModel({
			  taskName: 'test'
		  }));
		  assert.equal(this.collection.length, 1);
	  });
  });
  
  after(function () {
	  this.collection.reset();
	  this.collection = null;
  });
});