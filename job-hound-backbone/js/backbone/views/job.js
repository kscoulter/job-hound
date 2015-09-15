App.Views.Job = Backbone.View.extend({
  className: 'job',
  tagName: 'div',

  initialize: function(){
    console.log("new view initialized");
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#JobTemplate").html());
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});
