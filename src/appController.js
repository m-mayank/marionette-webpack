import appVent from './appVent';
import appConstants from './appConstants';

var appController = {
		
		fnLogin: function () {
			appVent.trigger(appConstants.EVENT_SHOW_LOGIN);
		},
		
		fnHome: function () {
			appVent.trigger(appConstants.EVENT_SHOW_HOME);
		},
		
		defaultAction: function () {
			this.navigate('#login', {
				trigger: true
			});
		}
	};

export {appController as default};