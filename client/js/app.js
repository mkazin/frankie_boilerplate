var App = new Backbone.Marionette.Application({
  regions: {
    header_region: 'header',
    main_region: 'main#page',
    footer_region: 'footer'
  }
});

App.number = 2;

App.on('whatever', function (whatever) {
	console.log(whatever);
});

App.cunstomFunction = function(my_number) {
	// body..
	//console.log("From My Custom Function");
	App.number += my_number;
	console.log(App.number);
};

module.exports = App;