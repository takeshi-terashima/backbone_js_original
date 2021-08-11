/*global Backbone */
var app = app || {};

(function () {
	'use strict';
	var ShityoRouter = Backbone.Router.extend({
		routes: {
			'': 'home',
			':shityo/shityoson': 'detail'
		},
		home: function () {
			app.shityos.trigger('home');
		},
		detail: function (param) {
			app.ShityosonFilter = param || '';
			app.shityosons.trigger('detail');
		}
	});
	app.ShityoRouter = new ShityoRouter();
	Backbone.history.start();
})();
