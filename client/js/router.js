var App = require('app');

var Home = require('home');

var Router = Backbone.Router.extend({

  routes: {
    "":                "home",
  },

  initialize: function() {
    console.log("Router");
  },

  home: function() {
    App.main_region.show(new Home());
  }

});

module.exports = Router;