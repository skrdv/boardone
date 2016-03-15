// ***************************************************************
// PUBLICATIONS (For Projects collection)
// ***************************************************************

// PROJECTS INDEX
// -------------------------------------------------------
Meteor.publish('projects', function() {
  return Projects.find();
});

// PROJECT SHOW
// -------------------------------------------------------
Meteor.publish('project', function(id) {
  return Projects.find(id);
});
