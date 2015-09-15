App.Collections.Jobs = Backbone.Collection.extend({
  model: App.Models.Job,
  url: "http://127.0.0.1:3000/jobs"
})
