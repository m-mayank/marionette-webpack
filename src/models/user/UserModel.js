export default Backbone.Model.extend({
	
	validation: function () {
		return {
			username: {
				required: true
			},
			password: {
				required: true
			}
		};
	}
});