import HomeView from '../../../src/views/home/HomeView';

describe('Home view Test cases', function () {
	
	before(function () {
		jQuery('body').append('<div id="container"></div>');
		this.region = new Marionette.Region({
			el: '#container'
		});
		this.model = new Backbone.Model({
			username: 'test-user'
		});
		this.view = new HomeView({
			model: this.model
		});
		this.region.show(this.view);
	});
	  
	describe('#instance of', function () {
		it('should be of instance HomeView', function () {
			assert.equal(this.view instanceof HomeView, true);
		});
	});
	
	describe('#display username', function () {
		it('username present in model shloud be displayed', function () {
			assert.equal(this.view.$el.text(), 'Welcome test-user');
		});
	});
	
	after(function () {
		this.region.reset();
		this.view = null;
		this.region = null;
		jQuery('#container').remove();
	});
});