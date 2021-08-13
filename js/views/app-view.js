var app = app || {};

(function ($) {
	'use strict';
	app.AppView = Backbone.View.extend({
		el: '.shityoapp',
		events: {
			"click .return": "homeDisp",
			"click .shityo": "detailDisp"
		},
		initialize: function () {
			this.$shityoList = $('.shityo-list');
			this.$shityosonList = $('.shityoson-list');
			this.$return = $('.return');
			this.listenTo(app.shityos, 'home', _.debounce(this.homeRender, 0));
			this.listenTo(app.shityosons, 'detail', _.debounce(this.detailRender, 0));
		},

		initRender: function () {
			app.shityos.each(function (shityo) {
				var view = new app.ShityoView({ model: shityo });
				this.$shityoList.append(view.render().el);
			}, this);
			this.$return.hide();
		},

		homeRender: function () {
			this.$shityosonList[0].innerHTML = '';
			this.$shityoList.show();
			this.$return.hide();
		},

		detailRender: function () {
			app.shityosons.each(function (shityoson) {
				var shityosonView = new app.ShityosonView({ model: shityoson });
				if (shityoson.attributes.shityo === app.ShityosonFilter) {
					this.$shityosonList.append(shityosonView.render().el);
				}			
			}, this);
			this.$shityoList.hide();
			this.$return.show();
		},

		homeDisp: function () {
			app.ShityoRouter.navigate('', {trigger: true});
		},

		detailDisp: function (e) {
			var shityoName = e.target.innerHTML;
			app.ShityoRouter.navigate(shityoName + "/shityoson", {trigger: true});
		}
	});
})(jQuery);
