Template.projectEdit.onCreated(function() {
	var self = this;
	self.autorun(function() {
		var projectId = FlowRouter.getParam('projectId');
		self.subscribe("project", projectId);
	});
});

Template.projectEdit.onRendered(function() {
	// Reset form validations
	AutoForm.resetForm('projectForm');
});

Template.projectEdit.onDestroyed(function() {});

Template.projectEdit.helpers({
	project: function() {
		var projectId = FlowRouter.getParam('projectId');
		var project = Projects.findOne({
			_id: projectId
		}) || {};
		return project;
	}
});

Template.projectEdit.events({});
