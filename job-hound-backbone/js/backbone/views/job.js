App.Views.Job = Backbone.View.extend({
  className: 'job',
  tagName: 'div',

  events: {
    'click .delete': 'deleteJob',
    'click .edit':   'renderEditForm',
    'submit form':   'updateJob',
    'click'      :   'updateDocuments'
  },

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#JobTemplate").html());
    this.editTemplate = Handlebars.compile($("#JobEdit").html());
    this.render();
    $(".job:nth-child(2)").addClass("active");
    App.Views.doc.setDocument(jobs.models[0]);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  deleteJob: function(){
    var confirm = window.confirm("The deletion is permanent. Do you want to proceed?")
    if (confirm) {
      var self = this;
      self.model.destroy();
      self.$el.fadeOut(function() { self.$el.remove(); });
    }
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

  setActive: function(){
    $("main").find(".active").removeClass("active")
    this.$el.addClass("active");
    $(".resume").addClass("active");
  },

  updateDocuments: function(){
    this.setActive();
    App.Views.doc.setDocument(this.model)
  }

});
