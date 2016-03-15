// ***************************************************************
// ROUTES (Projects)
// ***************************************************************

// PROJECTS INDEX
// -------------------------------------------------------
FlowRouter.route('/projects', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "projectsIndex", footer: "footer"});
  },
  name: "projectsIndex"
});

// DOCUMENT NEW
// -------------------------------------------------------
FlowRouter.route('/projects/new', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "projectNew", footer: "footer"});
  },
  name: "projectNew"
});

// DOCUMENT SHOW
// -------------------------------------------------------
FlowRouter.route('/projects/:projectId', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "projectShow", footer: "footer"});
  },
  name: "projectShow"
});

// DOCUMENT EDIT
// -------------------------------------------------------
FlowRouter.route('/projects/:documentId/edit', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "projectEdit", footer: "footer"});
  },
  name: "projectEdit"
});
