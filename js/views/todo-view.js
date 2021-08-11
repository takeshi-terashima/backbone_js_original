var app = app || {};

(function ($) {
	'use strict';
	app.ShityoView = Backbone.View.extend({
		tagName:  'li',
		template: _.template($('#shityo-template').html()),

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
})(jQuery);
