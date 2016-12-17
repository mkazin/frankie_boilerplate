var App = require('app');
var Header = require('header');
var Footer = require('footer');
var Router = require('router');

App.addInitializer(function(options){
	App.header_region.show(new Header()); 	
 	App.footer_region.show(new Footer());

  	App.AppRouter = new Router();
  	Backbone.history.start(); 	
});

App.start();