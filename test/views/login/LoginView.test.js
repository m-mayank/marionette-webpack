import LoginView from '../../../src/views/login/LoginView';

describe('Login view Test cases', function () {
	
	before(function () {
		jQuery('body').append('<div id="container"></div>');
		this.region = new Marionette.Region({
			el: '#container'
		});
		this.model = new Backbone.Model({});
		this.view = new LoginView({
			model: this.model
		});
		this.region.show(this.view);
	});
	  
	describe('#instance of', function () {
		it('should be of instance LoginView', function () {
			assert.equal(this.view instanceof LoginView, true);
		});
	});
	
	describe('#find username input field', function () {
		it('username input field', function () {
			assert.equal(this.view.$el.find('#input-username').length, 1);
		});
	});
	
	describe('#find password input field', function () {
		it('password input field', function () {
			assert.equal(this.view.$el.find('#input-password').length, 1);
		});
	});
	
	describe('#find register button', function () {
		it('password input field', function () {
			assert.equal(this.view.$el.find('#btn-register').length, 1);
		});
	});
	
	describe('#enter username', function () {
		it('username should be available in model', function () {
			this.view.$el.find('#input-username').val('test-user-name').trigger('change');
			assert.equal(this.model.get('username'), 'test-user-name');
		});
	});
	
	describe('#enter password', function () {
		it('password should be available in model', function () {
			this.view.$el.find('#input-password').val('test-password').trigger('change');
			assert.equal(this.model.get('password'), 'test-password');
		});
	});
	
	after(function () {
		this.region.reset();
		this.view = null;
		this.region = null;
		jQuery('#container').remove();
	});
});