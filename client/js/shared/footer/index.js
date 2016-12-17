var template = require('./template.html');

var Footer = Marionette.View.extend({

  tagName: "div",

  className: "footer",

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
  
  },

  onDestroy: function(){
    console.log("Destroying ", this.className);
  }

});

module.exports = Footer;