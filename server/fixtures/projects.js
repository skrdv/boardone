// ***************************************************************
// FIXTURES (generate dummy data for the Projects collection)
// ***************************************************************

Fixtures.Projects = {};

Fixtures.Projects.Create = function () {
  if (Projects.find().count() === 0) {
    Projects.insert({
      title: "Derp",
      content: "Lorem ipsum, herp derp durr."
    });

    Projects.insert({
      title: "Hurr",
      content: "Lorem ipsum, herp derp durr."
    });

    Projects.insert({
      title: "Durr",
      content: "Lorem ipsum, herp derp durr."
    });
  }
}
