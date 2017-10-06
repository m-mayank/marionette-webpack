import UserModel from '../../../src/models/user/UserModel';

describe('User Model test case', function() {
  before(function () {
	  jQuery('body').append('<div id="container"></div>');
	  this.region = new Marionette.Region({
		  el: '#container'
	  });
	  this.model = new UserModel();
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
    		assert.equal(this.model instanceof UserModel, true);
    });
  });
  
  describe('#is username Valid', function () {
	  it('should return false', function () {
		  assert.equal(this.model.isValid('username'), false);
	  });
  });
  
  describe('#is username Valid', function () {
	  it('should return true', function () {
		  this.model.set('username', 'test');
		  assert.equal(this.model.isValid('username'), true);
	  });
  });
  
  describe('#is password Valid', function () {
	  it('should return false', function () {
		  assert.equal(this.model.isValid('password'), false);
	  });
  });
  
  describe('#is password Valid', function () {
	  it('should return true', function () {																												
		  this.model.set('password', 'test');
		  assert.equal(this.model.isValid('password'), true);
	  });
  });
  
  describe('#initTasks()', function () {
	  it('should have no tasks', function () {
		  assert.equal(this.model.get('tasks').length, 0);
	  });
  });
  
  after(function () {
	  this.region.reset();
	  this.model = null;
	  this.region = null;
	  jQuery('#container').remove();
  });
});