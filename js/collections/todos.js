var app = app || {};

(function () {
	'use strict';
	var Shityos = Backbone.Collection.extend({
		model: app.Shityo
	});
	app.shityos = new Shityos([
		{
			title: '石狩支庁',
			district: 1
		},
		{
			title: '後志支庁',
			district: 2
		},
		{
			title: '上川支庁',
			district: 3
		}
	]);
	var Shityosons = Backbone.Collection.extend({
		model: app.Shityoson
	});
	app.shityosons = new Shityosons([
		{
			title: '札幌市',
			shityo: '石狩支庁'
		},
		{
			title: '小樽市',
			shityo: '後志支庁'
		},
		{
			title: '旭川市',
			shityo: '上川支庁'
		},
		{
			title: '江別市',
			shityo: '石狩支庁'
		}
	]);
})();
