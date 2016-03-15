Template.projectShow.onCreated(function() {
  var self = this;
  self.autorun(function () {
    var projectId = FlowRouter.getParam('projectId');
    self.subscribe("project", projectId);
  });
});

Template.projectShow.onRendered(function() {
});

Template.projectShow.onDestroyed(function() {
});

Template.projectShow.helpers({
  project: function () {
    var projectId = FlowRouter.getParam('projectId');
    var project = Projects.findOne({_id: projectId}) || {};
    return project;
  }
});

Template.projectShow.events ({
});
