App.Views.JobList = Backbone.View.extend({
  el: "main",

  events: {
    'click .add': 'toggleForm'
  },

  initialize: function(){
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);
  },

  renderAll: function(){
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  },

  renderOne: function(job) {
    var view = new App.Views.Job({ model: job });
    this.$(".table-container").append(view.$el);
  },

  toggleForm: function(){
    $(".overlay").show()
  }


})
