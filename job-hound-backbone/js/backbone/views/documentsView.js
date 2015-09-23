App.Views.DocumentsView = Backbone.View.extend({
  el: ".documents",

  events: {
    'click .plus': 'showForm',
    'submit form': 'submitForm'
  },

  initialize: function(){
    console.log("DocumentsView initialized");
    this.formTemplate = Handlebars.compile($("#documentsForm").html());
    this.$(".document-text").append(this.formTemplate)
  },

  showForm: function() {
    $(".documentsForm").show()
  },

  submitForm: function() {
    event.preventDefault();
    var data = {
      resume: this.$("[name='resume']").val(),
      cover_letter: this.$("[name='cover_letter']").val(),
      questions: this.$("[name='questions']").val()
    }
    console.log(this.model);
    this.model.save(data)
    this.emptyForm()
    $(".documentsForm").hide()
  },

  emptyForm: function(){
    $("[name='resume']").val("")
    $("[name='cover_letter']").val("")
    $("[name='questions']").val("")
  }

})
