var App = require('app');
var template = require('./template.html');

var Header = Marionette.View.extend({

  tagName: "div",

  className: "header",

  template: template,

  events: {
    //"click .icon":          "open",
  },

  initialize: function (options) {
    //this.listenTo(this.model, "change", this.render);
  }, 

  render: function () {
    this.$el.html(this.template);
    return this; 
  },

  onShow: function () {
    this.$el.find("h2").text("Michael Kazin");
    this.callOutApp();
  },

  callOutApp: function (argument) {
    App.cunstomFunction(3);
  },

  onDestroy: function(){
    console.log("Destroying ", this.className);
  }

});

module.exports = Header;