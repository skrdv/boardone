// ***************************************************************
// ON SERVER STARTUP
// ***************************************************************

Meteor.startup(function () {
  Fixtures.Documents.Create();
  Fixtures.Projects.Create();
});
