import appVent from '../../src/appVent';
import appConstants from '../../src/appConstants';
import AppLayoutView from '../../src/views/AppLayoutView';

describe('App Layout Test cases', function () {
	
	before(function () {
		jQuery('body').append('<div id="container"></div>');
		this.region = new Marionette.Region({
			el: '#container'
		});
		this.model = new Backbone.Model({});
		this.view = new AppLayoutView({
			model: this.model
		});
		this.region.show(this.view);
	});
	  
	describe('#instance of', function () {
		it('should be of instance AppLayoutView', function () {
			assert.equal(this.view instanceof AppLayoutView, true);
		});
	});
	
	describe('#renderLoginView()', function () {
		it('login view should be present in $el', function () {
			appVent.trigger(appConstants.EVENT_SHOW_LOGIN);
			assert.equal(this.view.$el.find('#login-view').length, 1);
		});
	});
	
	describe('#renderHomeView()', function () {
		it('home view should be present in $el', function () {
			appVent.trigger(appConstants.EVENT_SHOW_HOME);
			assert.equal(this.view.$el.find('#home-view').length, 1);
		});
	});
	
	after(function () {
		this.region.reset();
		this.view = null;
		this.region = null;
		jQuery('#container').remove();
	});
});