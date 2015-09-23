App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function(){
  jobs = new App.Collections.Jobs();
  var jobList = new App.Views.JobList({collection: jobs});
  jobs.fetch()

  new App.Views.AddJob({collection: jobs})
  new App.Views.DocumentsView({collection: jobs})
  new App.Views.AppView({collection: jobs})
});
