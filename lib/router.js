Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTempalte: 'notFound',
	waitOn: function() { return Meteor.subscribe('schools'); }
});

Router.route('/', {name: 'schoolMap'});
Router.route('/schools/:_id', {
	name: 'schoolPage',
	data: function() { return Schools.findOne({ _id: new Meteor.Collection.ObjectID(this.params._id)}); }
});

Router.route('/api', function(){
	var req = this.request;
	var res = this.response;
	var json = Schools.find().fetch();
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(json));
}, {where: 'server'});

Router.onBeforeAction('dataNotFound', {only: 'schoolPage'});