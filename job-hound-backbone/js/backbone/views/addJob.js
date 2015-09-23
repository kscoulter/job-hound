App.Views.AddJob = Backbone.View.extend({
  el: "#newJobForm",

  events: {
    'submit form': 'submitForm'
  },

  initialize: function(){
    this.template = Handlebars.compile($("#addJobTemplate").html())
    this.$el.append(this.template)
  },

  submitForm: function(){
    event.preventDefault();
    var formData = {
      company: this.$("[name='company']").val(),
      title: this.$("[name='title']").val(),
      date_applied: this.$("[name='date_applied']").val(),
      date_replied: this.$("[name='date_replied']").val(),
      phone_interview: this.$("[name='phone_interview']").val(),
      interview: this.$("[name='interview']").val(),
      notes: this.$("[name=notes]").val()
    }
    this.collection.create(formData)
    this.emptyForm()
    $("#newJobForm").toggle()
  },

  emptyForm: function(){
    $("[name='company']").val("")
    $("[name='title']").val("")
    $("[name='date_applied']").val("")
    $("[name='date_replied']").val("")
    $("[name='phone_interview']").val("")
    $("[name='interview']").val("")
  }
})
