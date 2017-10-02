var UserModel = Backbone.Model.extend({
	
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

export {UserModel as default};