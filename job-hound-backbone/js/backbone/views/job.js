App.Views.Job = Backbone.View.extend({
  className: 'job',
  tagName: 'div',

  events: {
    'click .edit': 'renderEditForm',
    'submit form': 'updateJob'
  },

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#JobTemplate").html());
    this.editTemplate = Handlebars.compile($("#JobEdit").html());
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    // this.model.save({title: "bruh"})
  },

  renderEditForm: function(){
    this.$el.html(this.editTemplate(this.model.toJSON()))
  },

  updateJob: function(){
    event.preventDefault();
    var data = {
      company: this.$("[name='company']").val(),
      title: this.$("[name='title']").val(),
      date_applied: this.$("[name='date_applied']").val(),
      date_replied: this.$("[name='date_replied']").val(),
      phone_interview: this.$("[name='phone_interview']").val(),
      interview: this.$("[name='interview']").val(),
    }
    this.model.save(data)
  },

});
