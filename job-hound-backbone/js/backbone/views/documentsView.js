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
    
  },

  showForm: function() {
    this.formTemplate = Handlebars.compile($("#documentsForm").html());
    this.$(".document-text").html(this.formTemplate(this.model.toJSON()));
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

  removeActive: function(){
    $(".documents").find(".active").removeClass("active")
    // this.$el.addClass("active");
  },

  renderResume: function() {
    this.$(".document-text").empty()
    this.docTemplate = Handlebars.compile($("#resume-doc").html());
    this.$(".document-text").append(this.docTemplate(this.model.toJSON()));
    this.removeActive()
    $(".resume").addClass("active")
  },

  displayCoverLetter: function(){
    this.$(".document-text").empty()
    this.docTemplate = Handlebars.compile($("#letter-doc").html());
    this.$(".document-text").append(this.docTemplate(this.model.toJSON()));
    this.removeActive()
    $(".cover_letter").addClass("active")
  },

  displayQuestions: function(){
    this.$(".document-text").empty()
    this.docTemplate = Handlebars.compile($("#questions-doc").html());
    this.$(".document-text").append(this.docTemplate(this.model.toJSON()));
    this.removeActive()
    $(".questions").addClass("active")
  }

})
