App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function(){
  jobs = new App.Collections.Jobs();

  jobs.fetch().then(function(newJobs){
    jobs.models.forEach(function(job){
      var jobView = new App.Views.Job({model: job});
      $(".table-container").append(jobView.$el)
    })
  })
});
