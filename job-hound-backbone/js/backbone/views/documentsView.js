App.Views.DocumentsView = Backbone.View.extend({
  el: ".documents",

  events: {
    'click .plus': 'showForm',
    'submit form': 'submitForm',
    'click .resume': 'renderResume',
    'click .cover_letter': 'displayCoverLetter',
    'click .questions': 'displayQuestions'
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
    var id = $(".active .col:first-child").attr("data-id")
    var data = {
      resume: this.$("[name='resume']").val(),
      cover_letter: this.$("[name='cover_letter']").val(),
      questions: this.$("[name='questions']").val()
    }
    this.collection.get(id).save(data)
    this.emptyForm()
    $(".documentsForm").hide()
  },

  emptyForm: function(){
    $("[name='resume']").val("")
    $("[name='cover_letter']").val("")
    $("[name='questions']").val("")
  },

  setDocument: function(job){
    this.model = job
    this.renderResume();
  },

  renderResume: function() {
    this.$(".document-text").empty()
    this.docTemplate = Handlebars.compile($("#resume-doc").html());
    this.$(".document-text").append(this.docTemplate(this.model.toJSON()));
  },

  displayCoverLetter: function(){
    this.$(".document-text").empty()
    this.docTemplate = Handlebars.compile($("#letter-doc").html());
    this.$(".document-text").append(this.docTemplate(this.model.toJSON()));
  },

  displayQuestions: function(){
    this.$(".document-text").empty()
    this.docTemplate = Handlebars.compile($("#questions-doc").html());
    this.$(".document-text").append(this.docTemplate(this.model.toJSON()));
  }

})
