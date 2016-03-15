Template.projectsIndex.onCreated(function() {
  this.subscribe('projects');
});

Template.projectsIndex.onRendered(function() {
});

Template.projectsIndex.onDestroyed(function() {
});

Template.projectsIndex.helpers({
  projects: function () {
    return Projects.find({}, {sort: {createdAt: -1}});
  }
});

Template.projectsIndex.events ({
  'click .delete-project': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("Are you sure?")) {
      Projects.remove(item._id);
      console.log("Project deleted")
    }
  }
});
