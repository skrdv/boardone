// ***************************************************************
// ON SERVER STARTUP
// ***************************************************************

Meteor.startup(function () {
  Fixtures.Documents.Create();
  Fixtures.Projects.Create();

  // UploadServer.init({
  //   tmpDir: process.env.PWD + '/.uploads/tmp',
  //   uploadDir: process.env.PWD + '/.uploads/',
  //   checkCreateDirectories: true //create the directories for you
  // });
});
