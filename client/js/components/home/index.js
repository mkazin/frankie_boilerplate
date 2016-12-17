var App = require('app');
var template = require('./template.html');

var Home = Marionette.View.extend({

  tagName: "div",

  className: "home",

  template: template,

  events: {
    //"click .icon":          "open",
  },

  initialize: function (options) {
    //this.listenTo(this.model, "change", this.render);
    console.log("My Home page");
  }, 

  render: function () {
    this.$el.html(this.template);
    return this; 
  },

  onShow: function () {
    this.triggerEventOnApp();
  },

  triggerEventOnApp: function (argument) {
    App.trigger('whatever', "Francisco Becker");
  },

  onDestroy: function(){
    console.log("Destroying ", this.className);
  }

});

module.exports = Home;