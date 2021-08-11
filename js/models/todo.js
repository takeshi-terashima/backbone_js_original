var app = app || {};

(function () {
	'use strict';
	app.Shityo = Backbone.Model.extend({
		defaults: {
			title: '',
			district: 0
		}
	});
	app.Shityoson = Backbone.Model.extend({
		defaults: {
			title: '',
			district: 0,
			shityo: '',
			url: ''
		}
	});
})();
