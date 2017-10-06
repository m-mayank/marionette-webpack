import TaskModel from '../../../src/models/task/TaskModel';

describe('Task Model test case', function() {
  before(function () {
	  jQuery('body').append('<div id="container"></div>');
	  this.region = new Marionette.Region({
		  el: '#container'
	  });
	  this.model = new TaskModel();
	  var View = Marionette.ItemView.extend({
		  template: false,
		  onRender: function () {
			  Backbone.Validation.bind(this);
		  },
		  onDestroy: function () {
			  Backbone.Validation.unbind(this);
		  }
	  });
	  this.region.show(new View({
		  model: this.model
	  }));
  });
  
  describe('#instance of', function() {
    it('should return true', function() {
    		assert.equal(this.model instanceof TaskModel, true);
    });
  });
  
  describe('#defaults()', function () {
	  it('task id should not be null', function () {
		  assert.notEqual(this.model.get('taskId'), null);
	  });
  });
  
  describe('#is task name Valid', function () {
	  it('should return false', function () {
		  assert.equal(this.model.isValid('taskName'), false);
	  });
  });
  
  describe('#is task name Valid', function () {
	  it('should return true', function () {
		  this.model.set('taskName', 'test');
		  assert.equal(this.model.isValid('taskName'), true);
	  });
  });
  
  after(function () {
	  this.region.reset();
	  this.model = null;
	  this.region = null;
	  jQuery('#container').remove();
  });
});