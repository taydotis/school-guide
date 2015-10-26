Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTempalte: 'notFound',
	waitOn: function() { return Meteor.subscribe('schools'); }
});

Router.route('/', {name: 'schoolMap'});
Router.route('/schools/:_id', {
	name: 'schoolPage',
	data: function() { return Schools.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'schoolPage'});